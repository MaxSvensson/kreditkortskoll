(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{676:function(e,t,a){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}a.d(t,{Z:function(){return r}})},2961:function(e,t,a){"use strict";a.d(t,{Z:function(){return n}});var r=a(676);function n(e,t){if(e){if("string"===typeof e)return(0,r.Z)(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?(0,r.Z)(e,t):void 0}}},4208:function(e,t,a){"use strict";a.d(t,{Z:function(){return x}});var r=a(7294),n=a(4554),s=a.n(n),i=a(2680),c=a.n(i),l=r.createElement,o=function(e){var t,a=e.rating,r=e.className;switch(parseInt(a)){case 1:t=l("div",null,l("span",{className:c().light},l("i",{className:"fas fa-star"})),l("span",{className:c().dark},l("i",{className:"far fa-star"})),l("span",{className:c().dark},l("i",{className:"far fa-star"})),l("span",{className:c().dark},l("i",{className:"far fa-star"})),l("span",{className:c().dark},l("i",{className:"far fa-star"})));break;case 2:t=l("div",null,l("span",{className:c().light},l("i",{className:"fas fa-star"})),l("span",{className:c().light},l("i",{className:"fas fa-star"})),l("span",{className:c().dark},l("i",{className:"far fa-star"})),l("span",{className:c().dark},l("i",{className:"far fa-star"})),l("span",{className:c().dark},l("i",{className:"far fa-star"})));break;case 3:t=l("div",null,l("span",{className:c().light},l("i",{className:"fas fa-star"})),l("span",{className:c().light},l("i",{className:"fas fa-star"})),l("span",{className:c().light},l("i",{className:"fas fa-star"})),l("span",{className:c().dark},l("i",{className:"far fa-star"})),l("span",{className:c().dark},l("i",{className:"far fa-star"})));break;case 4:t=l("div",null,l("span",{className:c().light},l("i",{className:"fas fa-star"})),l("span",{className:c().light},l("i",{className:"fas fa-star"})),l("span",{className:c().light},l("i",{className:"fas fa-star"})),l("span",{className:c().light},l("i",{className:"fas fa-star"})),l("span",{className:c().dark},l("i",{className:"far fa-star"})));break;case 5:t=l("div",null,l("span",{className:c().light},l("i",{className:"fas fa-star"})),l("span",{className:c().light},l("i",{className:"fas fa-star"})),l("span",{className:c().light},l("i",{className:"fas fa-star"})),l("span",{className:c().light},l("i",{className:"fas fa-star"})),l("span",{className:c().light},l("i",{className:"fas fa-star"})));break;default:t=l("div",null,l("span",{className:c().dark},l("i",{className:"far fa-star"})),l("span",{className:c().dark},l("i",{className:"far fa-star"})),l("span",{className:c().dark},l("i",{className:"far fa-star"})),l("span",{className:c().dark},l("i",{className:"far fa-star"})),l("span",{className:c().dark},l("i",{className:"far fa-star"})))}return l("div",{className:r},t)},u=a(971),d=(a(1890),a(9209)),m=a.n(d),f=a(1664),p=r.createElement,_=function(e){return p(f.default,{href:e.href?e.href:"#"},p("a",{id:m().ButtonOrange,onClick:e.onClick,className:e.className},e.text))},N=a(6250),v=r.createElement,h=function(e){var t=e.card,a=(0,r.useContext)(N.s),n=a[0],i=a[1],c=function(e){return!!n.compareIds.find((function(t){return t._id===e}))};return v(r.Fragment,null,v("div",{className:s().card},v("div",{className:s().content},v("div",null,v("h4",{className:s().Ismobile},t.properties.name),v("span",{className:s().Ismobile},v(o,{className:s().rating,rating:t.properties.rating})),v("img",{alt:"kreditkort ".concat(t.properties.name),src:t.properties.img})),v("div",null,v("h4",{className:s().IsComputer},t.properties.name),v("span",{className:s().IsComputer},v(o,{rating:t.properties.rating})),v("div",{className:s().properties},v("div",null,v("ul",null,t.properties.properties.map((function(e){return"GOOD"===e.type?v("div",{className:s().propertie},v("span",{className:s().good},v("i",{className:"fas fa-check-circle"})),v("li",{key:e.propertie},e.propertie)):v("div",{className:s().propertie},v("span",{className:s().bad},v("i",{className:"fas fa-times-circle"})),v("li",{key:e.propertie},e.propertie))})))))),v("div",{className:s().specific},v("ul",null,t.properties.specifics.map((function(e){var t=e.text.split(": ");return v(r.Fragment,{key:e.text},v("li",null,v("span",{style:{fontWeight:"bold"}},t[0],":")," ",v("span",null,t[1])))}))))),v("div",{className:s().btnBackground},v("div",{className:s().buttons},v(_,{text:"Ans\xf6k nu!",href:"/Redirect?card=".concat(t.properties._id),className:s()["ans\xf6kButton"]}),v(_,{text:"Mer information",href:"/kort/".concat(t.properties._id.replace(/(\s)/g,"-")),className:s()["ans\xf6kButton"]}))),v(u.ZP,{content:c(t.properties._id)?"Ta bort kreditkort ur j\xe4mf\xf6relse":"L\xe4gg till kreditkort i j\xe4mf\xf6relse"},v("div",{onClick:function(){return c(t.properties._id)?function(e){var t=Object.assign({},n),a=t.compareIds.findIndex((function(t){return t._id===e}));a<0||(t.compareIds.splice(a,1),i(t))}(t.properties._id):function(e){var t=Object.assign({},n);t.compareIds.push(e),i(t)}(t.properties)},className:s().toCompare},c(t.properties._id)?v("i",{className:"far fa-times-circle"}):v("i",{className:"fas fa-file-import"})))))},g=a(676);var k=a(2961);function b(e){return function(e){if(Array.isArray(e))return(0,g.Z)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||(0,k.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var C=function(e){var t=r.createContext(null);return{Provider:function(a){var n=e(a.initialState);return r.createElement(t.Provider,{value:n},a.children)},useContainer:function(){var e=r.useContext(t);if(null===e)throw new Error("Component must be wrapped with <Container.Provider>");return e}}}((function(){var e=(0,r.useState)([]),t=e[0],a=e[1];return{compareIds:t,addToCompare:function(e){var r=b(t);return r.find((function(t){return t===e}))?null:(r.push(e),a(r),r)},removeFromCompare:function(e){var r=b(t),n=r.findIndex((function(t){return t===e}));return n<0?null:(r.splice(n,1),a(r),r)},checkIfCardCompare:function(e){return b(t).find((function(t){return t===e}))}}})),y=r.createElement,x=function(e){return e.creditCards.map((function(e){return y(C.Provider,null,y(h,{card:e}))}))}},2082:function(e,t,a){"use strict";a.r(t),a.d(t,{__N_SSG:function(){return V},default:function(){return z}});var r=a(6610),n=a(5991),s=a(5255),i=a(6089),c=a(7608),l=a(7294),o=a(9389),u=a(4181),d=a.n(u),m=a(8032),f=a(2553),p=a(7074),_=a.n(p),N=l.createElement,v=function(){return N("div",{id:_().TextHeader},N("div",{id:_().HeadingTitle},N("h1",null,"Vi hj\xe4lper dig att hitta det b\xe4sta kortet f\xf6r just dig...")),N("div",{id:_().HeadingDescription},N("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis repellat non reiciendis deserunt dignissimos at suscipit quas saepe blanditiis, obcaecati eveniet ratione a modi consectetur sit eos eaque doloribus dolore?")))},h=a(8459),g=a.n(h),k=a(5675),b=a(5293),C=l.createElement,y=function(e){var t=e.bestcard;return C("div",{id:g().BestCard},C("h3",null,"B\xe4sta kortet nu"),C(k.default,{src:t.img,width:250,height:140,alt:"B\xe4sta kreditkortet just nu!"}),C("p",null,t.description),C(b.Z,{text:"Ans\xf6k nu!",href:"/Redirect?card=".concat(t.name),className:g().btn}))},x=l.createElement,I=function(e){var t=e.bestcard;return x("div",{id:d().Header},x(m.Z,null,x(f.X2,{justify:"center",align:"center"},x(f.JX,{md:12,lg:7},x(v,null)),x(f.JX,{md:12,lg:5},x(y,{bestcard:t})))))},j=a(7308),w=a.n(j);var H=a(2961);function T(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],r=!0,n=!1,s=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(a.push(i.value),!t||a.length!==t);r=!0);}catch(l){n=!0,s=l}finally{try{r||null==c.return||c.return()}finally{if(n)throw s}}return a}}(e,t)||(0,H.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var E=l.createElement;var Z=function(e){var t=T(l.useState(!1),2),a=t[0],r=t[1],n=l.useRef();return l.useEffect((function(){var e=new IntersectionObserver((function(e){a||"fade-in-sectionis-visible"!==n.current.className&&e.forEach((function(e){return r(e.isIntersecting)}))}));return e.observe(n.current),function(){return e.unobserve(n.current)}}),[]),E("div",{className:"fade-in-section ".concat(a?"is-visible":""),ref:n},e.children)},U=l.createElement,O=function(){return U("div",{id:w().WhyUs},U(Z,null,U(m.Z,null,U("h2",null,"Hur kan vi hj\xe4lpa dig?"),U("div",{className:w().row},U(f.X2,{align:"end",justify:"end"},U(f.JX,{sm:4},U("div",{className:w().text},U("div",{className:w().head},U("p",{className:w().title},U("b",null,"Opartiska j\xe4mf\xf6relser"))),U("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,"))),U(f.JX,{sm:4},U("div",{className:w().text},U("div",{className:w().head},U("p",{className:w().title},U("b",null,"Opartiska j\xe4mf\xf6relser"))),U("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,"))),U(f.JX,{sm:4},U("div",{className:w().text},U("div",{className:w().head},U("p",{className:w().title},U("b",null,"Opartiska j\xe4mf\xf6relser"))),U("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,")))),U(f.X2,{style:{marginTop:60},align:"end",justify:"end"},U(f.JX,{sm:4},U("div",{className:w().text},U("div",{className:w().head},U("p",{className:w().title},U("b",null,"Opartiska j\xe4mf\xf6relser"))),U("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,"))),U(f.JX,{sm:4},U("div",{className:w().text},U("div",{className:w().head},U("p",{className:w().title},U("b",null,"Opartiska j\xe4mf\xf6relser"))),U("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,"))),U(f.JX,{sm:4},U("div",{className:w().text},U("div",{className:w().head},U("p",{className:w().title},U("b",null,"Opartiska j\xe4mf\xf6relser"))),U("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,"))))))))},X=a(4208),B=a(251),S=a.n(B),L=l.createElement,P=function(e){var t=e.creditCards.cards.splice(2,5);return L("div",{id:S().TopCards},L("h3",null,"V\xe5ra popul\xe4raste kreditkort"),L(X.Z,{creditCards:t}))},R=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];(0,r.Z)(this,e),this.cards=t}return(0,n.Z)(e,[{key:"getCards",value:function(){return this.cards}}]),e}(),A=a(578),J=a.n(A),D=l.createElement,W=function(){return D("div",{id:J().UpdatedInformation},D(m.Z,null,D("div",{id:J().content},D(f.X2,null,D(f.JX,{md:12,lg:6},D("h4",null,"Alltid updaterat"),D("p",null,"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos vero consectetur voluptatum cum? Labore suscipit nobis cupiditate maiores at deleniti nesciunt obcaecati repellendus minima qui, quidem exercitationem excepturi eligendi non!"),D(b.Z,{href:"/kort",text:"Utforska kort",className:J().btn})),D(f.JX,{md:12,lg:6},D("div",{id:J().imgContainer},D(k.default,{width:500,height:700,src:"/images/updated.svg",id:J().Img})))))))},q=a(9008),M=l.createElement;function F(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,r=(0,c.Z)(e);if(t){var n=(0,c.Z)(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return(0,i.Z)(this,a)}}var G=function(e){(0,s.Z)(a,e);var t=F(a);function a(){return(0,r.Z)(this,a),t.apply(this,arguments)}return(0,n.Z)(a,[{key:"render",value:function(){var e=this.props.cards.map((function(e){return new o.a(e)})),t=new R(e),a=this.props.bestcard;return M("div",null,M(q.default,null,M("title",null,"kreditkortskoll.com"),M("meta",{name:"description",content:"Kreditkortskoll.com j\xe4mf\xf6r olika kreditkort f\xf6r att hitta det b\xe4sta kredikortet f\xf6r dig. J\xe4mf\xf6r kreditkort som Remember flex och Norwegian"}),M("meta",{name:"robots",content:"index, follow"})),M(I,{bestcard:a}),M("main",null,M(O,null),M(W,null),M(P,{creditCards:t})))}}]),a}(l.Component),V=!0,z=G},5301:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(2082)}])},8459:function(e){e.exports={BestCard:"BestCard_BestCard__3wEkq",btn:"BestCard_btn__A4Vce"}},4181:function(e){e.exports={Header:"Header_Header__1BSjH"}},7074:function(e){e.exports={TextHeader:"TextHeader_TextHeader__1JvhI",HeadingTitle:"TextHeader_HeadingTitle__3cdgX",moveInRight:"TextHeader_moveInRight__2u3yU",HeadingDescription:"TextHeader_HeadingDescription__3B-NM",moveInLeft:"TextHeader_moveInLeft__31u_5"}},251:function(e){e.exports={TopCards:"TopCards_TopCards__3v0jg"}},578:function(e){e.exports={UpdatedInformation:"UpdatedInformation_UpdatedInformation__LzuWj",imgContainer:"UpdatedInformation_imgContainer__1HX48",content:"UpdatedInformation_content__SMHax",btn:"UpdatedInformation_btn__3v2wI"}},7308:function(e){e.exports={WhyUs:"WhyUs_WhyUs__1JIug",row:"WhyUs_row__3C939",text:"WhyUs_text__34jpU",head:"WhyUs_head__2Vnvj",title:"WhyUs_title__xf8n2"}},4554:function(e){e.exports={card:"Creditcard_card__3_L4I",Ismobile:"Creditcard_Ismobile__3Npne",IsComputer:"Creditcard_IsComputer__1i27t",content:"Creditcard_content__18U0q",specific:"Creditcard_specific__1phuI",buttons:"Creditcard_buttons__Mcx9o","ans\xf6kButton":"Creditcard_ans_kButton__3Qw8_",good:"Creditcard_good__151a7",bad:"Creditcard_bad__1iR6d",toCompare:"Creditcard_toCompare__HTDiT",properties:"Creditcard_properties__2TymH",propertie:"Creditcard_propertie__37DFH",btnBackground:"Creditcard_btnBackground__1-GGb",rating:"Creditcard_rating__314C_"}},2680:function(e){e.exports={light:"Rating_light__1L63n",dark:"Rating_dark__2ajoy"}}},function(e){e.O(0,[774,553,779,93,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);