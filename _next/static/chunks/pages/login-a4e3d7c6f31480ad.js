(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[459],{6429:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return e(4759)}])},4759:function(n,t,e){"use strict";e.r(t);var r=e(1010),u=e(1309),i=e(414),o=e(5893),l=e(8949),a=e(828),c=e(1163),s=e(7294),d=e(9055),f=e(2253),v=e(5791),h=e(3437);t.default=(0,a.Pi)(function(){var n=(0,c.useRouter)(),t=(0,v.Yh)(),e=(0,u._)((0,f.dQ)(),2),a=e[0],g=e[1],m=(0,u._)((0,s.useState)(null),2),p=m[0],_=m[1],b=(0,u._)((0,s.useState)(null),2),y=b[0],w=b[1],S=(0,s.useCallback)(function(){(0,l.z)((0,r._)(function(){var e,r,u;return(0,i.Jh)(this,function(i){switch(i.label){case 0:return i.trys.push([0,2,3,4]),t.isSubmitting=!0,[4,h.Z.post("/accounts/ClientLogin",{Email:p,Passwd:y})];case 1:if(e=i.sent(),r={},e.split("\n").filter(function(n){return n}).forEach(function(n){var t=n.indexOf("=");t>0?r[n.substr(0,t)]=n.substr(t+1):r[n]=!0}),!r.Auth)throw Error("account or password incorrect");return g(r.Auth),n.back(),[3,4];case 2:return console.warn("LoginPage.login error:",u=i.sent()),(0,d.Am)("login failed: ".concat(u)),[3,4];case 3:return t.isSubmitting=!1,[7];case 4:return[2]}})}))},[y,t,n,g,p]);return(0,o.jsxs)("div",{style:{margin:16,display:"grid",gridTemplateColumns:"auto 1fr",rowGap:16,columnGap:16},children:[(0,o.jsx)("div",{children:"account"}),(0,o.jsx)("input",{value:null!=p?p:"",onChange:function(n){return _(n.target.value||null)}}),(0,o.jsx)("div",{children:"password"}),(0,o.jsx)("input",{type:"password",value:null!=y?y:"",onChange:function(n){return w(n.target.value||null)}}),(0,o.jsx)("button",{onClick:S,disabled:t.isSubmitting,style:{gridColumn:"1 / span 2",padding:8,fontSize:14},children:"login"}),(0,o.jsx)("div",{style:{gridColumn:"1 / span 2"},children:null==a?void 0:a.length})]})})},2253:function(n,t,e){"use strict";e.d(t,{B1:function(){return C},K4:function(){return S},WX:function(){return w},YM:function(){return M},dQ:function(){return m},fv:function(){return _},jx:function(){return b},tW:function(){return p}});var r=e(1010),u=e(8564),i=e(2267),o=e(567),l=e(4932),a=e(1309),c=e(4586),s=e(414),d=e(7294),f=e(8767),v=e(906),h=e(3437),g=e(2070),m=(0,v.Z)("token"),p=(0,v.Z)("recentlyReadItems");function _(n){return(0,d.useMemo)(function(){return(0,v.Z)("randomItems:".concat(n))},[n])}function b(){var n=(0,a._)(m(),1)[0],t=(0,f.useQuery)("/reader/api/0/tag/list?output=json",{enabled:!!n,select:function(n){return n.tags.filter(function(n){return/\/label\//.test(n.id)})}});return(0,g.p)(t.error),(0,l._)((0,o._)({},t),{folders:t.data})}function y(){var n=(0,a._)(m(),1)[0],t=(0,f.useQuery)("/reader/api/0/unread-count?output=json",{enabled:!!n,select:function(n){return n.unreadcounts}});return(0,l._)((0,o._)({},t),{unreadCounts:t.data})}function w(n){var t,e,r,u=null===(t=n.id)||void 0===t?void 0:t.replace(/\d+/,"-"),i=y();return(0,l._)((0,o._)({},i),{unreadsCount:null===(e=null===(r=i.unreadCounts)||void 0===r?void 0:r.find(function(n){return n.id===u}))||void 0===e?void 0:e.count})}function S(n){var t,e=y().unreadCounts;return null===(t=null==e?void 0:e.find(function(t){return t.id===n}))||void 0===t?void 0:t.count}function C(n){var t,e,u,i=n.folderId,d=n.isReloading,v=(t=y().unreadCounts,((e=(0,a._)(m(),1)[0],u=(0,f.useQuery)("/reader/api/0/subscription/list?output=json",{enabled:!!e,select:function(n){return n.subscriptions.sort(function(n,t){return n.id.localeCompare(t.id)})}}),(0,l._)((0,o._)({},u),{allSubscriptions:u.data})).allSubscriptions||[]).filter(function(n){var e,r;return(null===(e=n.categories)||void 0===e?void 0:e.some(function(n){return n.id===i}))&&(null===(r=null==t?void 0:t.find(function(t){return t.id===n.id}))||void 0===r?void 0:r.count)>0})),g=y().unreadCounts,p=_(i),b=(0,a._)(p([]),2),w=b[0],S=b[1],C=(0,f.useQuery)(["randomItems",i,{localRandomItems:w}],(0,r._)(function(){var n,t,e,u,i,f,m,p,_,b,y,C,M,x,k,j,I,E,P;return(0,s.Jh)(this,function(Q){switch(Q.label){case 0:var R;if(w.length>2)return[2,w];for(n=new Set(w.map(function(n){return n.feedId})),(t=v.filter(function(t){return(null==t?void 0:t.id)&&!n.has(t.id)})).length<7&&(t=v.filter(function(n){return null==n?void 0:n.id})),e=[],u=Math.log(1.7),i=0;e.length<7&&t.length>0;i=(i+1)%t.length)m=t[i],p=(Math.abs(Math.log(((null===(f=null==g?void 0:g.find(function(n){return n.id===m.id}))||void 0===f?void 0:f.count)||0)+1)/u-4)+1)/t.length,!e.includes(m)&&Math.random()<p&&(e.push(m),t.splice(i,1));return u=Math.log(t.length+1),[4,Promise.all(e.filter(function(n){return null==n?void 0:n.id}).map((R=(0,r._)(function(n){var t,e,i,d,f;return(0,s.Jh)(this,function(v){switch(v.label){case 0:var m;return e=Math.ceil(Math.log(null===(t=null==g?void 0:g.find(function(t){return t.id===n.id}))||void 0===t?void 0:t.count)/u)+1,[4,Promise.all(["o","n"].map((m=(0,r._)(function(t){return(0,s.Jh)(this,function(r){switch(r.label){case 0:return[4,h.Z.get("/reader/api/0/stream/items/ids",{output:"json",s:n.id,xt:"user/-/state/com.google/read",r:t,n:e})];case 1:return[2,r.sent().itemRefs]}})}),function(n){return m.apply(this,arguments)})))];case 1:return d=(i=a._.apply(void 0,[v.sent(),2]))[0],f=i[1],[2,(0,c._)(d).concat((0,c._)(f)).map(function(t){return(0,l._)((0,o._)({},t),{feedId:n.id})})]}})}),function(n){return R.apply(this,arguments)})))];case 1:_=Q.sent(),b=d?[]:(0,c._)(w),y=!0,C=!1,M=void 0;try{for(x=_[Symbol.iterator]();!(y=(k=x.next()).done);y=!0)for(j=k.value;j.length>0;)if(I=Math.floor(Math.random()*j.length),E=(0,a._)(j.splice(I,1),1)[0],!b.some(function(n){return n.id===E.id})){b.push(E);break}}catch(n){C=!0,M=n}finally{try{y||null==x.return||x.return()}finally{if(C)throw M}}return S(P=b.filter(function(n,t,e){return e.findIndex(function(t){return t.id===n.id})===t})),[2,P]}})}),{enabled:(null==v?void 0:v.length)>0});return(0,l._)((0,o._)({},C),{randomItems:C.data})}function M(n){var t,e=(t=n.id,(0,d.useMemo)(function(){return(0,v.Z)("item:".concat(t))},[t])),r=(0,a._)(e(),2),u=r[0],i=r[1],c=!u&&!n.crawlTimeMsec,s=(0,f.useQuery)("/reader/api/0/stream/items/contents?output=json&i=".concat(n.id),{enabled:c,select:function(n){return n.items[0]}}),h=u||(n.crawlTimeMsec?n:(0,l._)((0,o._)({},s.data),{id:n.id}));if(!u&&h.crawlTimeMsec&&(i(h),localStorage.length>222))for(var g=7;g>=0;){var m=localStorage.key(Math.random()*localStorage.length);(null==m?void 0:m.startsWith("item:"))&&(console.log("xxx",{key:m}),localStorage.removeItem(m),g--)}return(0,l._)((0,o._)({},s),{item:h})}new(function(){function n(){(0,u._)(this,n)}return(0,i._)(n,[{key:"get",value:function(n){return localStorage.getItem(n)}},{key:"delete",value:function(n){localStorage.removeItem(n)}},{key:"set",value:function(n,t){localStorage.setItem(n,t)}}]),n}())},2070:function(n,t,e){"use strict";e.d(t,{p:function(){return i}});var r=e(7294),u=e(9055);function i(n){var t,e=(t=(0,r.useRef)(),(0,r.useEffect)(function(){t.current=n},[n]),t.current);(0,r.useEffect)(function(){n&&!e&&(0,u.Am)(String(n))},[n,e])}}},function(n){n.O(0,[723,774,888,179],function(){return n(n.s=6429)}),_N_E=n.O()}]);