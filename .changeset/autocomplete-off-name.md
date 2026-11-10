---
'@neovici/cosmoz-input': minor
---

Default `autocomplete` to `off` and forward `name` to the native input. Every cosmoz-input shared `id="input"` with no name, so the browser offered values typed in any field (search boxes, login email) in every other field. Fields that should autofill opt in with a token such as `autocomplete="email"`.
