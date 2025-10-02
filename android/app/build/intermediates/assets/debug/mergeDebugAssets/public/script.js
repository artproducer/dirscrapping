import { fetchAddress } from './mymodules.js';

// Función para alternar el modo oscuro
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    
    // Guardar preferencia (ya no usa localStorage debido a las restricciones)
    // En producción, podrías usar cookies o sessionStorage si es necesario
}

// Cargar preferencia del usuario al iniciar
function loadDarkModePreference() {
    // Detectar preferencia del sistema
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
        document.body.classList.add('dark-mode');
    }
}

// Asignar evento al botón de modo oscuro
document.getElementById('theme-toggle').addEventListener('click', toggleDarkMode);

// Cargar preferencia al cargar la página
window.addEventListener('load', () => {
    loadDarkModePreference();
    // Generar dirección inicial automáticamente
    generateNewAddress();
});

// Función para generar nueva dirección
async function generateNewAddress() {
    const loading = document.getElementById('loading');
    const content = document.getElementById('address-content');
    const countrySelect = document.getElementById('country-select');
    const selectedCountry = countrySelect.value;
    
    // Mostrar loading
    loading.classList.add('active');
    
    try {
        const data = await fetchAddress(selectedCountry);
        
        // Pequeño delay para efecto visual
        setTimeout(() => {
            // Actualizar datos con animación
            updateFieldWithAnimation('name', data.name);
            updateFieldWithAnimation('street', data.street);
            updateFieldWithAnimation('city', data.city);
            updateFieldWithAnimation('state', data.state);
            updateFieldWithAnimation('phone', data.phone);
            updateFieldWithAnimation('zip', data.zip);
            
            // Ocultar loading
            loading.classList.remove('active');
        }, 500);
        
    } catch (error) {
        console.error('Error:', error);
        loading.classList.remove('active');
        showToast('Error al generar dirección', true);
    }
}

// Función para actualizar campo con animación
function updateFieldWithAnimation(fieldId, value) {
    const element = document.getElementById(fieldId);
    element.style.opacity = '0';
    
    setTimeout(() => {
        element.textContent = value || 'N/A';
        element.style.opacity = '1';
    }, 150);
}

// Función para copiar al portapapeles
async function copyToClipboard(field, event) {
    const text = document.getElementById(field).textContent;
    
    // Verificar que el texto no sea placeholder
    if (text === 'N/A' || text === '-' || text === 'Haz clic en generar') {
        showToast('No hay datos para copiar', true);
        return;
    }
    
    try {
        // Método moderno con clipboard API
        if (navigator.clipboard && navigator.clipboard.writeText) {
            await navigator.clipboard.writeText(text);
            showToast('¡Copiado al portapapeles!');
        } else {
            // Fallback para navegadores más antiguos
            const textarea = document.createElement('textarea');
            textarea.value = text;
            textarea.style.position = 'fixed';
            textarea.style.opacity = '0';
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            showToast('¡Copiado al portapapeles!');
        }
        
        // Animación del botón
        const btn = event?.target?.closest('.copy-btn') || event?.currentTarget;
        if (btn) {
            btn.style.transform = 'scale(1.2)';
            setTimeout(() => {
                btn.style.transform = '';
            }, 200);
        }
    } catch (err) {
        console.error('Error al copiar:', err);
        showToast('Error al copiar al portapapeles', true);
    }
}

// Función para mostrar toast de notificación
function showToast(message, isError = false) {
    const toast = document.getElementById('toast');
    const toastText = toast.querySelector('span');
    
    toastText.textContent = message;
    
    // Cambiar color si es error
    if (isError) {
        toast.style.background = '#ef4444';
    } else {
        toast.style.background = 'var(--success)';
    }
    
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Agregar estilo de transición a los campos
document.addEventListener('DOMContentLoaded', () => {
    const values = document.querySelectorAll('.value');
    values.forEach(value => {
        value.style.transition = 'opacity 0.3s ease';
    });
});

// Exponer funciones utilizadas en los atributos HTML
window.generateNewAddress = generateNewAddress;
window.copyToClipboard = copyToClipboard;
