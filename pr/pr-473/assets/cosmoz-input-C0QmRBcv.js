import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{c as t,l as n}from"./iframe-BCVDgj1v.js";import{i as r,r as i}from"./normalize.css-50cz3yjD.js";import{a,c as o,d as s,f as c,i as l,l as u,n as d,o as f,r as p,s as m,t as h,u as g}from"./use-input-DBrozCTn.js";import{C as _,h as v,n as y,t as b}from"./haunted-Ch9lAFrX.js";var x;function S(){return(S=e((()=>{b(),x=e=>v(()=>{if(e==null)return;let t=new RegExp(e,`u`);return e=>{!e.defaultPrevented&&e.data&&!t.test(e.data)&&e.preventDefault()}},[e])})))()}var C,w;function T(){return(T=e((()=>{C=({placeholder:e})=>e||` `,w=(e,t)=>t??(e===`date`?`9999-12-31`:void 0)})))()}var E,D;function O(){return(O=e((()=>{g(),b(),n(),i(),o(),f(),p(),S(),h(),T(),E=[`type`,`variant`,`size`,`hint`,`compact`,`required`,`pattern`,`allowed-pattern`,`min`,`max`,`step`,`autosize`,`label`,`placeholder`,`inputmode`,`enterkeyhint`,...a,`aria-label`],D=e=>{let{type:n=`text`,pattern:i,allowedPattern:a,autocomplete:o,value:l,readonly:f,disabled:p,min:h,max:g,step:_,maxlength:v,required:y,hint:b,invalid:S,errorMessage:T}=e,{onChange:E,onFocus:D,onInput:O,onRef:k}=d(e),A=x(a),j=S&&T&&`error`||b&&!S&&`hint`||void 0;return e.toggleAttribute(`has-value`,!!l),m(t`
			<input
				${u(k)}
				style="--chars: ${l?.toString()?.length??0}ch"
				id="input"
				part="input"
				type=${n}
				pattern=${r(i)}
				autocomplete=${r(o)}
				inputmode=${r(e.inputmode)}
				enterkeyhint=${r(e.enterkeyhint)}
				placeholder=${C({placeholder:e.placeholder})}
				?readonly=${f}
				aria-disabled=${p?`true`:`false`}
				aria-label=${r(e.getAttribute(`aria-label`))}
				?disabled=${p}
				?required=${y}
				aria-invalid=${r(S?`true`:void 0)}
				aria-describedby=${r(j)}
				.value=${s(l??``,c)}
				maxlength=${r(v)}
				@beforeinput=${A}
				@input=${O}
				@change=${E}
				@focus=${D}
				@blur=${D}
				min=${r(h)}
				max=${r(w(n,g))}
				step=${r(_)}
			/>
		`,e)},customElements.define(`cosmoz-input`,y(D,{observedAttributes:E,styleSheets:[_(l)],shadowRootInit:{mode:`open`,delegatesFocus:!0}}))})))()}export{O as t};