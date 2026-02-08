import{b as l}from"./iframe-CeOOcqer.js";import"./cosmoz-textarea-5M8aogiw.js";import{s as d}from"./style-_WWn2IB-.js";import"./preload-helper-PPVm8Dsz.js";import"./use-input-BVuFEdn9.js";const{expect:c,waitFor:p}=__STORYBOOK_MODULE_TEST__,w={title:"Tests/Textarea"},a={render:()=>l`
        ${d}
        <cosmoz-textarea .label=${"Choose color"} .value=${"Red"}></cosmoz-textarea>
    `,play:async({canvas:e,step:t})=>{await t("Renders textarea element",async()=>{await e.findByShadowRole("textbox")})}},o={render:()=>l`
        ${d}
        <cosmoz-textarea .value=${`1
2
3`} .maxRows=${2}></cosmoz-textarea>
    `,play:async({canvasElement:e,step:t})=>{const n=e.querySelector("cosmoz-textarea");await t("textarea auto grows based on content",async()=>{await p(()=>{const s=n.shadowRoot.querySelector("#input"),{height:m}=s.getBoundingClientRect();c(m).toBeGreaterThan(40),c(m).toBeLessThan(61)})})}},r={render:()=>l`
        ${d}
        <cosmoz-textarea placeholder="Enter text..."></cosmoz-textarea>
    `,play:async({canvasElement:e,step:t})=>{const n=e.querySelector("cosmoz-textarea");await t("placeholder attribute is forwarded to inner textarea",async()=>{const s=n.shadowRoot.querySelector("textarea");c(s.placeholder).toBe("Enter text...")})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <cosmoz-textarea .label=\${'Choose color'} .value=\${'Red'}></cosmoz-textarea>
    \`,
  play: async ({
    canvas,
    step
  }) => {
    await step('Renders textarea element', async () => {
      await canvas.findByShadowRole('textbox');
    });
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <cosmoz-textarea .value=\${'1\\n2\\n3'} .maxRows=\${2}></cosmoz-textarea>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const el = canvasElement.querySelector('cosmoz-textarea')!;
    await step('textarea auto grows based on content', async () => {
      await waitFor(() => {
        const input = el.shadowRoot!.querySelector('#input')!;
        const {
          height
        } = input.getBoundingClientRect();
        expect(height).toBeGreaterThan(40);
        expect(height).toBeLessThan(61);
      });
    });
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <cosmoz-textarea placeholder="Enter text..."></cosmoz-textarea>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const el = canvasElement.querySelector('cosmoz-textarea')!;
    await step('placeholder attribute is forwarded to inner textarea', async () => {
      const textarea = el.shadowRoot!.querySelector('textarea')!;
      expect(textarea.placeholder).toBe('Enter text...');
    });
  }
}`,...r.parameters?.docs?.source}}};const R=["Render","AutoGrow","Placeholder"];export{o as AutoGrow,r as Placeholder,a as Render,R as __namedExportsOrder,w as default};
