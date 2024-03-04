"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7145],{63652:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var a=s(85893),t=s(11151);const r={sidebar_position:8,sidebar_label:"How to clean up the ReportPortal database using PG_REPACK"},o="How to clean up the ReportPortal database using PG_REPACK",i={id:"issues-troubleshooting/HowToCleanUpTheReportPortalDatabaseUsingPGRepack",title:"How to clean up the ReportPortal database using PG_REPACK",description:"Description",source:"@site/docs/issues-troubleshooting/HowToCleanUpTheReportPortalDatabaseUsingPGRepack.md",sourceDirName:"issues-troubleshooting",slug:"/issues-troubleshooting/HowToCleanUpTheReportPortalDatabaseUsingPGRepack",permalink:"/docs/issues-troubleshooting/HowToCleanUpTheReportPortalDatabaseUsingPGRepack",draft:!1,unlisted:!1,editUrl:"https://github.com/reportportal/docs/blob/develop/docs/issues-troubleshooting/HowToCleanUpTheReportPortalDatabaseUsingPGRepack.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,sidebar_label:"How to clean up the ReportPortal database using PG_REPACK"},sidebar:"docs",previous:{title:"How to check LDAP connection",permalink:"/docs/issues-troubleshooting/HowToCheckLDAPConnection"},next:{title:"How to clean up the ReportPortal database using VACUUM FULL",permalink:"/docs/issues-troubleshooting/HowToCleanUpTheReportPortalDatabaseUsingVacuumFull"}},l={},d=[{value:"Description",id:"description",level:2},{value:"Performance",id:"performance",level:2},{value:"Detailed DB Resource Utilization Stats",id:"detailed-db-resource-utilization-stats",level:3},{value:"PG_REPACK installation",id:"pg_repack-installation",level:2},{value:"PG_REPACK usage",id:"pg_repack-usage",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"how-to-clean-up-the-reportportal-database-using-pg_repack",children:"How to clean up the ReportPortal database using PG_REPACK"}),"\n",(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://reorg.github.io/pg_repack/",children:"pg_repack"})," is a PostgreSQL extension that lets you remove bloat from tables and indexes, and optionally restore the physical order of clustered indexes. Unlike CLUSTER and VACUUM FULL it works online, without holding an exclusive lock on the processed tables during processing. pg_repack is efficient to boot, with performance comparable to using CLUSTER directly."]}),"\n",(0,a.jsx)(n.h2,{id:"performance",children:"Performance"}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Initial Database Size"}),(0,a.jsx)(n.th,{children:"Final Database Size"}),(0,a.jsx)(n.th,{children:"Repack duration"}),(0,a.jsx)(n.th,{children:"Duration"})]})}),(0,a.jsx)(n.tbody,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"1500 Gb"}),(0,a.jsx)(n.td,{children:"251 Gb"}),(0,a.jsx)(n.td,{children:"1200 Gb"}),(0,a.jsx)(n.td,{children:"7 hours"})]})})]}),"\n",(0,a.jsx)(n.p,{children:"Overall\xa0pg_repack\xa0performance has been tested during load tests running and without. The database load during\xa0pg_repack is pretty good by capacity and instance\xa0\xa0\nHigh DB RAM Utilization faced at the pr_repack starting, but then the overall RAM Usage becomes normal.\xa0During reporting(load tests running) faced small response times and throughput degradation around 10 minutes, but then they became a regular performance. Also, no KO requests during reporting and\xa0pg_repack run in parallel, so that all Staging\xa0pg_repack configuration can be safely porting to Production."}),"\n",(0,a.jsx)(n.h3,{id:"detailed-db-resource-utilization-stats",children:"Detailed DB Resource Utilization Stats"}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Resources"}),(0,a.jsx)(n.th,{children:"Used"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"CPU utilization"}),(0,a.jsx)(n.td,{children:"13 %"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"CPU IOwait"}),(0,a.jsx)(n.td,{children:"7%"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Disk IO Read/Write"}),(0,a.jsx)(n.td,{children:"1800/30000 IOPS"})]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"pg_repack-installation",children:"PG_REPACK installation"}),"\n",(0,a.jsxs)(n.p,{children:["To install PG_REPACK use the guide from the official ",(0,a.jsx)(n.a,{href:"https://reorg.github.io/pg_repack/",children:"GitHub page"}),". If you use Amazon RDS follow the ",(0,a.jsx)(n.a,{href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Appendix.PostgreSQL.CommonDBATasks.html#Appendix.PostgreSQL.CommonDBATasks.pg_repack",children:"link"})]}),"\n",(0,a.jsx)(n.h2,{id:"pg_repack-usage",children:"PG_REPACK usage"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Attach to Screen session:"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"screen\n"})}),"\n",(0,a.jsxs)(n.p,{children:["For more information about the Screen read this ",(0,a.jsx)(n.a,{href:"https://linux.die.net/man/1/screen",children:"guide"}),"."]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"You need to add the path to the PG_REPACK executable file. The PATH variable is an environment variable that contains an ordered list of paths that Unix will search for executables when running a command. Run the following command:"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"export PATH=$PATH:/usr/pgsql-12/bin/\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Create ",(0,a.jsx)(n.strong,{children:".pgpass"})," file and fill your data. The file ",(0,a.jsx)(n.strong,{children:".pgpass"})," the file referenced by PGPASSFILE contain passwords to be used if the connection requires a password. ",(0,a.jsx)(n.a,{href:"https://www.postgresql.org/docs/9.3/libpq-pgpass.html",children:"Documentation"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"cat << EOF | tee -a /.pgpass\n<database_host>:<database_port>:<database_name>:<database_user>:<database_password>\nEOF\n"})}),"\n",(0,a.jsxs)(n.p,{children:["For example, ",(0,a.jsx)(n.strong,{children:".pgpass"})," file should look like this:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"reportportal-cdufjldqrau0.eu-west-3.rds.amazonaws.com:5432:reportportal:rpuser:strongpassword\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Change permissions to .pgpasss file:"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"chmod 600 /.pgpass\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Set PGPASSFILE environment variable:"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"export PGPASSFILE='/.pgpass'\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Fill your data and run PG_REPACK:"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"pg_repack -h <database_address> -U <database_user> -k <database_name> &>> /pg_repack-rpdb.log\n"})}),"\n",(0,a.jsxs)(n.p,{children:["No password is needed for the database because you are using ",(0,a.jsx)(n.strong,{children:".pgpass"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["When you run the command, you will get artifact pg_repack-rpdb.log, where PG_REPACK will storage the logs. The pg_repack-rpdb.log file is stored in your root directory ",(0,a.jsx)(n.code,{children:"/"}),"."]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["To detach from the Screen session type ",(0,a.jsx)(n.strong,{children:"Control+a+d"})," (on OSX and Linux). The result will be similar to:"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"[detached from 22556.pts-0.ip-10-68-38-165]\n"})}),"\n",(0,a.jsx)(n.p,{children:"22556 is ID of you screen session. You will get a different ID. Save it."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Attach to the Screen session:"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"screen -r\n"})}),"\n",(0,a.jsx)(n.p,{children:"If you have one Screen session, you will join it. If you have two or more of them, you will get the following result:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'There are several suitable screens on:\n\t22556.pts-0.ip-10-68-38-165\t(Detached)\n\t8175.pts-0.ip-10-68-38-165\t(Detached)\nType "screen [-d] -r [pid.]tty.host" to resume one of them.\n'})}),"\n",(0,a.jsx)(n.p,{children:"To join the PG_REPACK Screen session fill your Screen ID that you saved in step 4 and run the following command:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"screen -r <your_screen_id>\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"To view the process of running the command you can read pg_repack-rpdb.log with command:"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"cat /pg_repack-rpdb.log\n"})}),"\n",(0,a.jsx)(n.p,{children:"In addition, you can stream log with the command:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"tail -F /pg_repack-rpdb.log\n"})}),"\n",(0,a.jsx)(n.p,{children:"Type Control+c (on OSX and Linux) to exit from Tail"})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>i,a:()=>o});var a=s(67294);const t={},r=a.createContext(t);function o(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);