(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[207],{227:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getDomainLocale=function(t,e,n,r){return!1},("function"==typeof e.default||"object"==typeof e.default&&null!==e.default)&&void 0===e.default.__esModule&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),t.exports=e.default)},1551:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(2648).Z,o=n(7273).Z,i=r(n(7294)),s=n(1003),a=n(4465),u=n(2692),l=n(8245),c=n(9246),h=n(227),f=n(3468);let d={};function p(t,e,n,r){if(!t||!s.isLocalURL(e))return;Promise.resolve(t.prefetch(e,n,r)).catch(t=>{});let o=r&&void 0!==r.locale?r.locale:t&&t.locale;d[e+"%"+n+(o?"%"+o:"")]=!0}let g=i.default.forwardRef(function(t,e){let n,r;let{href:g,as:v,children:m,prefetch:_,passHref:y,replace:b,shallow:w,scroll:x,locale:k,onClick:M,onMouseEnter:C,onTouchStart:O,legacyBehavior:R=!0!==Boolean(!0)}=t,E=o(t,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=m,R&&("string"==typeof n||"number"==typeof n)&&(n=i.default.createElement("a",null,n));let S=!1!==_,L=i.default.useContext(u.RouterContext),j=i.default.useContext(l.AppRouterContext);j&&(L=j);let{href:P,as:T}=i.default.useMemo(()=>{let[t,e]=s.resolveHref(L,g,!0);return{href:t,as:v?s.resolveHref(L,v):e||t}},[L,g,v]),D=i.default.useRef(P),z=i.default.useRef(T);R&&(r=i.default.Children.only(n));let A=R?r&&"object"==typeof r&&r.ref:e,[I,W,$]=c.useIntersection({rootMargin:"200px"}),N=i.default.useCallback(t=>{(z.current!==T||D.current!==P)&&($(),z.current=T,D.current=P),I(t),A&&("function"==typeof A?A(t):"object"==typeof A&&(A.current=t))},[T,A,P,$,I]);i.default.useEffect(()=>{let t=W&&S&&s.isLocalURL(P),e=void 0!==k?k:L&&L.locale,n=d[P+"%"+T+(e?"%"+e:"")];t&&!n&&p(L,P,T,{locale:e})},[T,P,W,k,S,L]);let B={ref:N,onClick(t){R||"function"!=typeof M||M(t),R&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(t),t.defaultPrevented||function(t,e,n,r,o,a,u,l,c,h){let{nodeName:f}=t.currentTarget,d="A"===f.toUpperCase();if(d&&(function(t){let{target:e}=t.currentTarget;return e&&"_self"!==e||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which}(t)||!s.isLocalURL(n)))return;t.preventDefault();let p=()=>{"beforePopState"in e?e[o?"replace":"push"](n,r,{shallow:a,locale:l,scroll:u}):e[o?"replace":"push"](r||n,{forceOptimisticNavigation:!h})};c?i.default.startTransition(p):p()}(t,L,P,T,b,w,x,k,Boolean(j),S)},onMouseEnter(t){R||"function"!=typeof C||C(t),R&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(t),!(!S&&j)&&s.isLocalURL(P)&&p(L,P,T,{priority:!0})},onTouchStart(t){R||"function"!=typeof O||O(t),R&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(t),!(!S&&j)&&s.isLocalURL(P)&&p(L,P,T,{priority:!0})}};if(!R||y||"a"===r.type&&!("href"in r.props)){let U=void 0!==k?k:L&&L.locale,q=L&&L.isLocaleDomain&&h.getDomainLocale(T,U,L.locales,L.domainLocales);B.href=q||f.addBasePath(a.addLocale(T,U,L&&L.defaultLocale))}return R?i.default.cloneElement(r,B):i.default.createElement("a",Object.assign({},E,B),n)});e.default=g,("function"==typeof e.default||"object"==typeof e.default&&null!==e.default)&&void 0===e.default.__esModule&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),t.exports=e.default)},9246:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useIntersection=function(t){let{rootRef:e,rootMargin:n,disabled:u}=t,l=u||!i,[c,h]=r.useState(!1),[f,d]=r.useState(null);r.useEffect(()=>{if(i){if(!l&&!c&&f&&f.tagName){let t=function(t,e,n){let{id:r,observer:o,elements:i}=function(t){let e;let n={root:t.root||null,margin:t.rootMargin||""},r=a.find(t=>t.root===n.root&&t.margin===n.margin);if(r&&(e=s.get(r)))return e;let o=new Map,i=new IntersectionObserver(t=>{t.forEach(t=>{let e=o.get(t.target),n=t.isIntersecting||t.intersectionRatio>0;e&&n&&e(n)})},t);return e={id:n,observer:i,elements:o},a.push(n),s.set(n,e),e}(n);return i.set(t,e),o.observe(t),function(){if(i.delete(t),o.unobserve(t),0===i.size){o.disconnect(),s.delete(r);let e=a.findIndex(t=>t.root===r.root&&t.margin===r.margin);e>-1&&a.splice(e,1)}}}(f,t=>t&&h(t),{root:null==e?void 0:e.current,rootMargin:n});return t}}else if(!c){let r=o.requestIdleCallback(()=>h(!0));return()=>o.cancelIdleCallback(r)}},[f,l,n,e,c]);let p=r.useCallback(()=>{h(!1)},[]);return[d,c,p]};var r=n(7294),o=n(4686);let i="function"==typeof IntersectionObserver,s=new Map,a=[];("function"==typeof e.default||"object"==typeof e.default&&null!==e.default)&&void 0===e.default.__esModule&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),t.exports=e.default)},8245:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.TemplateContext=e.GlobalLayoutRouterContext=e.LayoutRouterContext=e.AppRouterContext=void 0;var r=(0,n(2648).Z)(n(7294));let o=r.default.createContext(null);e.AppRouterContext=o;let i=r.default.createContext(null);e.LayoutRouterContext=i;let s=r.default.createContext(null);e.GlobalLayoutRouterContext=s;let a=r.default.createContext(null);e.TemplateContext=a},9008:function(t,e,n){t.exports=n(3121)},1664:function(t,e,n){t.exports=n(1551)},1163:function(t,e,n){t.exports=n(880)},2811:function(t,e,n){"use strict";n.d(e,{c:function(){return O},m:function(){return M}});var r=n(7294);let o="http://www.w3.org/2000/svg";class i{constructor(t){this.seed=t}next(){return this.seed?(2147483648-1&(this.seed=Math.imul(48271,this.seed)))/2147483648:Math.random()}}function s(t,e,n,r,o){return{type:"path",ops:f(t,e,n,r,o)}}function a(t,e,n){let r=(t||[]).length;if(r>2){let o=[];for(let i=0;i<r-1;i++)o.push(...f(t[i][0],t[i][1],t[i+1][0],t[i+1][1],n));return e&&o.push(...f(t[r-1][0],t[r-1][1],t[0][0],t[0][1],n)),{type:"path",ops:o}}return 2===r?s(t[0][0],t[0][1],t[1][0],t[1][1],n):{type:"path",ops:[]}}function u(t,e,n,r,o){return function(t,e,n,r){let[o,i]=g(r.increment,t,e,r.rx,r.ry,1,r.increment*c(.1,c(.4,1,n),n),n),s=p(o,null,n);if(!n.disableMultiStroke){let[a]=g(r.increment,t,e,r.rx,r.ry,1.5,0,n),u=p(a,null,n);s=s.concat(u)}return{estimatedPoints:i,opset:{type:"path",ops:s}}}(t,e,o,function(t,e,n){let r=Math.max(n.curveStepCount,n.curveStepCount/Math.sqrt(200)*Math.sqrt(2*Math.PI*Math.sqrt((Math.pow(t/2,2)+Math.pow(e/2,2))/2))),o=Math.abs(t/2),i=Math.abs(e/2),s=1-n.curveFitting;return o+=h(o*s,n),i+=h(i*s,n),{increment:2*Math.PI/r,rx:o,ry:i}}(n,r,o)).opset}function l(t){return t.randomizer||(t.randomizer=new i(t.seed||0)),t.randomizer.next()}function c(t,e,n,r=1){return n.roughness*r*(l(n)*(e-t)+t)}function h(t,e,n=1){return c(-t,t,e,n)}function f(t,e,n,r,o,i=!1){let s=i?o.disableMultiStrokeFill:o.disableMultiStroke,a=d(t,e,n,r,o,!0,!1);if(s)return a;let u=d(t,e,n,r,o,!0,!0);return a.concat(u)}function d(t,e,n,r,o,i,s){let a=Math.pow(t-n,2)+Math.pow(e-r,2),u=Math.sqrt(a),c=1;c=u<200?1:u>500?.4:-.0016668*u+1.233334;let f=o.maxRandomnessOffset||0;f*f*100>a&&(f=u/10);let d=f/2,p=.2+.2*l(o),g=o.bowing*o.maxRandomnessOffset*(r-e)/200,v=o.bowing*o.maxRandomnessOffset*(t-n)/200;g=h(g,o,c),v=h(v,o,c);let m=[],_=()=>h(d,o,c),y=()=>h(f,o,c);return i&&(s?m.push({op:"move",data:[t+_(),e+_()]}):m.push({op:"move",data:[t+h(f,o,c),e+h(f,o,c)]})),s?m.push({op:"bcurveTo",data:[g+t+(n-t)*p+_(),v+e+(r-e)*p+_(),g+t+2*(n-t)*p+_(),v+e+2*(r-e)*p+_(),n+_(),r+_()]}):m.push({op:"bcurveTo",data:[g+t+(n-t)*p+y(),v+e+(r-e)*p+y(),g+t+2*(n-t)*p+y(),v+e+2*(r-e)*p+y(),n+y(),r+y()]}),m}function p(t,e,n){let r=t.length,o=[];if(r>3){let i=[],s=1-n.curveTightness;o.push({op:"move",data:[t[1][0],t[1][1]]});for(let a=1;a+2<r;a++){let u=t[a];i[0]=[u[0],u[1]],i[1]=[u[0]+(s*t[a+1][0]-s*t[a-1][0])/6,u[1]+(s*t[a+1][1]-s*t[a-1][1])/6],i[2]=[t[a+1][0]+(s*t[a][0]-s*t[a+2][0])/6,t[a+1][1]+(s*t[a][1]-s*t[a+2][1])/6],i[3]=[t[a+1][0],t[a+1][1]],o.push({op:"bcurveTo",data:[i[1][0],i[1][1],i[2][0],i[2][1],i[3][0],i[3][1]]})}if(e&&2===e.length){let l=n.maxRandomnessOffset;o.push({op:"lineTo",data:[e[0]+h(l,n),e[1]+h(l,n)]})}}else 3===r?(o.push({op:"move",data:[t[1][0],t[1][1]]}),o.push({op:"bcurveTo",data:[t[1][0],t[1][1],t[2][0],t[2][1],t[2][0],t[2][1]]})):2===r&&o.push(...f(t[0][0],t[0][1],t[1][0],t[1][1],n));return o}function g(t,e,n,r,o,i,s,a){let u=[],l=[],c=h(.5,a)-Math.PI/2;l.push([h(i,a)+e+.9*r*Math.cos(c-t),h(i,a)+n+.9*o*Math.sin(c-t)]);for(let f=c;f<2*Math.PI+c-.01;f+=t){let d=[h(i,a)+e+r*Math.cos(f),h(i,a)+n+o*Math.sin(f)];u.push(d),l.push(d)}return l.push([h(i,a)+e+r*Math.cos(c+2*Math.PI+.5*s),h(i,a)+n+o*Math.sin(c+2*Math.PI+.5*s)]),l.push([h(i,a)+e+.98*r*Math.cos(c+s),h(i,a)+n+.98*o*Math.sin(c+s)]),l.push([h(i,a)+e+.9*r*Math.cos(c+.5*s),h(i,a)+n+.9*o*Math.sin(c+.5*s)]),[l,u]}function v(t,e){return{maxRandomnessOffset:2,roughness:"highlight"===t?3:1.5,bowing:1,stroke:"#000",strokeWidth:1.5,curveTightness:0,curveFitting:.95,curveStepCount:9,fillStyle:"hachure",fillWeight:-1,hachureAngle:-41,hachureGap:-1,dashOffset:-1,dashGap:-1,zigzagOffset:-1,combineNestedSvgPaths:!1,disableMultiStroke:"double"!==t,disableMultiStrokeFill:!1,seed:e}}class m{constructor(t,e){this._state="unattached",this._resizing=!1,this._seed=Math.floor(2147483648*Math.random()),this._lastSizes=[],this._animationDelay=0,this._resizeListener=()=>{this._resizing||(this._resizing=!0,setTimeout(()=>{this._resizing=!1,"showing"===this._state&&this.haveRectsChanged()&&this.show()},400))},this._e=t,this._config=JSON.parse(JSON.stringify(e)),this.attach()}get animate(){return this._config.animate}set animate(t){this._config.animate=t}get animationDuration(){return this._config.animationDuration}set animationDuration(t){this._config.animationDuration=t}get iterations(){return this._config.iterations}set iterations(t){this._config.iterations=t}get color(){return this._config.color}set color(t){this._config.color!==t&&(this._config.color=t,this.refresh())}get strokeWidth(){return this._config.strokeWidth}set strokeWidth(t){this._config.strokeWidth!==t&&(this._config.strokeWidth=t,this.refresh())}get padding(){return this._config.padding}set padding(t){this._config.padding!==t&&(this._config.padding=t,this.refresh())}attach(){if("unattached"===this._state&&this._e.parentElement){!function(){if(!window.__rno_kf_s){let t=window.__rno_kf_s=document.createElement("style");t.textContent="@keyframes rough-notation-dash { to { stroke-dashoffset: 0; } }",document.head.appendChild(t)}}();let t=this._svg=document.createElementNS(o,"svg");t.setAttribute("class","rough-annotation");let e=t.style;e.position="absolute",e.top="0",e.left="0",e.overflow="visible",e.pointerEvents="none",e.width="100px",e.height="100px";let n="highlight"===this._config.type;if(this._e.insertAdjacentElement(n?"beforebegin":"afterend",t),this._state="not-showing",n){let r=window.getComputedStyle(this._e).position;r&&"static"!==r||(this._e.style.position="relative")}this.attachListeners()}}detachListeners(){window.removeEventListener("resize",this._resizeListener),this._ro&&this._ro.unobserve(this._e)}attachListeners(){this.detachListeners(),window.addEventListener("resize",this._resizeListener,{passive:!0}),!this._ro&&"ResizeObserver"in window&&(this._ro=new window.ResizeObserver(t=>{for(let e of t)e.contentRect&&this._resizeListener()})),this._ro&&this._ro.observe(this._e)}haveRectsChanged(){if(this._lastSizes.length){let t=this.rects();if(t.length!==this._lastSizes.length)return!0;for(let e=0;e<t.length;e++)if(!this.isSameRect(t[e],this._lastSizes[e]))return!0}return!1}isSameRect(t,e){let n=(t,e)=>Math.round(t)===Math.round(e);return n(t.x,e.x)&&n(t.y,e.y)&&n(t.w,e.w)&&n(t.h,e.h)}isShowing(){return"not-showing"!==this._state}refresh(){this.isShowing()&&!this.pendingRefresh&&(this.pendingRefresh=Promise.resolve().then(()=>{this.isShowing()&&this.show(),delete this.pendingRefresh}))}show(){switch(this._state){case"unattached":break;case"showing":this.hide(),this._svg&&this.render(this._svg,!0);break;case"not-showing":this.attach(),this._svg&&this.render(this._svg,!1)}}hide(){if(this._svg)for(;this._svg.lastChild;)this._svg.removeChild(this._svg.lastChild);this._state="not-showing"}remove(){this._svg&&this._svg.parentElement&&this._svg.parentElement.removeChild(this._svg),this._svg=void 0,this._state="unattached",this.detachListeners()}render(t,e){let n=this._config;e&&((n=JSON.parse(JSON.stringify(this._config))).animate=!1);let r=this.rects(),i=0;r.forEach(t=>i+=t.w);let l=n.animationDuration||800,c=0;for(let h=0;h<r.length;h++){let f=l*(r[h].w/i);(function(t,e,n,r,i,l){let c=[],h=n.strokeWidth||2,f=function(t){let e=t.padding;if(e||0===e){if("number"==typeof e)return[e,e,e,e];if(Array.isArray(e)&&e.length)switch(e.length){case 4:return[...e];case 1:return[e[0],e[0],e[0],e[0]];case 2:return[...e,...e];case 3:return[...e,e[1]];default:return[e[0],e[1],e[2],e[3]]}}return[5,5,5,5]}(n),d=void 0===n.animate||!!n.animate,p=n.iterations||2,g=n.rtl?1:0,m=v("single",l);switch(n.type){case"underline":{let _=e.y+e.h+f[2];for(let y=g;y<p+g;y++)y%2?c.push(s(e.x+e.w,_,e.x,_,m)):c.push(s(e.x,_,e.x+e.w,_,m));break}case"strike-through":{let b=e.y+e.h/2;for(let w=g;w<p+g;w++)w%2?c.push(s(e.x+e.w,b,e.x,b,m)):c.push(s(e.x,b,e.x+e.w,b,m));break}case"box":{let x=e.x-f[3],k=e.y-f[0],M=e.w+(f[1]+f[3]),C=e.h+(f[0]+f[2]);for(let O=0;O<p;O++)c.push(a([[x,k],[x+M,k],[x+M,k+C],[x,k+C]],!0,m));break}case"bracket":{let R=Array.isArray(n.brackets)?n.brackets:n.brackets?[n.brackets]:["right"],E=e.x-2*f[3],S=e.x+e.w+2*f[1],L=e.y-2*f[0],j=e.y+e.h+2*f[2];for(let P of R){let T;switch(P){case"bottom":T=[[E,e.y+e.h],[E,j],[S,j],[S,e.y+e.h]];break;case"top":T=[[E,e.y],[E,L],[S,L],[S,e.y]];break;case"left":T=[[e.x,L],[E,L],[E,j],[e.x,j]];break;case"right":T=[[e.x+e.w,L],[S,L],[S,j],[e.x+e.w,j]]}T&&c.push(a(T,!1,m))}break}case"crossed-off":{let D=e.x,z=e.y,A=D+e.w,I=z+e.h;for(let W=g;W<p+g;W++)W%2?c.push(s(A,I,D,z,m)):c.push(s(D,z,A,I,m));for(let $=g;$<p+g;$++)$%2?c.push(s(D,I,A,z,m)):c.push(s(A,z,D,I,m));break}case"circle":{let N=v("double",l),B=e.w+(f[1]+f[3]),U=e.h+(f[0]+f[2]),q=e.x-f[3]+B/2,F=e.y-f[0]+U/2,G=Math.floor(p/2),J=p-2*G;for(let K=0;K<G;K++)c.push(u(q,F,B,U,N));for(let H=0;H<J;H++)c.push(u(q,F,B,U,m));break}case"highlight":{let Z=v("highlight",l);h=.95*e.h;let Q=e.y+e.h/2;for(let V=g;V<p+g;V++)V%2?c.push(s(e.x+e.w,Q,e.x,Q,Z)):c.push(s(e.x,Q,e.x+e.w,Q,Z))}}if(c.length){let X=function(t){let e=[];for(let n of t){let r="";for(let o of n.ops){let i=o.data;switch(o.op){case"move":r.trim()&&e.push(r.trim()),r=`M${i[0]} ${i[1]} `;break;case"bcurveTo":r+=`C${i[0]} ${i[1]}, ${i[2]} ${i[3]}, ${i[4]} ${i[5]} `;break;case"lineTo":r+=`L${i[0]} ${i[1]} `}}r.trim()&&e.push(r.trim())}return e}(c),Y=[],tt=[],te=0,tn=(t,e,n)=>t.setAttribute(e,n);for(let tr of X){let to=document.createElementNS(o,"path");if(tn(to,"d",tr),tn(to,"fill","none"),tn(to,"stroke",n.color||"currentColor"),tn(to,"stroke-width",""+h),d){let ti=to.getTotalLength();Y.push(ti),te+=ti}t.appendChild(to),tt.push(to)}if(d){let ts=0;for(let ta=0;ta<tt.length;ta++){let tu=tt[ta],tl=Y[ta],tc=te?i*(tl/te):0,th=r+ts,tf=tu.style;tf.strokeDashoffset=""+tl,tf.strokeDasharray=""+tl,tf.animation=`rough-notation-dash ${tc}ms ease-out ${th}ms forwards`,ts+=tc}}}})(t,r[h],n,c+this._animationDelay,f,this._seed),c+=f}this._lastSizes=r,this._state="showing"}rects(){let t=[];if(this._svg){if(this._config.multiline){let e=this._e.getClientRects();for(let n=0;n<e.length;n++)t.push(this.svgRect(this._svg,e[n]))}else t.push(this.svgRect(this._svg,this._e.getBoundingClientRect()))}return t}svgRect(t,e){let n=t.getBoundingClientRect();return{x:(e.x||e.left)-(n.x||n.left),y:(e.y||e.top)-(n.y||n.top),w:e.width,h:e.height}}}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ var _=function(){return(_=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};function y(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;for(var r=Array(t),o=0,e=0;e<n;e++)for(var i=arguments[e],s=0,a=i.length;s<a;s++,o++)r[o]=i[s];return r}var b=(0,r.createContext)(null),w=(0,r.createContext)(null),x={annotations:[]};function k(t,e){var n=e.type,r=e.payload;if("ADD"===n){var o=y(t.annotations,[r]).reduce(function(t,e){var n=_({},t);return"number"==typeof e.order?n.withOrder=y(n.withOrder,[e]).sort(function(t,e){return t.order-e.order}):n.withoutOrder=y(n.withoutOrder,[e]),n},{withOrder:[],withoutOrder:[]});return _(_({},t),{annotations:y(o.withOrder,o.withoutOrder)})}return t}var M=function(t){var e=t.children,n=t.show,o=(0,r.useReducer)(k,x),i=o[0],s=o[1],a=(0,r.useRef)([]);return(0,r.useEffect)(function(){var t=0;i.annotations.forEach(function(e){var r=e.annotation;if(n){var o=setTimeout(function(){r.show()},t);a.current.push(o),t+=r.getAnnotation().animationDuration||800}else r.hide(),a.current.forEach(function(t){clearTimeout(t),a.current=a.current.filter(function(e){return e!==t})})})},[n,i,a]),r.createElement(b.Provider,{value:i},r.createElement(w.Provider,{value:s},e))},C=function(t,e){var n=(0,r.useContext)(b),o=(0,r.useContext)(w),i=(0,r.useRef)({annotation:t,context:n,dispatch:o,order:e});(0,r.useEffect)(function(){var t=i.current,e=t.annotation,n=t.context,r=t.dispatch,o=t.order;if(n&&r)return r({type:"ADD",payload:{annotation:e,order:o}})},[])},O=function(t){var e=t.animate,n=void 0===e||e,o=t.animationDelay,i=void 0===o?0:o,s=t.animationDuration,a=void 0===s?800:s,u=t.brackets,l=t.children,c=t.color,h=t.customElement,f=t.getAnnotationObject,d=t.iterations,p=t.multiline,g=t.order,v=t.padding,y=void 0===v?5:v,b=t.show,w=void 0!==b&&b,x=t.strokeWidth,k=void 0===x?1:x,M=t.type,O=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&0>e.indexOf(r)&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(t);o<r.length;o++)0>e.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]]);return n}(t,["animate","animationDelay","animationDuration","brackets","children","color","customElement","getAnnotationObject","iterations","multiline","order","padding","show","strokeWidth","type"]),R=(0,r.useRef)(null),E=(0,r.useRef)(),S=(0,r.useRef)({playing:!1,timeout:null}),L=(0,r.useRef)({animate:n,animationDuration:a,brackets:u,color:c,getAnnotationObject:f,iterations:void 0===d?2:d,multiline:void 0!==p&&p,padding:y,strokeWidth:k,type:void 0===M?"underline":M}),j=(0,r.useCallback)(function(){S.current.timeout||(S.current.timeout=window.setTimeout(function(){var t,e;S.current.playing=!0,null===(e=null===(t=E.current)||void 0===t?void 0:t.show)||void 0===e||e.call(t),window.setTimeout(function(){S.current.playing=!1,S.current.timeout=null},a)},i))},[i,a]),P=(0,r.useCallback)(function(){var t,e;null===(e=null===(t=E.current)||void 0===t?void 0:t.hide)||void 0===e||e.call(t),S.current.playing=!1,S.current.timeout&&(clearTimeout(S.current.timeout),S.current.timeout=null)},[]);return C({getAnnotation:(0,r.useCallback)(function(){return E.current},[E]),show:j,hide:P},"string"==typeof g?parseInt(g):g),(0,r.useEffect)(function(){var t,e=L.current,n=e.getAnnotationObject;return E.current=(t=R.current,new m(t,e)),n&&n(E.current),function(){var t,e;null===(e=null===(t=E.current)||void 0===t?void 0:t.remove)||void 0===e||e.call(t)}},[]),(0,r.useEffect)(function(){w?j():P()},[E,w,i,S,a,j,P]),(0,r.useEffect)(function(){E.current&&(E.current.animate=n,E.current.animationDuration=a,E.current.color=c,E.current.strokeWidth=k,E.current.padding=y)},[E,n,a,c,k,y]),r.createElement(void 0===h?"span":h,_({ref:R},O),l)}}}]);