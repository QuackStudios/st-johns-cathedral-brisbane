# St John’s Cathedral Brisbane

Current website design, content and image assets, exported from the published Site on 18 November 2026.

## Preview locally

This is a buildless static website. From the repository root:

```sh
python3 -m http.server 8000 --directory dist
```

Open http://localhost:8000. No package installation or build step is required.

## Structure

- `dist/index.html`: homepage, header, menus and footer
- `dist/app.js`: navigation, accessibility preferences and scrolling colour transitions
- `dist/content.js`: content pages
- `dist/today.js`: Brisbane-time daily Service panel and liturgical calendar logic
- `dist/style.css` and `dist/brand.css`: layout and visual styling
- `dist/assets/`: photographs, logos and SVG marks

## Editorial notes

See `FONT_NOTES.md`, `CALENDAR_NOTES.md`, `HOMEPAGE_PHOTOS.md` and `photo-sources.json` for font availability, calendar coverage and image provenance. SangBleu Kingdom webfont files have not been supplied. Festival Service changes and complete local liturgical observances require approved calendar data.

Source snapshot: `a44f8922a4d89ccf859e8e3e8515749608689e9b` (published Site version 39). This GitHub upload does not change the live website.

The original `.openai/hosting.json` is retained for source provenance and identifies the existing Site. Review hosting configuration before creating any separate deployment.
