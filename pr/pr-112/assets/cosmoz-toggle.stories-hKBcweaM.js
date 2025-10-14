import{x as e}from"./iframe-CdLhvHCV.js";import{f as a,c as r,d,l as p,n as s,a as b}from"./style-DF15A1oU.js";const h=t=>{const{label:l,value:c,disabled:n,error:g}=t,i=d(o=>t.dispatchEvent(new CustomEvent("change",{detail:o.target.checked})),[]);return e`<input
			id="toggle"
			class="toggle"
			part="toggle"
			type="checkbox"
			.checked=${p(!!c)}
			?disabled=${n}
			@change=${i}
		/>
		${s(l,()=>e`<label for="toggle">${l}</label>`)}
		<slot name="suffix"></slot>
		${s(g,o=>e`<div class="failure">${o}</div>`)} `},u=a`
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
	}
	.toggle[disabled] {
		opacity: 0.6;
	}
`,m=a`
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
`;customElements.define("cosmoz-toggle",r(h,{styleSheets:[m,u]}));const k={title:"Toggle",component:"cosmoz-toggle"},v=()=>e`
    ${b}
    <cosmoz-toggle .label=${"Is active"} .value=${!0}></cosmoz-toggle>
`,z=["basic"];export{z as __namedExportsOrder,v as basic,k as default};
