import{n as e}from"./chunk-zsgVPwQN.js";import{c as t,s as n}from"./iframe-AQsdAuvw.js";import{d as r,u as i}from"./use-input-DRtc939c.js";import{t as a}from"./cosmoz-input-B2vRBmar.js";var o,s,c,l,u,d,f,p,m,h,g;e((()=>{i(),t(),a(),o={title:`Components/Cosmoz Input`,component:`cosmoz-input`,tags:[`autodocs`],argTypes:{label:{control:`text`,description:`Label text displayed above the input`},placeholder:{control:`text`,description:`Placeholder text`},value:{control:`text`,description:`Input value`},type:{control:`select`,options:[`text`,`number`,`password`,`email`,`color`],description:`Native input type`,table:{defaultValue:{summary:`text`}}},variant:{control:`select`,options:[`inline`,`cell`],description:`Visual variant`,table:{defaultValue:{summary:`—`}}},compact:{control:`boolean`,description:`Hides label/hint/error text; shows tooltip icon instead`,table:{defaultValue:{summary:`false`}}},required:{control:`boolean`,description:`Marks field as required, shows * on label`,table:{defaultValue:{summary:`false`}}},invalid:{control:`boolean`,description:`Toggles error state (red border, error message)`,table:{defaultValue:{summary:`false`}}},errorMessage:{control:`text`,description:`Error text shown below input (or in tooltip when compact)`},hint:{control:`text`,description:`Helper text below input (hidden when invalid)`},disabled:{control:`boolean`,description:`Disables input, reduces opacity, not-allowed cursor`,table:{defaultValue:{summary:`false`}}},readonly:{control:`boolean`,description:`Makes input read-only`,table:{defaultValue:{summary:`false`}}},autosize:{control:`boolean`,description:`Input width adjusts to content length`,table:{defaultValue:{summary:`false`}}}}},s=e=>n`
    <cosmoz-input
        .label=${e.label||``}
        placeholder=${e.placeholder||``}
        .value=${e.value||``}
        .hint=${e.hint||``}
        .errorMessage=${e.errorMessage||``}
        type=${e.type||`text`}
        variant=${e.variant||``}
        ?compact=${e.compact}
        ?required=${e.required}
        ?invalid=${e.invalid}
        ?disabled=${e.disabled}
        ?readonly=${e.readonly}
        ?autosize=${e.autosize}
    ></cosmoz-input>
`,c={args:{label:`Email`,placeholder:`olivia@untitledui.com`,hint:`This is a hint text to help user.`,required:!1,invalid:!1,disabled:!1,compact:!1,type:`text`},render:s,parameters:{docs:{description:{story:`Interactive playground — use the controls to explore all props.`}}}},l={render:()=>n`
        <div class="story-stack">
            <h1 class="story-section-title">Default variant</h1>
            <div class="story-grid">
                <div>
                    <div class="story-label">No required</div>
                    <cosmoz-input
                        .label=${`Email`}
                        placeholder=${`olivia@untitledui.com`}
                        .hint=${`This is a hint text to help user.`}
                    ></cosmoz-input>
                </div>
                <div>
                    <div class="story-label">Required</div>
                    <cosmoz-input
                        .label=${`Email`}
                        placeholder=${`olivia@untitledui.com`}
                        .hint=${`This is a hint text to help user.`}
                        required
                    ></cosmoz-input>
                </div>
                <div>
                    <div class="story-label">Invalid + hint</div>
                    <cosmoz-input
                        .label=${`Email`}
                        .value=${`bad`}
                        .hint=${`This is a hint text to help user.`}
                        invalid
                        required
                        .errorMessage=${`This is an error message.`}
                    ></cosmoz-input>
                </div>
                <div>
                    <div class="story-label">Disabled</div>
                    <cosmoz-input
                        .label=${`Email`}
                        .value=${`olivia@untitledui.com`}
                        ?disabled=${!0}
                    ></cosmoz-input>
                </div>
                <div>
                    <div class="story-label">Readonly</div>
                    <cosmoz-input
                        .label=${`Email`}
                        .value=${`olivia@untitledui.com`}
                        readonly
                    ></cosmoz-input>
                </div>
            </div>
        </div>
    `,parameters:{docs:{description:{story:`The default variant with bordered wrap, label above, and hint/error text below.`}}}},u={render:()=>n`
        <div class="story-stack">
            <h1 class="story-section-title">Inline variant</h1>
            <style>
                .story-grid cosmoz-input[variant='inline'] {
                    background: var(--cz-color-bg-brand);
                }
            </style>
            <div class="story-grid">
                <div>
                    <div class="story-label">Empty</div>
                    <cosmoz-input .label=${`Email`} variant="inline"></cosmoz-input>
                </div>
                <div>
                    <div class="story-label">With value</div>
                    <cosmoz-input
                        .label=${`Email`}
                        .value=${`olivia@untitledui.com`}
                        variant="inline"
                    ></cosmoz-input>
                </div>
                <div>
                    <div class="story-label">Invalid</div>
                    <cosmoz-input
                        .label=${`Email`}
                        .value=${`not-an-email`}
                        variant="inline"
                        invalid
                        .errorMessage=${`Please enter a valid email`}
                    ></cosmoz-input>
                </div>
                <div>
                    <div class="story-label">Disabled</div>
                    <cosmoz-input
                        .label=${`Email`}
                        .value=${`olivia@untitledui.com`}
                        variant="inline"
                        disabled
                    ></cosmoz-input>
                </div>
            </div>
        </div>
    `,parameters:{docs:{description:{story:`Floating label that translates up on focus or when the input has a value. No border, no hint/error text, no tooltip icon.`}}}},d={render:()=>n`
        <div class="story-stack">
            <h1 class="story-section-title">Cell variant</h1>
            <div class="story-grid">
                <div>
                    <div class="story-label">Empty</div>
                    <cosmoz-input
                        variant="cell"
                        placeholder=${`Filter...`}
                    ></cosmoz-input>
                </div>
                <div>
                    <div class="story-label">With value</div>
                    <cosmoz-input
                        variant="cell"
                        .value=${`olivia@untitledui.com`}
                    ></cosmoz-input>
                </div>
                <div>
                    <div class="story-label">Invalid</div>
                    <cosmoz-input
                        variant="cell"
                        .value=${`bad value`}
                        invalid
                    ></cosmoz-input>
                </div>
                <div>
                    <div class="story-label">Disabled</div>
                    <cosmoz-input
                        variant="cell"
                        .value=${`Locked`}
                        disabled
                    ></cosmoz-input>
                </div>
            </div>
        </div>
    `,parameters:{docs:{description:{story:`Minimal input for table/grid contexts. No label, thin border, no border-radius. Background highlights on focus.`}}}},f={render:()=>n`
        <div class="story-stack">
            <h1 class="story-section-title">Compact (tooltip error mode)</h1>
            <div class="story-grid">
                <div>
                    <div class="story-label">Default + compact</div>
                    <cosmoz-input
                        compact
                        .label=${`Email`}
                        placeholder=${`Filter...`}
                    ></cosmoz-input>
                </div>
                <div>
                    <div class="story-label">Required</div>
                    <cosmoz-input
                        compact
                        required
                        .label=${`Email`}
                        placeholder=${`Required...`}
                    ></cosmoz-input>
                </div>
                <div>
                    <div class="story-label">Invalid</div>
                    <cosmoz-input
                        compact
                        .label=${`Email`}
                        .value=${`bad value`}
                        invalid
                        .errorMessage=${`Invalid value`}
                    ></cosmoz-input>
                </div>
                <div>
                    <div class="story-label">Cell + compact</div>
                    <cosmoz-input
                        variant="cell"
                        compact
                        .label=${`Filter`}
                        placeholder=${`Filter...`}
                    ></cosmoz-input>
                </div>
                <div>
                    <div class="story-label">Cell + compact invalid</div>
                    <cosmoz-input
                        variant="cell"
                        compact
                        .label=${`Filter`}
                        .value=${`bad`}
                        invalid
                        .errorMessage=${`Cell compact error`}
                    ></cosmoz-input>
                </div>
            </div>
        </div>
    `,parameters:{docs:{description:{story:`Compact mode hides label, hint, and error text. A tooltip icon is always visible: help icon when valid, red info icon when invalid.`}}}},p={render:()=>{let e=/^[^\s@]+@[^\s@]+\.[^\s@]+$/u,t=t=>{let n=t.target,r=!n.value||e.test(n.value);n.toggleAttribute(`invalid`,!r),n.errorMessage=r?``:`Please enter a valid email`};return n`
            <div class="story-stack">
                <h1 class="story-section-title">Live validation</h1>
                <div class="story-stack">
                    <div>
                        <div class="story-label">Default</div>
                        <cosmoz-input
                            .label=${`Email`}
                            .hint=${`Type an invalid email`}
                            placeholder=${`olivia@untitledui.com`}
                            required
                            @input=${t}
                        ></cosmoz-input>
                    </div>
                    <div>
                        <div class="story-label">Compact</div>
                        <cosmoz-input
                            compact
                            .label=${`Email`}
                            placeholder=${`Type to validate`}
                            @input=${t}
                        ></cosmoz-input>
                    </div>
                </div>
            </div>
        `},parameters:{docs:{description:{story:`Real-time email validation using toggleAttribute and errorMessage. Shows how to implement external validation logic.`}}}},m={render:()=>{let e=r({slot:`prefix`,width:`20`,height:`20`}),t=r({slot:`suffix`,width:`20`,height:`20`});return n`
            <div class="story-stack">
                <h1 class="story-section-title">Prefix & Suffix slots</h1>
                <div class="story-stack">
                    <div>
                        <div class="story-label">Prefix</div>
                        <cosmoz-input
                            .label=${`Email`}
                            placeholder=${`olivia@untitledui.com`}
                        >
                            ${e}
                        </cosmoz-input>
                    </div>
                    <div>
                        <div class="story-label">Suffix</div>
                        <cosmoz-input
                            .label=${`Email`}
                            placeholder=${`olivia@untitledui.com`}
                        >
                            ${t}
                        </cosmoz-input>
                    </div>
                    <div>
                        <div class="story-label">Both</div>
                        <cosmoz-input
                            .label=${`Email`}
                            placeholder=${`olivia@untitledui.com`}
                        >
                            ${e} ${t}
                        </cosmoz-input>
                    </div>
                    <div>
                        <div class="story-label">Invalid + prefix</div>
                        <cosmoz-input
                            .label=${`Email`}
                            .value=${`bad`}
                            invalid
                            .errorMessage=${`Invalid email`}
                        >
                            ${e} ${t}
                        </cosmoz-input>
                    </div>
                </div>
            </div>
        `},parameters:{docs:{description:{story:`Prefix and suffix slots accept any slotted content (icons, text). Shown across all variants.`}}}},h={render:()=>n`
        <div class="story-stack">
            <h1 class="story-section-title">Autosize</h1>
            <div class="story-row">
                <div>
                    <div class="story-label">With spinner</div>
                    <cosmoz-input
                        autosize
                        .label=${`Number`}
                        type="number"
                        .value=${3.12}
                    ></cosmoz-input>
                </div>
                <div>
                    <div class="story-label">No spinner</div>
                    <cosmoz-input
                        autosize
                        no-spinner
                        .label=${`Number`}
                        type="number"
                        .value=${42}
                    ></cosmoz-input>
                </div>
            </div>
        </div>
    `,parameters:{docs:{description:{story:`Input width adjusts to content length. Works with number inputs with or without spinner.`}}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    placeholder: 'olivia@untitledui.com',
    hint: 'This is a hint text to help user.',
    required: false,
    invalid: false,
    disabled: false,
    compact: false,
    type: 'text'
  },
  render: renderInput,
  parameters: {
    docs: {
      description: {
        story: 'Interactive playground — use the controls to explore all props.'
      }
    }
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <div class="story-stack">
            <h1 class="story-section-title">Default variant</h1>
            <div class="story-grid">
                <div>
                    <div class="story-label">No required</div>
                    <cosmoz-input
                        .label=\${'Email'}
                        placeholder=\${'olivia@untitledui.com'}
                        .hint=\${'This is a hint text to help user.'}
                    ></cosmoz-input>
                </div>
                <div>
                    <div class="story-label">Required</div>
                    <cosmoz-input
                        .label=\${'Email'}
                        placeholder=\${'olivia@untitledui.com'}
                        .hint=\${'This is a hint text to help user.'}
                        required
                    ></cosmoz-input>
                </div>
                <div>
                    <div class="story-label">Invalid + hint</div>
                    <cosmoz-input
                        .label=\${'Email'}
                        .value=\${'bad'}
                        .hint=\${'This is a hint text to help user.'}
                        invalid
                        required
                        .errorMessage=\${'This is an error message.'}
                    ></cosmoz-input>
                </div>
                <div>
                    <div class="story-label">Disabled</div>
                    <cosmoz-input
                        .label=\${'Email'}
                        .value=\${'olivia@untitledui.com'}
                        ?disabled=\${true}
                    ></cosmoz-input>
                </div>
                <div>
                    <div class="story-label">Readonly</div>
                    <cosmoz-input
                        .label=\${'Email'}
                        .value=\${'olivia@untitledui.com'}
                        readonly
                    ></cosmoz-input>
                </div>
            </div>
        </div>
    \`,
  parameters: {
    docs: {
      description: {
        story: 'The default variant with bordered wrap, label above, and hint/error text below.'
      }
    }
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <div class="story-stack">
            <h1 class="story-section-title">Inline variant</h1>
            <style>
                .story-grid cosmoz-input[variant='inline'] {
                    background: var(--cz-color-bg-brand);
                }
            </style>
            <div class="story-grid">
                <div>
                    <div class="story-label">Empty</div>
                    <cosmoz-input .label=\${'Email'} variant="inline"></cosmoz-input>
                </div>
                <div>
                    <div class="story-label">With value</div>
                    <cosmoz-input
                        .label=\${'Email'}
                        .value=\${'olivia@untitledui.com'}
                        variant="inline"
                    ></cosmoz-input>
                </div>
                <div>
                    <div class="story-label">Invalid</div>
                    <cosmoz-input
                        .label=\${'Email'}
                        .value=\${'not-an-email'}
                        variant="inline"
                        invalid
                        .errorMessage=\${'Please enter a valid email'}
                    ></cosmoz-input>
                </div>
                <div>
                    <div class="story-label">Disabled</div>
                    <cosmoz-input
                        .label=\${'Email'}
                        .value=\${'olivia@untitledui.com'}
                        variant="inline"
                        disabled
                    ></cosmoz-input>
                </div>
            </div>
        </div>
    \`,
  parameters: {
    docs: {
      description: {
        story: 'Floating label that translates up on focus or when the input has a value. No border, no hint/error text, no tooltip icon.'
      }
    }
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <div class="story-stack">
            <h1 class="story-section-title">Cell variant</h1>
            <div class="story-grid">
                <div>
                    <div class="story-label">Empty</div>
                    <cosmoz-input
                        variant="cell"
                        placeholder=\${'Filter...'}
                    ></cosmoz-input>
                </div>
                <div>
                    <div class="story-label">With value</div>
                    <cosmoz-input
                        variant="cell"
                        .value=\${'olivia@untitledui.com'}
                    ></cosmoz-input>
                </div>
                <div>
                    <div class="story-label">Invalid</div>
                    <cosmoz-input
                        variant="cell"
                        .value=\${'bad value'}
                        invalid
                    ></cosmoz-input>
                </div>
                <div>
                    <div class="story-label">Disabled</div>
                    <cosmoz-input
                        variant="cell"
                        .value=\${'Locked'}
                        disabled
                    ></cosmoz-input>
                </div>
            </div>
        </div>
    \`,
  parameters: {
    docs: {
      description: {
        story: 'Minimal input for table/grid contexts. No label, thin border, no border-radius. Background highlights on focus.'
      }
    }
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <div class="story-stack">
            <h1 class="story-section-title">Compact (tooltip error mode)</h1>
            <div class="story-grid">
                <div>
                    <div class="story-label">Default + compact</div>
                    <cosmoz-input
                        compact
                        .label=\${'Email'}
                        placeholder=\${'Filter...'}
                    ></cosmoz-input>
                </div>
                <div>
                    <div class="story-label">Required</div>
                    <cosmoz-input
                        compact
                        required
                        .label=\${'Email'}
                        placeholder=\${'Required...'}
                    ></cosmoz-input>
                </div>
                <div>
                    <div class="story-label">Invalid</div>
                    <cosmoz-input
                        compact
                        .label=\${'Email'}
                        .value=\${'bad value'}
                        invalid
                        .errorMessage=\${'Invalid value'}
                    ></cosmoz-input>
                </div>
                <div>
                    <div class="story-label">Cell + compact</div>
                    <cosmoz-input
                        variant="cell"
                        compact
                        .label=\${'Filter'}
                        placeholder=\${'Filter...'}
                    ></cosmoz-input>
                </div>
                <div>
                    <div class="story-label">Cell + compact invalid</div>
                    <cosmoz-input
                        variant="cell"
                        compact
                        .label=\${'Filter'}
                        .value=\${'bad'}
                        invalid
                        .errorMessage=\${'Cell compact error'}
                    ></cosmoz-input>
                </div>
            </div>
        </div>
    \`,
  parameters: {
    docs: {
      description: {
        story: 'Compact mode hides label, hint, and error text. A tooltip icon is always visible: help icon when valid, red info icon when invalid.'
      }
    }
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/u;
    const onInput = (e: InputEvent) => {
      const el = e.target as HTMLElement & {
        value: string;
        errorMessage: string;
      };
      const valid = !el.value || emailRegex.test(el.value);
      el.toggleAttribute('invalid', !valid);
      el.errorMessage = valid ? '' : 'Please enter a valid email';
    };
    return html\`
            <div class="story-stack">
                <h1 class="story-section-title">Live validation</h1>
                <div class="story-stack">
                    <div>
                        <div class="story-label">Default</div>
                        <cosmoz-input
                            .label=\${'Email'}
                            .hint=\${'Type an invalid email'}
                            placeholder=\${'olivia@untitledui.com'}
                            required
                            @input=\${onInput}
                        ></cosmoz-input>
                    </div>
                    <div>
                        <div class="story-label">Compact</div>
                        <cosmoz-input
                            compact
                            .label=\${'Email'}
                            placeholder=\${'Type to validate'}
                            @input=\${onInput}
                        ></cosmoz-input>
                    </div>
                </div>
            </div>
        \`;
  },
  parameters: {
    docs: {
      description: {
        story: 'Real-time email validation using toggleAttribute and errorMessage. Shows how to implement external validation logic.'
      }
    }
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const prefixIcon = mail01Icon({
      slot: 'prefix',
      width: '20',
      height: '20'
    });
    const suffixIcon = mail01Icon({
      slot: 'suffix',
      width: '20',
      height: '20'
    });
    return html\`
            <div class="story-stack">
                <h1 class="story-section-title">Prefix & Suffix slots</h1>
                <div class="story-stack">
                    <div>
                        <div class="story-label">Prefix</div>
                        <cosmoz-input
                            .label=\${'Email'}
                            placeholder=\${'olivia@untitledui.com'}
                        >
                            \${prefixIcon}
                        </cosmoz-input>
                    </div>
                    <div>
                        <div class="story-label">Suffix</div>
                        <cosmoz-input
                            .label=\${'Email'}
                            placeholder=\${'olivia@untitledui.com'}
                        >
                            \${suffixIcon}
                        </cosmoz-input>
                    </div>
                    <div>
                        <div class="story-label">Both</div>
                        <cosmoz-input
                            .label=\${'Email'}
                            placeholder=\${'olivia@untitledui.com'}
                        >
                            \${prefixIcon} \${suffixIcon}
                        </cosmoz-input>
                    </div>
                    <div>
                        <div class="story-label">Invalid + prefix</div>
                        <cosmoz-input
                            .label=\${'Email'}
                            .value=\${'bad'}
                            invalid
                            .errorMessage=\${'Invalid email'}
                        >
                            \${prefixIcon} \${suffixIcon}
                        </cosmoz-input>
                    </div>
                </div>
            </div>
        \`;
  },
  parameters: {
    docs: {
      description: {
        story: 'Prefix and suffix slots accept any slotted content (icons, text). Shown across all variants.'
      }
    }
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <div class="story-stack">
            <h1 class="story-section-title">Autosize</h1>
            <div class="story-row">
                <div>
                    <div class="story-label">With spinner</div>
                    <cosmoz-input
                        autosize
                        .label=\${'Number'}
                        type="number"
                        .value=\${3.12}
                    ></cosmoz-input>
                </div>
                <div>
                    <div class="story-label">No spinner</div>
                    <cosmoz-input
                        autosize
                        no-spinner
                        .label=\${'Number'}
                        type="number"
                        .value=\${42}
                    ></cosmoz-input>
                </div>
            </div>
        </div>
    \`,
  parameters: {
    docs: {
      description: {
        story: 'Input width adjusts to content length. Works with number inputs with or without spinner.'
      }
    }
  }
}`,...h.parameters?.docs?.source}}},g=[`Playground`,`Default`,`Inline`,`Cell`,`Compact`,`LiveValidation`,`PrefixAndSuffix`,`Autosize`]}))();export{h as Autosize,d as Cell,f as Compact,l as Default,u as Inline,p as LiveValidation,c as Playground,m as PrefixAndSuffix,g as __namedExportsOrder,o as default};