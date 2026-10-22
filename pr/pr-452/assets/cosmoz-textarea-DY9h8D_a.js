import{i as e}from"./preload-helper-CCSz8wUY.js";import{c as t,s as n}from"./iframe-BdYCzO4_.js";import{i as r,r as i}from"./normalize.css-DwYlO3qX.js";import{n as a,t as o}from"./live-aQ16xOxu.js";import{a as s,c,i as l,l as u,n as d,o as f,r as p,s as m,t as h}from"./use-input-BlYGiPwS.js";import{D as g,n as _,t as v,x as y,y as b}from"./haunted-KEzXVn-o.js";var x,S,C,w=e((()=>{v(),x=e=>{e.style.height=``,e.style.height=`${e.scrollHeight}px`},S=(e,t=0)=>{if(t>0){let n=e.getAttribute(`rows`)??``,r=e.style.height;e.style.height=``,e.setAttribute(`rows`,t),e.style.maxHeight=e.getBoundingClientRect().height+`px`,e.style.height=r,e.setAttribute(`rows`,n)}},C=e=>{let{value:t,maxRows:n}=e,r=b(()=>()=>e.shadowRoot.querySelector(`#input`),[]);y(()=>S(r(),n),[n,r]),y(()=>x(r()),[r,t]),y(()=>{let e=r(),t=new ResizeObserver(()=>requestAnimationFrame(()=>x(e)));return t.observe(e),()=>t.unobserve(e)},[r])}})),T,E,D=e((()=>{t(),i(),o(),c(),v(),f(),p(),w(),h(),T=[`rows`,`placeholder`,`label`,`hint`,`compact`,`required`,...s],E=e=>{let{autocomplete:t,value:i,placeholder:o,readonly:s,disabled:c,required:l,hint:f,invalid:p,errorMessage:h,rows:g,cols:_,maxlength:v}=e,{onChange:y,onFocus:b,onInput:x,onRef:S}=d(e);C(e);let w=p&&h&&`error`||f&&!p&&`hint`||void 0;return m(n`
			<textarea id="input" part="input"
				${u(S)}
				autocomplete=${r(t)}
				placeholder=${o||` `}
				rows=${g??1} cols=${r(_)}
				?readonly=${s} aria-disabled=${c?`true`:`false`}
				?disabled=${c} ?required=${l}
				aria-invalid=${r(p?`true`:void 0)}
				aria-describedby=${r(w)}
				.value=${a(i??``)} maxlength=${r(v)} @input=${x}
				@change=${y} @focus=${b} @blur=${b}>`,e)},customElements.define(`cosmoz-textarea`,_(E,{observedAttributes:T,styleSheets:[g(l)],shadowRootInit:{mode:`open`,delegatesFocus:!0}}))}));export{D as t};