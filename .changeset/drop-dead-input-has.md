---
'@neovici/cosmoz-input': patch
---

Drop always-true :has(#input) wrappers in cell variant rules. Every cosmoz-input instance contains #input, so the wrappers never changed matches inside the component - but they prevented the sheet's non-interactive variant rules from applying to render()/styles() consumers that don't render an input (e.g. select-style triggers).
