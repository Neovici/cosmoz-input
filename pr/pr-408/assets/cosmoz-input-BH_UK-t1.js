import{i as e}from"./preload-helper-CCSz8wUY.js";import{c as t,s as n}from"./iframe-BmBIxSlv.js";import{a as r,i,o as a,r as o}from"./normalize.css-84GDCOFj.js";import{n as s,t as c}from"./live-BQzM3QaI.js";import{a as l,i as u,n as d,o as f,r as p,s as m,t as h}from"./use-input-BE0lUAtm.js";import{D as g,n as _,t as v,y}from"./haunted-CJdjVnF3.js";var b,x=e((()=>{v(),b=e=>y(()=>{if(e==null)return;let t=new RegExp(e,`u`);return e=>{!e.defaultPrevented&&e.data&&!t.test(e.data)&&e.preventDefault()}},[e])})),S,C,w=e((()=>{S=({placeholder:e})=>e||` `,C=(e,t)=>t??(e===`date`?`9999-12-31`:void 0)})),T,E,D=e((()=>{v(),t(),r(),c(),o(),f(),p(),x(),h(),w(),T=[`type`,`variant`,`hint`,`compact`,`required`,`pattern`,`allowed-pattern`,`min`,`max`,`step`,`autosize`,`label`,`placeholder`,...l],E=e=>{let{type:t=`text`,pattern:r,allowedPattern:o,autocomplete:c,value:l,readonly:u,disabled:f,min:p,max:h,step:g,maxlength:_,required:v}=e,{onChange:y,onFocus:x,onInput:w,onRef:T}=d(e),E=b(o);return e.toggleAttribute(`has-value`,!!l),m(n`
			<input
				${i(T)}
				style="--chars: ${l?.toString()?.length??0}ch"
				id="input"
				part="input"
				type=${t}
				pattern=${a(r)}
				autocomplete=${a(c)}
				placeholder=${S({placeholder:e.placeholder})}
				?readonly=${u}
				aria-disabled=${f?`true`:`false`}
				?disabled=${f}
				?required=${v}
				.value=${s(l??``)}
				maxlength=${a(_)}
				@beforeinput=${E}
				@input=${w}
				@change=${y}
				@focus=${x}
				@blur=${x}
				min=${a(p)}
				max=${a(C(t,h))}
				step=${a(g)}
			/>
		`,e)},customElements.define(`cosmoz-input`,_(E,{observedAttributes:T,styleSheets:[g(u)],shadowRootInit:{mode:`open`,delegatesFocus:!0}}))}));export{D as t};