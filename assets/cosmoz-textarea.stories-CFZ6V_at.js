import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{c as t,l as n}from"./iframe-CtIH_Sk2.js";import{t as r}from"./cosmoz-textarea-DapPKSXr.js";var i,a,o,s,c;function l(){return(l=e((()=>{n(),r(),i={title:`Components/Textarea`,component:`cosmoz-textarea`,tags:[`autodocs`]},a={render:()=>t`
        <cosmoz-textarea
            .label=${`Choose color`}
            .value=${`Red`}
            hint=${`Hint text`}
        ></cosmoz-textarea>
    `,play:async({canvas:e,step:t})=>{await t(`Renders textarea element`,async()=>{await e.findByShadowRole(`textbox`)})}},o={name:`Error`,render:()=>t`
        <cosmoz-textarea
            invalid
            .label=${`Choose color`}
            .value=${`Red
Green
Blue`}
            .errorMessage=${`Something is wrong!`}
            .maxRows=${2}
        ></cosmoz-textarea>
    `},s={render:()=>t`
        <cosmoz-textarea
            compact
            .label=${`Choose color`}
            .value=${`Red`}
            hint=${`Hint text`}
        ></cosmoz-textarea>
    `},c=[`Basic`,`ErrorStory`,`Compact`],a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <cosmoz-textarea
            .label=\${'Choose color'}
            .value=\${'Red'}
            hint=\${'Hint text'}
        ></cosmoz-textarea>
    \`,
  play: async ({
    canvas,
    step
  }) => {
    await step('Renders textarea element', async () => {
      await canvas.findByShadowRole('textbox');
    });
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Error',
  render: () => html\`
        <cosmoz-textarea
            invalid
            .label=\${'Choose color'}
            .value=\${'Red\\nGreen\\nBlue'}
            .errorMessage=\${'Something is wrong!'}
            .maxRows=\${2}
        ></cosmoz-textarea>
    \`
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <cosmoz-textarea
            compact
            .label=\${'Choose color'}
            .value=\${'Red'}
            hint=\${'Hint text'}
        ></cosmoz-textarea>
    \`
}`,...s.parameters?.docs?.source}}}})))()}l();export{a as Basic,s as Compact,o as ErrorStory,c as __namedExportsOrder,i as default};