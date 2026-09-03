---
'@neovici/cosmoz-input': major
---

Adopt Untitled UI design across cosmoz-input, cosmoz-textarea and cosmoz-toggle:

- Complete styles rewrite based on `@neovici/cosmoz-tokens`; removes the
  underline/line layout and all legacy `--cosmoz-input-*` CSS custom
  properties and hooks (use `part` selectors instead)
- New `variant` attribute with `inline` and `cell` (table layout, #297)
  modes, plus `hint`, `compact` and `required` support
- Label no longer floats (`no-label-float` and `always-float-label` props
  removed); hint and error render below the field, absolutely positioned to
  avoid offsetting autocomplete dropdowns (#291)
- Inline-variant label ignores pointer events so clicks reach the input;
  clicking the label focuses the input and places the caret
- cosmoz-toggle redesigned on design tokens with new `label`/`error`
  attributes
- New runtime dependencies: `@neovici/cosmoz-icons`,
  `@neovici/cosmoz-tokens`, `@neovici/cosmoz-tooltip`