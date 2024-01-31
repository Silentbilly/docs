"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7543],{31143:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var i=t(85893),r=t(11151);const s={},l="API differences between v4 and v5",o={id:"dev-guides/APIDifferencesBetweenV4AndV5",title:"API differences between v4 and v5",description:"New endpoints",source:"@site/docs/dev-guides/APIDifferencesBetweenV4AndV5.md",sourceDirName:"dev-guides",slug:"/dev-guides/APIDifferencesBetweenV4AndV5",permalink:"/docs/dev-guides/APIDifferencesBetweenV4AndV5",draft:!1,unlisted:!1,editUrl:"https://github.com/reportportal/docs/blob/develop/docs/dev-guides/APIDifferencesBetweenV4AndV5.md",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Developers guides",permalink:"/docs/category/developers-guides"},next:{title:"Asynchronous reporting",permalink:"/docs/dev-guides/AsynchronousReporting"}},c={},d=[{value:"New endpoints",id:"new-endpoints",level:2},{value:"Activity controller",id:"activity-controller",level:3},{value:"Dashboard controller",id:"dashboard-controller",level:3},{value:"Launch controller",id:"launch-controller",level:3},{value:"Log controller",id:"log-controller",level:3},{value:"Plugin controller",id:"plugin-controller",level:3},{value:"Project controller",id:"project-controller",level:3},{value:"Project setting controller",id:"project-setting-controller",level:3},{value:"Test item controller",id:"test-item-controller",level:3},{value:"User controller",id:"user-controller",level:3},{value:"Widget controller",id:"widget-controller",level:3},{value:"New controllers",id:"new-controllers",level:2},{value:"Bug tracking system controller - replacement of  external system controller.",id:"bug-tracking-system-controller---replacement-of--external-system-controller",level:4},{value:"Integration controller",id:"integration-controller",level:4},{value:"Launch asynchronous controller",id:"launch-asynchronous-controller",level:4},{value:"Test item asynchronous controller",id:"test-item-asynchronous-controller",level:4},{value:"Log asynchronous controller",id:"log-asynchronous-controller",level:4},{value:"Differences in reporting",id:"differences-in-reporting",level:2},{value:"Launch rerun",id:"launch-rerun",level:3},{value:"Nested steps",id:"nested-steps",level:3},{value:"Launch logs",id:"launch-logs",level:3}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"api-differences-between-v4-and-v5",children:"API differences between v4 and v5"}),"\n",(0,i.jsx)(n.h2,{id:"new-endpoints",children:"New endpoints"}),"\n",(0,i.jsx)(n.h3,{id:"activity-controller",children:"Activity controller"}),"\n",(0,i.jsxs)(n.p,{children:["GET ",(0,i.jsx)(n.code,{children:"/v1/{projectName}/activity/{activityId}"})," - Get activity by id."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"dashboard-controller",children:"Dashboard controller"}),"\n",(0,i.jsxs)(n.p,{children:["PUT ",(0,i.jsx)(n.code,{children:"/v1/{projectName}/dashboard/{dashboardId}/{widgetId}}"})," - Add specified widget to dashboard."]}),"\n",(0,i.jsxs)(n.p,{children:["DELETE ",(0,i.jsx)(n.code,{children:"/v1/{projectName}/dashboard/{dashboardId}/{widgetId}"})," - Delete specified widget from dashboard."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"launch-controller",children:"Launch controller"}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"Tags from v4 was replaced by attributes in v5.\nAttribute contains key and value. It may have null key, but non-null value.\nAttribute with null value is analog for v4 tag."})}),"\n",(0,i.jsxs)(n.p,{children:["GET ",(0,i.jsx)(n.code,{children:"/v1/{projectName}/launch/attribute/keys"})," - Retrieve all unique attribute keys of project launches."]}),"\n",(0,i.jsxs)(n.p,{children:["GET ",(0,i.jsx)(n.code,{children:"/v1/{projectName}/launch/attribute/values"})," - Retrieve all unique attribute values of project launches."]}),"\n",(0,i.jsxs)(n.p,{children:["GET ",(0,i.jsx)(n.code,{children:"/v1/{projectName}/launch/status"})," - Get launches statuses."]}),"\n",(0,i.jsxs)(n.p,{children:["GET ",(0,i.jsx)(n.code,{children:"/v1/{projectName}/launch/uuid/{launchUuid}"})," - Get launch by uuid."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["Response from start(create) launch request contains object with key ",(0,i.jsx)(n.code,{children:"id"})," and string value (example: ",(0,i.jsx)(n.code,{children:'id="33fa80b9-8ec9-4d52-8cb7-68b7bb4070f1"'}),").\nIt is not physical ",(0,i.jsx)(n.code,{children:"id"})," in database. It is UUID (virtual id of launch, part of asynchronous reporting implementation).\nUsing request above you can retrieve physical ",(0,i.jsx)(n.code,{children:"id"})," from database of just reported launch and use it in next queries for items, filters etc."]})}),"\n",(0,i.jsxs)(n.p,{children:["PUT ",(0,i.jsx)(n.code,{children:"/v1/{projectName}/launch/info"})," - Bulk update launches attributes and descriptions."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"log-controller",children:"Log controller"}),"\n",(0,i.jsxs)(n.p,{children:["New functionality in v5 - ",(0,i.jsx)(n.a,{href:"https://github.com/reportportal/client-java/wiki/Nested-steps",children:"nested steps"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["GET ",(0,i.jsx)(n.code,{children:"/v1/{projectName}/log/nested/{parentId}"})," - Get nested steps with logs for the parent test item."]}),"\n",(0,i.jsxs)(n.p,{children:["GET ",(0,i.jsx)(n.code,{children:"/v1/{projectName}/log/uuid/{logUuid}"})," - Get log by uuid."]}),"\n",(0,i.jsxs)(n.p,{children:["POST ",(0,i.jsx)(n.code,{children:"/v1/{projectName}/log/search/{itemId}"})," - Search test items with similar error logs."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"plugin-controller",children:"Plugin controller"}),"\n",(0,i.jsxs)(n.p,{children:["GET ",(0,i.jsx)(n.code,{children:"/v1/plugin"})," - Get all available plugins."]}),"\n",(0,i.jsxs)(n.p,{children:["POST ",(0,i.jsx)(n.code,{children:"/v1/plugin"})," - Upload new plugin."]}),"\n",(0,i.jsxs)(n.p,{children:["PUT ",(0,i.jsx)(n.code,{children:"/v1/plugin/{pluginId}"})," - update specified plugin."]}),"\n",(0,i.jsxs)(n.p,{children:["DELETE ",(0,i.jsx)(n.code,{children:"/v1/plugin/{pluginId}"})," - delete specified plugin."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"project-controller",children:"Project controller"}),"\n",(0,i.jsxs)(n.p,{children:["GET ",(0,i.jsx)(n.code,{children:"/v1/project/analyzer/status"})," - Get indexing logs status for project."]}),"\n",(0,i.jsxs)(n.p,{children:["GET ",(0,i.jsx)(n.code,{children:"/v1/project/export"})," - Export information about all projects."]}),"\n",(0,i.jsxs)(n.p,{children:["GET ",(0,i.jsx)(n.code,{children:"/v1/project/list"})," - Retrieve info about all projects by filer."]}),"\n",(0,i.jsxs)(n.p,{children:["GET ",(0,i.jsx)(n.code,{children:"/v1/project/names"})," - Get all project names."]}),"\n",(0,i.jsxs)(n.p,{children:["GET ",(0,i.jsx)(n.code,{children:"/v1/project/names/search"})," - Search project names."]}),"\n",(0,i.jsxs)(n.p,{children:["GET ",(0,i.jsx)(n.code,{children:"/v1/project/{projectName}/widget/{widgetCode}"})," - Get project widget by code."]}),"\n",(0,i.jsxs)(n.p,{children:["PUT ",(0,i.jsx)(n.code,{children:"/v1/project/{projectName}/notification"})," - Update project notifications configuration."]}),"\n",(0,i.jsxs)(n.p,{children:["PUT ",(0,i.jsx)(n.code,{children:"/v1/project/{projectName}/preference/{login}/{filterId}"})," - Add specified filter to user preference."]}),"\n",(0,i.jsxs)(n.p,{children:["DELETE ",(0,i.jsx)(n.code,{children:"/v1/project/{projectName}/preference/{login}/{filerId}"})," - Remove specified filter from user preference."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"project-setting-controller",children:"Project setting controller"}),"\n",(0,i.jsxs)(n.p,{children:["POST ",(0,i.jsx)(n.code,{children:"/v1/{projectName}/settings/pattern"})," - Create pattern template for item's log messages pattern analysis."]}),"\n",(0,i.jsxs)(n.p,{children:["PUT ",(0,i.jsx)(n.code,{children:"/v1/{projectName}/settings/pattern/{id}"})," - Update specified pattern template for item's log messages pattern analysis."]}),"\n",(0,i.jsxs)(n.p,{children:["DELETE ",(0,i.jsx)(n.code,{children:"/v1/{projectName}/settings/pattern/{id}"})," - Delete specified pattern template for item's log messages pattern analysis."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"test-item-controller",children:"Test item controller"}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["Tags from v4 was replaced by attributes in v5.",(0,i.jsx)("br",{}),"\nAttribute contains key and value. It may have null key, but non-null value.",(0,i.jsx)("br",{}),"\nAttribute with null value is analog for v4 tag."]})}),"\n",(0,i.jsxs)(n.p,{children:["GET ",(0,i.jsx)(n.code,{children:"/v1/{projectName}/item/attribute/keys"})," - Retrieve all unique attributes keys of specified launch."]}),"\n",(0,i.jsxs)(n.p,{children:["GET ",(0,i.jsx)(n.code,{children:"/v1/{projectName}/item/attribute/keys/all"})," - Retrieve all unique attributes keys of specified launch."]}),"\n",(0,i.jsxs)(n.p,{children:["GET ",(0,i.jsx)(n.code,{children:"/v1/{projectName}/item/attribute/values"})," - Retrieve all unique attributes values of specified launch."]}),"\n",(0,i.jsxs)(n.p,{children:["GET ",(0,i.jsx)(n.code,{children:"/v1/{projectName}/item/ticket/ids"})," - Get tickets that contains a term as a part inside for specified launch."]}),"\n",(0,i.jsxs)(n.p,{children:["GET ",(0,i.jsx)(n.code,{children:"/v1/{projectName}/item/uuid/{itemId}"})," - Get test item by uuid."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["Response from start(create) test item request contains object with key ",(0,i.jsx)(n.code,{children:"id"})," and string value (example: ",(0,i.jsx)(n.code,{children:'id="1f8233b0-6a2d-4a82-989b-a33463287130"'}),").\nIt is not physical ",(0,i.jsx)(n.code,{children:"id"})," in database. It is UUID (virtual id of test item, part of asynchronous reporting implementation).\nUsing request above you can retrieve physical ",(0,i.jsx)(n.code,{children:"id"})," from database of just reported test item and use it in next queries for items, logs etc."]})}),"\n",(0,i.jsxs)(n.p,{children:["PUT ",(0,i.jsx)(n.code,{children:"/v1/{projectName}/item/info"})," - Bulk update items attributes and descriptions."]}),"\n",(0,i.jsxs)(n.p,{children:["PUT ",(0,i.jsx)(n.code,{children:"/v1/{projectName}/item/issue/link"})," - Link external issue for specified test items."]}),"\n",(0,i.jsxs)(n.p,{children:["PUT ",(0,i.jsx)(n.code,{children:"/v1/{projectName}/item/issue/unlink"})," - Unlink external issue for specified test items."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"user-controller",children:"User controller"}),"\n",(0,i.jsxs)(n.p,{children:["GET ",(0,i.jsx)(n.code,{children:"/v1/user/export"})," - Export information about all users."]}),"\n",(0,i.jsxs)(n.p,{children:["GET ",(0,i.jsx)(n.code,{children:"/v1/user/registration"})," - Get user bid info."]}),"\n",(0,i.jsxs)(n.p,{children:["GET ",(0,i.jsx)(n.code,{children:"/v1/user/registration/info"})," - Validate user login and/or email."]}),"\n",(0,i.jsxs)(n.p,{children:["GET ",(0,i.jsx)(n.code,{children:"/v1/user/search"})," - Search users by term."]}),"\n",(0,i.jsxs)(n.p,{children:["GET ",(0,i.jsx)(n.code,{children:"/v1/user/{userName}/projects"})," - Retrieve all user projects."]}),"\n",(0,i.jsxs)(n.p,{children:["DELETE ",(0,i.jsx)(n.code,{children:"/v1/user"})," - Delete specified users by ids."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"widget-controller",children:"Widget controller"}),"\n",(0,i.jsx)(n.p,{children:"New group of widgets that may have few levels"}),"\n",(0,i.jsxs)(n.p,{children:["GET ",(0,i.jsx)(n.code,{children:"/v1/{projectName}/widget/multilevel/{widgetId}"})," - Get multilevel widget by id."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"new-controllers",children:"New controllers"}),"\n",(0,i.jsx)(n.h4,{id:"bug-tracking-system-controller---replacement-of--external-system-controller",children:"Bug tracking system controller - replacement of  external system controller."}),"\n",(0,i.jsxs)(n.p,{children:["GET ",(0,i.jsx)(n.code,{children:"/v1/bts/{integrationId}/fields-set"})," - Get list of fields required for posting ticket."]}),"\n",(0,i.jsxs)(n.p,{children:["GET ",(0,i.jsx)(n.code,{children:"/v1/bts/{integrationId}/issue_types"})," - Get list of allowable issue types for bug tracking system."]}),"\n",(0,i.jsxs)(n.p,{children:["GET ",(0,i.jsx)(n.code,{children:"/v1/bts/{projectName}/ticket/{ticketId}"})," - Get ticket from the bts integration."]}),"\n",(0,i.jsxs)(n.p,{children:["GET ",(0,i.jsx)(n.code,{children:"/v1/bts/{projectName}/{integrationId}/fields-set"})," - Get list of fields required for posting ticket (project integration)."]}),"\n",(0,i.jsxs)(n.p,{children:["GET ",(0,i.jsx)(n.code,{children:"/v1/bts/{projectName}/{integrationId}/issue_types"})," - Get list of allowable issue types for bug tracking system (project integration)."]}),"\n",(0,i.jsxs)(n.p,{children:["POST - ",(0,i.jsx)(n.code,{children:"/v1/bts/{projectName}/{integrationId}/ticket"})," - Post ticket to the bts integration."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h4,{id:"integration-controller",children:"Integration controller"}),"\n",(0,i.jsxs)(n.p,{children:["GET ",(0,i.jsx)(n.code,{children:"/v1/integration/global/all"})," - Get available global integrations."]}),"\n",(0,i.jsxs)(n.p,{children:["GET ",(0,i.jsx)(n.code,{children:"/v1/integration/global/all/{pluginName}"})," - Get available global integrations for plugin."]}),"\n",(0,i.jsxs)(n.p,{children:["GET ",(0,i.jsx)(n.code,{children:"/v1/integration/project/{projectName}/all"})," - Get available project integrations."]}),"\n",(0,i.jsxs)(n.p,{children:["GET ",(0,i.jsx)(n.code,{children:"/v1/integration/project/{projectName}/all/{pluginName}"})," - Get available project integrations for plugin."]}),"\n",(0,i.jsxs)(n.p,{children:["GET ",(0,i.jsx)(n.code,{children:"/v1/integration/{integrationId}"})," - Get specified global integration by id."]}),"\n",(0,i.jsxs)(n.p,{children:["GET ",(0,i.jsx)(n.code,{children:"/v1/integration/{integrationId}/connection/test"})," - Test connection to the global integration."]}),"\n",(0,i.jsxs)(n.p,{children:["GET ",(0,i.jsx)(n.code,{children:"/v1/integration/{projectName}/{integrationId}/connection/test"})," - Test connection to the integration through the project config."]}),"\n",(0,i.jsxs)(n.p,{children:["GET ",(0,i.jsx)(n.code,{children:"/v1/integration/{projectName}/{integrationId}"})," - Get specified project integration by id."]}),"\n",(0,i.jsxs)(n.p,{children:["PUT ",(0,i.jsx)(n.code,{children:"/v1/integration/{projectName}/{integrationId}"})," - Update specified project integration by id."]}),"\n",(0,i.jsxs)(n.p,{children:["PUT ",(0,i.jsx)(n.code,{children:"/v1/integration/{integrationId}"})," - Update specified global integration by id."]}),"\n",(0,i.jsxs)(n.p,{children:["PUT ",(0,i.jsx)(n.code,{children:"/v1/integration/{projectName}/{integrationId}/{command}"})," - Execute command to the integration instance."]}),"\n",(0,i.jsxs)(n.p,{children:["POST ",(0,i.jsx)(n.code,{children:"/v1/integration/{pluginName}"})," - Create global integration."]}),"\n",(0,i.jsxs)(n.p,{children:["POST ",(0,i.jsx)(n.code,{children:"/v1/integration/{projectName}/{pluginName}"})," - Create project integration instance."]}),"\n",(0,i.jsxs)(n.p,{children:["DELETE ",(0,i.jsx)(n.code,{children:"/v1/integration/all/{type}"})," - Delete all global integrations by type."]}),"\n",(0,i.jsxs)(n.p,{children:["DELETE ",(0,i.jsx)(n.code,{children:"/v1/integration/{projectName}/all/{type}"})," - Delete all project integrations by type."]}),"\n",(0,i.jsxs)(n.p,{children:["DELETE ",(0,i.jsx)(n.code,{children:"/v1/integration/{integrationId}"})," - Delete specified global integration by id."]}),"\n",(0,i.jsxs)(n.p,{children:["DELETE ",(0,i.jsx)(n.code,{children:"/v1/integration/{projectName}/{integrationId}"})," - Delete specified project integration by id."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h4,{id:"launch-asynchronous-controller",children:"Launch asynchronous controller"}),"\n",(0,i.jsxs)(n.p,{children:["POST ",(0,i.jsx)(n.code,{children:"/v2/{projectName}/launch"})," - Start launch for specified project."]}),"\n",(0,i.jsxs)(n.p,{children:["POST ",(0,i.jsx)(n.code,{children:"/v2/{projectName}/launch/merge"})," - Merge set of specified launches in common one."]}),"\n",(0,i.jsxs)(n.p,{children:["PUT ",(0,i.jsx)(n.code,{children:"/v2/{projectName}/launch/{launchId}/finish"})," - Finish launch for specified project."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h4,{id:"test-item-asynchronous-controller",children:"Test item asynchronous controller"}),"\n",(0,i.jsxs)(n.p,{children:["POST ",(0,i.jsx)(n.code,{children:"/v2/{projectName}/item"})," - Start root test item."]}),"\n",(0,i.jsxs)(n.p,{children:["POST ",(0,i.jsx)(n.code,{children:"/v2/{projectName}/item/{parentItem}"})," - Start child test item."]}),"\n",(0,i.jsxs)(n.p,{children:["PUT ",(0,i.jsx)(n.code,{children:"/v2/{projectName}/item/{testItemId}"})," - Finish test item."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h4,{id:"log-asynchronous-controller",children:"Log asynchronous controller"}),"\n",(0,i.jsxs)(n.p,{children:["POST ",(0,i.jsx)(n.code,{children:"/v2/{projectName}/log"})," - Create log."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"differences-in-reporting",children:"Differences in reporting"}),"\n",(0,i.jsx)(n.h3,{id:"launch-rerun",children:"Launch rerun"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/dev-guides/RerunDevelopersGuide",children:"Rerun developers guide"})}),"\n",(0,i.jsx)(n.h3,{id:"nested-steps",children:"Nested steps"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/reportportal/client-java/wiki/Nested-steps",children:"Nested steps wiki"})}),"\n",(0,i.jsx)(n.h3,{id:"launch-logs",children:"Launch logs"}),"\n",(0,i.jsxs)(n.p,{children:["Create log request contains fields ",(0,i.jsx)(n.code,{children:"launchUuid"})," and ",(0,i.jsx)(n.code,{children:"itemUuid"}),". At least one of them should not be null."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "itemUuid": "7f32fb6a-fcc2-4ecb-a4f7-780c559a37ca",\n  "launchUuid": "6fd4638d-90e2-4f52-a9bd-bf433ebfb0f3"\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["If they both are present - log will be saved as test item log.\nIf only ",(0,i.jsx)(n.code,{children:"itemUuid"})," is present - log will be saved as test item log.\nIf only ",(0,i.jsx)(n.code,{children:"launchUuid"})," is present - log will be saved as launch log."]}),"\n",(0,i.jsx)(n.p,{children:"Java client has static methods for launch log reporting:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/reportportal/client-java/blob/20b1dda7681301acd86d2d9c9dbcbd7991890cdc/src/main/java/com/epam/reportportal/service/ReportPortal.java#L160",children:"emitLaunchLog(Function<String, SaveLogRQ> logSupplier)"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/reportportal/client-java/blob/20b1dda7681301acd86d2d9c9dbcbd7991890cdc/src/main/java/com/epam/reportportal/service/ReportPortal.java#L192",children:"emitLaunchLog(final String message, final String level, final Date time)"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/reportportal/client-java/blob/20b1dda7681301acd86d2d9c9dbcbd7991890cdc/src/main/java/com/epam/reportportal/service/ReportPortal.java#L233",children:"emitLaunchLog(final String message, final String level, final Date time, final File file)"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/reportportal/client-java/blob/20b1dda7681301acd86d2d9c9dbcbd7991890cdc/src/main/java/com/epam/reportportal/service/ReportPortal.java#L288",children:"emitLaunchLog(final ReportPortalMessage message, final String level, final Date time)"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>l});var i=t(67294);const r={},s=i.createContext(r);function l(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);