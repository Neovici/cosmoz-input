import{n as e}from"./chunk-zsgVPwQN.js";import{c as t,s as n}from"./iframe-BabVk6rK.js";import{t as r}from"./cosmoz-input-RxusGcta.js";import{n as i,t as a}from"./style-zIwD8KBQ.js";var o,s,c,l,u,d,f,p,m,h,g,_,v,y;e((()=>{t(),r(),a(),{expect:o,fn:s,waitFor:c}=__STORYBOOK_MODULE_TEST__,l={title:`Tests/Input`},u={render:()=>n`
        ${i}
        <cosmoz-input></cosmoz-input>
    `,play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`cosmoz-input`);await t(`focus() triggers focused-changed`,async()=>{let e=s();n.addEventListener(`focused-changed`,e,{once:!0}),o(e).not.toHaveBeenCalled(),n.focus(),await c(()=>{o(e).toHaveBeenCalledTimes(1)})})}},d={render:()=>n`
        ${i}
        <cosmoz-input></cosmoz-input>
    `,play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`cosmoz-input`);await t(`change event is re-dispatched on the host`,async()=>{let e=s();n.addEventListener(`change`,e);let t=n.shadowRoot.querySelector(`input`);t.focus(),t.value=`hello`,t.dispatchEvent(new Event(`change`,{bubbles:!0})),await c(()=>{o(e).toHaveBeenCalledTimes(1)})})}},f={render:()=>n`
        ${i}
        <cosmoz-input .value=${`a`} pattern="[2]"></cosmoz-input>
    `,play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`cosmoz-input`);await t(`validate returns false for invalid pattern`,async()=>{o(n.validate()).toBe(!1)})}},p={render:()=>n`
        ${i}
        <cosmoz-input allowed-pattern="[c]"></cosmoz-input>
    `,play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`cosmoz-input`).shadowRoot.querySelector(`input`);await t(`allowed character is not prevented`,async()=>{o(n.dispatchEvent(new InputEvent(`beforeinput`,{data:`c`,cancelable:!0}))).toBe(!0)}),await t(`disallowed character is prevented`,async()=>{o(n.dispatchEvent(new InputEvent(`beforeinput`,{data:`2`,cancelable:!0}))).toBe(!1)})}},m={render:()=>n`
        ${i}
        <cosmoz-input></cosmoz-input>
    `,play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`cosmoz-input`);await t(`input event triggers value-changed`,async()=>{let e=s();n.addEventListener(`value-changed`,e,{once:!0}),o(e).not.toHaveBeenCalled(),n.shadowRoot.querySelector(`input`).dispatchEvent(new Event(`input`,{bubbles:!0})),o(e).toHaveBeenCalledTimes(1)})}},h={render:()=>n`
        ${i}
        <cosmoz-input placeholder="Search..."></cosmoz-input>
    `,play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`cosmoz-input`);await t(`placeholder attribute is forwarded to inner input`,async()=>{o(n.shadowRoot.querySelector(`input`).placeholder).toBe(`Search...`)})}},g={render:()=>n`
        ${i}
        <cosmoz-input><span slot="suffix">suffix</span></cosmoz-input>
    `,play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`cosmoz-input`),r=n.shadowRoot.querySelector(`input`);await t(`mousedown on suffix focuses input`,async()=>{n.querySelector(`span`).dispatchEvent(new MouseEvent(`mousedown`,{bubbles:!0})),await c(()=>{o(n.shadowRoot.activeElement).toBe(r)})})}},_={render:()=>n`
        ${i}
        <cosmoz-input></cosmoz-input>
    `,play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`cosmoz-input`);await t(`host.focus() delegates to inner input via delegatesFocus`,async()=>{n.focus(),await c(()=>{let e=n.shadowRoot.querySelector(`input`);o(n.shadowRoot.activeElement).toBe(e)})})}},v={render:()=>n`
        ${i}
        <cosmoz-input label="Test"></cosmoz-input>
    `,play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`cosmoz-input`),r=n.shadowRoot.querySelector(`input`);await t(`mousedown on shadow DOM wrap does not blur a focused input`,async()=>{r.focus(),await c(()=>{o(n.shadowRoot.activeElement).toBe(r)}),n.shadowRoot.querySelector(`.wrap`).dispatchEvent(new MouseEvent(`mousedown`,{bubbles:!0,composed:!0})),o(n.shadowRoot.activeElement).toBe(r)})}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y=[`Focus`,`Change`,`Validate`,`AllowedPattern`,`ValueChanged`,`Placeholder`,`Mousedown`,`DelegatesFocus`,`BlurPrevention`]}))();export{p as AllowedPattern,v as BlurPrevention,d as Change,_ as DelegatesFocus,u as Focus,g as Mousedown,h as Placeholder,f as Validate,m as ValueChanged,y as __namedExportsOrder,l as default};