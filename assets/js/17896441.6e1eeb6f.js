"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7918],{59841:(e,t,n)=>{n.d(t,{Z:()=>b});var a=n(91262),i=n(45697),o=n.n(i),c=n(67294);const r={"media-container":"media-container_MGya","video-container":"video-container_Sbf6","preview-container":"preview-container_z5H7",thumbnail:"thumbnail_ydmF"},l=n(6740).Z,s="photo",u="video",m=e=>"string"==typeof e?e:e.default;function d(e){let{src:t,type:n,alt:i,thumbnail:o}=e;const[s,d]=(0,c.useState)(!1),p=()=>d(!0);return c.createElement(a.Z,null,(()=>{let e=m(t);const a=o?m(o):e,b=n===u;return b&&e.includes("youtu.be/")&&(e=e.replace(".be/","be.com/embed/")),c.createElement(c.Fragment,null,c.createElement("button",{type:"button",className:r[b?"video-container":"media-container"],onClick:p,onKeyPress:p},c.createElement("img",{className:r.thumbnail,src:a,alt:i})),s&&c.createElement("div",{className:r["preview-container"]},c.createElement(l,{data:[{url:e,type:n,alt:i}],startIndex:0,onCloseCallback:()=>d(!1)})))}))}d.propTypes={src:o().oneOfType([o().string,o().object]).isRequired,thumbnail:o().oneOfType([o().string,o().object]),type:o().oneOf([s,u]),alt:o().string},d.defaultProps={thumbnail:"",type:s,alt:""};const p=d;const b={...n(52195).Z,"media-view":p}}}]);