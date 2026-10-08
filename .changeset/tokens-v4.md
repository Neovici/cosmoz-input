---
'@neovici/cosmoz-input': minor
---

chore: widen @neovici/cosmoz-tokens range to ^3 || ^4 (FE-1193)

The input package's components are pure `var()` consumers of token surfaces — no `light-dark()` or v4-only tokens in their styles — so the range widens to `^3.4.0 || ^4.0.0` and the components stay compatible with hosts on either tokens major.

`cosmoz-tooltip`'s floor rises to `^1.4.0` (its tokens range takes v4), keeping the tree at a single tokens copy.

The storybook switches themes via `color-scheme` (tokens v4 resolves dark values through `light-dark()`, which follows `color-scheme`; the class toggle alone does nothing) and takes `@neovici/cfg`'s storybook preset (≥ 2.14), which pins the CSS minify target so `light-dark()` survives the build.
