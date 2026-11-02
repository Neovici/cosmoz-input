---
'@neovici/cosmoz-input': patch
---

cosmoz-toggle-group follows the radio group contract more closely: with no value, the first enabled option is the tab stop and an arrow selects the first or last option; arrows skip disabled options; ArrowUp and ArrowDown work like ArrowLeft and ArrowRight; there's no empty `aria-label` when `label` is unset; icon-only options are named by their `title`. Options wrap on narrow screens.
