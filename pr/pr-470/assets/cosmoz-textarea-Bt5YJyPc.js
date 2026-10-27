import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{c as t,l as n}from"./iframe-CCuriy0_.js";import{i as r,r as i}from"./normalize.css-CdMW_Kbs.js";import{n as a,t as o}from"./live-Dk-Q-Mom.js";import{a as s,c,i as l,l as u,n as d,o as f,r as p,s as m,t as h}from"./use-input-DvA9shnd.js";import{D as g,n as _,t as v,x as y,y as b}from"./haunted-C69tfoFD.js";var x,S,C;function w(){return(w=e((()=>{v(),x=e=>{e.style.height=``,e.style.height=`${e.scrollHeight}px`},S=(e,t=0)=>{if(t>0){let n=e.getAttribute(`rows`)??``,r=e.style.height;e.style.height=``,e.style.maxHeight=``,e.setAttribute(`rows`,t),e.style.maxHeight=e.getBoundingClientRect().height+`px`,e.style.height=r,e.setAttribute(`rows`,n)}},C=e=>{let{value:t,maxRows:n}=e,r=b(()=>()=>e.shadowRoot.querySelector(`#input`),[]);y(()=>S(r(),n),[n,r]),y(()=>x(r()),[r,t]),y(()=>{let t=r(),n=new ResizeObserver(()=>requestAnimationFrame(()=>{S(t,e.maxRows),x(t)}));return n.observe(t),()=>n.unobserve(t)},[r])}})))()}var T,E;function D(){return(D=e((()=>{n(),i(),o(),c(),v(),f(),p(),w(),h(),T=[`rows`,`placeholder`,`label`,`hint`,`compact`,`required`,...s],E=e=>{let{autocomplete:n,value:i,placeholder:o,readonly:s,disabled:c,required:l,hint:f,invalid:p,errorMessage:h,rows:g,cols:_,maxlength:v}=e,{onChange:y,onFocus:b,onInput:x,onRef:S}=d(e);C(e);let w=p&&h&&`error`||f&&!p&&`hint`||void 0;return m(t`
			<textarea id="input" part="input"
				${u(S)}
				autocomplete=${r(n)}
				placeholder=${o||` `}
				rows=${g??1} cols=${r(_)}
				?readonly=${s} aria-disabled=${c?`true`:`false`}
				?disabled=${c} ?required=${l}
				aria-invalid=${r(p?`true`:void 0)}
				aria-describedby=${r(w)}
				.value=${a(i??``)} maxlength=${r(v)} @input=${x}
				@change=${y} @focus=${b} @blur=${b}>`,e)},customElements.define(`cosmoz-textarea`,_(E,{observedAttributes:T,styleSheets:[g(l)],shadowRootInit:{mode:`open`,delegatesFocus:!0}}))})))()}export{D as t};