import{b as l}from"./iframe-0wfgs31L.js";import"./cosmoz-textarea-Dp4m3SWs.js";import{s as p}from"./style-CiHdT7xP.js";import"./preload-helper-PPVm8Dsz.js";import"./use-notify-property-CbNkGZz6.js";import"./use-input-_Fqa8T7X.js";const{expect:s,waitFor:i}=__STORYBOOK_MODULE_TEST__,w={title:"Tests/Textarea"},e={render:()=>l`
        ${p}
        <cosmoz-textarea .value=${`1
2
3`} .maxRows=${2}></cosmoz-textarea>
    `,play:async({canvasElement:a,step:o})=>{const r=a.querySelector("cosmoz-textarea");await o("textarea auto grows based on content",async()=>{await i(()=>{const n=r.shadowRoot.querySelector("#input"),{height:c}=n.getBoundingClientRect();s(c).toBeGreaterThan(40),s(c).toBeLessThan(61)})})}},t={render:()=>l`
        ${p}
        <cosmoz-textarea placeholder="Enter text..."></cosmoz-textarea>
    `,play:async({canvasElement:a,step:o})=>{const r=a.querySelector("cosmoz-textarea");await o("placeholder attribute is forwarded to inner textarea",async()=>{const n=r.shadowRoot.querySelector("textarea");s(n.placeholder).toBe("Enter text...")})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const g=["AutoGrow","Placeholder"];export{e as AutoGrow,t as Placeholder,g as __namedExportsOrder,w as default};
