"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9566],{24539:(e,a,i)=>{i.r(a),i.d(a,{assets:()=>N,contentTitle:()=>f,default:()=>J,frontMatter:()=>v,metadata:()=>C,toc:()=>k});var s=i(85893),t=i(11151),n=i(58219),r=i.n(n),l=(i(62316),i(51039)),d=i.n(l),c=(i(82723),i(9487)),o=i.n(c),p=i(41429),m=i.n(p),h=i(5397),u=i.n(h),x=i(4667),g=i.n(x),j=i(9472),y=i.n(j),b=(i(1176),i(12005),i(85162));const v={id:"create-auth-integration",title:"Create new auth integration",description:"Create new auth integration",sidebar_label:"Create new auth integration",hide_title:!0,hide_table_of_contents:!0,api:"eJx9VU2P2zYQ/SvCnJKAa20D9KJT3cUCXbRo3P04OT6MxbHFlCIZkopjCPrvxZCSZe028Ukm3wzfzLxH9mAdeYzKmgcJFdSeMNK6i82DiXTMOyDAoceWIvkA1bYHZaACh7EBAQZbggqwi83z2REI8PS1U54kVNF3JCDUDbUIVQ+RARWE6JU5ggAyXQvVFlCCAC3RgYCArYbdMOxyIgrxdyvPHF1bE8lE/kTntKoTu/JLsIbX5mNmAlsgg3tNnF/NFW3mcnZiYmX3X6iOXKznpkRFgZNNCWb6e2s1oYHhRzln6CUnSqkYhXqzyL7EDcMgIKqoee3FyXEWj//knWVj00Jw1oSc6uPt7asufSg/LBvz80rz7uspXVNa70P0WMdEioLtfE2ZmqRQe+WSXCr49GcOw2NI4+1ic1Nbc1DHLjfrhox0VpnI/V/G3iUJFoZOBccVaiHElmJjWanOhlQBi7CCMlCMyhxDyTFlP6lxYEGR/zYJt/MaKuidt9HWVg9VmbHWq3geyg4555LPIznr48b6iLp4WT8XOR8I+IZesTZS86aU/C3pgJ2OUEETowtvUm4m7OwABoIY8btBwIVVTngd/ocNsWDbFWhkweyKd+pQGCJJ8n1hD0XmXIykL4RnXpJau/IJ5RJopSwPcsftqrt87raHPaEnz+OGaru73n5iUeXSr0EX9YwFJe0l0yRQkgUb9nG29v13bJ2mhdfyxfEjdw3JeQc7yR3rJHdqUfF4Q+e4qN9e13e5q54yAN7odtk3Hra0ddeSiZP+tKrJhER2TLZ2WDdUfFzdghj1xbVXZXk6nVaYdlfWH8sxNJR/Pdzd//10f8MhV+ZaHM7yIh8yrV9Xv9xmLKu+RXN1/M/tsijvMptI32PpNKp0hyXO/eikLUxOgqxBEFBd7vadgIZ9V22h7/cY6MXrYeDlrx15lsxutkUSkFRhHOkBdaA3jC63Fbx7HG+39wWI/2c6LqI5J/fpjv+BgH/pfP0CDeyfhlCSTxzy9l0+6WZ8pKbwNy/JIKaIdV2Ti1dYvk/ZA5dLaPPp6RkE7McHqrWSYR5P/AriCSr4DJ+ZoU0FJ7ek9R40mmOHR8bnY/n3H/16nrM=",sidebar_class_name:"post api-method",info_path:"api/service-uat/report-portal",custom_edit_url:null},f=void 0,C={id:"api/service-uat/create-auth-integration",title:"Create new auth integration",description:"Create new auth integration",source:"@site/docs/api/service-uat/create-auth-integration.api.mdx",sourceDirName:"api/service-uat",slug:"/api/service-uat/create-auth-integration",permalink:"/docs/api/service-uat/create-auth-integration",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"create-auth-integration",title:"Create new auth integration",description:"Create new auth integration",sidebar_label:"Create new auth integration",hide_title:!0,hide_table_of_contents:!0,api:"eJx9VU2P2zYQ/SvCnJKAa20D9KJT3cUCXbRo3P04OT6MxbHFlCIZkopjCPrvxZCSZe028Ukm3wzfzLxH9mAdeYzKmgcJFdSeMNK6i82DiXTMOyDAoceWIvkA1bYHZaACh7EBAQZbggqwi83z2REI8PS1U54kVNF3JCDUDbUIVQ+RARWE6JU5ggAyXQvVFlCCAC3RgYCArYbdMOxyIgrxdyvPHF1bE8lE/kTntKoTu/JLsIbX5mNmAlsgg3tNnF/NFW3mcnZiYmX3X6iOXKznpkRFgZNNCWb6e2s1oYHhRzln6CUnSqkYhXqzyL7EDcMgIKqoee3FyXEWj//knWVj00Jw1oSc6uPt7asufSg/LBvz80rz7uspXVNa70P0WMdEioLtfE2ZmqRQe+WSXCr49GcOw2NI4+1ic1Nbc1DHLjfrhox0VpnI/V/G3iUJFoZOBccVaiHElmJjWanOhlQBi7CCMlCMyhxDyTFlP6lxYEGR/zYJt/MaKuidt9HWVg9VmbHWq3geyg4555LPIznr48b6iLp4WT8XOR8I+IZesTZS86aU/C3pgJ2OUEETowtvUm4m7OwABoIY8btBwIVVTngd/ocNsWDbFWhkweyKd+pQGCJJ8n1hD0XmXIykL4RnXpJau/IJ5RJopSwPcsftqrt87raHPaEnz+OGaru73n5iUeXSr0EX9YwFJe0l0yRQkgUb9nG29v13bJ2mhdfyxfEjdw3JeQc7yR3rJHdqUfF4Q+e4qN9e13e5q54yAN7odtk3Hra0ddeSiZP+tKrJhER2TLZ2WDdUfFzdghj1xbVXZXk6nVaYdlfWH8sxNJR/Pdzd//10f8MhV+ZaHM7yIh8yrV9Xv9xmLKu+RXN1/M/tsijvMptI32PpNKp0hyXO/eikLUxOgqxBEFBd7vadgIZ9V22h7/cY6MXrYeDlrx15lsxutkUSkFRhHOkBdaA3jC63Fbx7HG+39wWI/2c6LqI5J/fpjv+BgH/pfP0CDeyfhlCSTxzy9l0+6WZ8pKbwNy/JIKaIdV2Ti1dYvk/ZA5dLaPPp6RkE7McHqrWSYR5P/AriCSr4DJ+ZoU0FJ7ek9R40mmOHR8bnY/n3H/16nrM=",sidebar_class_name:"post api-method",info_path:"api/service-uat/report-portal",custom_edit_url:null},sidebar:"serviceUat",previous:{title:"Retrieves auth settings",permalink:"/docs/api/service-uat/get-settings"},next:{title:"Update auth integration",permalink:"/docs/api/service-uat/update-auth-integration"}},N={},k=[{value:"Request",id:"request",level:2}];function _(e){const a={h2:"h2",p:"p",...(0,t.a)(),...e.components},{Details:i}=a;return i||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h1",{className:"openapi__heading",children:(0,s.jsx)(a.p,{children:"Create new auth integration"})}),"\n",(0,s.jsx)(d(),{method:"post",path:"/settings/auth/{authType}"}),"\n",(0,s.jsx)(a.p,{children:"Create new auth integration"}),"\n",(0,s.jsx)(a.h2,{id:"request",children:"Request"}),"\n",(0,s.jsxs)(i,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,s.jsx)("summary",{style:{},children:(0,s.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,s.jsx)(a.p,{children:"Path Parameters"})})}),(0,s.jsx)("div",{children:(0,s.jsx)("ul",{children:(0,s.jsx)(m(),{className:"paramsItem",param:{in:"path",name:"authType",required:!0,schema:{type:"string",enum:["ad","ldap","saml"]}}})})})]}),"\n",(0,s.jsx)(o(),{className:"openapi-tabs__mime",children:(0,s.jsx)(b.default,{label:"application/json",value:"application/json-schema",children:(0,s.jsxs)(i,{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0,children:[(0,s.jsxs)("summary",{style:{},className:"openapi-markdown__details-summary-mime",children:[(0,s.jsx)("h3",{className:"openapi-markdown__details-summary-header-body",children:(0,s.jsx)(a.p,{children:"Body"})}),(0,s.jsx)("strong",{className:"openapi-schema__required",children:(0,s.jsx)(a.p,{children:"required"})})]}),(0,s.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,s.jsx)(g(),{collapsible:!1,name:"enabled",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"}}),(0,s.jsx)(g(),{collapsible:!0,className:"schemaItem",children:(0,s.jsxs)(i,{style:{},className:"openapi-markdown__details",children:[(0,s.jsx)("summary",{style:{},children:(0,s.jsxs)("span",{className:"openapi-schema__container",children:[(0,s.jsx)("strong",{className:"openapi-schema__property",children:(0,s.jsx)(a.p,{children:"integrationParameters"})}),(0,s.jsx)("span",{className:"openapi-schema__name",children:(0,s.jsx)(a.p,{children:"object"})}),(0,s.jsx)("span",{className:"openapi-schema__divider"}),(0,s.jsx)("span",{className:"openapi-schema__required",children:(0,s.jsx)(a.p,{children:"required"})})]})}),(0,s.jsx)("div",{style:{marginLeft:"1rem"},children:(0,s.jsx)(g(),{name:"property name*",required:!1,schemaName:"object",qualifierMessage:void 0,schema:{type:"object"},collapsible:!1,discriminator:!1})})]})})]})]})})}),"\n",(0,s.jsx)("div",{children:(0,s.jsx)("div",{children:(0,s.jsx)(r(),{label:void 0,id:void 0,children:(0,s.jsxs)(b.default,{label:"200",value:"200",children:[(0,s.jsx)("div",{children:(0,s.jsx)(a.p,{children:"OK"})}),(0,s.jsx)("div",{children:(0,s.jsx)(o(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,s.jsx)(b.default,{label:"*/*",value:"*/*",children:(0,s.jsxs)(y(),{className:"openapi-tabs__schema",children:[(0,s.jsx)(b.default,{label:"Schema",value:"Schema",children:(0,s.jsxs)(i,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,s.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,s.jsx)("strong",{children:(0,s.jsx)(a.p,{children:"Schema"})})}),(0,s.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,s.jsx)(g(),{collapsible:!1,name:"type",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,s.jsx)(b.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,s.jsx)(u(),{responseExample:'{\n  "type": "string"\n}',language:"json"})})]})})})})]})})})})]})}function J(e={}){const{wrapper:a}={...(0,t.a)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(_,{...e})}):_(e)}}}]);