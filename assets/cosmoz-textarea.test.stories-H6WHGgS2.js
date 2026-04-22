import{n as e}from"./chunk-zsgVPwQN.js";import{G as t,K as n}from"./iframe-XdIfrZ1A.js";import{n as r,t as i}from"./style-Do7FhrfL.js";import{t as a}from"./cosmoz-textarea-D60id-1H.js";var o,s,c,l,u,d;e((()=>{n(),a(),i(),{expect:o,waitFor:s}=__STORYBOOK_MODULE_TEST__,c={title:`Tests/Textarea`},l={render:()=>t`
        ${r}
        <cosmoz-textarea .value=${`1
2
3`} .maxRows=${2}></cosmoz-textarea>
    `,play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`cosmoz-textarea`);await t(`textarea auto grows based on content`,async()=>{await s(()=>{let{height:e}=n.shadowRoot.querySelector(`#input`).getBoundingClientRect();o(e).toBeGreaterThan(40),o(e).toBeLessThan(61)})})}},u={render:()=>t`
        ${r}
        <cosmoz-textarea placeholder="Enter text..."></cosmoz-textarea>
    `,play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`cosmoz-textarea`);await t(`placeholder attribute is forwarded to inner textarea`,async()=>{o(n.shadowRoot.querySelector(`textarea`).placeholder).toBe(`Enter text...`)})}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d=[`AutoGrow`,`Placeholder`]}))();export{l as AutoGrow,u as Placeholder,d as __namedExportsOrder,c as default};