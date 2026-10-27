import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{c as t,l as n}from"./iframe-CtIH_Sk2.js";import{i as r,r as i}from"./normalize.css-D1y4rnGD.js";import{n as a,t as o}from"./live-B2sVLSEb.js";import{a as s,c,i as l,l as u,n as d,o as f,r as p,s as m,t as h}from"./use-input-Dmb-Jf-U.js";import{D as g,n as _,t as v,y}from"./haunted-Y0Mwnzds.js";var b;function x(){return(x=e((()=>{v(),b=e=>y(()=>{if(e==null)return;let t=new RegExp(e,`u`);return e=>{!e.defaultPrevented&&e.data&&!t.test(e.data)&&e.preventDefault()}},[e])})))()}var S,C;function w(){return(w=e((()=>{S=({placeholder:e})=>e||` `,C=(e,t)=>t??(e===`date`?`9999-12-31`:void 0)})))()}var T,E;function D(){return(D=e((()=>{v(),n(),i(),o(),c(),f(),p(),x(),h(),w(),T=[`type`,`variant`,`size`,`hint`,`compact`,`required`,`pattern`,`allowed-pattern`,`min`,`max`,`step`,`autosize`,`label`,`placeholder`,`inputmode`,`enterkeyhint`,...s,`aria-label`],E=e=>{let{type:n=`text`,pattern:i,allowedPattern:o,autocomplete:s,value:c,readonly:l,disabled:f,min:p,max:h,step:g,maxlength:_,required:v,hint:y,invalid:x,errorMessage:w}=e,{onChange:T,onFocus:E,onInput:D,onRef:O}=d(e),k=b(o),A=x&&w&&`error`||y&&!x&&`hint`||void 0;return e.toggleAttribute(`has-value`,!!c),m(t`
			<input
				${u(O)}
				style="--chars: ${c?.toString()?.length??0}ch"
				id="input"
				part="input"
				type=${n}
				pattern=${r(i)}
				autocomplete=${r(s)}
				inputmode=${r(e.inputmode)}
				enterkeyhint=${r(e.enterkeyhint)}
				placeholder=${S({placeholder:e.placeholder})}
				?readonly=${l}
				aria-disabled=${f?`true`:`false`}
				aria-label=${r(e.getAttribute(`aria-label`))}
				?disabled=${f}
				?required=${v}
				aria-invalid=${r(x?`true`:void 0)}
				aria-describedby=${r(A)}
				.value=${a(c??``)}
				maxlength=${r(_)}
				@beforeinput=${k}
				@input=${D}
				@change=${T}
				@focus=${E}
				@blur=${E}
				min=${r(p)}
				max=${r(C(n,h))}
				step=${r(g)}
			/>
		`,e)},customElements.define(`cosmoz-input`,_(E,{observedAttributes:T,styleSheets:[g(l)],shadowRootInit:{mode:`open`,delegatesFocus:!0}}))})))()}export{D as t};