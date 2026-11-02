import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{a as t,c as n,l as r}from"./iframe-CdPe1zYo.js";import{i,n as a,t as o}from"./live-CCp0ESir.js";import{n as s,p as c,t as l,x as u}from"./haunted-Be2DmLZx.js";var d,f,p;function m(){return(m=e((()=>{l(),r(),o(),d=e=>{let{label:r,value:o,disabled:s,error:l}=e,u=c(t=>e.dispatchEvent(new CustomEvent(`change`,{detail:t.target.checked})),[]);return n`<input
			id="toggle"
			class="toggle"
			part="toggle"
			type="checkbox"
			role="switch"
			aria-label=${r?t:e.getAttribute(`aria-label`)??t}
			aria-invalid=${l?`true`:t}
			aria-describedby=${l?`failure`:t}
			.checked=${a(!!o)}
			?disabled=${s}
			@change=${u}
		/>
		${i(r,()=>n`<label for="toggle">${r}</label>`)}
		<slot name="suffix"></slot>
		${i(l,e=>n`<div class="failure" id="failure">${e}</div>`)} `},f=u`
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
`,p=u`
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
`,customElements.define(`cosmoz-toggle`,s(d,{styleSheets:[p,f],observedAttributes:[`label`,`disabled`,`error`,`aria-label`]}))})))()}export{m as t};