import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{c as t,l as n}from"./iframe-DA_qVgly.js";import{t as r}from"./toggle-group-7TgtMKUR.js";var i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{n(),r(),{expect:i,waitFor:a}=__STORYBOOK_MODULE_TEST__,o={title:`Tests/Toggle group`},s=e=>Array.from(e.shadowRoot.querySelectorAll(`[role=radio]`)),c=(e,t)=>e.dispatchEvent(new KeyboardEvent(`keydown`,{key:t,bubbles:!0,cancelable:!0})),l=e=>s(e).map(e=>e.getAttribute(`tabindex`)),u=e=>e.shadowRoot.activeElement,d={render:()=>t`
        <cosmoz-toggle-group
            .options=${[`today`,`week`,`month`]}
        ></cosmoz-toggle-group>
    `,play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`cosmoz-toggle-group`);await t(`the first option is the tab stop`,async()=>{await a(()=>i(l(n)).toEqual([`0`,`-1`,`-1`]))}),await t(`ArrowRight from nothing selects the first option`,async()=>{s(n)[0].focus(),c(s(n)[0],`ArrowRight`),await a(()=>i(n.value).toBe(`today`)),i(u(n)).toBe(s(n)[0])})}},f={render:()=>t`
        <cosmoz-toggle-group
            .options=${[`today`,`week`,`month`]}
        ></cosmoz-toggle-group>
    `,play:async({canvasElement:e})=>{let t=e.querySelector(`cosmoz-toggle-group`);await a(()=>i(s(t).length).toBe(3)),s(t)[0].focus(),c(s(t)[0],`ArrowLeft`),await a(()=>i(t.value).toBe(`month`)),i(u(t)).toBe(s(t)[2])}},p={render:()=>t`
        <cosmoz-toggle-group
            .options=${[{value:`a`},{value:`b`,disabled:!0},{value:`c`},{value:`d`,disabled:!0}]}
            .value=${`a`}
        ></cosmoz-toggle-group>
    `,play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`cosmoz-toggle-group`);await a(()=>i(s(n).length).toBe(4)),await t(`ArrowRight jumps over a disabled option`,async()=>{s(n)[0].focus(),c(s(n)[0],`ArrowRight`),await a(()=>i(n.value).toBe(`c`)),i(u(n)).toBe(s(n)[2])}),await t(`and wraps past a disabled last option`,async()=>{c(s(n)[2],`ArrowRight`),await a(()=>i(n.value).toBe(`a`)),i(u(n)).toBe(s(n)[0])})}},m={render:()=>t`
        <cosmoz-toggle-group
            .options=${[{value:`a`,disabled:!0},{value:`b`}]}
        ></cosmoz-toggle-group>
    `,play:async({canvasElement:e})=>{let t=e.querySelector(`cosmoz-toggle-group`);await a(()=>i(l(t)).toEqual([`-1`,`0`]))}},h={render:()=>t`
        <cosmoz-toggle-group
            .options=${[`today`,`week`,`month`]}
            .value=${`week`}
        ></cosmoz-toggle-group>
    `,play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`cosmoz-toggle-group`);await a(()=>i(s(n).length).toBe(3)),await t(`ArrowDown moves forward`,async()=>{s(n)[1].focus(),c(s(n)[1],`ArrowDown`),await a(()=>i(n.value).toBe(`month`))}),await t(`ArrowUp moves back`,async()=>{c(s(n)[2],`ArrowUp`),await a(()=>i(n.value).toBe(`week`))})}},g={render:()=>t`
        <cosmoz-toggle-group
            id="unnamed"
            .options=${[`a`,`b`]}
        ></cosmoz-toggle-group>
        <cosmoz-toggle-group
            id="icons"
            .label=${`View`}
            .options=${[{value:`list`,label:``,title:`List`,icon:()=>t`<svg width="16" height="16"></svg>`}]}
        ></cosmoz-toggle-group>
    `,play:async({canvasElement:e,step:t})=>{await t(`no empty aria-label when label is unset`,async()=>{let t=e.querySelector(`#unnamed`);await a(()=>{let e=t.shadowRoot.querySelector(`[role=radiogroup]`);i(e.hasAttribute(`aria-label`)).toBe(!1)})}),await t(`an icon-only option is named by its title`,async()=>{let t=e.querySelector(`#icons`);await a(()=>i(s(t)[0].getAttribute(`aria-label`)).toBe(`List`))})}},_={render:()=>t`
        <cosmoz-toggle-group
            clearable
            .options=${[`missing`,`damaged`]}
            .value=${`damaged`}
        ></cosmoz-toggle-group>
        <cosmoz-toggle-group
            id="required"
            .options=${[`missing`,`damaged`]}
            .value=${`damaged`}
        ></cosmoz-toggle-group>
    `,play:async({canvasElement:e,step:t})=>{let[n,r]=Array.from(e.querySelectorAll(`cosmoz-toggle-group`));await t(`picking the selected option again clears it`,async()=>{s(n)[1].click(),await a(()=>i(n.value).toBeUndefined()),s(n)[0].click(),await a(()=>i(n.value).toBe(`missing`))}),await t(`without clearable the selection stays`,async()=>{s(r)[1].click(),await a(()=>i(r.value).toBe(`damaged`))})}},v={render:()=>t`
        <div style="width: 400px">
            <cosmoz-toggle-group stretch .options=${[`a`,`b`]}></cosmoz-toggle-group>
        </div>
    `,play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`cosmoz-toggle-group`);await t(`the group and its options fill the width`,async()=>{await a(()=>i(s(n)).toHaveLength(2)),i(n.getBoundingClientRect().width).toBe(400);let[e,t]=s(n).map(e=>e.getBoundingClientRect().width);i(Math.abs(e-t)).toBeLessThan(1),i(e).toBeGreaterThan(150)})}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <cosmoz-toggle-group
            .options=\${['today', 'week', 'month']}
        ></cosmoz-toggle-group>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const el = canvasElement.querySelector<Group>('cosmoz-toggle-group')!;
    await step('the first option is the tab stop', async () => {
      await waitFor(() => expect(tabStops(el)).toEqual(['0', '-1', '-1']));
    });
    await step('ArrowRight from nothing selects the first option', async () => {
      radios(el)[0].focus();
      press(radios(el)[0], 'ArrowRight');
      await waitFor(() => expect(el.value).toBe('today'));
      expect(focused(el)).toBe(radios(el)[0]);
    });
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <cosmoz-toggle-group
            .options=\${['today', 'week', 'month']}
        ></cosmoz-toggle-group>
    \`,
  play: async ({
    canvasElement
  }) => {
    const el = canvasElement.querySelector<Group>('cosmoz-toggle-group')!;
    await waitFor(() => expect(radios(el).length).toBe(3));
    radios(el)[0].focus();
    press(radios(el)[0], 'ArrowLeft');
    await waitFor(() => expect(el.value).toBe('month'));
    expect(focused(el)).toBe(radios(el)[2]);
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <cosmoz-toggle-group
            .options=\${[{
    value: 'a'
  }, {
    value: 'b',
    disabled: true
  }, {
    value: 'c'
  }, {
    value: 'd',
    disabled: true
  }]}
            .value=\${'a'}
        ></cosmoz-toggle-group>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const el = canvasElement.querySelector<Group>('cosmoz-toggle-group')!;
    await waitFor(() => expect(radios(el).length).toBe(4));
    await step('ArrowRight jumps over a disabled option', async () => {
      radios(el)[0].focus();
      press(radios(el)[0], 'ArrowRight');
      await waitFor(() => expect(el.value).toBe('c'));
      expect(focused(el)).toBe(radios(el)[2]);
    });
    await step('and wraps past a disabled last option', async () => {
      press(radios(el)[2], 'ArrowRight');
      await waitFor(() => expect(el.value).toBe('a'));
      expect(focused(el)).toBe(radios(el)[0]);
    });
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <cosmoz-toggle-group
            .options=\${[{
    value: 'a',
    disabled: true
  }, {
    value: 'b'
  }]}
        ></cosmoz-toggle-group>
    \`,
  play: async ({
    canvasElement
  }) => {
    const el = canvasElement.querySelector<Group>('cosmoz-toggle-group')!;
    await waitFor(() => expect(tabStops(el)).toEqual(['-1', '0']));
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <cosmoz-toggle-group
            .options=\${['today', 'week', 'month']}
            .value=\${'week'}
        ></cosmoz-toggle-group>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const el = canvasElement.querySelector<Group>('cosmoz-toggle-group')!;
    await waitFor(() => expect(radios(el).length).toBe(3));
    await step('ArrowDown moves forward', async () => {
      radios(el)[1].focus();
      press(radios(el)[1], 'ArrowDown');
      await waitFor(() => expect(el.value).toBe('month'));
    });
    await step('ArrowUp moves back', async () => {
      press(radios(el)[2], 'ArrowUp');
      await waitFor(() => expect(el.value).toBe('week'));
    });
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <cosmoz-toggle-group
            id="unnamed"
            .options=\${['a', 'b']}
        ></cosmoz-toggle-group>
        <cosmoz-toggle-group
            id="icons"
            .label=\${'View'}
            .options=\${[{
    value: 'list',
    label: '',
    title: 'List',
    icon: () => html\`<svg width="16" height="16"></svg>\`
  }]}
        ></cosmoz-toggle-group>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    await step('no empty aria-label when label is unset', async () => {
      const el = canvasElement.querySelector('#unnamed')!;
      await waitFor(() => {
        const group = el.shadowRoot!.querySelector('[role=radiogroup]')!;
        expect(group.hasAttribute('aria-label')).toBe(false);
      });
    });
    await step('an icon-only option is named by its title', async () => {
      const el = canvasElement.querySelector('#icons')!;
      await waitFor(() => expect(radios(el)[0].getAttribute('aria-label')).toBe('List'));
    });
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <cosmoz-toggle-group
            clearable
            .options=\${['missing', 'damaged']}
            .value=\${'damaged'}
        ></cosmoz-toggle-group>
        <cosmoz-toggle-group
            id="required"
            .options=\${['missing', 'damaged']}
            .value=\${'damaged'}
        ></cosmoz-toggle-group>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const [clearable, required] = Array.from(canvasElement.querySelectorAll<Group>('cosmoz-toggle-group'));
    await step('picking the selected option again clears it', async () => {
      radios(clearable)[1].click();
      await waitFor(() => expect(clearable.value).toBeUndefined());
      radios(clearable)[0].click();
      await waitFor(() => expect(clearable.value).toBe('missing'));
    });
    await step('without clearable the selection stays', async () => {
      radios(required)[1].click();
      await waitFor(() => expect(required.value).toBe('damaged'));
    });
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <div style="width: 400px">
            <cosmoz-toggle-group stretch .options=\${['a', 'b']}></cosmoz-toggle-group>
        </div>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const el = canvasElement.querySelector<Group>('cosmoz-toggle-group')!;
    await step('the group and its options fill the width', async () => {
      await waitFor(() => expect(radios(el)).toHaveLength(2));
      expect(el.getBoundingClientRect().width).toBe(400);
      const [a, b] = radios(el).map(r => r.getBoundingClientRect().width);
      expect(Math.abs(a - b)).toBeLessThan(1);
      expect(a).toBeGreaterThan(150);
    });
  }
}`,...v.parameters?.docs?.source}}},y=[`NoValue`,`NoValueArrowLeft`,`SkipsDisabled`,`DisabledFirstIsNotTheTabStop`,`UpAndDown`,`Naming`,`Clearable`,`Stretch`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <cosmoz-toggle-group
            .options=\${['today', 'week', 'month']}
        ></cosmoz-toggle-group>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const el = canvasElement.querySelector<Group>('cosmoz-toggle-group')!;
    await step('the first option is the tab stop', async () => {
      await waitFor(() => expect(tabStops(el)).toEqual(['0', '-1', '-1']));
    });
    await step('ArrowRight from nothing selects the first option', async () => {
      radios(el)[0].focus();
      press(radios(el)[0], 'ArrowRight');
      await waitFor(() => expect(el.value).toBe('today'));
      expect(focused(el)).toBe(radios(el)[0]);
    });
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <cosmoz-toggle-group
            .options=\${['today', 'week', 'month']}
        ></cosmoz-toggle-group>
    \`,
  play: async ({
    canvasElement
  }) => {
    const el = canvasElement.querySelector<Group>('cosmoz-toggle-group')!;
    await waitFor(() => expect(radios(el).length).toBe(3));
    radios(el)[0].focus();
    press(radios(el)[0], 'ArrowLeft');
    await waitFor(() => expect(el.value).toBe('month'));
    expect(focused(el)).toBe(radios(el)[2]);
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <cosmoz-toggle-group
            .options=\${[{
    value: 'a'
  }, {
    value: 'b',
    disabled: true
  }, {
    value: 'c'
  }, {
    value: 'd',
    disabled: true
  }]}
            .value=\${'a'}
        ></cosmoz-toggle-group>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const el = canvasElement.querySelector<Group>('cosmoz-toggle-group')!;
    await waitFor(() => expect(radios(el).length).toBe(4));
    await step('ArrowRight jumps over a disabled option', async () => {
      radios(el)[0].focus();
      press(radios(el)[0], 'ArrowRight');
      await waitFor(() => expect(el.value).toBe('c'));
      expect(focused(el)).toBe(radios(el)[2]);
    });
    await step('and wraps past a disabled last option', async () => {
      press(radios(el)[2], 'ArrowRight');
      await waitFor(() => expect(el.value).toBe('a'));
      expect(focused(el)).toBe(radios(el)[0]);
    });
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <cosmoz-toggle-group
            .options=\${[{
    value: 'a',
    disabled: true
  }, {
    value: 'b'
  }]}
        ></cosmoz-toggle-group>
    \`,
  play: async ({
    canvasElement
  }) => {
    const el = canvasElement.querySelector<Group>('cosmoz-toggle-group')!;
    await waitFor(() => expect(tabStops(el)).toEqual(['-1', '0']));
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <cosmoz-toggle-group
            .options=\${['today', 'week', 'month']}
            .value=\${'week'}
        ></cosmoz-toggle-group>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const el = canvasElement.querySelector<Group>('cosmoz-toggle-group')!;
    await waitFor(() => expect(radios(el).length).toBe(3));
    await step('ArrowDown moves forward', async () => {
      radios(el)[1].focus();
      press(radios(el)[1], 'ArrowDown');
      await waitFor(() => expect(el.value).toBe('month'));
    });
    await step('ArrowUp moves back', async () => {
      press(radios(el)[2], 'ArrowUp');
      await waitFor(() => expect(el.value).toBe('week'));
    });
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <cosmoz-toggle-group
            id="unnamed"
            .options=\${['a', 'b']}
        ></cosmoz-toggle-group>
        <cosmoz-toggle-group
            id="icons"
            .label=\${'View'}
            .options=\${[{
    value: 'list',
    label: '',
    title: 'List',
    icon: () => html\`<svg width="16" height="16"></svg>\`
  }]}
        ></cosmoz-toggle-group>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    await step('no empty aria-label when label is unset', async () => {
      const el = canvasElement.querySelector('#unnamed')!;
      await waitFor(() => {
        const group = el.shadowRoot!.querySelector('[role=radiogroup]')!;
        expect(group.hasAttribute('aria-label')).toBe(false);
      });
    });
    await step('an icon-only option is named by its title', async () => {
      const el = canvasElement.querySelector('#icons')!;
      await waitFor(() => expect(radios(el)[0].getAttribute('aria-label')).toBe('List'));
    });
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <cosmoz-toggle-group
            clearable
            .options=\${['missing', 'damaged']}
            .value=\${'damaged'}
        ></cosmoz-toggle-group>
        <cosmoz-toggle-group
            id="required"
            .options=\${['missing', 'damaged']}
            .value=\${'damaged'}
        ></cosmoz-toggle-group>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const [clearable, required] = Array.from(canvasElement.querySelectorAll<Group>('cosmoz-toggle-group'));
    await step('picking the selected option again clears it', async () => {
      radios(clearable)[1].click();
      await waitFor(() => expect(clearable.value).toBeUndefined());
      radios(clearable)[0].click();
      await waitFor(() => expect(clearable.value).toBe('missing'));
    });
    await step('without clearable the selection stays', async () => {
      radios(required)[1].click();
      await waitFor(() => expect(required.value).toBe('damaged'));
    });
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <div style="width: 400px">
            <cosmoz-toggle-group stretch .options=\${['a', 'b']}></cosmoz-toggle-group>
        </div>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const el = canvasElement.querySelector<Group>('cosmoz-toggle-group')!;
    await step('the group and its options fill the width', async () => {
      await waitFor(() => expect(radios(el)).toHaveLength(2));
      expect(el.getBoundingClientRect().width).toBe(400);
      const [a, b] = radios(el).map(r => r.getBoundingClientRect().width);
      expect(Math.abs(a - b)).toBeLessThan(1);
      expect(a).toBeGreaterThan(150);
    });
  }
}`,...v.parameters?.docs?.source}}}})))()}b();export{_ as Clearable,m as DisabledFirstIsNotTheTabStop,g as Naming,d as NoValue,f as NoValueArrowLeft,p as SkipsDisabled,v as Stretch,h as UpAndDown,y as __namedExportsOrder,o as default};