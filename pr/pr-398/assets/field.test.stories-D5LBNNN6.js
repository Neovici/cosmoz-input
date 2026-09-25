import{i as e}from"./preload-helper-CCSz8wUY.js";import{l as t,n,t as r,u as i}from"./iframe-CFy_mvqk.js";import{t as a}from"./cosmoz-input-CkUguBrU.js";import{n as o,t as s}from"./style-BHYM1NT7.js";import{t as c}from"./cosmoz-textarea-DBHh2dAX.js";var l,u,d,f,p,m,h,g,_,v,y,b,x,S,C;e((()=>{i(),r(),a(),c(),s(),{expect:l,waitFor:u}=__STORYBOOK_MODULE_TEST__,d={title:`Tests/Field`},f=(e,t=`cosmoz-input`)=>e.querySelector(t).shadowRoot.querySelector(`#input`),p=()=>new Promise(e=>requestAnimationFrame(()=>requestAnimationFrame(e))),m={render:()=>t`${o}
            <cosmoz-input label="Amount" hint="Up to 10 000"></cosmoz-input>`,play:async({canvasElement:e})=>{let t=await n(e).findByShadowRole(`textbox`,{name:`Amount`,description:`Up to 10 000`});l(t.hasAttribute(`aria-invalid`)).toBe(!1)}},h={render:()=>t`${o}
            <cosmoz-input
                label="Amount"
                hint="Up to 10 000"
                invalid
                .errorMessage=${`Too large`}
            ></cosmoz-input>`,play:async({canvasElement:e})=>{await n(e).findByShadowRole(`textbox`,{name:`Amount`,description:`Too large`}),l(f(e).getAttribute(`aria-invalid`)).toBe(`true`)}},g={render:()=>t`${o}
            <cosmoz-input label="Amount" hint="Up to 10 000"></cosmoz-input>`,play:async({canvasElement:e})=>{let t=e.querySelector(`cosmoz-input`),n=f(e);await u(()=>l(n).toBeTruthy()),l(n.hasAttribute(`aria-invalid`)).toBe(!1),Object.assign(t,{invalid:!0,errorMessage:`Too large`}),await u(()=>l(n.getAttribute(`aria-invalid`)).toBe(`true`)),l(n.getAttribute(`aria-describedby`)).toBe(`error`),Object.assign(t,{invalid:!1}),await u(()=>l(n.hasAttribute(`aria-invalid`)).toBe(!1)),l(n.getAttribute(`aria-describedby`)).toBe(`hint`)}},_={render:()=>t`${o}
            <cosmoz-input
                label="Amount"
                compact
                invalid
                .errorMessage=${`Too large`}
            ></cosmoz-input>`,play:async({canvasElement:e})=>{await n(e).findByShadowRole(`textbox`,{name:`Amount`,description:`Too large`});let t=e.querySelector(`cosmoz-input`).shadowRoot,r=t.querySelector(`label`);l(r.classList.contains(`visually-hidden`)).toBe(!0),l(r.getBoundingClientRect().width).toBeLessThanOrEqual(1),l(t.querySelector(`cosmoz-tooltip`)).toBeTruthy()}},v={render:()=>t`${o}
            <cosmoz-input
                label="Account"
                hint="Four digits"
                .description=${`Used for bookkeeping`}
            ></cosmoz-input>`,play:async({canvasElement:e})=>{await n(e).findByShadowRole(`textbox`,{name:`Account`,description:`Four digits Used for bookkeeping`});let t=e.querySelector(`cosmoz-input`).shadowRoot.querySelector(`#description`);l(t.getBoundingClientRect().width).toBeLessThanOrEqual(1)}},y={render:()=>t`${o} <cosmoz-input label="Amount"></cosmoz-input>`,play:async({canvasElement:e})=>{await n(e).findByShadowRole(`textbox`,{name:`Amount`}),l(f(e).hasAttribute(`aria-describedby`)).toBe(!1)}},b={render:()=>t`${o}
            <cosmoz-textarea
                label="Comment"
                required
                disabled
                invalid
                .errorMessage=${`Required`}
            ></cosmoz-textarea>`,play:async({canvasElement:e})=>{await p();let t=f(e,`cosmoz-textarea`);await u(()=>l(t).toBeTruthy()),l(t.required).toBe(!0),l(t.getAttribute(`aria-disabled`)).toBe(`true`),l(t.getAttribute(`aria-invalid`)).toBe(`true`),l(t.getAttribute(`aria-describedby`)).toBe(`error`)}},x={render:()=>t`${o} <cosmoz-textarea label="Comment" compact></cosmoz-textarea>`,play:async({canvasElement:e})=>{await n(e).findByShadowRole(`textbox`,{name:`Comment`});let t=e.querySelector(`cosmoz-textarea`).shadowRoot.querySelector(`label`);l(t.classList.contains(`visually-hidden`)).toBe(!0)}},S={render:()=>t`${o}
            <cosmoz-input label="Quantity" variant="cell"></cosmoz-input>`,play:async({canvasElement:e})=>{await n(e).findByShadowRole(`textbox`,{name:`Quantity`});let t=e.querySelector(`cosmoz-input`).shadowRoot.querySelector(`label`);l(t.getBoundingClientRect().width).toBeLessThanOrEqual(1)}},C=[`LabelAndHint`,`ErrorReplacesHint`,`InvalidFollowsTheFlag`,`CompactKeepsNameAndError`,`DescriptionIsReadNotShown`,`NoDescriptionWithoutText`,`TextareaField`,`TextareaCompact`,`CellKeepsName`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => html\`\${style}
            <cosmoz-input label="Amount" hint="Up to 10 000"></cosmoz-input>\`,
  play: async ({
    canvasElement
  }) => {
    const input = await within(canvasElement).findByShadowRole('textbox', {
      name: 'Amount',
      description: 'Up to 10 000'
    });
    expect(input.hasAttribute('aria-invalid')).toBe(false);
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => html\`\${style}
            <cosmoz-input
                label="Amount"
                hint="Up to 10 000"
                invalid
                .errorMessage=\${'Too large'}
            ></cosmoz-input>\`,
  play: async ({
    canvasElement
  }) => {
    await within(canvasElement).findByShadowRole('textbox', {
      name: 'Amount',
      description: 'Too large'
    });
    expect(control(canvasElement).getAttribute('aria-invalid')).toBe('true');
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => html\`\${style}
            <cosmoz-input label="Amount" hint="Up to 10 000"></cosmoz-input>\`,
  play: async ({
    canvasElement
  }) => {
    const host = canvasElement.querySelector('cosmoz-input')!;
    const input = control(canvasElement);
    await waitFor(() => expect(input).toBeTruthy());
    expect(input.hasAttribute('aria-invalid')).toBe(false);
    Object.assign(host, {
      invalid: true,
      errorMessage: 'Too large'
    });
    await waitFor(() => expect(input.getAttribute('aria-invalid')).toBe('true'));
    expect(input.getAttribute('aria-describedby')).toBe('error');
    Object.assign(host, {
      invalid: false
    });
    await waitFor(() => expect(input.hasAttribute('aria-invalid')).toBe(false));
    expect(input.getAttribute('aria-describedby')).toBe('hint');
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => html\`\${style}
            <cosmoz-input
                label="Amount"
                compact
                invalid
                .errorMessage=\${'Too large'}
            ></cosmoz-input>\`,
  play: async ({
    canvasElement
  }) => {
    await within(canvasElement).findByShadowRole('textbox', {
      name: 'Amount',
      description: 'Too large'
    });
    const root = canvasElement.querySelector('cosmoz-input')!.shadowRoot!;
    const label = root.querySelector('label')!;
    expect(label.classList.contains('visually-hidden')).toBe(true);
    expect(label.getBoundingClientRect().width).toBeLessThanOrEqual(1);
    expect(root.querySelector('cosmoz-tooltip')).toBeTruthy();
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => html\`\${style}
            <cosmoz-input
                label="Account"
                hint="Four digits"
                .description=\${'Used for bookkeeping'}
            ></cosmoz-input>\`,
  play: async ({
    canvasElement
  }) => {
    await within(canvasElement).findByShadowRole('textbox', {
      name: 'Account',
      description: 'Four digits Used for bookkeeping'
    });
    const description = canvasElement.querySelector('cosmoz-input')!.shadowRoot!.querySelector<HTMLElement>('#description')!;
    expect(description.getBoundingClientRect().width).toBeLessThanOrEqual(1);
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => html\`\${style} <cosmoz-input label="Amount"></cosmoz-input>\`,
  play: async ({
    canvasElement
  }) => {
    await within(canvasElement).findByShadowRole('textbox', {
      name: 'Amount'
    });
    expect(control(canvasElement).hasAttribute('aria-describedby')).toBe(false);
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => html\`\${style}
            <cosmoz-textarea
                label="Comment"
                required
                disabled
                invalid
                .errorMessage=\${'Required'}
            ></cosmoz-textarea>\`,
  play: async ({
    canvasElement
  }) => {
    await settle();
    const textarea = control(canvasElement, 'cosmoz-textarea');
    await waitFor(() => expect(textarea).toBeTruthy());
    expect(textarea.required).toBe(true);
    expect(textarea.getAttribute('aria-disabled')).toBe('true');
    expect(textarea.getAttribute('aria-invalid')).toBe('true');
    expect(textarea.getAttribute('aria-describedby')).toBe('error');
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => html\`\${style} <cosmoz-textarea label="Comment" compact></cosmoz-textarea>\`,
  play: async ({
    canvasElement
  }) => {
    await within(canvasElement).findByShadowRole('textbox', {
      name: 'Comment'
    });
    const label = canvasElement.querySelector('cosmoz-textarea')!.shadowRoot!.querySelector('label')!;
    expect(label.classList.contains('visually-hidden')).toBe(true);
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => html\`\${style}
            <cosmoz-input label="Quantity" variant="cell"></cosmoz-input>\`,
  play: async ({
    canvasElement
  }) => {
    await within(canvasElement).findByShadowRole('textbox', {
      name: 'Quantity'
    });
    const label = canvasElement.querySelector('cosmoz-input')!.shadowRoot!.querySelector('label')!;
    expect(label.getBoundingClientRect().width).toBeLessThanOrEqual(1);
  }
}`,...S.parameters?.docs?.source}}}}))();export{S as CellKeepsName,_ as CompactKeepsNameAndError,v as DescriptionIsReadNotShown,h as ErrorReplacesHint,g as InvalidFollowsTheFlag,m as LabelAndHint,y as NoDescriptionWithoutText,x as TextareaCompact,b as TextareaField,C as __namedExportsOrder,d as default};