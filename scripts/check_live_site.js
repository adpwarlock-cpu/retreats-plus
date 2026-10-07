const fs = require('fs');
const path = require('path');
const https = require('https');

const centersFilePath = path.resolve(__dirname, '../src/data/centers.ts');
const content = fs.readFileSync(centersFilePath, 'utf8');
const jsCode = content
  .replace(/import\s+[^;]+;/g, '')
  .replace(/export\s+const\s+(\w+)\s*:\s*RetreatCenter\[\]\s*=\s*/g, 'const $1 = ')
  .replace(/\s+as\s+const/g, '') + '\nmodule.exports = WELLNESS_CENTERS;';
const centers = eval(jsCode);

async function checkSlug(c) {
  const url = `https://retreats-plus.vercel.app/centers/${c.slug}`;
  return new Promise(resolve => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
      let body = '';
      res.on('data', d => body += d);
      res.on('end', () => {
        const hasHero = body.includes(c.heroImage.split('/').pop().split('?')[0]);
        resolve({ slug: c.slug, name: c.name, status: res.statusCode, hasHero });
      });
    }).on('error', e => resolve({ slug: c.slug, status: 'ERR', error: e.message }));
  });
}

async function run() {
  console.log(`Testing live website https://retreats-plus.vercel.app for all ${centers.length} centers...`);
  let passed = 0;
  for (const c of centers) {
    const res = await checkSlug(c);
    const ok = res.status === 200;
    if (ok) passed++;
    console.log(`${ok ? '✅' : '❌'} [HTTP ${res.status}] /centers/${res.slug} - ${res.name} (Hero present: ${res.hasHero})`);
  }
  console.log(`\nResults: ${passed}/${centers.length} centers live and healthy on https://retreats-plus.vercel.app!`);
}

run();
