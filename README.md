# RETREATS+ (Retreats Plus)

The world's premier curated directory of clinical wellness retreats, longevity medical sanctuaries, and classical Ayurvedic destinations.

---

## Master Image Selection & Quality Control Standard

Every retreat center profile in RETREATS+ must have **exactly five authentic photographs** adhering to the following category hierarchy:

| Index | Category | Description | Requirement |
| :--- | :--- | :--- | :--- |
| **`gallery[0]`** | **Drone / Aerial View** | High-angle aerial or panoramic overview of the entire property and its natural setting. | **Also set as `heroImage`** |
| **`gallery[1]`** | **Property Grounds** | Exterior estate architecture, landscaping, surrounding nature, or entrance grounds. | Authentic property photography |
| **`gallery[2]`** | **Facility & Clinic** | Wellness pavilion, Ayurvedic treatment suite, medical clinic, or yoga/meditation shala. | Authentic treatment facility |
| **`gallery[3]`** | **Rooms & Suites** | Guest bedroom, suite, or villa interior showing living accommodations. | Authentic interior photography |
| **`gallery[4]`** | **Amenity or Activities** | Swimming pool, farm-to-table dining, thermal hydrotherapy, or mindful activities. | Authentic amenity/activity |

### Quality Control Policies
1. **Zero Generic Stock Photos**: No Unsplash, Shutterstock, iStock, Pexels, or generic royalty-free placeholders.
2. **Zero Logos & Watermarks**: No brand logos, wordmarks, or icon graphics.
3. **Zero Text Graphics & Badges**: No testimonial cards, quote graphics, Michelin/SLH award badges, or promotional flyers.
4. **Center-Specific Fallback**: If a genuine category photo does not exist for a center, use another strong real photo of that same center—never a random substitute.
5. **Exact Count**: Every profile must have exactly 5 photos (`gallery.length === 5`).
6. **Hero Consistency**: `heroImage` must always match `gallery[0]`.

---

## Validation & Verification

Run the automated image validation guardrail:
```bash
npm run validate:images
```

This verifies:
- Exactly 5 authentic photographs per center.
- `heroImage === gallery[0]`.
- Zero generic stock photo domains.
- Zero logos, text graphics, review quote cards, or award badges.

---

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Run production build
npm run build
```
