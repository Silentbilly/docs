"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8925],{68936:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>I,contentTitle:()=>j,default:()=>k,frontMatter:()=>y,metadata:()=>b,toc:()=>G});var r=a(85893),t=a(11151),i=a(58219),l=a.n(i),n=(a(62316),a(51039)),p=a.n(n),m=(a(82723),a(9487)),d=a.n(m),c=a(41429),o=a.n(c),f=a(5397),u=a.n(f),h=(a(4667),a(9472)),x=a.n(h),g=(a(1176),a(12005),a(85162));const y={id:"get-all-filters-using-get",title:"Get filters",description:"Get filters",sidebar_label:"Get filters",hide_title:!0,hide_table_of_contents:!0,api:"eJzFV81y4zYMfhUOLpvsMFKS/hx0aqZNt5m2aSZpThkfaAm22UokF4Sc9bp6oj5Cb/tkHUiyI6+dxEl3phdrTH3E9wEEQGgJbKYRsjuoI9LRxJaMdJR7x+TLEglGGnxAMmy9uygggynyWVn+2ALjbbRu+u78d9AQDJkKZRGyuyU4UyFk0BlM8H1iC9BgHWTwvkZagIYCY042iGXIoLeoxgv1xhZvQEPMZ1gZyJbAiyDGrGOcIoGGiafKcLf07dfQNHoHY7uwN6egd7JGJuumj3D4e9cK2pOkhb+cJZD/A3O+eEEI11teH8lgppjIz9Os1xjrkqMSpFr4Wt0bx4q9ImSyOEd1cJwkl4f76/jqdFtHtB+f0XFZV2Mk5SeKMPdURBWQVK//vzB74qeZbzyxdVOVk2Uka5R1imeoOsuZCiQlxAutDkzM/5LNh4n6ASemLlmJfeWpQFI2KhNzdIV100T9WpdsQ4kdYm3cEKpYh+CJsUjEN16Ubb54qkADfgilLxAyphp3eG6IjPhgGau4KwOHAeiy6HJQScHwbCsCmzjC97UlLB6VsKYaCTgG7yK2Uk6Pj+Wxafy3n0GDtCR0LG/fpm/lMbBquQ3ABSOZcYmf/r6NSF01XGP0NeX46R/QK3o/FrHiadOIJ4EwNyx6J6aM+Llz75BVV4sRNFTIM983wrbt8QwySOcn6XIQhSbtdsjxIM1XXbGmEjIQIPvcl02WpktT88yT5UWTmmB3lJec9JUnNqXqbIGGuSErrrZRW5nrQtdmFWQwYw5xy9zVCqsBXV1J5xcg6B4/ajSsFW2fxU8+spLkUMYVSpSpAztRDrHA4lCKr9OrPhf8oKvAyifUokILSqyXsxhJqPK6471bwhgNIZ3VEt+70fD1jZx85/oQtE6v3qE2QeR/B5LKBusmfpgyG2ofif3Kl7OrC1X4vK7QcXsf9mlp8jYt+5K56UpT4lsZK8fdF+t3Wz5rKG2OLuJg+1kw+QzVaXIMuk8XcSdL0/v7+8S0bxNP07TfGtNfLr4/v7w5P5ItjQbJtU79N8nJcXIia8FHrowb0Gzm9IbX6zAyfuA0lMY6sdFqWfb5fgfzE9CQbdZ9n/IjDTMfWVDL5dhEvKWyaWS5a59yuIWNkr6PlNzyodx3zAU75f2Ji+1xY27KWqAgLe11lKuxYC/SfuL4ArTrQWEv3tUU8gWIN+aGvciHw8krBbxghHhC0nBeeaWQJ2eI56j7EeWV1P/zEPGsc11Pe3Bu9HAJvbCiD677+eBQbfaPnRpWU4tbDOnX2gYGGrm7ZmgKpFZRhzjLcwxD6TI+iPr1RS7fL03zL0Gtdpo=",sidebar_class_name:"get api-method",info_path:"api/service-api/report-portal",custom_edit_url:null},j=void 0,b={id:"api/service-api/get-all-filters-using-get",title:"Get filters",description:"Get filters",source:"@site/docs/api/service-api/get-all-filters-using-get.api.mdx",sourceDirName:"api/service-api",slug:"/api/service-api/get-all-filters-using-get",permalink:"/docs/api/service-api/get-all-filters-using-get",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-all-filters-using-get",title:"Get filters",description:"Get filters",sidebar_label:"Get filters",hide_title:!0,hide_table_of_contents:!0,api:"eJzFV81y4zYMfhUOLpvsMFKS/hx0aqZNt5m2aSZpThkfaAm22UokF4Sc9bp6oj5Cb/tkHUiyI6+dxEl3phdrTH3E9wEEQGgJbKYRsjuoI9LRxJaMdJR7x+TLEglGGnxAMmy9uygggynyWVn+2ALjbbRu+u78d9AQDJkKZRGyuyU4UyFk0BlM8H1iC9BgHWTwvkZagIYCY042iGXIoLeoxgv1xhZvQEPMZ1gZyJbAiyDGrGOcIoGGiafKcLf07dfQNHoHY7uwN6egd7JGJuumj3D4e9cK2pOkhb+cJZD/A3O+eEEI11teH8lgppjIz9Os1xjrkqMSpFr4Wt0bx4q9ImSyOEd1cJwkl4f76/jqdFtHtB+f0XFZV2Mk5SeKMPdURBWQVK//vzB74qeZbzyxdVOVk2Uka5R1imeoOsuZCiQlxAutDkzM/5LNh4n6ASemLlmJfeWpQFI2KhNzdIV100T9WpdsQ4kdYm3cEKpYh+CJsUjEN16Ubb54qkADfgilLxAyphp3eG6IjPhgGau4KwOHAeiy6HJQScHwbCsCmzjC97UlLB6VsKYaCTgG7yK2Uk6Pj+Wxafy3n0GDtCR0LG/fpm/lMbBquQ3ABSOZcYmf/r6NSF01XGP0NeX46R/QK3o/FrHiadOIJ4EwNyx6J6aM+Llz75BVV4sRNFTIM983wrbt8QwySOcn6XIQhSbtdsjxIM1XXbGmEjIQIPvcl02WpktT88yT5UWTmmB3lJec9JUnNqXqbIGGuSErrrZRW5nrQtdmFWQwYw5xy9zVCqsBXV1J5xcg6B4/ajSsFW2fxU8+spLkUMYVSpSpAztRDrHA4lCKr9OrPhf8oKvAyifUokILSqyXsxhJqPK6471bwhgNIZ3VEt+70fD1jZx85/oQtE6v3qE2QeR/B5LKBusmfpgyG2ofif3Kl7OrC1X4vK7QcXsf9mlp8jYt+5K56UpT4lsZK8fdF+t3Wz5rKG2OLuJg+1kw+QzVaXIMuk8XcSdL0/v7+8S0bxNP07TfGtNfLr4/v7w5P5ItjQbJtU79N8nJcXIia8FHrowb0Gzm9IbX6zAyfuA0lMY6sdFqWfb5fgfzE9CQbdZ9n/IjDTMfWVDL5dhEvKWyaWS5a59yuIWNkr6PlNzyodx3zAU75f2Ji+1xY27KWqAgLe11lKuxYC/SfuL4ArTrQWEv3tUU8gWIN+aGvciHw8krBbxghHhC0nBeeaWQJ2eI56j7EeWV1P/zEPGsc11Pe3Bu9HAJvbCiD677+eBQbfaPnRpWU4tbDOnX2gYGGrm7ZmgKpFZRhzjLcwxD6TI+iPr1RS7fL03zL0Gtdpo=",sidebar_class_name:"get api-method",info_path:"api/service-api/report-portal",custom_edit_url:null},sidebar:"serviceApi",previous:{title:"user-filter-controller",permalink:"/docs/api/service-api/user-filter-controller"},next:{title:"Update list of user filters",permalink:"/docs/api/service-api/update-user-filters-using-put"}},I={},G=[{value:"Request",id:"request",level:2}];function v(e){const s={h2:"h2",p:"p",...(0,t.a)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h1",{className:"openapi__heading",children:(0,r.jsx)(s.p,{children:"Get filters"})}),"\n",(0,r.jsx)(p(),{method:"get",path:"/v1/{projectName}/filter"}),"\n",(0,r.jsx)(s.p,{children:"Get filters"}),"\n",(0,r.jsx)(s.h2,{id:"request",children:"Request"}),"\n",(0,r.jsxs)(a,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,r.jsx)("summary",{style:{},children:(0,r.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,r.jsx)(s.p,{children:"Path Parameters"})})}),(0,r.jsx)("div",{children:(0,r.jsx)("ul",{children:(0,r.jsx)(o(),{className:"paramsItem",param:{name:"projectName",in:"path",description:"projectName",required:!0,schema:{type:"string"}}})})})]}),"\n",(0,r.jsxs)(a,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,r.jsx)("summary",{style:{},children:(0,r.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,r.jsx)(s.p,{children:"Query Parameters"})})}),(0,r.jsx)("div",{children:(0,r.jsxs)("ul",{children:[(0,r.jsx)(o(),{className:"paramsItem",param:{name:"filter.eq.id",in:"query",description:"Filters by 'id'",schema:{type:"integer",format:"int64"}}}),(0,r.jsx)(o(),{className:"paramsItem",param:{name:"filter.eq.name",in:"query",description:"Filters by 'name'",schema:{type:"string"}}}),(0,r.jsx)(o(),{className:"paramsItem",param:{name:"filter.eq.owner",in:"query",description:"Filters by 'owner'",schema:{type:"string"}}}),(0,r.jsx)(o(),{className:"paramsItem",param:{name:"filter.eq.projectId",in:"query",description:"Filters by 'projectId'",schema:{type:"integer",format:"int64"}}}),(0,r.jsx)(o(),{className:"paramsItem",param:{name:"page.page",in:"query",description:"Results page you want to retrieve (0..N)",schema:{type:"integer",format:"int32"}}}),(0,r.jsx)(o(),{className:"paramsItem",param:{name:"page.size",in:"query",description:"Number of records per page",schema:{type:"integer",format:"int32"}}}),(0,r.jsx)(o(),{className:"paramsItem",param:{name:"page.sort",in:"query",description:"Sorting criteria in the format: property, (asc|desc). Default sort order is ascending. Multiple sort criteria are supported.",style:"form",explode:!0,schema:{type:"array",items:{type:"string"}}}})]})})]}),"\n",(0,r.jsx)("div",{children:(0,r.jsx)("div",{children:(0,r.jsx)(l(),{label:void 0,id:void 0,children:(0,r.jsxs)(g.default,{label:"200",value:"200",children:[(0,r.jsx)("div",{children:(0,r.jsx)(s.p,{children:"OK"})}),(0,r.jsx)("div",{children:(0,r.jsx)(d(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,r.jsx)(g.default,{label:"*/*",value:"*/*",children:(0,r.jsxs)(x(),{className:"openapi-tabs__schema",children:[(0,r.jsx)(g.default,{label:"Schema",value:"Schema",children:(0,r.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,r.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,r.jsx)("strong",{children:(0,r.jsx)(s.p,{children:"Schema"})})}),(0,r.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,r.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem",marginLeft:"1rem"},children:(0,r.jsx)(s.p,{children:"object"})})})]})}),(0,r.jsx)(g.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,r.jsx)(u(),{responseExample:"{}",language:"json"})})]})})})})]})})})})]})}function k(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(v,{...e})}):v(e)}}}]);