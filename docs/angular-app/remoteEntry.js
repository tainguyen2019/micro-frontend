var R={3849:(o,v,l)=>{var d={"./web-component":()=>l.e(780).then(()=>()=>l(5780))},m=(s,b)=>(l.R=b,b=l.o(d,s)?d[s]():Promise.resolve().then(()=>{throw new Error('Module "'+s+'" does not exist in container.')}),l.R=void 0,b),h=(s,b)=>{if(l.S){var p="default",w=l.S[p];if(w&&w!==s)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return l.S[p]=s,l.I(p,b)}};l.d(v,{get:()=>m,init:()=>h})}},$={};function n(o){var v=$[o];if(void 0!==v)return v.exports;var l=$[o]={exports:{}};return R[o](l,l.exports,n),l.exports}n.m=R,n.c=$,n.d=(o,v)=>{for(var l in v)n.o(v,l)&&!n.o(o,l)&&Object.defineProperty(o,l,{enumerable:!0,get:v[l]})},n.f={},n.e=o=>Promise.all(Object.keys(n.f).reduce((v,l)=>(n.f[l](o,v),v),[])),n.u=o=>o+"."+{203:"44d9d85120c0cc2d",403:"277f86ef58e44ac7",581:"431827e836a48ae5",584:"694ebc1fea9a917e",659:"b28c1533274e25e9",780:"be94197e0b70c376",784:"aed6c80990d34f79",962:"ee46bdba690c1cad"}[o]+".js",n.miniCssF=o=>{},n.o=(o,v)=>Object.prototype.hasOwnProperty.call(o,v),(()=>{var o={},v="remoteApp:";n.l=(l,d,m,h)=>{if(o[l])o[l].push(d);else{var s,b;if(void 0!==m)for(var p=document.getElementsByTagName("script"),w=0;w<p.length;w++){var c=p[w];if(c.getAttribute("src")==l||c.getAttribute("data-webpack")==v+m){s=c;break}}s||(b=!0,(s=document.createElement("script")).type="module",s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",v+m),s.src=n.tu(l)),o[l]=[d];var S=(E,P)=>{s.onerror=s.onload=null,clearTimeout(y);var j=o[l];if(delete o[l],s.parentNode&&s.parentNode.removeChild(s),j&&j.forEach(g=>g(P)),E)return E(P)},y=setTimeout(S.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=S.bind(null,s.onerror),s.onload=S.bind(null,s.onload),b&&document.head.appendChild(s)}}})(),n.r=o=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},n.j=674,(()=>{n.S={};var o={},v={};n.I=(l,d)=>{d||(d=[]);var m=v[l];if(m||(m=v[l]={}),!(d.indexOf(m)>=0)){if(d.push(m),o[l])return o[l];n.o(n.S,l)||(n.S[l]={});var h=n.S[l],b="remoteApp",p=(S,y,E,P)=>{var j=h[S]=h[S]||{},g=j[y];(!g||!g.loaded&&(!P!=!g.eager?P:b>g.from))&&(j[y]={get:E,from:b,eager:!!P})},c=[];return"default"===l&&(p("@angular/common/http","16.2.0",()=>n.e(962).then(()=>()=>n(6962))),p("@angular/common","16.2.0",()=>n.e(584).then(()=>()=>n(9584))),p("@angular/core","16.2.0",()=>n.e(659).then(()=>()=>n(4659))),p("@angular/router","16.2.0",()=>n.e(403).then(()=>()=>n(5403)))),o[l]=c.length?Promise.all(c).then(()=>o[l]=1):1}}})(),(()=>{var o;n.tt=()=>(void 0===o&&(o={createScriptURL:v=>v},typeof trustedTypes<"u"&&trustedTypes.createPolicy&&(o=trustedTypes.createPolicy("angular#bundler",o))),o)})(),n.tu=o=>n.tt().createScriptURL(o),(()=>{var o;if("string"==typeof import.meta.url&&(o=import.meta.url),!o)throw new Error("Automatic publicPath is not supported in this browser");o=o.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=o})(),(()=>{var o=e=>{var t=a=>a.split(".").map(i=>+i==i?+i:i),r=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),u=r[1]?t(r[1]):[];return r[2]&&(u.length++,u.push.apply(u,t(r[2]))),r[3]&&(u.push([]),u.push.apply(u,t(r[3]))),u},l=e=>{var t=e[0],r="";if(1===e.length)return"*";if(t+.5){r+=0==t?">=":-1==t?"<":1==t?"^":2==t?"~":t>0?"=":"!=";for(var u=1,a=1;a<e.length;a++)u--,r+="u"==(typeof(f=e[a]))[0]?"-":(u>0?".":"")+(u=2,f);return r}var i=[];for(a=1;a<e.length;a++){var f=e[a];i.push(0===f?"not("+x()+")":1===f?"("+x()+" || "+x()+")":2===f?i.pop()+" "+i.pop():l(f))}return x();function x(){return i.pop().replace(/^\((.+)\)$/,"$1")}},d=(e,t)=>{if(0 in e){t=o(t);var r=e[0],u=r<0;u&&(r=-r-1);for(var a=0,i=1,f=!0;;i++,a++){var x,C,O=i<e.length?(typeof e[i])[0]:"";if(a>=t.length||"o"==(C=(typeof(x=t[a]))[0]))return!f||("u"==O?i>r&&!u:""==O!=u);if("u"==C){if(!f||"u"!=O)return!1}else if(f)if(O==C)if(i<=r){if(x!=e[i])return!1}else{if(u?x>e[i]:x<e[i])return!1;x!=e[i]&&(f=!1)}else if("s"!=O&&"n"!=O){if(u||i<=r)return!1;f=!1,i--}else{if(i<=r||C<O!=u)return!1;f=!1}else"s"!=O&&"n"!=O&&(f=!1,i--)}}var L=[],A=L.pop.bind(L);for(a=1;a<e.length;a++){var V=e[a];L.push(1==V?A()|A():2==V?A()&A():V?d(V,t):!A())}return!!A()},p=(e,i,r,u)=>{var a=u?(e=>Object.keys(e).reduce((t,r)=>(e[r].eager&&(t[r]=e[r]),t),{}))(e[i]):e[i];return(i=Object.keys(a).reduce((f,x)=>!d(r,x)||f&&!((e,t)=>{e=o(e),t=o(t);for(var r=0;;){if(r>=e.length)return r<t.length&&"u"!=(typeof t[r])[0];var u=e[r],a=(typeof u)[0];if(r>=t.length)return"u"==a;var i=t[r],f=(typeof i)[0];if(a!=f)return"o"==a&&"n"==f||"s"==f||"u"==a;if("o"!=a&&"u"!=a&&u!=i)return u<i;r++}})(f,x)?f:x,0))&&a[i]},y=e=>{throw new Error(e)},T=(e=>function(t,r,u,a,i){var f=n.I(t);return f&&f.then&&!u?f.then(e.bind(e,t,n.S[t],r,!1,a,i)):e(t,n.S[t],r,u,a,i)})((e,t,r,u,a,i)=>{if(!((e,t)=>e&&n.o(e,t))(t,r))return((e,t,r)=>r?r():((e,t)=>y("Shared module "+t+" doesn't exist in shared scope "+e))(e,t))(e,r,i);var f=p(t,r,a,u);return f?(e=>(e.loaded=1,e.get()))(f):i?i():void y(((e,t,r,u,a)=>{var i=e[r];return"No satisfying version ("+l(u)+")"+(a?" for eager consumption":"")+" of shared module "+r+" found in shared scope "+t+".\nAvailable versions: "+Object.keys(i).map(f=>f+" from "+i[f].from).join(", ")})(t,e,r,a,u))}),M={},D={7034:()=>T("default","@angular/common/http",!1,[1,16,2,0],()=>n.e(581).then(()=>()=>n(6962))),8324:()=>T("default","@angular/common",!1,[1,16,2,0],()=>n.e(203).then(()=>()=>n(9584))),8698:()=>T("default","@angular/core",!1,[1,16,2,0],()=>n.e(659).then(()=>()=>n(4659))),9592:()=>T("default","@angular/router",!1,[1,16,2,0],()=>n.e(784).then(()=>()=>n(5403)))},U={403:[7034,8324,8698],584:[8698],780:[7034,8324,8698,9592],962:[8324,8698]},z={};n.f.consumes=(e,t)=>{n.o(U,e)&&U[e].forEach(r=>{if(n.o(M,r))return t.push(M[r]);if(!z[r]){var u=f=>{M[r]=0,n.m[r]=x=>{delete n.c[r],x.exports=f()}};z[r]=!0;var a=f=>{delete M[r],n.m[r]=x=>{throw delete n.c[r],f}};try{var i=D[r]();i.then?t.push(M[r]=i.then(u).catch(a)):u(i)}catch(f){a(f)}}})}})(),(()=>{var o={674:0};n.f.j=(d,m)=>{var h=n.o(o,d)?o[d]:void 0;if(0!==h)if(h)m.push(h[2]);else{var s=new Promise((c,S)=>h=o[d]=[c,S]);m.push(h[2]=s);var b=n.p+n.u(d),p=new Error;n.l(b,c=>{if(n.o(o,d)&&(0!==(h=o[d])&&(o[d]=void 0),h)){var S=c&&("load"===c.type?"missing":c.type),y=c&&c.target&&c.target.src;p.message="Loading chunk "+d+" failed.\n("+S+": "+y+")",p.name="ChunkLoadError",p.type=S,p.request=y,h[1](p)}},"chunk-"+d,d)}};var v=(d,m)=>{var p,w,[h,s,b]=m,c=0;if(h.some(y=>0!==o[y])){for(p in s)n.o(s,p)&&(n.m[p]=s[p]);b&&b(n)}for(d&&d(m);c<h.length;c++)n.o(o,w=h[c])&&o[w]&&o[w][0](),o[w]=0},l=self.webpackChunkremoteApp=self.webpackChunkremoteApp||[];l.forEach(v.bind(null,0)),l.push=v.bind(null,l.push.bind(l))})();var B=n(3849),G=B.get,H=B.init;export{G as get,H as init};