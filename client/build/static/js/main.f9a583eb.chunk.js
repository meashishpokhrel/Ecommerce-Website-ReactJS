(this["webpackJsonpecommerce-react"]=this["webpackJsonpecommerce-react"]||[]).push([[0],{101:function(e,t,n){},102:function(e,t,n){},103:function(e,t,n){},104:function(e,t,n){},105:function(e,t,n){},106:function(e,t,n){},107:function(e,t,n){},108:function(e,t,n){},112:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(31),i=n.n(r),s=(n(63),n(10)),l=n.n(s),o=n(4),u=n(18),d=n(20),j=n(21),b=n(23),m=n(22),h=(n(65),n(17)),p=(n(66),n(8)),f=n(2),O=Object(p.g)((function(e){var t=e.title,n=e.imageUrl,c=e.size,a=e.history,r=e.match,i=e.linkedUrl;return Object(f.jsxs)("div",{className:" ".concat(c," menu-item"),onClick:function(){return a.push("".concat(r.url).concat(i))},children:[Object(f.jsx)("div",{className:"background-image",style:{backgroundImage:"url(".concat(n,")")}}),Object(f.jsxs)("div",{className:"content",children:[Object(f.jsx)("h1",{className:"title",children:t.toUpperCase()}),Object(f.jsx)("span",{className:"subtitle",children:"BUY HERE "})]})]})})),v=n(7),x=n(5),g=Object(x.a)([function(e){return e.directory}],(function(e){return e.sections})),y=(n(72),Object(x.b)({sections:g})),w=Object(v.b)(y)((function(e){var t=e.sections;return Object(f.jsx)("div",{className:"directory-menu",children:t.map((function(e){var t=e.id,n=Object(h.a)(e,["id"]);return Object(f.jsx)(O,Object(o.a)({},n),t)}))})})),N=(n(73),function(){return Object(f.jsx)("div",{className:"homepage",children:Object(f.jsx)(w,{})})}),k=n(29);n(113),n(74);k.a.initializeApp({apiKey:"AIzaSyChztxjSwlRwkP--0v834qzc98ZrO-ZpbE",authDomain:"ecommerce-website-reactjs.firebaseapp.com",projectId:"ecommerce-website-reactjs",storageBucket:"ecommerce-website-reactjs.appspot.com",messagingSenderId:"980652067961",appId:"1:980652067961:web:72f5a7375e9817a78c98a8",measurementId:"G-1YTTTE79LQ"});var C=function(){var e=Object(u.a)(l.a.mark((function e(t,n){var c,a,r,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return c=I.doc("users/".concat(t.uid)),e.next=5,c.get();case 5:if(e.sent.exists){e.next=17;break}return a=t.displayName,r=t.email,i=new Date,e.prev=9,e.next=12,c.set(Object(o.a)({displayName:a,email:r,createdAt:i},n));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("error creating user",e.t0.message);case 17:return e.abrupt("return",c);case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t,n){return e.apply(this,arguments)}}(),E=k.a.auth(),I=k.a.firestore(),S=new k.a.auth.GoogleAuthProvider;S.setCustomParameters({prompt:"select_account"});var P,U,D=function(){return E.signInWithPopup(S)},A=(k.a,n(76),"TOGGLE_CART_HIDDEN"),z="ADD_ITEM",T="REMOVE_ITEM",q="CLEAR_ITEM_FROM_CART",R=function(){return{type:A}},M=function(e){return{type:z,payload:e}},F=(n(77),n(78),function(e){var t=e.children,n=e.isGoogleSignIn,c=e.inverted,a=Object(h.a)(e,["children","isGoogleSignIn","inverted"]);return Object(f.jsx)("button",Object(o.a)(Object(o.a)({className:"".concat(c?"inverted":"","\n     ").concat(n?"google-sign-in":""," custom-button")},a),{},{children:t}))}),L=Object(v.b)(null,(function(e){return{addItem:function(t){return e(M(t))}}}))((function(e){var t=e.item,n=e.addItem,c=t.name,a=t.price,r=t.imageUrl;return Object(f.jsxs)("div",{className:"collection-item",children:[Object(f.jsx)("div",{className:"image",style:{backgroundImage:"url(".concat(r,")")}}),Object(f.jsxs)("div",{className:"collection-footer",children:[Object(f.jsx)("span",{className:"name",children:c}),Object(f.jsx)("span",{className:"price",children:a})]}),Object(f.jsx)(F,{inverted:!0,onClick:function(){return n(t)},children:" Add to Cart"})]})})),B=(n(79),function(e){var t=e.title,n=e.items;return Object(f.jsxs)("div",{className:"collection-preview",children:[Object(f.jsx)("h1",{className:"title",children:t.toUpperCase()}),Object(f.jsx)("div",{className:"preview",children:n.filter((function(e,t){return t<4})).map((function(e){return Object(f.jsx)(L,{item:e},e.id)}))})]})}),G=Object(x.a)([function(e){return e.shop}],(function(e){return e.collections})),H=Object(x.a)([G],(function(e){return e?Object.keys(e).map((function(t){return e[t]})):[]})),_=Object(x.b)({collections:H}),V=Object(v.b)(_)((function(e){var t=e.collections;return Object(f.jsx)("div",{className:"collection-overview",children:t.map((function(e){var t=e.id,n=Object(h.a)(e,["id"]);return Object(f.jsx)(B,Object(o.a)({},n),t)}))})})),W=(n(80),Object(v.b)((function(e,t){return{collection:(n=t.match.params.collectionId,Object(x.a)([G],(function(e){return e?e[n]:null})))(e)};var n}))((function(e){var t=e.collection,n=t.title,c=t.items;return Object(f.jsxs)("div",{className:"collection-page",children:[Object(f.jsx)("h2",{className:"title",children:n}),Object(f.jsx)("div",{className:"items",children:c.map((function(e){return Object(f.jsx)(L,{item:e},e.id)}))})]})}))),Y="UPDATE_COLLECTION",J=n(39),Z=n(40),K=Z.a.div(P||(P=Object(J.a)(["\n  height: 60vh;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),X=Z.a.div(U||(U=Object(J.a)(["\n  display: inline-block;\n  width: 50px;\n  height: 50px;\n  border: 3px solid rgba(195, 195, 195, 0.6);\n  border-radius: 50%;\n  border-top-color: #636767;\n  animation: spin 1s ease-in-out infinite;\n  -webkit-animation: spin 1s ease-in-out infinite;\n  @keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n  @-webkit-keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n"]))),Q=function(e){return function(t){var n=t.isLoading,c=Object(h.a)(t,["isLoading"]);return n?Object(f.jsx)(K,{children:Object(f.jsx)(X,{})}):Object(f.jsx)(e,Object(o.a)({},c))}},$=Q(V),ee=Q(W),te=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(d.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={loading:!0},e.unsubscribeFromSnapshot=null,e}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props.updateCollection;I.collection("collections").get().then((function(n){var c=n.docs.map((function(e){var t=e.data(),n=t.title,c=t.items;return{routeName:encodeURI(n.toLowerCase()),id:e.id,title:n,items:c}})).reduce((function(e,t){return e[t.title.toLowerCase()]=t,e}),{});t(c),e.setState({loading:!1})}))}},{key:"render",value:function(){var e=this.props.match,t=this.state.loading;return Object(f.jsxs)("div",{className:"shop-page",children:[Object(f.jsx)(p.b,{exact:!0,path:"".concat(e.path),render:function(e){return Object(f.jsx)($,Object(o.a)({isLoading:t},e))}}),Object(f.jsx)(p.b,{path:"".concat(e.path,"/:collectionId"),render:function(e){return Object(f.jsx)(ee,Object(o.a)({isLoading:t},e))}})]})}}]),n}(a.a.Component),ne=Object(v.b)(null,(function(e){return{updateCollection:function(t){return e(function(e){return{type:Y,payload:e}}(t))}}}))(te),ce=(n(81),function(e){return e.cart}),ae=Object(x.a)([ce],(function(e){return e.cartItems})),re=Object(x.a)([ce],(function(e){return e.hidden})),ie=Object(x.a)([ae],(function(e){return e.reduce((function(e,t){return e+t.quantity}),0)})),se=Object(x.a)([ae],(function(e){return e.reduce((function(e,t){return e+t.quantity*t.price}),0)})),le=(n(82),Object(v.b)(null,(function(e){return{clearItem:function(t){return e(function(e){return{type:q,payload:e}}(t))},removeItem:function(t){return e(function(e){return{type:T,payload:e}}(t))},addItem:function(t){return e(M(t))}}}))((function(e){var t=e.cartItem,n=e.clearItem,c=e.removeItem,a=e.addItem,r=t.name,i=t.imageUrl,s=t.price,l=t.quantity;return Object(f.jsxs)("div",{className:"checkout-item",children:[Object(f.jsx)("div",{className:"image-container",children:Object(f.jsx)("img",{src:i,alt:"checkout-product-image"})}),Object(f.jsx)("span",{className:"name",children:r}),Object(f.jsxs)("div",{className:"quantity",children:[Object(f.jsx)("div",{className:"arrow",onClick:function(){return c(t)},children:"\u276e "}),Object(f.jsx)("span",{className:"value",children:l}),Object(f.jsx)("div",{className:"arrow",onClick:function(){return a(t)},children:"\u276f "})]}),Object(f.jsx)("span",{className:"price",children:s}),Object(f.jsx)("div",{className:"remove-button",onClick:function(){return n(t)},children:" \u2715 "})]})}))),oe=n(54),ue=n.n(oe),de=n(55),je=n.n(de),be=function(e){var t=e.price,n=100*t;return Object(f.jsx)(je.a,{name:"Ecommerce Site ReactJS",description:"Your total is Rs. ".concat(t),image:"https://svgshare.com/i/Yd8.svg",label:"Pay Now",panelLabel:"Pay Now",amount:n,stripeKey:"pk_test_51J7iSOHfXLnn4573uqBgvoYInaznIvqTp3qafRzSmS7WaCed9Fn3F4SDJwMDKSuzlP7wDYnUjZROrBg2bpaJCRuW00biylT0Ra",shippingAddress:!0,billingAddress:!0,token:function(e){ue()({url:"payment",method:"POST",data:{amount:n,token:e}}).then((function(e){alert("Hurray Payment Successful")})).catch((function(e){console.log("Payment Error",JSON.parse(e)),alert("PLease enter valid card")}))}})},me=Object(x.b)({total:se,cartItems:ae}),he=Object(v.b)(me)((function(e){var t=e.cartItems,n=e.total;return Object(f.jsxs)("div",{className:"checkout-page",children:[Object(f.jsxs)("div",{className:"checkout-header",children:[Object(f.jsx)("div",{className:"header-block",children:Object(f.jsx)("span",{children:"Product"})}),Object(f.jsx)("div",{className:"header-block",children:Object(f.jsx)("span",{children:"Description"})}),Object(f.jsx)("div",{className:"header-block",children:Object(f.jsx)("span",{children:"Quantity"})}),Object(f.jsx)("div",{className:"header-block",children:Object(f.jsx)("span",{children:"Price"})}),Object(f.jsx)("div",{className:"header-block",children:Object(f.jsx)("span",{children:"Remove"})})]}),t.map((function(e){return Object(f.jsx)(le,{cartItem:e},e.id)})),Object(f.jsxs)("div",{className:"total",children:["Total Rs. ",n]}),Object(f.jsxs)("div",{className:"test-warning",children:["*Please use the following test credit card for Payments*",Object(f.jsx)("br",{}),"4242 4242 4242 4242 - Expiry on: 01/22 - CW: 123"]}),Object(f.jsx)(be,{price:n})]})})),pe=n(16);function fe(){return(fe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e}).apply(this,arguments)}function Oe(e,t){if(null==e)return{};var n,c,a=function(e,t){if(null==e)return{};var n,c,a={},r=Object.keys(e);for(c=0;c<r.length;c++)n=r[c],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(c=0;c<r.length;c++)n=r[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var ve=c.createElement("path",{d:"m120.847656 113.503906h313.5l9.144532-40h-362.640626l40.402344 165.457032c4.253906 17.394531 19.675782 29.746093 37.578125 30.097656zm0 0",fill:"#D0F1FF"}),xe=c.createElement("path",{d:"m324.070312 400.25c-24.667968 0-44.667968-19.996094-44.667968-44.667969 0-24.667969 19.996094-44.664062 44.664062-44.667969 24.671875 0 44.667969 20 44.667969 44.667969-.023437 24.65625-20.007813 44.640625-44.664063 44.667969zm0-69.332031c-13.625 0-24.667968 11.042969-24.667968 24.664062 0 13.625 11.042968 24.667969 24.664062 24.667969 13.625 0 24.667969-11.042969 24.667969-24.664062-.015625-13.617188-11.046875-24.652344-24.664063-24.667969zm0 0",fill:"#29ABE2"}),ge=c.createElement("path",{d:"m188.808594 400.25c-24.667969 0-44.667969-19.996094-44.667969-44.667969 0-24.667969 19.996094-44.664062 44.664063-44.667969 24.671874 0 44.667968 20 44.667968 44.667969-.027344 24.65625-20.007812 44.640625-44.664062 44.667969zm0-69.332031c-13.625 0-24.667969 11.042969-24.667969 24.664062 0 13.625 11.042969 24.667969 24.664063 24.667969 13.625 0 24.667968-11.042969 24.667968-24.664062-.011718-13.617188-11.046875-24.652344-24.664062-24.667969zm0 0",fill:"#29ABE2"}),ye=c.createElement("path",{d:"m443.492188 63.25h-354.84375l-6.242188-25.390625c-5.390625-22.148437-25.273438-37.703125-48.066406-37.609375h-24.339844c-5.523438 0-10 4.476562-10 10s4.476562 10 10 10h24.339844c13.597656-.023438 25.4375 9.273438 28.644531 22.484375l48.554687 198.691406c5.371094 22.195313 25.242188 37.828125 48.074219 37.824219h207.691407c23.128906.050781 43.191406-15.976562 48.242187-38.550781l37.699219-164.925781c.679687-3.011719-.027344-6.171876-1.929688-8.609376-1.882812-2.417968-4.757812-3.859374-7.824218-3.914062zm-47.4375 172.867188c-2.996094 13.484374-14.9375 23.09375-28.75 23.132812h-207.691407c-13.632812-.070312-25.460937-9.441406-28.644531-22.699219l-37.429688-153.300781h337.40625zm0 0",fill:"#666666"});function we(e,t){var n=e.title,a=e.titleId,r=Oe(e,["title","titleId"]);return c.createElement("svg",fe({height:"453pt",viewBox:"0 -26 453.49855 453",width:"453pt",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":a},r),n?c.createElement("title",{id:a},n):null,ve,xe,ge,ye)}var Ne=c.forwardRef(we);n.p;function ke(){return(ke=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e}).apply(this,arguments)}function Ce(e,t){if(null==e)return{};var n,c,a=function(e,t){if(null==e)return{};var n,c,a={},r=Object.keys(e);for(c=0;c<r.length;c++)n=r[c],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(c=0;c<r.length;c++)n=r[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var Ee=c.createElement("g",null),Ie=c.createElement("g",null),Se=c.createElement("g",null),Pe=c.createElement("g",null),Ue=c.createElement("g",null),De=c.createElement("g",null),Ae=c.createElement("g",null),ze=c.createElement("g",null),Te=c.createElement("g",null),qe=c.createElement("g",null),Re=c.createElement("g",null),Me=c.createElement("g",null),Fe=c.createElement("g",null),Le=c.createElement("g",null),Be=c.createElement("g",null);function Ge(e,t){var n=e.title,a=e.titleId,r=Ce(e,["title","titleId"]);return c.createElement("svg",ke({id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t,"aria-labelledby":a},r),n?c.createElement("title",{id:a},n):null,c.createElement("g",null,c.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),c.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),c.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),c.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),c.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),Ee,Ie,Se,Pe,Ue,De,Ae,ze,Te,qe,Re,Me,Fe,Le,Be)}var He=c.forwardRef(Ge),_e=(n.p,n(101),Object(x.b)({itemCount:ie})),Ve=Object(v.b)(_e,(function(e){return{toggleCartHidden:function(){return e(R())}}}))((function(e){var t=e.toggleCartHidden,n=e.itemCount;return Object(f.jsxs)("div",{className:"cart-icon",onClick:t,children:[Object(f.jsx)(He,{className:"shopping-icon"}),Object(f.jsxs)("span",{className:"item-count",children:[" ",n]})]})})),We=(n(102),n(103),function(e){var t=e.item,n=t.imageUrl,c=t.price,a=t.name,r=t.quantity;return Object(f.jsxs)("div",{className:"cart-item",children:[Object(f.jsx)("img",{src:n,alt:"item-image"}),Object(f.jsxs)("div",{className:"item-details",children:[Object(f.jsx)("span",{className:"name",children:a}),Object(f.jsxs)("span",{className:"price",children:[r," X Rs. ",c]})]})]})}),Ye=(n(104),Object(x.b)({cartItems:ae})),Je=Object(p.g)(Object(v.b)(Ye)((function(e){var t=e.cartItems,n=e.history,c=e.dispatch;return Object(f.jsxs)("div",{className:"cart-dropdown",children:[Object(f.jsx)("div",{className:"cart-items",children:t.length?t.map((function(e){return Object(f.jsx)(We,{item:e},e.id)})):Object(f.jsx)("span",{className:"empty-msg",children:"Your Cart is Empty !!! "})}),Object(f.jsx)(F,{onClick:function(){n.push("/checkout"),c(R())},children:"CHECKOUT"})]})}))),Ze=Object(x.a)([function(e){return e.user}],(function(e){return e.currentUser})),Ke=Object(x.b)({currentUser:Ze,hidden:re}),Xe=Object(v.b)(Ke)((function(e){var t=e.currentUser,n=e.hidden;return Object(f.jsxs)("div",{className:"header",children:[Object(f.jsx)(pe.b,{className:"logo-container",to:"/",children:Object(f.jsx)(Ne,{className:"logo"})}),Object(f.jsxs)("div",{className:"options",children:[Object(f.jsx)(pe.b,{className:"option",to:"/shop",children:"SHOP"}),Object(f.jsx)(pe.b,{className:"option",to:"/shop",children:"CONTACT"}),t?Object(f.jsx)("div",{className:"option",onClick:function(){return E.signOut()},children:"SIGN OUT"}):Object(f.jsx)(pe.b,{className:"option",to:"/signin",children:"SIGN IN"}),Object(f.jsx)(Ve,{})]}),n?null:Object(f.jsx)(Je,{})]})})),Qe=n(28),$e=(n(105),n(106),function(e){var t=e.handleChange,n=e.label,c=Object(h.a)(e,["handleChange","label"]);return Object(f.jsxs)("div",{className:"group",children:[Object(f.jsx)("input",Object(o.a)({className:"form-input",onChange:t},c)),n?Object(f.jsx)("label",{className:"".concat(c.value.length?"shrink":""," form-input-label "),children:n}):null]})}),et=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(e){var c;return Object(d.a)(this,n),(c=t.call(this,e)).handleSubmit=function(){var e=Object(u.a)(l.a.mark((function e(t){var n,a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=c.state,a=n.email,r=n.password,e.prev=2,e.next=5,E.signInWithEmailAndPassword(a,r);case 5:c.setState({email:"",password:""}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),c.handleChange=function(e){var t=e.target,n=t.value,a=t.name;c.setState(Object(Qe.a)({},a,n))},c.state={email:"",password:""},c}return Object(j.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("div",{className:"sign-in",children:[Object(f.jsx)("h2",{children:"I already have an account!"}),Object(f.jsx)("span",{children:"Sign in with your email and password"}),Object(f.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(f.jsx)($e,{name:"email",type:"email",label:"Email",value:this.state.email,handleChange:this.handleChange,required:!0}),Object(f.jsx)($e,{name:"password",type:"password",label:"Password",value:this.state.password,handleChange:this.handleChange,required:!0}),Object(f.jsxs)("div",{className:"buttons",children:[Object(f.jsx)(F,{type:"submit",children:"Sign In "}),Object(f.jsx)(F,{onClick:D,isGoogleSignIn:!0,children:"Sign In with Google"})]})]})]})}}]),n}(a.a.Component),tt=(n(107),function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(){var e;return Object(d.a)(this,n),(e=t.call(this)).handleSubmit=function(){var t=Object(u.a)(l.a.mark((function t(n){var c,a,r,i,s,o,u;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),c=e.state,a=c.displayName,r=c.email,i=c.password,s=c.confirmPassword,i===s){t.next=5;break}return alert("Passwords DOnot Match!"),t.abrupt("return");case 5:return t.prev=5,t.next=8,E.createUserWithEmailAndPassword(r,i);case 8:return o=t.sent,u=o.user,t.next=12,C(u,{displayName:a});case 12:e.setState({displayName:"",email:"",password:"",confirmPassword:""}),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(5),console.log(t.t0);case 18:case"end":return t.stop()}}),t,null,[[5,15]])})));return function(e){return t.apply(this,arguments)}}(),e.handleChange=function(){var t=Object(u.a)(l.a.mark((function t(n){var c,a,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:c=n.target,a=c.name,r=c.value,e.setState(Object(Qe.a)({},a,r));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.state={displayName:"",email:"",password:"",confirmPassword:""},e}return Object(j.a)(n,[{key:"render",value:function(){var e=this.state,t=e.displayName,n=e.email,c=e.password,a=e.confirmPassword;return Object(f.jsxs)("div",{className:"sign-up",children:[Object(f.jsx)("h2",{className:"title",children:"I Do not have account!  "}),Object(f.jsx)("span",{children:"Sign up With you Email and Password"}),Object(f.jsxs)("form",{className:"sign-up-form",onSubmit:this.handleSubmit,children:[Object(f.jsx)($e,{type:"text",name:"displayName",value:t,onChange:this.handleChange,label:"Dispay Name",required:!0}),Object(f.jsx)($e,{type:"email",name:"email",value:n,onChange:this.handleChange,label:"EMail",required:!0}),Object(f.jsx)($e,{type:"password",name:"password",value:c,onChange:this.handleChange,label:"Password",required:!0}),Object(f.jsx)($e,{type:"password",name:"confirmPassword",value:a,onChange:this.handleChange,label:"COnfirm Password",required:!0}),Object(f.jsx)(F,{type:"submit",children:"SIGN UP"})]})]})}}]),n}(a.a.Component)),nt=(n(108),function(){return Object(f.jsxs)("div",{className:"sign-in-and-sign-up",children:[Object(f.jsx)(et,{}),Object(f.jsx)(tt,{})]})}),ct="SET_CURRENT_USER",at=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(d.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).unsubscribeFromAuth=null,e}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.setCurrentUser;this.unsubscribeFromAuth=E.onAuthStateChanged(function(){var t=Object(u.a)(l.a.mark((function t(n){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=5;break}return t.next=3,C(n);case 3:t.sent.onSnapshot((function(t){e(Object(o.a)({id:t.id},t.data()))}));case 5:n||e(n);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"componentWillUnmount",value:function(){this.unsubscribeFromAuth()}},{key:"render",value:function(){var e=this;return Object(f.jsxs)("div",{children:[Object(f.jsx)(Xe,{}),Object(f.jsxs)(p.d,{children:[Object(f.jsx)(p.b,{exact:!0,path:"/",component:N}),Object(f.jsx)(p.b,{path:"/shop",component:ne}),Object(f.jsx)(p.b,{exact:!0,path:"/checkout",component:he}),Object(f.jsx)(p.b,{exact:!0,path:"/signin",render:function(){return e.props.currentUser?Object(f.jsx)(p.a,{to:"/"}):Object(f.jsx)(nt,{})}})]})]})}}]),n}(a.a.Component),rt=Object(x.b)({currentUser:Ze}),it=Object(v.b)(rt,(function(e){return{setCurrentUser:function(t){return e(function(e){return{type:ct,payload:e}}(t))}}}))(at),st=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,114)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))},lt=n(56),ot=n(19),ut=n(32),dt=(n(109),n(57)),jt=n.n(dt),bt={currentUser:null},mt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:bt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ct:return Object(o.a)(Object(o.a)({},e),{},{currentUser:t.payload});default:return e}},ht=n(58),pt=function(e,t){return e.find((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?Object(o.a)(Object(o.a)({},e),{},{quantity:e.quantity+1}):e})):[].concat(Object(ht.a)(e),[Object(o.a)(Object(o.a)({},t),{},{quantity:1})])},ft=function(e,t){return 1===e.find((function(e){return e.id===t.id})).quantity?e.filter((function(e){return e.id!==t.id})):e.map((function(e){return e.id===t.id?Object(o.a)(Object(o.a)({},e),{},{quantity:e.quantity-1}):e}))},Ot={hidden:!0,cartItems:[]},vt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ot,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:return Object(o.a)(Object(o.a)({},e),{},{hidden:!e.hidden});case z:return Object(o.a)(Object(o.a)({},e),{},{cartItems:pt(e.cartItems,t.payload)});case T:return Object(o.a)(Object(o.a)({},e),{},{cartItems:ft(e.cartItems,t.payload)});case q:return Object(o.a)(Object(o.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.id!==t.payload.id}))});default:return e}},xt={sections:[{title:"hoodies",imageUrl:"https://images.unsplash.com/photo-1579572331145-5e53b299c64e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG9vZGllfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",id:1,linkedUrl:"shop/hoodies"},{title:"SARee",imageUrl:"https://media.gettyimages.com/photos/indian-girl-picture-id1131283194?k=20&m=1131283194&s=612x612&w=0&h=Cxvl7cvGTh29-6-qztrVfFa7_P4da6ZB4G5c9cvILNw=",id:2,linkedUrl:"shop/saree"},{title:"taxedos",imageUrl:"https://images.unsplash.com/photo-1522968439036-e6338d0ed84f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80",id:3,linkedUrl:"shop/taxedos"},{title:"winter",imageUrl:"https://media.istockphoto.com/photos/its-cold-out-here-i-have-to-cover-up-picture-id960213848?k=20&m=960213848&s=612x612&w=0&h=Z6EQLu5m4YhD_SuktUDdUbjWV8ADllxk0tbdzB4y_Dc=",size:"large",id:4,linkedUrl:"shop/winter"},{title:"summer",imageUrl:"https://media.istockphoto.com/photos/young-stylish-man-hipster-in-trendy-clothes-in-sunglasses-with-a-picture-id1163981677?k=20&m=1163981677&s=612x612&w=0&h=4SVF7A01SzfFDlKH1P0kymlm4YXnoLzFwTV1R9P_TX4=",size:"large",id:5,linkedUrl:"shop/summer"}]},gt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xt,t=arguments.length>1?arguments[1]:void 0;return t.type,e},yt={collections:null},wt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:yt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Y:return Object(o.a)(Object(o.a)({},e),{},{collections:t.payload});default:return e}},Nt={key:"root",storage:jt.a,whitelist:["cart"]},kt=Object(ot.b)({user:mt,cart:vt,directory:gt,shop:wt}),Ct=Object(ut.a)(Nt,kt);var Et=Object(ot.c)(Ct,ot.a.apply(void 0,[])),It=Object(ut.b)(Et);i.a.render(Object(f.jsx)(v.a,{store:Et,children:Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(pe.a,{children:Object(f.jsx)(lt.a,{persistor:It,children:Object(f.jsx)(it,{})})})})}),document.getElementById("root")),st()},63:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){}},[[112,1,2]]]);
//# sourceMappingURL=main.f9a583eb.chunk.js.map