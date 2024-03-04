"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3931],{43318:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>a,toc:()=>l});var s=o(85893),r=o(11151);const n={sidebar_position:2,sidebar_label:"Issues with JIRA bug tracking system: how to resolve"},i="Issues with JIRA bug tracking system: how to resolve",a={id:"issues-troubleshooting/IssuesWithJIRABugTrackingSystemHowToResolve",title:"Issues with JIRA bug tracking system: how to resolve",description:"In case user is connecting to JIRA system and gets the error like",source:"@site/docs/issues-troubleshooting/IssuesWithJIRABugTrackingSystemHowToResolve.md",sourceDirName:"issues-troubleshooting",slug:"/issues-troubleshooting/IssuesWithJIRABugTrackingSystemHowToResolve",permalink:"/docs/issues-troubleshooting/IssuesWithJIRABugTrackingSystemHowToResolve",draft:!1,unlisted:!1,editUrl:"https://github.com/reportportal/docs/blob/develop/docs/issues-troubleshooting/IssuesWithJIRABugTrackingSystemHowToResolve.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Issues with JIRA bug tracking system: how to resolve"},sidebar:"docs",previous:{title:"Tuning CI tool",permalink:"/docs/issues-troubleshooting/TuningCITool"},next:{title:"How to avoid local execution reported into project space",permalink:"/docs/issues-troubleshooting/HowToAvoidLocalExecutionReportedIntoProjectSpace"}},c={},l=[];function h(e){const t={admonition:"admonition",code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"issues-with-jira-bug-tracking-system-how-to-resolve",children:"Issues with JIRA bug tracking system: how to resolve"}),"\n",(0,s.jsx)(t.p,{children:'In case user is connecting to JIRA system and gets the error like\n"Impossible interact with external system.<name of current user\'s project>", there\nare some reasons could cause the issue.'}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"First"}),", verify that the link to JIRA system is correct. There are some variants\nare possible, for instance:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"https://jira.company.com/jira\nhttps://jiraeu.company.com\n"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Second"}),", verify the project name is correct. Please fill in Project name field with\nproject key value, e.g. project ABC-DEF has key ABCDEF."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Third"}),", verify username and password data. Make sure, that login name and not email\nis in the username field. In case all the data above is correct, but the error\nappears again, check whether user's credentials to JIRA are not expired.\nAs far as JIRA sends the request in html format, we are not able to display the real\nreason of error.\nTo check and/or resolve the issue, please do the next steps:"]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Open JIRA page"}),"\n",(0,s.jsx)(t.li,{children:"Login JIRA with domain credentials using basic authorization (i.e., fill in user's\nlogin name and password into the fields)"}),"\n",(0,s.jsx)(t.li,{children:"Submit the login form\nScreen with CAPTCHA should appears"}),"\n",(0,s.jsx)(t.li,{children:"Enter the symbols"}),"\n",(0,s.jsx)(t.li,{children:"Submit the credentials again"}),"\n",(0,s.jsx)(t.li,{children:"Now try to establish the connection to JIRA on ReportPortal project."}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Fourth"}),", the connection to the JIRA instance might require a certificate. If that's the case, the certificate needs to be imported inside the API container. Follow these steps:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh",children:"# 1. Access the shell of the API Docker container\ndocker exec -it reportportal_api_1 /bin/sh\n\n# 2. Change the directory to point to the 'security' directory\ncd /usr/lib/jvm/jre/lib/security/\n# Or use this command if the 'security' directory is in another folder:\n# cd /usr/lib/jvm/java-11-amazon-corretto/jre/lib/security/\n\nNote: Replace 'java-11-amazon-corretto' with the version in the latest API Docker image.\n\n# 3. Get the certificate file\ncurl -O url://to/your/foo.cert\n\n# 4. Import the certificate\nkeytool -importcert -noprompt -file foo.cert -alias \"JIRA CERT\" -keystore cacerts -storepass abc123 # note: the default password for the keystore is 'changeit'\n\n# 5. Exit the shell and restart the docker API.\nexit\n\n# 6. Try to establish the connection to JIRA on the ReportPortal project again.\n"})}),"\n",(0,s.jsx)(t.p,{children:"Or use this alternative method:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh",children:"# 1. Copy the certificate into the Docker container\ndocker cp cert.der reportportal_api_1:/cert.der\n\n# 2. Import the certificate\ndocker exec -t -i reportportal_api_1 ./usr/lib/jvm/jre/bin/keytool -import -alias rootcert -keystore /usr/lib/jvm/jre/lib/security/cacerts -file /cert.der\n# If the 'jre' folder is inside another folder, use the following command instead:\n# docker exec -t -i reportportal_api_1 ./usr/lib/jvm/java-11-amazon-corretto/jre/bin/keytool -import -alias rootcert -keystore /usr/lib/jvm/java-11-amazon-corretto/jre/lib/security/cacerts -file /cert.der\n\nNote: Replace 'java-11-amazon-corretto' with the version in the latest API Docker image.\n\n# 3. Exit and restart the Docker API.\nexit\n\n# 4. Attempt the connection to JIRA on ReportPortal project again.\n"})}),"\n",(0,s.jsx)(t.p,{children:"Both methods should allow you to import the necessary certificate for your JIRA connection inside the ReportPortal API container."}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:"SSL instance of JIRA (even cloud version) can be accessed by JIRA API token, used instead of password."})}),"\n",(0,s.jsx)(t.p,{children:"If these didn't resolve your issues, please contact us."})]})}function d(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},11151:(e,t,o)=>{o.d(t,{Z:()=>a,a:()=>i});var s=o(67294);const r={},n=s.createContext(r);function i(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);