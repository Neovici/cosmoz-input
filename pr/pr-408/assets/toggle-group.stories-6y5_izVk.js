import{i as e}from"./preload-helper-CCSz8wUY.js";import{c as t,i as n,s as r}from"./iframe-p6ISZ_7s.js";import{i,n as a,r as o,t as s}from"./normalize.css-D327Zgr6.js";import{T as c,_ as l,n as u,p as d,t as f}from"./haunted-Dr5DfWpB.js";import{t as p}from"./style-DAEc2hr6.js";var m,h,g=e((()=>{m=e=>e,h=(e,...t)=>typeof e==`function`?e(...t):e}));function _(e){return e?t=>typeof t==`object`&&t?t[e]:t:m}var v=e((()=>{g()})),y,b,x,S,C=e((()=>{s(),g(),v(),f(),t(),o(),y=e=>{let t=e=>e.label==null?typeof e.value==`string`?e.value:``:h(e.label,e.value),i=(e.options??[]).map(e=>typeof e==`object`&&e&&`value`in e?e:{value:e}),[a,o]=d(`value`),s=l(t=>_(e.valueProperty)(t),[e]),c=s(a),u=l(e=>o(e.value),[o]);return r`<div
		class="group"
		part="group"
		role="radiogroup"
		aria-label=${e.label??``}
	>
		${i.map(i=>{let a=c===s(i.value),o=t(i);return r`<button
				type="button"
				role="radio"
				aria-checked=${a?`true`:`false`}
				?disabled=${i.disabled||e.disabled}
				title=${i.title==null?n:h(i.title,i.value)}
				part=${a?`option selected-option`:`option`}
				class=${a?`option selected`:`option`}
				@click=${()=>u(i)}
			>
				${i.icon?.({width:`16`,height:`16`})}${o}
			</button>`})}
	</div>`},b=c`
	:host {
		display: inline-flex;
	}
`,x=c`
	.group {
		display: flex;
		align-items: stretch;
		gap: calc(var(--cz-spacing) * 1);
		padding: calc(var(--cz-spacing) * 1);
		border-radius: var(--cz-radius-lg);
		background-color: var(--cz-color-bg-secondary);
		box-shadow: inset 0 0 0 1px var(--cz-color-border-secondary);
		font-family: var(--cz-font-body);
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		font-weight: var(--cz-font-weight-semibold);
	}

	.option {
		display: inline-flex;
		align-items: center;
		gap: calc(var(--cz-spacing) * 1);
		padding: calc(var(--cz-spacing) * 2) calc(var(--cz-spacing) * 2.5);
		border-radius: var(--cz-radius-sm);
		border: 0;
		background: none;
		color: var(--cz-color-text-quaternary);
		font: inherit;
		cursor: pointer;
		white-space: nowrap;
		outline: 0;
	}

	.option:hover {
		color: var(--cz-color-text-secondary);
	}

	.option.selected {
		color: var(--cz-color-text-secondary);
		background-color: var(--cz-color-bg-primary);
		box-shadow: var(--cz-shadow-sm);
	}

	.option:focus-visible {
		box-shadow: var(--cz-focus-ring);
		color: var(--cz-color-text-secondary);
	}

	.option:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}
`,customElements.define(`cosmoz-toggle-group`,u(y,{styleSheets:[a,b,x],observedAttributes:[`label`,`disabled`,`value-property`]})),S=e=>r`<cosmoz-toggle-group
		.options=${e.options}
		.value=${e.value}
		value-property=${i(e.valueProperty)}
		.label=${i(e.label)}
		?disabled=${e.disabled}
		@value-changed=${e.onValueChanged}
	></cosmoz-toggle-group>`})),w,T,E,D,O,k,A,j,M,N,P,F,I,L;e((()=>{t(),C(),p(),{expect:w,waitFor:T}=__STORYBOOK_MODULE_TEST__,E={title:`Components/Toggle group`,component:`cosmoz-toggle-group`,tags:[`autodocs`]},D=[`today`,`week`,`month`],O=(e,t)=>e.shadowRoot.querySelectorAll(`[part~=option]`)[t],k=e=>e.shadowRoot.querySelector(`[part~=selected-option]`),A={render:()=>r`
        <cosmoz-toggle-group
            .options=${D}
            .value=${`week`}
            .label=${`Range`}
        ></cosmoz-toggle-group>
    `,play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`cosmoz-toggle-group`);await t(`renders radiogroup with radio options`,async()=>{await T(()=>{w(n.shadowRoot.querySelector(`[role=radiogroup]`)).toBeTruthy(),w(n.shadowRoot.querySelectorAll(`[role=radio]`).length).toBe(3)})}),await t(`the value reports aria-checked`,async()=>{w(O(n,1).getAttribute(`aria-checked`)).toBe(`true`),w(O(n,0).getAttribute(`aria-checked`)).toBe(`false`)})}},j={render:()=>r`
        <cosmoz-toggle-group
            .options=${D}
            .value=${`today`}
            disabled
        ></cosmoz-toggle-group>
    `,play:async({canvasElement:e})=>{let t=e.querySelector(`cosmoz-toggle-group`);await T(()=>{t.shadowRoot.querySelectorAll(`[role=radio]`).forEach(e=>w(e.disabled).toBe(!0))})}},M={render:()=>r`
        <cosmoz-toggle-group
            .options=${[`a`,{value:`b`,disabled:!0},`c`]}
            .value=${`a`}
        ></cosmoz-toggle-group>
    `,play:async({canvasElement:e})=>{let t=e.querySelector(`cosmoz-toggle-group`);await T(()=>{w(O(t,1).disabled).toBe(!0),w(O(t,0).disabled).toBe(!1)})}},N={render:()=>r`
        <cosmoz-toggle-group
            id="veto-group"
            .options=${D}
            .value=${`today`}
        ></cosmoz-toggle-group>
    `,play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`#veto-group`),r=!0,i=e=>{r&&e.preventDefault()};await t(`preventDefault() keeps the current value`,async()=>{n.addEventListener(`value-changed`,i),O(n,2).click(),r=!1,await T(()=>{w(n.value).toBe(`today`),w(k(n).textContent?.trim()).toBe(`today`),w(O(n,2).getAttribute(`aria-checked`)).toBe(`false`)})}),await t(`a plain click commits`,async()=>{n.addEventListener(`change`,e=>{n.value=e.detail}),O(n,2).click(),await T(()=>w(k(n).textContent?.trim()).toBe(`month`))})}},P={render:()=>r`
        <cosmoz-toggle-group
            id="icon-group"
            .options=${[{value:`explorer`,icon:()=>r`◆`,title:`Diagram`},{value:`table`,icon:()=>r`▦`,label:`Table`}]}
            .value=${`explorer`}
        ></cosmoz-toggle-group>
    `,play:async({canvasElement:e})=>{let t=e.querySelector(`#icon-group`);await T(()=>{let e=O(t,0);w(e.getAttribute(`title`)).toBe(`Diagram`),w(e.textContent?.trim()).toBe(`◆explorer`),w(O(t,1).textContent?.trim()).toBe(`▦Table`)})}},F={render:()=>{let e={id:1,label:`One`};return r`${S({options:[{value:e,label:({label:e})=>e},{value:{id:2,label:`Two`},label:({label:e})=>e}],value:e,valueProperty:`id`,label:`Helper`,onValueChanged:e=>e.detail.value})}`},play:async({canvasElement:e})=>{let t=e.querySelector(`cosmoz-toggle-group`);await T(()=>{w(t.shadowRoot.querySelector(`[part~=selected-option]`).textContent).toContain(`One`)})}},I={render:()=>r`
        <cosmoz-toggle-group
            id="identity-group"
            .options=${[{value:{id:1,label:`One`},label:({label:e})=>e},{value:{id:2,label:`Two`},label:({label:e})=>e}]}
            .value=${{id:2,label:`Two`}}
            value-property="id"
        ></cosmoz-toggle-group>
    `,play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`#identity-group`);await t(`marks the picked object`,async()=>{await T(()=>{w(O(n,1).getAttribute(`aria-checked`)).toBe(`true`)})}),await t(`the pick commits the object itself`,async()=>{n.addEventListener(`change`,e=>{n.value=e.detail}),O(n,0).click(),await T(()=>w(n.value).toEqual({id:1,label:`One`}))})}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <cosmoz-toggle-group
            .options=\${options}
            .value=\${'week'}
            .label=\${'Range'}
        ></cosmoz-toggle-group>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const el = canvasElement.querySelector('cosmoz-toggle-group')!;
    await step('renders radiogroup with radio options', async () => {
      await waitFor(() => {
        expect(el.shadowRoot!.querySelector('[role=radiogroup]')).toBeTruthy();
        expect(el.shadowRoot!.querySelectorAll('[role=radio]').length).toBe(3);
      });
    });
    await step('the value reports aria-checked', async () => {
      expect(radio(el, 1).getAttribute('aria-checked')).toBe('true');
      expect(radio(el, 0).getAttribute('aria-checked')).toBe('false');
    });
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <cosmoz-toggle-group
            .options=\${options}
            .value=\${'today'}
            disabled
        ></cosmoz-toggle-group>
    \`,
  play: async ({
    canvasElement
  }) => {
    const el = canvasElement.querySelector('cosmoz-toggle-group')!;
    await waitFor(() => {
      el.shadowRoot!.querySelectorAll('[role=radio]').forEach(radio => expect((radio as HTMLButtonElement).disabled).toBe(true));
    });
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <cosmoz-toggle-group
            .options=\${['a', {
    value: 'b',
    disabled: true
  }, 'c']}
            .value=\${'a'}
        ></cosmoz-toggle-group>
    \`,
  play: async ({
    canvasElement
  }) => {
    const el = canvasElement.querySelector('cosmoz-toggle-group')!;
    await waitFor(() => {
      expect((radio(el, 1) as HTMLButtonElement).disabled).toBe(true);
      expect((radio(el, 0) as HTMLButtonElement).disabled).toBe(false);
    });
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <cosmoz-toggle-group
            id="veto-group"
            .options=\${options}
            .value=\${'today'}
        ></cosmoz-toggle-group>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const el = canvasElement.querySelector('#veto-group')!;
    let vetoes = true;
    const veto = (e: Event) => {
      if (vetoes) {
        e.preventDefault();
      }
    };
    await step('preventDefault() keeps the current value', async () => {
      el.addEventListener('value-changed', veto);
      radio(el, 2).click();
      vetoes = false;
      await waitFor(() => {
        expect(el.value as string).toBe('today');
        expect(selected(el).textContent?.trim()).toBe('today');
        expect(radio(el, 2).getAttribute('aria-checked')).toBe('false');
      });
    });
    await step('a plain click commits', async () => {
      // controlled: the consumer writes the committed value back
      el.addEventListener('change', e => {
        el.value = (e as CustomEvent<string>).detail;
      });
      radio(el, 2).click();
      await waitFor(() => expect(selected(el).textContent?.trim()).toBe('month'));
    });
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <cosmoz-toggle-group
            id="icon-group"
            .options=\${[{
    value: 'explorer',
    icon: () => html\`◆\`,
    title: 'Diagram'
  }, {
    value: 'table',
    icon: () => html\`▦\`,
    label: 'Table'
  }]}
            .value=\${'explorer'}
        ></cosmoz-toggle-group>
    \`,
  play: async ({
    canvasElement
  }) => {
    const el = canvasElement.querySelector('#icon-group')!;
    await waitFor(() => {
      const explorer = radio(el, 0);
      // a string option with no label names itself
      expect(explorer.getAttribute('title')).toBe('Diagram');
      expect(explorer.textContent?.trim()).toBe('◆explorer');
      expect(radio(el, 1).textContent?.trim()).toBe('▦Table');
    });
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => {
    // the helper is typed: the pick flows as the option element
    const picked = {
      id: 1,
      label: 'One'
    };
    return html\`\${toggleGroup({
      options: [{
        value: picked,
        label: ({
          label
        }) => label
      }, {
        value: {
          id: 2,
          label: 'Two'
        },
        label: ({
          label
        }) => label
      }],
      value: picked,
      valueProperty: 'id',
      label: 'Helper',
      onValueChanged: event => event.detail.value
    })}\`;
  },
  play: async ({
    canvasElement
  }) => {
    const el = canvasElement.querySelector('cosmoz-toggle-group')!;
    await waitFor(() => {
      expect(el.shadowRoot!.querySelector('[part~=selected-option]')!.textContent).toContain('One');
    });
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <cosmoz-toggle-group
            id="identity-group"
            .options=\${[{
    value: {
      id: 1,
      label: 'One'
    },
    label: ({
      label
    }) => label
  }, {
    value: {
      id: 2,
      label: 'Two'
    },
    label: ({
      label
    }) => label
  }]}
            .value=\${{
    id: 2,
    label: 'Two'
  }}
            value-property="id"
        ></cosmoz-toggle-group>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const el = canvasElement.querySelector('#identity-group')!;
    await step('marks the picked object', async () => {
      await waitFor(() => {
        expect(radio(el, 1).getAttribute('aria-checked')).toBe('true');
      });
    });
    await step('the pick commits the object itself', async () => {
      el.addEventListener('change', e => {
        el.value = (e as CustomEvent).detail;
      });
      radio(el, 0).click();
      await waitFor(() => expect(el.value as {
        id: number;
      }).toEqual({
        id: 1,
        label: 'One'
      }));
    });
  }
}`,...I.parameters?.docs?.source}}},L=[`Basic`,`Disabled`,`PerOptionDisabled`,`VetoableSelection`,`Icons`,`TypedHelper`,`IdentitySelection`]}))();export{A as Basic,j as Disabled,P as Icons,I as IdentitySelection,M as PerOptionDisabled,F as TypedHelper,N as VetoableSelection,L as __namedExportsOrder,E as default};