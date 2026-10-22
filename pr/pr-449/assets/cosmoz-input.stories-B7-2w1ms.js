import{i as e}from"./preload-helper-CCSz8wUY.js";import{c as t,s as n}from"./iframe-D6J1P1wL.js";import{i as r,r as i}from"./normalize.css-CO2WYznH.js";import{n as a,t as o}from"./live-BLPDU3ti.js";import{a as s,c,f as l,i as u,l as d,n as f,o as p,r as m,s as h,t as g,u as _}from"./use-input-CfJbRQf5.js";import{D as v,n as y,t as b,y as x}from"./haunted-C0-B-tH0.js";var S,C=e((()=>{b(),S=e=>x(()=>{if(e==null)return;let t=new RegExp(e,`u`);return e=>{!e.defaultPrevented&&e.data&&!t.test(e.data)&&e.preventDefault()}},[e])})),w,T,E=e((()=>{w=({placeholder:e})=>e||` `,T=(e,t)=>t??(e===`date`?`9999-12-31`:void 0)})),D,O,k=e((()=>{b(),t(),i(),o(),c(),p(),m(),C(),g(),E(),D=[`type`,`variant`,`size`,`hint`,`compact`,`required`,`pattern`,`allowed-pattern`,`min`,`max`,`step`,`autosize`,`label`,`placeholder`,...s,`aria-label`],O=e=>{let{type:t=`text`,pattern:i,allowedPattern:o,autocomplete:s,value:c,readonly:l,disabled:u,min:p,max:m,step:g,maxlength:_,required:v}=e,{onChange:y,onFocus:b,onInput:x,onRef:C}=f(e),E=S(o);return e.toggleAttribute(`has-value`,!!c),h(n`
			<input
				${d(C)}
				style="--chars: ${c?.toString()?.length??0}ch"
				id="input"
				part="input"
				type=${t}
				pattern=${r(i)}
				autocomplete=${r(s)}
				placeholder=${w({placeholder:e.placeholder})}
				?readonly=${l}
				aria-disabled=${u?`true`:`false`}
				aria-label=${r(e.getAttribute(`aria-label`))}
				?disabled=${u}
				?required=${v}
				.value=${a(c??``)}
				maxlength=${r(_)}
				@beforeinput=${E}
				@input=${x}
				@change=${y}
				@focus=${b}
				@blur=${b}
				min=${r(p)}
				max=${r(T(t,m))}
				step=${r(g)}
			/>
		`,e)},customElements.define(`cosmoz-input`,y(O,{observedAttributes:D,styleSheets:[v(u)],shadowRootInit:{mode:`open`,delegatesFocus:!0}}))})),A,j,M,N,P,F,I,L,R,z,B;e((()=>{_(),t(),k(),A={title:`Components/Cosmoz Input`,component:`cosmoz-input`,tags:[`autodocs`],argTypes:{label:{control:`text`,description:`Label text displayed above the input`},placeholder:{control:`text`,description:`Placeholder text`},value:{control:`text`,description:`Input value`},type:{control:`select`,options:[`text`,`number`,`password`,`email`,`color`],description:`Native input type`,table:{defaultValue:{summary:`text`}}},variant:{control:`select`,options:[`inline`,`cell`],description:`Visual variant`,table:{defaultValue:{summary:`—`}}},size:{control:`select`,options:[`sm`,`md`,`lg`,`xl`],description:`Control height size (maps to the cz control-height tokens)`,table:{defaultValue:{summary:`md`}}},compact:{control:`boolean`,description:`Hides label/hint/error text; shows tooltip icon instead`,table:{defaultValue:{summary:`false`}}},required:{control:`boolean`,description:`Marks field as required, shows * on label`,table:{defaultValue:{summary:`false`}}},invalid:{control:`boolean`,description:`Toggles error state (red border, error message)`,table:{defaultValue:{summary:`false`}}},errorMessage:{control:`text`,description:`Error text shown below input (or in tooltip when compact)`},hint:{control:`text`,description:`Helper text below input (hidden when invalid)`},disabled:{control:`boolean`,description:`Disables input, reduces opacity, not-allowed cursor`,table:{defaultValue:{summary:`false`}}},readonly:{control:`boolean`,description:`Makes input read-only`,table:{defaultValue:{summary:`false`}}},autosize:{control:`boolean`,description:`Input width adjusts to content length`,table:{defaultValue:{summary:`false`}}}}},j=e=>n`
    <cosmoz-input
        .label=${e.label||``}
        placeholder=${e.placeholder||``}
        .value=${e.value||``}
        hint=${e.hint||``}
        .errorMessage=${e.errorMessage||``}
        type=${e.type||`text`}
        variant=${e.variant||``}
        size=${e.size||``}
        ?compact=${e.compact}
        ?required=${e.required}
        ?invalid=${e.invalid}
        ?disabled=${e.disabled}
        ?readonly=${e.readonly}
        ?autosize=${e.autosize}
    ></cosmoz-input>
`,M={args:{label:`Email`,placeholder:`olivia@untitledui.com`,hint:`This is a hint text to help user.`,required:!1,invalid:!1,disabled:!1,compact:!1,type:`text`},render:j,parameters:{docs:{description:{story:`Interactive playground — use the controls to explore all props.`}}}},N={render:()=>n`
        <div class="story-stack">
            <h1 class="story-section-title">Default variant</h1>
            <div class="story-grid">
                <div>
                    <div class="story-label">No required</div>
                    <cosmoz-input
                        .label=${`Email`}
                        placeholder=${`olivia@untitledui.com`}
                        hint=${`This is a hint text to help user.`}
                    ></cosmoz-input>
                </div>
                <div>
                    <div class="story-label">Required</div>
                    <cosmoz-input
                        .label=${`Email`}
                        placeholder=${`olivia@untitledui.com`}
                        hint=${`This is a hint text to help user.`}
                        required
                    ></cosmoz-input>
                </div>
                <div>
                    <div class="story-label">Invalid + hint</div>
                    <cosmoz-input
                        .label=${`Email`}
                        .value=${`bad`}
                        hint=${`This is a hint text to help user.`}
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
    `,parameters:{docs:{description:{story:`The default variant with bordered wrap, label above, and hint/error text below.`}}}},P={render:()=>n`
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
    `,parameters:{docs:{description:{story:`Floating label that translates up on focus or when the input has a value. No border, no hint/error text, no tooltip icon.`}}}},F={render:()=>n`
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
                        required
                        placeholder=${`Required...`}
                        .value=${`bad value`}
                        invalid
                    ></cosmoz-input>
                </div>
                <div>
                    <div class="story-label">Invalid + error message</div>
                    <cosmoz-input
                        variant="cell"
                        invalid
                        .errorMessage=${`Invalid cell value `}
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
    `,parameters:{docs:{description:{story:`Minimal input for table/grid contexts. No label, thin border, no border-radius. Background highlights on focus.`}}}},I={render:()=>n`
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
    `,parameters:{docs:{description:{story:`Compact mode hides label, hint, and error text. A tooltip icon is always visible: help icon when valid, red info icon when invalid.`}}}},L={render:()=>{let e=/^[^\s@]+@[^\s@]+\.[^\s@]+$/u,t=t=>{let n=t.target,r=!n.value||e.test(n.value);n.toggleAttribute(`invalid`,!r),r?n.errorMessage=void 0:n.errorMessage=`Please enter a valid email`};return n`
            <div class="story-stack">
                <h1 class="story-section-title">Live validation</h1>
                <div class="story-stack">
                    <div>
                        <div class="story-label">Default</div>
                        <cosmoz-input
                            .label=${`Email`}
                            hint=${`Type an invalid email`}
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
        `},parameters:{docs:{description:{story:`Real-time email validation using toggleAttribute and errorMessage. Shows how to implement external validation logic.`}}}},R={render:()=>{let e=l({slot:`prefix`,width:`20`,height:`20`}),t=l({slot:`suffix`,width:`20`,height:`20`});return n`
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
        `},parameters:{docs:{description:{story:`Prefix and suffix slots accept any slotted content (icons, text). Shown across all variants.`}}}},z={render:()=>n`
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
    `,parameters:{docs:{description:{story:`Input width adjusts to content length. Works with number inputs with or without spinner.`}}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <div class="story-stack">
            <h1 class="story-section-title">Default variant</h1>
            <div class="story-grid">
                <div>
                    <div class="story-label">No required</div>
                    <cosmoz-input
                        .label=\${'Email'}
                        placeholder=\${'olivia@untitledui.com'}
                        hint=\${'This is a hint text to help user.'}
                    ></cosmoz-input>
                </div>
                <div>
                    <div class="story-label">Required</div>
                    <cosmoz-input
                        .label=\${'Email'}
                        placeholder=\${'olivia@untitledui.com'}
                        hint=\${'This is a hint text to help user.'}
                        required
                    ></cosmoz-input>
                </div>
                <div>
                    <div class="story-label">Invalid + hint</div>
                    <cosmoz-input
                        .label=\${'Email'}
                        .value=\${'bad'}
                        hint=\${'This is a hint text to help user.'}
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
                        required
                        placeholder=\${'Required...'}
                        .value=\${'bad value'}
                        invalid
                    ></cosmoz-input>
                </div>
                <div>
                    <div class="story-label">Invalid + error message</div>
                    <cosmoz-input
                        variant="cell"
                        invalid
                        .errorMessage=\${'Invalid cell value '}
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => {
    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/u;
    const onInput = (e: InputEvent) => {
      const el = e.target as HTMLElement & {
        value: string;
        errorMessage?: string;
      };
      const valid = !el.value || emailRegex.test(el.value);
      el.toggleAttribute('invalid', !valid);
      if (valid) {
        el.errorMessage = undefined;
      } else {
        el.errorMessage = 'Please enter a valid email';
      }
    };
    return html\`
            <div class="story-stack">
                <h1 class="story-section-title">Live validation</h1>
                <div class="story-stack">
                    <div>
                        <div class="story-label">Default</div>
                        <cosmoz-input
                            .label=\${'Email'}
                            hint=\${'Type an invalid email'}
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
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}},B=[`Playground`,`Default`,`Inline`,`Cell`,`Compact`,`LiveValidation`,`PrefixAndSuffix`,`Autosize`],M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <div class="story-stack">
            <h1 class="story-section-title">Default variant</h1>
            <div class="story-grid">
                <div>
                    <div class="story-label">No required</div>
                    <cosmoz-input
                        .label=\${'Email'}
                        placeholder=\${'olivia@untitledui.com'}
                        hint=\${'This is a hint text to help user.'}
                    ></cosmoz-input>
                </div>
                <div>
                    <div class="story-label">Required</div>
                    <cosmoz-input
                        .label=\${'Email'}
                        placeholder=\${'olivia@untitledui.com'}
                        hint=\${'This is a hint text to help user.'}
                        required
                    ></cosmoz-input>
                </div>
                <div>
                    <div class="story-label">Invalid + hint</div>
                    <cosmoz-input
                        .label=\${'Email'}
                        .value=\${'bad'}
                        hint=\${'This is a hint text to help user.'}
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
                        required
                        placeholder=\${'Required...'}
                        .value=\${'bad value'}
                        invalid
                    ></cosmoz-input>
                </div>
                <div>
                    <div class="story-label">Invalid + error message</div>
                    <cosmoz-input
                        variant="cell"
                        invalid
                        .errorMessage=\${'Invalid cell value '}
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => {
    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/u;
    const onInput = (e: InputEvent) => {
      const el = e.target as HTMLElement & {
        value: string;
        errorMessage?: string;
      };
      const valid = !el.value || emailRegex.test(el.value);
      el.toggleAttribute('invalid', !valid);
      if (valid) {
        el.errorMessage = undefined;
      } else {
        el.errorMessage = 'Please enter a valid email';
      }
    };
    return html\`
            <div class="story-stack">
                <h1 class="story-section-title">Live validation</h1>
                <div class="story-stack">
                    <div>
                        <div class="story-label">Default</div>
                        <cosmoz-input
                            .label=\${'Email'}
                            hint=\${'Type an invalid email'}
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
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}}}))();export{z as Autosize,F as Cell,I as Compact,N as Default,P as Inline,L as LiveValidation,M as Playground,R as PrefixAndSuffix,B as __namedExportsOrder,A as default};