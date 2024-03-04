"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5229],{47609:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>f,contentTitle:()=>N,default:()=>M,frontMatter:()=>q,metadata:()=>b,toc:()=>U});var t=a(85893),i=a(11151),r=a(58219),n=a.n(r),l=(a(62316),a(51039)),c=a.n(l),p=(a(82723),a(9487)),m=a.n(p),d=a(41429),o=a.n(d),h=a(5397),u=a.n(h),g=a(4667),x=a.n(g),j=a(9472),v=a.n(j),y=(a(1176),a(12005),a(85162));const q={id:"update-o-auth-settings",title:"Creates/Updates OAuth Integration Settings",description:"Creates/Updates OAuth Integration Settings",sidebar_label:"Creates/Updates OAuth Integration Settings",hide_title:!0,hide_table_of_contents:!0,api:"eJztV01v4zYQ/SvCoAc7K1vuAj2sLqkbBK3RdjeIk0ttt6Clsc1EIhVytF6vV/+9GFK2JNtB0dsekktozpsPcmYeR3vQBRpBUqtJCjGURSoIP41L2kyRSKq1hRAKYUSOhMZCPNuDVBBDIWgDISiRI8QgStpMUgjB4EspDaYQkykxBJtsMBcQ74F2BSMtGanWUFULD0ZLv+h0x4hEK0JFvBRFkcnExRU9Wa14rzHVOJlBkklU5Hz75RQTgwSL8OBRL58wIT6G4cOSROtclLT51QhFDw52FmDoENrIry6MRyMZVAgiNHwBf/c2REUcRd/4v42jqH/d22638/mwf92bicHX8eCv0eDDYPGu35vPh92dq148Gw0+LN71r3sRi/5xuz9AeBJHCPhF5EXWDc0fldP0J9JGpxfjP17N68KPLn2viuu7vASQl80+bZ+nSPVlnUkNptJgQo8me8C8yARd9m6Q1wnfu20BjpkUaSpZKLK7Tk5Pa4zrTxdeVir5UuKEMLeH4qzhwhixgxCkl10yQ/oZv7MSKC2aiVrpW5UWWvpUjomMXJav3OqpxuUs8WklOWeOB+5xLS15jrhHq0uTIFRVddrrPm2FVtbf9/vR6KSpr6Krtz5+6+O3Pv7O+jhFmxhZsIDBv3tdsebXHvSA22eQaLWS69KrD7D2zN3Z1b4xKAht9OgGCRs418FEEa69btCaK/K65qHQ1jU2zxQxRLaGRJp9R3s/XVQQgkXz+TCGlCaDGPaF0aQTnVVx5JHaSNpVUSnYZDe6eyy0oTttSGTB4/gh8PYghM/CSLHMfIkdTPI6xZUoM4IYXG2cmbw7YENAVeZ8ZQyEsMYvGgKinTfYVv9NWwp4iAqESgOOLujJVaAQU0z7gV4FPuagDvoYcBNXirkeGocqHGgoNSd2wdeVlN7vbA9LFAYN5wPi2aItnjIj+6O3QceSqg/kiJt/e5ArEx7O7psx7vZQ4Ge83DTBOR03snM+PJVNLux59jvdPZBesy87ui2KazYvMltb3CG0FjHNDqBFm2Uazf9o89eBHTtM2GqlDw+rSBypYy4k94ItC66An0+L4TimTz0Azpq+W2TcGalOyhwVuSxBCJlMUFmX2drYuBDJBoP3wxFH7ZqxptHtdjsUTjrUZh3Vqjb6Y3Jz+3F6O2CVFj11nHMvorE+rJ+GP448lhkiF6rl/n8xTee0x7om/EJRkQmpHK2arH4WNi6djbajIQghrj9zFiFsmLHiGez3S2Hx0WRVxdsvJRrutkXDKK73Uml5nUK8EpnFs4COUxL07uuhqB80D0g30MNzp3aOuLKSf0EIz7hrPsUqJp4NihSNi8ALb7yfgevJRvnsc6sKDxrjJMGCWlie4pg8juR992n6ACEs66+4XKcMM2LL/SK2EMMc5hyfLo6DgNvfQybUuhRrxnu3/PcvcGT9CA==",sidebar_class_name:"post api-method",info_path:"api/service-uat/report-portal",custom_edit_url:null},N=void 0,b={id:"api/service-uat/update-o-auth-settings",title:"Creates/Updates OAuth Integration Settings",description:"Creates/Updates OAuth Integration Settings",source:"@site/docs/api/service-uat/update-o-auth-settings.api.mdx",sourceDirName:"api/service-uat",slug:"/api/service-uat/update-o-auth-settings",permalink:"/docs/api/service-uat/update-o-auth-settings",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"update-o-auth-settings",title:"Creates/Updates OAuth Integration Settings",description:"Creates/Updates OAuth Integration Settings",sidebar_label:"Creates/Updates OAuth Integration Settings",hide_title:!0,hide_table_of_contents:!0,api:"eJztV01v4zYQ/SvCoAc7K1vuAj2sLqkbBK3RdjeIk0ttt6Clsc1EIhVytF6vV/+9GFK2JNtB0dsekktozpsPcmYeR3vQBRpBUqtJCjGURSoIP41L2kyRSKq1hRAKYUSOhMZCPNuDVBBDIWgDISiRI8QgStpMUgjB4EspDaYQkykxBJtsMBcQ74F2BSMtGanWUFULD0ZLv+h0x4hEK0JFvBRFkcnExRU9Wa14rzHVOJlBkklU5Hz75RQTgwSL8OBRL58wIT6G4cOSROtclLT51QhFDw52FmDoENrIry6MRyMZVAgiNHwBf/c2REUcRd/4v42jqH/d22638/mwf92bicHX8eCv0eDDYPGu35vPh92dq148Gw0+LN71r3sRi/5xuz9AeBJHCPhF5EXWDc0fldP0J9JGpxfjP17N68KPLn2viuu7vASQl80+bZ+nSPVlnUkNptJgQo8me8C8yARd9m6Q1wnfu20BjpkUaSpZKLK7Tk5Pa4zrTxdeVir5UuKEMLeH4qzhwhixgxCkl10yQ/oZv7MSKC2aiVrpW5UWWvpUjomMXJav3OqpxuUs8WklOWeOB+5xLS15jrhHq0uTIFRVddrrPm2FVtbf9/vR6KSpr6Krtz5+6+O3Pv7O+jhFmxhZsIDBv3tdsebXHvSA22eQaLWS69KrD7D2zN3Z1b4xKAht9OgGCRs418FEEa69btCaK/K65qHQ1jU2zxQxRLaGRJp9R3s/XVQQgkXz+TCGlCaDGPaF0aQTnVVx5JHaSNpVUSnYZDe6eyy0oTttSGTB4/gh8PYghM/CSLHMfIkdTPI6xZUoM4IYXG2cmbw7YENAVeZ8ZQyEsMYvGgKinTfYVv9NWwp4iAqESgOOLujJVaAQU0z7gV4FPuagDvoYcBNXirkeGocqHGgoNSd2wdeVlN7vbA9LFAYN5wPi2aItnjIj+6O3QceSqg/kiJt/e5ArEx7O7psx7vZQ4Ge83DTBOR03snM+PJVNLux59jvdPZBesy87ui2KazYvMltb3CG0FjHNDqBFm2Uazf9o89eBHTtM2GqlDw+rSBypYy4k94ItC66An0+L4TimTz0Azpq+W2TcGalOyhwVuSxBCJlMUFmX2drYuBDJBoP3wxFH7ZqxptHtdjsUTjrUZh3Vqjb6Y3Jz+3F6O2CVFj11nHMvorE+rJ+GP448lhkiF6rl/n8xTee0x7om/EJRkQmpHK2arH4WNi6djbajIQghrj9zFiFsmLHiGez3S2Hx0WRVxdsvJRrutkXDKK73Uml5nUK8EpnFs4COUxL07uuhqB80D0g30MNzp3aOuLKSf0EIz7hrPsUqJp4NihSNi8ALb7yfgevJRvnsc6sKDxrjJMGCWlie4pg8juR992n6ACEs66+4XKcMM2LL/SK2EMMc5hyfLo6DgNvfQybUuhRrxnu3/PcvcGT9CA==",sidebar_class_name:"post api-method",info_path:"api/service-uat/report-portal",custom_edit_url:null},sidebar:"serviceUat",previous:{title:"Returns OAuth Server Settings",permalink:"/docs/api/service-uat/get-o-auth-settings-1"},next:{title:"Creates/Updates OAuth Integration Settings",permalink:"/docs/api/service-uat/update-o-auth-settings-1"}},f={},U=[{value:"Request",id:"request",level:2}];function S(e){const s={h2:"h2",p:"p",...(0,i.a)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("h1",{className:"openapi__heading",children:(0,t.jsx)(s.p,{children:"Creates/Updates OAuth Integration Settings"})}),"\n",(0,t.jsx)(c(),{method:"post",path:"/settings/oauth/{authId}"}),"\n",(0,t.jsx)(s.p,{children:"Creates/Updates OAuth Integration Settings"}),"\n",(0,t.jsx)(s.h2,{id:"request",children:"Request"}),"\n",(0,t.jsxs)(a,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,t.jsx)("summary",{style:{},children:(0,t.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,t.jsx)(s.p,{children:"Path Parameters"})})}),(0,t.jsx)("div",{children:(0,t.jsx)("ul",{children:(0,t.jsx)(o(),{className:"paramsItem",param:{in:"path",name:"authId",required:!0,schema:{type:"string"}}})})})]}),"\n",(0,t.jsx)(m(),{className:"openapi-tabs__mime",children:(0,t.jsx)(y.default,{label:"application/json",value:"application/json-schema",children:(0,t.jsxs)(a,{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0,children:[(0,t.jsxs)("summary",{style:{},className:"openapi-markdown__details-summary-mime",children:[(0,t.jsx)("h3",{className:"openapi-markdown__details-summary-header-body",children:(0,t.jsx)(s.p,{children:"Body"})}),(0,t.jsx)("strong",{className:"openapi-schema__required",children:(0,t.jsx)(s.p,{children:"required"})})]}),(0,t.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,t.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,t.jsx)(x(),{collapsible:!1,name:"authGrantType",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,t.jsx)(x(),{collapsible:!1,name:"authorizationUri",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** Value must match regular expression `^(http://|https://)?(www\\.)?([a-zA-Z0-9-]+)(\\.[a-zA-Z0-9-]+)*(:[0-9]+)?(/[a-z_-]+)*$`",schema:{pattern:"^(http://|https://)?(www\\.)?([a-zA-Z0-9-]+)(\\.[a-zA-Z0-9-]+)*(:[0-9]+)?(/[a-z_-]+)*$",type:"string",example:"string"}}),(0,t.jsx)(x(),{collapsible:!1,name:"clientAuthMethod",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,t.jsx)(x(),{collapsible:!1,name:"clientId",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,t.jsx)(x(),{collapsible:!1,name:"clientName",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,t.jsx)(x(),{collapsible:!1,name:"clientSecret",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,t.jsx)(x(),{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,t.jsx)(x(),{collapsible:!1,name:"jwkSetUri",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,t.jsx)(x(),{collapsible:!1,name:"redirectUrlTemplate",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,t.jsx)(x(),{collapsible:!0,className:"schemaItem",children:(0,t.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,t.jsx)("summary",{style:{},children:(0,t.jsxs)("span",{className:"openapi-schema__container",children:[(0,t.jsx)("strong",{className:"openapi-schema__property",children:(0,t.jsx)(s.p,{children:"restrictions"})}),(0,t.jsx)("span",{className:"openapi-schema__name",children:(0,t.jsx)(s.p,{children:"object"})})]})}),(0,t.jsx)("div",{style:{marginLeft:"1rem"},children:(0,t.jsx)(x(),{name:"property name*",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},collapsible:!1,discriminator:!1})})]})}),(0,t.jsx)(x(),{collapsible:!1,name:"scopes",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{uniqueItems:!0,type:"array",items:{type:"string"}}}),(0,t.jsx)(x(),{collapsible:!1,name:"tokenUri",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** Value must match regular expression `^(http://|https://)?(www\\.)?([a-zA-Z0-9-]+)(\\.[a-zA-Z0-9-]+)*(:[0-9]+)?(/[a-z_-]+)*$`",schema:{pattern:"^(http://|https://)?(www\\.)?([a-zA-Z0-9-]+)(\\.[a-zA-Z0-9-]+)*(:[0-9]+)?(/[a-z_-]+)*$",type:"string",example:"string"}}),(0,t.jsx)(x(),{collapsible:!1,name:"userInfoEndpointNameAttribute",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,t.jsx)(x(),{collapsible:!1,name:"userInfoEndpointUri",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})]})]})})}),"\n",(0,t.jsx)("div",{children:(0,t.jsx)("div",{children:(0,t.jsx)(n(),{label:void 0,id:void 0,children:(0,t.jsxs)(y.default,{label:"200",value:"200",children:[(0,t.jsx)("div",{children:(0,t.jsx)(s.p,{children:"OK"})}),(0,t.jsx)("div",{children:(0,t.jsx)(m(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,t.jsx)(y.default,{label:"*/*",value:"*/*",children:(0,t.jsxs)(v(),{className:"openapi-tabs__schema",children:[(0,t.jsx)(y.default,{label:"Schema",value:"Schema",children:(0,t.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,t.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,t.jsx)("strong",{children:(0,t.jsx)(s.p,{children:"Schema"})})}),(0,t.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,t.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,t.jsx)(x(),{collapsible:!1,name:"authGrantType",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,t.jsx)(x(),{collapsible:!1,name:"authorizationUri",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** Value must match regular expression `^(http://|https://)?(www\\.)?([a-zA-Z0-9-]+)(\\.[a-zA-Z0-9-]+)*(:[0-9]+)?(/[a-z_-]+)*$`",schema:{pattern:"^(http://|https://)?(www\\.)?([a-zA-Z0-9-]+)(\\.[a-zA-Z0-9-]+)*(:[0-9]+)?(/[a-z_-]+)*$",type:"string",example:"string"}}),(0,t.jsx)(x(),{collapsible:!1,name:"clientAuthMethod",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,t.jsx)(x(),{collapsible:!1,name:"clientId",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,t.jsx)(x(),{collapsible:!1,name:"clientName",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,t.jsx)(x(),{collapsible:!1,name:"clientSecret",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,t.jsx)(x(),{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,t.jsx)(x(),{collapsible:!1,name:"jwkSetUri",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,t.jsx)(x(),{collapsible:!1,name:"redirectUrlTemplate",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,t.jsx)(x(),{collapsible:!0,className:"schemaItem",children:(0,t.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,t.jsx)("summary",{style:{},children:(0,t.jsxs)("span",{className:"openapi-schema__container",children:[(0,t.jsx)("strong",{className:"openapi-schema__property",children:(0,t.jsx)(s.p,{children:"restrictions"})}),(0,t.jsx)("span",{className:"openapi-schema__name",children:(0,t.jsx)(s.p,{children:"object"})})]})}),(0,t.jsx)("div",{style:{marginLeft:"1rem"},children:(0,t.jsx)(x(),{name:"property name*",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},collapsible:!1,discriminator:!1})})]})}),(0,t.jsx)(x(),{collapsible:!1,name:"scopes",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{uniqueItems:!0,type:"array",items:{type:"string"}}}),(0,t.jsx)(x(),{collapsible:!1,name:"tokenUri",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** Value must match regular expression `^(http://|https://)?(www\\.)?([a-zA-Z0-9-]+)(\\.[a-zA-Z0-9-]+)*(:[0-9]+)?(/[a-z_-]+)*$`",schema:{pattern:"^(http://|https://)?(www\\.)?([a-zA-Z0-9-]+)(\\.[a-zA-Z0-9-]+)*(:[0-9]+)?(/[a-z_-]+)*$",type:"string",example:"string"}}),(0,t.jsx)(x(),{collapsible:!1,name:"userInfoEndpointNameAttribute",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,t.jsx)(x(),{collapsible:!1,name:"userInfoEndpointUri",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})]})]})}),(0,t.jsx)(y.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,t.jsx)(u(),{responseExample:'{\n  "authGrantType": "string",\n  "authorizationUri": "string",\n  "clientAuthMethod": "string",\n  "clientId": "string",\n  "clientName": "string",\n  "clientSecret": "string",\n  "id": "string",\n  "jwkSetUri": "string",\n  "redirectUrlTemplate": "string",\n  "restrictions": {},\n  "scopes": [\n    "string"\n  ],\n  "tokenUri": "string",\n  "userInfoEndpointNameAttribute": "string",\n  "userInfoEndpointUri": "string"\n}',language:"json"})})]})})})})]})})})})]})}function M(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(S,{...e})}):S(e)}}}]);