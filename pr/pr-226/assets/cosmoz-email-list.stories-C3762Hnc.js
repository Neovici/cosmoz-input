import{b as e}from"./iframe-PmtfQVGR.js";import"./cosmoz-email-list-DAAnR735.js";import{s as o}from"./style-DfVSaA6O.js";import"./preload-helper-PPVm8Dsz.js";import"./use-notify-property-4R8-UX0a.js";import"./util-hjyn66mY.js";const z={title:"Components/EmailList",component:"cosmoz-email-list",tags:["autodocs"]},a={render:()=>e`
        ${o}
        <cosmoz-email-list .label=${"Email to"}></cosmoz-email-list>
    `},s={render:()=>e`
        ${o}
        <cosmoz-email-list
            .label=${"Email to"}
            .value=${["john@example.com","mary@example.com"]}
        ></cosmoz-email-list>
    `},l={render:()=>e`
        ${o}
        <cosmoz-email-list
            disabled
            .label=${"Email to"}
            .value=${["john@example.com"]}
        ></cosmoz-email-list>
    `},m={render:()=>e`
        ${o}
        <cosmoz-email-list
            invalid
            .label=${"Email to"}
            .errorMessage=${"Please enter valid email addresses"}
            .value=${["john@example"]}
        ></cosmoz-email-list>
    `},i={render:()=>e`
        ${o}
        <cosmoz-email-list .label=${"Email to"}>
            <span slot="suffix" style="cursor:pointer; padding: 0 8px">Cc Bcc</span>
        </cosmoz-email-list>
    `},t={render:()=>e`
        ${o}
        <style>
            cosmoz-email-list {
                --cosmoz-input-color: #aeacac;
                --cosmoz-input-border-radius: 8px;
                --cosmoz-input-wrap-padding: 12px 16px;
                --cosmoz-input-padding: 14px 0px;
                --cosmoz-input-line-display: none;
                --cosmoz-input-contour-size: 1px;
                --cosmoz-input-label-translate-y: 8px;
                --cosmoz-input-float-display: none;
            }
        </style>
        <cosmoz-email-list .label=${"Email to"}></cosmoz-email-list>
        <cosmoz-email-list
            .label=${"Email to"}
            .value=${["john@example.com","mary@example.com"]}
        ></cosmoz-email-list>
        <cosmoz-email-list
            invalid
            .label=${"Email to"}
            .errorMessage=${"Please enter valid email addresses"}
            .value=${["john@example.com"]}
        ></cosmoz-email-list>
        <cosmoz-email-list
            disabled
            .label=${"Email to (disabled)"}
        ></cosmoz-email-list>
    `};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <cosmoz-email-list .label=\${'Email to'}></cosmoz-email-list>
    \`
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <cosmoz-email-list
            .label=\${'Email to'}
            .value=\${['john@example.com', 'mary@example.com']}
        ></cosmoz-email-list>
    \`
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <cosmoz-email-list
            disabled
            .label=\${'Email to'}
            .value=\${['john@example.com']}
        ></cosmoz-email-list>
    \`
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <cosmoz-email-list
            invalid
            .label=\${'Email to'}
            .errorMessage=\${'Please enter valid email addresses'}
            .value=\${['john@example']}
        ></cosmoz-email-list>
    \`
}`,...m.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <cosmoz-email-list .label=\${'Email to'}>
            <span slot="suffix" style="cursor:pointer; padding: 0 8px">Cc Bcc</span>
        </cosmoz-email-list>
    \`
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <style>
            cosmoz-email-list {
                --cosmoz-input-color: #aeacac;
                --cosmoz-input-border-radius: 8px;
                --cosmoz-input-wrap-padding: 12px 16px;
                --cosmoz-input-padding: 14px 0px;
                --cosmoz-input-line-display: none;
                --cosmoz-input-contour-size: 1px;
                --cosmoz-input-label-translate-y: 8px;
                --cosmoz-input-float-display: none;
            }
        </style>
        <cosmoz-email-list .label=\${'Email to'}></cosmoz-email-list>
        <cosmoz-email-list
            .label=\${'Email to'}
            .value=\${['john@example.com', 'mary@example.com']}
        ></cosmoz-email-list>
        <cosmoz-email-list
            invalid
            .label=\${'Email to'}
            .errorMessage=\${'Please enter valid email addresses'}
            .value=\${['john@example.com']}
        ></cosmoz-email-list>
        <cosmoz-email-list
            disabled
            .label=\${'Email to (disabled)'}
        ></cosmoz-email-list>
    \`
}`,...t.parameters?.docs?.source}}};const $=["Basic","WithValues","Disabled","WithError","WithSuffix","Contour"];export{a as Basic,t as Contour,l as Disabled,m as WithError,i as WithSuffix,s as WithValues,$ as __namedExportsOrder,z as default};
