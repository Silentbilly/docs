"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4472],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),u=c(n),h=r,f=u["".concat(i,".").concat(h)]||u[h]||p[h]||s;return n?a.createElement(f,o(o({ref:t},l),{},{components:n})):a.createElement(f,o({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=u;var d={};for(var i in t)hasOwnProperty.call(t,i)&&(d[i]=t[i]);d.originalType=e,d.mdxType="string"==typeof e?e:r,o[1]=d;for(var c=2;c<s;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},36861:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const s={sidebar_position:16,sidebar_label:"Non-passed test-cases trend chart"},o="Non-passed test-cases trend chart",d={unversionedId:"dashboards-and-widgets/NonPassedTestCasesTrendChart",id:"dashboards-and-widgets/NonPassedTestCasesTrendChart",title:"Non-passed test-cases trend chart",description:'The widget shows the percent ratio of non-passed test cases "Failed + Skipped" and "Total" cases from run to run.',source:"@site/docs/dashboards-and-widgets/NonPassedTestCasesTrendChart.mdx",sourceDirName:"dashboards-and-widgets",slug:"/dashboards-and-widgets/NonPassedTestCasesTrendChart",permalink:"/docs/dashboards-and-widgets/NonPassedTestCasesTrendChart",draft:!1,editUrl:"https://github.com/reportportal/docs/blob/develop/docs/dashboards-and-widgets/NonPassedTestCasesTrendChart.mdx",tags:[],version:"current",sidebarPosition:16,frontMatter:{sidebar_position:16,sidebar_label:"Non-passed test-cases trend chart"},sidebar:"defaultSidebar",previous:{title:"Failed cases trend chart",permalink:"/docs/dashboards-and-widgets/FailedCasesTrendChart"},next:{title:"Different launches comparison chart",permalink:"/docs/dashboards-and-widgets/DifferentLaunchesComparisonChart"}},i={},c=[],l={toc:c};function p(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"non-passed-test-cases-trend-chart"},"Non-passed test-cases trend chart"),(0,r.kt)("p",null,'The widget shows the percent ratio of non-passed test cases "Failed + Skipped" and "Total" cases from run to run.'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Widget's parameters:")),(0,r.kt)("p",null,'To configure the widget, click the "Add New Widget" button on the dashboard header, then select a template and specify the following settings on the second step:'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Filter."),(0,r.kt)("li",{parentName:"ul"},"Items: 1-150. Default meaning is 50")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Widget view")),(0,r.kt)("p",null,"The widget contains agenda: % (Failed + Skipped) / Total."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The X-axis shows launches numbers and launches names on hover."),(0,r.kt)("li",{parentName:"ul"},"Y-axis shows the percent of sum Failed + Skipped test cases to Total.")),(0,r.kt)("p",null,"The tooltip on mouse hover over the chart area shows launch details: launch name and number, launch start time and percentage of non-passed cases."),(0,r.kt)("media-view",{src:n(39833),alt:"Non Passed Test Cases Trend Chart Widget"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note:"),'\nThe widget doesn\'t contain "IN PROGRESS" launches.')))}p.isMDXComponent=!0},39833:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a=n.p+"assets/images/NonPassedTestCasesTrendChart-b4d07688c0f6d76957df91447b77f7bf.png"}}]);