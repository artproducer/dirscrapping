# dirscrapping
Generador de direcciones aleatorias
/public/index.html

## Ejecutar el proyecto en la web

```bash
npm install
npm start
```

La aplicación quedará disponible en `http://localhost:3000`.

## Crear un APK de Android con Capacitor

1. Instala las dependencias necesarias (esto actualizará el `package-lock.json`):

   ```bash
   npm install
   npm install @capacitor/core @capacitor/android
   npm install -D @capacitor/cli
   ```

2. Inicializa la plataforma de Android dentro del proyecto:

   ```bash
   npx cap add android
   ```

   Esto generará la carpeta `android/` con un proyecto de Android Studio listo para compilar.

3. Copia los archivos web a la plataforma nativa cuando hagas cambios:

   ```bash
   npm run sync:android
   ```

4. Abre el proyecto nativo para compilar el APK:

   ```bash
   npx cap open android
   ```

5. Desde Android Studio ejecuta **Build > Build Bundle(s) / APK(s) > Build APK(s)** para generar el archivo `.apk` de depuración. El APK quedará disponible en `android/app/build/outputs/apk/debug/`.

### Requisitos adicionales

- Android Studio 2022.1 o superior con el SDK de Android 13 o más reciente.
- Java 17 y Gradle Wrapper (se configura automáticamente al abrir el proyecto con Android Studio).
- Un dispositivo o emulador con Android 6.0 (API 23) o superior para las pruebas.
