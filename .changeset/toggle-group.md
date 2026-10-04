---
'@neovici/cosmoz-input': minor
---

Adds `cosmoz-toggle-group`

A value picker rendered as a segmented control - the input concerns of `cosmoz-tabs-next`'s segmented variant, on their own: a `value` property in, a cancelable `value-changed` (`detail = { value }`, `preventDefault()` vetoes) and a `change` (`detail = value`) out, radio semantics on the items (`role="radiogroup"` on the group, `aria-checked` per option, `aria-label` via `label`), disabled per option or for the whole group.

Rendered from `options`: strings render as label and value; `{ value, label, disabled }` objects carry both. Rendering is controlled - the consumer writes the committed value back (attribute or property), the component never changes it on its own.
