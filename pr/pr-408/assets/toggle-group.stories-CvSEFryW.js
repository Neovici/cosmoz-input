import{i as e}from"./preload-helper-CCSz8wUY.js";import{c as t,i as n,s as r}from"./iframe-BmBIxSlv.js";import{a as i,i as a,n as o,o as s,r as c,t as l}from"./normalize.css-84GDCOFj.js";import{T as u,_ as d,n as f,p,t as m}from"./haunted-CJdjVnF3.js";import{t as h}from"./style-Ddw6Wg2P.js";var g,_=e((()=>{g=e=>e}));function v(e){return e?t=>typeof t==`object`&&t?t[e]:t:g}var y=e((()=>{_()})),b,x,S,C,w=e((()=>{l(),y(),m(),t(),i(),c(),b=e=>{let t=e=>typeof e.label==`function`?e.label(e.value):typeof e.value==`string`&&e.label==null?e.value:e.label??``,i=(e.options??[]).map(e=>typeof e==`object`&&e&&`value`in e?e:{value:e}),[o,s]=p(`value`),c=d(t=>v(e.valueProperty)(t),[e]),l=c(o),u=d(e=>{s(e.value)},[s]),f=d(e=>{e.setAttribute(`role`,`radio`)},[]);return r`<div
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
				title=${i.title??n}
				part=${o?`option selected-option`:`option`}
				class=${o?`option selected`:`option`}
				@click=${()=>u(i)}
				${a(e=>e&&f(e))}
			>
				${i.icon?.({width:`16`,height:`16`})}${s}
			</button>`})}
	</div>`},x=u`
	:host {
		display: inline-flex;
	}
`,S=u`
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
`,customElements.define(`cosmoz-toggle-group`,f(b,{styleSheets:[o,x,S],observedAttributes:[`value`,`label`,`disabled`,`value-property`]})),C=e=>r`<cosmoz-toggle-group
		class=${s(e.class)}
		.options=${e.options}
		.value=${e.value}
		value-property=${s(e.valueProperty)}
		.label=${s(e.label)}
		?disabled=${e.disabled}
		@value-changed=${e.onValueChanged}
	></cosmoz-toggle-group>`})),T,E,D,O,k,A,j,M,N,P,F,I,L,R;e((()=>{t(),w(),h(),{expect:T,waitFor:E}=__STORYBOOK_MODULE_TEST__,D={title:`Components/Toggle group`,component:`cosmoz-toggle-group`,tags:[`autodocs`]},O=[`today`,`week`,`month`],k=(e,t)=>e.shadowRoot.querySelectorAll(`[part~=option]`)[t],A=e=>e.shadowRoot.querySelector(`[part~=selected-option]`),j={render:()=>r`
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
            .options=${O}
            .value=${`week`}
            .label=${`Range`}
        ></cosmoz-toggle-group>
    `,play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`cosmoz-toggle-group`);await t(`renders radiogroup with radio options`,async()=>{await E(()=>{T(n.shadowRoot.querySelector(`[role=radiogroup]`)).toBeTruthy(),T(n.shadowRoot.querySelectorAll(`[role=radio]`).length).toBe(3)})}),await t(`the value reports aria-checked`,async()=>{T(k(n,1).getAttribute(`aria-checked`)).toBe(`true`),T(k(n,0).getAttribute(`aria-checked`)).toBe(`false`)})}},M={render:()=>r`
        <cosmoz-toggle-group
            .options=${O}
            .value=${`today`}
            disabled
        ></cosmoz-toggle-group>
    `,play:async({canvasElement:e})=>{let t=e.querySelector(`cosmoz-toggle-group`);await E(()=>{t.shadowRoot.querySelectorAll(`[role=radio]`).forEach(e=>T(e.disabled).toBe(!0))})}},N={render:()=>r`
        <cosmoz-toggle-group
            .options=${[`a`,{value:`b`,disabled:!0},`c`]}
            .value=${`a`}
        ></cosmoz-toggle-group>
    `,play:async({canvasElement:e})=>{let t=e.querySelector(`cosmoz-toggle-group`);await E(()=>{T(k(t,1).disabled).toBe(!0),T(k(t,0).disabled).toBe(!1)})}},P={render:()=>r`
        <cosmoz-toggle-group
            id="veto-group"
            .options=${O}
            .value=${`today`}
        ></cosmoz-toggle-group>
    `,play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`#veto-group`),r=!0,i=e=>{r&&e.preventDefault()};await t(`preventDefault() keeps the current value`,async()=>{n.addEventListener(`value-changed`,i),k(n,2).click(),await new Promise(e=>setTimeout(e,50)),r=!1,T(n.value).toBe(`today`),T(A(n).textContent?.trim()).toBe(`today`),T(k(n,2).getAttribute(`aria-checked`)).toBe(`false`)}),await t(`a plain click commits`,async()=>{n.addEventListener(`change`,e=>{n.value=e.detail}),k(n,2).click(),await new Promise(e=>setTimeout(e,50)),n.removeEventListener(`change`,()=>void 0),T(A(n).textContent?.trim()).toBe(`month`)})}},F={render:()=>r`
        <cosmoz-toggle-group
            id="icon-group"
            .options=${[{value:`explorer`,icon:()=>r`◆`,title:`Diagram`},{value:`table`,icon:()=>r`▦`,label:`Table`}]}
            .value=${`explorer`}
        ></cosmoz-toggle-group>
    `,play:async({canvasElement:e})=>{let t=e.querySelector(`#icon-group`);await E(()=>{let e=k(t,0);T(e.getAttribute(`title`)).toBe(`Diagram`),T(e.textContent?.trim()).toBe(`◆explorer`),T(k(t,1).textContent?.trim()).toBe(`▦Table`)})}},I={render:()=>{let e={id:1,label:`One`};return r`${C({options:[{value:e,label:e=>e.label},{value:{id:2,label:`Two`},label:e=>e.label}],value:e,valueProperty:`id`,label:`Helper`,onValueChanged:e=>e.detail.value})}`},play:async({canvasElement:e})=>{let t=e.querySelector(`cosmoz-toggle-group`);await E(()=>{T(t.shadowRoot.querySelector(`[part~=selected-option]`).textContent).toContain(`One`)})}},L={render:()=>r`
        <cosmoz-toggle-group
            id="identity-group"
            .options=${[{value:{id:1,label:`One`},label:e=>e.label},{value:{id:2,label:`Two`},label:e=>e.label}]}
            .value=${{id:2,label:`Two`}}
            value-property="id"
        ></cosmoz-toggle-group>
    `,play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`#identity-group`);await t(`marks the picked object`,async()=>{await E(()=>{T(k(n,1).getAttribute(`aria-checked`)).toBe(`true`)})}),await t(`the pick commits the object itself`,async()=>{n.addEventListener(`change`,e=>{n.value=e.detail}),k(n,0).click(),await new Promise(e=>setTimeout(e,50)),T(n.value).toEqual({id:1,label:`One`})})}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},R=[`Basic`,`Disabled`,`PerOptionDisabled`,`VetoableSelection`,`Icons`,`TypedHelper`,`IdentitySelection`]}))();export{j as Basic,M as Disabled,F as Icons,L as IdentitySelection,N as PerOptionDisabled,I as TypedHelper,P as VetoableSelection,R as __namedExportsOrder,D as default};