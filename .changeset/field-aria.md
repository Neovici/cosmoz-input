---
'@neovici/cosmoz-input': minor
---

Field accessibility for `cosmoz-input` and `cosmoz-textarea`:

- The native control gets `aria-invalid="true"` while `invalid` is set, and `aria-describedby` pointing at the visible hint or error.
- `compact` fields keep their label and error for assistive technology (visually hidden), so they have a name and their error is read. The `cell` variant keeps its label the same way instead of `display: none`.
- New `description` property: help text that is read with the field but not shown.
- `cosmoz-textarea` passes `required` to the `<textarea>`, renders `aria-disabled="true|false"`, and observes `compact`.

No visual changes.
