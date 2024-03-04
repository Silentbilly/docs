"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9081],{86859:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>w,contentTitle:()=>N,default:()=>Y,frontMatter:()=>f,metadata:()=>v,toc:()=>_});var i=a(85893),d=a(11151),r=a(58219),t=a.n(r),n=(a(62316),a(51039)),l=a.n(n),c=(a(82723),a(9487)),m=a.n(c),o=a(41429),p=a.n(o),h=a(5397),x=a.n(h),j=a(4667),u=a.n(j),g=a(9472),b=a.n(g),y=(a(1176),a(12005),a(85162));const f={id:"add-widget-using-put",title:"Add widget to specified dashboard",description:"Add widget to specified dashboard",sidebar_label:"Add widget to specified dashboard",hide_title:!0,hide_table_of_contents:!0,api:"eJydVk1v4zYQ/SvCnHYXtOWkHwed6gYBGrTdGPYG3YXXB1ocW9xKIkNScVxB/70YStaHlcbp+mRRjzNvhm+eWILjewvRGgS3yVZxIyaxyp1RaYoGNgyURsOdVPmdgAi4EH9JsUf3YGW+Xzx8AgaaG56hQ0NxSsh5hhB18e4EMJA5RKC5S4CBQBsbqSnmCGfwsZAGBUTOFMjAxglmHKIS3FFTWJk73KMBBjtlMu7qpZ9/hKpibW5t1DeM3Ud6ei33EHcxt3VG5nuoqk0NRut+VeJIiGHctkvLR2BA/cTcEYxrncrYtzP8Zglb9tNIl1Ke+WB7k1xtiSq129CROInWRzxh+wHqlXu/408lML0Y5uB30BG/odOsgfu+jdtzen3v22F7iJeTV+2OhbKybmFXS7t2qQTdAD9frOGHayJ5wn95E74juZL/YJ+gf75ELkG5T9wbmR2kcMn/ZPXJQ8dS9b9zbfsFq1Vua3bXs9lYxPe/D7X7IfzwslzvTw5xozKdIv1bri52JENr+f41zgK1wZg7Yr3jqUUGz5NYCdxjPmnmb7JV4jhpxn44dsNq5kIEdacCpwKrMZY7iSJo7QcY4LPD3NaaXZfwNx4hejUlgyeeFuepyR4ydIkiw9SFL53cJ4Lw6Sose6ZThW36sOwZYRVyQYQsmqeTrRYmhQhot1OxSqsoDEteuEQZ6Y5VyLUc1bxErYxbKON4GtSxPGUj+TZthqYJVx//jhcpqStxTttRuMUJywDzIqOPBgGBNfhNxaBlNNbTb8q6gNoW8FwExCx4J3dBjihQvA/ULqj5BueEO14CMzU1HqU9aCoV6WVDrYqLOu+6hC1yg2ZeUNPXm/7rFam3Lr0PajXYFORFTs81iD4uQH697Fz/9pmT2kce3DnpbOiTJ32P7fFF/+vZ2WxgVrORE53MZdZax+zMF7rZos/hTvXHd9D1/9DQ6Uzmi7tAqLjIMHe8cWWyCB772ps5XBWaNpFOMi5JtrZe+WV0dgxSGWNusbd9rnmcYHA9nQFrZE/HEoXh4XCYcv92qsw+bLba8I+7m9uPq9sJbakY0MzU7H+aXs2mV43bu4zn/TRvcIRBL1qROHx2oU65zCmyZ1g2I76GpytgEA1vFv2Q0fDCQ4O+YZAo62h3WW65xQeTVhUtPxZoSNKbbmy9wIW09L8zxjOirW3Du2Xj/O+DYeIXa2kWeX7seRuwxgr7Aei29V0shp35Dhb9ABV5ToJcoOlZ9k2dd+K13/Po88sX1VDvmMcxatfD0sdu4OP1VXfbXPcyJQhl+IHujfwAEXyFr8RRdZcev15CyvN94b90UGel379vPvQP",sidebar_class_name:"put api-method",info_path:"api/service-api/report-portal",custom_edit_url:null},N=void 0,v={id:"api/service-api/add-widget-using-put",title:"Add widget to specified dashboard",description:"Add widget to specified dashboard",source:"@site/docs/api/service-api/add-widget-using-put.api.mdx",sourceDirName:"api/service-api",slug:"/api/service-api/add-widget-using-put",permalink:"/docs/api/service-api/add-widget-using-put",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"add-widget-using-put",title:"Add widget to specified dashboard",description:"Add widget to specified dashboard",sidebar_label:"Add widget to specified dashboard",hide_title:!0,hide_table_of_contents:!0,api:"eJydVk1v4zYQ/SvCnHYXtOWkHwed6gYBGrTdGPYG3YXXB1ocW9xKIkNScVxB/70YStaHlcbp+mRRjzNvhm+eWILjewvRGgS3yVZxIyaxyp1RaYoGNgyURsOdVPmdgAi4EH9JsUf3YGW+Xzx8AgaaG56hQ0NxSsh5hhB18e4EMJA5RKC5S4CBQBsbqSnmCGfwsZAGBUTOFMjAxglmHKIS3FFTWJk73KMBBjtlMu7qpZ9/hKpibW5t1DeM3Ud6ei33EHcxt3VG5nuoqk0NRut+VeJIiGHctkvLR2BA/cTcEYxrncrYtzP8Zglb9tNIl1Ke+WB7k1xtiSq129CROInWRzxh+wHqlXu/408lML0Y5uB30BG/odOsgfu+jdtzen3v22F7iJeTV+2OhbKybmFXS7t2qQTdAD9frOGHayJ5wn95E74juZL/YJ+gf75ELkG5T9wbmR2kcMn/ZPXJQ8dS9b9zbfsFq1Vua3bXs9lYxPe/D7X7IfzwslzvTw5xozKdIv1bri52JENr+f41zgK1wZg7Yr3jqUUGz5NYCdxjPmnmb7JV4jhpxn44dsNq5kIEdacCpwKrMZY7iSJo7QcY4LPD3NaaXZfwNx4hejUlgyeeFuepyR4ydIkiw9SFL53cJ4Lw6Sose6ZThW36sOwZYRVyQYQsmqeTrRYmhQhot1OxSqsoDEteuEQZ6Y5VyLUc1bxErYxbKON4GtSxPGUj+TZthqYJVx//jhcpqStxTttRuMUJywDzIqOPBgGBNfhNxaBlNNbTb8q6gNoW8FwExCx4J3dBjihQvA/ULqj5BueEO14CMzU1HqU9aCoV6WVDrYqLOu+6hC1yg2ZeUNPXm/7rFam3Lr0PajXYFORFTs81iD4uQH697Fz/9pmT2kce3DnpbOiTJ32P7fFF/+vZ2WxgVrORE53MZdZax+zMF7rZos/hTvXHd9D1/9DQ6Uzmi7tAqLjIMHe8cWWyCB772ps5XBWaNpFOMi5JtrZe+WV0dgxSGWNusbd9rnmcYHA9nQFrZE/HEoXh4XCYcv92qsw+bLba8I+7m9uPq9sJbakY0MzU7H+aXs2mV43bu4zn/TRvcIRBL1qROHx2oU65zCmyZ1g2I76GpytgEA1vFv2Q0fDCQ4O+YZAo62h3WW65xQeTVhUtPxZoSNKbbmy9wIW09L8zxjOirW3Du2Xj/O+DYeIXa2kWeX7seRuwxgr7Aei29V0shp35Dhb9ABV5ToJcoOlZ9k2dd+K13/Po88sX1VDvmMcxatfD0sdu4OP1VXfbXPcyJQhl+IHujfwAEXyFr8RRdZcev15CyvN94b90UGel379vPvQP",sidebar_class_name:"put api-method",info_path:"api/service-api/report-portal",custom_edit_url:null},sidebar:"serviceApi",previous:{title:"Delete specified dashboard by ID for specified project",permalink:"/docs/api/service-api/delete-dashboard-using-delete"},next:{title:"Remove widget from specified dashboard",permalink:"/docs/api/service-api/remove-widget-using-delete"}},w={},_=[{value:"Request",id:"request",level:2}];function q(e){const s={h2:"h2",p:"p",...(0,d.a)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h1",{className:"openapi__heading",children:(0,i.jsx)(s.p,{children:"Add widget to specified dashboard"})}),"\n",(0,i.jsx)(l(),{method:"put",path:"/v1/{projectName}/dashboard/{dashboardId}/add"}),"\n",(0,i.jsx)(s.p,{children:"Add widget to specified dashboard"}),"\n",(0,i.jsx)(s.h2,{id:"request",children:"Request"}),"\n",(0,i.jsxs)(a,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,i.jsx)(s.p,{children:"Path Parameters"})})}),(0,i.jsx)("div",{children:(0,i.jsxs)("ul",{children:[(0,i.jsx)(p(),{className:"paramsItem",param:{name:"dashboardId",in:"path",description:"dashboardId",required:!0,schema:{type:"integer",format:"int64"}}}),(0,i.jsx)(p(),{className:"paramsItem",param:{name:"projectName",in:"path",description:"projectName",required:!0,schema:{type:"string"}}})]})})]}),"\n",(0,i.jsx)(m(),{className:"openapi-tabs__mime",children:(0,i.jsx)(y.default,{label:"application/json",value:"application/json-schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0,children:[(0,i.jsxs)("summary",{style:{},className:"openapi-markdown__details-summary-mime",children:[(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-body",children:(0,i.jsx)(s.p,{children:"Body"})}),(0,i.jsx)("strong",{className:"openapi-schema__required",children:(0,i.jsx)(s.p,{children:"required"})})]}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"},children:(0,i.jsx)("div",{style:{marginTop:"1rem",marginBottom:"1rem"},children:(0,i.jsx)(s.p,{children:"addWidgetRq"})})}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsx)(u(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(s.p,{children:"addWidget"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(s.p,{children:"object"})})]})}),(0,i.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,i.jsx)(u(),{collapsible:!1,name:"widgetId",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64"}}),(0,i.jsx)(u(),{collapsible:!1,name:"widgetName",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(u(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(s.p,{children:"widgetOptions"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(s.p,{children:"object"})})]})}),(0,i.jsx)("div",{style:{marginLeft:"1rem"}})]})}),(0,i.jsx)(u(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(s.p,{children:"widgetPosition"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(s.p,{children:"object"})})]})}),(0,i.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,i.jsx)(u(),{collapsible:!1,name:"positionX",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"}}),(0,i.jsx)(u(),{collapsible:!1,name:"positionY",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"}})]})]})}),(0,i.jsx)(u(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(s.p,{children:"widgetSize"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(s.p,{children:"object"})})]})}),(0,i.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,i.jsx)(u(),{collapsible:!1,name:"height",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"}}),(0,i.jsx)(u(),{collapsible:!1,name:"width",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"}})]})]})}),(0,i.jsx)(u(),{collapsible:!1,name:"widgetType",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})]})]})})})]})})}),"\n",(0,i.jsx)("div",{children:(0,i.jsx)("div",{children:(0,i.jsx)(t(),{label:void 0,id:void 0,children:(0,i.jsxs)(y.default,{label:"200",value:"200",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"OK"})}),(0,i.jsx)("div",{children:(0,i.jsx)(m(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(y.default,{label:"*/*",value:"*/*",children:(0,i.jsxs)(b(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(y.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsx)(u(),{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,i.jsx)(y.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(x(),{responseExample:'{\n  "message": "string"\n}',language:"json"})})]})})})})]})})})})]})}function Y(e={}){const{wrapper:s}={...(0,d.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(q,{...e})}):q(e)}}}]);