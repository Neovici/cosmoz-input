import{b as a}from"./iframe-Ct4J-KOF.js";import{u as _,c as D,s as O,l as V,a as r}from"./style-CRnHOCF_.js";import{a as k,u as N,r as K,n as U,o as c,s as Y}from"./use-input-B5Rw5Jq1.js";import"./preload-helper-PPVm8Dsz.js";const j=n=>_(()=>{if(n==null)return;const t=new RegExp(n,"u");return e=>{!e.defaultPrevented&&e.data&&!t.test(e.data)&&e.preventDefault()}},[n]),G=({placeholder:n,noLabelFloat:t,label:e})=>(t?e:void 0)||n||" ",J=["type","pattern","allowed-pattern","min","max","step","autosize","label","placeholder",...k],Q=n=>{const{type:t="text",pattern:e,allowedPattern:o,autocomplete:q,value:E,readonly:T,disabled:C,min:R,max:H,step:F,maxlength:M}=n,{onChange:I,onFocus:B,onInput:L,onRef:A}=N(n),P=j(o);return K(a`
			<input
				${U(A)}
				style="--chars: ${E?.toString()?.length??0}ch"
				id="input"
				part="input"
				type=${t}
				pattern=${c(e)}
				autocomplete=${c(q)}
				placeholder=${G(n)}
				?readonly=${T}
				?aria-disabled=${C}
				?disabled=${C}
				.value=${V(E??"")}
				maxlength=${c(M)}
				@beforeinput=${P}
				@input=${L}
				@change=${I}
				@focus=${B}
				@blur=${B}
				min=${c(R)}
				max=${c(H)}
				step=${c(F)}
			/>
		`,n)};customElements.define("cosmoz-input",D(Q,{observedAttributes:J,styleSheets:[O(Y)],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const{expect:s,fn:S,waitFor:x}=__STORYBOOK_MODULE_TEST__,ne={title:"Input",component:"cosmoz-input",tags:["autodocs"]},l={render:()=>a`
        ${r}
        <cosmoz-input .label=${"Choose color"}></cosmoz-input>
    `,play:async({canvas:n,step:t})=>{await t("Renders input element",async()=>{await n.findByShadowRole("textbox")})}},p={render:()=>a`
        ${r}
        <cosmoz-input
            always-float-label
            .label=${"Choose color"}
            placeholder=${"placeholder text"}
        ></cosmoz-input>
    `},i={render:()=>a`
        ${r}
        <cosmoz-input no-label-float .label=${"Choose color"}></cosmoz-input>
    `},u={render:()=>a`
        ${r}
        <cosmoz-input
            .label=${"Choose color"}
            .value=${"Red"}
            invalid
            .errorMessage=${"Something is wrong!"}
        ></cosmoz-input>
    `},d={render:()=>a`
        ${r}
        <cosmoz-input
            autosize
            no-label-float
            type="number"
            .value=${3.12}
        ></cosmoz-input>
    `},m={render:()=>a`
        ${r}
        <cosmoz-input
            no-label-float
            type="color"
            .value=${"#ff0000"}
        ></cosmoz-input>
    `},y={render:()=>a`
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
    `},h={render:()=>a`
        ${r}
        <cosmoz-input></cosmoz-input>
    `,play:async({canvasElement:n,step:t})=>{const e=n.querySelector("cosmoz-input");await t("focus() triggers focused-changed",async()=>{const o=S();e.addEventListener("focused-changed",o,{once:!0}),s(o).not.toHaveBeenCalled(),e.focus(),await x(()=>{s(o).toHaveBeenCalledTimes(1)})})}},f={render:()=>a`
        ${r}
        <cosmoz-input></cosmoz-input>
    `,play:async({canvasElement:n,step:t})=>{const e=n.querySelector("cosmoz-input");await t("change event propagates from inner input",async()=>{const o=S();e.addEventListener("change",o,{once:!0}),s(o).not.toHaveBeenCalled(),e.shadowRoot.querySelector("input").dispatchEvent(new Event("change")),s(o).toHaveBeenCalledTimes(1)})}},v={render:()=>a`
        ${r}
        <cosmoz-input .value=${"a"} pattern="[2]"></cosmoz-input>
    `,play:async({canvasElement:n,step:t})=>{const e=n.querySelector("cosmoz-input");await t("validate returns false for invalid pattern",async()=>{s(e.validate()).toBe(!1)})}},z={render:()=>a`
        ${r}
        <cosmoz-input allowed-pattern="[c]"></cosmoz-input>
    `,play:async({canvasElement:n,step:t})=>{const o=n.querySelector("cosmoz-input").shadowRoot.querySelector("input");await t("allowed character is not prevented",async()=>{s(o.dispatchEvent(new InputEvent("beforeinput",{data:"c",cancelable:!0}))).toBe(!0)}),await t("disallowed character is prevented",async()=>{s(o.dispatchEvent(new InputEvent("beforeinput",{data:"2",cancelable:!0}))).toBe(!1)})}},b={render:()=>a`
        ${r}
        <cosmoz-input></cosmoz-input>
    `,play:async({canvasElement:n,step:t})=>{const e=n.querySelector("cosmoz-input");await t("input event triggers value-changed",async()=>{const o=S();e.addEventListener("value-changed",o,{once:!0}),s(o).not.toHaveBeenCalled(),e.shadowRoot.querySelector("input").dispatchEvent(new Event("input",{bubbles:!0})),s(o).toHaveBeenCalledTimes(1)})}},w={render:()=>a`
        ${r}
        <cosmoz-input placeholder="Search..."></cosmoz-input>
    `,play:async({canvasElement:n,step:t})=>{const e=n.querySelector("cosmoz-input");await t("placeholder attribute is forwarded to inner input",async()=>{const o=e.shadowRoot.querySelector("input");s(o.placeholder).toBe("Search...")})}},$={render:()=>a`
        ${r}
        <cosmoz-input><div slot="suffix"></div></cosmoz-input>
    `,play:async({canvasElement:n,step:t})=>{const e=n.querySelector("cosmoz-input");await t("mousedown on suffix focuses input without blur",async()=>{const o=S();e.addEventListener("focused-changed",o,{once:!0}),s(o).not.toHaveBeenCalled(),e.shadowRoot.querySelector("input").dispatchEvent(new MouseEvent("mousedown",{bubbles:!0})),s(o).not.toHaveBeenCalled(),e.querySelector("div").dispatchEvent(new MouseEvent("mousedown",{bubbles:!0})),await x(()=>{s(o).toHaveBeenCalledTimes(1)}),e.querySelector("div").dispatchEvent(new MouseEvent("mousedown",{bubbles:!0})),s(o).toHaveBeenCalledTimes(1)})}},g={render:()=>a`
        ${r}
        <cosmoz-input></cosmoz-input>
    `,play:async({canvasElement:n,step:t})=>{const e=n.querySelector("cosmoz-input");await t("host.focus() delegates to inner input via delegatesFocus",async()=>{e.focus(),await x(()=>{const o=e.shadowRoot.querySelector("input");s(e.shadowRoot.activeElement).toBe(o)})})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <cosmoz-input
            always-float-label
            .label=\${'Choose color'}
            placeholder=\${'placeholder text'}
        ></cosmoz-input>
    \`
}`,...p.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <cosmoz-input no-label-float .label=\${'Choose color'}></cosmoz-input>
    \`
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <cosmoz-input
            .label=\${'Choose color'}
            .value=\${'Red'}
            invalid
            .errorMessage=\${'Something is wrong!'}
        ></cosmoz-input>
    \`
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <cosmoz-input
            autosize
            no-label-float
            type="number"
            .value=\${3.12}
        ></cosmoz-input>
    \`
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <cosmoz-input
            no-label-float
            type="color"
            .value=\${'#ff0000'}
        ></cosmoz-input>
    \`
}`,...m.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <cosmoz-input></cosmoz-input>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const el = canvasElement.querySelector('cosmoz-input')!;
    await step('focus() triggers focused-changed', async () => {
      const focusSpy = fn();
      el.addEventListener('focused-changed', focusSpy, {
        once: true
      });
      expect(focusSpy).not.toHaveBeenCalled();
      el.focus();
      await waitFor(() => {
        expect(focusSpy).toHaveBeenCalledTimes(1);
      });
    });
  }
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <cosmoz-input></cosmoz-input>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const el = canvasElement.querySelector('cosmoz-input')!;
    await step('change event propagates from inner input', async () => {
      const changeSpy = fn();
      el.addEventListener('change', changeSpy, {
        once: true
      });
      expect(changeSpy).not.toHaveBeenCalled();
      el.shadowRoot!.querySelector('input')!.dispatchEvent(new Event('change'));
      expect(changeSpy).toHaveBeenCalledTimes(1);
    });
  }
}`,...f.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <cosmoz-input .value=\${'a'} pattern="[2]"></cosmoz-input>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const el = canvasElement.querySelector('cosmoz-input') as HTMLElement & {
      validate: () => boolean;
    };
    await step('validate returns false for invalid pattern', async () => {
      expect(el.validate()).toBe(false);
    });
  }
}`,...v.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <cosmoz-input allowed-pattern="[c]"></cosmoz-input>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const el = canvasElement.querySelector('cosmoz-input')!;
    const input = el.shadowRoot!.querySelector('input')!;
    await step('allowed character is not prevented', async () => {
      expect(input.dispatchEvent(new InputEvent('beforeinput', {
        data: 'c',
        cancelable: true
      }))).toBe(true);
    });
    await step('disallowed character is prevented', async () => {
      expect(input.dispatchEvent(new InputEvent('beforeinput', {
        data: '2',
        cancelable: true
      }))).toBe(false);
    });
  }
}`,...z.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <cosmoz-input></cosmoz-input>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const el = canvasElement.querySelector('cosmoz-input')!;
    await step('input event triggers value-changed', async () => {
      const inputSpy = fn();
      el.addEventListener('value-changed', inputSpy, {
        once: true
      });
      expect(inputSpy).not.toHaveBeenCalled();
      el.shadowRoot!.querySelector('input')!.dispatchEvent(new Event('input', {
        bubbles: true
      }));
      expect(inputSpy).toHaveBeenCalledTimes(1);
    });
  }
}`,...b.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <cosmoz-input placeholder="Search..."></cosmoz-input>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const el = canvasElement.querySelector('cosmoz-input')!;
    await step('placeholder attribute is forwarded to inner input', async () => {
      const input = el.shadowRoot!.querySelector('input')!;
      expect(input.placeholder).toBe('Search...');
    });
  }
}`,...w.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <cosmoz-input><div slot="suffix"></div></cosmoz-input>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const el = canvasElement.querySelector('cosmoz-input')!;
    await step('mousedown on suffix focuses input without blur', async () => {
      const focusSpy = fn();
      el.addEventListener('focused-changed', focusSpy, {
        once: true
      });
      expect(focusSpy).not.toHaveBeenCalled();

      // mousedown on inner input should not trigger our handler
      el.shadowRoot!.querySelector('input')!.dispatchEvent(new MouseEvent('mousedown', {
        bubbles: true
      }));
      expect(focusSpy).not.toHaveBeenCalled();

      // mousedown on suffix div should focus input
      el.querySelector('div')!.dispatchEvent(new MouseEvent('mousedown', {
        bubbles: true
      }));
      await waitFor(() => {
        expect(focusSpy).toHaveBeenCalledTimes(1);
      });

      // second mousedown should not trigger focused-changed again
      el.querySelector('div')!.dispatchEvent(new MouseEvent('mousedown', {
        bubbles: true
      }));
      expect(focusSpy).toHaveBeenCalledTimes(1);
    });
  }
}`,...$.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <cosmoz-input></cosmoz-input>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const el = canvasElement.querySelector('cosmoz-input')!;
    await step('host.focus() delegates to inner input via delegatesFocus', async () => {
      el.focus();
      await waitFor(() => {
        const input = el.shadowRoot!.querySelector('input')!;
        expect(el.shadowRoot!.activeElement).toBe(input);
      });
    });
  }
}`,...g.parameters?.docs?.source}}};const oe=["Basic","AlwaysFloatLabel","NoLabelFloat","Error","Autosize","Color","Contour","Focus","Change","Validate","AllowedPattern","ValueChanged","Placeholder","Mousedown","DelegatesFocus"];export{z as AllowedPattern,p as AlwaysFloatLabel,d as Autosize,l as Basic,f as Change,m as Color,y as Contour,g as DelegatesFocus,u as Error,h as Focus,$ as Mousedown,i as NoLabelFloat,w as Placeholder,v as Validate,b as ValueChanged,oe as __namedExportsOrder,ne as default};
