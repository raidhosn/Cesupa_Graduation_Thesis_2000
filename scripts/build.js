import fs from 'fs/promises';
import path from 'path';

const root = process.cwd();
const dist = path.join(root, 'dist');

async function ensureDir(p) {
  await fs.mkdir(p, { recursive: true });
}

async function copyFile(src, dest) {
  try {
    await ensureDir(path.dirname(dest));
    await fs.copyFile(src, dest);
  } catch (err) {
    console.error(`Warning copying file ${src} -> ${dest}:`, err.message);
  }
}

async function copyDir(srcDir, destDir) {
  try {
    const items = await fs.readdir(srcDir, { withFileTypes: true });
    await ensureDir(destDir);
    for (const it of items) {
      const srcPath = path.join(srcDir, it.name);
      const destPath = path.join(destDir, it.name);
      if (it.isDirectory()) {
        await copyDir(srcPath, destPath);
      } else if (it.isFile()) {
        await copyFile(srcPath, destPath);
      }
    }
  } catch (err) {
    console.error(`Warning copying dir ${srcDir} -> ${destDir}:`, err.message);
  }
}

async function main() {
  try {
    // Ensure dist exists
    await ensureDir(dist);

    // Copy images and www.oocities.org_files if present
    const imagesSrc = path.join(root, 'images');
    const oocitiesSrc = path.join(root, 'www.oocities.org_files');

    await copyDir(imagesSrc, path.join(dist, 'images'));
    await copyDir(oocitiesSrc, path.join(dist, 'www.oocities.org_files'));

    // Copy HTML pages matching capitulo*.html and specific files
    const files = await fs.readdir(root);
    const htmlMatches = files.filter(f => /^capitulo.*\.html$/i.test(f));
    const specific = ['consideracoes.html', 'bibliografia.html', 'glossario.html'];
    const toCopy = [...htmlMatches, ...specific];

    for (const f of toCopy) {
      const src = path.join(root, f);
      const dest = path.join(dist, f);
      try {
        const stat = await fs.stat(src);
        if (stat.isFile()) await copyFile(src, dest);
      } catch (err) {
        // ignore missing files to mimic original behavior
      }
    }

    console.log('Post-build copy completed.');
  } catch (err) {
    console.error('Build post-processing failed:', err);
  }
}

main();
