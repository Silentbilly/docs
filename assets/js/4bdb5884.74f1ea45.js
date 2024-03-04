"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2290],{22447:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>Q,contentTitle:()=>y,default:()=>_,frontMatter:()=>b,metadata:()=>N,toc:()=>S});var i=t(85893),s=t(11151),n=t(58219),r=t.n(n),l=(t(62316),t(51039)),c=t.n(l),d=(t(82723),t(9487)),p=t.n(d),o=t(41429),m=t.n(o),u=t(5397),h=t.n(u),j=t(4667),g=t.n(j),x=t(9472),f=t.n(x),v=(t(1176),t(12005),t(85162));const b={id:"update-project-integration-using-put",title:"Update project integration instance",description:"Update project integration instance",sidebar_label:"Update project integration instance",hide_title:!0,hide_table_of_contents:!0,api:"eJydVk1z0zAQ/SuePQGjxC0DHHyidDpDBgZCSk8lh429SQS2JCS5acbj/86s5Dh20xaG3CLtx9u3b1duwOPGQXYLUnnaWPRSq0mulbe6LMnCUoA2FM9nBWRQmwI9za3+SbmfHZ1unFSb+c13EGDQYkWeLAduQGFFkA0TzAoQIBVkYNBvQUBBLrfS8N0jlpZ+19JSAZm3NQlw+ZYqhKwBvzd9aLIgYK1thT4evXsDbSv6/CZC/sL/nss+tvtrbuetVBto22U0Juc/6GLPFuO4kbhFNAEBTDIpz4ZoTCnzUHD607F1M0wkfcmZBmQvvoE4ANArhsu0W+6Ul+TYixSuSsbdI11pXRIqaMWQ4fmgWc3zMdtWdGSeVt/y5ZiscOCMVi4ien12dsrK109jKl6lrx6v/utBhZe6MiUFFq7/ykJFzuHmKcSMuSBjKUfPqNdYOhJwP8l1QRtSk66hk5Uu9pNORw/7OK7nJtwmnYiSAdGJVM6jyllVdO9JOalVnJBftIfs2bQC7rCsT9Oz6iryW82jaepAAIs6g/TuPB1kT5uBrtu0Gc1YCwIc2bvDxNa2hAzYw+tcl22Wpg3Wfqut9Ps2RSNP6l6Q0dbPtfVYJjFWAG0lyzD04hAuimCNdcmDuvXeuJNw84OtAFJ1xQuKDUF09stWQI/oVFUftfMJE5egKhJGlryQ60QRFVS8TPQ6iXiTh4CPuAqq9NQGKxOMplKzapZMVV7HvLcNrAgt2YuaSb9dDq+vWcOx9KFRr8SuoCD1MJ/BiHcW8BJYHJfJ1T2y5kdjHdfRU4PcT2qvd7Zd6+FEjSh4oqEHgi7ms6TQeV2R8iFbN7WYh6ntcl3Xhp24aRVK1pCLJ+9PiBRQypyUo4H7hcF8S8nr6RmIToPMUZamu91uiuF2qu0m7Vxd+nl2efXl+mrCLq0AFnBE/3Z6fjY95zOjna9QDdL824iO2Oh75unep6ZEGdZowNh0E3cLd+cw6ggIyMavSTZ+2pYCttp59m2aFTq6sWXb8vHvmizra3mcoaC2Qrqu/92uegCz36TwYtEt45fJw/f00Vq6Q1T7wbIB0e2mcQh+Vf8LyZiN/8AxDNDyEtgSFmQHW/Qy5p185zjHCCdPLNcQPS7ynIwf2PIbNFqs8bNm1T3rlS7YyuKOvw9wBxn8gB+MUYfqw8SH8wZKVJs6PEAQs/LvD6LUTCQ=",sidebar_class_name:"put api-method",info_path:"api/service-api/report-portal",custom_edit_url:null},y=void 0,N={id:"api/service-api/update-project-integration-using-put",title:"Update project integration instance",description:"Update project integration instance",source:"@site/docs/api/service-api/update-project-integration-using-put.api.mdx",sourceDirName:"api/service-api",slug:"/api/service-api/update-project-integration-using-put",permalink:"/docs/api/service-api/update-project-integration-using-put",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"update-project-integration-using-put",title:"Update project integration instance",description:"Update project integration instance",sidebar_label:"Update project integration instance",hide_title:!0,hide_table_of_contents:!0,api:"eJydVk1z0zAQ/SuePQGjxC0DHHyidDpDBgZCSk8lh429SQS2JCS5acbj/86s5Dh20xaG3CLtx9u3b1duwOPGQXYLUnnaWPRSq0mulbe6LMnCUoA2FM9nBWRQmwI9za3+SbmfHZ1unFSb+c13EGDQYkWeLAduQGFFkA0TzAoQIBVkYNBvQUBBLrfS8N0jlpZ+19JSAZm3NQlw+ZYqhKwBvzd9aLIgYK1thT4evXsDbSv6/CZC/sL/nss+tvtrbuetVBto22U0Juc/6GLPFuO4kbhFNAEBTDIpz4ZoTCnzUHD607F1M0wkfcmZBmQvvoE4ANArhsu0W+6Ul+TYixSuSsbdI11pXRIqaMWQ4fmgWc3zMdtWdGSeVt/y5ZiscOCMVi4ien12dsrK109jKl6lrx6v/utBhZe6MiUFFq7/ykJFzuHmKcSMuSBjKUfPqNdYOhJwP8l1QRtSk66hk5Uu9pNORw/7OK7nJtwmnYiSAdGJVM6jyllVdO9JOalVnJBftIfs2bQC7rCsT9Oz6iryW82jaepAAIs6g/TuPB1kT5uBrtu0Gc1YCwIc2bvDxNa2hAzYw+tcl22Wpg3Wfqut9Ps2RSNP6l6Q0dbPtfVYJjFWAG0lyzD04hAuimCNdcmDuvXeuJNw84OtAFJ1xQuKDUF09stWQI/oVFUftfMJE5egKhJGlryQ60QRFVS8TPQ6iXiTh4CPuAqq9NQGKxOMplKzapZMVV7HvLcNrAgt2YuaSb9dDq+vWcOx9KFRr8SuoCD1MJ/BiHcW8BJYHJfJ1T2y5kdjHdfRU4PcT2qvd7Zd6+FEjSh4oqEHgi7ms6TQeV2R8iFbN7WYh6ntcl3Xhp24aRVK1pCLJ+9PiBRQypyUo4H7hcF8S8nr6RmIToPMUZamu91uiuF2qu0m7Vxd+nl2efXl+mrCLq0AFnBE/3Z6fjY95zOjna9QDdL824iO2Oh75unep6ZEGdZowNh0E3cLd+cw6ggIyMavSTZ+2pYCttp59m2aFTq6sWXb8vHvmizra3mcoaC2Qrqu/92uegCz36TwYtEt45fJw/f00Vq6Q1T7wbIB0e2mcQh+Vf8LyZiN/8AxDNDyEtgSFmQHW/Qy5p185zjHCCdPLNcQPS7ynIwf2PIbNFqs8bNm1T3rlS7YyuKOvw9wBxn8gB+MUYfqw8SH8wZKVJs6PEAQs/LvD6LUTCQ=",sidebar_class_name:"put api-method",info_path:"api/service-api/report-portal",custom_edit_url:null},sidebar:"serviceApi",previous:{title:"Get integration instance",permalink:"/docs/api/service-api/get-project-integration-using-get"},next:{title:"Delete project integration instance",permalink:"/docs/api/service-api/delete-project-integration-using-delete"}},Q={},S=[{value:"Request",id:"request",level:2}];function w(e){const a={h2:"h2",p:"p",...(0,s.a)(),...e.components},{Details:t}=a;return t||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h1",{className:"openapi__heading",children:(0,i.jsx)(a.p,{children:"Update project integration instance"})}),"\n",(0,i.jsx)(c(),{method:"put",path:"/v1/integration/{projectName}/{integrationId}"}),"\n",(0,i.jsx)(a.p,{children:"Update project integration instance"}),"\n",(0,i.jsx)(a.h2,{id:"request",children:"Request"}),"\n",(0,i.jsxs)(t,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,i.jsx)(a.p,{children:"Path Parameters"})})}),(0,i.jsx)("div",{children:(0,i.jsxs)("ul",{children:[(0,i.jsx)(m(),{className:"paramsItem",param:{name:"integrationId",in:"path",description:"integrationId",required:!0,schema:{type:"integer",format:"int64"}}}),(0,i.jsx)(m(),{className:"paramsItem",param:{name:"projectName",in:"path",description:"projectName",required:!0,schema:{type:"string"}}})]})})]}),"\n",(0,i.jsx)(p(),{className:"openapi-tabs__mime",children:(0,i.jsx)(v.default,{label:"application/json",value:"application/json-schema",children:(0,i.jsxs)(t,{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0,children:[(0,i.jsxs)("summary",{style:{},className:"openapi-markdown__details-summary-mime",children:[(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-body",children:(0,i.jsx)(a.p,{children:"Body"})}),(0,i.jsx)("strong",{className:"openapi-schema__required",children:(0,i.jsx)(a.p,{children:"required"})})]}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"},children:(0,i.jsx)("div",{style:{marginTop:"1rem",marginBottom:"1rem"},children:(0,i.jsx)(a.p,{children:"updateRequest"})})}),(0,i.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,i.jsx)(g(),{collapsible:!1,name:"enabled",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"}}),(0,i.jsx)(g(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(t,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(a.p,{children:"integrationParameters"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(a.p,{children:"object"})})]})}),(0,i.jsx)("div",{style:{marginLeft:"1rem"}})]})}),(0,i.jsx)(g(),{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})]})]})})}),"\n",(0,i.jsx)("div",{children:(0,i.jsx)("div",{children:(0,i.jsx)(r(),{label:void 0,id:void 0,children:(0,i.jsxs)(v.default,{label:"200",value:"200",children:[(0,i.jsx)("div",{children:(0,i.jsx)(a.p,{children:"OK"})}),(0,i.jsx)("div",{children:(0,i.jsx)(p(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(v.default,{label:"*/*",value:"*/*",children:(0,i.jsxs)(f(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(v.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(t,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(a.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsx)(g(),{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,i.jsx)(v.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(h(),{responseExample:'{\n  "message": "string"\n}',language:"json"})})]})})})})]})})})})]})}function _(e={}){const{wrapper:a}={...(0,s.a)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(w,{...e})}):w(e)}}}]);