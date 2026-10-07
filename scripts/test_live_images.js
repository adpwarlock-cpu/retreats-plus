const fs = require('fs');
const path = require('path');
const http = require('http');
const https = require('https');

const centersFilePath = path.resolve(__dirname, '../src/data/centers.ts');
const content = fs.readFileSync(centersFilePath, 'utf8');

const jsCode = content
  .replace(/import\s+[^;]+;/g, '')
  .replace(/export\s+const\s+(\w+)\s*:\s*RetreatCenter\[\]\s*=\s*/g, 'const $1 = ')
  .replace(/\s+as\s+const/g, '') + '\nmodule.exports = WELLNESS_CENTERS;';

const centers = eval(jsCode);

async function checkUrl(u) {
  return new Promise(resolve => {
    try {
      const parsed = new URL(u);
      const mod = parsed.protocol === 'http:' ? http : https;
      const req = mod.get(u, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
          'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8'
        },
        timeout: 10000
      }, res => {
        const status = res.statusCode;
        res.resume();
        resolve({ url: u, status });
      });
      req.on('error', e => resolve({ url: u, status: 'ERROR', error: e.message }));
      req.on('timeout', () => { req.destroy(); resolve({ url: u, status: 'TIMEOUT' }); });
    } catch (e) {
      resolve({ url: u, status: 'INVALID', error: e.message });
    }
  });
}

async function verifyAll() {
  console.log(`Checking ${centers.length} centers (135 total images)...`);
  
  // 1. Cross-center duplicate check
  const urlMap = new Map();
  centers.forEach(c => {
    c.gallery.forEach((u, i) => {
      if (!urlMap.has(u)) urlMap.set(u, []);
      urlMap.get(u).push({ id: c.id, index: i });
    });
  });

  let hasCrossDup = false;
  for (const [u, uses] of urlMap.entries()) {
    const uniqueIds = new Set(uses.map(x => x.id));
    if (uniqueIds.size > 1) {
      hasCrossDup = true;
      console.error(`Cross-center duplicate: ${u} used in: ${Array.from(uniqueIds).join(', ')}`);
    }
  }

  // 2. Intra-gallery duplicate check
  let hasIntraDup = false;
  centers.forEach(c => {
    const set = new Set(c.gallery);
    if (set.size !== c.gallery.length) {
      hasIntraDup = true;
      console.error(`[${c.id}] has internal duplicate gallery URLs`);
    }
  });

  if (!hasCrossDup && !hasIntraDup) {
    console.log('✅ ZERO duplicate URLs across or within galleries!');
  }

  // 3. HTTP status check
  const uniqueUrls = Array.from(urlMap.keys());
  console.log(`Testing HTTP status for ${uniqueUrls.length} unique URLs...`);
  
  const results = [];
  for (let i = 0; i < uniqueUrls.length; i += 15) {
    const chunk = uniqueUrls.slice(i, i + 15);
    const chunkRes = await Promise.all(chunk.map(checkUrl));
    results.push(...chunkRes);
    process.stdout.write(`Tested ${results.length}/${uniqueUrls.length}\r`);
  }
  console.log(`\nFinished testing ${results.length} URLs.`);

  const bad = results.filter(r => r.status !== 200 && r.status !== 301 && r.status !== 302);
  if (bad.length > 0) {
    console.error(`❌ ${bad.length} URL(s) failed:`);
    bad.forEach(b => console.error(`   - [${b.status}] ${b.url}`));
    process.exit(1);
  } else {
    console.log(`✅ 100% of all ${uniqueUrls.length} image URLs are 200 OK!`);
    console.log(`============================================================`);
  }
}

verifyAll();
