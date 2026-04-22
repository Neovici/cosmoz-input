import{n as e}from"./chunk-zsgVPwQN.js";import{G as t,K as n}from"./iframe-XdIfrZ1A.js";import{n as r,t as i}from"./style-Do7FhrfL.js";import{t as a}from"./cosmoz-toggle-nm3WP3U0.js";var o,s,c,l,u,d,f;e((()=>{n(),a(),i(),{expect:o,waitFor:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/Toggle`,component:`cosmoz-toggle`,tags:[`autodocs`]},l={render:()=>t`
        ${r}
        <cosmoz-toggle .label=${`Is active`} .value=${!0}></cosmoz-toggle>
    `,play:async({canvas:e,step:t})=>{await t(`Renders checkbox element`,async()=>{await e.findByShadowRole(`checkbox`)})}},u={render:()=>t`
        ${r}
        <cosmoz-toggle disabled .label=${`Cannot toggle`}></cosmoz-toggle>
    `,play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`cosmoz-toggle`);await t(`checkbox is disabled`,async()=>{o(n.shadowRoot.querySelector(`input`).disabled).toBe(!0)})}},d={render:()=>t`
        ${r}
        <cosmoz-toggle
            .label=${`Is active`}
            .error=${`Something went wrong`}
        ></cosmoz-toggle>
    `,play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`cosmoz-toggle`);await t(`error message is rendered`,async()=>{await s(()=>{let e=n.shadowRoot.querySelector(`.failure`);o(e).not.toBeNull(),o(e.textContent).toBe(`Something went wrong`)})})}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f=[`Basic`,`Disabled`,`Error`]}))();export{l as Basic,u as Disabled,d as Error,f as __namedExportsOrder,c as default};