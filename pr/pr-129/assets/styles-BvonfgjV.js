import{f as _,T as f,x as p}from"./iframe-CwaoGBMI.js";import{i as A,t as k,e as C,u as M,h as g,H as w,d as l,b,n as m}from"./style-w7dyvgXP.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const c=(t,o)=>{const e=t._$AN;if(e===void 0)return!1;for(const a of e)a._$AO?.(o,!1),c(a,o);return!0},d=t=>{let o,e;do{if((o=t._$AM)===void 0)break;e=o._$AN,e.delete(t),t=o}while(e?.size===0)},z=t=>{for(let o;o=t._$AM;t=o){let e=o._$AN;if(e===void 0)o._$AN=e=new Set;else if(e.has(t))break;e.add(t),E(o)}};function G(t){this._$AN!==void 0?(d(this),this._$AM=t,z(this)):this._$AM=t}function Y(t,o=!1,e=0){const a=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(o)if(Array.isArray(a))for(let n=e;n<a.length;n++)c(a[n],!1),d(a[n]);else a!=null&&(c(a,!1),d(a));else c(this,t)}const E=t=>{t.type==k.CHILD&&(t._$AP??=Y,t._$AQ??=G)};class N extends A{constructor(){super(...arguments),this._$AN=void 0}_$AT(o,e,a){super._$AT(o,e,a),z(this),this.isConnected=o._$AU}_$AO(o,e=!0){o!==this.isConnected&&(this.isConnected=o,o?this.reconnected?.():this.disconnected?.()),e&&(c(this,o),d(this))}setValue(o){if(_(this._$Ct))this._$Ct._$AI(o,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=o,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}const h=new WeakMap,F=C(class extends N{render(t){return f}update(t,[o]){const e=o!==this.G;return e&&this.G!==void 0&&this.ot(void 0),(e||this.rt!==this.lt)&&(this.G=o,this.ct=t.options?.host,this.ot(this.lt=t.element)),f}ot(t){if(typeof this.G=="function"){const o=this.ct??globalThis;let e=h.get(o);e===void 0&&(e=new WeakMap,h.set(o,e)),e.get(this.G)!==void 0&&this.G.call(this.ct,void 0),e.set(this.G,t),t!==void 0&&this.G.call(this.ct,t)}else this.G.value=t}get rt(){return typeof this.G=="function"?h.get(this.ct??globalThis)?.get(this.G):this.G?.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const L=t=>t??f;function I(t){return M(()=>({current:t}),[])}const H=g(class extends w{values;constructor(t,o,e,a){super(t,o),Object.assign(o.host,e),this.values=a}update(t,o){this.hasChanged(o)&&(this.values=o,Object.assign(this.state.host,t))}hasChanged(t=[]){return t.some((o,e)=>this.values[e]!==o)}});g(class extends w{update(){return this.state.host}});const O=/([A-Z])/gu,y=(t,o,e)=>{t[o]=e,t.dispatchEvent(new CustomEvent(o.replace(O,"-$1").toLowerCase()+"-changed",{detail:{value:e}}))},V=t=>{const o=I(void 0),e=l(r=>o.current=r,[]),a=t.shadowRoot,i=l(r=>t.dispatchEvent(new Event(r.type,{bubbles:r.bubbles})),[]),n=l(r=>{const s=r.target;y(t,"value",s.value),t.toggleAttribute("data-with-value",s.value!=="")},[]),x=l(r=>{y(t,"focused",r.type==="focus"),t.toggleAttribute("data-focus",r.type==="focus")},[]),u=l(()=>o.current?.focus(),[]),v=l(()=>{const r=o.current?.checkValidity();return t.toggleAttribute("invalid",!r),r},[]);return H({focus:u,validate:v},[u,v]),b(()=>{const r=()=>{const $=o.current?.value!=="";t.toggleAttribute("data-with-value",$)};r();const s=new MutationObserver(r);return o.current&&s.observe(o.current,{attributes:!0,attributeFilter:["value"]}),()=>s.disconnect()},[t.value]),b(()=>{const r=s=>{s.defaultPrevented||t.disabled||s.target.matches("input, textarea, label")||(s.preventDefault(),t.matches(":focus-within")||u())};return a.addEventListener("mousedown",r),()=>a.removeEventListener("mousedown",r)},[u]),{onChange:i,onFocus:x,onInput:n,onRef:e}},j=(t,o)=>{const{label:e,invalid:a,errorMessage:i}=o;return p`
		<div class="float" part="float">&nbsp;</div>
		<div class="wrap" part="wrap">
			<slot name="prefix"></slot>
			<div class="control" part="control">
				<slot name="control"></slot>
				${t}
				${m(e,()=>p`<label for="input" part="label">${e}</label>`)}
			</div>
			<slot name="suffix"></slot>
		</div>
		<div class="line" part="line"></div>
		${m(a&&i,()=>p`<div class="error" part="error">${i}</div>`)}
	`},D=["autocomplete","readonly","disabled","maxlength","invalid","no-label-float","always-float-label"],P=(t,...o)=>t.flatMap((e,a)=>[e,o[a]||""]).join(""),q=P`
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
		--input-state: var(--cosmoz-input-state, initial);

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
		--input-state: focus;
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
		--input-state: with-value;
	}

	:host([always-float-label]) {
		slot[name='suffix']::slotted(*),
		slot[name='prefix']::slotted(*) {
			transform: translateY(var(--label-translate-y));
		}
	}

	:host([always-float-label]) label {
		transform: translateY(
				calc(var(--label-scale) * -100% + var(--label-translate-y))
			)
			scale(var(--label-scale));
		background-color: var(--cosmoz-input-floating-label-bg, var(--bg));
	}

	:host([always-float-label]) input {
		transform: translateY(var(--label-translate-y));
	}

	:host([no-label-float]) {
		.float,
		label {
			display: none;
		}
	}

	:host([no-label-float]) .wrap:has(#input:not(:placeholder-shown)),
	:host([no-label-float]) #input:not(:placeholder-shown) {
		--input-state: initial;
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
	@container style(--input-state: focus) {
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
	}

	/* Firefox fallback for with-value */
	:host([data-with-value]:not([always-float-label])) #input::placeholder {
		opacity: 0;
	}

	:host([data-with-value]) label {
		transform: translateY(
				calc(var(--label-scale) * -100% + var(--label-translate-y))
			)
			scale(var(--label-scale));
		background-color: var(--cosmoz-input-floating-label-bg, var(--bg));
	}

	:host([data-with-value]) #input {
		transform: translateY(var(--label-translate-y));
	}

	:host([data-with-value]) slot[name='suffix']::slotted(*),
	:host([data-with-value]) slot[name='prefix']::slotted(*) {
		transform: translateY(var(--label-translate-y));
	}

	/* Modern browsers with @container style query support */
	@container style(--input-state: with-value) {
		:host(:not([always-float-label])) #input::placeholder {
			opacity: 0;
		}

		label {
			transform: translateY(
					calc(var(--label-scale) * -100% + var(--label-translate-y))
				)
				scale(var(--label-scale));
			background-color: var(--cosmoz-input-floating-label-bg, var(--bg));
		}

		#input {
			transform: translateY(var(--label-translate-y));
		}

		slot[name='suffix']::slotted(*),
		slot[name='prefix']::slotted(*) {
			transform: translateY(var(--label-translate-y));
		}
	}
`;export{D as a,F as n,L as o,j as r,q as s,V as u};
