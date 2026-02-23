import{b as o}from"./iframe-CxxAyQR4.js";import"./cosmoz-input-DPlgeXjF.js";import{s as e}from"./style-Cc735k9B.js";import"./preload-helper-PPVm8Dsz.js";import"./use-input-PADWrpEL.js";const{expect:u,waitFor:z}=__STORYBOOK_MODULE_TEST__,y={title:"Components/Input",component:"cosmoz-input",tags:["autodocs"]},n={render:()=>o`
        ${e}
        <cosmoz-input .label=${"Choose color"}></cosmoz-input>
    `,play:async({canvas:p,step:c})=>{await c("Renders input element",async()=>{await p.findByShadowRole("textbox")})}},s={render:()=>o`
        ${e}
        <cosmoz-input
            always-float-label
            .label=${"Choose color"}
            placeholder=${"placeholder text"}
        ></cosmoz-input>
    `},t={render:()=>o`
        ${e}
        <cosmoz-input no-label-float .label=${"Choose color"}></cosmoz-input>
    `},a={render:()=>o`
        ${e}
        <cosmoz-input
            .label=${"Choose color"}
            .value=${"Red"}
            invalid
            .errorMessage=${"Something is wrong!"}
        ></cosmoz-input>
    `,play:async({canvasElement:p,step:c})=>{const d=p.querySelector("cosmoz-input");await c("error message is rendered",async()=>{await z(()=>{const m=d.shadowRoot.querySelector(".error");u(m).not.toBeNull(),u(m.textContent).toBe("Something is wrong!")})})}},l={render:()=>o`
        ${e}
        <cosmoz-input
            autosize
            no-label-float
            type="number"
            .value=${3.12}
        ></cosmoz-input>
    `},r={render:()=>o`
        ${e}
        <cosmoz-input
            no-label-float
            type="color"
            .value=${"#ff0000"}
        ></cosmoz-input>
    `},i={render:()=>o`
        ${e}
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
    `};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <cosmoz-input
            always-float-label
            .label=\${'Choose color'}
            placeholder=\${'placeholder text'}
        ></cosmoz-input>
    \`
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <cosmoz-input no-label-float .label=\${'Choose color'}></cosmoz-input>
    \`
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <cosmoz-input
            autosize
            no-label-float
            type="number"
            .value=\${3.12}
        ></cosmoz-input>
    \`
}`,...l.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <cosmoz-input
            no-label-float
            type="color"
            .value=\${'#ff0000'}
        ></cosmoz-input>
    \`
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const w=["Basic","AlwaysFloatLabel","NoLabelFloat","Error","Autosize","Color","Contour"];export{s as AlwaysFloatLabel,l as Autosize,n as Basic,r as Color,i as Contour,a as Error,t as NoLabelFloat,w as __namedExportsOrder,y as default};
