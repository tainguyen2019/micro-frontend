(self.webpackChunkremoteApp=self.webpackChunkremoteApp||[]).push([[581],{9876:(b,m,c)=>{c.d(m,{of:()=>a});var y=c(1721),E=c(4752);function a(...p){const h=(0,y.lI)(p);return(0,E.H)(p,h)}},4935:(b,m,c)=>{c.d(m,{H:()=>a});var y=c(8367),E=c(9746);function a(p,h){return(0,E.T)(h)?(0,y.Z)(p,h,1):(0,y.Z)(p,1)}},4370:(b,m,c)=>{c.d(m,{U:()=>a});var y=c(4427),E=c(2287);function a(p){return(0,y.N)((h,C)=>{let w=!1;h.subscribe((0,E._)(C,P=>{w=!0,C.next(P)},()=>{w||C.next(p),C.complete()}))})}},6455:(b,m,c)=>{c.d(m,{p:()=>a});var y=c(4427),E=c(2287);function a(p,h){return(0,y.N)((C,w)=>{let P=0;C.subscribe((0,E._)(w,u=>p.call(h,u,P++)&&w.next(u)))})}},8427:(b,m,c)=>{c.d(m,{j:()=>E});var y=c(4427);function E(a){return(0,y.N)((p,h)=>{try{p.subscribe(h)}finally{h.add(a)}})}},7307:(b,m,c)=>{c.d(m,{$:()=>w});var y=c(2431),E=c(6455),a=c(6582),p=c(4370),h=c(7917),C=c(7032);function w(P,u){const H=arguments.length>=2;return N=>N.pipe(P?(0,E.p)((F,B)=>P(F,B,N)):C.D,(0,a.s)(1),H?(0,p.U)(u):(0,h.v)(()=>new y.G))}},6582:(b,m,c)=>{c.d(m,{s:()=>p});var y=c(5328),E=c(4427),a=c(2287);function p(h){return h<=0?()=>y.w:(0,E.N)((C,w)=>{let P=0;C.subscribe((0,a._)(w,u=>{++P<=h&&(w.next(u),h<=P&&w.complete())}))})}},5204:(b,m,c)=>{c.d(m,{M:()=>h});var y=c(9746),E=c(4427),a=c(2287),p=c(7032);function h(C,w,P){const u=(0,y.T)(C)||w||P?{next:C,error:w,complete:P}:C;return u?(0,E.N)((H,N)=>{var F;null===(F=u.subscribe)||void 0===F||F.call(u);let B=!0;H.subscribe((0,a._)(N,R=>{var D;null===(D=u.next)||void 0===D||D.call(u,R),N.next(R)},()=>{var R;B=!1,null===(R=u.complete)||void 0===R||R.call(u),N.complete()},R=>{var D;B=!1,null===(D=u.error)||void 0===D||D.call(u,R),N.error(R)},()=>{var R,D;B&&(null===(R=u.unsubscribe)||void 0===R||R.call(u)),null===(D=u.finalize)||void 0===D||D.call(u)}))}):p.D}},7917:(b,m,c)=>{c.d(m,{v:()=>p});var y=c(2431),E=c(4427),a=c(2287);function p(C=h){return(0,E.N)((w,P)=>{let u=!1;w.subscribe((0,a._)(P,H=>{u=!0,P.next(H)},()=>u?P.complete():P.error(C())))})}function h(){return new y.G}},2431:(b,m,c)=>{c.d(m,{G:()=>E});const E=(0,c(8168).L)(a=>function(){a(this),this.name="EmptyError",this.message="no elements in sequence"})},6962:(b,m,c)=>{function y(n,t,e,s,r,i,o){try{var d=n[i](o),l=d.value}catch(T){return void e(T)}d.done?t(l):Promise.resolve(l).then(s,r)}function E(n){return function(){var t=this,e=arguments;return new Promise(function(s,r){var i=n.apply(t,e);function o(l){y(i,s,r,o,d,"next",l)}function d(l){y(i,s,r,o,d,"throw",l)}o(void 0)})}}c.r(m),c.d(m,{FetchBackend:()=>se,HTTP_INTERCEPTORS:()=>oe,HttpBackend:()=>z,HttpClient:()=>Te,HttpClientJsonpModule:()=>ut,HttpClientModule:()=>dt,HttpClientXsrfModule:()=>lt,HttpContext:()=>ye,HttpContextToken:()=>Be,HttpErrorResponse:()=>k,HttpEventType:()=>A,HttpFeatureKind:()=>U,HttpHandler:()=>D,HttpHeaderResponse:()=>J,HttpHeaders:()=>_,HttpParams:()=>j,HttpRequest:()=>K,HttpResponse:()=>L,HttpResponseBase:()=>Z,HttpUrlEncodingCodec:()=>fe,HttpXhrBackend:()=>ce,HttpXsrfTokenExtractor:()=>q,JsonpClientBackend:()=>ae,JsonpInterceptor:()=>st,provideHttpClient:()=>xe,withFetch:()=>ct,withInterceptors:()=>it,withInterceptorsFromDi:()=>Ne,withJsonpSupport:()=>Le,withNoXsrfProtection:()=>je,withRequestsMadeViaParent:()=>at,withXsrfConfiguration:()=>le,\u0275HttpInterceptingHandler:()=>Y,\u0275HttpInterceptorHandler:()=>Y,\u0275withHttpTransferCache:()=>Et});var a=c(8698),p=c(9876),h=c(718),C=c(4752),w=c(4935),P=c(6455),u=c(9703),H=c(8427),N=c(2703),F=c(5204),B=c(7307),R=c(8324);class D{}class z{}class _{constructor(t){this.normalizedNames=new Map,this.lazyUpdate=null,t?"string"==typeof t?this.lazyInit=()=>{this.headers=new Map,t.split("\n").forEach(e=>{const s=e.indexOf(":");if(s>0){const r=e.slice(0,s),i=r.toLowerCase(),o=e.slice(s+1).trim();this.maybeSetNormalizedName(r,i),this.headers.has(i)?this.headers.get(i).push(o):this.headers.set(i,[o])}})}:typeof Headers<"u"&&t instanceof Headers?(this.headers=new Map,t.forEach((e,s)=>{this.setHeaderEntries(s,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(t).forEach(([e,s])=>{this.setHeaderEntries(e,s)})}:this.headers=new Map}has(t){return this.init(),this.headers.has(t.toLowerCase())}get(t){this.init();const e=this.headers.get(t.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(t){return this.init(),this.headers.get(t.toLowerCase())||null}append(t,e){return this.clone({name:t,value:e,op:"a"})}set(t,e){return this.clone({name:t,value:e,op:"s"})}delete(t,e){return this.clone({name:t,value:e,op:"d"})}maybeSetNormalizedName(t,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,t)}init(){this.lazyInit&&(this.lazyInit instanceof _?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(t=>this.applyUpdate(t)),this.lazyUpdate=null))}copyFrom(t){t.init(),Array.from(t.headers.keys()).forEach(e=>{this.headers.set(e,t.headers.get(e)),this.normalizedNames.set(e,t.normalizedNames.get(e))})}clone(t){const e=new _;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof _?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([t]),e}applyUpdate(t){const e=t.name.toLowerCase();switch(t.op){case"a":case"s":let s=t.value;if("string"==typeof s&&(s=[s]),0===s.length)return;this.maybeSetNormalizedName(t.name,e);const r=("a"===t.op?this.headers.get(e):void 0)||[];r.push(...s),this.headers.set(e,r);break;case"d":const i=t.value;if(i){let o=this.headers.get(e);if(!o)return;o=o.filter(d=>-1===i.indexOf(d)),0===o.length?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,o)}else this.headers.delete(e),this.normalizedNames.delete(e)}}setHeaderEntries(t,e){const s=(Array.isArray(e)?e:[e]).map(i=>i.toString()),r=t.toLowerCase();this.headers.set(r,s),this.maybeSetNormalizedName(t,r)}forEach(t){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>t(this.normalizedNames.get(e),this.headers.get(e)))}}class fe{encodeKey(t){return pe(t)}encodeValue(t){return pe(t)}decodeKey(t){return decodeURIComponent(t)}decodeValue(t){return decodeURIComponent(t)}}const He=/%(\d[a-f0-9])/gi,Fe={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function pe(n){return encodeURIComponent(n).replace(He,(t,e)=>Fe[e]??t)}function G(n){return`${n}`}class j{constructor(t={}){if(this.updates=null,this.cloneFrom=null,this.encoder=t.encoder||new fe,t.fromString){if(t.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=function Ue(n,t){const e=new Map;return n.length>0&&n.replace(/^\?/,"").split("&").forEach(r=>{const i=r.indexOf("="),[o,d]=-1==i?[t.decodeKey(r),""]:[t.decodeKey(r.slice(0,i)),t.decodeValue(r.slice(i+1))],l=e.get(o)||[];l.push(d),e.set(o,l)}),e}(t.fromString,this.encoder)}else t.fromObject?(this.map=new Map,Object.keys(t.fromObject).forEach(e=>{const s=t.fromObject[e],r=Array.isArray(s)?s.map(G):[G(s)];this.map.set(e,r)})):this.map=null}has(t){return this.init(),this.map.has(t)}get(t){this.init();const e=this.map.get(t);return e?e[0]:null}getAll(t){return this.init(),this.map.get(t)||null}keys(){return this.init(),Array.from(this.map.keys())}append(t,e){return this.clone({param:t,value:e,op:"a"})}appendAll(t){const e=[];return Object.keys(t).forEach(s=>{const r=t[s];Array.isArray(r)?r.forEach(i=>{e.push({param:s,value:i,op:"a"})}):e.push({param:s,value:r,op:"a"})}),this.clone(e)}set(t,e){return this.clone({param:t,value:e,op:"s"})}delete(t,e){return this.clone({param:t,value:e,op:"d"})}toString(){return this.init(),this.keys().map(t=>{const e=this.encoder.encodeKey(t);return this.map.get(t).map(s=>e+"="+this.encoder.encodeValue(s)).join("&")}).filter(t=>""!==t).join("&")}clone(t){const e=new j({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(t),e}init(){null===this.map&&(this.map=new Map),null!==this.cloneFrom&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(t=>this.map.set(t,this.cloneFrom.map.get(t))),this.updates.forEach(t=>{switch(t.op){case"a":case"s":const e=("a"===t.op?this.map.get(t.param):void 0)||[];e.push(G(t.value)),this.map.set(t.param,e);break;case"d":if(void 0===t.value){this.map.delete(t.param);break}{let s=this.map.get(t.param)||[];const r=s.indexOf(G(t.value));-1!==r&&s.splice(r,1),s.length>0?this.map.set(t.param,s):this.map.delete(t.param)}}}),this.cloneFrom=this.updates=null)}}class Be{constructor(t){this.defaultValue=t}}class ye{constructor(){this.map=new Map}set(t,e){return this.map.set(t,e),this}get(t){return this.map.has(t)||this.map.set(t,t.defaultValue()),this.map.get(t)}delete(t){return this.map.delete(t),this}has(t){return this.map.has(t)}keys(){return this.map.keys()}}function me(n){return typeof ArrayBuffer<"u"&&n instanceof ArrayBuffer}function Ee(n){return typeof Blob<"u"&&n instanceof Blob}function ge(n){return typeof FormData<"u"&&n instanceof FormData}class K{constructor(t,e,s,r){let i;if(this.url=e,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=t.toUpperCase(),function We(n){switch(n){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}(this.method)||r?(this.body=void 0!==s?s:null,i=r):i=s,i&&(this.reportProgress=!!i.reportProgress,this.withCredentials=!!i.withCredentials,i.responseType&&(this.responseType=i.responseType),i.headers&&(this.headers=i.headers),i.context&&(this.context=i.context),i.params&&(this.params=i.params)),this.headers||(this.headers=new _),this.context||(this.context=new ye),this.params){const o=this.params.toString();if(0===o.length)this.urlWithParams=e;else{const d=e.indexOf("?");this.urlWithParams=e+(-1===d?"?":d<e.length-1?"&":"")+o}}else this.params=new j,this.urlWithParams=e}serializeBody(){return null===this.body?null:me(this.body)||Ee(this.body)||ge(this.body)||function Ke(n){return typeof URLSearchParams<"u"&&n instanceof URLSearchParams}(this.body)||"string"==typeof this.body?this.body:this.body instanceof j?this.body.toString():"object"==typeof this.body||"boolean"==typeof this.body||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return null===this.body||ge(this.body)?null:Ee(this.body)?this.body.type||null:me(this.body)?null:"string"==typeof this.body?"text/plain":this.body instanceof j?"application/x-www-form-urlencoded;charset=UTF-8":"object"==typeof this.body||"number"==typeof this.body||"boolean"==typeof this.body?"application/json":null}clone(t={}){const e=t.method||this.method,s=t.url||this.url,r=t.responseType||this.responseType,i=void 0!==t.body?t.body:this.body,o=void 0!==t.withCredentials?t.withCredentials:this.withCredentials,d=void 0!==t.reportProgress?t.reportProgress:this.reportProgress;let l=t.headers||this.headers,T=t.params||this.params;const x=t.context??this.context;return void 0!==t.setHeaders&&(l=Object.keys(t.setHeaders).reduce((v,O)=>v.set(O,t.setHeaders[O]),l)),t.setParams&&(T=Object.keys(t.setParams).reduce((v,O)=>v.set(O,t.setParams[O]),T)),new K(e,s,i,{params:T,headers:l,context:x,reportProgress:d,responseType:r,withCredentials:o})}}var A=function(n){return n[n.Sent=0]="Sent",n[n.UploadProgress=1]="UploadProgress",n[n.ResponseHeader=2]="ResponseHeader",n[n.DownloadProgress=3]="DownloadProgress",n[n.Response=4]="Response",n[n.User=5]="User",n}(A||{});class Z{constructor(t,e=200,s="OK"){this.headers=t.headers||new _,this.status=void 0!==t.status?t.status:e,this.statusText=t.statusText||s,this.url=t.url||null,this.ok=this.status>=200&&this.status<300}}class J extends Z{constructor(t={}){super(t),this.type=A.ResponseHeader}clone(t={}){return new J({headers:t.headers||this.headers,status:void 0!==t.status?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}}class L extends Z{constructor(t={}){super(t),this.type=A.Response,this.body=void 0!==t.body?t.body:null}clone(t={}){return new L({body:void 0!==t.body?t.body:this.body,headers:t.headers||this.headers,status:void 0!==t.status?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}}class k extends Z{constructor(t){super(t,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.message=this.status>=200&&this.status<300?`Http failure during parsing for ${t.url||"(unknown url)"}`:`Http failure response for ${t.url||"(unknown url)"}: ${t.status} ${t.statusText}`,this.error=t.error||null}}function ne(n,t){return{body:t,headers:n.headers,context:n.context,observe:n.observe,params:n.params,reportProgress:n.reportProgress,responseType:n.responseType,withCredentials:n.withCredentials}}let Te=(()=>{class n{constructor(e){this.handler=e}request(e,s,r={}){let i;if(e instanceof K)i=e;else{let l,T;l=r.headers instanceof _?r.headers:new _(r.headers),r.params&&(T=r.params instanceof j?r.params:new j({fromObject:r.params})),i=new K(e,s,void 0!==r.body?r.body:null,{headers:l,context:r.context,params:T,reportProgress:r.reportProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials})}const o=(0,p.of)(i).pipe((0,w.H)(l=>this.handler.handle(l)));if(e instanceof K||"events"===r.observe)return o;const d=o.pipe((0,P.p)(l=>l instanceof L));switch(r.observe||"body"){case"body":switch(i.responseType){case"arraybuffer":return d.pipe((0,u.T)(l=>{if(null!==l.body&&!(l.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return l.body}));case"blob":return d.pipe((0,u.T)(l=>{if(null!==l.body&&!(l.body instanceof Blob))throw new Error("Response is not a Blob.");return l.body}));case"text":return d.pipe((0,u.T)(l=>{if(null!==l.body&&"string"!=typeof l.body)throw new Error("Response is not a string.");return l.body}));default:return d.pipe((0,u.T)(l=>l.body))}case"response":return d;default:throw new Error(`Unreachable: unhandled observe type ${r.observe}}`)}}delete(e,s={}){return this.request("DELETE",e,s)}get(e,s={}){return this.request("GET",e,s)}head(e,s={}){return this.request("HEAD",e,s)}jsonp(e,s){return this.request("JSONP",e,{params:(new j).append(s,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,s={}){return this.request("OPTIONS",e,s)}patch(e,s,r={}){return this.request("PATCH",e,ne(r,s))}post(e,s,r={}){return this.request("POST",e,ne(r,s))}put(e,s,r={}){return this.request("PUT",e,ne(r,s))}static{this.\u0275fac=function(s){return new(s||n)(a.\u0275\u0275inject(D))}}static{this.\u0275prov=a.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac})}}return n})();const Xe=/^\)\]\}',?\n/;function ve(n){if(n.url)return n.url;const t="X-Request-URL".toLocaleLowerCase();return n.headers.get(t)}let se=(()=>{class n{constructor(){this.fetchImpl=(0,a.inject)(Je,{optional:!0})?.fetch??fetch.bind(globalThis),this.ngZone=(0,a.inject)(a.NgZone)}handle(e){return new h.c(s=>{const r=new AbortController;return this.doRequest(e,r.signal,s).then(re,i=>s.error(new k({error:i}))),()=>r.abort()})}doRequest(e,s,r){var i=this;return E(function*(){const o=i.createRequestInit(e);let d;try{const I=i.fetchImpl(e.urlWithParams,{signal:s,...o});(function Ve(n){n.then(re,re)})(I),r.next({type:A.Sent}),d=yield I}catch(I){return void r.error(new k({error:I,status:I.status??0,statusText:I.statusText,url:e.urlWithParams,headers:I.headers}))}const l=new _(d.headers),T=d.statusText,x=ve(d)??e.urlWithParams;let v=d.status,O=null;if(e.reportProgress&&r.next(new J({headers:l,status:v,statusText:T,url:x})),d.body){const I=d.headers.get("content-length"),f=[],g=d.body.getReader();let te,M,S=0;const X=typeof Zone<"u"&&Zone.current;yield i.ngZone.runOutsideAngular(E(function*(){for(;;){const{done:$,value:he}=yield g.read();if($)break;if(f.push(he),S+=he.length,e.reportProgress){M="text"===e.responseType?(M??"")+(te??=new TextDecoder).decode(he,{stream:!0}):void 0;const ke=()=>r.next({type:A.DownloadProgress,total:I?+I:void 0,loaded:S,partialText:M});X?X.run(ke):ke()}}}));const ue=i.concatChunks(f,S);try{O=i.parseBody(e,ue)}catch($){return void r.error(new k({error:$,headers:new _(d.headers),status:d.status,statusText:d.statusText,url:ve(d)??e.urlWithParams}))}}0===v&&(v=O?200:0),v>=200&&v<300?(r.next(new L({body:O,headers:l,status:v,statusText:T,url:x})),r.complete()):r.error(new k({error:O,headers:l,status:v,statusText:T,url:x}))})()}parseBody(e,s){switch(e.responseType){case"json":const r=(new TextDecoder).decode(s).replace(Xe,"");return""===r?null:JSON.parse(r);case"text":return(new TextDecoder).decode(s);case"blob":return new Blob([s]);case"arraybuffer":return s.buffer}}createRequestInit(e){const s={},r=e.withCredentials?"include":void 0;if(e.headers.forEach((i,o)=>s[i]=o.join(",")),s.Accept??="application/json, text/plain, */*",!s["Content-Type"]){const i=e.detectContentTypeHeader();null!==i&&(s["Content-Type"]=i)}return{body:e.serializeBody(),method:e.method,headers:s,credentials:r}}concatChunks(e,s){const r=new Uint8Array(s);let i=0;for(const o of e)r.set(o,i),i+=o.length;return r}static{this.\u0275fac=function(s){return new(s||n)}}static{this.\u0275prov=a.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac})}}return n})();class Je{}function re(){}function Pe(n,t){return t(n)}function $e(n,t){return(e,s)=>t.intercept(e,{handle:r=>n(r,s)})}const oe=new a.InjectionToken(""),V=new a.InjectionToken(""),Ce=new a.InjectionToken("");function Ze(){let n=null;return(t,e)=>{null===n&&(n=((0,a.inject)(oe,{optional:!0})??[]).reduceRight($e,Pe));const s=(0,a.inject)(a.\u0275InitialRenderPendingTasks),r=s.add();return n(t,e).pipe((0,H.j)(()=>s.remove(r)))}}let ie,Y=(()=>{class n extends D{constructor(e,s){super(),this.backend=e,this.injector=s,this.chain=null,this.pendingTasks=(0,a.inject)(a.\u0275InitialRenderPendingTasks)}handle(e){if(null===this.chain){const r=Array.from(new Set([...this.injector.get(V),...this.injector.get(Ce,[])]));this.chain=r.reduceRight((i,o)=>function Ge(n,t,e){return(s,r)=>e.runInContext(()=>t(s,i=>n(i,r)))}(i,o,this.injector),Pe)}const s=this.pendingTasks.add();return this.chain(e,r=>this.backend.handle(r)).pipe((0,H.j)(()=>this.pendingTasks.remove(s)))}static{this.\u0275fac=function(s){return new(s||n)(a.\u0275\u0275inject(z),a.\u0275\u0275inject(a.EnvironmentInjector))}}static{this.\u0275prov=a.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac})}}return n})(),Ye=0;class we{}function nt(){return"object"==typeof window?window:{}}let ae=(()=>{class n{constructor(e,s){this.callbackMap=e,this.document=s,this.resolvedPromise=Promise.resolve()}nextCallback(){return"ng_jsonp_callback_"+Ye++}handle(e){if("JSONP"!==e.method)throw new Error("JSONP requests must use JSONP request method.");if("json"!==e.responseType)throw new Error("JSONP requests must use Json response type.");if(e.headers.keys().length>0)throw new Error("JSONP requests do not support headers.");return new h.c(s=>{const r=this.nextCallback(),i=e.urlWithParams.replace(/=JSONP_CALLBACK(&|$)/,`=${r}$1`),o=this.document.createElement("script");o.src=i;let d=null,l=!1;this.callbackMap[r]=O=>{delete this.callbackMap[r],d=O,l=!0};const T=()=>{o.parentNode&&o.parentNode.removeChild(o),delete this.callbackMap[r]};return o.addEventListener("load",O=>{this.resolvedPromise.then(()=>{T(),l?(s.next(new L({body:d,status:200,statusText:"OK",url:i})),s.complete()):s.error(new k({url:i,status:0,statusText:"JSONP Error",error:new Error("JSONP injected script did not invoke callback.")}))})}),o.addEventListener("error",O=>{T(),s.error(new k({error:O,status:0,statusText:"JSONP Error",url:i}))}),this.document.body.appendChild(o),s.next({type:A.Sent}),()=>{l||this.removeListeners(o),T()}})}removeListeners(e){ie||(ie=this.document.implementation.createHTMLDocument()),ie.adoptNode(e)}static{this.\u0275fac=function(s){return new(s||n)(a.\u0275\u0275inject(we),a.\u0275\u0275inject(R.DOCUMENT))}}static{this.\u0275prov=a.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac})}}return n})();function Re(n,t){return"JSONP"===n.method?(0,a.inject)(ae).handle(n):t(n)}let st=(()=>{class n{constructor(e){this.injector=e}intercept(e,s){return this.injector.runInContext(()=>Re(e,r=>s.handle(r)))}static{this.\u0275fac=function(s){return new(s||n)(a.\u0275\u0275inject(a.EnvironmentInjector))}}static{this.\u0275prov=a.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac})}}return n})();const rt=/^\)\]\}',?\n/;let ce=(()=>{class n{constructor(e){this.xhrFactory=e}handle(e){if("JSONP"===e.method)throw new a.\u0275RuntimeError(-2800,!1);const s=this.xhrFactory;return(s.\u0275loadImpl?(0,C.H)(s.\u0275loadImpl()):(0,p.of)(null)).pipe((0,N.n)(()=>new h.c(i=>{const o=s.build();if(o.open(e.method,e.urlWithParams),e.withCredentials&&(o.withCredentials=!0),e.headers.forEach((f,g)=>o.setRequestHeader(f,g.join(","))),e.headers.has("Accept")||o.setRequestHeader("Accept","application/json, text/plain, */*"),!e.headers.has("Content-Type")){const f=e.detectContentTypeHeader();null!==f&&o.setRequestHeader("Content-Type",f)}if(e.responseType){const f=e.responseType.toLowerCase();o.responseType="json"!==f?f:"text"}const d=e.serializeBody();let l=null;const T=()=>{if(null!==l)return l;const f=o.statusText||"OK",g=new _(o.getAllResponseHeaders()),S=function ot(n){return"responseURL"in n&&n.responseURL?n.responseURL:/^X-Request-URL:/m.test(n.getAllResponseHeaders())?n.getResponseHeader("X-Request-URL"):null}(o)||e.url;return l=new J({headers:g,status:o.status,statusText:f,url:S}),l},x=()=>{let{headers:f,status:g,statusText:S,url:te}=T(),M=null;204!==g&&(M=typeof o.response>"u"?o.responseText:o.response),0===g&&(g=M?200:0);let X=g>=200&&g<300;if("json"===e.responseType&&"string"==typeof M){const ue=M;M=M.replace(rt,"");try{M=""!==M?JSON.parse(M):null}catch($){M=ue,X&&(X=!1,M={error:$,text:M})}}X?(i.next(new L({body:M,headers:f,status:g,statusText:S,url:te||void 0})),i.complete()):i.error(new k({error:M,headers:f,status:g,statusText:S,url:te||void 0}))},v=f=>{const{url:g}=T(),S=new k({error:f,status:o.status||0,statusText:o.statusText||"Unknown Error",url:g||void 0});i.error(S)};let O=!1;const de=f=>{O||(i.next(T()),O=!0);let g={type:A.DownloadProgress,loaded:f.loaded};f.lengthComputable&&(g.total=f.total),"text"===e.responseType&&o.responseText&&(g.partialText=o.responseText),i.next(g)},I=f=>{let g={type:A.UploadProgress,loaded:f.loaded};f.lengthComputable&&(g.total=f.total),i.next(g)};return o.addEventListener("load",x),o.addEventListener("error",v),o.addEventListener("timeout",v),o.addEventListener("abort",v),e.reportProgress&&(o.addEventListener("progress",de),null!==d&&o.upload&&o.upload.addEventListener("progress",I)),o.send(d),i.next({type:A.Sent}),()=>{o.removeEventListener("error",v),o.removeEventListener("abort",v),o.removeEventListener("load",x),o.removeEventListener("timeout",v),e.reportProgress&&(o.removeEventListener("progress",de),null!==d&&o.upload&&o.upload.removeEventListener("progress",I)),o.readyState!==o.DONE&&o.abort()}})))}static{this.\u0275fac=function(s){return new(s||n)(a.\u0275\u0275inject(R.XhrFactory))}}static{this.\u0275prov=a.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac})}}return n})();const Q=new a.InjectionToken("XSRF_ENABLED"),Oe="XSRF-TOKEN",Me=new a.InjectionToken("XSRF_COOKIE_NAME",{providedIn:"root",factory:()=>Oe}),De="X-XSRF-TOKEN",_e=new a.InjectionToken("XSRF_HEADER_NAME",{providedIn:"root",factory:()=>De});class q{}let Ie=(()=>{class n{constructor(e,s,r){this.doc=e,this.platform=s,this.cookieName=r,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if("server"===this.platform)return null;const e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=(0,R.\u0275parseCookieValue)(e,this.cookieName),this.lastCookieString=e),this.lastToken}static{this.\u0275fac=function(s){return new(s||n)(a.\u0275\u0275inject(R.DOCUMENT),a.\u0275\u0275inject(a.PLATFORM_ID),a.\u0275\u0275inject(Me))}}static{this.\u0275prov=a.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac})}}return n})();function be(n,t){const e=n.url.toLowerCase();if(!(0,a.inject)(Q)||"GET"===n.method||"HEAD"===n.method||e.startsWith("http://")||e.startsWith("https://"))return t(n);const s=(0,a.inject)(q).getToken(),r=(0,a.inject)(_e);return null!=s&&!n.headers.has(r)&&(n=n.clone({headers:n.headers.set(r,s)})),t(n)}let Ae=(()=>{class n{constructor(e){this.injector=e}intercept(e,s){return this.injector.runInContext(()=>be(e,r=>s.handle(r)))}static{this.\u0275fac=function(s){return new(s||n)(a.\u0275\u0275inject(a.EnvironmentInjector))}}static{this.\u0275prov=a.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac})}}return n})();var U=function(n){return n[n.Interceptors=0]="Interceptors",n[n.LegacyInterceptors=1]="LegacyInterceptors",n[n.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",n[n.NoXsrfProtection=3]="NoXsrfProtection",n[n.JsonpSupport=4]="JsonpSupport",n[n.RequestsMadeViaParent=5]="RequestsMadeViaParent",n[n.Fetch=6]="Fetch",n}(U||{});function W(n,t){return{\u0275kind:n,\u0275providers:t}}function xe(...n){const t=[Te,ce,Y,{provide:D,useExisting:Y},{provide:z,useExisting:ce},{provide:V,useValue:be,multi:!0},{provide:Q,useValue:!0},{provide:q,useClass:Ie}];for(const e of n)t.push(...e.\u0275providers);return(0,a.makeEnvironmentProviders)(t)}function it(n){return W(U.Interceptors,n.map(t=>({provide:V,useValue:t,multi:!0})))}const Se=new a.InjectionToken("LEGACY_INTERCEPTOR_FN");function Ne(){return W(U.LegacyInterceptors,[{provide:Se,useFactory:Ze},{provide:V,useExisting:Se,multi:!0}])}function le({cookieName:n,headerName:t}){const e=[];return void 0!==n&&e.push({provide:Me,useValue:n}),void 0!==t&&e.push({provide:_e,useValue:t}),W(U.CustomXsrfConfiguration,e)}function je(){return W(U.NoXsrfProtection,[{provide:Q,useValue:!1}])}function Le(){return W(U.JsonpSupport,[ae,{provide:we,useFactory:nt},{provide:V,useValue:Re,multi:!0}])}function at(){return W(U.RequestsMadeViaParent,[{provide:z,useFactory:()=>(0,a.inject)(D,{skipSelf:!0,optional:!0})}])}function ct(){return W(U.Fetch,[se,{provide:z,useExisting:se}])}let lt=(()=>{class n{static disable(){return{ngModule:n,providers:[je().\u0275providers]}}static withOptions(e={}){return{ngModule:n,providers:le(e).\u0275providers}}static{this.\u0275fac=function(s){return new(s||n)}}static{this.\u0275mod=a.\u0275\u0275defineNgModule({type:n})}static{this.\u0275inj=a.\u0275\u0275defineInjector({providers:[Ae,{provide:oe,useExisting:Ae,multi:!0},{provide:q,useClass:Ie},le({cookieName:Oe,headerName:De}).\u0275providers,{provide:Q,useValue:!0}]})}}return n})(),dt=(()=>{class n{static{this.\u0275fac=function(s){return new(s||n)}}static{this.\u0275mod=a.\u0275\u0275defineNgModule({type:n})}static{this.\u0275inj=a.\u0275\u0275defineInjector({providers:[xe(Ne())]})}}return n})(),ut=(()=>{class n{static{this.\u0275fac=function(s){return new(s||n)}}static{this.\u0275mod=a.\u0275\u0275defineNgModule({type:n})}static{this.\u0275inj=a.\u0275\u0275defineInjector({providers:[Le().\u0275providers]})}}return n})();const ee=new a.InjectionToken(""),ht=["GET","HEAD"];function ft(n,t){const{isCacheActive:e}=(0,a.inject)(ee);if(!e||!ht.includes(n.method))return t(n);const s=(0,a.inject)(a.TransferState),r=function yt(n){const{params:t,method:e,responseType:s,url:r}=n,d=function mt(n){let t=0;for(const e of n)t=Math.imul(31,t)+e.charCodeAt(0)|0;return t+=2147483648,t.toString()}(e+"."+s+"."+r+"?"+t.keys().sort().map(l=>`${l}=${t.getAll(l)}`).join("&"));return(0,a.makeStateKey)(d)}(n),i=s.get(r,null);if(i){let o=i.body;switch(i.responseType){case"arraybuffer":o=(new TextEncoder).encode(i.body).buffer;break;case"blob":o=new Blob([i.body])}return(0,p.of)(new L({body:o,headers:new _(i.headers),status:i.status,statusText:i.statusText,url:i.url}))}return t(n).pipe((0,F.M)(o=>{o instanceof L&&s.set(r,{body:o.body,headers:pt(o.headers),status:o.status,statusText:o.statusText,url:o.url||"",responseType:n.responseType})}))}function pt(n){const t={};for(const e of n.keys()){const s=n.getAll(e);null!==s&&(t[e]=s)}return t}function Et(){return[{provide:ee,useFactory:()=>((0,a.inject)(a.\u0275ENABLED_SSR_FEATURES).add("httpcache"),{isCacheActive:!0})},{provide:Ce,useValue:ft,multi:!0,deps:[a.TransferState,ee]},{provide:a.APP_BOOTSTRAP_LISTENER,multi:!0,useFactory:()=>{const n=(0,a.inject)(a.ApplicationRef),t=(0,a.inject)(ee);return()=>{n.isStable.pipe((0,B.$)(e=>e)).toPromise().then(()=>{t.isCacheActive=!1})}}}]}}}]);