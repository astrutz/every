# Country Crests

This directory contains SVG files for country coat of arms (crests) that are displayed as decorative backgrounds on country pages.

## File Structure

Each crest file should be named using the **lowercase ISO 3166-1 alpha-2 country code** followed by `.svg`:

```
crests/
  ├── es.svg      # Spain
  ├── fr.svg      # France
  ├── de.svg      # Germany
  ├── it.svg      # Italy
  ├── uk.svg      # United Kingdom
  └── ...
```

## Adding New Crests

1. Find the coat of arms SVG for the desired country
2. Name the file using the lowercase ISO country code (e.g., `es.svg` for Spain)
3. Place the file in this directory (`src/assets/eurovision/crests/`)

## Example Sources for Crests

You can find coat of arms images from:
- Wikimedia Commons (search for "Coat of arms of [Country]")
- Example: https://upload.wikimedia.org/wikipedia/commons/1/17/Coat_of_Arms_of_Leon_with_the_Royal_Crest.svg

## Customization

To adjust the appearance of the crest background:

1. **Size**: Edit the `h-[30%]` class in `country.component.html` (default: 30% of container height)
2. **Opacity**: Edit the `opacity-15` class in `country.component.html` (default: 15% opacity)
3. **Position**: The crest is positioned in the bottom-right corner by default

See `src/app/sites/eurovision/sites/country/country.component.html` for the full implementation.

## Visual Effect

The crests are displayed with:
- Grayscale filter
- Low opacity (15% by default) for a subtle "perforated paper" effect
- Brightness adjustment
- Non-interactive (pointer-events disabled)
- Positioned behind all content (z-index: -10)
