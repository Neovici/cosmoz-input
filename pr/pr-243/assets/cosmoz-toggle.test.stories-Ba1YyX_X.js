import{n as e}from"./chunk-zsgVPwQN.js";import{c as t,s as n}from"./iframe-AQsdAuvw.js";import{n as r,t as i}from"./style-jW6SSCBF.js";import{t as a}from"./cosmoz-toggle-BhRVqxpl.js";var o,s,c,l,u,d,f;e((()=>{t(),a(),i(),{expect:o,fn:s,waitFor:c}=__STORYBOOK_MODULE_TEST__,l={title:`Tests/Toggle`},u={render:()=>n`
        ${r}
        <cosmoz-toggle .label=${`Is active`}></cosmoz-toggle>
    `,play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`cosmoz-toggle`),r=n.shadowRoot.querySelector(`input`);await t(`clicking toggle dispatches change with detail: true`,async()=>{let e=s();n.addEventListener(`change`,e,{once:!0}),r.click(),await c(()=>{o(e).toHaveBeenCalledTimes(1),o(e.mock.calls[0][0].detail).toBe(!0)})}),await t(`clicking again dispatches change with detail: false`,async()=>{let e=s();n.addEventListener(`change`,e,{once:!0}),r.click(),await c(()=>{o(e).toHaveBeenCalledTimes(1),o(e.mock.calls[0][0].detail).toBe(!1)})})}},d={render:()=>n`
        ${r}
        <cosmoz-toggle id="with-label" .label=${`Is active`}></cosmoz-toggle>
        <cosmoz-toggle id="no-label"></cosmoz-toggle>
    `,play:async({canvasElement:e,step:t})=>{await t(`label is rendered when set`,async()=>{let t=e.querySelector(`#with-label`).shadowRoot.querySelector(`label`);o(t).not.toBeNull(),o(t.textContent).toBe(`Is active`)}),await t(`label is not rendered when absent`,async()=>{o(e.querySelector(`#no-label`).shadowRoot.querySelector(`label`)).toBeNull()})}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f=[`Change`,`Label`]}))();export{u as Change,d as Label,f as __namedExportsOrder,l as default};