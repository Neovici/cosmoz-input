import{b as g}from"./iframe-YaSc1rsN.js";import"./cosmoz-toggle-B9lYhefJ.js";import{s as d}from"./style-BcANZBK2.js";import"./preload-helper-PPVm8Dsz.js";const{expect:n,fn:r,waitFor:i}=__STORYBOOK_MODULE_TEST__,u={title:"Tests/Toggle"},c={render:()=>g`
        ${d}
        <cosmoz-toggle .label=${"Is active"}></cosmoz-toggle>
    `,play:async({canvasElement:o,step:a})=>{const l=o.querySelector("cosmoz-toggle"),e=l.shadowRoot.querySelector("input");await a("clicking toggle dispatches change with detail: true",async()=>{const t=r();l.addEventListener("change",t,{once:!0}),e.click(),await i(()=>{n(t).toHaveBeenCalledTimes(1),n(t.mock.calls[0][0].detail).toBe(!0)})}),await a("clicking again dispatches change with detail: false",async()=>{const t=r();l.addEventListener("change",t,{once:!0}),e.click(),await i(()=>{n(t).toHaveBeenCalledTimes(1),n(t.mock.calls[0][0].detail).toBe(!1)})})}},s={render:()=>g`
        ${d}
        <cosmoz-toggle id="with-label" .label=${"Is active"}></cosmoz-toggle>
        <cosmoz-toggle id="no-label"></cosmoz-toggle>
    `,play:async({canvasElement:o,step:a})=>{await a("label is rendered when set",async()=>{const e=o.querySelector("#with-label").shadowRoot.querySelector("label");n(e).not.toBeNull(),n(e.textContent).toBe("Is active")}),await a("label is not rendered when absent",async()=>{const e=o.querySelector("#no-label").shadowRoot.querySelector("label");n(e).toBeNull()})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const w=["Change","Label"];export{c as Change,s as Label,w as __namedExportsOrder,u as default};
