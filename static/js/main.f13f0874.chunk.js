(this["webpackJsonprandom-feeds"]=this["webpackJsonprandom-feeds"]||[]).push([[0],{110:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(26),o=n.n(a),s=n(13),i=n(0),c=n.n(i),u=n(17),l=n(8);t.default=Object(s.a)((function(e){var t,n,a=Object(l.c)();return c.a.useEffect((function(){a.init()}),[a]),Object(r.jsxs)("div",{className:"flex-column",style:{paddingBottom:4},children:[Object(r.jsxs)("div",{style:{margin:"4px 4px 0"},children:["\u6700\u8fd1\u5df2\u8bfb\u6587\u7ae0\uff1a",null===(t=a.recentlyReadItems)||void 0===t?void 0:t.length]}),null===(n=a.recentlyReadItems)||void 0===n?void 0:n.map((function(e){var t;return Object(r.jsxs)("div",{style:{margin:4,marginBottom:0,border:"1px solid black",borderRadius:4,padding:8},children:[Object(r.jsxs)(u.b,{to:"/Item?id=".concat(e.id),children:[Object(r.jsx)("div",{children:e.title}),Object(r.jsxs)("div",{className:"flex-row align-center",style:{marginTop:8,justifyContent:"space-between",fontSize:12,color:"gray"},children:[Object(r.jsxs)("div",{children:[null===(t=e.origin)||void 0===t?void 0:t.title," | ",e.author]}),Object(r.jsx)("div",{children:o()(1e3*e.updated).format("YYYY-MM-DD HH:mm")})]})]}),Object(r.jsx)("div",{className:"flex-row align-center",style:{marginTop:8,justifyContent:"flex-end"}})]},e.id)}))]})}))},111:function(e,t,n){"use strict";n.r(t);var r=n(27),a=n(2),o=n.n(a),s=n(7),i=n(1),c=n(26),u=n.n(c),l=n(13),d=n(25),f=n.n(d),b=n(0),m=n.n(b),p=n(17),v=n(8),h=n(33);t.default=Object(l.a)((function(e){var t,n,a,c,l=Object(v.c)(),d=f.a.parse(e.location.search.slice(1)).id;m.a.useEffect((function(){(function(){var e=Object(s.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.init();case 2:return e.next=4,l.loadItems({folderId:d});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[l,d]);var b=m.a.useState(!1),j=Object(r.a)(b,2),x=j[0],g=j[1],O=null===(t=l.folders)||void 0===t?void 0:t.find((function(e){return e.id===d}));return O?Object(i.jsxs)("div",{className:"flex-column",style:{paddingBottom:4},children:[Object(i.jsxs)("div",{style:{margin:"4px 4px 0"},children:[null===O||void 0===O||null===(n=O.id)||void 0===n?void 0:n.replace(/.*\//g,""),"\uff1a",null===O||void 0===O||null===(a=O.randomItems)||void 0===a?void 0:a.length,"/",null===O||void 0===O?void 0:O.unreadCount]}),null===O||void 0===O||null===(c=O.randomItems)||void 0===c?void 0:c.map((function(e){var t;return Object(i.jsxs)("div",{style:{margin:4,marginBottom:0,border:"1px solid black",borderRadius:4,padding:8},children:[Object(i.jsxs)(p.b,{to:"/Item?id=".concat(e.id),children:[Object(i.jsx)("div",{children:e.title}),Object(i.jsxs)("div",{className:"flex-row align-center",style:{marginTop:8,justifyContent:"space-between",fontSize:12,color:"gray"},children:[Object(i.jsxs)("div",{children:[null===(t=e.origin)||void 0===t?void 0:t.title," | ",e.author]}),Object(i.jsx)("div",{children:u()(1e3*e.updated).format("YYYY-MM-DD HH:mm")})]})]}),Object(i.jsx)("div",{className:"flex-row align-center",style:{marginTop:8,justifyContent:"flex-end"},children:Object(i.jsx)(h.a,{item:e,isSubmitting:x,setIsSubmitting:g})})]},e.id)})),Object(i.jsx)("div",{style:{height:100}}),Object(i.jsxs)("div",{className:"flex-row",style:{position:"fixed",bottom:0,left:0,right:0,zIndex:7,height:50},children:[Math.random()>2&&Object(i.jsx)("button",{onClick:Object(s.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(!0),e.next=3,l.markItemsAsRead(O.randomItems.map((function(e){return e.id})));case 3:return e.next=5,l.loadItems({folderId:d});case 5:g(!1);case 6:case"end":return e.stop()}}),e)}))),disabled:x,className:"button",style:{height:44,opacity:x?.5:1,flex:1},children:"mark them as read"}),Object(i.jsx)("button",{onClick:function(){g(!0),l.loadItems({folderId:d,reloadItems:!0}),g(!1)},disabled:x,className:"button",style:{height:44,opacity:x?.5:1,flex:1},children:"reload random items"})]})]}):null}))},112:function(e,t,n){"use strict";n.r(t);var r=n(4),a=n(27),o=n(1),s=n(26),i=n.n(s),c=n(50),u=n.n(c),l=n(13),d=n(25),f=n.n(d),b=n(0),m=n.n(b),p=n(8),v=n(33);t.default=Object(l.a)((function(e){var t,n,s,l,d,b=Object(p.c)();m.a.useEffect((function(){b.init()}),[b]);var h=f.a.parse(e.location.search.slice(1)).id,j=b.loadedItems[h],x=m.a.useState(!1),g=Object(a.a)(x,2),O=g[0],y=g[1],k=null;if(null===j||void 0===j||null===(t=j.summary)||void 0===t?void 0:t.content){var w=[{shouldPreprocessNode:function(e){return"img"===e.name},preprocessNode:function(e){var t;e.attribs=Object(r.a)(Object(r.a)({},e.attribs),{},{style:"".concat((null===(t=e.attribs)||void 0===t?void 0:t.style)||"","; max-width: 100%; height: auto;")})}},{shouldPreprocessNode:function(e){return"pre"===e.name},preprocessNode:function(e){var t;e.attribs=Object(r.a)(Object(r.a)({},e.attribs),{},{style:"".concat((null===(t=e.attribs)||void 0===t?void 0:t.style)||"",";\n              border: 1px solid lightgray;\n              padding: 2px;\n              overflow-x: auto;\n              white-space: pre;\n              font-size: 0.8rem;\n            ")})}}],I=[{shouldProcessNode:function(e){return!0},processNode:new u.a.ProcessNodeDefinitions(m.a).processDefaultNode}];k=(new c.Parser).parseWithInstructions(j.summary.content,(function(){return!0}),I,w)}return Object(o.jsxs)("div",{className:"flex-column",children:[Object(o.jsxs)("a",{href:null===j||void 0===j||null===(n=j.canonical)||void 0===n||null===(s=n[0])||void 0===s?void 0:s.href,target:"_blank",rel:"noopener noreferrer",className:"flex-column",style:{background:"lightgray",padding:8},children:[Object(o.jsx)("div",{style:{fontWeight:"bold"},children:null===j||void 0===j?void 0:j.title}),Object(o.jsxs)("div",{className:"flex-row align-center",style:{marginTop:8,justifyContent:"space-between",fontSize:12,color:"gray"},children:[Object(o.jsxs)("div",{children:[null===j||void 0===j||null===(l=j.origin)||void 0===l?void 0:l.title," | ",null===j||void 0===j?void 0:j.author]}),Object(o.jsx)("div",{children:i()(1e3*(null===j||void 0===j?void 0:j.updated)).format("YYYY-MM-DD HH:mm")})]})]}),Object(o.jsx)("div",{style:{margin:8},children:k||Object(o.jsx)("div",{dangerouslySetInnerHTML:{__html:null===j||void 0===j||null===(d=j.summary)||void 0===d?void 0:d.content}})}),Object(o.jsx)("div",{style:{height:100}}),Object(o.jsx)("div",{className:"flex-row",style:{position:"fixed",bottom:0,left:0,right:0,zIndex:7,height:50},children:Object(o.jsx)(v.a,{item:j,history:e.history,isSubmitting:O,setIsSubmitting:y,buttonStyle:{flex:1,height:44}})})]})}))},14:function(e,t,n){"use strict";var r=n(2),a=n.n(r),o=n(4),s=n(7),i=n(78),c=n.n(i),u=n(25),l=n.n(u),d={},f=c.a.create({baseURL:"https://damp-boat-612e.glacjay.workers.dev/?https://bazqux.com",timeout:3e4});d.request=function(){var e=Object(s.a)(a.a.mark((function e(t,n,r,s){var i,c,u,b,m;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i=Object(o.a)({},r),c=Object(o.a)({},d.token?{Authorization:"GoogleLogin auth=".concat(d.token)}:{}),e.next=5,f.request(Object(o.a)(Object(o.a)({method:t,url:n},"post"===t?{data:l.a.stringify(i)}:{params:i}),{},{headers:c}));case 5:return u=e.sent.data,!1!==(null===s||void 0===s?void 0:s.log)&&console.log(t.toUpperCase(),n,r,u),e.abrupt("return",u);case 10:if(e.prev=10,e.t0=e.catch(0),console.warn(t.toUpperCase(),n,r,e.t0),401!==(null===e.t0||void 0===e.t0||null===(b=e.t0.response)||void 0===b?void 0:b.status)){e.next=17;break}return d.token=null,(null===(m=d.history)||void 0===m?void 0:m.push)&&d.history.push("/Login"),e.abrupt("return");case 17:throw e.t0;case 18:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,n,r,a){return e.apply(this,arguments)}}(),d.get=function(){var e=Object(s.a)(a.a.mark((function e(t,n,r){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",d.request("get",t,n,r));case 1:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),d.post=function(){var e=Object(s.a)(a.a.mark((function e(t,n,r){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",d.request("post",t,n,r));case 1:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),t.a=d},163:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),o=n(7),s=n(4),i=n(27),c=n(1),u=n(13),l=n(0),d=n.n(l),f=n(8);t.default=Object(u.a)((function(e){var t,n,r=Object(f.c)(),u=d.a.useState({account:null,password:null,isSubmitting:!1}),l=Object(i.a)(u,2),b=l[0],m=l[1];return Object(c.jsxs)("div",{style:{margin:16,display:"grid",gridTemplateColumns:"auto 1fr",rowGap:16,columnGap:16},children:[Object(c.jsx)("div",{children:"account"}),Object(c.jsx)("input",{value:null!==(t=b.account)&&void 0!==t?t:"",onChange:function(e){return m(Object(s.a)(Object(s.a)({},b),{},{account:e.target.value||null}))}}),Object(c.jsx)("div",{children:"password"}),Object(c.jsx)("input",{type:"password",value:null!==(n=b.password)&&void 0!==n?n:"",onChange:function(e){return m(Object(s.a)(Object(s.a)({},b),{},{password:e.target.value||null}))}}),Object(c.jsx)("button",{onClick:Object(o.a)(a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return m(Object(s.a)(Object(s.a)({},b),{},{isSubmitting:!0})),t.next=3,r.login(b.account,b.password);case 3:if(!t.sent){t.next=5;break}e.history.goBack();case 5:m(Object(s.a)(Object(s.a)({},b),{},{isSubmitting:!1}));case 6:case"end":return t.stop()}}),t)}))),disabled:b.isSubmitting,style:{gridColumn:"1 / span 2",padding:8,fontSize:14},children:"login"})]})}))},164:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),o=n(7),s=n(1),i=n(13),c=n(0),u=n.n(c),l=n(17),d=n(8);t.default=Object(i.a)((function(e){var t,n,r=Object(d.c)();return u.a.useEffect((function(){(function(){var e=Object(o.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.init();case 2:return e.next=4,r.loadFolders();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[r,r.token]),r.token?Object(s.jsxs)("div",{className:"flex-column",style:{minHeight:"100vh"},children:[Object(s.jsxs)("div",{style:{margin:"4px 4px 0"},children:["\u672a\u8bfb\uff1a",r.totalUnreadCounts]}),null===(t=r.folders)||void 0===t?void 0:t.map((function(e){var t;return Object(s.jsxs)(l.b,{to:"/Folder?id=".concat(e.id),style:{margin:"4px 4px 0",border:"1px solid black",borderRadius:4,padding:8},children:[null===(t=e.id)||void 0===t?void 0:t.replace(/.*\//g,"")," (",e.unreadCount,")"]},e.id)})),(null===(n=r.recentlyReadItems)||void 0===n?void 0:n.length)>0&&Object(s.jsxs)(c.Fragment,{children:[Object(s.jsx)("div",{style:{flex:1,minHeight:16}}),Object(s.jsx)(l.b,{to:"/RecentlyReadItems",style:{margin:"4px 4px",border:"1px solid black",borderRadius:4,padding:8},children:"\u6700\u8fd1\u5df2\u8bfb\u6587\u7ae0"})]})]}):Object(s.jsx)(l.b,{to:"/Login",style:{margin:8,border:"1px solid black",padding:16},children:"login"})}))},165:function(e,t,n){},166:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(0),o=n.n(a),s=n(16),i=n.n(s),c=n(8),u=n(13),l=n(17),d=n(5),f=n(19),b=(n(107),n(14)),m=Object(u.a)((function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(f.a,{autoClose:4e3,closeButton:!1,transition:Object(f.b)({enter:"slideInDown",exit:"slideOutUp",duration:300}),hideProgressBar:!0,toastClassName:"toast-border",bodyClassName:"toast-body"}),Object(r.jsxs)(l.a,{children:[Object(r.jsx)(p,{}),Object(r.jsxs)(d.c,{children:[Object(r.jsx)(d.a,{path:"/RecentlyReadItems",component:n(110).default}),Object(r.jsx)(d.a,{path:"/Folder",component:n(111).default}),Object(r.jsx)(d.a,{path:"/Item",component:n(112).default}),Object(r.jsx)(d.a,{path:"/Login",component:n(163).default}),Object(r.jsx)(d.a,{path:"/",component:n(164).default})]})]})]})}));function p(){var e=Object(d.f)();return o.a.useEffect((function(){b.a.history=e}),[e]),null}n(165),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(c.a.Provider,{value:new c.b,children:Object(r.jsx)(m,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},33:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(4),a=n(2),o=n.n(a),s=n(7),i=n(1),c=n(0),u=n(8);function l(e){var t,n,a=Object(u.c)(),l=e.item,d=e.isSubmitting,f=e.setIsSubmitting;return Object(i.jsxs)(c.Fragment,{children:[Object(i.jsx)("button",{onClick:Object(s.a)(o.a.mark((function t(){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return f(!0),t.next=3,a.markItemsAsRead([null===l||void 0===l?void 0:l.id]);case 3:if(!t.sent){t.next=5;break}(null===(n=e.history)||void 0===n?void 0:n.goBack)&&e.history.goBack();case 5:f(!1);case 6:case"end":return t.stop()}}),t)}))),disabled:d,className:"button",style:Object(r.a)({opacity:d?.5:1},e.buttonStyle),children:"mark as read"}),Object(i.jsx)("a",{href:null===l||void 0===l||null===(t=l.canonical)||void 0===t||null===(n=t[0])||void 0===n?void 0:n.href,target:"_blank",rel:"noopener noreferrer",className:"button flex-row justify-center align-center",style:Object(r.a)({opacity:d?.5:1,textDecoration:"none"},e.buttonStyle),children:"original link"}),Object(i.jsx)("button",{onClick:function(){var t;a.removeItems([null===l||void 0===l?void 0:l.id],"randomItems"),(null===(t=e.history)||void 0===t?void 0:t.goBack)&&e.history.goBack()},disabled:d,className:"button",style:Object(r.a)({opacity:d?.5:1},e.buttonStyle),children:"later"})]})}},8:function(e,t,n){"use strict";n.d(t,"b",(function(){return v})),n.d(t,"a",(function(){return h})),n.d(t,"c",(function(){return j}));var r=n(7),a=n(28),o=n(4),s=n(21),i=n(2),c=n.n(i),u=n(76),l=n(77),d=n(3),f=n(0),b=n.n(f),m=n(19),p=n(14),v=function(){function e(){Object(u.a)(this,e),this.token=null,this.folders=null,this.recentlyReadItems=[],d.l(this)}return Object(l.a)(e,[{key:"init",value:c.a.mark((function e(){var t,n=this;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,localStorage.getItem("token");case 3:return t=e.sent,this.token=t,p.a.token=t,e.t0=JSON,e.next=9,localStorage.getItem("folders");case 9:return e.t1=e.sent,this.folders=e.t0.parse.call(e.t0,e.t1),this.folders.forEach((function(e){return n.loadItemsFromLocal(e)})),e.t2=JSON,e.next=15,localStorage.getItem("recentlyReadItems");case 15:e.t3=e.sent,this.recentlyReadItems=e.t2.parse.call(e.t2,e.t3),e.next=23;break;case 19:e.prev=19,e.t4=e.catch(0),console.warn("RootStore.init error:",e.t4),Object(m.c)("init error: ".concat(e.t4));case 23:case"end":return e.stop()}}),e,this,[[0,19]])}))},{key:"login",value:c.a.mark((function e(t,n){var r,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.post("/accounts/ClientLogin",{Email:t,Passwd:n});case 3:if(r=e.sent,a={},r.split("\n").filter((function(e){return e})).forEach((function(e){var t=e.indexOf("=");t>0?a[e.substr(0,t)]=e.substr(t+1):a[e]=!0})),a.Auth){e.next=8;break}throw new Error("account or password incorrect");case 8:return this.token=a.Auth,e.next=11,localStorage.setItem("token",this.token);case 11:return p.a.token=this.token,e.abrupt("return",!0);case 15:return e.prev=15,e.t0=e.catch(0),console.warn("RootStore.login error:",e.t0),Object(m.c)("login failed: ".concat(e.t0)),e.abrupt("return",!1);case 20:case"end":return e.stop()}}),e,this,[[0,15]])}))},{key:"loadFolders",value:c.a.mark((function e(){var t,n,r,a,i,u=this;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,this.token){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,p.a.get("/reader/api/0/tag/list?output=json");case 5:return this.folders=e.sent.tags.filter((function(e){return/\/label\//.test(e.id)})),e.next=8,p.a.get("/reader/api/0/subscription/list?output=json");case 8:n=e.sent.subscriptions,r=Object(s.a)(this.folders);try{for(i=function(){var e=a.value;e.subscriptions=n.filter((function(t){var n;return null===(n=t.categories)||void 0===n?void 0:n.some((function(t){return t.id===(null===e||void 0===e?void 0:e.id)}))}))},r.s();!(a=r.n()).done;)i()}catch(c){r.e(c)}finally{r.f()}return e.next=13,this.loadUnreadCounts(this.folders);case 13:return this.folders.forEach((function(e){return u.loadItemsFromLocal(e)})),e.next=16,localStorage.setItem("folders",JSON.stringify(null===(t=this.folders)||void 0===t?void 0:t.map((function(e){return Object(o.a)(Object(o.a)({},e),{},{randomItems:null})}))));case 16:e.next=22;break;case 18:e.prev=18,e.t0=e.catch(0),console.warn("RootStore.loadFolders error:",e.t0),Object(m.c)("load folders error: ".concat(e.t0));case 22:case"end":return e.stop()}}),e,this,[[0,18]])}))},{key:"loadUnreadCounts",value:c.a.mark((function e(t){var n,r,a,o,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("/reader/api/0/unread-count?output=json");case 2:n=e.sent,this.totalUnreadCounts=n.bq_total_unreads,r=n.unreadcounts,a=Object(s.a)(t);try{for(i=function(){var e,t=o.value,n=null===(e=t.id)||void 0===e?void 0:e.replace(/\d+/,"-"),a=r.find((function(e){return e.id===n}));a&&(t.unreadCount=a.count);var i,c=Object(s.a)(t.subscriptions||[]);try{var u=function(){var e=i.value,t=r.find((function(t){return t.id===e.id}));t&&(e.unreadCount=t.count)};for(c.s();!(i=c.n()).done;)u()}catch(l){c.e(l)}finally{c.f()}},a.s();!(o=a.n()).done;)i()}catch(c){a.e(c)}finally{a.f()}case 7:case"end":return e.stop()}}),e,this)}))},{key:"loadItemsFromLocal",value:c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.getItem("randomItems:".concat(t.id));case 2:if(!(n=e.sent)){e.next=6;break}return t.randomItems=JSON.parse(n),e.abrupt("return");case 6:case"end":return e.stop()}}),e)}))},{key:"loadItems",value:c.a.mark((function e(t){var n,s,i,u,l,d,f,b,v,h,j,x,g,O;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.folderId,s=t.reloadItems,e.prev=1,this.token&&n){e.next=4;break}return e.abrupt("return");case 4:if(u=null===(i=this.folders)||void 0===i?void 0:i.find((function(e){return e.id===n}))){e.next=7;break}return e.abrupt("return");case 7:if(!s){e.next=11;break}return e.next=10,this.loadUnreadCounts([u]);case 10:u.randomItems=null;case 11:if(!(l=u.randomItems)){e.next=14;break}return e.abrupt("return");case 14:if(s){e.next=19;break}return e.next=17,this.loadItemsFromLocal(u);case 17:if(!u.randomItems){e.next=19;break}return e.abrupt("return");case 19:for(d=Object(a.a)(u.subscriptions.filter((function(e){return e.unreadCount>0}))),f=d.length-1;f>0;f--)b=Math.floor(Math.random()*(f+1)),v=[d[b],d[f]],d[f]=v[0],d[b]=v[1];for(h=Math.max(7,Math.min(42,d.length)),j=d.reduce((function(e,t){return e+t.unreadCount}),0),x={},g=0;Object.values(x).reduce((function(e,t){return e+t}),0)<h&&j>0;g=(g+1)%d.length)x[d[g].id]||(x[d[g].id]=0),x[d[g].id]<d[g].unreadCount&&(x[d[g].id]+=1),j-=1;return e.next=27,Promise.all(Object.keys(x).map(function(){var e=Object(r.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("/reader/api/0/stream/items/ids",{output:"json",s:t,xt:"user/-/state/com.google/read",r:"o",n:x[t]});case 2:return e.abrupt("return",e.sent.itemRefs);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 27:return O=e.sent,u.items=O.reduce((function(e,t){return[].concat(Object(a.a)(e),Object(a.a)(t))}),[]),e.next=31,Promise.all(u.items.map(function(){var e=Object(r.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=o.a,e.t1=o.a,e.t2={},e.next=5,p.a.get("/reader/api/0/stream/items/contents?output=json&i=".concat(t.id));case 5:return e.t3=e.sent.items[0],e.t4=(0,e.t1)(e.t2,e.t3),e.t5={},e.t6={id:t.id},e.abrupt("return",(0,e.t0)(e.t4,e.t5,e.t6));case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 31:return l=e.sent,u.randomItems=l,e.next=35,localStorage.setItem("randomItems:".concat(u.id),JSON.stringify(l));case 35:e.next=41;break;case 37:e.prev=37,e.t0=e.catch(1),console.warn("RootStore.loadItems error:",e.t0),Object(m.c)("load items error: ".concat(e.t0));case 41:case"end":return e.stop()}}),e,this,[[1,37]])}))},{key:"markItemsAsRead",value:c.a.mark((function e(t){var n=this;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,this.token&&(null===t||void 0===t?void 0:t.length)>0){e.next=3;break}return e.abrupt("return",!1);case 3:return e.next=5,p.a.post("/reader/api/0/edit-tag?".concat(t.map((function(e){return"i=".concat(e)})).join("&")),{a:"user/-/state/com.google/read"});case 5:return this.recentlyReadItems=[].concat(Object(a.a)(t.map((function(e){return n.loadedItems[e]}))),Object(a.a)(this.recentlyReadItems||[])).slice(0,42),e.next=8,localStorage.setItem("recentlyReadItems",JSON.stringify(this.recentlyReadItems));case 8:return e.next=10,this.removeItems(t,"randomItems");case 10:return e.abrupt("return",!0);case 13:return e.prev=13,e.t0=e.catch(0),console.warn("RootStore.markItemsAsRead error:",e.t0),Object(m.c)("mark item as read error: ".concat(e.t0)),e.abrupt("return",!1);case 18:case"end":return e.stop()}}),e,this,[[0,13]])}))},{key:"removeItems",value:c.a.mark((function e(t,n){var r,a,o,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=Object(s.a)(this.folders||[]),e.prev=1,r.s();case 3:if((a=r.n()).done){e.next=11;break}if(i=a.value,!(null===(o=i[n])||void 0===o?void 0:o.some((function(e){return t.includes(e.id)})))){e.next=9;break}return i[n]=i[n].filter((function(e){return!t.includes(e.id)})),e.next=9,localStorage.setItem("".concat(n,":").concat(i.id),JSON.stringify(i[n]));case 9:e.next=3;break;case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),r.e(e.t0);case 16:return e.prev=16,r.f(),e.finish(16);case 19:case"end":return e.stop()}}),e,this,[[1,13,16,19]])}))},{key:"loadedItems",get:function(){var e,t={},n=Object(s.a)(this.recentlyReadItems||[]);try{for(n.s();!(e=n.n()).done;){var r=e.value;t[r.id]=r}}catch(d){n.e(d)}finally{n.f()}var a,o=Object(s.a)(this.folders||[]);try{for(o.s();!(a=o.n()).done;){var i,c=a.value,u=Object(s.a)(c.randomItems||[]);try{for(u.s();!(i=u.n()).done;){var l=i.value;t[l.id]=l}}catch(d){u.e(d)}finally{u.f()}}}catch(d){o.e(d)}finally{o.f()}return t}}]),e}(),h=b.a.createContext(null);function j(){return b.a.useContext(h)}}},[[166,1,2]]]);
//# sourceMappingURL=main.f13f0874.chunk.js.map