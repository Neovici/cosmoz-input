import{b as $,w as L,M,u as v,v as x,h as E,E as N,p as B}from"./iframe-PmtfQVGR.js";import{a as R,c as T,b as S,n as I,e as P,i as U,t as j,u as q,d as f,f as F,l as V}from"./style-DfVSaA6O.js";import{o as A,u as Y,a as Z,n as w,b as H,s as K,e as G,r as _,c as J}from"./use-notify-property-4R8-UX0a.js";import{g as Q}from"./util-hjyn66mY.js";const D=R(T`
	/*
	 * Use border-box sizing for all elements.
	 * This is safe and doesn't conflict with child component styles.
	 */
	*,
	::before,
	::after,
	::backdrop,
	::file-selector-button {
		box-sizing: border-box;
	}

	/*
	 * Reset margins and padding on elements that typically have browser defaults.
	 * This is more targeted than using * to avoid affecting custom elements.
	 */
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p,
	blockquote,
	pre,
	ul,
	ol,
	li,
	dl,
	dt,
	dd,
	figure,
	figcaption,
	fieldset,
	legend,
	form,
	hr,
	table,
	th,
	td {
		margin: 0;
		padding: 0;
	}

	/*
	 * Reset borders on elements that typically have them.
	 */
	fieldset,
	hr,
	iframe {
		border: 0 solid;
	}

	/*
	 * 1. Use a consistent sensible line-height in all browsers.
	 * 2. Prevent adjustments of font size after orientation changes in iOS.
	 * 3. Use a more readable tab size.
	 * 4. Use the configured font-family.
	 * 5. Disable tap highlights on iOS.
	 */
	:host {
		line-height: 1.5;
		-webkit-text-size-adjust: 100%;
		tab-size: 4;
		font-family: var(--cz-font-body);
		-webkit-tap-highlight-color: transparent;
	}

	/*
	 * Reset links to optimize for opt-in styling.
	 */
	a {
		color: inherit;
		text-decoration: inherit;
	}

	/*
	 * Add the correct font weight in Edge and Safari.
	 */
	b,
	strong {
		font-weight: bolder;
	}

	/*
	 * 1. Use the configured mono font-family.
	 * 2. Correct the odd em font sizing in all browsers.
	 */
	code,
	kbd,
	samp,
	pre {
		font-family: var(--cz-font-mono);
		font-size: 1em;
	}

	/*
	 * Add the correct font size in all browsers.
	 */
	small {
		font-size: 80%;
	}

	/*
	 * Prevent sub and sup from affecting line height.
	 */
	sub,
	sup {
		font-size: 75%;
		line-height: 0;
		position: relative;
		vertical-align: baseline;
	}

	sub {
		bottom: -0.25em;
	}

	sup {
		top: -0.5em;
	}

	/*
	 * 1. Make replaced elements display: block by default.
	 * 2. Add vertical-align: middle for better alignment.
	 */
	img,
	svg,
	video,
	canvas,
	audio,
	iframe,
	embed,
	object {
		display: block;
		vertical-align: middle;
	}

	/*
	 * Constrain images and videos to parent width.
	 */
	img,
	video {
		max-width: 100%;
		height: auto;
	}

	/*
	 * Reset form controls:
	 * 1. Inherit font styles in all browsers.
	 * 2. Remove default margins, padding, and borders.
	 * 3. Remove border radius.
	 * 4. Remove background color.
	 */
	button,
	input,
	select,
	optgroup,
	textarea,
	::file-selector-button {
		margin: 0;
		padding: 0;
		border: 0 solid;
		font: inherit;
		font-feature-settings: inherit;
		font-variation-settings: inherit;
		letter-spacing: inherit;
		color: inherit;
		border-radius: 0;
		background-color: transparent;
	}

	/*
	 * Reset placeholder opacity in Firefox.
	 */
	::placeholder {
		opacity: 1;
		color: var(--cz-color-text-placeholder, currentcolor);
	}

	/*
	 * Prevent horizontal textarea resize.
	 */
	textarea {
		resize: vertical;
	}

	/*
	 * Remove the inner padding in Chrome and Safari on macOS.
	 */
	::-webkit-search-decoration {
		-webkit-appearance: none;
	}

	/*
	 * Correct the inability to style the border radius in iOS Safari.
	 */
	button,
	input:where([type='button'], [type='reset'], [type='submit']),
	::file-selector-button {
		appearance: button;
	}

	/*
	 * Make elements with hidden attribute stay hidden.
	 */
	[hidden]:where(:not([hidden='until-found'])) {
		display: none !important;
	}
`),o=e=>`calc(var(--cz-spacing) * ${e})`,W=T`
	/* =========================================
	 * HOST
	 * ========================================= */
	:host {
		display: inline-flex;
	}

	/* =========================================
	 * BADGE BASE (default: pill, md)
	 * ========================================= */
	.badge {
		display: inline-flex;
		align-items: center;
		gap: ${o(1.5)};
		width: max-content;
		height: max-content;
		white-space: nowrap;
		font-family: var(--cz-font-body);
		font-weight: var(--cz-font-weight-medium);
		border: 1px solid var(--cz-color-border-secondary);
		background-color: var(--cz-color-bg-secondary);
		color: var(--cz-color-text-secondary);
		border-radius: var(--cz-radius-full);
		padding: ${o(.5)} ${o(2)};
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
	}

	/* =========================================
	 * COLOR VARIANTS
	 * ========================================= */

	:host([color='brand']) .badge {
		background-color: var(--cz-color-bg-brand);
		color: var(--cz-color-text-on-brand);
		border-color: var(--cz-color-brand-200);
	}

	:host([color='error']) .badge {
		background-color: var(--cz-color-bg-error);
		color: var(--cz-color-text-error);
		border-color: var(--cz-color-error-200);
	}

	:host([color='warning']) .badge {
		background-color: var(--cz-color-bg-warning);
		color: var(--cz-color-text-warning);
		border-color: var(--cz-color-warning-200);
	}

	:host([color='success']) .badge {
		background-color: var(--cz-color-bg-success);
		color: var(--cz-color-text-success);
		border-color: var(--cz-color-success-200);
	}

	/* Modern type: neutral bg/text/border regardless of color */
	:host([type='modern']) .badge {
		background-color: var(--cz-color-bg-primary);
		color: var(--cz-color-text-secondary);
		border-color: var(--cz-color-border-primary);
	}

	/* =========================================
	 * TYPE VARIANTS (shape)
	 * ========================================= */
	:host([type='color']) .badge,
	:host([type='modern']) .badge {
		border-radius: var(--cz-radius-sm);
		padding: ${o(.5)} ${o(2)};
	}

	:host([type='modern']) .badge {
		box-shadow: var(--cz-shadow-xs);
	}

	/* =========================================
	 * SIZE VARIANTS
	 * ========================================= */

	/* --- Pill sizes --- */
	:host([size='sm']) .badge {
		padding: ${o(.5)} ${o(2)};
		font-size: var(--cz-text-xs);
		line-height: var(--cz-text-xs-line-height);
		gap: ${o(1)};
	}

	:host([size='lg']) .badge {
		padding: ${o(1)} ${o(3)};
	}

	/* --- Badge sizes --- */
	:host([type='color'][size='sm']) .badge,
	:host([type='modern'][size='sm']) .badge {
		padding: ${o(.5)} ${o(1.5)};
		font-size: var(--cz-text-xs);
		line-height: var(--cz-text-xs-line-height);
		gap: ${o(1)};
	}

	:host([type='color'][size='lg']) .badge,
	:host([type='modern'][size='lg']) .badge {
		padding: ${o(1)} ${o(2.5)};
		border-radius: var(--cz-radius-md);
	}

	/* =========================================
	 * DOT INDICATOR
	 * ========================================= */
	.dot {
		width: ${o(2)};
		height: ${o(2)};
		border-radius: var(--cz-radius-full);
		background-color: var(--cz-color-fg-quaternary);
		flex-shrink: 0;
	}
	:host(:not([dot])) .dot {
		display: none;
	}
	:host([color='brand']) .dot {
		background-color: var(--cz-color-fg-brand-secondary);
	}
	:host([color='error']) .dot {
		background-color: var(--cz-color-fg-error-secondary);
	}
	:host([color='warning']) .dot {
		background-color: var(--cz-color-fg-warning-secondary);
	}
	:host([color='success']) .dot {
		background-color: var(--cz-color-fg-success-secondary);
	}

	/* Pill + dot: asymmetric padding (tighter left) */
	:host([dot]) .badge {
		padding: ${o(.5)} ${o(2.5)} ${o(.5)} ${o(2)};
	}

	:host([dot][size='sm']) .badge {
		padding: ${o(.5)} ${o(2)} ${o(.5)} ${o(1.5)};
	}

	:host([dot][size='lg']) .badge {
		padding: ${o(1)} ${o(3)} ${o(1)} ${o(2.5)};
	}

	/* Badge + dot: symmetric padding (same as base badge) */
	:host([dot][type='color']) .badge,
	:host([dot][type='modern']) .badge {
		padding: ${o(.5)} ${o(2)};
	}

	:host([dot][type='color'][size='sm']) .badge,
	:host([dot][type='modern'][size='sm']) .badge {
		padding: ${o(.5)} ${o(1.5)};
	}

	:host([dot][type='color'][size='lg']) .badge,
	:host([dot][type='modern'][size='lg']) .badge {
		padding: ${o(1)} ${o(2.5)};
	}

	/* =========================================
	 * ICON-ONLY TYPE
	 * ========================================= */
	:host([type='icon']) .badge {
		padding: ${o(2)};
		gap: 0;
	}

	:host([type='icon'][size='sm']) .badge {
		padding: ${o(1.5)};
	}

	:host([type='icon'][size='lg']) .badge {
		padding: ${o(2.5)};
	}

	:host([type='icon']) .dot,
	:host([type='icon']) slot[name='prefix'],
	:host([type='icon']) slot[name='suffix'] {
		display: none;
	}

	:host([type='icon']) ::slotted(svg) {
		width: ${o(3)};
		height: ${o(3)};
	}

	/* =========================================
	 * SLOTTED CONTENT (icons, images, flags)
	 * ========================================= */
	::slotted(svg) {
		width: ${o(3)};
		height: ${o(3)};
		color: var(--cz-color-fg-quaternary);
	}

	:host([color='brand']) ::slotted(svg) {
		color: var(--cz-color-fg-brand-secondary);
	}
	:host([color='error']) ::slotted(svg) {
		color: var(--cz-color-fg-error-secondary);
	}
	:host([color='warning']) ::slotted(svg) {
		color: var(--cz-color-fg-warning-secondary);
	}
	:host([color='success']) ::slotted(svg) {
		color: var(--cz-color-fg-success-secondary);
	}
`,X=()=>$`<span class="badge" part="badge" role="status">
		<span class="dot" part="dot"></span>
		<slot name="prefix"></slot>
		<slot></slot>
		<slot name="suffix"></slot>
	</span>`;customElements.define("cosmoz-badge",S(X,{styleSheets:[D,W]}));const ee=({slot:e,title:a,className:l,width:u="24",height:r="24",styles:c}={})=>$`
  <svg
    slot=${A(e)}
    class=${`x-close-icon ${l??""}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${u}
    height=${r}
    style=${A(c)}
  >
    ${I(a,()=>L`<title>${a}</title>`)}
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
`,m=e=>`calc(var(--cz-spacing) * ${e})`,oe=T`
	/* =========================================
	 * HOST
	 * ========================================= */
	:host {
		display: inline-flex;
	}

	:host([disabled]) {
		opacity: 0.5;
		pointer-events: none;
	}

	/* =========================================
	 * REMOVE BUTTON
	 * ========================================= */
	.close {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 0;
		border: none;
		background: none;
		cursor: pointer;
		color: inherit;
		opacity: 0.7;
		transition: opacity 0.1s;
		flex-shrink: 0;
		border-radius: var(--cz-radius-full);
		line-height: 0;
	}

	.close:hover {
		opacity: 1;
	}

	.close:focus-visible {
		outline: 2px solid currentColor;
		outline-offset: 1px;
	}

	.close svg {
		width: ${m(2.5)};
		height: ${m(2.5)};
	}

	:host([size='md']) .close svg,
	:host(:not([size])) .close svg {
		width: ${m(3)};
		height: ${m(3)};
	}

	:host([size='lg']) .close svg {
		width: ${m(3.5)};
		height: ${m(3.5)};
	}

	/* =========================================
	 * SLOTTED CONTENT (icons, images, flags)
	 * ========================================= */
	::slotted(svg) {
		width: ${m(3.5)};
		height: ${m(3.5)};
		color: var(--cz-color-fg-quaternary);
	}

	:host([color='brand']) ::slotted(svg) {
		color: var(--cz-color-fg-brand-secondary);
	}
	:host([color='error']) ::slotted(svg) {
		color: var(--cz-color-fg-error-secondary);
	}
	:host([color='warning']) ::slotted(svg) {
		color: var(--cz-color-fg-warning-secondary);
	}
	:host([color='success']) ::slotted(svg) {
		color: var(--cz-color-fg-success-secondary);
	}
`,te=e=>{const{color:a,size:l,disabled:u,removable:r}=e,c=()=>{u||e.dispatchEvent(new CustomEvent("remove"))};return $`<cosmoz-badge color=${a} size=${l} ?disabled=${u}>
		<slot name="prefix" slot="prefix"></slot>
		<slot></slot>
		<slot name="suffix" slot="suffix"></slot>
		${I(r,()=>$` <button
					slot="suffix"
					class="close"
					aria-label="Remove"
					@mousedown=${g=>g.preventDefault()}
					@click=${c}
				>
					${ee()}
				</button>`)}
	</cosmoz-badge>`};customElements.define("cosmoz-tag",S(te,{observedAttributes:["color","size","disabled","removable"],styleSheets:[D,oe]}));const O=(e,a,l)=>{const u=new Map;for(let r=a;r<=l;r++)u.set(e[r],r);return u},re=P(class extends U{constructor(e){if(super(e),e.type!==j.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,a,l){let u;l===void 0?l=a:a!==void 0&&(u=a);const r=[],c=[];let g=0;for(const h of e)r[g]=u?u(h,g):g,c[g]=l(h,g),g++;return{values:c,keys:r}}render(e,a,l){return this.dt(e,a,l).values}update(e,[a,l,u]){const r=M(e),{values:c,keys:g}=this.dt(a,l,u);if(!Array.isArray(r))return this.ut=g,c;const h=this.ut??=[],p=[];let b,y,i=0,n=r.length-1,t=0,s=c.length-1;for(;i<=n&&t<=s;)if(r[i]===null)i++;else if(r[n]===null)n--;else if(h[i]===g[t])p[t]=v(r[i],c[t]),i++,t++;else if(h[n]===g[s])p[s]=v(r[n],c[s]),n--,s--;else if(h[i]===g[s])p[s]=v(r[i],c[s]),x(e,p[s+1],r[i]),i++,s--;else if(h[n]===g[t])p[t]=v(r[n],c[t]),x(e,r[i],r[n]),n--,t++;else if(b===void 0&&(b=O(g,t,s),y=O(h,i,n)),b.has(h[i]))if(b.has(h[n])){const d=y.get(g[t]),z=d!==void 0?r[d]:null;if(z===null){const C=x(e,r[i]);v(C,c[t]),p[t]=C}else p[t]=v(z,c[t]),x(e,r[i],z),r[d]=null;t++}else E(r[n]),n--;else E(r[i]),i++;for(;t<=s;){const d=x(e,p[s+1]);v(d,c[t]),p[t++]=d}for(;i<=n;){const d=r[i++];d!==null&&E(d)}return this.ut=g,B(e,p),N}}),k=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/u,se=e=>{const[a,l]=q(""),u=Y(void 0),r=f(t=>u.current=t,[]),c=f(t=>{const s=t.trim().toLowerCase();if(!s||!k.test(s))return!1;const d=e.value??[];return d.includes(s)||w(e,"value",[...d,s]),!0},[]),g=f(t=>{const s=e.value??[];w(e,"value",s.filter(d=>d!==t))},[]),h=f(t=>{e.toggleAttribute("invalid",t)},[]),p=f(t=>{if((t.key==="Enter"||t.key===",")&&(t.preventDefault(),c(a)?(l(""),h(!1)):a.trim()&&h(!0)),t.key==="Backspace"&&!a){const s=e.value??[];s.length>0&&w(e,"value",s.slice(0,-1))}},[a]),b=f(t=>{const s=t.target.value;if(s.includes(",")){const d=s.split(",");for(const z of d.slice(0,-1))c(z);l(d.at(-1).trim());return}l(s)},[]),y=f(()=>w(e,"focused",!0),[]),i=f(()=>{a.trim()&&(c(a)?(l(""),h(!1)):h(!0)),w(e,"focused",!1)},[a]),n=f(()=>{const s=(e.value??[]).every(d=>k.test(d))&&(!a.trim()||k.test(a.trim()));return e.toggleAttribute("invalid",!s),s},[a]);return Z({validate:n},[n]),F(()=>{const t=e.shadowRoot,s=d=>{d.composedPath()[0]?.closest?.("input, button")||(d.preventDefault(),u.current?.focus())};return t.addEventListener("mousedown",s),()=>t.removeEventListener("mousedown",s)},[]),{text:a,onRef:r,onKeyDown:p,onInput:b,onFocus:y,onBlur:i,removeEmail:g}},ae=["label","placeholder",...H],ne=e=>{const{value:a=[],disabled:l,readonly:u,autocomplete:r}=e,{text:c,onRef:g,onKeyDown:h,onInput:p,onFocus:b,onBlur:y,removeEmail:i}=se(e);return _($`
			${re(a,n=>n,n=>$`<cosmoz-tag
						removable
						color=${k.test(n)?"gray":"error"}
						?disabled=${l}
						@remove=${()=>i(n)}
					>
						<span slot="prefix" class="prefix">
							${n.charAt(0).toUpperCase()}
						</span>
						${n}
					</cosmoz-tag>`)}
			<input
				${J(g)}
				id="input"
				part="input"
				type="email"
				autocomplete=${A(r)}
				placeholder=${a.length?" ":Q(e)}
				?readonly=${u}
				?aria-disabled=${l}
				?disabled=${l}
				.value=${V(c)}
				@keydown=${h}
				@input=${p}
				@focus=${b}
				@blur=${y}
			/>
		`,e)};customElements.define("cosmoz-email-list",S(ne,{observedAttributes:ae,styleSheets:[R(K),R(G)],shadowRootInit:{mode:"open",delegatesFocus:!0}}));
