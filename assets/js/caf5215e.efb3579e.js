"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6056],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},65626:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={sidebar_position:4,sidebar_label:"Data retention procedure"},i="Data retention procedure",s={unversionedId:"user-account/DataRetentionProcedure",id:"user-account/DataRetentionProcedure",title:"Data retention procedure",description:"Starting from version 23.2, ReportPortal introduces an option to establish a retention period for collected Personally Identifiable Information (PII) data during instance configuration. This configuration allows for setting an individual retention duration for the instance in days, such as N=90, 180, 540 or any other number of days.",source:"@site/docs/user-account/DataRetentionProcedure.md",sourceDirName:"user-account",slug:"/user-account/DataRetentionProcedure",permalink:"/docs/user-account/DataRetentionProcedure",draft:!1,editUrl:"https://github.com/reportportal/docs/blob/develop/docs/user-account/DataRetentionProcedure.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Data retention procedure"},sidebar:"defaultSidebar",previous:{title:"Delete account",permalink:"/docs/user-account/DeleteAccount"},next:{title:"Log data in ReportPortal",permalink:"/docs/log-data-in-reportportal/"}},l={},c=[],u={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"data-retention-procedure"},"Data retention procedure"),(0,o.kt)("p",null,"Starting from version 23.2, ReportPortal introduces an option to establish a retention period for collected Personally Identifiable Information (PII) data during instance configuration. This configuration allows for setting an individual retention duration for the instance in days, such as N=90, 180, 540 or any other number of days."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Docker")),(0,o.kt)("p",null,"To activate data retention, add the following environment variables to Service Jobs:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# Int (days)\nRP_ENVIRONMENT_VARIABLE_CLEAN_EXPIREDUSER_RETENTIONPERIOD:\n\n# CRON\nRP_ENVIRONMENT_VARIABLE_CLEAN_EXPIREDUSER_CRON:\nRP_ENVIRONMENT_VARIABLE_NOTIFICATION_EXPIREDUSER_CRON:\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Kubernetes")),(0,o.kt)("p",null,"Fill in Service Jobs values in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/reportportal/kubernetes/blob/master/reportportal/values.yaml"},"values.yaml")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"servicejobs:\ncoreJobs:\n    # Int (days) \n    notifyExpiredUserCron: \n\n    # CRON \n    cleanExpiredUserCron: \n    cleanExpiredUserRetention: \n")),(0,o.kt)("p",null,"If the data retention option is enabled but a specific number of days for deleting inactive users is not specified, no deletions will occur. In the case of specifying 0 or a negative value, an error will be displayed in the logs."),(0,o.kt)("p",null,"When the data retention option is activated, the job will run daily to identify inactive users and obfuscate their data."),(0,o.kt)("p",null,"Inactive users are defined as follows:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Users who have not logged in for N days.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Users who have not reported testing data for N days."))),(0,o.kt)("p",null,"Users are only classified as inactive if both conditions are satisfied."),(0,o.kt)("p",null,"In cases where a user logs in but doesn\u2019t submit any reports, they are not deleted as the second condition isn\u2019t fulfilled. Similarly, if a user has not logged in but has submitted reports, they are still considered active."),(0,o.kt)("p",null,"Before performing deletions, the system sends out email notifications as follows: notification \u21161 is dispatched to inactive users N-60 days before deletion, notification \u21162 is sent N-30 days prior, and notification \u21163 is sent 1 day before obfuscation. Notifications about account deletion are also sent by the system."),(0,o.kt)("p",null,"Users will be able to return whenever they are invited to the project."),(0,o.kt)("p",null,"In summary, a data retention policy optimizes resources and helps create a more efficient, secure, and effective environment for data management, which fosters business success."))}p.isMDXComponent=!0}}]);