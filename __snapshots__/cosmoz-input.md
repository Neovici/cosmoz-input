# `cosmoz-input`

#### `render`

```html
<div
  class="float"
  part="float"
>
</div>
<div
  class="wrap"
  part="wrap"
>
  <slot name="prefix">
  </slot>
  <div
    class="control"
    part="control"
  >
    <input
      id="input"
      part="input"
      placeholder=" "
      type="text"
    >
  </div>
  <slot name="suffix">
  </slot>
</div>
<div
  class="line"
  part="line"
>
</div>

```

#### `render label and value`

```html
<div
  class="float"
  part="float"
>
</div>
<div
  class="wrap"
  part="wrap"
>
  <slot name="prefix">
  </slot>
  <div
    class="control"
    part="control"
  >
    <input
      id="input"
      part="input"
      placeholder=" "
      type="text"
    >
    <label
      for="input"
      part="label"
    >
      Label
    </label>
  </div>
  <slot name="suffix">
  </slot>
</div>
<div
  class="line"
  part="line"
>
</div>

```

#### `render errorMessage`

```html
<div
  class="float"
  part="float"
>
</div>
<div
  class="wrap"
  part="wrap"
>
  <slot name="prefix">
  </slot>
  <div
    class="control"
    part="control"
  >
    <input
      id="input"
      part="input"
      placeholder=" "
      type="text"
    >
  </div>
  <slot name="suffix">
  </slot>
</div>
<div
  class="line"
  part="line"
>
</div>
<div
  class="error"
  part="error"
>
  Something is wrong!
</div>

```

