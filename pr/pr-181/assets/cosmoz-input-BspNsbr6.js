import{b as h}from"./iframe-CFPCSjlc.js";import{u as x,c as y,a as v,l as I}from"./style-C9mthg0Y.js";import{a as w,u as z,r as A,n as E,o as n,s as P}from"./styles-Bzad0hSH.js";const R=e=>x(()=>{if(e==null)return;const a=new RegExp(e,"u");return t=>{!t.defaultPrevented&&t.data&&!a.test(t.data)&&t.preventDefault()}},[e]),S=({placeholder:e,noLabelFloat:a,label:t})=>(a?t:void 0)||e||" ",B=["type","pattern","allowed-pattern","min","max","step","autosize","label","placeholder",...w],C=e=>{const{type:a="text",pattern:t,allowedPattern:u,autocomplete:l,value:o,readonly:p,disabled:r,min:i,max:c,step:d,maxlength:m}=e,{onChange:$,onFocus:s,onInput:f,onRef:b}=z(e),g=R(u);return A(h`
			<input
				${E(b)}
				style="--chars: ${o?.toString()?.length??0}ch"
				id="input"
				part="input"
				type=${a}
				pattern=${n(t)}
				autocomplete=${n(l)}
				placeholder=${S(e)}
				?readonly=${p}
				?aria-disabled=${r}
				?disabled=${r}
				.value=${I(o??"")}
				maxlength=${n(m)}
				@beforeinput=${g}
				@input=${f}
				@change=${$}
				@focus=${s}
				@blur=${s}
				min=${n(i)}
				max=${n(c)}
				step=${n(d)}
			/>
		`,e)};customElements.define("cosmoz-input",y(C,{observedAttributes:B,styleSheets:[v(P)]}));
