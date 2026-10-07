const fs = require('fs');
const path = require('path');

const centersFilePath = path.resolve(__dirname, '../src/data/centers.ts');
const content = fs.readFileSync(centersFilePath, 'utf8');

const jsCode = content
  .replace(/import\s+[^;]+;/g, '')
  .replace(/export\s+const\s+WELLNESS_CENTERS\s*:\s*RetreatCenter\[\]\s*=\s*/, 'const WELLNESS_CENTERS = ')
  .replace(/\s+as\s+const/g, '') + '\nmodule.exports = WELLNESS_CENTERS;';

const allCenters = eval(jsCode);

const verifiedIds = [
  'chiva-som-thailand',
  'como-shambhala-estate-bali',
  'the-farm-san-benito',
  'banjaran-hotsprings-malaysia',
  'tia-wellness-vietnam',
  'song-saa-cambodia',
  'navutu-dreams-cambodia',
  'clp-switzerland',
  'ananda-himalayas',
  'soukya-bangalore-india',
  'six-senses-vana-india',
  'barberyn-reef-sri-lanka',
  'beniya-mukayu-japan',
  'six-senses-ninh-van-bay-vietnam',
  'six-senses-bhutan',
  'gangtey-lodge-bhutan',
  'hoshinoya-kyoto-japan',
  'the-chateau-wellness-resort-malaysia',
  'kalari-kovilakom-india',
  'kalari-rasayana-cgh-earth-kerala',
  'prakriti-shakti-cgh-earth-kerala',
  'swaswara-cgh-earth-karnataka',
  'ayurveda-mana-kerala',
  'bagus-jati-bali',
  'revivo-wellness-bali',
  'amatara-welleisure-thailand',
  'ulpotha-yoga-ayurveda-sri-lanka'
];

const verifiedCenters = allCenters.filter(c => verifiedIds.includes(c.id));
const skippedCenters = allCenters.filter(c => !verifiedIds.includes(c.id));

const header = `import { RetreatCenter } from "@/types/retreat";

/**
 * RETREATS PLUS MASTER IMAGE SELECTION & QUALITY CONTROL STANDARD (RECOVERY.COM BENCHMARK)
 * 
 * Every active retreat center profile features EXACTLY five verified, authentic photographs:
 * [0] Drone shot of entire property (or panoramic aerial/estate exterior) - ALSO heroImage
 * [1] Property (estate grounds / landscape / exterior architecture)
 * [2] Facility (wellness clinic / therapy pavilion / yoga/meditation shala)
 * [3] Rooms (strictly ONE suite / bedroom / villa interior)
 * [4] Amenity / Activities (swimming pool / organic dining / outdoor wellness activities)
 * 
 * Strict Recovery.com Benchmark Enforced:
 * - 100% original, verified photographs of the specific center
 * - Exactly 1 bedroom photograph per center (slot 3)
 * - Zero repeated images across gallery or across centers
 * - Zero generic stock photos (Unsplash, Shutterstock, iStock, Pexels)
 * - Zero crowd-sourced review photos, user selfies, logos, watermarks, or non-facility ceremony images
 * - All centers with uncertain, broken, or crowd-sourced review photos are quarantined below
 *   in SKIPPED_CENTERS_PENDING_VERIFIED_ASSETS for user assistance.
 */
`;

const fileContent = header +
  'export const WELLNESS_CENTERS: RetreatCenter[] = ' + JSON.stringify(verifiedCenters, null, 2) + ';\n\n' +
  '/**\n * QUARANTINED CENTERS PENDING 100% AUTHENTIC/VERIFIED ORIGINAL ASSETS\n * Skipped as per user instructions: no crowd-sourced/repeated photos outside strict guidelines.\n */\n' +
  'export const SKIPPED_CENTERS_PENDING_VERIFIED_ASSETS: RetreatCenter[] = ' + JSON.stringify(skippedCenters, null, 2) + ';\n';

fs.writeFileSync(centersFilePath, fileContent, 'utf8');
console.log('Successfully updated src/data/centers.ts!');
console.log('Active WELLNESS_CENTERS:', verifiedCenters.length);
console.log('Quarantined SKIPPED_CENTERS:', skippedCenters.length);
