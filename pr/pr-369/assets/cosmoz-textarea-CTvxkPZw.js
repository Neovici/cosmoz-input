import{i as e}from"./preload-helper-CCSz8wUY.js";import{d as t,u as n}from"./iframe-vSK6fqBS.js";import{D as r,a as i,c as a,o,s,x as c,y as l}from"./style-BZHyfgMI.js";import{a as u,c as d,d as f,i as p,l as m,n as h,o as g,r as _,s as v,t as y,u as b}from"./use-input-Du1lYv9M.js";var x,S,C,w=e((()=>{s(),x=e=>{e.style.height=``,e.style.height=`${e.scrollHeight}px`},S=(e,t=0)=>{if(t>0){let n=e.getAttribute(`rows`)??``,r=e.style.height;e.style.height=``,e.setAttribute(`rows`,t),e.style.maxHeight=e.getBoundingClientRect().height+`px`,e.style.height=r,e.setAttribute(`rows`,n)}},C=e=>{let{value:t,maxRows:n}=e,r=l(()=>()=>e.shadowRoot.querySelector(`#input`),[]);c(()=>S(r(),n),[n,r]),c(()=>x(r()),[r,t]),c(()=>{let e=r(),t=new ResizeObserver(()=>requestAnimationFrame(()=>x(e)));return t.observe(e),()=>t.unobserve(e)},[r])}})),T,E,D=e((()=>{t(),b(),i(),d(),s(),g(),_(),w(),y(),T=[`rows`,`placeholder`,...u],E=e=>{let{autocomplete:t,value:r,placeholder:i,readonly:a,disabled:s,rows:c,cols:l,maxlength:u}=e,{onChange:d,onFocus:p,onInput:g,onRef:_}=h(e);return C(e),v(n`
			<textarea id="input" part="input"
				${m(_)}
				autocomplete=${f(t)}
				placeholder=${i||` `}
				rows=${c??1} cols=${f(l)}
				?readonly=${a} ?aria-disabled=${s} ?disabled=${s}
				.value=${o(r??``)} maxlength=${f(u)} @input=${g}
				@change=${d} @focus=${p} @blur=${p}>`,e)},customElements.define(`cosmoz-textarea`,a(E,{observedAttributes:T,styleSheets:[r(p)],shadowRootInit:{mode:`open`,delegatesFocus:!0}}))}));export{D as t};