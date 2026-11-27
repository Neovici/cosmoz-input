---
'@neovici/cosmoz-input': minor
---

Show a 1px focus underline (the focus ring's own line weight) on
`variant="inline"` fields instead of no indicator. The floating label sits
on the wrap's top edge when focused, so the default box ring would strike
through the label glyphs; a bottom underline cannot cross it. Keyed on
`:focus-within` so components that adopt these styles without an inner
input (the autocomplete trigger) inherit the same indicator. Needs
`@neovici/cosmoz-tokens` >= 4 for `--cz-color-focus-ring`; with older
tokens the rule is inert and the field keeps today's appearance.
