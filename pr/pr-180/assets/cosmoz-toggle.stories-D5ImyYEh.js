import{b as o}from"./iframe-Rx89eJWD.js";import{f as r,c as d,d as p,l as b,n as a,s as u}from"./style-CPxh4gSl.js";import"./preload-helper-PPVm8Dsz.js";const m=l=>{const{label:s,value:c,disabled:n,error:i}=l,g=p(t=>l.dispatchEvent(new CustomEvent("change",{detail:t.target.checked})),[]);return o`<input
			id="toggle"
			class="toggle"
			part="toggle"
			type="checkbox"
			.checked=${b(!!c)}
			?disabled=${n}
			@change=${g}
		/>
		${a(s,()=>o`<label for="toggle">${s}</label>`)}
		<slot name="suffix"></slot>
		${a(i,t=>o`<div class="failure">${t}</div>`)} `},h=r`
	.toggle {
		appearance: none;
		width: 35px;
		height: 18px;
		display: inline-block;
		position: relative;
		border-radius: 18px;
		overflow: hidden;
		outline: none;
		border: none;
		cursor: pointer;
		background: var(--cz-toggle-color, #101010);
		transition: background-color ease 0.25s;
		margin: 0;
	}
	.toggle::before {
		content: '';
		display: block;
		position: absolute;
		z-index: 2;
		width: 14px;
		height: 14px;
		background: var(--cz-toggle-thumb-color, #15b0d3);
		left: 2px;
		top: 2px;
		border-radius: 50%;
		transition: all cubic-bezier(0.3, 1.5, 0.7, 1) 0.25s;
	}
	.toggle:checked {
		background: var(--cz-toggle-checked-color, #66d7f0);
	}
	.toggle:checked::before {
		left: 19px;
	}
	.toggle + label {
		padding-left: 16px;
		font-size: 14px;
		line-height: 18px;
		cursor: pointer;
		user-select: none;
	}
	.toggle[disabled] {
		opacity: 0.6;
	}
`,f=r`
	:host {
		display: block;
	}

	:host > * {
		vertical-align: middle;
		line-height: 0px;
	}

	::slotted(*) {
		margin-left: 5px;
	}
`;customElements.define("cosmoz-toggle",d(m,{styleSheets:[f,h],observedAttributes:["disabled"]}));const $={title:"Components/Toggle",component:"cosmoz-toggle",tags:["autodocs"]},e={render:()=>o`
        ${u}
        <cosmoz-toggle .label=${"Is active"} .value=${!0}></cosmoz-toggle>
    `};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{\n  render: () => html`\n        ${style}\n        <cosmoz-toggle .label=${'Is active'} .value=${true}></cosmoz-toggle>\n    `\n}",...e.parameters?.docs?.source}}};const z=["Basic"];export{e as Basic,z as __namedExportsOrder,$ as default};
