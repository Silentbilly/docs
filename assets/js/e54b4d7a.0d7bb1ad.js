"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5762],{18922:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>q,contentTitle:()=>b,default:()=>y,frontMatter:()=>x,metadata:()=>w,toc:()=>v});var t=s(85893),i=s(11151),r=s(58219),n=s.n(r),l=(s(62316),s(51039)),d=s.n(l),c=(s(82723),s(9487)),m=s.n(c),p=s(41429),o=s.n(p),g=s(5397),h=s.n(g),u=(s(4667),s(9472)),j=s.n(u),f=(s(1176),s(12005),s(85162));const x={id:"get-widget-names-using-get",title:"Load all widget names which belong to a user",description:"Load all widget names which belong to a user",sidebar_label:"Load all widget names which belong to a user",hide_title:!0,hide_table_of_contents:!0,api:"eJzFV81y20YMfpUdXGJnGNJ2fw481dO6raep64mb6cGjw4qExG2XuzQWlKKqfKI8Qm55sg5ISqZiWZZcz/QijXYBfB/ADyC0BNbTAOktzE0+RX6TecfkrUWCUQS+QtJsvLvMIYUp8h+t1ZUuMbwPxk1/uvgdIqg06RIZSSItwekSIYWJsYwU412cY8jIVBIIIjAOUrirkRYQwfAqhR9bl6DGC/VqcPMKIghZgaWGdAm8qCR8YDJuCk0TbUE0+f5AJt8a3zjGKRJEMPFUau6Ovv36EcT2YG9MsT48Kz93LaE9QVrzw1Eq8n9ixpcHlHDt8vxKVnqKsXzsRn2HobYclFiqha/VXDtW7BUhk8EZqqOTOL463p/HV2cPeQTz9xM8rupyjKT8RBFmnvKgKiTV8/8vyJ54N/KNJzZuqjIyjGS0Mk5xgaqLnKqKpGt5EakjHbJ/xPk4Vj/gRNeWlcRXnnIkZYLSIUOXGzeN1a+1ZVNZ7CzWwTWhCnVVeWLMY8mNF7bVi6cSIsAPlfU5QspU45bMNZGWHAxjGbYpcFiATkVXg06qNBcPKrBpR3hXG8L8UQprqJEYh8q7gC2Vs5MT+doM/tsvEIFMQXQst6+T1/I1iGq4LcAlI+mxxc8f/VjofP4E0QqyO5HsmkbYV4SZZuE40Tbglwm99TpX2lrVDWEl9QhqXpisUGO03k1F4VrVodVQiVz4fiC305cLSCGZnSbLQWmapIuWtNESba08PaTZakzXZCEFcWGfedukSbLUNReeDC+aRFdmS/eJEK49sbaqiwURzDQZqURb1FW4rrKt6CCFgrkKD8Jdr2wjQFeX8hoSQ4h6+1ETwZrRw0f1sw9drZR2uRJm6shMlEPMMT+W3uz4qi8J3/PKsfQxtVZVaxQbL49tJKXK6g73dglj1IR0Xkulb0fD6xsRRpf60Gitvj6hVj/yuzOSxgfjJn6oqA22j9R+lcv59aXKfVaX6Fj3L1ZRrc5a1fYdddN1rtS31EYed9/L3z3IOQJrMnQBB+7nlc4KVGfxCUS9XCSdNEnm83ms29vY0zTpXUPy9vL7i6ubizfi0kQgWuvYfxOfnsSnclb5wKV2A5gD5b9RlnWdGT9wUlltnIC0ZJd9a9zC7BQiSDfnRgcGUctCtCkdMoqg8IHFZ7kc64DvyTaNHHfDWLSQmyBqf6SZl/fDY9c6s5X1X7jYsTfNtK3FB2RkPo9Et+rshd1uUC8Audp09gLtl6gXgF3vPnvhrharFwDeWIX2Ah/uW88kcMBWtIPScAV7JpGda9FT0P3W9Uzo/3kvejK5bg7fJze6f3EeOFaO3vUrz7HaHGlbOawWMbcYwq+5DQI08r4tUOdILaPO4jzLsBpSl41I2K/XEPkT2DT/ApMS5QI=",sidebar_class_name:"get api-method",info_path:"api/service-api/report-portal",custom_edit_url:null},b=void 0,w={id:"api/service-api/get-widget-names-using-get",title:"Load all widget names which belong to a user",description:"Load all widget names which belong to a user",source:"@site/docs/api/service-api/get-widget-names-using-get.api.mdx",sourceDirName:"api/service-api",slug:"/api/service-api/get-widget-names-using-get",permalink:"/docs/api/service-api/get-widget-names-using-get",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-widget-names-using-get",title:"Load all widget names which belong to a user",description:"Load all widget names which belong to a user",sidebar_label:"Load all widget names which belong to a user",hide_title:!0,hide_table_of_contents:!0,api:"eJzFV81y20YMfpUdXGJnGNJ2fw481dO6raep64mb6cGjw4qExG2XuzQWlKKqfKI8Qm55sg5ISqZiWZZcz/QijXYBfB/ADyC0BNbTAOktzE0+RX6TecfkrUWCUQS+QtJsvLvMIYUp8h+t1ZUuMbwPxk1/uvgdIqg06RIZSSItwekSIYWJsYwU412cY8jIVBIIIjAOUrirkRYQwfAqhR9bl6DGC/VqcPMKIghZgaWGdAm8qCR8YDJuCk0TbUE0+f5AJt8a3zjGKRJEMPFUau6Ovv36EcT2YG9MsT48Kz93LaE9QVrzw1Eq8n9ixpcHlHDt8vxKVnqKsXzsRn2HobYclFiqha/VXDtW7BUhk8EZqqOTOL463p/HV2cPeQTz9xM8rupyjKT8RBFmnvKgKiTV8/8vyJ54N/KNJzZuqjIyjGS0Mk5xgaqLnKqKpGt5EakjHbJ/xPk4Vj/gRNeWlcRXnnIkZYLSIUOXGzeN1a+1ZVNZ7CzWwTWhCnVVeWLMY8mNF7bVi6cSIsAPlfU5QspU45bMNZGWHAxjGbYpcFiATkVXg06qNBcPKrBpR3hXG8L8UQprqJEYh8q7gC2Vs5MT+doM/tsvEIFMQXQst6+T1/I1iGq4LcAlI+mxxc8f/VjofP4E0QqyO5HsmkbYV4SZZuE40Tbglwm99TpX2lrVDWEl9QhqXpisUGO03k1F4VrVodVQiVz4fiC305cLSCGZnSbLQWmapIuWtNESba08PaTZakzXZCEFcWGfedukSbLUNReeDC+aRFdmS/eJEK49sbaqiwURzDQZqURb1FW4rrKt6CCFgrkKD8Jdr2wjQFeX8hoSQ4h6+1ETwZrRw0f1sw9drZR2uRJm6shMlEPMMT+W3uz4qi8J3/PKsfQxtVZVaxQbL49tJKXK6g73dglj1IR0Xkulb0fD6xsRRpf60Gitvj6hVj/yuzOSxgfjJn6oqA22j9R+lcv59aXKfVaX6Fj3L1ZRrc5a1fYdddN1rtS31EYed9/L3z3IOQJrMnQBB+7nlc4KVGfxCUS9XCSdNEnm83ms29vY0zTpXUPy9vL7i6ubizfi0kQgWuvYfxOfnsSnclb5wKV2A5gD5b9RlnWdGT9wUlltnIC0ZJd9a9zC7BQiSDfnRgcGUctCtCkdMoqg8IHFZ7kc64DvyTaNHHfDWLSQmyBqf6SZl/fDY9c6s5X1X7jYsTfNtK3FB2RkPo9Et+rshd1uUC8Audp09gLtl6gXgF3vPnvhrharFwDeWIX2Ah/uW88kcMBWtIPScAV7JpGda9FT0P3W9Uzo/3kvejK5bg7fJze6f3EeOFaO3vUrz7HaHGlbOawWMbcYwq+5DQI08r4tUOdILaPO4jzLsBpSl41I2K/XEPkT2DT/ApMS5QI=",sidebar_class_name:"get api-method",info_path:"api/service-api/report-portal",custom_edit_url:null},sidebar:"serviceApi",previous:{title:"Get multilevel widget by ID",permalink:"/docs/api/service-api/get-widget-using-get"},next:{title:"Get widget preview",permalink:"/docs/api/service-api/get-widget-preview-using-post"}},q={},v=[{value:"Request",id:"request",level:2}];function I(e){const a={h2:"h2",p:"p",...(0,i.a)(),...e.components},{Details:s}=a;return s||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("h1",{className:"openapi__heading",children:(0,t.jsx)(a.p,{children:"Load all widget names which belong to a user"})}),"\n",(0,t.jsx)(d(),{method:"get",path:"/v1/{projectName}/widget/names/all"}),"\n",(0,t.jsx)(a.p,{children:"Load all widget names which belong to a user"}),"\n",(0,t.jsx)(a.h2,{id:"request",children:"Request"}),"\n",(0,t.jsxs)(s,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,t.jsx)("summary",{style:{},children:(0,t.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,t.jsx)(a.p,{children:"Path Parameters"})})}),(0,t.jsx)("div",{children:(0,t.jsx)("ul",{children:(0,t.jsx)(o(),{className:"paramsItem",param:{name:"projectName",in:"path",description:"projectName",required:!0,schema:{type:"string"}}})})})]}),"\n",(0,t.jsxs)(s,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,t.jsx)("summary",{style:{},children:(0,t.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,t.jsx)(a.p,{children:"Query Parameters"})})}),(0,t.jsx)("div",{children:(0,t.jsxs)("ul",{children:[(0,t.jsx)(o(),{className:"paramsItem",param:{name:"filter.eq.description",in:"query",description:"Filters by 'description'",schema:{type:"string"}}}),(0,t.jsx)(o(),{className:"paramsItem",param:{name:"filter.eq.id",in:"query",description:"Filters by 'id'",schema:{type:"integer",format:"int64"}}}),(0,t.jsx)(o(),{className:"paramsItem",param:{name:"filter.eq.name",in:"query",description:"Filters by 'name'",schema:{type:"string"}}}),(0,t.jsx)(o(),{className:"paramsItem",param:{name:"filter.eq.owner",in:"query",description:"Filters by 'owner'",schema:{type:"string"}}}),(0,t.jsx)(o(),{className:"paramsItem",param:{name:"filter.eq.projectId",in:"query",description:"Filters by 'projectId'",schema:{type:"integer",format:"int64"}}}),(0,t.jsx)(o(),{className:"paramsItem",param:{name:"page.page",in:"query",description:"Results page you want to retrieve (0..N)",schema:{type:"integer",format:"int32"}}}),(0,t.jsx)(o(),{className:"paramsItem",param:{name:"page.size",in:"query",description:"Number of records per page",schema:{type:"integer",format:"int32"}}}),(0,t.jsx)(o(),{className:"paramsItem",param:{name:"page.sort",in:"query",description:"Sorting criteria in the format: property, (asc|desc). Default sort order is ascending. Multiple sort criteria are supported.",style:"form",explode:!0,schema:{type:"array",items:{type:"string"}}}})]})})]}),"\n",(0,t.jsx)("div",{children:(0,t.jsx)("div",{children:(0,t.jsx)(n(),{label:void 0,id:void 0,children:(0,t.jsxs)(f.default,{label:"200",value:"200",children:[(0,t.jsx)("div",{children:(0,t.jsx)(a.p,{children:"OK"})}),(0,t.jsx)("div",{children:(0,t.jsx)(m(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,t.jsx)(f.default,{label:"*/*",value:"*/*",children:(0,t.jsxs)(j(),{className:"openapi-tabs__schema",children:[(0,t.jsx)(f.default,{label:"Schema",value:"Schema",children:(0,t.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,t.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,t.jsx)("strong",{children:(0,t.jsx)(a.p,{children:"Schema"})})}),(0,t.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,t.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,t.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem",marginLeft:"1rem"},children:(0,t.jsx)(a.p,{children:"object"})})})]})}),(0,t.jsx)(f.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,t.jsx)(h(),{responseExample:"{}",language:"json"})})]})})})})]})})})})]})}function y(e={}){const{wrapper:a}={...(0,i.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(I,{...e})}):I(e)}}}]);