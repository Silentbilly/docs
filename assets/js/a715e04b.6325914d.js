"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6945],{73012:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>y,contentTitle:()=>x,default:()=>w,frontMatter:()=>v,metadata:()=>b,toc:()=>q});var a=i(85893),s=i(11151),r=i(58219),n=i.n(r),l=(i(62316),i(51039)),d=i.n(l),c=(i(82723),i(9487)),u=i.n(c),o=i(41429),p=i.n(o),m=i(5397),h=i.n(m),f=(i(4667),i(9472)),j=i.n(f),g=(i(1176),i(12005),i(85162));const v={id:"get-attribute-values-using-get-1",title:"Get all unique attribute values of specified launch",description:"Get all unique attribute values of specified launch",sidebar_label:"Get all unique attribute values of specified launch",hide_title:!0,hide_table_of_contents:!0,api:"eJydVd9P2zAQ/lesewJkEkDbHvK0akIMMW1owF5QNZnk2nhzbGNfyqoo//t0SZq2lF+iL1Ht+/Hdd9+dGyA1j5DdAmGkQ01YHebOUnDGYICpBOcxKNLOnheQwRxpQhT0XU34S5ka403Udn52ev37GCR4FVSFhIFDNmBVhZDBTBvCkOSWErXlDBK0hQzuawxLkFBgzIP2nO0Vt4D3tQ5YQEahRgkxL7FSkDVAS885IwVt59C28jEMvF+Hu8DlmzDs+rwloVG1zcuXE4w2r1akLeEcA0iYuVAp6o8+fdhK6YP7gzl9539DXq+o3Em7bfd2NqdsHL2zESPfnxwd8Wc7+I8LkMAqQkt8e5Ae8GcnqgpBdfwTVvGpbPxj5D5grojxzZSJ+LiYMyShjBG11fc1irFTYtEpVLiZiB5zPdNYiJHwCql0g6Y76VIJGaSL47TZYKdNGV06xkz7mKwADIuV0OtgIAP2I5c702Zp2qiaShc0LdtUeb3TgZ/oXaBLF0gZ0ccCCQsVtLozPbmrcD3DM1UbbnpJ5ONOuMuVrQS0dcUTzYYgB/tpK2FEtNuyry6SYA0JZQvByMSengmLWGCxzwz2eMVjwGtcBVYuCZ2V74wS7biHU6Yqr/u8tw3coQoYJjXTfTvdvL5igfSlbxqNuhgK6nTE/3sj1j9oO3OdpSaDI7sD2me4X9UyuTwXhcvrCi11m25Qr8o79Q6TdVV7dmJ+K6W53bE/+bxTswSjc7QRN9wnXuUlipPkCOQgFy4nS9OHh4dEdbeJC/N0cI3pt/Mvp9+vTg/ZpZXAWuvRf0yOj5JjPvMuUqXsRpr3jcIWOyPdhP8o9UZpy7k6zM0wJrew4HWfPVo3hBVIGJN2eu6mZSqhdJHYsWnuVMSbYNqWj/utyLoodGTlPzPkzXqhwN7PYV/ti5feiCfL+IvLV56WDjJkALxW3w7q2ZfidRi7Pu/EsEHM2NsX0o8263TT9Qp6f1O2VfEkgNULYLeqXQHbDNDy5ipRFRg6RL3FJM/R04YvvzGMftzqZ6fX0Lb/Aa5SEtk=",sidebar_class_name:"get api-method",info_path:"api/service-api/report-portal",custom_edit_url:null},x=void 0,b={id:"api/service-api/get-attribute-values-using-get-1",title:"Get all unique attribute values of specified launch",description:"Get all unique attribute values of specified launch",source:"@site/docs/api/service-api/get-attribute-values-using-get-1.api.mdx",sourceDirName:"api/service-api",slug:"/api/service-api/get-attribute-values-using-get-1",permalink:"/docs/api/service-api/get-attribute-values-using-get-1",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-attribute-values-using-get-1",title:"Get all unique attribute values of specified launch",description:"Get all unique attribute values of specified launch",sidebar_label:"Get all unique attribute values of specified launch",hide_title:!0,hide_table_of_contents:!0,api:"eJydVd9P2zAQ/lesewJkEkDbHvK0akIMMW1owF5QNZnk2nhzbGNfyqoo//t0SZq2lF+iL1Ht+/Hdd9+dGyA1j5DdAmGkQ01YHebOUnDGYICpBOcxKNLOnheQwRxpQhT0XU34S5ka403Udn52ev37GCR4FVSFhIFDNmBVhZDBTBvCkOSWErXlDBK0hQzuawxLkFBgzIP2nO0Vt4D3tQ5YQEahRgkxL7FSkDVAS885IwVt59C28jEMvF+Hu8DlmzDs+rwloVG1zcuXE4w2r1akLeEcA0iYuVAp6o8+fdhK6YP7gzl9539DXq+o3Em7bfd2NqdsHL2zESPfnxwd8Wc7+I8LkMAqQkt8e5Ae8GcnqgpBdfwTVvGpbPxj5D5grojxzZSJ+LiYMyShjBG11fc1irFTYtEpVLiZiB5zPdNYiJHwCql0g6Y76VIJGaSL47TZYKdNGV06xkz7mKwADIuV0OtgIAP2I5c702Zp2qiaShc0LdtUeb3TgZ/oXaBLF0gZ0ccCCQsVtLozPbmrcD3DM1UbbnpJ5ONOuMuVrQS0dcUTzYYgB/tpK2FEtNuyry6SYA0JZQvByMSengmLWGCxzwz2eMVjwGtcBVYuCZ2V74wS7biHU6Yqr/u8tw3coQoYJjXTfTvdvL5igfSlbxqNuhgK6nTE/3sj1j9oO3OdpSaDI7sD2me4X9UyuTwXhcvrCi11m25Qr8o79Q6TdVV7dmJ+K6W53bE/+bxTswSjc7QRN9wnXuUlipPkCOQgFy4nS9OHh4dEdbeJC/N0cI3pt/Mvp9+vTg/ZpZXAWuvRf0yOj5JjPvMuUqXsRpr3jcIWOyPdhP8o9UZpy7k6zM0wJrew4HWfPVo3hBVIGJN2eu6mZSqhdJHYsWnuVMSbYNqWj/utyLoodGTlPzPkzXqhwN7PYV/ti5feiCfL+IvLV56WDjJkALxW3w7q2ZfidRi7Pu/EsEHM2NsX0o8263TT9Qp6f1O2VfEkgNULYLeqXQHbDNDy5ipRFRg6RL3FJM/R04YvvzGMftzqZ6fX0Lb/Aa5SEtk=",sidebar_class_name:"get api-method",info_path:"api/service-api/report-portal",custom_edit_url:null},sidebar:"serviceApi",previous:{title:"Get all unique attribute keys of specified launch",permalink:"/docs/api/service-api/get-attribute-keys-for-project-using-get"},next:{title:"Load history of test items",permalink:"/docs/api/service-api/get-items-history-using-get"}},y={},q=[{value:"Request",id:"request",level:2}];function k(e){const t={h2:"h2",p:"p",...(0,s.a)(),...e.components},{Details:i}=t;return i||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h1",{className:"openapi__heading",children:(0,a.jsx)(t.p,{children:"Get all unique attribute values of specified launch"})}),"\n",(0,a.jsx)(d(),{method:"get",path:"/v1/{projectName}/item/attribute/values"}),"\n",(0,a.jsx)(t.p,{children:"Get all unique attribute values of specified launch"}),"\n",(0,a.jsx)(t.h2,{id:"request",children:"Request"}),"\n",(0,a.jsxs)(i,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,a.jsx)("summary",{style:{},children:(0,a.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,a.jsx)(t.p,{children:"Path Parameters"})})}),(0,a.jsx)("div",{children:(0,a.jsx)("ul",{children:(0,a.jsx)(p(),{className:"paramsItem",param:{name:"projectName",in:"path",description:"projectName",required:!0,schema:{type:"string"}}})})})]}),"\n",(0,a.jsxs)(i,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,a.jsx)("summary",{style:{},children:(0,a.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,a.jsx)(t.p,{children:"Query Parameters"})})}),(0,a.jsx)("div",{children:(0,a.jsxs)("ul",{children:[(0,a.jsx)(p(),{className:"paramsItem",param:{name:"filter.cnt.attributeValue",in:"query",description:"filter.cnt.attributeValue",required:!0,schema:{type:"string"}}}),(0,a.jsx)(p(),{className:"paramsItem",param:{name:"filter.eq.attributeKey",in:"query",description:"filter.eq.attributeKey",schema:{type:"string"}}}),(0,a.jsx)(p(),{className:"paramsItem",param:{name:"launch",in:"query",description:"launch",required:!0,schema:{type:"integer",format:"int64"}}})]})})]}),"\n",(0,a.jsx)("div",{children:(0,a.jsx)("div",{children:(0,a.jsx)(n(),{label:void 0,id:void 0,children:(0,a.jsxs)(g.default,{label:"200",value:"200",children:[(0,a.jsx)("div",{children:(0,a.jsx)(t.p,{children:"OK"})}),(0,a.jsx)("div",{children:(0,a.jsx)(u(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,a.jsx)(g.default,{label:"*/*",value:"*/*",children:(0,a.jsxs)(j(),{className:"openapi-tabs__schema",children:[(0,a.jsx)(g.default,{label:"Schema",value:"Schema",children:(0,a.jsxs)(i,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,a.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,a.jsx)("strong",{children:(0,a.jsx)(t.p,{children:"Schema"})})}),(0,a.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,a.jsx)("li",{children:(0,a.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,a.jsx)(t.p,{children:"Array ["})})}),(0,a.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem",marginLeft:"1rem"},children:(0,a.jsx)(t.p,{children:"string"})}),(0,a.jsx)("li",{children:(0,a.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,a.jsx)(t.p,{children:"]"})})})]})]})}),(0,a.jsx)(g.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,a.jsx)(h(),{responseExample:'[\n  "string"\n]',language:"json"})})]})})})})]})})})})]})}function w(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(k,{...e})}):k(e)}}}]);