import{n as e}from"./chunk-zsgVPwQN.js";import{c as t,s as n}from"./iframe-C33fZPbn.js";import{a as r,c as i,f as a,i as o,l as s,n as c,o as l,p as u,r as d,s as f,t as p}from"./use-input-BFSv0QcV.js";import{d as m,g as h,i as g,n as _,r as v,t as y}from"./live-2-MjrS5d.js";var b,x=e((()=>{v(),b=e=>m(()=>{if(e==null)return;let t=new RegExp(e,`u`);return e=>{!e.defaultPrevented&&e.data&&!t.test(e.data)&&e.preventDefault()}},[e])})),S,C=e((()=>{S=({placeholder:e})=>e||` `})),w,T,E=e((()=>{v(),t(),a(),y(),i(),l(),d(),x(),p(),C(),w=[`type`,`variant`,`hint`,`error-message`,`compact`,`required`,`pattern`,`allowed-pattern`,`min`,`max`,`step`,`autosize`,`label`,`placeholder`,...r],T=e=>{let{type:t=`text`,pattern:r,allowedPattern:i,autocomplete:a,value:o,readonly:l,disabled:d,min:p,max:m,step:h,maxlength:g,required:v}=e,{onChange:y,onFocus:x,onInput:C,onRef:w}=c(e),T=b(i);return e.toggleAttribute(`has-value`,!!o),f(n`
			<input
				${s(w)}
				style="--chars: ${o?.toString()?.length??0}ch"
				id="input"
				part="input"
				type=${t}
				pattern=${u(r)}
				autocomplete=${u(a)}
				placeholder=${S({placeholder:e.placeholder})}
				?readonly=${l}
				aria-disabled=${d?`true`:`false`}
				?disabled=${d}
				?required=${v}
				.value=${_(o??``)}
				maxlength=${u(g)}
				@beforeinput=${T}
				@input=${C}
				@change=${y}
				@focus=${x}
				@blur=${x}
				min=${u(p)}
				max=${u(m)}
				step=${u(h)}
			/>
		`,e)},customElements.define(`cosmoz-input`,g(T,{observedAttributes:w,styleSheets:[h(o)],shadowRootInit:{mode:`open`,delegatesFocus:!0}}))}));export{E as t};