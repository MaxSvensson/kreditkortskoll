(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[746],{7316:function(e){e.exports=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}},6255:function(e,t,n){"use strict";var i=n(3038),o=n(319),r=n(5318);t.default=function(e){var t=e.src,n=e.sizes,o=e.unoptimized,r=void 0!==o&&o,u=e.priority,m=void 0!==u&&u,g=e.loading,h=e.className,p=e.quality,v=e.width,w=e.height,_=e.objectFit,x=e.objectPosition,z=e.loader,E=void 0===z?k:z,H=e.placeholder,S=void 0===H?"empty":H,C=e.blurDataURL,I=(0,a.default)(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","objectFit","objectPosition","loader","placeholder","blurDataURL"]),q=n?"responsive":"intrinsic",j=!1;"unsized"in I?(j=Boolean(I.unsized),delete I.unsized):"layout"in I&&(I.layout&&(q=I.layout),delete I.layout);b||(S="empty");0;var N=!m&&("lazy"===g||"undefined"===typeof g);t&&t.startsWith("data:")&&(r=!0,N=!1);var L,T,D,B=(0,f.useIntersection)({rootMargin:"200px",disabled:!N}),O=i(B,2),R=O[0],P=O[1],M=!N||P,W=A(v),V=A(w),F=A(p),U=W&&V&&W*V<5e3,Z="blur"===S&&!U,X=(0,d.default)({position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:_,objectPosition:x},Z?{backgroundSize:"cover",backgroundImage:'url("'.concat(C,'")')}:void 0);if("undefined"!==typeof W&&"undefined"!==typeof V&&"fill"!==q){var G=V/W,J=isNaN(G)?"100%":"".concat(100*G,"%");"responsive"===q?(L={display:"block",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},T={display:"block",boxSizing:"border-box",paddingTop:J}):"intrinsic"===q?(L={display:"inline-block",maxWidth:"100%",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},T={boxSizing:"border-box",display:"block",maxWidth:"100%"},D='<svg width="'.concat(W,'" height="').concat(V,'" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')):"fixed"===q&&(L={overflow:"hidden",boxSizing:"border-box",display:"inline-block",position:"relative",width:W,height:V})}else"undefined"===typeof W&&"undefined"===typeof V&&"fill"===q&&(L={display:"block",overflow:"hidden",position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",margin:0});var Q={src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",srcSet:void 0,sizes:void 0};M&&(Q=y({src:t,unoptimized:r,layout:q,width:W,quality:F,sizes:n,loader:E}));j&&(L=void 0,T=void 0,X=void 0);return c.default.createElement("div",{style:L},T?c.default.createElement("div",{style:T},D?c.default.createElement("img",{style:{maxWidth:"100%",display:"block",margin:0,border:"none",padding:0},alt:"","aria-hidden":!0,role:"presentation",src:"data:image/svg+xml;base64,".concat((0,s.toBase64)(D))}):null):null,!M&&c.default.createElement("noscript",null,c.default.createElement("img",Object.assign({},I,y({src:t,unoptimized:r,layout:q,width:W,quality:F,sizes:n,loader:E}),{src:t,decoding:"async",sizes:n,style:X,className:h}))),c.default.createElement("img",Object.assign({},I,Q,{decoding:"async",className:h,ref:function(e){R(e),function(e,t){"blur"===t&&e&&(e.complete?e.style.backgroundImage="none":e.onload=function(){e.style.backgroundImage="none"})}(e,S)},style:X})),m?c.default.createElement(l.default,null,c.default.createElement("link",{key:"__nimg-"+Q.src+Q.srcSet+Q.sizes,rel:"preload",as:"image",href:Q.srcSet?void 0:Q.src,imagesrcset:Q.srcSet,imagesizes:Q.sizes})):null)};var a=r(n(7316)),d=r(n(7154)),c=r(n(7294)),l=r(n(7947)),s=n(7239),u=n(5655),f=n(5749);var m=new Map([["imgix",function(e){var t=e.root,n=e.src,i=e.width,o=e.quality,r=["auto=format","fit=max","w="+i],a="";o&&r.push("q="+o);r.length&&(a="?"+r.join("&"));return"".concat(t).concat(x(n)).concat(a)}],["cloudinary",function(e){var t=e.root,n=e.src,i=e.width,o=e.quality,r=["f_auto","c_limit","w_"+i,"q_"+(o||"auto")].join(",")+"/";return"".concat(t).concat(r).concat(x(n))}],["akamai",function(e){var t=e.root,n=e.src,i=e.width;return"".concat(t).concat(x(n),"?imwidth=").concat(i)}],["default",function(e){var t=e.root,n=e.src,i=e.width,o=e.quality;0;return"".concat(t,"?url=").concat(encodeURIComponent(n),"&w=").concat(i,"&q=").concat(o||75)}]]),g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",enableBlurryPlaceholder:!1}||u.imageConfigDefault,h=g.deviceSizes,p=g.imageSizes,v=g.loader,w=g.path,b=(g.domains,g.enableBlurryPlaceholder),_=[].concat(o(h),o(p));function y(e){var t=e.src,n=e.unoptimized,i=e.layout,r=e.width,a=e.quality,d=e.sizes,c=e.loader;if(n)return{src:t,srcSet:void 0,sizes:void 0};var l=function(e,t,n){if(n&&("fill"===t||"responsive"===t)){for(var i,r=/(^|\s)(1?\d?\d)vw/g,a=[];i=r.exec(n);i)a.push(parseInt(i[2]));if(a.length){var d=.01*Math.min.apply(Math,a);return{widths:_.filter((function(e){return e>=h[0]*d})),kind:"w"}}return{widths:_,kind:"w"}}return"number"!==typeof e||"fill"===t||"responsive"===t?{widths:h,kind:"w"}:{widths:o(new Set([e,2*e].map((function(e){return _.find((function(t){return t>=e}))||_[_.length-1]})))),kind:"x"}}(r,i,d),s=l.widths,u=l.kind,f=s.length-1;return{sizes:d||"w"!==u?d:"100vw",srcSet:s.map((function(e,n){return"".concat(c({src:t,quality:a,width:e})," ").concat("w"===u?e:n+1).concat(u)})).join(", "),src:c({src:t,quality:a,width:s[f]})}}function A(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function k(e){var t=m.get(v);if(t)return t((0,d.default)({root:w},e));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(u.VALID_LOADERS.join(", "),". Received: ").concat(v))}function x(e){return"/"===e[0]?e.slice(1):e}h.sort((function(e,t){return e-t})),_.sort((function(e,t){return e-t}))},7239:function(e,t){"use strict";t.__esModule=!0,t.toBase64=function(e){return window.btoa(e)}},5550:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var i=n(7294),o=n(7862),r=n.n(o),a=n(8032),d=n(6475),c=n.n(d),l=i.createElement,s=function(){return l("div",{id:c().TextHeader},l("div",{id:c().HeadingTitle},l("h1",null,"Alla kreditkort")))},u=i.createElement,f=function(){return u("div",{id:r().Header},u(a.Z,null,u(s,null)))}},8032:function(e,t,n){"use strict";var i=n(7294),o=n(2586),r=n.n(o),a=i.createElement;t.Z=function(e){return a("div",{id:r().Container},e.children)}},2745:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var i=n(7294),o=n(5550),r=n(2553),a=n(3601),d=n.n(a),c=i.createElement,l=function(e){var t=e.faq,n=e.onClick,i=e.open;return c("div",{onClick:function(){return n(t.id)},className:d().AccordionItem,id:i?d().open:d().close},c("a",{className:d().AccordionLink},t.title,c("span",{id:d().openicon},c("i",{className:"fas fa-plus"})),c("span",{id:d().removeicon},c("i",{className:"fas fa-minus",id:d().remove}))),c("div",{className:d().answer},c("p",null,t.answer)))},s=n(1909),u=n.n(s),f=n(5675),m=i.createElement,g=function(){var e=(0,i.useState)(),t=e[0],n=e[1],o=function(e){if(e===t)return n(0);n(e)};return m("div",{id:u().Content},m(r.W2,null,m("div",{id:u().list},[{id:1,title:"Vilka f\xf6rm\xe5ner och bonusar ger ett kreditkort?",answer:"Alla kort erbjuder olika f\xf6rm\xe5ner och bonusar beroende p\xe5 utgivaren.\n\n    Det varierar mellan extra f\xf6rs\xe4kringar, bonuspo\xe4ng, rabbatter och cashback. Vissa kort kan till och med ge dig b\xe5de bonuspo\xe4ng och flera kostnadsfria extraf\xf6rs\xe4kringar.\n    \n    Anv\xe4nd tj\xe4nsten J\xe4mf\xf6r Kreditkort f\xf6r att se alla olika kort."},{id:2,title:"How often do you go to the beach",answer:"Answer"},{id:3,title:"How often do you go to the beach",answer:"Answer"},{id:4,title:"How often do you go to the beach",answer:"Answer"},{id:5,title:"How often do you go to the beach",answer:"Answer"},{id:6,title:"How often do you go to the beach",answer:"Answer"},{id:7,title:"How often do you go to the beach",answer:"Answer"},{id:8,title:"How often do you go to the beach",answer:"Answer"},{id:9,title:"How often do you go to the beach",answer:"Answer"},{id:10,title:"How often do you go to the beach",answer:"Answer"}].map((function(e){return m(l,{onClick:o,faq:e,open:e.id===t})})))),m("div",{id:u().imgContainer},m(f.default,{width:500,height:700,src:"/images/faq.svg",id:u().Img})))},h=i.createElement,p=function(){return h("div",null,h(o.Z,null),h(g,null))}},4160:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/faq",function(){return n(2745)}])},3601:function(e){e.exports={AccordionItem:"Accordion_AccordionItem__2W-qI",AccordionLink:"Accordion_AccordionLink__2wMCu",removeicon:"Accordion_removeicon__2MC5X",open:"Accordion_open__1zIQn",openicon:"Accordion_openicon__xLYyp",answer:"Accordion_answer__2BlSV"}},1909:function(e){e.exports={Content:"Content_Content__2BEkA",imgContainer:"Content_imgContainer__1qOmF"}},7862:function(e){e.exports={Header:"Header_Header__-VxiE"}},6475:function(e){e.exports={TextHeader:"TextHeader_TextHeader__11Jlt",HeadingTitle:"TextHeader_HeadingTitle__H-7Gy",moveInRight:"TextHeader_moveInRight__H9ylq",moveInLeft:"TextHeader_moveInLeft__1koC1"}},2586:function(e){e.exports={Container:"Container_Container__2FiPT"}},5655:function(e,t){"use strict";t.__esModule=!0,t.imageConfigDefault=t.VALID_LOADERS=void 0;t.VALID_LOADERS=["default","imgix","cloudinary","akamai"];t.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[],enableBlurryPlaceholder:!1}},5675:function(e,t,n){e.exports=n(6255)}},function(e){e.O(0,[774,553,888,179],(function(){return t=4160,e(e.s=t);var t}));var t=e.O();_N_E=t}]);