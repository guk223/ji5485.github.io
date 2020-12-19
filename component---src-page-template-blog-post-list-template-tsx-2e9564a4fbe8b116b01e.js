(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"ALD/":function(t,e,a){"use strict";var n=a("DZdY"),i=(a("q1tI"),a("j/sC")),o=a("qKvR");const l=Object(n.a)("div",{target:"e179tnbl4",label:"TitleComponent"})({name:"ykmiy0",styles:"width:100%;display:flex;justify-content:space-between;align-items:center;margin-bottom:100px;@media (max-width: 768px){margin-bottom:60px;}"}),r=Object(n.a)("div",{target:"e179tnbl3",label:"StyledLine"})({name:"1uzxyph",styles:"width:50%;height:1px;background:#1e1f21;@media (max-width: 768px){width:30%;}"}),c=Object(n.a)("div",{target:"e179tnbl2",label:"TextBox"})("text-align:",({align:t})=>t,";"),b=Object(n.a)(i.b,{target:"e179tnbl1",label:"MainTitle"})({name:"fjhjng",styles:"font-size:60px;font-weight:700;@media (max-width: 768px){font-size:2rem;}"}),s=Object(n.a)(i.b,{target:"e179tnbl0",label:"SubTitle"})({name:"n5qoys",styles:"font-size:25px;font-weight:300;@media (max-width: 768px){font-size:20px;}"}),p=function({title:t,subTitle:e,align:a}){return Object(o.a)(l,null,"right"===a&&Object(o.a)(r,null),Object(o.a)(c,{align:a},Object(o.a)(b,null,t),Object(o.a)(s,null,e)))};p.defaultProps={align:"left"},e.a=p},ReGg:function(t,e,a){"use strict";a.r(e),a.d(e,"blogCategoryQuery",(function(){return R}));a("q1tI");var n=a("oO+H"),i=a("ALD/"),o=a("DZdY"),l=a("pRDh"),r=a("c+yx"),c=a("qKvR");const b=Object(o.a)("div",{target:"ec3eiha0",label:"CategoryListComponent"})("display:flex;flex-wrap:wrap;margin:-5px -10px;margin-bottom:60px;",l.a,"{font-size:14px;font-weight:700;margin:5px 10px;&:hover{text-decoration:underline;}}@media (max-width: 768px){margin-bottom:40px;}");var s=function({categories:t}){return Object(c.a)(b,null,Object.keys(t).map(e=>{const a=`/blog/${Object(r.c)(e)}/1`,n=t[e];return Object(c.a)(l.b,{to:a,key:Object(r.b)()},"#",e,"(",n,")")}))},p=a("j/sC"),g=a("9eSz"),d=a.n(g);const m=Object(o.a)("div",{target:"eriwr696",label:"PostItemComponent"})({name:"x6tk6h",styles:"display:flex;justify-content:space-between;align-items:stretch;padding:20px 0;border-top:1px solid #1e1f21;border-bottom:1px solid #1e1f21;&+&{border-top:none;}body.dark &{border-color:#ffffff;}"}),u=Object(o.a)("div",{target:"eriwr695",label:"Content"})({name:"9guuu6",styles:"width:calc(100% - 200px);display:flex;flex-direction:column;@media (max-width: 768px){width:100%;}"}),x=Object(o.a)(l.a,{target:"eriwr694",label:"Title"})({name:"o2p5gq",styles:"font-size:23px;font-weight:400;margin-bottom:5px;&:hover{text-decoration:underline;}@media (min-width: 769px){overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}@media (max-width: 768px){font-size:20px;}"}),f=Object(o.a)("div",{target:"eriwr693",label:"Category"})("display:flex;flex-wrap:wrap;margin-bottom:3px;",l.a,"{font-size:14px;font-weight:400;opacity:0.75;margin-right:10px;@media (max-width: 768px){font-size:12px;}}",l.a,":hover{text-decoration:underline;}"),j=Object(o.a)(p.b,{target:"eriwr692",label:"Date"})({name:"4hd0ub",styles:"font-size:14px;font-weight:400;opacity:0.7;margin-bottom:10px"}),O=Object(o.a)(p.b,{target:"eriwr691",label:"Summary"})({name:"costbn",styles:"font-size:15px;font-weight:300;opacity:0.9;margin-top:auto;overflow:hidden;text-overflow:ellipsis;white-space:normal;word-wrap:break-word;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;@media (max-width: 768px){font-size:14px;}"}),h=Object(o.a)(d.a,{target:"eriwr690",label:"ThumbnailImage"})({name:"io4erf",styles:"@media (max-width: 768px){display:none!important;}"});var w=function({title:t,summary:e,date:a,thumbnail:{childImageSharp:{fixed:n}},categories:i,slug:o}){return Object(c.a)(m,null,Object(c.a)(u,null,Object(c.a)(x,{to:o},t),Object(c.a)(f,null,i.map(t=>Object(c.a)(l.b,{to:`/blog/${Object(r.c)(t)}/1`,key:Object(r.b)()},"#",t))),Object(c.a)(j,null,Object(r.a)(a)),Object(c.a)(O,null,e)),Object(c.a)(h,{fixed:n,alt:"Thumbnail Image"}))};function y(){return(y=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t}).apply(this,arguments)}const v=Object(o.a)("div",{target:"e1mycqiz0",label:"PostListComponent"})("");var z=function({list:t}){return Object(c.a)(v,null,t.map(({node:{fields:{slug:t},frontmatter:e}})=>Object(c.a)(w,y({slug:t},e,{key:Object(r.b)()}))))},k=a("Bapl");const C=Object(o.a)(l.a,{target:"edzbt9v0",label:"PaginationButtonComponent"})({name:"r1s9gt",styles:"width:25px;height:25px;border:1px solid #1e1f21;font-size:17px;font-weight:700;display:grid;place-items:center;color:#1e1f21;&+&{margin-left:10px;}&.active{background:#1e1f21;color:white;}"});var P=function({to:t,page:e}){return Object(c.a)(C,{to:t,activeClassName:"active"},e)};const q=Object(o.a)("div",{target:"e1uqo4dp1",label:"PaginationComponent"})({name:"5ubaji",styles:"display:flex;justify-content:center;align-items:center;margin-top:80px"}),D=Object(o.a)(l.a,{target:"e1uqo4dp0",label:"PageMoveIcon"})("cursor:pointer;pointer-events:",({active:t})=>t?"initial":"none",";padding:0 10px;",k.a,"{color:",({active:t})=>t?"initial":"rgba(0, 0, 0, 0.3)",";}");var L=function({totalPage:t,currentPage:e,category:a}){const n=Math.floor((e-1)/5)+1,i=1===n?null:5*(n-1),o=n===Math.floor((t-1)/5)+1?null:5*n+1,l=t=>`/blog${a?"/"+a:""}/${t}`;return Object(c.a)(q,null,Object(c.a)(D,{to:l(i),active:i?1:0},Object(c.a)(k.b,{type:"caretLeft",size:17})),[1,2,3,4,5].map(e=>{const a=5*(n-1)+e;return a<=t&&Object(c.a)(P,{to:l(a),page:a,key:Object(r.b)()})}),Object(c.a)(D,{to:l(o),active:o?1:0},Object(c.a)(k.b,{type:"caretRight",size:17})))},T=a("qNq4");var I=function({list:t,context:{totalPage:e,currentPage:a,categories:n,category:o}}){const l=o?o.substring(1,o.length-1):null,r=l?"#"+l:"";return Object(c.a)(T.a,null,Object(c.a)(i.a,{title:`Blog${r}.`,subTitle:"Development, Record"}),Object(c.a)(s,{categories:n}),Object(c.a)(z,{list:t}),e>1&&Object(c.a)(L,{totalPage:e,currentPage:a,category:l}))};e.default=function({data:t,pageContext:{selectedCategory:e,...a}}){const i=e?t.filtered:t.unfiltered;return Object(c.a)(n.a,{title:"Dev Log List",description:"개발자 Hyun이 지금까지 활동하면서 작성한 Dev Log 목록입니다."},Object(c.a)(I,{list:i.edges,context:a}))};const R="793217606"}}]);
//# sourceMappingURL=component---src-page-template-blog-post-list-template-tsx-2e9564a4fbe8b116b01e.js.map