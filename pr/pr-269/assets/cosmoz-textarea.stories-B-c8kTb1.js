import{n as e}from"./chunk-zsgVPwQN.js";import{G as t,K as n}from"./iframe-XdIfrZ1A.js";import{n as r,t as i}from"./style-Do7FhrfL.js";import{t as a}from"./cosmoz-textarea-D60id-1H.js";var o,s,c,l,u,d;e((()=>{n(),a(),i(),o={title:`Components/Textarea`,component:`cosmoz-textarea`,tags:[`autodocs`]},s=`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mi magna, tincidunt ac feugiat sed, ultrices luctus orci. Quisque ultricies hendrerit ultricies. Nam vestibulum mauris a arcu facilisis, ut gravida lorem sagittis. Cras sagittis arcu felis, in consectetur ante tempor vitae. Duis leo ex, sagittis id eros id, dictum egestas nibh. Etiam at porta turpis. Proin maximus mauris vitae quam fringilla, iaculis facilisis ex tempor. Sed eu risus eget nibh accumsan pharetra. Integer et orci lorem. Proin imperdiet facilisis neque, vel luctus lorem bibendum a. Donec gravida sodales gravida. Mauris interdum dignissim faucibus.`,c={render:()=>t`
        ${r}
        <cosmoz-textarea .label=${`Choose color`} .value=${`Red`}></cosmoz-textarea>
    `,play:async({canvas:e,step:t})=>{await t(`Renders textarea element`,async()=>{await e.findByShadowRole(`textbox`)})}},l={name:`Error`,render:()=>t`
        ${r}
        <cosmoz-textarea
            invalid
            .label=${`Choose color`}
            .value=${`Red
Green
Blue`}
            .errorMessage=${`Something is wrong!`}
            .maxRows=${2}
        ></cosmoz-textarea>
    `},u={render:()=>t`
        ${r}
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
            .label=${`Write your comment here`}
            .value=${s}
        ></cosmoz-textarea>
        <cosmoz-textarea
            no-label-float
            placeholder=${`Write your comment here`}
            .value=${s}
        ></cosmoz-textarea>
        <cosmoz-textarea
            invalid
            .errorMessage=${`Something is rotten in the state of Denmark`}
            .label=${`Write another comment here`}
            .value=${s.toUpperCase()}
        ></cosmoz-textarea>
        <cosmoz-textarea
            disabled
            .label=${`Write another comment here`}
            .value=${`You cannot type anything here!`}
        ></cosmoz-textarea>
    `},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d=[`Basic`,`ErrorStory`,`Contour`]}))();export{c as Basic,u as Contour,l as ErrorStory,d as __namedExportsOrder,o as default};