import sharp from "sharp";
import fs from "fs";
import path from "path";

const inputDir = path.join("./public");
const outputDir = path.join("./public/240");

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

const validFormats = [".jpg", ".jpeg", ".png", ".webp"];

for (const file of fs.readdirSync(inputDir)) {
  const ext = path.extname(file).toLowerCase();
  if (!validFormats.includes(ext)) continue;

  const inputPath = path.join(inputDir, file);
  const outputPath = path.join(outputDir, path.parse(file).name + ".webp");

  try {
    await sharp(inputPath)
      .resize(240, 240, { fit: "cover", position: "centre" })
      .webp({ quality: 80 })
      .toFile(outputPath);

    console.log(`✅ ${file} → готово`);
  } catch (err) {
    console.error(`❌ ошибка с ${file}`, err);
  }
}