---
'@neovici/cosmoz-input': minor
---

Put hint and error text in the layout flow

Non-compact inputs used to reserve 24px below every field for an absolutely
positioned hint or error. Fields without a message looked widely spaced, and
fields with one had their text pressed against the next label. Hint and error
now sit in the flow under the input, and the spacing after a field drops to
12px. A message appearing pushes the content below it down. The `cell`
variant still overlays its error inside the cell.
