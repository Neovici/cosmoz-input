import{x as i}from"./iframe-D_1uvEP4.js";import{u as z,f as n,c as v,s as f,a as y,d as w,b as R,r as A,n as C,o as l,l as q,e as c}from"./style-CBcoCmgm.js";const m=e=>{e.style.height="",e.style.height=`${e.scrollHeight}px`},S=(e,o=0)=>{if(o>0){const s=e.getAttribute("rows")??"",t=e.style.height;e.style.height="",e.setAttribute("rows",o),e.style.maxHeight=e.getBoundingClientRect().height+"px",e.style.height=t,e.setAttribute("rows",s)}},E=e=>{const{value:o,maxRows:s}=e,t=z(()=>()=>e.shadowRoot.querySelector("#input"),[]);n(()=>S(t(),s),[s,t]),n(()=>m(t()),[t,o]),n(()=>{const a=t(),r=new ResizeObserver(()=>requestAnimationFrame(()=>m(a)));return r.observe(a),()=>r.unobserve(a)},[t])},I=["rows","placeholder",...y],M=e=>{const{autocomplete:o,value:s,placeholder:t,readonly:a,disabled:r,rows:p,cols:h,maxlength:g}=e,{onChange:x,onFocus:u,onInput:b,onRef:$}=R(e);return E(e),A(i`
			<textarea id="input" part="input"
				${C($)}
				autocomplete=${l(o)}
				placeholder=${t||" "}
				rows=${p??1} cols=${l(h)}
				?readonly=${a} ?aria-disabled=${r} ?disabled=${r}
				.value=${q(s??"")} maxlength=${l(g)} @input=${b}
				@change=${x} @focus=${u} @blur=${u}>`,e)};customElements.define("cosmoz-textarea",v(M,{observedAttributes:I,styleSheets:[f(w)]}));const T={title:"Textarea",component:"cosmoz-textarea"},d="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mi magna, tincidunt ac feugiat sed, ultrices luctus orci. Quisque ultricies hendrerit ultricies. Nam vestibulum mauris a arcu facilisis, ut gravida lorem sagittis. Cras sagittis arcu felis, in consectetur ante tempor vitae. Duis leo ex, sagittis id eros id, dictum egestas nibh. Etiam at porta turpis. Proin maximus mauris vitae quam fringilla, iaculis facilisis ex tempor. Sed eu risus eget nibh accumsan pharetra. Integer et orci lorem. Proin imperdiet facilisis neque, vel luctus lorem bibendum a. Donec gravida sodales gravida. Mauris interdum dignissim faucibus.",W=()=>i`
        ${c}
        <cosmoz-textarea .label=${"Choose color"} .value=${"Red"}></cosmoz-textarea>
    `,_=()=>i`
        ${c}
        <cosmoz-textarea
            invalid
            .label=${"Choose color"}
            .value=${`Red
Green
Blue`}
            .errorMessage=${"Something is wrong!"}
            .maxRows=${2}
        ></cosmoz-textarea>
    `,B=()=>i`
        ${c}
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
            .value=${d}
        ></cosmoz-textarea>
        <cosmoz-textarea
            invalid
            .errorMessage=${"Something is rotten in the state of Denmark"}
            .label=${"Write another comment here"}
            .value=${d.toUpperCase()}
        ></cosmoz-textarea>
        <cosmoz-textarea
            disabled
            .label=${"Write another comment here"}
            .value=${"You cannot type anything here!"}
        ></cosmoz-textarea>
    `,F=["basic","error","contour"];export{F as __namedExportsOrder,W as basic,B as contour,T as default,_ as error};
