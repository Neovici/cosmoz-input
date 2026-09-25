---
'@neovici/cosmoz-input': minor
---

Match the 32px button height

The default variant of `cosmoz-input` and `cosmoz-textarea` uses `text-sm` with
6px vertical padding, so a single-line input is 32px tall (was 40px) and lines
up with the default `cosmoz-button`. Coarse pointers keep the previous 16px
text and 40px height so iOS Safari doesn't zoom on focus. The `inline` and
`cell` variants are unchanged.
