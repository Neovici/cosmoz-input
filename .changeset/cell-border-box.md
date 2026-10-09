---
'@neovici/cosmoz-input': patch
---

The cell variant's border now stays inside the cell. It was added on top of the wrap's 100% width, so the right edge spilled out and the next cell painted over it (an invalid cell showed its red border on three sides).
