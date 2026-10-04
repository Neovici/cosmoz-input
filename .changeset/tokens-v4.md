---
'@neovici/cosmoz-input': major
---

chore: upgrade @neovici/cosmoz-tokens to ^4 (FE-1193)

The toggle-group's control height comes from the v4-only `--cz-control-height-*` tokens, so the range floor rises to `^4.8.0`; `cosmoz-tooltip`'s floor rises with it (`^1.4.0`, whose tokens range takes v4) so the tree resolves a single tokens copy.

Tokens v4 resolves dark semantic values through `light-dark()`, which follows the document's `color-scheme` — callers that flip dark mode must set `documentElement.style.colorScheme` (the class toggle alone does nothing). The storybook switches themes via `color-scheme` and pins the CSS minify target so `light-dark()` survives the build (`@neovici/cfg`'s storybook preset, ≥ 2.14).
