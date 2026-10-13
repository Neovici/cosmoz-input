import{i as e}from"./preload-helper-CCSz8wUY.js";import{c as t,s as n}from"./iframe-BY2aLq_Y.js";import{t as r}from"./style-Dtje8XCx.js";import{n as i,t as a}from"./toggle-group-BZWJnJc2.js";var o,s,c,l,u,d,f,p,m,h,g,_,v,y;e((()=>{t(),a(),r(),{expect:o,waitFor:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/Toggle group`,component:`cosmoz-toggle-group`,tags:[`autodocs`]},l=[`today`,`week`,`month`],u=(e,t)=>e.shadowRoot.querySelectorAll(`[part~=option]`)[t],d=e=>e.shadowRoot.querySelector(`[part~=selected-option]`),f={render:()=>n`
        <cosmoz-toggle-group
            .options=${l}
            .value=${`week`}
            .label=${`Range`}
        ></cosmoz-toggle-group>
    `,play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`cosmoz-toggle-group`);await t(`renders radiogroup with radio options`,async()=>{await s(()=>{o(n.shadowRoot.querySelector(`[role=radiogroup]`)).toBeTruthy(),o(n.shadowRoot.querySelectorAll(`[role=radio]`).length).toBe(3)})}),await t(`the value reports aria-checked`,async()=>{o(u(n,1).getAttribute(`aria-checked`)).toBe(`true`),o(u(n,0).getAttribute(`aria-checked`)).toBe(`false`)}),await t(`the selected option is the one tab stop`,async()=>{o(u(n,1).getAttribute(`tabindex`)).toBe(`0`),o(u(n,0).getAttribute(`tabindex`)).toBe(`-1`),o(u(n,2).getAttribute(`tabindex`)).toBe(`-1`)})}},p={render:()=>n`
        <cosmoz-toggle-group
            .options=${l}
            .value=${`today`}
            disabled
        ></cosmoz-toggle-group>
    `,play:async({canvasElement:e})=>{let t=e.querySelector(`cosmoz-toggle-group`);await s(()=>{t.shadowRoot.querySelectorAll(`[role=radio]`).forEach(e=>o(e.disabled).toBe(!0))})}},m={render:()=>n`
        <cosmoz-toggle-group
            .options=${[`a`,{value:`b`,disabled:!0},`c`]}
            .value=${`a`}
        ></cosmoz-toggle-group>
    `,play:async({canvasElement:e})=>{let t=e.querySelector(`cosmoz-toggle-group`);await s(()=>{o(u(t,1).disabled).toBe(!0),o(u(t,0).disabled).toBe(!1)})}},h={render:()=>n`
        <cosmoz-toggle-group
            id="veto-group"
            .options=${l}
            .value=${`today`}
        ></cosmoz-toggle-group>
    `,play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`#veto-group`),r=!0,i=e=>{r&&e.preventDefault()};await t(`preventDefault() keeps the current value`,async()=>{n.addEventListener(`value-changed`,i),u(n,2).click(),r=!1,await s(()=>{o(n.value).toBe(`today`),o(d(n).textContent?.trim()).toBe(`today`),o(u(n,2).getAttribute(`aria-checked`)).toBe(`false`)})}),await t(`a plain click commits`,async()=>{n.addEventListener(`change`,e=>{n.value=e.detail}),u(n,2).click(),await s(()=>o(d(n).textContent?.trim()).toBe(`month`))})}},g={render:()=>n`
        <cosmoz-toggle-group
            id="icon-group"
            .options=${[{value:`explorer`,icon:()=>n`◆`,title:`Diagram`},{value:`table`,icon:()=>n`▦`,label:`Table`}]}
            .value=${`explorer`}
        ></cosmoz-toggle-group>
    `,play:async({canvasElement:e})=>{let t=e.querySelector(`#icon-group`);await s(()=>{let e=u(t,0);o(e.getAttribute(`title`)).toBe(`Diagram`),o(e.textContent?.trim()).toBe(`◆explorer`),o(u(t,1).textContent?.trim()).toBe(`▦Table`)})}},_={render:()=>{let e={id:1,label:`One`};return n`${i({options:[{value:e,label:({label:e})=>e},{value:{id:2,label:`Two`},label:({label:e})=>e}],value:e,valueProperty:`id`,label:`Helper`,onValueChanged:e=>e.detail.value})}`},play:async({canvasElement:e})=>{let t=e.querySelector(`cosmoz-toggle-group`);await s(()=>{o(t.shadowRoot.querySelector(`[part~=selected-option]`).textContent).toContain(`One`)})}},v={render:()=>n`
        <cosmoz-toggle-group
            id="identity-group"
            .options=${[{value:{id:1,label:`One`},label:({label:e})=>e},{value:{id:2,label:`Two`},label:({label:e})=>e}]}
            .value=${{id:2,label:`Two`}}
            value-property="id"
        ></cosmoz-toggle-group>
    `,play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`#identity-group`);await t(`marks the picked object`,async()=>{await s(()=>{o(u(n,1).getAttribute(`aria-checked`)).toBe(`true`)})}),await t(`the pick commits the object itself`,async()=>{n.addEventListener(`change`,e=>{n.value=e.detail}),u(n,0).click(),await s(()=>o(n.value).toEqual({id:1,label:`One`}))})}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y=[`Basic`,`Disabled`,`PerOptionDisabled`,`VetoableSelection`,`Icons`,`TypedHelper`,`IdentitySelection`]}))();export{f as Basic,p as Disabled,g as Icons,v as IdentitySelection,m as PerOptionDisabled,_ as TypedHelper,h as VetoableSelection,y as __namedExportsOrder,c as default};