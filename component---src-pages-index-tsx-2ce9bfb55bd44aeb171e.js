(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{JgPm:function(t,e,a){"use strict";a.d(e,"a",(function(){return c}));var n=a("DZdY"),i=(a("q1tI"),a("Bapl")),o=a("45fX"),l=a("qKvR");const c=Object(n.a)("div",{target:"eq12ikv0",label:"IconListComponent"})({name:"rfw8nr",styles:"display:flex;a+a{margin-left:20px;@media (max-width: 768px){margin-left:15px;}}"});e.b=function({list:t,size:e}){return Object(l.a)(c,null,t&&t.map(({href:t,type:a})=>Object(l.a)("a",{href:t,key:Object(o.a)(),rel:"noreferrer",target:"_blank","aria-label":a},Object(l.a)(i.b,{type:a,size:e}))))}},KUDz:function(t,e,a){"use strict";a.d(e,"a",(function(){return c}));var n=a("DZdY"),i=(a("q1tI"),a("j/sC")),o=a("xn1H"),l=a("qKvR");const c=Object(n.a)("header",{target:"e1wq4n21",label:"HeaderComponent"})("width:768px;height:80px;margin:0 auto;display:flex;justify-content:space-between;align-items:center;@media (max-width: 768px){padding:0 20px;width:100%;",o.a,"{width:100%;justify-content:space-between;}}"),r=Object(n.a)(i.b,{target:"e1wq4n20",label:"Title"})({name:"1no9hen",styles:"font-size:17px;font-weight:700;@media (max-width: 768px){display:none;}"});e.b=function({}){return Object(l.a)(c,null,Object(l.a)(r,null,"Too Early To Stop"),Object(l.a)(o.b,{modeSwitch:!0}))}},QeBL:function(t,e,a){"use strict";a.r(e),a.d(e,"metadataQuery",(function(){return C}));var n=a("q1tI"),i=a("oO+H"),o=a("DZdY"),l=a("pRDh"),c=a("j/sC"),r=a("qKvR");const d=Object(o.a)("div",{target:"e1q4ez7y0",label:"SideMenuComponent"})("display:flex;width:15px;font-weight:300;margin-left:auto;flex-direction:row;justify-content:center;writing-mode:vertical-rl;",c.a,"{cursor:pointer;}",l.a,"+",c.a,",",l.a,"+",l.a,"{margin-top:30px;}");var b=function({}){const[t,e]=Object(n.useState)("");Object(n.useEffect)(()=>{e(window.localStorage.getItem("blog-current-mode"))},[]);return Object(r.a)(d,null,Object(r.a)(l.b,{to:"/"},Object(r.a)(c.b,null,"Main")),Object(r.a)(l.b,{to:"/about"},Object(r.a)(c.b,null,"About")),Object(r.a)(l.b,{to:"/portfolio"},Object(r.a)(c.b,null,"Portfolio")),Object(r.a)(l.b,{to:"/blog/1"},Object(r.a)(c.b,null,"Blog")),Object(r.a)(c.b,{onClick:()=>{const a="light"===t?"dark":"light";window.document.body.classList.remove(t),window.document.body.classList.add(a),window.localStorage.setItem("blog-current-mode",a),e(a)}},"light"===t?"Dark":"Light"," Mode"))},s=a("JgPm"),p=a("mvWA");const u=Object(o.a)("div",{target:"e1coml6v0",label:"ProfileImageComponent"})("width:",({width:t})=>t+"px",";height:",({height:t})=>t+"px",";border:1px solid rgba(0, 0, 0, 0.1);border-radius:50%;display:flex;justify-content:center;align-items:center;overflow:hidden;cursor:pointer;img{width:100%;height:100%;object-fit:cover;}");var m=function({src:t,alt:e,...a}){return Object(r.a)(u,a,Object(r.a)("img",{src:t,alt:e}))};const g=Object(o.a)("h1",{target:"e1s2vm451",label:"MainText"})({name:"1si0tzl",styles:"font-size:50px;font-weight:700;margin-bottom:10px;@media (min-width: 768px) and (max-width: 1200px){font-size:35px;}@media (max-width: 768px){font-size:25px;}"}),h=Object(o.a)(c.b,{target:"e1s2vm450",label:"SubText"})({name:"1lxwkx3",styles:"font-size:25px;font-weight:300;@media (min-width: 769px) and (max-width: 1200px){font-size:20px;}@media (max-width: 768px){font-size:15px;}"});var w=function({}){return Object(r.a)("div",null,Object(r.a)(g,null,"Hello, I am Ju Hyeon Do"),Object(r.a)(h,null,"I am a Junior Full-Stack Developer,"),Object(r.a)(h,null,"hoping to become Professional Developer"))};const f=Object(o.a)("div",{target:"e1jwsd5z1",label:"IntroductionComponent"})("display:flex;align-items:center;",u,"{margin-right:30px;}@media (max-width: 1200px){",u,"{margin-right:0;margin-bottom:20px;}flex-direction:column;align-items:flex-start;}"),x=Object(o.a)("div",{target:"e1jwsd5z0",label:"RightIntroduction"})("display:flex;flex-direction:column;",s.a,"{margin-top:30px;}@media (max-width: 1200px){",s.a,"{display:none;}}");var j=function({iconList:t}){const{width:e}=Object(p.a)();return Object(r.a)(f,null,Object(r.a)(m,{width:e>=1200?200:e>=768?150:120,height:e>=1200?200:e>=768?150:120,src:"https://avatars2.githubusercontent.com/u/24629040?s=460&u=0bb3411f25c0e1c5d25d753fc648739367cb7032&v=4",alt:"Profile Image"}),Object(r.a)(x,null,Object(r.a)(w,null),Object(r.a)(s.b,{list:t,size:30})))},O=a("KUDz");const v=[{href:"https://github.com/ji5485",type:"github"},{href:"https://www.instagram.com/hello_d0o/",type:"instagram"},{href:"https://www.facebook.com/people/주현도/100006799395407",type:"facebook"}],y=Object(o.a)("div",{target:"e1w98zhp2",label:"MainComponent"})("max-width:1200px;min-height:100vh;margin:0 auto;padding:60px 0;display:grid;align-items:center;@media (max-width: 1200px){padding:0 60px;grid-template-rows:80px minmax(400px, auto) 80px;}@media (max-width: 768px){padding:0 20px;}",O.a,"{display:none;height:100%;margin:0;padding:0;@media (max-width: 1200px){display:flex;width:100%;}}"),z=Object(o.a)("main",{target:"e1w98zhp1",label:"MainContentComponent"})("flex:1;display:flex;align-items:center;@media (max-width: 1200px){justify-content:space-between;",d,"{display:none;}}"),I=Object(o.a)("div",{target:"e1w98zhp0",label:"MainFooterComponent"})({name:"1bogl1v",styles:"height:100%;display:none;align-items:center;@media (max-width: 1200px){display:flex;}"});var k=function({}){return Object(r.a)(y,null,Object(r.a)(O.b,null),Object(r.a)(z,null,Object(r.a)(j,{iconList:v}),Object(r.a)(b,null)),Object(r.a)(I,null,Object(r.a)(s.b,{list:v,size:25})))};e.default=function({data:{site:{siteMetadata:{title:t,description:e,siteUrl:a}}}}){return Object(r.a)(i.a,{title:t,description:e,url:a},Object(r.a)(k,null))};const C="2724007671"},mvWA:function(t,e,a){"use strict";var n=a("q1tI");e.a=function(){const[t,e]=Object(n.useState)({width:void 0,height:void 0});return Object(n.useEffect)(()=>{function t(){e({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",t),t(),()=>window.removeEventListener("resize",t)},[]),t}},xn1H:function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));var n=a("DZdY"),i=a("q1tI"),o=a("pRDh"),l=a("j/sC"),c=a("qKvR");const r=Object(n.a)("div",{target:"ecx4drv0",label:"NavBarComponent"})("display:flex;font-weight:300;",l.a,"{cursor:pointer;font-size:15px;}",o.a,"+",l.a,",",o.a,"+",o.a,"{margin-left:20px;}");e.b=function({modeSwitch:t}){const[e,a]=Object(i.useState)("");Object(i.useEffect)(()=>{a(window.localStorage.getItem("blog-current-mode"))},[]);return Object(c.a)(r,null,Object(c.a)(o.b,{to:"/"},Object(c.a)(l.b,null,"Main")),Object(c.a)(o.b,{to:"/about"},Object(c.a)(l.b,null,"About")),Object(c.a)(o.b,{to:"/portfolio"},Object(c.a)(l.b,null,"Portfolio")),Object(c.a)(o.b,{to:"/blog/1"},Object(c.a)(l.b,null,"Blog")),t&&Object(c.a)(l.b,{onClick:()=>{const t="light"===e?"dark":"light";window.document.body.classList.remove(e),window.document.body.classList.add(t),window.localStorage.setItem("blog-current-mode",t),a(t)}},"light"===e?"Dark":"Light"," Mode"))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-2ce9bfb55bd44aeb171e.js.map