import{i as e}from"./preload-helper-CCSz8wUY.js";import{c as t,i as n,s as r}from"./iframe-CjVNyCZl.js";import{T as i,_ as a,n as o,p as s,t as c}from"./haunted-BSkg3LSO.js";import{i as l,n as u,r as d,t as f}from"./normalize.css-BihRZTyK.js";import{t as p}from"./style-BUe9GIO4.js";var m,h=e((()=>{m=e=>e}));function g(e){return e?t=>typeof t==`object`&&t?t[e]:t:m}var _=e((()=>{h()})),v,y,b,x=e((()=>{f(),_(),c(),t(),d(),v=e=>{let t=e=>typeof e.label==`function`?e.label(e.value):typeof e.value==`string`&&e.label==null?e.value:e.label??``,i=(e.options??[]).map(e=>typeof e==`object`&&e&&`value`in e?e:{value:e}),[o,c]=s(`value`),u=a(t=>g(e.valueProperty)(t),[e]),d=u(o),f=a(e=>{c(e.value)},[c]),p=a(e=>{e.setAttribute(`role`,`radio`)},[]);return r`<div
		class="group"
		part="group"
		role="radiogroup"
		aria-label=${e.label??``}
	>
		${i.map(i=>{let a=d===u(i.value),o=t(i);return r`<button
				type="button"
				role="radio"
				aria-checked=${a?`true`:`false`}
				?disabled=${i.disabled||e.disabled}
				title=${i.title??n}
				part=${a?`option selected-option`:`option`}
				class=${a?`option selected`:`option`}
				@click=${()=>f(i)}
				${l(e=>e&&p(e))}
			>
				${i.icon}${o}
			</button>`})}
	</div>`},y=i`
	:host {
		display: inline-flex;
	}
`,b=i`
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
`,customElements.define(`cosmoz-toggle-group`,o(v,{styleSheets:[u,y,b],observedAttributes:[`value`,`label`,`disabled`,`value-property`]}))})),S,C,w,T,E,D,O,k,A,j,M,N,P;e((()=>{t(),x(),p(),{expect:S,waitFor:C}=__STORYBOOK_MODULE_TEST__,w={title:`Components/Toggle group`,component:`cosmoz-toggle-group`,tags:[`autodocs`]},T=[`today`,`week`,`month`],E=(e,t)=>e.shadowRoot.querySelectorAll(`[part~=option]`)[t],D=e=>e.shadowRoot.querySelector(`[part~=selected-option]`),O={render:()=>r`
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
            .options=${T}
            .value=${`week`}
            .label=${`Range`}
        ></cosmoz-toggle-group>
    `,play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`cosmoz-toggle-group`);await t(`renders radiogroup with radio options`,async()=>{await C(()=>{S(n.shadowRoot.querySelector(`[role=radiogroup]`)).toBeTruthy(),S(n.shadowRoot.querySelectorAll(`[role=radio]`).length).toBe(3)})}),await t(`the value reports aria-checked`,async()=>{S(E(n,1).getAttribute(`aria-checked`)).toBe(`true`),S(E(n,0).getAttribute(`aria-checked`)).toBe(`false`)})}},k={render:()=>r`
        <cosmoz-toggle-group
            .options=${T}
            .value=${`today`}
            disabled
        ></cosmoz-toggle-group>
    `,play:async({canvasElement:e})=>{let t=e.querySelector(`cosmoz-toggle-group`);await C(()=>{t.shadowRoot.querySelectorAll(`[role=radio]`).forEach(e=>S(e.disabled).toBe(!0))})}},A={render:()=>r`
        <cosmoz-toggle-group
            .options=${[`a`,{value:`b`,disabled:!0},`c`]}
            .value=${`a`}
        ></cosmoz-toggle-group>
    `,play:async({canvasElement:e})=>{let t=e.querySelector(`cosmoz-toggle-group`);await C(()=>{S(E(t,1).disabled).toBe(!0),S(E(t,0).disabled).toBe(!1)})}},j={render:()=>r`
        <cosmoz-toggle-group
            id="veto-group"
            .options=${T}
            .value=${`today`}
        ></cosmoz-toggle-group>
    `,play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`#veto-group`),r=!0,i=e=>{r&&e.preventDefault()};await t(`preventDefault() keeps the current value`,async()=>{n.addEventListener(`value-changed`,i),E(n,2).click(),await new Promise(e=>setTimeout(e,50)),r=!1,S(n.value).toBe(`today`),S(D(n).textContent?.trim()).toBe(`today`),S(E(n,2).getAttribute(`aria-checked`)).toBe(`false`)}),await t(`a plain click commits`,async()=>{n.addEventListener(`change`,e=>{n.value=e.detail}),E(n,2).click(),await new Promise(e=>setTimeout(e,50)),n.removeEventListener(`change`,()=>void 0),S(D(n).textContent?.trim()).toBe(`month`)})}},M={render:()=>r`
        <cosmoz-toggle-group
            id="icon-group"
            .options=${[{value:`explorer`,icon:r`◆`,title:`Diagram`},{value:`table`,icon:r`▦`,label:`Table`}]}
            .value=${`explorer`}
        ></cosmoz-toggle-group>
    `,play:async({canvasElement:e})=>{let t=e.querySelector(`#icon-group`);await C(()=>{let e=E(t,0);S(e.getAttribute(`title`)).toBe(`Diagram`),S(e.textContent?.trim()).toBe(`◆explorer`),S(E(t,1).textContent?.trim()).toBe(`▦Table`)})}},N={render:()=>r`
        <cosmoz-toggle-group
            id="identity-group"
            .options=${[{value:{id:1,label:`One`},label:e=>e.label},{value:{id:2,label:`Two`},label:e=>e.label}]}
            .value=${{id:2,label:`Two`}}
            value-property="id"
        ></cosmoz-toggle-group>
    `,play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`#identity-group`);await t(`marks the picked object`,async()=>{await C(()=>{S(E(n,1).getAttribute(`aria-checked`)).toBe(`true`)})}),await t(`the pick commits the object itself`,async()=>{n.addEventListener(`change`,e=>{n.value=e.detail}),E(n,0).click(),await new Promise(e=>setTimeout(e,50)),S(n.value).toEqual({id:1,label:`One`})})}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <cosmoz-toggle-group
            id="icon-group"
            .options=\${[{
    value: 'explorer',
    icon: html\`◆\`,
    title: 'Diagram'
  }, {
    value: 'table',
    icon: html\`▦\`,
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P=[`Basic`,`Disabled`,`PerOptionDisabled`,`VetoableSelection`,`Icons`,`IdentitySelection`]}))();export{O as Basic,k as Disabled,M as Icons,N as IdentitySelection,A as PerOptionDisabled,j as VetoableSelection,P as __namedExportsOrder,w as default};