import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{c as t,l as n}from"./iframe-BCVDgj1v.js";import{i as r,r as i}from"./normalize.css-50cz3yjD.js";import{a,c as o,d as s,f as c,i as l,l as u,n as d,o as f,r as p,s as m,t as h,u as g}from"./use-input-DBrozCTn.js";import{C as _,_ as v,h as y,n as b,t as x}from"./haunted-Ch9lAFrX.js";var S,C,w;function T(){return(T=e((()=>{x(),S=e=>{e.style.height=``,e.style.height=`${e.scrollHeight}px`},C=(e,t=0)=>{if(t>0){let n=e.getAttribute(`rows`)??``,r=e.style.height;e.style.height=``,e.style.maxHeight=``,e.setAttribute(`rows`,t),e.style.maxHeight=e.getBoundingClientRect().height+`px`,e.style.height=r,e.setAttribute(`rows`,n)}},w=e=>{let{value:t,maxRows:n}=e,r=y(()=>()=>e.shadowRoot.querySelector(`#input`),[]);v(()=>C(r(),n),[n,r]),v(()=>S(r()),[r,t]),v(()=>{let t=r(),n=new ResizeObserver(()=>requestAnimationFrame(()=>{C(t,e.maxRows),S(t)}));return n.observe(t),()=>n.unobserve(t)},[r])}})))()}var E,D;function O(){return(O=e((()=>{g(),n(),i(),o(),x(),f(),p(),T(),h(),E=[`rows`,`placeholder`,`label`,`hint`,`compact`,`required`,`inputmode`,`enterkeyhint`,...a],D=e=>{let{autocomplete:n,inputmode:i,enterkeyhint:a,value:o,placeholder:l,readonly:f,disabled:p,required:h,hint:g,invalid:_,errorMessage:v,rows:y,cols:b,maxlength:x}=e,{onChange:S,onFocus:C,onInput:T,onRef:E}=d(e);w(e);let D=_&&v&&`error`||g&&!_&&`hint`||void 0;return m(t`
			<textarea id="input" part="input"
				${u(E)}
				autocomplete=${r(n)}
				inputmode=${r(i)}
				enterkeyhint=${r(a)}
				placeholder=${l||` `}
				rows=${y??1} cols=${r(b)}
				?readonly=${f} aria-disabled=${p?`true`:`false`}
				?disabled=${p} ?required=${h}
				aria-invalid=${r(_?`true`:void 0)}
				aria-describedby=${r(D)}
				.value=${s(o??``,c)} maxlength=${r(x)} @input=${T}
				@change=${S} @focus=${C} @blur=${C}>`,e)},customElements.define(`cosmoz-textarea`,b(D,{observedAttributes:E,styleSheets:[_(l)],shadowRootInit:{mode:`open`,delegatesFocus:!0}}))})))()}export{O as t};