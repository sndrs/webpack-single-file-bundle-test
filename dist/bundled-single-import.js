/*! For license information please see bundled-single-import.js.LICENSE.txt */
(()=>{"use strict";var e,t,a={35:(e,t,a)=>{var n=a(959),i={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},r={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},o={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},l={};function s(e){return n.isMemo(e)?o:l[e.$$typeof]||i}l[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},l[n.Memo]=o;var u=Object.defineProperty,d=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,c=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,g=Object.prototype;e.exports=function e(t,a,n){if("string"!=typeof a){if(g){var i=p(a);i&&i!==g&&e(t,i,n)}var o=d(a);f&&(o=o.concat(f(a)));for(var l=s(t),m=s(a),x=0;x<o.length;++x){var y=o[x];if(!(r[y]||n&&n[y]||m&&m[y]||l&&l[y])){var h=c(a,y);try{u(t,y,h)}catch(e){}}}}return t}},843:(e,t)=>{var a="function"==typeof Symbol&&Symbol.for,n=a?Symbol.for("react.element"):60103,i=a?Symbol.for("react.portal"):60106,r=a?Symbol.for("react.fragment"):60107,o=a?Symbol.for("react.strict_mode"):60108,l=a?Symbol.for("react.profiler"):60114,s=a?Symbol.for("react.provider"):60109,u=a?Symbol.for("react.context"):60110,d=a?Symbol.for("react.async_mode"):60111,f=a?Symbol.for("react.concurrent_mode"):60111,c=a?Symbol.for("react.forward_ref"):60112,p=a?Symbol.for("react.suspense"):60113,g=a?Symbol.for("react.suspense_list"):60120,m=a?Symbol.for("react.memo"):60115,x=a?Symbol.for("react.lazy"):60116,y=a?Symbol.for("react.block"):60121,h=a?Symbol.for("react.fundamental"):60117,b=a?Symbol.for("react.responder"):60118,S=a?Symbol.for("react.scope"):60119;function G(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case d:case f:case r:case l:case o:case p:return e;default:switch(e=e&&e.$$typeof){case u:case c:case x:case m:case s:return e;default:return t}}case i:return t}}}function v(e){return G(e)===f}t.AsyncMode=d,t.ConcurrentMode=f,t.ContextConsumer=u,t.ContextProvider=s,t.Element=n,t.ForwardRef=c,t.Fragment=r,t.Lazy=x,t.Memo=m,t.Portal=i,t.Profiler=l,t.StrictMode=o,t.Suspense=p,t.isAsyncMode=function(e){return v(e)||G(e)===d},t.isConcurrentMode=v,t.isContextConsumer=function(e){return G(e)===u},t.isContextProvider=function(e){return G(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return G(e)===c},t.isFragment=function(e){return G(e)===r},t.isLazy=function(e){return G(e)===x},t.isMemo=function(e){return G(e)===m},t.isPortal=function(e){return G(e)===i},t.isProfiler=function(e){return G(e)===l},t.isStrictMode=function(e){return G(e)===o},t.isSuspense=function(e){return G(e)===p},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===r||e===f||e===l||e===o||e===p||e===g||"object"==typeof e&&null!==e&&(e.$$typeof===x||e.$$typeof===m||e.$$typeof===s||e.$$typeof===u||e.$$typeof===c||e.$$typeof===h||e.$$typeof===b||e.$$typeof===S||e.$$typeof===y)},t.typeOf=G},959:(e,t,a)=>{e.exports=a(843)},34:(e,t,a)=>{var n=a(474),i=Symbol.for("react.element"),r=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,a){var n,r={},u=null,d=null;for(n in void 0!==a&&(u=""+a),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(d=t.ref),t)o.call(t,n)&&!s.hasOwnProperty(n)&&(r[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===r[n]&&(r[n]=t[n]);return{$$typeof:i,type:e,key:u,ref:d,props:r,_owner:l.current}}t.Fragment=r,t.jsx=u,t.jsxs=u},749:(e,t)=>{var a=Symbol.for("react.element"),n=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),s=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),c=Symbol.for("react.lazy"),p=Symbol.iterator,g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,x={};function y(e,t,a){this.props=e,this.context=t,this.refs=x,this.updater=a||g}function h(){}function b(e,t,a){this.props=e,this.context=t,this.refs=x,this.updater=a||g}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},h.prototype=y.prototype;var S=b.prototype=new h;S.constructor=b,m(S,y.prototype),S.isPureReactComponent=!0;var G=Array.isArray,v=Object.prototype.hasOwnProperty,H={current:null},$={key:!0,ref:!0,__self:!0,__source:!0};function F(e,t,n){var i,r={},o=null,l=null;if(null!=t)for(i in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(o=""+t.key),t)v.call(t,i)&&!$.hasOwnProperty(i)&&(r[i]=t[i]);var s=arguments.length-2;if(1===s)r.children=n;else if(1<s){for(var u=Array(s),d=0;d<s;d++)u[d]=arguments[d+2];r.children=u}if(e&&e.defaultProps)for(i in s=e.defaultProps)void 0===r[i]&&(r[i]=s[i]);return{$$typeof:a,type:e,key:o,ref:l,props:r,_owner:H.current}}function W(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var T=/\/+/g;function w(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function E(e,t,i,r,o){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s=!1;if(null===e)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case a:case n:s=!0}}if(s)return o=o(s=e),e=""===r?"."+w(s,0):r,G(o)?(i="",null!=e&&(i=e.replace(T,"$&/")+"/"),E(o,t,i,"",(function(e){return e}))):null!=o&&(W(o)&&(o=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(o,i+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(T,"$&/")+"/")+e)),t.push(o)),1;if(s=0,r=""===r?".":r+":",G(e))for(var u=0;u<e.length;u++){var d=r+w(l=e[u],u);s+=E(l,t,i,d,o)}else if(d=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof d)for(e=d.call(e),u=0;!(l=e.next()).done;)s+=E(l=l.value,t,i,d=r+w(l,u++),o);else if("object"===l)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function z(e,t,a){if(null==e)return e;var n=[],i=0;return E(e,n,"","",(function(e){return t.call(a,e,i++)})),n}function k(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var C={current:null},A={transition:null},_={ReactCurrentDispatcher:C,ReactCurrentBatchConfig:A,ReactCurrentOwner:H};t.Children={map:z,forEach:function(e,t,a){z(e,(function(){t.apply(this,arguments)}),a)},count:function(e){var t=0;return z(e,(function(){t++})),t},toArray:function(e){return z(e,(function(e){return e}))||[]},only:function(e){if(!W(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=y,t.Fragment=i,t.Profiler=o,t.PureComponent=b,t.StrictMode=r,t.Suspense=d,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_,t.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=m({},e.props),r=e.key,o=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(o=t.ref,l=H.current),void 0!==t.key&&(r=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)v.call(t,u)&&!$.hasOwnProperty(u)&&(i[u]=void 0===t[u]&&void 0!==s?s[u]:t[u])}var u=arguments.length-2;if(1===u)i.children=n;else if(1<u){s=Array(u);for(var d=0;d<u;d++)s[d]=arguments[d+2];i.children=s}return{$$typeof:a,type:e.type,key:r,ref:o,props:i,_owner:l}},t.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},t.createElement=F,t.createFactory=function(e){var t=F.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=W,t.lazy=function(e){return{$$typeof:c,_payload:{_status:-1,_result:e},_init:k}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=A.transition;A.transition={};try{e()}finally{A.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return C.current.useCallback(e,t)},t.useContext=function(e){return C.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return C.current.useDeferredValue(e)},t.useEffect=function(e,t){return C.current.useEffect(e,t)},t.useId=function(){return C.current.useId()},t.useImperativeHandle=function(e,t,a){return C.current.useImperativeHandle(e,t,a)},t.useInsertionEffect=function(e,t){return C.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return C.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return C.current.useMemo(e,t)},t.useReducer=function(e,t,a){return C.current.useReducer(e,t,a)},t.useRef=function(e){return C.current.useRef(e)},t.useState=function(e){return C.current.useState(e)},t.useSyncExternalStore=function(e,t,a){return C.current.useSyncExternalStore(e,t,a)},t.useTransition=function(){return C.current.useTransition()},t.version="18.2.0"},474:(e,t,a)=>{e.exports=a(749)},274:(e,t,a)=>{e.exports=a(34)}},n={};function i(e){var t=n[e];if(void 0!==t)return t.exports;var r=n[e]={exports:{}};return a[e](r,r.exports,i),r.exports}t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,i.t=function(a,n){if(1&n&&(a=this(a)),8&n)return a;if("object"==typeof a&&a){if(4&n&&a.__esModule)return a;if(16&n&&"function"==typeof a.then)return a}var r=Object.create(null);i.r(r);var o={};e=e||[null,t({}),t([]),t(t)];for(var l=2&n&&a;"object"==typeof l&&!~e.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach((e=>o[e]=()=>a[e]));return o.default=()=>a,i.d(r,o),r},i.d=(e,t)=>{for(var a in t)i.o(t,a)&&!i.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e=i(274),t=i(474),a=i.t(t,2),n=function(){function e(e){var t=this;this._insertTag=function(e){var a;a=0===t.tags.length?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,a),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var a=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(t);try{a.insertRule(e,a.cssRules.length)}catch(e){}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach((function(e){return e.parentNode&&e.parentNode.removeChild(e)})),this.tags=[],this.ctr=0},e}(),r=Math.abs,o=String.fromCharCode,l=Object.assign;function s(e){return e.trim()}function u(e,t,a){return e.replace(t,a)}function d(e,t){return e.indexOf(t)}function f(e,t){return 0|e.charCodeAt(t)}function c(e,t,a){return e.slice(t,a)}function p(e){return e.length}function g(e){return e.length}function m(e,t){return t.push(e),e}var x=1,y=1,h=0,b=0,S=0,G="";function v(e,t,a,n,i,r,o){return{value:e,root:t,parent:a,type:n,props:i,children:r,line:x,column:y,length:o,return:""}}function H(e,t){return l(v("",null,null,"",null,null,0),e,{length:-e.length},t)}function $(){return S=b>0?f(G,--b):0,y--,10===S&&(y=1,x--),S}function F(){return S=b<h?f(G,b++):0,y++,10===S&&(y=1,x++),S}function W(){return f(G,b)}function T(){return b}function w(e,t){return c(G,e,t)}function E(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function z(e){return x=y=1,h=p(G=e),b=0,[]}function k(e){return G="",e}function C(e){return s(w(b-1,L(91===e?e+2:40===e?e+1:e)))}function A(e){for(;(S=W())&&S<33;)F();return E(e)>2||E(S)>3?"":" "}function _(e,t){for(;--t&&F()&&!(S<48||S>102||S>57&&S<65||S>70&&S<97););return w(e,T()+(t<6&&32==W()&&32==F()))}function L(e){for(;F();)switch(S){case e:return b;case 34:case 39:34!==e&&39!==e&&L(S);break;case 40:41===e&&L(e);break;case 92:F()}return b}function O(e,t){for(;F()&&e+S!==57&&(e+S!==84||47!==W()););return"/*"+w(t,b-1)+"*"+o(47===e?e:F())}function P(e){for(;!E(W());)F();return w(e,b)}var D="-ms-",I="-moz-",N="-webkit-",M="comm",B="rule",j="decl",R="@keyframes";function V(e,t){for(var a="",n=g(e),i=0;i<n;i++)a+=t(e[i],i,e,t)||"";return a}function U(e,t,a,n){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case j:return e.return=e.return||e.value;case M:return"";case R:return e.return=e.value+"{"+V(e.children,n)+"}";case B:e.value=e.props.join(",")}return p(a=V(e.children,n))?e.return=e.value+"{"+a+"}":""}function q(e){return k(X("",null,null,null,[""],e=z(e),0,[0],e))}function X(e,t,a,n,i,r,l,s,c){for(var g=0,x=0,y=l,h=0,b=0,S=0,G=1,v=1,H=1,w=0,E="",z=i,k=r,L=n,D=E;v;)switch(S=w,w=F()){case 40:if(108!=S&&58==f(D,y-1)){-1!=d(D+=u(C(w),"&","&\f"),"&\f")&&(H=-1);break}case 34:case 39:case 91:D+=C(w);break;case 9:case 10:case 13:case 32:D+=A(S);break;case 92:D+=_(T()-1,7);continue;case 47:switch(W()){case 42:case 47:m(Z(O(F(),T()),t,a),c);break;default:D+="/"}break;case 123*G:s[g++]=p(D)*H;case 125*G:case 59:case 0:switch(w){case 0:case 125:v=0;case 59+x:-1==H&&(D=u(D,/\f/g,"")),b>0&&p(D)-y&&m(b>32?J(D+";",n,a,y-1):J(u(D," ","")+";",n,a,y-2),c);break;case 59:D+=";";default:if(m(L=Y(D,t,a,g,x,i,s,E,z=[],k=[],y),r),123===w)if(0===x)X(D,t,L,L,z,r,y,s,k);else switch(99===h&&110===f(D,3)?100:h){case 100:case 108:case 109:case 115:X(e,L,L,n&&m(Y(e,L,L,0,0,i,s,E,i,z=[],y),k),i,k,y,s,n?z:k);break;default:X(D,L,L,L,[""],k,0,s,k)}}g=x=b=0,G=H=1,E=D="",y=l;break;case 58:y=1+p(D),b=S;default:if(G<1)if(123==w)--G;else if(125==w&&0==G++&&125==$())continue;switch(D+=o(w),w*G){case 38:H=x>0?1:(D+="\f",-1);break;case 44:s[g++]=(p(D)-1)*H,H=1;break;case 64:45===W()&&(D+=C(F())),h=W(),x=y=p(E=D+=P(T())),w++;break;case 45:45===S&&2==p(D)&&(G=0)}}return r}function Y(e,t,a,n,i,o,l,d,f,p,m){for(var x=i-1,y=0===i?o:[""],h=g(y),b=0,S=0,G=0;b<n;++b)for(var H=0,$=c(e,x+1,x=r(S=l[b])),F=e;H<h;++H)(F=s(S>0?y[H]+" "+$:u($,/&\f/g,y[H])))&&(f[G++]=F);return v(e,t,a,0===i?B:d,f,p,m)}function Z(e,t,a){return v(e,t,a,M,o(S),c(e,2,-2),0)}function J(e,t,a,n){return v(e,t,a,j,c(e,0,n),c(e,n+1,-1),n)}var K=function(e,t,a){for(var n=0,i=0;n=i,i=W(),38===n&&12===i&&(t[a]=1),!E(i);)F();return w(e,b)},Q=new WeakMap,ee=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var t=e.value,a=e.parent,n=e.column===a.column&&e.line===a.line;"rule"!==a.type;)if(!(a=a.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||Q.get(a))&&!n){Q.set(e,!0);for(var i=[],r=function(e,t){return k(function(e,t){var a=-1,n=44;do{switch(E(n)){case 0:38===n&&12===W()&&(t[a]=1),e[a]+=K(b-1,t,a);break;case 2:e[a]+=C(n);break;case 4:if(44===n){e[++a]=58===W()?"&\f":"",t[a]=e[a].length;break}default:e[a]+=o(n)}}while(n=F());return e}(z(e),t))}(t,i),l=a.props,s=0,u=0;s<r.length;s++)for(var d=0;d<l.length;d++,u++)e.props[u]=i[s]?r[s].replace(/&\f/g,l[d]):l[d]+" "+r[s]}}},te=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}};function ae(e,t){switch(function(e,t){return 45^f(e,0)?(((t<<2^f(e,0))<<2^f(e,1))<<2^f(e,2))<<2^f(e,3):0}(e,t)){case 5103:return N+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return N+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return N+e+I+e+D+e+e;case 6828:case 4268:return N+e+D+e+e;case 6165:return N+e+D+"flex-"+e+e;case 5187:return N+e+u(e,/(\w+).+(:[^]+)/,N+"box-$1$2"+D+"flex-$1$2")+e;case 5443:return N+e+D+"flex-item-"+u(e,/flex-|-self/,"")+e;case 4675:return N+e+D+"flex-line-pack"+u(e,/align-content|flex-|-self/,"")+e;case 5548:return N+e+D+u(e,"shrink","negative")+e;case 5292:return N+e+D+u(e,"basis","preferred-size")+e;case 6060:return N+"box-"+u(e,"-grow","")+N+e+D+u(e,"grow","positive")+e;case 4554:return N+u(e,/([^-])(transform)/g,"$1"+N+"$2")+e;case 6187:return u(u(u(e,/(zoom-|grab)/,N+"$1"),/(image-set)/,N+"$1"),e,"")+e;case 5495:case 3959:return u(e,/(image-set\([^]*)/,N+"$1$`$1");case 4968:return u(u(e,/(.+:)(flex-)?(.*)/,N+"box-pack:$3"+D+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+N+e+e;case 4095:case 3583:case 4068:case 2532:return u(e,/(.+)-inline(.+)/,N+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(p(e)-1-t>6)switch(f(e,t+1)){case 109:if(45!==f(e,t+4))break;case 102:return u(e,/(.+:)(.+)-([^]+)/,"$1"+N+"$2-$3$1"+I+(108==f(e,t+3)?"$3":"$2-$3"))+e;case 115:return~d(e,"stretch")?ae(u(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(115!==f(e,t+1))break;case 6444:switch(f(e,p(e)-3-(~d(e,"!important")&&10))){case 107:return u(e,":",":"+N)+e;case 101:return u(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+N+(45===f(e,14)?"inline-":"")+"box$3$1"+N+"$2$3$1"+D+"$2box$3")+e}break;case 5936:switch(f(e,t+11)){case 114:return N+e+D+u(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return N+e+D+u(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return N+e+D+u(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return N+e+D+e+e}return e}var ne=[function(e,t,a,n){if(e.length>-1&&!e.return)switch(e.type){case j:e.return=ae(e.value,e.length);break;case R:return V([H(e,{value:u(e.value,"@","@"+N)})],n);case B:if(e.length)return function(e,t){return e.map(t).join("")}(e.props,(function(t){switch(function(e,t){return(e=/(::plac\w+|:read-\w+)/.exec(e))?e[0]:e}(t)){case":read-only":case":read-write":return V([H(e,{props:[u(t,/:(read-\w+)/,":-moz-$1")]})],n);case"::placeholder":return V([H(e,{props:[u(t,/:(plac\w+)/,":"+N+"input-$1")]}),H(e,{props:[u(t,/:(plac\w+)/,":-moz-$1")]}),H(e,{props:[u(t,/:(plac\w+)/,D+"input-$1")]})],n)}return""}))}}],ie=function(e){var t=e.key;if("css"===t){var a=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(a,(function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))}))}var i,r,o=e.stylisPlugins||ne,l={},s=[];i=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),(function(e){for(var t=e.getAttribute("data-emotion").split(" "),a=1;a<t.length;a++)l[t[a]]=!0;s.push(e)}));var u,d,f,c,p=[U,(c=function(e){u.insert(e)},function(e){e.root||(e=e.return)&&c(e)})],m=(d=[ee,te].concat(o,p),f=g(d),function(e,t,a,n){for(var i="",r=0;r<f;r++)i+=d[r](e,t,a,n)||"";return i});r=function(e,t,a,n){u=a,V(q(e?e+"{"+t.styles+"}":t.styles),m),n&&(x.inserted[t.name]=!0)};var x={key:t,sheet:new n({key:t,container:i,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:l,registered:{},insert:r};return x.sheet.hydrate(s),x},re=function(e,t,a){var n=e.key+"-"+t.name;!1===a&&void 0===e.registered[n]&&(e.registered[n]=t.styles)},oe={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function le(e){var t=Object.create(null);return function(a){return void 0===t[a]&&(t[a]=e(a)),t[a]}}var se=/[A-Z]|^ms/g,ue=/_EMO_([^_]+?)_([^]*?)_EMO_/g,de=function(e){return 45===e.charCodeAt(1)},fe=function(e){return null!=e&&"boolean"!=typeof e},ce=le((function(e){return de(e)?e:e.replace(se,"-$&").toLowerCase()})),pe=function(e,t){switch(e){case"animation":case"animationName":if("string"==typeof t)return t.replace(ue,(function(e,t,a){return me={name:t,styles:a,next:me},t}))}return 1===oe[e]||de(e)||"number"!=typeof t||0===t?t:t+"px"};function ge(e,t,a){if(null==a)return"";if(void 0!==a.__emotion_styles)return a;switch(typeof a){case"boolean":return"";case"object":if(1===a.anim)return me={name:a.name,styles:a.styles,next:me},a.name;if(void 0!==a.styles){var n=a.next;if(void 0!==n)for(;void 0!==n;)me={name:n.name,styles:n.styles,next:me},n=n.next;return a.styles+";"}return function(e,t,a){var n="";if(Array.isArray(a))for(var i=0;i<a.length;i++)n+=ge(e,t,a[i])+";";else for(var r in a){var o=a[r];if("object"!=typeof o)null!=t&&void 0!==t[o]?n+=r+"{"+t[o]+"}":fe(o)&&(n+=ce(r)+":"+pe(r,o)+";");else if(!Array.isArray(o)||"string"!=typeof o[0]||null!=t&&void 0!==t[o[0]]){var l=ge(e,t,o);switch(r){case"animation":case"animationName":n+=ce(r)+":"+l+";";break;default:n+=r+"{"+l+"}"}}else for(var s=0;s<o.length;s++)fe(o[s])&&(n+=ce(r)+":"+pe(r,o[s])+";")}return n}(e,t,a);case"function":if(void 0!==e){var i=me,r=a(e);return me=i,ge(e,t,r)}}if(null==t)return a;var o=t[a];return void 0!==o?o:a}var me,xe=/label:\s*([^\s;\n{]+)\s*(;|$)/g,ye=function(e,t,a){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var n=!0,i="";me=void 0;var r=e[0];null==r||void 0===r.raw?(n=!1,i+=ge(a,t,r)):i+=r[0];for(var o=1;o<e.length;o++)i+=ge(a,t,e[o]),n&&(i+=r[o]);xe.lastIndex=0;for(var l,s="";null!==(l=xe.exec(i));)s+="-"+l[1];var u=function(e){for(var t,a=0,n=0,i=e.length;i>=4;++n,i-=4)t=1540483477*(65535&(t=255&e.charCodeAt(n)|(255&e.charCodeAt(++n))<<8|(255&e.charCodeAt(++n))<<16|(255&e.charCodeAt(++n))<<24))+(59797*(t>>>16)<<16),a=1540483477*(65535&(t^=t>>>24))+(59797*(t>>>16)<<16)^1540483477*(65535&a)+(59797*(a>>>16)<<16);switch(i){case 3:a^=(255&e.charCodeAt(n+2))<<16;case 2:a^=(255&e.charCodeAt(n+1))<<8;case 1:a=1540483477*(65535&(a^=255&e.charCodeAt(n)))+(59797*(a>>>16)<<16)}return(((a=1540483477*(65535&(a^=a>>>13))+(59797*(a>>>16)<<16))^a>>>15)>>>0).toString(36)}(i)+s;return{name:u,styles:i,next:me}},he=!!a.useInsertionEffect&&a.useInsertionEffect,be=he||function(e){return e()},Se=(he||t.useLayoutEffect,{}.hasOwnProperty),Ge=t.createContext("undefined"!=typeof HTMLElement?ie({key:"css"}):null);Ge.Provider;var ve=function(e){return(0,t.forwardRef)((function(a,n){var i=(0,t.useContext)(Ge);return e(a,i,n)}))},He=t.createContext({}),$e="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",Fe=function(e){var t=e.cache,a=e.serialized,n=e.isStringTag;return re(t,a,n),be((function(){return function(e,t,a){re(e,t,a);var n=e.key+"-"+t.name;if(void 0===e.inserted[t.name]){var i=t;do{e.insert(t===i?"."+n:"",i,e.sheet,!0),i=i.next}while(void 0!==i)}}(t,a,n)})),null},We=ve((function(e,a,n){var i=e.css;"string"==typeof i&&void 0!==a.registered[i]&&(i=a.registered[i]);var r=e[$e],o=[i],l="";"string"==typeof e.className?l=function(e,t,a){var n="";return a.split(" ").forEach((function(a){void 0!==e[a]?t.push(e[a]+";"):n+=a+" "})),n}(a.registered,o,e.className):null!=e.className&&(l=e.className+" ");var s=ye(o,void 0,t.useContext(He));l+=a.key+"-"+s.name;var u={};for(var d in e)Se.call(e,d)&&"css"!==d&&d!==$e&&(u[d]=e[d]);return u.ref=n,u.className=l,t.createElement(t.Fragment,null,t.createElement(Fe,{cache:a,serialized:s,isStringTag:"string"==typeof r}),t.createElement(r,u))}));function Te(t,a,n){return Se.call(a,"css")?e.jsx(We,function(e,t){var a={};for(var n in t)Se.call(t,n)&&(a[n]=t[n]);return a[$e]=e,a}(t,a),n):e.jsx(t,a,n)}function we(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return ye(t)}i(35),e.Fragment;const Ee={breakpoint:{desktop:"980px",leftCol:"1140px",mobile:"320px",mobileLandscape:"480px",mobileMedium:"375px",phablet:"660px",tablet:"740px",wide:"1300px"},height:{ctaMedium:"44px",ctaSmall:"36px",ctaXSmall:"24px",iconMedium:"30px",iconSmall:"26px",iconXSmall:"20px",inputMedium:"44px",inputXSmall:"24px"},palette:{brand:{100:"#001536",300:"#041F4A",400:"#052962",500:"#0077B6",600:"#506991",800:"#C1D8FC"},brandAlt:{200:"#F3C100",300:"#FFD900",400:"#FFE500"},culture:{50:"#2B2625",100:"#3E3323",200:"#574835",300:"#6B5840",350:"#866D50",400:"#866D50",450:"#A1845C",500:"#EACCA0",600:"#E7D4B9",700:"#EFE8DD",800:"#FBF6EF"},error:{400:"#C70000",500:"#FF9081"},focus:{400:"#0077B6"},labs:{200:"#0C7A73",300:"#65A897",400:"#69D1CA"},lifestyle:{100:"#510043",200:"#650054",300:"#7D0068",400:"#BB3B80",450:"#F37ABC",500:"#FFABDB",600:"#FEC8D3",800:"#FEEEF7"},neutral:{0:"#000000",7:"#121212",10:"#1A1A1A",20:"#333333",38:"#606060",46:"#707070",60:"#999999",86:"#DCDCDC",93:"#EDEDED",97:"#F6F6F6",100:"#FFFFFF"},news:{100:"#660505",200:"#8B0000",300:"#AB0613",400:"#C70000",500:"#FF5943",550:"#FF9081",600:"#FFBAC8",800:"#FFF4F2"},opinion:{100:"#672005",200:"#8D2700",300:"#C74600",400:"#C74600",450:"#E05E00",500:"#FF7F0F",550:"#FF9941",600:"#F9B376",800:"#FEF9F5"},specialReport:{100:"#222527",200:"#303538",300:"#3F464A",400:"#595C5F",450:"#9DA0A2",500:"#ABC2C9",700:"#E4E5E8",800:"#EFF1F2"},specialReportAlt:{100:"#2B2B2A",200:"#B9300A",300:"#FF663D",700:"#EBE6E1",800:"#F5F0EB"},sport:{100:"#003C60",200:"#004E7C",300:"#005689",400:"#0077B6",500:"#00B2FF",600:"#90DCFF",800:"#F1F8FC"},success:{400:"#22874D",500:"#58D08B"}},size:{icon:{medium:"30px",small:"26px",xSmall:"20px"},medium:"44px",small:"36px",xSmall:"24px"},space:{0:"2px",1:"4px",2:"8px",3:"12px",4:"16px",5:"20px",6:"24px",8:"32px",9:"36px",10:"40px",12:"48px",14:"56px",16:"64px",18:"72px",24:"96px"},typography:{body:{medium:{fontFamily:["GuardianTextEgyptian","Guardian Text Egyptian Web","Georgia","serif"],fontSize:"17px",lineHeight:1.4,fontWeight:400},small:{fontFamily:["GuardianTextEgyptian","Guardian Text Egyptian Web","Georgia","serif"],fontSize:"15px",lineHeight:1.4,fontWeight:400},xSmall:{fontFamily:["GuardianTextEgyptian","Guardian Text Egyptian Web","Georgia","serif"],fontSize:"14px",lineHeight:1.4,fontWeight:400}},fontFamily:{body:["GuardianTextEgyptian","Guardian Text Egyptian Web","Georgia","serif"],headline:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],textSans:["GuardianTextSans","Guardian Text Sans Web","Helvetica Neue","Helvetica","Arial","Lucida Grande","sans-serif"],titlepiece:["GT Guardian Titlepiece","Georgia","serif"]},fontSize:{12:"12px",14:"14px",15:"15px",17:"17px",20:"20px",24:"24px",28:"28px",34:"34px",42:"42px",50:"50px",70:"70px"},fontWeight:{bold:700,light:300,medium:500,regular:400},headline:{large:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"42px",lineHeight:1.15,fontWeight:500},medium:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"34px",lineHeight:1.15,fontWeight:500},small:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"28px",lineHeight:1.15,fontWeight:500},xLarge:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"50px",lineHeight:1.15,fontWeight:500},xSmall:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"24px",lineHeight:1.15,fontWeight:500},xxSmall:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"20px",lineHeight:1.15,fontWeight:500},xxxSmall:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"17px",lineHeight:1.15,fontWeight:500}},lineHeight:{loose:1.4,regular:1.3,tight:1.15},presets:{article15:{fontFamily:["GuardianTextEgyptian","Guardian Text Egyptian Web","Georgia","serif"],fontSize:"15px",lineHeight:1.4,fontWeight:400,fontStyle:"normal"},article17:{fontFamily:["GuardianTextEgyptian","Guardian Text Egyptian Web","Georgia","serif"],fontSize:"17px",lineHeight:1.4,fontWeight:400,fontStyle:"normal"},articleBold15:{fontFamily:["GuardianTextEgyptian","Guardian Text Egyptian Web","Georgia","serif"],fontSize:"15px",lineHeight:1.4,fontWeight:700,fontStyle:"normal"},articleBold17:{fontFamily:["GuardianTextEgyptian","Guardian Text Egyptian Web","Georgia","serif"],fontSize:"17px",lineHeight:1.4,fontWeight:700,fontStyle:"normal"},articleBoldItalic15:{fontFamily:["GuardianTextEgyptian","Guardian Text Egyptian Web","Georgia","serif"],fontSize:"15px",lineHeight:1.4,fontWeight:700,fontStyle:"italic"},articleBoldItalic17:{fontFamily:["GuardianTextEgyptian","Guardian Text Egyptian Web","Georgia","serif"],fontSize:"17px",lineHeight:1.4,fontWeight:700,fontStyle:"italic"},articleItalic15:{fontFamily:["GuardianTextEgyptian","Guardian Text Egyptian Web","Georgia","serif"],fontSize:"15px",lineHeight:1.4,fontWeight:400,fontStyle:"italic"},articleItalic17:{fontFamily:["GuardianTextEgyptian","Guardian Text Egyptian Web","Georgia","serif"],fontSize:"17px",lineHeight:1.4,fontWeight:400,fontStyle:"italic"},headlineBold14:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"14px",lineHeight:1.15,fontWeight:700,fontStyle:"normal"},headlineBold17:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"17px",lineHeight:1.15,fontWeight:700,fontStyle:"normal"},headlineBold20:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"20px",lineHeight:1.15,fontWeight:700,fontStyle:"normal"},headlineBold24:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"24px",lineHeight:1.15,fontWeight:700,fontStyle:"normal"},headlineBold28:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"28px",lineHeight:1.15,fontWeight:700,fontStyle:"normal"},headlineBold34:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"34px",lineHeight:1.15,fontWeight:700,fontStyle:"normal"},headlineBold42:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"42px",lineHeight:1.15,fontWeight:700,fontStyle:"normal"},headlineBold50:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"50px",lineHeight:1.15,fontWeight:700,fontStyle:"normal"},headlineBold70:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"70px",lineHeight:1.15,fontWeight:700,fontStyle:"normal"},headlineLight14:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"14px",lineHeight:1.15,fontWeight:300,fontStyle:"normal"},headlineLight17:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"17px",lineHeight:1.15,fontWeight:300,fontStyle:"normal"},headlineLight20:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"20px",lineHeight:1.15,fontWeight:300,fontStyle:"normal"},headlineLight24:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"24px",lineHeight:1.15,fontWeight:300,fontStyle:"normal"},headlineLight28:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"28px",lineHeight:1.15,fontWeight:300,fontStyle:"normal"},headlineLight34:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"34px",lineHeight:1.15,fontWeight:300,fontStyle:"normal"},headlineLight42:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"42px",lineHeight:1.15,fontWeight:300,fontStyle:"normal"},headlineLight50:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"50px",lineHeight:1.15,fontWeight:300,fontStyle:"normal"},headlineLight70:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"70px",lineHeight:1.15,fontWeight:300,fontStyle:"normal"},headlineLightItalic14:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"14px",lineHeight:1.15,fontWeight:300,fontStyle:"italic"},headlineLightItalic17:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"17px",lineHeight:1.15,fontWeight:300,fontStyle:"italic"},headlineLightItalic20:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"20px",lineHeight:1.15,fontWeight:300,fontStyle:"italic"},headlineLightItalic24:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"24px",lineHeight:1.15,fontWeight:300,fontStyle:"italic"},headlineLightItalic28:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"28px",lineHeight:1.15,fontWeight:300,fontStyle:"italic"},headlineLightItalic34:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"34px",lineHeight:1.15,fontWeight:300,fontStyle:"italic"},headlineLightItalic42:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"42px",lineHeight:1.15,fontWeight:300,fontStyle:"italic"},headlineLightItalic50:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"50px",lineHeight:1.15,fontWeight:300,fontStyle:"italic"},headlineLightItalic70:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"70px",lineHeight:1.15,fontWeight:300,fontStyle:"italic"},headlineMedium14:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"14px",lineHeight:1.15,fontWeight:500,fontStyle:"normal"},headlineMedium17:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"17px",lineHeight:1.15,fontWeight:500,fontStyle:"normal"},headlineMedium20:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"20px",lineHeight:1.15,fontWeight:500,fontStyle:"normal"},headlineMedium24:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"24px",lineHeight:1.15,fontWeight:500,fontStyle:"normal"},headlineMedium28:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"28px",lineHeight:1.15,fontWeight:500,fontStyle:"normal"},headlineMedium34:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"34px",lineHeight:1.15,fontWeight:500,fontStyle:"normal"},headlineMedium42:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"42px",lineHeight:1.15,fontWeight:500,fontStyle:"normal"},headlineMedium50:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"50px",lineHeight:1.15,fontWeight:500,fontStyle:"normal"},headlineMedium70:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"70px",lineHeight:1.15,fontWeight:500,fontStyle:"normal"},headlineMediumItalic14:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"14px",lineHeight:1.15,fontWeight:500,fontStyle:"italic"},headlineMediumItalic17:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"17px",lineHeight:1.15,fontWeight:500,fontStyle:"italic"},headlineMediumItalic20:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"20px",lineHeight:1.15,fontWeight:500,fontStyle:"italic"},headlineMediumItalic24:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"24px",lineHeight:1.15,fontWeight:500,fontStyle:"italic"},headlineMediumItalic28:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"28px",lineHeight:1.15,fontWeight:500,fontStyle:"italic"},headlineMediumItalic34:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"34px",lineHeight:1.15,fontWeight:500,fontStyle:"italic"},headlineMediumItalic42:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"42px",lineHeight:1.15,fontWeight:500,fontStyle:"italic"},headlineMediumItalic50:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"50px",lineHeight:1.15,fontWeight:500,fontStyle:"italic"},headlineMediumItalic70:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"70px",lineHeight:1.15,fontWeight:700,fontStyle:"italic"},textEgyptian14:{fontFamily:["GuardianTextEgyptian","Guardian Text Egyptian Web","Georgia","serif"],fontSize:"14px",lineHeight:1.3,fontWeight:400,fontStyle:"normal"},textEgyptian15:{fontFamily:["GuardianTextEgyptian","Guardian Text Egyptian Web","Georgia","serif"],fontSize:"15px",lineHeight:1.3,fontWeight:400,fontStyle:"normal"},textEgyptian17:{fontFamily:["GuardianTextEgyptian","Guardian Text Egyptian Web","Georgia","serif"],fontSize:"17px",lineHeight:1.3,fontWeight:400,fontStyle:"normal"},textEgyptianBold14:{fontFamily:["GuardianTextEgyptian","Guardian Text Egyptian Web","Georgia","serif"],fontSize:"14px",lineHeight:1.3,fontWeight:700,fontStyle:"normal"},textEgyptianBold15:{fontFamily:["GuardianTextEgyptian","Guardian Text Egyptian Web","Georgia","serif"],fontSize:"15px",lineHeight:1.3,fontWeight:700,fontStyle:"normal"},textEgyptianBold17:{fontFamily:["GuardianTextEgyptian","Guardian Text Egyptian Web","Georgia","serif"],fontSize:"17px",lineHeight:1.3,fontWeight:700,fontStyle:"normal"},textEgyptianBoldItalic14:{fontFamily:["GuardianTextEgyptian","Guardian Text Egyptian Web","Georgia","serif"],fontSize:"14px",lineHeight:1.3,fontWeight:700,fontStyle:"italic"},textEgyptianBoldItalic15:{fontFamily:["GuardianTextEgyptian","Guardian Text Egyptian Web","Georgia","serif"],fontSize:"15px",lineHeight:1.3,fontWeight:700,fontStyle:"italic"},textEgyptianBoldItalic17:{fontFamily:["GuardianTextEgyptian","Guardian Text Egyptian Web","Georgia","serif"],fontSize:"17px",lineHeight:1.3,fontWeight:700,fontStyle:"italic"},textEgyptianItalic14:{fontFamily:["GuardianTextEgyptian","Guardian Text Egyptian Web","Georgia","serif"],fontSize:"14px",lineHeight:1.3,fontWeight:400,fontStyle:"italic"},textEgyptianItalic15:{fontFamily:["GuardianTextEgyptian","Guardian Text Egyptian Web","Georgia","serif"],fontSize:"15px",lineHeight:1.3,fontWeight:400,fontStyle:"italic"},textEgyptianItalic17:{fontFamily:["GuardianTextEgyptian","Guardian Text Egyptian Web","Georgia","serif"],fontSize:"17px",lineHeight:1.3,fontWeight:400,fontStyle:"italic"},textSans12:{fontFamily:["GuardianTextSans","Guardian Text Sans Web","Helvetica Neue","Helvetica","Arial","Lucida Grande","sans-serif"],fontSize:"12px",lineHeight:1.3,fontWeight:400,fontStyle:"normal"},textSans14:{fontFamily:["GuardianTextSans","Guardian Text Sans Web","Helvetica Neue","Helvetica","Arial","Lucida Grande","sans-serif"],fontSize:"14px",lineHeight:1.3,fontWeight:400,fontStyle:"normal"},textSans15:{fontFamily:["GuardianTextSans","Guardian Text Sans Web","Helvetica Neue","Helvetica","Arial","Lucida Grande","sans-serif"],fontSize:"15px",lineHeight:1.3,fontWeight:400,fontStyle:"normal"},textSans17:{fontFamily:["GuardianTextSans","Guardian Text Sans Web","Helvetica Neue","Helvetica","Arial","Lucida Grande","sans-serif"],fontSize:"17px",lineHeight:1.3,fontWeight:400,fontStyle:"normal"},textSans20:{fontFamily:["GuardianTextSans","Guardian Text Sans Web","Helvetica Neue","Helvetica","Arial","Lucida Grande","sans-serif"],fontSize:"20px",lineHeight:1.3,fontWeight:400,fontStyle:"normal"},textSans24:{fontFamily:["GuardianTextSans","Guardian Text Sans Web","Helvetica Neue","Helvetica","Arial","Lucida Grande","sans-serif"],fontSize:"24px",lineHeight:1.3,fontWeight:400,fontStyle:"normal"},textSans28:{fontFamily:["GuardianTextSans","Guardian Text Sans Web","Helvetica Neue","Helvetica","Arial","Lucida Grande","sans-serif"],fontSize:"28px",lineHeight:1.3,fontWeight:400,fontStyle:"normal"},textSans34:{fontFamily:["GuardianTextSans","Guardian Text Sans Web","Helvetica Neue","Helvetica","Arial","Lucida Grande","sans-serif"],fontSize:"34px",lineHeight:1.3,fontWeight:400,fontStyle:"normal"},textSansBold12:{fontFamily:["GuardianTextSans","Guardian Text Sans Web","Helvetica Neue","Helvetica","Arial","Lucida Grande","sans-serif"],fontSize:"12px",lineHeight:1.3,fontWeight:700,fontStyle:"normal"},textSansBold14:{fontFamily:["GuardianTextSans","Guardian Text Sans Web","Helvetica Neue","Helvetica","Arial","Lucida Grande","sans-serif"],fontSize:"14px",lineHeight:1.3,fontWeight:700,fontStyle:"normal"},textSansBold15:{fontFamily:["GuardianTextSans","Guardian Text Sans Web","Helvetica Neue","Helvetica","Arial","Lucida Grande","sans-serif"],fontSize:"15px",lineHeight:1.3,fontWeight:700,fontStyle:"normal"},textSansBold17:{fontFamily:["GuardianTextSans","Guardian Text Sans Web","Helvetica Neue","Helvetica","Arial","Lucida Grande","sans-serif"],fontSize:"17px",lineHeight:1.3,fontWeight:700,fontStyle:"normal"},textSansBold20:{fontFamily:["GuardianTextSans","Guardian Text Sans Web","Helvetica Neue","Helvetica","Arial","Lucida Grande","sans-serif"],fontSize:"20px",lineHeight:1.3,fontWeight:700,fontStyle:"normal"},textSansBold24:{fontFamily:["GuardianTextSans","Guardian Text Sans Web","Helvetica Neue","Helvetica","Arial","Lucida Grande","sans-serif"],fontSize:"24px",lineHeight:1.3,fontWeight:700,fontStyle:"normal"},textSansBold28:{fontFamily:["GuardianTextSans","Guardian Text Sans Web","Helvetica Neue","Helvetica","Arial","Lucida Grande","sans-serif"],fontSize:"28px",lineHeight:1.3,fontWeight:700,fontStyle:"normal"},textSansBold34:{fontFamily:["GuardianTextSans","Guardian Text Sans Web","Helvetica Neue","Helvetica","Arial","Lucida Grande","sans-serif"],fontSize:"34px",lineHeight:1.3,fontWeight:700,fontStyle:"normal"},textSansItalic12:{fontFamily:["GuardianTextSans","Guardian Text Sans Web","Helvetica Neue","Helvetica","Arial","Lucida Grande","sans-serif"],fontSize:"12px",lineHeight:1.3,fontWeight:400,fontStyle:"italic"},textSansItalic14:{fontFamily:["GuardianTextSans","Guardian Text Sans Web","Helvetica Neue","Helvetica","Arial","Lucida Grande","sans-serif"],fontSize:"14px",lineHeight:1.3,fontWeight:400,fontStyle:"italic"},textSansItalic15:{fontFamily:["GuardianTextSans","Guardian Text Sans Web","Helvetica Neue","Helvetica","Arial","Lucida Grande","sans-serif"],fontSize:"15px",lineHeight:1.3,fontWeight:400,fontStyle:"italic"},textSansItalic17:{fontFamily:["GuardianTextSans","Guardian Text Sans Web","Helvetica Neue","Helvetica","Arial","Lucida Grande","sans-serif"],fontSize:"17px",lineHeight:1.3,fontWeight:400,fontStyle:"italic"},textSansItalic20:{fontFamily:["GuardianTextSans","Guardian Text Sans Web","Helvetica Neue","Helvetica","Arial","Lucida Grande","sans-serif"],fontSize:"20px",lineHeight:1.3,fontWeight:400,fontStyle:"italic"},textSansItalic24:{fontFamily:["GuardianTextSans","Guardian Text Sans Web","Helvetica Neue","Helvetica","Arial","Lucida Grande","sans-serif"],fontSize:"24px",lineHeight:1.3,fontWeight:400,fontStyle:"italic"},textSansItalic28:{fontFamily:["GuardianTextSans","Guardian Text Sans Web","Helvetica Neue","Helvetica","Arial","Lucida Grande","sans-serif"],fontSize:"28px",lineHeight:1.3,fontWeight:400,fontStyle:"italic"},textSansItalic34:{fontFamily:["GuardianTextSans","Guardian Text Sans Web","Helvetica Neue","Helvetica","Arial","Lucida Grande","sans-serif"],fontSize:"34px",lineHeight:1.3,fontWeight:400,fontStyle:"italic"},titlepiece42:{fontFamily:["GT Guardian Titlepiece","Georgia","serif"],fontSize:"42px",lineHeight:1.15,fontWeight:700,fontStyle:"normal"},titlepiece50:{fontFamily:["GT Guardian Titlepiece","Georgia","serif"],fontSize:"50px",lineHeight:1.15,fontWeight:700,fontStyle:"normal"},titlepiece70:{fontFamily:["GT Guardian Titlepiece","Georgia","serif"],fontSize:"70px",lineHeight:1.15,fontWeight:700,fontStyle:"normal"}},textDecorationThicknessForFontSize:{12:"2px",14:"2px",15:"2px",17:"2px",20:"3px",24:"3px",28:"3px",34:"4px",42:"5px",50:"6px",70:"6px"},textSans:{large:{fontFamily:["GuardianTextSans","Guardian Text Sans Web","Helvetica Neue","Helvetica","Arial","Lucida Grande","sans-serif"],fontSize:"20px",lineHeight:1.3,fontWeight:400},medium:{fontFamily:["GuardianTextSans","Guardian Text Sans Web","Helvetica Neue","Helvetica","Arial","Lucida Grande","sans-serif"],fontSize:"17px",lineHeight:1.3,fontWeight:400},small:{fontFamily:["GuardianTextSans","Guardian Text Sans Web","Helvetica Neue","Helvetica","Arial","Lucida Grande","sans-serif"],fontSize:"15px",lineHeight:1.3,fontWeight:400},xLarge:{fontFamily:["GuardianTextSans","Guardian Text Sans Web","Helvetica Neue","Helvetica","Arial","Lucida Grande","sans-serif"],fontSize:"24px",lineHeight:1.3,fontWeight:400},xSmall:{fontFamily:["GuardianTextSans","Guardian Text Sans Web","Helvetica Neue","Helvetica","Arial","Lucida Grande","sans-serif"],fontSize:"14px",lineHeight:1.3,fontWeight:400},xxLarge:{fontFamily:["GuardianTextSans","Guardian Text Sans Web","Helvetica Neue","Helvetica","Arial","Lucida Grande","sans-serif"],fontSize:"28px",lineHeight:1.3,fontWeight:400},xxSmall:{fontFamily:["GuardianTextSans","Guardian Text Sans Web","Helvetica Neue","Helvetica","Arial","Lucida Grande","sans-serif"],fontSize:"12px",lineHeight:1.3,fontWeight:400},xxxLarge:{fontFamily:["GuardianTextSans","Guardian Text Sans Web","Helvetica Neue","Helvetica","Arial","Lucida Grande","sans-serif"],fontSize:"34px",lineHeight:1.3,fontWeight:400}},titlepiece:{large:{fontFamily:["GT Guardian Titlepiece","Georgia","serif"],fontSize:"70px",lineHeight:1.15,fontWeight:700},medium:{fontFamily:["GT Guardian Titlepiece","Georgia","serif"],fontSize:"50px",lineHeight:1.15,fontWeight:700},small:{fontFamily:["GT Guardian Titlepiece","Georgia","serif"],fontSize:"42px",lineHeight:1.15,fontWeight:700}}},width:{ctaMedium:"44px",ctaSmall:"36px",ctaXSmall:"24px",iconMedium:"30px",iconSmall:"26px",iconXSmall:"20px",inputXSmall:"24px"}},ze={brand:Ee.palette.brand,brandAlt:Ee.palette.brandAlt,neutral:Ee.palette.neutral,error:Ee.palette.error,success:Ee.palette.success,news:Ee.palette.news,opinion:Ee.palette.opinion,sport:Ee.palette.sport,culture:Ee.palette.culture,lifestyle:Ee.palette.lifestyle,labs:Ee.palette.labs,specialReport:Ee.palette.specialReport,specialReportAlt:Ee.palette.specialReportAlt,focus:Ee.palette.focus},{brand:ke,brandAlt:Ce,neutral:Ae,error:_e,success:Le,news:Oe,opinion:Pe,sport:De,culture:Ie,lifestyle:Ne,labs:Me,specialReport:Be,focus:je}=ze,Re=(ze.neutral[100],ze.neutral[97],ze.neutral[10],ze.brand[400],ze.brand[800],ze.neutral[100],ze.brand[500],ze.brand[400],ze.neutral[100],ze.neutral[100],ze.brand[600],ze.brand[300],ze.brandAlt[400],ze.neutral[7],ze.brandAlt[200],ze.neutral[60],ze.neutral[86],ze.success[400],ze.error[400],ze.brand[400],ze.neutral[60],ze.brand[500],ze.brand[500],ze.brand[500],ze.focus[400],ze.brand[600],ze.brand[600],ze.success[500],ze.error[500],ze.neutral[100],ze.brand[800],ze.neutral[100],ze.neutral[100],ze.neutral[7],ze.neutral[86],ze.brand[600],ze.neutral[7],ze.neutral[7],ze.neutral[46],ze.success[400],ze.error[400],ze.neutral[100],ze.brand[400],ze.brand[400],ze.brand[500],ze.neutral[7],ze.neutral[7],ze.neutral[7],ze.neutral[7],ze.neutral[46],ze.brand[400],ze.brand[400],ze.neutral[7],ze.neutral[46],ze.news[550],ze.neutral[100],ze.brand[800],ze.success[500],ze.error[500],ze.brand[400],ze.neutral[100],ze.neutral[100],ze.neutral[100],ze.brandAlt[400],ze.neutral[100],ze.neutral[100],ze.brand[800],ze.neutral[7],ze.neutral[60],ze.neutral[100],ze.neutral[7],ze.neutral[7],ze.neutral[7],e=>e/16),Ve=e=>Number(e.slice(0,-2)),Ue=e=>e.map((e=>e.includes(" ")?`"${e}"`:e)).join(", "),qe={0:Ve(Ee.space[0]),1:Ve(Ee.space[1]),2:Ve(Ee.space[2]),3:Ve(Ee.space[3]),4:Ve(Ee.space[4]),5:Ve(Ee.space[5]),6:Ve(Ee.space[6]),8:Ve(Ee.space[8]),9:Ve(Ee.space[9]),10:Ve(Ee.space[10]),12:Ve(Ee.space[12]),14:Ve(Ee.space[14]),16:Ve(Ee.space[16]),18:Ve(Ee.space[18]),24:Ve(Ee.space[24])},Xe=(Re(qe[0]),`${Re(qe[1])}rem`),Ye=(Re(qe[2]),Re(qe[3]),`${Re(qe[4])}rem`),Ze=`${Re(qe[5])}rem`,Je=(Re(qe[6]),Re(qe[8]),Re(qe[9]),Re(qe[10]),Re(qe[12]),Re(qe[14]),Re(qe[16]),Re(qe[18]),Re(qe[24]),{textSans:{xxsmall:Ve(Ee.typography.textSans.xxSmall.fontSize),xsmall:Ve(Ee.typography.textSans.xSmall.fontSize),small:Ve(Ee.typography.textSans.small.fontSize),medium:Ve(Ee.typography.textSans.medium.fontSize),large:Ve(Ee.typography.textSans.large.fontSize),xlarge:Ve(Ee.typography.textSans.xLarge.fontSize),xxlarge:Ve(Ee.typography.textSans.xxLarge.fontSize),xxxlarge:Ve(Ee.typography.textSans.xxxLarge.fontSize)},body:{xsmall:Ve(Ee.typography.body.xSmall.fontSize),small:Ve(Ee.typography.body.small.fontSize),medium:Ve(Ee.typography.body.medium.fontSize)},headline:{xxxsmall:Ve(Ee.typography.headline.xxxSmall.fontSize),xxsmall:Ve(Ee.typography.headline.xxSmall.fontSize),xsmall:Ve(Ee.typography.headline.xSmall.fontSize),small:Ve(Ee.typography.headline.small.fontSize),medium:Ve(Ee.typography.headline.medium.fontSize),large:Ve(Ee.typography.headline.large.fontSize),xlarge:Ve(Ee.typography.headline.xLarge.fontSize)},titlepiece:{small:Ve(Ee.typography.titlepiece.small.fontSize),medium:Ve(Ee.typography.titlepiece.medium.fontSize),large:Ve(Ee.typography.titlepiece.large.fontSize)}}),Ke={textSans:{xxsmall:Re(Je.textSans.xxsmall),xsmall:Re(Je.textSans.xsmall),small:Re(Je.textSans.small),medium:Re(Je.textSans.medium),large:Re(Je.textSans.large),xlarge:Re(Je.textSans.xlarge),xxlarge:Re(Je.textSans.xxlarge),xxxlarge:Re(Je.textSans.xxxlarge)},body:{xsmall:Re(Je.body.xsmall),small:Re(Je.body.small),medium:Re(Je.body.medium)},headline:{xxxsmall:Re(Je.headline.xxxsmall),xxsmall:Re(Je.headline.xxsmall),xsmall:Re(Je.headline.xsmall),small:Re(Je.headline.small),medium:Re(Je.headline.medium),large:Re(Je.headline.large),xlarge:Re(Je.headline.xlarge)},titlepiece:{small:Re(Je.titlepiece.small),medium:Re(Je.titlepiece.medium),large:Re(Je.titlepiece.large)}},Qe={titlepiece:Ue(Ee.typography.fontFamily.titlepiece),headline:Ue(Ee.typography.fontFamily.headline),body:Ue(Ee.typography.fontFamily.body),textSans:Ue(Ee.typography.fontFamily.textSans)},et={tight:Ee.typography.lineHeight.tight,regular:Ee.typography.lineHeight.regular,loose:Ee.typography.lineHeight.loose},tt={light:Ee.typography.fontWeight.light,regular:Ee.typography.fontWeight.regular,medium:Ee.typography.fontWeight.medium,bold:Ee.typography.fontWeight.bold},at={titlepiece:{bold:!0},headline:{light:!0,medium:!0,bold:!0},body:{regular:!0,bold:!0},textSans:{regular:!0,bold:!0}},nt={titlepiece:{bold:!1},headline:{light:!0,medium:!0,bold:!1},body:{regular:!0,bold:!0},textSans:{regular:!0,bold:!1}},it={textSans:{xxsmall:Ve(Ee.typography.textDecorationThicknessForFontSize[12]),xsmall:Ve(Ee.typography.textDecorationThicknessForFontSize[14]),small:Ve(Ee.typography.textDecorationThicknessForFontSize[15]),medium:Ve(Ee.typography.textDecorationThicknessForFontSize[17]),large:Ve(Ee.typography.textDecorationThicknessForFontSize[20]),xlarge:Ve(Ee.typography.textDecorationThicknessForFontSize[24]),xxlarge:Ve(Ee.typography.textDecorationThicknessForFontSize[28]),xxxlarge:Ve(Ee.typography.textDecorationThicknessForFontSize[34])},body:{xsmall:Ve(Ee.typography.textDecorationThicknessForFontSize[14]),small:Ve(Ee.typography.textDecorationThicknessForFontSize[15]),medium:Ve(Ee.typography.textDecorationThicknessForFontSize[17])},headline:{xxxsmall:Ve(Ee.typography.textDecorationThicknessForFontSize[17]),xxsmall:Ve(Ee.typography.textDecorationThicknessForFontSize[20]),xsmall:Ve(Ee.typography.textDecorationThicknessForFontSize[24]),small:Ve(Ee.typography.textDecorationThicknessForFontSize[28]),medium:Ve(Ee.typography.textDecorationThicknessForFontSize[34]),large:Ve(Ee.typography.textDecorationThicknessForFontSize[42]),xlarge:Ve(Ee.typography.textDecorationThicknessForFontSize[50])},titlepiece:{small:Ve(Ee.typography.textDecorationThicknessForFontSize[42]),medium:Ve(Ee.typography.textDecorationThicknessForFontSize[50]),large:Ve(Ee.typography.textDecorationThicknessForFontSize[70])}},rt=(e,t)=>{switch(e){case"italic":return t?"italic":void 0;case"normal":return"normal";default:return}},ot=(e,t,a)=>n=>{const i={...a,...n},r=Number(Je[e][t]),o=Number(Ke[e][t]),l=nt[e]?.[i.fontWeight]??!1,s=at[e]?.[i.fontWeight]?tt[i.fontWeight]:void 0;return{lineHeight:"px"===i.unit?et[i.lineHeight]*r+"px":et[i.lineHeight],fontWeight:s,fontSize:"px"===i.unit?r:`${o}rem`,fontFamily:Qe[e],textDecorationThickness:Number(it[e][t]),fontStyle:rt(i.fontStyle,l)}},lt=e=>t=>{const{fontFamily:a,fontSize:n,fontStyle:i,fontWeight:r,lineHeight:o,textDecorationThickness:l}=e(t);return`\n\t\t\tfont-family: ${a};\n\t\t\tfont-size: ${"number"==typeof n?`${n}px`:n};\n\t\t\tline-height: ${o};\n\t\t\t${r?`font-weight: ${r};`:""}\n\t\t\t${i?`font-style: ${i};`:""}\n\t\t\t--source-text-decoration-thickness: ${void 0===l?"auto":`${l}px`};\n\t\t`},st={lineHeight:"tight",fontWeight:"bold",fontStyle:null,unit:"rem"},ut={small:ot("titlepiece","small",st),medium:ot("titlepiece","medium",st),large:ot("titlepiece","large",st)},dt={lineHeight:"tight",fontWeight:"medium",fontStyle:null,unit:"rem"},ft={xxxsmall:ot("headline","xxxsmall",dt),xxsmall:ot("headline","xxsmall",dt),xsmall:ot("headline","xsmall",dt),small:ot("headline","small",dt),medium:ot("headline","medium",dt),large:ot("headline","large",dt),xlarge:ot("headline","xlarge",dt)},ct={lineHeight:"loose",fontWeight:"regular",fontStyle:null,unit:"rem"},pt={xsmall:ot("body","xsmall",ct),small:ot("body","small",ct),medium:ot("body","medium",ct)},gt={lineHeight:"regular",fontWeight:"regular",fontStyle:null,unit:"rem"},mt={xxsmall:ot("textSans","xxsmall",gt),xsmall:ot("textSans","xsmall",gt),small:ot("textSans","small",gt),medium:ot("textSans","medium",gt),large:ot("textSans","large",gt),xlarge:ot("textSans","xlarge",gt),xxlarge:ot("textSans","xxlarge",gt),xxxlarge:ot("textSans","xxxlarge",gt)},xt=(lt(ut.small),lt(ut.medium),lt(ut.large),{xxxsmall:lt(ft.xxxsmall),xxsmall:lt(ft.xxsmall),xsmall:lt(ft.xsmall),small:lt(ft.small),medium:lt(ft.medium),large:lt(ft.large),xlarge:lt(ft.xlarge)}),yt=(lt(pt.xsmall),lt(pt.small),lt(pt.medium),{xxsmall:lt(mt.xxsmall),xsmall:lt(mt.xsmall),small:lt(mt.small),medium:lt(mt.medium),large:lt(mt.large),xlarge:lt(mt.xlarge),xxlarge:lt(mt.xxlarge),xxxlarge:lt(mt.xxxlarge)}),ht=".2s cubic-bezier(.64, .57, .67, 1.53)",bt={mobile:Ve(Ee.breakpoint.mobile),mobileMedium:Ve(Ee.breakpoint.mobileMedium),mobileLandscape:Ve(Ee.breakpoint.mobileLandscape),phablet:Ve(Ee.breakpoint.phablet),tablet:Ve(Ee.breakpoint.tablet),desktop:Ve(Ee.breakpoint.desktop),leftCol:Ve(Ee.breakpoint.leftCol),wide:Ve(Ee.breakpoint.wide)},St=e=>`@media (min-width: ${e}px)`,Gt=e=>`@media (max-width: ${e-.1+"px"})`,vt=(e,t)=>`@media (min-width: ${e}px) and (max-width: ${t-.1+"px"})`,Ht=(St(bt.mobile),St(bt.mobileMedium),St(bt.mobileLandscape)),$t=(St(bt.phablet),St(bt.tablet)),Ft=St(bt.desktop),Wt=St(bt.leftCol),Tt=St(bt.wide),wt={mobile:Gt(bt.mobile),mobileMedium:Gt(bt.mobileMedium),mobileLandscape:Gt(bt.mobileLandscape),phablet:Gt(bt.phablet),tablet:Gt(bt.tablet),desktop:Gt(bt.desktop),leftCol:Gt(bt.leftCol),wide:Gt(bt.wide)},Et={and:{mobileMedium:vt(bt.mobile,bt.mobileMedium),mobileLandscape:vt(bt.mobile,bt.mobileLandscape),phablet:vt(bt.mobile,bt.phablet),tablet:vt(bt.mobile,bt.tablet),desktop:vt(bt.mobile,bt.desktop),leftCol:vt(bt.mobile,bt.leftCol),wide:vt(bt.mobileMedium,bt.wide)}},zt=(vt(bt.mobileMedium,bt.mobileLandscape),vt(bt.mobileMedium,bt.phablet),vt(bt.mobileMedium,bt.tablet),vt(bt.mobileMedium,bt.desktop),vt(bt.mobileMedium,bt.leftCol),vt(bt.mobileMedium,bt.wide),vt(bt.mobileLandscape,bt.phablet),vt(bt.mobileLandscape,bt.tablet),vt(bt.mobileLandscape,bt.desktop),vt(bt.mobileLandscape,bt.leftCol),vt(bt.mobileLandscape,bt.wide),vt(bt.phablet,bt.tablet),vt(bt.phablet,bt.desktop),vt(bt.phablet,bt.leftCol),vt(bt.phablet,bt.wide),{and:{desktop:vt(bt.tablet,bt.desktop),leftCol:vt(bt.tablet,bt.leftCol),wide:vt(bt.tablet,bt.wide)}}),kt=(vt(bt.desktop,bt.leftCol),vt(bt.desktop,bt.wide),{and:{wide:vt(bt.leftCol,bt.wide)}}),Ct="\n\tposition: absolute;\n\toverflow: hidden; /* gets rid of horizontal scrollbar that appears in some circumstances */\n\twhite-space: nowrap; /* The white-space property forces the content to render on one line. */\n\twidth: 1px;  /* ensures content is announced by VoiceOver. */\n\theight: 1px; /* ensures content is announced by VoiceOver. */\n\tmargin: -1px; /* hide or clip content that does not fit into a 1-pixel visible area. */\n\tpadding: 0; /* hide or clip content that does not fit into a 1-pixel visible area. */\n\tborder: 0;\n\tclip: rect(1px, 1px, 1px, 1px); /* clip removes any visible trace of the element */\n\t-webkit-clip-path: inset(50%); /* clip removes any visible trace of the element */\n\tclip-path: inset(50%); /* clip removes any visible trace of the element */\n",At=`\n outline: 0;\n html:not(.src-focus-disabled) & {\n\t box-shadow: 0 0 0 3px ${ze.focus[400]};\n }\n`,_t=`\n outline: 0;\n html:not(.src-focus-disabled) & {\n\toutline: 5px solid ${ze.focus[400]};\n\toutline-offset: 3px;\n }\n`,Lt={xsmall:Ve(Ee.size.xSmall),small:Ve(Ee.size.small),medium:Ve(Ee.size.medium)},Ot=(Re(Lt.xsmall),Re(Lt.small),Re(Lt.medium),{xsmall:Ve(Ee.size.icon.xSmall),small:Ve(Ee.size.icon.small),medium:Ve(Ee.size.icon.medium)}),Pt={xsmall:Re(Ot.xsmall),small:Re(Ot.small),medium:Re(Ot.medium)},Dt=Lt.medium,It=Lt.small,Nt=Lt.xsmall,Mt=Ot.medium,Bt=Pt.medium,jt=Pt.small,Rt=Lt.medium,Vt=Lt.small,Ut=Lt.xsmall,qt=Ot.medium,Xt=Ot.small,Yt=Ot.xsmall,Zt=Pt.medium,Jt=Pt.small,Kt=(ze.neutral[100],ze.neutral[7],"\n\tpadding: 0;\n"),Qt="\n\tborder: 0;\n\tpadding: 0;\n\tmargin: 0;\n",ea="(appearance: none) or (-webkit-appearance: none) or (-moz-appearance: none)",ta={textLabel:ze.neutral[7],textBody:ze.neutral[7],textCta:ze.neutral[7],border:ze.neutral[60],iconFill:ze.neutral[7]},aa=(ze.neutral[7],ze.neutral[60],e=>{const t={};return e?.textPrimary&&(t.textLabel=e.textPrimary,t.textBody=e.textPrimary,t.textCta=e.textPrimary),e?.borderPrimary&&(t.border=e.borderPrimary),t}),na={ctaPrimary:ke[400],ctaTertiary:ke[400]},ia={ctaPrimary:ke[400],ctaTertiary:Ce[400]},ra={ctaPrimary:Ae[100],ctaTertiary:Ae[7]},oa={ctaPrimary:Ce[400],ctaPrimaryHover:"#FFD213",ctaTertiaryHover:"#E5E5E5"},la={ctaPrimary:Ce[400],ctaPrimaryHover:"#FFD213",ctaTertiaryHover:ke[300]},sa={ctaPrimary:Ae[7],ctaPrimaryHover:"#454545",ctaTertiaryHover:"#FFD213"},ua={ctaTertiary:ke[400]},da={ctaTertiary:Ce[400]},fa={ctaTertiary:Ae[7]},ca=(na.ctaPrimary,oa.ctaPrimary,oa.ctaPrimaryHover,na.ctaTertiary,oa.ctaTertiaryHover,ua.ctaTertiary,ia.ctaPrimary,la.ctaPrimary,la.ctaPrimaryHover,ia.ctaTertiary,la.ctaTertiaryHover,da.ctaTertiary,ra.ctaPrimary,sa.ctaPrimary,sa.ctaPrimaryHover,ra.ctaTertiary,sa.ctaTertiaryHover,fa.ctaTertiary,ze.neutral[100],ze.brand[400],ze.brand[400],ze.brand[800],ze.brand[400],ze.brand[400],ze.brand[400],ze.brand[400],ze.neutral[100],ze.neutral[100],ze.brand[600],ze.neutral[100],ze.brand[300],ze.neutral[100],ze.neutral[100],ze.neutral[100],ze.neutral[7],ze.neutral[7],ze.brandAlt[200],ze.neutral[0],ze.neutral[7],ze.neutral[7],ze.neutral[100],ze.brand[400],ze.brand[400],ze.brand[800],ze.brand[400],ze.brand[400],ze.brand[400],ze.brand[400],ze.neutral[100],ze.neutral[100],ze.brand[600],ze.neutral[100],ze.brand[300],ze.neutral[100],ze.neutral[100],ze.neutral[100],ze.neutral[7],ze.neutral[7],ze.brandAlt[200],ze.neutral[0],ze.neutral[7],ze.neutral[7],ze.neutral[7],ze.neutral[46],ze.neutral[46],ze.error[400],ze.success[400],ze.neutral[100],ze.brand[800],ze.brand[800],ze.error[500],ze.success[500],ze.neutral[7],ze.neutral[46],ze.neutral[46],ze.error[400],ze.success[400],ze.neutral[100],ze.brand[800],ze.brand[800],ze.error[500],ze.success[500],ze.success[400],ze.error[400],ze.success[500],ze.error[500],ze.success[400],ze.error[400],ze.success[500],ze.error[500],ze.neutral[46],ze.brand[500],ze.brand[500],ze.error[400],ze.brand[500],ze.neutral[7],ze.neutral[46],ze.neutral[46],ze.brand[800],ze.neutral[100],ze.neutral[100],ze.error[500],ze.neutral[100],ze.neutral[100],ze.brand[800],ze.brand[800],ze.neutral[46],ze.brand[500],ze.brand[500],ze.error[400],ze.brand[500],ze.neutral[7],ze.neutral[46],ze.neutral[46],ze.brand[800],ze.neutral[100],ze.neutral[100],ze.error[500],ze.neutral[100],ze.neutral[100],ze.brand[800],ze.brand[800],ze.neutral[46],ze.brand[400],ze.brand[500],ze.error[400],ze.neutral[46],ze.brand[500],ze.brand[500],ze.error[400],ze.brand[500],ze.neutral[46],ze.neutral[46],ze.neutral[7],ze.neutral[46],ze.neutral[46],ze.brand[400],ze.brand[500],ze.brand[500],ze.brand[500],ze.brand[500],ze.error[400],ze.error[400],ze.brand[500],ze.brand[500],ze.neutral[7],ze.neutral[7],ze.neutral[100],ze.neutral[100],ze.neutral[7],ze.neutral[7],ze.brand[500],ze.brand[500],ze.neutral[7],ze.neutral[7],ze.neutral[100],ze.neutral[100],ze.neutral[7],ze.neutral[7],ze.brand[500],ze.neutral[46],ze.brand[500],ze.error[400],ze.brand[500],ze.neutral[7],ze.neutral[46],ze.brand[500],ze.error[400],ze.neutral[100],ze.brand[800],ze.neutral[100],ze.error[500],ze.neutral[100],ze.neutral[100],ze.brand[800],ze.neutral[100],ze.error[500],ze.focus[400],ze.neutral[60],ze.focus[400],ze.neutral[7],ze.neutral[46],ze.error[400],ze.neutral[100],ze.brand[800],ze.neutral[100],ze.neutral[100],ze.brand[800],ze.error[500],ze.neutral[7],ze.neutral[7],ze.neutral[46],ze.neutral[46],ze.neutral[7],ze.success[400],ze.neutral[100],ze.neutral[46],ze.focus[400],ze.error[400],ze.success[400],ze.neutral[7],ze.neutral[7],ze.neutral[46],ze.neutral[46],ze.neutral[7],ze.success[400],ze.neutral[100],ze.neutral[46],ze.focus[400],ze.error[400],ze.success[400],ze.neutral[7],ze.neutral[7],ze.neutral[7],ze.neutral[46],ze.neutral[46],ze.neutral[7],ze.success[400],ze.neutral[100],ze.neutral[46],ze.error[400],ze.success[400],ze.neutral[7],ze.neutral[7],ze.neutral[46],ze.neutral[46],ze.neutral[7],ze.success[400],ze.neutral[100],ze.neutral[46],ze.focus[400],ze.error[400],ze.success[400],(e,t,a,n)=>({...e,...n?n(a):a,...t})),pa=(we`
	${we`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: ${Xe} 0 ${Ze} 0;
	cursor: pointer;
`,we`
	${xt.xxxsmall({fontWeight:"bold"})};
	margin-right: ${Ye};
`,we`
	max-height: 0;
	/*
	TODO:
	This transition is being ignored as the hidden
	attribute is applied immediately

	transition: max-height ${ht};
	*/
	overflow: hidden;
`};
`,we`
	width: auto;
	display: flex;
	align-items: center;
`,we`
	svg {
		/* TODO: think about icon sizing */
		width: 18px;
		height: 18px;

		${$t} {
			width: 26px;
			height: 26px;
		}
		margin-left: ${Xe};
		transition: ${ht};
	}
`),ga=(we`
	${pa};
	svg {
		transform: translate(0, 0);
		transition: transform ${ht};
	}

	&:hover,
	&:focus {
		svg {
			transform: translate(0, ${qe[1]/2}px);
		}
	}
`,we`
	${pa};
	svg {
		transform: rotate(180deg);
		transition: transform ${ht};
	}
`,we`
	svg {
		width: 18px;
		height: 18px;
	}
`,we`
	${Ct}
`,we`
	${Ct}
`,we`
	stroke: #a5c0e8;
	stroke-width: ${5};
	fill: transparent;
`,we`
	stroke: ${ke[400]};
	stroke-dasharray: 82;
	stroke-dashoffset: 82;
	stroke-width: ${5};
	fill: transparent;
`,we`
	display: inline-flex;
	justify-content: space-between;
	align-items: center;
	box-sizing: border-box;
	border: none;
	background: transparent;
	cursor: pointer;
	transition: ${".3s ease-in-out"};
	text-decoration: none;
	white-space: nowrap;
	vertical-align: middle;

	:disabled {
		cursor: not-allowed;
	}

	&:focus {
		${_t};
	}
`,we`
	${yt.medium({fontWeight:"bold"})};
	height: ${Dt}px;
	min-height: ${Dt}px;
	padding: 0 ${qe[5]}px;
	border-radius: ${Dt}px;
	padding-bottom: 2px;
`,we`
	${yt.medium({fontWeight:"bold"})};
	height: ${It}px;
	min-height: ${It}px;
	padding: 0 ${qe[4]}px;
	border-radius: ${It}px;
	padding-bottom: 2px;
`,we`
	${yt.xsmall({fontWeight:"bold"})};
	height: ${Nt}px;
	min-height: ${Nt}px;
	padding: 0 ${qe[3]}px;
	border-radius: ${Nt}px;
	padding-bottom: 1px;
`,we`
	svg {
		flex: 0 0 auto;
		display: block;
		fill: currentColor;
		position: relative;
		width: ${qt}px;
		height: auto;
	}
	.src-button-space {
		width: ${qe[3]}px;
	}
`,we`
	svg {
		flex: 0 0 auto;
		display: block;
		fill: currentColor;
		position: relative;
		width: ${Xt}px;
		height: auto;
	}
	.src-button-space {
		width: ${qe[2]}px;
	}
`,we`
	svg {
		flex: 0 0 auto;
		display: block;
		fill: currentColor;
		position: relative;
		width: ${Yt}px;
		height: auto;
	}
	.src-button-space {
		width: ${qe[1]}px;
	}
`,-qe[1]),ma=(we`
	flex-direction: row-reverse;
	svg {
		margin-left: ${ga}px;
	}
`,we`
	svg {
		margin-right: ${ga}px;
	}
`,we`
	justify-content: center;
	padding: 0;
`),xa=(we`
	${ma};
	width: ${Rt}px;
`,we`
	${ma};
	width: ${Vt}px;
`,we`
	${ma};
	width: ${Ut}px;
`,we`
	svg {
		transform: translate(0, 0);
		transition: ${ht};
	}
	&:hover,
	&:focus {
		svg {
			transform: translate(${qe[1]/2}px, 0);
		}
	}
`,yt.medium({fontWeight:"bold"}),yt.xsmall({fontWeight:"bold"}),we`
	${Kt};
`,we`
	${Ct}
`,we`
	${Ct}
`,we`
	display: flex;
	align-items: flex-start;

	svg {
		fill: currentColor;
		/* we don't want the SVG to change size depending on available space */
		flex: none;

		/*
		a visual kick to vertically align the icon with the top row of text
		and horizontally pull it to the beginning of the row
		 */
		transform: translate(-4px, -4px);
	}
`,we`
	${yt.xsmall()};
	svg {
		width: ${Jt}rem;
		height: ${jt}rem;
	}
`,we`
	${yt.medium()};
	svg {
		width: ${Zt}rem;
		height: ${Bt}rem;
	}
`,we`
	${Qt};
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
`,we`
	cursor: pointer;
`,we`
	align-items: flex-start;
	margin-bottom: ${qe[3]}px;
`,we`
	${yt.medium()};
	margin-top: 1px;
	/* If label text is empty, add additional spacing to align supporting text */
	&:empty {
		margin-top: 2px;
	}
`,we`
	@supports (${ea}) {
		top: 15px;
		left: 9px;
	}
`,we`
	@supports (${ea}) {
		top: 5px;
	}
`,we`
	${Qt};
`,we`
	width: 100%;

	${Ht} {
		display: flex;
		justify-content: flex-start;
	}
`,we`
	margin-top: ${qe[2]}px;
`,we`
	width: 100%;
	${Ht} {
		@supports (display: grid) {
			display: grid;
			row-gap: ${qe[2]}px;
			column-gap: ${qe[2]}px;
			& > label {
				margin: 0;
			}
		}
	}
`,e=>we`
	${Ht} {
		grid-template-columns: repeat(${e}, 1fr);
	}
`),ya=(xa(2),xa(3),xa(4),xa(5),we`
	@keyframes labelFadeOutIn {
		0% {
			opacity: 1;
		}
		1%,
		80% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	@keyframes tickFadeInOut {
		0% {
			opacity: 0;
		}
		10%,
		40% {
			opacity: 1;
		}
		70% {
			opacity: 0;
		}
	}

	&:checked + label {
		& > * {
			animation-duration: 1s;
			animation-name: labelFadeOutIn;

			/* last child is the tick */
			&:last-child {
				animation-name: tickFadeInOut;
			}
		}
	}
`,we`
	flex: 0 1 auto;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	position: relative;
	box-sizing: border-box;

	${Ht} {
		flex-direction: column;
		padding: ${qe[2]}px ${qe[6]}px;
	}

	& > * {
		${yt.medium({fontWeight:"bold"})};
		text-align: center;
	}

	& svg {
		width: ${qt}px;
		max-height: ${Mt}px;
		fill: currentColor;
		margin-right: ${qe[1]}px;

		${Ht} {
			margin-bottom: -${qe[1]}px;
			margin-right: 0;
		}
	}
`,we`
	width: 100%;
	${Ht} {
		& > div {
			width: 100%;
		}
	}
`,ze.brand[600],ze.brand[400],ze.neutral[100],ze.neutral[100],ze.brandAlt[400],we`
	display: flex;
	align-items: center;
`,we`
	margin-bottom: ${qe[6]}px;
	${Ft} {
		margin-bottom: ${qe[1]}px;
	}
`,e=>e-Dt/2),ha=(we`
	margin-bottom: ${ya(qe[6])}px;
	${Ft} {
		margin-bottom: ${ya(qe[1])}px;
	}
`,we`
	${yt.xxsmall()};
	display: block;
`,we`
	${Et.and.tablet} {
		padding-right: ${Dt}px;
	}
`,we`
	box-sizing: border-box;
	display: flex;
	margin-right: -${qe[5]}px;
	& > * {
		margin-right: ${qe[5]}px;
	}
`,e=>we`
	${wt[e]} {
		display: block;
		margin-right: 0;
		& > * {
			margin-right: 0;
		}
	}
`),ba=e=>we`
	margin-bottom: ${-qe[e]}px;
	& > * {
		margin-bottom: ${qe[e]}px;
	}
`,Sa=(ba(1),ba(2),ba(3),ba(4),ba(5),ba(6),ba(9),ba(12),ba(24),we`
	width: 100% !important;
`),Ga=(we`
	& > * {
		${wt.tablet} {
			${Sa}
		}
	}
`,we`
	& > * {
		${wt.desktop} {
			${Sa}
		}
	}
`,we`
	& > * {
		${wt.leftCol} {
			${Sa}
		}
	}
`,we`
	& > * {
		${wt.wide} {
			${Sa}
		}
	}
`,zt.and.leftCol,kt.and.wide,we`
	box-sizing: border-box;
`,we`
	flex: 1;
`,ha("tablet"),ha("desktop"),ha("leftCol"),ha("wide"),we`
	margin: 0 auto;
	box-sizing: border-box;
	padding: 0 ${qe[3]}px;
	width: 100%;
	${Ht} {
		padding: 0 ${qe[5]}px;
	}
	${$t} {
		width: ${bt.tablet}px;
	}
	${Ft} {
		width: ${bt.desktop}px;
	}
	${Wt} {
		width: ${bt.leftCol}px;
	}
	${Tt} {
		width: ${bt.wide}px;
	}
	border-color: ${ze.neutral[86]};
`,we`
	border-left-style: solid;
	border-right-style: solid;
	border-left-width: 0;
	border-right-width: 0;

	${$t} {
		width: ${bt.tablet+2}px;
		border-left-width: 1px;
		border-right-width: 1px;
	}
	${Ft} {
		width: ${bt.desktop+2}px;
	}
	${Wt} {
		width: ${bt.leftCol+2}px;
	}
	${Tt} {
		width: ${bt.wide+2}px;
	}
`,we`
	border-top-width: 1px;
	border-top-style: solid;
`,we`
	& > * {
		width: 100%;
	}
`,e=>we`
	& > * + * {
		margin-top: ${qe[e]}px;
	}
`),va=(Ga(1),Ga(2),Ga(3),Ga(4),Ga(5),Ga(6),Ga(9),Ga(12),Ga(24),we`
	display: block;
	& > * + * {
		margin-left: 0;
	}
	& > * {
		margin-bottom: ${qe[5]}px;
	}
`),Ha=(we`
	${wt.tablet} {
		${va}
	}
`,we`
	${wt.desktop} {
		${va}
	}
`,we`
	${wt.leftCol} {
		${va}
	}
`,we`
	${wt.wide} {
		${va}
	}
`,we`
	width: 100% !important;
`),$a=(we`
	& > * {
		${wt.tablet} {
			${Ha}
		}
	}
`,we`
	& > * {
		${wt.desktop} {
			${Ha}
		}
	}
`,we`
	& > * {
		${wt.leftCol} {
			${Ha}
		}
	}
`,we`
	& > * {
		${wt.wide} {
			${Ha}
		}
	}
`,we`
	width: 100%;
	${Ht} {
		@supports (display: grid) {
			display: grid;
			row-gap: ${qe[5]}px;
			column-gap: ${qe[5]}px;
		}
	}
`,e=>we`
	${Ht} {
		grid-template-columns: repeat(${e}, 1fr);
	}
`),Fa=($a(2),$a(3),$a(4),$a(5),we`
	display: flex;
	flex-wrap: wrap;
`,e=>we`
	margin-left: -${qe[e]}px;
	& > * {
		margin-left: ${qe[e]}px;
		margin-bottom: ${qe[e]}px;
	}
`);Fa(1),Fa(2),Fa(3),Fa(4),Fa(5),Fa(6),Fa(9),Fa(12),Fa(24),we`
	position: relative;
	${yt.medium()};
	cursor: pointer;
	text-decoration: underline;
	text-underline-position: under;
	text-underline-offset: 5%;

	display: inline;
	align-items: center;

	&:focus {
		${At};
	}

	&:hover {
		/* If the hover text decoration thickness is not set, we default to the initial value. */
		text-decoration-thickness: var(--source-text-decoration-thickness, auto);
	}
`,we`
	/* override user agent styles */
	border: none;
	background: transparent;
	padding: 0;
`,we`
	svg {
		fill: currentColor;
		/*
		TODO: hardcoded bottom margin to vertically align
		icons with text. This needs to be revisited when
		the rules of icon spacing have been formalised
		 */
		margin-bottom: -3px;
		width: ${Yt}px;
		height: auto;
	}
`,we`
	svg {
		margin-left: -${qe[5]}px;
	}
`,we`
	svg {
		margin-left: -${qe[6]}px;
		margin-right: ${qe[1]}px;
	}
`,we`
	cursor: pointer;
`,we`
	align-items: flex-start;
	margin-bottom: ${qe[3]}px;
`,we`
	${yt.medium({fontWeight:"bold"})};
	margin-top: 1px;
	/* If label text is empty, add additional spacing to align supporting text */
	&:empty {
		margin-top: 2px;
	}
`,we`
	margin-top: ${qe[1]}px;
`,we`
	margin-top: 6px;
`,we`
	margin-top: ${qe[1]}px;
`,yt.medium(),yt.xsmall(),we`
	margin-top: ${qe[1]}px;
`,we`
	margin-top: 6px;
`,we`
	margin-top: 2px;
`,we`
	width: 100%;
`,ze.neutral[7],ze.neutral[7],ze.neutral[46],ze.neutral[46],ze.neutral[7],ze.success[400],ze.neutral[100],ze.neutral[46],ze.error[400],ze.success[400],we`
	${yt.medium()};
	height: ${Lt.medium}px;
`,we`
	${yt.xsmall()};
	height: ${Lt.small}px;
`,we`
	margin-top: ${qe[1]}px;
`,we`
	margin-top: 6px;
`,we`
	margin-top: 2px;
`,we`
	width: 100%;
`,we`
	width: 40ex;
	max-width: 100%; /* prevent overflow on narrow viewports */
`,we`
	width: 18ex;
`,we`
	width: 9ex;
`,console.log((({hideToggleLabel:e=!1,children:a,cssOverrides:n,theme:i,...r})=>{const o=e=>ca(ta,i,e,aa);return Te("div",{css:e=>{return[(t=o(e.accordion),we`
	border-bottom: 1px solid ${t.border};
`),n];var t},...r,children:t.Children.map(a,(a=>(0,t.cloneElement)(a,{hideToggleLabel:e})))})}))})()})();