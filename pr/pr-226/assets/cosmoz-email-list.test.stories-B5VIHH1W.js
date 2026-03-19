import{b as l}from"./iframe-PmtfQVGR.js";import"./cosmoz-email-list-DAAnR735.js";import{s as i}from"./style-DfVSaA6O.js";import"./preload-helper-PPVm8Dsz.js";import"./use-notify-property-4R8-UX0a.js";import"./util-hjyn66mY.js";const{expect:n,fn:r,waitFor:o}=__STORYBOOK_MODULE_TEST__,L={title:"Tests/EmailList"},m={render:()=>l`
        ${i}
        <cosmoz-email-list .label=${"Email to"}></cosmoz-email-list>
    `,play:async({canvasElement:s,step:t})=>{const a=s.querySelector("cosmoz-email-list");await t("focus() triggers focused-changed",async()=>{const e=r();a.addEventListener("focused-changed",e,{once:!0}),n(e).not.toHaveBeenCalled(),a.focus(),await o(()=>{n(e).toHaveBeenCalledTimes(1)})})}},u={render:()=>l`
        ${i}
        <cosmoz-email-list .label=${"Email to"}></cosmoz-email-list>
    `,play:async({canvasElement:s,step:t})=>{const a=s.querySelector("cosmoz-email-list"),e=a.shadowRoot.querySelector("input"),c=r();a.addEventListener("value-changed",c),await t("typing email + Enter adds it to value",async()=>{e.focus(),e.value="john@example.com",e.dispatchEvent(new Event("input",{bubbles:!0})),await o(()=>n(e.value).toBe("john@example.com")),e.dispatchEvent(new KeyboardEvent("keydown",{key:"Enter",bubbles:!0})),await o(()=>{n(c).toHaveBeenCalled(),n(a.value).toEqual(["john@example.com"])})}),await t("input is cleared after adding",async()=>{n(e.value).toBe("")})}},p={render:()=>l`
        ${i}
        <cosmoz-email-list .label=${"Email to"}></cosmoz-email-list>
    `,play:async({canvasElement:s,step:t})=>{const a=s.querySelector("cosmoz-email-list"),e=a.shadowRoot.querySelector("input"),c=r();a.addEventListener("value-changed",c),await t("typing email + comma adds it to value",async()=>{e.focus(),e.value="jane@example.com,",e.dispatchEvent(new Event("input",{bubbles:!0})),await o(()=>{n(c).toHaveBeenCalled(),n(a.value).toEqual(["jane@example.com"])})})}},d={render:()=>l`
        ${i}
        <cosmoz-email-list .label=${"Email to"}></cosmoz-email-list>
        <input id="other" />
    `,play:async({canvasElement:s,step:t})=>{const a=s.querySelector("cosmoz-email-list"),e=a.shadowRoot.querySelector("input"),c=r();a.addEventListener("value-changed",c),await t("typing email + blur adds it to value",async()=>{e.focus(),e.value="bob@example.com",e.dispatchEvent(new Event("input",{bubbles:!0})),await o(()=>n(e.value).toBe("bob@example.com")),e.dispatchEvent(new Event("blur",{bubbles:!0})),await o(()=>{n(c).toHaveBeenCalled(),n(a.value).toEqual(["bob@example.com"])})})}},v={render:()=>l`
        ${i}
        <cosmoz-email-list .label=${"Email to"}></cosmoz-email-list>
    `,play:async({canvasElement:s,step:t})=>{const a=s.querySelector("cosmoz-email-list"),e=a.shadowRoot.querySelector("input");await t("invalid email sets invalid attribute on Enter",async()=>{e.focus(),e.value="not-an-email",e.dispatchEvent(new Event("input",{bubbles:!0})),await o(()=>n(e.value).toBe("not-an-email")),e.dispatchEvent(new KeyboardEvent("keydown",{key:"Enter",bubbles:!0})),await o(()=>{n(a.hasAttribute("invalid")).toBe(!0)}),n(a.value).toBeUndefined()}),await t("invalid email sets invalid attribute on blur",async()=>{a.removeAttribute("invalid"),e.value="still-bad",e.dispatchEvent(new Event("input",{bubbles:!0})),await o(()=>n(e.value).toBe("still-bad")),e.dispatchEvent(new Event("blur",{bubbles:!0})),await o(()=>{n(a.hasAttribute("invalid")).toBe(!0)})})}},y={render:()=>l`
        ${i}
        <cosmoz-email-list
            .label=${"Email to"}
            .value=${["john@example.com"]}
        ></cosmoz-email-list>
    `,play:async({canvasElement:s,step:t})=>{const a=s.querySelector("cosmoz-email-list"),e=a.shadowRoot.querySelector("input");await t("duplicate email is not added",async()=>{e.focus(),e.value="john@example.com",e.dispatchEvent(new Event("input",{bubbles:!0})),await o(()=>n(e.value).toBe("john@example.com")),e.dispatchEvent(new KeyboardEvent("keydown",{key:"Enter",bubbles:!0})),await o(()=>{n(a.value).toEqual(["john@example.com"])})})}},E={render:()=>l`
        ${i}
        <cosmoz-email-list
            .label=${"Email to"}
            .value=${["a@test.com","b@test.com"]}
        ></cosmoz-email-list>
    `,play:async({canvasElement:s,step:t})=>{const a=s.querySelector("cosmoz-email-list"),e=r();a.addEventListener("value-changed",e),await t("removing a tag removes email from value",async()=>{a.shadowRoot.querySelector("cosmoz-tag").dispatchEvent(new Event("remove",{bubbles:!0})),await o(()=>{n(e).toHaveBeenCalled(),n(a.value).toEqual(["b@test.com"])})})}},b={render:()=>l`
        ${i}
        <cosmoz-email-list
            .label=${"Email to"}
            .value=${["a@test.com","b@test.com"]}
        ></cosmoz-email-list>
    `,play:async({canvasElement:s,step:t})=>{const a=s.querySelector("cosmoz-email-list"),e=a.shadowRoot.querySelector("input"),c=r();a.addEventListener("value-changed",c),await t("Backspace on empty input removes last email",async()=>{e.focus(),e.dispatchEvent(new KeyboardEvent("keydown",{key:"Backspace",bubbles:!0})),await o(()=>{n(c).toHaveBeenCalled(),n(a.value).toEqual(["a@test.com"])})})}},w={render:()=>l`
        ${i}
        <cosmoz-email-list
            .label=${"Email to"}
            .value=${["valid@test.com"]}
        ></cosmoz-email-list>
    `,play:async({canvasElement:s,step:t})=>{const a=s.querySelector("cosmoz-email-list");await t("validate returns true for valid emails",async()=>{n(a.validate()).toBe(!0),n(a.hasAttribute("invalid")).toBe(!1)})}},h={render:()=>l`
        ${i}
        <cosmoz-email-list
            .label=${"Email to"}
            .value=${["not-valid"]}
        ></cosmoz-email-list>
    `,play:async({canvasElement:s,step:t})=>{const a=s.querySelector("cosmoz-email-list");await t("validate returns false for invalid emails",async()=>{n(a.validate()).toBe(!1),n(a.hasAttribute("invalid")).toBe(!0)})}},z={render:()=>l`
        ${i}
        <cosmoz-email-list .label=${"Email to"}></cosmoz-email-list>
    `,play:async({canvasElement:s,step:t})=>{const a=s.querySelector("cosmoz-email-list"),e=a.shadowRoot.querySelector("input");await t("adding email dispatches value-changed",async()=>{const c=r();a.addEventListener("value-changed",c,{once:!0}),e.focus(),e.value="test@test.com",e.dispatchEvent(new Event("input",{bubbles:!0})),await o(()=>n(e.value).toBe("test@test.com")),e.dispatchEvent(new KeyboardEvent("keydown",{key:"Enter",bubbles:!0})),await o(()=>{n(c).toHaveBeenCalledTimes(1)})})}},S={render:()=>l`
        ${i}
        <cosmoz-email-list .label=${"Email to"}></cosmoz-email-list>
    `,play:async({canvasElement:s,step:t})=>{const a=s.querySelector("cosmoz-email-list");await t("host.focus() delegates to inner input via delegatesFocus",async()=>{a.focus(),await o(()=>{const e=a.shadowRoot.querySelector("input");n(a.shadowRoot.activeElement).toBe(e)})})}},q={render:()=>l`
        ${i}
        <cosmoz-email-list .label=${"Email to"}>
            <span slot="suffix">Cc Bcc</span>
        </cosmoz-email-list>
    `,play:async({canvasElement:s,step:t})=>{const a=s.querySelector("cosmoz-email-list"),e=a.shadowRoot.querySelector("input");await t("mousedown on suffix focuses input",async()=>{a.querySelector("span").dispatchEvent(new MouseEvent("mousedown",{bubbles:!0})),await o(()=>{n(a.shadowRoot.activeElement).toBe(e)})})}},$={render:()=>l`
        ${i}
        <cosmoz-email-list placeholder="Add emails..."></cosmoz-email-list>
    `,play:async({canvasElement:s,step:t})=>{const e=s.querySelector("cosmoz-email-list").shadowRoot.querySelector("input");await t("placeholder shows when no emails",async()=>{n(e.placeholder).toBe("Add emails...")})}},f={render:()=>l`
        ${i}
        <cosmoz-email-list
            placeholder="Add emails..."
            .value=${["a@b.com"]}
        ></cosmoz-email-list>
    `,play:async({canvasElement:s,step:t})=>{const e=s.querySelector("cosmoz-email-list").shadowRoot.querySelector("input");await t("placeholder is a space when emails exist",async()=>{n(e.placeholder).toBe(" ")})}},x={render:()=>l`
        ${i}
        <cosmoz-email-list .label=${"Email to"}></cosmoz-email-list>
    `,play:async({canvasElement:s,step:t})=>{const a=s.querySelector("cosmoz-email-list"),e=a.shadowRoot.querySelector("input");await t("pasting multiple comma-separated emails adds all valid ones",async()=>{e.focus(),e.value="a@test.com,b@test.com,",e.dispatchEvent(new Event("input",{bubbles:!0})),await o(()=>{n(a.value).toEqual(["a@test.com","b@test.com"])})})}},g={render:()=>l`
        ${i}
        <cosmoz-email-list .label=${"Email to"}></cosmoz-email-list>
    `,play:async({canvasElement:s,step:t})=>{const a=s.querySelector("cosmoz-email-list"),e=a.shadowRoot.querySelector("input");await t("emails are lowercased on add",async()=>{e.focus(),e.value="John@EXAMPLE.COM",e.dispatchEvent(new Event("input",{bubbles:!0})),await o(()=>n(e.value).toBe("John@EXAMPLE.COM")),e.dispatchEvent(new KeyboardEvent("keydown",{key:"Enter",bubbles:!0})),await o(()=>{n(a.value).toEqual(["john@example.com"])})})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <cosmoz-email-list .label=\${'Email to'}></cosmoz-email-list>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const el = canvasElement.querySelector('cosmoz-email-list') as HTMLElement;
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
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <cosmoz-email-list .label=\${'Email to'}></cosmoz-email-list>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const el = canvasElement.querySelector('cosmoz-email-list')! as any;
    const input = el.shadowRoot!.querySelector('input')!;
    const spy = fn();
    el.addEventListener('value-changed', spy);
    await step('typing email + Enter adds it to value', async () => {
      input.focus();
      input.value = 'john@example.com';
      input.dispatchEvent(new Event('input', {
        bubbles: true
      }));

      // wait for re-render so onKeyDown closure has updated text
      await waitFor(() => expect(input.value).toBe('john@example.com'));
      input.dispatchEvent(new KeyboardEvent('keydown', {
        key: 'Enter',
        bubbles: true
      }));
      await waitFor(() => {
        expect(spy).toHaveBeenCalled();
        expect(el.value).toEqual(['john@example.com']);
      });
    });
    await step('input is cleared after adding', async () => {
      expect(input.value).toBe('');
    });
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <cosmoz-email-list .label=\${'Email to'}></cosmoz-email-list>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const el = canvasElement.querySelector('cosmoz-email-list')! as any;
    const input = el.shadowRoot!.querySelector('input')!;
    const spy = fn();
    el.addEventListener('value-changed', spy);
    await step('typing email + comma adds it to value', async () => {
      input.focus();
      input.value = 'jane@example.com,';
      input.dispatchEvent(new Event('input', {
        bubbles: true
      }));
      await waitFor(() => {
        expect(spy).toHaveBeenCalled();
        expect(el.value).toEqual(['jane@example.com']);
      });
    });
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <cosmoz-email-list .label=\${'Email to'}></cosmoz-email-list>
        <input id="other" />
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const el = canvasElement.querySelector('cosmoz-email-list')! as any;
    const input = el.shadowRoot!.querySelector('input')!;
    const spy = fn();
    el.addEventListener('value-changed', spy);
    await step('typing email + blur adds it to value', async () => {
      input.focus();
      input.value = 'bob@example.com';
      input.dispatchEvent(new Event('input', {
        bubbles: true
      }));

      // wait for re-render so onBlur closure has updated text
      await waitFor(() => expect(input.value).toBe('bob@example.com'));
      input.dispatchEvent(new Event('blur', {
        bubbles: true
      }));
      await waitFor(() => {
        expect(spy).toHaveBeenCalled();
        expect(el.value).toEqual(['bob@example.com']);
      });
    });
  }
}`,...d.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <cosmoz-email-list .label=\${'Email to'}></cosmoz-email-list>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const el = canvasElement.querySelector('cosmoz-email-list')! as any;
    const input = el.shadowRoot!.querySelector('input')!;
    await step('invalid email sets invalid attribute on Enter', async () => {
      input.focus();
      input.value = 'not-an-email';
      input.dispatchEvent(new Event('input', {
        bubbles: true
      }));
      await waitFor(() => expect(input.value).toBe('not-an-email'));
      input.dispatchEvent(new KeyboardEvent('keydown', {
        key: 'Enter',
        bubbles: true
      }));
      await waitFor(() => {
        expect(el.hasAttribute('invalid')).toBe(true);
      });
      expect(el.value).toBeUndefined();
    });
    await step('invalid email sets invalid attribute on blur', async () => {
      el.removeAttribute('invalid');
      input.value = 'still-bad';
      input.dispatchEvent(new Event('input', {
        bubbles: true
      }));
      await waitFor(() => expect(input.value).toBe('still-bad'));
      input.dispatchEvent(new Event('blur', {
        bubbles: true
      }));
      await waitFor(() => {
        expect(el.hasAttribute('invalid')).toBe(true);
      });
    });
  }
}`,...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <cosmoz-email-list
            .label=\${'Email to'}
            .value=\${['john@example.com']}
        ></cosmoz-email-list>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const el = canvasElement.querySelector('cosmoz-email-list')! as any;
    const input = el.shadowRoot!.querySelector('input')!;
    await step('duplicate email is not added', async () => {
      input.focus();
      input.value = 'john@example.com';
      input.dispatchEvent(new Event('input', {
        bubbles: true
      }));
      await waitFor(() => expect(input.value).toBe('john@example.com'));
      input.dispatchEvent(new KeyboardEvent('keydown', {
        key: 'Enter',
        bubbles: true
      }));
      await waitFor(() => {
        expect(el.value).toEqual(['john@example.com']);
      });
    });
  }
}`,...y.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <cosmoz-email-list
            .label=\${'Email to'}
            .value=\${['a@test.com', 'b@test.com']}
        ></cosmoz-email-list>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const el = canvasElement.querySelector('cosmoz-email-list')! as any;
    const spy = fn();
    el.addEventListener('value-changed', spy);
    await step('removing a tag removes email from value', async () => {
      const tag = el.shadowRoot!.querySelector('cosmoz-tag')!;
      tag.dispatchEvent(new Event('remove', {
        bubbles: true
      }));
      await waitFor(() => {
        expect(spy).toHaveBeenCalled();
        expect(el.value).toEqual(['b@test.com']);
      });
    });
  }
}`,...E.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <cosmoz-email-list
            .label=\${'Email to'}
            .value=\${['a@test.com', 'b@test.com']}
        ></cosmoz-email-list>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const el = canvasElement.querySelector('cosmoz-email-list')! as any;
    const input = el.shadowRoot!.querySelector('input')!;
    const spy = fn();
    el.addEventListener('value-changed', spy);
    await step('Backspace on empty input removes last email', async () => {
      input.focus();
      // input is empty, so Backspace should remove the last email
      input.dispatchEvent(new KeyboardEvent('keydown', {
        key: 'Backspace',
        bubbles: true
      }));
      await waitFor(() => {
        expect(spy).toHaveBeenCalled();
        expect(el.value).toEqual(['a@test.com']);
      });
    });
  }
}`,...b.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <cosmoz-email-list
            .label=\${'Email to'}
            .value=\${['valid@test.com']}
        ></cosmoz-email-list>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const el = canvasElement.querySelector('cosmoz-email-list')! as any;
    await step('validate returns true for valid emails', async () => {
      expect(el.validate()).toBe(true);
      expect(el.hasAttribute('invalid')).toBe(false);
    });
  }
}`,...w.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <cosmoz-email-list
            .label=\${'Email to'}
            .value=\${['not-valid']}
        ></cosmoz-email-list>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const el = canvasElement.querySelector('cosmoz-email-list')! as any;
    await step('validate returns false for invalid emails', async () => {
      expect(el.validate()).toBe(false);
      expect(el.hasAttribute('invalid')).toBe(true);
    });
  }
}`,...h.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <cosmoz-email-list .label=\${'Email to'}></cosmoz-email-list>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const el = canvasElement.querySelector('cosmoz-email-list')! as any;
    const input = el.shadowRoot!.querySelector('input')!;
    await step('adding email dispatches value-changed', async () => {
      const spy = fn();
      el.addEventListener('value-changed', spy, {
        once: true
      });
      input.focus();
      input.value = 'test@test.com';
      input.dispatchEvent(new Event('input', {
        bubbles: true
      }));
      await waitFor(() => expect(input.value).toBe('test@test.com'));
      input.dispatchEvent(new KeyboardEvent('keydown', {
        key: 'Enter',
        bubbles: true
      }));
      await waitFor(() => {
        expect(spy).toHaveBeenCalledTimes(1);
      });
    });
  }
}`,...z.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <cosmoz-email-list .label=\${'Email to'}></cosmoz-email-list>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const el = canvasElement.querySelector('cosmoz-email-list') as HTMLElement;
    await step('host.focus() delegates to inner input via delegatesFocus', async () => {
      el.focus();
      await waitFor(() => {
        const input = el.shadowRoot!.querySelector('input')!;
        expect(el.shadowRoot!.activeElement).toBe(input);
      });
    });
  }
}`,...S.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <cosmoz-email-list .label=\${'Email to'}>
            <span slot="suffix">Cc Bcc</span>
        </cosmoz-email-list>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const el = canvasElement.querySelector('cosmoz-email-list')!;
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
}`,...q.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <cosmoz-email-list placeholder="Add emails..."></cosmoz-email-list>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const el = canvasElement.querySelector('cosmoz-email-list')! as any;
    const input = el.shadowRoot!.querySelector('input')!;
    await step('placeholder shows when no emails', async () => {
      expect(input.placeholder).toBe('Add emails...');
    });
  }
}`,...$.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <cosmoz-email-list
            placeholder="Add emails..."
            .value=\${['a@b.com']}
        ></cosmoz-email-list>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const el = canvasElement.querySelector('cosmoz-email-list')! as any;
    const input = el.shadowRoot!.querySelector('input')!;
    await step('placeholder is a space when emails exist', async () => {
      expect(input.placeholder).toBe(' ');
    });
  }
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <cosmoz-email-list .label=\${'Email to'}></cosmoz-email-list>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const el = canvasElement.querySelector('cosmoz-email-list')! as any;
    const input = el.shadowRoot!.querySelector('input')!;
    await step('pasting multiple comma-separated emails adds all valid ones', async () => {
      input.focus();
      input.value = 'a@test.com,b@test.com,';
      input.dispatchEvent(new Event('input', {
        bubbles: true
      }));
      await waitFor(() => {
        expect(el.value).toEqual(['a@test.com', 'b@test.com']);
      });
    });
  }
}`,...x.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        \${style}
        <cosmoz-email-list .label=\${'Email to'}></cosmoz-email-list>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const el = canvasElement.querySelector('cosmoz-email-list')! as any;
    const input = el.shadowRoot!.querySelector('input')!;
    await step('emails are lowercased on add', async () => {
      input.focus();
      input.value = 'John@EXAMPLE.COM';
      input.dispatchEvent(new Event('input', {
        bubbles: true
      }));
      await waitFor(() => expect(input.value).toBe('John@EXAMPLE.COM'));
      input.dispatchEvent(new KeyboardEvent('keydown', {
        key: 'Enter',
        bubbles: true
      }));
      await waitFor(() => {
        expect(el.value).toEqual(['john@example.com']);
      });
    });
  }
}`,...g.parameters?.docs?.source}}};const j=["Focus","AddEmailViaEnter","AddEmailViaComma","AddEmailViaBlur","InvalidEmail","DuplicateEmail","RemoveEmailViaTag","RemoveEmailViaBackspace","Validate","ValidateInvalidEmails","ValueChanged","DelegatesFocus","Mousedown","Placeholder","PlaceholderHidesWithValues","MultipleEmailsViaComma","EmailNormalization"];export{d as AddEmailViaBlur,p as AddEmailViaComma,u as AddEmailViaEnter,S as DelegatesFocus,y as DuplicateEmail,g as EmailNormalization,m as Focus,v as InvalidEmail,q as Mousedown,x as MultipleEmailsViaComma,$ as Placeholder,f as PlaceholderHidesWithValues,b as RemoveEmailViaBackspace,E as RemoveEmailViaTag,w as Validate,h as ValidateInvalidEmails,z as ValueChanged,j as __namedExportsOrder,L as default};
