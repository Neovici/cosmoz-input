import{b as r}from"./iframe-Dva1N4O_.js";import"./cosmoz-textarea-DceMhRCL.js";import{s as n}from"./style-B25iUjjS.js";import"./preload-helper-PPVm8Dsz.js";import"./use-input-C1HRFeVg.js";const d={title:"Components/Textarea",component:"cosmoz-textarea",tags:["autodocs"]},t="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mi magna, tincidunt ac feugiat sed, ultrices luctus orci. Quisque ultricies hendrerit ultricies. Nam vestibulum mauris a arcu facilisis, ut gravida lorem sagittis. Cras sagittis arcu felis, in consectetur ante tempor vitae. Duis leo ex, sagittis id eros id, dictum egestas nibh. Etiam at porta turpis. Proin maximus mauris vitae quam fringilla, iaculis facilisis ex tempor. Sed eu risus eget nibh accumsan pharetra. Integer et orci lorem. Proin imperdiet facilisis neque, vel luctus lorem bibendum a. Donec gravida sodales gravida. Mauris interdum dignissim faucibus.",e={render:()=>r`
        ${n}
        <cosmoz-textarea .label=${"Choose color"} .value=${"Red"}></cosmoz-textarea>
    `,play:async({canvas:s,step:i})=>{await i("Renders textarea element",async()=>{await s.findByShadowRole("textbox")})}},o={name:"Error",render:()=>r`
        ${n}
        <cosmoz-textarea
            invalid
            .label=${"Choose color"}
            .value=${`Red
Green
Blue`}
            .errorMessage=${"Something is wrong!"}
            .maxRows=${2}
        ></cosmoz-textarea>
    `},a={render:()=>r`
        ${n}
        <style>
            cosmoz-textarea {
                --cosmoz-input-color: #aeacac;
                --cosmoz-input-border-radius: 4px;
                --cosmoz-input-wrap-padding: 12px;
                --cosmoz-input-line-display: none;
                --cosmoz-input-contour-size: 1px;
                --cosmoz-input-label-translate-y: 10px;
                --cosmoz-input-float-display: none;
                --cosmoz-input-padding: 10px 8px;
            }
            cosmoz-textarea:not(:first-child) {
                margin-top: 10px;
            }
        </style>
        <cosmoz-textarea
            .label=${"Write your comment here"}
            .value=${t}
        ></cosmoz-textarea>
        <cosmoz-textarea
            no-label-float
            placeholder=${"Write your comment here"}
            .value=${t}
        ></cosmoz-textarea>
        <cosmoz-textarea
            invalid
            .errorMessage=${"Something is rotten in the state of Denmark"}
            .label=${"Write another comment here"}
            .value=${t.toUpperCase()}
        ></cosmoz-textarea>
        <cosmoz-textarea
            disabled
            .label=${"Write another comment here"}
            .value=${"You cannot type anything here!"}
        ></cosmoz-textarea>
    `};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Error',
  render: () => html\`
        \${style}
        <cosmoz-textarea
            invalid
            .label=\${'Choose color'}
            .value=\${'Red\\nGreen\\nBlue'}
            .errorMessage=\${'Something is wrong!'}
            .maxRows=\${2}
        ></cosmoz-textarea>
    \`
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <style>
            cosmoz-textarea {
                --cosmoz-input-color: #aeacac;
                --cosmoz-input-border-radius: 4px;
                --cosmoz-input-wrap-padding: 12px;
                --cosmoz-input-line-display: none;
                --cosmoz-input-contour-size: 1px;
                --cosmoz-input-label-translate-y: 10px;
                --cosmoz-input-float-display: none;
                --cosmoz-input-padding: 10px 8px;
            }
            cosmoz-textarea:not(:first-child) {
                margin-top: 10px;
            }
        </style>
        <cosmoz-textarea
            .label=\${'Write your comment here'}
            .value=\${loremIpsum}
        ></cosmoz-textarea>
        <cosmoz-textarea
            no-label-float
            placeholder=\${'Write your comment here'}
            .value=\${loremIpsum}
        ></cosmoz-textarea>
        <cosmoz-textarea
            invalid
            .errorMessage=\${'Something is rotten in the state of Denmark'}
            .label=\${'Write another comment here'}
            .value=\${loremIpsum.toUpperCase()}
        ></cosmoz-textarea>
        <cosmoz-textarea
            disabled
            .label=\${'Write another comment here'}
            .value=\${'You cannot type anything here!'}
        ></cosmoz-textarea>
    \`
}`,...a.parameters?.docs?.source}}};const x=["Basic","ErrorStory","Contour"];export{e as Basic,a as Contour,o as ErrorStory,x as __namedExportsOrder,d as default};
