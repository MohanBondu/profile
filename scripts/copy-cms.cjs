const fs = require('fs');
const path = require('path');

const source = process.argv[2] || 'src/cms/config.yml';
const dest = process.argv[3] || 'public/admin/config.yml';

const destDir = path.dirname(dest);
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

fs.copyFileSync(source, dest);
console.log(`Copied ${source} to ${dest}`);