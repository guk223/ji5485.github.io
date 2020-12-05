(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"ALD/":function(t,e,a){"use strict";var n=a("DZdY"),i=(a("q1tI"),a("j/sC")),o=a("qKvR");const r=Object(n.a)("div",{target:"e179tnbl4",label:"TitleComponent"})({name:"ykmiy0",styles:"width:100%;display:flex;justify-content:space-between;align-items:center;margin-bottom:100px;@media (max-width: 768px){margin-bottom:60px;}"}),l=Object(n.a)("div",{target:"e179tnbl3",label:"StyledLine"})({name:"1uzxyph",styles:"width:50%;height:1px;background:#1e1f21;@media (max-width: 768px){width:30%;}"}),c=Object(n.a)("div",{target:"e179tnbl2",label:"TextBox"})("text-align:",({align:t})=>t,";"),s=Object(n.a)(i.b,{target:"e179tnbl1",label:"MainTitle"})({name:"fjhjng",styles:"font-size:60px;font-weight:700;@media (max-width: 768px){font-size:2rem;}"}),b=Object(n.a)(i.b,{target:"e179tnbl0",label:"SubTitle"})({name:"n5qoys",styles:"font-size:25px;font-weight:300;@media (max-width: 768px){font-size:20px;}"}),p=function({title:t,subTitle:e,align:a}){return Object(o.a)(r,null,"right"===a&&Object(o.a)(l,null),Object(o.a)(c,{align:a},Object(o.a)(s,null,t),Object(o.a)(b,null,e)))};p.defaultProps={align:"left"},e.a=p},LqCj:function(t,e,a){"use strict";e.a=function(t){const e=t.split("-").reduce((t,e)=>(t.push(parseInt(e)),t),[]);return`${e[0]}년 ${e[1]}월 ${e[2]}일`}},ReGg:function(t,e,a){"use strict";a.r(e),a.d(e,"blogCategoryQuery",(function(){return $}));a("q1tI");var n=a("oO+H"),i=a("ALD/"),o=a("DZdY"),r=a("pRDh");var l=function(t){return t.split(/(?=[A-Z])/).reduce((t,e)=>(t.push(e.toLowerCase()),t),[]).join("-")},c=a("45fX"),s=a("qKvR");const b=Object(o.a)("div",{target:"ec3eiha0",label:"CategoryListComponent"})("display:flex;flex-wrap:wrap;margin:-5px -10px;margin-bottom:60px;",r.a,"{font-size:14px;font-weight:700;margin:5px 10px;&:hover{text-decoration:underline;}}@media (max-width: 768px){margin-bottom:40px;}");var p=function({categories:t}){return Object(s.a)(b,null,Object.keys(t).map(e=>{const a=`/blog/${l(e)}/1`,n=t[e];return Object(s.a)(r.b,{to:a,key:Object(c.a)()},"#",e,"(",n,")")}))},g=a("j/sC"),d=a("LqCj");const u=Object(o.a)("div",{target:"eriwr696",label:"PostItemComponent"})({name:"x6tk6h",styles:"display:flex;justify-content:space-between;align-items:stretch;padding:20px 0;border-top:1px solid #1e1f21;border-bottom:1px solid #1e1f21;&+&{border-top:none;}body.dark &{border-color:#ffffff;}"}),m=Object(o.a)("div",{target:"eriwr695",label:"Content"})({name:"9guuu6",styles:"width:calc(100% - 200px);display:flex;flex-direction:column;@media (max-width: 768px){width:100%;}"}),x=Object(o.a)(r.a,{target:"eriwr694",label:"Title"})({name:"1yhvj4r",styles:"font-size:25px;font-weight:400;margin-bottom:5px;&:hover{text-decoration:underline;}@media (max-width: 768px){font-size:20px;}"}),f=Object(o.a)("div",{target:"eriwr693",label:"Category"})("display:flex;flex-wrap:wrap;margin-bottom:3px;",r.a,"{font-size:14px;font-weight:400;opacity:0.75;margin-right:10px;@media (max-width: 768px){font-size:12px;}}",r.a,":hover{text-decoration:underline;}"),j=Object(o.a)(g.b,{target:"eriwr692",label:"Date"})({name:"4hd0ub",styles:"font-size:14px;font-weight:400;opacity:0.7;margin-bottom:10px"}),h=Object(o.a)(g.b,{target:"eriwr691",label:"Summary"})({name:"costbn",styles:"font-size:15px;font-weight:300;opacity:0.9;margin-top:auto;overflow:hidden;text-overflow:ellipsis;white-space:normal;word-wrap:break-word;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;@media (max-width: 768px){font-size:14px;}"}),O=Object(o.a)("img",{target:"eriwr690",label:"ThumbnailImage"})({name:"8weoym",styles:"width:180px;@media (max-width: 768px){display:none;}"});var w=function({title:t,summary:e,date:a,thumbnail:{childImageSharp:{resize:{src:n}}},categories:i,slug:o}){return Object(s.a)(u,null,Object(s.a)(m,null,Object(s.a)(x,{to:o},t),Object(s.a)(f,null,i.map(t=>Object(s.a)(r.b,{to:`/blog/${l(t)}/1`,key:Object(c.a)()},"#",t))),Object(s.a)(j,null,Object(d.a)(a)),Object(s.a)(h,null,e)),Object(s.a)(O,{src:n,alt:"Thumbnail Image"}))};function y(){return(y=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t}).apply(this,arguments)}const v=Object(o.a)("div",{target:"e1mycqiz0",label:"PostListComponent"})("");var z=function({list:t}){return Object(s.a)(v,null,t.map(({node:{fields:{slug:t},frontmatter:e}})=>Object(s.a)(w,y({slug:t},e,{key:Object(c.a)()}))))},C=a("Bapl");const k=Object(o.a)(r.a,{target:"edzbt9v0",label:"PaginationButtonComponent"})({name:"r1s9gt",styles:"width:25px;height:25px;border:1px solid #1e1f21;font-size:17px;font-weight:700;display:grid;place-items:center;color:#1e1f21;&+&{margin-left:10px;}&.active{background:#1e1f21;color:white;}"});var P=function({to:t,page:e}){return Object(s.a)(k,{to:t,activeClassName:"active"},e)};const q=Object(o.a)("div",{target:"e1uqo4dp1",label:"PaginationComponent"})({name:"5ubaji",styles:"display:flex;justify-content:center;align-items:center;margin-top:80px"}),L=Object(o.a)(r.a,{target:"e1uqo4dp0",label:"PageMoveIcon"})("cursor:pointer;pointer-events:",({active:t})=>t?"initial":"none",";padding:0 10px;",C.a,"{color:",({active:t})=>t?"initial":"rgba(0, 0, 0, 0.3)",";}");var D=function({totalPage:t,currentPage:e,category:a}){const n=Math.floor((e-1)/5)+1,i=1===n?null:5*(n-1),o=n===Math.floor((t-1)/5)+1?null:5*n+1,r=t=>`/blog${a?"/"+a:""}/${t}`;return Object(s.a)(q,null,Object(s.a)(L,{to:r(i),active:i?1:0},Object(s.a)(C.b,{type:"caretLeft",size:17})),[1,2,3,4,5].map(e=>{const a=5*(n-1)+e;return a<=t&&Object(s.a)(P,{to:r(a),page:a,key:Object(c.a)()})}),Object(s.a)(L,{to:r(o),active:o?1:0},Object(s.a)(C.b,{type:"caretRight",size:17})))},T=a("qNq4");var I=function({list:t,context:{totalPage:e,currentPage:a,categories:n,category:o}}){const r=o?o.substring(1,o.length-1):null,l=r?"#"+r:"";return Object(s.a)(T.a,null,Object(s.a)(i.a,{title:`Blog${l}.`,subTitle:"Development, Record"}),Object(s.a)(p,{categories:n}),Object(s.a)(z,{list:t}),e>1&&Object(s.a)(D,{totalPage:e,currentPage:a,category:r}))};e.default=function({data:t,pageContext:{selectedCategory:e,...a}}){const i=e?t.filtered:t.unfiltered;return Object(s.a)(n.a,{title:"Dev Log List",description:"개발자 Hyun이 지금까지 활동하면서 작성한 Dev Log 목록입니다."},Object(s.a)(I,{list:i.edges,context:a}))};const $="1220650374"}}]);
//# sourceMappingURL=component---src-page-template-blog-post-list-template-tsx-80b663f7db12d26e484d.js.map