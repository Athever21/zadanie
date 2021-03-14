(()=>{"use strict";var e,t,r={3290:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(3645),o=r.n(n)()((function(e){return e[1]}));o.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap);"]),o.push([e.id,'*{padding:0;margin:0;box-sizing:border-box;outline:none;color:#dfdfdf;font-family:"Open Sans",sans-serif}body{width:100%;max-height:100vh;background:#0b132b}.container{display:flex;flex-direction:column;height:100vh}.error{width:100%;text-align:center;font-size:2rem;color:#a50e0e;margin-top:2rem}.lds-ring{display:inline-block;position:relative;width:80px;height:80px}.lds-ring div{box-sizing:border-box;display:block;position:absolute;width:64px;height:64px;margin:8px;border:8px solid #fff;border-radius:50%;animation:lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;border-color:#fff transparent transparent transparent}.lds-ring div:nth-child(1){animation-delay:-0.45s}.lds-ring div:nth-child(2){animation-delay:-0.3s}.lds-ring div:nth-child(3){animation-delay:-0.15s}@keyframes lds-ring{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}',""]);const a=o},6137:(e,t,r)=>{r.d(t,{Z:()=>m});var n=r(7294),o=r(7209),a=r(3379),i=r.n(a),l=r(3290),d={insert:"head",singleton:!1};i()(l.Z,d);l.Z.locals;const s=function(){return n.createElement("div",{style:{width:"100%",display:"flex",flexDirection:"column",justifyContent:"flex-end",paddingTop:"0.5rem"}},n.createElement("div",{className:"lds-ring",style:{margin:"auto"}},n.createElement("div",null),n.createElement("div",null),n.createElement("div",null),n.createElement("div",null)))};const c=function(e){var t=e.error;return n.createElement("div",{className:"error"},t)};var u=r(5141);e=r.hmd(e);var p=(0,n.lazy)((function(){return r.e(703).then(r.bind(r,9703))})),f=(0,n.lazy)((function(){return r.e(3).then(r.bind(r,3003))}));const m=(0,o.wU)(e)((function(){var e=(0,u.v9)((function(e){return e.error})),t=(0,u.v9)((function(e){return e.project}));return console.log({project:t}),n.createElement("div",{className:"container"},n.createElement(n.Suspense,{fallback:n.createElement(s,null)},n.createElement(p,null)),n.createElement(n.Suspense,{fallback:n.createElement(s,null)},e&&n.createElement(c,{error:e}),t.id&&n.createElement(f,{project:t})))}))},7706:(e,t,r)=>{var n=r(7294),o=r(3935),a=r(5141),i=r(4890),l=r(3894);var d=(0,i.UY)({project:function(e,t){switch(void 0===e&&(e={}),t.type){case"ADD_PROJECT":return t.data;case"CLEAR_PROJECT":return{};default:return e}},error:function(e,t){switch(void 0===e&&(e=""),t.type){case"ERROR":return t.data;case"CLEAR_ERROR":return"";default:return e}}});const s=(0,i.MT)(d,(0,i.md)(l.Z));var c=r(6137);(0,o.render)(n.createElement(a.zt,{store:s},n.createElement(c.Z,null)),document.getElementById("root"))}},n={};function o(e){if(n[e])return n[e].exports;var t=n[e]={id:e,loaded:!1,exports:{}};return r[e](t,t.exports,o),t.loaded=!0,t.exports}o.m=r,o.x=e=>{},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((t,r)=>(o.f[r](e,t),t)),[])),o.u=e=>"dist-"+e+".js",o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="zadanie:",o.l=(r,n,a,i)=>{if(e[r])e[r].push(n);else{var l,d;if(void 0!==a)for(var s=document.getElementsByTagName("script"),c=0;c<s.length;c++){var u=s[c];if(u.getAttribute("src")==r||u.getAttribute("data-webpack")==t+a){l=u;break}}l||(d=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.setAttribute("data-webpack",t+a),l.src=r),e[r]=[n];var p=(t,n)=>{l.onerror=l.onload=null,clearTimeout(f);var o=e[r];if(delete e[r],l.parentNode&&l.parentNode.removeChild(l),o&&o.forEach((e=>e(n))),t)return t(n)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=p.bind(null,l.onerror),l.onload=p.bind(null,l.onload),d&&document.head.appendChild(l)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.p="/build/",(()=>{var e={179:0},t=[[7706,19]];o.f.j=(t,r)=>{var n=o.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var a=new Promise(((r,o)=>{n=e[t]=[r,o]}));r.push(n[2]=a);var i=o.p+o.u(t),l=new Error;o.l(i,(r=>{if(o.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",l.name="ChunkLoadError",l.type=a,l.request=i,n[1](l)}}),"chunk-"+t,t)}};var r=e=>{},n=(n,a)=>{for(var i,l,[d,s,c,u]=a,p=0,f=[];p<d.length;p++)l=d[p],o.o(e,l)&&e[l]&&f.push(e[l][0]),e[l]=0;for(i in s)o.o(s,i)&&(o.m[i]=s[i]);for(c&&c(o),n&&n(a);f.length;)f.shift()();return u&&t.push.apply(t,u),r()},a=self.webpackChunkzadanie=self.webpackChunkzadanie||[];function i(){for(var r,n=0;n<t.length;n++){for(var a=t[n],i=!0,l=1;l<a.length;l++){var d=a[l];0!==e[d]&&(i=!1)}i&&(t.splice(n--,1),r=o(o.s=a[0]))}return 0===t.length&&(o.x(),o.x=e=>{}),r}a.forEach(n.bind(null,0)),a.push=n.bind(null,a.push.bind(a));var l=o.x;o.x=()=>(o.x=l||(e=>{}),(r=i)())})();o.x()})();