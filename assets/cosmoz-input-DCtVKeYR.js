import{n as e}from"./chunk-zsgVPwQN.js";import{G as t,K as n}from"./iframe-XdIfrZ1A.js";import{a as r,b as i,c as a,h as o,o as s,s as c}from"./style-Do7FhrfL.js";import{a as l,c as u,d,i as f,l as p,n as m,o as h,r as g,s as _,t as v,u as y}from"./use-input-8MdGrBmf.js";var b,x=e((()=>{c(),b=e=>o(()=>{if(e==null)return;let t=new RegExp(e,`u`);return e=>{!e.defaultPrevented&&e.data&&!t.test(e.data)&&e.preventDefault()}},[e])})),S,C,w=e((()=>{S=({placeholder:e,noLabelFloat:t,label:n})=>(t?n:void 0)||e||` `,C=(e,t)=>t??(e===`date`?`9999-12-31`:void 0)})),T,E,D=e((()=>{c(),n(),y(),r(),u(),h(),g(),x(),v(),w(),T=[`type`,`pattern`,`allowed-pattern`,`min`,`max`,`step`,`autosize`,`label`,`placeholder`,...l],E=e=>{let{type:n=`text`,pattern:r,allowedPattern:i,autocomplete:a,value:o,readonly:c,disabled:l,min:u,max:f,step:h,maxlength:g}=e,{onChange:v,onFocus:y,onInput:x,onRef:w}=m(e),T=b(i);return _(t`
			<input
				${p(w)}
				style="--chars: ${o?.toString()?.length??0}ch"
				id="input"
				part="input"
				type=${n}
				pattern=${d(r)}
				autocomplete=${d(a)}
				placeholder=${S(e)}
				?readonly=${c}
				?aria-disabled=${l}
				?disabled=${l}
				.value=${s(o??``)}
				maxlength=${d(g)}
				@beforeinput=${T}
				@input=${x}
				@change=${v}
				@focus=${y}
				@blur=${y}
				min=${d(u)}
				max=${d(C(n,f))}
				step=${d(h)}
			/>
		`,e)},customElements.define(`cosmoz-input`,a(E,{observedAttributes:T,styleSheets:[i(f)],shadowRootInit:{mode:`open`,delegatesFocus:!0}}))}));export{D as t};