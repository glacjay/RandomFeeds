(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(6616)}])},6616:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return s}});var r=t(1309),u=t(5893),i=t(1664),o=t.n(i),a=t(7294),l=t(8767),c=t(2253),d=t(2070);function s(){return(0,r._)((0,c.dQ)(),1)[0]?(0,u.jsxs)("div",{className:"flex-column",style:{minHeight:"100vh"},children:[(0,u.jsx)(f,{}),(0,u.jsx)(v,{}),(0,u.jsx)(g,{})]}):(0,u.jsx)(o(),{href:"/login",children:"Login"})}function f(){var n=(0,r._)((0,c.dQ)(),1)[0],e=(0,l.useQuery)("/reader/api/0/unread-count?output=json",{enabled:!!n}),t=e.data,i=e.error;(0,d.p)(i);var o=null==t?void 0:t.bq_total_unreads;return(0,u.jsxs)("div",{style:{margin:"4px 4px 0"},children:["未读：",o]})}function v(){var n=(0,c.jx)(),e=n.folders;return n.isFetching?(0,u.jsx)("div",{children:"loading..."}):(0,u.jsx)(a.Fragment,{children:null==e?void 0:e.map(function(n){return(0,u.jsx)(h,{folder:n},n.id)})})}function h(n){var e,t=n.folder,r=(0,c.WX)(t),i=r.unreadsCount,a=r.error;return(0,d.p)(a),(0,u.jsxs)(o(),{href:"/folder?id=".concat(t.id),style:{margin:"4px 4px 0",border:"1px solid black",borderRadius:4,padding:8},children:[null===(e=t.id)||void 0===e?void 0:e.replace(/.*\//g,"")," (",i,")"]})}function g(){var n=(0,r._)((0,c.tW)(),1)[0];return(0,u.jsx)(a.Fragment,{children:(null==n?void 0:n.length)>0&&(0,u.jsxs)(a.Fragment,{children:[(0,u.jsx)("div",{style:{flex:1,minHeight:16}}),(0,u.jsxs)(o(),{href:"/recently",style:{margin:"4px 4px",border:"1px solid black",borderRadius:4,padding:8},children:["最近已读文章 (",n.length,")"]})]})})}},2253:function(n,e,t){"use strict";t.d(e,{B1:function(){return w},K4:function(){return S},WX:function(){return x},YM:function(){return M},dQ:function(){return p},fv:function(){return _},jx:function(){return b},tW:function(){return m}});var r=t(1010),u=t(8564),i=t(2267),o=t(567),a=t(4932),l=t(1309),c=t(4586),d=t(414),s=t(7294),f=t(8767),v=t(906),h=t(3437),g=t(2070),p=(0,v.Z)("token"),m=(0,v.Z)("recentlyReadItems");function _(n){return(0,s.useMemo)(function(){return(0,v.Z)("randomItems:".concat(n))},[n])}function b(){var n=(0,l._)(p(),1)[0],e=(0,f.useQuery)("/reader/api/0/tag/list?output=json",{enabled:!!n,select:function(n){return n.tags.filter(function(n){return/\/label\//.test(n.id)})}});return(0,g.p)(e.error),(0,a._)((0,o._)({},e),{folders:e.data})}function y(){var n=(0,l._)(p(),1)[0],e=(0,f.useQuery)("/reader/api/0/unread-count?output=json",{enabled:!!n,select:function(n){return n.unreadcounts}});return(0,a._)((0,o._)({},e),{unreadCounts:e.data})}function x(n){var e,t,r,u=null===(e=n.id)||void 0===e?void 0:e.replace(/\d+/,"-"),i=y();return(0,a._)((0,o._)({},i),{unreadsCount:null===(t=null===(r=i.unreadCounts)||void 0===r?void 0:r.find(function(n){return n.id===u}))||void 0===t?void 0:t.count})}function S(n){var e,t=y().unreadCounts;return null===(e=null==t?void 0:t.find(function(e){return e.id===n}))||void 0===e?void 0:e.count}function w(n){var e,t,u,i=n.folderId,s=n.isReloading,v=(e=y().unreadCounts,((t=(0,l._)(p(),1)[0],u=(0,f.useQuery)("/reader/api/0/subscription/list?output=json",{enabled:!!t,select:function(n){return n.subscriptions.sort(function(n,e){return n.id.localeCompare(e.id)})}}),(0,a._)((0,o._)({},u),{allSubscriptions:u.data})).allSubscriptions||[]).filter(function(n){var t,r;return(null===(t=n.categories)||void 0===t?void 0:t.some(function(n){return n.id===i}))&&(null===(r=null==e?void 0:e.find(function(e){return e.id===n.id}))||void 0===r?void 0:r.count)>0})),g=y().unreadCounts,m=_(i),b=(0,l._)(m([]),2),x=b[0],S=b[1],w=(0,f.useQuery)(["randomItems",i,{localRandomItems:x}],(0,r._)(function(){var n,e,t,u,i,f,p,m,_,b,y,w,M,k,I,E,C,N,Q,R,T,J,O,Z,W,F;return(0,d.Jh)(this,function(L){switch(L.label){case 0:var P;if(x.length>2)return[2,x];for(n=new Set(x.map(function(n){return n.feedId})),(e=v.filter(function(e){return(null==e?void 0:e.id)&&!n.has(e.id)})).length<7&&(e=v.filter(function(n){return null==n?void 0:n.id})),t=[],u=0;t.length<7&&e.length>0;u=(u+1)%e.length)f=e[u],p=(Math.abs(Math.log(((null===(i=null==g?void 0:g.find(function(n){return n.id===f.id}))||void 0===i?void 0:i.count)||0)+1)/j(500,12)-4)+1)/e.length,!t.includes(f)&&Math.random()<p&&(t.push(f),e.splice(u,1));return[4,Promise.all(t.filter(function(n){return null==n?void 0:n.id}).map((P=(0,r._)(function(n){var e,t,u,i,s;return(0,d.Jh)(this,function(f){switch(f.label){case 0:var v;return t=Math.ceil((null===(e=null==g?void 0:g.find(function(e){return e.id===n.id}))||void 0===e?void 0:e.count)/7),[4,Promise.all(["o","n"].map((v=(0,r._)(function(e){return(0,d.Jh)(this,function(r){switch(r.label){case 0:return[4,h.Z.get("/reader/api/0/stream/items/ids",{output:"json",s:n.id,xt:"user/-/state/com.google/read",r:e,n:t})];case 1:return[2,r.sent().itemRefs]}})}),function(n){return v.apply(this,arguments)})))];case 1:return i=(u=l._.apply(void 0,[f.sent(),2]))[0],s=u[1],[2,(0,c._)(i).concat((0,c._)(s)).map(function(e){return(0,a._)((0,o._)({},e),{feedId:n.id})})]}})}),function(n){return P.apply(this,arguments)})))];case 1:m=L.sent(),_=[],b=!0,y=!1,w=void 0;try{for(M=m[Symbol.iterator]();!(b=(k=M.next()).done);b=!0)for(Q=0,I=k.value,C=(null===(E=null==g?void 0:g.find(function(n){var e;return n.id===(null==I?void 0:null===(e=I[0])||void 0===e?void 0:e.feedId)}))||void 0===E?void 0:E.count)||0,N=Math.max(1,Math.floor(Math.log(C)/Math.log(j(400,2))));Q<N&&I.length>0;)R=Math.floor(Math.random()*I.length),T=(0,l._)(I.splice(R,1),1)[0],_.some(function(n){return n.id===T.id})||(_.push(T),Q+=1)}catch(n){y=!0,w=n}finally{try{b||null==M.return||M.return()}finally{if(y)throw w}}for(O=(J=(0,c._)(_)).length-1;O>0;O--)W=[J[Z=Math.floor(Math.random()*(O+1))],J[O]],J[O]=W[0],J[Z]=W[1];return S(F=(0,c._)(s?[]:(0,c._)(x)).concat((0,c._)(J)).filter(function(n,e,t){return t.findIndex(function(e){return e.id===n.id})===e})),[2,F]}})}),{enabled:(null==v?void 0:v.length)>0});return(0,a._)((0,o._)({},w),{randomItems:w.data})}function j(n,e){return Math.pow(Math.E,Math.log(n)/e)}function M(n){var e,t=(e=n.id,(0,s.useMemo)(function(){return(0,v.Z)("item:".concat(e))},[e])),r=(0,l._)(t(),2),u=r[0],i=r[1],c=!u&&!n.crawlTimeMsec,d=(0,f.useQuery)("/reader/api/0/stream/items/contents?output=json&i=".concat(n.id),{enabled:c,select:function(n){return n.items[0]}}),h=u||(n.crawlTimeMsec?n:(0,a._)((0,o._)({},d.data),{id:n.id}));if(!u&&h.crawlTimeMsec&&(i(h),localStorage.length>222))for(var g=7;g>=0;){var p=localStorage.key(Math.random()*localStorage.length);(null==p?void 0:p.startsWith("item:"))&&(localStorage.removeItem(p),g--)}return(0,a._)((0,o._)({},d),{item:h})}new(function(){function n(){(0,u._)(this,n)}return(0,i._)(n,[{key:"get",value:function(n){return localStorage.getItem(n)}},{key:"delete",value:function(n){localStorage.removeItem(n)}},{key:"set",value:function(n,e){localStorage.setItem(n,e)}}]),n}())},2070:function(n,e,t){"use strict";t.d(e,{p:function(){return i}});var r=t(7294),u=t(9055);function i(n){var e,t=(e=(0,r.useRef)(),(0,r.useEffect)(function(){e.current=n},[n]),e.current);(0,r.useEffect)(function(){n&&!t&&(0,u.Am)(String(n))},[n,t])}},906:function(n,e,t){"use strict";t.d(e,{Z:function(){return i}});var r=t(7294),u={};function i(n,e){if(void 0===e&&(e=void 0!==t.g&&t.g.localStorage?t.g.localStorage:"undefined"!=typeof globalThis&&globalThis.localStorage?globalThis.localStorage:"undefined"!=typeof window&&window.localStorage?window.localStorage:"undefined"!=typeof localStorage?localStorage:null),e){var i,o=(i=e,{get:function(n,e){var t=i.getItem(n);return null==t?"function"==typeof e?e():e:JSON.parse(t)},set:function(n,e){i.setItem(n,JSON.stringify(e))}});return function(e){var i,a,l,c,d,s,f,v,h,g,p,m,_,b,y;return i=o.get,a=o.set,l=(0,r.useRef)(null),d=(c=(0,r.useState)(function(){return i(n,e)}))[0],s=c[1],f="storage",v=function(e){if(e.key===n){var t=JSON.parse(e.newValue);d!==t&&s(t)}},void 0===h&&(h=t.g),void 0===g&&(g={}),p=(0,r.useRef)(),m=g.capture,_=g.passive,b=g.once,(0,r.useEffect)(function(){p.current=v},[v]),(0,r.useEffect)(function(){if(h&&h.addEventListener){var n=function(n){return p.current(n)},e={capture:m,passive:_,once:b};return h.addEventListener(f,n,e),function(){h.removeEventListener(f,n,e)}}},[f,h,m,_,b]),(0,r.useEffect)(function(){return l.current=(u[n]||(u[n]={callbacks:[],value:e}),u[n].callbacks.push(s),{deregister:function(){var e=u[n].callbacks,t=e.indexOf(s);t>-1&&e.splice(t,1)},emit:function(e){u[n].value!==e&&(u[n].value=e,u[n].callbacks.forEach(function(n){s!==n&&n(e)}))}}),function(){l.current.deregister()}},[e,n]),y=(0,r.useCallback)(function(e){var t="function"==typeof e?e(d):e;a(n,t),s(t),l.current.emit(e)},[d,a,n]),[d,y]}}return r.useState}}},function(n){n.O(0,[664,774,888,179],function(){return n(n.s=5557)}),_N_E=n.O()}]);