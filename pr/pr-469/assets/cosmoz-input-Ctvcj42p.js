import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{c as t,l as n}from"./iframe-1DE3K4g5.js";import{i as r,r as i}from"./normalize.css-DwGINFpf.js";import{n as a,t as o}from"./live-CflA8iTe.js";import{a as s,c,i as l,l as u,n as d,o as f,r as p,s as m,t as h}from"./use-input-CITKO2b1.js";import{D as g,n as _,t as v,y}from"./haunted-BbH5UmQd.js";var b;function x(){return(x=e((()=>{v(),b=e=>y(()=>{if(e==null)return;let t=new RegExp(e,`u`);return e=>{!e.defaultPrevented&&e.data&&!t.test(e.data)&&e.preventDefault()}},[e])})))()}var S,C;function w(){return(w=e((()=>{S=({placeholder:e})=>e||` `,C=(e,t)=>t??(e===`date`?`9999-12-31`:void 0)})))()}var T,E;function D(){return(D=e((()=>{v(),n(),i(),o(),c(),f(),p(),x(),h(),w(),T=[`type`,`variant`,`size`,`hint`,`compact`,`required`,`pattern`,`allowed-pattern`,`min`,`max`,`step`,`autosize`,`label`,`placeholder`,...s,`aria-label`],E=e=>{let{type:n=`text`,pattern:i,allowedPattern:o,autocomplete:s,inputmode:c,value:l,readonly:f,disabled:p,min:h,max:g,step:_,maxlength:v,required:y,hint:x,invalid:w,errorMessage:T}=e,{onChange:E,onFocus:D,onInput:O,onRef:k}=d(e),A=b(o),j=w&&T&&`error`||x&&!w&&`hint`||void 0;return e.toggleAttribute(`has-value`,!!l),m(t`
			<input
				${u(k)}
				style="--chars: ${l?.toString()?.length??0}ch"
				id="input"
				part="input"
				type=${n}
				pattern=${r(i)}
				autocomplete=${r(s)}
				inputmode=${r(c)}
				placeholder=${S({placeholder:e.placeholder})}
				?readonly=${f}
				aria-disabled=${p?`true`:`false`}
				aria-label=${r(e.getAttribute(`aria-label`))}
				?disabled=${p}
				?required=${y}
				aria-invalid=${r(w?`true`:void 0)}
				aria-describedby=${r(j)}
				.value=${a(l??``)}
				maxlength=${r(v)}
				@beforeinput=${A}
				@input=${O}
				@change=${E}
				@focus=${D}
				@blur=${D}
				min=${r(h)}
				max=${r(C(n,g))}
				step=${r(_)}
			/>
		`,e)},customElements.define(`cosmoz-input`,_(E,{observedAttributes:T,styleSheets:[g(l)],shadowRootInit:{mode:`open`,delegatesFocus:!0}}))})))()}export{D as t};