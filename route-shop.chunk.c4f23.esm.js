(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"3BG2":function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,l,a=[],i=!0,o=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(e){o=!0,l=e}finally{try{i||null==n.return||n.return()}finally{if(o)throw l}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,l,a=[],i=!0,o=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(e){o=!0,l=e}finally{try{i||null==n.return||n.return()}finally{if(o)throw l}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.r(t);var o,c,u,d,s,b,h,m,f,p,g,v,y,j,O,w,x,k,C,A,S,N,I=n("hosL"),U=n("UutA"),$=function(e){return new Intl.NumberFormat("en-AU",{style:"currency",currency:"AUD",minimumFractionDigits:2}).format(e)},F=U.b.img(o||(o=(function(e){return e})`
	height: ${0};
	width: ${0};
	max-width: 100%;
	object-fit: cover;
`),(function(e){var t=e.height;return t?t+"rem":"auto"}),(function(e){var t=e.width;return t?t+"rem":"auto"})),P=U.b.input(c||(c=(function(e){return e})`
	width: 5.2rem;
	text-align: center;
	&::-webkit-outer-spin-button,
	&::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	&[type="number"] {
		--moz-appearance: textfield;
	}
`)),z=function(e){var t=e.type,n=e.className,r=void 0===n?"":n,l=e.value,a=e.handleChange;return Object(I.h)(P,{type:t,className:r,value:l,onChange:a})},D=n("QRet"),T=n("P8Bw"),B=U.b.select(u||(u=(function(e){return e})`
	max-width: 40rem;
	width: 100%;
	height: 5.2rem;
	font-size: 1.6rem;
	border-radius: 0.4rem;
	padding: 0 1.6rem;

	&::marker {
		margin-right: 1.6rem;
	}

	& option {
		/* display: none */
		font-size: 1.6rem;

		& p {
			padding: 1.6rem 0;
		}
	}

	&:after {
		border-color: pink;
	}
`)),E=function(e){var t=e.selected,n=e.handleChange,r=e.choices,l=e.dropdownName,a=e.className;return Object(I.h)(B,{className:a,name:l,id:l,onChange:n,value:t},r.map((function(e,t){return Object(I.h)(I.Fragment,null,Object(I.h)("option",{key:t,value:e.value},Object(I.h)("p",null," ",e.label)))})))},G=function(e){return e},L=U.b.div(d||(d=G`
	max-width: 80rem;
	margin: 2.4rem auto;
	padding: 1.6rem;
`)),J=U.b.img(s||(s=G`
	width: 100%;
	max-height: 40rem;
	margin: 1.6rem auto;
	object-fit: contain;
`)),M=U.b.p(b||(b=G``)),V=U.b.div(h||(h=G`
	margin: 1.6rem 0;
`)),q=U.b.div(m||(m=G`
	display: flex;
	flex-direction: column;
`)),H=U.b.div(f||(f=G`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	grid-gap: 0.8rem;
`)),Q=U.b.div(p||(p=G`
	margin: 1.6rem 0;
	display: flex;
	flex-direction: column;
`)),R=U.b.ul(g||(g=G`
	margin-left: 1.6rem;
`)),Y=Object(U.b)((function(e){var t=e.src,n=e.alt,r=e.width,l=e.height,a=e.className,i=void 0===a?"":a,o=e.handleClick;return Object(I.h)(F,{width:r,height:l,className:i,src:"/assets/images/".concat(t),alt:n,onClick:o})}))(v||(v=G`
	opacity: 0.5;
	transition: opacity 0.5s ease-in-out;
	cursor: pointer;

	&:hover {
		opacity: 1;
		transition: opacity 0.5s ease-in-out;
	}
`)),K=U.b.div(y||(y=G`
	display: flex;
	justify-content: flex-end;
	grid-gap: 1.6rem;
	margin: 2.4rem 0;
`)),W=U.b.div(j||(j=G``)),X=function(e){var t=e.product,n=r(Object(D.j)(null==t?void 0:t.gallery[0]),2),l=n[0],a=n[1],i=null==t?void 0:t.description.split("<br/>"),o=Object(D.a)((function(e){a(e)}),[]),c=r(Object(D.j)(1),2),u=c[0],d=c[1],s=Object(D.a)((function(e){console.log(e),d(e.target.value)}),[]);console.log({inputValue:u});var b=null==t?void 0:t.colours.join("|"),h=(null==t?void 0:t.colours)&&(null==t?void 0:t.colours.map((function(e){return{value:e,label:e}}))),m=r(Object(D.j)((null==h?void 0:h[0].value)||""),2),f=m[0],p=m[1],g=Object(D.a)((function(e){p(e.target.value)}),[]);return Object(I.h)(L,null,Object(I.h)(q,null,Object(I.h)(J,{src:"/assets/images/".concat(l.src)}),Object(I.h)(H,null,null==t?void 0:t.gallery.map((function(e){return Object(I.h)(Y,{src:null==e?void 0:e.src,alt:null==e?void 0:e.alt,height:10,width:10,handleClick:function(){return o(e)}})})))),Object(I.h)(K,null,h&&Object(I.h)(E,{choices:h,dropdownName:"colours",handleChange:g,selected:f}),Object(I.h)(z,{type:"number",value:u,handleChange:s}),Object(I.h)(T.a,{handleClick:function(){},className:"snipcart-add-item","data-item-id":t.slug,"data-item-image":"/assets/images/".concat(t.gallery[0].src),"data-item-name":t.title,"data-item-description":"test","data-item-url":"/shop/".concat(t.slug),"data-item-price":t.price,"data-item-has-taxes-included":"true","data-item-custom1-name":null!=t&&t.colours?"Colours":"","data-item-custom1-options":null!=t&&t.colours?b:"","data-item-quantity":u},"Add to cart")),Object(I.h)(Q,null,Object(I.h)("span",null,Object(I.h)("h1",null,null==t?void 0:t.title),Object(I.h)(M,null,$(null==t?void 0:t.price)," incl GST"),Object(I.h)(V,null,i.map((function(e){return Object(I.h)("span",null,e,Object(I.h)("br",null),Object(I.h)("br",null))})))),Object(I.h)(W,null,Object(I.h)("strong",null,"Dimensions: "),Object(I.h)("br",null),Object(I.h)("br",null),null==t?void 0:t.dimensions,Object(I.h)("br",null),Object(I.h)("br",null),Object(I.h)("strong",null,"Available colours: "),Object(I.h)("br",null),Object(I.h)("br",null),Object(I.h)(R,null,null==t?void 0:t.colours.map((function(e){return Object(I.h)("li",null,e)}))))))},Z=n("9gVH"),_=[{value:"all",label:"All products"},{value:"drawer",label:"Drawer storage"},{value:"camping",label:"Camping"},{value:"caravan",label:"Caravan storage"},{value:"storage",label:"Storage"}],ee=n("Y3FI"),te=U.b.div(O||(O=(function(e){return e})`
	width: ${0};
	aspect-ratio: 1;
	max-width: 100%;
	/* background-color: pink; */
	background-image: ${0};
	background-size: cover;
	margin-bottom: 1.6rem;
`),(function(e){var t=e.width;return t?t+"rem":"auto"}),(function(e){return'url("'.concat(e.src,'")')})),ne=function(e){var t=e.src,n=e.alt,r=e.width,l=e.height,a=e.className,i=void 0===a?"":a;return Object(I.h)(te,{width:r,height:l,className:i,src:"/assets/images/".concat(t),alt:n})},re=function(e){return e},le=U.b.div(w||(w=re`
	max-width: 20rem;
	aspect-ratio: 1;
	/* margin: 0 0.8rem 0.8rem 0; */
`)),ae=(U.b.div(x||(x=re`
	display: flex;
	align-items: center;
	overflow: hidden;
	width: 20rem;
	aspect-ratio: 1;
`)),U.b.p(k||(k=re`
	font-weight: 600;
`))),ie=Object(U.b)(ee.Link)(C||(C=re`
	--black: #1b1b1b;

	text-decoration: none;
	color: var(--black);
`)),oe=U.b.p(A||(A=re``)),ce=function(e){var t,n,r,l,a=e.product,i=e.handleClick,o=e.href;return Object(I.h)(ie,{onClick:i,href:o},Object(I.h)(le,null,Object(I.h)(ne,{width:20,src:null==a||null===(t=a.gallery)||void 0===t||null===(n=t[0])||void 0===n?void 0:n.src,alt:null==a||null===(r=a.gallery)||void 0===r||null===(l=r[0])||void 0===l?void 0:l.alt}),Object(I.h)(ae,null,null==a?void 0:a.title),Object(I.h)(oe,null,$(null==a?void 0:a.price)," incl GST")))},ue=function(e){return e},de=U.b.div(S||(S=ue`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 2.4rem 1.6rem;
	grid-gap: 1.6rem;
`)),se=U.b.div(N||(N=ue`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	margin: 2.4rem 1.6rem;
	grid-gap: 1.6rem;
`)),be=function(e){var t=e.category,n=function(){},r=a(Object(D.j)(null!=t?t:_[0].value),2),l=r[0],i=r[1];Object(D.d)((function(){t&&i(t)}),[]);return Object(I.h)(de,null,_&&Object(I.h)(E,{choices:_,dropdownName:"category",handleChange:function(e){i(e.target.value),window.history.replaceState(null,"","/shop")},selected:l}),Object(I.h)(se,null,Z.a.map("all"===l?function(e,t){return Object(I.h)(ce,{key:t,product:e,handleClick:n,href:"/shop/"+(null==e?void 0:e.slug)})}:function(e,t){return console.log(e.productCategory),-1!==e.productCategory.indexOf(l)?Object(I.h)(ce,{key:t,product:e,handleClick:n,href:"/shop/"+(null==e?void 0:e.slug)}):Object(I.h)(I.Fragment,null)})))};t.default=function(e){var t=e.productSlug,n=Z.a.find((function(e){return e.slug===t})),r=!!_.indexOf(t)&&t;return t&&n?Object(I.h)(X,{product:n}):Object(I.h)(be,{category:r})}},P8Bw:function(e,t,n){"use strict";function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t.indexOf(n=a[r])>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t.indexOf(n=a[r])>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}n.d(t,"a",(function(){return d}));var a,i=n("hosL"),o=n("UutA"),c=["children","handleClick","variant","className"],u=o.b.button(a||(a=(function(e){return e})`
	padding: 0.8rem 1.6rem;
	border: 1px solid #efefef;
	border-radius: 0.4rem;
	background: #1b1b1b;
	outline: none;
	color: #efefef;
	text-transform: uppercase;
	font-weight: 600;
	min-width: 10rem;
	height: 5.2rem;
	cursor: pointer;
`)),d=function(e){var t=e.children,n=e.handleClick,a=e.variant,o=void 0===a?"primary":a,d=e.className,s=void 0===d?"":d,b=l(e,c);return Object(i.h)(u,r({onClick:n,variant:o,className:s},b),t)}}}]);
//# sourceMappingURL=route-shop.chunk.c4f23.esm.js.map