import { cpSync, rmSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const src = join(process.cwd(), 'public');
const dest = join(process.cwd(), 'dist');

if (!existsSync(src)) {
  console.error('No se encontró el directorio "public" para construir la app web.');
  process.exit(1);
}

rmSync(dest, { recursive: true, force: true });
cpSync(src, dest, { recursive: true });
console.log('Archivos copiados a dist/');
