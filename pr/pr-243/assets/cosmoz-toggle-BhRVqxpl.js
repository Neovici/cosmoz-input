import{n as e}from"./chunk-zsgVPwQN.js";import{s as t}from"./iframe-AQsdAuvw.js";import{_ as n,h as r,i,n as a,r as o,t as s,u as c,v as l}from"./live-D_vFLaso.js";var u,d,f,p=e((()=>{o(),s(),n(),u=e=>{let{label:n,value:r,disabled:i,error:o}=e,s=c(t=>e.dispatchEvent(new CustomEvent(`change`,{detail:t.target.checked})),[]);return t`<input
			id="toggle"
			class="toggle"
			part="toggle"
			type="checkbox"
			.checked=${a(!!r)}
			?disabled=${i}
			@change=${s}
		/>
		${l(n,()=>t`<label for="toggle">${n}</label>`)}
		<slot name="suffix"></slot>
		${l(o,e=>t`<div class="failure">${e}</div>`)} `},d=r`
	.toggle {
		appearance: none;
		width: calc(var(--cz-spacing) * 9);
		height: calc(var(--cz-spacing) * 4.5);
		display: inline-block;
		position: relative;
		border-radius: var(--cz-radius-3xl);
		overflow: hidden;
		outline: none;
		border: none;
		cursor: pointer;
		background: var(--cz-color-bg-quaternary);
		transition: background-color ease 0.25s;
		margin: 0;
	}
	.toggle::before {
		content: '';
		display: block;
		position: absolute;
		z-index: 2;
		width: calc(var(--cz-spacing) * 3.5);
		height: calc(var(--cz-spacing) * 3.5);
		background: var(--cz-color-brand-25);
		left: calc(var(--cz-spacing) * 0.5);
		top: calc(var(--cz-spacing) * 0.5);
		border-radius: var(--cz-radius-full);
		transition: all cubic-bezier(0.3, 1.5, 0.7, 1) 0.25s;
	}
	.toggle:checked {
		background: var(--cz-color-bg-brand-solid);
	}
	.toggle:checked::before {
		left: calc(var(--cz-spacing) * 5);
	}
	label {
		padding-left: calc(var(--cz-spacing) * 4);
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		color: var(--cz-color-text-secondary);
		cursor: pointer;
		user-select: none;
	}

	.failure {
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		color: var(--cz-color-text-secondary);
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
		margin-left: calc(var(--cz-spacing) * 1);
	}
`,customElements.define(`cosmoz-toggle`,i(u,{styleSheets:[f,d],observedAttributes:[`disabled`]}))}));export{p as t};