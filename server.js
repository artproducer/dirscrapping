// Importación de módulos necesarios
import { chromium } from 'playwright-core'; // Para controlar el navegador Chromium
import fs from 'fs'; // Para operaciones de sistema de archivos
import http from 'http'; // Para crear un servidor HTTP
import path from 'path'; // Para manejar rutas de archivos
import { fileURLToPath } from 'url'; // Para convertir URL de archivo a ruta de sistema

// Obtener la ruta del archivo actual y su directorio
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Iniciar el navegador Chromium en modo sin cabeza (headless)
let browser;
(async () => {
    browser = await chromium.launch({ headless: true }); // Inicia el navegador una sola vez
})();

/**
 * Función para obtener una dirección aleatoria desde un sitio web.
 * @returns {Object} Un objeto con la dirección, ciudad, estado, teléfono y código postal.
 */
async function fetchAddress() {
    try {
        const page = await browser.newPage(); // Abre una nueva página en el navegador

        // Navega a la página que genera direcciones aleatorias en EE. UU.
        await page.goto('https://www.bestrandoms.com/random-address-in-de?quantity=1', { waitUntil: 'domcontentloaded' });
        await page.waitForSelector("li p:nth-of-type(1) span"); // Espera a que el selector esté disponible

        // Extrae los datos de la dirección desde la página
        const addressData = await page.evaluate(() => {
            // Obtiene el número de teléfono y elimina los guiones
            const phoneWithDashes = document.querySelector("li p:nth-of-type(4) span")?.innerText.replace("Phone number:", "").trim() || "N/A";
            const phoneWithoutDashes = phoneWithDashes.replace(/-/g, ''); // Elimina todos los guiones

            // Retorna un objeto con los datos de la dirección
            return {
                street: document.querySelector("li p:nth-of-type(1) span")?.innerText.replace("Street:", "").trim() || "N/A",
                city: document.querySelector("li p:nth-of-type(2) span")?.innerText.replace("City:", "").trim() || "N/A",
                state: document.querySelector("li p:nth-of-type(3) span")?.innerText.replace("State/province/area:", "").trim() || "N/A",
                phone: phoneWithoutDashes, // Usa el número de teléfono sin guiones
                zip: document.querySelector("li p:nth-of-type(5) span")?.innerText.replace("Zip code:", "").trim() || "N/A"
            };
        });

        await page.close(); // Cierra la página después de obtener los datos

        // Guarda los datos de la dirección en un archivo JSON
        fs.writeFileSync(path.join(__dirname, 'data', 'address.json'), JSON.stringify(addressData, null, 2));
        return addressData; // Retorna los datos de la dirección
    } catch (error) {
        console.error('Error fetching address:', error); // Manejo de errores
        return {
            street: "N/A",
            city: "N/A",
            state: "N/A",
            phone: "N/A",
            zip: "N/A"
        };
    }
}

// Crear un servidor HTTP
const server = http.createServer(async (req, res) => {
    // Si la solicitud es para generar una dirección
    if (req.url === '/generate-address' && req.method === 'GET') {
        const addressData = await fetchAddress(); // Obtiene los datos de la dirección
        res.writeHead(200, { 'Content-Type': 'application/json' }); // Establece el encabezado de la respuesta
        res.end(JSON.stringify(addressData)); // Envía los datos en formato JSON
    } else {
        // Sirve archivos estáticos (HTML, CSS, JS) desde el directorio 'public'
        const filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);
        const extname = path.extname(filePath); // Obtiene la extensión del archivo
        let contentType = 'text/html'; // Tipo de contenido predeterminado

        // Determina el tipo de contenido según la extensión del archivo
        switch (extname) {
            case '.css':
                contentType = 'text/css';
                break;
            case '.js':
                contentType = 'text/javascript';
                break;
            case '.json':
                contentType = 'application/json';
                break;
        }

        // Lee el archivo solicitado y lo sirve
        fs.readFile(filePath, (err, content) => {
            if (err) {
                if (err.code === 'ENOENT') {
                    // Si el archivo no existe, devuelve un error 404
                    res.writeHead(404, { 'Content-Type': 'text/html' });
                    res.end('<h1>404 Not Found</h1>');
                } else {
                    // Si hay otro error, devuelve un error 500
                    res.writeHead(500);
                    res.end(`Server Error: ${err.code}`);
                }
            } else {
                // Si el archivo existe, lo envía con el tipo de contenido adecuado
                res.writeHead(200, { 'Content-Type': contentType });
                res.end(content, 'utf-8');
            }
        });
    }
});

// Inicia el servidor en el puerto 3000
server.listen(3000, () => console.log('Servidor en http://localhost:3000'));

// Cierra el navegador cuando el proceso termina (por ejemplo, con Ctrl+C)
process.on('SIGINT', async () => {
    if (browser) await browser.close(); // Cierra el navegador si está abierto
    process.exit(); // Termina el proceso
});