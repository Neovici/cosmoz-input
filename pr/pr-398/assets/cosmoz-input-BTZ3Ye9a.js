import{i as e}from"./preload-helper-CCSz8wUY.js";import{l as t,u as n}from"./iframe-BA4u0ymG.js";import{i as r,r as i}from"./normalize.css-CSWlQGep.js";import{n as a,t as o}from"./live-DeIvLU8P.js";import{a as s,c,i as l,l as u,n as d,o as f,r as p,s as m,t as h,u as g}from"./use-input-Da4U0ZZT.js";import{D as _,n as v,t as y,y as b}from"./haunted-CVG_JuC3.js";var x,S=e((()=>{y(),x=e=>b(()=>{if(e==null)return;let t=new RegExp(e,`u`);return e=>{!e.defaultPrevented&&e.data&&!t.test(e.data)&&e.preventDefault()}},[e])})),C,w,T=e((()=>{C=({placeholder:e})=>e||` `,w=(e,t)=>t??(e===`date`?`9999-12-31`:void 0)})),E,D,O=e((()=>{y(),n(),i(),o(),u(),m(),p(),S(),h(),T(),E=[`type`,`variant`,`hint`,`compact`,`required`,`pattern`,`allowed-pattern`,`min`,`max`,`step`,`autosize`,`label`,`placeholder`,...f],D=e=>{let{type:n=`text`,pattern:i,allowedPattern:o,autocomplete:l,value:u,readonly:f,disabled:p,min:m,max:h,step:_,maxlength:v,required:y}=e,{onChange:b,onFocus:S,onInput:T,onRef:E}=d(e),D=s(e),O=x(o);return e.toggleAttribute(`has-value`,!!u),c(t`
			<input
				${g(E)}
				style="--chars: ${u?.toString()?.length??0}ch"
				id="input"
				part="input"
				type=${n}
				pattern=${r(i)}
				autocomplete=${r(l)}
				placeholder=${C({placeholder:e.placeholder})}
				?readonly=${f}
				aria-disabled=${p?`true`:`false`}
				aria-invalid=${r(D.invalid)}
				aria-describedby=${r(D.describedBy)}
				?disabled=${p}
				?required=${y}
				.value=${a(u??``)}
				maxlength=${r(v)}
				@beforeinput=${O}
				@input=${T}
				@change=${b}
				@focus=${S}
				@blur=${S}
				min=${r(m)}
				max=${r(w(n,h))}
				step=${r(_)}
			/>
		`,e)},customElements.define(`cosmoz-input`,v(D,{observedAttributes:E,styleSheets:[_(l)],shadowRootInit:{mode:`open`,delegatesFocus:!0}}))}));export{O as t};