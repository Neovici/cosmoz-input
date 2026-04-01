import{n as e}from"./chunk-zsgVPwQN.js";import{c as t,s as n}from"./iframe-AQsdAuvw.js";import{t as r}from"./cosmoz-textarea-BJ6g9T3e.js";var i,a,o,s;e((()=>{t(),r(),i={title:`Components/Textarea`,component:`cosmoz-textarea`,tags:[`autodocs`]},a={render:()=>n`
        <cosmoz-textarea .label=${`Choose color`} .value=${`Red`}></cosmoz-textarea>
    `,play:async({canvas:e,step:t})=>{await t(`Renders textarea element`,async()=>{await e.findByShadowRole(`textbox`)})}},o={name:`Error`,render:()=>n`
        <cosmoz-textarea
            invalid
            .label=${`Choose color`}
            .value=${`Red
Green
Blue`}
            .errorMessage=${`Something is wrong!`}
            .maxRows=${2}
        ></cosmoz-textarea>
    `},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => html\`
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
}`,...o.parameters?.docs?.source}}},s=[`Basic`,`ErrorStory`]}))();export{a as Basic,o as ErrorStory,s as __namedExportsOrder,i as default};