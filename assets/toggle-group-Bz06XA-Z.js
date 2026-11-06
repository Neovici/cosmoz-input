import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{a as t,c as n,l as r}from"./iframe-BCe6YRwX.js";import{i,n as a,r as o,t as s}from"./normalize.css-CYLj_hml.js";import{l as c,n as l,t as u,x as d}from"./haunted-VioT49zB.js";var f,p;function m(){return(m=e((()=>{f=e=>e,p=(e,...t)=>typeof e==`function`?e(...t):e})))()}function h(e){return e?t=>typeof t==`object`&&t?t[e]:t:f}function g(){return(g=e((()=>{m()})))()}var _,v,y,b,x;function S(){return(S=e((()=>{s(),m(),g(),u(),r(),o(),_={ArrowRight:1,ArrowDown:1,ArrowLeft:-1,ArrowUp:-1},v=e=>{let r=e=>e.label==null?typeof e.value==`string`?e.value:``:p(e.label,e.value),a=(e.options??[]).map(e=>typeof e==`object`&&e&&`value`in e?e:{value:e}),[o,s]=c(`value`),l=t=>h(e.valueProperty)(t),u=l(o),d=e=>s(e.value),f=a.map(t=>!t.disabled&&!e.disabled),m=a.findIndex(e=>l(e.value)===u),g=m===-1?f.indexOf(!0):m;return n`<div
		class="group"
		part="group"
		role="radiogroup"
		aria-label=${e.label||t}
		@keydown=${e=>{let t=_[e.key];if(t==null)return;e.preventDefault();let n=a.length,r=m;r===-1&&(r=t>0?-1:n);for(let i=1;i<=n;i++){let o=((r+t*i)%n+n)%n;if(f[o]){s(a[o].value),e.currentTarget.children[o]?.focus();return}}}}
	>
		${a.map((a,o)=>{let s=o===m,c=r(a),l=a.title==null?void 0:p(a.title,a.value);return n`<button
				type="button"
				role="radio"
				aria-checked=${s?`true`:`false`}
				?disabled=${a.disabled||e.disabled}
				title=${l??t}
				aria-label=${!c&&l?l:t}
				part=${s?`option selected-option`:`option`}
				class=${s?`option selected`:`option`}
				data-tone=${i(a.tone)}
				@click=${()=>d(a)}
				tabindex=${o===g?`0`:`-1`}
			>
				${a.icon?.({width:`16`,height:`16`})}${c}
			</button>`})}
	</div>`},y=d`
	:host {
		display: inline-flex;
	}

	:host([stretch]) {
		display: flex;
	}

	:host([stretch]) .group {
		flex: 1;
	}

	:host([stretch]) .option {
		flex: 1 1 auto;
		justify-content: center;
		white-space: normal;
	}
`,b=d`
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
		color: var(--cz-color-text-tertiary);
		font: inherit;
		cursor: pointer;
		white-space: nowrap;
		outline: 0;
	}

	.option:hover {
		color: var(--cz-color-text-primary);
	}

	.option.selected {
		color: var(--cz-color-text-primary);
		background-color: var(--cz-color-bg-primary);
		box-shadow:
			inset 0 0 0 1px var(--cz-color-border-primary),
			var(--cz-shadow-sm);
	}

	.option.selected[data-tone='warning'] {
		color: var(--cz-color-text-warning);
		background-color: var(--cz-color-bg-warning);
		box-shadow:
			inset 0 0 0 1px var(--cz-color-border-warning-subtle),
			var(--cz-shadow-sm);
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
`,customElements.define(`cosmoz-toggle-group`,l(v,{styleSheets:[a,y,b],observedAttributes:[`label`,`disabled`,`value-property`,`stretch`]})),x=e=>n`<cosmoz-toggle-group
		.options=${e.options}
		.value=${e.value}
		value-property=${i(e.valueProperty)}
		.label=${i(e.label)}
		?disabled=${e.disabled}
		?stretch=${e.stretch}
		size=${i(e.size)}
		@value-changed=${e.onValueChanged}
	></cosmoz-toggle-group>`})))()}export{x as n,S as t};