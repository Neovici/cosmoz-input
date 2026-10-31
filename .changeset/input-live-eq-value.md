---
'@neovici/cosmoz-input': patch
---

Keep the input caret and partially typed numbers stable: bind the inner
`#input`/`#textarea` value with `liveEq(value ?? '', numericEquals)` from
`@neovici/cosmoz-utils/directives/live-eq` instead of `live(value ?? '')`. Numeric
host values (which the element coerces to a string) no longer rewrite the
element text and drop the caret on every render, so typing `2.`, trailing
decimal digits and `-`/`e` fragments survive a parent rebinding a
normalized number or undefined. Requires the `liveEq` directive from
`@neovici/cosmoz-utils@6.28.0` (`directives/live-eq`); this PR bumps the
dependency to `^6.28.1`.
