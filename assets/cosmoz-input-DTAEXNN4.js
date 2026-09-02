import{i as e}from"./preload-helper-CCSz8wUY.js";import{d as t,u as n}from"./iframe-DHXAR6-K.js";import{D as r,a as i,c as a,o,s,y as c}from"./style-B7MuSHHn.js";import{a as l,c as u,d,i as f,l as p,n as m,o as h,r as g,s as _,t as v,u as y}from"./use-input-F0AeBOOD.js";var b,x=e((()=>{s(),b=e=>c(()=>{if(e==null)return;let t=new RegExp(e,`u`);return e=>{!e.defaultPrevented&&e.data&&!t.test(e.data)&&e.preventDefault()}},[e])})),S,C,w=e((()=>{S=({placeholder:e,noLabelFloat:t,label:n})=>(t?n:void 0)||e||` `,C=(e,t)=>t??(e===`date`?`9999-12-31`:void 0)})),T,E,D=e((()=>{s(),t(),y(),i(),u(),h(),g(),x(),v(),w(),T=[`type`,`pattern`,`allowed-pattern`,`min`,`max`,`step`,`autosize`,`label`,`placeholder`,...l],E=e=>{let{type:t=`text`,pattern:r,allowedPattern:i,autocomplete:a,value:s,readonly:c,disabled:l,min:u,max:f,step:h,maxlength:g}=e,{onChange:v,onFocus:y,onInput:x,onRef:w}=m(e),T=b(i);return _(n`
			<input
				${p(w)}
				style="--chars: ${s?.toString()?.length??0}ch"
				id="input"
				part="input"
				type=${t}
				pattern=${d(r)}
				autocomplete=${d(a)}
				placeholder=${S(e)}
				?readonly=${c}
				?aria-disabled=${l}
				?disabled=${l}
				.value=${o(s??``)}
				maxlength=${d(g)}
				@beforeinput=${T}
				@input=${x}
				@change=${v}
				@focus=${y}
				@blur=${y}
				min=${d(u)}
				max=${d(C(t,f))}
				step=${d(h)}
			/>
		`,e)},customElements.define(`cosmoz-input`,a(E,{observedAttributes:T,styleSheets:[r(f)],shadowRootInit:{mode:`open`,delegatesFocus:!0}}))}));export{D as t};