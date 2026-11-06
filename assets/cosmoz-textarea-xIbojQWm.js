import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{c as t,l as n}from"./iframe-BCe6YRwX.js";import{i as r,r as i}from"./normalize.css-CYLj_hml.js";import{n as a,t as o}from"./live-BltPBUdn.js";import{a as s,c,i as l,l as u,n as d,o as f,r as p,s as m,t as h}from"./use-input-OX5iaM_3.js";import{C as g,_,h as v,n as y,t as b}from"./haunted-VioT49zB.js";var x,S,C;function w(){return(w=e((()=>{b(),x=e=>{e.style.height=``,e.style.height=`${e.scrollHeight}px`},S=(e,t=0)=>{if(t>0){let n=e.getAttribute(`rows`)??``,r=e.style.height;e.style.height=``,e.style.maxHeight=``,e.setAttribute(`rows`,t),e.style.maxHeight=e.getBoundingClientRect().height+`px`,e.style.height=r,e.setAttribute(`rows`,n)}},C=e=>{let{value:t,maxRows:n}=e,r=v(()=>()=>e.shadowRoot.querySelector(`#input`),[]);_(()=>S(r(),n),[n,r]),_(()=>x(r()),[r,t]),_(()=>{let t=r(),n=new ResizeObserver(()=>requestAnimationFrame(()=>{S(t,e.maxRows),x(t)}));return n.observe(t),()=>n.unobserve(t)},[r])}})))()}var T,E;function D(){return(D=e((()=>{n(),i(),o(),c(),b(),f(),p(),w(),h(),T=[`rows`,`placeholder`,`label`,`hint`,`compact`,`required`,`inputmode`,`enterkeyhint`,...s],E=e=>{let{autocomplete:n,inputmode:i,enterkeyhint:o,value:s,placeholder:c,readonly:l,disabled:f,required:p,hint:h,invalid:g,errorMessage:_,rows:v,cols:y,maxlength:b}=e,{onChange:x,onFocus:S,onInput:w,onRef:T}=d(e);C(e);let E=g&&_&&`error`||h&&!g&&`hint`||void 0;return m(t`
			<textarea id="input" part="input"
				${u(T)}
				autocomplete=${r(n)}
				inputmode=${r(i)}
				enterkeyhint=${r(o)}
				placeholder=${c||` `}
				rows=${v??1} cols=${r(y)}
				?readonly=${l} aria-disabled=${f?`true`:`false`}
				?disabled=${f} ?required=${p}
				aria-invalid=${r(g?`true`:void 0)}
				aria-describedby=${r(E)}
				.value=${a(s??``)} maxlength=${r(b)} @input=${w}
				@change=${x} @focus=${S} @blur=${S}>`,e)},customElements.define(`cosmoz-textarea`,y(E,{observedAttributes:T,styleSheets:[g(l)],shadowRootInit:{mode:`open`,delegatesFocus:!0}}))})))()}export{D as t};