import{g as h,b as x,a as y,l as v}from"./style-CiHdT7xP.js";import{b as I}from"./iframe-0wfgs31L.js";import{b as w,s as R,r as z,c as A,o as n}from"./use-notify-property-CbNkGZz6.js";import{u as E}from"./use-input-_Fqa8T7X.js";import{g as F}from"./util-hjyn66mY.js";const P=e=>h(()=>{if(e==null)return;const a=new RegExp(e,"u");return t=>{!t.defaultPrevented&&t.data&&!a.test(t.data)&&t.preventDefault()}},[e]),S=["type","pattern","allowed-pattern","min","max","step","autosize","label","placeholder",...w],B=e=>{const{type:a="text",pattern:t,allowedPattern:p,autocomplete:u,value:o,readonly:l,disabled:r,min:i,max:m,step:d,maxlength:c}=e,{onChange:$,onFocus:s,onInput:f,onRef:b}=E(e),g=P(p);return z(I`
			<input
				${A(b)}
				style="--chars: ${o?.toString()?.length??0}ch"
				id="input"
				part="input"
				type=${a}
				pattern=${n(t)}
				autocomplete=${n(u)}
				placeholder=${F(e)}
				?readonly=${l}
				?aria-disabled=${r}
				?disabled=${r}
				.value=${v(o??"")}
				maxlength=${n(c)}
				@beforeinput=${g}
				@input=${f}
				@change=${$}
				@focus=${s}
				@blur=${s}
				min=${n(i)}
				max=${n(m)}
				step=${n(d)}
			/>
		`,e)};customElements.define("cosmoz-input",x(B,{observedAttributes:S,styleSheets:[y(R)],shadowRootInit:{mode:"open",delegatesFocus:!0}}));
