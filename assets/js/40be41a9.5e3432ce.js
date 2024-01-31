"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6325],{27018:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=t(85893),i=t(11151);const s={sidebar_label:"Azure SAML"},a="Azure SAML",o={id:"reportportal-configuration/authorization/SAMLProvider/AzureSAML",title:"Azure SAML",description:"SAML plugin is available in ReportPortal on the Plugins page.",source:"@site/docs/reportportal-configuration/authorization/SAMLProvider/AzureSAML.mdx",sourceDirName:"reportportal-configuration/authorization/SAMLProvider",slug:"/reportportal-configuration/authorization/SAMLProvider/AzureSAML",permalink:"/docs/reportportal-configuration/authorization/SAMLProvider/AzureSAML",draft:!1,unlisted:!1,editUrl:"https://github.com/reportportal/docs/blob/develop/docs/reportportal-configuration/authorization/SAMLProvider/AzureSAML.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Azure SAML"},sidebar:"defaultSidebar",previous:{title:"SAML Provider",permalink:"/docs/reportportal-configuration/authorization/SAMLProvider/"},next:{title:"Okta SAML",permalink:"/docs/reportportal-configuration/authorization/SAMLProvider/OktaSAML"}},l={},c=[{value:"Configure SAML on Azure side",id:"configure-saml-on-azure-side",level:2},{value:"Create organization in Azure",id:"create-organization-in-azure",level:3},{value:"Create your application in Azure",id:"create-your-application-in-azure",level:3},{value:"Assign users to the application in Azure",id:"assign-users-to-the-application-in-azure",level:3},{value:"Configure Single sign-on on Azure",id:"configure-single-sign-on-on-azure",level:3},{value:"Basic SAML Configuration",id:"basic-saml-configuration",level:3},{value:"Add Azure attributes",id:"add-azure-attributes",level:3},{value:"Configure SAML on ReportPortal side",id:"configure-saml-on-reportportal-side",level:2},{value:"Synchronize Azure SAML and ReportPortal",id:"synchronize-azure-saml-and-reportportal",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",...(0,i.a)(),...e.components},{MediaViewer:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("MediaViewer",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"azure-saml",children:"Azure SAML"}),"\n",(0,r.jsx)(n.p,{children:"SAML plugin is available in ReportPortal on the Plugins page."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"If you have a pre-created Internal user, you can't log in by SAML using their credentials (Email or Name)."})})}),"\n",(0,r.jsx)(n.p,{children:"Login to ReportPortal via Azure SAML is available starting from version 5.7 (SAML Okta was implemented in versions before 5.7)."}),"\n",(0,r.jsx)(n.p,{children:"Azure SAML is a useful authorization method for big companies with 100+ employees, especially if this organization is already presented in Azure service. The main benefit here is no need for manual account creation. Users can log in to the ReportPortal using Azure SAML in an uncomplicated way: select login with SAML, then choose Azure, and upon login users\u2019 data is synchronized with ReportPortal automatically."}),"\n",(0,r.jsx)(n.p,{children:"If your organization is using Azure SAML and some employees left, there is no need to remove their accounts from ReportPortal and from other Azure applications \u2013 just clearing their accounts in Azure will be enough."}),"\n",(0,r.jsx)(n.p,{children:"To configure authorization via Azure SAML we need to synchronize Azure and ReportPortal."}),"\n",(0,r.jsx)(n.p,{children:"Firstly, configure SAML on Azure side."}),"\n",(0,r.jsx)(n.h2,{id:"configure-saml-on-azure-side",children:"Configure SAML on Azure side"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Log in to ",(0,r.jsx)(n.a,{href:"https://portal.azure.com",children:"Azure portal"})," using your organization creds."]}),"\n",(0,r.jsxs)(n.li,{children:["Click ",(0,r.jsx)(n.code,{children:"App Services"}),"."]}),"\n"]}),"\n",(0,r.jsx)(s,{src:t(86100),alt:"App Services button"}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsxs)(n.li,{children:["Click ",(0,r.jsx)(n.code,{children:"View"})," in the ",(0,r.jsx)(n.code,{children:"Manage Azure Active Directory"})," section."]}),"\n"]}),"\n",(0,r.jsx)(s,{src:t(12181),alt:"View button"}),"\n",(0,r.jsxs)(n.ol,{start:"4",children:["\n",(0,r.jsxs)(n.li,{children:["Click ",(0,r.jsx)(n.code,{children:"Manage Tenants"}),"."]}),"\n"]}),"\n",(0,r.jsx)(s,{src:t(79949),alt:"Manage Tenants"}),"\n",(0,r.jsx)(n.h3,{id:"create-organization-in-azure",children:"Create organization in Azure"}),"\n",(0,r.jsxs)(n.ol,{start:"5",children:["\n",(0,r.jsxs)(n.li,{children:["If you haven\u2019t configured organization in Azure yet, click ",(0,r.jsx)(n.code,{children:"Create"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"if you have configured organization in Azure, please, go to step 9."})}),"\n",(0,r.jsx)(s,{src:t(29962),alt:"Configure organization"}),"\n",(0,r.jsxs)(n.ol,{start:"6",children:["\n",(0,r.jsxs)(n.li,{children:["Select a tenant type (",(0,r.jsx)(n.code,{children:"Azure Active Directory"}),") and click ",(0,r.jsx)(n.code,{children:"Next: Configuration >"})," button."]}),"\n"]}),"\n",(0,r.jsx)(s,{src:t(50747),alt:"Select a tenant type"}),"\n",(0,r.jsxs)(n.ol,{start:"7",children:["\n",(0,r.jsxs)(n.li,{children:["Fill in the necessary fields and click ",(0,r.jsx)(n.code,{children:"Next: Review + create >"})," button."]}),"\n"]}),"\n",(0,r.jsx)(s,{src:t(52365),alt:"Create a tenant"}),"\n",(0,r.jsxs)(n.ol,{start:"8",children:["\n",(0,r.jsxs)(n.li,{children:["Pass the Captcha verification and click the ",(0,r.jsx)(n.code,{children:"Create"})," button."]}),"\n"]}),"\n",(0,r.jsx)(s,{src:t(54383),alt:"Captcha verification"}),"\n",(0,r.jsx)(n.h3,{id:"create-your-application-in-azure",children:"Create your application in Azure"}),"\n",(0,r.jsxs)(n.ol,{start:"9",children:["\n",(0,r.jsxs)(n.li,{children:["After the creation of an organization go to the ",(0,r.jsx)(n.code,{children:"Enterprise Applications"})," section."]}),"\n"]}),"\n",(0,r.jsx)(s,{src:t(61512),alt:"Enterprise Applications section"}),"\n",(0,r.jsxs)(n.ol,{start:"10",children:["\n",(0,r.jsxs)(n.li,{children:["Click ",(0,r.jsx)(n.code,{children:"New application"}),"."]}),"\n"]}),"\n",(0,r.jsx)(s,{src:t(98621),alt:"New application button"}),"\n",(0,r.jsxs)(n.ol,{start:"11",children:["\n",(0,r.jsxs)(n.li,{children:["Click ",(0,r.jsx)(n.code,{children:"Create your own application"}),"."]}),"\n"]}),"\n",(0,r.jsx)(s,{src:t(67524),alt:"Create your own application"}),"\n",(0,r.jsxs)(n.ol,{start:"12",children:["\n",(0,r.jsxs)(n.li,{children:["Enter the name of your application, choose ",(0,r.jsx)(n.code,{children:"Integrate any other application you don't find in the gallery (Non-gallery)"})," bullet and click ",(0,r.jsx)(n.code,{children:"Create"})," button."]}),"\n"]}),"\n",(0,r.jsx)(s,{src:t(57140),alt:"The name of your application"}),"\n",(0,r.jsx)(n.h3,{id:"assign-users-to-the-application-in-azure",children:"Assign users to the application in Azure"}),"\n",(0,r.jsxs)(n.ol,{start:"13",children:["\n",(0,r.jsx)(n.li,{children:"Assign users (e.g., yourself) to this application. Please, follow the next screenshots:"}),"\n"]}),"\n",(0,r.jsx)(s,{src:t(31005),alt:"Assign users to your application"}),"\n",(0,r.jsx)(s,{src:t(94962),alt:"Add user/group"}),"\n",(0,r.jsx)(s,{src:t(63431),alt:"Add assignment"}),"\n",(0,r.jsx)(n.h3,{id:"configure-single-sign-on-on-azure",children:"Configure Single sign-on on Azure"}),"\n",(0,r.jsxs)(n.ol,{start:"14",children:["\n",(0,r.jsxs)(n.li,{children:["Go to the ",(0,r.jsx)(n.code,{children:"Single sign-on"})," section."]}),"\n"]}),"\n",(0,r.jsx)(s,{src:t(96260),alt:"Single sign-on section"}),"\n",(0,r.jsxs)(n.ol,{start:"15",children:["\n",(0,r.jsx)(n.li,{children:"Choose SAML."}),"\n"]}),"\n",(0,r.jsx)(s,{src:t(73798),alt:"Select a Single sign-on method"}),"\n",(0,r.jsx)(n.h3,{id:"basic-saml-configuration",children:"Basic SAML Configuration"}),"\n",(0,r.jsxs)(n.ol,{start:"16",children:["\n",(0,r.jsxs)(n.li,{children:["Configure ",(0,r.jsx)(n.code,{children:"Basic SAML Configuration"})," settings as follows:"]}),"\n"]}),"\n",(0,r.jsx)(s,{src:t(15055),alt:"Basic SAML Configuration"}),"\n",(0,r.jsx)(n.h3,{id:"add-azure-attributes",children:"Add Azure attributes"}),"\n",(0,r.jsxs)(n.ol,{start:"17",children:["\n",(0,r.jsxs)(n.li,{children:["Edit ",(0,r.jsx)(n.code,{children:"Attributes & Claims"})," settings and add ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"email"})}),", ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"firstName"})})," and ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"lastName"})})," attributes (default Azure attributes have ugly format). Please follow the next screenshots:"]}),"\n"]}),"\n",(0,r.jsx)(s,{src:t(27503),alt:"Edit Attributes & Claims settings"}),"\n",(0,r.jsx)(s,{src:t(36619),alt:"Add new claim"}),"\n",(0,r.jsx)(s,{src:t(90745),alt:"Manage claim"}),"\n",(0,r.jsx)(n.p,{children:"SAML configuration is completed on Azure side after adding these attributes."}),"\n",(0,r.jsx)(n.p,{children:"Lastly, configure SAML on ReportPortal side."}),"\n",(0,r.jsx)(n.h2,{id:"configure-saml-on-reportportal-side",children:"Configure SAML on ReportPortal side"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Log in to ",(0,r.jsx)(n.strong,{children:"ReportPortal"})," as Admin."]}),"\n",(0,r.jsxs)(n.li,{children:["Open Menu at the bottom and choose ",(0,r.jsx)(n.code,{children:"Administrate"})," section."]}),"\n"]}),"\n",(0,r.jsx)(s,{src:t(84280),alt:"Administrate section in our test automation reporting platform"}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsxs)(n.li,{children:["Select ",(0,r.jsx)(n.code,{children:"Plugins"}),"."]}),"\n"]}),"\n",(0,r.jsx)(s,{src:t(67919),alt:"Plugins section in our continuous testing platform"}),"\n",(0,r.jsxs)(n.ol,{start:"4",children:["\n",(0,r.jsxs)(n.li,{children:["Open ",(0,r.jsx)(n.code,{children:"SAML"}),"."]}),"\n"]}),"\n",(0,r.jsx)(s,{src:t(6991),alt:"SAML plugin"}),"\n",(0,r.jsxs)(n.ol,{start:"5",children:["\n",(0,r.jsxs)(n.li,{children:["Click the ",(0,r.jsx)(n.code,{children:"Add integration"})," button."]}),"\n"]}),"\n",(0,r.jsx)(s,{src:t(62772),alt:"Add integration"}),"\n",(0,r.jsx)(n.h2,{id:"synchronize-azure-saml-and-reportportal",children:"Synchronize Azure SAML and ReportPortal"}),"\n",(0,r.jsxs)(n.ol,{start:"6",children:["\n",(0,r.jsx)(n.li,{children:"Synchronize Azure SAML and ReportPortal as follows:"}),"\n"]}),"\n",(0,r.jsx)(s,{src:t(57803),alt:"Configure Azure SAML in our test automation dashboard"}),"\n",(0,r.jsx)(n.p,{children:"Finally, you can log in to ReportPortal using Azure SAML."})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},86100:(e,n,t)=>{t.r(n),t.d(n,{default:()=>r});const r=t.p+"assets/images/AzureSAML1-92b042929d4e97ced259a68ff9c48595.png"},67524:(e,n,t)=>{t.r(n),t.d(n,{default:()=>r});const r=t.p+"assets/images/AzureSAML10-6a23fd3b721c2602c55c7ed2a0be6bbc.png"},57140:(e,n,t)=>{t.r(n),t.d(n,{default:()=>r});const r=t.p+"assets/images/AzureSAML11-1004dc6e53af486ffca2d4e69c810f18.png"},31005:(e,n,t)=>{t.r(n),t.d(n,{default:()=>r});const r=t.p+"assets/images/AzureSAML12-ef24287d428faf1c1225268f31276a06.png"},94962:(e,n,t)=>{t.r(n),t.d(n,{default:()=>r});const r=t.p+"assets/images/AzureSAML13-527d6583c9f0fc9663ad826bf699054f.png"},63431:(e,n,t)=>{t.r(n),t.d(n,{default:()=>r});const r=t.p+"assets/images/AzureSAML14-8f34adbfd9f99384a1170e5ad3c1650e.png"},96260:(e,n,t)=>{t.r(n),t.d(n,{default:()=>r});const r=t.p+"assets/images/AzureSAML15-43590b9488a24255e9c31db9384c3604.png"},73798:(e,n,t)=>{t.r(n),t.d(n,{default:()=>r});const r=t.p+"assets/images/AzureSAML16-7de84a049daded06d2efc5e1aae1c09c.png"},15055:(e,n,t)=>{t.r(n),t.d(n,{default:()=>r});const r=t.p+"assets/images/AzureSAML17-31dc030807624856b9769c82af7ac7da.png"},27503:(e,n,t)=>{t.r(n),t.d(n,{default:()=>r});const r=t.p+"assets/images/AzureSAML18-5d4186bafc7685bbdb9838a38ff96393.png"},36619:(e,n,t)=>{t.r(n),t.d(n,{default:()=>r});const r=t.p+"assets/images/AzureSAML19-e424d1bd6e85298967bb1680c6713643.png"},12181:(e,n,t)=>{t.r(n),t.d(n,{default:()=>r});const r=t.p+"assets/images/AzureSAML2-b88ab5331da6850050d3bdc2e29e0224.png"},90745:(e,n,t)=>{t.r(n),t.d(n,{default:()=>r});const r=t.p+"assets/images/AzureSAML20-78ea4fb5fe53ef4fb6c826517b218533.png"},84280:(e,n,t)=>{t.r(n),t.d(n,{default:()=>r});const r=t.p+"assets/images/AzureSAML21-e96d50d6b9c587b71220461098459175.png"},67919:(e,n,t)=>{t.r(n),t.d(n,{default:()=>r});const r=t.p+"assets/images/AzureSAML22-630e92e9c9422a3d516085766af00840.png"},6991:(e,n,t)=>{t.r(n),t.d(n,{default:()=>r});const r=t.p+"assets/images/AzureSAML23-947d036a20b59253157372519c149f91.png"},62772:(e,n,t)=>{t.r(n),t.d(n,{default:()=>r});const r=t.p+"assets/images/AzureSAML24-2ebfa04dfad9edff564ed1af0a0f1090.png"},79949:(e,n,t)=>{t.r(n),t.d(n,{default:()=>r});const r=t.p+"assets/images/AzureSAML3-980285de43e221c4754358f0d095c165.png"},29962:(e,n,t)=>{t.r(n),t.d(n,{default:()=>r});const r=t.p+"assets/images/AzureSAML4-df61701732d7a04a632ae489776041de.png"},50747:(e,n,t)=>{t.r(n),t.d(n,{default:()=>r});const r=t.p+"assets/images/AzureSAML5-e8e490ee53127d32e35266b27172df07.png"},52365:(e,n,t)=>{t.r(n),t.d(n,{default:()=>r});const r=t.p+"assets/images/AzureSAML6-787a5dba2a61ba981a2f78b4e84318f1.png"},54383:(e,n,t)=>{t.r(n),t.d(n,{default:()=>r});const r=t.p+"assets/images/AzureSAML7-93d6b3810967b1835920afcd3856c21a.png"},61512:(e,n,t)=>{t.r(n),t.d(n,{default:()=>r});const r=t.p+"assets/images/AzureSAML8-798f0f507c461ecc20e7f40ec9825459.png"},98621:(e,n,t)=>{t.r(n),t.d(n,{default:()=>r});const r=t.p+"assets/images/AzureSAML9-5a79b3928b71f7c1acb8e81c7d8fe07d.png"},57803:(e,n,t)=>{t.r(n),t.d(n,{default:()=>r});const r=t.p+"assets/images/SAMLIntegration-ea71af4655807dc1ee2d23cdbef1ed6f.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>a});var r=t(67294);const i={},s=r.createContext(i);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);