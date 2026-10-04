import{i as e}from"./preload-helper-CCSz8wUY.js";import{c as t,s as n}from"./iframe-BsPCvGTi.js";import{a as r,d as i,f as a,i as o,n as s,o as c,r as l,s as u,t as d}from"./use-input-BY8XHtvi.js";import{n as f,t as p}from"./live-BgchSr87.js";import{T as m,_ as h,n as g,t as _}from"./haunted-DElU_5Q9.js";import{i as v,r as y}from"./normalize.css-BagaWoKc.js";var b,x=e((()=>{_(),b=e=>h(()=>{if(e==null)return;let t=new RegExp(e,`u`);return e=>{!e.defaultPrevented&&e.data&&!t.test(e.data)&&e.preventDefault()}},[e])})),S,C,w=e((()=>{S=({placeholder:e})=>e||` `,C=(e,t)=>t??(e===`date`?`9999-12-31`:void 0)})),T,E,D=e((()=>{_(),t(),i(),p(),y(),c(),l(),x(),d(),w(),T=[`type`,`variant`,`hint`,`compact`,`required`,`pattern`,`allowed-pattern`,`min`,`max`,`step`,`autosize`,`label`,`placeholder`,...r],E=e=>{let{type:t=`text`,pattern:r,allowedPattern:i,autocomplete:o,value:c,readonly:l,disabled:d,min:p,max:m,step:h,maxlength:g,required:_}=e,{onChange:y,onFocus:x,onInput:w,onRef:T}=s(e),E=b(i);return e.toggleAttribute(`has-value`,!!c),u(n`
			<input
				${v(T)}
				style="--chars: ${c?.toString()?.length??0}ch"
				id="input"
				part="input"
				type=${t}
				pattern=${a(r)}
				autocomplete=${a(o)}
				placeholder=${S({placeholder:e.placeholder})}
				?readonly=${l}
				aria-disabled=${d?`true`:`false`}
				?disabled=${d}
				?required=${_}
				.value=${f(c??``)}
				maxlength=${a(g)}
				@beforeinput=${E}
				@input=${w}
				@change=${y}
				@focus=${x}
				@blur=${x}
				min=${a(p)}
				max=${a(C(t,m))}
				step=${a(h)}
			/>
		`,e)},customElements.define(`cosmoz-input`,g(E,{observedAttributes:T,styleSheets:[m(o)],shadowRootInit:{mode:`open`,delegatesFocus:!0}}))}));export{D as t};