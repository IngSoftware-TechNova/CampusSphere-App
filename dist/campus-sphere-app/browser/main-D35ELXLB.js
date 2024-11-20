import{c as w,d as M,e as P,f as T,i as E,j as l,m as x,n as O,p as j,q as d}from"./chunk-LGV345Q4.js";import{Bb as _,Cc as b,Ha as C,X as m,Ya as R,Z as f,_a as F,aa as g,ab as I,bc as D,da as i,db as S,ha as y,la as v,pc as N,za as A}from"./chunk-MWU7JMLF.js";var h=(n,t)=>{let e=i(d),r=i(l);return e.isAuthenticated()?!0:(r.navigate(["/auth/login"]),!1)};var k=(n,t)=>{let e=i(d),r=i(l);if(e.isAuthenticated()){let o=e.getUserRole();return o==="STUDENT"?r.navigate(["/student"]):o==="ADMIN"&&r.navigate(["/admin"]),!1}return!0};var G=[{path:"",redirectTo:"auth/login",pathMatch:"full"},{path:"home",loadChildren:()=>import("./chunk-SBRJE5TE.js").then(n=>n.publicContentRoutes)},{path:"auth",loadChildren:()=>import("./chunk-M6YCZE5U.js").then(n=>n.authRoutes),canActivate:[k]},{path:"student",loadChildren:()=>import("./chunk-3L6QSFQZ.js").then(n=>n.studentRoutes),canActivate:[h]},{path:"admin",loadChildren:()=>import("./chunk-56WKFMGP.js").then(n=>n.adminRoutes),canActivate:[h]}];var L="@",V=(()=>{class n{constructor(e,r,o,a,s){this.doc=e,this.delegate=r,this.zone=o,this.animationType=a,this.moduleImpl=s,this._rendererFactoryPromise=null,this.scheduler=i(F,{optional:!0}),this.loadingSchedulerFn=i(Y,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){let e=()=>this.moduleImpl??import("./chunk-KAMV36MW.js").then(o=>o),r;return this.loadingSchedulerFn?r=this.loadingSchedulerFn(e):r=e(),r.catch(o=>{throw new m(5300,!1)}).then(({\u0275createEngine:o,\u0275AnimationRendererFactory:a})=>{this._engine=o(this.animationType,this.doc);let s=new a(this.delegate,this._engine,this.zone);return this.delegate=s,s})}createRenderer(e,r){let o=this.delegate.createRenderer(e,r);if(o.\u0275type===0)return o;typeof o.throwOnSyntheticProps=="boolean"&&(o.throwOnSyntheticProps=!1);let a=new u(o);return r?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(s=>{let H=s.createRenderer(e,r);a.use(H),this.scheduler?.notify(10)}).catch(s=>{a.use(o)}),a}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}static{this.\u0275fac=function(r){R()}}static{this.\u0275prov=f({token:n,factory:n.\u0275fac})}}return n})(),u=class{constructor(t){this.delegate=t,this.replay=[],this.\u0275type=1}use(t){if(this.delegate=t,this.replay!==null){for(let e of this.replay)e(t);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(t,e){return this.delegate.createElement(t,e)}createComment(t){return this.delegate.createComment(t)}createText(t){return this.delegate.createText(t)}get destroyNode(){return this.delegate.destroyNode}appendChild(t,e){this.delegate.appendChild(t,e)}insertBefore(t,e,r,o){this.delegate.insertBefore(t,e,r,o)}removeChild(t,e,r){this.delegate.removeChild(t,e,r)}selectRootElement(t,e){return this.delegate.selectRootElement(t,e)}parentNode(t){return this.delegate.parentNode(t)}nextSibling(t){return this.delegate.nextSibling(t)}setAttribute(t,e,r,o){this.delegate.setAttribute(t,e,r,o)}removeAttribute(t,e,r){this.delegate.removeAttribute(t,e,r)}addClass(t,e){this.delegate.addClass(t,e)}removeClass(t,e){this.delegate.removeClass(t,e)}setStyle(t,e,r,o){this.delegate.setStyle(t,e,r,o)}removeStyle(t,e,r){this.delegate.removeStyle(t,e,r)}setProperty(t,e,r){this.shouldReplay(e)&&this.replay.push(o=>o.setProperty(t,e,r)),this.delegate.setProperty(t,e,r)}setValue(t,e){this.delegate.setValue(t,e)}listen(t,e,r){return this.shouldReplay(e)&&this.replay.push(o=>o.listen(t,e,r)),this.delegate.listen(t,e,r)}shouldReplay(t){return this.replay!==null&&t.startsWith(L)}},Y=new g("");function p(n="animations"){return S("NgAsyncAnimations"),v([{provide:I,useFactory:(t,e,r)=>new V(t,e,r,n),deps:[b,P,A]},{provide:C,useValue:n==="noop"?"NoopAnimations":"BrowserAnimations"}])}var U=(n,t)=>{let r=i(j).getAuthData();if(r&&r.token){let o=n.clone({headers:n.headers.set("Authorization",`Bearer ${r.token}`)});return t(o)}return t(n)};var B={providers:[N({eventCoalescing:!0}),x(G),p(),w(M([U])),p(),p()]};var c=class n{title="CampusSphere_app";static \u0275fac=function(e){return new(e||n)};static \u0275cmp=y({type:n,selectors:[["app-root"]],standalone:!0,features:[D],decls:1,vars:0,template:function(e,r){e&1&&_(0,"router-outlet")},dependencies:[E,O]})};T(c,B).catch(n=>console.error(n));
