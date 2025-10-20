import{x as t}from"./iframe-ClnMcrDO.js";import{u as T,c as E,s as F,l as M,a as n}from"./style-CG0cV4ST.js";import{a as L,u as P,r as R,n as D,o as s,s as _}from"./styles-DtGPIqcb.js";const k=o=>T(()=>{if(o==null)return;const a=new RegExp(o,"u");return e=>{!e.defaultPrevented&&e.data&&!a.test(e.data)&&e.preventDefault()}},[o]),A=({placeholder:o,noLabelFloat:a,label:e})=>(a?e:void 0)||o||" ",B=["type","pattern","allowed-pattern","min","max","step","autosize","label","placeholder",...L],O=o=>{const{type:a="text",pattern:e,allowedPattern:b,autocomplete:f,value:d,readonly:h,disabled:z,min:x,max:y,step:g,maxlength:v}=o,{onChange:w,onFocus:$,onInput:S,onRef:I}=P(o),C=k(b);return R(t`
			<input
				${D(I)}
				style="--chars: ${d?.toString()?.length??0}ch"
				id="input"
				part="input"
				type=${a}
				pattern=${s(e)}
				autocomplete=${s(f)}
				placeholder=${A(o)}
				?readonly=${h}
				?aria-disabled=${z}
				?disabled=${z}
				.value=${M(d??"")}
				maxlength=${s(v)}
				@beforeinput=${C}
				@input=${S}
				@change=${w}
				@focus=${$}
				@blur=${$}
				min=${s(x)}
				max=${s(y)}
				step=${s(g)}
			/>
		`,o)};customElements.define("cosmoz-input",E(O,{observedAttributes:B,styleSheets:[F(_)]}));const H={title:"Input",component:"cosmoz-input"},l=()=>t`
    ${n}
    <cosmoz-input .label=${"Choose color"}></cosmoz-input>
`,r=()=>t`
    ${n}
    <cosmoz-input
        always-float-label
        .label=${"Choose color"}
        placeholder=${"placeholder text"}
    ></cosmoz-input>
`,p=()=>t`
    ${n}
    <cosmoz-input no-label-float .label=${"Choose color"}></cosmoz-input>
`,i=()=>t`
    ${n}
    <cosmoz-input
        .label=${"Choose color"}
        .value=${"Red"}
        invalid
        .errorMessage=${"Something is wrong!"}
    ></cosmoz-input>
`,c=()=>t`
    ${n}
    <cosmoz-input
        autosize
        no-label-float
        type="number"
        .value=${3.12}
    ></cosmoz-input>
`,u=()=>t`
    ${n}
    <cosmoz-input no-label-float type="color" .value=${"#ff0000"}></cosmoz-input>
`,m=()=>t`
    ${n}
    <style>
        cosmoz-input {
            --cosmoz-input-color: #aeacac;
            --cosmoz-input-border-radius: 4px;
            --cosmoz-input-wrap-padding: 12px;
            --cosmoz-input-line-display: none;
            --cosmoz-input-contour-size: 1px;
            --cosmoz-input-label-translate-y: 10px;
            --cosmoz-input-float-display: none;
            --cosmoz-input-padding: 10px 8px;
        }
        span {
            margin: 0 4px;
        }
    </style>
    <cosmoz-input .label=${"Insert a text input"}></cosmoz-input>
    <cosmoz-input
        .label=${"I want this input to have the suffix match the same placing!"}
        type="number"
        ><span slot="suffix">${"suffix"}</span></cosmoz-input
    >
    <cosmoz-input .label=${"Same thing of above, with the prefix!"}
        ><span slot="prefix">${"Prefix:"}</span></cosmoz-input
    >
    <cosmoz-input always-float-label .label=${"This label always floats"}
        ><span slot="prefix">${"Example:"}</span></cosmoz-input
    >

    <cosmoz-input
        invalid
        .label=${"This input is invalid!"}
        .errorMessage=${"Something is rotten in the state of Denmark."}
    ></cosmoz-input>
    <cosmoz-input disabled .label=${"This input is disabled!"}></cosmoz-input>
`;l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"() => html`\n    ${style}\n    <cosmoz-input .label=${'Choose color'}></cosmoz-input>\n`",...l.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => html\`
    \${style}
    <cosmoz-input
        always-float-label
        .label=\${'Choose color'}
        placeholder=\${'placeholder text'}
    ></cosmoz-input>
\``,...r.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:"() => html`\n    ${style}\n    <cosmoz-input no-label-float .label=${'Choose color'}></cosmoz-input>\n`",...p.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => html\`
    \${style}
    <cosmoz-input
        .label=\${'Choose color'}
        .value=\${'Red'}
        invalid
        .errorMessage=\${'Something is wrong!'}
    ></cosmoz-input>
\``,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => html\`
    \${style}
    <cosmoz-input
        autosize
        no-label-float
        type="number"
        .value=\${3.12}
    ></cosmoz-input>
\``,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => html\`
    \${style}
    <cosmoz-input no-label-float type="color" .value=\${'#ff0000'}></cosmoz-input>
\``,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => html\`
    \${style}
    <style>
        cosmoz-input {
            --cosmoz-input-color: #aeacac;
            --cosmoz-input-border-radius: 4px;
            --cosmoz-input-wrap-padding: 12px;
            --cosmoz-input-line-display: none;
            --cosmoz-input-contour-size: 1px;
            --cosmoz-input-label-translate-y: 10px;
            --cosmoz-input-float-display: none;
            --cosmoz-input-padding: 10px 8px;
        }
        span {
            margin: 0 4px;
        }
    </style>
    <cosmoz-input .label=\${'Insert a text input'}></cosmoz-input>
    <cosmoz-input
        .label=\${'I want this input to have the suffix match the same placing!'}
        type="number"
        ><span slot="suffix">\${'suffix'}</span></cosmoz-input
    >
    <cosmoz-input .label=\${'Same thing of above, with the prefix!'}
        ><span slot="prefix">\${'Prefix:'}</span></cosmoz-input
    >
    <cosmoz-input always-float-label .label=\${'This label always floats'}
        ><span slot="prefix">\${'Example:'}</span></cosmoz-input
    >

    <cosmoz-input
        invalid
        .label=\${'This input is invalid!'}
        .errorMessage=\${'Something is rotten in the state of Denmark.'}
    ></cosmoz-input>
    <cosmoz-input disabled .label=\${'This input is disabled!'}></cosmoz-input>
\``,...m.parameters?.docs?.source}}};const J=["basic","alwaysFloatLabel","noLabelFloat","error","autosize","color","contour"];export{J as __namedExportsOrder,r as alwaysFloatLabel,c as autosize,l as basic,u as color,m as contour,H as default,i as error,p as noLabelFloat};
