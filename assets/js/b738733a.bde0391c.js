"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2507],{3905:(t,e,r)=>{r.d(e,{Zo:()=>p,kt:()=>f});var a=r(67294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,a,o=function(t,e){if(null==t)return{};var r,a,o={},n=Object.keys(t);for(a=0;a<n.length;a++)r=n[a],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(a=0;a<n.length;a++)r=n[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var s=a.createContext({}),c=function(t){var e=a.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},p=function(t){var e=c(t.components);return a.createElement(s.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var r=t.components,o=t.mdxType,n=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),u=c(r),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||n;return r?a.createElement(f,i(i({ref:e},p),{},{components:r})):a.createElement(f,i({ref:e},p))}));function f(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var n=r.length,i=new Array(n);i[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[u]="string"==typeof t?t:o,i[1]=l;for(var c=2;c<n;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},52991:(t,e,r)=>{r.d(e,{Z:()=>h});var a=r(67294),o=r(86010),n=r(52802),i=r(39960),l=r(13919),s=r(95999);const c={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function p(t){let{href:e,children:r}=t;return a.createElement(i.Z,{href:e,className:(0,o.Z)("card padding--lg",c.cardContainer)},r)}function u(t){let{href:e,icon:r,title:n,description:i}=t;return a.createElement(p,{href:e},a.createElement("h2",{className:(0,o.Z)("text--truncate",c.cardTitle),title:n},r," ",n),i&&a.createElement("p",{className:(0,o.Z)("text--truncate",c.cardDescription),title:i},i))}function d(t){let{item:e}=t;const r=(0,n.Wl)(e);return r?a.createElement(u,{href:r,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:e.description??(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function m(t){let{item:e}=t;const r=(0,l.Z)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,n.xz)(e.docId??void 0);return a.createElement(u,{href:e.href,icon:r,title:e.label,description:e.description??o?.description})}function f(t){let{item:e}=t;switch(e.type){case"link":return a.createElement(m,{item:e});case"category":return a.createElement(d,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function g(t){let{className:e}=t;const r=(0,n.jA)();return a.createElement(h,{items:r.items,className:e})}function h(t){const{items:e,className:r}=t;if(!e)return a.createElement(g,t);const i=(0,n.MN)(e);return a.createElement("section",{className:(0,o.Z)("row",r)},i.map(((t,e)=>a.createElement("article",{key:e,className:"col col--6 margin-bottom--lg"},a.createElement(f,{item:t})))))}},38111:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=r(87462),o=(r(67294),r(3905)),n=r(52991);const i={title:"Log data in ReportPortal"},l="Log data in ReportPortal",s={unversionedId:"log-data-in-reportportal/index",id:"log-data-in-reportportal/index",title:"Log data in ReportPortal",description:"ReportPortal is a CI/CD agnostic tool. Therefore, you can continue using your favorite CI/CD tool (GitLab, Jenkins, GitHub, Azure DevOps, Bamboo) to send data to ReportPortal and get test results of execution.",source:"@site/docs/log-data-in-reportportal/index.md",sourceDirName:"log-data-in-reportportal",slug:"/log-data-in-reportportal/",permalink:"/docs/log-data-in-reportportal/",draft:!1,editUrl:"https://github.com/reportportal/docs/blob/develop/docs/log-data-in-reportportal/index.md",tags:[],version:"current",frontMatter:{title:"Log data in ReportPortal"},sidebar:"defaultSidebar",previous:{title:"Data retention procedure",permalink:"/docs/user-account/DataRetentionProcedure"},next:{title:"Implement own integration",permalink:"/docs/log-data-in-reportportal/ImplementOwnIntegration"}},c={},p=[],u={toc:p},d="wrapper";function m(t){let{components:e,...r}=t;return(0,o.kt)(d,(0,a.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"log-data-in-reportportal"},"Log data in ReportPortal"),(0,o.kt)("p",null,"ReportPortal is a CI/CD agnostic tool. Therefore, you can continue using your favorite CI/CD tool (GitLab, Jenkins, GitHub, Azure DevOps, Bamboo) to send data to ReportPortal and get test results of execution."),(0,o.kt)("p",null,"The data transmission is regulated not by the CI/CD process, but by the test framework. The only requirement is to ensure that the machine where your CI/CD is located has access to the ReportPortal instance to which you are trying to send the data."),(0,o.kt)("p",null,"As for test frameworks, a generic approach is to set the address of ReportPortal and other data in your test framework via properties or a configuration file, and your test framework will start reporting data to ReportPortal."),(0,o.kt)("p",null,"ReportPortal supports various frameworks. For example, we have integration with ",(0,o.kt)("a",{parentName:"p",href:"/log-data-in-reportportal/test-framework-integration/Java/"},"Java frameworks")," (",(0,o.kt)("a",{parentName:"p",href:"/log-data-in-reportportal/test-framework-integration/Java/TestNG"},"TestNG"),", ",(0,o.kt)("a",{parentName:"p",href:"/log-data-in-reportportal/test-framework-integration/Java/JBehave"},"Jbehave"),", etc.), ",(0,o.kt)("a",{parentName:"p",href:"/log-data-in-reportportal/test-framework-integration/Python/"},"Python frameworks")," (",(0,o.kt)("a",{parentName:"p",href:"/log-data-in-reportportal/test-framework-integration/Python/pytest"},"Pytest"),", ",(0,o.kt)("a",{parentName:"p",href:"/log-data-in-reportportal/test-framework-integration/Python/RobotFramework"},"Robot Framework"),", etc.), ",(0,o.kt)("a",{parentName:"p",href:"/log-data-in-reportportal/test-framework-integration/JavaScript/"},"JavaScript frameworks")," (",(0,o.kt)("a",{parentName:"p",href:"/log-data-in-reportportal/test-framework-integration/JavaScript/Playwright"},"Playwright"),", ",(0,o.kt)("a",{parentName:"p",href:"/log-data-in-reportportal/test-framework-integration/JavaScript/Postman"},"Postman"),", etc.), ",(0,o.kt)("a",{parentName:"p",href:"/log-data-in-reportportal/test-framework-integration/Net/"},".NET frameworks")," (",(0,o.kt)("a",{parentName:"p",href:"/log-data-in-reportportal/test-framework-integration/Net/NUnit"},"NUnit"),", ",(0,o.kt)("a",{parentName:"p",href:"/log-data-in-reportportal/test-framework-integration/Net/VSTest"},"VSTest"),", etc.)."),(0,o.kt)("p",null,"Integration with ReportPortal is not dependent on the type of tests you run. It can be API tests, integration tests, or UI tests such as Selenium, Cypress, so, you can run different types of tests and get test results."),(0,o.kt)("p",null,"ReportPortal can be integrated with external services, enabling you to report test results from platforms like Browserstack, Sauce Labs, and other third-party services. For Sauce Labs integration, we have a ",(0,o.kt)("a",{parentName:"p",href:"/plugins/SauceLabs"},"plugin"),"."),(0,o.kt)(n.Z,{mdxType:"DocCardList"}))}m.isMDXComponent=!0}}]);