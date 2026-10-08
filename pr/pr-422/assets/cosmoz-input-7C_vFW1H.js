import{i as e}from"./preload-helper-CCSz8wUY.js";import{c as t,s as n}from"./iframe-C5H0lviV.js";import{i as r,r as i}from"./normalize.css-B7HVsFSO.js";import{n as a,t as o}from"./live-6PWPvTjI.js";import{a as s,c,i as l,l as u,n as d,o as f,r as p,s as m,t as h}from"./use-input-DSJ1669F.js";import{D as g,n as _,t as v,y}from"./haunted-Q3h35oH9.js";var b,x=e((()=>{v(),b=e=>y(()=>{if(e==null)return;let t=new RegExp(e,`u`);return e=>{!e.defaultPrevented&&e.data&&!t.test(e.data)&&e.preventDefault()}},[e])})),S,C,w=e((()=>{S=({placeholder:e})=>e||` `,C=(e,t)=>t??(e===`date`?`9999-12-31`:void 0)})),T,E,D=e((()=>{v(),t(),i(),o(),c(),f(),p(),x(),h(),w(),T=[`type`,`variant`,`hint`,`compact`,`required`,`pattern`,`allowed-pattern`,`min`,`max`,`step`,`autosize`,`label`,`placeholder`,...s],E=e=>{let{type:t=`text`,pattern:i,allowedPattern:o,autocomplete:s,value:c,readonly:l,disabled:f,min:p,max:h,step:g,maxlength:_,required:v}=e,{onChange:y,onFocus:x,onInput:w,onRef:T}=d(e),E=b(o);return e.toggleAttribute(`has-value`,!!c),m(n`
			<input
				${u(T)}
				style="--chars: ${c?.toString()?.length??0}ch"
				id="input"
				part="input"
				type=${t}
				pattern=${r(i)}
				autocomplete=${r(s)}
				placeholder=${S({placeholder:e.placeholder})}
				?readonly=${l}
				aria-disabled=${f?`true`:`false`}
				?disabled=${f}
				?required=${v}
				.value=${a(c??``)}
				maxlength=${r(_)}
				@beforeinput=${E}
				@input=${w}
				@change=${y}
				@focus=${x}
				@blur=${x}
				min=${r(p)}
				max=${r(C(t,h))}
				step=${r(g)}
			/>
		`,e)},customElements.define(`cosmoz-input`,_(E,{observedAttributes:T,styleSheets:[g(l)],shadowRootInit:{mode:`open`,delegatesFocus:!0}}))}));export{D as t};