import{f as $,T as f,x as p}from"./iframe-BIdVP2do.js";import{i as _,t as A,e as k,u as C,h as y,H as g,d as i,b as G,n as b}from"./style-DNhP-_QB.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const l=(o,t)=>{const e=o._$AN;if(e===void 0)return!1;for(const a of e)a._$AO?.(t,!1),l(a,t);return!0},u=o=>{let t,e;do{if((t=o._$AM)===void 0)break;e=t._$AN,e.delete(o),o=t}while(e?.size===0)},w=o=>{for(let t;t=o._$AM;o=t){let e=t._$AN;if(e===void 0)t._$AN=e=new Set;else if(e.has(o))break;e.add(o),N(t)}};function M(o){this._$AN!==void 0?(u(this),this._$AM=o,w(this)):this._$AM=o}function E(o,t=!1,e=0){const a=this._$AH,c=this._$AN;if(c!==void 0&&c.size!==0)if(t)if(Array.isArray(a))for(let n=e;n<a.length;n++)l(a[n],!1),u(a[n]);else a!=null&&(l(a,!1),u(a));else l(this,o)}const N=o=>{o.type==A.CHILD&&(o._$AP??=E,o._$AQ??=M)};class I extends _{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,a){super._$AT(t,e,a),w(this),this.isConnected=t._$AU}_$AO(t,e=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),e&&(l(this,t),u(this))}setValue(t){if($(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}const h=new WeakMap,O=k(class extends I{render(o){return f}update(o,[t]){const e=t!==this.G;return e&&this.G!==void 0&&this.ot(void 0),(e||this.rt!==this.lt)&&(this.G=t,this.ct=o.options?.host,this.ot(this.lt=o.element)),f}ot(o){if(typeof this.G=="function"){const t=this.ct??globalThis;let e=h.get(t);e===void 0&&(e=new WeakMap,h.set(t,e)),e.get(this.G)!==void 0&&this.G.call(this.ct,void 0),e.set(this.G,o),o!==void 0&&this.G.call(this.ct,o)}else this.G.value=o}get rt(){return typeof this.G=="function"?h.get(this.ct??globalThis)?.get(this.G):this.G?.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const j=o=>o??f;function Y(o){return C(()=>({current:o}),[])}const H=y(class extends g{values;constructor(o,t,e,a){super(o,t),Object.assign(t.host,e),this.values=a}update(o,t){this.hasChanged(t)&&(this.values=t,Object.assign(this.state.host,o))}hasChanged(o=[]){return o.some((t,e)=>this.values[e]!==t)}});y(class extends g{update(){return this.state.host}});const P=/([A-Z])/gu,m=(o,t,e)=>{o[t]=e,o.dispatchEvent(new CustomEvent(t.replace(P,"-$1").toLowerCase()+"-changed",{detail:{value:e}}))},D=o=>{const t=Y(void 0),e=i(s=>t.current=s,[]),a=o.shadowRoot,c=i(s=>o.dispatchEvent(new Event(s.type,{bubbles:s.bubbles})),[]),n=i(s=>{const r=s.target;m(o,"value",r.value)},[]),x=i(s=>{m(o,"focused",s.type==="focus"),o.toggleAttribute("data-focus",s.type==="focus")},[]),d=i(()=>t.current?.focus(),[]),v=i(()=>{const s=t.current?.checkValidity();return o.toggleAttribute("invalid",!s),s},[]);return H({focus:d,validate:v},[d,v]),G(()=>{const s=r=>{r.defaultPrevented||o.disabled||r.target.matches("input, textarea, label")||(r.preventDefault(),o.matches(":focus-within")||d())};return a.addEventListener("mousedown",s),()=>a.removeEventListener("mousedown",s)},[d]),{onChange:c,onFocus:x,onInput:n,onRef:e}},F=(o,{label:t,invalid:e,errorMessage:a})=>p`
		<div class="float" part="float">&nbsp;</div>
		<div class="wrap" part="wrap">
			<slot name="prefix"></slot>
			<div class="control" part="control">
				<slot name="control"></slot>
				${o}
				${b(t,()=>p`<label for="input" part="label">${t}</label>`)}
			</div>
			<slot name="suffix"></slot>
		</div>
		<div class="line" part="line"></div>
		${b(e&&a,()=>p`<div class="error" part="error">${a}</div>`)}
	`,S=["autocomplete","readonly","disabled","maxlength","invalid","no-label-float","always-float-label"],z=(o,...t)=>o.flatMap((e,a)=>[e,t[a]||""]).join(""),R=z`
	.wrap {
		background: var(--focused-bg);
	}

	:host(:not([always-float-label])) #input::placeholder {
		color: var(--focused-color);
		opacity: 1;
	}

	label {
		color: var(--focused-color);
		opacity: 1;
	}

	.line::before {
		transform: none;
		transition: 0.25s transform ease;
	}

	.line {
		border-bottom-color: var(--focused-color);
	}

	:host {
		--contour-color: var(--focused-color);
		caret-color: var(--focused-color);
	}
`,U=z`
	:host {
		container-name: var(--input-state);
		container: inline-size;
		--font-family: var(
			--cosmoz-input-font-family,
			var(--paper-font-subhead_-_font-family, inherit)
		);
		--font-size: var(
			--cosmoz-input-font-size,
			var(--paper-font-subhead_-_font-size, 16px)
		);
		--line-height: var(
			--cosmoz-input-line-height,
			var(--paper-font-subhead_-_line-height, 24px)
		);
		--label-scale: var(--cosmoz-input-label-scale, 0.75);
		--disabled-opacity: var(
			--cosmoz-input-disabled-opacity,
			var(--paper-input-container-disabled_-_opacity, 0.33)
		);
		--disabled-line-opacity: var(
			--cosmoz-input-disabled-line-opacity,
			var(--paper-input-container-underline-disabled_-_opacity, 1)
		);
		--invalid-color: var(
			--cosmoz-input-invalid-color,
			var(--paper-input-container-invalid-color, var(--error-color, #fc5c5b))
		);
		--bg: var(--cosmoz-input-background);
		--focused-bg: var(--cosmoz-input-focused-background, var(--bg));
		--color: var(--cosmoz-input-color, var(--secondary-text-color, #737373));
		--line-color: var(--cosmoz-input-line-color, var(--color));
		--focused-color: var(
			--cosmoz-input-focused-color,
			var(--primary-color, #3f51b5)
		);
		--float-display: var(--cosmoz-input-float-display, block);
		--contour-color: var(--line-color);
		--contour-size: var(--cosmoz-input-contour-size);
		--label-translate-y: var(--cosmoz-input-label-translate-y, 0%);
		--focused: var(--cosmoz-input-focused, none);

		display: block;
		padding: var(--cosmoz-input-padding, 8px 0);
		position: relative;
		max-height: var(--cosmoz-input-max-height);
		font-size: var(--font-size);
		line-height: var(--line-height);
		font-family: var(--font-family);
	}

	:host([disabled]) {
		opacity: var(--disabled-opacity);
	}

	.float {
		line-height: calc(var(--line-height) * var(--label-scale));
		background-color: var(--cosmoz-input-float-bg-color, none);
		display: var(--float-display);
	}

	.wrap {
		padding: var(--cosmoz-input-wrap-padding, 0px);
		display: flex;
		align-items: center;
		position: relative;
		background: var(--bg);
		opacity: var(--cosmoz-input-opacity);
		border-radius: var(--cosmoz-input-border-radius);
		box-shadow: 0 0 0 var(--contour-size) var(--contour-color);
	}

	.control {
		flex: 1;
		position: relative;
	}

	#input {
		padding: 0;
		margin: 0;
		outline: none;
		border: none;
		width: 100%;
		max-width: 100%;
		display: block;
		background: transparent;
		line-height: inherit;
		font-size: inherit;
		font-family: inherit;
		resize: none;
	}

	:host(:focus-within) {
		--focused: focused;
	}

	label {
		position: absolute;
		top: 0;
		left: 0;
		width: var(--cosmoz-input-label-width, 100%);
		transition:
			transform 0.25s,
			width 0.25s;
		transform-origin: left top;
		color: var(--color);
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		text-transform: var(--cosmoz-input-label-text-transform);
		font-weight: var(--cosmoz-input-label-font-weight);
		user-select: none;
	}

	.wrap:has(#input:not(:placeholder-shown)) {
		slot[name='suffix']::slotted(*),
		slot[name='prefix']::slotted(*) {
			transform: translateY(var(--label-translate-y));
		}
	}

	:host([always-float-label]) label,
	#input:not(:placeholder-shown) + label {
		transform: translateY(
				calc(var(--label-scale) * -100% + var(--label-translate-y))
			)
			scale(var(--label-scale));
		background-color: var(--cosmoz-input-floating-label-bg, var(--bg));
	}

	:host([always-float-label]) input,
	#input:not(:placeholder-shown) {
		transform: translateY(var(--label-translate-y));
	}

	:host([always-float-label]) {
		slot[name='suffix']::slotted(*),
		slot[name='prefix']::slotted(*) {
			transform: translateY(var(--label-translate-y));
		}
	}

	:host([no-label-float]) {
		.float,
		label {
			display: none;
		}

		#input:not(:placeholder-shown) {
			transform: translateY(0%);
		}

		.wrap:has(#input:not(:placeholder-shown)) slot[name='suffix']::slotted(*),
		.wrap:has(#input:not(:placeholder-shown)) slot[name='prefix']::slotted(*) {
			transform: translateY(0%);
		}
	}

	.line {
		padding-top: 1px;
		border-bottom: 1px solid var(--line-color);
		position: relative;
		display: var(--cosmoz-input-line-display, block);
	}

	.line::before {
		content: '';
		position: absolute;
		border-bottom: 2px solid transparent;
		border-bottom-color: inherit;
		left: 0;
		right: 0;
		top: 0;
		transform: scaleX(0);
		transform-origin: center center;
		z-index: 1;
	}

	:host([disabled]) .line {
		border-bottom-style: dashed;
		opacity: var(--disabled-line-opacity);
	}

	.error {
		font-size: 12px;
		line-height: 20px;
		overflow: hidden;
		text-overflow: clip;
		position: absolute;
		max-width: 100%;
	}

	:host([invalid]) {
		--contour-color: var(--invalid-color);
		caret-color: var(--invalid-color);
	}

	:host([invalid]) label,
	.error {
		color: var(--invalid-color);
	}
	:host([invalid]) .line {
		border-bottom-color: var(--invalid-color);
	}

	#input::-webkit-inner-spin-button {
		z-index: 1;
	}

	:host([no-spinner]) #input::-webkit-inner-spin-button {
		display: none;
	}
	:host([no-spinner]) #input {
		-moz-appearence: textfield;
	}

	:host([autosize]) {
		width: min-content;
	}
	:host([autosize]) #input {
		min-width: 2ch;
		width: var(--chars);
	}
	:host([autosize]) .control {
		max-width: 100%;
	}

	:host([autosize][type='number']) #input {
		--width: calc(var(--chars) + 0.25em);
	}
	:host([autosize][type='number']:not([no-spinner])) #input {
		width: calc(var(--width) + 15px);
		min-width: calc(2ch + 0.25em + 15px);
	}
	:host([autosize][type='number'][no-spinner]) #input {
		width: var(--width);
		min-width: calc(2ch + 0.25em);
	}
	:host([type='color']) .line {
		display: none;
	}

	/* Firefox fallback for focus */
	:host([data-focus]) .wrap {
		background: var(--focused-bg);
	}

	:host([data-focus]:not([always-float-label])) #input::placeholder {
		color: var(--focused-color);
		opacity: 1;
	}

	:host([data-focus]) label {
		color: var(--focused-color);
		opacity: 1;
	}

	:host([data-focus]) .line::before {
		transform: none;
		transition: 0.25s transform ease;
	}

	:host([data-focus]) .line {
		border-bottom-color: var(--focused-color);
	}

	:host([data-focus]) {
		--contour-color: var(--focused-color);
		caret-color: var(--focused-color);
	}

	/* Modern browsers with @container style query support */
	@container style(--focused: focused) {
		${R}
	}
`;export{S as a,O as n,j as o,F as r,U as s,D as u};
