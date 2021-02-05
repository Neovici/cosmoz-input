# `cosmoz-input`

#### `render`

```html
<div
  class="float"
  part="input-float"
>
</div>
<div
  class="wrap"
  part="input-wrap"
>
  <slot name="prefix">
  </slot>
  <div
    class="control"
    part="input-control"
  >
    <input
      id="input"
      part="input-input"
      placeholder=" "
      type="text"
    >
  </div>
  <slot name="suffix">
  </slot>
</div>
<div
  class="line"
  part="input-line"
>
</div>

```

#### `render label and value`

```html
<div
  class="float"
  part="input-float"
>
</div>
<div
  class="wrap"
  part="input-wrap"
>
  <slot name="prefix">
  </slot>
  <div
    class="control"
    part="input-control"
  >
    <input
      id="input"
      part="input-input"
      placeholder=" "
      type="text"
    >
    <label
      for="input"
      part="input-label"
    >
      Label
    </label>
  </div>
  <slot name="suffix">
  </slot>
</div>
<div
  class="line"
  part="input-line"
>
</div>

```

#### `render errorMessage`

```html
<div
  class="float"
  part="input-float"
>
</div>
<div
  class="wrap"
  part="input-wrap"
>
  <slot name="prefix">
  </slot>
  <div
    class="control"
    part="input-control"
  >
    <input
      id="input"
      part="input-input"
      placeholder=" "
      type="text"
    >
  </div>
  <slot name="suffix">
  </slot>
</div>
<div
  class="line"
  part="input-line"
>
</div>
<div
  class="error"
  part="input-error"
>
  Something is wrong!
</div>

```

