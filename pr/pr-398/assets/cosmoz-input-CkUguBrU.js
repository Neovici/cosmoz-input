import{i as e}from"./preload-helper-CCSz8wUY.js";import{l as t,u as n}from"./iframe-CFy_mvqk.js";import{a as r,c as i,h as a,i as o,l as s,m as c,n as l,o as u,r as d,s as f,t as p,u as m}from"./use-input-DmLQd2Fz.js";import{T as h,_ as g,i as _,n as v,r as y,t as b}from"./live-C5Hzt91t.js";var x,S=e((()=>{y(),x=e=>g(()=>{if(e==null)return;let t=new RegExp(e,`u`);return e=>{!e.defaultPrevented&&e.data&&!t.test(e.data)&&e.preventDefault()}},[e])})),C,w,T=e((()=>{C=({placeholder:e})=>e||` `,w=(e,t)=>t??(e===`date`?`9999-12-31`:void 0)})),E,D,O=e((()=>{y(),n(),c(),b(),s(),f(),d(),S(),p(),T(),E=[`type`,`variant`,`hint`,`compact`,`required`,`pattern`,`allowed-pattern`,`min`,`max`,`step`,`autosize`,`label`,`placeholder`,...u],D=e=>{let{type:n=`text`,pattern:o,allowedPattern:s,autocomplete:c,value:u,readonly:d,disabled:f,min:p,max:h,step:g,maxlength:_,required:y}=e,{onChange:b,onFocus:S,onInput:T,onRef:E}=l(e),D=r(e),O=x(s);return e.toggleAttribute(`has-value`,!!u),i(t`
			<input
				${m(E)}
				style="--chars: ${u?.toString()?.length??0}ch"
				id="input"
				part="input"
				type=${n}
				pattern=${a(o)}
				autocomplete=${a(c)}
				placeholder=${C({placeholder:e.placeholder})}
				?readonly=${d}
				aria-disabled=${f?`true`:`false`}
				aria-invalid=${a(D.invalid)}
				aria-describedby=${a(D.describedBy)}
				?disabled=${f}
				?required=${y}
				.value=${v(u??``)}
				maxlength=${a(_)}
				@beforeinput=${O}
				@input=${T}
				@change=${b}
				@focus=${S}
				@blur=${S}
				min=${a(p)}
				max=${a(w(n,h))}
				step=${a(g)}
			/>
		`,e)},customElements.define(`cosmoz-input`,_(D,{observedAttributes:E,styleSheets:[h(o)],shadowRootInit:{mode:`open`,delegatesFocus:!0}}))}));export{O as t};