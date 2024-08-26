(()=>{var e={};e.id=404,e.ids=[404],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},3319:e=>{"use strict";e.exports=import("shiki")},4300:e=>{"use strict";e.exports=require("buffer")},7147:e=>{"use strict";e.exports=require("fs")},9411:e=>{"use strict";e.exports=require("node:path")},7742:e=>{"use strict";e.exports=require("node:process")},1041:e=>{"use strict";e.exports=require("node:url")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},2891:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{GlobalError:()=>l.a,__next_app__:()=>h,originalPathname:()=>f,pages:()=>m,routeModule:()=>x,tree:()=>p});var n=r(7791);r(5498),r(5866);var a=r(3191),i=r(8716),o=r(7922),l=r.n(o),c=r(5231),u={};for(let e in c)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(u[e]=()=>c[e]);r.d(t,u);var d=e([n]);n=(d.then?(await d)():d)[0];let p=["",{children:["blog",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,7791)),"/Users/amaya/WorkPerso/Blog-Dev/src/app/blog/page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,5498)),"/Users/amaya/WorkPerso/Blog-Dev/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,5866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],m=["/Users/amaya/WorkPerso/Blog-Dev/src/app/blog/page.tsx"],f="/blog/page",h={require:r,loadChunk:()=>Promise.resolve()},x=new a.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/blog/page",pathname:"/blog",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:p}});s()}catch(e){s(e)}})},5115:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,9404,23)),Promise.resolve().then(r.bind(r,2630))},2630:(e,t,r)=>{"use strict";r.d(t,{default:()=>l});var s=r(326),n=r(7577);r(4673);let a={some:0,all:1};var i=r(8129),o=r(2989);let l=({children:e,className:t,variant:r,duration:l=.4,delay:c=0,yOffset:u=6,inView:d=!1,inViewMargin:p="-50px",blur:m="6px"})=>{let f=(0,n.useRef)(null),h=function(e,{root:t,margin:r,amount:s,once:i=!1}={}){let[o,l]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{if(!e.current||i&&o)return;let n={root:t&&t.current||void 0,margin:r,amount:s};return function(e,t,{root:r,margin:s,amount:n="some"}={}){var i;let o=("string"==typeof(i=e)?i=document.querySelectorAll(i):i instanceof Element&&(i=[i]),Array.from(i||[])),l=new WeakMap,c=new IntersectionObserver(e=>{e.forEach(e=>{let r=l.get(e.target);if(!!r!==e.isIntersecting){if(e.isIntersecting){let r=t(e);"function"==typeof r?l.set(e.target,r):c.unobserve(e.target)}else r&&(r(e),l.delete(e.target))}})},{root:r,rootMargin:s,threshold:"number"==typeof n?n:a[n]});return o.forEach(e=>c.observe(e)),()=>c.disconnect()}(e.current,()=>(l(!0),i?void 0:()=>l(!1)),n)},[t,e,r,i,s]),o}(f,{once:!0}),x={hidden:{y:u,opacity:0,filter:`blur(${m})`},visible:{y:-u,opacity:1,filter:"blur(0px)"}};return s.jsx(i.M,{children:s.jsx(o.E.div,{ref:f,initial:"hidden",animate:!d||h?"visible":"hidden",exit:"hidden",variants:r||x,transition:{delay:.04+c,duration:l,ease:"easeOut"},className:t,children:e})})}},7791:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{default:()=>c,metadata:()=>u});var n=r(9510),a=r(3667),i=r(550),o=r(7371),l=e([i]);i=(l.then?(await l)():l)[0];let u={title:"Blog",description:"My thoughts on software development, life, and more."};async function c(){let e=await (0,i.u3)();return(0,n.jsxs)("section",{children:[n.jsx(a.ZP,{delay:.04,children:n.jsx("h1",{className:"font-medium text-2xl mb-8 tracking-tighter",children:"blog"})}),e.sort((e,t)=>new Date(e.metadata.publishedAt)>new Date(t.metadata.publishedAt)?-1:1).map((e,t)=>n.jsx(a.ZP,{delay:.08+.05*t,children:n.jsx(o.default,{className:"flex flex-col space-y-1 mb-4",href:`/blog/${e.slug}`,children:(0,n.jsxs)("div",{className:"w-full flex flex-col",children:[n.jsx("p",{className:"tracking-tight",children:e.metadata.title}),n.jsx("p",{className:"h-6 text-xs text-muted-foreground",children:e.metadata.publishedAt})]})})},e.slug))]})}s()}catch(e){s(e)}})},3667:(e,t,r)=>{"use strict";r.d(t,{ZP:()=>o});var s=r(8570);let n=(0,s.createProxy)(String.raw`/Users/amaya/WorkPerso/Blog-Dev/src/components/magicui/blur-fade.tsx`),{__esModule:a,$$typeof:i}=n;n.default;let o=(0,s.createProxy)(String.raw`/Users/amaya/WorkPerso/Blog-Dev/src/components/magicui/blur-fade.tsx#default`)},550:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.d(t,{u3:()=>y,xl:()=>g});var n=r(7147),a=r.n(n),i=r(3673),o=r.n(i),l=r(1017),c=r.n(l),u=r(9381),d=r(3908),p=r(1269),m=r(4641),f=r(5187),h=e([u]);async function x(e){return(await (0,f.l)().use(p.Z).use(m.Z).use(u.Z,{theme:{light:"min-light",dark:"min-dark"},keepBackground:!1}).use(d.Z).process(e)).toString()}async function g(e){let t=c().join("content",`${e}.mdx`),r=a().readFileSync(t,"utf-8"),{content:s,data:n}=o()(r);return{source:await x(s),metadata:n,slug:e}}async function v(e){let t=a().readdirSync(e).filter(e=>".mdx"===c().extname(e));return Promise.all(t.map(async e=>{let t=c().basename(e,c().extname(e)),{metadata:r,source:s}=await g(t);return{metadata:r,slug:t,source:s}}))}async function y(){return v(c().join(process.cwd(),"content"))}u=(h.then?(await h)():h)[0],s()}catch(e){s(e)}})},3881:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});var s=r(6621);let n=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},8129:(e,t,r)=>{"use strict";r.d(t,{M:()=>g});var s=r(326),n=r(7577),a=r(295),i=r(7977),o=r(3965);class l extends n.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function c({children:e,isPresent:t}){let r=(0,n.useId)(),a=(0,n.useRef)(null),i=(0,n.useRef)({width:0,height:0,top:0,left:0}),{nonce:c}=(0,n.useContext)(o._);return(0,n.useInsertionEffect)(()=>{let{width:e,height:s,top:n,left:o}=i.current;if(t||!a.current||!e||!s)return;a.current.dataset.motionPopId=r;let l=document.createElement("style");return c&&(l.nonce=c),document.head.appendChild(l),l.sheet&&l.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${s}px !important;
            top: ${n}px !important;
            left: ${o}px !important;
          }
        `),()=>{document.head.removeChild(l)}},[t]),(0,s.jsx)(l,{isPresent:t,childRef:a,sizeRef:i,children:n.cloneElement(e,{ref:a})})}let u=({children:e,initial:t,isPresent:r,onExitComplete:o,custom:l,presenceAffectsLayout:u,mode:p})=>{let m=(0,i.h)(d),f=(0,n.useId)(),h=(0,n.useMemo)(()=>({id:f,initial:t,isPresent:r,custom:l,onExitComplete:e=>{for(let t of(m.set(e,!0),m.values()))if(!t)return;o&&o()},register:e=>(m.set(e,!1),()=>m.delete(e))}),u?[Math.random()]:[r]);return(0,n.useMemo)(()=>{m.forEach((e,t)=>m.set(t,!1))},[r]),n.useEffect(()=>{r||m.size||!o||o()},[r]),"popLayout"===p&&(e=(0,s.jsx)(c,{isPresent:r,children:e})),(0,s.jsx)(a.O.Provider,{value:h,children:e})};function d(){return new Map}var p=r(339),m=r(4673);let f=e=>e.key||"";function h(e){let t=[];return n.Children.forEach(e,e=>{(0,n.isValidElement)(e)&&t.push(e)}),t}var x=r(2482);let g=({children:e,exitBeforeEnter:t,custom:r,initial:a=!0,onExitComplete:o,presenceAffectsLayout:l=!0,mode:c="sync"})=>{(0,m.k)(!t,"Replace exitBeforeEnter with mode='wait'");let d=(0,n.useMemo)(()=>h(e),[e]),g=d.map(f),v=(0,n.useRef)(!0),y=(0,n.useRef)(d),b=(0,i.h)(()=>new Map),[P,w]=(0,n.useState)(d),[j,E]=(0,n.useState)(d);(0,x.L)(()=>{v.current=!1,y.current=d;for(let e=0;e<j.length;e++){let t=f(j[e]);g.includes(t)?b.delete(t):!0!==b.get(t)&&b.set(t,!1)}},[j,g.length,g.join("-")]);let q=[];if(d!==P){let e=[...d];for(let t=0;t<j.length;t++){let r=j[t],s=f(r);g.includes(s)||(e.splice(t,0,r),q.push(r))}"wait"===c&&q.length&&(e=q),E(h(e)),w(d);return}let{forceRender:k}=(0,n.useContext)(p.p);return(0,s.jsx)(s.Fragment,{children:j.map(e=>{let t=f(e),n=d===j||g.includes(t);return(0,s.jsx)(u,{isPresent:n,initial:(!v.current||!!a)&&void 0,custom:n?void 0:r,presenceAffectsLayout:l,mode:c,onExitComplete:n?void 0:()=>{if(!b.has(t))return;b.set(t,!0);let e=!0;b.forEach(t=>{t||(e=!1)}),e&&(null==k||k(),E(y.current),o&&o())},children:e},t)})})}}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[948,306,601,698,335],()=>r(2891));module.exports=s})();