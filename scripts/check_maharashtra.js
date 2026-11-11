const fs = require('fs');
const path = require('path');

const content = fs.readFileSync(path.resolve(__dirname, '../src/data/centers.ts'), 'utf8');

// Parse centers safely
const wellnessStart = content.indexOf('export const WELLNESS_CENTERS: RetreatCenter[] = [');
const skippedStart = content.indexOf('export const SKIPPED_CENTERS_PENDING_VERIFIED_ASSETS: RetreatCenter[] = [');

const wellnessCode = 'const WELLNESS_CENTERS = ' + content.substring(
  wellnessStart + 'export const WELLNESS_CENTERS: RetreatCenter[] = '.length,
  skippedStart
).trim().replace(/;$/, '') + '; module.exports = { WELLNESS_CENTERS };';

const skippedCode = 'const SKIPPED_CENTERS = ' + content.substring(
  skippedStart + 'export const SKIPPED_CENTERS_PENDING_VERIFIED_ASSETS: RetreatCenter[] = '.length
).trim().replace(/;$/, '') + '; module.exports = { SKIPPED_CENTERS };';

const { WELLNESS_CENTERS } = eval(wellnessCode);
const { SKIPPED_CENTERS } = eval(skippedCode);

console.log('Active WELLNESS_CENTERS count:', WELLNESS_CENTERS.length);
console.log('SKIPPED_CENTERS count:', SKIPPED_CENTERS.length);

const isMaharashtra = (c) => {
  const loc = c.location || {};
  const txt = `${c.id} ${c.slug} ${c.name} ${loc.region || ''} ${loc.city || ''} ${loc.country || ''}`.toLowerCase();
  return (
    (loc.region && loc.region.toLowerCase().includes('maharashtra')) ||
    txt.includes('maharashtra') ||
    txt.includes('pune') ||
    txt.includes('lonavala') ||
    txt.includes('shillim') ||
    txt.includes('mumbai') ||
    txt.includes('nashik') ||
    txt.includes('mulshi') ||
    txt.includes('alibaug') ||
    txt.includes('karjat') ||
    txt.includes('igatpuri')
  );
};

const activeMaha = WELLNESS_CENTERS.filter(isMaharashtra);
const skippedMaha = SKIPPED_CENTERS.filter(isMaharashtra);

console.log('\n=== ACTIVE MAHARASHTRA CENTERS (' + activeMaha.length + ') ===');
activeMaha.forEach(c => {
  console.log(`- [${c.id}] ${c.name} (${c.location.city}, ${c.location.region})`);
});

console.log('\n=== SKIPPED MAHARASHTRA CENTERS (' + skippedMaha.length + ') ===');
skippedMaha.forEach(c => {
  console.log(`- [${c.id}] ${c.name} (${c.location.city}, ${c.location.region})`);
  console.log('  Hero:', c.heroImage);
  c.gallery.forEach((g, i) => console.log(`   [${i}] ${g}`));
});
