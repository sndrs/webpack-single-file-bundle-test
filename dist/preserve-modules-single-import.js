/*! For license information please see preserve-modules-single-import.js.LICENSE.txt */
(()=>{"use strict";var e,t,a={35:(e,t,a)=>{var n=a(959),i={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},r={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},o={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},l={};function s(e){return n.isMemo(e)?o:l[e.$$typeof]||i}l[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},l[n.Memo]=o;var u=Object.defineProperty,d=Object.getOwnPropertyNames,c=Object.getOwnPropertySymbols,f=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,g=Object.prototype;e.exports=function e(t,a,n){if("string"!=typeof a){if(g){var i=p(a);i&&i!==g&&e(t,i,n)}var o=d(a);c&&(o=o.concat(c(a)));for(var l=s(t),m=s(a),x=0;x<o.length;++x){var h=o[x];if(!(r[h]||n&&n[h]||m&&m[h]||l&&l[h])){var y=f(a,h);try{u(t,h,y)}catch(e){}}}}return t}},843:(e,t)=>{var a="function"==typeof Symbol&&Symbol.for,n=a?Symbol.for("react.element"):60103,i=a?Symbol.for("react.portal"):60106,r=a?Symbol.for("react.fragment"):60107,o=a?Symbol.for("react.strict_mode"):60108,l=a?Symbol.for("react.profiler"):60114,s=a?Symbol.for("react.provider"):60109,u=a?Symbol.for("react.context"):60110,d=a?Symbol.for("react.async_mode"):60111,c=a?Symbol.for("react.concurrent_mode"):60111,f=a?Symbol.for("react.forward_ref"):60112,p=a?Symbol.for("react.suspense"):60113,g=a?Symbol.for("react.suspense_list"):60120,m=a?Symbol.for("react.memo"):60115,x=a?Symbol.for("react.lazy"):60116,h=a?Symbol.for("react.block"):60121,y=a?Symbol.for("react.fundamental"):60117,b=a?Symbol.for("react.responder"):60118,S=a?Symbol.for("react.scope"):60119;function G(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case d:case c:case r:case l:case o:case p:return e;default:switch(e=e&&e.$$typeof){case u:case f:case x:case m:case s:return e;default:return t}}case i:return t}}}function v(e){return G(e)===c}t.AsyncMode=d,t.ConcurrentMode=c,t.ContextConsumer=u,t.ContextProvider=s,t.Element=n,t.ForwardRef=f,t.Fragment=r,t.Lazy=x,t.Memo=m,t.Portal=i,t.Profiler=l,t.StrictMode=o,t.Suspense=p,t.isAsyncMode=function(e){return v(e)||G(e)===d},t.isConcurrentMode=v,t.isContextConsumer=function(e){return G(e)===u},t.isContextProvider=function(e){return G(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return G(e)===f},t.isFragment=function(e){return G(e)===r},t.isLazy=function(e){return G(e)===x},t.isMemo=function(e){return G(e)===m},t.isPortal=function(e){return G(e)===i},t.isProfiler=function(e){return G(e)===l},t.isStrictMode=function(e){return G(e)===o},t.isSuspense=function(e){return G(e)===p},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===r||e===c||e===l||e===o||e===p||e===g||"object"==typeof e&&null!==e&&(e.$$typeof===x||e.$$typeof===m||e.$$typeof===s||e.$$typeof===u||e.$$typeof===f||e.$$typeof===y||e.$$typeof===b||e.$$typeof===S||e.$$typeof===h)},t.typeOf=G},959:(e,t,a)=>{e.exports=a(843)},34:(e,t,a)=>{var n=a(474),i=Symbol.for("react.element"),r=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,a){var n,r={},u=null,d=null;for(n in void 0!==a&&(u=""+a),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(d=t.ref),t)o.call(t,n)&&!s.hasOwnProperty(n)&&(r[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===r[n]&&(r[n]=t[n]);return{$$typeof:i,type:e,key:u,ref:d,props:r,_owner:l.current}}t.Fragment=r,t.jsx=u,t.jsxs=u},749:(e,t)=>{var a=Symbol.for("react.element"),n=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),s=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),c=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),p=Symbol.iterator,g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,x={};function h(e,t,a){this.props=e,this.context=t,this.refs=x,this.updater=a||g}function y(){}function b(e,t,a){this.props=e,this.context=t,this.refs=x,this.updater=a||g}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=h.prototype;var S=b.prototype=new y;S.constructor=b,m(S,h.prototype),S.isPureReactComponent=!0;var G=Array.isArray,v=Object.prototype.hasOwnProperty,H={current:null},$={key:!0,ref:!0,__self:!0,__source:!0};function F(e,t,n){var i,r={},o=null,l=null;if(null!=t)for(i in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(o=""+t.key),t)v.call(t,i)&&!$.hasOwnProperty(i)&&(r[i]=t[i]);var s=arguments.length-2;if(1===s)r.children=n;else if(1<s){for(var u=Array(s),d=0;d<s;d++)u[d]=arguments[d+2];r.children=u}if(e&&e.defaultProps)for(i in s=e.defaultProps)void 0===r[i]&&(r[i]=s[i]);return{$$typeof:a,type:e,key:o,ref:l,props:r,_owner:H.current}}function W(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var w=/\/+/g;function T(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function E(e,t,i,r,o){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s=!1;if(null===e)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case a:case n:s=!0}}if(s)return o=o(s=e),e=""===r?"."+T(s,0):r,G(o)?(i="",null!=e&&(i=e.replace(w,"$&/")+"/"),E(o,t,i,"",(function(e){return e}))):null!=o&&(W(o)&&(o=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(o,i+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(w,"$&/")+"/")+e)),t.push(o)),1;if(s=0,r=""===r?".":r+":",G(e))for(var u=0;u<e.length;u++){var d=r+T(l=e[u],u);s+=E(l,t,i,d,o)}else if(d=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof d)for(e=d.call(e),u=0;!(l=e.next()).done;)s+=E(l=l.value,t,i,d=r+T(l,u++),o);else if("object"===l)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function z(e,t,a){if(null==e)return e;var n=[],i=0;return E(e,n,"","",(function(e){return t.call(a,e,i++)})),n}function k(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var C={current:null},A={transition:null},_={ReactCurrentDispatcher:C,ReactCurrentBatchConfig:A,ReactCurrentOwner:H};t.Children={map:z,forEach:function(e,t,a){z(e,(function(){t.apply(this,arguments)}),a)},count:function(e){var t=0;return z(e,(function(){t++})),t},toArray:function(e){return z(e,(function(e){return e}))||[]},only:function(e){if(!W(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=h,t.Fragment=i,t.Profiler=o,t.PureComponent=b,t.StrictMode=r,t.Suspense=d,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_,t.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=m({},e.props),r=e.key,o=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(o=t.ref,l=H.current),void 0!==t.key&&(r=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)v.call(t,u)&&!$.hasOwnProperty(u)&&(i[u]=void 0===t[u]&&void 0!==s?s[u]:t[u])}var u=arguments.length-2;if(1===u)i.children=n;else if(1<u){s=Array(u);for(var d=0;d<u;d++)s[d]=arguments[d+2];i.children=s}return{$$typeof:a,type:e.type,key:r,ref:o,props:i,_owner:l}},t.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},t.createElement=F,t.createFactory=function(e){var t=F.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=W,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:k}},t.memo=function(e,t){return{$$typeof:c,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=A.transition;A.transition={};try{e()}finally{A.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return C.current.useCallback(e,t)},t.useContext=function(e){return C.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return C.current.useDeferredValue(e)},t.useEffect=function(e,t){return C.current.useEffect(e,t)},t.useId=function(){return C.current.useId()},t.useImperativeHandle=function(e,t,a){return C.current.useImperativeHandle(e,t,a)},t.useInsertionEffect=function(e,t){return C.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return C.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return C.current.useMemo(e,t)},t.useReducer=function(e,t,a){return C.current.useReducer(e,t,a)},t.useRef=function(e){return C.current.useRef(e)},t.useState=function(e){return C.current.useState(e)},t.useSyncExternalStore=function(e,t,a){return C.current.useSyncExternalStore(e,t,a)},t.useTransition=function(){return C.current.useTransition()},t.version="18.2.0"},474:(e,t,a)=>{e.exports=a(749)},274:(e,t,a)=>{e.exports=a(34)}},n={};function i(e){var t=n[e];if(void 0!==t)return t.exports;var r=n[e]={exports:{}};return a[e](r,r.exports,i),r.exports}t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,i.t=function(a,n){if(1&n&&(a=this(a)),8&n)return a;if("object"==typeof a&&a){if(4&n&&a.__esModule)return a;if(16&n&&"function"==typeof a.then)return a}var r=Object.create(null);i.r(r);var o={};e=e||[null,t({}),t([]),t(t)];for(var l=2&n&&a;"object"==typeof l&&!~e.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach((e=>o[e]=()=>a[e]));return o.default=()=>a,i.d(r,o),r},i.d=(e,t)=>{for(var a in t)i.o(t,a)&&!i.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{const e={breakpoint:{desktop:"980px",leftCol:"1140px",mobile:"320px",mobileLandscape:"480px",mobileMedium:"375px",phablet:"660px",tablet:"740px",wide:"1300px"},height:{ctaMedium:"44px",ctaSmall:"36px",ctaXSmall:"24px",iconMedium:"30px",iconSmall:"26px",iconXSmall:"20px",inputMedium:"44px",inputXSmall:"24px"},palette:{brand:{100:"#001536",300:"#041F4A",400:"#052962",500:"#0077B6",600:"#506991",800:"#C1D8FC"},brandAlt:{200:"#F3C100",300:"#FFD900",400:"#FFE500"},culture:{50:"#2B2625",100:"#3E3323",200:"#574835",300:"#6B5840",350:"#866D50",400:"#866D50",450:"#A1845C",500:"#EACCA0",600:"#E7D4B9",700:"#EFE8DD",800:"#FBF6EF"},error:{400:"#C70000",500:"#FF9081"},focus:{400:"#0077B6"},labs:{200:"#0C7A73",300:"#65A897",400:"#69D1CA"},lifestyle:{100:"#510043",200:"#650054",300:"#7D0068",400:"#BB3B80",450:"#F37ABC",500:"#FFABDB",600:"#FEC8D3",800:"#FEEEF7"},neutral:{0:"#000000",7:"#121212",10:"#1A1A1A",20:"#333333",38:"#606060",46:"#707070",60:"#999999",86:"#DCDCDC",93:"#EDEDED",97:"#F6F6F6",100:"#FFFFFF"},news:{100:"#660505",200:"#8B0000",300:"#AB0613",400:"#C70000",500:"#FF5943",550:"#FF9081",600:"#FFBAC8",800:"#FFF4F2"},opinion:{100:"#672005",200:"#8D2700",300:"#C74600",400:"#C74600",450:"#E05E00",500:"#FF7F0F",550:"#FF9941",600:"#F9B376",800:"#FEF9F5"},specialReport:{100:"#222527",200:"#303538",300:"#3F464A",400:"#595C5F",450:"#9DA0A2",500:"#ABC2C9",700:"#E4E5E8",800:"#EFF1F2"},specialReportAlt:{100:"#2B2B2A",200:"#B9300A",300:"#FF663D",700:"#EBE6E1",800:"#F5F0EB"},sport:{100:"#003C60",200:"#004E7C",300:"#005689",400:"#0077B6",500:"#00B2FF",600:"#90DCFF",800:"#F1F8FC"},success:{400:"#22874D",500:"#58D08B"}},size:{icon:{medium:"30px",small:"26px",xSmall:"20px"},medium:"44px",small:"36px",xSmall:"24px"},space:{0:"2px",1:"4px",2:"8px",3:"12px",4:"16px",5:"20px",6:"24px",8:"32px",9:"36px",10:"40px",12:"48px",14:"56px",16:"64px",18:"72px",24:"96px"},typography:{body:{medium:{fontFamily:["GuardianTextEgyptian","Guardian Text Egyptian Web","Georgia","serif"],fontSize:"17px",lineHeight:1.4,fontWeight:400},small:{fontFamily:["GuardianTextEgyptian","Guardian Text Egyptian Web","Georgia","serif"],fontSize:"15px",lineHeight:1.4,fontWeight:400},xSmall:{fontFamily:["GuardianTextEgyptian","Guardian Text Egyptian Web","Georgia","serif"],fontSize:"14px",lineHeight:1.4,fontWeight:400}},fontFamily:{body:["GuardianTextEgyptian","Guardian Text Egyptian Web","Georgia","serif"],headline:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],textSans:["GuardianTextSans","Guardian Text Sans Web","Helvetica Neue","Helvetica","Arial","Lucida Grande","sans-serif"],titlepiece:["GT Guardian Titlepiece","Georgia","serif"]},fontSize:{12:"12px",14:"14px",15:"15px",17:"17px",20:"20px",24:"24px",28:"28px",34:"34px",42:"42px",50:"50px",70:"70px"},fontWeight:{bold:700,light:300,medium:500,regular:400},headline:{large:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"42px",lineHeight:1.15,fontWeight:500},medium:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"34px",lineHeight:1.15,fontWeight:500},small:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"28px",lineHeight:1.15,fontWeight:500},xLarge:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"50px",lineHeight:1.15,fontWeight:500},xSmall:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"24px",lineHeight:1.15,fontWeight:500},xxSmall:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"20px",lineHeight:1.15,fontWeight:500},xxxSmall:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"17px",lineHeight:1.15,fontWeight:500}},lineHeight:{loose:1.4,regular:1.3,tight:1.15},presets:{article15:{fontFamily:["GuardianTextEgyptian","Guardian Text Egyptian Web","Georgia","serif"],fontSize:"15px",lineHeight:1.4,fontWeight:400,fontStyle:"normal"},article17:{fontFamily:["GuardianTextEgyptian","Guardian Text Egyptian Web","Georgia","serif"],fontSize:"17px",lineHeight:1.4,fontWeight:400,fontStyle:"normal"},articleBold15:{fontFamily:["GuardianTextEgyptian","Guardian Text Egyptian Web","Georgia","serif"],fontSize:"15px",lineHeight:1.4,fontWeight:700,fontStyle:"normal"},articleBold17:{fontFamily:["GuardianTextEgyptian","Guardian Text Egyptian Web","Georgia","serif"],fontSize:"17px",lineHeight:1.4,fontWeight:700,fontStyle:"normal"},articleBoldItalic15:{fontFamily:["GuardianTextEgyptian","Guardian Text Egyptian Web","Georgia","serif"],fontSize:"15px",lineHeight:1.4,fontWeight:700,fontStyle:"italic"},articleBoldItalic17:{fontFamily:["GuardianTextEgyptian","Guardian Text Egyptian Web","Georgia","serif"],fontSize:"17px",lineHeight:1.4,fontWeight:700,fontStyle:"italic"},articleItalic15:{fontFamily:["GuardianTextEgyptian","Guardian Text Egyptian Web","Georgia","serif"],fontSize:"15px",lineHeight:1.4,fontWeight:400,fontStyle:"italic"},articleItalic17:{fontFamily:["GuardianTextEgyptian","Guardian Text Egyptian Web","Georgia","serif"],fontSize:"17px",lineHeight:1.4,fontWeight:400,fontStyle:"italic"},headlineBold14:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"14px",lineHeight:1.15,fontWeight:700,fontStyle:"normal"},headlineBold17:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"17px",lineHeight:1.15,fontWeight:700,fontStyle:"normal"},headlineBold20:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"20px",lineHeight:1.15,fontWeight:700,fontStyle:"normal"},headlineBold24:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"24px",lineHeight:1.15,fontWeight:700,fontStyle:"normal"},headlineBold28:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"28px",lineHeight:1.15,fontWeight:700,fontStyle:"normal"},headlineBold34:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"34px",lineHeight:1.15,fontWeight:700,fontStyle:"normal"},headlineBold42:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"42px",lineHeight:1.15,fontWeight:700,fontStyle:"normal"},headlineBold50:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"50px",lineHeight:1.15,fontWeight:700,fontStyle:"normal"},headlineBold70:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"70px",lineHeight:1.15,fontWeight:700,fontStyle:"normal"},headlineLight14:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"14px",lineHeight:1.15,fontWeight:300,fontStyle:"normal"},headlineLight17:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"17px",lineHeight:1.15,fontWeight:300,fontStyle:"normal"},headlineLight20:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"20px",lineHeight:1.15,fontWeight:300,fontStyle:"normal"},headlineLight24:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"24px",lineHeight:1.15,fontWeight:300,fontStyle:"normal"},headlineLight28:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"28px",lineHeight:1.15,fontWeight:300,fontStyle:"normal"},headlineLight34:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"34px",lineHeight:1.15,fontWeight:300,fontStyle:"normal"},headlineLight42:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"42px",lineHeight:1.15,fontWeight:300,fontStyle:"normal"},headlineLight50:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"50px",lineHeight:1.15,fontWeight:300,fontStyle:"normal"},headlineLight70:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"70px",lineHeight:1.15,fontWeight:300,fontStyle:"normal"},headlineLightItalic14:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"14px",lineHeight:1.15,fontWeight:300,fontStyle:"italic"},headlineLightItalic17:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"17px",lineHeight:1.15,fontWeight:300,fontStyle:"italic"},headlineLightItalic20:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"20px",lineHeight:1.15,fontWeight:300,fontStyle:"italic"},headlineLightItalic24:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"24px",lineHeight:1.15,fontWeight:300,fontStyle:"italic"},headlineLightItalic28:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"28px",lineHeight:1.15,fontWeight:300,fontStyle:"italic"},headlineLightItalic34:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"34px",lineHeight:1.15,fontWeight:300,fontStyle:"italic"},headlineLightItalic42:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"42px",lineHeight:1.15,fontWeight:300,fontStyle:"italic"},headlineLightItalic50:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"50px",lineHeight:1.15,fontWeight:300,fontStyle:"italic"},headlineLightItalic70:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"70px",lineHeight:1.15,fontWeight:300,fontStyle:"italic"},headlineMedium14:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"14px",lineHeight:1.15,fontWeight:500,fontStyle:"normal"},headlineMedium17:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"17px",lineHeight:1.15,fontWeight:500,fontStyle:"normal"},headlineMedium20:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"20px",lineHeight:1.15,fontWeight:500,fontStyle:"normal"},headlineMedium24:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"24px",lineHeight:1.15,fontWeight:500,fontStyle:"normal"},headlineMedium28:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"28px",lineHeight:1.15,fontWeight:500,fontStyle:"normal"},headlineMedium34:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"34px",lineHeight:1.15,fontWeight:500,fontStyle:"normal"},headlineMedium42:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"42px",lineHeight:1.15,fontWeight:500,fontStyle:"normal"},headlineMedium50:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"50px",lineHeight:1.15,fontWeight:500,fontStyle:"normal"},headlineMedium70:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"70px",lineHeight:1.15,fontWeight:500,fontStyle:"normal"},headlineMediumItalic14:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"14px",lineHeight:1.15,fontWeight:500,fontStyle:"italic"},headlineMediumItalic17:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"17px",lineHeight:1.15,fontWeight:500,fontStyle:"italic"},headlineMediumItalic20:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"20px",lineHeight:1.15,fontWeight:500,fontStyle:"italic"},headlineMediumItalic24:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"24px",lineHeight:1.15,fontWeight:500,fontStyle:"italic"},headlineMediumItalic28:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"28px",lineHeight:1.15,fontWeight:500,fontStyle:"italic"},headlineMediumItalic34:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"34px",lineHeight:1.15,fontWeight:500,fontStyle:"italic"},headlineMediumItalic42:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"42px",lineHeight:1.15,fontWeight:500,fontStyle:"italic"},headlineMediumItalic50:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"50px",lineHeight:1.15,fontWeight:500,fontStyle:"italic"},headlineMediumItalic70:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"70px",lineHeight:1.15,fontWeight:700,fontStyle:"italic"},textEgyptian14:{fontFamily:["GuardianTextEgyptian","Guardian Text Egyptian Web","Georgia","serif"],fontSize:"14px",lineHeight:1.3,fontWeight:400,fontStyle:"normal"},textEgyptian15:{fontFamily:["GuardianTextEgyptian","Guardian Text Egyptian Web","Georgia","serif"],fontSize:"15px",lineHeight:1.3,fontWeight:400,fontStyle:"normal"},textEgyptian17:{fontFamily:["GuardianTextEgyptian","Guardian Text Egyptian Web","Georgia","serif"],fontSize:"17px",lineHeight:1.3,fontWeight:400,fontStyle:"normal"},textEgyptianBold14:{fontFamily:["GuardianTextEgyptian","Guardian Text Egyptian Web","Georgia","serif"],fontSize:"14px",lineHeight:1.3,fontWeight:700,fontStyle:"normal"},textEgyptianBold15:{fontFamily:["GuardianTextEgyptian","Guardian Text Egyptian Web","Georgia","serif"],fontSize:"15px",lineHeight:1.3,fontWeight:700,fontStyle:"normal"},textEgyptianBold17:{fontFamily:["GuardianTextEgyptian","Guardian Text Egyptian Web","Georgia","serif"],fontSize:"17px",lineHeight:1.3,fontWeight:700,fontStyle:"normal"},textEgyptianBoldItalic14:{fontFamily:["GuardianTextEgyptian","Guardian Text Egyptian Web","Georgia","serif"],fontSize:"14px",lineHeight:1.3,fontWeight:700,fontStyle:"italic"},textEgyptianBoldItalic15:{fontFamily:["GuardianTextEgyptian","Guardian Text Egyptian Web","Georgia","serif"],fontSize:"15px",lineHeight:1.3,fontWeight:700,fontStyle:"italic"},textEgyptianBoldItalic17:{fontFamily:["GuardianTextEgyptian","Guardian Text Egyptian Web","Georgia","serif"],fontSize:"17px",lineHeight:1.3,fontWeight:700,fontStyle:"italic"},textEgyptianItalic14:{fontFamily:["GuardianTextEgyptian","Guardian Text Egyptian Web","Georgia","serif"],fontSize:"14px",lineHeight:1.3,fontWeight:400,fontStyle:"italic"},textEgyptianItalic15:{fontFamily:["GuardianTextEgyptian","Guardian Text Egyptian Web","Georgia","serif"],fontSize:"15px",lineHeight:1.3,fontWeight:400,fontStyle:"italic"},textEgyptianItalic17:{fontFamily:["GuardianTextEgyptian","Guardian Text Egyptian Web","Georgia","serif"],fontSize:"17px",lineHeight:1.3,fontWeight:400,fontStyle:"italic"},textSans12:{fontFamily:["GuardianTextSans","Guardian Text Sans Web","Helvetica Neue","Helvetica","Arial","Lucida Grande","sans-serif"],fontSize:"12px",lineHeight:1.3,fontWeight:400,fontStyle:"normal"},textSans14:{fontFamily:["GuardianTextSans","Guardian Text Sans Web","Helvetica Neue","Helvetica","Arial","Lucida Grande","sans-serif"],fontSize:"14px",lineHeight:1.3,fontWeight:400,fontStyle:"normal"},textSans15:{fontFamily:["GuardianTextSans","Guardian Text Sans Web","Helvetica Neue","Helvetica","Arial","Lucida Grande","sans-serif"],fontSize:"15px",lineHeight:1.3,fontWeight:400,fontStyle:"normal"},textSans17:{fontFamily:["GuardianTextSans","Guardian Text Sans Web","Helvetica Neue","Helvetica","Arial","Lucida Grande","sans-serif"],fontSize:"17px",lineHeight:1.3,fontWeight:400,fontStyle:"normal"},textSans20:{fontFamily:["GuardianTextSans","Guardian Text Sans Web","Helvetica Neue","Helvetica","Arial","Lucida Grande","sans-serif"],fontSize:"20px",lineHeight:1.3,fontWeight:400,fontStyle:"normal"},textSans24:{fontFamily:["GuardianTextSans","Guardian Text Sans Web","Helvetica Neue","Helvetica","Arial","Lucida Grande","sans-serif"],fontSize:"24px",lineHeight:1.3,fontWeight:400,fontStyle:"normal"},textSans28:{fontFamily:["GuardianTextSans","Guardian Text Sans Web","Helvetica Neue","Helvetica","Arial","Lucida Grande","sans-serif"],fontSize:"28px",lineHeight:1.3,fontWeight:400,fontStyle:"normal"},textSans34:{fontFamily:["GuardianTextSans","Guardian Text Sans Web","Helvetica Neue","Helvetica","Arial","Lucida Grande","sans-serif"],fontSize:"34px",lineHeight:1.3,fontWeight:400,fontStyle:"normal"},textSansBold12:{fontFamily:["GuardianTextSans","Guardian Text Sans Web","Helvetica Neue","Helvetica","Arial","Lucida Grande","sans-serif"],fontSize:"12px",lineHeight:1.3,fontWeight:700,fontStyle:"normal"},textSansBold14:{fontFamily:["GuardianTextSans","Guardian Text Sans Web","Helvetica Neue","Helvetica","Arial","Lucida Grande","sans-serif"],fontSize:"14px",lineHeight:1.3,fontWeight:700,fontStyle:"normal"},textSansBold15:{fontFamily:["GuardianTextSans","Guardian Text Sans Web","Helvetica Neue","Helvetica","Arial","Lucida Grande","sans-serif"],fontSize:"15px",lineHeight:1.3,fontWeight:700,fontStyle:"normal"},textSansBold17:{fontFamily:["GuardianTextSans","Guardian Text Sans Web","Helvetica Neue","Helvetica","Arial","Lucida Grande","sans-serif"],fontSize:"17px",lineHeight:1.3,fontWeight:700,fontStyle:"normal"},textSansBold20:{fontFamily:["GuardianTextSans","Guardian Text Sans Web","Helvetica Neue","Helvetica","Arial","Lucida Grande","sans-serif"],fontSize:"20px",lineHeight:1.3,fontWeight:700,fontStyle:"normal"},textSansBold24:{fontFamily:["GuardianTextSans","Guardian Text Sans Web","Helvetica Neue","Helvetica","Arial","Lucida Grande","sans-serif"],fontSize:"24px",lineHeight:1.3,fontWeight:700,fontStyle:"normal"},textSansBold28:{fontFamily:["GuardianTextSans","Guardian Text Sans Web","Helvetica Neue","Helvetica","Arial","Lucida Grande","sans-serif"],fontSize:"28px",lineHeight:1.3,fontWeight:700,fontStyle:"normal"},textSansBold34:{fontFamily:["GuardianTextSans","Guardian Text Sans Web","Helvetica Neue","Helvetica","Arial","Lucida Grande","sans-serif"],fontSize:"34px",lineHeight:1.3,fontWeight:700,fontStyle:"normal"},textSansItalic12:{fontFamily:["GuardianTextSans","Guardian Text Sans Web","Helvetica Neue","Helvetica","Arial","Lucida Grande","sans-serif"],fontSize:"12px",lineHeight:1.3,fontWeight:400,fontStyle:"italic"},textSansItalic14:{fontFamily:["GuardianTextSans","Guardian Text Sans Web","Helvetica Neue","Helvetica","Arial","Lucida Grande","sans-serif"],fontSize:"14px",lineHeight:1.3,fontWeight:400,fontStyle:"italic"},textSansItalic15:{fontFamily:["GuardianTextSans","Guardian Text Sans Web","Helvetica Neue","Helvetica","Arial","Lucida Grande","sans-serif"],fontSize:"15px",lineHeight:1.3,fontWeight:400,fontStyle:"italic"},textSansItalic17:{fontFamily:["GuardianTextSans","Guardian Text Sans Web","Helvetica Neue","Helvetica","Arial","Lucida Grande","sans-serif"],fontSize:"17px",lineHeight:1.3,fontWeight:400,fontStyle:"italic"},textSansItalic20:{fontFamily:["GuardianTextSans","Guardian Text Sans Web","Helvetica Neue","Helvetica","Arial","Lucida Grande","sans-serif"],fontSize:"20px",lineHeight:1.3,fontWeight:400,fontStyle:"italic"},textSansItalic24:{fontFamily:["GuardianTextSans","Guardian Text Sans Web","Helvetica Neue","Helvetica","Arial","Lucida Grande","sans-serif"],fontSize:"24px",lineHeight:1.3,fontWeight:400,fontStyle:"italic"},textSansItalic28:{fontFamily:["GuardianTextSans","Guardian Text Sans Web","Helvetica Neue","Helvetica","Arial","Lucida Grande","sans-serif"],fontSize:"28px",lineHeight:1.3,fontWeight:400,fontStyle:"italic"},textSansItalic34:{fontFamily:["GuardianTextSans","Guardian Text Sans Web","Helvetica Neue","Helvetica","Arial","Lucida Grande","sans-serif"],fontSize:"34px",lineHeight:1.3,fontWeight:400,fontStyle:"italic"},titlepiece42:{fontFamily:["GT Guardian Titlepiece","Georgia","serif"],fontSize:"42px",lineHeight:1.15,fontWeight:700,fontStyle:"normal"},titlepiece50:{fontFamily:["GT Guardian Titlepiece","Georgia","serif"],fontSize:"50px",lineHeight:1.15,fontWeight:700,fontStyle:"normal"},titlepiece70:{fontFamily:["GT Guardian Titlepiece","Georgia","serif"],fontSize:"70px",lineHeight:1.15,fontWeight:700,fontStyle:"normal"}},textDecorationThicknessForFontSize:{12:"2px",14:"2px",15:"2px",17:"2px",20:"3px",24:"3px",28:"3px",34:"4px",42:"5px",50:"6px",70:"6px"},textSans:{large:{fontFamily:["GuardianTextSans","Guardian Text Sans Web","Helvetica Neue","Helvetica","Arial","Lucida Grande","sans-serif"],fontSize:"20px",lineHeight:1.3,fontWeight:400},medium:{fontFamily:["GuardianTextSans","Guardian Text Sans Web","Helvetica Neue","Helvetica","Arial","Lucida Grande","sans-serif"],fontSize:"17px",lineHeight:1.3,fontWeight:400},small:{fontFamily:["GuardianTextSans","Guardian Text Sans Web","Helvetica Neue","Helvetica","Arial","Lucida Grande","sans-serif"],fontSize:"15px",lineHeight:1.3,fontWeight:400},xLarge:{fontFamily:["GuardianTextSans","Guardian Text Sans Web","Helvetica Neue","Helvetica","Arial","Lucida Grande","sans-serif"],fontSize:"24px",lineHeight:1.3,fontWeight:400},xSmall:{fontFamily:["GuardianTextSans","Guardian Text Sans Web","Helvetica Neue","Helvetica","Arial","Lucida Grande","sans-serif"],fontSize:"14px",lineHeight:1.3,fontWeight:400},xxLarge:{fontFamily:["GuardianTextSans","Guardian Text Sans Web","Helvetica Neue","Helvetica","Arial","Lucida Grande","sans-serif"],fontSize:"28px",lineHeight:1.3,fontWeight:400},xxSmall:{fontFamily:["GuardianTextSans","Guardian Text Sans Web","Helvetica Neue","Helvetica","Arial","Lucida Grande","sans-serif"],fontSize:"12px",lineHeight:1.3,fontWeight:400},xxxLarge:{fontFamily:["GuardianTextSans","Guardian Text Sans Web","Helvetica Neue","Helvetica","Arial","Lucida Grande","sans-serif"],fontSize:"34px",lineHeight:1.3,fontWeight:400}},titlepiece:{large:{fontFamily:["GT Guardian Titlepiece","Georgia","serif"],fontSize:"70px",lineHeight:1.15,fontWeight:700},medium:{fontFamily:["GT Guardian Titlepiece","Georgia","serif"],fontSize:"50px",lineHeight:1.15,fontWeight:700},small:{fontFamily:["GT Guardian Titlepiece","Georgia","serif"],fontSize:"42px",lineHeight:1.15,fontWeight:700}}},width:{ctaMedium:"44px",ctaSmall:"36px",ctaXSmall:"24px",iconMedium:"30px",iconSmall:"26px",iconXSmall:"20px",inputXSmall:"24px"}},t={brand:e.palette.brand,brandAlt:e.palette.brandAlt,neutral:e.palette.neutral,error:e.palette.error,success:e.palette.success,news:e.palette.news,opinion:e.palette.opinion,sport:e.palette.sport,culture:e.palette.culture,lifestyle:e.palette.lifestyle,labs:e.palette.labs,specialReport:e.palette.specialReport,specialReportAlt:e.palette.specialReportAlt,focus:e.palette.focus},a={textLabel:t.neutral[7],textBody:t.neutral[7],textCta:t.neutral[7],border:t.neutral[60],iconFill:t.neutral[7]},n=(t.neutral[7],t.neutral[60],e=>{const t={};return e?.textPrimary&&(t.textLabel=e.textPrimary,t.textBody=e.textPrimary,t.textCta=e.textPrimary),e?.borderPrimary&&(t.border=e.borderPrimary),t}),{brand:r,brandAlt:o,neutral:l,error:s,success:u,news:d,opinion:c,sport:f,culture:p,lifestyle:g,labs:m,specialReport:x,focus:h}=t,y=(t.neutral[100],t.neutral[97],t.neutral[10],t.brand[400],t.brand[800],t.neutral[100],t.brand[500],t.brand[400],t.neutral[100],t.neutral[100],t.brand[600],t.brand[300],t.brandAlt[400],t.neutral[7],t.brandAlt[200],t.neutral[60],t.neutral[86],t.success[400],t.error[400],t.brand[400],t.neutral[60],t.brand[500],t.brand[500],t.brand[500],t.focus[400],t.brand[600],t.brand[600],t.success[500],t.error[500],t.neutral[100],t.brand[800],t.neutral[100],t.neutral[100],t.neutral[7],t.neutral[86],t.brand[600],t.neutral[7],t.neutral[7],t.neutral[46],t.success[400],t.error[400],t.neutral[100],t.brand[400],t.brand[400],t.brand[500],t.neutral[7],t.neutral[7],t.neutral[7],t.neutral[7],t.neutral[46],t.brand[400],t.brand[400],t.neutral[7],t.neutral[46],t.news[550],t.neutral[100],t.brand[800],t.success[500],t.error[500],t.brand[400],t.neutral[100],t.neutral[100],t.neutral[100],t.brandAlt[400],t.neutral[100],t.neutral[100],t.brand[800],t.neutral[7],t.neutral[60],t.neutral[100],t.neutral[7],t.neutral[7],t.neutral[7],{readerRevenue:{ctaPrimary:r[400],ctaTertiary:r[400]},readerRevenueBrand:{ctaPrimary:r[400],ctaTertiary:o[400]},readerRevenueBrandAlt:{ctaPrimary:l[100],ctaTertiary:l[7]}}),b={ctaPrimary:o[400],ctaPrimaryHover:"#FFD213",ctaTertiaryHover:"#E5E5E5"},S={ctaPrimary:o[400],ctaPrimaryHover:"#FFD213",ctaTertiaryHover:r[300]},G={ctaPrimary:l[7],ctaPrimaryHover:"#454545",ctaTertiaryHover:"#FFD213"},v={ctaTertiary:r[400]},H={ctaTertiary:o[400]},$={ctaTertiary:l[7]};y.readerRevenue.ctaPrimary,b.ctaPrimary,b.ctaPrimaryHover,y.readerRevenue.ctaTertiary,b.ctaTertiaryHover,v.ctaTertiary,y.readerRevenueBrand.ctaPrimary,S.ctaPrimary,S.ctaPrimaryHover,y.readerRevenueBrand.ctaTertiary,S.ctaTertiaryHover,H.ctaTertiary,y.readerRevenueBrandAlt.ctaPrimary,G.ctaPrimary,G.ctaPrimaryHover,y.readerRevenueBrandAlt.ctaTertiary,G.ctaTertiaryHover,$.ctaTertiary,t.neutral[100],t.brand[400],t.brand[400],t.brand[800],t.brand[400],t.brand[400],t.brand[400],t.brand[400],t.neutral[100],t.neutral[100],t.brand[600],t.neutral[100],t.brand[300],t.neutral[100],t.neutral[100],t.neutral[100],t.neutral[7],t.neutral[7],t.brandAlt[200],t.neutral[0],t.neutral[7],t.neutral[7],t.neutral[100],t.brand[400],t.brand[400],t.brand[800],t.brand[400],t.brand[400],t.brand[400],t.brand[400],t.neutral[100],t.neutral[100],t.brand[600],t.neutral[100],t.brand[300],t.neutral[100],t.neutral[100],t.neutral[100],t.neutral[7],t.neutral[7],t.brandAlt[200],t.neutral[0],t.neutral[7],t.neutral[7],t.neutral[7],t.neutral[46],t.neutral[46],t.error[400],t.success[400],t.neutral[100],t.brand[800],t.brand[800],t.error[500],t.success[500],t.neutral[7],t.neutral[46],t.neutral[46],t.error[400],t.success[400],t.neutral[100],t.brand[800],t.brand[800],t.error[500],t.success[500],t.success[400],t.error[400],t.success[500],t.error[500];t.success[400],t.error[400],t.success[500],t.error[500],t.neutral[46],t.brand[500],t.brand[500],t.error[400],t.brand[500],t.neutral[7],t.neutral[46],t.neutral[46],t.brand[800],t.neutral[100],t.neutral[100],t.error[500],t.neutral[100],t.neutral[100],t.brand[800],t.brand[800],t.neutral[46],t.brand[500],t.brand[500],t.error[400],t.brand[500],t.neutral[7],t.neutral[46],t.neutral[46],t.brand[800],t.neutral[100],t.neutral[100],t.error[500],t.neutral[100],t.neutral[100],t.brand[800],t.brand[800],t.neutral[46],t.brand[400],t.brand[500],t.error[400],t.neutral[46],t.brand[500],t.brand[500],t.error[400],t.brand[500],t.neutral[46],t.neutral[46],t.neutral[7],t.neutral[46],t.neutral[46],t.brand[400],t.brand[500],t.brand[500],t.brand[500],t.brand[500],t.error[400],t.error[400],t.brand[500],t.brand[500],t.neutral[7],t.neutral[7],t.neutral[100],t.neutral[100],t.neutral[7],t.neutral[7],t.brand[500],t.brand[500],t.neutral[7],t.neutral[7],t.neutral[100],t.neutral[100],t.neutral[7],t.neutral[7],t.brand[500],t.neutral[46],t.brand[500],t.error[400],t.brand[500],t.neutral[7],t.neutral[46],t.brand[500],t.error[400],t.neutral[100],t.brand[800],t.neutral[100],t.error[500],t.neutral[100],t.neutral[100],t.brand[800],t.neutral[100],t.error[500],t.focus[400],t.neutral[60],t.focus[400],t.neutral[7],t.neutral[46],t.error[400],t.neutral[100],t.brand[800],t.neutral[100],t.neutral[100],t.brand[800],t.error[500],t.neutral[7],t.neutral[7],t.neutral[46],t.neutral[46],t.neutral[7],t.success[400],t.neutral[100],t.neutral[46],t.focus[400],t.error[400],t.success[400],t.neutral[7],t.neutral[7],t.neutral[46],t.neutral[46],t.neutral[7],t.success[400],t.neutral[100],t.neutral[46],t.focus[400],t.error[400],t.success[400],t.neutral[7],t.neutral[7],t.neutral[7],t.neutral[46],t.neutral[46],t.neutral[7],t.success[400],t.neutral[100],t.neutral[46],t.error[400],t.success[400],t.neutral[7],t.neutral[7],t.neutral[46],t.neutral[46],t.neutral[7],t.success[400],t.neutral[100],t.neutral[46],t.focus[400],t.error[400],t.success[400];var F=i(274),W=i(474),w=i.t(W,2),T=function(){function e(e){var t=this;this._insertTag=function(e){var a;a=0===t.tags.length?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,a),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var a=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(t);try{a.insertRule(e,a.cssRules.length)}catch(e){}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach((function(e){return e.parentNode&&e.parentNode.removeChild(e)})),this.tags=[],this.ctr=0},e}(),E=Math.abs,z=String.fromCharCode,k=Object.assign;function C(e){return e.trim()}function A(e,t,a){return e.replace(t,a)}function _(e,t){return e.indexOf(t)}function L(e,t){return 0|e.charCodeAt(t)}function O(e,t,a){return e.slice(t,a)}function P(e){return e.length}function D(e){return e.length}function B(e,t){return t.push(e),e}var I=1,N=1,M=0,R=0,j=0,V="";function U(e,t,a,n,i,r,o){return{value:e,root:t,parent:a,type:n,props:i,children:r,line:I,column:N,length:o,return:""}}function q(e,t){return k(U("",null,null,"",null,null,0),e,{length:-e.length},t)}function X(){return j=R>0?L(V,--R):0,N--,10===j&&(N=1,I--),j}function Y(){return j=R<M?L(V,R++):0,N++,10===j&&(N=1,I++),j}function Z(){return L(V,R)}function J(){return R}function K(e,t){return O(V,e,t)}function Q(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ee(e){return I=N=1,M=P(V=e),R=0,[]}function te(e){return V="",e}function ae(e){return C(K(R-1,re(91===e?e+2:40===e?e+1:e)))}function ne(e){for(;(j=Z())&&j<33;)Y();return Q(e)>2||Q(j)>3?"":" "}function ie(e,t){for(;--t&&Y()&&!(j<48||j>102||j>57&&j<65||j>70&&j<97););return K(e,J()+(t<6&&32==Z()&&32==Y()))}function re(e){for(;Y();)switch(j){case e:return R;case 34:case 39:34!==e&&39!==e&&re(j);break;case 40:41===e&&re(e);break;case 92:Y()}return R}function oe(e,t){for(;Y()&&e+j!==57&&(e+j!==84||47!==Z()););return"/*"+K(t,R-1)+"*"+z(47===e?e:Y())}function le(e){for(;!Q(Z());)Y();return K(e,R)}var se="-ms-",ue="-moz-",de="-webkit-",ce="comm",fe="rule",pe="decl",ge="@keyframes";function me(e,t){for(var a="",n=D(e),i=0;i<n;i++)a+=t(e[i],i,e,t)||"";return a}function xe(e,t,a,n){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case pe:return e.return=e.return||e.value;case ce:return"";case ge:return e.return=e.value+"{"+me(e.children,n)+"}";case fe:e.value=e.props.join(",")}return P(a=me(e.children,n))?e.return=e.value+"{"+a+"}":""}function he(e){return te(ye("",null,null,null,[""],e=ee(e),0,[0],e))}function ye(e,t,a,n,i,r,o,l,s){for(var u=0,d=0,c=o,f=0,p=0,g=0,m=1,x=1,h=1,y=0,b="",S=i,G=r,v=n,H=b;x;)switch(g=y,y=Y()){case 40:if(108!=g&&58==L(H,c-1)){-1!=_(H+=A(ae(y),"&","&\f"),"&\f")&&(h=-1);break}case 34:case 39:case 91:H+=ae(y);break;case 9:case 10:case 13:case 32:H+=ne(g);break;case 92:H+=ie(J()-1,7);continue;case 47:switch(Z()){case 42:case 47:B(Se(oe(Y(),J()),t,a),s);break;default:H+="/"}break;case 123*m:l[u++]=P(H)*h;case 125*m:case 59:case 0:switch(y){case 0:case 125:x=0;case 59+d:-1==h&&(H=A(H,/\f/g,"")),p>0&&P(H)-c&&B(p>32?Ge(H+";",n,a,c-1):Ge(A(H," ","")+";",n,a,c-2),s);break;case 59:H+=";";default:if(B(v=be(H,t,a,u,d,i,l,b,S=[],G=[],c),r),123===y)if(0===d)ye(H,t,v,v,S,r,c,l,G);else switch(99===f&&110===L(H,3)?100:f){case 100:case 108:case 109:case 115:ye(e,v,v,n&&B(be(e,v,v,0,0,i,l,b,i,S=[],c),G),i,G,c,l,n?S:G);break;default:ye(H,v,v,v,[""],G,0,l,G)}}u=d=p=0,m=h=1,b=H="",c=o;break;case 58:c=1+P(H),p=g;default:if(m<1)if(123==y)--m;else if(125==y&&0==m++&&125==X())continue;switch(H+=z(y),y*m){case 38:h=d>0?1:(H+="\f",-1);break;case 44:l[u++]=(P(H)-1)*h,h=1;break;case 64:45===Z()&&(H+=ae(Y())),f=Z(),d=c=P(b=H+=le(J())),y++;break;case 45:45===g&&2==P(H)&&(m=0)}}return r}function be(e,t,a,n,i,r,o,l,s,u,d){for(var c=i-1,f=0===i?r:[""],p=D(f),g=0,m=0,x=0;g<n;++g)for(var h=0,y=O(e,c+1,c=E(m=o[g])),b=e;h<p;++h)(b=C(m>0?f[h]+" "+y:A(y,/&\f/g,f[h])))&&(s[x++]=b);return U(e,t,a,0===i?fe:l,s,u,d)}function Se(e,t,a){return U(e,t,a,ce,z(j),O(e,2,-2),0)}function Ge(e,t,a,n){return U(e,t,a,pe,O(e,0,n),O(e,n+1,-1),n)}var ve=function(e,t,a){for(var n=0,i=0;n=i,i=Z(),38===n&&12===i&&(t[a]=1),!Q(i);)Y();return K(e,R)},He=new WeakMap,$e=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var t=e.value,a=e.parent,n=e.column===a.column&&e.line===a.line;"rule"!==a.type;)if(!(a=a.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||He.get(a))&&!n){He.set(e,!0);for(var i=[],r=function(e,t){return te(function(e,t){var a=-1,n=44;do{switch(Q(n)){case 0:38===n&&12===Z()&&(t[a]=1),e[a]+=ve(R-1,t,a);break;case 2:e[a]+=ae(n);break;case 4:if(44===n){e[++a]=58===Z()?"&\f":"",t[a]=e[a].length;break}default:e[a]+=z(n)}}while(n=Y());return e}(ee(e),t))}(t,i),o=a.props,l=0,s=0;l<r.length;l++)for(var u=0;u<o.length;u++,s++)e.props[s]=i[l]?r[l].replace(/&\f/g,o[u]):o[u]+" "+r[l]}}},Fe=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}};function We(e,t){switch(function(e,t){return 45^L(e,0)?(((t<<2^L(e,0))<<2^L(e,1))<<2^L(e,2))<<2^L(e,3):0}(e,t)){case 5103:return de+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return de+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return de+e+ue+e+se+e+e;case 6828:case 4268:return de+e+se+e+e;case 6165:return de+e+se+"flex-"+e+e;case 5187:return de+e+A(e,/(\w+).+(:[^]+)/,de+"box-$1$2"+se+"flex-$1$2")+e;case 5443:return de+e+se+"flex-item-"+A(e,/flex-|-self/,"")+e;case 4675:return de+e+se+"flex-line-pack"+A(e,/align-content|flex-|-self/,"")+e;case 5548:return de+e+se+A(e,"shrink","negative")+e;case 5292:return de+e+se+A(e,"basis","preferred-size")+e;case 6060:return de+"box-"+A(e,"-grow","")+de+e+se+A(e,"grow","positive")+e;case 4554:return de+A(e,/([^-])(transform)/g,"$1"+de+"$2")+e;case 6187:return A(A(A(e,/(zoom-|grab)/,de+"$1"),/(image-set)/,de+"$1"),e,"")+e;case 5495:case 3959:return A(e,/(image-set\([^]*)/,de+"$1$`$1");case 4968:return A(A(e,/(.+:)(flex-)?(.*)/,de+"box-pack:$3"+se+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+de+e+e;case 4095:case 3583:case 4068:case 2532:return A(e,/(.+)-inline(.+)/,de+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(P(e)-1-t>6)switch(L(e,t+1)){case 109:if(45!==L(e,t+4))break;case 102:return A(e,/(.+:)(.+)-([^]+)/,"$1"+de+"$2-$3$1"+ue+(108==L(e,t+3)?"$3":"$2-$3"))+e;case 115:return~_(e,"stretch")?We(A(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(115!==L(e,t+1))break;case 6444:switch(L(e,P(e)-3-(~_(e,"!important")&&10))){case 107:return A(e,":",":"+de)+e;case 101:return A(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+de+(45===L(e,14)?"inline-":"")+"box$3$1"+de+"$2$3$1"+se+"$2box$3")+e}break;case 5936:switch(L(e,t+11)){case 114:return de+e+se+A(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return de+e+se+A(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return de+e+se+A(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return de+e+se+e+e}return e}var we=[function(e,t,a,n){if(e.length>-1&&!e.return)switch(e.type){case pe:e.return=We(e.value,e.length);break;case ge:return me([q(e,{value:A(e.value,"@","@"+de)})],n);case fe:if(e.length)return function(e,t){return e.map(t).join("")}(e.props,(function(t){switch(function(e,t){return(e=/(::plac\w+|:read-\w+)/.exec(e))?e[0]:e}(t)){case":read-only":case":read-write":return me([q(e,{props:[A(t,/:(read-\w+)/,":-moz-$1")]})],n);case"::placeholder":return me([q(e,{props:[A(t,/:(plac\w+)/,":"+de+"input-$1")]}),q(e,{props:[A(t,/:(plac\w+)/,":-moz-$1")]}),q(e,{props:[A(t,/:(plac\w+)/,se+"input-$1")]})],n)}return""}))}}],Te=function(e){var t=e.key;if("css"===t){var a=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(a,(function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))}))}var n,i,r=e.stylisPlugins||we,o={},l=[];n=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),(function(e){for(var t=e.getAttribute("data-emotion").split(" "),a=1;a<t.length;a++)o[t[a]]=!0;l.push(e)}));var s,u,d,c,f=[xe,(c=function(e){s.insert(e)},function(e){e.root||(e=e.return)&&c(e)})],p=(u=[$e,Fe].concat(r,f),d=D(u),function(e,t,a,n){for(var i="",r=0;r<d;r++)i+=u[r](e,t,a,n)||"";return i});i=function(e,t,a,n){s=a,me(he(e?e+"{"+t.styles+"}":t.styles),p),n&&(g.inserted[t.name]=!0)};var g={key:t,sheet:new T({key:t,container:n,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:o,registered:{},insert:i};return g.sheet.hydrate(l),g},Ee=function(e,t,a){var n=e.key+"-"+t.name;!1===a&&void 0===e.registered[n]&&(e.registered[n]=t.styles)},ze={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function ke(e){var t=Object.create(null);return function(a){return void 0===t[a]&&(t[a]=e(a)),t[a]}}var Ce=/[A-Z]|^ms/g,Ae=/_EMO_([^_]+?)_([^]*?)_EMO_/g,_e=function(e){return 45===e.charCodeAt(1)},Le=function(e){return null!=e&&"boolean"!=typeof e},Oe=ke((function(e){return _e(e)?e:e.replace(Ce,"-$&").toLowerCase()})),Pe=function(e,t){switch(e){case"animation":case"animationName":if("string"==typeof t)return t.replace(Ae,(function(e,t,a){return Be={name:t,styles:a,next:Be},t}))}return 1===ze[e]||_e(e)||"number"!=typeof t||0===t?t:t+"px"};function De(e,t,a){if(null==a)return"";if(void 0!==a.__emotion_styles)return a;switch(typeof a){case"boolean":return"";case"object":if(1===a.anim)return Be={name:a.name,styles:a.styles,next:Be},a.name;if(void 0!==a.styles){var n=a.next;if(void 0!==n)for(;void 0!==n;)Be={name:n.name,styles:n.styles,next:Be},n=n.next;return a.styles+";"}return function(e,t,a){var n="";if(Array.isArray(a))for(var i=0;i<a.length;i++)n+=De(e,t,a[i])+";";else for(var r in a){var o=a[r];if("object"!=typeof o)null!=t&&void 0!==t[o]?n+=r+"{"+t[o]+"}":Le(o)&&(n+=Oe(r)+":"+Pe(r,o)+";");else if(!Array.isArray(o)||"string"!=typeof o[0]||null!=t&&void 0!==t[o[0]]){var l=De(e,t,o);switch(r){case"animation":case"animationName":n+=Oe(r)+":"+l+";";break;default:n+=r+"{"+l+"}"}}else for(var s=0;s<o.length;s++)Le(o[s])&&(n+=Oe(r)+":"+Pe(r,o[s])+";")}return n}(e,t,a);case"function":if(void 0!==e){var i=Be,r=a(e);return Be=i,De(e,t,r)}}if(null==t)return a;var o=t[a];return void 0!==o?o:a}var Be,Ie=/label:\s*([^\s;\n{]+)\s*(;|$)/g,Ne=function(e,t,a){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var n=!0,i="";Be=void 0;var r=e[0];null==r||void 0===r.raw?(n=!1,i+=De(a,t,r)):i+=r[0];for(var o=1;o<e.length;o++)i+=De(a,t,e[o]),n&&(i+=r[o]);Ie.lastIndex=0;for(var l,s="";null!==(l=Ie.exec(i));)s+="-"+l[1];var u=function(e){for(var t,a=0,n=0,i=e.length;i>=4;++n,i-=4)t=1540483477*(65535&(t=255&e.charCodeAt(n)|(255&e.charCodeAt(++n))<<8|(255&e.charCodeAt(++n))<<16|(255&e.charCodeAt(++n))<<24))+(59797*(t>>>16)<<16),a=1540483477*(65535&(t^=t>>>24))+(59797*(t>>>16)<<16)^1540483477*(65535&a)+(59797*(a>>>16)<<16);switch(i){case 3:a^=(255&e.charCodeAt(n+2))<<16;case 2:a^=(255&e.charCodeAt(n+1))<<8;case 1:a=1540483477*(65535&(a^=255&e.charCodeAt(n)))+(59797*(a>>>16)<<16)}return(((a=1540483477*(65535&(a^=a>>>13))+(59797*(a>>>16)<<16))^a>>>15)>>>0).toString(36)}(i)+s;return{name:u,styles:i,next:Be}},Me=!!w.useInsertionEffect&&w.useInsertionEffect,Re=Me||function(e){return e()},je=(Me||W.useLayoutEffect,{}.hasOwnProperty),Ve=W.createContext("undefined"!=typeof HTMLElement?Te({key:"css"}):null);Ve.Provider;var Ue=function(e){return(0,W.forwardRef)((function(t,a){var n=(0,W.useContext)(Ve);return e(t,n,a)}))},qe=W.createContext({}),Xe="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",Ye=function(e,t){var a={};for(var n in t)je.call(t,n)&&(a[n]=t[n]);return a[Xe]=e,a},Ze=function(e){var t=e.cache,a=e.serialized,n=e.isStringTag;return Ee(t,a,n),Re((function(){return function(e,t,a){Ee(e,t,a);var n=e.key+"-"+t.name;if(void 0===e.inserted[t.name]){var i=t;do{e.insert(t===i?"."+n:"",i,e.sheet,!0),i=i.next}while(void 0!==i)}}(t,a,n)})),null},Je=Ue((function(e,t,a){var n=e.css;"string"==typeof n&&void 0!==t.registered[n]&&(n=t.registered[n]);var i=e[Xe],r=[n],o="";"string"==typeof e.className?o=function(e,t,a){var n="";return a.split(" ").forEach((function(a){void 0!==e[a]?t.push(e[a]+";"):n+=a+" "})),n}(t.registered,r,e.className):null!=e.className&&(o=e.className+" ");var l=Ne(r,void 0,W.useContext(qe));o+=t.key+"-"+l.name;var s={};for(var u in e)je.call(e,u)&&"css"!==u&&u!==Xe&&(s[u]=e[u]);return s.ref=a,s.className=o,W.createElement(W.Fragment,null,W.createElement(Ze,{cache:t,serialized:l,isStringTag:"string"==typeof i}),W.createElement(i,s))})),Ke=(i(35),F.Fragment);function Qe(e,t,a){return je.call(t,"css")?F.jsx(Je,Ye(e,t),a):F.jsx(e,t,a)}function et(e,t,a){return je.call(t,"css")?F.jsxs(Je,Ye(e,t),a):F.jsxs(e,t,a)}function tt(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return Ne(t)}const at=e=>e/16,nt=e=>Number(e.slice(0,-2)),it=e=>e.map((e=>e.includes(" ")?`"${e}"`:e)).join(", "),rt={0:nt(e.space[0]),1:nt(e.space[1]),2:nt(e.space[2]),3:nt(e.space[3]),4:nt(e.space[4]),5:nt(e.space[5]),6:nt(e.space[6]),8:nt(e.space[8]),9:nt(e.space[9]),10:nt(e.space[10]),12:nt(e.space[12]),14:nt(e.space[14]),16:nt(e.space[16]),18:nt(e.space[18]),24:nt(e.space[24])},ot=(at(rt[0]),`${at(rt[1])}rem`),lt=(at(rt[2]),at(rt[3]),`${at(rt[4])}rem`),st=`${at(rt[5])}rem`,ut=(at(rt[6]),at(rt[8]),at(rt[9]),at(rt[10]),at(rt[12]),at(rt[14]),at(rt[16]),at(rt[18]),at(rt[24]),{textSans:{xxsmall:nt(e.typography.textSans.xxSmall.fontSize),xsmall:nt(e.typography.textSans.xSmall.fontSize),small:nt(e.typography.textSans.small.fontSize),medium:nt(e.typography.textSans.medium.fontSize),large:nt(e.typography.textSans.large.fontSize),xlarge:nt(e.typography.textSans.xLarge.fontSize),xxlarge:nt(e.typography.textSans.xxLarge.fontSize),xxxlarge:nt(e.typography.textSans.xxxLarge.fontSize)},body:{xsmall:nt(e.typography.body.xSmall.fontSize),small:nt(e.typography.body.small.fontSize),medium:nt(e.typography.body.medium.fontSize)},headline:{xxxsmall:nt(e.typography.headline.xxxSmall.fontSize),xxsmall:nt(e.typography.headline.xxSmall.fontSize),xsmall:nt(e.typography.headline.xSmall.fontSize),small:nt(e.typography.headline.small.fontSize),medium:nt(e.typography.headline.medium.fontSize),large:nt(e.typography.headline.large.fontSize),xlarge:nt(e.typography.headline.xLarge.fontSize)},titlepiece:{small:nt(e.typography.titlepiece.small.fontSize),medium:nt(e.typography.titlepiece.medium.fontSize),large:nt(e.typography.titlepiece.large.fontSize)}}),dt={textSans:{xxsmall:at(ut.textSans.xxsmall),xsmall:at(ut.textSans.xsmall),small:at(ut.textSans.small),medium:at(ut.textSans.medium),large:at(ut.textSans.large),xlarge:at(ut.textSans.xlarge),xxlarge:at(ut.textSans.xxlarge),xxxlarge:at(ut.textSans.xxxlarge)},body:{xsmall:at(ut.body.xsmall),small:at(ut.body.small),medium:at(ut.body.medium)},headline:{xxxsmall:at(ut.headline.xxxsmall),xxsmall:at(ut.headline.xxsmall),xsmall:at(ut.headline.xsmall),small:at(ut.headline.small),medium:at(ut.headline.medium),large:at(ut.headline.large),xlarge:at(ut.headline.xlarge)},titlepiece:{small:at(ut.titlepiece.small),medium:at(ut.titlepiece.medium),large:at(ut.titlepiece.large)}},ct={titlepiece:it(e.typography.fontFamily.titlepiece),headline:it(e.typography.fontFamily.headline),body:it(e.typography.fontFamily.body),textSans:it(e.typography.fontFamily.textSans)},ft={tight:e.typography.lineHeight.tight,regular:e.typography.lineHeight.regular,loose:e.typography.lineHeight.loose},pt={light:e.typography.fontWeight.light,regular:e.typography.fontWeight.regular,medium:e.typography.fontWeight.medium,bold:e.typography.fontWeight.bold},gt={titlepiece:{bold:!0},headline:{light:!0,medium:!0,bold:!0},body:{regular:!0,bold:!0},textSans:{regular:!0,bold:!0}},mt={titlepiece:{bold:!1},headline:{light:!0,medium:!0,bold:!1},body:{regular:!0,bold:!0},textSans:{regular:!0,bold:!1}},xt={textSans:{xxsmall:nt(e.typography.textDecorationThicknessForFontSize[12]),xsmall:nt(e.typography.textDecorationThicknessForFontSize[14]),small:nt(e.typography.textDecorationThicknessForFontSize[15]),medium:nt(e.typography.textDecorationThicknessForFontSize[17]),large:nt(e.typography.textDecorationThicknessForFontSize[20]),xlarge:nt(e.typography.textDecorationThicknessForFontSize[24]),xxlarge:nt(e.typography.textDecorationThicknessForFontSize[28]),xxxlarge:nt(e.typography.textDecorationThicknessForFontSize[34])},body:{xsmall:nt(e.typography.textDecorationThicknessForFontSize[14]),small:nt(e.typography.textDecorationThicknessForFontSize[15]),medium:nt(e.typography.textDecorationThicknessForFontSize[17])},headline:{xxxsmall:nt(e.typography.textDecorationThicknessForFontSize[17]),xxsmall:nt(e.typography.textDecorationThicknessForFontSize[20]),xsmall:nt(e.typography.textDecorationThicknessForFontSize[24]),small:nt(e.typography.textDecorationThicknessForFontSize[28]),medium:nt(e.typography.textDecorationThicknessForFontSize[34]),large:nt(e.typography.textDecorationThicknessForFontSize[42]),xlarge:nt(e.typography.textDecorationThicknessForFontSize[50])},titlepiece:{small:nt(e.typography.textDecorationThicknessForFontSize[42]),medium:nt(e.typography.textDecorationThicknessForFontSize[50]),large:nt(e.typography.textDecorationThicknessForFontSize[70])}},ht=(e,t)=>{switch(e){case"italic":return t?"italic":void 0;case"normal":return"normal";default:return}},yt=(e,t,a)=>n=>{const i={...a,...n},r=Number(ut[e][t]),o=Number(dt[e][t]),l=mt[e]?.[i.fontWeight]??!1,s=gt[e]?.[i.fontWeight]?pt[i.fontWeight]:void 0;return{lineHeight:"px"===i.unit?ft[i.lineHeight]*r+"px":ft[i.lineHeight],fontWeight:s,fontSize:"px"===i.unit?r:`${o}rem`,fontFamily:ct[e],textDecorationThickness:Number(xt[e][t]),fontStyle:ht(i.fontStyle,l)}},bt=e=>t=>{const{fontFamily:a,fontSize:n,fontStyle:i,fontWeight:r,lineHeight:o,textDecorationThickness:l}=e(t);return`\n\t\t\tfont-family: ${a};\n\t\t\tfont-size: ${"number"==typeof n?`${n}px`:n};\n\t\t\tline-height: ${o};\n\t\t\t${r?`font-weight: ${r};`:""}\n\t\t\t${i?`font-style: ${i};`:""}\n\t\t\t--source-text-decoration-thickness: ${void 0===l?"auto":`${l}px`};\n\t\t`},St={lineHeight:"tight",fontWeight:"bold",fontStyle:null,unit:"rem"},Gt={small:yt("titlepiece","small",St),medium:yt("titlepiece","medium",St),large:yt("titlepiece","large",St)},vt={lineHeight:"tight",fontWeight:"medium",fontStyle:null,unit:"rem"},Ht={xxxsmall:yt("headline","xxxsmall",vt),xxsmall:yt("headline","xxsmall",vt),xsmall:yt("headline","xsmall",vt),small:yt("headline","small",vt),medium:yt("headline","medium",vt),large:yt("headline","large",vt),xlarge:yt("headline","xlarge",vt)},$t={lineHeight:"loose",fontWeight:"regular",fontStyle:null,unit:"rem"},Ft={xsmall:yt("body","xsmall",$t),small:yt("body","small",$t),medium:yt("body","medium",$t)},Wt={lineHeight:"regular",fontWeight:"regular",fontStyle:null,unit:"rem"},wt={xxsmall:yt("textSans","xxsmall",Wt),xsmall:yt("textSans","xsmall",Wt),small:yt("textSans","small",Wt),medium:yt("textSans","medium",Wt),large:yt("textSans","large",Wt),xlarge:yt("textSans","xlarge",Wt),xxlarge:yt("textSans","xxlarge",Wt),xxxlarge:yt("textSans","xxxlarge",Wt)},Tt=(bt(Gt.small),bt(Gt.medium),bt(Gt.large),{xxxsmall:bt(Ht.xxxsmall),xxsmall:bt(Ht.xxsmall),xsmall:bt(Ht.xsmall),small:bt(Ht.small),medium:bt(Ht.medium),large:bt(Ht.large),xlarge:bt(Ht.xlarge)}),Et=(bt(Ft.xsmall),bt(Ft.small),bt(Ft.medium),{xxsmall:bt(wt.xxsmall),xsmall:bt(wt.xsmall),small:bt(wt.small),medium:bt(wt.medium),large:bt(wt.large),xlarge:bt(wt.xlarge),xxlarge:bt(wt.xxlarge),xxxlarge:bt(wt.xxxlarge)}),zt=".2s cubic-bezier(.64, .57, .67, 1.53)",kt={mobile:nt(e.breakpoint.mobile),mobileMedium:nt(e.breakpoint.mobileMedium),mobileLandscape:nt(e.breakpoint.mobileLandscape),phablet:nt(e.breakpoint.phablet),tablet:nt(e.breakpoint.tablet),desktop:nt(e.breakpoint.desktop),leftCol:nt(e.breakpoint.leftCol),wide:nt(e.breakpoint.wide)},Ct=e=>`@media (min-width: ${e}px)`,At=e=>`@media (max-width: ${e-.1+"px"})`,_t=(e,t)=>`@media (min-width: ${e}px) and (max-width: ${t-.1+"px"})`,Lt=(Ct(kt.mobile),Ct(kt.mobileMedium),Ct(kt.mobileLandscape)),Ot=(Ct(kt.phablet),Ct(kt.tablet)),Pt=Ct(kt.desktop),Dt=Ct(kt.leftCol),Bt=Ct(kt.wide),It={mobile:At(kt.mobile),mobileMedium:At(kt.mobileMedium),mobileLandscape:At(kt.mobileLandscape),phablet:At(kt.phablet),tablet:At(kt.tablet),desktop:At(kt.desktop),leftCol:At(kt.leftCol),wide:At(kt.wide)},Nt={and:{mobileMedium:_t(kt.mobile,kt.mobileMedium),mobileLandscape:_t(kt.mobile,kt.mobileLandscape),phablet:_t(kt.mobile,kt.phablet),tablet:_t(kt.mobile,kt.tablet),desktop:_t(kt.mobile,kt.desktop),leftCol:_t(kt.mobile,kt.leftCol),wide:_t(kt.mobileMedium,kt.wide)}},Mt=(_t(kt.mobileMedium,kt.mobileLandscape),_t(kt.mobileMedium,kt.phablet),_t(kt.mobileMedium,kt.tablet),_t(kt.mobileMedium,kt.desktop),_t(kt.mobileMedium,kt.leftCol),_t(kt.mobileMedium,kt.wide),_t(kt.mobileLandscape,kt.phablet),_t(kt.mobileLandscape,kt.tablet),_t(kt.mobileLandscape,kt.desktop),_t(kt.mobileLandscape,kt.leftCol),_t(kt.mobileLandscape,kt.wide),_t(kt.phablet,kt.tablet),_t(kt.phablet,kt.desktop),_t(kt.phablet,kt.leftCol),_t(kt.phablet,kt.wide),{and:{desktop:_t(kt.tablet,kt.desktop),leftCol:_t(kt.tablet,kt.leftCol),wide:_t(kt.tablet,kt.wide)}}),Rt=(_t(kt.desktop,kt.leftCol),_t(kt.desktop,kt.wide),{and:{wide:_t(kt.leftCol,kt.wide)}}),jt=e=>tt`
	border-bottom: 1px solid ${e.border};
`,Vt=(tt`
	${tt`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: ${ot} 0 ${st} 0;
	cursor: pointer;
`,tt`
	${Tt.xxxsmall({fontWeight:"bold"})};
	margin-right: ${lt};
`,tt`
	max-height: 0;
	/*
	TODO:
	This transition is being ignored as the hidden
	attribute is applied immediately

	transition: max-height ${zt};
	*/
	overflow: hidden;
`};
`,tt`
	width: auto;
	display: flex;
	align-items: center;
`,tt`
	svg {
		/* TODO: think about icon sizing */
		width: 18px;
		height: 18px;

		${Ot} {
			width: 26px;
			height: 26px;
		}
		margin-left: ${ot};
		transition: ${zt};
	}
`),Ut=(tt`
	${Vt};
	svg {
		transform: translate(0, 0);
		transition: transform ${zt};
	}

	&:hover,
	&:focus {
		svg {
			transform: translate(0, ${rt[1]/2}px);
		}
	}
`,tt`
	${Vt};
	svg {
		transform: rotate(180deg);
		transition: transform ${zt};
	}
`,tt`
	svg {
		width: 18px;
		height: 18px;
	}
`,"\n\tposition: absolute;\n\toverflow: hidden; /* gets rid of horizontal scrollbar that appears in some circumstances */\n\twhite-space: nowrap; /* The white-space property forces the content to render on one line. */\n\twidth: 1px;  /* ensures content is announced by VoiceOver. */\n\theight: 1px; /* ensures content is announced by VoiceOver. */\n\tmargin: -1px; /* hide or clip content that does not fit into a 1-pixel visible area. */\n\tpadding: 0; /* hide or clip content that does not fit into a 1-pixel visible area. */\n\tborder: 0;\n\tclip: rect(1px, 1px, 1px, 1px); /* clip removes any visible trace of the element */\n\t-webkit-clip-path: inset(50%); /* clip removes any visible trace of the element */\n\tclip-path: inset(50%); /* clip removes any visible trace of the element */\n"),qt=(tt`
	${Ut}
`,tt`
	${Ut}
`,tt`
	stroke: #a5c0e8;
	stroke-width: ${5};
	fill: transparent;
`,tt`
	stroke: ${r[400]};
	stroke-dasharray: 82;
	stroke-dashoffset: 82;
	stroke-width: ${5};
	fill: transparent;
`,`\n outline: 0;\n html:not(.src-focus-disabled) & {\n\t box-shadow: 0 0 0 3px ${t.focus[400]};\n }\n`),Xt=`\n outline: 0;\n html:not(.src-focus-disabled) & {\n\toutline: 5px solid ${t.focus[400]};\n\toutline-offset: 3px;\n }\n`,Yt={xsmall:nt(e.size.xSmall),small:nt(e.size.small),medium:nt(e.size.medium)},Zt=(at(Yt.xsmall),at(Yt.small),at(Yt.medium),{xsmall:nt(e.size.icon.xSmall),small:nt(e.size.icon.small),medium:nt(e.size.icon.medium)}),Jt={xsmall:at(Zt.xsmall),small:at(Zt.small),medium:at(Zt.medium)},Kt=Yt.medium,Qt=Yt.small,ea=Yt.xsmall,ta=Zt.medium,aa=Zt.small,na=Jt.medium,ia=Jt.small,ra=Yt.medium,oa=Yt.small,la=Yt.xsmall,sa=Zt.medium,ua=Zt.small,da=Zt.xsmall,ca=Jt.medium,fa=Jt.small,pa=(tt`
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
		${Xt};
	}
`,tt`
	${Et.medium({fontWeight:"bold"})};
	height: ${Kt}px;
	min-height: ${Kt}px;
	padding: 0 ${rt[5]}px;
	border-radius: ${Kt}px;
	padding-bottom: 2px;
`,tt`
	${Et.medium({fontWeight:"bold"})};
	height: ${Qt}px;
	min-height: ${Qt}px;
	padding: 0 ${rt[4]}px;
	border-radius: ${Qt}px;
	padding-bottom: 2px;
`,tt`
	${Et.xsmall({fontWeight:"bold"})};
	height: ${ea}px;
	min-height: ${ea}px;
	padding: 0 ${rt[3]}px;
	border-radius: ${ea}px;
	padding-bottom: 1px;
`,tt`
	svg {
		flex: 0 0 auto;
		display: block;
		fill: currentColor;
		position: relative;
		width: ${sa}px;
		height: auto;
	}
	.src-button-space {
		width: ${rt[3]}px;
	}
`,tt`
	svg {
		flex: 0 0 auto;
		display: block;
		fill: currentColor;
		position: relative;
		width: ${ua}px;
		height: auto;
	}
	.src-button-space {
		width: ${rt[2]}px;
	}
`,tt`
	svg {
		flex: 0 0 auto;
		display: block;
		fill: currentColor;
		position: relative;
		width: ${da}px;
		height: auto;
	}
	.src-button-space {
		width: ${rt[1]}px;
	}
`,-rt[1]),ga=(tt`
	flex-direction: row-reverse;
	svg {
		margin-left: ${pa}px;
	}
`,tt`
	svg {
		margin-right: ${pa}px;
	}
`,tt`
	justify-content: center;
	padding: 0;
`),ma=(tt`
	${ga};
	width: ${ra}px;
`,tt`
	${ga};
	width: ${oa}px;
`,tt`
	${ga};
	width: ${la}px;
`,tt`
	svg {
		transform: translate(0, 0);
		transition: ${zt};
	}
	&:hover,
	&:focus {
		svg {
			transform: translate(${rt[1]/2}px, 0);
		}
	}
`,t.neutral[100],t.neutral[7],"\n\tpadding: 0;\n"),xa="\n\tborder: 0;\n\tpadding: 0;\n\tmargin: 0;\n",ha=(Et.medium({fontWeight:"bold"}),Et.xsmall({fontWeight:"bold"}),tt`
	${ma};
`,tt`
	${Ut}
`,tt`
	${Ut}
`,tt`
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
`,tt`
	${Et.xsmall()};
	svg {
		width: ${fa}rem;
		height: ${ia}rem;
	}
`,tt`
	${Et.medium()};
	svg {
		width: ${ca}rem;
		height: ${na}rem;
	}
`,"(appearance: none) or (-webkit-appearance: none) or (-moz-appearance: none)"),ya=(tt`
	${xa};
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
`,tt`
	cursor: pointer;
`,tt`
	align-items: flex-start;
	margin-bottom: ${rt[3]}px;
`,tt`
	${Et.medium()};
	margin-top: 1px;
	/* If label text is empty, add additional spacing to align supporting text */
	&:empty {
		margin-top: 2px;
	}
`,tt`
	@supports (${ha}) {
		top: 15px;
		left: 9px;
	}
`,tt`
	@supports (${ha}) {
		top: 5px;
	}
`,tt`
	${xa};
`,tt`
	width: 100%;

	${Lt} {
		display: flex;
		justify-content: flex-start;
	}
`,tt`
	margin-top: ${rt[2]}px;
`,tt`
	width: 100%;
	${Lt} {
		@supports (display: grid) {
			display: grid;
			row-gap: ${rt[2]}px;
			column-gap: ${rt[2]}px;
			& > label {
				margin: 0;
			}
		}
	}
`,e=>tt`
	${Lt} {
		grid-template-columns: repeat(${e}, 1fr);
	}
`),ba=(ya(2),ya(3),ya(4),ya(5),tt`
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
`,tt`
	flex: 0 1 auto;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	position: relative;
	box-sizing: border-box;

	${Lt} {
		flex-direction: column;
		padding: ${rt[2]}px ${rt[6]}px;
	}

	& > * {
		${Et.medium({fontWeight:"bold"})};
		text-align: center;
	}

	& svg {
		width: ${sa}px;
		max-height: ${ta}px;
		fill: currentColor;
		margin-right: ${rt[1]}px;

		${Lt} {
			margin-bottom: -${rt[1]}px;
			margin-right: 0;
		}
	}
`,tt`
	width: 100%;
	${Lt} {
		& > div {
			width: 100%;
		}
	}
`,({size:e,theme:t})=>Qe("svg",{width:e?Zt[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Qe("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M23 16.768 12.502 6.27h-1.004L1 16.768l.98.954L12 9.284l10.02 8.438.98-.954Z",fill:t?.fill})})),Sa={border:t.brand[600],background:t.brand[400],text:t.neutral[100],anchor:t.neutral[100],anchorHover:t.brandAlt[400]},Ga=(tt`
	display: flex;
	align-items: center;
`,tt`
	margin-bottom: ${rt[6]}px;
	${Pt} {
		margin-bottom: ${rt[1]}px;
	}
`,e=>e-Kt/2),va=(tt`
	margin-bottom: ${Ga(rt[6])}px;
	${Pt} {
		margin-bottom: ${Ga(rt[1])}px;
	}
`,tt`
	${Et.xxsmall()};
	display: block;
`,tt`
	${Nt.and.tablet} {
		padding-right: ${Kt}px;
	}
`,et("a",{href:"#top",css:e=>((e=Sa)=>tt`
	display: flex;
	align-items: center;
	height: ${Kt}px;
	padding-left: ${rt[2]}px;

	${Et.small({fontWeight:"bold"})};
	color: ${e.anchor};
	background-color: ${e.background};
	text-decoration: none;
	white-space: nowrap;

	& :hover {
		color: ${e.anchorHover};
	}

	& :focus {
		${qt};
	}
`)(e.footer),children:["Back to top",Qe("div",{css:e=>((e=Sa)=>tt`
	height: ${Kt}px;
	width: ${ra}px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: ${Kt}px;
	background: currentColor;
	margin-left: ${rt[2]}px;

	svg {
		height: ${aa}px;
		width: ${ua}px;
		fill: ${e.background};
	}
`)(e.footer),children:Qe((({size:e,theme:t,isAnnouncedByScreenReader:a=!1})=>et(Ke,{children:[Qe(ba,{size:e,theme:t}),a?Qe("span",{css:tt`
					${Ut}
				`,children:"Collapse to show less"}):""]})),{})})]}),tt`
	box-sizing: border-box;
	display: flex;
	margin-right: -${rt[5]}px;
	& > * {
		margin-right: ${rt[5]}px;
	}
`,e=>tt`
	${It[e]} {
		display: block;
		margin-right: 0;
		& > * {
			margin-right: 0;
		}
	}
`),Ha=e=>tt`
	margin-bottom: ${-rt[e]}px;
	& > * {
		margin-bottom: ${rt[e]}px;
	}
`,$a=(Ha(1),Ha(2),Ha(3),Ha(4),Ha(5),Ha(6),Ha(9),Ha(12),Ha(24),tt`
	width: 100% !important;
`),Fa=(tt`
	& > * {
		${It.tablet} {
			${$a}
		}
	}
`,tt`
	& > * {
		${It.desktop} {
			${$a}
		}
	}
`,tt`
	& > * {
		${It.leftCol} {
			${$a}
		}
	}
`,tt`
	& > * {
		${It.wide} {
			${$a}
		}
	}
`,Mt.and.leftCol,Rt.and.wide,tt`
	box-sizing: border-box;
`,tt`
	flex: 1;
`,va("tablet"),va("desktop"),va("leftCol"),va("wide"),tt`
	margin: 0 auto;
	box-sizing: border-box;
	padding: 0 ${rt[3]}px;
	width: 100%;
	${Lt} {
		padding: 0 ${rt[5]}px;
	}
	${Ot} {
		width: ${kt.tablet}px;
	}
	${Pt} {
		width: ${kt.desktop}px;
	}
	${Dt} {
		width: ${kt.leftCol}px;
	}
	${Bt} {
		width: ${kt.wide}px;
	}
	border-color: ${t.neutral[86]};
`,tt`
	border-left-style: solid;
	border-right-style: solid;
	border-left-width: 0;
	border-right-width: 0;

	${Ot} {
		width: ${kt.tablet+2}px;
		border-left-width: 1px;
		border-right-width: 1px;
	}
	${Pt} {
		width: ${kt.desktop+2}px;
	}
	${Dt} {
		width: ${kt.leftCol+2}px;
	}
	${Bt} {
		width: ${kt.wide+2}px;
	}
`,tt`
	border-top-width: 1px;
	border-top-style: solid;
`,tt`
	& > * {
		width: 100%;
	}
`,e=>tt`
	& > * + * {
		margin-top: ${rt[e]}px;
	}
`),Wa=(Fa(1),Fa(2),Fa(3),Fa(4),Fa(5),Fa(6),Fa(9),Fa(12),Fa(24),tt`
	display: block;
	& > * + * {
		margin-left: 0;
	}
	& > * {
		margin-bottom: ${rt[5]}px;
	}
`),wa=(tt`
	${It.tablet} {
		${Wa}
	}
`,tt`
	${It.desktop} {
		${Wa}
	}
`,tt`
	${It.leftCol} {
		${Wa}
	}
`,tt`
	${It.wide} {
		${Wa}
	}
`,tt`
	width: 100% !important;
`),Ta=(tt`
	& > * {
		${It.tablet} {
			${wa}
		}
	}
`,tt`
	& > * {
		${It.desktop} {
			${wa}
		}
	}
`,tt`
	& > * {
		${It.leftCol} {
			${wa}
		}
	}
`,tt`
	& > * {
		${It.wide} {
			${wa}
		}
	}
`,tt`
	width: 100%;
	${Lt} {
		@supports (display: grid) {
			display: grid;
			row-gap: ${rt[5]}px;
			column-gap: ${rt[5]}px;
		}
	}
`,e=>tt`
	${Lt} {
		grid-template-columns: repeat(${e}, 1fr);
	}
`),Ea=(Ta(2),Ta(3),Ta(4),Ta(5),tt`
	display: flex;
	flex-wrap: wrap;
`,e=>tt`
	margin-left: -${rt[e]}px;
	& > * {
		margin-left: ${rt[e]}px;
		margin-bottom: ${rt[e]}px;
	}
`);Ea(1),Ea(2),Ea(3),Ea(4),Ea(5),Ea(6),Ea(9),Ea(12),Ea(24),tt`
	position: relative;
	${Et.medium()};
	cursor: pointer;
	text-decoration: underline;
	text-underline-position: under;
	text-underline-offset: 5%;

	display: inline;
	align-items: center;

	&:focus {
		${qt};
	}

	&:hover {
		/* If the hover text decoration thickness is not set, we default to the initial value. */
		text-decoration-thickness: var(--source-text-decoration-thickness, auto);
	}
`,tt`
	/* override user agent styles */
	border: none;
	background: transparent;
	padding: 0;
`,tt`
	svg {
		fill: currentColor;
		/*
		TODO: hardcoded bottom margin to vertically align
		icons with text. This needs to be revisited when
		the rules of icon spacing have been formalised
		 */
		margin-bottom: -3px;
		width: ${da}px;
		height: auto;
	}
`,tt`
	svg {
		margin-left: -${rt[5]}px;
	}
`,tt`
	svg {
		margin-left: -${rt[6]}px;
		margin-right: ${rt[1]}px;
	}
`,tt`
	cursor: pointer;
`,tt`
	align-items: flex-start;
	margin-bottom: ${rt[3]}px;
`,tt`
	${Et.medium({fontWeight:"bold"})};
	margin-top: 1px;
	/* If label text is empty, add additional spacing to align supporting text */
	&:empty {
		margin-top: 2px;
	}
`,tt`
	margin-top: ${rt[1]}px;
`,tt`
	margin-top: 6px;
`,tt`
	margin-top: ${rt[1]}px;
`,Et.medium(),Et.xsmall(),tt`
	margin-top: ${rt[1]}px;
`,tt`
	margin-top: 6px;
`,tt`
	margin-top: 2px;
`,tt`
	width: 100%;
`,t.neutral[7],t.neutral[7],t.neutral[46],t.neutral[46],t.neutral[7],t.success[400],t.neutral[100],t.neutral[46],t.error[400],t.success[400],tt`
	${Et.medium()};
	height: ${Yt.medium}px;
`,tt`
	${Et.xsmall()};
	height: ${Yt.small}px;
`,tt`
	margin-top: ${rt[1]}px;
`,tt`
	margin-top: 6px;
`,tt`
	margin-top: 2px;
`,tt`
	width: 100%;
`,tt`
	width: 40ex;
	max-width: 100%; /* prevent overflow on narrow viewports */
`,tt`
	width: 18ex;
`,tt`
	width: 9ex;
`,console.log((({hideToggleLabel:e=!1,children:t,cssOverrides:i,theme:r,...o})=>{const l=e=>((e,t,a,n)=>({...e,...n?n(a):a,...t}))(a,r,e,n);return Qe("div",{css:e=>[jt(l(e.accordion)),i],...o,children:W.Children.map(t,(t=>(0,W.cloneElement)(t,{hideToggleLabel:e})))})}))})()})();