"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5414],{33454:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=o(85893),t=o(11151);const i={sidebar_position:4,sidebar_label:"ReportPortal jobs configuration"},s="ReportPortal jobs configuration",a={id:"reportportal-configuration/ReportPortalJobsConfiguration",title:"ReportPortal jobs configuration",description:"Currently, ReportPortal has 5 configurable jobs for data removing:",source:"@site/docs/reportportal-configuration/ReportPortalJobsConfiguration.md",sourceDirName:"reportportal-configuration",slug:"/reportportal-configuration/ReportPortalJobsConfiguration",permalink:"/docs/reportportal-configuration/ReportPortalJobsConfiguration",draft:!1,unlisted:!1,editUrl:"https://github.com/reportportal/docs/blob/develop/docs/reportportal-configuration/ReportPortalJobsConfiguration.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"ReportPortal jobs configuration"},sidebar:"docs",previous:{title:"Project configuration",permalink:"/docs/reportportal-configuration/ProjectConfiguration"},next:{title:"Integration via plugin",permalink:"/docs/reportportal-configuration/IntegrationViaPlugin"}},l={},c=[{value:"Clean launches job",id:"clean-launches-job",level:2},{value:"Clean logs job",id:"clean-logs-job",level:2},{value:"Clean attachments info job",id:"clean-attachments-info-job",level:2},{value:"Clean attachments binaries job",id:"clean-attachments-binaries-job",level:2},{value:"Project binary storage size recalculation job",id:"project-binary-storage-size-recalculation-job",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"reportportal-jobs-configuration",children:"ReportPortal jobs configuration"}),"\n",(0,r.jsx)(n.p,{children:"Currently, ReportPortal has 5 configurable jobs for data removing:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Clean launches"}),"\n",(0,r.jsx)(n.li,{children:"Clean logs"}),"\n",(0,r.jsx)(n.li,{children:"Clean attachments info"}),"\n",(0,r.jsx)(n.li,{children:"Clean attachments binaries"}),"\n",(0,r.jsx)(n.li,{children:"Project binary storage size recalculation"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Job execution period can be configured using environment variables, where period value should be provided as ",(0,r.jsx)(n.a,{href:"https://www.baeldung.com/cron-syntax-linux-vs-spring",children:(0,r.jsx)(n.strong,{children:"spring cron"})})," expression:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"*/30 * * * * *"})," - every 30 seconds"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"0 */2 * * * *"})," - every 2 minutes"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"0 0 */24 * * *"})," - every 24 hours (every day)"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/reportportal/reportportal/blob/2b22c61f87674aaf2efc7a973af38004c2517680/docker-compose.yml#L237-L241",children:"Job environment variables example for docker"})}),"\n",(0,r.jsx)(n.h2,{id:"clean-launches-job",children:"Clean launches job"}),"\n",(0,r.jsx)(n.p,{children:"Clean launches job removes launches, their test items and logs.\nEnvironment variables for configuration with default values:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"RP_ENVIRONMENT_VARIABLE_CLEAN_LAUNCH_CRON=0 */10 * * * *"})," - specifies how often job will be started (every 10 minutes)"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"clean-logs-job",children:"Clean logs job"}),"\n",(0,r.jsx)(n.p,{children:"Clean logs job removes logs.\nEnvironment variables for configuration with default values:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"RP_ENVIRONMENT_VARIABLE_CLEAN_LOG_CRON=0 */5 * * * *"})," - specifies how often job will be started (every 5 minutes)"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"clean-attachments-info-job",children:"Clean attachments info job"}),"\n",(0,r.jsxs)(n.p,{children:["Clean attachments info job removes attachments data from main ",(0,r.jsx)(n.strong,{children:"database"})," storage and puts into ",(0,r.jsx)(n.strong,{children:"temporary table"})," to remove binaries from the ",(0,r.jsx)(n.strong,{children:"file storage"}),"\nEnvironment variables for configuration with default values:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"RP_ENVIRONMENT_VARIABLE_CLEAN_ATTACHMENT_CRON=0 */2 * * * *"})," - specifies how often job will be started (every 2 minutes)"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"clean-attachments-binaries-job",children:"Clean attachments binaries job"}),"\n",(0,r.jsxs)(n.p,{children:["Clean attachments binaries job uses data from the ",(0,r.jsx)(n.strong,{children:"temporary table"})," (filled by previous job)\nand removes binaries from the ",(0,r.jsx)(n.strong,{children:"file storage"}),"\nEnvironment variables for configuration with default values:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"RP_ENVIRONMENT_VARIABLE_CLEAN_STORAGE_CRON=*/30 * * * * *"})," - specifies how often job will be started (every 30 seconds)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"RP_ENVIRONMENT_VARIABLE_CLEAN_STORAGE_CHUNKSize=1000"})," - specifies the size of the batch to be selected from the ",(0,r.jsx)(n.strong,{children:"temporary table"})," to be removed"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"project-binary-storage-size-recalculation-job",children:"Project binary storage size recalculation job"}),"\n",(0,r.jsxs)(n.p,{children:["Project binary storage size recalculation job updates ",(0,r.jsx)(n.strong,{children:"allocated storage"})," value of the ",(0,r.jsx)(n.strong,{children:"project"})," based on the existing attachments at the moment.\nEnvironment variables for configuration with default values:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"RP_ENVIRONMENT_VARIABLE_STORAGE_PROJECT_CRON=0 */1 * * * *"})," - specifies how often job will be started (every minute)"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,n,o)=>{o.d(n,{Z:()=>a,a:()=>s});var r=o(67294);const t={},i=r.createContext(t);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);