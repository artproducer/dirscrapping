# Generador de Direcciones - APK nativa sin Node.js

Este repositorio ahora incluye un proyecto de Android Studio listo para empaquetar la web estática ubicada en `public/` dentro de una APK sin depender de Node.js ni de Capacitor. El módulo `app` integra un `WebView` que carga el contenido desde `app/src/main/assets/www/`.

## Estructura clave

```
public/                      # Fuente original de la app web
android/app/src/main/assets/www/  # Copia de los archivos web incluidos en la APK
android/app/src/main/java/...     # Código Java del contenedor WebView
```

Cuando modifiques la web en `public/`, copia los cambios a `android/app/src/main/assets/www/` antes de compilar (por ejemplo, usando `cp -R public/* android/app/src/main/assets/www/`).

## Requisitos

- [Android Studio](https://developer.android.com/studio) (incluye Gradle y el SDK necesario).
- JDK 17+ (instalado automáticamente con Android Studio).

## Compilar el APK con Android Studio

1. Abre Android Studio y selecciona **Open an Existing Project**.
2. Elige la carpeta `android/` de este repositorio.
3. Espera a que Gradle sincronice las dependencias.
4. Compila la app desde **Build > Build Bundle(s) / APK(s) > Build APK(s)**.
5. Encuentra el APK generado en `android/app/build/outputs/apk/debug/app-debug.apk` (o `release/` si construyes en modo de lanzamiento).

## Compilar desde la terminal (sin abrir Android Studio)

1. Sitúate en la carpeta `android/`:
   ```bash
   cd android
   ```
2. Genera el wrapper de Gradle la primera vez (si aún no existe):
   ```bash
   gradle wrapper
   ```
3. Usa el wrapper para compilar la APK de depuración:
   ```bash
   ./gradlew assembleDebug
   ```

El resultado quedará en `app/build/outputs/apk/debug/app-debug.apk`.

## Personalización

- Cambia el identificador del paquete en `android/app/build.gradle` (`applicationId`) si necesitas publicar la app.
- Ajusta el nombre de la app editando `android/app/src/main/res/values/strings.xml`.
- La pantalla principal está definida en `MainActivity.java` y `activity_main.xml`. Puedes habilitar funcionalidades nativas adicionales desde allí.

## Actualización de los assets

Para mantener sincronizados los archivos de la web dentro de la APK, ejecuta después de cada cambio:

```bash
rm -rf android/app/src/main/assets/www/*
cp -R public/* android/app/src/main/assets/www/
```

No se requieren dependencias de Node.js en este flujo; sólo Gradle/Android Studio participan en la construcción del APK.
