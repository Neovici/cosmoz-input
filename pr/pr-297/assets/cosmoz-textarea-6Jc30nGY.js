import{n as e}from"./chunk-zsgVPwQN.js";import{c as t,s as n}from"./iframe-DQP6tdHL.js";import{a as r,c as i,f as a,i as o,l as s,n as c,o as l,p as u,r as d,s as f,t as p}from"./use-input-D7CF0Vdq.js";import{_ as m,f as h,i as g,n as _,p as v,r as y,t as b}from"./live-DeI5aobS.js";var x,S,C,w=e((()=>{y(),x=e=>{e.style.height=``,e.style.height=`${e.scrollHeight}px`},S=(e,t=0)=>{if(t>0){let n=e.getAttribute(`rows`)??``,r=e.style.height;e.style.height=``,e.setAttribute(`rows`,t),e.style.maxHeight=e.getBoundingClientRect().height+`px`,e.style.height=r,e.setAttribute(`rows`,n)}},C=e=>{let{value:t,maxRows:n}=e,r=h(()=>()=>e.shadowRoot.querySelector(`#input`),[]);v(()=>S(r(),n),[n,r]),v(()=>x(r()),[r,t]),v(()=>{let e=r(),t=new ResizeObserver(()=>requestAnimationFrame(()=>x(e)));return t.observe(e),()=>t.unobserve(e)},[r])}})),T,E,D=e((()=>{t(),a(),b(),i(),y(),l(),d(),w(),p(),T=[`rows`,`placeholder`,`label`,`hint`,`required`,...r],E=e=>{let{autocomplete:t,value:r,placeholder:i,readonly:a,disabled:o,rows:l,cols:d,maxlength:p}=e,{onChange:m,onFocus:h,onInput:g,onRef:v}=c(e);return C(e),f(n`
			<textarea id="input" part="input"
				${s(v)}
				autocomplete=${u(t)}
				placeholder=${i||` `}
				rows=${l??1} cols=${u(d)}
				?readonly=${a} ?aria-disabled=${o} ?disabled=${o}
				.value=${_(r??``)} maxlength=${u(p)} @input=${g}
				@change=${m} @focus=${h} @blur=${h}>`,e)},customElements.define(`cosmoz-textarea`,g(E,{observedAttributes:T,styleSheets:[m(o)],shadowRootInit:{mode:`open`,delegatesFocus:!0}}))}));export{D as t};