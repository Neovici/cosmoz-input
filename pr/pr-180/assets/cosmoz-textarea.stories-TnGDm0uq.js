import{b as n}from"./iframe-Ct4J-KOF.js";import{a as R,s as E,u as B,r as q,n as C,o as p}from"./use-input-B5Rw5Jq1.js";import{u as A,b as x,c as T,s as I,l as W,a as c}from"./style-CRnHOCF_.js";import"./preload-helper-PPVm8Dsz.js";const z=e=>{e.style.height="",e.style.height=`${e.scrollHeight}px`},_=(e,a=0)=>{if(a>0){const o=e.getAttribute("rows")??"",t=e.style.height;e.style.height="",e.setAttribute("rows",a),e.style.maxHeight=e.getBoundingClientRect().height+"px",e.style.height=t,e.setAttribute("rows",o)}},M=e=>{const{value:a,maxRows:o}=e,t=A(()=>()=>e.shadowRoot.querySelector("#input"),[]);x(()=>_(t(),o),[o,t]),x(()=>z(t()),[t,a]),x(()=>{const r=t(),s=new ResizeObserver(()=>requestAnimationFrame(()=>z(r)));return s.observe(r),()=>s.unobserve(r)},[t])},G=["rows","placeholder",...R],O=e=>{const{autocomplete:a,value:o,placeholder:t,readonly:r,disabled:s,rows:$,cols:b,maxlength:w}=e,{onChange:v,onFocus:y,onInput:f,onRef:S}=B(e);return M(e),q(n`
			<textarea id="input" part="input"
				${C(S)}
				autocomplete=${p(a)}
				placeholder=${t||" "}
				rows=${$??1} cols=${p(b)}
				?readonly=${r} ?aria-disabled=${s} ?disabled=${s}
				.value=${W(o??"")} maxlength=${p(w)} @input=${f}
				@change=${v} @focus=${y} @blur=${y}>`,e)};customElements.define("cosmoz-textarea",T(O,{observedAttributes:G,styleSheets:[I(E)],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const{expect:g,waitFor:P}=__STORYBOOK_MODULE_TEST__,U={title:"Textarea",component:"cosmoz-textarea",tags:["autodocs"]},h="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mi magna, tincidunt ac feugiat sed, ultrices luctus orci. Quisque ultricies hendrerit ultricies. Nam vestibulum mauris a arcu facilisis, ut gravida lorem sagittis. Cras sagittis arcu felis, in consectetur ante tempor vitae. Duis leo ex, sagittis id eros id, dictum egestas nibh. Etiam at porta turpis. Proin maximus mauris vitae quam fringilla, iaculis facilisis ex tempor. Sed eu risus eget nibh accumsan pharetra. Integer et orci lorem. Proin imperdiet facilisis neque, vel luctus lorem bibendum a. Donec gravida sodales gravida. Mauris interdum dignissim faucibus.",i={render:()=>n`
        ${c}
        <cosmoz-textarea .label=${"Choose color"} .value=${"Red"}></cosmoz-textarea>
    `,play:async({canvas:e,step:a})=>{await a("Renders textarea element",async()=>{await e.findByShadowRole("textbox")})}},l={name:"Error",render:()=>n`
        ${c}
        <cosmoz-textarea
            invalid
            .label=${"Choose color"}
            .value=${`Red
Green
Blue`}
            .errorMessage=${"Something is wrong!"}
            .maxRows=${2}
        ></cosmoz-textarea>
    `},m={render:()=>n`
        ${c}
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
            .value=${h}
        ></cosmoz-textarea>
        <cosmoz-textarea
            no-label-float
            placeholder=${"Write your comment here"}
            .value=${h}
        ></cosmoz-textarea>
        <cosmoz-textarea
            invalid
            .errorMessage=${"Something is rotten in the state of Denmark"}
            .label=${"Write another comment here"}
            .value=${h.toUpperCase()}
        ></cosmoz-textarea>
        <cosmoz-textarea
            disabled
            .label=${"Write another comment here"}
            .value=${"You cannot type anything here!"}
        ></cosmoz-textarea>
    `},u={render:()=>n`
        ${c}
        <cosmoz-textarea .value=${`1
2
3`} .maxRows=${2}></cosmoz-textarea>
    `,play:async({canvasElement:e,step:a})=>{const o=e.querySelector("cosmoz-textarea");await a("textarea auto grows based on content",async()=>{await P(()=>{const t=o.shadowRoot.querySelector("#input"),{height:r}=t.getBoundingClientRect();g(r).toBeGreaterThan(40),g(r).toBeLessThan(61)})})}},d={name:"Placeholder",render:()=>n`
        ${c}
        <cosmoz-textarea placeholder="Enter text..."></cosmoz-textarea>
    `,play:async({canvasElement:e,step:a})=>{const o=e.querySelector("cosmoz-textarea");await a("placeholder attribute is forwarded to inner textarea",async()=>{const t=o.shadowRoot.querySelector("textarea");g(t.placeholder).toBe("Enter text...")})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <cosmoz-textarea .value=\${'1\\n2\\n3'} .maxRows=\${2}></cosmoz-textarea>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const el = canvasElement.querySelector('cosmoz-textarea')!;
    await step('textarea auto grows based on content', async () => {
      await waitFor(() => {
        const input = el.shadowRoot!.querySelector('#input')!;
        const {
          height
        } = input.getBoundingClientRect();
        expect(height).toBeGreaterThan(40);
        expect(height).toBeLessThan(61);
      });
    });
  }
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Placeholder',
  render: () => html\`
        \${style}
        <cosmoz-textarea placeholder="Enter text..."></cosmoz-textarea>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const el = canvasElement.querySelector('cosmoz-textarea')!;
    await step('placeholder attribute is forwarded to inner textarea', async () => {
      const textarea = el.shadowRoot!.querySelector('textarea')!;
      expect(textarea.placeholder).toBe('Enter text...');
    });
  }
}`,...d.parameters?.docs?.source}}};const Y=["Basic","ErrorStory","Contour","AutoGrow","PlaceholderAttr"];export{u as AutoGrow,i as Basic,m as Contour,l as ErrorStory,d as PlaceholderAttr,Y as __namedExportsOrder,U as default};
