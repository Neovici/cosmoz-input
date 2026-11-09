import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{c as t,l as n}from"./iframe-DJ7hhVrB.js";import{t as r}from"./cosmoz-input-DvrOvZv0.js";import{t as i}from"./toggle-group-PTNcM9kK.js";var a,o,s,c,l;function u(){return(u=e((()=>{n(),r(),i(),{expect:a,waitFor:o}=__STORYBOOK_MODULE_TEST__,s={title:`Tests/Radius roles`},c={render:()=>t`
        <div
            style="--cz-radius-control-group:24px;--cz-spacing-segment-inset:4px;--cz-radius-control:18px"
        >
            <cosmoz-input label="Amount"></cosmoz-input>
            <cosmoz-toggle-group .options=${[`Day`,`Week`]}></cosmoz-toggle-group>
            <cosmoz-toggle-group
                size="sm"
                .options=${[`Day`,`Week`]}
            ></cosmoz-toggle-group>
        </div>
    `,play:async({canvasElement:e})=>{let t=e.querySelector(`div`),n=t.querySelector(`cosmoz-input`);await o(()=>a(n.shadowRoot?.querySelector(`.wrap`)).toBeTruthy()),a(getComputedStyle(n.shadowRoot.querySelector(`.wrap`)).borderRadius).toBe(`18px`);for(let e of t.querySelectorAll(`cosmoz-toggle-group`)){await o(()=>a(e.shadowRoot?.querySelector(`.option`)).toBeTruthy());let t=e.shadowRoot.querySelector(`.group`),n=e.shadowRoot.querySelector(`.option`);a(getComputedStyle(t).borderRadius).toBe(`24px`),a(getComputedStyle(n).borderRadius).toBe(`20px`),e.style.setProperty(`--cz-radius-control-group`,`2px`),a(getComputedStyle(n).borderRadius).toBe(`0px`)}}},l=[`ScopedRoles`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <div
            style="--cz-radius-control-group:24px;--cz-spacing-segment-inset:4px;--cz-radius-control:18px"
        >
            <cosmoz-input label="Amount"></cosmoz-input>
            <cosmoz-toggle-group .options=\${['Day', 'Week']}></cosmoz-toggle-group>
            <cosmoz-toggle-group
                size="sm"
                .options=\${['Day', 'Week']}
            ></cosmoz-toggle-group>
        </div>
    \`,
  play: async ({
    canvasElement
  }) => {
    const scope = canvasElement.querySelector('div')!;
    const input = scope.querySelector('cosmoz-input')!;
    await waitFor(() => expect(input.shadowRoot?.querySelector('.wrap')).toBeTruthy());
    expect(getComputedStyle(input.shadowRoot!.querySelector('.wrap')!).borderRadius).toBe('18px');
    for (const host of scope.querySelectorAll('cosmoz-toggle-group')) {
      await waitFor(() => expect(host.shadowRoot?.querySelector('.option')).toBeTruthy());
      const group = host.shadowRoot!.querySelector('.group')!;
      const option = host.shadowRoot!.querySelector('.option')!;
      expect(getComputedStyle(group).borderRadius).toBe('24px');
      expect(getComputedStyle(option).borderRadius).toBe('20px');
      (host as HTMLElement).style.setProperty('--cz-radius-control-group', '2px');
      expect(getComputedStyle(option).borderRadius).toBe('0px');
    }
  }
}`,...c.parameters?.docs?.source}}}})))()}u();export{c as ScopedRoles,l as __namedExportsOrder,s as default};