import{i as e}from"./preload-helper-CCSz8wUY.js";import{c as t,i as n,s as r}from"./iframe-C5H0lviV.js";import{i,n as a,r as o,t as s}from"./normalize.css-B7HVsFSO.js";import{T as c,n as l,p as u,t as d}from"./haunted-Q3h35oH9.js";import{t as f}from"./style-iEq8biW6.js";var p,m,h=e((()=>{p=e=>e,m=(e,...t)=>typeof e==`function`?e(...t):e}));function g(e){return e?t=>typeof t==`object`&&t?t[e]:t:p}var _=e((()=>{h()})),v,y,b,x,S=e((()=>{s(),h(),_(),d(),t(),o(),v=e=>{let t=e=>e.label==null?typeof e.value==`string`?e.value:``:m(e.label,e.value),i=(e.options??[]).map(e=>typeof e==`object`&&e&&`value`in e?e:{value:e}),[a,o]=u(`value`),s=t=>g(e.valueProperty)(t),c=s(a),l=e=>o(e.value);return r`<div
		class="group"
		part="group"
		role="radiogroup"
		aria-label=${e.label??``}
		@keydown=${e=>{if(e.key!==`ArrowRight`&&e.key!==`ArrowLeft`)return;e.preventDefault();let t=i.map(e=>s(e.value)),n=t.findIndex(e=>e===c);if(n===-1)return;let r=e.key===`ArrowRight`?1:-1,a=i[(n+r+t.length)%t.length];o(a.value),e.currentTarget.children[(n+r+t.length)%t.length]?.focus()}}
	>
		${i.map(i=>{let a=c===s(i.value),o=t(i);return r`<button
				type="button"
				role="radio"
				aria-checked=${a?`true`:`false`}
				?disabled=${i.disabled||e.disabled}
				title=${i.title==null?n:m(i.title,i.value)}
				part=${a?`option selected-option`:`option`}
				class=${a?`option selected`:`option`}
				@click=${()=>l(i)}
				tabindex=${a?`0`:`-1`}
			>
				${i.icon?.({width:`16`,height:`16`})}${o}
			</button>`})}
	</div>`},y=c`
	:host {
		display: inline-flex;
	}
`,b=c`
	.group {
		display: flex;
		align-items: stretch;
		gap: calc(var(--cz-spacing) * 1);
		padding: calc(var(--cz-spacing) * 0.75);
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
		padding: calc(var(--cz-spacing) * 1.5) calc(var(--cz-spacing) * 2);
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
`,customElements.define(`cosmoz-toggle-group`,l(v,{styleSheets:[a,y,b],observedAttributes:[`label`,`disabled`,`value-property`]})),x=e=>r`<cosmoz-toggle-group
		.options=${e.options}
		.value=${e.value}
		value-property=${i(e.valueProperty)}
		.label=${i(e.label)}
		?disabled=${e.disabled}
		@value-changed=${e.onValueChanged}
	></cosmoz-toggle-group>`})),C,w,T,E,D,O,k,A,j,M,N,P,F,I;e((()=>{t(),S(),f(),{expect:C,waitFor:w}=__STORYBOOK_MODULE_TEST__,T={title:`Components/Toggle group`,component:`cosmoz-toggle-group`,tags:[`autodocs`]},E=[`today`,`week`,`month`],D=(e,t)=>e.shadowRoot.querySelectorAll(`[part~=option]`)[t],O=e=>e.shadowRoot.querySelector(`[part~=selected-option]`),k={render:()=>r`
        <cosmoz-toggle-group
            .options=${E}
            .value=${`week`}
            .label=${`Range`}
        ></cosmoz-toggle-group>
    `,play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`cosmoz-toggle-group`);await t(`renders radiogroup with radio options`,async()=>{await w(()=>{C(n.shadowRoot.querySelector(`[role=radiogroup]`)).toBeTruthy(),C(n.shadowRoot.querySelectorAll(`[role=radio]`).length).toBe(3)})}),await t(`the value reports aria-checked`,async()=>{C(D(n,1).getAttribute(`aria-checked`)).toBe(`true`),C(D(n,0).getAttribute(`aria-checked`)).toBe(`false`)}),await t(`the selected option is the one tab stop`,async()=>{C(D(n,1).getAttribute(`tabindex`)).toBe(`0`),C(D(n,0).getAttribute(`tabindex`)).toBe(`-1`),C(D(n,2).getAttribute(`tabindex`)).toBe(`-1`)})}},A={render:()=>r`
        <cosmoz-toggle-group
            .options=${E}
            .value=${`today`}
            disabled
        ></cosmoz-toggle-group>
    `,play:async({canvasElement:e})=>{let t=e.querySelector(`cosmoz-toggle-group`);await w(()=>{t.shadowRoot.querySelectorAll(`[role=radio]`).forEach(e=>C(e.disabled).toBe(!0))})}},j={render:()=>r`
        <cosmoz-toggle-group
            .options=${[`a`,{value:`b`,disabled:!0},`c`]}
            .value=${`a`}
        ></cosmoz-toggle-group>
    `,play:async({canvasElement:e})=>{let t=e.querySelector(`cosmoz-toggle-group`);await w(()=>{C(D(t,1).disabled).toBe(!0),C(D(t,0).disabled).toBe(!1)})}},M={render:()=>r`
        <cosmoz-toggle-group
            id="veto-group"
            .options=${E}
            .value=${`today`}
        ></cosmoz-toggle-group>
    `,play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`#veto-group`),r=!0,i=e=>{r&&e.preventDefault()};await t(`preventDefault() keeps the current value`,async()=>{n.addEventListener(`value-changed`,i),D(n,2).click(),r=!1,await w(()=>{C(n.value).toBe(`today`),C(O(n).textContent?.trim()).toBe(`today`),C(D(n,2).getAttribute(`aria-checked`)).toBe(`false`)})}),await t(`a plain click commits`,async()=>{n.addEventListener(`change`,e=>{n.value=e.detail}),D(n,2).click(),await w(()=>C(O(n).textContent?.trim()).toBe(`month`))})}},N={render:()=>r`
        <cosmoz-toggle-group
            id="icon-group"
            .options=${[{value:`explorer`,icon:()=>r`◆`,title:`Diagram`},{value:`table`,icon:()=>r`▦`,label:`Table`}]}
            .value=${`explorer`}
        ></cosmoz-toggle-group>
    `,play:async({canvasElement:e})=>{let t=e.querySelector(`#icon-group`);await w(()=>{let e=D(t,0);C(e.getAttribute(`title`)).toBe(`Diagram`),C(e.textContent?.trim()).toBe(`◆explorer`),C(D(t,1).textContent?.trim()).toBe(`▦Table`)})}},P={render:()=>{let e={id:1,label:`One`};return r`${x({options:[{value:e,label:({label:e})=>e},{value:{id:2,label:`Two`},label:({label:e})=>e}],value:e,valueProperty:`id`,label:`Helper`,onValueChanged:e=>e.detail.value})}`},play:async({canvasElement:e})=>{let t=e.querySelector(`cosmoz-toggle-group`);await w(()=>{C(t.shadowRoot.querySelector(`[part~=selected-option]`).textContent).toContain(`One`)})}},F={render:()=>r`
        <cosmoz-toggle-group
            id="identity-group"
            .options=${[{value:{id:1,label:`One`},label:({label:e})=>e},{value:{id:2,label:`Two`},label:({label:e})=>e}]}
            .value=${{id:2,label:`Two`}}
            value-property="id"
        ></cosmoz-toggle-group>
    `,play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`#identity-group`);await t(`marks the picked object`,async()=>{await w(()=>{C(D(n,1).getAttribute(`aria-checked`)).toBe(`true`)})}),await t(`the pick commits the object itself`,async()=>{n.addEventListener(`change`,e=>{n.value=e.detail}),D(n,0).click(),await w(()=>C(n.value).toEqual({id:1,label:`One`}))})}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
    await step('the selected option is the one tab stop', async () => {
      expect(radio(el, 1).getAttribute('tabindex')).toBe('0');
      expect(radio(el, 0).getAttribute('tabindex')).toBe('-1');
      expect(radio(el, 2).getAttribute('tabindex')).toBe('-1');
    });
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => {
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},I=[`Basic`,`Disabled`,`PerOptionDisabled`,`VetoableSelection`,`Icons`,`TypedHelper`,`IdentitySelection`]}))();export{k as Basic,A as Disabled,N as Icons,F as IdentitySelection,j as PerOptionDisabled,P as TypedHelper,M as VetoableSelection,I as __namedExportsOrder,T as default};