(this["webpackJsonprandom-feeds"]=this["webpackJsonprandom-feeds"]||[]).push([[0],{103:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),o=n(9),c=n(19),i=n(23),s=n.n(i),l=n(12),u=n(18),d=n.n(u),m=n(0),f=n.n(m),p=n(16),v=n(6);t.default=Object(l.a)((function(e){var t,n,r=Object(v.c)(),i=d.a.parse(e.location.search.slice(1)).id,l=null===(t=r.folders)||void 0===t?void 0:t.find((function(e){return e.id===i}));f.a.useEffect((function(){r.loadItems({folderId:i})}),[r,r.token,i]);var u=f.a.useState(!1),m=Object(c.a)(u,2),b=m[0],h=m[1];return f.a.createElement("div",{className:"flex-column"},null===l||void 0===l||null===(n=l.randomItems)||void 0===n?void 0:n.map((function(e){return f.a.createElement(p.b,{key:e.id,to:"/Item?folderId=".concat(i,"&id=").concat(e.id),style:{margin:8,border:"1px solid black",padding:16}},f.a.createElement("div",null,e.title),f.a.createElement("div",{className:"flex-row align-center",style:{marginTop:8,justifyContent:"space-between",fontSize:12,color:"gray"}},f.a.createElement("div",null,e.origin.title," | ",e.author),f.a.createElement("div",null,s()(1e3*e.updated).format("YYYY-MM-DD HH:mm"))))})),f.a.createElement("div",{style:{height:50}}),f.a.createElement("div",{className:"flex-row",style:{position:"fixed",bottom:0,left:0,right:0,zIndex:7,height:50}},f.a.createElement("button",{onClick:function(){h(!0),r.loadItems({folderId:i,reloadItems:!0}),h(!1)},disabled:b,style:{flex:1}},"reload folder items"),f.a.createElement("button",{onClick:Object(o.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(!0),e.next=3,r.markItemsAsRead(l.randomItems.map((function(e){return e.id})));case 3:return e.next=5,r.loadItems({folderId:i});case 5:h(!1);case 6:case"end":return e.stop()}}),e)}))),disabled:b,style:{flex:1}},"mark them as read"),f.a.createElement("button",{onClick:function(){h(!0),r.loadItems({folderId:i,reloadRandomItems:!0}),h(!1)},disabled:b,style:{flex:1}},"reload random items")))}))},104:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),o=n(9),c=n(7),i=n(19),s=n(23),l=n.n(s),u=n(40),d=n.n(u),m=n(12),f=n(18),p=n.n(f),v=n(0),b=n.n(v),h=n(6);t.default=Object(m.a)((function(e){var t,n,r,s,m,f,v,g=Object(h.c)(),k=p.a.parse(e.location.search.slice(1)),x=k.folderId,w=k.id;b.a.useEffect((function(){g.loadItems({folderId:x})}),[g,g.token,x]);var y=null===(t=g.folders)||void 0===t?void 0:t.find((function(e){return e.id===x})),I=null===y||void 0===y||null===(n=y.randomItems)||void 0===n?void 0:n.find((function(e){return e.id===w})),E=b.a.useState(!1),j=Object(i.a)(E,2),O=j[0],S=j[1],N=null;if(null===I||void 0===I||null===(r=I.summary)||void 0===r?void 0:r.content){var C=[{shouldPreprocessNode:function(e){return"img"===e.name},preprocessNode:function(e){var t;e.attribs=Object(c.a)({},e.attribs,{style:"".concat(null===(t=e.attribs)||void 0===t?void 0:t.style,"; max-width: 100%; height: auto;")})}}],R=[{shouldProcessNode:function(e){return!0},processNode:new d.a.ProcessNodeDefinitions(b.a).processDefaultNode}];N=(new u.Parser).parseWithInstructions(I.summary.content,(function(){return!0}),R,C)}return b.a.createElement("div",{className:"flex-column"},b.a.createElement("a",{href:null===I||void 0===I||null===(s=I.canonical)||void 0===s||null===(m=s[0])||void 0===m?void 0:m.href,target:"_blank",rel:"noopener noreferrer",className:"flex-column",style:{background:"lightgray",padding:8}},b.a.createElement("div",{style:{fontWeight:"bold"}},null===I||void 0===I?void 0:I.title),b.a.createElement("div",{className:"flex-row align-center",style:{marginTop:8,justifyContent:"space-between",fontSize:12,color:"gray"}},b.a.createElement("div",null,null===I||void 0===I||null===(f=I.origin)||void 0===f?void 0:f.title," | ",null===I||void 0===I?void 0:I.author),b.a.createElement("div",null,l()(1e3*(null===I||void 0===I?void 0:I.updated)).format("YYYY-MM-DD HH:mm")))),b.a.createElement("div",{style:{margin:8}},N||b.a.createElement("div",{dangerouslySetInnerHTML:{__html:null===I||void 0===I||null===(v=I.summary)||void 0===v?void 0:v.content}})),b.a.createElement("div",{style:{height:50}}),b.a.createElement("div",{className:"flex-row",style:{position:"fixed",bottom:0,left:0,right:0,zIndex:7,height:50}},b.a.createElement("button",{onClick:Object(o.a)(a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return S(!0),t.next=3,g.markItemsAsRead([null===I||void 0===I?void 0:I.id]);case 3:if(!t.sent){t.next=5;break}e.history.goBack();case 5:S(!1);case 6:case"end":return t.stop()}}),t)}))),disabled:O,style:{flex:1}},"mark as read"),b.a.createElement("button",{onClick:function(){return e.history.goBack()},disabled:O,style:{flex:1}},"return")))}))},155:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),o=n(9),c=n(7),i=n(19),s=n(12),l=n(0),u=n.n(l),d=n(6);t.default=Object(s.a)((function(e){var t,n,r=Object(d.c)(),s=u.a.useState({account:null,password:null,isSubmitting:!1}),l=Object(i.a)(s,2),m=l[0],f=l[1];return u.a.createElement("div",{style:{margin:16,display:"grid",gridTemplateColumns:"auto 1fr",rowGap:16,columnGap:16}},u.a.createElement("div",null,"account"),u.a.createElement("input",{value:null!==(t=m.account)&&void 0!==t?t:"",onChange:function(e){return f(Object(c.a)({},m,{account:e.target.value||null}))}}),u.a.createElement("div",null,"password"),u.a.createElement("input",{value:null!==(n=m.password)&&void 0!==n?n:"",onChange:function(e){return f(Object(c.a)({},m,{password:e.target.value||null}))}}),u.a.createElement("button",{onClick:Object(o.a)(a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return f(Object(c.a)({},m,{isSubmitting:!0})),t.next=3,r.login(m.account,m.password);case 3:if(!t.sent){t.next=5;break}e.history.goBack();case 5:f(Object(c.a)({},m,{isSubmitting:!1}));case 6:case"end":return t.stop()}}),t)}))),disabled:m.isSubmitting,style:{gridColumn:"1 / span 2",padding:8,fontSize:14}},"login"))}))},156:function(e,t,n){"use strict";n.r(t);var r=n(12),a=n(0),o=n.n(a),c=n(16),i=n(6);t.default=Object(r.a)((function(e){var t,n=Object(i.c)();return o.a.useEffect((function(){n.loadFolders()}),[n,n.token]),n.token?o.a.createElement("div",{className:"flex-column"},null===(t=n.folders)||void 0===t?void 0:t.map((function(e){return o.a.createElement(c.b,{key:e.id,to:"/Folder?id=".concat(e.id),style:{margin:8,border:"1px solid black",padding:16}},e.id)}))):o.a.createElement(c.b,{to:"/Login",style:{margin:8,border:"1px solid black",padding:16}},"login")}))},157:function(e,t,n){},158:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(11),c=n.n(o),i=n(6),s=n(2),l=n.n(s),u=n(9),d=n(12),m=n(16),f=n(3),p=n(13),v=(n(100),Object(d.a)((function(){var e=Object(i.c)();return a.a.useEffect((function(){(function(){var t=Object(u.a)(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,localStorage.getItem("token");case 3:n=t.sent,e.loadToken(n),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),console.warn("App.loadToken error:",t.t0),Object(p.c)("load storage error: ".concat(t.t0));case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}})()()}),[e]),a.a.createElement("div",null,a.a.createElement(p.a,{autoClose:4e3,closeButton:!1,transition:Object(p.b)({enter:"slideInDown",exit:"slideOutUp",duration:300}),hideProgressBar:!0,toastClassName:"toast-border",bodyClassName:"toast-body"}),a.a.createElement(m.a,null,a.a.createElement(f.c,null,a.a.createElement(f.a,{path:"/Folder",component:n(103).default}),a.a.createElement(f.a,{path:"/Item",component:n(104).default}),a.a.createElement(f.a,{path:"/Login",component:n(155).default}),a.a.createElement(f.a,{path:"/",component:n(156).default}))))})));n(157),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(i.a.Provider,{value:new i.b},a.a.createElement(v,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,n){"use strict";n.d(t,"b",(function(){return w})),n.d(t,"a",(function(){return y})),n.d(t,"c",(function(){return I}));var r=n(68),a=n(7),o=n(2),c=n.n(o),i=n(69),s=n(70),l=n(1),u=n(0),d=n.n(u),m=n(13),f=n(9),p=n(71),v=n.n(p),b=n(18),h=n.n(b),g={},k=v.a.create({baseURL:"https://fever.glacjay.info",timeout:3e4});g.request=function(){var e=Object(f.a)(c.a.mark((function e(t,n,r,o){var i,s,l;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i=Object(a.a)({},r),s=Object(a.a)({},g.token?{Authorization:"GoogleLogin auth=".concat(g.token)}:{}),e.next=5,k.request(Object(a.a)({method:t,url:n},"post"===t?{data:h.a.stringify(i)}:{params:i},{headers:s}));case 5:return l=e.sent.data,!1!==(null===o||void 0===o?void 0:o.log)&&console.log(t.toUpperCase(),n,r,l),e.abrupt("return",l);case 10:throw e.prev=10,e.t0=e.catch(0),console.warn(t.toUpperCase(),n,r,e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,n,r,a){return e.apply(this,arguments)}}(),g.get=function(){var e=Object(f.a)(c.a.mark((function e(t,n,r){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",g.request("get",t,n,r));case 1:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),g.post=function(){var e=Object(f.a)(c.a.mark((function e(t,n,r){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",g.request("post",t,n,r));case 1:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}();var x=g,w=function(){function e(){Object(i.a)(this,e),this.token=null,this.folders=null,l.l(this)}return Object(s.a)(e,[{key:"loadToken",value:function(e){this.token=e,x.token=e}},{key:"login",value:c.a.mark((function e(t,n){var r,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.post("/accounts/ClientLogin",{Email:t,Passwd:n});case 3:if(r=e.sent,a={},r.split("\n").filter((function(e){return e})).forEach((function(e){var t=e.indexOf("=");t>0?a[e.substr(0,t)]=e.substr(t+1):a[e]=!0})),a.Auth){e.next=8;break}throw new Error("account or password incorrect");case 8:return this.token=a.Auth,e.next=11,localStorage.setItem("token",this.token);case 11:return x.token=this.token,e.abrupt("return",!0);case 15:return e.prev=15,e.t0=e.catch(0),console.warn("RootStore.login error:",e.t0),Object(m.c)("login failed: ".concat(e.t0)),e.abrupt("return",!1);case 20:case"end":return e.stop()}}),e,this,[[0,15]])}))},{key:"loadFolders",value:c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,this.token){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,x.get("/reader/api/0/tag/list?output=json");case 5:t=e.sent,this.folders=t.tags.filter((function(e){return/\/label\//.test(e.id)})),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.warn("RootStore.loadFolders error:",e.t0),Object(m.c)("load folders error: ".concat(e.t0));case 13:case"end":return e.stop()}}),e,this,[[0,9]])}))},{key:"loadItems",value:c.a.mark((function e(t){var n,r,o,i,s,l,u,d,f,p,v,b,h,g;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.folderId,r=t.reloadItems,o=t.reloadRandomItems,e.prev=1,this.token&&n){e.next=4;break}return e.abrupt("return");case 4:if(this.folders){e.next=7;break}return e.next=7,this.loadFolders();case 7:if(f=null===(i=this.folders)||void 0===i?void 0:i.find((function(e){return e.id===n}))){e.next=10;break}return e.abrupt("return");case 10:if(r&&(f.items=null),(r||o)&&(f.randomItems=null),p=f.items,(null===(s=p)||void 0===s?void 0:s.length)>0||r){e.next=18;break}return e.next=16,localStorage.getItem("items:"+n);case 16:(v=e.sent)&&(p=JSON.parse(v),f.items=p);case 18:if((null===(l=p)||void 0===l?void 0:l.length)>0&&!r){e.next=25;break}return e.next=21,x.get("/reader/api/0/stream/items/ids",{output:"json",s:n,xt:"user/-/state/com.google/read",r:"o",n:1e4});case 21:return p=e.sent.itemRefs,f.items=p,e.next=25,localStorage.setItem("items:"+n,JSON.stringify(p));case 25:if(b=f.randomItems,(null===(u=b)||void 0===u?void 0:u.length)>0||o){e.next=31;break}return e.next=29,localStorage.getItem("randomItems:"+n);case 29:(h=e.sent)&&(b=JSON.parse(h),f.randomItems=b);case 31:if((null===(d=b)||void 0===d?void 0:d.length)>0&&!r&&!o){e.next=39;break}return g=Array.from(new Set(Array(7).fill().map((function(){return parseInt(Math.random()*p.length)})))),e.next=35,x.get("/reader/api/0/stream/items/contents?output=json".concat(g.map((function(e){return"&i=".concat(p[e].id)})).join("")));case 35:return b=e.sent.items.map((function(e,t){return Object(a.a)({},e,{id:p[t].id})})),f.randomItems=b,e.next=39,localStorage.setItem("randomItems:"+n,JSON.stringify(b));case 39:e.next=45;break;case 41:e.prev=41,e.t0=e.catch(1),console.warn("RootStore.loadItems error:",e.t0),Object(m.c)("load items error: ".concat(e.t0));case 45:case"end":return e.stop()}}),e,this,[[1,41]])}))},{key:"markItemsAsRead",value:c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,this.token&&(null===t||void 0===t?void 0:t.length)>0){e.next=3;break}return e.abrupt("return",!1);case 3:return e.next=5,x.post("/reader/api/0/edit-tag?".concat(t.map((function(e){return"i=".concat(e)})).join("&")),{a:"user/-/state/com.google/read"});case 5:return e.next=7,this.removeItem(t,"items");case 7:return e.next=9,this.removeItem(t,"randomItems");case 9:return e.abrupt("return",!0);case 12:return e.prev=12,e.t0=e.catch(0),console.warn("RootStore.markItemsAsRead error:",e.t0),Object(m.c)("mark item as read error: ".concat(e.t0)),e.abrupt("return",!1);case 17:case"end":return e.stop()}}),e,this,[[0,12]])}))},{key:"removeItem",value:c.a.mark((function e(t,n){var a,o,i,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=Object(r.a)(this.folders||[]),e.prev=1,a.s();case 3:if((o=a.n()).done){e.next=11;break}if(s=o.value,!(null===(i=s[n])||void 0===i?void 0:i.some((function(e){return t.includes(e.id)})))){e.next=9;break}return s[n]=s[n].filter((function(e){return!t.includes(e.id)})),e.next=9,localStorage.setItem("".concat(n,":").concat(s.id),JSON.stringify(s[n]));case 9:e.next=3;break;case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),a.e(e.t0);case 16:return e.prev=16,a.f(),e.finish(16);case 19:case"end":return e.stop()}}),e,this,[[1,13,16,19]])}))}]),e}(),y=d.a.createContext(null);function I(){return d.a.useContext(y)}},73:function(e,t,n){e.exports=n(158)}},[[73,1,2]]]);
//# sourceMappingURL=main.4370167b.chunk.js.map