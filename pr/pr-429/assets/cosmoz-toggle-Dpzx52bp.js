import{i as e}from"./preload-helper-CCSz8wUY.js";import{c as t,i as n,s as r}from"./iframe-BJv8jgNL.js";import{i,n as a,r as o,t as s}from"./live-4yM0H6Mr.js";import{T as c,_ as l,n as u,t as d}from"./haunted-7mqMAVgk.js";var f,p,m,h=e((()=>{d(),t(),s(),o(),f=e=>{let{label:t,value:o,disabled:s,error:c}=e,u=l(t=>e.dispatchEvent(new CustomEvent(`change`,{detail:t.target.checked})),[]);return r`<input
			id="toggle"
			class="toggle"
			part="toggle"
			type="checkbox"
			role="switch"
			aria-label=${t?n:e.getAttribute(`aria-label`)??n}
			aria-invalid=${c?`true`:n}
			aria-describedby=${c?`failure`:n}
			.checked=${a(!!o)}
			?disabled=${s}
			@change=${u}
		/>
		${i(t,()=>r`<label for="toggle">${t}</label>`)}
		<slot name="suffix"></slot>
		${i(c,e=>r`<div class="failure" id="failure">${e}</div>`)} `},p=c`
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
	.toggle:focus-visible {
		box-shadow: var(--cz-focus-ring);
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
`,m=c`
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
`,customElements.define(`cosmoz-toggle`,u(f,{styleSheets:[m,p],observedAttributes:[`label`,`disabled`,`error`,`aria-label`]}))}));export{h as t};