const https = require('https');
const http = require('http');

const mahaCenters = [
  {
    id: 'atmantan-wellness-india',
    name: 'Atmantan Wellness Resort',
    heroImage: 'https://atmantan.com/wp-content/uploads/2021/11/1DX25562-1-scaled-e1638869860430.jpg',
    gallery: [
      'https://atmantan.com/wp-content/uploads/2021/11/1DX25562-1-scaled-e1638869860430.jpg',
      'https://atmantan.com/wp-content/uploads/2021/11/silence1.jpg',
      'https://atmantan.com/wp-content/uploads/2021/12/Yoga-at-Prana-scaled.jpg',
      'https://atmantan.com/wp-content/uploads/2024/09/amaltas-bed-room.jpg',
      'https://atmantan.com/wp-content/uploads/2021/11/Infinity-pool-and-pagoda-scaled-e1638865474706.jpg'
    ]
  },
  {
    id: 'dharana-at-shillim-india',
    name: 'Dharana at Shillim',
    heroImage: 'https://dharanaretreat.com/wp-content/uploads/2026/11/dharana-shillim-aerial-forest-view-desktop.webp',
    gallery: [
      'https://dharanaretreat.com/wp-content/uploads/2026/11/dharana-shillim-aerial-forest-view-desktop.webp',
      'https://dharanaretreat.com/wp-content/uploads/2026/09/dharana-shillim-estate-misty-valley.jpg',
      'https://dharanaretreat.com/wp-content/uploads/2026/09/dharana-healing-space-meditation-room.jpg',
      'https://dharanaretreat.com/wp-content/uploads/2026/09/dharana-villa-four-poster-bedroom.jpg',
      'https://dharanaretreat.com/wp-content/uploads/2026/09/bio-sync-detox-infinity-pool-valley-view.jpg'
    ]
  },
  {
    id: 'fazlani-natures-nest-maharashtra',
    name: 'Fazlani Natures Nest',
    heroImage: 'https://fazlaninaturesnest.com/assets/img/map/fazlani-hero-banner.jpg',
    gallery: [
      'https://fazlaninaturesnest.com/assets/img/map/fazlani-hero-banner.jpg',
      'https://fazlaninaturesnest.com/wp-content/uploads/2026/02/fazlani-1070.jpg',
      'https://fazlaninaturesnest.com/wp-content/uploads/2026/02/fazlani-0900.jpg',
      'https://fazlaninaturesnest.com/wp-content/uploads/2023/09/Premium-Lake-View-Suite-1-1.jpeg',
      'https://fazlaninaturesnest.com/wp-content/uploads/2026/02/fazlani-0635.jpg'
    ]
  },
  {
    id: 'viveda-wellness-village-maharashtra',
    name: 'Viveda Wellness Village',
    heroImage: 'https://vivedawellness.com/wp-content/uploads/2026/05/vievda_wellness_resort_aerial_view.jpg',
    gallery: [
      'https://vivedawellness.com/wp-content/uploads/2026/05/vievda_wellness_resort_aerial_view.jpg',
      'https://vivedawellness.com/wp-content/uploads/2024/10/Viveda-Wellness-Resort-Nashik-India-evening-view-cottage-mobile-1.jpg',
      'https://vivedawellness.com/wp-content/uploads/2026/05/Viveda-Wellness-Resort-meditation-in-dome.jpg',
      'https://vivedawellness.com/wp-content/uploads/2020/05/stay-01.jpg',
      'https://vivedawellness.com/wp-content/uploads/2023/03/1600x797-scaled.jpg'
    ]
  }
];

function check(u) {
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
        resolve({ url: u, status: res.statusCode, size: res.headers['content-length'] });
      });
      req.on('error', e => resolve({ url: u, status: 'ERROR', error: e.message }));
      req.on('timeout', () => { req.destroy(); resolve({ url: u, status: 'TIMEOUT' }); });
    } catch (e) {
      resolve({ url: u, status: 'INVALID', error: e.message });
    }
  });
}

async function run() {
  console.log('Verifying all 4 Maharashtra Centers (20 photos)...');
  let allPass = true;

  for (const c of mahaCenters) {
    console.log(`\n=== ${c.name} (${c.id}) ===`);
    if (c.heroImage !== c.gallery[0]) {
      console.error(`❌ heroImage mismatch: ${c.heroImage} !== ${c.gallery[0]}`);
      allPass = false;
    }
    if (new Set(c.gallery).size !== 5) {
      console.error(`❌ duplicate image within gallery!`);
      allPass = false;
    }
    for (let i = 0; i < c.gallery.length; i++) {
      const res = await check(c.gallery[i]);
      const ok = res.status === 200;
      if (!ok) allPass = false;
      console.log(`  Slot [${i}]: ${ok ? '✅' : '❌'} ${res.status} (${res.size || 'unknown'} B) - ${res.url}`);
    }
  }

  console.log('\n=======================================');
  if (allPass) {
    console.log('🎉 ALL 20 MAHARASHTRA RETREAT IMAGES VERIFIED 200 OK!');
  } else {
    console.error('❌ SOME IMAGES FAILED VERIFICATION');
    process.exit(1);
  }
}

run();
