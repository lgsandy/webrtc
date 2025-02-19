import{ah as ge,g as L,ai as bt,aj as Fe,m as R,ak as ue,al as Ct,r as j,e as v,p as S,am as _e,Y as ce,an as St,f as He,h as x,u as A,c as u,ao as G,ap as Me,aq as Le,ar as _t,as as kt,at as xt,aa as M,x as de,au as ke,t as $,D as Q,s as D,w as W,F as wt,Z as De,j as ve,H as ye,M as Bt,N as We,J as It,a5 as he,a as U,b as q,E as Vt,A as je,z as Pt,a8 as be,n as Ge,o as Lt,av as Et,O as Ue,C as Tt,aw as $t,I as le,ax as zt,ay as Nt,az as pt,aA as Rt,y as At,d as qe,i as Ee,aB as Ot,aC as Ft,aD as Te,aE as Ht,aF as $e}from"./index-pk-lPjgl.js";const Mt=["top","bottom"],Dt=["start","end","left","right"];function Wt(e,a){let[n,t]=e.split(" ");return t||(t=ge(Mt,n)?"start":ge(Dt,n)?"top":"center"),{side:ze(n,a),align:ze(t,a)}}function ze(e,a){return e==="start"?a?"right":"left":e==="end"?a?"left":"right":e}function $n(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",n=arguments.length>2?arguments[2]:void 0;return L()({name:n??bt(Fe(e.replace(/__/g,"-"))),props:{tag:{type:String,default:a},...R()},setup(t,s){let{slots:i}=s;return()=>{var l;return ue(t.tag,{class:[e,t.class],style:t.style},(l=i.default)==null?void 0:l.call(i))}}})}const zn=Ct("users",()=>{const e=j([]),a=j(""),n=v(()=>e.value),t=v(()=>a.value);function s(r){e.value=r}function i(r){a.value=r}function l(r){}return{setUserList:s,getUsers:n,setUserName:i,getUserName:t,startCallHandler:l}}),X=S({tag:{type:String,default:"div"}},"tag"),jt=S({disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:String,origin:String},"transition");function E(e,a,n){return L()({name:e,props:jt({mode:n,origin:a}),setup(t,s){let{slots:i}=s;const l={onBeforeEnter(r){t.origin&&(r.style.transformOrigin=t.origin)},onLeave(r){if(t.leaveAbsolute){const{offsetTop:c,offsetLeft:m,offsetWidth:g,offsetHeight:y}=r;r._transitionInitialStyles={position:r.style.position,top:r.style.top,left:r.style.left,width:r.style.width,height:r.style.height},r.style.position="absolute",r.style.top=`${c}px`,r.style.left=`${m}px`,r.style.width=`${g}px`,r.style.height=`${y}px`}t.hideOnLeave&&r.style.setProperty("display","none","important")},onAfterLeave(r){if(t.leaveAbsolute&&(r!=null&&r._transitionInitialStyles)){const{position:c,top:m,left:g,width:y,height:o}=r._transitionInitialStyles;delete r._transitionInitialStyles,r.style.position=c||"",r.style.top=m||"",r.style.left=g||"",r.style.width=y||"",r.style.height=o||""}}};return()=>{const r=t.group?_e:ce;return ue(r,{name:t.disabled?"":e,css:!t.disabled,...t.group?void 0:{mode:t.mode},...t.disabled?{}:l},i.default)}}})}function Xe(e,a){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return L()({name:e,props:{mode:{type:String,default:n},disabled:Boolean,group:Boolean},setup(t,s){let{slots:i}=s;const l=t.group?_e:ce;return()=>ue(l,{name:t.disabled?"":e,css:!t.disabled,...t.disabled?{}:a},i.default)}})}function Ye(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const n=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",t=Fe(`offset-${n}`);return{onBeforeEnter(l){l._parent=l.parentNode,l._initialStyle={transition:l.style.transition,overflow:l.style.overflow,[n]:l.style[n]}},onEnter(l){const r=l._initialStyle;l.style.setProperty("transition","none","important"),l.style.overflow="hidden";const c=`${l[t]}px`;l.style[n]="0",l.offsetHeight,l.style.transition=r.transition,e&&l._parent&&l._parent.classList.add(e),requestAnimationFrame(()=>{l.style[n]=c})},onAfterEnter:i,onEnterCancelled:i,onLeave(l){l._initialStyle={transition:"",overflow:l.style.overflow,[n]:l.style[n]},l.style.overflow="hidden",l.style[n]=`${l[t]}px`,l.offsetHeight,requestAnimationFrame(()=>l.style[n]="0")},onAfterLeave:s,onLeaveCancelled:s};function s(l){e&&l._parent&&l._parent.classList.remove(e),i(l)}function i(l){const r=l._initialStyle[n];l.style.overflow=l._initialStyle.overflow,r!=null&&(l.style[n]=r),delete l._initialStyle}}E("fab-transition","center center","out-in");E("dialog-bottom-transition");E("dialog-top-transition");E("fade-transition");E("scale-transition");E("scroll-x-transition");E("scroll-x-reverse-transition");E("scroll-y-transition");E("scroll-y-reverse-transition");E("slide-x-transition");E("slide-x-reverse-transition");const Nn=E("slide-y-transition");E("slide-y-reverse-transition");const pn=Xe("expand-transition",Ye()),Rn=Xe("expand-x-transition",Ye("",!0)),Gt=S({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),ae=L(!1)({name:"VDefaultsProvider",props:Gt(),setup(e,a){let{slots:n}=a;const{defaults:t,disabled:s,reset:i,root:l,scoped:r}=St(e);return He(t,{reset:i,root:l,scoped:r,disabled:s}),()=>{var c;return(c=n.default)==null?void 0:c.call(n)}}}),Je=S({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function Ke(e){return{dimensionStyles:v(()=>{const n={},t=x(e.height),s=x(e.maxHeight),i=x(e.maxWidth),l=x(e.minHeight),r=x(e.minWidth),c=x(e.width);return t!=null&&(n.height=t),s!=null&&(n.maxHeight=s),i!=null&&(n.maxWidth=i),l!=null&&(n.minHeight=l),r!=null&&(n.minWidth=r),c!=null&&(n.width=c),n})}}function Ut(e){return{aspectStyles:v(()=>{const a=Number(e.aspectRatio);return a?{paddingBottom:String(1/a*100)+"%"}:void 0})}}const Ze=S({aspectRatio:[String,Number],contentClass:null,inline:Boolean,...R(),...Je()},"VResponsive"),Ne=L()({name:"VResponsive",props:Ze(),setup(e,a){let{slots:n}=a;const{aspectStyles:t}=Ut(e),{dimensionStyles:s}=Ke(e);return A(()=>{var i;return u("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[s.value,e.style]},[u("div",{class:"v-responsive__sizer",style:t.value},null),(i=n.additional)==null?void 0:i.call(n),n.default&&u("div",{class:["v-responsive__content",e.contentClass]},[n.default()])])}),{}}});function xe(e){return Me(()=>{const a=[],n={};if(e.value.background)if(Le(e.value.background)){if(n.backgroundColor=e.value.background,!e.value.text&&_t(e.value.background)){const t=kt(e.value.background);if(t.a==null||t.a===1){const s=xt(t);n.color=s,n.caretColor=s}}}else a.push(`bg-${e.value.background}`);return e.value.text&&(Le(e.value.text)?(n.color=e.value.text,n.caretColor=e.value.text):a.push(`text-${e.value.text}`)),{colorClasses:a,colorStyles:n}})}function re(e,a){const n=v(()=>({text:G(e)?e.value:a?e[a]:null})),{colorClasses:t,colorStyles:s}=xe(n);return{textColorClasses:t,textColorStyles:s}}function se(e,a){const n=v(()=>({background:G(e)?e.value:a?e[a]:null})),{colorClasses:t,colorStyles:s}=xe(n);return{backgroundColorClasses:t,backgroundColorStyles:s}}const ee=S({rounded:{type:[Boolean,Number,String],default:void 0},tile:Boolean},"rounded");function te(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:M();return{roundedClasses:v(()=>{const t=G(e)?e.value:e.rounded,s=G(e)?e.value:e.tile,i=[];if(t===!0||t==="")i.push(`${a}--rounded`);else if(typeof t=="string"||t===0)for(const l of String(t).split(" "))i.push(`rounded-${l}`);else(s||t===!1)&&i.push("rounded-0");return i})}}const qt=S({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),ne=(e,a)=>{let{slots:n}=a;const{transition:t,disabled:s,group:i,...l}=e,{component:r=i?_e:ce,...c}=typeof t=="object"?t:{};return ue(r,de(typeof t=="string"?{name:s?"":t}:c,typeof t=="string"?{}:Object.fromEntries(Object.entries({disabled:s,group:i}).filter(m=>{let[g,y]=m;return y!==void 0})),l),n)};function Xt(e,a){if(!ke)return;const n=a.modifiers||{},t=a.value,{handler:s,options:i}=typeof t=="object"?t:{handler:t,options:{}},l=new IntersectionObserver(function(){var y;let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],c=arguments.length>1?arguments[1]:void 0;const m=(y=e._observe)==null?void 0:y[a.instance.$.uid];if(!m)return;const g=r.some(o=>o.isIntersecting);s&&(!n.quiet||m.init)&&(!n.once||g||m.init)&&s(g,r,c),g&&n.once?Qe(e,a):m.init=!0},i);e._observe=Object(e._observe),e._observe[a.instance.$.uid]={init:!1,observer:l},l.observe(e)}function Qe(e,a){var t;const n=(t=e._observe)==null?void 0:t[a.instance.$.uid];n&&(n.observer.unobserve(e),delete e._observe[a.instance.$.uid])}const Yt={mounted:Xt,unmounted:Qe},Jt=S({absolute:Boolean,alt:String,cover:Boolean,color:String,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...Ze(),...R(),...ee(),...qt()},"VImg"),Kt=L()({name:"VImg",directives:{intersect:Yt},props:Jt(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,a){let{emit:n,slots:t}=a;const{backgroundColorClasses:s,backgroundColorStyles:i}=se($(e,"color")),{roundedClasses:l}=te(e),r=Q("VImg"),c=D(""),m=j(),g=D(e.eager?"loading":"idle"),y=D(),o=D(),d=v(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),b=v(()=>d.value.aspect||y.value/o.value||0);W(()=>e.src,()=>{f(g.value!=="idle")}),W(b,(h,k)=>{!h&&k&&m.value&&w(m.value)}),wt(()=>f());function f(h){if(!(e.eager&&h)&&!(ke&&!h&&!e.eager)){if(g.value="loading",d.value.lazySrc){const k=new Image;k.src=d.value.lazySrc,w(k,null)}d.value.src&&De(()=>{var k;n("loadstart",((k=m.value)==null?void 0:k.currentSrc)||d.value.src),setTimeout(()=>{var V;if(!r.isUnmounted)if((V=m.value)!=null&&V.complete){if(m.value.naturalWidth||_(),g.value==="error")return;b.value||w(m.value,null),g.value==="loading"&&C()}else b.value||w(m.value),T()})})}}function C(){var h;r.isUnmounted||(T(),w(m.value),g.value="loaded",n("load",((h=m.value)==null?void 0:h.currentSrc)||d.value.src))}function _(){var h;r.isUnmounted||(g.value="error",n("error",((h=m.value)==null?void 0:h.currentSrc)||d.value.src))}function T(){const h=m.value;h&&(c.value=h.currentSrc||h.src)}let I=-1;ve(()=>{clearTimeout(I)});function w(h){let k=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const V=()=>{if(clearTimeout(I),r.isUnmounted)return;const{naturalHeight:p,naturalWidth:H}=h;p||H?(y.value=H,o.value=p):!h.complete&&g.value==="loading"&&k!=null?I=window.setTimeout(V,k):(h.currentSrc.endsWith(".svg")||h.currentSrc.startsWith("data:image/svg+xml"))&&(y.value=1,o.value=1)};V()}const z=v(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),O=()=>{var V;if(!d.value.src||g.value==="idle")return null;const h=u("img",{class:["v-img__img",z.value],style:{objectPosition:e.position},src:d.value.src,srcset:d.value.srcset,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:m,onLoad:C,onError:_},null),k=(V=t.sources)==null?void 0:V.call(t);return u(ne,{transition:e.transition,appear:!0},{default:()=>[ye(k?u("picture",{class:"v-img__picture"},[k,h]):h,[[It,g.value==="loaded"]])]})},N=()=>u(ne,{transition:e.transition},{default:()=>[d.value.lazySrc&&g.value!=="loaded"&&u("img",{class:["v-img__img","v-img__img--preload",z.value],style:{objectPosition:e.position},src:d.value.lazySrc,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),Y=()=>t.placeholder?u(ne,{transition:e.transition,appear:!0},{default:()=>[(g.value==="loading"||g.value==="error"&&!t.error)&&u("div",{class:"v-img__placeholder"},[t.placeholder()])]}):null,F=()=>t.error?u(ne,{transition:e.transition,appear:!0},{default:()=>[g.value==="error"&&u("div",{class:"v-img__error"},[t.error()])]}):null,J=()=>e.gradient?u("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,B=D(!1);{const h=W(b,k=>{k&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{B.value=!0})}),h())})}return A(()=>{const h=Ne.filterProps(e);return ye(u(Ne,de({class:["v-img",{"v-img--absolute":e.absolute,"v-img--booting":!B.value},s.value,l.value,e.class],style:[{width:x(e.width==="auto"?y.value:e.width)},i.value,e.style]},h,{aspectRatio:b.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>u(We,null,[u(O,null,null),u(N,null,null),u(J,null,null),u(Y,null,null),u(F,null,null)]),default:t.default}),[[Bt("intersect"),{handler:f,options:e.options},null,{once:!0}]])}),{currentSrc:c,image:m,state:g,naturalWidth:y,naturalHeight:o}}}),we=S({border:[Boolean,Number,String]},"border");function Be(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:M();return{borderClasses:v(()=>{const t=G(e)?e.value:e.border,s=[];if(t===!0||t==="")s.push(`${a}--border`);else if(typeof t=="string"||t===0)for(const i of String(t).split(" "))s.push(`border-${i}`);return s})}}const et=S({elevation:{type:[Number,String],validator(e){const a=parseInt(e);return!isNaN(a)&&a>=0&&a<=24}}},"elevation");function tt(e){return{elevationClasses:v(()=>{const n=G(e)?e.value:e.elevation,t=[];return n==null||t.push(`elevation-${n}`),t})}}const Zt=[null,"default","comfortable","compact"],Ie=S({density:{type:String,default:"default",validator:e=>Zt.includes(e)}},"density");function Ve(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:M();return{densityClasses:v(()=>`${a}--density-${e.density}`)}}const Qt=["elevated","flat","tonal","outlined","text","plain"];function nt(e,a){return u(We,null,[e&&u("span",{key:"overlay",class:`${a}__overlay`},null),u("span",{key:"underlay",class:`${a}__underlay`},null)])}const Pe=S({color:String,variant:{type:String,default:"elevated",validator:e=>Qt.includes(e)}},"variant");function at(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:M();const n=v(()=>{const{variant:i}=he(e);return`${a}--variant-${i}`}),{colorClasses:t,colorStyles:s}=xe(v(()=>{const{variant:i,color:l}=he(e);return{[["elevated","flat"].includes(i)?"background":"text"]:l}}));return{colorClasses:t,colorStyles:s,variantClasses:n}}const st=S({baseColor:String,divided:Boolean,...we(),...R(),...Ie(),...et(),...ee(),...X(),...U(),...Pe()},"VBtnGroup"),pe=L()({name:"VBtnGroup",props:st(),setup(e,a){let{slots:n}=a;const{themeClasses:t}=q(e),{densityClasses:s}=Ve(e),{borderClasses:i}=Be(e),{elevationClasses:l}=tt(e),{roundedClasses:r}=te(e);He({VBtn:{height:"auto",baseColor:$(e,"baseColor"),color:$(e,"color"),density:$(e,"density"),flat:!0,variant:$(e,"variant")}}),A(()=>u(e.tag,{class:["v-btn-group",{"v-btn-group--divided":e.divided},t.value,i.value,s.value,l.value,r.value,e.class],style:e.style},n))}}),en=S({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),tn=S({value:null,disabled:Boolean,selectedClass:String},"group-item");function nn(e,a){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const t=Q("useGroupItem");if(!t)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const s=Vt();je(Symbol.for(`${a.description}:id`),s);const i=Pt(a,null);if(!i){if(!n)return i;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${a.description}`)}const l=$(e,"value"),r=v(()=>!!(i.disabled.value||e.disabled));i.register({id:s,value:l,disabled:r},t),ve(()=>{i.unregister(s)});const c=v(()=>i.isSelected(s)),m=v(()=>i.items.value[0].id===s),g=v(()=>i.items.value[i.items.value.length-1].id===s),y=v(()=>c.value&&[i.selectedClass.value,e.selectedClass]);return W(c,o=>{t.emit("group:selected",{value:o})},{flush:"sync"}),{id:s,isSelected:c,isFirst:m,isLast:g,toggle:()=>i.select(s,!c.value),select:o=>i.select(s,o),selectedClass:y,value:l,disabled:r,group:i}}function an(e,a){let n=!1;const t=be([]),s=Ge(e,"modelValue",[],o=>o==null?[]:it(t,Tt(o)),o=>{const d=ln(t,o);return e.multiple?d:d[0]}),i=Q("useGroup");function l(o,d){const b=o,f=Symbol.for(`${a.description}:id`),_=$t(f,i==null?void 0:i.vnode).indexOf(d);he(b.value)==null&&(b.value=_,b.useIndexAsValue=!0),_>-1?t.splice(_,0,b):t.push(b)}function r(o){if(n)return;c();const d=t.findIndex(b=>b.id===o);t.splice(d,1)}function c(){const o=t.find(d=>!d.disabled);o&&e.mandatory==="force"&&!s.value.length&&(s.value=[o.id])}Lt(()=>{c()}),ve(()=>{n=!0}),Et(()=>{for(let o=0;o<t.length;o++)t[o].useIndexAsValue&&(t[o].value=o)});function m(o,d){const b=t.find(f=>f.id===o);if(!(d&&(b!=null&&b.disabled)))if(e.multiple){const f=s.value.slice(),C=f.findIndex(T=>T===o),_=~C;if(d=d??!_,_&&e.mandatory&&f.length<=1||!_&&e.max!=null&&f.length+1>e.max)return;C<0&&d?f.push(o):C>=0&&!d&&f.splice(C,1),s.value=f}else{const f=s.value.includes(o);if(e.mandatory&&f)return;s.value=d??!f?[o]:[]}}function g(o){if(e.multiple,s.value.length){const d=s.value[0],b=t.findIndex(_=>_.id===d);let f=(b+o)%t.length,C=t[f];for(;C.disabled&&f!==b;)f=(f+o)%t.length,C=t[f];if(C.disabled)return;s.value=[t[f].id]}else{const d=t.find(b=>!b.disabled);d&&(s.value=[d.id])}}const y={register:l,unregister:r,selected:s,select:m,disabled:$(e,"disabled"),prev:()=>g(t.length-1),next:()=>g(1),isSelected:o=>s.value.includes(o),selectedClass:v(()=>e.selectedClass),items:v(()=>t),getItemIndex:o=>sn(t,o)};return je(a,y),y}function sn(e,a){const n=it(e,[a]);return n.length?e.findIndex(t=>t.id===n[0]):-1}function it(e,a){const n=[];return a.forEach(t=>{const s=e.find(l=>Ue(t,l.value)),i=e[t];(s==null?void 0:s.value)!=null?n.push(s.id):i!=null&&n.push(i.id)}),n}function ln(e,a){const n=[];return a.forEach(t=>{const s=e.findIndex(i=>i.id===t);if(~s){const i=e[s];n.push(i.value!=null?i.value:s)}}),n}const lt=Symbol.for("vuetify:v-btn-toggle"),rn=S({...st(),...en()},"VBtnToggle");L()({name:"VBtnToggle",props:rn(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:n}=a;const{isSelected:t,next:s,prev:i,select:l,selected:r}=an(e,lt);return A(()=>{const c=pe.filterProps(e);return u(pe,de({class:["v-btn-toggle",e.class]},c,{style:e.style}),{default:()=>{var m;return[(m=n.default)==null?void 0:m.call(n,{isSelected:t,next:s,prev:i,select:l,selected:r})]}})}),{next:s,prev:i,select:l}}});const on=["x-small","small","default","large","x-large"],fe=S({size:{type:[String,Number],default:"default"}},"size");function me(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:M();return Me(()=>{let n,t;return ge(on,e.size)?n=`${a}--size-${e.size}`:e.size&&(t={width:x(e.size),height:x(e.size)}),{sizeClasses:n,sizeStyles:t}})}const un=S({color:String,disabled:Boolean,start:Boolean,end:Boolean,icon:le,...R(),...fe(),...X({tag:"i"}),...U()},"VIcon"),ie=L()({name:"VIcon",props:un(),setup(e,a){let{attrs:n,slots:t}=a;const s=j(),{themeClasses:i}=q(e),{iconData:l}=zt(v(()=>s.value||e.icon)),{sizeClasses:r}=me(e),{textColorClasses:c,textColorStyles:m}=re($(e,"color"));return A(()=>{var o,d;const g=(o=t.default)==null?void 0:o.call(t);g&&(s.value=(d=Nt(g).filter(b=>b.type===pt&&b.children&&typeof b.children=="string")[0])==null?void 0:d.children);const y=!!(n.onClick||n.onClickOnce);return u(l.value.component,{tag:e.tag,icon:l.value.icon,class:["v-icon","notranslate",i.value,r.value,c.value,{"v-icon--clickable":y,"v-icon--disabled":e.disabled,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[r.value?void 0:{fontSize:x(e.size),height:x(e.size),width:x(e.size)},m.value,e.style],role:y?"button":void 0,"aria-hidden":!y,tabindex:y?e.disabled?-1:0:void 0},{default:()=>[g]})}),{}}});function rt(e,a){const n=j(),t=D(!1);if(ke){const s=new IntersectionObserver(i=>{t.value=!!i.find(l=>l.isIntersecting)},a);ve(()=>{s.disconnect()}),W(n,(i,l)=>{l&&(s.unobserve(l),t.value=!1),i&&s.observe(i)},{flush:"post"})}return{intersectionRef:n,isIntersecting:t}}const cn=S({bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...R(),...fe(),...X({tag:"div"}),...U()},"VProgressCircular"),dn=L()({name:"VProgressCircular",props:cn(),setup(e,a){let{slots:n}=a;const t=20,s=2*Math.PI*t,i=j(),{themeClasses:l}=q(e),{sizeClasses:r,sizeStyles:c}=me(e),{textColorClasses:m,textColorStyles:g}=re($(e,"color")),{textColorClasses:y,textColorStyles:o}=re($(e,"bgColor")),{intersectionRef:d,isIntersecting:b}=rt(),{resizeRef:f,contentRect:C}=Rt(),_=v(()=>Math.max(0,Math.min(100,parseFloat(e.modelValue)))),T=v(()=>Number(e.width)),I=v(()=>c.value?Number(e.size):C.value?C.value.width:Math.max(T.value,32)),w=v(()=>t/(1-T.value/I.value)*2),z=v(()=>T.value/I.value*w.value),O=v(()=>x((100-_.value)/100*s));return At(()=>{d.value=i.value,f.value=i.value}),A(()=>u(e.tag,{ref:i,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!e.indeterminate,"v-progress-circular--visible":b.value,"v-progress-circular--disable-shrink":e.indeterminate==="disable-shrink"},l.value,r.value,m.value,e.class],style:[c.value,g.value,e.style],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":e.indeterminate?void 0:_.value},{default:()=>[u("svg",{style:{transform:`rotate(calc(-90deg + ${Number(e.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${w.value} ${w.value}`},[u("circle",{class:["v-progress-circular__underlay",y.value],style:o.value,fill:"transparent",cx:"50%",cy:"50%",r:t,"stroke-width":z.value,"stroke-dasharray":s,"stroke-dashoffset":0},null),u("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r:t,"stroke-width":z.value,"stroke-dasharray":s,"stroke-dashoffset":O.value},null)]),n.default&&u("div",{class:"v-progress-circular__content"},[n.default({value:_.value})])]})),{}}}),Re={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},ot=S({location:String},"location");function ut(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=arguments.length>2?arguments[2]:void 0;const{isRtl:t}=qe();return{locationStyles:v(()=>{if(!e.location)return{};const{side:i,align:l}=Wt(e.location.split(" ").length>1?e.location:`${e.location} center`,t.value);function r(m){return n?n(m):0}const c={};return i!=="center"&&(a?c[Re[i]]=`calc(100% - ${r(i)}px)`:c[i]=0),l!=="center"?a?c[Re[l]]=`calc(100% - ${r(l)}px)`:c[l]=0:(i==="center"?c.top=c.left="50%":c[{top:"left",bottom:"left",left:"top",right:"top"}[i]]="50%",c.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[i]),c})}}const vn=S({absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},bufferColor:String,bufferOpacity:[Number,String],clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},opacity:[Number,String],reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...R(),...ot({location:"top"}),...ee(),...X(),...U()},"VProgressLinear"),fn=L()({name:"VProgressLinear",props:vn(),emits:{"update:modelValue":e=>!0},setup(e,a){var B;let{slots:n}=a;const t=Ge(e,"modelValue"),{isRtl:s,rtlClasses:i}=qe(),{themeClasses:l}=q(e),{locationStyles:r}=ut(e),{textColorClasses:c,textColorStyles:m}=re(e,"color"),{backgroundColorClasses:g,backgroundColorStyles:y}=se(v(()=>e.bgColor||e.color)),{backgroundColorClasses:o,backgroundColorStyles:d}=se(v(()=>e.bufferColor||e.bgColor||e.color)),{backgroundColorClasses:b,backgroundColorStyles:f}=se(e,"color"),{roundedClasses:C}=te(e),{intersectionRef:_,isIntersecting:T}=rt(),I=v(()=>parseFloat(e.max)),w=v(()=>parseFloat(e.height)),z=v(()=>Ee(parseFloat(e.bufferValue)/I.value*100,0,100)),O=v(()=>Ee(parseFloat(t.value)/I.value*100,0,100)),N=v(()=>s.value!==e.reverse),Y=v(()=>e.indeterminate?"fade-transition":"slide-x-transition"),F=Ot&&((B=window.matchMedia)==null?void 0:B.call(window,"(forced-colors: active)").matches);function J(h){if(!_.value)return;const{left:k,right:V,width:p}=_.value.getBoundingClientRect(),H=N.value?p-h.clientX+(V-p):h.clientX-k;t.value=Math.round(H/p*I.value)}return A(()=>u(e.tag,{ref:_,class:["v-progress-linear",{"v-progress-linear--absolute":e.absolute,"v-progress-linear--active":e.active&&T.value,"v-progress-linear--reverse":N.value,"v-progress-linear--rounded":e.rounded,"v-progress-linear--rounded-bar":e.roundedBar,"v-progress-linear--striped":e.striped},C.value,l.value,i.value,e.class],style:[{bottom:e.location==="bottom"?0:void 0,top:e.location==="top"?0:void 0,height:e.active?x(w.value):0,"--v-progress-linear-height":x(w.value),...e.absolute?r.value:{}},e.style],role:"progressbar","aria-hidden":e.active?"false":"true","aria-valuemin":"0","aria-valuemax":e.max,"aria-valuenow":e.indeterminate?void 0:Math.min(parseFloat(t.value),I.value),onClick:e.clickable&&J},{default:()=>[e.stream&&u("div",{key:"stream",class:["v-progress-linear__stream",c.value],style:{...m.value,[N.value?"left":"right"]:x(-w.value),borderTop:`${x(w.value/2)} dotted`,opacity:parseFloat(e.bufferOpacity),top:`calc(50% - ${x(w.value/4)})`,width:x(100-z.value,"%"),"--v-progress-linear-stream-to":x(w.value*(N.value?1:-1))}},null),u("div",{class:["v-progress-linear__background",F?void 0:g.value],style:[y.value,{opacity:parseFloat(e.bgOpacity),width:e.stream?0:void 0}]},null),u("div",{class:["v-progress-linear__buffer",F?void 0:o.value],style:[d.value,{opacity:parseFloat(e.bufferOpacity),width:x(z.value,"%")}]},null),u(ce,{name:Y.value},{default:()=>[e.indeterminate?u("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(h=>u("div",{key:h,class:["v-progress-linear__indeterminate",h,F?void 0:b.value],style:f.value},null))]):u("div",{class:["v-progress-linear__determinate",F?void 0:b.value],style:[f.value,{width:x(O.value,"%")}]},null)]}),n.default&&u("div",{class:"v-progress-linear__content"},[n.default({value:O.value,buffer:z.value})])]})),{}}}),mn=S({loading:[Boolean,String]},"loader");function gn(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:M();return{loaderClasses:v(()=>({[`${a}--loading`]:e.loading}))}}function An(e,a){var t;let{slots:n}=a;return u("div",{class:`${e.name}__loader`},[((t=n.default)==null?void 0:t.call(n,{color:e.color,isActive:e.active}))||u(fn,{absolute:e.absolute,active:e.active,color:e.color,height:"2",indeterminate:!0},null)])}const yn=["static","relative","fixed","absolute","sticky"],hn=S({position:{type:String,validator:e=>yn.includes(e)}},"position");function bn(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:M();return{positionClasses:v(()=>e.position?`${a}--${e.position}`:void 0)}}function Cn(){const e=Q("useRoute");return v(()=>{var a;return(a=e==null?void 0:e.proxy)==null?void 0:a.$route})}function On(){var e,a;return(a=(e=Q("useRouter"))==null?void 0:e.proxy)==null?void 0:a.$router}function Sn(e,a){var y,o;const n=Ft("RouterLink"),t=v(()=>!!(e.href||e.to)),s=v(()=>(t==null?void 0:t.value)||Te(a,"click")||Te(e,"click"));if(typeof n=="string"||!("useLink"in n)){const d=$(e,"href");return{isLink:t,isClickable:s,href:d,linkProps:be({href:d})}}const i=v(()=>({...e,to:$(()=>e.to||"")})),l=n.useLink(i.value),r=v(()=>e.to?l:void 0),c=Cn(),m=v(()=>{var d,b,f;return r.value?e.exact?c.value?((f=r.value.isExactActive)==null?void 0:f.value)&&Ue(r.value.route.value.query,c.value.query):((b=r.value.isExactActive)==null?void 0:b.value)??!1:((d=r.value.isActive)==null?void 0:d.value)??!1:!1}),g=v(()=>{var d;return e.to?(d=r.value)==null?void 0:d.route.value.href:e.href});return{isLink:t,isClickable:s,isActive:m,route:(y=r.value)==null?void 0:y.route,navigate:(o=r.value)==null?void 0:o.navigate,href:g,linkProps:be({href:g,"aria-current":v(()=>m.value?"page":void 0)})}}const _n=S({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");function kn(e,a){W(()=>{var n;return(n=e.isActive)==null?void 0:n.value},n=>{e.isLink.value&&n&&a&&De(()=>{a(!0)})},{immediate:!0})}const Ce=Symbol("rippleStop"),xn=80;function Ae(e,a){e.style.transform=a,e.style.webkitTransform=a}function Se(e){return e.constructor.name==="TouchEvent"}function ct(e){return e.constructor.name==="KeyboardEvent"}const wn=function(e,a){var y;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},t=0,s=0;if(!ct(e)){const o=a.getBoundingClientRect(),d=Se(e)?e.touches[e.touches.length-1]:e;t=d.clientX-o.left,s=d.clientY-o.top}let i=0,l=.3;(y=a._ripple)!=null&&y.circle?(l=.15,i=a.clientWidth/2,i=n.center?i:i+Math.sqrt((t-i)**2+(s-i)**2)/4):i=Math.sqrt(a.clientWidth**2+a.clientHeight**2)/2;const r=`${(a.clientWidth-i*2)/2}px`,c=`${(a.clientHeight-i*2)/2}px`,m=n.center?r:`${t-i}px`,g=n.center?c:`${s-i}px`;return{radius:i,scale:l,x:m,y:g,centerX:r,centerY:c}},oe={show(e,a){var d;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((d=a==null?void 0:a._ripple)!=null&&d.enabled))return;const t=document.createElement("span"),s=document.createElement("span");t.appendChild(s),t.className="v-ripple__container",n.class&&(t.className+=` ${n.class}`);const{radius:i,scale:l,x:r,y:c,centerX:m,centerY:g}=wn(e,a,n),y=`${i*2}px`;s.className="v-ripple__animation",s.style.width=y,s.style.height=y,a.appendChild(t);const o=window.getComputedStyle(a);o&&o.position==="static"&&(a.style.position="relative",a.dataset.previousPosition="static"),s.classList.add("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--visible"),Ae(s,`translate(${r}, ${c}) scale3d(${l},${l},${l})`),s.dataset.activated=String(performance.now()),setTimeout(()=>{s.classList.remove("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--in"),Ae(s,`translate(${m}, ${g}) scale3d(1,1,1)`)},0)},hide(e){var i;if(!((i=e==null?void 0:e._ripple)!=null&&i.enabled))return;const a=e.getElementsByClassName("v-ripple__animation");if(a.length===0)return;const n=a[a.length-1];if(n.dataset.isHiding)return;n.dataset.isHiding="true";const t=performance.now()-Number(n.dataset.activated),s=Math.max(250-t,0);setTimeout(()=>{n.classList.remove("v-ripple__animation--in"),n.classList.add("v-ripple__animation--out"),setTimeout(()=>{var r;e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),((r=n.parentNode)==null?void 0:r.parentNode)===e&&e.removeChild(n.parentNode)},300)},s)}};function dt(e){return typeof e>"u"||!!e}function K(e){const a={},n=e.currentTarget;if(!(!(n!=null&&n._ripple)||n._ripple.touched||e[Ce])){if(e[Ce]=!0,Se(e))n._ripple.touched=!0,n._ripple.isTouch=!0;else if(n._ripple.isTouch)return;if(a.center=n._ripple.centered||ct(e),n._ripple.class&&(a.class=n._ripple.class),Se(e)){if(n._ripple.showTimerCommit)return;n._ripple.showTimerCommit=()=>{oe.show(e,n,a)},n._ripple.showTimer=window.setTimeout(()=>{var t;(t=n==null?void 0:n._ripple)!=null&&t.showTimerCommit&&(n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null)},xn)}else oe.show(e,n,a)}}function Oe(e){e[Ce]=!0}function P(e){const a=e.currentTarget;if(a!=null&&a._ripple){if(window.clearTimeout(a._ripple.showTimer),e.type==="touchend"&&a._ripple.showTimerCommit){a._ripple.showTimerCommit(),a._ripple.showTimerCommit=null,a._ripple.showTimer=window.setTimeout(()=>{P(e)});return}window.setTimeout(()=>{a._ripple&&(a._ripple.touched=!1)}),oe.hide(a)}}function vt(e){const a=e.currentTarget;a!=null&&a._ripple&&(a._ripple.showTimerCommit&&(a._ripple.showTimerCommit=null),window.clearTimeout(a._ripple.showTimer))}let Z=!1;function ft(e){!Z&&(e.keyCode===$e.enter||e.keyCode===$e.space)&&(Z=!0,K(e))}function mt(e){Z=!1,P(e)}function gt(e){Z&&(Z=!1,P(e))}function yt(e,a,n){const{value:t,modifiers:s}=a,i=dt(t);if(i||oe.hide(e),e._ripple=e._ripple??{},e._ripple.enabled=i,e._ripple.centered=s.center,e._ripple.circle=s.circle,Ht(t)&&t.class&&(e._ripple.class=t.class),i&&!n){if(s.stop){e.addEventListener("touchstart",Oe,{passive:!0}),e.addEventListener("mousedown",Oe);return}e.addEventListener("touchstart",K,{passive:!0}),e.addEventListener("touchend",P,{passive:!0}),e.addEventListener("touchmove",vt,{passive:!0}),e.addEventListener("touchcancel",P),e.addEventListener("mousedown",K),e.addEventListener("mouseup",P),e.addEventListener("mouseleave",P),e.addEventListener("keydown",ft),e.addEventListener("keyup",mt),e.addEventListener("blur",gt),e.addEventListener("dragstart",P,{passive:!0})}else!i&&n&&ht(e)}function ht(e){e.removeEventListener("mousedown",K),e.removeEventListener("touchstart",K),e.removeEventListener("touchend",P),e.removeEventListener("touchmove",vt),e.removeEventListener("touchcancel",P),e.removeEventListener("mouseup",P),e.removeEventListener("mouseleave",P),e.removeEventListener("keydown",ft),e.removeEventListener("keyup",mt),e.removeEventListener("dragstart",P),e.removeEventListener("blur",gt)}function Bn(e,a){yt(e,a,!1)}function In(e){delete e._ripple,ht(e)}function Vn(e,a){if(a.value===a.oldValue)return;const n=dt(a.oldValue);yt(e,a,n)}const Pn={mounted:Bn,unmounted:In,updated:Vn},Ln=S({active:{type:Boolean,default:void 0},activeColor:String,baseColor:String,symbol:{type:null,default:lt},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:le,appendIcon:le,block:Boolean,readonly:Boolean,slim:Boolean,stacked:Boolean,ripple:{type:[Boolean,Object],default:!0},text:String,...we(),...R(),...Ie(),...Je(),...et(),...tn(),...mn(),...ot(),...hn(),...ee(),..._n(),...fe(),...X({tag:"button"}),...U(),...Pe({variant:"elevated"})},"VBtn"),Fn=L()({name:"VBtn",props:Ln(),emits:{"group:selected":e=>!0},setup(e,a){let{attrs:n,slots:t}=a;const{themeClasses:s}=q(e),{borderClasses:i}=Be(e),{densityClasses:l}=Ve(e),{dimensionStyles:r}=Ke(e),{elevationClasses:c}=tt(e),{loaderClasses:m}=gn(e),{locationStyles:g}=ut(e),{positionClasses:y}=bn(e),{roundedClasses:o}=te(e),{sizeClasses:d,sizeStyles:b}=me(e),f=nn(e,e.symbol,!1),C=Sn(e,n),_=v(()=>{var B;return e.active!==void 0?e.active:C.isLink.value?(B=C.isActive)==null?void 0:B.value:f==null?void 0:f.isSelected.value}),T=v(()=>_.value?e.activeColor??e.color:e.color),I=v(()=>{var h,k;return{color:(f==null?void 0:f.isSelected.value)&&(!C.isLink.value||((h=C.isActive)==null?void 0:h.value))||!f||((k=C.isActive)==null?void 0:k.value)?T.value??e.baseColor:e.baseColor,variant:e.variant}}),{colorClasses:w,colorStyles:z,variantClasses:O}=at(I),N=v(()=>(f==null?void 0:f.disabled.value)||e.disabled),Y=v(()=>e.variant==="elevated"&&!(e.disabled||e.flat||e.border)),F=v(()=>{if(!(e.value===void 0||typeof e.value=="symbol"))return Object(e.value)===e.value?JSON.stringify(e.value,null,0):e.value});function J(B){var h;N.value||C.isLink.value&&(B.metaKey||B.ctrlKey||B.shiftKey||B.button!==0||n.target==="_blank")||((h=C.navigate)==null||h.call(C,B),f==null||f.toggle())}return kn(C,f==null?void 0:f.select),A(()=>{const B=C.isLink.value?"a":e.tag,h=!!(e.prependIcon||t.prepend),k=!!(e.appendIcon||t.append),V=!!(e.icon&&e.icon!==!0);return ye(u(B,de({type:B==="a"?void 0:"button",class:["v-btn",f==null?void 0:f.selectedClass.value,{"v-btn--active":_.value,"v-btn--block":e.block,"v-btn--disabled":N.value,"v-btn--elevated":Y.value,"v-btn--flat":e.flat,"v-btn--icon":!!e.icon,"v-btn--loading":e.loading,"v-btn--readonly":e.readonly,"v-btn--slim":e.slim,"v-btn--stacked":e.stacked},s.value,i.value,w.value,l.value,c.value,m.value,y.value,o.value,d.value,O.value,e.class],style:[z.value,r.value,g.value,b.value,e.style],"aria-busy":e.loading?!0:void 0,disabled:N.value||void 0,tabindex:e.loading||e.readonly?-1:void 0,onClick:J,value:F.value},C.linkProps),{default:()=>{var p;return[nt(!0,"v-btn"),!e.icon&&h&&u("span",{key:"prepend",class:"v-btn__prepend"},[t.prepend?u(ae,{key:"prepend-defaults",disabled:!e.prependIcon,defaults:{VIcon:{icon:e.prependIcon}}},t.prepend):u(ie,{key:"prepend-icon",icon:e.prependIcon},null)]),u("span",{class:"v-btn__content","data-no-activator":""},[!t.default&&V?u(ie,{key:"content-icon",icon:e.icon},null):u(ae,{key:"content-defaults",disabled:!V,defaults:{VIcon:{icon:e.icon}}},{default:()=>{var H;return[((H=t.default)==null?void 0:H.call(t))??e.text]}})]),!e.icon&&k&&u("span",{key:"append",class:"v-btn__append"},[t.append?u(ae,{key:"append-defaults",disabled:!e.appendIcon,defaults:{VIcon:{icon:e.appendIcon}}},t.append):u(ie,{key:"append-icon",icon:e.appendIcon},null)]),!!e.loading&&u("span",{key:"loader",class:"v-btn__loader"},[((p=t.loader)==null?void 0:p.call(t))??u(dn,{color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0,width:"2"},null)])]}}),[[Pn,!N.value&&e.ripple,"",{center:!!e.icon}]])}),{group:f}}}),En=S({start:Boolean,end:Boolean,icon:le,image:String,text:String,...we(),...R(),...Ie(),...ee(),...fe(),...X(),...U(),...Pe({variant:"flat"})},"VAvatar"),Hn=L()({name:"VAvatar",props:En(),setup(e,a){let{slots:n}=a;const{themeClasses:t}=q(e),{borderClasses:s}=Be(e),{colorClasses:i,colorStyles:l,variantClasses:r}=at(e),{densityClasses:c}=Ve(e),{roundedClasses:m}=te(e),{sizeClasses:g,sizeStyles:y}=me(e);return A(()=>u(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},t.value,s.value,i.value,c.value,m.value,g.value,r.value,e.class],style:[l.value,y.value,e.style]},{default:()=>[n.default?u(ae,{key:"content-defaults",defaults:{VImg:{cover:!0,src:e.image},VIcon:{icon:e.icon}}},{default:()=>[n.default()]}):e.image?u(Kt,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?u(ie,{key:"icon",icon:e.icon},null):e.text,nt(!1,"v-avatar")]})),{}}});export{ze as A,zn as B,mn as C,ot as D,hn as E,gn as F,ut as G,bn as H,qt as I,Nn as J,Rn as K,An as L,ne as M,Yt as N,Ne as O,Pn as R,Kt as V,we as a,et as b,ee as c,Be as d,tt as e,te as f,ae as g,pn as h,Ln as i,Fn as j,$n as k,Ie as l,X as m,Je as n,_n as o,Pe as p,Sn as q,at as r,Ve as s,Ke as t,se as u,nt as v,Hn as w,ie as x,re as y,On as z};
