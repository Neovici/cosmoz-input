---
'@neovici/cosmoz-input': minor
---

Modern input states

- Solid `bg-primary` surface with `shadow-xs`, so inputs read as fields on
  gray cards instead of taking the card color
- Hover darkens the border one step (not on disabled, read-only, invalid or
  `inline`)
- Disabled replaces `opacity: 0.5` with a `bg-disabled-subtle` fill,
  `border-disabled` and `text-disabled`, so the label stays readable
- Read-only gets a subtle `bg-secondary` fill and `border-secondary`, and keeps
  the focus ring
- Labels use medium weight; the floating `inline` label stays regular
- Autofilled inputs keep their own colors instead of the browser tint
- `inline` and `cell` variants keep a transparent background
