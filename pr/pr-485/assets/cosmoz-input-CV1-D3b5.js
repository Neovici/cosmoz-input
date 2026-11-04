import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{a as t,c as n,i as r,l as i,n as a,r as o,s}from"./iframe-3UyGwbVv.js";import{i as c,r as l}from"./normalize.css-Chd5hA0n.js";import{n as u,t as d}from"./live--HMoh9Pi.js";import{a as f,c as p,i as m,l as h,n as g,o as _,r as v,s as y,t as b}from"./use-input-CnbyMJIr.js";import{C as x,D as S,E as C,T as w,h as T,n as E,t as D,w as O}from"./haunted-DN5b-9s8.js";var k,A,j,M;function N(){return(N=e((()=>{i(),a(),C(),k={[S.PROPERTY]:(e,t)=>e===t,[S.BOOLEAN_ATTRIBUTE]:(e,t)=>!!e===t,[S.ATTRIBUTE]:(e,t)=>t===String(e)},A=class extends w{constructor(e){if(super(e),e.type!==S.PROPERTY&&e.type!==S.ATTRIBUTE&&e.type!==S.BOOLEAN_ATTRIBUTE)throw Error("The `liveEq` directive is not allowed on child or event bindings");if(!r(e))throw Error("`liveEq` bindings can only contain a single expression")}render(e,t){return e}update(e,[n,r=k[e.type]]){if(n===s||n===t)return n;let{type:i,name:a,element:c}=e,l;return l=i===S.PROPERTY?c[a]:i===S.ATTRIBUTE?c.getAttribute(a):c.hasAttribute(a),r(n,l)?s:(o(e),n)}},j=O(A),M=(e,t)=>{let n=e=>e===void 0||e===``||typeof e==`number`&&Number.isNaN(e)||typeof e==`string`&&Number.isNaN(Number(e));if(n(e)&&n(t))return!0;if(n(e)||n(t))return!1;let r=Number(e),i=Number(t);return r===i||Number.isNaN(r)&&Number.isNaN(i)}})))()}var P;function F(){return(F=e((()=>{D(),P=e=>T(()=>{if(e==null)return;let t=new RegExp(e,`u`);return e=>{!e.defaultPrevented&&e.data&&!t.test(e.data)&&e.preventDefault()}},[e])})))()}var I,L;function R(){return(R=e((()=>{I=({placeholder:e})=>e||` `,L=(e,t)=>t??(e===`date`?`9999-12-31`:void 0)})))()}var z,B;function V(){return(V=e((()=>{N(),D(),i(),l(),d(),p(),_(),v(),F(),b(),R(),z=[`type`,`variant`,`size`,`hint`,`compact`,`required`,`pattern`,`allowed-pattern`,`min`,`max`,`step`,`autosize`,`label`,`placeholder`,`inputmode`,`enterkeyhint`,...f,`aria-label`],B=e=>{let{type:t=`text`,pattern:r,allowedPattern:i,autocomplete:a,value:o,readonly:s,disabled:l,min:d,max:f,step:p,maxlength:m,required:_,hint:v,invalid:b,errorMessage:x}=e,{onChange:S,onFocus:C,onInput:w,onRef:T}=g(e),E=P(i),D=b&&x&&`error`||v&&!b&&`hint`||void 0;return e.toggleAttribute(`has-value`,!!o),y(n`
			<input
				${h(T)}
				style="--chars: ${o?.toString()?.length??0}ch"
				id="input"
				part="input"
				type=${t}
				pattern=${c(r)}
				autocomplete=${c(a)}
				inputmode=${c(e.inputmode)}
				enterkeyhint=${c(e.enterkeyhint)}
				placeholder=${I({placeholder:e.placeholder})}
				?readonly=${s}
				aria-disabled=${l?`true`:`false`}
				aria-label=${c(e.getAttribute(`aria-label`))}
				?disabled=${l}
				?required=${_}
				aria-invalid=${c(b?`true`:void 0)}
				aria-describedby=${c(D)}
				.value=${t===`number`?j(o??``,M):u(o??``)}
				maxlength=${c(m)}
				@beforeinput=${E}
				@input=${w}
				@change=${S}
				@focus=${C}
				@blur=${C}
				min=${c(d)}
				max=${c(L(t,f))}
				step=${c(p)}
			/>
		`,e)},customElements.define(`cosmoz-input`,E(B,{observedAttributes:z,styleSheets:[x(m)],shadowRootInit:{mode:`open`,delegatesFocus:!0}}))})))()}export{V as t};