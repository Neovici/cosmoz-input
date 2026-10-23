import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{a as t,c as n,l as r}from"./iframe-C-JMLNaE.js";import{i,n as a,r as o,t as s}from"./normalize.css-NK2JIGsD.js";import{T as c,n as l,p as u,t as d}from"./haunted-yEuDMXnx.js";var f,p;function m(){return(m=e((()=>{f=e=>e,p=(e,...t)=>typeof e==`function`?e(...t):e})))()}function h(e){return e?t=>typeof t==`object`&&t?t[e]:t:f}function g(){return(g=e((()=>{m()})))()}var _,v,y,b,x;function S(){return(S=e((()=>{s(),m(),g(),d(),r(),o(),_={ArrowRight:1,ArrowDown:1,ArrowLeft:-1,ArrowUp:-1},v=e=>{let r=e=>e.label==null?typeof e.value==`string`?e.value:``:p(e.label,e.value),i=(e.options??[]).map(e=>typeof e==`object`&&e&&`value`in e?e:{value:e}),[a,o]=u(`value`),s=t=>h(e.valueProperty)(t),c=s(a),l=e=>o(e.value),d=i.map(t=>!t.disabled&&!e.disabled),f=i.findIndex(e=>s(e.value)===c),m=f===-1?d.indexOf(!0):f;return n`<div
		class="group"
		part="group"
		role="radiogroup"
		aria-label=${e.label||t}
		@keydown=${e=>{let t=_[e.key];if(t==null)return;e.preventDefault();let n=i.length,r=f;r===-1&&(r=t>0?-1:n);for(let a=1;a<=n;a++){let s=((r+t*a)%n+n)%n;if(d[s]){o(i[s].value),e.currentTarget.children[s]?.focus();return}}}}
	>
		${i.map((i,a)=>{let o=a===f,s=r(i),c=i.title==null?void 0:p(i.title,i.value);return n`<button
				type="button"
				role="radio"
				aria-checked=${o?`true`:`false`}
				?disabled=${i.disabled||e.disabled}
				title=${c??t}
				aria-label=${!s&&c?c:t}
				part=${o?`option selected-option`:`option`}
				class=${o?`option selected`:`option`}
				@click=${()=>l(i)}
				tabindex=${a===m?`0`:`-1`}
			>
				${i.icon?.({width:`16`,height:`16`})}${s}
			</button>`})}
	</div>`},y=c`
	:host {
		display: inline-flex;
	}
`,b=c`
	.group {
		display: flex;
		flex-wrap: wrap;
		align-items: stretch;
		gap: calc(var(--cz-spacing) * 1);
		padding: calc(var(--cz-spacing) * 0.75);
		border-radius: var(--cz-radius-lg);
		background-color: var(--cz-color-bg-secondary);
		box-shadow: inset 0 0 0 1px var(--cz-color-border-secondary);
		font-family: var(--cz-font-body);
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		font-weight: var(--cz-font-weight-semibold);
	}

	.option {
		display: inline-flex;
		align-items: center;
		gap: calc(var(--cz-spacing) * 1);
		padding: calc(var(--cz-spacing) * 1.5) calc(var(--cz-spacing) * 2);
		border-radius: var(--cz-radius-sm);
		border: 0;
		background: none;
		color: var(--cz-color-text-quaternary);
		font: inherit;
		cursor: pointer;
		white-space: nowrap;
		outline: 0;
	}

	.option:hover {
		color: var(--cz-color-text-secondary);
	}

	.option.selected {
		color: var(--cz-color-text-secondary);
		background-color: var(--cz-color-bg-primary);
		box-shadow: var(--cz-shadow-sm);
	}

	.option:focus-visible {
		box-shadow: var(--cz-focus-ring);
		color: var(--cz-color-text-secondary);
	}

	.option:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}

	/* cosmoz-tabs-next segmented sm's box: 32px, the height of an sm button */
	:host([size='sm']) .group {
		font-size: var(--cz-text-xs);
		line-height: var(--cz-text-xs-line-height);
		border-radius: var(--cz-radius-md);
	}

	:host([size='sm']) .option {
		padding-block: var(--cz-spacing);
	}
`,customElements.define(`cosmoz-toggle-group`,l(v,{styleSheets:[a,y,b],observedAttributes:[`label`,`disabled`,`value-property`]})),x=e=>n`<cosmoz-toggle-group
		.options=${e.options}
		.value=${e.value}
		value-property=${i(e.valueProperty)}
		.label=${i(e.label)}
		?disabled=${e.disabled}
		size=${i(e.size)}
		@value-changed=${e.onValueChanged}
	></cosmoz-toggle-group>`})))()}export{x as n,S as t};