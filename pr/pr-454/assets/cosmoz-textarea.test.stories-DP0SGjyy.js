import{i as e}from"./preload-helper-CCSz8wUY.js";import{c as t,s as n}from"./iframe-DGItRHTC.js";import{n as r,t as i}from"./style-rTDkK5H_.js";import{t as a}from"./cosmoz-textarea-DvNmILGp.js";var o,s,c,l,u,d,f;e((()=>{t(),a(),i(),{expect:o,waitFor:s}=__STORYBOOK_MODULE_TEST__,c={title:`Tests/Textarea`},l={render:()=>n`
        ${r}
        <cosmoz-textarea .value=${`1
2
3`} .maxRows=${2}></cosmoz-textarea>
    `,play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`cosmoz-textarea`);await t(`textarea auto grows based on content`,async()=>{await s(()=>{let{height:e}=n.shadowRoot.querySelector(`#input`).getBoundingClientRect();o(e).toBeGreaterThan(40),o(e).toBeLessThan(66)})})}},u={render:()=>n`
        ${r}
        <cosmoz-textarea placeholder="Enter text..."></cosmoz-textarea>
    `,play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`cosmoz-textarea`);await t(`placeholder attribute is forwarded to inner textarea`,async()=>{let e=n.shadowRoot.querySelector(`textarea`);o(e.placeholder).toBe(`Enter text...`)})}},d={render:()=>n`
        ${r}
        <cosmoz-textarea label="Notes" hint="Markdown" required></cosmoz-textarea>
    `,play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`cosmoz-textarea`),r=n.shadowRoot.querySelector(`#input`);await t(`field semantics match the input`,async()=>{o(r.getAttribute(`aria-describedby`)).toBe(`hint`),o(r.getAttribute(`aria-disabled`)).toBe(`false`),o(r.hasAttribute(`required`)).toBe(!0)}),await t(`a visible error replaces the description and announces invalid`,async()=>{n.errorMessage=`Required`,n.setAttribute(`invalid`,``),await s(()=>{o(r.getAttribute(`aria-describedby`)).toBe(`error`),o(r.getAttribute(`aria-invalid`)).toBe(`true`)})})}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
        expect(height).toBeLessThan(66);
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <cosmoz-textarea label="Notes" hint="Markdown" required></cosmoz-textarea>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const el = canvasElement.querySelector('cosmoz-textarea')!;
    const area = el.shadowRoot!.querySelector('#input')!;
    await step('field semantics match the input', async () => {
      expect(area.getAttribute('aria-describedby')).toBe('hint');
      expect(area.getAttribute('aria-disabled')).toBe('false');
      expect(area.hasAttribute('required')).toBe(true);
    });
    await step('a visible error replaces the description and announces invalid', async () => {
      el.errorMessage = 'Required';
      el.setAttribute('invalid', '');
      await waitFor(() => {
        expect(area.getAttribute('aria-describedby')).toBe('error');
        expect(area.getAttribute('aria-invalid')).toBe('true');
      });
    });
  }
}`,...d.parameters?.docs?.source}}},f=[`AutoGrow`,`Placeholder`,`AnnouncedMessages`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
        expect(height).toBeLessThan(66);
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <cosmoz-textarea label="Notes" hint="Markdown" required></cosmoz-textarea>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const el = canvasElement.querySelector('cosmoz-textarea')!;
    const area = el.shadowRoot!.querySelector('#input')!;
    await step('field semantics match the input', async () => {
      expect(area.getAttribute('aria-describedby')).toBe('hint');
      expect(area.getAttribute('aria-disabled')).toBe('false');
      expect(area.hasAttribute('required')).toBe(true);
    });
    await step('a visible error replaces the description and announces invalid', async () => {
      el.errorMessage = 'Required';
      el.setAttribute('invalid', '');
      await waitFor(() => {
        expect(area.getAttribute('aria-describedby')).toBe('error');
        expect(area.getAttribute('aria-invalid')).toBe('true');
      });
    });
  }
}`,...d.parameters?.docs?.source}}}}))();export{d as AnnouncedMessages,l as AutoGrow,u as Placeholder,f as __namedExportsOrder,c as default};