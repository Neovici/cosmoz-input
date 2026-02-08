import{u as h,c as x,a as y,l as v}from"./style-Dtgi7mhh.js";import{b as I}from"./iframe-CTos_gcS.js";import{a as w,u as R,r as z,n as A,o as n,s as E}from"./use-input-0jlO44TR.js";const F=e=>h(()=>{if(e==null)return;const a=new RegExp(e,"u");return t=>{!t.defaultPrevented&&t.data&&!a.test(t.data)&&t.preventDefault()}},[e]),P=({placeholder:e,noLabelFloat:a,label:t})=>(a?t:void 0)||e||" ",S=["type","pattern","allowed-pattern","min","max","step","autosize","label","placeholder",...w],B=e=>{const{type:a="text",pattern:t,allowedPattern:u,autocomplete:l,value:o,readonly:p,disabled:s,min:i,max:d,step:c,maxlength:m}=e,{onChange:$,onFocus:r,onInput:f,onRef:b}=R(e),g=F(u);return z(I`
			<input
				${A(b)}
				style="--chars: ${o?.toString()?.length??0}ch"
				id="input"
				part="input"
				type=${a}
				pattern=${n(t)}
				autocomplete=${n(l)}
				placeholder=${P(e)}
				?readonly=${p}
				?aria-disabled=${s}
				?disabled=${s}
				.value=${v(o??"")}
				maxlength=${n(m)}
				@beforeinput=${g}
				@input=${f}
				@change=${$}
				@focus=${r}
				@blur=${r}
				min=${n(i)}
				max=${n(d)}
				step=${n(c)}
			/>
		`,e)};customElements.define("cosmoz-input",x(B,{observedAttributes:S,styleSheets:[y(E)],shadowRootInit:{mode:"open",delegatesFocus:!0}}));
