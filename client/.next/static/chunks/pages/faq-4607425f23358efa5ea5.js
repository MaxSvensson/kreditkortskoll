(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[746],{7316:function(e){e.exports=function(e,i){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],i.indexOf(t)>=0||(o[t]=e[t]);return o}},6255:function(e,i,t){"use strict";var n=t(3038),o=t(319),a=t(5318);i.default=function(e){var i=e.src,t=e.sizes,o=e.unoptimized,a=void 0!==o&&o,u=e.priority,m=void 0!==u&&u,p=e.loading,g=e.className,v=e.quality,h=e.width,b=e.height,y=e.objectFit,k=e.objectPosition,z=e.loader,q=void 0===z?A:z,E=e.placeholder,S=void 0===E?"empty":E,C=e.blurDataURL,I=(0,r.default)(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","objectFit","objectPosition","loader","placeholder","blurDataURL"]),H=t?"responsive":"intrinsic",L=!1;"unsized"in I?(L=Boolean(I.unsized),delete I.unsized):"layout"in I&&(I.layout&&(H=I.layout),delete I.layout);_||(S="empty");0;var N=!m&&("lazy"===p||"undefined"===typeof p);i&&i.startsWith("data:")&&(a=!0,N=!1);var j,T,P,B=(0,f.useIntersection)({rootMargin:"200px",disabled:!N}),D=n(B,2),O=D[0],R=D[1],M=!N||R,W=x(h),F=x(b),V=x(v),U=W&&F&&W*F<5e3,Z="blur"===S&&!U,X=(0,c.default)({position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:y,objectPosition:k},Z?{backgroundSize:"cover",backgroundImage:'url("'.concat(C,'")')}:void 0);if("undefined"!==typeof W&&"undefined"!==typeof F&&"fill"!==H){var G=F/W,Q=isNaN(G)?"100%":"".concat(100*G,"%");"responsive"===H?(j={display:"block",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},T={display:"block",boxSizing:"border-box",paddingTop:Q}):"intrinsic"===H?(j={display:"inline-block",maxWidth:"100%",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},T={boxSizing:"border-box",display:"block",maxWidth:"100%"},P='<svg width="'.concat(W,'" height="').concat(F,'" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')):"fixed"===H&&(j={overflow:"hidden",boxSizing:"border-box",display:"inline-block",position:"relative",width:W,height:F})}else"undefined"===typeof W&&"undefined"===typeof F&&"fill"===H&&(j={display:"block",overflow:"hidden",position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",margin:0});var J={src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",srcSet:void 0,sizes:void 0};M&&(J=w({src:i,unoptimized:a,layout:H,width:W,quality:V,sizes:t,loader:q}));L&&(j=void 0,T=void 0,X=void 0);return d.default.createElement("div",{style:j},T?d.default.createElement("div",{style:T},P?d.default.createElement("img",{style:{maxWidth:"100%",display:"block",margin:0,border:"none",padding:0},alt:"","aria-hidden":!0,role:"presentation",src:"data:image/svg+xml;base64,".concat((0,s.toBase64)(P))}):null):null,!M&&d.default.createElement("noscript",null,d.default.createElement("img",Object.assign({},I,w({src:i,unoptimized:a,layout:H,width:W,quality:V,sizes:t,loader:q}),{src:i,decoding:"async",sizes:t,style:X,className:g}))),d.default.createElement("img",Object.assign({},I,J,{decoding:"async",className:g,ref:function(e){O(e),function(e,i){"blur"===i&&e&&(e.complete?e.style.backgroundImage="none":e.onload=function(){e.style.backgroundImage="none"})}(e,S)},style:X})),m?d.default.createElement(l.default,null,d.default.createElement("link",{key:"__nimg-"+J.src+J.srcSet+J.sizes,rel:"preload",as:"image",href:J.srcSet?void 0:J.src,imagesrcset:J.srcSet,imagesizes:J.sizes})):null)};var r=a(t(7316)),c=a(t(7154)),d=a(t(7294)),l=a(t(7947)),s=t(7239),u=t(5655),f=t(5749);var m=new Map([["imgix",function(e){var i=e.root,t=e.src,n=e.width,o=e.quality,a=["auto=format","fit=max","w="+n],r="";o&&a.push("q="+o);a.length&&(r="?"+a.join("&"));return"".concat(i).concat(k(t)).concat(r)}],["cloudinary",function(e){var i=e.root,t=e.src,n=e.width,o=e.quality,a=["f_auto","c_limit","w_"+n,"q_"+(o||"auto")].join(",")+"/";return"".concat(i).concat(a).concat(k(t))}],["akamai",function(e){var i=e.root,t=e.src,n=e.width;return"".concat(i).concat(k(t),"?imwidth=").concat(n)}],["default",function(e){var i=e.root,t=e.src,n=e.width,o=e.quality;0;return"".concat(i,"?url=").concat(encodeURIComponent(t),"&w=").concat(n,"&q=").concat(o||75)}]]),p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",enableBlurryPlaceholder:!1}||u.imageConfigDefault,g=p.deviceSizes,v=p.imageSizes,h=p.loader,b=p.path,_=(p.domains,p.enableBlurryPlaceholder),y=[].concat(o(g),o(v));function w(e){var i=e.src,t=e.unoptimized,n=e.layout,a=e.width,r=e.quality,c=e.sizes,d=e.loader;if(t)return{src:i,srcSet:void 0,sizes:void 0};var l=function(e,i,t){if(t&&("fill"===i||"responsive"===i)){for(var n,a=/(^|\s)(1?\d?\d)vw/g,r=[];n=a.exec(t);n)r.push(parseInt(n[2]));if(r.length){var c=.01*Math.min.apply(Math,r);return{widths:y.filter((function(e){return e>=g[0]*c})),kind:"w"}}return{widths:y,kind:"w"}}return"number"!==typeof e||"fill"===i||"responsive"===i?{widths:g,kind:"w"}:{widths:o(new Set([e,2*e].map((function(e){return y.find((function(i){return i>=e}))||y[y.length-1]})))),kind:"x"}}(a,n,c),s=l.widths,u=l.kind,f=s.length-1;return{sizes:c||"w"!==u?c:"100vw",srcSet:s.map((function(e,t){return"".concat(d({src:i,quality:r,width:e})," ").concat("w"===u?e:t+1).concat(u)})).join(", "),src:d({src:i,quality:r,width:s[f]})}}function x(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function A(e){var i=m.get(h);if(i)return i((0,c.default)({root:b},e));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(u.VALID_LOADERS.join(", "),". Received: ").concat(h))}function k(e){return"/"===e[0]?e.slice(1):e}g.sort((function(e,i){return e-i})),y.sort((function(e,i){return e-i}))},7239:function(e,i){"use strict";i.__esModule=!0,i.toBase64=function(e){return window.btoa(e)}},5550:function(e,i,t){"use strict";t.d(i,{Z:function(){return f}});var n=t(7294),o=t(7862),a=t.n(o),r=t(8032),c=t(6475),d=t.n(c),l=n.createElement,s=function(){return l("div",{id:d().TextHeader},l("div",{id:d().HeadingTitle},l("h1",null,"Alla kreditkort")))},u=n.createElement,f=function(){return u("div",{id:a().Header},u(r.Z,null,u(s,null)))}},8032:function(e,i,t){"use strict";var n=t(7294),o=t(2586),a=t.n(o),r=n.createElement;i.Z=function(e){return r("div",{id:a().Container},e.children)}},2745:function(e,i,t){"use strict";t.r(i),t.d(i,{default:function(){return v}});var n=t(7294),o=t(5550),a=t(2553),r=t(3601),c=t.n(r),d=n.createElement,l=function(e){var i=e.id,t=e.onClick,n=e.open;return d("div",{onClick:function(){return t(i)},className:c().AccordionItem,id:n?c().open:c().close},d("a",{className:c().AccordionLink},"How often do you go to the beach? ",n,d("span",{id:c().openicon},d("i",{className:"fas fa-plus"})),d("span",{id:c().removeicon},d("i",{className:"fas fa-minus",id:c().remove}))),d("div",{className:c().answer},d("p",null,"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium amet consequuntur, suscipit ratione distinctio laborum eaque recusandae fugit dolores blanditiis itaque obcaecati nulla repellat neque impedit, sit saepe odit aperiam.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium amet consequuntur, suscipit ratione distinctio laborum eaque recusandae fugit dolores blanditiis itaque obcaecati nulla repellat neque impedit, sit saepe odit aperiam.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium amet consequuntur, suscipit ratione distinctio laborum eaque recusandae fugit dolores blanditiis itaque obcaecati nulla repellat neque impedit, sit saepe odit aperiam.")))},s=t(1909),u=t.n(s),f=t(5675),m=n.createElement,p=function(){var e=(0,n.useState)(),i=e[0],t=e[1],o=function(e){if(e===i)return t(0);t(e)};return m("div",{id:u().Content},m(a.W2,null,m("div",{id:u().list},[2,3,5,423,3542,42,5325,54,5312,431].map((function(e){return m(l,{onClick:o,id:e,open:e===i})})))),m("div",{id:u().imgContainer},m(f.default,{width:500,height:700,src:"/images/faq.svg",id:u().Img})))},g=n.createElement,v=function(){return g("div",null,g(o.Z,null),g(p,null))}},4160:function(e,i,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/faq",function(){return t(2745)}])},3601:function(e){e.exports={AccordionItem:"Accordion_AccordionItem__2W-qI",AccordionLink:"Accordion_AccordionLink__2wMCu",removeicon:"Accordion_removeicon__2MC5X",open:"Accordion_open__1zIQn",openicon:"Accordion_openicon__xLYyp",answer:"Accordion_answer__2BlSV"}},1909:function(e){e.exports={Content:"Content_Content__2BEkA",imgContainer:"Content_imgContainer__1qOmF"}},7862:function(e){e.exports={Header:"Header_Header__-VxiE"}},6475:function(e){e.exports={TextHeader:"TextHeader_TextHeader__11Jlt",HeadingTitle:"TextHeader_HeadingTitle__H-7Gy",moveInRight:"TextHeader_moveInRight__H9ylq",moveInLeft:"TextHeader_moveInLeft__1koC1"}},2586:function(e){e.exports={Container:"Container_Container__2FiPT"}},5655:function(e,i){"use strict";i.__esModule=!0,i.imageConfigDefault=i.VALID_LOADERS=void 0;i.VALID_LOADERS=["default","imgix","cloudinary","akamai"];i.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[],enableBlurryPlaceholder:!1}},5675:function(e,i,t){e.exports=t(6255)}},function(e){e.O(0,[774,553,888,179],(function(){return i=4160,e(e.s=i);var i}));var i=e.O();_N_E=i}]);