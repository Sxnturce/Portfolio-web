import sharp from "sharp";
import path from "path";
import fs from "fs";

const img = path.resolve("src/assets/img");
const output = path.resolve("src/assets/converted");

if (!fs.existsSync(output)) {
  fs.mkdirSync(output, { recursive: true });
}

fs.readdirSync(img).forEach(async (file) => {
  const inputPath = path.join(img, file);
  const outputWeb = path.join(output, file.replace(/\.[^.]+$/, '.webp'));
  const outputAvif = path.join(output, file.replace(/\.[^.]+$/, '.avif'));

  try {
    if (!fs.existsSync(outputWeb)) {
      await sharp(inputPath)
        .webp({ quality: 80 })
        .toFile(outputWeb);
      console.log(`Conversión a WebP completada para: ${file}`);
    }

    if (!fs.existsSync(outputAvif)) {
      await sharp(inputPath)
        .avif({ quality: 50 })
        .toFile(outputAvif);
      console.log(`Conversión a AVIF completada para: ${file}`);
    }
  } catch (err) {
    console.error(`Error procesando ${file}:`, err);
  }
});