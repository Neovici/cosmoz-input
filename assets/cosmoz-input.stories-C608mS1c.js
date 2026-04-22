import{n as e}from"./chunk-zsgVPwQN.js";import{G as t,K as n}from"./iframe-XdIfrZ1A.js";import{n as r,t as i}from"./style-Do7FhrfL.js";import{t as a}from"./cosmoz-input-DCtVKeYR.js";var o,s,c,l,u,d,f,p,m,h,g,_,v;e((()=>{n(),a(),i(),{expect:o,waitFor:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/Input`,component:`cosmoz-input`,tags:[`autodocs`]},l={render:()=>t`
        ${r}
        <cosmoz-input .label=${`Choose color`}></cosmoz-input>
    `,play:async({canvas:e,step:t})=>{await t(`Renders input element`,async()=>{await e.findByShadowRole(`textbox`)})}},u={render:()=>t`
        ${r}
        <cosmoz-input
            always-float-label
            .label=${`Choose color`}
            placeholder=${`placeholder text`}
        ></cosmoz-input>
    `},d={render:()=>t`
        ${r}
        <cosmoz-input no-label-float .label=${`Choose color`}></cosmoz-input>
    `},f={render:()=>t`
        ${r}
        <cosmoz-input
            .label=${`Choose color`}
            .value=${`Red`}
            invalid
            .errorMessage=${`Something is wrong!`}
        ></cosmoz-input>
    `,play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`cosmoz-input`);await t(`error message is rendered`,async()=>{await s(()=>{let e=n.shadowRoot.querySelector(`.error`);o(e).not.toBeNull(),o(e.textContent).toBe(`Something is wrong!`)})})}},p={render:()=>t`
        ${r}
        <cosmoz-input
            autosize
            no-label-float
            type="number"
            .value=${3.12}
        ></cosmoz-input>
    `},m={render:()=>t`
        ${r}
        <cosmoz-input
            no-label-float
            type="color"
            .value=${`#ff0000`}
        ></cosmoz-input>
    `},h={render:()=>t`
        ${r}
        <cosmoz-input
            type="number"
            .label=${`This number input has no spinner`}
            no-spinner
        ></cosmoz-input>
    `},g={render:()=>t`
        ${r}
        <cosmoz-input no-label-float type="date"></cosmoz-input>
    `},_={render:()=>t`
        ${r}
        <style>
            cosmoz-input {
                --cosmoz-input-color: #aeacac;
                --cosmoz-input-border-radius: 8px;
                --cosmoz-input-wrap-padding: 12px 16px;
                --cosmoz-input-padding: 14px 0px;
                --cosmoz-input-line-display: none;
                --cosmoz-input-contour-size: 1px;
                --cosmoz-input-label-translate-y: 8px;
                --cosmoz-input-float-display: none;
            }
            span {
                margin: 0 4px;
            }
        </style>
        <cosmoz-input .label=${`Insert a text input`}></cosmoz-input>
        <cosmoz-input
            .label=${`I want this input to have the suffix match the same placing!`}
            type="number"
            ><span slot="suffix">${`suffix`}</span></cosmoz-input
        >
        <cosmoz-input .label=${`Same thing of above, with the prefix!`}
            ><span slot="prefix">${`Prefix:`}</span></cosmoz-input
        >
        <cosmoz-input always-float-label .label=${`This label always floats`}
            ><span slot="prefix">${`Example:`}</span></cosmoz-input
        >
        <cosmoz-input
            no-label-float
            .label=${`This label never floats`}
        ></cosmoz-input>
        <cosmoz-input no-label-float .label=${`This label never floats with prefix`}
            ><span slot="prefix">${`Example:`}</span></cosmoz-input
        >
        <cosmoz-input no-label-float .label=${`This label never floats with sufix`}
            ><span slot="suffix">${`suffix`}</span></cosmoz-input
        >
        <cosmoz-input
            invalid
            .label=${`This input is invalid!`}
            .errorMessage=${`Something is rotten in the state of Denmark.`}
        ></cosmoz-input>
        <cosmoz-input disabled .label=${`This input is disabled!`}></cosmoz-input>
    `},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <cosmoz-input .label=\${'Choose color'}></cosmoz-input>
    \`,
  play: async ({
    canvas,
    step
  }) => {
    await step('Renders input element', async () => {
      await canvas.findByShadowRole('textbox');
    });
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <cosmoz-input
            always-float-label
            .label=\${'Choose color'}
            placeholder=\${'placeholder text'}
        ></cosmoz-input>
    \`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <cosmoz-input no-label-float .label=\${'Choose color'}></cosmoz-input>
    \`
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <cosmoz-input
            .label=\${'Choose color'}
            .value=\${'Red'}
            invalid
            .errorMessage=\${'Something is wrong!'}
        ></cosmoz-input>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const el = canvasElement.querySelector('cosmoz-input')!;
    await step('error message is rendered', async () => {
      await waitFor(() => {
        const error = el.shadowRoot!.querySelector('.error');
        expect(error).not.toBeNull();
        expect(error!.textContent).toBe('Something is wrong!');
      });
    });
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <cosmoz-input
            autosize
            no-label-float
            type="number"
            .value=\${3.12}
        ></cosmoz-input>
    \`
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <cosmoz-input
            no-label-float
            type="color"
            .value=\${'#ff0000'}
        ></cosmoz-input>
    \`
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <cosmoz-input
            type="number"
            .label=\${'This number input has no spinner'}
            no-spinner
        ></cosmoz-input>
    \`
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <cosmoz-input no-label-float type="date"></cosmoz-input>
    \`
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <style>
            cosmoz-input {
                --cosmoz-input-color: #aeacac;
                --cosmoz-input-border-radius: 8px;
                --cosmoz-input-wrap-padding: 12px 16px;
                --cosmoz-input-padding: 14px 0px;
                --cosmoz-input-line-display: none;
                --cosmoz-input-contour-size: 1px;
                --cosmoz-input-label-translate-y: 8px;
                --cosmoz-input-float-display: none;
            }
            span {
                margin: 0 4px;
            }
        </style>
        <cosmoz-input .label=\${'Insert a text input'}></cosmoz-input>
        <cosmoz-input
            .label=\${'I want this input to have the suffix match the same placing!'}
            type="number"
            ><span slot="suffix">\${'suffix'}</span></cosmoz-input
        >
        <cosmoz-input .label=\${'Same thing of above, with the prefix!'}
            ><span slot="prefix">\${'Prefix:'}</span></cosmoz-input
        >
        <cosmoz-input always-float-label .label=\${'This label always floats'}
            ><span slot="prefix">\${'Example:'}</span></cosmoz-input
        >
        <cosmoz-input
            no-label-float
            .label=\${'This label never floats'}
        ></cosmoz-input>
        <cosmoz-input no-label-float .label=\${'This label never floats with prefix'}
            ><span slot="prefix">\${'Example:'}</span></cosmoz-input
        >
        <cosmoz-input no-label-float .label=\${'This label never floats with sufix'}
            ><span slot="suffix">\${'suffix'}</span></cosmoz-input
        >
        <cosmoz-input
            invalid
            .label=\${'This input is invalid!'}
            .errorMessage=\${'Something is rotten in the state of Denmark.'}
        ></cosmoz-input>
        <cosmoz-input disabled .label=\${'This input is disabled!'}></cosmoz-input>
    \`
}`,..._.parameters?.docs?.source}}},v=[`Basic`,`AlwaysFloatLabel`,`NoLabelFloat`,`Error`,`Autosize`,`Color`,`NoSpinner`,`Date`,`Contour`]}))();export{u as AlwaysFloatLabel,p as Autosize,l as Basic,m as Color,_ as Contour,g as Date,f as Error,d as NoLabelFloat,h as NoSpinner,v as __namedExportsOrder,c as default};