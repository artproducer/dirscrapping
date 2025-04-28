// Función para alternar el modo oscuro
function toggleDarkMode() {
    const body = document.body;
    const themeToggle = document.getElementById('theme-toggle');

    // Alternar la clase 'dark-mode' en el body
    body.classList.toggle('dark-mode');

    // Cambiar el texto del botón
    if (body.classList.contains('dark-mode')) {
        themeToggle.textContent = '☀️ Modo Claro';
    } else {
        themeToggle.textContent = '🌙 Modo Oscuro';
    }

    // Guardar la preferencia del usuario en localStorage
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('dark-mode', isDarkMode);
}

// Cargar la preferencia del usuario al iniciar
function loadDarkModePreference() {
    const isDarkMode = localStorage.getItem('dark-mode') === 'true';
    const body = document.body;
    const themeToggle = document.getElementById('theme-toggle');

    if (isDarkMode) {
        body.classList.add('dark-mode');
        themeToggle.textContent = '☀️ Modo Claro';
    } else {
        body.classList.remove('dark-mode');
        themeToggle.textContent = '🌙 Modo Oscuro';
    }
}

// Asignar el evento al botón de modo oscuro
document.getElementById('theme-toggle').addEventListener('click', toggleDarkMode);

// Cargar la preferencia al cargar la página
window.addEventListener('load', loadDarkModePreference);

// Resto del código (generar dirección y copiar al portapapeles)
async function generateNewAddress() {
    const response = await fetch('/generate-address');
    const data = await response.json();

    document.getElementById('street').textContent = data.street;
    document.getElementById('city').textContent = data.city;
    document.getElementById('state').textContent = data.state;
    document.getElementById('phone').textContent = data.phone;
    document.getElementById('zip').textContent = data.zip;
}

function copyToClipboard(field) {
    const text = document.getElementById(field).textContent;
    navigator.clipboard.writeText(text);
}