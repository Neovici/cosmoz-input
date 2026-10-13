import{i as e}from"./preload-helper-CCSz8wUY.js";import{c as t,s as n}from"./iframe-BJv8jgNL.js";import{n as r,t as i}from"./style-Bn_vr1Ja.js";import{t as a}from"./cosmoz-toggle-Dpzx52bp.js";var o,s,c,l,u,d,f,p;e((()=>{t(),a(),i(),{expect:o,fn:s,waitFor:c}=__STORYBOOK_MODULE_TEST__,l={title:`Tests/Toggle`},u={render:()=>n`
        ${r}
        <cosmoz-toggle .label=${`Is active`}></cosmoz-toggle>
    `,play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`cosmoz-toggle`),r=n.shadowRoot.querySelector(`input`);await t(`clicking toggle dispatches change with detail: true`,async()=>{let e=s();n.addEventListener(`change`,e,{once:!0}),r.click(),await c(()=>{o(e).toHaveBeenCalledTimes(1),o(e.mock.calls[0][0].detail).toBe(!0)})}),await t(`clicking again dispatches change with detail: false`,async()=>{let e=s();n.addEventListener(`change`,e,{once:!0}),r.click(),await c(()=>{o(e).toHaveBeenCalledTimes(1),o(e.mock.calls[0][0].detail).toBe(!1)})})}},d={render:()=>n`
        ${r}
        <cosmoz-toggle id="with-label" .label=${`Is active`}></cosmoz-toggle>
        <cosmoz-toggle id="no-label"></cosmoz-toggle>
    `,play:async({canvasElement:e,step:t})=>{await t(`label is rendered when set`,async()=>{let t=e.querySelector(`#with-label`).shadowRoot.querySelector(`label`);o(t).not.toBeNull(),o(t.textContent).toBe(`Is active`)}),await t(`label is not rendered when absent`,async()=>{let t=e.querySelector(`#no-label`).shadowRoot.querySelector(`label`);o(t).toBeNull()})}},f={render:()=>n`
        ${r}
        <cosmoz-toggle id="labelled" .label=${`Is active`}></cosmoz-toggle>
        <cosmoz-toggle id="named" aria-label="Email the supplier"></cosmoz-toggle>
        <cosmoz-toggle
            id="failing"
            .label=${`Notify`}
            .error=${`Pick a channel`}
        ></cosmoz-toggle>
    `,play:async({canvasElement:e,step:t})=>{let n=t=>e.querySelector(`#${t}`).shadowRoot.querySelector(`input`);await t(`the input is a switch`,async()=>{await c(()=>o(n(`labelled`).getAttribute(`role`)).toBe(`switch`))}),await t(`aria-label on the host names an unlabelled switch`,async()=>{await c(()=>o(n(`named`).getAttribute(`aria-label`)).toBe(`Email the supplier`)),o(n(`labelled`).hasAttribute(`aria-label`)).toBe(!1)}),await t(`the error is linked and marks the switch invalid`,async()=>{let e=n(`failing`);await c(()=>o(e.getAttribute(`aria-invalid`)).toBe(`true`));let t=e.getAttribute(`aria-describedby`);o(e.getRootNode()instanceof ShadowRoot).toBe(!0),o(e.getRootNode().getElementById(t).textContent).toBe(`Pick a channel`),o(n(`labelled`).hasAttribute(`aria-invalid`)).toBe(!1)})}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <cosmoz-toggle .label=\${'Is active'}></cosmoz-toggle>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const el = canvasElement.querySelector('cosmoz-toggle')!;
    const input = el.shadowRoot!.querySelector('input')!;
    await step('clicking toggle dispatches change with detail: true', async () => {
      const changeSpy = fn();
      el.addEventListener('change', changeSpy, {
        once: true
      });
      input.click();
      await waitFor(() => {
        expect(changeSpy).toHaveBeenCalledTimes(1);
        expect((changeSpy.mock.calls[0][0] as CustomEvent).detail).toBe(true);
      });
    });
    await step('clicking again dispatches change with detail: false', async () => {
      const changeSpy = fn();
      el.addEventListener('change', changeSpy, {
        once: true
      });
      input.click();
      await waitFor(() => {
        expect(changeSpy).toHaveBeenCalledTimes(1);
        expect((changeSpy.mock.calls[0][0] as CustomEvent).detail).toBe(false);
      });
    });
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <cosmoz-toggle id="with-label" .label=\${'Is active'}></cosmoz-toggle>
        <cosmoz-toggle id="no-label"></cosmoz-toggle>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    await step('label is rendered when set', async () => {
      const el = canvasElement.querySelector('#with-label')!;
      const label = el.shadowRoot!.querySelector('label');
      expect(label).not.toBeNull();
      expect(label!.textContent).toBe('Is active');
    });
    await step('label is not rendered when absent', async () => {
      const el = canvasElement.querySelector('#no-label')!;
      const label = el.shadowRoot!.querySelector('label');
      expect(label).toBeNull();
    });
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <cosmoz-toggle id="labelled" .label=\${'Is active'}></cosmoz-toggle>
        <cosmoz-toggle id="named" aria-label="Email the supplier"></cosmoz-toggle>
        <cosmoz-toggle
            id="failing"
            .label=\${'Notify'}
            .error=\${'Pick a channel'}
        ></cosmoz-toggle>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const input = (id: string) => canvasElement.querySelector(\`#\${id}\`)!.shadowRoot!.querySelector('input')!;
    await step('the input is a switch', async () => {
      await waitFor(() => expect(input('labelled').getAttribute('role')).toBe('switch'));
    });
    await step('aria-label on the host names an unlabelled switch', async () => {
      await waitFor(() => expect(input('named').getAttribute('aria-label')).toBe('Email the supplier'));
      expect(input('labelled').hasAttribute('aria-label')).toBe(false);
    });
    await step('the error is linked and marks the switch invalid', async () => {
      const el = input('failing');
      await waitFor(() => expect(el.getAttribute('aria-invalid')).toBe('true'));
      const id = el.getAttribute('aria-describedby')!;
      expect(el.getRootNode() instanceof ShadowRoot).toBe(true);
      expect((el.getRootNode() as ShadowRoot).getElementById(id)!.textContent).toBe('Pick a channel');
      expect(input('labelled').hasAttribute('aria-invalid')).toBe(false);
    });
  }
}`,...f.parameters?.docs?.source}}},p=[`Change`,`Label`,`Switch`]}))();export{u as Change,d as Label,f as Switch,p as __namedExportsOrder,l as default};