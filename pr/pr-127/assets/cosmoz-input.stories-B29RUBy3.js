import{x as n}from"./iframe-Tv2YsNmT.js";import{u as C,c as E,s as F,l as M,a as s}from"./style-Bw0MUbp7.js";import{a as L,u as P,r as R,n as D,o as t,s as _}from"./styles-BckuprlK.js";const k=o=>C(()=>{if(o==null)return;const a=new RegExp(o,"u");return e=>{!e.defaultPrevented&&e.data&&!a.test(e.data)&&e.preventDefault()}},[o]),A=({placeholder:o,noLabelFloat:a,label:e})=>(a?e:void 0)||o||" ",B=["type","pattern","allowed-pattern","min","max","step","autosize","label","placeholder",...L],O=o=>{const{type:a="text",pattern:e,allowedPattern:$,autocomplete:b,value:z,readonly:h,disabled:d,min:x,max:y,step:g,maxlength:v}=o,{onChange:w,onFocus:f,onInput:S,onRef:T}=P(o),I=k($);return R(n`
			<input
				${D(T)}
				style="--chars: ${z?.toString()?.length??0}ch"
				id="input"
				part="input"
				type=${a}
				pattern=${t(e)}
				autocomplete=${t(b)}
				placeholder=${A(o)}
				?readonly=${h}
				?aria-disabled=${d}
				?disabled=${d}
				.value=${M(z??"")}
				maxlength=${t(v)}
				@beforeinput=${I}
				@input=${S}
				@change=${w}
				@focus=${f}
				@blur=${f}
				min=${t(x)}
				max=${t(y)}
				step=${t(g)}
			/>
		`,o)};customElements.define("cosmoz-input",E(O,{observedAttributes:B,styleSheets:[F(_)]}));const H={title:"Input",component:"cosmoz-input"},l=()=>n`
    ${s}
    <cosmoz-input .label=${"Choose color"}></cosmoz-input>
`,i=()=>n`
    ${s}
    <cosmoz-input
        always-float-label
        .label=${"Choose color"}
        placeholder=${"placeholder text"}
    ></cosmoz-input>
`,p=()=>n`
    ${s}
    <cosmoz-input no-label-float .label=${"Choose color"}></cosmoz-input>
`,r=()=>n`
    ${s}
    <cosmoz-input
        .label=${"Choose color"}
        .value=${"Red"}
        invalid
        .errorMessage=${"Something is wrong!"}
    ></cosmoz-input>
`,c=()=>n`
    ${s}
    <cosmoz-input
        autosize
        no-label-float
        type="number"
        .value=${3.12}
    ></cosmoz-input>
`,u=()=>n`
    ${s}
    <cosmoz-input no-label-float type="color" .value=${"#ff0000"}></cosmoz-input>
`,m=()=>n`
    ${s}
    <style>
        cosmoz-input {
            --cosmoz-input-color: #aeacac;
            --cosmoz-input-border-radius: 8px;
            --cosmoz-input-wrap-padding: 12px 16px;
            --cosmoz-input-padding: 14px 0px;
            --cosmoz-input-line-display: none;
            --cosmoz-input-contour-size: 1px;
            --cosmoz-input-label-translate-y: 8px;
            --cosmoz-input-float-display: none;
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
        no-label-float
        .label=${"This label never floats"}
    ></cosmoz-input>
    <cosmoz-input no-label-float .label=${"This label never floats with prefix"}
        ><span slot="prefix">${"Example:"}</span></cosmoz-input
    >
    <cosmoz-input no-label-float .label=${"This label never floats with sufix"}
        ><span slot="suffix">${"suffix"}</span></cosmoz-input
    >
    <cosmoz-input
        invalid
        .label=${"This input is invalid!"}
        .errorMessage=${"Something is rotten in the state of Denmark."}
    ></cosmoz-input>
    <cosmoz-input disabled .label=${"This input is disabled!"}></cosmoz-input>
`;l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"() => html`\n    ${style}\n    <cosmoz-input .label=${'Choose color'}></cosmoz-input>\n`",...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => html\`
    \${style}
    <cosmoz-input
        always-float-label
        .label=\${'Choose color'}
        placeholder=\${'placeholder text'}
    ></cosmoz-input>
\``,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:"() => html`\n    ${style}\n    <cosmoz-input no-label-float .label=${'Choose color'}></cosmoz-input>\n`",...p.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => html\`
    \${style}
    <cosmoz-input
        .label=\${'Choose color'}
        .value=\${'Red'}
        invalid
        .errorMessage=\${'Something is wrong!'}
    ></cosmoz-input>
\``,...r.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => html\`
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
            --cosmoz-input-border-radius: 8px;
            --cosmoz-input-wrap-padding: 12px 16px;
            --cosmoz-input-padding: 14px 0px;
            --cosmoz-input-line-display: none;
            --cosmoz-input-contour-size: 1px;
            --cosmoz-input-label-translate-y: 8px;
            --cosmoz-input-float-display: none;
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
        no-label-float
        .label=\${'This label never floats'}
    ></cosmoz-input>
    <cosmoz-input no-label-float .label=\${'This label never floats with prefix'}
        ><span slot="prefix">\${'Example:'}</span></cosmoz-input
    >
    <cosmoz-input no-label-float .label=\${'This label never floats with sufix'}
        ><span slot="suffix">\${'suffix'}</span></cosmoz-input
    >
    <cosmoz-input
        invalid
        .label=\${'This input is invalid!'}
        .errorMessage=\${'Something is rotten in the state of Denmark.'}
    ></cosmoz-input>
    <cosmoz-input disabled .label=\${'This input is disabled!'}></cosmoz-input>
\``,...m.parameters?.docs?.source}}};const J=["basic","alwaysFloatLabel","noLabelFloat","error","autosize","color","contour"];export{J as __namedExportsOrder,i as alwaysFloatLabel,c as autosize,l as basic,u as color,m as contour,H as default,r as error,p as noLabelFloat};
