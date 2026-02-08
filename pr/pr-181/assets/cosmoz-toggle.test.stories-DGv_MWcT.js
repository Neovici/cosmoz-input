import{b as s}from"./iframe-CFPCSjlc.js";import"./cosmoz-toggle-CyYoRLBD.js";import{s as c}from"./style-C9mthg0Y.js";import"./preload-helper-PPVm8Dsz.js";const{expect:o,fn:y,waitFor:p}=__STORYBOOK_MODULE_TEST__,S={title:"Tests/Toggle"},r={render:()=>s`
        ${c}
        <cosmoz-toggle .label=${"Is active"}></cosmoz-toggle>
    `,play:async({canvas:n,step:t})=>{await t("Renders checkbox element",async()=>{await n.findByShadowRole("checkbox")})}},i={render:()=>s`
        ${c}
        <cosmoz-toggle .label=${"Is active"}></cosmoz-toggle>
    `,play:async({canvasElement:n,step:t})=>{const a=n.querySelector("cosmoz-toggle"),e=a.shadowRoot.querySelector("input");await t("clicking toggle dispatches change with detail: true",async()=>{const l=y();a.addEventListener("change",l,{once:!0}),e.click(),await p(()=>{o(l).toHaveBeenCalledTimes(1),o(l.mock.calls[0][0].detail).toBe(!0)})}),await t("clicking again dispatches change with detail: false",async()=>{const l=y();a.addEventListener("change",l,{once:!0}),e.click(),await p(()=>{o(l).toHaveBeenCalledTimes(1),o(l.mock.calls[0][0].detail).toBe(!1)})})}},g={render:()=>s`
        ${c}
        <cosmoz-toggle id="with-label" .label=${"Is active"}></cosmoz-toggle>
        <cosmoz-toggle id="no-label"></cosmoz-toggle>
    `,play:async({canvasElement:n,step:t})=>{await t("label is rendered when set",async()=>{const e=n.querySelector("#with-label").shadowRoot.querySelector("label");o(e).not.toBeNull(),o(e.textContent).toBe("Is active")}),await t("label is not rendered when absent",async()=>{const e=n.querySelector("#no-label").shadowRoot.querySelector("label");o(e).toBeNull()})}},d={render:()=>s`
        ${c}
        <cosmoz-toggle disabled .label=${"Cannot toggle"}></cosmoz-toggle>
    `,play:async({canvasElement:n,step:t})=>{const a=n.querySelector("cosmoz-toggle");await t("checkbox is disabled",async()=>{const e=a.shadowRoot.querySelector("input");o(e.disabled).toBe(!0)})}},m={render:()=>s`
        ${c}
        <cosmoz-toggle
            .label=${"Is active"}
            .error=${"Something went wrong"}
        ></cosmoz-toggle>
    `,play:async({canvasElement:n,step:t})=>{const a=n.querySelector("cosmoz-toggle");await t("error message is rendered",async()=>{await p(()=>{const e=a.shadowRoot.querySelector(".failure");o(e).not.toBeNull(),o(e.textContent).toBe("Something went wrong")})})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <cosmoz-toggle .label=\${'Is active'}></cosmoz-toggle>
    \`,
  play: async ({
    canvas,
    step
  }) => {
    await step('Renders checkbox element', async () => {
      await canvas.findByShadowRole('checkbox');
    });
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <cosmoz-toggle disabled .label=\${'Cannot toggle'}></cosmoz-toggle>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const el = canvasElement.querySelector('cosmoz-toggle')!;
    await step('checkbox is disabled', async () => {
      const input = el.shadowRoot!.querySelector('input')!;
      expect(input.disabled).toBe(true);
    });
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <cosmoz-toggle
            .label=\${'Is active'}
            .error=\${'Something went wrong'}
        ></cosmoz-toggle>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const el = canvasElement.querySelector('cosmoz-toggle')!;
    await step('error message is rendered', async () => {
      await waitFor(() => {
        const failure = el.shadowRoot!.querySelector('.failure');
        expect(failure).not.toBeNull();
        expect(failure!.textContent).toBe('Something went wrong');
      });
    });
  }
}`,...m.parameters?.docs?.source}}};const v=["Render","Change","Label","Disabled","Error"];export{i as Change,d as Disabled,m as Error,g as Label,r as Render,v as __namedExportsOrder,S as default};
