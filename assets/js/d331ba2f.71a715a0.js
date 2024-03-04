"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4143],{20593:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var t=i(85893),r=i(11151);const s={sidebar_position:1,sidebar_label:"Manage plugins"},l="Manage plugins",a={id:"plugins/ManagePlugins",title:"Manage plugins",description:"ReportPortal as a test management system can be reinforced by uploading plugins.  For now, you can install the next plugins from the box:",source:"@site/docs/plugins/ManagePlugins.mdx",sourceDirName:"plugins",slug:"/plugins/ManagePlugins",permalink:"/docs/plugins/ManagePlugins",draft:!1,unlisted:!1,editUrl:"https://github.com/reportportal/docs/blob/develop/docs/plugins/ManagePlugins.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Manage plugins"},sidebar:"docs",previous:{title:"Plugins",permalink:"/docs/category/plugins"},next:{title:"Atlassian Jira Server",permalink:"/docs/plugins/AtlassianJiraServer"}},o={},c=[{value:"Upload plugin",id:"upload-plugin",level:2},{value:"Update a plugin",id:"update-a-plugin",level:2},{value:"Enable / Disable a plugin",id:"enable--disable-a-plugin",level:2},{value:"Uninstall a plugin",id:"uninstall-a-plugin",level:2},{value:"Configure a plugin",id:"configure-a-plugin",level:2}];function h(e){const n={a:"a",blockquote:"blockquote",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components},{MediaViewer:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("MediaViewer",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"manage-plugins",children:"Manage plugins"}),"\n",(0,t.jsx)(n.p,{children:"ReportPortal as a test management system can be reinforced by uploading plugins.  For now, you can install the next plugins from the box:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Bug Tracking Systems plugins: Atlassian Jira Server, Atlassian Jira Cloud, Azure DevOps and Rally"}),"\n",(0,t.jsx)(n.li,{children:"E-mail server"}),"\n",(0,t.jsx)(n.li,{children:"Sauce Labs"}),"\n"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Plugin"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Features"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Atlassian Jira Server/Atlassian Jira Cloud/Azure DevOps/Rally"}),(0,t.jsx)(n.td,{children:"This plugin can be required for projects that collect defects in a separate tracking tool. The integration provides an exchange of information between ReportPortal and Jira or Rally, for example: posting new issues to BTS, linking test failures with the existing issue in BTS, track issue statuses"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"E-mail server"}),(0,t.jsx)(n.td,{children:"With this plugin, you will be able to configure notifications about test result finish in real time."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"SauceLabs"}),(0,t.jsx)(n.td,{children:"This plugin helps you to integrate ReportPortal with Sauce Labs and watch a video of test executions right in the ReportPortal application on the log view."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"LDAP/Active directory/SAML"}),(0,t.jsx)(n.td,{children:"This plugin helps authorize without new user creation"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Implement your own plugin"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://reportportal.io/docs/dev-guides/PluginDevelopersGuide/",children:"https://reportportal.io/docs/dev-guides/PluginDevelopersGuide/"})})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"upload-plugin",children:"Upload plugin"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Permissions:"}),"\nOnly ADMINISTRATOR can upload plugin."]}),"\n",(0,t.jsxs)(n.p,{children:["You can find the latest version of all ReportPortal plugins by the ",(0,t.jsx)(n.a,{href:"https://search.maven.org/search?q=g:com.epam.reportportal%20plugin",children:"link"}),". Then you should download the latest version of a needed plugin. Or you can use a direct link to the needed plugin from the table below."]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Plugin"}),(0,t.jsx)(n.th,{children:"Link to download"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Atlassian JIRA Server"}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.a,{href:"https://search.maven.org/artifact/com.epam.reportportal/plugin-bts-jira",children:"https://search.maven.org/artifact/com.epam.reportportal/plugin-bts-jira"})," or ",(0,t.jsx)(n.a,{href:"https://github.com/reportportal/plugin-bts-jira/packages",children:"https://github.com/reportportal/plugin-bts-jira/packages"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Atlassian JIRA Cloud"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://github.com/reportportal/plugin-bts-jira-cloud/packages",children:"https://github.com/reportportal/plugin-bts-jira-cloud/packages"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Azure DevOps"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://github.com/reportportal/plugin-bts-azure/packages",children:"https://github.com/reportportal/plugin-bts-azure/packages"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Rally"}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.a,{href:"https://search.maven.org/artifact/com.epam.reportportal/plugin-bts-rally",children:"https://search.maven.org/artifact/com.epam.reportportal/plugin-bts-rally"})," or ",(0,t.jsx)(n.a,{href:"https://github.com/reportportal/plugin-bts-rally/packages",children:"https://github.com/reportportal/plugin-bts-rally/packages"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"SauceLabs"}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.a,{href:"https://search.maven.org/artifact/com.epam.reportportal/plugin-saucelabs",children:"https://search.maven.org/artifact/com.epam.reportportal/plugin-saucelabs"})," or ",(0,t.jsx)(n.a,{href:"https://github.com/reportportal/plugin-saucelabs/packages",children:"https://github.com/reportportal/plugin-saucelabs/packages"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"E-mail/LDAP/ Active directory/SAML"}),(0,t.jsx)(n.td,{children:"You do not need to download these plugins, there are already available on the Plugin page"})]})]})]}),"\n",(0,t.jsx)(i,{src:"https://youtu.be/xR75Bdq3uaM",alt:"Upload Plugin to our open source test reporting tool",type:"video"}),"\n",(0,t.jsx)(n.p,{children:"For a plugin uploading please perform the following actions:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"login ReportPortal with Admin account"}),"\n",(0,t.jsx)(n.li,{children:"come on Administrative> Plugins"}),"\n",(0,t.jsx)(n.li,{children:"click on a button Upload"}),"\n",(0,t.jsx)(n.li,{children:"choose .jar file which should be uploaded"}),"\n",(0,t.jsx)(n.li,{children:"and click Upload"}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Technical requirements for the plugin:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"a plugin should have the format: .jar"}),"\n",(0,t.jsx)(n.li,{children:"a plugin file size is up to 128Mb"}),"\n",(0,t.jsx)(n.li,{children:"a plugin should have a version"}),"\n",(0,t.jsx)(n.li,{children:"a plugin should have a Manifest"}),"\n",(0,t.jsx)(n.li,{children:"a plugin should have a plugin Extensions"}),"\n",(0,t.jsx)(n.li,{children:"Admin cannot upload a plugin with existing ID and existing version to the system"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"update-a-plugin",children:"Update a plugin"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Permissions:"}),"\nOnly ADMINISTRATOR can update the plugin.\nIt is the same procedure as for Uploading. You can upload a plugin with the latest version to the ReportPortal, and an existing version will be updated to the latest one."]}),"\n",(0,t.jsx)(n.h2,{id:"enable--disable-a-plugin",children:"Enable / Disable a plugin"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Permissions:"}),"\nOnly ADMINISTRATOR can enable / disable plugin."]}),"\n",(0,t.jsx)(i,{src:"https://youtu.be/Sj9BpnTIxW8",alt:"Enable/Disable Plugin",type:"video"}),"\n",(0,t.jsx)(n.p,{children:"If you do not want to remove a plugin from project settings, but want to save plugin configurations, you can use an enable/disable function.\nFor that:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"login ReportPortal with Admin account"}),"\n",(0,t.jsx)(n.li,{children:"come to Administrative page > Plugins tab > Plugin > Plugin details"}),"\n",(0,t.jsx)(n.li,{children:"click a switcher Disable"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The plugin will be removed from Project Settings on the project spaces. But all plugin configurations will be saved in the DataBase and you can return them back if you need by clicking on the switcher enable the plugin."}),"\n",(0,t.jsx)(n.h2,{id:"uninstall-a-plugin",children:"Uninstall a plugin"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Permissions:"}),"\nOnly ADMINISTRATOR can uninstall the plugin."]}),"\n",(0,t.jsx)(n.p,{children:"Users can remove a plugin from the system. For that  you should:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"login ReportPortal with Admin account"}),"\n",(0,t.jsx)(n.li,{children:"come to Administrative page > Plugins tab > Plugin > Plugin details"}),"\n",(0,t.jsx)(n.li,{children:"click a button Uninstall"}),"\n",(0,t.jsx)(n.li,{}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The plugin will be successfully deleted. All plugin configurations will be deleted from the DataBase.\nE-mail plugin can not be uninstalled."}),"\n",(0,t.jsx)(n.h2,{id:"configure-a-plugin",children:"Configure a plugin"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Permissions:"}),"\nOnly ADMINISTRATOR can make global configurations of a plugin.\nADMINISTRATOR and PROJECT MANAGER can make project configurations of a plugin."]}),"\n",(0,t.jsxs)(n.p,{children:["Users can configure a plugin on the ",(0,t.jsx)(n.strong,{children:"instance-level"})," (global configuration) and also on the ",(0,t.jsx)(n.strong,{children:"project level"})," (project configuration). The configuration is the same for both levels."]}),"\n",(0,t.jsxs)(n.p,{children:["If a user configures plugin on the ",(0,t.jsx)(n.strong,{children:"global level"}),", then these configurations will be applied to all projects on the instance, which do not have their own configurations."]}),"\n",(0,t.jsxs)(n.p,{children:["If the user configures a plugin on the ",(0,t.jsx)(n.strong,{children:"project level"}),", then these configurations will be applied to only this project and replace global configurations, in case they are."]}),"\n",(0,t.jsxs)(n.p,{children:["Details on how to configure a specific plugin please find in the ",(0,t.jsx)(n.a,{href:"/reportportal-configuration/IntegrationViaPlugin",children:"Integration section"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/plugins/AtlassianJiraServer",children:"integration with Atlassian Jira Server"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/plugins/AtlassianJiraCloud",children:"integration with Atlassian Jira Cloud"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/plugins/AzureDevOpsBTS",children:"integration with Azure DevOps"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/plugins/Rally",children:"integration with Rally"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/plugins/SauceLabs",children:"integration with SauceLabs"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/plugins/EmailServer",children:"integration with E-mail server"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/reportportal-configuration/authorization/LDAP",children:"integration with LDAP"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/reportportal-configuration/authorization/ActiveDirectory",children:"integration with Active directory"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/reportportal-configuration/authorization/SAMLProvider/OktaSAML",children:"integration with Okta SAML"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/reportportal-configuration/authorization/SAMLProvider/AzureSAML",children:"integration with Azure SAML"})}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Use case 1:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Situation:"})," A small team, on ReportPortal instance there are several projects. Separate projects are added for different test types (UI, API, Unit and other). The team works with one project in Jira (or Rally). Different projects post new bugs in the same Jira (or Rally) project.\n",(0,t.jsx)(n.strong,{children:"Solution:"}),' configure global integration for Jira (or Rally) plugin on the "Administrate" section.\n',(0,t.jsx)(n.strong,{children:"Pros:"})," Administrator configures integration once, and should not perform the same action several times. If the integration requires some changes, the Administrator can easily edit an integration, and the changes will apply to all projects on the instance."]}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Use case 2:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Situation:"}),"  On ReportPortal instance there are several projects. Separate projects are added for different teams. Each team works with its project in Jira (or Rally) and posts new bugs in different Jira (or Rally) projects. Each team should not have access to the Jira (or Rally) project of other teams.\n",(0,t.jsx)(n.strong,{children:"Solution:"})," configure project integrations for Jira (or Rally) plugin on the Project settings.\n",(0,t.jsx)(n.strong,{children:"Pros:"})," Project Manager or Administrator configures integrations per project, team members from different projects can not see configurations of each other."]}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Use case 3:"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Situation:"}),"  On ReportPortal instance there are several projects. Separate projects are added for different teams. But for one team has been added several projects. So several projects on ReportPortal have connections with one Jira (or Rally) project and several projects have a connection with different Jira (or Rally) projects.\n",(0,t.jsx)(n.strong,{children:"Solution:"})," configure global integrations on the Management board, and configure project integrations for Jira (or Rally) plugin on the Project settings.\n",(0,t.jsx)(n.strong,{children:"Pros:"})," Administrator configures integration once for those who need the same settings, and Project Manager or Administrator configures integrations per project, for those projects who need to limit access."]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>l});var t=i(67294);const r={},s=t.createContext(r);function l(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);