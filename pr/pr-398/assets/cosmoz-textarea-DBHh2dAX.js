import{i as e}from"./preload-helper-CCSz8wUY.js";import{l as t,u as n}from"./iframe-CFy_mvqk.js";import{a as r,c as i,h as a,i as o,l as s,m as c,n as l,o as u,r as d,s as f,t as p,u as m}from"./use-input-DmLQd2Fz.js";import{T as h,_ as g,i as _,n as v,r as y,t as b,y as x}from"./live-C5Hzt91t.js";var S,C,w,T=e((()=>{y(),S=e=>{e.style.height=``,e.style.height=`${e.scrollHeight}px`},C=(e,t=0)=>{if(t>0){let n=e.getAttribute(`rows`)??``,r=e.style.height;e.style.height=``,e.setAttribute(`rows`,t),e.style.maxHeight=e.getBoundingClientRect().height+`px`,e.style.height=r,e.setAttribute(`rows`,n)}},w=e=>{let{value:t,maxRows:n}=e,r=g(()=>()=>e.shadowRoot.querySelector(`#input`),[]);x(()=>C(r(),n),[n,r]),x(()=>S(r()),[r,t]),x(()=>{let e=r(),t=new ResizeObserver(()=>requestAnimationFrame(()=>S(e)));return t.observe(e),()=>t.unobserve(e)},[r])}})),E,D,O=e((()=>{n(),c(),b(),s(),y(),f(),d(),T(),p(),E=[`rows`,`placeholder`,`label`,`hint`,`required`,`compact`,...u],D=e=>{let{autocomplete:n,value:o,placeholder:s,readonly:c,disabled:u,rows:d,cols:f,maxlength:p,required:h}=e,{onChange:g,onFocus:_,onInput:y,onRef:b}=l(e),x=r(e);return w(e),i(t`
			<textarea id="input" part="input"
				${m(b)}
				autocomplete=${a(n)}
				placeholder=${s||` `}
				rows=${d??1} cols=${a(f)}
				?readonly=${c} ?required=${h} ?disabled=${u}
				aria-disabled=${u?`true`:`false`}
				aria-invalid=${a(x.invalid)}
				aria-describedby=${a(x.describedBy)}
				.value=${v(o??``)} maxlength=${a(p)} @input=${y}
				@change=${g} @focus=${_} @blur=${_}>`,e)},customElements.define(`cosmoz-textarea`,_(D,{observedAttributes:E,styleSheets:[h(o)],shadowRootInit:{mode:`open`,delegatesFocus:!0}}))}));export{O as t};