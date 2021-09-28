var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,r=(t,n,o)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[n]=o,l=(e,t)=>{for(var n in t||(t={}))a.call(t,n)&&r(e,n,t[n]);if(o)for(var n of o(t))s.call(t,n)&&r(e,n,t[n]);return e};import{d as c,o as i,c as u,p as d,a as p,b as m,e as f,u as v,r as h,f as _,t as y,g as x,h as g,i as b,w as O,j as E,k as C,l as P,m as V,n as T,q as j,s as k,v as L,E as M,x as I,y as A,z as w,A as N,B as S}from"./vendor.d9a9d96b.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const D={},H=function(e,t){return t&&0!==t.length?Promise.all(t.map((e=>{if((e=`./${e}`)in D)return;D[e]=!0;const t=e.endsWith(".css"),n=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${n}`))return;const o=document.createElement("link");return o.rel=t?"stylesheet":"modulepreload",t||(o.as="script",o.crossOrigin=""),o.href=e,document.head.appendChild(o),t?new Promise(((e,t)=>{o.addEventListener("load",e),o.addEventListener("error",t)})):void 0}))).then((()=>e())):e()};var R=(e,t)=>{for(const[n,o]of t)e[n]=o;return e};const U=c({name:"Home"}),F=e=>(d("data-v-3def8755"),e=e(),p(),e),q={class:"home-container page-container"},B=[F((()=>m("img",{class:"vue-element-plus-logo",alt:"Vue logo",src:"./assets/logo.5041849f.png"},null,-1))),F((()=>m("div",{class:"page-title"},"Vite2.x + Vue3.x + TypeScript + Element Plus",-1)))];var $=R(U,[["render",function(e,t,n,o,a,s){return i(),u("div",q,B)}],["__scopeId","data-v-3def8755"]]);const z=f({state:{text:"This is Vuex Root.state.text"},getters:{},mutations:{},actions:{},modules:{numFactoryModule:{namespaced:!0,state:{name:"numFactory-module",count:1},mutations:{DOUBLE_COUNT(e){e.count*=2}},actions:{}},commonModule:{namespaced:!0,state:{collapse:!1},mutations:{handleCollapse(e,t){e.collapse=t}},actions:{}}}}),K=Symbol("vue-store");function W(){return v(K)}const G=c({name:"Vuex",setup(){const e=W(),o=h({text:_((()=>e.state.text)),count:_((()=>e.state.numFactoryModule.count))});return a=l({},y(o)),t(a,n({double:()=>{e.commit("numFactoryModule/DOUBLE_COUNT")}}));var a}}),J={class:"vuex-container page-container"},Q=m("div",{class:"page-title"},"Vuex Test Page",-1),X=E("double");var Y=R(G,[["render",function(e,t,n,o,a,s){const r=x("el-button");return i(),u("div",J,[Q,m("p",null,"store Root is: "+g(e.text),1),m("p",null,"store doubleCount is: "+g(e.count),1),b(r,{type:"primary",onClick:e.double},{default:O((()=>[X])),_:1},8,["onClick"])])}]]);const Z=c({name:"Vuex",setup(){const e=C(0);return{count:e,increment:()=>{e.value+=1}}}}),ee={class:"test-container page-container"},te=(e=>(d("data-v-811f393e"),e=e(),p(),e))((()=>m("div",{class:"page-title"},"Unit Test Page",-1)));const ne=[{path:"/",redirect:"/home"},{path:"/home",name:"Home",component:$},{path:"/vuex",name:"Vuex",component:Y},{path:"/axios",name:"Axios",component:()=>H((()=>import("./Axios.78c2149e.js")),["assets/Axios.78c2149e.js","assets/Axios.3926a2cd.css","assets/vendor.d9a9d96b.js"])},{path:"/test",name:"Test",component:R(Z,[["render",function(e,t,n,o,a,s){return i(),u("div",ee,[te,m("p",null,"count is: "+g(e.count),1),m("button",{onClick:t[0]||(t[0]=(...t)=>e.increment&&e.increment(...t))},"increment")])}],["__scopeId","data-v-811f393e"]])},{path:"/404",name:"404",component:()=>H((()=>import("./404.3876963f.js")),["assets/404.3876963f.js","assets/404.0e032737.css","assets/cloud.2f5c1094.js","assets/vendor.d9a9d96b.js"])},{path:"/403",name:"403",component:()=>H((()=>import("./403.3f83569c.js")),["assets/403.3f83569c.js","assets/403.5cf21f5d.css","assets/vendor.d9a9d96b.js","assets/cloud.2f5c1094.js"])}],oe=P({history:V(),routes:ne});const ae=c({name:"Header",setup(){const e=W(),t=T(),n=h({collapse:_((()=>e.state.commonModule.collapse))});return l({router:t,handleCollapse:()=>{e.commit("commonModule/handleCollapse",!n.collapse)}},y(n))}}),se={class:"header"};var re=R(ae,[["render",function(e,t,n,o,a,s){const r=x("el-button");return i(),u("div",se,[m("div",null,[b(r,{onClick:e.handleCollapse,type:"text"},{default:O((()=>[E(g(e.collapse?"expand":"collapse"),1)])),_:1},8,["onClick"])]),m("div",{class:"title",onClick:t[0]||(t[0]=t=>e.router.push("/home"))}," Vite2.x + Vue3.x + TypeScript Starter ")])}],["__scopeId","data-v-1723c464"]]);const le=c({name:"Nav",setup(){const e=W(),t=h({active:"",collapse:_((()=>null==e?void 0:e.state.commonModule.collapse))}),n=j();return k((()=>n.path),(e=>{console.log("监听到变化",e),t.active=e})),l({},y(t))}}),ce=e=>(d("data-v-793e658e"),e=e(),p(),e),ie={class:"nav"},ue=ce((()=>m("i",{class:"el-icon-location"},null,-1))),de=E("Home"),pe=ce((()=>m("i",{class:"el-icon-menu"},null,-1))),me=E("Vuex"),fe=ce((()=>m("i",{class:"el-icon-document"},null,-1))),ve=E("Axios"),he=ce((()=>m("i",{class:"el-icon-setting"},null,-1))),_e=E("Test");const ye=c({name:"Main",components:{Header:re,Nav:R(le,[["render",function(e,t,n,o,a,s){const r=x("el-menu-item"),l=x("el-menu");return i(),u("div",ie,[b(l,{class:"el-menu-vertical-demo",collapse:e.collapse,router:!0,"default-active":e.active},{default:O((()=>[b(r,{index:"/home"},{title:O((()=>[de])),default:O((()=>[ue])),_:1}),b(r,{index:"/vuex"},{title:O((()=>[me])),default:O((()=>[pe])),_:1}),b(r,{index:"/axios"},{title:O((()=>[ve])),default:O((()=>[fe])),_:1}),b(r,{index:"/test"},{title:O((()=>[_e])),default:O((()=>[he])),_:1})])),_:1},8,["collapse","default-active"])])}],["__scopeId","data-v-793e658e"]])}}),xe={class:"main-container"},ge={class:"left"},be={class:"right"},Oe={class:"top"},Ee={class:"content"};const Ce=N(R(c({name:"App",components:{Main:R(ye,[["render",function(e,t,n,o,a,s){const r=x("Nav"),l=x("Header"),c=x("router-view");return i(),u("main",xe,[m("div",ge,[b(r)]),m("div",be,[m("div",Oe,[b(l)]),m("div",Ee,[b(c)])])])}],["__scopeId","data-v-1ce591af"]])}}),[["render",function(e,t,n,o,a,s){const r=x("Main");return i(),L(r)}]]));var Pe;(Pe=Ce,[M,I,A,w].forEach((e=>{Pe.use(e)})),Pe).use(S).use(oe).use(z,K).mount("#app");export{R as _};
