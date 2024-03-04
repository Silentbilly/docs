"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9779],{41370:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>h,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var i=t(85893),n=t(11151);const l={sidebar_position:3,sidebar_label:"Filtering launches"},a="Filtering launches",r={id:"work-with-reports/FilteringLaunches",title:"Filtering launches",description:'The data tables for the "Launches" and the "Debug" modes can be filtered with',source:"@site/docs/work-with-reports/FilteringLaunches.mdx",sourceDirName:"work-with-reports",slug:"/work-with-reports/FilteringLaunches",permalink:"/docs/work-with-reports/FilteringLaunches",draft:!1,unlisted:!1,editUrl:"https://github.com/reportportal/docs/blob/develop/docs/work-with-reports/FilteringLaunches.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Filtering launches"},sidebar:"docs",previous:{title:"Operations under launches",permalink:"/docs/work-with-reports/OperationsUnderLaunches"},next:{title:"Investigation of failure",permalink:"/docs/work-with-reports/InvestigationOfFailure"}},h={},c=[{value:"Filtering parameters",id:"filtering-parameters",level:2},{value:"Launch level filters",id:"launch-level-filters",level:3},{value:"Suite/Test level filters",id:"suitetest-level-filters",level:3},{value:"Step level filters",id:"step-level-filters",level:3}];function o(e){const s={admonition:"admonition",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.a)(),...e.components},{MediaViewer:t}=s;return t||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("MediaViewer",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"filtering-launches",children:"Filtering launches"}),"\n",(0,i.jsx)(s.p,{children:'The data tables for the "Launches" and the "Debug" modes can be filtered with\na filtering block. Filters may be applied at all test item levels:\nLaunch/Suite/Test/Step. The "Launches" mode allows saving a filter\n(a particular combination of filtering criteria) to the "Filters" tab. The\n"Debug" mode does not allow saving filters.'}),"\n",(0,i.jsx)(s.h2,{id:"filtering-parameters",children:"Filtering parameters"}),"\n",(0,i.jsx)(s.h3,{id:"launch-level-filters",children:"Launch level filters"}),"\n",(0,i.jsx)(s.p,{children:"You can filter launches by the following criteria:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Name"}),' - This filter is always displayed. At least 3 symbols are required for this search.\nThe system searches for the launches that contain the specified characters in the launch name. For example, a user sets Name = "abc", the system will output launches with names "abcd", "zabc", "zabcd", "abc".']}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"This filter has the next conditions:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.em,{children:"contains"})," - shown all test items that contain a specified combination in the name;"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.em,{children:"not contains"})," - shown all test items that don't contain a specified  combination in the name;"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.em,{children:"equals"})," -  shown all test items with a name that is absolutely equal to the specified combination;"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.em,{children:"not equals"})," - shown all test items without items which name is absolutely equal to the specified combination;"]}),"\n"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Number"})," - At least a symbol is required for this search.\nThe system searches for launches with the mentioned number. This filter has the next conditions: equals, greater than or equal; less than or equal."]}),"\n"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.em,{children:"greater than or equal"})," - shown all test items with launch number equal or greater than specified;"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.em,{children:"less than or equal"})," - shown all test items with launch number equal or less than specified;"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.em,{children:"equals"})," - shown only test items with specified number;"]}),"\n"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Description"})," - At least 3 symbols are required for this search.\nThe system searches for the launches that contain the specified characters in\nthe launch description.\nThis filter has the next conditions: contains, not contains, equals, not equals."]}),"\n"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.em,{children:"contains"})," - shown all test items that contain specified combination in the description;"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.em,{children:"not contains"})," - shown all test items that don't contain specified  combination in the description;"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.em,{children:"equals"})," -  shown all test items which description is absolutely equal to the specified combination;"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.em,{children:"not equals"})," - shown all test items without items which description is absolutely equal to the specified combination;"]}),"\n"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Start Time"})," - The system searches for the launches with a specified start time."]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"The following values are available:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.em,{children:"Today"})," - shown all test items with start time Today;  filter contains a dynamic value and search launches with start time equals Today, i.e. current date;"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.em,{children:"Last 2 days"})," - shown all test items with start time Last 2 days; filter contains a dynamic value, which will be updated every day, and search launches with start time equal Last 2 days;"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.em,{children:"Last 7 days"})," - shown all test items with start time Last 7 days;  filter contains a dynamic value, which will be updated every day, and search launches with start time equal Last 7 days;"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.em,{children:"Last 30 days"})," - shown all test items with start time Last 30 days; filter contains a dynamic value, which will be updated every day, and search launches with start time equal Last 30 days;"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.em,{children:"Custom range"})," - shown all test items with a start time in the custom period; the user can set strict period or dynamic value (filter will be a move to one day every day, where Today (current day) is the last day in period);"]}),"\n"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Attributes"})," - It is allowed to search for the attributes with at least 1 symbol in it. The system searches for launches with the specified Attribute(s). Several attributes may be specified.\nYou can find launches by a Attribute in just one click. To do this, click on a required Attribute under the launch name and the system will display all launches that have this Attribute.\nThis filter has the next conditions:"]}),"\n"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.em,{children:"all ( in API: 'filter.has.Attributes')"})," - shown all test items which contain all specified attributes;"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.em,{children:"without all( in API:'filter.!in.Attributes')"})," -  shown all test items without specified attributes in any combinations;"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsxs)(s.em,{children:["any ( in API",":filter",".in.Attributes)"]}),"  - shown all test items which contain any combinations of specified attributes;"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.em,{children:"without any ( in API:'filter.!has.Attributes')"})," - shown all test items without all specified attributes in case, when both of attributes present in the test item;"]}),"\n"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Owner"})," - At least 3 symbols are required for this search. The system searches for the launches owned by specified project members. This filter can filter launches by several owners. You can find launches by an owner in just one click.\nTo do this, click on a required owner under the launch name and the system will display all launches of the selected user."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Total"}),", ",(0,i.jsx)(s.strong,{children:"Passed"}),", ",(0,i.jsx)(s.strong,{children:"Failed"}),", ",(0,i.jsx)(s.strong,{children:"Skipped"}),", ",(0,i.jsx)(s.strong,{children:"To Investigate"})," - These criteria are equipped with conditions: \u2265 and \u2264 and =."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.em,{children:"greater than or equal"})," - shown all launches with test cases equal or greater than specified;"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.em,{children:"less than or equal"})," - shown all launches with test cases equal or less than specified;"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.em,{children:"equals"})," - shown only launches with a specified number of test cases;"]}),"\n"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Product Bug"}),", ",(0,i.jsx)(s.strong,{children:"Automation Bug"}),", ",(0,i.jsx)(s.strong,{children:"System Issue"})," - These criteria are equipped with conditions: \u2265 and \u2264 and =.\nThe list of filtering criteria depends on the use of project defect types. If you use a standard set of defects: Product Bug, Automation Bug, System Issue, you will see them on the list of filtered criteria. On projects with custom defects, the system can filter launches by each predefined defect type, each custom defect type and by a total number of defects that belong to the same group.\nFor example, if you create 2 custom Product Bugs, the total number of product bugs will be calculated as the sum of predefined ",(0,i.jsx)(s.em,{children:"Product Bug"})," + your custom ",(0,i.jsx)(s.em,{children:"Product Bug-1"})," and ",(0,i.jsx)(s.em,{children:"Product Bug-2"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.em,{children:"greater than or equal"})," - shown all launches with test cases equal or greater than specified;"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.em,{children:"less than or equal"})," - shown all launches with test cases equal or less than specified;"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.em,{children:"equals"})," - shown only launches with a specified number of test cases;"]}),"\n"]}),"\n",(0,i.jsx)(t,{src:"https://youtu.be/b28ulSB4Wq0",alt:"Launch Level Filters in our qa automation dashboard",type:"video"}),"\n",(0,i.jsx)(s.h3,{id:"suitetest-level-filters",children:"Suite/Test level filters"}),"\n",(0,i.jsx)(s.p,{children:'The Suite/Test level allows the same filters set as on the Launches level, but excludes the "Owner" criterion.'}),"\n",(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsx)(s.p,{children:"System searches for current level test items with specified criteria."})}),"\n",(0,i.jsx)(s.h3,{id:"step-level-filters",children:"Step level filters"}),"\n",(0,i.jsx)(s.p,{children:"Our qa automation dashboard allows the following filters on Step level:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Name"}),' - This filter is always displayed. At least 3 symbols are required for this search.\nThe system searches for the items containing specified characters in the test item name. For example, user sets Name = "abc", the system will output test items with names "abcd", "zabc", "zabcd", "abc".\nThis filter has the next conditions: contains, not contains, equals, not equals.']}),"\n"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.em,{children:"contains"})," - shown all test items that contain specified combination in the name;"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.em,{children:"not contains"})," - shown all test items that don't contain specified  combination in the name;"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.em,{children:"equals"})," -  shown all test items which name is absolutely equal to the specified combination;"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.em,{children:"not equals"})," - shown all test items without items which name is absolutely equal to the specified combination;"]}),"\n"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Method Type"})," - System searches for test items on a current level with Method Type(s) specified."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Description"}),' - At least 3 symbols are required for this search.\nThe system searches items on the current level containing the specified value in the test item Description. For example, a user sets Description = "abc", the system will output test items with\nDescriptions "abcd", "zabc", "zabcd", "abc".\nThis filter has the next conditions: contains, not contains, equals, not equals.']}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.em,{children:"contains"})," - shown all test items that contain specified combination in the description;"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.em,{children:"not contains"})," - shown all test items that don't contain specified  combination in the description;"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.em,{children:"equals"})," -  shown all test items which description is absolutely equal to the specified combination;"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.em,{children:"not equals"})," - shown all test items without items which description is absolutely equal to the specified combination;"]}),"\n"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Status"})," - The system searches for test items on a current level with Status(es) specified."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Start Time"})," - The system searches for test items on the current level with specified Start Time values."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.em,{children:"Today"})," - shown all test items with start time Today;  filter contains a dynamic value and search launches with start time equals Today, i.e. current date;"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.em,{children:"Last 2 days"})," - shown all test items with start time Last 2 days; filter contains a dynamic value, which will be updated every day, and search launches with start time equal Last 2 days;"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.em,{children:"Last 7 days"})," - shown all test items with start time Last 7 days;  filter contains a dynamic value, which will be updated every day, and search launches with start time equal Last 7 days;"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.em,{children:"Last 30 days"})," - shown all test items with start time Last 30 days; filter contains a dynamic value, which will be updated every day, and search launches with start time equal Last 30 days;"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.em,{children:"Custom range"})," - shown all test items with a start time in the custom period; the user can set strict period or dynamic value (filter will be a move to one day every day, where Today (current day) is the last day in period);"]}),"\n"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Defect Type"}),' - The system searches for test items on the current level with Defect Type(s) specified.\nThe list of filtering values depends on the use of project defect types.\nOn projects with defaults set to a specified defect type, "Defect Type" the criteria should contain the following values: To Investigate, Product Bug, Automation Bug, System Issue, No Defect.\nOn projects with customizable defects, the system will filter items by each predefined defect type and each custom defect type.']}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Defect Comment"}),' - At least 3 symbols are required for this search.\nThe system searches items on the current level containing specified values in the test item Defect Comment.\nFor example, a user sets Defect Comment = "abc", the system will output test items with\nDefect Comments "abcd", "zabc", "zabcd", "abc".']}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.em,{children:"contains"})," - shown all test items that contain specified combination in the defect comment;"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.em,{children:"not contains"})," - shown all test items that don't contain specified  combination in the defect comment;"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.em,{children:"equals"})," -  shown all test items which defect comment is absolutely equal to the specified combination;"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.em,{children:"not equals"})," - shown all test items without items which defect comment is absolutely equal to the specified combination;"]}),"\n"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Attributes"})," - 1 symbol is enough for this search.\nThe system searches for the items with or without a specified Attribute(s). Multiple Attributes may be specified at once. The following filtering conditions are available:  ALL/ANY and WITHOUT ALL/WITHOUT ANY."]}),"\n"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.em,{children:"all ( in API: 'filter.has.attributes')"})," - shown all test items which contain all specified Attributess;"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.em,{children:"without all( in API:'filter.!in.attributes')"})," -  shown all test items without specified Attributess in any combinations;"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsxs)(s.em,{children:["any ( in API",":filter",".in.attributes)"]}),"  - shown all test items which contain any combinations of specified attributes;"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.em,{children:"without any ( in API:'filter.!has.attributes')"})," - shown all test items without all specified attributes in case, when both of attributes present in the test item;"]}),"\n"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Analysed by RP (AA)"})," - there are two options: With AA mark, Without AA mark."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Ignored in AA"})," -  there are two options: With Ignore mark, Without ignoring mark."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Issue in BTS"})," - there are two options: 1 symbol is enough for autocomplete.\nThe system searches for the items with or without a specified Issue in BTS. Multiple Issues may be specified at once. The following filtering conditions are available:  ALL/ANY and WITHOUT ALL/WITHOUT ANY."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.em,{children:"all (has)"})," - shown all test items which contain all specified Issues;"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.em,{children:"without all(!has)"})," -  shown test items without all specified Issies in any combinations;"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.em,{children:"any (in)"})," - shown all test items which contain any combinations of specified Issues;"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.em,{children:"without any (!in)"})," - shown all test items without any specified Issues"]}),"\n"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Pattern name"})," - all patterns names, which a PM creates on Project Settings"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Has retries/Hasn't retries"})," - there are two options: Has retries/ No retries."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t,{src:"https://youtu.be/rTDWrkaBM9k",alt:"Step Level Filters in our test reporting tool",type:"video"})]})}function d(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},11151:(e,s,t)=>{t.d(s,{Z:()=>r,a:()=>a});var i=t(67294);const n={},l=i.createContext(n);function a(e){const s=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),i.createElement(l.Provider,{value:s},e.children)}}}]);