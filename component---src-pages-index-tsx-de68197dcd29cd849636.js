(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{JgPm:function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));var i=a("DZdY"),n=(a("q1tI"),a("Bapl")),o=a("c+yx"),l=a("qKvR");const r=Object(i.a)("div",{target:"eq12ikv0",label:"IconListComponent"})({name:"rfw8nr",styles:"display:flex;a+a{margin-left:20px;@media (max-width: 768px){margin-left:15px;}}"});e.b=function({list:t,size:e}){return Object(l.a)(r,null,t&&t.map(({href:t,type:a})=>Object(l.a)("a",{href:t,key:Object(o.b)(),rel:"noreferrer",target:"_blank","aria-label":a},Object(l.a)(n.b,{type:a,size:e}))))}},KUDz:function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));var i=a("DZdY"),n=(a("q1tI"),a("j/sC")),o=a("xn1H"),l=a("qKvR");const r=Object(i.a)("header",{target:"e1wq4n21",label:"HeaderComponent"})("width:768px;height:80px;margin:0 auto;display:flex;justify-content:space-between;align-items:center;@media (max-width: 768px){padding:0 20px;width:100%;",o.a,"{width:100%;justify-content:space-between;}}"),c=Object(i.a)(n.b,{target:"e1wq4n20",label:"Title"})({name:"1no9hen",styles:"font-size:17px;font-weight:700;@media (max-width: 768px){display:none;}"});e.b=function({}){return Object(l.a)(r,null,Object(l.a)(c,null,"Too Early To Stop"),Object(l.a)(o.b,{modeSwitch:!0}))}},QeBL:function(t,e,a){"use strict";a.r(e),a.d(e,"metadataQuery",(function(){return I}));var i=a("q1tI"),n=a("oO+H"),o=a("DZdY"),l=a("Bapl"),r=a("pRDh"),c=a("j/sC"),d=a("qKvR");const p=Object(o.a)("div",{target:"e1q4ez7y1",label:"SideMenuComponent"})("display:flex;width:20px;font-weight:300;margin-left:auto;flex-direction:row;justify-content:center;align-items:center;writing-mode:vertical-rl;",c.a,"{cursor:pointer;}",r.a,"+",c.a,",",r.a,"+",r.a,"{margin-top:30px;}"),b=Object(o.a)("div",{target:"e1q4ez7y0",label:"SwitchText"})("display:flex;align-items:center;margin-top:30px;font-size:16px;cursor:pointer;padding:5px 2px;border-radius:3px;background:var(--color);color:var(--background);",l.a,"{margin-bottom:3px;padding-left:0.5px;transform:rotate(90deg);}");var s=function({}){const[t,e]=Object(i.useState)();Object(i.useEffect)(()=>{e(window.localStorage.getItem("blog-current-mode"))},[]);return Object(d.a)(p,null,Object(d.a)(r.b,{to:"/"},Object(d.a)(c.b,null,"Main")),Object(d.a)(r.b,{to:"/about/"},Object(d.a)(c.b,null,"About")),Object(d.a)(r.b,{to:"/portfolio/"},Object(d.a)(c.b,null,"Portfolio")),Object(d.a)(r.b,{to:"/blog/1"},Object(d.a)(c.b,null,"Blog")),Object(d.a)(b,{onClick:()=>{const a="light"===t?"dark":"light";t&&(window.document.body.classList.remove(t),window.document.body.classList.add(a),window.localStorage.setItem("blog-current-mode",a),e(a))}},Object(d.a)(l.b,{type:"light"===t?"moon":"sun",size:11})," ","light"===t?"Dark":"Light")," ")},m=a("JgPm");const g=Object(o.a)("h1",{target:"e1s2vm451",label:"MainText"})({name:"1si0tzl",styles:"font-size:50px;font-weight:700;margin-bottom:10px;@media (min-width: 768px) and (max-width: 1200px){font-size:35px;}@media (max-width: 768px){font-size:25px;}"}),x=Object(o.a)(c.b,{target:"e1s2vm450",label:"SubText"})({name:"1lxwkx3",styles:"font-size:25px;font-weight:300;@media (min-width: 769px) and (max-width: 1200px){font-size:20px;}@media (max-width: 768px){font-size:15px;}"});var u=function({}){return Object(d.a)("div",null,Object(d.a)(g,null,"Hello, I am Ju Hyeon Do"),Object(d.a)(x,null,"I am a Junior Full-Stack Developer,"),Object(d.a)(x,null,"hoping to become Professional Developer"))},h=a("9eSz"),f=a.n(h);const w=Object(o.a)("div",{target:"e1jwsd5z2",label:"IntroductionComponent"})({name:"1p90hqi",styles:"display:flex;align-items:center;@media (max-width: 1200px){flex-direction:column;align-items:flex-start;}"}),j=Object(o.a)(f.a,{target:"e1jwsd5z1",label:"ProfileImage"})({name:"1vgkn3l",styles:"border-radius:50%;margin-right:30px;@media (max-width: 1200px) and (min-width: 769px){margin-right:0;margin-bottom:20px;width:150px!important;height:150px!important;}@media (max-width: 768px){margin-right:0;margin-bottom:20px;width:120px!important;height:120px!important;}"}),O=Object(o.a)("div",{target:"e1jwsd5z0",label:"RightIntroduction"})("display:flex;flex-direction:column;",m.a,"{margin-top:30px;}@media (max-width: 1200px){",m.a,"{display:none;}}");var y=function({image:t,iconList:e}){return Object(d.a)(w,null,Object(d.a)(j,{fixed:t}),Object(d.a)(O,null,Object(d.a)(u,null),Object(d.a)(m.b,{list:e,size:30})))},v=a("KUDz");const z=[{href:"https://github.com/ji5485",type:"github"},{href:"https://www.instagram.com/hello_d0o/",type:"instagram"},{href:"https://www.facebook.com/people/주현도/100006799395407",type:"facebook"}],k=Object(o.a)("div",{target:"e1w98zhp2",label:"MainComponent"})("max-width:1200px;min-height:100vh;margin:0 auto;padding:60px 0;display:grid;align-items:center;@media (max-width: 1200px){padding:0 60px;grid-template-rows:80px minmax(400px, auto) 80px;}@media (max-width: 768px){padding:0 20px;}",v.a,"{display:none;height:100%;margin:0;padding:0;@media (max-width: 1200px){display:flex;width:100%;}}"),S=Object(o.a)("main",{target:"e1w98zhp1",label:"MainContentComponent"})("flex:1;display:flex;align-items:center;@media (max-width: 1200px){justify-content:space-between;",p,"{display:none;}}"),q=Object(o.a)("div",{target:"e1w98zhp0",label:"MainFooterComponent"})({name:"1bogl1v",styles:"height:100%;display:none;align-items:center;@media (max-width: 1200px){display:flex;}"});var C=function({image:t}){return Object(d.a)(k,null,Object(d.a)(v.b,null),Object(d.a)(S,null,Object(d.a)(y,{image:t,iconList:z}),Object(d.a)(s,null)),Object(d.a)(q,null,Object(d.a)(m.b,{list:z,size:20})))};e.default=function({data:{site:{siteMetadata:{title:t,description:e,siteUrl:a}},imageSharp:{fixed:i}}}){return Object(d.a)(n.a,{title:t,description:e,url:a},Object(d.a)(C,{image:i}))};const I="3332259037"},xn1H:function(t,e,a){"use strict";a.d(e,"a",(function(){return d}));var i=a("DZdY"),n=a("q1tI"),o=a("Bapl"),l=a("pRDh"),r=a("j/sC"),c=a("qKvR");const d=Object(i.a)("div",{target:"ecx4drv1",label:"NavBarComponent"})("display:flex;align-items:center;font-weight:300;",r.a,"{cursor:pointer;font-size:15px;}",l.a,"+",r.a,",",l.a,"+",l.a,"{margin-left:20px;}@media (max-width: 768px){",r.a,"{font-size:13px;}}"),p=Object(i.a)("div",{target:"ecx4drv0",label:"SwitchText"})("display:flex;align-items:center;margin-left:20px;font-size:15px;cursor:pointer;padding:2px 5px;border-radius:3px;background:var(--color);color:var(--background);",o.a,"{margin-right:3px;padding-bottom:0.5px;}@media (max-width: 768px){font-size:13px;",o.a,"{padding-bottom:0;}}");e.b=function({modeSwitch:t}){const[e,a]=Object(n.useState)();Object(n.useEffect)(()=>{a(window.localStorage.getItem("blog-current-mode"))},[]);return Object(c.a)(d,null,Object(c.a)(l.b,{to:"/"},Object(c.a)(r.b,null,"Main")),Object(c.a)(l.b,{to:"/about/"},Object(c.a)(r.b,null,"About")),Object(c.a)(l.b,{to:"/portfolio/"},Object(c.a)(r.b,null,"Portfolio")),Object(c.a)(l.b,{to:"/blog/1"},Object(c.a)(r.b,null,"Blog")),t&&Object(c.a)(p,{onClick:()=>{const t="light"===e?"dark":"light";e&&(window.document.body.classList.remove(e),window.document.body.classList.add(t),window.localStorage.setItem("blog-current-mode",t),a(t))}},Object(c.a)(o.b,{type:"light"===e?"moon":"sun",size:11})," ","light"===e?"Dark":"Light"))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-de68197dcd29cd849636.js.map