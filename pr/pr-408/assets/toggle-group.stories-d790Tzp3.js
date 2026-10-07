import{i as e}from"./preload-helper-CCSz8wUY.js";import{c as t,i as n,s as r}from"./iframe-CubTD70P.js";import{a as i,i as a,n as o,o as s,r as c,t as l}from"./normalize.css-CXalxi7s.js";import{T as u,_ as d,n as f,p,t as m}from"./haunted-DgdIC5Nc.js";import{t as h}from"./style-ChiiSJIa.js";var g,_,v=e((()=>{g=e=>e,_=(e,...t)=>typeof e==`function`?e(...t):e}));function y(e){return e?t=>typeof t==`object`&&t?t[e]:t:g}var b=e((()=>{v()})),x,S,C,w,T=e((()=>{l(),v(),b(),m(),t(),i(),c(),x=e=>{let t=e=>e.label==null?typeof e.value==`string`?e.value:``:_(e.label,e.value),i=(e.options??[]).map(e=>typeof e==`object`&&e&&`value`in e?e:{value:e}),[o,s]=p(`value`),c=d(t=>y(e.valueProperty)(t),[e]),l=c(o),u=d(e=>{e.setAttribute(`role`,`radio`)},[]),f=d(e=>s(e.value),[s]);return r`<div
		class="group"
		part="group"
		role="radiogroup"
		aria-label=${e.label??``}
	>
		${i.map(i=>{let o=l===c(i.value),s=t(i);return r`<button
				type="button"
				role="radio"
				aria-checked=${o?`true`:`false`}
				?disabled=${i.disabled||e.disabled}
				title=${i.title==null?n:_(i.title,i.value)}
				part=${o?`option selected-option`:`option`}
				class=${o?`option selected`:`option`}
				@click=${()=>f(i)}
				${a(e=>e&&u(e))}
			>
				${i.icon?.({width:`16`,height:`16`})}${s}
			</button>`})}
	</div>`},S=u`
	:host {
		display: inline-flex;
	}
`,C=u`
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

	.option:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}
`,customElements.define(`cosmoz-toggle-group`,f(x,{styleSheets:[o,S,C],observedAttributes:[`value`,`label`,`disabled`,`value-property`]})),w=e=>r`<cosmoz-toggle-group
		class=${s(e.class)}
		.options=${e.options}
		.value=${e.value}
		value-property=${s(e.valueProperty)}
		.label=${s(e.label)}
		?disabled=${e.disabled}
		@value-changed=${e.onValueChanged}
	></cosmoz-toggle-group>`})),E,D,O,k,A,j,M,N,P,F,I,L,R,z;e((()=>{t(),T(),h(),{expect:E,waitFor:D}=__STORYBOOK_MODULE_TEST__,O={title:`Components/Toggle group`,component:`cosmoz-toggle-group`,tags:[`autodocs`]},k=[`today`,`week`,`month`],A=(e,t)=>e.shadowRoot.querySelectorAll(`[part~=option]`)[t],j=e=>e.shadowRoot.querySelector(`[part~=selected-option]`),M={render:()=>r`
        <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        />
        <style>
            :host {
                font-family: 'Inter', sans-serif;
                color: var(--cz-color-text-primary);
                background: var(--cz-color-bg-primary);
            }
        </style>
        <cosmoz-toggle-group
            .options=${k}
            .value=${`week`}
            .label=${`Range`}
        ></cosmoz-toggle-group>
    `,play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`cosmoz-toggle-group`);await t(`renders radiogroup with radio options`,async()=>{await D(()=>{E(n.shadowRoot.querySelector(`[role=radiogroup]`)).toBeTruthy(),E(n.shadowRoot.querySelectorAll(`[role=radio]`).length).toBe(3)})}),await t(`the value reports aria-checked`,async()=>{E(A(n,1).getAttribute(`aria-checked`)).toBe(`true`),E(A(n,0).getAttribute(`aria-checked`)).toBe(`false`)})}},N={render:()=>r`
        <cosmoz-toggle-group
            .options=${k}
            .value=${`today`}
            disabled
        ></cosmoz-toggle-group>
    `,play:async({canvasElement:e})=>{let t=e.querySelector(`cosmoz-toggle-group`);await D(()=>{t.shadowRoot.querySelectorAll(`[role=radio]`).forEach(e=>E(e.disabled).toBe(!0))})}},P={render:()=>r`
        <cosmoz-toggle-group
            .options=${[`a`,{value:`b`,disabled:!0},`c`]}
            .value=${`a`}
        ></cosmoz-toggle-group>
    `,play:async({canvasElement:e})=>{let t=e.querySelector(`cosmoz-toggle-group`);await D(()=>{E(A(t,1).disabled).toBe(!0),E(A(t,0).disabled).toBe(!1)})}},F={render:()=>r`
        <cosmoz-toggle-group
            id="veto-group"
            .options=${k}
            .value=${`today`}
        ></cosmoz-toggle-group>
    `,play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`#veto-group`),r=!0,i=e=>{r&&e.preventDefault()};await t(`preventDefault() keeps the current value`,async()=>{n.addEventListener(`value-changed`,i),A(n,2).click(),await new Promise(e=>setTimeout(e,50)),r=!1,E(n.value).toBe(`today`),E(j(n).textContent?.trim()).toBe(`today`),E(A(n,2).getAttribute(`aria-checked`)).toBe(`false`)}),await t(`a plain click commits`,async()=>{n.addEventListener(`change`,e=>{n.value=e.detail}),A(n,2).click(),await new Promise(e=>setTimeout(e,50)),n.removeEventListener(`change`,()=>void 0),E(j(n).textContent?.trim()).toBe(`month`)})}},I={render:()=>r`
        <cosmoz-toggle-group
            id="icon-group"
            .options=${[{value:`explorer`,icon:()=>r`◆`,title:`Diagram`},{value:`table`,icon:()=>r`▦`,label:`Table`}]}
            .value=${`explorer`}
        ></cosmoz-toggle-group>
    `,play:async({canvasElement:e})=>{let t=e.querySelector(`#icon-group`);await D(()=>{let e=A(t,0);E(e.getAttribute(`title`)).toBe(`Diagram`),E(e.textContent?.trim()).toBe(`◆explorer`),E(A(t,1).textContent?.trim()).toBe(`▦Table`)})}},L={render:()=>{let e={id:1,label:`One`};return r`${w({options:[{value:e,label:e=>e.label},{value:{id:2,label:`Two`},label:e=>e.label}],value:e,valueProperty:`id`,label:`Helper`,onValueChanged:e=>e.detail.value})}`},play:async({canvasElement:e})=>{let t=e.querySelector(`cosmoz-toggle-group`);await D(()=>{E(t.shadowRoot.querySelector(`[part~=selected-option]`).textContent).toContain(`One`)})}},R={render:()=>r`
        <cosmoz-toggle-group
            id="identity-group"
            .options=${[{value:{id:1,label:`One`},label:e=>e.label},{value:{id:2,label:`Two`},label:e=>e.label}]}
            .value=${{id:2,label:`Two`}}
            value-property="id"
        ></cosmoz-toggle-group>
    `,play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`#identity-group`);await t(`marks the picked object`,async()=>{await D(()=>{E(A(n,1).getAttribute(`aria-checked`)).toBe(`true`)})}),await t(`the pick commits the object itself`,async()=>{n.addEventListener(`change`,e=>{n.value=e.detail}),A(n,0).click(),await new Promise(e=>setTimeout(e,50)),E(n.value).toEqual({id:1,label:`One`})})}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        />
        <style>
            :host {
                font-family: 'Inter', sans-serif;
                color: var(--cz-color-text-primary);
                background: var(--cz-color-bg-primary);
            }
        </style>
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
      await new Promise(r => setTimeout(r, 50));
      vetoes = false;
      expect(el.value as string).toBe('today');
      expect(selected(el).textContent?.trim()).toBe('today');
      expect(radio(el, 2).getAttribute('aria-checked')).toBe('false');
    });
    await step('a plain click commits', async () => {
      // controlled component: the consumer writes the committed value
      // back (property; the container re-renders)
      el.addEventListener('change', e => {
        el.value = (e as CustomEvent<string>).detail;
      });
      radio(el, 2).click();
      await new Promise(r => setTimeout(r, 50));
      el.removeEventListener('change', () => undefined);
      expect(selected(el).textContent?.trim()).toBe('month');
    });
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
      // the title renders as the attribute; the icon before the label
      expect(explorer.getAttribute('title')).toBe('Diagram');
      // a string option with no label names itself
      expect(explorer.textContent?.trim()).toBe('◆explorer');
      expect(radio(el, 1).textContent?.trim()).toBe('▦Table');
    });
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => {
    // the helper is typed: the pick flows as the option element
    const picked = {
      id: 1,
      label: 'One'
    };
    return html\`\${toggleGroup({
      options: [{
        value: picked,
        label: o => o.label
      }, {
        value: {
          id: 2,
          label: 'Two'
        },
        label: o => o.label
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
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <cosmoz-toggle-group
            id="identity-group"
            .options=\${[{
    value: {
      id: 1,
      label: 'One'
    },
    label: o => o.label
  }, {
    value: {
      id: 2,
      label: 'Two'
    },
    label: o => o.label
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
      // give the controlled loop a frame
      await new Promise(r => setTimeout(r, 50));
      expect(el.value as {
        id: number;
      }).toEqual({
        id: 1,
        label: 'One'
      });
    });
  }
}`,...R.parameters?.docs?.source}}},z=[`Basic`,`Disabled`,`PerOptionDisabled`,`VetoableSelection`,`Icons`,`TypedHelper`,`IdentitySelection`]}))();export{M as Basic,N as Disabled,I as Icons,R as IdentitySelection,P as PerOptionDisabled,L as TypedHelper,F as VetoableSelection,z as __namedExportsOrder,O as default};