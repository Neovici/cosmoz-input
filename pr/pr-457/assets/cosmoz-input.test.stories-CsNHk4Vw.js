import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{c as t,l as n}from"./iframe-DFtwZ7jk.js";import{t as r}from"./cosmoz-input-r2ovK0ls.js";import{n as i,t as a}from"./style-t5YhFK4k.js";var o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O;function k(){return(k=e((()=>{n(),r(),a(),{expect:o,fn:s,userEvent:c,waitFor:l}=__STORYBOOK_MODULE_TEST__,u={title:`Tests/Input`},d={render:()=>t`
        ${i}
        <cosmoz-input></cosmoz-input>
    `,play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`cosmoz-input`);await t(`focus() triggers focused-changed`,async()=>{let e=s();n.addEventListener(`focused-changed`,e,{once:!0}),o(e).not.toHaveBeenCalled(),n.focus(),await l(()=>{o(e).toHaveBeenCalledTimes(1)})})}},f={render:()=>t`
        ${i}
        <cosmoz-input></cosmoz-input>
    `,play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`cosmoz-input`);await t(`change event is re-dispatched on the host`,async()=>{let e=s();n.addEventListener(`change`,e);let t=n.shadowRoot.querySelector(`input`);t.focus(),t.value=`hello`,t.dispatchEvent(new Event(`change`,{bubbles:!0})),await l(()=>{o(e).toHaveBeenCalledTimes(1)})})}},p={render:()=>t`
        ${i}
        <cosmoz-input .value=${`a`} pattern="[2]"></cosmoz-input>
    `,play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`cosmoz-input`);await t(`validate returns false for invalid pattern`,async()=>{o(n.validate()).toBe(!1)})}},m={render:()=>t`
        ${i}
        <cosmoz-input allowed-pattern="[c]"></cosmoz-input>
    `,play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`cosmoz-input`).shadowRoot.querySelector(`input`);await t(`allowed character is not prevented`,async()=>{o(n.dispatchEvent(new InputEvent(`beforeinput`,{data:`c`,cancelable:!0}))).toBe(!0)}),await t(`disallowed character is prevented`,async()=>{o(n.dispatchEvent(new InputEvent(`beforeinput`,{data:`2`,cancelable:!0}))).toBe(!1)})}},h={render:()=>t`
        ${i}
        <cosmoz-input></cosmoz-input>
    `,play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`cosmoz-input`);await t(`input event triggers value-changed`,async()=>{let e=s();n.addEventListener(`value-changed`,e,{once:!0}),o(e).not.toHaveBeenCalled(),n.shadowRoot.querySelector(`input`).dispatchEvent(new Event(`input`,{bubbles:!0})),o(e).toHaveBeenCalledTimes(1)})}},g={render:()=>t`
        ${i}
        <cosmoz-input placeholder="Search..."></cosmoz-input>
    `,play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`cosmoz-input`);await t(`placeholder attribute is forwarded to inner input`,async()=>{let e=n.shadowRoot.querySelector(`input`);o(e.placeholder).toBe(`Search...`)})}},_={render:()=>t`
        ${i}
        <cosmoz-input><span slot="suffix">suffix</span></cosmoz-input>
    `,play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`cosmoz-input`),r=n.shadowRoot.querySelector(`input`);await t(`mousedown on suffix focuses input`,async()=>{n.querySelector(`span`).dispatchEvent(new MouseEvent(`mousedown`,{bubbles:!0})),await l(()=>{o(n.shadowRoot.activeElement).toBe(r)})})}},v={render:()=>t`
        ${i}
        <cosmoz-input></cosmoz-input>
    `,play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`cosmoz-input`);await t(`host.focus() delegates to inner input via delegatesFocus`,async()=>{n.focus(),await l(()=>{let e=n.shadowRoot.querySelector(`input`);o(n.shadowRoot.activeElement).toBe(e)})})}},y={render:()=>t`
        ${i}
        <cosmoz-input label="Test"></cosmoz-input>
    `,play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`cosmoz-input`),r=n.shadowRoot.querySelector(`input`);await t(`mousedown on shadow DOM wrap does not blur a focused input`,async()=>{r.focus(),await l(()=>{o(n.shadowRoot.activeElement).toBe(r)}),n.shadowRoot.querySelector(`.wrap`).dispatchEvent(new MouseEvent(`mousedown`,{bubbles:!0,composed:!0})),o(n.shadowRoot.activeElement).toBe(r)})}},b={render:()=>t`
        ${i}
        <cosmoz-input label="Label"></cosmoz-input>
    `,play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`cosmoz-input`),r=n.shadowRoot.querySelector(`#input`),i=n.shadowRoot.querySelector(`label[for="input"]`);await t(`label is clickable and focuses the input`,async()=>{o(getComputedStyle(i).pointerEvents).not.toBe(`none`),await c.click(i),await l(()=>{o(n.shadowRoot.activeElement).toBe(r)})})}},x={render:()=>t`
        ${i}
        <div style="display: grid; grid-template-columns: 120px 120px">
            <cosmoz-input variant="cell" invalid></cosmoz-input>
            <cosmoz-input variant="cell"></cosmoz-input>
        </div>
    `,play:async({canvasElement:e,step:t})=>{let[n]=e.querySelectorAll(`cosmoz-input`);await t(`the cell border stays inside the host`,async()=>{let e=n.shadowRoot.querySelector(`.wrap`);await l(()=>{o(e.getBoundingClientRect().right).toBeLessThanOrEqual(n.getBoundingClientRect().right)})})}},S={render:()=>t`
        ${i}
        <cosmoz-input label="Amount" hint="USD"></cosmoz-input>
    `,play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`cosmoz-input`),r=n.shadowRoot.querySelector(`#input`);await t(`the visible hint is described on the input`,async()=>{o(r.getAttribute(`aria-describedby`)).toBe(`hint`),o(r.hasAttribute(`aria-invalid`)).toBe(!1)}),await t(`a visible error replaces the description and announces invalid`,async()=>{n.errorMessage=`Required`,n.setAttribute(`invalid`,``),await l(()=>{o(r.getAttribute(`aria-describedby`)).toBe(`error`),o(r.getAttribute(`aria-invalid`)).toBe(`true`)}),n.removeAttribute(`invalid`),await l(()=>{o(r.getAttribute(`aria-describedby`)).toBe(`hint`),o(r.hasAttribute(`aria-invalid`)).toBe(!1)})})}},C={render:()=>t`
        ${i}
        <cosmoz-input label="Amount" hint="USD" compact></cosmoz-input>
    `,play:async({canvasElement:e})=>{let t=e.querySelector(`cosmoz-input`);t.errorMessage=`Required`,t.setAttribute(`invalid`,``),await l(()=>{let e=t.shadowRoot.querySelector(`#input`);o(e.getAttribute(`aria-describedby`)).toBe(`error`),o(e.getAttribute(`aria-invalid`)).toBe(`true`)});let n=t.shadowRoot.querySelector(`#error`);o(n.classList.contains(`error`)).toBe(!0),o(n.getBoundingClientRect().width).toBeLessThanOrEqual(1)}},w={render:()=>t`
        ${i}
        <cosmoz-input label="Amount" compact></cosmoz-input>
        <cosmoz-input label="Amount" variant="cell"></cosmoz-input>
    `,play:async({canvasElement:e,step:t})=>{let[n,r]=[...e.querySelectorAll(`cosmoz-input`)];await t(`compact keeps the label, visually hidden`,async()=>{let e=n.shadowRoot.querySelector(`label`);o(e.classList.contains(`sr-only`)).toBe(!0),o(e.getBoundingClientRect().width).toBeLessThanOrEqual(1)}),await t(`cell keeps the label, visually hidden`,async()=>{let e=r.shadowRoot.querySelector(`label`);o(e.getAttribute(`for`)).toBe(`input`),o(e.textContent).toContain(`Amount`),o(e.getBoundingClientRect().width).toBeLessThanOrEqual(1)})}},T={render:()=>t`
        ${i}
        <cosmoz-input label="Amount" hint="USD" compact></cosmoz-input>
    `,play:async({canvasElement:e})=>{let t=e.querySelector(`cosmoz-input`);await l(()=>{let e=t.shadowRoot.querySelector(`#input`);o(e.getAttribute(`aria-describedby`)).toBe(`hint`)});let n=t.shadowRoot.querySelector(`#hint`);o(n.getBoundingClientRect().width).toBeLessThanOrEqual(1)}},E={render:()=>t`
        ${i}
        <cosmoz-input label="Amount" hint="USD" invalid></cosmoz-input>
    `,play:async({canvasElement:e})=>{let t=e.querySelector(`cosmoz-input`);await l(()=>{let e=t.shadowRoot.querySelector(`#input`);o(e.getAttribute(`aria-invalid`)).toBe(`true`),o(e.hasAttribute(`aria-describedby`)).toBe(!1)})}},D={render:()=>t`
        ${i}
        <cosmoz-input
            variant="pill"
            .label=${`Label`}
            .placeholder=${`Add label`}
        ></cosmoz-input>
    `,play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`cosmoz-input`),r=()=>n.shadowRoot.querySelector(`#input`),i=()=>n.shadowRoot.querySelector(`.wrap`);await t(`renders a frameless field with a pill input`,async()=>{await l(()=>o(r()).toBeTruthy()),o(getComputedStyle(n).marginBottom).toBe(`0px`),o(getComputedStyle(i()).boxShadow).toBe(`none`),o(parseFloat(getComputedStyle(r()).borderTopLeftRadius)).toBeGreaterThan(100)}),await t(`keeps the label for assistive tech only`,async()=>{let e=n.shadowRoot.querySelector(`label`);o(e.getBoundingClientRect().width).toBeLessThanOrEqual(1)}),await t(`shows the focus ring on the input, not the wrap`,async()=>{let e=getComputedStyle(r()).boxShadow;r().focus(),await l(()=>o(getComputedStyle(r()).boxShadow).not.toBe(e)),o(getComputedStyle(i()).boxShadow).toBe(`none`)})}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <cosmoz-input
            variant="pill"
            .label=\${'Label'}
            .placeholder=\${'Add label'}
        ></cosmoz-input>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const el = canvasElement.querySelector('cosmoz-input')!;
    const input = () => el.shadowRoot!.querySelector<HTMLInputElement>('#input')!;
    const wrap = () => el.shadowRoot!.querySelector<HTMLElement>('.wrap')!;
    await step('renders a frameless field with a pill input', async () => {
      await waitFor(() => expect(input()).toBeTruthy());
      expect(getComputedStyle(el).marginBottom).toBe('0px');
      expect(getComputedStyle(wrap()).boxShadow).toBe('none');
      expect(parseFloat(getComputedStyle(input()).borderTopLeftRadius)).toBeGreaterThan(100);
    });
    await step('keeps the label for assistive tech only', async () => {
      const label = el.shadowRoot!.querySelector('label')!;
      expect(label.getBoundingClientRect().width).toBeLessThanOrEqual(1);
    });
    await step('shows the focus ring on the input, not the wrap', async () => {
      const blurred = getComputedStyle(input()).boxShadow;
      input().focus();
      await waitFor(() => expect(getComputedStyle(input()).boxShadow).not.toBe(blurred));
      expect(getComputedStyle(wrap()).boxShadow).toBe('none');
    });
  }
}`,...D.parameters?.docs?.source}}},O=[`Focus`,`Change`,`Validate`,`AllowedPattern`,`ValueChanged`,`Placeholder`,`Mousedown`,`DelegatesFocus`,`BlurPrevention`,`LabelClickThrough`,`CellBorderInsideHost`,`AnnouncedMessages`,`CompactDescribesErrorWithoutShowing`,`CompactAndCellKeepName`,`CompactDescribesHintWithoutShowing`,`InvalidWithoutMessageMarksInvalid`,`PillVariant`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <cosmoz-input
            variant="pill"
            .label=\${'Label'}
            .placeholder=\${'Add label'}
        ></cosmoz-input>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const el = canvasElement.querySelector('cosmoz-input')!;
    const input = () => el.shadowRoot!.querySelector<HTMLInputElement>('#input')!;
    const wrap = () => el.shadowRoot!.querySelector<HTMLElement>('.wrap')!;
    await step('renders a frameless field with a pill input', async () => {
      await waitFor(() => expect(input()).toBeTruthy());
      expect(getComputedStyle(el).marginBottom).toBe('0px');
      expect(getComputedStyle(wrap()).boxShadow).toBe('none');
      expect(parseFloat(getComputedStyle(input()).borderTopLeftRadius)).toBeGreaterThan(100);
    });
    await step('keeps the label for assistive tech only', async () => {
      const label = el.shadowRoot!.querySelector('label')!;
      expect(label.getBoundingClientRect().width).toBeLessThanOrEqual(1);
    });
    await step('shows the focus ring on the input, not the wrap', async () => {
      const blurred = getComputedStyle(input()).boxShadow;
      input().focus();
      await waitFor(() => expect(getComputedStyle(input()).boxShadow).not.toBe(blurred));
      expect(getComputedStyle(wrap()).boxShadow).toBe('none');
    });
  }
}`,...D.parameters?.docs?.source}}}})))()}k();export{m as AllowedPattern,S as AnnouncedMessages,y as BlurPrevention,x as CellBorderInsideHost,f as Change,w as CompactAndCellKeepName,C as CompactDescribesErrorWithoutShowing,T as CompactDescribesHintWithoutShowing,v as DelegatesFocus,d as Focus,E as InvalidWithoutMessageMarksInvalid,b as LabelClickThrough,_ as Mousedown,D as PillVariant,g as Placeholder,p as Validate,h as ValueChanged,O as __namedExportsOrder,u as default};