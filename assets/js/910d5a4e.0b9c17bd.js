"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[56059],{5610:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>c});var i=r(85893),o=r(11151);const t={sidebar_position:8,sidebar_label:"E-mail server"},s="E-mail server",a={id:"plugins/EmailServer",title:"E-mail server",description:"E-mail server plugin is available in ReportPortal on the Plugins page.",source:"@site/docs/plugins/EmailServer.mdx",sourceDirName:"plugins",slug:"/plugins/EmailServer",permalink:"/docs/plugins/EmailServer",draft:!1,unlisted:!1,editUrl:"https://github.com/reportportal/docs/blob/develop/docs/plugins/EmailServer.mdx",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,sidebar_label:"E-mail server"},sidebar:"docs",previous:{title:"Sauce Labs",permalink:"/docs/plugins/SauceLabs"},next:{title:"External Integrations",permalink:"/docs/category/external-integrations"}},l={},c=[{value:"Add E-mail server integrations",id:"add-e-mail-server-integrations",level:2},{value:"Global E-mail server integration",id:"global-e-mail-server-integration",level:2},{value:"Project E-mail integration",id:"project-e-mail-integration",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components},{MediaViewer:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("MediaViewer",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"e-mail-server",children:"E-mail server"}),"\n",(0,i.jsx)(n.p,{children:"E-mail server plugin is available in ReportPortal on the Plugins page."}),"\n",(0,i.jsx)(n.p,{children:"You don't need to download . It is already available in ReportPortal on the Plugins page."}),"\n",(0,i.jsx)(n.h2,{id:"add-e-mail-server-integrations",children:"Add E-mail server integrations"}),"\n",(0,i.jsx)(n.p,{children:"You can integrate our centralized test automation tool with an E-mail server via SMTP protocol. With this integration, you will be able to perform such functions as:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"invite a new user to the project"}),"\n",(0,i.jsx)(n.li,{children:"configure notification rules on launch finish"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Permissions:"})}),"\n",(0,i.jsxs)(n.p,{children:["user with account role ",(0,i.jsx)(n.em,{children:"ADMINISTRATOR"})," can configure E-mail integration for the whole instance or per project.\nUser with account role ",(0,i.jsx)(n.em,{children:"PROJECT MANAGER"})," can configure E-mail integration only on a project where he is assigned on as Project Manager."]}),"\n",(0,i.jsx)(n.h2,{id:"global-e-mail-server-integration",children:"Global E-mail server integration"}),"\n",(0,i.jsx)(n.p,{children:"To configure the SMTP server for the whole instance:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Log in to the ReportPortal as an ADMIN user"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Then open the list on the right of the user's image."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Click the 'Administrative' link"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Click the 'Plugins' from the left-hand sidebar"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Click on the 'Email Server' tab."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Click on Add new integration"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"The next fields should be present:"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"`Host`: <host_name_of_email_server>\n`Protocol`: SMTP (predefined)\n`Default sender name`: (optional)\n`Port`: <port_number>\n`Authorization`: OFF/ON \n`Username`: <user_email_address>\n`Password`: <user_email_password>\n'TLS' or 'SSL': should be checked depends on the selected port.\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Example of SMTP server configuration for Gmail email server (detailed info could be found ",(0,i.jsx)(n.a,{href:"https://support.google.com/a/answer/176600?hl=en",children:"here"}),")"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"`Host`: smtp.gmail.com\n`Protocol`: SMTP\n`Default sender name`: Report Portal\n`Port`: 465\n`Authorization`: ON\n`Username`: <user_email_address>\n`Password`: <user_email_password>\n`SSL`: checkbox should be checked.\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Example of an SMTP server configuration for a Yandex email server (detailed info can be found ",(0,i.jsx)(n.a,{href:"https://yandex.com/support/mail-new/mail-clients.html",children:"here"}),")"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"`Host`: smtp.yandex.com\n`Protocol`: SMTP\n`Default sender name`: Report Portal\n`Port`: 465\n`Authorization`: ON\n`Username`: <user_email_address>\n`Password`: <user_email_password>\n`SSL`: checkbox should be checked.\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"8",children:["\n",(0,i.jsx)(n.li,{children:"Confirm data in the form"}),"\n"]}),"\n",(0,i.jsx)(r,{src:"https://youtu.be/FekmJRNedfU",alt:"E-mail server configuration on our qa automation dashboard",type:"video"}),"\n",(0,i.jsx)(n.p,{children:"After E-mail server integration adding, the configuration will be applied to all projects on the instance."}),"\n",(0,i.jsx)(n.h2,{id:"project-e-mail-integration",children:"Project E-mail integration"}),"\n",(0,i.jsx)(n.p,{children:"If E-mail integration has not to be added on the project, or if Project Manager or Admin want to specified special configurations for a special project, they can configure E-mail server in the project settings."}),"\n",(0,i.jsx)(n.p,{children:"To configure SMTP server for one single project instance:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Log in to the ReportPortal as an ADMIN or PM user"}),"\n",(0,i.jsx)(n.li,{children:"Then click on the Project settings icon."}),"\n",(0,i.jsx)(n.li,{children:"Click on the Integrations tab."}),"\n",(0,i.jsx)(n.li,{children:"Click on the 'E-mail Server' tab."}),"\n",(0,i.jsx)(n.li,{children:'Click on the button "Unlink & Setup Manually"'}),"\n",(0,i.jsx)(n.li,{children:"The next fields should be present:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"`Host`: <host_name_of_email_server>\n`Protocol`: SMTP (predefined)\n`Default sender name`: (optional)\n`Port`: <port_number>\n`Authorization`: OFF/ON \n`Username`: <user_email_address>\n`Password`: <user_email_password>\n'TLS' or 'SSL': should be checked depends on the selected port.\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Example of SMTP server configuration for Gmail email server (detailed info could be found ",(0,i.jsx)(n.a,{href:"https://support.google.com/a/answer/176600?hl=en",children:"here"}),")"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"`Host`: smtp.gmail.com\n`Protocol`: SMTP\n`Default sender name`: Report Portal\n`Port`: 465\n`Authorization: ON\n`Username`: <user_email_address>\n`Password`: <user_email_password>\n`SSL`: checkbox should be checked.\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Example of an SMTP server configuration for a Yandex email server (detailed info can be found ",(0,i.jsx)(n.a,{href:"https://yandex.com/support/mail-new/mail-clients.html",children:"here"}),")"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"Host: smtp.yandex.com\n`Protocol`: SMTP\n`Default sender name`: Report Portal\n`Port`: 465\n`Authorization`: ON\n`Username`: <user_email_address>\n`Password`: <user_email_password>\n`SSL`: checkbox should be checked.\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"8",children:["\n",(0,i.jsx)(n.li,{children:"Confirm data in the form"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"After E-mail server integration adding, the configuration will be applied to all projects on the instance."}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"In case you unlink your project settings from Global settings, for the chosen project"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"A possibility to provide custom host in links"})," (started from 5.4 version)"]}),"\n",(0,i.jsx)(n.p,{children:'You can make this operation via API.\nFor that just choose an API call Integration controller - Update project integration instance, and provide a link to your host in the field  \' "rpHost": "custom_link.com" \'\''}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'PUT/v1/integration/{projectName}/{integrationId}\n\n{\n "enabled": true,\n "integrationParameters": {\n "protocol": "smtp",\n "rpHost": "custom_link.com",\n "authEnabled": true,\n "port": "",\n "sslEnabled": false,\n "starTlsEnabled": true,\n "host": "smtp.com",\n "username": ""\n }\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>a,a:()=>s});var i=r(67294);const o={},t=i.createContext(o);function s(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);