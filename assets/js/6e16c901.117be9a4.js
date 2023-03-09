"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1613],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,h=d["".concat(i,".").concat(m)]||d[m]||u[m]||l;return n?r.createElement(h,a(a({ref:t},p),{},{components:n})):r.createElement(h,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<l;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},61269:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const l={sidebar_position:6,sidebar_label:"Resolve Analyzer Known Issues"},a="Resolve Analyzer Known Issues",s={unversionedId:"issues-troubleshooting/ResolveAnalyzerKnownIssues",id:"issues-troubleshooting/ResolveAnalyzerKnownIssues",title:"Resolve Analyzer Known Issues",description:"Problem 1. Auto-Analyser doesn't work. Analyzer health check status failed: Elasticsearch is not healthy",source:"@site/docs/issues-troubleshooting/ResolveAnalyzerKnownIssues.mdx",sourceDirName:"issues-troubleshooting",slug:"/issues-troubleshooting/ResolveAnalyzerKnownIssues",permalink:"/docs/issues-troubleshooting/ResolveAnalyzerKnownIssues",draft:!1,editUrl:"https://github.com/reportportal/docs/blob/develop/docs/issues-troubleshooting/ResolveAnalyzerKnownIssues.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,sidebar_label:"Resolve Analyzer Known Issues"},sidebar:"defaultSidebar",previous:{title:"Issues with LDAPS: how to resolve",permalink:"/docs/issues-troubleshooting/IssuesWithLDAPSHowToResolve"},next:{title:"How to check LDAP connection",permalink:"/docs/issues-troubleshooting/HowToCheckLDAPConnection"}},i={},c=[{value:"Problem 1. Auto-Analyser doesn&#39;t work. Analyzer health check status failed: Elasticsearch is not healthy",id:"problem-1-auto-analyser-doesnt-work-analyzer-health-check-status-failed-elasticsearch-is-not-healthy",level:2},{value:"Problem Description",id:"problem-description",level:3},{value:"Solution",id:"solution",level:3},{value:"Problem 2. Auto-Analyser doesn&#39;t work. KeyError: &#39;found_test_and_methods&#39; not found",id:"problem-2-auto-analyser-doesnt-work-keyerror-found_test_and_methods-not-found",level:2},{value:"Problem Description",id:"problem-description-1",level:3},{value:"Solution",id:"solution-1",level:3},{value:"Problem 3. Amqp connection was not established",id:"problem-3-amqp-connection-was-not-established",level:2},{value:"Problem Description",id:"problem-description-2",level:3},{value:"Solution",id:"solution-2",level:3},{value:"Problem 4. Performance",id:"problem-4-performance",level:2},{value:"Problem Description",id:"problem-description-3",level:3},{value:"Solution",id:"solution-3",level:3}],p={toc:c};function u(e){let{components:t,...l}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"resolve-analyzer-known-issues"},"Resolve Analyzer Known Issues"),(0,o.kt)("h2",{id:"problem-1-auto-analyser-doesnt-work-analyzer-health-check-status-failed-elasticsearch-is-not-healthy"},"Problem 1. Auto-Analyser doesn't work. Analyzer health check status failed: Elasticsearch is not healthy"),(0,o.kt)("h3",{id:"problem-description"},"Problem Description"),(0,o.kt)("p",null,"Analyzer log:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"2021-09-09 11:34:47,927 - analyzerApp - ERROR - Analyzer health check status failed: Elasticsearch is not healthy;\n[pid: 10|app: 0|req: 1/3] 127.0.0.1 () {28 vars in 294 bytes} [Thu Sep  9 11:34:46 2021] GET / => generated 43 bytes in 1643 msecs (HTTP/1.1 503) 3 headers in 120 bytes (1 switches on core 0)\n2021-09-09 11:35:48,737 - analyzerApp.utils - ERROR - Error with loading url: http://elasticsearch:9200/_cluster/health\n2021-09-09 11:35:48,752 - analyzerApp.utils - ERROR - HTTPConnectionPool(host='elasticsearch', port=9200): Max retries exceeded with url: /_cluster/health (Caused by NewConnectionError('<urllib3.connection.HTTPConnection object at 0x7f5cb82d4290>: Failed to establish a new connection: [Errno 111] Connection refused'))\n2021-09-09 11:35:48,753 - analyzerApp.esclient - ERROR - Elasticsearch is not healthy\n2021-09-09 11:35:48,753 - analyzerApp.esclient - ERROR - list indices must be integers or slices, not str\n")),(0,o.kt)("p",null,"ElasticSearch container restarting all the time:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"STATUS                                     NAMES\nUp Less than a second (health: starting)   reportportal_elasticsearch_1\n")),(0,o.kt)("h3",{id:"solution"},"Solution"),(0,o.kt)("p",null,"Create a directory for ElasticSearch and assign permissions with the following commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p data/elasticsearch\nchmod 777 data/elasticsearch\nchgrp 1000 data/elasticsearch\n")),(0,o.kt)("p",null,"Recreate ReportPortal services."),(0,o.kt)("h2",{id:"problem-2-auto-analyser-doesnt-work-keyerror-found_test_and_methods-not-found"},"Problem 2. Auto-Analyser doesn't work. KeyError: 'found_test_and_methods' not found"),(0,o.kt)("h3",{id:"problem-description-1"},"Problem Description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"2021-09-09 11:35:48,737 - analyzerApp.utils - ERROR - KeyError: 'found_test_and_methods' not found\n")),(0,o.kt)("h3",{id:"solution-1"},"Solution"),(0,o.kt)("p",null,"Regenerate index in the ElasticSearch. Project settings -> Auto-Analysis -> Genetate Index"),(0,o.kt)("media-view",{src:n(13112),alt:"Auto Analyzer Generate Index"}),(0,o.kt)("h2",{id:"problem-3-amqp-connection-was-not-established"},"Problem 3. Amqp connection was not established"),(0,o.kt)("h3",{id:"problem-description-2"},"Problem Description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"2021-09-09 11:32:00,579 - analyzerApp - INFO - Starting waiting for AMQP connection\n2021-09-09 11:32:00,586 - analyzerApp.amqp - INFO - Try connect to amqp://rabbitmq:5672/analyzer?heartbeat=600\n2021-09-09 11:32:00,595 - analyzerApp - ERROR - Amqp connection was not established\n")),(0,o.kt)("h3",{id:"solution-2"},"Solution"),(0,o.kt)("p",null,"RabbitMQ container is not running. Wait for status ",(0,o.kt)("inlineCode",{parentName:"p"},"running")," or recreate the RabbitMQ container."),(0,o.kt)("h2",{id:"problem-4-performance"},"Problem 4. Performance"),(0,o.kt)("h3",{id:"problem-description-3"},"Problem Description"),(0,o.kt)("p",null,"Slowing down analysis or waiting for a long time fore responce."),(0,o.kt)("p",null,"Analyzer logs:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"DAMN ! worker 1 (pid: 9191) died, killed by signal 9 :( trying respawn ...\nRespawned uWSGI worker 1 (new pid: 9490)\n")),(0,o.kt)("h3",{id:"solution-3"},"Solution"),(0,o.kt)("p",null,"Increase VM stats. We recommend using the minimum memory:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/reportportal/reportportal/blob/master/docker-compose.yml#L56"},"Analyzer")," - 1024 Mb"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/reportportal/reportportal/blob/master/docker-compose.yml#L69"},"Analyzer train")," - 512 Mb")),(0,o.kt)("p",null,"Also you can reduce the number of Analyzer processes with processing environment variable ",(0,o.kt)("inlineCode",{parentName:"p"},"UWSGI_WORKERS: 2")," (default ",(0,o.kt)("inlineCode",{parentName:"p"},"4"),"), then:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/reportportal/reportportal/blob/master/docker-compose.yml#L56"},"Analyzer")," - 768 Mb")),(0,o.kt)("p",null,"However, ",(0,o.kt)("inlineCode",{parentName:"p"},"UWSGI_WORKERS")," will slow down the Analyzer."))}u.isMDXComponent=!0},13112:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});const r=n.p+"assets/images/AutoanalyzerGenerateIndex-06654309b007ffeb1225516309f34c4f.gif"}}]);