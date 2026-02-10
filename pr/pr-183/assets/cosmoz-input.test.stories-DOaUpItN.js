import{b as s}from"./iframe-YaSc1rsN.js";import"./cosmoz-input-jBbvpJ1O.js";import{s as c}from"./style-BcANZBK2.js";import"./preload-helper-PPVm8Dsz.js";import"./use-input-BBQul79t.js";const{expect:a,fn:S,waitFor:r}=__STORYBOOK_MODULE_TEST__,q={title:"Tests/Input"},p={render:()=>s`
        ${c}
        <cosmoz-input></cosmoz-input>
    `,play:async({canvasElement:o,step:t})=>{const e=o.querySelector("cosmoz-input");await t("focus() triggers focused-changed",async()=>{const n=S();e.addEventListener("focused-changed",n,{once:!0}),a(n).not.toHaveBeenCalled(),e.focus(),await r(()=>{a(n).toHaveBeenCalledTimes(1)})})}},l={render:()=>s`
        ${c}
        <cosmoz-input></cosmoz-input>
    `,play:async({canvasElement:o,step:t})=>{const e=o.querySelector("cosmoz-input");await t("change event is re-dispatched on the host",async()=>{const n=S();e.addEventListener("change",n);const u=e.shadowRoot.querySelector("input");u.focus(),u.value="hello",u.dispatchEvent(new Event("change",{bubbles:!0})),await r(()=>{a(n).toHaveBeenCalledTimes(1)})})}},i={render:()=>s`
        ${c}
        <cosmoz-input .value=${"a"} pattern="[2]"></cosmoz-input>
    `,play:async({canvasElement:o,step:t})=>{const e=o.querySelector("cosmoz-input");await t("validate returns false for invalid pattern",async()=>{a(e.validate()).toBe(!1)})}},d={render:()=>s`
        ${c}
        <cosmoz-input allowed-pattern="[c]"></cosmoz-input>
    `,play:async({canvasElement:o,step:t})=>{const n=o.querySelector("cosmoz-input").shadowRoot.querySelector("input");await t("allowed character is not prevented",async()=>{a(n.dispatchEvent(new InputEvent("beforeinput",{data:"c",cancelable:!0}))).toBe(!0)}),await t("disallowed character is prevented",async()=>{a(n.dispatchEvent(new InputEvent("beforeinput",{data:"2",cancelable:!0}))).toBe(!1)})}},m={render:()=>s`
        ${c}
        <cosmoz-input></cosmoz-input>
    `,play:async({canvasElement:o,step:t})=>{const e=o.querySelector("cosmoz-input");await t("input event triggers value-changed",async()=>{const n=S();e.addEventListener("value-changed",n,{once:!0}),a(n).not.toHaveBeenCalled(),e.shadowRoot.querySelector("input").dispatchEvent(new Event("input",{bubbles:!0})),a(n).toHaveBeenCalledTimes(1)})}},y={render:()=>s`
        ${c}
        <cosmoz-input placeholder="Search..."></cosmoz-input>
    `,play:async({canvasElement:o,step:t})=>{const e=o.querySelector("cosmoz-input");await t("placeholder attribute is forwarded to inner input",async()=>{const n=e.shadowRoot.querySelector("input");a(n.placeholder).toBe("Search...")})}},w={render:()=>s`
        ${c}
        <cosmoz-input><span slot="suffix">suffix</span></cosmoz-input>
    `,play:async({canvasElement:o,step:t})=>{const e=o.querySelector("cosmoz-input"),n=e.shadowRoot.querySelector("input");await t("mousedown on suffix focuses input",async()=>{e.querySelector("span").dispatchEvent(new MouseEvent("mousedown",{bubbles:!0})),await r(()=>{a(e.shadowRoot.activeElement).toBe(n)})})}},h={render:()=>s`
        ${c}
        <cosmoz-input></cosmoz-input>
    `,play:async({canvasElement:o,step:t})=>{const e=o.querySelector("cosmoz-input");await t("host.focus() delegates to inner input via delegatesFocus",async()=>{e.focus(),await r(()=>{const n=e.shadowRoot.querySelector("input");a(e.shadowRoot.activeElement).toBe(n)})})}},v={render:()=>s`
        ${c}
        <cosmoz-input label="Test"></cosmoz-input>
    `,play:async({canvasElement:o,step:t})=>{const e=o.querySelector("cosmoz-input"),n=e.shadowRoot.querySelector("input");await t("mousedown on shadow DOM wrap does not blur a focused input",async()=>{n.focus(),await r(()=>{a(e.shadowRoot.activeElement).toBe(n)}),e.shadowRoot.querySelector(".wrap").dispatchEvent(new MouseEvent("mousedown",{bubbles:!0,composed:!0})),a(e.shadowRoot.activeElement).toBe(n)})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <cosmoz-input><span slot="suffix">suffix</span></cosmoz-input>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const el = canvasElement.querySelector('cosmoz-input')!;
    const input = el.shadowRoot!.querySelector('input')!;
    await step('mousedown on suffix focuses input', async () => {
      el.querySelector('span')!.dispatchEvent(new MouseEvent('mousedown', {
        bubbles: true
      }));
      await waitFor(() => {
        expect(el.shadowRoot!.activeElement).toBe(input);
      });
    });
  }
}`,...w.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <cosmoz-input label="Test"></cosmoz-input>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const el = canvasElement.querySelector('cosmoz-input')!;
    const input = el.shadowRoot!.querySelector('input')!;
    await step('mousedown on shadow DOM wrap does not blur a focused input', async () => {
      // focus the input first
      input.focus();
      await waitFor(() => {
        expect(el.shadowRoot!.activeElement).toBe(input);
      });

      // mousedown on the .wrap div inside shadow DOM
      const wrap = el.shadowRoot!.querySelector('.wrap')!;
      wrap.dispatchEvent(new MouseEvent('mousedown', {
        bubbles: true,
        composed: true
      }));

      // input should still be focused
      expect(el.shadowRoot!.activeElement).toBe(input);
    });
  }
}`,...v.parameters?.docs?.source}}};const B=["Focus","Change","Validate","AllowedPattern","ValueChanged","Placeholder","Mousedown","DelegatesFocus","BlurPrevention"];export{d as AllowedPattern,v as BlurPrevention,l as Change,h as DelegatesFocus,p as Focus,w as Mousedown,y as Placeholder,i as Validate,m as ValueChanged,B as __namedExportsOrder,q as default};
