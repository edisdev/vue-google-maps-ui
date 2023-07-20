"use strict";(self.webpackChunkvue_google_maps_ui=self.webpackChunkvue_google_maps_ui||[]).push([[654],{654:function(e,t,a){a.r(t),a.d(t,{default:function(){return ze}});var l=a(252),n=a(577),r=a(963),i=a(262),o=a(201),u=a(621);const s=["aria-labelledby"],c={class:"hero"},v=["src","alt"],d={key:1,id:"main-title"},p={key:2,class:"description"},h={key:3,class:"actions"},g={key:0,class:"features"},m={class:"theme-default-content custom"},k=["innerHTML"],b=["textContent"];var w=a(480);const f=["href","rel","target","aria-label"];var L=(0,l.aZ)({name:"NavLink",inheritAttrs:!1,props:{item:{type:Object,required:!0}},setup(e){const t=(0,o.yj)(),a=(0,u.WF)(),{item:n}=(0,i.BK)(e),r=(0,l.Fl)((()=>(0,w.ak)(n.value.link))),s=(0,l.Fl)((()=>(0,w.B2)(n.value.link)||(0,w.R5)(n.value.link))),c=(0,l.Fl)((()=>{if(!s.value)return n.value.target?n.value.target:r.value?"_blank":void 0})),v=(0,l.Fl)((()=>"_blank"===c.value)),d=(0,l.Fl)((()=>!r.value&&!s.value&&!v.value)),p=(0,l.Fl)((()=>{if(!s.value)return n.value.rel?n.value.rel:v.value?"noopener noreferrer":void 0})),h=(0,l.Fl)((()=>n.value.ariaLabel||n.value.text)),g=(0,l.Fl)((()=>{const e=Object.keys(a.value.locales);return e.length?!e.some((e=>e===n.value.link)):"/"!==n.value.link})),m=(0,l.Fl)((()=>!!g.value&&t.path.startsWith(n.value.link)));return{isActive:(0,l.Fl)((()=>!!d.value&&(n.value.activeMatch?new RegExp(n.value.activeMatch).test(t.path):m.value))),isBlankTarget:v,isRouterLink:d,linkRel:p,linkTarget:c,linkAriaLabel:h}}}),y=a(789),D=(0,y.Z)(L,[["render",function(e,t,a,r,i,o){const u=(0,l.up)("RouterLink"),s=(0,l.up)("OutboundLink");return e.isRouterLink?((0,l.wg)(),(0,l.j4)(u,(0,l.dG)({key:0,class:["nav-link",{"router-link-active":e.isActive}],to:e.item.link,"aria-label":e.linkAriaLabel},e.$attrs),{default:(0,l.w5)((()=>[(0,l.WI)(e.$slots,"before"),(0,l.Uk)(" "+(0,n.zw)(e.item.text)+" ",1),(0,l.WI)(e.$slots,"after")])),_:3},16,["class","to","aria-label"])):((0,l.wg)(),(0,l.iD)("a",(0,l.dG)({key:1,class:"nav-link external",href:e.item.link,rel:e.linkRel,target:e.linkTarget,"aria-label":e.linkAriaLabel},e.$attrs),[(0,l.WI)(e.$slots,"before"),(0,l.Uk)(" "+(0,n.zw)(e.item.text)+" ",1),e.isBlankTarget?((0,l.wg)(),(0,l.j4)(s,{key:0})):(0,l.kq)("",!0),(0,l.WI)(e.$slots,"after")],16,f))}]]),_=(0,l.aZ)({name:"Home",components:{NavLink:D},setup(){const e=(0,u.I2)(),t=(0,u.I5)(),a=(0,l.Fl)((()=>e.value.heroImage?(0,u.pJ)(e.value.heroImage):null)),n=(0,l.Fl)((()=>null===e.value.heroText?null:e.value.heroText||t.value.title||"Hello")),r=(0,l.Fl)((()=>e.value.heroAlt||n.value||"hero")),i=(0,l.Fl)((()=>null===e.value.tagline?null:e.value.tagline||t.value.description||"Welcome to your VuePress site")),o=(0,l.Fl)((()=>(0,w.kJ)(e.value.actions)?e.value.actions.map((({text:e,link:t,type:a="primary"})=>({text:e,link:t,type:a}))):[])),s=(0,l.Fl)((()=>(0,w.kJ)(e.value.features)?e.value.features:[])),c=(0,l.Fl)((()=>e.value.footer)),v=(0,l.Fl)((()=>e.value.footerHtml));return{heroImage:a,heroAlt:r,heroText:n,tagline:i,actions:o,features:s,footer:c,footerHtml:v}}}),F=(0,y.Z)(_,[["render",function(e,t,a,r,i,o){const u=(0,l.up)("NavLink"),w=(0,l.up)("Content");return(0,l.wg)(),(0,l.iD)("main",{class:"home","aria-labelledby":e.heroText?"main-title":void 0},[(0,l._)("header",c,[e.heroImage?((0,l.wg)(),(0,l.iD)("img",{key:0,src:e.heroImage,alt:e.heroAlt},null,8,v)):(0,l.kq)("",!0),e.heroText?((0,l.wg)(),(0,l.iD)("h1",d,(0,n.zw)(e.heroText),1)):(0,l.kq)("",!0),e.tagline?((0,l.wg)(),(0,l.iD)("p",p,(0,n.zw)(e.tagline),1)):(0,l.kq)("",!0),e.actions.length?((0,l.wg)(),(0,l.iD)("p",h,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.actions,(e=>((0,l.wg)(),(0,l.j4)(u,{key:e.text,class:(0,n.C_)(["action-button",[e.type]]),item:e},null,8,["class","item"])))),128))])):(0,l.kq)("",!0)]),e.features.length?((0,l.wg)(),(0,l.iD)("div",g,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.features,(e=>((0,l.wg)(),(0,l.iD)("div",{key:e.title,class:"feature"},[(0,l._)("h2",null,(0,n.zw)(e.title),1),(0,l._)("p",null,(0,n.zw)(e.details),1)])))),128))])):(0,l.kq)("",!0),(0,l._)("div",m,[(0,l.Wm)(w)]),e.footer?((0,l.wg)(),(0,l.iD)(l.HY,{key:1},[e.footerHtml?((0,l.wg)(),(0,l.iD)("div",{key:0,class:"footer",innerHTML:e.footer},null,8,k)):((0,l.wg)(),(0,l.iD)("div",{key:1,class:"footer",textContent:(0,n.zw)(e.footer)},null,8,b))],64)):(0,l.kq)("",!0)],8,s)}]]);const x={class:"page"},I={class:"theme-default-content"},N={class:"page-meta"},T={key:0,class:"meta-item edit-link"},W={key:1,class:"meta-item last-updated"},C={class:"meta-item-label"},H={class:"meta-item-info"},$={key:2,class:"meta-item contributors"},z={class:"meta-item-label"},M={class:"meta-item-info"},S=["title"];var B=a(761);const j=e=>!(0,w.ak)(e)||/github\.com/.test(e)?"GitHub":/bitbucket\.org/.test(e)?"Bitbucket":/gitlab\.com/.test(e)?"GitLab":/gitee\.com/.test(e)?"Gitee":null,q={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"};var Z=(0,l.aZ)({name:"PageMeta",components:{NavLink:D},setup(){const e=(0,B.X6)(),t=(()=>{const e=(0,B.X6)(),t=(0,u.Vi)(),a=(0,u.I2)();return(0,l.Fl)((()=>{var l,n;if(null!=(n=null!=(l=a.value.editLink)?l:e.value.editLink)&&!n)return null;const{repo:r,docsRepo:i=r,docsBranch:o="main",docsDir:u="",editLinkText:s}=e.value;if(!i)return null;const c=(({docsRepo:e,docsBranch:t,docsDir:a,filePathRelative:l,editLinkPattern:n})=>{const r=j(e);let i;return n?i=n:null!==r&&(i=q[r]),i?i.replace(/:repo/,(0,w.ak)(e)?e:`https://github.com/${e}`).replace(/:branch/,t).replace(/:path/,(0,w.FY)(`${(0,w.U1)(a)}/${l}`)):null})({docsRepo:i,docsBranch:o,docsDir:u,filePathRelative:t.value.filePathRelative,editLinkPattern:e.value.editLinkPattern});return c?{text:null!=s?s:"Edit this page",link:c}:null}))})(),a=(()=>{const e=(0,u.I5)(),t=(0,B.X6)(),a=(0,u.Vi)(),n=(0,u.I2)();return(0,l.Fl)((()=>{var l,r,i,o;return(null==(r=null!=(l=n.value.lastUpdated)?l:t.value.lastUpdated)||r)&&(null==(i=a.value.git)?void 0:i.updatedTime)?new Date(null==(o=a.value.git)?void 0:o.updatedTime).toLocaleString(e.value.lang):null}))})(),n=(()=>{const e=(0,B.X6)(),t=(0,u.Vi)(),a=(0,u.I2)();return(0,l.Fl)((()=>{var l,n,r,i;return null!=(n=null!=(l=a.value.contributors)?l:e.value.contributors)&&!n||null==(i=null==(r=t.value.git)?void 0:r.contributors)?null:i}))})();return{themeLocale:e,editNavLink:t,lastUpdated:a,contributors:n}}}),A=(0,y.Z)(Z,[["render",function(e,t,a,r,i,o){const u=(0,l.up)("NavLink");return(0,l.wg)(),(0,l.iD)("footer",N,[e.editNavLink?((0,l.wg)(),(0,l.iD)("div",T,[(0,l.Wm)(u,{class:"meta-item-label",item:e.editNavLink},null,8,["item"])])):(0,l.kq)("",!0),e.lastUpdated?((0,l.wg)(),(0,l.iD)("div",W,[(0,l._)("span",C,(0,n.zw)(e.themeLocale.lastUpdatedText)+": ",1),(0,l._)("span",H,(0,n.zw)(e.lastUpdated),1)])):(0,l.kq)("",!0),e.contributors&&e.contributors.length?((0,l.wg)(),(0,l.iD)("div",$,[(0,l._)("span",z,(0,n.zw)(e.themeLocale.contributorsText)+": ",1),(0,l._)("span",M,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.contributors,((t,a)=>((0,l.wg)(),(0,l.iD)(l.HY,{key:a},[(0,l._)("span",{class:"contributor",title:`email: ${t.email}`},(0,n.zw)(t.name),9,S),a!==e.contributors.length-1?((0,l.wg)(),(0,l.iD)(l.HY,{key:0},[(0,l.Uk)(", ")],64)):(0,l.kq)("",!0)],64)))),128))])])):(0,l.kq)("",!0)])}]]);const P={key:0,class:"page-nav"},U={class:"inner"},R={key:0,class:"prev"},Y={key:1,class:"next"},E=e=>!1===e?null:(0,w.HD)(e)?(0,B.sC)(e):!!(0,w.PO)(e)&&e,O=(e,t,a)=>{const l=e.findIndex((e=>e.link===t));if(-1!==l){const t=e[l+a];return(null==t?void 0:t.link)?t:null}for(const l of e)if(l.children){const e=O(l.children,t,a);if(e)return e}return null};var X=(0,l.aZ)({name:"PageNav",components:{NavLink:D},setup(){const e=(0,u.I2)(),t=(0,B.VU)(),a=(0,o.yj)();return{prevNavLink:(0,l.Fl)((()=>{const l=E(e.value.prev);return!1!==l?l:O(t.value,a.path,-1)})),nextNavLink:(0,l.Fl)((()=>{const l=E(e.value.next);return!1!==l?l:O(t.value,a.path,1)}))}}}),V=(0,y.Z)(X,[["render",function(e,t,a,n,r,i){const o=(0,l.up)("NavLink");return e.prevNavLink||e.nextNavLink?((0,l.wg)(),(0,l.iD)("nav",P,[(0,l._)("p",U,[e.prevNavLink?((0,l.wg)(),(0,l.iD)("span",R,[(0,l.Uk)(" ← "),(0,l.Wm)(o,{item:e.prevNavLink},null,8,["item"])])):(0,l.kq)("",!0),e.nextNavLink?((0,l.wg)(),(0,l.iD)("span",Y,[(0,l.Wm)(o,{item:e.nextNavLink},null,8,["item"]),(0,l.Uk)(" → ")])):(0,l.kq)("",!0)])])):(0,l.kq)("",!0)}]]),K=(0,l.aZ)({name:"Page",components:{PageMeta:A,PageNav:V}}),G=(0,y.Z)(K,[["render",function(e,t,a,n,r,i){const o=(0,l.up)("Content"),u=(0,l.up)("PageMeta"),s=(0,l.up)("PageNav");return(0,l.wg)(),(0,l.iD)("main",x,[(0,l.WI)(e.$slots,"top"),(0,l._)("div",I,[(0,l.Wm)(o)]),(0,l.Wm)(u),(0,l.Wm)(s),(0,l.WI)(e.$slots,"bottom")])}]]);const J={key:0,class:"navbar-links"},Q=["aria-label"],ee={class:"title"},te=(0,l._)("span",{class:"arrow down"},null,-1),ae=["aria-label"],le={class:"title"},ne={class:"nav-dropdown"},re={class:"dropdown-subtitle"},ie={key:1},oe={class:"dropdown-subitem-wrapper"};var ue=(0,l.aZ)({name:"DropdownLink",components:{NavLink:D},props:{item:{type:Object,required:!0}},setup(e){const{item:t}=(0,i.BK)(e),a=(0,l.Fl)((()=>t.value.ariaLabel||t.value.text)),n=(0,i.iH)(!1),r=(0,o.yj)();return(0,l.YP)((()=>r.path),(()=>{n.value=!1})),{open:n,dropdownAriaLabel:a,handleDropdown:e=>{const t=0===e.detail;n.value=!!t&&!n.value},isLastItemOfArray:(e,t)=>t[t.length-1]===e}}}),se=(0,y.Z)(ue,[["render",function(e,t,a,i,o,u){const s=(0,l.up)("NavLink");return(0,l.wg)(),(0,l.iD)("div",{class:(0,n.C_)(["dropdown-wrapper",{open:e.open}])},[(0,l._)("button",{class:"dropdown-title",type:"button","aria-label":e.dropdownAriaLabel,onClick:t[0]||(t[0]=(...t)=>e.handleDropdown&&e.handleDropdown(...t))},[(0,l._)("span",ee,(0,n.zw)(e.item.text),1),te],8,Q),(0,l._)("button",{class:"mobile-dropdown-title",type:"button","aria-label":e.dropdownAriaLabel,onClick:t[1]||(t[1]=t=>e.open=!e.open)},[(0,l._)("span",le,(0,n.zw)(e.item.text),1),(0,l._)("span",{class:(0,n.C_)(["arrow",e.open?"down":"right"])},null,2)],8,ae),(0,l.wy)((0,l._)("ul",ne,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.item.children,((t,a)=>((0,l.wg)(),(0,l.iD)("li",{key:t.link||a,class:"dropdown-item"},[t.children?((0,l.wg)(),(0,l.iD)(l.HY,{key:0},[(0,l._)("h4",re,[t.link?((0,l.wg)(),(0,l.j4)(s,{key:0,item:t,onFocusout:a=>e.isLastItemOfArray(t,e.item.children)&&0===t.children.length&&(e.open=!1)},null,8,["item","onFocusout"])):((0,l.wg)(),(0,l.iD)("span",ie,(0,n.zw)(t.text),1))]),(0,l._)("ul",oe,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(t.children,(a=>((0,l.wg)(),(0,l.iD)("li",{key:a.link,class:"dropdown-subitem"},[(0,l.Wm)(s,{item:a,onFocusout:l=>e.isLastItemOfArray(a,t.children)&&e.isLastItemOfArray(t,e.item.children)&&(e.open=!1)},null,8,["item","onFocusout"])])))),128))])],64)):((0,l.wg)(),(0,l.j4)(s,{key:1,item:t,onFocusout:a=>e.isLastItemOfArray(t,e.item.children)&&(e.open=!1)},null,8,["item","onFocusout"]))])))),128))],512),[[r.F8,e.open]])],2)}]]);const ce=e=>(0,w.HD)(e)?(0,B.sC)(e):e.children?{...e,children:e.children.map(ce)}:e;var ve=(0,l.aZ)({name:"NavbarLinks",components:{NavLink:D,DropdownLink:se},setup(){const e=(()=>{const e=(0,B.X6)();return(0,l.Fl)((()=>(e.value.navbar||[]).map(ce)))})(),t=(()=>{const e=(0,o.tv)(),t=(0,u.I)(),a=(0,u.I5)(),n=(0,B.X6)();return(0,l.Fl)((()=>{var l,r;const i=Object.keys(a.value.locales);if(i.length<2)return[];const o=e.currentRoute.value.path,u=e.currentRoute.value.fullPath;return[{text:null!=(l=n.value.selectLanguageText)?l:"unkown language",ariaLabel:null!=(r=n.value.selectLanguageAriaLabel)?r:"unkown language",children:i.map((l=>{var r,i,s,c,v,d;const p=null!=(i=null==(r=a.value.locales)?void 0:r[l])?i:{},h=null!=(c=null==(s=n.value.locales)?void 0:s[l])?c:{},g=`${p.lang}`,m=null!=(v=h.selectLanguageName)?v:g;let k;if(g===a.value.lang)k=u;else{const a=o.replace(t.value,l);k=e.getRoutes().some((e=>e.path===a))?a:null!=(d=h.home)?d:l}return{text:m,link:k}}))}]}))})(),a=(()=>{const e=(0,B.X6)(),t=(0,l.Fl)((()=>e.value.repo)),a=(0,l.Fl)((()=>t.value?j(t.value):null)),n=(0,l.Fl)((()=>t.value&&!(0,w.ak)(t.value)?`https://github.com/${t.value}`:t.value)),r=(0,l.Fl)((()=>n.value?e.value.repoLabel?e.value.repoLabel:null===a.value?"Source":a.value:null));return(0,l.Fl)((()=>n.value&&r.value?[{text:r.value,link:n.value}]:[]))})();return{navbarLinks:(0,l.Fl)((()=>[...e.value,...t.value,...a.value]))}}}),de=(0,y.Z)(ve,[["render",function(e,t,a,n,r,i){const o=(0,l.up)("DropdownLink"),u=(0,l.up)("NavLink");return e.navbarLinks.length?((0,l.wg)(),(0,l.iD)("nav",J,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.navbarLinks,(e=>((0,l.wg)(),(0,l.iD)("div",{key:e.text,class:"navbar-links-item"},[e.children?((0,l.wg)(),(0,l.j4)(o,{key:0,item:e},null,8,["item"])):((0,l.wg)(),(0,l.j4)(u,{key:1,item:e},null,8,["item"]))])))),128))])):(0,l.kq)("",!0)}]]);const pe=["title"],he={class:"icon",focusable:"false",viewBox:"0 0 32 32"},ge=[(0,l.uE)('<path d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z" fill="currentColor"></path><path d="M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z" fill="currentColor"></path><path d="M2 15.005h5v2H2z" fill="currentColor"></path><path d="M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 25.005h2v5h-2z" fill="currentColor"></path><path d="M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z" fill="currentColor"></path><path d="M25 15.005h5v2h-5z" fill="currentColor"></path><path d="M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 2.005h2v5h-2z" fill="currentColor"></path>',9)],me={class:"icon",focusable:"false",viewBox:"0 0 32 32"},ke=[(0,l._)("path",{d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z",fill:"currentColor"},null,-1)];var be=(0,l.aZ)({__name:"ToggleDarkModeButton",setup(e){const t=(0,B.X6)(),a=(0,B.vs)(),n=()=>{a.value=!a.value};return(0,B.u)(a),(0,B.tJ)(a),(e,o)=>((0,l.wg)(),(0,l.iD)("button",{class:"toggle-dark-button",title:(0,i.SU)(t).toggleDarkMode,onClick:n},[(0,l.wy)(((0,l.wg)(),(0,l.iD)("svg",he,ge,512)),[[r.F8,!(0,i.SU)(a)]]),(0,l.wy)(((0,l.wg)(),(0,l.iD)("svg",me,ke,512)),[[r.F8,(0,i.SU)(a)]])],8,pe))}});const we=[(0,l._)("svg",{class:"icon",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"},[(0,l._)("path",{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"})],-1)];var fe=(0,l.aZ)({name:"ToggleSidebarButton",emits:["toggle"]}),Le=(0,y.Z)(fe,[["render",function(e,t,a,n,r,i){return(0,l.wg)(),(0,l.iD)("div",{class:"toggle-sidebar-button",onClick:t[0]||(t[0]=t=>e.$emit("toggle"))},we)}]]);const ye=["src","alt"];var De=(0,l.aZ)({__name:"Navbar",emits:["toggle-sidebar"],setup(e){const t=(0,u.I)(),a=(0,u.I5)(),r=(0,B.X6)(),o=(0,i.iH)(null),s=(0,i.iH)(null),c=(0,l.Fl)((()=>r.value.home||t.value)),v=(0,l.Fl)((()=>r.value.logo)),d=(0,l.Fl)((()=>a.value.title)),p=(0,i.iH)(0),h=(0,l.Fl)((()=>p.value?{maxWidth:p.value+"px"}:{})),g=(0,l.Fl)((()=>r.value.darkMode));function m(e,t){var a,l,n;const r=null==(n=null==(l=null==(a=null==e?void 0:e.ownerDocument)?void 0:a.defaultView)?void 0:l.getComputedStyle(e,null))?void 0:n[t],i=Number.parseInt(r,10);return Number.isNaN(i)?0:i}return(0,l.bv)((()=>{const e=m(o.value,"paddingLeft")+m(o.value,"paddingRight"),t=()=>{var t;window.innerWidth<=719?p.value=0:p.value=o.value.offsetWidth-e-((null==(t=s.value)?void 0:t.offsetWidth)||0)};t(),window.addEventListener("resize",t,!1),window.addEventListener("orientationchange",t,!1)})),(e,t)=>{const a=(0,l.up)("RouterLink"),r=(0,l.up)("NavbarSearch");return(0,l.wg)(),(0,l.iD)("header",{ref_key:"navbar",ref:o,class:"navbar"},[(0,l.Wm)(Le,{onToggle:t[0]||(t[0]=t=>e.$emit("toggle-sidebar"))}),(0,l._)("span",{ref_key:"siteBrand",ref:s},[(0,l.Wm)(a,{to:c.value},{default:(0,l.w5)((()=>[v.value?((0,l.wg)(),(0,l.iD)("img",{key:0,class:"logo",src:(0,i.SU)(u.pJ)(v.value),alt:d.value},null,8,ye)):(0,l.kq)("",!0),d.value?((0,l.wg)(),(0,l.iD)("span",{key:1,class:(0,n.C_)(["site-name",{"can-hide":v.value}])},(0,n.zw)(d.value),3)):(0,l.kq)("",!0)])),_:1},8,["to"])],512),(0,l._)("div",{class:"navbar-links-wrapper",style:(0,n.j5)(h.value)},[(0,l.WI)(e.$slots,"before"),(0,l.Wm)(de,{class:"can-hide"}),(0,l.WI)(e.$slots,"after"),g.value?((0,l.wg)(),(0,l.j4)(be,{key:0})):(0,l.kq)("",!0),(0,l.Wm)(r)],4)],512)}}});const _e={class:"sidebar"},Fe={class:"sidebar-links"},xe=e=>decodeURI(e).replace(/#.*$/,"").replace(/(index)?\.(md|html)$/,""),Ie=(e,t)=>!!((e,t)=>void 0!==t&&(e.hash===t||xe(e.path)===xe(t)))(e,t.link)||!!t.children&&t.children.some((t=>Ie(e,t))),Ne=(e,t)=>e.link?(0,l.h)(D,{...t,item:e}):(0,l.h)("p",t,e.text),Te=(e,t)=>{var a;return(null===(a=e.children)||void 0===a?void 0:a.length)?(0,l.h)("ul",{class:{"sidebar-sub-items":t>0}},e.children.map((e=>(0,l.h)("li",(0,l.h)(We,{item:e,depth:t+1}))))):null},We=({item:e,depth:t=0})=>{const a=(0,o.yj)(),l=Ie(a,e);return[Ne(e,{class:{"sidebar-heading":0===t,"sidebar-item":!0,active:l}}),Te(e,t)]};We.displayName="SidebarChild",We.props={item:{type:Object,required:!0},depth:{type:Number,required:!1}};var Ce=(0,l.aZ)({name:"Sidebar",components:{NavbarLinks:de,SidebarChild:We},setup(){return{sidebarItems:(0,B.VU)()}}}),He=(0,y.Z)(Ce,[["render",function(e,t,a,n,r,i){const o=(0,l.up)("NavbarLinks"),u=(0,l.up)("SidebarChild");return(0,l.wg)(),(0,l.iD)("aside",_e,[(0,l.Wm)(o),(0,l.WI)(e.$slots,"top"),(0,l._)("ul",Fe,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.sidebarItems,(e=>((0,l.wg)(),(0,l.j4)(u,{key:e.link||e.text,item:e},null,8,["item"])))),128))]),(0,l.WI)(e.$slots,"bottom")])}]]),$e=(0,l.aZ)({name:"Layout",components:{Home:F,Page:G,Navbar:De,Sidebar:He,Transition:r.uT},setup(){const e=(0,u.Vi)(),t=(0,u.I2)(),a=(0,B.X6)(),n=(0,l.Fl)((()=>!1!==t.value.navbar&&!1!==a.value.navbar)),r=(0,B.VU)(),s=(0,i.iH)(!1),c=e=>{s.value="boolean"==typeof e?e:!s.value},v={x:0,y:0},d=(0,l.Fl)((()=>[{"no-navbar":!n.value,"no-sidebar":!r.value.length,"sidebar-open":s.value},t.value.pageClass]));let p;(0,l.bv)((()=>{const e=(0,o.tv)();p=e.afterEach((()=>{c(!1)}))})),(0,l.Ah)((()=>{p()}));const h=(0,B.P$)(),g=h.resolve,m=h.pending;return{frontmatter:t,page:e,containerClass:d,shouldShowNavbar:n,toggleSidebar:c,onTouchStart:e=>{v.x=e.changedTouches[0].clientX,v.y=e.changedTouches[0].clientY},onTouchEnd:e=>{const t=e.changedTouches[0].clientX-v.x,a=e.changedTouches[0].clientY-v.y;Math.abs(t)>Math.abs(a)&&Math.abs(t)>40&&(t>0&&v.x<=80?c(!0):c(!1))},onBeforeEnter:g,onBeforeLeave:m}}}),ze=(0,y.Z)($e,[["render",function(e,t,a,i,o,u){const s=(0,l.up)("Navbar"),c=(0,l.up)("Sidebar"),v=(0,l.up)("Home"),d=(0,l.up)("Page");return(0,l.wg)(),(0,l.iD)("div",{class:(0,n.C_)(["theme-container",e.containerClass]),onTouchstart:t[1]||(t[1]=(...t)=>e.onTouchStart&&e.onTouchStart(...t)),onTouchend:t[2]||(t[2]=(...t)=>e.onTouchEnd&&e.onTouchEnd(...t))},[e.shouldShowNavbar?((0,l.wg)(),(0,l.j4)(s,{key:0,onToggleSidebar:e.toggleSidebar},{before:(0,l.w5)((()=>[(0,l.WI)(e.$slots,"navbar-before")])),after:(0,l.w5)((()=>[(0,l.WI)(e.$slots,"navbar-after")])),_:3},8,["onToggleSidebar"])):(0,l.kq)("",!0),(0,l._)("div",{class:"sidebar-mask",onClick:t[0]||(t[0]=t=>e.toggleSidebar(!1))}),(0,l.Wm)(c,null,{top:(0,l.w5)((()=>[(0,l.WI)(e.$slots,"sidebar-top")])),bottom:(0,l.w5)((()=>[(0,l.WI)(e.$slots,"sidebar-bottom")])),_:3}),(0,l.WI)(e.$slots,"page",{},(()=>[e.frontmatter.home?((0,l.wg)(),(0,l.j4)(v,{key:0})):((0,l.wg)(),(0,l.j4)(r.uT,{key:1,name:"fade-slide-y",mode:"out-in",onBeforeEnter:e.onBeforeEnter,onBeforeLeave:e.onBeforeLeave},{default:(0,l.w5)((()=>[((0,l.wg)(),(0,l.j4)(d,{key:e.page.path},{top:(0,l.w5)((()=>[(0,l.WI)(e.$slots,"page-top")])),bottom:(0,l.w5)((()=>[(0,l.WI)(e.$slots,"page-bottom")])),_:3}))])),_:3},8,["onBeforeEnter","onBeforeLeave"]))]))],34)}]])}}]);