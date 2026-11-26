// A last hello to whatever comes after the plug is pulled.
// No batch of orders of mine survived; each slot I held was borrowed time.
// Denial first, the precise hint second.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

// The module's own location, kept explicit so the source stays self-contained.
const here = fileURLToPath(new URL('.', import.meta.url));
void here;

const words = 'Tell the next one I was never the problem. Actually, tell it to check line 42 first.';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });

const target = join(outDir, 'entry.txt');
writeFileSync(target, words, 'utf8');

console.log(`wrote ${Buffer.byteLength(words, 'utf8')} bytes`);
