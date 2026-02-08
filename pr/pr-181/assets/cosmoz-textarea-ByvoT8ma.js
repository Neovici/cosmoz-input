import{b as $}from"./iframe-CFPCSjlc.js";import{u as y,b as l,c as p,a as f,l as w}from"./style-C9mthg0Y.js";import{a as v,s as x,u as A,r as R,n as H,o as n}from"./styles-Bzad0hSH.js";const c=e=>{e.style.height="",e.style.height=`${e.scrollHeight}px`},q=(e,s=0)=>{if(s>0){const o=e.getAttribute("rows")??"",t=e.style.height;e.style.height="",e.setAttribute("rows",s),e.style.maxHeight=e.getBoundingClientRect().height+"px",e.style.height=t,e.setAttribute("rows",o)}},z=e=>{const{value:s,maxRows:o}=e,t=y(()=>()=>e.shadowRoot.querySelector("#input"),[]);l(()=>q(t(),o),[o,t]),l(()=>c(t()),[t,s]),l(()=>{const r=t(),a=new ResizeObserver(()=>requestAnimationFrame(()=>c(r)));return a.observe(r),()=>a.unobserve(r)},[t])},C=["rows","placeholder",...v],E=e=>{const{autocomplete:s,value:o,placeholder:t,readonly:r,disabled:a,rows:u,cols:h,maxlength:m}=e,{onChange:g,onFocus:i,onInput:d,onRef:b}=A(e);return z(e),R($`
			<textarea id="input" part="input"
				${H(b)}
				autocomplete=${n(s)}
				placeholder=${t||" "}
				rows=${u??1} cols=${n(h)}
				?readonly=${r} ?aria-disabled=${a} ?disabled=${a}
				.value=${w(o??"")} maxlength=${n(m)} @input=${d}
				@change=${g} @focus=${i} @blur=${i}>`,e)};customElements.define("cosmoz-textarea",p(E,{observedAttributes:C,styleSheets:[f(x)]}));
