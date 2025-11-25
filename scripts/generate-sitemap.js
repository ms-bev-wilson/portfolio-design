#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const pkgPath = path.join(__dirname, '..', 'package.json');
const pkg = require(pkgPath);

const homepage = (pkg.homepage || 'http://localhost:3000').replace(/\/$/, '');
const buildDir = path.join(__dirname, '..', 'build');

const urls = [
  homepage + '/',
];

const now = new Date().toISOString();

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  urls
    .map(
      (u) =>
        `  <url>\n    <loc>${u}</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.8</priority>\n  </url>`
    )
    .join('\n') +
  `\n</urlset>`;

if (!fs.existsSync(buildDir)) {
  console.error('Build directory not found. Run `npm run build` first.');
  process.exit(1);
}

const sitemapPath = path.join(buildDir, 'sitemap.xml');
fs.writeFileSync(sitemapPath, sitemap, 'utf8');
console.log(`Wrote sitemap to ${sitemapPath}`);

// Copy robots.txt into build if present
const robotsSrc = path.join(__dirname, '..', 'robots.txt');
const robotsDest = path.join(buildDir, 'robots.txt');
if (fs.existsSync(robotsSrc)) {
  fs.copyFileSync(robotsSrc, robotsDest);
  console.log(`Copied robots.txt to ${robotsDest}`);
} else {
  console.warn('No robots.txt found at project root; skipping copy.');
}

// done
process.exit(0);
