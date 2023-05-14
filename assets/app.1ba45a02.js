import{d as c,f as m,D as p,_ as l,o as f,c as v,r as h,A as b,K as u,a3 as g,a4 as y,a5 as A,a6 as C,a7 as x,a8 as w,a9 as E,aa as k,ab as G,ac as I,H as P,u as D,h as R,l as F,ad as S,ae as T,af as V,ag as $}from"./chunks/framework.71457ee7.js";import{t as j}from"./chunks/theme.225fceb4.js";const B=c({name:"CodeGroup",setup(e,{slots:t}){const a=m(0);return()=>{var i;const o=(((i=t.default)==null?void 0:i.call(t))??[]).filter(n=>n.type.name==="CodeGroupItem").map(n=>(n.props=n.props??{},n));return o.forEach((n,s)=>{n.props.active=s===a.value}),p("div",{rounded:"2",overflow:"hidden",my:"4",w:"full"},[p("div",{w:"full",flex:"~",justify:"start",items:"center",gap:"10px",h:"12","dark:bg":"#27272A",bg:"#F5F5F5",px:"3",py:"4",box:"border"},[o.map((n,s)=>{var d;return p("div",{key:s,cursor:"pointer",text:"sm black",px:"2",py:"5px",tracking:"tight",transition:"colors",rounded:"6px",box:"border",class:["dark:color-white hover:bg-#E5E5E5 dark:hover:bg-#3A3A3D",{active:s===a.value}],onClick:()=>a.value=s},[(d=n.props)==null?void 0:d.title])})]),p("div",null,[o])])}}});const O=l(B,[["__scopeId","data-v-180885c4"]]),L={key:0,class:"content"},N=c({name:"CodeGroupItem",inheritAttrs:!1}),H=c({...N,props:{title:{},active:{type:Boolean}},setup(e){return(t,a)=>t.active?(f(),v("div",L,[h(t.$slots,"default",{},void 0,!0)])):b("",!0)}});const K=l(H,[["__scopeId","data-v-2bbab640"]]);const M={...j,enhanceApp({app:e}){e.component("CodeGroup",O),e.component("CodeGroupItem",K)}};function _(e){if(e.extends){const t=_(e.extends);return{...t,...e,async enhanceApp(a){t.enhanceApp&&await t.enhanceApp(a),e.enhanceApp&&await e.enhanceApp(a)}}}return e}const r=_(M),U=c({name:"VitePressApp",setup(){const{site:e}=D();return R(()=>{F(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),S(),T(),V(),r.setup&&r.setup(),()=>$(r.Layout)}});async function q(){const e=J(),t=z();t.provide(y,e);const a=A(e.route);return t.provide(C,a),t.component("Content",x),t.component("ClientOnly",w),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return a.frontmatter.value}},$params:{get(){return a.page.value.params}}}),r.enhanceApp&&await r.enhanceApp({app:t,router:e,siteData:E}),{app:t,router:e,data:a}}function z(){return k(U)}function J(){let e=u,t;return G(a=>{let o=I(a);return e&&(t=o),(e||t===o)&&(o=o.replace(/\.js$/,".lean.js")),u&&(e=!1),P(()=>import(o),[])},r.NotFound)}u&&q().then(({app:e,router:t,data:a})=>{t.go().then(()=>{g(t.route,a.site),e.mount("#app")})});export{q as createApp};
