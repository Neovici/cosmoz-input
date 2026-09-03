import{i as e}from"./preload-helper-CCSz8wUY.js";import{c as t,s as n}from"./iframe-CJTB0Edv.js";import{a as r,c as i,i as a,l as o,m as s,n as c,o as l,p as u,r as d,s as f,t as p}from"./use-input-BQm4elqt.js";import{T as m,_ as h,i as g,n as _,r as v,t as y}from"./live-BPZiiNYV.js";var b,x=e((()=>{v(),b=e=>h(()=>{if(e==null)return;let t=new RegExp(e,`u`);return e=>{!e.defaultPrevented&&e.data&&!t.test(e.data)&&e.preventDefault()}},[e])})),S,C,w=e((()=>{S=({placeholder:e})=>e||` `,C=(e,t)=>t??(e===`date`?`9999-12-31`:void 0)})),T,E,D=e((()=>{v(),t(),u(),y(),i(),l(),d(),x(),p(),w(),T=[`type`,`variant`,`hint`,`compact`,`required`,`pattern`,`allowed-pattern`,`min`,`max`,`step`,`autosize`,`label`,`placeholder`,...r],E=e=>{let{type:t=`text`,pattern:r,allowedPattern:i,autocomplete:a,value:l,readonly:u,disabled:d,min:p,max:m,step:h,maxlength:g,required:v}=e,{onChange:y,onFocus:x,onInput:w,onRef:T}=c(e),E=b(i);return e.toggleAttribute(`has-value`,!!l),f(n`
			<input
				${o(T)}
				style="--chars: ${l?.toString()?.length??0}ch"
				id="input"
				part="input"
				type=${t}
				pattern=${s(r)}
				autocomplete=${s(a)}
				placeholder=${S({placeholder:e.placeholder})}
				?readonly=${u}
				aria-disabled=${d?`true`:`false`}
				?disabled=${d}
				?required=${v}
				.value=${_(l??``)}
				maxlength=${s(g)}
				@beforeinput=${E}
				@input=${w}
				@change=${y}
				@focus=${x}
				@blur=${x}
				min=${s(p)}
				max=${s(C(t,m))}
				step=${s(h)}
			/>
		`,e)},customElements.define(`cosmoz-input`,g(E,{observedAttributes:T,styleSheets:[m(a)],shadowRootInit:{mode:`open`,delegatesFocus:!0}}))}));export{D as t};