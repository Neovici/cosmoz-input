import{n as e}from"./chunk-zsgVPwQN.js";import{G as t}from"./iframe-XdIfrZ1A.js";import{a as n,c as r,i,m as a,o,r as s,s as c,y as l}from"./style-Do7FhrfL.js";var u,d,f,p=e((()=>{c(),n(),s(),u=e=>{let{label:n,value:r,disabled:s,error:c}=e,l=a(t=>e.dispatchEvent(new CustomEvent(`change`,{detail:t.target.checked})),[]);return t`<input
			id="toggle"
			class="toggle"
			part="toggle"
			type="checkbox"
			.checked=${o(!!r)}
			?disabled=${s}
			@change=${l}
		/>
		${i(n,()=>t`<label for="toggle">${n}</label>`)}
		<slot name="suffix"></slot>
		${i(c,e=>t`<div class="failure">${e}</div>`)} `},d=l`
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
`,f=l`
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
`,customElements.define(`cosmoz-toggle`,r(u,{styleSheets:[f,d],observedAttributes:[`disabled`]}))}));export{p as t};