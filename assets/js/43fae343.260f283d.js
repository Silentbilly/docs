"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9555],{82942:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>y,contentTitle:()=>b,default:()=>k,frontMatter:()=>N,metadata:()=>w,toc:()=>S});var i=s(85893),r=s(11151),t=s(58219),n=s.n(t),l=(s(62316),s(51039)),c=s.n(l),o=(s(82723),s(9487)),d=s.n(o),p=s(41429),m=s.n(p),h=s(5397),u=s.n(h),g=s(4667),j=s.n(g),x=s(9472),v=s.n(x),f=(s(1176),s(12005),s(85162));const N={id:"create-log-using-post",title:"Create log (batching operation)",description:"Create log (batching operation)",sidebar_label:"Create log (batching operation)",hide_title:!0,hide_table_of_contents:!0,api:"eJyNVcFu2zgQ/RVhTklBW2mAvejUNAiwwRZNEKcnwwjG1FhiS5EsSTlrCPr3YiTZli0XrU4S9fjmzcwbsoGIRYBsCdoWMww7I2fSmuit1uRhJcA68hiVNY85ZCA9YaQvtvgWlCmenxavIMChx4oieSZqwGBFkIHz9jvJ+JW/BCjDSxhLEJBTkF45Jp3gPP2slaccsuhrEhBkSRVC1kDcOaYN0StTQNuuejCF+NnmO0awcDKRX6taR+XQx3RjfTXLMXYcR7ZjnCV8D9a8DVxvvInzHsLZNYvjJD1XIioKvH26JWvO8ppCWn7OU+wWgrMm9My3NzdTrqf/QIzT+5B+OE0nqqhZ7meMslzglp76tpniZQF/SuYk/gBF73HHfYtUhUmEB00VmXjfuSH/ixAqv9BCARWFgAVd/Bciyh+vHuWl34eH3eQ8SdYB2QZ1oHOD9SoTbYvkas3qlSmSg62vgWXE0rK9nQ2ddvZpBun2Nm1G9mxTbQsQEMhv92avvYYMGBWttLrN0rTBOpbWq7hrU3RqYvgXctbHZ+sj6qTnAgFb9ArXui/Xnq53wgZrHSGDMkYXJnTPe6wAMnXFhmYgiAG/agUcFE2t9a8NMeGRTdDkCStLrtQmMUQ55deJ3SS93uRc8FFXTpWd+w7lOtBcWW7Riksl6z7usoE1oSd/V3Nxl6vx7wUbuU99DDq0fUio8zt/9yDg9iuzsWN/nqj9Te33udw9Pya5lTV7uTPDMGUouykbDrJF7XgT17dCxe0O/cqnSc4CtJJkAo223zmUJSW38xsQg104nSxN39/f59j9nVtfpMPWkH55vH/4uniY8ZZWAHutV//P/OPN/COvsVErNKMwf3b5SSUOpY30f0ydRmWYt9PXDAOwhO0tCMhOT2iegZWAkkclW0LTrDHQN6/blpd/1uS526ujo7ve5yrw+29mdHR2w9XLcD5eJ6eBLwreH1dm182QrvkLBPyg3dnd0vIglIQ5+U5Rj7jv485emefIcOn+aMV+052U5OIIzucx+/lwkAw343q4mSqbM4y5OipxfOVJaNtfoaqcdw==",sidebar_class_name:"post api-method",info_path:"api/service-api/report-portal",custom_edit_url:null},b=void 0,w={id:"api/service-api/create-log-using-post",title:"Create log (batching operation)",description:"Create log (batching operation)",source:"@site/docs/api/service-api/create-log-using-post.api.mdx",sourceDirName:"api/service-api",slug:"/api/service-api/create-log-using-post",permalink:"/docs/api/service-api/create-log-using-post",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"create-log-using-post",title:"Create log (batching operation)",description:"Create log (batching operation)",sidebar_label:"Create log (batching operation)",hide_title:!0,hide_table_of_contents:!0,api:"eJyNVcFu2zgQ/RVhTklBW2mAvejUNAiwwRZNEKcnwwjG1FhiS5EsSTlrCPr3YiTZli0XrU4S9fjmzcwbsoGIRYBsCdoWMww7I2fSmuit1uRhJcA68hiVNY85ZCA9YaQvtvgWlCmenxavIMChx4oieSZqwGBFkIHz9jvJ+JW/BCjDSxhLEJBTkF45Jp3gPP2slaccsuhrEhBkSRVC1kDcOaYN0StTQNuuejCF+NnmO0awcDKRX6taR+XQx3RjfTXLMXYcR7ZjnCV8D9a8DVxvvInzHsLZNYvjJD1XIioKvH26JWvO8ppCWn7OU+wWgrMm9My3NzdTrqf/QIzT+5B+OE0nqqhZ7meMslzglp76tpniZQF/SuYk/gBF73HHfYtUhUmEB00VmXjfuSH/ixAqv9BCARWFgAVd/Bciyh+vHuWl34eH3eQ8SdYB2QZ1oHOD9SoTbYvkas3qlSmSg62vgWXE0rK9nQ2ddvZpBun2Nm1G9mxTbQsQEMhv92avvYYMGBWttLrN0rTBOpbWq7hrU3RqYvgXctbHZ+sj6qTnAgFb9ArXui/Xnq53wgZrHSGDMkYXJnTPe6wAMnXFhmYgiAG/agUcFE2t9a8NMeGRTdDkCStLrtQmMUQ55deJ3SS93uRc8FFXTpWd+w7lOtBcWW7Riksl6z7usoE1oSd/V3Nxl6vx7wUbuU99DDq0fUio8zt/9yDg9iuzsWN/nqj9Te33udw9Pya5lTV7uTPDMGUouykbDrJF7XgT17dCxe0O/cqnSc4CtJJkAo223zmUJSW38xsQg104nSxN39/f59j9nVtfpMPWkH55vH/4uniY8ZZWAHutV//P/OPN/COvsVErNKMwf3b5SSUOpY30f0ydRmWYt9PXDAOwhO0tCMhOT2iegZWAkkclW0LTrDHQN6/blpd/1uS526ujo7ve5yrw+29mdHR2w9XLcD5eJ6eBLwreH1dm182QrvkLBPyg3dnd0vIglIQ5+U5Rj7jv485emefIcOn+aMV+052U5OIIzucx+/lwkAw343q4mSqbM4y5OipxfOVJaNtfoaqcdw==",sidebar_class_name:"post api-method",info_path:"api/service-api/report-portal",custom_edit_url:null},sidebar:"serviceApi",previous:{title:"log-async-controller",permalink:"/docs/api/service-api/log-async-controller"},next:{title:"Create log",permalink:"/docs/api/service-api/create-log-entry-using-post"}},y={},S=[{value:"Request",id:"request",level:2}];function _(e){const a={h2:"h2",p:"p",...(0,r.a)(),...e.components},{Details:s}=a;return s||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h1",{className:"openapi__heading",children:(0,i.jsx)(a.p,{children:"Create log (batching operation)"})}),"\n",(0,i.jsx)(c(),{method:"post",path:"/v2/{projectName}/log"}),"\n",(0,i.jsx)(a.p,{children:"Create log (batching operation)"}),"\n",(0,i.jsx)(a.h2,{id:"request",children:"Request"}),"\n",(0,i.jsxs)(s,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,i.jsx)(a.p,{children:"Path Parameters"})})}),(0,i.jsx)("div",{children:(0,i.jsx)("ul",{children:(0,i.jsx)(m(),{className:"paramsItem",param:{name:"projectName",in:"path",description:"projectName",required:!0,schema:{type:"string"}}})})})]}),"\n",(0,i.jsx)(d(),{className:"openapi-tabs__mime",children:(0,i.jsx)(f.default,{label:"multipart/form-data",value:"multipart/form-data-schema",children:(0,i.jsxs)(s,{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0,children:[(0,i.jsxs)("summary",{style:{},className:"openapi-markdown__details-summary-mime",children:[(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-body",children:(0,i.jsx)(a.p,{children:"Body"})}),(0,i.jsx)("strong",{className:"openapi-schema__required",children:(0,i.jsx)(a.p,{children:"required"})})]}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsx)(j(),{collapsible:!1,name:"json_request_part",required:!0,schemaName:"",qualifierMessage:void 0,schema:{description:"json_request_part"}})})]})})}),"\n",(0,i.jsx)("div",{children:(0,i.jsx)("div",{children:(0,i.jsx)(n(),{label:void 0,id:void 0,children:(0,i.jsxs)(f.default,{label:"200",value:"200",children:[(0,i.jsx)("div",{children:(0,i.jsx)(a.p,{children:"OK"})}),(0,i.jsx)("div",{children:(0,i.jsx)(d(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(f.default,{label:"*/*",value:"*/*",children:(0,i.jsxs)(v(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(f.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(a.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsx)(j(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(s,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(a.p,{children:"responses"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(a.p,{children:"object[]"})})]})}),(0,i.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,i.jsx)(a.p,{children:"Array ["})})}),(0,i.jsx)(j(),{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(j(),{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(j(),{collapsible:!1,name:"stackTrace",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,i.jsx)(a.p,{children:"]"})})})]})]})})})]})}),(0,i.jsx)(f.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(u(),{responseExample:'{\n  "responses": [\n    {\n      "id": "string",\n      "message": "string",\n      "stackTrace": "string"\n    }\n  ]\n}',language:"json"})})]})})})})]})})})})]})}function k(e={}){const{wrapper:a}={...(0,r.a)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(_,{...e})}):_(e)}}}]);