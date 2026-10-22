import{i as e}from"./preload-helper-CCSz8wUY.js";import{c as t,s as n}from"./iframe-DGItRHTC.js";import{i as r,r as i}from"./normalize.css-BWw_z3_A.js";import{n as a,t as o}from"./live-C7_gPGkM.js";import{a as s,c,i as l,l as u,n as d,o as f,r as p,s as m,t as h}from"./use-input-CZmz9Pp3.js";import{D as g,n as _,t as v,x as y,y as b}from"./haunted--5tswq_D.js";var x,S,C,w=e((()=>{v(),x=e=>{e.style.height=``,e.style.height=`${e.scrollHeight}px`},S=(e,t=0)=>{if(t>0){let n=e.getAttribute(`rows`)??``,r=e.style.height;e.style.height=``,e.setAttribute(`rows`,t),e.style.maxHeight=e.getBoundingClientRect().height+`px`,e.style.height=r,e.setAttribute(`rows`,n)}},C=e=>{let{value:t,maxRows:n}=e,r=b(()=>()=>e.shadowRoot.querySelector(`#input`),[]);y(()=>S(r(),n),[n,r]),y(()=>x(r()),[r,t]),y(()=>{let e=r(),t=new ResizeObserver(()=>requestAnimationFrame(()=>x(e)));return t.observe(e),()=>t.unobserve(e)},[r])}})),T,E,D=e((()=>{t(),i(),o(),c(),v(),f(),p(),w(),h(),T=[`rows`,`placeholder`,`label`,`hint`,`compact`,`required`,...s],E=e=>{let{autocomplete:t,value:i,placeholder:o,readonly:s,disabled:c,required:l,hint:f,compact:p,invalid:h,errorMessage:g,rows:_,cols:v,maxlength:y}=e,{onChange:b,onFocus:x,onInput:S,onRef:w}=d(e);C(e);let T=h&&g&&`error`||f&&!h&&`hint`||void 0;return m(n`
			<textarea id="input" part="input"
				${u(w)}
				autocomplete=${r(t)}
				placeholder=${o||` `}
				rows=${_??1} cols=${r(v)}
				?readonly=${s} aria-disabled=${c?`true`:`false`}
				?disabled=${c} ?required=${l}
				aria-invalid=${r(h?`true`:void 0)}
				aria-describedby=${r(T)}
				.value=${a(i??``)} maxlength=${r(y)} @input=${S}
				@change=${b} @focus=${x} @blur=${x}>`,e)},customElements.define(`cosmoz-textarea`,_(E,{observedAttributes:T,styleSheets:[g(l)],shadowRootInit:{mode:`open`,delegatesFocus:!0}}))}));export{D as t};