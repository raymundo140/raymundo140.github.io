import fs from "node:fs";
import path from "node:path";

// Find pdfjs-dist install directory
const pkgPath = require.resolve("pdfjs-dist/package.json");
const pdfjsRoot = path.dirname(pkgPath);

// PDF.js “web” viewer files live here:
const viewerSrc = path.join(pdfjsRoot, "web");

// Where we want them in your site:
const viewerDst = path.join(process.cwd(), "public", "pdfjs");

fs.mkdirSync(viewerDst, { recursive: true });

// Copy viewer files/folders needed
const toCopy = ["viewer.html", "viewer.css", "viewer.mjs", "images"];

for (const name of toCopy) {
  const from = path.join(viewerSrc, name);
  const to = path.join(viewerDst, name);
  fs.cpSync(from, to, { recursive: true });
}

console.log("✅ Copied PDF.js viewer to public/pdfjs");
