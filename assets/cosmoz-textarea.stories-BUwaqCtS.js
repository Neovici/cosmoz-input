import{i as e}from"./preload-helper-CCSz8wUY.js";import{c as t,s as n}from"./iframe-BQwV8F9O.js";import{t as r}from"./cosmoz-textarea-DgxZfNX0.js";var i,a,o,s,c;e((()=>{t(),r(),i={title:`Components/Textarea`,component:`cosmoz-textarea`,tags:[`autodocs`]},a={render:()=>n`
        <cosmoz-textarea
            .label=${`Choose color`}
            .value=${`Red`}
            hint=${`Hint text`}
        ></cosmoz-textarea>
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
    `},s={render:()=>n`
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
}`,...s.parameters?.docs?.source}}}}))();export{a as Basic,s as Compact,o as ErrorStory,c as __namedExportsOrder,i as default};