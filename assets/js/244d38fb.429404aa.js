"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2700],{76260:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>q,contentTitle:()=>v,default:()=>T,frontMatter:()=>y,metadata:()=>k,toc:()=>N});var i=s(85893),a=s(11151),r=s(58219),n=s.n(r),c=(s(62316),s(51039)),l=s.n(c),d=(s(82723),s(9487)),p=s.n(d),m=s(41429),o=s.n(m),h=s(5397),g=s.n(h),u=s(4667),x=s.n(u),j=s(9472),b=s.n(j),f=(s(1176),s(12005),s(85162));const y={id:"get-ticket-using-get",title:"Get ticket from the bts integration",description:"Get ticket from the bts integration",sidebar_label:"Get ticket from the bts integration",hide_title:!0,hide_table_of_contents:!0,api:"eJydVk1v2zAM/SsCT2uhxu2AXXxaMRRdsWEr1vVU5KDYjK3VllSJThcY/u8DLTt1PtoVycWISfGRj4+UWyBVBEgfYNEUZ+RV9qhNcRbWgbA+y6whb6sKPcwlWIdekbbmJocUCqTfOntEug/aFNdXv0GCU17VSOg5YgtG1QgpLCjcevsHMwIJ2kAKTw36NUjIMWReO4656+fxqdEec0jJNyghZCXWCtIWaO04aiCvTQFdJ6dA9776L0j0OQbAxfR+8L8BxSkq90C2/Y5Bop7am/xNmInT+zHm7BycNQED2z+en/NjO/LPbyCBu4+G2HqanPJjElVTxWGjBECOMHYx9M95lgvpCKLzA6lIcFVTaNPTdMgcSFETDpuaulZ+fdDW+OpQ4f2PKXQeM0XM1VJVAXdZvUYSkVmx9LYWVKJYUBDaEBZxAEBCjVTaYQ565VMJKSSri2RBIWknCuiSGC1px351ICGgX41z0icMfIZsZqsuTZJWNVRar2ndJcrpvdb/Qmc93VpPqhIxFkhYKa/Vooqcj+Fid5eqqQhSKIlc2At3O/pKQNPUvA/YEeTgP+8kbDLal8tXG0iwcoUyueDMxAe9FAYxx/xE2KWI+YrdhF/yyrG2M997ud5ppi03bc5UZU3EfWhhgcqjv2yY7of51HzH4oylT502QhgK6jXcb4veiacOtFnaqaq3sn2F+7GWy9sbkdusqdHQKA6eHJX1kzPM813j+BDzWyvN7Q7xzee9miVUOkMTcHL80qmsRPFxdg6Dvvty0iR5fn6eqd46s75IhqMh+X7z5erH3dUZH+kksNZi9p9mF+ezi376bKBamQnM+6S/xcaGXsK/lLhKaTOZwTgWD7C6AMmrFySk28uRxgWSbrbZXEJpA/G5tl2ogPe+6jp+HVc6yyDXgYX+ygy3L7sLPvwaVuOJ2LpgDqb9iOvdi2ilqoYdgbfzsbDxynkbMvq8wM1f5vn4knfIPpTA8FKZ9RR+TGwa4GgGJhfVESlsTne8hkpUOfqekWi+zDJ0007xZcXsbVY0f5x03T/7hA+x",sidebar_class_name:"get api-method",info_path:"api/service-api/report-portal",custom_edit_url:null},v=void 0,k={id:"api/service-api/get-ticket-using-get",title:"Get ticket from the bts integration",description:"Get ticket from the bts integration",source:"@site/docs/api/service-api/get-ticket-using-get.api.mdx",sourceDirName:"api/service-api",slug:"/api/service-api/get-ticket-using-get",permalink:"/docs/api/service-api/get-ticket-using-get",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-ticket-using-get",title:"Get ticket from the bts integration",description:"Get ticket from the bts integration",sidebar_label:"Get ticket from the bts integration",hide_title:!0,hide_table_of_contents:!0,api:"eJydVk1v2zAM/SsCT2uhxu2AXXxaMRRdsWEr1vVU5KDYjK3VllSJThcY/u8DLTt1PtoVycWISfGRj4+UWyBVBEgfYNEUZ+RV9qhNcRbWgbA+y6whb6sKPcwlWIdekbbmJocUCqTfOntEug/aFNdXv0GCU17VSOg5YgtG1QgpLCjcevsHMwIJ2kAKTw36NUjIMWReO4656+fxqdEec0jJNyghZCXWCtIWaO04aiCvTQFdJ6dA9776L0j0OQbAxfR+8L8BxSkq90C2/Y5Bop7am/xNmInT+zHm7BycNQED2z+en/NjO/LPbyCBu4+G2HqanPJjElVTxWGjBECOMHYx9M95lgvpCKLzA6lIcFVTaNPTdMgcSFETDpuaulZ+fdDW+OpQ4f2PKXQeM0XM1VJVAXdZvUYSkVmx9LYWVKJYUBDaEBZxAEBCjVTaYQ565VMJKSSri2RBIWknCuiSGC1px351ICGgX41z0icMfIZsZqsuTZJWNVRar2ndJcrpvdb/Qmc93VpPqhIxFkhYKa/Vooqcj+Fid5eqqQhSKIlc2At3O/pKQNPUvA/YEeTgP+8kbDLal8tXG0iwcoUyueDMxAe9FAYxx/xE2KWI+YrdhF/yyrG2M997ud5ppi03bc5UZU3EfWhhgcqjv2yY7of51HzH4oylT502QhgK6jXcb4veiacOtFnaqaq3sn2F+7GWy9sbkdusqdHQKA6eHJX1kzPM813j+BDzWyvN7Q7xzee9miVUOkMTcHL80qmsRPFxdg6Dvvty0iR5fn6eqd46s75IhqMh+X7z5erH3dUZH+kksNZi9p9mF+ezi376bKBamQnM+6S/xcaGXsK/lLhKaTOZwTgWD7C6AMmrFySk28uRxgWSbrbZXEJpA/G5tl2ogPe+6jp+HVc6yyDXgYX+ygy3L7sLPvwaVuOJ2LpgDqb9iOvdi2ilqoYdgbfzsbDxynkbMvq8wM1f5vn4knfIPpTA8FKZ9RR+TGwa4GgGJhfVESlsTne8hkpUOfqekWi+zDJ0007xZcXsbVY0f5x03T/7hA+x",sidebar_class_name:"get api-method",info_path:"api/service-api/report-portal",custom_edit_url:null},sidebar:"serviceApi",previous:{title:"Get list of existed issue types in bts",permalink:"/docs/api/service-api/get-allowable-issue-types-using-get"},next:{title:"Get list of fields required for posting ticket in concrete integration",permalink:"/docs/api/service-api/get-set-of-integration-system-fields-using-get-1"}},q={},N=[{value:"Request",id:"request",level:2}];function M(e){const t={h2:"h2",p:"p",...(0,a.a)(),...e.components},{Details:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h1",{className:"openapi__heading",children:(0,i.jsx)(t.p,{children:"Get ticket from the bts integration"})}),"\n",(0,i.jsx)(l(),{method:"get",path:"/v1/bts/{projectName}/ticket/{ticketId}"}),"\n",(0,i.jsx)(t.p,{children:"Get ticket from the bts integration"}),"\n",(0,i.jsx)(t.h2,{id:"request",children:"Request"}),"\n",(0,i.jsxs)(s,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,i.jsx)(t.p,{children:"Path Parameters"})})}),(0,i.jsx)("div",{children:(0,i.jsxs)("ul",{children:[(0,i.jsx)(o(),{className:"paramsItem",param:{name:"projectName",in:"path",description:"projectName",required:!0,schema:{type:"string"}}}),(0,i.jsx)(o(),{className:"paramsItem",param:{name:"ticketId",in:"path",description:"ticketId",required:!0,schema:{type:"string"}}})]})})]}),"\n",(0,i.jsxs)(s,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,i.jsx)(t.p,{children:"Query Parameters"})})}),(0,i.jsx)("div",{children:(0,i.jsxs)("ul",{children:[(0,i.jsx)(o(),{className:"paramsItem",param:{name:"btsProject",in:"query",description:"btsProject",required:!0,schema:{type:"string"}}}),(0,i.jsx)(o(),{className:"paramsItem",param:{name:"btsUrl",in:"query",description:"btsUrl",required:!0,schema:{type:"string"}}})]})})]}),"\n",(0,i.jsx)("div",{children:(0,i.jsx)("div",{children:(0,i.jsx)(n(),{label:void 0,id:void 0,children:(0,i.jsxs)(f.default,{label:"200",value:"200",children:[(0,i.jsx)("div",{children:(0,i.jsx)(t.p,{children:"OK"})}),(0,i.jsx)("div",{children:(0,i.jsx)(p(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(f.default,{label:"*/*",value:"*/*",children:(0,i.jsxs)(b(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(f.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(t.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,i.jsx)(x(),{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(x(),{collapsible:!1,name:"pluginName",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(x(),{collapsible:!1,name:"status",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(x(),{collapsible:!1,name:"summary",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(x(),{collapsible:!1,name:"url",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})]})]})}),(0,i.jsx)(f.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(g(),{responseExample:'{\n  "id": "string",\n  "pluginName": "string",\n  "status": "string",\n  "summary": "string",\n  "url": "string"\n}',language:"json"})})]})})})})]})})})})]})}function T(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(M,{...e})}):M(e)}}}]);