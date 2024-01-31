"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8846],{69255:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var i=n(85893),o=n(11151);const a={sidebar_position:3,sidebar_label:"Event monitoring"},r="Event monitoring",s={id:"admin-panel/EventMonitoring",title:"Event monitoring",description:"Starting from version 23.2, ReportPortal can monitor all activities (events) at both the project and instance levels.",source:"@site/docs/admin-panel/EventMonitoring.mdx",sourceDirName:"admin-panel",slug:"/admin-panel/EventMonitoring",permalink:"/docs/admin-panel/EventMonitoring",draft:!1,unlisted:!1,editUrl:"https://github.com/reportportal/docs/blob/develop/docs/admin-panel/EventMonitoring.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Event monitoring"},sidebar:"defaultSidebar",previous:{title:"All Users page",permalink:"/docs/admin-panel/AllUsersPage"},next:{title:"Plugins",permalink:"/docs/category/plugins"}},l={},d=[{value:"Project level event monitoring",id:"project-level-event-monitoring",level:2},{value:"Time",id:"time",level:3},{value:"User",id:"user",level:3},{value:"Action",id:"action",level:3},{value:"Object Type",id:"object-type",level:3},{value:"Object Name",id:"object-name",level:3},{value:"Instance level event monitoring",id:"instance-level-event-monitoring",level:2}];function c(e){const t={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",p:"p",strong:"strong",...(0,o.a)(),...e.components},{MediaViewer:a}=t;return a||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("MediaViewer",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"event-monitoring",children:"Event monitoring"}),"\n",(0,i.jsx)(t.p,{children:"Starting from version 23.2, ReportPortal can monitor all activities (events) at both the project and instance levels."}),"\n",(0,i.jsx)(t.h2,{id:"project-level-event-monitoring",children:"Project level event monitoring"}),"\n",(0,i.jsx)(t.p,{children:'To view the list of all activities within your project, open the menu at the bottom of the page as an Administrator and select the "Administrate" option. All existing projects are listed on the "All Projects" page. Click on the ellipsis button next to the project and choose the "Monitoring" option from the dropdown.'}),"\n",(0,i.jsx)(t.p,{children:"Here, you will find a table with the following columns: Time, User, Action, Object Type, Object Name, Old Value, and New Value."}),"\n",(0,i.jsx)(a,{src:n(56538),alt:"Event monitoring in our test report dashboard"}),"\n",(0,i.jsx)(t.h3,{id:"time",children:"Time"}),"\n",(0,i.jsx)(t.p,{children:'This column displays the time in a "time ago" format (e.g., "10 minutes ago"). Hovering over it, the system should show the precise action time.'}),"\n",(0,i.jsx)(t.h3,{id:"user",children:"User"}),"\n",(0,i.jsx)(t.p,{children:"This column shows who acted. We track not only actions by specific users but also, for your convenience, actions performed by ReportPortal itself or certain ReportPortal services. For example, actions by Jobs Service (such as Launch deletions) are included."}),"\n",(0,i.jsx)(t.p,{children:'If the activity was on behalf of a user, and their account was deleted, then there will be a "deleted user" entry in the "User" column.'}),"\n",(0,i.jsx)(t.h3,{id:"action",children:"Action"}),"\n",(0,i.jsx)(t.p,{children:"This column displays all events within this project."}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Event actions:"})," Create dashboard, Update dashboard, Delete dashboard, Create widget, Update widget, Delete widget, Create filter, Update filter, Delete filter, Create custom defect type, Update defect, Delete defect, Create integration, Update integration, Delete integration, Start launch, Finish launch, Delete launch, Update project, Update analyzer, Post issue, Link issue, Unlink issue, Generate index, Delete index, Start import, Finish import, Update item, AA linked issue, AA changed defect type, Create pattern rule, Update pattern rule, Delete pattern rule, PA find pattern."]}),"\n",(0,i.jsx)(t.h3,{id:"object-type",children:"Object Type"}),"\n",(0,i.jsx)(t.p,{children:"This refers to the object on which the action was taken."}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Event objects:"})," Launch, Dashboard, Custom defect type, Notification rule, Filter, Import, Integration, Test item, Project, Ticket, User, Widget, Pattern Rule, index, Plugin."]}),"\n",(0,i.jsx)(t.h3,{id:"object-name",children:"Object Name"}),"\n",(0,i.jsx)(t.p,{children:"This is the name of the widget, launch, etc."}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.strong,{children:"Old Value"})," and ",(0,i.jsx)(t.strong,{children:"New Value"})," columns display the changes that were made."]}),"\n",(0,i.jsx)(t.p,{children:"You can filter activities by user, action, object type, and object name."}),"\n",(0,i.jsx)(a,{src:"https://youtu.be/_Gz3s3PYYac",alt:"Event monitoring in our test automation dashboard",type:"video"}),"\n",(0,i.jsxs)(t.p,{children:["Another way to view the event list in your project is by creating a ",(0,i.jsx)(t.a,{href:"/dashboards-and-widgets/ProjectActivityPanel",children:'"Project Activity Panel" widget'}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"instance-level-event-monitoring",children:"Instance level event monitoring"}),"\n",(0,i.jsx)(t.p,{children:"Instance level events are not displayed in the UI \u2013 they are stored in the database."}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Instance level events:"})," Account deletion, Bulk account deletion, Administrator unassign, Provide Administrator permission for a user, Project creation, Bulk delete project by ReportPortal administrator, Delete project by ReportPortal administrator, Delete project by ReportPortal administrator, Delete Personal project when deleting user, Create Global Integration, Update Global Integration, Delete Global Integration, Bulk delete of Global Integration via API only, Manual plugin upload, Delete Plugin, Update Plugin (disable/enable), Create user in Administrate, Create user via auth service SAML."]}),"\n",(0,i.jsx)(t.p,{children:"Additionally, during instance setup, you can enable event storage in an audit log file. This data can be sent to a Security Information and Event Management (SIEM) system using tools like Fluentd, Fluentbit, or Filebeat. Logs and events are then checked and monitored within the SIEM system."}),"\n",(0,i.jsx)(t.p,{children:"The primary advantage of the audit log file is that it preserves all records without alterations or deletions. In contrast, data in the database can be modified or deleted. For example, if launches or projects are deleted, the corresponding data is removed from the database. Deleting accounts leads to data obfuscation in the database."}),"\n",(0,i.jsx)(t.p,{children:"Hence, if historical monitoring and strict accountability are required, enabling event storage in an audit log file is recommended. Financial companies, for example, are often mandated to retain all user actions in their services for 3 years."}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:"Administrators should ensure that log rotation is configured for the location where the audit log will be saved, as a substantial amount of data will accumulate."})}),"\n",(0,i.jsx)(t.p,{children:"Event monitoring assists organizations, especially in industries like finance and healthcare, in maintaining the security of their systems and data."})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},56538:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});const i=n.p+"assets/images/EventMonitoring-28e4b40b2bd051e3237c69c40a05a573.png"},11151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>r});var i=n(67294);const o={},a=i.createContext(o);function r(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);