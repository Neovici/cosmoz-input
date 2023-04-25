/* @web/test-runner snapshot v1 */
export const snapshots = {};

snapshots["cosmoz-input render"] = 
`<div
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
    <slot name="control">
    </slot>
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
`;
/* end snapshot cosmoz-input render */

snapshots["cosmoz-input render label and value"] = 
`<div
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
    <slot name="control">
    </slot>
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
`;
/* end snapshot cosmoz-input render label and value */

snapshots["cosmoz-input render errorMessage"] = 
`<div
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
    <slot name="control">
    </slot>
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
`;
/* end snapshot cosmoz-input render errorMessage */

