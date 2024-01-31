"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2510],{80246:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>a,contentTitle:()=>o,default:()=>c,frontMatter:()=>t,metadata:()=>l,toc:()=>h});var r=i(85893),n=i(11151);const t={sidebar_position:3,sidebar_label:"Version 5.7.3"},o="Version 5.7.3",l={id:"releases/Version5.7.3",title:"Version 5.7.3",description:"Features:",source:"@site/docs/releases/Version5.7.3.md",sourceDirName:"releases",slug:"/releases/Version5.7.3",permalink:"/docs/releases/Version5.7.3",draft:!1,unlisted:!1,editUrl:"https://github.com/reportportal/docs/blob/develop/docs/releases/Version5.7.3.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Version 5.7.3"},sidebar:"defaultSidebar",previous:{title:"Version 5.7.4",permalink:"/docs/releases/Version5.7.4"},next:{title:"Version 5.7.2",permalink:"/docs/releases/Version5.7.2"}},a={},h=[{value:"Features:",id:"features",level:2},{value:"Small and nice updates:",id:"small-and-nice-updates",level:2},{value:"Bugfixing:",id:"bugfixing",level:2},{value:"Technical updates:",id:"technical-updates",level:2},{value:"CVE addressed:",id:"cve-addressed",level:2}];function d(e){const s={a:"a",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"version-573",children:"Version 5.7.3"}),"\n",(0,r.jsx)(s.h2,{id:"features",children:"Features:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Implemented functionality to find Next and Previous Error Logs.\nButtons \u201cShow\u201d, \u201cNext\u201d and \u201cPrevious\u201d error logs minimize user\u2019s efforts of scrolling across all the available logs."}),"\n",(0,r.jsx)(s.li,{children:"Improved lazy loading: the number of pre-loaded logs is 300 which helps to get a better understanding of preconditions to a certain error. What is more, now it\u2019s possible to load 300 more logs or load all the current step at once."}),"\n",(0,r.jsx)(s.li,{children:"\u201cStack trace\u201d in log messages now loads all the Error Logs.\nBesides, with the help of \u201cJump to\u201d button on the Error Log it\u2019s possible to switch to this Error Log displayed in the \u201cAll Logs\u201d view."}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"small-and-nice-updates",children:"Small and nice updates:"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"https://github.com/reportportal/service-ui/pull/3109",children:"#3109"})," Launch and test item description limits have been increased to 2048. Improved description view on all the \u201cLaunches\u201d pages means that now even more useful links, artifacts, OKRs, etc can be stored in the description."]}),"\n",(0,r.jsx)(s.h2,{id:"bugfixing",children:"Bugfixing:"}),"\n",(0,r.jsxs)(s.p,{children:["We have refactored logs double-entry saving to Elasticsearch by changing index type: now logs are saved in indexes per project instead of indexes per launch. It helps us to save the performance of Elasticsearch considering other operations and the data which we have processed via Elastic.\nMore details can be found via the ",(0,r.jsx)(s.a,{href:"https://reportportal.io/blog/performance-improvements-in-5.7.3?utm_source=trigger&utm_medium=release_note&utm_campaign=perf_improve&utm_content=dec",children:"link"}),"."]}),"\n",(0,r.jsx)(s.h2,{id:"technical-updates",children:"Technical updates:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Updated RabbitMQ to 3.10.7."}),"\n",(0,r.jsx)(s.li,{children:"Environment variable added for Service Jobs to configure http/https usage (added to values.yaml for RabbitMQ as well)."}),"\n",(0,r.jsx)(s.li,{children:"Added the logics of logs deletion (by jobs): when the logs are deleted by jobs from PostgreSQL, they are also deleted from ElasticSearch."}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"cve-addressed",children:"CVE addressed:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://github.com/advisories/GHSA-rvwf-54qp-4r6v",children:"CVE-2017-18640"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://github.com/advisories/GHSA-vvw4-rfwf-p6hx",children:"CVE-2020-17527"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://github.com/advisories/GHSA-xc3p-ff3m-f46v",children:"CVE-2020-25032"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://github.com/advisories/GHSA-j8jw-g6fq-mp7h",children:"CVE-2020-25638"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://github.com/advisories/GHSA-gq28-h5vg-8prx",children:"CVE-2021-22112"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://github.com/advisories/GHSA-gfwj-fwqj-fp3v",children:"CVE-2021-22118"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://github.com/advisories/GHSA-w9jg-gvgr-354m",children:"CVE-2021-22119"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://github.com/advisories/GHSA-j39c-c8hj-x4j3",children:"CVE-2021-25122"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://github.com/advisories/GHSA-jgwr-3qm3-26f3",children:"CVE-2021-25329"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://github.com/advisories/GHSA-5jqp-qgf6-3pvh",children:"CVE-2021-29510"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://github.com/advisories/GHSA-q2q7-5pp4-w6pg",children:"CVE-2021-33503"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://github.com/advisories/GHSA-7hfm-57qf-j43q",children:"CVE-2021-35515"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://github.com/advisories/GHSA-crv7-7245-f45f",children:"CVE-2021-35516"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://github.com/advisories/GHSA-xqfj-vm6h-2x34",children:"CVE-2021-35517"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://github.com/advisories/GHSA-mc84-pj99-q6hh",children:"CVE-2021-36090"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://github.com/advisories/GHSA-v7wg-cpwc-24m4",children:"CVE-2022-21724"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://github.com/advisories/GHSA-hh26-6xwr-ggv7",children:"CVE-2022-22970"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://github.com/advisories/GHSA-hh32-7344-cg2f",children:"CVE-2022-22978"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://github.com/advisories/GHSA-4f7p-27jc-3c36",children:"CVE-2022-24761"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://github.com/advisories/GHSA-3mc7-4q67-w48m",children:"CVE-2022-25857"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://github.com/advisories/GHSA-cm59-pr5q-cw85",children:"CVE-2022-27772"})}),"\n"]})]})}function c(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,s,i)=>{i.d(s,{Z:()=>l,a:()=>o});var r=i(67294);const n={},t=r.createContext(n);function o(e){const s=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),r.createElement(t.Provider,{value:s},e.children)}}}]);