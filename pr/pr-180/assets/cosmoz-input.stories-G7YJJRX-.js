import{b as o}from"./iframe-BRs-rZB5.js";import"./cosmoz-input-HcMOIrJP.js";import{s as n}from"./style-CNIi10bU.js";import"./preload-helper-PPVm8Dsz.js";import"./use-input-Bj5AD63v.js";const d={title:"Components/Input",component:"cosmoz-input",tags:["autodocs"]},e={render:()=>o`
        ${n}
        <cosmoz-input .label=${"Choose color"}></cosmoz-input>
    `},s={render:()=>o`
        ${n}
        <cosmoz-input
            always-float-label
            .label=${"Choose color"}
            placeholder=${"placeholder text"}
        ></cosmoz-input>
    `},a={render:()=>o`
        ${n}
        <cosmoz-input no-label-float .label=${"Choose color"}></cosmoz-input>
    `},t={render:()=>o`
        ${n}
        <cosmoz-input
            .label=${"Choose color"}
            .value=${"Red"}
            invalid
            .errorMessage=${"Something is wrong!"}
        ></cosmoz-input>
    `},l={render:()=>o`
        ${n}
        <cosmoz-input
            autosize
            no-label-float
            type="number"
            .value=${3.12}
        ></cosmoz-input>
    `},i={render:()=>o`
        ${n}
        <cosmoz-input
            no-label-float
            type="color"
            .value=${"#ff0000"}
        ></cosmoz-input>
    `},r={render:()=>o`
        ${n}
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
        <cosmoz-input .label=${"Insert a text input"}></cosmoz-input>
        <cosmoz-input
            .label=${"I want this input to have the suffix match the same placing!"}
            type="number"
            ><span slot="suffix">${"suffix"}</span></cosmoz-input
        >
        <cosmoz-input .label=${"Same thing of above, with the prefix!"}
            ><span slot="prefix">${"Prefix:"}</span></cosmoz-input
        >
        <cosmoz-input always-float-label .label=${"This label always floats"}
            ><span slot="prefix">${"Example:"}</span></cosmoz-input
        >
        <cosmoz-input
            no-label-float
            .label=${"This label never floats"}
        ></cosmoz-input>
        <cosmoz-input no-label-float .label=${"This label never floats with prefix"}
            ><span slot="prefix">${"Example:"}</span></cosmoz-input
        >
        <cosmoz-input no-label-float .label=${"This label never floats with sufix"}
            ><span slot="suffix">${"suffix"}</span></cosmoz-input
        >
        <cosmoz-input
            invalid
            .label=${"This input is invalid!"}
            .errorMessage=${"Something is rotten in the state of Denmark."}
        ></cosmoz-input>
        <cosmoz-input disabled .label=${"This input is disabled!"}></cosmoz-input>
    `};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <cosmoz-input .label=\${'Choose color'}></cosmoz-input>
    \`
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <cosmoz-input
            always-float-label
            .label=\${'Choose color'}
            placeholder=\${'placeholder text'}
        ></cosmoz-input>
    \`
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <cosmoz-input no-label-float .label=\${'Choose color'}></cosmoz-input>
    \`
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <cosmoz-input
            .label=\${'Choose color'}
            .value=\${'Red'}
            invalid
            .errorMessage=\${'Something is wrong!'}
        ></cosmoz-input>
    \`
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <cosmoz-input
            autosize
            no-label-float
            type="number"
            .value=\${3.12}
        ></cosmoz-input>
    \`
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <cosmoz-input
            no-label-float
            type="color"
            .value=\${'#ff0000'}
        ></cosmoz-input>
    \`
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const f=["Basic","AlwaysFloatLabel","NoLabelFloat","Error","Autosize","Color","Contour"];export{s as AlwaysFloatLabel,l as Autosize,e as Basic,i as Color,r as Contour,t as Error,a as NoLabelFloat,f as __namedExportsOrder,d as default};
