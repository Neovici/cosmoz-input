import{b as l}from"./iframe-YaSc1rsN.js";import"./cosmoz-toggle-B9lYhefJ.js";import{s as i}from"./style-BcANZBK2.js";import"./preload-helper-PPVm8Dsz.js";const{expect:c,waitFor:g}=__STORYBOOK_MODULE_TEST__,y={title:"Components/Toggle",component:"cosmoz-toggle",tags:["autodocs"]},n={render:()=>l`
        ${i}
        <cosmoz-toggle .label=${"Is active"} .value=${!0}></cosmoz-toggle>
    `,play:async({canvas:e,step:o})=>{await o("Renders checkbox element",async()=>{await e.findByShadowRole("checkbox")})}},a={render:()=>l`
        ${i}
        <cosmoz-toggle disabled .label=${"Cannot toggle"}></cosmoz-toggle>
    `,play:async({canvasElement:e,step:o})=>{const r=e.querySelector("cosmoz-toggle");await o("checkbox is disabled",async()=>{const t=r.shadowRoot.querySelector("input");c(t.disabled).toBe(!0)})}},s={render:()=>l`
        ${i}
        <cosmoz-toggle
            .label=${"Is active"}
            .error=${"Something went wrong"}
        ></cosmoz-toggle>
    `,play:async({canvasElement:e,step:o})=>{const r=e.querySelector("cosmoz-toggle");await o("error message is rendered",async()=>{await g(()=>{const t=r.shadowRoot.querySelector(".failure");c(t).not.toBeNull(),c(t.textContent).toBe("Something went wrong")})})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <cosmoz-toggle .label=\${'Is active'} .value=\${true}></cosmoz-toggle>
    \`,
  play: async ({
    canvas,
    step
  }) => {
    await step('Renders checkbox element', async () => {
      await canvas.findByShadowRole('checkbox');
    });
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const w=["Basic","Disabled","Error"];export{n as Basic,a as Disabled,s as Error,w as __namedExportsOrder,y as default};
