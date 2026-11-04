---
'@neovici/cosmoz-input': patch
---

Slotted controls (a `select`, `button`, link or anything with `tabindex`) keep their own clicks. Before, a mousedown on them was redirected to the inner input, so a currency `<select>` in the suffix never opened.
