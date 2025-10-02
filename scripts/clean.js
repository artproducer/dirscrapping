import { rmSync } from 'node:fs';
import { join } from 'node:path';

rmSync(join(process.cwd(), 'dist'), { recursive: true, force: true });
rmSync(join(process.cwd(), 'android'), { recursive: true, force: true });
console.log('Directorios dist/ y android/ eliminados si existían.');
