/**
 * Script to slim down name data files for faster loading
 * Keeps a high-quality subset of names
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_DIR = path.join(__dirname, '../public/data');

// Configuration - adjust these numbers as needed
const LIMITS = {
    surnames: 2000,      // 2000 surnames = plenty of variety
    male_names: 5000,    // 5000 male names
    female_names: 5000   // 5000 female names
};

function slimFile(filename, limit) {
    const filepath = path.join(DATA_DIR, filename);
    const backupPath = path.join(DATA_DIR, `${filename}.backup`);

    console.log(`\nProcessing ${filename}...`);

    // Read original data
    const data = JSON.parse(fs.readFileSync(filepath, 'utf8'));
    console.log(`  Original count: ${data.length}`);

    // Backup original if not already backed up
    if (!fs.existsSync(backupPath)) {
        fs.writeFileSync(backupPath, JSON.stringify(data));
        console.log(`  Backup created: ${backupPath}`);
    }

    // Randomly select subset (shuffle and take first N)
    const shuffled = data.sort(() => Math.random() - 0.5);
    const slimmed = shuffled.slice(0, limit);

    // Sort by romaji for consistency
    slimmed.sort((a, b) => a[2].localeCompare(b[2]));

    // Write slimmed data
    fs.writeFileSync(filepath, JSON.stringify(slimmed));

    const originalSize = fs.statSync(backupPath).size;
    const newSize = fs.statSync(filepath).size;

    console.log(`  New count: ${slimmed.length}`);
    console.log(`  Size: ${(originalSize / 1024 / 1024).toFixed(2)} MB → ${(newSize / 1024).toFixed(0)} KB`);
    console.log(`  Reduction: ${((1 - newSize / originalSize) * 100).toFixed(1)}%`);
}

console.log('=== Slimming Name Data Files ===');

slimFile('surnames.json', LIMITS.surnames);
slimFile('male_names.json', LIMITS.male_names);
slimFile('female_names.json', LIMITS.female_names);

console.log('\n✅ Done! Data files have been optimized.');
console.log('   Original files backed up with .backup extension');
