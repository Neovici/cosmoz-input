import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{c as t,l as n}from"./iframe-akijsYQg.js";import{t as r}from"./cosmoz-input-CzwX9l-y.js";import{t as i}from"./cosmoz-textarea-CkpXnt5e.js";import{n as a,t as o}from"./style-DB1e6cyz.js";var s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k;function A(){return(A=e((()=>{n(),r(),i(),o(),{expect:s,fn:c,userEvent:l,waitFor:u}=__STORYBOOK_MODULE_TEST__,d={title:`Tests/Input`},f={render:()=>t`
        ${a}
        <cosmoz-input></cosmoz-input>
    `,play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`cosmoz-input`);await t(`focus() triggers focused-changed`,async()=>{let e=c();n.addEventListener(`focused-changed`,e,{once:!0}),s(e).not.toHaveBeenCalled(),n.focus(),await u(()=>{s(e).toHaveBeenCalledTimes(1)})})}},p={render:()=>t`
        ${a}
        <cosmoz-input></cosmoz-input>
    `,play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`cosmoz-input`);await t(`change event is re-dispatched on the host`,async()=>{let e=c();n.addEventListener(`change`,e);let t=n.shadowRoot.querySelector(`input`);t.focus(),t.value=`hello`,t.dispatchEvent(new Event(`change`,{bubbles:!0})),await u(()=>{s(e).toHaveBeenCalledTimes(1)})})}},m={render:()=>t`
        ${a}
        <cosmoz-input .value=${`a`} pattern="[2]"></cosmoz-input>
    `,play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`cosmoz-input`);await t(`validate returns false for invalid pattern`,async()=>{s(n.validate()).toBe(!1)})}},h={render:()=>t`
        ${a}
        <cosmoz-input allowed-pattern="[c]"></cosmoz-input>
    `,play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`cosmoz-input`).shadowRoot.querySelector(`input`);await t(`allowed character is not prevented`,async()=>{s(n.dispatchEvent(new InputEvent(`beforeinput`,{data:`c`,cancelable:!0}))).toBe(!0)}),await t(`disallowed character is prevented`,async()=>{s(n.dispatchEvent(new InputEvent(`beforeinput`,{data:`2`,cancelable:!0}))).toBe(!1)})}},g={render:()=>t`
        ${a}
        <cosmoz-input></cosmoz-input>
    `,play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`cosmoz-input`);await t(`input event triggers value-changed`,async()=>{let e=c();n.addEventListener(`value-changed`,e,{once:!0}),s(e).not.toHaveBeenCalled(),n.shadowRoot.querySelector(`input`).dispatchEvent(new Event(`input`,{bubbles:!0})),s(e).toHaveBeenCalledTimes(1)})}},_={render:()=>t`
        ${a}
        <cosmoz-input placeholder="Search..."></cosmoz-input>
    `,play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`cosmoz-input`);await t(`placeholder attribute is forwarded to inner input`,async()=>{let e=n.shadowRoot.querySelector(`input`);s(e.placeholder).toBe(`Search...`)})}},v={render:()=>t`
        ${a}
        <cosmoz-input><span slot="suffix">suffix</span></cosmoz-input>
    `,play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`cosmoz-input`),r=n.shadowRoot.querySelector(`input`);await t(`mousedown on suffix focuses input`,async()=>{n.querySelector(`span`).dispatchEvent(new MouseEvent(`mousedown`,{bubbles:!0})),await u(()=>{s(n.shadowRoot.activeElement).toBe(r)})})}},y={render:()=>t`
        ${a}
        <cosmoz-input></cosmoz-input>
    `,play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`cosmoz-input`);await t(`host.focus() delegates to inner input via delegatesFocus`,async()=>{n.focus(),await u(()=>{let e=n.shadowRoot.querySelector(`input`);s(n.shadowRoot.activeElement).toBe(e)})})}},b={render:()=>t`
        ${a}
        <cosmoz-input label="Test"></cosmoz-input>
    `,play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`cosmoz-input`),r=n.shadowRoot.querySelector(`input`);await t(`mousedown on shadow DOM wrap does not blur a focused input`,async()=>{r.focus(),await u(()=>{s(n.shadowRoot.activeElement).toBe(r)}),n.shadowRoot.querySelector(`.wrap`).dispatchEvent(new MouseEvent(`mousedown`,{bubbles:!0,composed:!0})),s(n.shadowRoot.activeElement).toBe(r)})}},x={render:()=>t`
        ${a}
        <cosmoz-input label="Label"></cosmoz-input>
    `,play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`cosmoz-input`),r=n.shadowRoot.querySelector(`#input`),i=n.shadowRoot.querySelector(`label[for="input"]`);await t(`label is clickable and focuses the input`,async()=>{s(getComputedStyle(i).pointerEvents).not.toBe(`none`),await l.click(i),await u(()=>{s(n.shadowRoot.activeElement).toBe(r)})})}},S={render:()=>t`
        ${a}
        <div style="display: grid; grid-template-columns: 120px 120px">
            <cosmoz-input variant="cell" invalid></cosmoz-input>
            <cosmoz-input variant="cell"></cosmoz-input>
        </div>
    `,play:async({canvasElement:e,step:t})=>{let[n]=e.querySelectorAll(`cosmoz-input`);await t(`the cell border stays inside the host`,async()=>{let e=n.shadowRoot.querySelector(`.wrap`);await u(()=>{s(e.getBoundingClientRect().right).toBeLessThanOrEqual(n.getBoundingClientRect().right)})})}},C={render:()=>t`
        ${a}
        <cosmoz-input label="Amount" hint="USD"></cosmoz-input>
    `,play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`cosmoz-input`),r=n.shadowRoot.querySelector(`#input`);await t(`the visible hint is described on the input`,async()=>{s(r.getAttribute(`aria-describedby`)).toBe(`hint`),s(r.hasAttribute(`aria-invalid`)).toBe(!1)}),await t(`a visible error replaces the description and announces invalid`,async()=>{n.errorMessage=`Required`,n.setAttribute(`invalid`,``),await u(()=>{s(r.getAttribute(`aria-describedby`)).toBe(`error`),s(r.getAttribute(`aria-invalid`)).toBe(`true`)}),n.removeAttribute(`invalid`),await u(()=>{s(r.getAttribute(`aria-describedby`)).toBe(`hint`),s(r.hasAttribute(`aria-invalid`)).toBe(!1)})})}},w={render:()=>t`
        ${a}
        <cosmoz-input label="Amount" hint="USD" compact></cosmoz-input>
    `,play:async({canvasElement:e})=>{let t=e.querySelector(`cosmoz-input`);t.errorMessage=`Required`,t.setAttribute(`invalid`,``),await u(()=>{let e=t.shadowRoot.querySelector(`#input`);s(e.getAttribute(`aria-describedby`)).toBe(`error`),s(e.getAttribute(`aria-invalid`)).toBe(`true`)});let n=t.shadowRoot.querySelector(`#error`);s(n.classList.contains(`error`)).toBe(!0),s(n.getBoundingClientRect().width).toBeLessThanOrEqual(1)}},T={render:()=>t`
        ${a}
        <cosmoz-input label="Amount" compact></cosmoz-input>
        <cosmoz-input label="Amount" variant="cell"></cosmoz-input>
    `,play:async({canvasElement:e,step:t})=>{let[n,r]=[...e.querySelectorAll(`cosmoz-input`)];await t(`compact keeps the label, visually hidden`,async()=>{let e=n.shadowRoot.querySelector(`label`);s(e.classList.contains(`sr-only`)).toBe(!0),s(e.getBoundingClientRect().width).toBeLessThanOrEqual(1)}),await t(`cell keeps the label, visually hidden`,async()=>{let e=r.shadowRoot.querySelector(`label`);s(e.getAttribute(`for`)).toBe(`input`),s(e.textContent).toContain(`Amount`),s(e.getBoundingClientRect().width).toBeLessThanOrEqual(1)})}},E={render:()=>t`
        ${a}
        <cosmoz-input label="Amount" hint="USD" compact></cosmoz-input>
    `,play:async({canvasElement:e})=>{let t=e.querySelector(`cosmoz-input`);await u(()=>{let e=t.shadowRoot.querySelector(`#input`);s(e.getAttribute(`aria-describedby`)).toBe(`hint`)});let n=t.shadowRoot.querySelector(`#hint`);s(n.getBoundingClientRect().width).toBeLessThanOrEqual(1)}},D={render:()=>t`
        ${a}
        <cosmoz-input label="Amount" hint="USD" invalid></cosmoz-input>
    `,play:async({canvasElement:e})=>{let t=e.querySelector(`cosmoz-input`);await u(()=>{let e=t.shadowRoot.querySelector(`#input`);s(e.getAttribute(`aria-invalid`)).toBe(`true`),s(e.hasAttribute(`aria-describedby`)).toBe(!1)})}},O={render:()=>t`
        ${a}
        <cosmoz-input inputmode="decimal" enterkeyhint="done"></cosmoz-input>
        <cosmoz-input id="plain"></cosmoz-input>
        <cosmoz-textarea inputmode="decimal" enterkeyhint="done"></cosmoz-textarea>
        <cosmoz-textarea id="plain-textarea"></cosmoz-textarea>
    `,play:async({canvasElement:e,step:t})=>{let[n,r]=[...e.querySelectorAll(`cosmoz-input`)].map(e=>e.shadowRoot.querySelector(`input`)),[i,a]=[...e.querySelectorAll(`cosmoz-textarea`)].map(e=>e.shadowRoot.querySelector(`#input`));await t(`inputmode and enterkeyhint reach the input`,async()=>{await u(()=>{s(n.getAttribute(`inputmode`)).toBe(`decimal`),s(n.getAttribute(`enterkeyhint`)).toBe(`done`)})}),await t(`they are left out when not set`,async()=>{s(r.hasAttribute(`inputmode`)).toBe(!1),s(r.hasAttribute(`enterkeyhint`)).toBe(!1)}),await t(`inputmode and enterkeyhint reach the textarea`,async()=>{await u(()=>{s(i.getAttribute(`inputmode`)).toBe(`decimal`),s(i.getAttribute(`enterkeyhint`)).toBe(`done`)})}),await t(`they are left out when not set in the textarea`,async()=>{s(a.hasAttribute(`inputmode`)).toBe(!1),s(a.hasAttribute(`enterkeyhint`)).toBe(!1)})}},k=[`Focus`,`Change`,`Validate`,`AllowedPattern`,`ValueChanged`,`Placeholder`,`Mousedown`,`DelegatesFocus`,`BlurPrevention`,`LabelClickThrough`,`CellBorderInsideHost`,`AnnouncedMessages`,`CompactDescribesErrorWithoutShowing`,`CompactAndCellKeepName`,`CompactDescribesHintWithoutShowing`,`InvalidWithoutMessageMarksInvalid`,`VirtualKeyboard`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <cosmoz-input label="Label"></cosmoz-input>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const el = canvasElement.querySelector('cosmoz-input')!;
    const input = el.shadowRoot!.querySelector('#input')!;
    const label = el.shadowRoot!.querySelector('label[for="input"]')!;
    await step('label is clickable and focuses the input', async () => {
      // the label must not intercept pointer events
      expect(getComputedStyle(label).pointerEvents).not.toBe('none');

      // a real click on the label must focus the input
      await userEvent.click(label);
      await waitFor(() => {
        expect(el.shadowRoot!.activeElement).toBe(input);
      });
    });
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <div style="display: grid; grid-template-columns: 120px 120px">
            <cosmoz-input variant="cell" invalid></cosmoz-input>
            <cosmoz-input variant="cell"></cosmoz-input>
        </div>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const [el] = canvasElement.querySelectorAll('cosmoz-input');
    await step('the cell border stays inside the host', async () => {
      const wrap = el.shadowRoot!.querySelector('.wrap')!;
      await waitFor(() => {
        expect(wrap.getBoundingClientRect().right).toBeLessThanOrEqual(el.getBoundingClientRect().right);
      });
    });
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <cosmoz-input label="Amount" hint="USD"></cosmoz-input>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const el = canvasElement.querySelector('cosmoz-input')!;
    const input = el.shadowRoot!.querySelector('#input')!;
    await step('the visible hint is described on the input', async () => {
      expect(input.getAttribute('aria-describedby')).toBe('hint');
      expect(input.hasAttribute('aria-invalid')).toBe(false);
    });
    await step('a visible error replaces the description and announces invalid', async () => {
      el.errorMessage = 'Required';
      el.setAttribute('invalid', '');
      await waitFor(() => {
        expect(input.getAttribute('aria-describedby')).toBe('error');
        expect(input.getAttribute('aria-invalid')).toBe('true');
      });
      el.removeAttribute('invalid');
      await waitFor(() => {
        expect(input.getAttribute('aria-describedby')).toBe('hint');
        expect(input.hasAttribute('aria-invalid')).toBe(false);
      });
    });
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <cosmoz-input label="Amount" hint="USD" compact></cosmoz-input>
    \`,
  play: async ({
    canvasElement
  }) => {
    const el = canvasElement.querySelector('cosmoz-input')!;
    el.errorMessage = 'Required';
    el.setAttribute('invalid', '');
    await waitFor(() => {
      const input = el.shadowRoot!.querySelector('#input')!;
      expect(input.getAttribute('aria-describedby')).toBe('error');
      expect(input.getAttribute('aria-invalid')).toBe('true');
    });
    const error = el.shadowRoot!.querySelector('#error')!;
    expect(error.classList.contains('error')).toBe(true);
    expect(error.getBoundingClientRect().width).toBeLessThanOrEqual(1);
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <cosmoz-input label="Amount" compact></cosmoz-input>
        <cosmoz-input label="Amount" variant="cell"></cosmoz-input>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const [compact, cell] = [...canvasElement.querySelectorAll('cosmoz-input')];
    await step('compact keeps the label, visually hidden', async () => {
      const label = compact.shadowRoot!.querySelector('label')!;
      expect(label.classList.contains('sr-only')).toBe(true);
      expect(label.getBoundingClientRect().width).toBeLessThanOrEqual(1);
    });
    await step('cell keeps the label, visually hidden', async () => {
      const label = cell.shadowRoot!.querySelector('label')!;
      expect(label.getAttribute('for')).toBe('input');
      expect(label.textContent).toContain('Amount');
      expect(label.getBoundingClientRect().width).toBeLessThanOrEqual(1);
    });
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <cosmoz-input label="Amount" hint="USD" compact></cosmoz-input>
    \`,
  play: async ({
    canvasElement
  }) => {
    const el = canvasElement.querySelector('cosmoz-input')!;
    await waitFor(() => {
      const input = el.shadowRoot!.querySelector('#input')!;
      expect(input.getAttribute('aria-describedby')).toBe('hint');
    });
    const hint = el.shadowRoot!.querySelector('#hint')!;
    expect(hint.getBoundingClientRect().width).toBeLessThanOrEqual(1);
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <cosmoz-input label="Amount" hint="USD" invalid></cosmoz-input>
    \`,
  play: async ({
    canvasElement
  }) => {
    const el = canvasElement.querySelector('cosmoz-input')!;
    await waitFor(() => {
      const input = el.shadowRoot!.querySelector('#input')!;
      expect(input.getAttribute('aria-invalid')).toBe('true');
      expect(input.hasAttribute('aria-describedby')).toBe(false);
    });
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <cosmoz-input inputmode="decimal" enterkeyhint="done"></cosmoz-input>
        <cosmoz-input id="plain"></cosmoz-input>
        <cosmoz-textarea inputmode="decimal" enterkeyhint="done"></cosmoz-textarea>
        <cosmoz-textarea id="plain-textarea"></cosmoz-textarea>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const [hinted, plain] = [...canvasElement.querySelectorAll('cosmoz-input')].map(el => el.shadowRoot!.querySelector('input')!);
    const [textareaHinted, textareaPlain] = [...canvasElement.querySelectorAll('cosmoz-textarea')].map(el => el.shadowRoot!.querySelector('#input')!);
    await step('inputmode and enterkeyhint reach the input', async () => {
      await waitFor(() => {
        expect(hinted.getAttribute('inputmode')).toBe('decimal');
        expect(hinted.getAttribute('enterkeyhint')).toBe('done');
      });
    });
    await step('they are left out when not set', async () => {
      expect(plain.hasAttribute('inputmode')).toBe(false);
      expect(plain.hasAttribute('enterkeyhint')).toBe(false);
    });
    await step('inputmode and enterkeyhint reach the textarea', async () => {
      await waitFor(() => {
        expect(textareaHinted.getAttribute('inputmode')).toBe('decimal');
        expect(textareaHinted.getAttribute('enterkeyhint')).toBe('done');
      });
    });
    await step('they are left out when not set in the textarea', async () => {
      expect(textareaPlain.hasAttribute('inputmode')).toBe(false);
      expect(textareaPlain.hasAttribute('enterkeyhint')).toBe(false);
    });
  }
}`,...O.parameters?.docs?.source}}}})))()}A();export{h as AllowedPattern,C as AnnouncedMessages,b as BlurPrevention,S as CellBorderInsideHost,p as Change,T as CompactAndCellKeepName,w as CompactDescribesErrorWithoutShowing,E as CompactDescribesHintWithoutShowing,y as DelegatesFocus,f as Focus,D as InvalidWithoutMessageMarksInvalid,x as LabelClickThrough,v as Mousedown,_ as Placeholder,m as Validate,g as ValueChanged,O as VirtualKeyboard,k as __namedExportsOrder,d as default};