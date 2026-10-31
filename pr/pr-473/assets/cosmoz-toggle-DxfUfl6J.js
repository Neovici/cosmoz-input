import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{a as t,c as n,i as r,l as i,n as a,r as o,s}from"./iframe-BCVDgj1v.js";import{n as c}from"./when-FffEWPZl.js";import{D as l,E as u,T as d,n as f,p,t as m,w as h,x as g}from"./haunted-Ch9lAFrX.js";var _;function v(){return(v=e((()=>{i(),u(),a(),_=h(class extends d{constructor(e){if(super(e),e.type!==l.PROPERTY&&e.type!==l.ATTRIBUTE&&e.type!==l.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!r(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[n]){if(n===s||n===t)return n;let r=e.element,i=e.name;if(e.type===l.PROPERTY){if(n===r[i])return s}else if(e.type===l.BOOLEAN_ATTRIBUTE){if(!!n===r.hasAttribute(i))return s}else if(e.type===l.ATTRIBUTE&&r.getAttribute(i)===n+``)return s;return o(e),n}})})))()}var y,b,x;function S(){return(S=e((()=>{m(),v(),y=e=>{let{label:t,value:r,disabled:i,error:a}=e,o=p(t=>e.dispatchEvent(new CustomEvent(`change`,{detail:t.target.checked})),[]);return n`<input
			id="toggle"
			class="toggle"
			part="toggle"
			type="checkbox"
			.checked=${_(!!r)}
			?disabled=${i}
			@change=${o}
		/>
		${c(t,()=>n`<label for="toggle">${t}</label>`)}
		<slot name="suffix"></slot>
		${c(a,e=>n`<div class="failure">${e}</div>`)} `},b=g`
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
`,x=g`
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
`,customElements.define(`cosmoz-toggle`,f(y,{styleSheets:[x,b],observedAttributes:[`label`,`disabled`,`error`]}))})))()}export{S as t};