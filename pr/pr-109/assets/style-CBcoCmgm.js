import{f as U,w as E,T as C,m as J,j as K,x as z}from"./iframe-D_1uvEP4.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const f={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},B=t=>(...e)=>({_$litDirective$:t,values:e});class F{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,s,o){this._$Ct=e,this._$AM=s,this._$Ci=o}_$AS(e,s){return this.update(e,s)}update(e,s){return this.render(...s)}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const At=B(class extends F{constructor(t){if(super(t),t.type!==f.PROPERTY&&t.type!==f.ATTRIBUTE&&t.type!==f.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!U(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===E||e===C)return e;const s=t.element,o=t.name;if(t.type===f.PROPERTY){if(e===s[o])return E}else if(t.type===f.BOOLEAN_ATTRIBUTE){if(!!e===s.hasAttribute(o))return E}else if(t.type===f.ATTRIBUTE&&s.getAttribute(o)===e+"")return E;return J(t),e}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const g=(t,e)=>{const s=t._$AN;if(s===void 0)return!1;for(const o of s)o._$AO?.(e,!1),g(o,e);return!0},$=t=>{let e,s;do{if((e=t._$AM)===void 0)break;s=e._$AN,s.delete(t),t=e}while(s?.size===0)},D=t=>{for(let e;e=t._$AM;t=e){let s=e._$AN;if(s===void 0)e._$AN=s=new Set;else if(s.has(t))break;s.add(t),et(e)}};function V(t){this._$AN!==void 0?($(this),this._$AM=t,D(this)):this._$AM=t}function tt(t,e=!1,s=0){const o=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(e)if(Array.isArray(o))for(let a=s;a<o.length;a++)g(o[a],!1),$(o[a]);else o!=null&&(g(o,!1),$(o));else g(this,t)}const et=t=>{t.type==f.CHILD&&(t._$AP??=tt,t._$AQ??=V)};class st extends F{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,s,o){super._$AT(e,s,o),D(this),this.isConnected=e._$AU}_$AO(e,s=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),s&&(g(this,e),$(this))}setValue(e){if(U(this._$Ct))this._$Ct._$AI(e,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=e,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}const S=new WeakMap,Ct=B(class extends st{render(t){return C}update(t,[e]){const s=e!==this.G;return s&&this.G!==void 0&&this.ot(void 0),(s||this.rt!==this.lt)&&(this.G=e,this.ct=t.options?.host,this.ot(this.lt=t.element)),C}ot(t){if(typeof this.G=="function"){const e=this.ct??globalThis;let s=S.get(e);s===void 0&&(s=new WeakMap,S.set(e,s)),s.get(this.G)!==void 0&&this.G.call(this.ct,void 0),s.set(this.G,t),t!==void 0&&this.G.call(this.ct,t)}else this.G.value=t}get rt(){return typeof this.G=="function"?S.get(this.ct??globalThis)?.get(this.G):this.G?.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $t=t=>t??C;let k,H=0;function O(t){k=t}function I(){k=null,H=0}function ot(){return H++}const P=Symbol("haunted.phase"),A=Symbol("haunted.hook"),N=Symbol("haunted.update"),L=Symbol("haunted.commit"),b=Symbol("haunted.effects"),_=Symbol("haunted.layoutEffects"),T="haunted.context";class nt{update;host;virtual;[A];[b];[_];constructor(e,s){this.update=e,this.host=s,this[A]=new Map,this[b]=[],this[_]=[]}run(e){O(this);let s=e();return I(),s}_runEffects(e){let s=this[e];O(this);for(let o of s)o.call(this);I()}runEffects(){this._runEffects(b)}runLayoutEffects(){this._runEffects(_)}teardown(){this[A].forEach(s=>{typeof s.teardown=="function"&&s.teardown()})}}const rt=Promise.resolve().then.bind(Promise.resolve());function Y(){let t=[],e;function s(){e=null;let o=t;t=[];for(var n=0,a=o.length;n<a;n++)o[n]()}return function(o){t.push(o),e==null&&(e=rt(s))}}const it=Y(),M=Y();class at{renderer;host;state;[P];_updateQueued;constructor(e,s){this.renderer=e,this.host=s,this.state=new nt(this.update.bind(this),s),this[P]=null,this._updateQueued=!1}update(){this._updateQueued||(it(()=>{let e=this.handlePhase(N);M(()=>{this.handlePhase(L,e),M(()=>{this.handlePhase(b)})}),this._updateQueued=!1}),this._updateQueued=!0)}handlePhase(e,s){switch(this[P]=e,e){case L:this.commit(s),this.runEffects(_);return;case N:return this.render();case b:return this.runEffects(b)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(e){this.state._runEffects(e)}teardown(){this.state.teardown()}}const lt=(...t)=>{const e=new CSSStyleSheet;return e.replaceSync(t.join("")),e},ct=t=>t.map(e=>typeof e=="string"?lt(e):e),ut=(t="")=>t.replace(/-+([a-z])?/g,(e,s)=>s?s.toUpperCase():"");function ht(t){class e extends at{frag;renderResult;constructor(n,a,v){super(n,v||a),this.frag=a}commit(n){this.renderResult=t(n,this.frag)}}function s(o,n,a){const v=(a||n||{}).baseElement||HTMLElement,{observedAttributes:m=[],useShadowDOM:x=!0,shadowRootInit:r={},styleSheets:y}=a||n||{};class R extends v{_scheduler;static get observedAttributes(){return o.observedAttributes||m||[]}constructor(){if(super(),x===!1)this._scheduler=new e(o,this);else{const i=this.attachShadow({mode:"open",...r});y&&(i.adoptedStyleSheets=ct(y)),this._scheduler=new e(o,i,this)}}connectedCallback(){this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(i,u,l){if(u===l)return;let c=l===""?!0:l;Reflect.set(this,ut(i),c)}}function X(h){let i=h,u=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return i},set(l){u&&i===l||(u=!0,i=l,this._scheduler&&this._scheduler.update())}})}const q=new Proxy(v.prototype,{getPrototypeOf(h){return h},set(h,i,u,l){let c;return i in h?(c=Object.getOwnPropertyDescriptor(h,i),c&&c.set?(c.set.call(l,u),!0):(Reflect.set(h,i,u,l),!0)):(typeof i=="symbol"||i[0]==="_"?c={enumerable:!0,configurable:!0,writable:!0,value:u}:c=X(u),Object.defineProperty(l,i,c),c.set&&c.set.call(l,u),!0)}});return Object.setPrototypeOf(R.prototype,q),R}return s}class d{id;state;constructor(e,s){this.id=e,this.state=s}}function dt(t,...e){let s=ot(),o=k[A],n=o.get(s);return n||(n=new t(s,k,...e),o.set(s,n)),n.update(...e)}function p(t){return dt.bind(null,t)}function Q(t){return p(class extends d{callback;lastValues;values;_teardown;constructor(e,s,o,n){super(e,s),t(s,this)}update(e,s){this.callback=e,this.values=s}call(){const e=!this.values||this.hasChanged();this.lastValues=this.values,e&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(){typeof this._teardown=="function"&&this._teardown()}hasChanged(){return!this.lastValues||this.values.some((e,s)=>this.lastValues[s]!==e)}})}function W(t,e){t[b].push(e)}const pt=Q(W),ft=t=>t instanceof Element?t:t.startNode||t.endNode||t.parentNode,bt=p(class extends d{Context;value;_ranEffect;_unsubscribe;constructor(t,e,s){super(t,e),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,W(e,this)}update(t){return this.Context!==t&&(this._subscribe(t),this.Context=t),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(t){this.value=t,this.state.update()}_subscribe(t){const e={Context:t,callback:this._updater};ft(this.state.host).dispatchEvent(new CustomEvent(T,{detail:e,bubbles:!0,cancelable:!0,composed:!0}));const{unsubscribe:o=null,value:n}=e;this.value=o?n:t.defaultValue,this._unsubscribe=o}teardown(){this._unsubscribe&&this._unsubscribe()}});function vt(t){return e=>{const s={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display="contents",this.listeners=new Set,this.addEventListener(T,this)}disconnectedCallback(){this.removeEventListener(T,this)}handleEvent(o){const{detail:n}=o;n.Context===s&&(n.value=this.value,n.unsubscribe=this.unsubscribe.bind(this,n.callback),this.listeners.add(n.callback),o.stopPropagation())}unsubscribe(o){this.listeners.delete(o)}set value(o){this._value=o;for(let n of this.listeners)n(o)}get value(){return this._value}},Consumer:t(function({render:o}){const n=bt(s);return o(n)},{useShadowDOM:!1}),defaultValue:e};return s}}const Z=p(class extends d{value;values;constructor(t,e,s,o){super(t,e),this.value=s(),this.values=o}update(t,e){return this.hasChanged(e)&&(this.values=e,this.value=t()),this.value}hasChanged(t=[]){return t.some((e,s)=>this.values[s]!==e)}}),w=(t,e)=>Z(()=>t,e);function mt(t,e){t[_].push(e)}Q(mt);p(class extends d{args;constructor(t,e,s){super(t,e),this.updater=this.updater.bind(this),typeof s=="function"&&(s=s()),this.makeArgs(s)}update(){return this.args}updater(t){const[e]=this.args;typeof t=="function"&&(t=t(e)),!Object.is(e,t)&&(this.makeArgs(t),this.state.update())}makeArgs(t){this.args=Object.freeze([t,this.updater])}});p(class extends d{reducer;currentState;constructor(t,e,s,o,n){super(t,e),this.dispatch=this.dispatch.bind(this),this.currentState=n!==void 0?n(o):o}update(t){return this.reducer=t,[this.currentState,this.dispatch]}dispatch(t){this.currentState=this.reducer(this.currentState,t),this.state.update()}});const yt=/([A-Z])/gu;p(class extends d{property;eventName;constructor(t,e,s,o){if(super(t,e),this.state.virtual)throw new Error("Can't be used with virtual components.");this.updater=this.updater.bind(this),this.property=s,this.eventName=s.replace(yt,"-$1").toLowerCase()+"-changed",this.state.host[this.property]==null&&(typeof o=="function"&&(o=o()),o!=null&&this.updateProp(o))}update(t,e){return[this.state.host[this.property],this.updater]}updater(t){const e=this.state.host[this.property];typeof t=="function"&&(t=t(e)),!Object.is(e,t)&&this.updateProp(t)}updateProp(t){this.notify(t).defaultPrevented||(this.state.host[this.property]=t)}notify(t){const e=new CustomEvent(this.eventName,{detail:{value:t,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(e),e}});function wt(t){return Z(()=>({current:t}),[])}function gt({render:t}){const e=ht(t),s=vt(e);return{component:e,createContext:s}}const{component:kt}=gt({render:K}),_t=p(class extends d{values;constructor(t,e,s,o){super(t,e),Object.assign(e.host,s),this.values=o}update(t,e){this.hasChanged(e)&&(this.values=e,Object.assign(this.state.host,t))}hasChanged(t=[]){return t.some((e,s)=>this.values[s]!==e)}});p(class extends d{update(){return this.state.host}});const xt=/([A-Z])/gu,j=(t,e,s)=>{t[e]=s,t.dispatchEvent(new CustomEvent(e.replace(xt,"-$1").toLowerCase()+"-changed",{detail:{value:s}}))},St=t=>{const e=wt(void 0),s=w(r=>e.current=r,[]),o=t.shadowRoot,n=w(r=>t.dispatchEvent(new Event(r.type,{bubbles:r.bubbles})),[]),a=w(r=>j(t,"value",r.target.value),[]),v=w(r=>j(t,"focused",r.type==="focus"),[]),m=w(()=>e.current?.focus(),[]),x=w(()=>{const r=e.current?.checkValidity();return t.toggleAttribute("invalid",!r),r},[]);return _t({focus:m,validate:x},[m,x]),pt(()=>{const r=y=>{y.defaultPrevented||t.disabled||y.target.matches("input, textarea, label")||(y.preventDefault(),t.matches(":focus-within")||m())};return o.addEventListener("mousedown",r),()=>o.removeEventListener("mousedown",r)},[m]),{onChange:n,onFocus:v,onInput:a,onRef:s}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function G(t,e,s){return t?e(t):s?.(t)}const Pt=(t,{label:e,invalid:s,errorMessage:o})=>z`
		<div class="float" part="float">&nbsp;</div>
		<div class="wrap" part="wrap">
			<slot name="prefix"></slot>
			<div class="control" part="control">
				<slot name="control"></slot>
				${t}
				${G(e,()=>z`<label for="input" part="label">${e}</label>`)}
			</div>
			<slot name="suffix"></slot>
		</div>
		<div class="line" part="line"></div>
		${G(s&&o,()=>z`<div class="error" part="error">${o}</div>`)}
	`,Tt=["autocomplete","readonly","disabled","maxlength","invalid","no-label-float","always-float-label"],Et=(t,...e)=>t.flatMap((s,o)=>[s,e[o]||""]).join(""),Rt=Et`
	:host {
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
		--label-translate-y: var(--cosmoz-input-label-translate-y, none);

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

	:host(:focus-within) .wrap {
		background: var(--focused-bg);
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
	}
	.wrap:has(#input:not(:placeholder-shown)) slot[name='suffix']::slotted(*),
	.wrap:has(#input:not(:placeholder-shown)) slot[name='prefix']::slotted(*) {
		transform: translateY(var(--label-translate-y));
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

	:host([always-float-label]) slot[name='suffix']::slotted(*),
	:host([always-float-label]) slot[name='prefix']::slotted(*) {
		transform: translateY(var(--label-translate-y));
	}

	:host(:not(always-float-label):focus-within) #input::placeholder,
	:host(:focus-within) label {
		color: var(--focused-color);
		opacity: 1;
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
	:host(:focus-within) .line::before {
		transform: none;
		transition: 0.25s transform ease;
	}
	:host(:focus-within) .line {
		border-bottom-color: var(--focused-color);
	}

	:host(:focus-within) {
		--contour-color: var(--focused-color);
		caret-color: var(--focused-color);
	}

	:host([disabled]) .line {
		border-bottom-style: dashed;
		opacity: var(--disabled-line-opacity);
	}

	:host([no-label-float]) .float,
	:host([no-label-float]) label {
		display: none;
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
`,Ot=z`
	<style>
		@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500&display=swap');
		html {
			font-family: 'Inter', sans-serif;
		}
	</style>
`;export{Tt as a,St as b,kt as c,Rt as d,Ot as e,pt as f,At as l,Ct as n,$t as o,Pt as r,lt as s,Z as u};
