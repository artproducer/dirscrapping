# DirScrapping - Construcción de APK

Este repositorio ahora incluye un proyecto Android nativo que empaqueta la aplicación web existente dentro de un `WebView`. El objetivo es que puedas abrir la carpeta `android` en Android Studio y generar un APK listo para instalar.

## Estructura clave

- `android/` – Proyecto Android (Gradle) que renderiza el contenido HTML/JS desde `android/app/src/main/assets/www/`.
- `android/app/src/main/java/com/gendir/generator/MainActivity.java` – Actividad principal con el `WebView` y un puente JavaScript para copiar texto al portapapeles.
- `android/app/src/main/assets/www/` – Archivos estáticos de la aplicación (HTML, CSS y JS).

## Requisitos previos

1. Android Studio Flamingo o superior.
2. Android SDK 34 instalado.
3. Conexión a Internet para que Gradle descargue las dependencias la primera vez.

## Pasos para generar el APK

1. **Clona el repositorio** (o actualiza los cambios si ya lo tenías clonado).
2. **Abre Android Studio** y selecciona **“Open an Existing Project”**. Apunta a la carpeta [`android`](./android).
3. Deja que Android Studio sincronice Gradle y descargue las dependencias necesarias.
4. En la barra de herramientas, selecciona el tipo de compilación `release` o `debug` según necesites.
5. Ejecuta **Build ▸ Build Bundle(s) / APK(s) ▸ Build APK(s)**. El APK se generará en `android/app/build/outputs/apk/`.

> 💡 Si Android Studio te indica que falta el *Gradle Wrapper*, puedes generarlo desde **File ▸ Sync Project with Gradle Files** o ejecutando `gradle wrapper` dentro de la carpeta `android` (en un entorno con acceso a Internet).

## Personalización

- Para modificar el comportamiento offline o los datos, edita `android/app/src/main/assets/www/offline-database.js`.
- Los estilos de la interfaz están en `android/app/src/main/assets/www/styles.css`.
- Si necesitas cambiar el nombre del paquete o el identificador, ajusta `applicationId` y `namespace` en `android/app/build.gradle`.

## Generación por línea de comandos (opcional)

Una vez que Android Studio haya descargado las dependencias, también puedes crear el APK ejecutando:

```bash
cd android
./gradlew assembleRelease
```

El resultado estará en `android/app/build/outputs/apk/release/`.
