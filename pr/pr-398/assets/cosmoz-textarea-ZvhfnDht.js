import{i as e}from"./preload-helper-CCSz8wUY.js";import{l as t,u as n}from"./iframe-BA4u0ymG.js";import{i as r,r as i}from"./normalize.css-CSWlQGep.js";import{n as a,t as o}from"./live-DeIvLU8P.js";import{a as s,c,i as l,l as u,n as d,o as f,r as p,s as m,t as h,u as g}from"./use-input-Da4U0ZZT.js";import{D as _,n as v,t as y,x as b,y as x}from"./haunted-CVG_JuC3.js";var S,C,w,T=e((()=>{y(),S=e=>{e.style.height=``,e.style.height=`${e.scrollHeight}px`},C=(e,t=0)=>{if(t>0){let n=e.getAttribute(`rows`)??``,r=e.style.height;e.style.height=``,e.setAttribute(`rows`,t),e.style.maxHeight=e.getBoundingClientRect().height+`px`,e.style.height=r,e.setAttribute(`rows`,n)}},w=e=>{let{value:t,maxRows:n}=e,r=x(()=>()=>e.shadowRoot.querySelector(`#input`),[]);b(()=>C(r(),n),[n,r]),b(()=>S(r()),[r,t]),b(()=>{let e=r(),t=new ResizeObserver(()=>requestAnimationFrame(()=>S(e)));return t.observe(e),()=>t.unobserve(e)},[r])}})),E,D,O=e((()=>{n(),i(),o(),u(),y(),m(),p(),T(),h(),E=[`rows`,`placeholder`,`label`,`hint`,`compact`,`required`,`compact`,...f],D=e=>{let{autocomplete:n,value:i,placeholder:o,readonly:l,disabled:u,rows:f,cols:p,maxlength:m,required:h}=e,{onChange:_,onFocus:v,onInput:y,onRef:b}=d(e),x=s(e);return w(e),c(t`
			<textarea id="input" part="input"
				${g(b)}
				autocomplete=${r(n)}
				placeholder=${o||` `}
				rows=${f??1} cols=${r(p)}
				?readonly=${l} ?required=${h} ?disabled=${u}
				aria-disabled=${u?`true`:`false`}
				aria-invalid=${r(x.invalid)}
				aria-describedby=${r(x.describedBy)}
				.value=${a(i??``)} maxlength=${r(m)} @input=${y}
				@change=${_} @focus=${v} @blur=${v}>`,e)},customElements.define(`cosmoz-textarea`,v(D,{observedAttributes:E,styleSheets:[_(l)],shadowRootInit:{mode:`open`,delegatesFocus:!0}}))}));export{O as t};