import{n as e}from"./chunk-zsgVPwQN.js";import{G as t,K as n}from"./iframe-XdIfrZ1A.js";import{a as r,b as i,c as a,g as o,h as s,o as c,s as l}from"./style-Do7FhrfL.js";import{a as u,c as d,d as f,i as p,l as m,n as h,o as g,r as _,s as v,t as y,u as b}from"./use-input-8MdGrBmf.js";var x,S,C,w=e((()=>{l(),x=e=>{e.style.height=``,e.style.height=`${e.scrollHeight}px`},S=(e,t=0)=>{if(t>0){let n=e.getAttribute(`rows`)??``,r=e.style.height;e.style.height=``,e.setAttribute(`rows`,t),e.style.maxHeight=e.getBoundingClientRect().height+`px`,e.style.height=r,e.setAttribute(`rows`,n)}},C=e=>{let{value:t,maxRows:n}=e,r=s(()=>()=>e.shadowRoot.querySelector(`#input`),[]);o(()=>S(r(),n),[n,r]),o(()=>x(r()),[r,t]),o(()=>{let e=r(),t=new ResizeObserver(()=>requestAnimationFrame(()=>x(e)));return t.observe(e),()=>t.unobserve(e)},[r])}})),T,E,D=e((()=>{n(),b(),r(),d(),l(),g(),_(),w(),y(),T=[`rows`,`placeholder`,...u],E=e=>{let{autocomplete:n,value:r,placeholder:i,readonly:a,disabled:o,rows:s,cols:l,maxlength:u}=e,{onChange:d,onFocus:p,onInput:g,onRef:_}=h(e);return C(e),v(t`
			<textarea id="input" part="input"
				${m(_)}
				autocomplete=${f(n)}
				placeholder=${i||` `}
				rows=${s??1} cols=${f(l)}
				?readonly=${a} ?aria-disabled=${o} ?disabled=${o}
				.value=${c(r??``)} maxlength=${f(u)} @input=${g}
				@change=${d} @focus=${p} @blur=${p}>`,e)},customElements.define(`cosmoz-textarea`,a(E,{observedAttributes:T,styleSheets:[i(p)],shadowRootInit:{mode:`open`,delegatesFocus:!0}}))}));export{D as t};