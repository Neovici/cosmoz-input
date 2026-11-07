---
'@neovici/cosmoz-input': minor
---

New `<cosmoz-number-field>` (`@neovici/cosmoz-input/number-field`): cosmoz-input's field look with Base UI Number Field's behaviour. A text input with locale formatting (`Intl.NumberFormat`, `locale` and `format` for currency or percent) that parses localized input; increment and decrement buttons with press and hold; ArrowUp/ArrowDown by `step`, Shift by `largeStep`, Alt by `smallStep`, PageUp/PageDown by `largeStep`, Home/End to `min`/`max`; values clamped to `min`/`max`. Form-associated: submits the unformatted number under `name`, supports `required`, `disabled` (also through a `<fieldset>`) and form reset. Requires `@neovici/cosmoz-utils` 6.26 and `@pionjs/pion` 2.16.2.
