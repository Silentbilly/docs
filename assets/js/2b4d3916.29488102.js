"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6307],{64280:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>w,contentTitle:()=>v,default:()=>R,frontMatter:()=>f,metadata:()=>y,toc:()=>A});var n=s(85893),i=s(11151),r=s(58219),t=s.n(r),l=(s(62316),s(51039)),c=s.n(l),d=(s(82723),s(9487)),o=s.n(d),m=s(41429),p=s.n(m),h=s(5397),u=s.n(h),j=(s(4667),s(9472)),g=s.n(j),x=(s(1176),s(12005),s(85162));const f={id:"get-all-launch-names-using-get",title:"Get launch names of project",description:"Get launch names of project",sidebar_label:"Get launch names of project",hide_title:!0,hide_table_of_contents:!0,api:"eJydVctu2zAQ/BVhT0nASHaAXnSqUQRp0CANkuZk+EBLa4stRTLkyqkh6N+LFWVHjp2iqC+GyeHs7OzDLZBcB8jnoGVjiuqysIa81Ro9LARYh16Ssua2hBzWSDOt73rgvawxPAdl1jfXP0CAk17WSOiZrAUja4QcVkoT+rQwlPYnApSBHF4a9FsQUGIovHIc4CTY40ujPJaQk29QQCgqrCXkLdDWMX8gr8wauk7sQzpvf2JB96NwTlJ1FO0Q9++RFgwOzpqAge+vJhP+OiT//g0EsJVoiG8vsgv+OmKV3ks2QhHW4VQ0/rBy57GQxPpWUgd8n8wNUhILmLANIbGrZEgQBNRIlR0K2JeKKsgh20yzduRCl0WGrGcAAQH9ZlfPxmvIgeFkC6u7PMta2VBlvaJtl0mnjgx+RGc9PVhPUieRCwRspFdyqaN3O7po4Eo2miCHisiFI7qHHVYAmqbmlmUgiAG/6ATsFR1X5KsN1HuTSFMmrCw5U6vEIJZYnrNfUW/yXvCbrhJrm/oe5XpQqiyXaMFWFU2MO29hidKjnzXs8nwxvn7i+sfUx6B92YeE+jbh3xHE7Q3KrGyPVKRx7+6g9gPvd7nMHm6T0hZNjYb6aR6aUxZ9cw6D89Q4fsT+1lJxuUM8+XyUswCtCjQBR89nThYVJlfpBMTQLpxOnmWvr6+p7G9T69fZ8DRkd7dfru+fri/5SSeAey2q/5ROJ+mUz5wNVEszCvP3Tj9wYW8r4W/KnJbKMGevrR2mYA6bKQjID7dBDAAC4igsBFQ2EKPbdikDPnvddXwcFxkXvVSB2/qDAW3flgGcPQ675jw53ngnFf/C7cn1uJG6YTRwj+0G6//VHHpwUslubZntOPxO4Zig43msUJboe0URMSsKdDR6y4uR1e9XFP+bdN0fv4JDhA==",sidebar_class_name:"get api-method",info_path:"api/service-api/report-portal",custom_edit_url:null},v=void 0,y={id:"api/service-api/get-all-launch-names-using-get",title:"Get launch names of project",description:"Get launch names of project",source:"@site/docs/api/service-api/get-all-launch-names-using-get.api.mdx",sourceDirName:"api/service-api",slug:"/api/service-api/get-all-launch-names-using-get",permalink:"/docs/api/service-api/get-all-launch-names-using-get",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-all-launch-names-using-get",title:"Get launch names of project",description:"Get launch names of project",sidebar_label:"Get launch names of project",hide_title:!0,hide_table_of_contents:!0,api:"eJydVctu2zAQ/BVhT0nASHaAXnSqUQRp0CANkuZk+EBLa4stRTLkyqkh6N+LFWVHjp2iqC+GyeHs7OzDLZBcB8jnoGVjiuqysIa81Ro9LARYh16Ssua2hBzWSDOt73rgvawxPAdl1jfXP0CAk17WSOiZrAUja4QcVkoT+rQwlPYnApSBHF4a9FsQUGIovHIc4CTY40ujPJaQk29QQCgqrCXkLdDWMX8gr8wauk7sQzpvf2JB96NwTlJ1FO0Q9++RFgwOzpqAge+vJhP+OiT//g0EsJVoiG8vsgv+OmKV3ks2QhHW4VQ0/rBy57GQxPpWUgd8n8wNUhILmLANIbGrZEgQBNRIlR0K2JeKKsgh20yzduRCl0WGrGcAAQH9ZlfPxmvIgeFkC6u7PMta2VBlvaJtl0mnjgx+RGc9PVhPUieRCwRspFdyqaN3O7po4Eo2miCHisiFI7qHHVYAmqbmlmUgiAG/6ATsFR1X5KsN1HuTSFMmrCw5U6vEIJZYnrNfUW/yXvCbrhJrm/oe5XpQqiyXaMFWFU2MO29hidKjnzXs8nwxvn7i+sfUx6B92YeE+jbh3xHE7Q3KrGyPVKRx7+6g9gPvd7nMHm6T0hZNjYb6aR6aUxZ9cw6D89Q4fsT+1lJxuUM8+XyUswCtCjQBR89nThYVJlfpBMTQLpxOnmWvr6+p7G9T69fZ8DRkd7dfru+fri/5SSeAey2q/5ROJ+mUz5wNVEszCvP3Tj9wYW8r4W/KnJbKMGevrR2mYA6bKQjID7dBDAAC4igsBFQ2EKPbdikDPnvddXwcFxkXvVSB2/qDAW3flgGcPQ675jw53ngnFf/C7cn1uJG6YTRwj+0G6//VHHpwUslubZntOPxO4Zig43msUJboe0URMSsKdDR6y4uR1e9XFP+bdN0fv4JDhA==",sidebar_class_name:"get api-method",info_path:"api/service-api/report-portal",custom_edit_url:null},sidebar:"serviceApi",previous:{title:"Get launches of specified project from DEBUG mode",permalink:"/docs/api/service-api/get-debug-launches-using-get"},next:{title:"Get all unique owners of project launches",permalink:"/docs/api/service-api/get-all-owners-using-get"}},w={},A=[{value:"Request",id:"request",level:2}];function Q(e){const a={h2:"h2",p:"p",...(0,i.a)(),...e.components},{Details:s}=a;return s||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h1",{className:"openapi__heading",children:(0,n.jsx)(a.p,{children:"Get launch names of project"})}),"\n",(0,n.jsx)(c(),{method:"get",path:"/v1/{projectName}/launch/names"}),"\n",(0,n.jsx)(a.p,{children:"Get launch names of project"}),"\n",(0,n.jsx)(a.h2,{id:"request",children:"Request"}),"\n",(0,n.jsxs)(s,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,n.jsx)("summary",{style:{},children:(0,n.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,n.jsx)(a.p,{children:"Path Parameters"})})}),(0,n.jsx)("div",{children:(0,n.jsx)("ul",{children:(0,n.jsx)(p(),{className:"paramsItem",param:{name:"projectName",in:"path",description:"projectName",required:!0,schema:{type:"string"}}})})})]}),"\n",(0,n.jsxs)(s,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,n.jsx)("summary",{style:{},children:(0,n.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,n.jsx)(a.p,{children:"Query Parameters"})})}),(0,n.jsx)("div",{children:(0,n.jsx)("ul",{children:(0,n.jsx)(p(),{className:"paramsItem",param:{name:"filter.cnt.name",in:"query",description:"filter.cnt.name",required:!0,schema:{type:"string"}}})})})]}),"\n",(0,n.jsx)("div",{children:(0,n.jsx)("div",{children:(0,n.jsx)(t(),{label:void 0,id:void 0,children:(0,n.jsxs)(x.default,{label:"200",value:"200",children:[(0,n.jsx)("div",{children:(0,n.jsx)(a.p,{children:"OK"})}),(0,n.jsx)("div",{children:(0,n.jsx)(o(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,n.jsx)(x.default,{label:"*/*",value:"*/*",children:(0,n.jsxs)(g(),{className:"openapi-tabs__schema",children:[(0,n.jsx)(x.default,{label:"Schema",value:"Schema",children:(0,n.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,n.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,n.jsx)("strong",{children:(0,n.jsx)(a.p,{children:"Schema"})})}),(0,n.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,n.jsx)("li",{children:(0,n.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,n.jsx)(a.p,{children:"Array ["})})}),(0,n.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem",marginLeft:"1rem"},children:(0,n.jsx)(a.p,{children:"string"})}),(0,n.jsx)("li",{children:(0,n.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,n.jsx)(a.p,{children:"]"})})})]})]})}),(0,n.jsx)(x.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,n.jsx)(u(),{responseExample:'[\n  "string"\n]',language:"json"})})]})})})})]})})})})]})}function R(e={}){const{wrapper:a}={...(0,i.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(Q,{...e})}):Q(e)}}}]);