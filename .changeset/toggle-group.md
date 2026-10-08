---
'@neovici/cosmoz-input': minor
---

Add `cosmoz-toggle-group`: a value picker rendered as a segmented control.

The options are the items themselves — the selection is the element in the
`options` array (the `cosmoz-autocomplete` idiom):

```html
<cosmoz-toggle-group
	.options="${items}"
	.value="${items[1]}"
	.value-property="id"
	label="Range"
	@value-changed="${lift((item)"
	=""
>
	...)} ></cosmoz-toggle-group
>
```

- `options: (I | Option<I>)[]` — a plain item renders itself (strings name
  themselves); `{ value: I, label?, icon?, title?, disabled? }` carries its
  own. `label`/`title` are the value-or-function pair (`cosmoz-utils`
  `invoke`): a string or a function of the item. `icon` is a cosmoz-icons
  factory.
- `value?: I` — the selection; the pick self-commits (the component
  writes its own `value`) and `value-changed` follows
  (`detail = { value, updater }`). Controlled consumers take the write
  over with pion's `lift`: `@value-changed=${lift(setMyValue)}`.
- `valueProperty?: string` — selection key for when option arrays are
  rebuilt; absent, selection compares by identity.
- Keyboard: the selected option is the one tab stop; `ArrowLeft`/`ArrowRight`
  move the selection (wrapping) and focus rides along.
- Disabled per option or for the whole group. Parts: `group`, `option`,
  `selected-option`.
- Typed helper: `toggleGroup(props)` renders the element with a
  `onValueChanged` that receives the whole `value-changed` event.
