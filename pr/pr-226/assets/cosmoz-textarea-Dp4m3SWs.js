import{b as $}from"./iframe-0wfgs31L.js";import{b as p,s as f,r as y,c as w,o as l}from"./use-notify-property-CbNkGZz6.js";import{g as v,f as n,b as x,a as A,l as R}from"./style-CiHdT7xP.js";import{u as F}from"./use-input-_Fqa8T7X.js";const c=e=>{e.style.height="",e.style.height=`${e.scrollHeight}px`},H=(e,o=0)=>{if(o>0){const s=e.getAttribute("rows")??"",t=e.style.height;e.style.height="",e.setAttribute("rows",o),e.style.maxHeight=e.getBoundingClientRect().height+"px",e.style.height=t,e.setAttribute("rows",s)}},I=e=>{const{value:o,maxRows:s}=e,t=v(()=>()=>e.shadowRoot.querySelector("#input"),[]);n(()=>H(t(),s),[s,t]),n(()=>c(t()),[t,o]),n(()=>{const r=t(),a=new ResizeObserver(()=>requestAnimationFrame(()=>c(r)));return a.observe(r),()=>a.unobserve(r)},[t])},q=["rows","placeholder",...p],z=e=>{const{autocomplete:o,value:s,placeholder:t,readonly:r,disabled:a,rows:u,cols:h,maxlength:m}=e,{onChange:d,onFocus:i,onInput:g,onRef:b}=F(e);return I(e),y($`
			<textarea id="input" part="input"
				${w(b)}
				autocomplete=${l(o)}
				placeholder=${t||" "}
				rows=${u??1} cols=${l(h)}
				?readonly=${r} ?aria-disabled=${a} ?disabled=${a}
				.value=${R(s??"")} maxlength=${l(m)} @input=${g}
				@change=${d} @focus=${i} @blur=${i}>`,e)};customElements.define("cosmoz-textarea",x(z,{observedAttributes:q,styleSheets:[A(f)],shadowRootInit:{mode:"open",delegatesFocus:!0}}));
