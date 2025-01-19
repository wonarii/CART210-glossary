const fs = require('fs');
const path = require('path');

const srcDir = './keywords';
const destFile = 'glossary.md';

async function concatenateMarkdown(srcDir, destFile) {
  const files = fs.readdirSync(srcDir)
    .filter(file => file.endsWith('.md'))
    .map(file => fs.readFileSync(path.join(srcDir, file), 'utf8'))
    .join('\n');

  fs.writeFileSync(destFile, files);
  console.log(`Concatenated Markdown files into ${destFile}`);
}

concatenateMarkdown(srcDir, destFile);
