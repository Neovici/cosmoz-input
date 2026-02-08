import{b as s}from"./iframe-Rx89eJWD.js";import"./cosmoz-input--DCIQ67V.js";import{s as c}from"./style-CPxh4gSl.js";import"./preload-helper-PPVm8Dsz.js";import"./use-input-BFfmYaks.js";const{expect:a,fn:h,waitFor:w}=__STORYBOOK_MODULE_TEST__,q={title:"Tests/Input"},r={render:()=>s`
        ${c}
        <cosmoz-input .label=${"Choose color"}></cosmoz-input>
    `,play:async({canvas:o,step:t})=>{await t("Renders input element",async()=>{await o.findByShadowRole("textbox")})}},u={render:()=>s`
        ${c}
        <cosmoz-input></cosmoz-input>
    `,play:async({canvasElement:o,step:t})=>{const n=o.querySelector("cosmoz-input");await t("focus() triggers focused-changed",async()=>{const e=h();n.addEventListener("focused-changed",e,{once:!0}),a(e).not.toHaveBeenCalled(),n.focus(),await w(()=>{a(e).toHaveBeenCalledTimes(1)})})}},l={render:()=>s`
        ${c}
        <cosmoz-input></cosmoz-input>
    `,play:async({canvasElement:o,step:t})=>{const n=o.querySelector("cosmoz-input");await t("change event is re-dispatched on the host",async()=>{const e=h();n.addEventListener("change",e);const f=n.shadowRoot.querySelector("input");f.focus(),f.value="hello",f.dispatchEvent(new Event("change",{bubbles:!0})),await w(()=>{a(e).toHaveBeenCalledTimes(1)})})}},p={render:()=>s`
        ${c}
        <cosmoz-input .value=${"a"} pattern="[2]"></cosmoz-input>
    `,play:async({canvasElement:o,step:t})=>{const n=o.querySelector("cosmoz-input");await t("validate returns false for invalid pattern",async()=>{a(n.validate()).toBe(!1)})}},i={render:()=>s`
        ${c}
        <cosmoz-input allowed-pattern="[c]"></cosmoz-input>
    `,play:async({canvasElement:o,step:t})=>{const e=o.querySelector("cosmoz-input").shadowRoot.querySelector("input");await t("allowed character is not prevented",async()=>{a(e.dispatchEvent(new InputEvent("beforeinput",{data:"c",cancelable:!0}))).toBe(!0)}),await t("disallowed character is prevented",async()=>{a(e.dispatchEvent(new InputEvent("beforeinput",{data:"2",cancelable:!0}))).toBe(!1)})}},d={render:()=>s`
        ${c}
        <cosmoz-input></cosmoz-input>
    `,play:async({canvasElement:o,step:t})=>{const n=o.querySelector("cosmoz-input");await t("input event triggers value-changed",async()=>{const e=h();n.addEventListener("value-changed",e,{once:!0}),a(e).not.toHaveBeenCalled(),n.shadowRoot.querySelector("input").dispatchEvent(new Event("input",{bubbles:!0})),a(e).toHaveBeenCalledTimes(1)})}},m={render:()=>s`
        ${c}
        <cosmoz-input placeholder="Search..."></cosmoz-input>
    `,play:async({canvasElement:o,step:t})=>{const n=o.querySelector("cosmoz-input");await t("placeholder attribute is forwarded to inner input",async()=>{const e=n.shadowRoot.querySelector("input");a(e.placeholder).toBe("Search...")})}},y={render:()=>s`
        ${c}
        <cosmoz-input><span slot="suffix">suffix</span></cosmoz-input>
    `,play:async({canvasElement:o,step:t})=>{const n=o.querySelector("cosmoz-input");await t("mousedown on suffix focuses input without blur",async()=>{const e=h();n.addEventListener("focused-changed",e,{once:!0}),a(e).not.toHaveBeenCalled(),n.shadowRoot.querySelector("input").dispatchEvent(new MouseEvent("mousedown",{bubbles:!0})),a(e).not.toHaveBeenCalled(),n.querySelector("span").dispatchEvent(new MouseEvent("mousedown",{bubbles:!0})),await w(()=>{a(e).toHaveBeenCalledTimes(1)}),n.querySelector("span").dispatchEvent(new MouseEvent("mousedown",{bubbles:!0})),a(e).toHaveBeenCalledTimes(1)})}},v={render:()=>s`
        ${c}
        <cosmoz-input></cosmoz-input>
    `,play:async({canvasElement:o,step:t})=>{const n=o.querySelector("cosmoz-input");await t("host.focus() delegates to inner input via delegatesFocus",async()=>{n.focus(),await w(()=>{const e=n.shadowRoot.querySelector("input");a(n.shadowRoot.activeElement).toBe(e)})})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <cosmoz-input></cosmoz-input>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const el = canvasElement.querySelector('cosmoz-input')!;
    await step('change event is re-dispatched on the host', async () => {
      const changeSpy = fn();
      el.addEventListener('change', changeSpy);
      const input = el.shadowRoot!.querySelector('input')!;
      input.focus();
      input.value = 'hello';
      input.dispatchEvent(new Event('change', {
        bubbles: true
      }));
      await waitFor(() => {
        expect(changeSpy).toHaveBeenCalledTimes(1);
      });
    });
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <cosmoz-input><span slot="suffix">suffix</span></cosmoz-input>
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

      // mousedown on suffix span should focus input
      el.querySelector('span')!.dispatchEvent(new MouseEvent('mousedown', {
        bubbles: true
      }));
      await waitFor(() => {
        expect(focusSpy).toHaveBeenCalledTimes(1);
      });

      // second mousedown should not trigger focused-changed again
      el.querySelector('span')!.dispatchEvent(new MouseEvent('mousedown', {
        bubbles: true
      }));
      expect(focusSpy).toHaveBeenCalledTimes(1);
    });
  }
}`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};const B=["Render","Focus","Change","Validate","AllowedPattern","ValueChanged","Placeholder","Mousedown","DelegatesFocus"];export{i as AllowedPattern,l as Change,v as DelegatesFocus,u as Focus,y as Mousedown,m as Placeholder,r as Render,p as Validate,d as ValueChanged,B as __namedExportsOrder,q as default};
