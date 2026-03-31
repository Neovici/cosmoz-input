# cosmoz-input

A flexible, themeable input web component built on [@pionjs/pion](https://github.com/nicolo-ribaudo/pion) and [lit-html](https://lit.dev/docs/libraries/standalone-templates/). Supports multiple visual variants, compact mode, validation states, and slotted content.

## Installation

```bash
npm install @neovici/cosmoz-input
```

## Usage

Import the component:

```javascript
import '@neovici/cosmoz-input';
```

Use in HTML:

```html
<!-- Basic input -->
<cosmoz-input label="Email" placeholder="olivia@untitledui.com"></cosmoz-input>

<!-- Required with hint -->
<cosmoz-input label="Email" required hint="This field is required"></cosmoz-input>

<!-- Invalid with error -->
<cosmoz-input label="Email" value="bad" invalid error-message="Please enter a valid email"></cosmoz-input>

<!-- Inline variant -->
<cosmoz-input label="Email" variant="inline"></cosmoz-input>

<!-- Cell variant -->
<cosmoz-input variant="cell" placeholder="Filter..."></cosmoz-input>

<!-- Compact mode (tooltip error) -->
<cosmoz-input compact label="Email" placeholder="Filter..."></cosmoz-input>

<!-- With prefix/suffix icons -->
<cosmoz-input label="Email">
  <svg slot="prefix" ...></svg>
  <svg slot="suffix" ...></svg>
</cosmoz-input>
```

## Attributes

| Attribute         | Type      | Default  | Description                                              |
| ----------------- | --------- | -------- | -------------------------------------------------------- |
| `label`           | `string`  | —        | Label text displayed above the input                     |
| `placeholder`     | `string`  | `' '`    | Placeholder text                                         |
| `value`           | `string`  | —        | Input value                                              |
| `type`            | `string`  | `'text'` | Native input type (`text`, `number`, `color`, etc.)      |
| `variant`         | `string`  | —        | Visual variant: `inline`, `cell`                         |
| `compact`         | `boolean` | `false`  | Hides label/hint/error text; shows tooltip icon instead  |
| `required`        | `boolean` | `false`  | Marks field as required, shows `*` on label              |
| `invalid`         | `boolean` | `false`  | Toggles error state (red border, error message)          |
| `error-message`   | `string`  | —        | Error text shown below input (or in tooltip when compact)|
| `hint`            | `string`  | —        | Helper text below input (hidden when invalid)            |
| `disabled`        | `boolean` | `false`  | Disables input, reduces opacity, `not-allowed` cursor    |
| `readonly`        | `boolean` | `false`  | Makes input read-only                                    |
| `autosize`        | `boolean` | `false`  | Input width adjusts to content length                    |
| `no-spinner`      | `boolean` | `false`  | Hides number input spinner                               |
| `autocomplete`    | `string`  | —        | Native autocomplete attribute                            |
| `maxlength`       | `string`  | —        | Maximum character length                                 |
| `min` / `max`     | `string`  | —        | Number input min/max constraints                         |
| `step`            | `string`  | —        | Number input step value                                  |
| `pattern`         | `string`  | —        | Regex validation pattern                                 |
| `allowed-pattern` | `string`  | —        | Restricts input to matching characters                   |

## Variants

### Default (no variant)

Standard bordered input with label above, hint/error text below, and a tooltip icon.

```html
<cosmoz-input label="Email" hint="We will never share your email"></cosmoz-input>
```

### Inline (`variant="inline"`)

Floating label that translates up on focus or when the input has a value. No border, no hint/error text, no tooltip icon. Underline-style appearance.

```html
<cosmoz-input label="Email" variant="inline"></cosmoz-input>
```

### Cell (`variant="cell"`)

Minimal input for table/grid contexts. No label, thin border, no border-radius. Background highlights on focus.

```html
<cosmoz-input variant="cell" placeholder="Filter..."></cosmoz-input>
```

## Compact mode

Can be combined with any variant. When active:

- **Label**, **hint**, and **error text** are hidden
- A **tooltip icon** is always visible inside the input:
  - Valid state: help icon, tooltip shows `label`
  - Invalid state: info icon (red), tooltip shows `errorMessage`

```html
<cosmoz-input compact label="Email" placeholder="Filter..."></cosmoz-input>
```

## Validation

### Automatic

- On **blur**: `validate()` is called automatically via native `checkValidity()`
- `required` + empty value = invalid

### Imperative API

```javascript
const input = document.querySelector('cosmoz-input');

// Focus the input
input.focus();

// Validate and get result
const isValid = input.validate(); // returns boolean, toggles invalid attribute
```

### External validation

```javascript
const onInput = (e) => {
  const el = e.target;
  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/u.test(el.value);
  el.toggleAttribute('invalid', !valid);
  el.errorMessage = valid ? '' : 'Please enter a valid email';
};
```

```html
<cosmoz-input label="Email" @input="${onInput}"></cosmoz-input>
```

## Slots

| Slot      | Description                          |
| --------- | ------------------------------------ |
| `prefix`  | Content before the input (e.g. icon) |
| `suffix`  | Content after the input (e.g. icon)  |

```html
<cosmoz-input label="Email">
  <svg slot="prefix" ...></svg>
  <svg slot="suffix" ...></svg>
</cosmoz-input>
```

## CSS Parts

| Part      | Element                  |
| --------- | ------------------------ |
| `label`   | `<label>` element        |
| `wrap`    | `.wrap` container        |
| `control` | `.control` inner wrapper |
| `input`   | `<input>` element        |
| `hint`    | Hint `<span>`            |
| `error`   | Error `<span>`           |

## State-driven rendering

| Condition                              | Renders                                      |
| -------------------------------------- | -------------------------------------------- |
| `!compact && label`                    | Label (with `*` if `required`)               |
| `compact` (valid)                      | Tooltip with help icon, shows `label`        |
| `compact` (invalid)                    | Tooltip with info icon (red), shows `errorMessage` |
| `!compact && hint && !invalid`         | Hint text below input                        |
| `!compact && invalid && errorMessage`  | Error text below input (replaces hint)       |

## Development

1. Clone the repository
2. Run `npm install`
3. Start development with `npm run storybook:start`
4. Make changes and verify with tests

## Available Scripts

- `npm run lint` - Run ESLint and TypeScript type checking
- `npm run build` - Build TypeScript to dist/
- `npm run test` - Run all tests
- `npm run test:watch` - Run tests in watch mode
- `npm run storybook:start` - Start Storybook development server
- `npm run storybook:build` - Build static Storybook

## Publishing

This package uses Semantic Release for automated versioning and publishing based on Conventional Commits.
