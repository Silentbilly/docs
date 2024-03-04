"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5170],{37739:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var n=i(85893),s=i(11151);const a={sidebar_position:5,sidebar_label:"How models are retrained"},o="How models are retrained",r={id:"analysis/HowModelsAreRetrained",title:"How models are retrained",description:"In the Auto-analysis and ML suggestions processes several models take part:",source:"@site/docs/analysis/HowModelsAreRetrained.md",sourceDirName:"analysis",slug:"/analysis/HowModelsAreRetrained",permalink:"/docs/analysis/HowModelsAreRetrained",draft:!1,unlisted:!1,editUrl:"https://github.com/reportportal/docs/blob/develop/docs/analysis/HowModelsAreRetrained.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"How models are retrained"},sidebar:"docs",previous:{title:"ML Suggestions",permalink:"/docs/analysis/MLSuggestions"},next:{title:"Manual Analysis",permalink:"/docs/analysis/ManualAnalysis"}},l={},d=[];function h(e){const t={admonition:"admonition",h1:"h1",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"how-models-are-retrained",children:"How models are retrained"}),"\n",(0,n.jsx)(t.p,{children:"In the Auto-analysis and ML suggestions processes several models take part:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Auto-analysis XGBoost model, which gives the probability for a test item to be of a specific type based on the most similar test item in the history with this defect type"}),"\n",(0,n.jsx)(t.li,{children:"ML suggestions XGBoost model, which gives the probability for a test item to be similar to the test item from the history"}),"\n",(0,n.jsx)(t.li,{children:"Error message language model on Tf-Idf vectors(Random Forest Classifier), which gives a probability for the error message to be of a specific defect type or its subtype based on the words in the message. The probability from this model is taken as a feature in the main boosting algorithm."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"At the start of the project, you have global models. They were trained on 6 projects and were validated to give a good accuracy on average. To have a more powerful and personalized test failure analysis, the models should be retrained on the data from the project."}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"If a global model performs better on your data, the retrained model won't be saved. As far as we save a custom model only if it performs better for your data than the global one."})}),"\n",(0,n.jsx)(t.p,{children:"Triggering information and retrained models are saved in Minio(or a filesystem) as you set up in the Analyzer service settings."}),"\n",(0,n.jsxs)(t.p,{children:["Retraining triggering conditions for ",(0,n.jsx)(t.strong,{children:"Error message Random Forest Classifier"}),":"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:'Each time the test item defect type is changed to another issue type(except "To Investigate"), we update the triggering info, which saves the quantity of test items with defect types and the quantity of test items with defect types since the last training. This information is saved in the file "defect_type_trigger_info" in Minio.'}),"\n",(0,n.jsx)(t.li,{children:'When we have more than 100 labelled items, and since last training we have 100 labelled test items, retraining is triggered and if validation data metrics are better than metrics for a global model for the same data points, then we save a custom "defect_type" model in Minio and use it further in the auto-analysis and suggestions functionality.'}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Retraining triggering conditions for ",(0,n.jsx)(t.strong,{children:"Auto-analysis"})," and ",(0,n.jsx)(t.strong,{children:"Suggestion XGBoost models"}),":"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["We gather training data for training from several sources:","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"when you choose one of the suggestions(the chosen test item will be a positive example, others will be negative ones)"}),"\n",(0,n.jsx)(t.li,{children:"when you don't choose any suggestion and edit the test item somehow(set up a defect type manually, add a comment, etc.), all suggestions become negative examples;"}),"\n",(0,n.jsx)(t.li,{children:"when auto-analysis runs and for a test item it finds a similar test item, we consider it a positive example, until the user changes the defect type for it manually. In this case, the result will be marked as a negative one."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.li,{children:'Each time a suggestion analysis runs or changing a defect type happens, we update the triggering info for both models. This information is saved in the files  "auto_analysis_trigger_info" and "suggestion_tgrigger_info" in Minio.'}),"\n",(0,n.jsx)(t.li,{children:'When we have more than 300 labelled items, and since last training we have 100 labelled test items, retraining is triggered and if validation data metrics are better than metrics for a global model for the same data points, then we save a custom "auto_anlysis" model in Minio and use it further in the auto-analysis functionality.'}),"\n",(0,n.jsx)(t.li,{children:'When we have more than 100 labelled items, and since last training we have 50 labelled test items, retraining is triggered and if validation data metrics are better than metrics for a global model for the same data points, then we save a custom "suggestion" model in Minio and use it further in the suggestions functionality.'}),"\n"]})]})}function c(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},11151:(e,t,i)=>{i.d(t,{Z:()=>r,a:()=>o});var n=i(67294);const s={},a=n.createContext(s);function o(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);