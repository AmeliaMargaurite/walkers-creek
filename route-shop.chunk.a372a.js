(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"3BG2":function(t,e,n){"use strict";function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,l,a=[],i=!0,o=!1;try{for(n=n.call(t);!(i=(r=n.next()).done)&&(a.push(r.value),!e||a.length!==e);i=!0);}catch(t){o=!0,l=t}finally{try{i||null==n.return||n.return()}finally{if(o)throw l}}return a}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function a(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function i(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,l,a=[],i=!0,o=!1;try{for(n=n.call(t);!(i=(r=n.next()).done)&&(a.push(r.value),!e||a.length!==e);i=!0);}catch(t){o=!0,l=t}finally{try{i||null==n.return||n.return()}finally{if(o)throw l}}return a}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function u(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}n.r(e);var s,d,b,f,h,m,p,g,v,j,O,y,w,x,k,C,z,A,S,N,P,I,U,F,D=n("hosL"),T=n("UutA"),B=function(t){return new Intl.NumberFormat("en-AU",{style:"currency",currency:"AUD",minimumFractionDigits:2}).format(t)},E=T.b.img(s||(d=["\n\theight: ",";\n\twidth: ",";\n\tmax-width: 100%;\n\tobject-fit: cover;\n"],b||(b=d.slice(0)),s=Object.freeze(Object.defineProperties(d,{raw:{value:Object.freeze(b)}}))),(function(t){var e=t.height;return e?e+"rem":"auto"}),(function(t){var e=t.width;return e?e+"rem":"auto"})),G=T.b.input(f||(f=function(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}(['\n\twidth: 5.2rem;\n\ttext-align: center;\n\t&::-webkit-outer-spin-button,\n\t&::-webkit-inner-spin-button {\n\t\t-webkit-appearance: none;\n\t\tmargin: 0;\n\t}\n\n\t&[type="number"] {\n\t\t--moz-appearance: textfield;\n\t}\n']))),L=function(t){var e=t.type,n=t.className,r=void 0===n?"":n,l=t.value,a=t.handleChange;return Object(D.h)(G,{type:e,className:r,value:l,onChange:a})},J=n("QRet"),M=n("P8Bw"),V=T.b.select(h||(h=function(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}(["\n\tmax-width: 40rem;\n\twidth: 100%;\n\theight: 5.2rem;\n\tfont-size: 1.6rem;\n\tborder-radius: 0.4rem;\n\tpadding: 0 1.6rem;\n\n\t&::marker {\n\t\tmargin-right: 1.6rem;\n\t}\n\n\t& option {\n\t\t/* display: none */\n\t\tfont-size: 1.6rem;\n\n\t\t& p {\n\t\t\tpadding: 1.6rem 0;\n\t\t}\n\t}\n\n\t&:after {\n\t\tborder-color: pink;\n\t}\n"]))),$=function(t){var e=t.selected,n=t.handleChange,r=t.choices,l=t.dropdownName,a=t.className;return Object(D.h)(V,{className:a,name:l,id:l,onChange:n,value:e},r.map((function(t,e){return Object(D.h)(D.Fragment,null,Object(D.h)("option",{key:e,value:t.value},Object(D.h)("p",null," ",t.label)))})))},q=T.b.div(m||(m=a(["\n\tmax-width: 80rem;\n\tmargin: 2.4rem auto;\n\tpadding: 1.6rem;\n"]))),H=T.b.img(p||(p=a(["\n\twidth: 100%;\n\tmax-height: 40rem;\n\tmargin: 1.6rem auto;\n\tobject-fit: contain;\n"]))),Q=T.b.p(g||(g=a([""]))),R=T.b.div(v||(v=a(["\n\tmargin: 1.6rem 0;\n"]))),Y=T.b.div(j||(j=a(["\n\tdisplay: flex;\n\tflex-direction: column;\n"]))),K=T.b.div(O||(O=a(["\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tjustify-content: center;\n\tgrid-gap: 0.8rem;\n"]))),W=T.b.div(y||(y=a(["\n\tmargin: 1.6rem 0;\n\tdisplay: flex;\n\tflex-direction: column;\n"]))),X=T.b.ul(w||(w=a(["\n\tmargin-left: 1.6rem;\n"]))),Z=Object(T.b)((function(t){var e=t.src,n=t.alt,r=t.width,l=t.height,a=t.className,i=void 0===a?"":a,o=t.handleClick;return Object(D.h)(E,{width:r,height:l,className:i,src:"/assets/images/".concat(e),alt:n,onClick:o})}))(x||(x=a(["\n\topacity: 0.5;\n\ttransition: opacity 0.5s ease-in-out;\n\tcursor: pointer;\n\n\t&:hover {\n\t\topacity: 1;\n\t\ttransition: opacity 0.5s ease-in-out;\n\t}\n"]))),_=T.b.div(k||(k=a(["\n\tdisplay: flex;\n\tjustify-content: flex-end;\n\tgrid-gap: 1.6rem;\n\tmargin: 2.4rem 0;\n"]))),tt=T.b.div(C||(C=a([""]))),et=function(t){var e=t.product,n=r(Object(J.j)(null==e?void 0:e.gallery[0]),2),l=n[0],a=n[1],i=null==e?void 0:e.description.split("<br/>"),o=Object(J.a)((function(t){a(t)}),[]),c=r(Object(J.j)(1),2),u=c[0],s=c[1],d=Object(J.a)((function(t){console.log(t),s(t.target.value)}),[]);console.log({inputValue:u});var b=null==e?void 0:e.colours.join("|"),f=(null==e?void 0:e.colours)&&(null==e?void 0:e.colours.map((function(t){return{value:t,label:t}}))),h=r(Object(J.j)((null==f?void 0:f[0].value)||""),2),m=h[0],p=h[1],g=Object(J.a)((function(t){p(t.target.value)}),[]);return Object(D.h)(q,null,Object(D.h)(Y,null,Object(D.h)(H,{src:"/assets/images/".concat(l.src)}),Object(D.h)(K,null,null==e?void 0:e.gallery.map((function(t){return Object(D.h)(Z,{src:null==t?void 0:t.src,alt:null==t?void 0:t.alt,height:10,width:10,handleClick:function(){return o(t)}})})))),Object(D.h)(_,null,f&&Object(D.h)($,{choices:f,dropdownName:"colours",handleChange:g,selected:m}),Object(D.h)(L,{type:"number",value:u,handleChange:d}),Object(D.h)(M.a,{handleClick:function(){},className:"snipcart-add-item","data-item-id":e.slug,"data-item-image":"/assets/images/".concat(e.gallery[0].src),"data-item-name":e.title,"data-item-description":"test","data-item-url":"/shop/".concat(e.slug),"data-item-price":e.price,"data-item-has-taxes-included":"true","data-item-custom1-name":null!=e&&e.colours?"Colours":"","data-item-custom1-options":null!=e&&e.colours?b:"","data-item-quantity":u},"Add to cart")),Object(D.h)(W,null,Object(D.h)("span",null,Object(D.h)("h1",null,null==e?void 0:e.title),Object(D.h)(Q,null,B(null==e?void 0:e.price)," incl GST"),Object(D.h)(R,null,i.map((function(t){return Object(D.h)("span",null,t,Object(D.h)("br",null),Object(D.h)("br",null))})))),Object(D.h)(tt,null,Object(D.h)("strong",null,"Dimensions: "),Object(D.h)("br",null),Object(D.h)("br",null),null==e?void 0:e.dimensions,Object(D.h)("br",null),Object(D.h)("br",null),Object(D.h)("strong",null,"Available colours: "),Object(D.h)("br",null),Object(D.h)("br",null),Object(D.h)(X,null,null==e?void 0:e.colours.map((function(t){return Object(D.h)("li",null,t)}))))))},nt=n("9gVH"),rt=[{value:"all",label:"All products"},{value:"drawer",label:"Drawer storage"},{value:"camping",label:"Camping"},{value:"caravan",label:"Caravan storage"},{value:"storage",label:"Storage"}],lt=n("Y3FI"),at=T.b.div(z||(z=function(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}(["\n\twidth: ",";\n\taspect-ratio: 1;\n\tmax-width: 100%;\n\t/* background-color: pink; */\n\tbackground-image: ",";\n\tbackground-size: cover;\n\tmargin-bottom: 1.6rem;\n"])),(function(t){var e=t.width;return e?e+"rem":"auto"}),(function(t){return'url("'.concat(t.src,'")')})),it=function(t){var e=t.src,n=t.alt,r=t.width,l=t.height,a=t.className,i=void 0===a?"":a;return Object(D.h)(at,{width:r,height:l,className:i,src:"/assets/images/".concat(e),alt:n})},ot=T.b.div(A||(A=i(["\n\tmax-width: 20rem;\n\taspect-ratio: 1;\n\t/* margin: 0 0.8rem 0.8rem 0; */\n"]))),ct=(T.b.div(S||(S=i(["\n\tdisplay: flex;\n\talign-items: center;\n\toverflow: hidden;\n\twidth: 20rem;\n\taspect-ratio: 1;\n"]))),T.b.p(N||(N=i(["\n\tfont-weight: 600;\n"])))),ut=Object(T.b)(lt.Link)(P||(P=i(["\n\t--black: #1b1b1b;\n\n\ttext-decoration: none;\n\tcolor: var(--black);\n"]))),st=T.b.p(I||(I=i([""]))),dt=function(t){var e,n,r,l,a=t.product,i=t.handleClick,o=t.href;return Object(D.h)(ut,{onClick:i,href:o},Object(D.h)(ot,null,Object(D.h)(it,{width:20,src:null==a||null===(e=a.gallery)||void 0===e||null===(n=e[0])||void 0===n?void 0:n.src,alt:null==a||null===(r=a.gallery)||void 0===r||null===(l=r[0])||void 0===l?void 0:l.alt}),Object(D.h)(ct,null,null==a?void 0:a.title),Object(D.h)(st,null,B(null==a?void 0:a.price)," incl GST")))},bt=T.b.div(U||(U=u(["\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tmargin: 2.4rem 1.6rem;\n\tgrid-gap: 1.6rem;\n"]))),ft=T.b.div(F||(F=u(["\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tjustify-content: center;\n\tmargin: 2.4rem 1.6rem;\n\tgrid-gap: 1.6rem;\n"]))),ht=function(t){var e=t.category,n=function(){},r=o(Object(J.j)(null!=e?e:rt[0].value),2),l=r[0],a=r[1];Object(J.d)((function(){e&&a(e)}),[]);return Object(D.h)(bt,null,rt&&Object(D.h)($,{choices:rt,dropdownName:"category",handleChange:function(t){a(t.target.value),window.history.replaceState(null,"","/shop")},selected:l}),Object(D.h)(ft,null,nt.a.map("all"===l?function(t,e){return Object(D.h)(dt,{key:e,product:t,handleClick:n,href:"/shop/"+(null==t?void 0:t.slug)})}:function(t,e){return console.log(t.productCategory),-1!==t.productCategory.indexOf(l)?Object(D.h)(dt,{key:e,product:t,handleClick:n,href:"/shop/"+(null==t?void 0:t.slug)}):Object(D.h)(D.Fragment,null)})))};e.default=function(t){var e=t.productSlug,n=nt.a.find((function(t){return t.slug===e})),r=!!rt.indexOf(e)&&e;return e&&n?Object(D.h)(et,{product:n}):Object(D.h)(ht,{category:r})}},P8Bw:function(t,e,n){"use strict";function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},r.apply(this,arguments)}function l(t,e){if(null==t)return{};var n,r,l=function(t,e){if(null==t)return{};var n,r,l={},a=Object.keys(t);for(r=0;r<a.length;r++)e.indexOf(n=a[r])>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)e.indexOf(n=a[r])>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}n.d(e,"a",(function(){return b}));var a,i,o,c=n("hosL"),u=n("UutA"),s=["children","handleClick","variant","className"],d=u.b.button(a||(i=["\n\tpadding: 0.8rem 1.6rem;\n\tborder: 1px solid #efefef;\n\tborder-radius: 0.4rem;\n\tbackground: #1b1b1b;\n\toutline: none;\n\tcolor: #efefef;\n\ttext-transform: uppercase;\n\tfont-weight: 600;\n\tmin-width: 10rem;\n\theight: 5.2rem;\n\tcursor: pointer;\n"],o||(o=i.slice(0)),a=Object.freeze(Object.defineProperties(i,{raw:{value:Object.freeze(o)}})))),b=function(t){var e=t.children,n=t.handleClick,a=t.variant,i=void 0===a?"primary":a,o=t.className,u=void 0===o?"":o,b=l(t,s);return Object(c.h)(d,r({onClick:n,variant:i,className:u},b),e)}}}]);
//# sourceMappingURL=route-shop.chunk.a372a.js.map