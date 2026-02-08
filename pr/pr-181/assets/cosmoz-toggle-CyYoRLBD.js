import{f as n,c as g,d,l as p,n as i}from"./style-C9mthg0Y.js";import{b as o}from"./iframe-CFPCSjlc.js";const b=t=>{const{label:l,value:s,disabled:a,error:r}=t,c=d(e=>t.dispatchEvent(new CustomEvent("change",{detail:e.target.checked})),[]);return o`<input
			id="toggle"
			class="toggle"
			part="toggle"
			type="checkbox"
			.checked=${p(!!s)}
			?disabled=${a}
			@change=${c}
		/>
		${i(l,()=>o`<label for="toggle">${l}</label>`)}
		<slot name="suffix"></slot>
		${i(r,e=>o`<div class="failure">${e}</div>`)} `},h=n`
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
`,u=n`
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
`;customElements.define("cosmoz-toggle",g(b,{styleSheets:[u,h],observedAttributes:["disabled"]}));
