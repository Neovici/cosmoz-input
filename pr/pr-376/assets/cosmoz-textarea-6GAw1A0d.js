import{i as e}from"./preload-helper-CCSz8wUY.js";import{c as t,s as n}from"./iframe-CJTB0Edv.js";import{a as r,c as i,i as a,l as o,m as s,n as c,o as l,p as u,r as d,s as f,t as p}from"./use-input-BQm4elqt.js";import{T as m,_ as h,i as g,n as _,r as v,t as y,y as b}from"./live-BPZiiNYV.js";var x,S,C,w=e((()=>{v(),x=e=>{e.style.height=``,e.style.height=`${e.scrollHeight}px`},S=(e,t=0)=>{if(t>0){let n=e.getAttribute(`rows`)??``,r=e.style.height;e.style.height=``,e.setAttribute(`rows`,t),e.style.maxHeight=e.getBoundingClientRect().height+`px`,e.style.height=r,e.setAttribute(`rows`,n)}},C=e=>{let{value:t,maxRows:n}=e,r=h(()=>()=>e.shadowRoot.querySelector(`#input`),[]);b(()=>S(r(),n),[n,r]),b(()=>x(r()),[r,t]),b(()=>{let e=r(),t=new ResizeObserver(()=>requestAnimationFrame(()=>x(e)));return t.observe(e),()=>t.unobserve(e)},[r])}})),T,E,D=e((()=>{t(),u(),y(),i(),v(),l(),d(),w(),p(),T=[`rows`,`placeholder`,`label`,`hint`,`required`,...r],E=e=>{let{autocomplete:t,value:r,placeholder:i,readonly:a,disabled:l,rows:u,cols:d,maxlength:p}=e,{onChange:m,onFocus:h,onInput:g,onRef:v}=c(e);return C(e),f(n`
			<textarea id="input" part="input"
				${o(v)}
				autocomplete=${s(t)}
				placeholder=${i||` `}
				rows=${u??1} cols=${s(d)}
				?readonly=${a} ?aria-disabled=${l} ?disabled=${l}
				.value=${_(r??``)} maxlength=${s(p)} @input=${g}
				@change=${m} @focus=${h} @blur=${h}>`,e)},customElements.define(`cosmoz-textarea`,g(E,{observedAttributes:T,styleSheets:[m(a)],shadowRootInit:{mode:`open`,delegatesFocus:!0}}))}));export{D as t};