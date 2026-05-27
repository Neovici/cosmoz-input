import{n as e}from"./chunk-zsgVPwQN.js";import{c as t,s as n}from"./iframe-TVyL8bDJ.js";import{a as r,c as i,f as a,i as o,l as s,n as c,o as l,p as u,r as d,s as f,t as p}from"./use-input-Q85HPwcS.js";import{_ as m,f as h,i as g,n as _,r as v,t as y}from"./live-jbJv_71E.js";var b,x=e((()=>{v(),b=e=>h(()=>{if(e==null)return;let t=new RegExp(e,`u`);return e=>{!e.defaultPrevented&&e.data&&!t.test(e.data)&&e.preventDefault()}},[e])})),S,C,w=e((()=>{S=({placeholder:e})=>e||` `,C=(e,t)=>t??(e===`date`?`9999-12-31`:void 0)})),T,E,D=e((()=>{v(),t(),a(),y(),i(),l(),d(),x(),p(),w(),T=[`type`,`variant`,`hint`,`compact`,`required`,`pattern`,`allowed-pattern`,`min`,`max`,`step`,`autosize`,`label`,`placeholder`,...r],E=e=>{let{type:t=`text`,pattern:r,allowedPattern:i,autocomplete:a,value:o,readonly:l,disabled:d,min:p,max:m,step:h,maxlength:g,required:v}=e,{onChange:y,onFocus:x,onInput:w,onRef:T}=c(e),E=b(i);return e.toggleAttribute(`has-value`,!!o),f(n`
			<input
				${s(T)}
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
				@beforeinput=${E}
				@input=${w}
				@change=${y}
				@focus=${x}
				@blur=${x}
				min=${u(p)}
				max=${u(C(t,m))}
				step=${u(h)}
			/>
		`,e)},customElements.define(`cosmoz-input`,g(E,{observedAttributes:T,styleSheets:[m(o)],shadowRootInit:{mode:`open`,delegatesFocus:!0}}))}));export{D as t};