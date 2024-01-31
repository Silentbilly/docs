"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5222],{2983:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var i=t(85893),n=t(11151);const s={sidebar_position:10,sidebar_label:"How to resolve issues with migration to the new version"},r="How to resolve issues with migration to the new version",a={id:"issues-troubleshooting/HowToResolveIssuesWithMigrationToTheNewVersion",title:"How to resolve issues with migration to the new version",description:"Error: Dirty database version XX. Fix and force version.",source:"@site/docs/issues-troubleshooting/HowToResolveIssuesWithMigrationToTheNewVersion.md",sourceDirName:"issues-troubleshooting",slug:"/issues-troubleshooting/HowToResolveIssuesWithMigrationToTheNewVersion",permalink:"/docs/issues-troubleshooting/HowToResolveIssuesWithMigrationToTheNewVersion",draft:!1,unlisted:!1,editUrl:"https://github.com/reportportal/docs/blob/develop/docs/issues-troubleshooting/HowToResolveIssuesWithMigrationToTheNewVersion.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,sidebar_label:"How to resolve issues with migration to the new version"},sidebar:"defaultSidebar",previous:{title:"How to clean up the ReportPortal database using VACUUM FULL",permalink:"/docs/issues-troubleshooting/HowToCleanUpTheReportPortalDatabaseUsingVacuumFull"},next:{title:"Case Studies",permalink:"/docs/category/case-studies"}},l={},c=[{value:"Error: Dirty database version XX. Fix and force version.",id:"error-dirty-database-version-xx-fix-and-force-version",level:2},{value:"Error: org.jasypt.exceptions.EncryptionOperationNotPossibleException: null. API doesn&#39;t start. ReportPortal unavailable.",id:"error-orgjasyptexceptionsencryptionoperationnotpossibleexception-null-api-doesnt-start-reportportal-unavailable",level:2}];function d(e){const o={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.h1,{id:"how-to-resolve-issues-with-migration-to-the-new-version",children:"How to resolve issues with migration to the new version"}),"\n",(0,i.jsx)(o.h2,{id:"error-dirty-database-version-xx-fix-and-force-version",children:"Error: Dirty database version XX. Fix and force version."}),"\n",(0,i.jsx)(o.p,{children:"That means, migration process has been interrupted during XX migration (migration has been started but not finished)"}),"\n",(0,i.jsxs)(o.ol,{children:["\n",(0,i.jsx)(o.li,{children:"At first, you need to check the logs of migration (service itselft and database), it can be helpful, if yes, make some actions based on logs, if not then move next."}),"\n",(0,i.jsx)(o.li,{children:"You need to rollback all applied (if any) migration XX parts."}),"\n"]}),"\n",(0,i.jsx)(o.p,{children:"The format for url is the next:"}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{children:"https://github.com/reportportal/migrations/blob/develop/migrations/XX_some_name.up.sql\n"})}),"\n",(0,i.jsx)(o.p,{children:"(Usually nothing to rollback, but need check)"}),"\n",(0,i.jsxs)(o.ol,{start:"3",children:["\n",(0,i.jsx)(o.li,{children:"Change in schema_migrations table, change values in this table to version=XX-1 (previous successful migration number), and dirty flag set to true."}),"\n",(0,i.jsx)(o.li,{children:"Restart migration."}),"\n"]}),"\n",(0,i.jsx)(o.p,{children:'For instance, if you have "Error: Dirty database version 10. Fix and force version."'}),"\n",(0,i.jsxs)(o.ol,{children:["\n",(0,i.jsx)(o.li,{children:"Check the logs(service itselft and database), in case we've found nothing, move next."}),"\n",(0,i.jsxs)(o.li,{children:["You need to check 10 migration (",(0,i.jsx)(o.a,{href:"https://github.com/reportportal/migrations/blob/develop/migrations/10_attachment_size.up.sql",children:"https://github.com/reportportal/migrations/blob/develop/migrations/10_attachment_size.up.sql"}),") and rollback if you have some partly migration."]}),"\n",(0,i.jsx)(o.li,{children:"Then execute #update schema_migrations set version=9, dirty=f"}),"\n",(0,i.jsx)(o.li,{children:"Redeploy RP based on docker-composer for example (migration should be started automatically, if you followed by instructions of installation for this way.)"}),"\n"]}),"\n",(0,i.jsx)(o.h2,{id:"error-orgjasyptexceptionsencryptionoperationnotpossibleexception-null-api-doesnt-start-reportportal-unavailable",children:"Error: org.jasypt.exceptions.EncryptionOperationNotPossibleException: null. API doesn't start. ReportPortal unavailable."}),"\n",(0,i.jsx)(o.p,{children:"Minio files are used during migration to change integration passwords encryption.\nFiles in Minio may be corrupted and deleted somehow before migration during Reportportal usage."}),"\n",(0,i.jsx)(o.p,{children:"Removing existing integrations from db before deploying can help. Creation of a new integration will use a new encryption type."}),"\n",(0,i.jsxs)(o.ol,{children:["\n",(0,i.jsx)(o.li,{children:"Execute the next script in database to remove existing integrations before deploy:"}),"\n"]}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-sql",children:"DELETE FROM integration WHERE type IN (SELECT id FROM integration_type WHERE name IN ('email', 'jira', 'ldap', 'ad'));\n\n"})}),"\n",(0,i.jsxs)(o.ol,{start:"2",children:["\n",(0,i.jsx)(o.li,{children:"Deploy Reportportal"}),"\n",(0,i.jsx)(o.li,{children:"Create integrations again"}),"\n"]})]})}function h(e={}){const{wrapper:o}={...(0,n.a)(),...e.components};return o?(0,i.jsx)(o,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,o,t)=>{t.d(o,{Z:()=>a,a:()=>r});var i=t(67294);const n={},s=i.createContext(n);function r(e){const o=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),i.createElement(s.Provider,{value:o},e.children)}}}]);