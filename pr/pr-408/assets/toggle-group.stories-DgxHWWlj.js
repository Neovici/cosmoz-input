import{i as e}from"./preload-helper-CCSz8wUY.js";import{c as t,s as n}from"./iframe-11g_BkLN.js";import{T as r,_ as i,n as a,p as o,t as s}from"./haunted-BBqIBVyi.js";import{i as c,n as l,r as u,t as d}from"./normalize.css-DUGTCyoA.js";import{t as f}from"./style-CGWCQf5O.js";var p,m,h,g,_=e((()=>{d(),s(),u(),p=e=>typeof e==`string`?{value:e,label:e}:e,m=e=>{let t=(e.options??[]).map(p),[r,a]=o(`value`),s=i(e=>a(e),[a]),l=i(e=>{let t=e.currentTarget.getAttribute(`data-value`);t!=null&&s(t)},[s]),u=i(e=>{e.setAttribute(`role`,`radio`),e.setAttribute(`aria-checked`,e.getAttribute(`data-selected`)===`true`?`true`:`false`)},[]);return n`<div
		class="group"
		part="group"
		role="radiogroup"
		aria-label=${e.label??``}
	>
		${t.map(t=>n`<button
					type="button"
					role="radio"
					aria-checked=${t.value===r?`true`:`false`}
					?disabled=${t.disabled||e.disabled}
					data-value=${t.value}
					data-selected=${t.value===r?`true`:`false`}
					class=${t.value===r?`option selected`:`option`}
					part=${t.value===r?`option selected-option`:`option`}
					@click=${l}
					${c(e=>e&&u(e))}
				>
					${t.label??t.value}
				</button>`)}
	</div>`},h=r`
	:host {
		display: inline-flex;
	}
`,g=r`
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
		height: var(--cz-control-height-sm);
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
`,customElements.define(`cosmoz-toggle-group`,a(m,{styleSheets:[l,h,g],observedAttributes:[`value`,`label`,`disabled`]}))})),v,y,b,x,S,C,w,T,E;e((()=>{t(),_(),f(),{expect:v,waitFor:y}=__STORYBOOK_MODULE_TEST__,b={title:`Components/Toggle group`,component:`cosmoz-toggle-group`,tags:[`autodocs`]},x=[`today`,`week`,`month`],S={render:()=>n`
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
            .options=${x}
            .value=${`week`}
            .label=${`Range`}
        ></cosmoz-toggle-group>
    `,play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`cosmoz-toggle-group`);await t(`renders radiogroup with radio options`,async()=>{await y(()=>{v(n.shadowRoot.querySelector(`[role=radiogroup]`)).toBeTruthy(),v(n.shadowRoot.querySelectorAll(`[role=radio]`).length).toBe(3)})}),await t(`the value reports aria-checked`,async()=>{let e=n.shadowRoot.querySelector(`[data-value=week]`);v(e.getAttribute(`aria-checked`)).toBe(`true`),v(n.shadowRoot.querySelector(`[data-value=today]`).getAttribute(`aria-checked`)).toBe(`false`)})}},C={render:()=>n`
        <cosmoz-toggle-group
            .options=${x}
            .value=${`today`}
            disabled
        ></cosmoz-toggle-group>
    `,play:async({canvasElement:e})=>{let t=e.querySelector(`cosmoz-toggle-group`);await y(()=>{t.shadowRoot.querySelectorAll(`[role=radio]`).forEach(e=>v(e.disabled).toBe(!0))})}},w={render:()=>n`
        <cosmoz-toggle-group
            .options=${[`a`,{value:`b`,disabled:!0},`c`]}
            .value=${`a`}
        ></cosmoz-toggle-group>
    `,play:async({canvasElement:e})=>{let t=e.querySelector(`cosmoz-toggle-group`);await y(()=>{let e=t.shadowRoot.querySelector(`[data-value=b]`);v(e?.disabled).toBe(!0)})}},T={render:()=>n`
        <cosmoz-toggle-group
            id="veto-group"
            .options=${x}
            .value=${`today`}
        ></cosmoz-toggle-group>
    `,play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`#veto-group`),r=!0,i=e=>{r&&e.preventDefault()};await t(`preventDefault() keeps the current value`,async()=>{n.addEventListener(`value-changed`,i),n.shadowRoot.querySelector(`[data-value=month]`).click(),await new Promise(e=>setTimeout(e,50)),r=!1,v(n.value).toBe(`today`),v(n.shadowRoot.querySelector(`[data-value=today]`).getAttribute(`aria-checked`)).toBe(`true`),v(n.shadowRoot.querySelector(`[data-value=month]`).getAttribute(`aria-checked`)).toBe(`false`)}),await t(`a plain click commits`,async()=>{n.addEventListener(`change`,e=>{n.setAttribute(`value`,e.detail)}),n.shadowRoot.querySelector(`[data-value=month]`).click(),await new Promise(e=>setTimeout(e,50)),n.removeEventListener(`change`,()=>void 0),v(n.shadowRoot.querySelector(`[data-value=month]`).getAttribute(`aria-checked`)).toBe(`true`)})}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
      const week = el.shadowRoot!.querySelector('[data-value=week]')!;
      expect(week.getAttribute('aria-checked')).toBe('true');
      expect(el.shadowRoot!.querySelector('[data-value=today]')!.getAttribute('aria-checked')).toBe('false');
    });
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
      const b = el.shadowRoot!.querySelector('[data-value=b]') as HTMLButtonElement | undefined;
      expect(b?.disabled).toBe(true);
    });
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
      (el.shadowRoot!.querySelector('[data-value=month]') as HTMLElement).click();
      await new Promise(r => setTimeout(r, 50));
      vetoes = false;
      expect(el.value).toBe('today');
      expect(el.shadowRoot!.querySelector('[data-value=today]')!.getAttribute('aria-checked')).toBe('true');
      expect(el.shadowRoot!.querySelector('[data-value=month]')!.getAttribute('aria-checked')).toBe('false');
    });
    await step('a plain click commits', async () => {
      // controlled component: the consumer writes the committed value
      // back (attribute reflects; the container re-renders)
      el.addEventListener('change', e => {
        el.setAttribute('value', (e as CustomEvent<string>).detail);
      });
      (el.shadowRoot!.querySelector('[data-value=month]') as HTMLElement).click();
      await new Promise(r => setTimeout(r, 50));
      el.removeEventListener('change', () => undefined);
      expect(el.shadowRoot!.querySelector('[data-value=month]')!.getAttribute('aria-checked')).toBe('true');
    });
  }
}`,...T.parameters?.docs?.source}}},E=[`Basic`,`Disabled`,`PerOptionDisabled`,`VetoableSelection`]}))();export{S as Basic,C as Disabled,w as PerOptionDisabled,T as VetoableSelection,E as __namedExportsOrder,b as default};