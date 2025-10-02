import http from 'http';
import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Función para obtener una dirección aleatoria desde una API
 * @param {string} country - Código del país (us, de, gb, etc.)
 */
async function fetchAddress(country = 'de') {
    return new Promise((resolve, reject) => {
        // Usamos la API gratuita de Random User Generator
        const options = {
            hostname: 'randomuser.me',
            path: `/api/?nat=${country}&inc=location,phone`,
            method: 'GET',
            headers: {
                'User-Agent': 'Mozilla/5.0'
            }
        };

        const req = https.request(options, (res) => {
            let data = '';

            res.on('data', (chunk) => {
                data += chunk;
            });

            res.on('end', () => {
                try {
                    const json = JSON.parse(data);
                    const result = json.results[0];
                    const location = result.location;
                    
                    const addressData = {
                        street: `${location.street.number} ${location.street.name}`,
                        city: location.city,
                        state: location.state,
                        phone: result.phone.replace(/\D/g, ''), // Elimina caracteres no numéricos
                        zip: location.postcode.toString()
                    };

                    // Guarda los datos en un archivo JSON
                    const dataDir = path.join(__dirname, 'data');
                    if (!fs.existsSync(dataDir)) {
                        fs.mkdirSync(dataDir, { recursive: true });
                    }
                    fs.writeFileSync(
                        path.join(dataDir, 'address.json'), 
                        JSON.stringify(addressData, null, 2)
                    );

                    resolve(addressData);
                } catch (error) {
                    console.error('Error parsing response:', error);
                    reject(error);
                }
            });
        });

        req.on('error', (error) => {
            console.error('Error fetching address:', error);
            resolve({
                street: "N/A",
                city: "N/A",
                state: "N/A",
                phone: "N/A",
                zip: "N/A"
            });
        });

        req.end();
    });
}

// Crear servidor HTTP
const server = http.createServer(async (req, res) => {
    // Endpoint para generar dirección
    if (req.url.startsWith('/generate-address') && req.method === 'GET') {
        // Extraer el parámetro del país de la URL
        const urlParams = new URL(req.url, `http://${req.headers.host}`);
        const country = urlParams.searchParams.get('country') || 'de';
        
        const addressData = await fetchAddress(country);
        res.writeHead(200, { 
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        });
        res.end(JSON.stringify(addressData));
        return;
    }

    // Servir archivos estáticos
    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);
    const extname = path.extname(filePath);
    
    const contentTypes = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'text/javascript',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.svg': 'image/svg+xml'
    };

    const contentType = contentTypes[extname] || 'text/html';

    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === 'ENOENT') {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('<h1>404 - Página no encontrada</h1>');
            } else {
                res.writeHead(500);
                res.end(`Error del servidor: ${err.code}`);
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`🚀 Servidor ejecutándose en http://localhost:${PORT}`);
});

process.on('SIGINT', () => {
    console.log('\n👋 Cerrando servidor...');
    server.close(() => {
        console.log('✅ Servidor cerrado correctamente');
        process.exit(0);
    });
});