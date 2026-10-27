import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{c as t,l as n}from"./iframe-1DE3K4g5.js";import{i as r,r as i}from"./normalize.css-DwGINFpf.js";import{n as a,t as o}from"./live-CflA8iTe.js";import{a as s,c,i as l,l as u,n as d,o as f,r as p,s as m,t as h}from"./use-input-CITKO2b1.js";import{D as g,n as _,t as v,x as y,y as b}from"./haunted-BbH5UmQd.js";var x,S,C;function w(){return(w=e((()=>{v(),x=e=>{e.style.height=``,e.style.height=`${e.scrollHeight}px`},S=(e,t=0)=>{if(t>0){let n=e.getAttribute(`rows`)??``,r=e.style.height;e.style.height=``,e.setAttribute(`rows`,t),e.style.maxHeight=e.getBoundingClientRect().height+`px`,e.style.height=r,e.setAttribute(`rows`,n)}},C=e=>{let{value:t,maxRows:n}=e,r=b(()=>()=>e.shadowRoot.querySelector(`#input`),[]);y(()=>S(r(),n),[n,r]),y(()=>x(r()),[r,t]),y(()=>{let e=r(),t=new ResizeObserver(()=>requestAnimationFrame(()=>x(e)));return t.observe(e),()=>t.unobserve(e)},[r])}})))()}var T,E;function D(){return(D=e((()=>{n(),i(),o(),c(),v(),f(),p(),w(),h(),T=[`rows`,`placeholder`,`label`,`hint`,`compact`,`required`,...s],E=e=>{let{autocomplete:n,inputmode:i,value:o,placeholder:s,readonly:c,disabled:l,required:f,hint:p,invalid:h,errorMessage:g,rows:_,cols:v,maxlength:y}=e,{onChange:b,onFocus:x,onInput:S,onRef:w}=d(e);C(e);let T=h&&g&&`error`||p&&!h&&`hint`||void 0;return m(t`
			<textarea id="input" part="input"
				${u(w)}
				autocomplete=${r(n)}
				inputmode=${r(i)}
				placeholder=${s||` `}
				rows=${_??1} cols=${r(v)}
				?readonly=${c} aria-disabled=${l?`true`:`false`}
				?disabled=${l} ?required=${f}
				aria-invalid=${r(h?`true`:void 0)}
				aria-describedby=${r(T)}
				.value=${a(o??``)} maxlength=${r(y)} @input=${S}
				@change=${b} @focus=${x} @blur=${x}>`,e)},customElements.define(`cosmoz-textarea`,_(E,{observedAttributes:T,styleSheets:[g(l)],shadowRootInit:{mode:`open`,delegatesFocus:!0}}))})))()}export{D as t};