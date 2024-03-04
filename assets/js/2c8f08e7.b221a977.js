(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8442],{17438:(e,t,o)=>{"use strict";o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>f,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var n=o(85893),r=o(11151),i=(o(39620),o(9472)),a=o.n(i),s=o(85162);o(3158);const l={id:"reportportal-api",title:"ReportPortal API",description:"![reportportal-logo](https://reportportal.io/docs/img/logo.svg)",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0,custom_edit_url:null},c="Introduction",d={id:"api/api-design/reportportal-api",title:"ReportPortal API",description:"![reportportal-logo](https://reportportal.io/docs/img/logo.svg)",source:"@site/docs/api/api-design/reportportal-api.info.mdx",sourceDirName:"api/api-design",slug:"/api/api-design/reportportal-api",permalink:"/docs/api/api-design/reportportal-api",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"reportportal-api",title:"ReportPortal API",description:"![reportportal-logo](https://reportportal.io/docs/img/logo.svg)",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0,custom_edit_url:null},sidebar:"apiDesign",previous:{title:"API Documentation",permalink:"/docs/category/api/api-design"},next:{title:"User API Keys",permalink:"/docs/api/api-design/user-api-keys"}},p={},u=[];function h(e){const t={a:"a",code:"code",h1:"h1",img:"img",p:"p",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{className:"theme-doc-version-badge badge badge--secondary",children:(0,n.jsx)(t.p,{children:"Version: 5.10.1"})}),"\n",(0,n.jsx)("h1",{className:"openapi__heading",children:(0,n.jsx)(t.p,{children:"ReportPortal API"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://reportportal.io/docs/img/logo.svg",alt:"reportportal-logo"})}),"\n",(0,n.jsxs)(t.p,{children:["This is the API documentation for ReportPortal. We describe this documentation\nfollowing our ",(0,n.jsx)(t.a,{href:"https://github.com/reportportal/reportportal-common-api/blob/main/docs/api-principles.md",children:"API Principles"}),"\nand ",(0,n.jsx)(t.a,{href:"https://opensource.zalando.com/restful-api-guidelines/",children:"RESTful API Guidelines"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["Because this documentation is created according to the\n",(0,n.jsx)(t.a,{href:"https://swagger.io/resources/articles/adopting-an-api-first-approach/",children:"API design first approach"}),",\nit doesn't contain information about all existing endpoints. There are only pre-designed endpoints.\nIf you want to see the full documentation, you can check\nthe ",(0,n.jsx)(t.a,{href:"https://reportportal.io/docs/category/api/service-api",children:"Auto-generated API documentation"}),"."]}),"\n",(0,n.jsx)(t.h1,{id:"introduction",children:"Introduction"}),"\n",(0,n.jsx)(t.p,{children:"ReportPortal is a service for continuous testing.\nIt provides a platform for test automation and allows you to analyze\nthe results of tests in various ways. The service is implemented as a web\napplication and is available through a web interface or API."}),"\n",(0,n.jsx)(t.h1,{id:"authentication",children:"Authentication"}),"\n",(0,n.jsxs)(t.p,{children:["ReportPortal uses the ",(0,n.jsx)(t.a,{href:"https://jwt.io/",children:"JWT"})," authentication protocol for UI client requests and\nthe ",(0,n.jsx)(t.a,{href:"https://reportportal.io/docs/reportportal-configuration/HowToGetAnAccessTokenInReportPortal/#2-authorization-with-users-api-key-for-agents",children:"API Key"}),"\nfor agent requests."]}),"\n",(0,n.jsxs)(t.p,{children:["Both approaches use the same security scheme: ",(0,n.jsx)(t.code,{children:"Bearer"}),"."]}),"\n",(0,n.jsxs)("div",{style:{marginBottom:"2rem"},children:[(0,n.jsx)("h2",{id:"authentication",style:{marginBottom:"1rem"},children:(0,n.jsx)(t.p,{children:"Authentication"})}),(0,n.jsx)(a(),{className:"openapi-tabs__security-schemes",children:(0,n.jsx)(s.default,{label:"HTTP: Bearer Auth",value:"bearerAuth",children:(0,n.jsx)("div",{children:(0,n.jsx)("table",{children:(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)(t.p,{children:"Security Scheme Type:"})}),(0,n.jsx)("td",{children:(0,n.jsx)(t.p,{children:"http"})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)(t.p,{children:"HTTP Authorization Scheme:"})}),(0,n.jsx)("td",{children:(0,n.jsx)(t.p,{children:"bearer"})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)(t.p,{children:"Bearer format:"})}),(0,n.jsx)("td",{children:(0,n.jsx)(t.p,{children:"JWT"})})]})]})})})})})]}),"\n",(0,n.jsxs)("div",{style:{display:"flex",flexDirection:"column",marginBottom:"var(--ifm-paragraph-margin-bottom)"},children:[(0,n.jsx)("h3",{style:{marginBottom:"0.25rem"},children:(0,n.jsx)(t.p,{children:"Contact"})}),(0,n.jsx)("span",{children:(0,n.jsxs)(t.p,{children:["ReportPortal Team: ",(0,n.jsx)(t.a,{href:"mailto:support@reportportal.io",children:"support@reportportal.io"})]})})]})]})}function f(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},3158:function(e,t,o){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=n(o(67294)),i=n(o(93162));t.default=function(e){let{url:t,proxy:o}=e;return r.default.createElement("div",{style:{float:"right"},className:"dropdown dropdown--hoverable dropdown--right"},r.default.createElement("button",{className:"export-button button button--sm button--secondary"},"Export"),r.default.createElement("ul",{className:"export-dropdown dropdown__menu"},r.default.createElement("li",null,r.default.createElement("a",{onClick:e=>{e.preventDefault(),(e=>{let t;(e.endsWith("json")||e.endsWith("yaml")||e.endsWith("yml"))&&(t=e.substring(e.lastIndexOf("/")+1)),i.default.saveAs(e,t||"openapi.txt")})(`${t}`)},className:"dropdown__link",href:`${t}`},"OpenAPI Spec"))))}},39620:function(e,t,o){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=n(o(67294)),i=o(65094),a=n(o(44996)),s=n(o(59637));t.default=function(e){const{colorMode:t}=(0,i.useColorMode)(),{logo:o,darkLogo:n}=e,l=()=>"dark"===t?n?.altText??o?.altText:o?.altText,c=(0,a.default)(o?.url),d=(0,a.default)(n?.url);return o&&n?r.default.createElement(s.default,{alt:l(),sources:{light:c,dark:d},className:"openapi__logo"}):o||n?r.default.createElement(s.default,{alt:l(),sources:{light:c??d,dark:c??d},className:"openapi__logo"}):void 0}},93162:function(e,t,o){var n,r,i,a=o(25108);r=[],void 0===(i="function"==typeof(n=function(){"use strict";function t(e,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(a.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function n(e,t,o){var n=new XMLHttpRequest;n.open("GET",e),n.responseType="blob",n.onload=function(){c(n.response,t,o)},n.onerror=function(){a.error("could not download file")},n.send()}function r(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function i(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(n){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var s="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof o.g&&o.g.global===o.g?o.g:void 0,l=s.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),c=s.saveAs||("object"!=typeof window||window!==s?function(){}:"download"in HTMLAnchorElement.prototype&&!l?function(e,t,o){var a=s.URL||s.webkitURL,l=document.createElement("a");t=t||e.name||"download",l.download=t,l.rel="noopener","string"==typeof e?(l.href=e,l.origin===location.origin?i(l):r(l.href)?n(e,t,o):i(l,l.target="_blank")):(l.href=a.createObjectURL(e),setTimeout((function(){a.revokeObjectURL(l.href)}),4e4),setTimeout((function(){i(l)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,o,a){if(o=o||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(t(e,a),o);else if(r(e))n(e,o,a);else{var s=document.createElement("a");s.href=e,s.target="_blank",setTimeout((function(){i(s)}))}}:function(e,t,o,r){if((r=r||open("","_blank"))&&(r.document.title=r.document.body.innerText="downloading..."),"string"==typeof e)return n(e,t,o);var i="application/octet-stream"===e.type,a=/constructor/i.test(s.HTMLElement)||s.safari,c=/CriOS\/[\d]+/.test(navigator.userAgent);if((c||i&&a||l)&&"undefined"!=typeof FileReader){var d=new FileReader;d.onloadend=function(){var e=d.result;e=c?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),r?r.location.href=e:location=e,r=null},d.readAsDataURL(e)}else{var p=s.URL||s.webkitURL,u=p.createObjectURL(e);r?r.location=u:location.href=u,r=null,setTimeout((function(){p.revokeObjectURL(u)}),4e4)}});s.saveAs=c.saveAs=c,e.exports=c})?n.apply(t,r):n)||(e.exports=i)}}]);