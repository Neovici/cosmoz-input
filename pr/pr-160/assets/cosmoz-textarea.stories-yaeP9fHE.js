import{x as i}from"./iframe-CY0ZUY5Z.js";import{u as z,b as n,c as v,s as f,l as y,a as u}from"./style-BcmmriVW.js";import{a as w,s as R,u as A,r as C,n as q,o as l}from"./styles-yzEXfpLJ.js";const d=e=>{e.style.height="",e.style.height=`${e.scrollHeight}px`},S=(e,o=0)=>{if(o>0){const a=e.getAttribute("rows")??"",t=e.style.height;e.style.height="",e.setAttribute("rows",o),e.style.maxHeight=e.getBoundingClientRect().height+"px",e.style.height=t,e.setAttribute("rows",a)}},E=e=>{const{value:o,maxRows:a}=e,t=z(()=>()=>e.shadowRoot.querySelector("#input"),[]);n(()=>S(t(),a),[a,t]),n(()=>d(t()),[t,o]),n(()=>{const s=t(),r=new ResizeObserver(()=>requestAnimationFrame(()=>d(s)));return r.observe(s),()=>r.unobserve(s)},[t])},I=["rows","placeholder",...w],M=e=>{const{autocomplete:o,value:a,placeholder:t,readonly:s,disabled:r,rows:p,cols:h,maxlength:g}=e,{onChange:x,onFocus:m,onInput:b,onRef:$}=A(e);return E(e),C(i`
			<textarea id="input" part="input"
				${q($)}
				autocomplete=${l(o)}
				placeholder=${t||" "}
				rows=${p??1} cols=${l(h)}
				?readonly=${s} ?aria-disabled=${r} ?disabled=${r}
				.value=${y(a??"")} maxlength=${l(g)} @input=${b}
				@change=${x} @focus=${m} @blur=${m}>`,e)};customElements.define("cosmoz-textarea",v(M,{observedAttributes:I,styleSheets:[f(R)]}));const T={title:"Textarea",component:"cosmoz-textarea"},c="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mi magna, tincidunt ac feugiat sed, ultrices luctus orci. Quisque ultricies hendrerit ultricies. Nam vestibulum mauris a arcu facilisis, ut gravida lorem sagittis. Cras sagittis arcu felis, in consectetur ante tempor vitae. Duis leo ex, sagittis id eros id, dictum egestas nibh. Etiam at porta turpis. Proin maximus mauris vitae quam fringilla, iaculis facilisis ex tempor. Sed eu risus eget nibh accumsan pharetra. Integer et orci lorem. Proin imperdiet facilisis neque, vel luctus lorem bibendum a. Donec gravida sodales gravida. Mauris interdum dignissim faucibus.",_=()=>i`
        ${u}
        <cosmoz-textarea .label=${"Choose color"} .value=${"Red"}></cosmoz-textarea>
    `,B=()=>i`
        ${u}
        <cosmoz-textarea
            invalid
            .label=${"Choose color"}
            .value=${`Red
Green
Blue`}
            .errorMessage=${"Something is wrong!"}
            .maxRows=${2}
        ></cosmoz-textarea>
    `,F=()=>i`
        ${u}
        <style>
            cosmoz-textarea {
                --cosmoz-input-color: #aeacac;
                --cosmoz-input-border-radius: 4px;
                --cosmoz-input-wrap-padding: 12px;
                --cosmoz-input-line-display: none;
                --cosmoz-input-contour-size: 1px;
                --cosmoz-input-label-translate-y: 10px;
                --cosmoz-input-float-display: none;
                --cosmoz-input-padding: 10px 8px;
            }
            cosmoz-textarea:not(:first-child) {
                margin-top: 10px;
            }
        </style>
        <cosmoz-textarea
            .label=${"Write your comment here"}
            .value=${c}
        ></cosmoz-textarea>
        <cosmoz-textarea
            no-label-float
            placeholder=${"Write your comment here"}
            .value=${c}
        ></cosmoz-textarea>
        <cosmoz-textarea
            invalid
            .errorMessage=${"Something is rotten in the state of Denmark"}
            .label=${"Write another comment here"}
            .value=${c.toUpperCase()}
        ></cosmoz-textarea>
        <cosmoz-textarea
            disabled
            .label=${"Write another comment here"}
            .value=${"You cannot type anything here!"}
        ></cosmoz-textarea>
    `,O=["basic","error","contour"];export{O as __namedExportsOrder,_ as basic,F as contour,T as default,B as error};
