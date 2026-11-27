# Styling rules

- Define section palettes as semantic HSL tokens in `src/index.css`; scope inverse surfaces by overriding semantic foreground, border and muted tokens so nested content stays readable without per-element color overrides.
- Load external fonts through document-head links, not CSS imports, so the CSS compiler does not resolve remote URLs as local files.