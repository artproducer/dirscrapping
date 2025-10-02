# Generador de Direcciones - Empaquetado Android

Este proyecto transforma la app web ubicada en `public/` en un APK de Android utilizando [Ionic Capacitor](https://capacitorjs.com/). Se añadió una configuración mínima para que puedas construir la app híbrida directamente desde esta carpeta.

## Requisitos previos

Instala las herramientas necesarias:

- [Node.js 18+](https://nodejs.org/)
- [Android Studio](https://developer.android.com/studio)
  - Incluye el SDK de Android, `adb` y las herramientas de línea de comando.
- Java 17 (Android Studio lo instala automáticamente)
- Un dispositivo o emulador Android para las pruebas.

## Pasos para generar el APK

1. **Instalar dependencias**

   ```bash
   npm install
   ```

2. **Generar los archivos web de producción**

   ```bash
   npm run build
   ```

   El script copia todo lo que está en `public/` a la carpeta `dist/`, que es la que Capacitor usa como paquete web.

3. **Sincronizar el proyecto Android**

   ```bash
   npm run prepare:android
   ```

   Este comando ejecuta `npx cap sync android`, creando (o actualizando) el proyecto Android dentro de la carpeta `android/`.

4. **Abrir Android Studio** (opcional pero recomendado)

   ```bash
   npm run open:android
   ```

   Desde Android Studio puedes compilar y generar el APK o App Bundle (`Build > Build Bundle(s) / APK(s) > Build APK(s)`).

5. **Compilación por línea de comando**

   Si prefieres compilar sin abrir Android Studio, ejecuta:

   ```bash
   cd android
   ./gradlew assembleDebug
   ```

   El APK se generará en `android/app/build/outputs/apk/debug/app-debug.apk`.

## Limpieza

Para eliminar las carpetas generadas (`dist/` y `android/`):

```bash
npm run clean
```

## Personalización de la app

- Cambia el identificador del paquete (`appId`) en `capacitor.config.ts` si necesitas subir la app a Google Play.
- Los recursos web (HTML, CSS y JS) siguen viviendo en `public/`. Modifica esos archivos y vuelve a ejecutar `npm run build` para refrescar la app nativa.

## Nota sobre permisos

La app es puramente estática y no requiere permisos especiales. Si en el futuro necesitas acceso a funcionalidades nativas, puedes añadir plugins de Capacitor y ejecutar nuevamente `npm run prepare:android`.
