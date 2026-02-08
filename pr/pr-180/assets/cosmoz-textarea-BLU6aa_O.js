import{b as $}from"./iframe-Rx89eJWD.js";import{a as p,s as y,u as w,r as f,n as v,o as l}from"./use-input-BFfmYaks.js";import{u as x,b as n,c as A,a as R,l as F}from"./style-CPxh4gSl.js";const c=e=>{e.style.height="",e.style.height=`${e.scrollHeight}px`},H=(e,s=0)=>{if(s>0){const o=e.getAttribute("rows")??"",t=e.style.height;e.style.height="",e.setAttribute("rows",s),e.style.maxHeight=e.getBoundingClientRect().height+"px",e.style.height=t,e.setAttribute("rows",o)}},I=e=>{const{value:s,maxRows:o}=e,t=x(()=>()=>e.shadowRoot.querySelector("#input"),[]);n(()=>H(t(),o),[o,t]),n(()=>c(t()),[t,s]),n(()=>{const r=t(),a=new ResizeObserver(()=>requestAnimationFrame(()=>c(r)));return a.observe(r),()=>a.unobserve(r)},[t])},q=["rows","placeholder",...p],z=e=>{const{autocomplete:s,value:o,placeholder:t,readonly:r,disabled:a,rows:u,cols:h,maxlength:d}=e,{onChange:m,onFocus:i,onInput:g,onRef:b}=w(e);return I(e),f($`
			<textarea id="input" part="input"
				${v(b)}
				autocomplete=${l(s)}
				placeholder=${t||" "}
				rows=${u??1} cols=${l(h)}
				?readonly=${r} ?aria-disabled=${a} ?disabled=${a}
				.value=${F(o??"")} maxlength=${l(d)} @input=${g}
				@change=${m} @focus=${i} @blur=${i}>`,e)};customElements.define("cosmoz-textarea",A(z,{observedAttributes:q,styleSheets:[R(y)],shadowRootInit:{mode:"open",delegatesFocus:!0}}));
