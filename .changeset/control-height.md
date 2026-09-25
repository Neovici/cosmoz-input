---
'@neovici/cosmoz-input': minor
---

Size the default input with `--cz-control-height-md`

The default variant of `cosmoz-input` and `cosmoz-textarea` uses `text-sm` and
derives its vertical padding from `--cz-control-height-md`, so a single-line
input is 32px tall (was 40px) and lines up with a `md` `cosmoz-button`. Coarse
pointers use `--cz-control-height-xl` with 16px text so iOS Safari doesn't zoom
on focus. The `inline` and `cell` variants are unchanged.
