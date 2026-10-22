import{i as e}from"./preload-helper-CCSz8wUY.js";import{c as t,s as n}from"./iframe-DYtJ-gYe.js";import{i as r,r as i}from"./normalize.css-BbhOjDdp.js";import{n as a,t as o}from"./live-Bm3aTxTA.js";import{a as s,c,i as l,l as u,n as d,o as f,r as p,s as m,t as h}from"./use-input-BXSOXEbp.js";import{D as g,n as _,t as v,y}from"./haunted-C99-QbsN.js";var b,x=e((()=>{v(),b=e=>y(()=>{if(e==null)return;let t=new RegExp(e,`u`);return e=>{!e.defaultPrevented&&e.data&&!t.test(e.data)&&e.preventDefault()}},[e])})),S,C,w=e((()=>{S=({placeholder:e})=>e||` `,C=(e,t)=>t??(e===`date`?`9999-12-31`:void 0)})),T,E,D=e((()=>{v(),t(),i(),o(),c(),f(),p(),x(),h(),w(),T=[`type`,`variant`,`size`,`hint`,`compact`,`required`,`pattern`,`allowed-pattern`,`min`,`max`,`step`,`autosize`,`label`,`placeholder`,...s,`aria-label`],E=e=>{let{type:t=`text`,pattern:i,allowedPattern:o,autocomplete:s,value:c,readonly:l,disabled:f,min:p,max:h,step:g,maxlength:_,required:v,hint:y,compact:x,invalid:w,errorMessage:T}=e,{onChange:E,onFocus:D,onInput:O,onRef:k}=d(e),A=b(o),j=!x&&y&&!w,M=w&&T,N=!x&&M&&`error`||j&&`hint`||void 0;return e.toggleAttribute(`has-value`,!!c),m(n`
			<input
				${u(k)}
				style="--chars: ${c?.toString()?.length??0}ch"
				id="input"
				part="input"
				type=${t}
				pattern=${r(i)}
				autocomplete=${r(s)}
				placeholder=${S({placeholder:e.placeholder})}
				?readonly=${l}
				aria-disabled=${f?`true`:`false`}
				aria-label=${r(e.getAttribute(`aria-label`))}
				?disabled=${f}
				?required=${v}
				aria-invalid=${r(M?`true`:void 0)}
				aria-describedby=${r(N)}
				.value=${a(c??``)}
				maxlength=${r(_)}
				@beforeinput=${A}
				@input=${O}
				@change=${E}
				@focus=${D}
				@blur=${D}
				min=${r(p)}
				max=${r(C(t,h))}
				step=${r(g)}
			/>
		`,e)},customElements.define(`cosmoz-input`,_(E,{observedAttributes:T,styleSheets:[g(l)],shadowRootInit:{mode:`open`,delegatesFocus:!0}}))}));export{D as t};