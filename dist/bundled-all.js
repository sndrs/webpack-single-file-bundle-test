/*! For license information please see bundled-all.js.LICENSE.txt */
(()=>{"use strict";var e,t,i={35:(e,t,i)=>{var n=i(959),r={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},l={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},o={};function d(e){return n.isMemo(e)?a:o[e.$$typeof]||r}o[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},o[n.Memo]=a;var s=Object.defineProperty,c=Object.getOwnPropertyNames,h=Object.getOwnPropertySymbols,u=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,v=Object.prototype;e.exports=function e(t,i,n){if("string"!=typeof i){if(v){var r=p(i);r&&r!==v&&e(t,r,n)}var a=c(i);h&&(a=a.concat(h(i)));for(var o=d(t),m=d(i),f=0;f<a.length;++f){var g=a[f];if(!(l[g]||n&&n[g]||m&&m[g]||o&&o[g])){var x=u(i,g);try{s(t,g,x)}catch(e){}}}}return t}},843:(e,t)=>{var i="function"==typeof Symbol&&Symbol.for,n=i?Symbol.for("react.element"):60103,r=i?Symbol.for("react.portal"):60106,l=i?Symbol.for("react.fragment"):60107,a=i?Symbol.for("react.strict_mode"):60108,o=i?Symbol.for("react.profiler"):60114,d=i?Symbol.for("react.provider"):60109,s=i?Symbol.for("react.context"):60110,c=i?Symbol.for("react.async_mode"):60111,h=i?Symbol.for("react.concurrent_mode"):60111,u=i?Symbol.for("react.forward_ref"):60112,p=i?Symbol.for("react.suspense"):60113,v=i?Symbol.for("react.suspense_list"):60120,m=i?Symbol.for("react.memo"):60115,f=i?Symbol.for("react.lazy"):60116,g=i?Symbol.for("react.block"):60121,x=i?Symbol.for("react.fundamental"):60117,b=i?Symbol.for("react.responder"):60118,y=i?Symbol.for("react.scope"):60119;function w(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case c:case h:case l:case o:case a:case p:return e;default:switch(e=e&&e.$$typeof){case s:case u:case f:case m:case d:return e;default:return t}}case r:return t}}}function S(e){return w(e)===h}t.AsyncMode=c,t.ConcurrentMode=h,t.ContextConsumer=s,t.ContextProvider=d,t.Element=n,t.ForwardRef=u,t.Fragment=l,t.Lazy=f,t.Memo=m,t.Portal=r,t.Profiler=o,t.StrictMode=a,t.Suspense=p,t.isAsyncMode=function(e){return S(e)||w(e)===c},t.isConcurrentMode=S,t.isContextConsumer=function(e){return w(e)===s},t.isContextProvider=function(e){return w(e)===d},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return w(e)===u},t.isFragment=function(e){return w(e)===l},t.isLazy=function(e){return w(e)===f},t.isMemo=function(e){return w(e)===m},t.isPortal=function(e){return w(e)===r},t.isProfiler=function(e){return w(e)===o},t.isStrictMode=function(e){return w(e)===a},t.isSuspense=function(e){return w(e)===p},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===l||e===h||e===o||e===a||e===p||e===v||"object"==typeof e&&null!==e&&(e.$$typeof===f||e.$$typeof===m||e.$$typeof===d||e.$$typeof===s||e.$$typeof===u||e.$$typeof===x||e.$$typeof===b||e.$$typeof===y||e.$$typeof===g)},t.typeOf=w},959:(e,t,i)=>{e.exports=i(843)},34:(e,t,i)=>{var n=i(474),r=Symbol.for("react.element"),l=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,i){var n,l={},s=null,c=null;for(n in void 0!==i&&(s=""+i),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(c=t.ref),t)a.call(t,n)&&!d.hasOwnProperty(n)&&(l[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===l[n]&&(l[n]=t[n]);return{$$typeof:r,type:e,key:s,ref:c,props:l,_owner:o.current}}t.Fragment=l,t.jsx=s,t.jsxs=s},749:(e,t)=>{var i=Symbol.for("react.element"),n=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),o=Symbol.for("react.provider"),d=Symbol.for("react.context"),s=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),u=Symbol.for("react.lazy"),p=Symbol.iterator,v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,f={};function g(e,t,i){this.props=e,this.context=t,this.refs=f,this.updater=i||v}function x(){}function b(e,t,i){this.props=e,this.context=t,this.refs=f,this.updater=i||v}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},x.prototype=g.prototype;var y=b.prototype=new x;y.constructor=b,m(y,g.prototype),y.isPureReactComponent=!0;var w=Array.isArray,S=Object.prototype.hasOwnProperty,H={current:null},$={key:!0,ref:!0,__self:!0,__source:!0};function z(e,t,n){var r,l={},a=null,o=null;if(null!=t)for(r in void 0!==t.ref&&(o=t.ref),void 0!==t.key&&(a=""+t.key),t)S.call(t,r)&&!$.hasOwnProperty(r)&&(l[r]=t[r]);var d=arguments.length-2;if(1===d)l.children=n;else if(1<d){for(var s=Array(d),c=0;c<d;c++)s[c]=arguments[c+2];l.children=s}if(e&&e.defaultProps)for(r in d=e.defaultProps)void 0===l[r]&&(l[r]=d[r]);return{$$typeof:i,type:e,key:a,ref:o,props:l,_owner:H.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var L=/\/+/g;function k(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function R(e,t,r,l,a){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var d=!1;if(null===e)d=!0;else switch(o){case"string":case"number":d=!0;break;case"object":switch(e.$$typeof){case i:case n:d=!0}}if(d)return a=a(d=e),e=""===l?"."+k(d,0):l,w(a)?(r="",null!=e&&(r=e.replace(L,"$&/")+"/"),R(a,t,r,"",(function(e){return e}))):null!=a&&(C(a)&&(a=function(e,t){return{$$typeof:i,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,r+(!a.key||d&&d.key===a.key?"":(""+a.key).replace(L,"$&/")+"/")+e)),t.push(a)),1;if(d=0,l=""===l?".":l+":",w(e))for(var s=0;s<e.length;s++){var c=l+k(o=e[s],s);d+=R(o,t,r,c,a)}else if(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof c)for(e=c.call(e),s=0;!(o=e.next()).done;)d+=R(o=o.value,t,r,c=l+k(o,s++),a);else if("object"===o)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return d}function G(e,t,i){if(null==e)return e;var n=[],r=0;return R(e,n,"","",(function(e){return t.call(i,e,r++)})),n}function Z(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var B={current:null},V={transition:null},A={ReactCurrentDispatcher:B,ReactCurrentBatchConfig:V,ReactCurrentOwner:H};t.Children={map:G,forEach:function(e,t,i){G(e,(function(){t.apply(this,arguments)}),i)},count:function(e){var t=0;return G(e,(function(){t++})),t},toArray:function(e){return G(e,(function(e){return e}))||[]},only:function(e){if(!C(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=g,t.Fragment=r,t.Profiler=a,t.PureComponent=b,t.StrictMode=l,t.Suspense=c,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A,t.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=m({},e.props),l=e.key,a=e.ref,o=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,o=H.current),void 0!==t.key&&(l=""+t.key),e.type&&e.type.defaultProps)var d=e.type.defaultProps;for(s in t)S.call(t,s)&&!$.hasOwnProperty(s)&&(r[s]=void 0===t[s]&&void 0!==d?d[s]:t[s])}var s=arguments.length-2;if(1===s)r.children=n;else if(1<s){d=Array(s);for(var c=0;c<s;c++)d[c]=arguments[c+2];r.children=d}return{$$typeof:i,type:e.type,key:l,ref:a,props:r,_owner:o}},t.createContext=function(e){return(e={$$typeof:d,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:o,_context:e},e.Consumer=e},t.createElement=z,t.createFactory=function(e){var t=z.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:s,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:u,_payload:{_status:-1,_result:e},_init:Z}},t.memo=function(e,t){return{$$typeof:h,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=V.transition;V.transition={};try{e()}finally{V.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return B.current.useCallback(e,t)},t.useContext=function(e){return B.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return B.current.useDeferredValue(e)},t.useEffect=function(e,t){return B.current.useEffect(e,t)},t.useId=function(){return B.current.useId()},t.useImperativeHandle=function(e,t,i){return B.current.useImperativeHandle(e,t,i)},t.useInsertionEffect=function(e,t){return B.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return B.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return B.current.useMemo(e,t)},t.useReducer=function(e,t,i){return B.current.useReducer(e,t,i)},t.useRef=function(e){return B.current.useRef(e)},t.useState=function(e){return B.current.useState(e)},t.useSyncExternalStore=function(e,t,i){return B.current.useSyncExternalStore(e,t,i)},t.useTransition=function(){return B.current.useTransition()},t.version="18.2.0"},474:(e,t,i)=>{e.exports=i(749)},274:(e,t,i)=>{e.exports=i(34)}},n={};function r(e){var t=n[e];if(void 0!==t)return t.exports;var l=n[e]={exports:{}};return i[e](l,l.exports,r),l.exports}t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(i,n){if(1&n&&(i=this(i)),8&n)return i;if("object"==typeof i&&i){if(4&n&&i.__esModule)return i;if(16&n&&"function"==typeof i.then)return i}var l=Object.create(null);r.r(l);var a={};e=e||[null,t({}),t([]),t(t)];for(var o=2&n&&i;"object"==typeof o&&!~e.indexOf(o);o=t(o))Object.getOwnPropertyNames(o).forEach((e=>a[e]=()=>i[e]));return a.default=()=>i,r.d(l,a),l},r.d=(e,t)=>{for(var i in t)r.o(t,i)&&!r.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={};r.r(e),r.d(e,{Accordion:()=>Pn,AccordionRow:()=>jn,BackToTop:()=>Bl,Button:()=>wr,ButtonLink:()=>Dc,Checkbox:()=>al,CheckboxGroup:()=>ll,ChoiceCard:()=>wl,ChoiceCardGroup:()=>yl,Column:()=>tc,Columns:()=>ec,Container:()=>ac,Footer:()=>Vl,Hide:()=>oc,Inline:()=>Zc,InlineError:()=>Yr,InlineSuccess:()=>Xc,Label:()=>Ms,Legend:()=>Pr,Link:()=>Oc,LinkButton:()=>Sr,Option:()=>qc,Radio:()=>Uc,RadioGroup:()=>jc,Select:()=>ih,Stack:()=>hc,SvgAlert:()=>Sn,SvgAlertPhone:()=>yo,SvgAlertRound:()=>Dr,SvgAlertTriangle:()=>Fl,SvgAppleBrand:()=>Ml,SvgArrowContract:()=>So,SvgArrowDownStraight:()=>Wl,SvgArrowExpand:()=>$o,SvgArrowLeftStraight:()=>Ol,SvgArrowOutdent:()=>Co,SvgArrowPopOut:()=>ko,SvgArrowRightStraight:()=>Il,SvgArrowScroll:()=>Go,SvgArrowUpAndDownSmall:()=>Bo,SvgArrowUpStraight:()=>Nl,SvgArrowUpStraightSmall:()=>Ao,SvgAsterisk:()=>To,SvgAudio:()=>Ul,SvgAudioMute:()=>Eo,SvgBookMark:()=>Po,SvgBookMarkCross:()=>Do,SvgCalendar:()=>_o,SvgCamera:()=>Xl,SvgCheckmark:()=>Ql,SvgChevronDownDouble:()=>jo,SvgChevronDownSingle:()=>Dn,SvgChevronDownSingleXsmall:()=>qo,SvgChevronLeftDouble:()=>Kl,SvgChevronLeftSingle:()=>ta,SvgChevronRightDouble:()=>na,SvgChevronRightSingle:()=>la,SvgChevronUpDouble:()=>Yo,SvgChevronUpSingle:()=>Hl,SvgClock:()=>oa,SvgClockBaselineSmall:()=>Jo,SvgCreditCard:()=>sa,SvgCross:()=>ha,SvgCrossRound:()=>ed,SvgCrossedOutCloud:()=>di,SvgCrosswords:()=>id,SvgDirectDebit:()=>pa,SvgDirectDebitWide:()=>ma,SvgDocument:()=>rd,SvgDownload:()=>ad,SvgDragHandle:()=>dd,SvgEdit:()=>cd,SvgEllipsis:()=>ud,SvgEnvelope:()=>ga,SvgExclamation:()=>ci,SvgExternal:()=>ba,SvgEye:()=>Ha,SvgEyeStrike:()=>wa,SvgFacebook:()=>za,SvgFacebookBrand:()=>La,SvgFacebookMessenger:()=>ui,SvgFilter:()=>vd,SvgGift:()=>Ra,SvgGlobe:()=>Za,SvgGoogleBrand:()=>Va,SvgGps:()=>fd,SvgGuardianBestWebsiteLogo:()=>$r,SvgGuardianLiveLogo:()=>zr,SvgGuardianLogo:()=>Hr,SvgHandPointed:()=>xd,SvgHouse:()=>Fa,SvgHouseCross:()=>yd,SvgHousePlus:()=>Sd,SvgHouseSetting:()=>$d,SvgIndent:()=>Ma,SvgInfo:()=>$n,SvgInfoRound:()=>vi,SvgLinkedIn:()=>Wa,SvgLocationMarker:()=>Cd,SvgMagnifyingGlass:()=>kd,SvgMagnifyingGlassMinus:()=>Gd,SvgMagnifyingGlassPlus:()=>Bd,SvgMagnifyingGlassSadFace:()=>Ad,SvgMediaControlsBack:()=>Td,SvgMediaControlsForward:()=>Ed,SvgMediaControlsPause:()=>Pd,SvgMediaControlsPlay:()=>fi,SvgMediaControlsStop:()=>Dd,SvgMenu:()=>_d,SvgMessage:()=>qd,SvgMessageRound:()=>Yd,SvgMessenger:()=>Hn,SvgMinus:()=>Oa,SvgMoon:()=>jd,SvgNewsletter:()=>Jd,SvgNotificationsOff:()=>es,SvgNotificationsOn:()=>is,SvgOfflineCloud:()=>wn,SvgPadlock:()=>rs,SvgPartyOfThree:()=>as,SvgPayPal:()=>Cn,SvgPayPalBrand:()=>xi,SvgPerson:()=>Ia,SvgPersonCross:()=>ds,SvgPersonPlus:()=>cs,SvgPersonRound:()=>us,SvgPersonTick:()=>vs,SvgPhone:()=>fs,SvgPinned:()=>Na,SvgPinterest:()=>Ua,SvgPlay:()=>zn,SvgPlus:()=>Xa,SvgQuote:()=>Qa,SvgReload:()=>xs,SvgRoundelBrand:()=>Lr,SvgRoundelBrandInverse:()=>kr,SvgRoundelDefault:()=>Rr,SvgRoundelInverse:()=>Gr,SvgSettings:()=>Ka,SvgShare:()=>ys,SvgShareCallout:()=>Ss,SvgSignalBrand:()=>fo,SvgSpeechBubble:()=>to,SvgSpeechBubbleCross:()=>$s,SvgSpeechBubblePlus:()=>Cs,SvgSpinner:()=>Xn,SvgStar:()=>no,SvgStarOutline:()=>ks,SvgTelegramBrand:()=>xo,SvgTextLarge:()=>Gs,SvgTextSize:()=>Bs,SvgTextSmall:()=>As,SvgTickRound:()=>lo,SvgTwitter:()=>oo,SvgUpload:()=>Ts,SvgVideo:()=>co,SvgWhatsApp:()=>uo,SvgWhatsAppBrand:()=>vo,TextArea:()=>hh,TextInput:()=>yh,Tiles:()=>Lc,accordionThemeDefault:()=>yi,buttonThemeBrand:()=>Bi,buttonThemeBrandAlt:()=>Vi,buttonThemeDefault:()=>Zi,buttonThemeReaderRevenue:()=>ki,buttonThemeReaderRevenueBrand:()=>Ri,buttonThemeReaderRevenueBrandAlt:()=>Gi,checkboxThemeBrand:()=>Yi,checkboxThemeDefault:()=>Xi,choiceCardThemeDefault:()=>en,footerThemeBrand:()=>$l,labelThemeBrand:()=>Ei,labelThemeDefault:()=>Mi,linkThemeBrand:()=>rn,linkThemeBrandAlt:()=>ln,linkThemeDefault:()=>nn,radioThemeBrand:()=>mn,radioThemeDefault:()=>vn,selectThemeDefault:()=>fn,textInputThemeDefault:()=>yn,themeAccordion:()=>bi,themeButton:()=>Ai,themeButtonBrand:()=>Fi,themeButtonBrandAlt:()=>Ti,themeButtonReaderRevenue:()=>zi,themeButtonReaderRevenueBrand:()=>Ci,themeButtonReaderRevenueBrandAlt:()=>Li,themeCheckbox:()=>Ni,themeCheckboxBrand:()=>Ui,themeCheckboxGroup:()=>ji,themeCheckboxGroupBrand:()=>qi,themeChoiceCard:()=>Ji,themeChoiceCardGroup:()=>Ki,themeLabel:()=>Wi,themeLabelBrand:()=>Pi,themeLink:()=>an,themeLinkBrand:()=>on,themeLinkBrandAlt:()=>dn,themeRadio:()=>sn,themeRadioBrand:()=>hn,themeRadioGroup:()=>cn,themeRadioGroupBrand:()=>un,themeSelect:()=>gn,themeTextArea:()=>ch,themeTextInput:()=>bn,themeUserFeedback:()=>Ii,themeUserFeedbackBrand:()=>_i,userFeedbackThemeBrand:()=>Di,userFeedbackThemeDefault:()=>Oi});var t=r(274),i=r(474),n=r.t(i,2),l=function(){function e(e){var t=this;this._insertTag=function(e){var i;i=0===t.tags.length?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,i),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var i=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(t);try{i.insertRule(e,i.cssRules.length)}catch(e){}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach((function(e){return e.parentNode&&e.parentNode.removeChild(e)})),this.tags=[],this.ctr=0},e}(),a=Math.abs,o=String.fromCharCode,d=Object.assign;function s(e){return e.trim()}function c(e,t,i){return e.replace(t,i)}function h(e,t){return e.indexOf(t)}function u(e,t){return 0|e.charCodeAt(t)}function p(e,t,i){return e.slice(t,i)}function v(e){return e.length}function m(e){return e.length}function f(e,t){return t.push(e),e}var g=1,x=1,b=0,y=0,w=0,S="";function H(e,t,i,n,r,l,a){return{value:e,root:t,parent:i,type:n,props:r,children:l,line:g,column:x,length:a,return:""}}function $(e,t){return d(H("",null,null,"",null,null,0),e,{length:-e.length},t)}function z(){return w=y>0?u(S,--y):0,x--,10===w&&(x=1,g--),w}function C(){return w=y<b?u(S,y++):0,x++,10===w&&(x=1,g++),w}function L(){return u(S,y)}function k(){return y}function R(e,t){return p(S,e,t)}function G(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Z(e){return g=x=1,b=v(S=e),y=0,[]}function B(e){return S="",e}function V(e){return s(R(y-1,T(91===e?e+2:40===e?e+1:e)))}function A(e){for(;(w=L())&&w<33;)C();return G(e)>2||G(w)>3?"":" "}function F(e,t){for(;--t&&C()&&!(w<48||w>102||w>57&&w<65||w>70&&w<97););return R(e,k()+(t<6&&32==L()&&32==C()))}function T(e){for(;C();)switch(w){case e:return y;case 34:case 39:34!==e&&39!==e&&T(w);break;case 40:41===e&&T(e);break;case 92:C()}return y}function M(e,t){for(;C()&&e+w!==57&&(e+w!==84||47!==L()););return"/*"+R(t,y-1)+"*"+o(47===e?e:C())}function E(e){for(;!G(L());)C();return R(e,y)}var W="-ms-",P="-moz-",O="-webkit-",D="comm",I="rule",_="decl",N="@keyframes";function j(e,t){for(var i="",n=m(e),r=0;r<n;r++)i+=t(e[r],r,e,t)||"";return i}function U(e,t,i,n){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case _:return e.return=e.return||e.value;case D:return"";case N:return e.return=e.value+"{"+j(e.children,n)+"}";case I:e.value=e.props.join(",")}return v(i=j(e.children,n))?e.return=e.value+"{"+i+"}":""}function q(e){return B(X("",null,null,null,[""],e=Z(e),0,[0],e))}function X(e,t,i,n,r,l,a,d,s){for(var p=0,m=0,g=a,x=0,b=0,y=0,w=1,S=1,H=1,$=0,R="",G=r,Z=l,B=n,T=R;S;)switch(y=$,$=C()){case 40:if(108!=y&&58==u(T,g-1)){-1!=h(T+=c(V($),"&","&\f"),"&\f")&&(H=-1);break}case 34:case 39:case 91:T+=V($);break;case 9:case 10:case 13:case 32:T+=A(y);break;case 92:T+=F(k()-1,7);continue;case 47:switch(L()){case 42:case 47:f(Q(M(C(),k()),t,i),s);break;default:T+="/"}break;case 123*w:d[p++]=v(T)*H;case 125*w:case 59:case 0:switch($){case 0:case 125:S=0;case 59+m:-1==H&&(T=c(T,/\f/g,"")),b>0&&v(T)-g&&f(b>32?J(T+";",n,i,g-1):J(c(T," ","")+";",n,i,g-2),s);break;case 59:T+=";";default:if(f(B=Y(T,t,i,p,m,r,d,R,G=[],Z=[],g),l),123===$)if(0===m)X(T,t,B,B,G,l,g,d,Z);else switch(99===x&&110===u(T,3)?100:x){case 100:case 108:case 109:case 115:X(e,B,B,n&&f(Y(e,B,B,0,0,r,d,R,r,G=[],g),Z),r,Z,g,d,n?G:Z);break;default:X(T,B,B,B,[""],Z,0,d,Z)}}p=m=b=0,w=H=1,R=T="",g=a;break;case 58:g=1+v(T),b=y;default:if(w<1)if(123==$)--w;else if(125==$&&0==w++&&125==z())continue;switch(T+=o($),$*w){case 38:H=m>0?1:(T+="\f",-1);break;case 44:d[p++]=(v(T)-1)*H,H=1;break;case 64:45===L()&&(T+=V(C())),x=L(),m=g=v(R=T+=E(k())),$++;break;case 45:45===y&&2==v(T)&&(w=0)}}return l}function Y(e,t,i,n,r,l,o,d,h,u,v){for(var f=r-1,g=0===r?l:[""],x=m(g),b=0,y=0,w=0;b<n;++b)for(var S=0,$=p(e,f+1,f=a(y=o[b])),z=e;S<x;++S)(z=s(y>0?g[S]+" "+$:c($,/&\f/g,g[S])))&&(h[w++]=z);return H(e,t,i,0===r?I:d,h,u,v)}function Q(e,t,i){return H(e,t,i,D,o(w),p(e,2,-2),0)}function J(e,t,i,n){return H(e,t,i,_,p(e,0,n),p(e,n+1,-1),n)}var K=function(e,t,i){for(var n=0,r=0;n=r,r=L(),38===n&&12===r&&(t[i]=1),!G(r);)C();return R(e,y)},ee=new WeakMap,te=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var t=e.value,i=e.parent,n=e.column===i.column&&e.line===i.line;"rule"!==i.type;)if(!(i=i.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||ee.get(i))&&!n){ee.set(e,!0);for(var r=[],l=function(e,t){return B(function(e,t){var i=-1,n=44;do{switch(G(n)){case 0:38===n&&12===L()&&(t[i]=1),e[i]+=K(y-1,t,i);break;case 2:e[i]+=V(n);break;case 4:if(44===n){e[++i]=58===L()?"&\f":"",t[i]=e[i].length;break}default:e[i]+=o(n)}}while(n=C());return e}(Z(e),t))}(t,r),a=i.props,d=0,s=0;d<l.length;d++)for(var c=0;c<a.length;c++,s++)e.props[s]=r[d]?l[d].replace(/&\f/g,a[c]):a[c]+" "+l[d]}}},ie=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}};function ne(e,t){switch(function(e,t){return 45^u(e,0)?(((t<<2^u(e,0))<<2^u(e,1))<<2^u(e,2))<<2^u(e,3):0}(e,t)){case 5103:return O+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return O+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return O+e+P+e+W+e+e;case 6828:case 4268:return O+e+W+e+e;case 6165:return O+e+W+"flex-"+e+e;case 5187:return O+e+c(e,/(\w+).+(:[^]+)/,O+"box-$1$2"+W+"flex-$1$2")+e;case 5443:return O+e+W+"flex-item-"+c(e,/flex-|-self/,"")+e;case 4675:return O+e+W+"flex-line-pack"+c(e,/align-content|flex-|-self/,"")+e;case 5548:return O+e+W+c(e,"shrink","negative")+e;case 5292:return O+e+W+c(e,"basis","preferred-size")+e;case 6060:return O+"box-"+c(e,"-grow","")+O+e+W+c(e,"grow","positive")+e;case 4554:return O+c(e,/([^-])(transform)/g,"$1"+O+"$2")+e;case 6187:return c(c(c(e,/(zoom-|grab)/,O+"$1"),/(image-set)/,O+"$1"),e,"")+e;case 5495:case 3959:return c(e,/(image-set\([^]*)/,O+"$1$`$1");case 4968:return c(c(e,/(.+:)(flex-)?(.*)/,O+"box-pack:$3"+W+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+O+e+e;case 4095:case 3583:case 4068:case 2532:return c(e,/(.+)-inline(.+)/,O+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(v(e)-1-t>6)switch(u(e,t+1)){case 109:if(45!==u(e,t+4))break;case 102:return c(e,/(.+:)(.+)-([^]+)/,"$1"+O+"$2-$3$1"+P+(108==u(e,t+3)?"$3":"$2-$3"))+e;case 115:return~h(e,"stretch")?ne(c(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(115!==u(e,t+1))break;case 6444:switch(u(e,v(e)-3-(~h(e,"!important")&&10))){case 107:return c(e,":",":"+O)+e;case 101:return c(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+O+(45===u(e,14)?"inline-":"")+"box$3$1"+O+"$2$3$1"+W+"$2box$3")+e}break;case 5936:switch(u(e,t+11)){case 114:return O+e+W+c(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return O+e+W+c(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return O+e+W+c(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return O+e+W+e+e}return e}var re=[function(e,t,i,n){if(e.length>-1&&!e.return)switch(e.type){case _:e.return=ne(e.value,e.length);break;case N:return j([$(e,{value:c(e.value,"@","@"+O)})],n);case I:if(e.length)return function(e,t){return e.map(t).join("")}(e.props,(function(t){switch(function(e,t){return(e=/(::plac\w+|:read-\w+)/.exec(e))?e[0]:e}(t)){case":read-only":case":read-write":return j([$(e,{props:[c(t,/:(read-\w+)/,":-moz-$1")]})],n);case"::placeholder":return j([$(e,{props:[c(t,/:(plac\w+)/,":"+O+"input-$1")]}),$(e,{props:[c(t,/:(plac\w+)/,":-moz-$1")]}),$(e,{props:[c(t,/:(plac\w+)/,W+"input-$1")]})],n)}return""}))}}],le=function(e){var t=e.key;if("css"===t){var i=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(i,(function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))}))}var n,r,a=e.stylisPlugins||re,o={},d=[];n=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),(function(e){for(var t=e.getAttribute("data-emotion").split(" "),i=1;i<t.length;i++)o[t[i]]=!0;d.push(e)}));var s,c,h,u,p=[U,(u=function(e){s.insert(e)},function(e){e.root||(e=e.return)&&u(e)})],v=(c=[te,ie].concat(a,p),h=m(c),function(e,t,i,n){for(var r="",l=0;l<h;l++)r+=c[l](e,t,i,n)||"";return r});r=function(e,t,i,n){s=i,j(q(e?e+"{"+t.styles+"}":t.styles),v),n&&(f.inserted[t.name]=!0)};var f={key:t,sheet:new l({key:t,container:n,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:o,registered:{},insert:r};return f.sheet.hydrate(d),f},ae=function(e,t,i){var n=e.key+"-"+t.name;!1===i&&void 0===e.registered[n]&&(e.registered[n]=t.styles)},oe={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function de(e){var t=Object.create(null);return function(i){return void 0===t[i]&&(t[i]=e(i)),t[i]}}var se=/[A-Z]|^ms/g,ce=/_EMO_([^_]+?)_([^]*?)_EMO_/g,he=function(e){return 45===e.charCodeAt(1)},ue=function(e){return null!=e&&"boolean"!=typeof e},pe=de((function(e){return he(e)?e:e.replace(se,"-$&").toLowerCase()})),ve=function(e,t){switch(e){case"animation":case"animationName":if("string"==typeof t)return t.replace(ce,(function(e,t,i){return fe={name:t,styles:i,next:fe},t}))}return 1===oe[e]||he(e)||"number"!=typeof t||0===t?t:t+"px"};function me(e,t,i){if(null==i)return"";if(void 0!==i.__emotion_styles)return i;switch(typeof i){case"boolean":return"";case"object":if(1===i.anim)return fe={name:i.name,styles:i.styles,next:fe},i.name;if(void 0!==i.styles){var n=i.next;if(void 0!==n)for(;void 0!==n;)fe={name:n.name,styles:n.styles,next:fe},n=n.next;return i.styles+";"}return function(e,t,i){var n="";if(Array.isArray(i))for(var r=0;r<i.length;r++)n+=me(e,t,i[r])+";";else for(var l in i){var a=i[l];if("object"!=typeof a)null!=t&&void 0!==t[a]?n+=l+"{"+t[a]+"}":ue(a)&&(n+=pe(l)+":"+ve(l,a)+";");else if(!Array.isArray(a)||"string"!=typeof a[0]||null!=t&&void 0!==t[a[0]]){var o=me(e,t,a);switch(l){case"animation":case"animationName":n+=pe(l)+":"+o+";";break;default:n+=l+"{"+o+"}"}}else for(var d=0;d<a.length;d++)ue(a[d])&&(n+=pe(l)+":"+ve(l,a[d])+";")}return n}(e,t,i);case"function":if(void 0!==e){var r=fe,l=i(e);return fe=r,me(e,t,l)}}if(null==t)return i;var a=t[i];return void 0!==a?a:i}var fe,ge=/label:\s*([^\s;\n{]+)\s*(;|$)/g,xe=function(e,t,i){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var n=!0,r="";fe=void 0;var l=e[0];null==l||void 0===l.raw?(n=!1,r+=me(i,t,l)):r+=l[0];for(var a=1;a<e.length;a++)r+=me(i,t,e[a]),n&&(r+=l[a]);ge.lastIndex=0;for(var o,d="";null!==(o=ge.exec(r));)d+="-"+o[1];var s=function(e){for(var t,i=0,n=0,r=e.length;r>=4;++n,r-=4)t=1540483477*(65535&(t=255&e.charCodeAt(n)|(255&e.charCodeAt(++n))<<8|(255&e.charCodeAt(++n))<<16|(255&e.charCodeAt(++n))<<24))+(59797*(t>>>16)<<16),i=1540483477*(65535&(t^=t>>>24))+(59797*(t>>>16)<<16)^1540483477*(65535&i)+(59797*(i>>>16)<<16);switch(r){case 3:i^=(255&e.charCodeAt(n+2))<<16;case 2:i^=(255&e.charCodeAt(n+1))<<8;case 1:i=1540483477*(65535&(i^=255&e.charCodeAt(n)))+(59797*(i>>>16)<<16)}return(((i=1540483477*(65535&(i^=i>>>13))+(59797*(i>>>16)<<16))^i>>>15)>>>0).toString(36)}(r)+d;return{name:s,styles:r,next:fe}},be=!!n.useInsertionEffect&&n.useInsertionEffect,ye=be||function(e){return e()},we=(be||i.useLayoutEffect,{}.hasOwnProperty),Se=i.createContext("undefined"!=typeof HTMLElement?le({key:"css"}):null);Se.Provider;var He=function(e){return(0,i.forwardRef)((function(t,n){var r=(0,i.useContext)(Se);return e(t,r,n)}))},$e=i.createContext({}),ze="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",Ce=function(e,t){var i={};for(var n in t)we.call(t,n)&&(i[n]=t[n]);return i[ze]=e,i},Le=function(e){var t=e.cache,i=e.serialized,n=e.isStringTag;return ae(t,i,n),ye((function(){return function(e,t,i){ae(e,t,i);var n=e.key+"-"+t.name;if(void 0===e.inserted[t.name]){var r=t;do{e.insert(t===r?"."+n:"",r,e.sheet,!0),r=r.next}while(void 0!==r)}}(t,i,n)})),null},ke=He((function(e,t,n){var r=e.css;"string"==typeof r&&void 0!==t.registered[r]&&(r=t.registered[r]);var l=e[ze],a=[r],o="";"string"==typeof e.className?o=function(e,t,i){var n="";return i.split(" ").forEach((function(i){void 0!==e[i]?t.push(e[i]+";"):n+=i+" "})),n}(t.registered,a,e.className):null!=e.className&&(o=e.className+" ");var d=xe(a,void 0,i.useContext($e));o+=t.key+"-"+d.name;var s={};for(var c in e)we.call(e,c)&&"css"!==c&&c!==ze&&(s[c]=e[c]);return s.ref=n,s.className=o,i.createElement(i.Fragment,null,i.createElement(Le,{cache:t,serialized:d,isStringTag:"string"==typeof l}),i.createElement(l,s))})),Re=(r(35),t.Fragment);function Ge(e,i,n){return we.call(i,"css")?t.jsx(ke,Ce(e,i),n):t.jsx(e,i,n)}function Ze(e,i,n){return we.call(i,"css")?t.jsxs(ke,Ce(e,i),n):t.jsxs(e,i,n)}function Be(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return xe(t)}const Ve={breakpoint:{desktop:"980px",leftCol:"1140px",mobile:"320px",mobileLandscape:"480px",mobileMedium:"375px",phablet:"660px",tablet:"740px",wide:"1300px"},height:{ctaMedium:"44px",ctaSmall:"36px",ctaXSmall:"24px",iconMedium:"30px",iconSmall:"26px",iconXSmall:"20px",inputMedium:"44px",inputXSmall:"24px"},palette:{brand:{100:"#001536",300:"#041F4A",400:"#052962",500:"#0077B6",600:"#506991",800:"#C1D8FC"},brandAlt:{200:"#F3C100",300:"#FFD900",400:"#FFE500"},culture:{50:"#2B2625",100:"#3E3323",200:"#574835",300:"#6B5840",350:"#866D50",400:"#866D50",450:"#A1845C",500:"#EACCA0",600:"#E7D4B9",700:"#EFE8DD",800:"#FBF6EF"},error:{400:"#C70000",500:"#FF9081"},focus:{400:"#0077B6"},labs:{200:"#0C7A73",300:"#65A897",400:"#69D1CA"},lifestyle:{100:"#510043",200:"#650054",300:"#7D0068",400:"#BB3B80",450:"#F37ABC",500:"#FFABDB",600:"#FEC8D3",800:"#FEEEF7"},neutral:{0:"#000000",7:"#121212",10:"#1A1A1A",20:"#333333",38:"#606060",46:"#707070",60:"#999999",86:"#DCDCDC",93:"#EDEDED",97:"#F6F6F6",100:"#FFFFFF"},news:{100:"#660505",200:"#8B0000",300:"#AB0613",400:"#C70000",500:"#FF5943",550:"#FF9081",600:"#FFBAC8",800:"#FFF4F2"},opinion:{100:"#672005",200:"#8D2700",300:"#C74600",400:"#C74600",450:"#E05E00",500:"#FF7F0F",550:"#FF9941",600:"#F9B376",800:"#FEF9F5"},specialReport:{100:"#222527",200:"#303538",300:"#3F464A",400:"#595C5F",450:"#9DA0A2",500:"#ABC2C9",700:"#E4E5E8",800:"#EFF1F2"},specialReportAlt:{100:"#2B2B2A",200:"#B9300A",300:"#FF663D",700:"#EBE6E1",800:"#F5F0EB"},sport:{100:"#003C60",200:"#004E7C",300:"#005689",400:"#0077B6",500:"#00B2FF",600:"#90DCFF",800:"#F1F8FC"},success:{400:"#22874D",500:"#58D08B"}},size:{icon:{medium:"30px",small:"26px",xSmall:"20px"},medium:"44px",small:"36px",xSmall:"24px"},space:{0:"2px",1:"4px",2:"8px",3:"12px",4:"16px",5:"20px",6:"24px",8:"32px",9:"36px",10:"40px",12:"48px",14:"56px",16:"64px",18:"72px",24:"96px"},typography:{body:{medium:{fontFamily:["GuardianTextEgyptian","Guardian Text Egyptian Web","Georgia","serif"],fontSize:"17px",lineHeight:1.4,fontWeight:400},small:{fontFamily:["GuardianTextEgyptian","Guardian Text Egyptian Web","Georgia","serif"],fontSize:"15px",lineHeight:1.4,fontWeight:400},xSmall:{fontFamily:["GuardianTextEgyptian","Guardian Text Egyptian Web","Georgia","serif"],fontSize:"14px",lineHeight:1.4,fontWeight:400}},fontFamily:{body:["GuardianTextEgyptian","Guardian Text Egyptian Web","Georgia","serif"],headline:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],textSans:["GuardianTextSans","Guardian Text Sans Web","Helvetica Neue","Helvetica","Arial","Lucida Grande","sans-serif"],titlepiece:["GT Guardian Titlepiece","Georgia","serif"]},fontSize:{12:"12px",14:"14px",15:"15px",17:"17px",20:"20px",24:"24px",28:"28px",34:"34px",42:"42px",50:"50px",70:"70px"},fontWeight:{bold:700,light:300,medium:500,regular:400},headline:{large:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"42px",lineHeight:1.15,fontWeight:500},medium:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"34px",lineHeight:1.15,fontWeight:500},small:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"28px",lineHeight:1.15,fontWeight:500},xLarge:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"50px",lineHeight:1.15,fontWeight:500},xSmall:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"24px",lineHeight:1.15,fontWeight:500},xxSmall:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"20px",lineHeight:1.15,fontWeight:500},xxxSmall:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"17px",lineHeight:1.15,fontWeight:500}},lineHeight:{loose:1.4,regular:1.3,tight:1.15},presets:{article15:{fontFamily:["GuardianTextEgyptian","Guardian Text Egyptian Web","Georgia","serif"],fontSize:"15px",lineHeight:1.4,fontWeight:400,fontStyle:"normal"},article17:{fontFamily:["GuardianTextEgyptian","Guardian Text Egyptian Web","Georgia","serif"],fontSize:"17px",lineHeight:1.4,fontWeight:400,fontStyle:"normal"},articleBold15:{fontFamily:["GuardianTextEgyptian","Guardian Text Egyptian Web","Georgia","serif"],fontSize:"15px",lineHeight:1.4,fontWeight:700,fontStyle:"normal"},articleBold17:{fontFamily:["GuardianTextEgyptian","Guardian Text Egyptian Web","Georgia","serif"],fontSize:"17px",lineHeight:1.4,fontWeight:700,fontStyle:"normal"},articleBoldItalic15:{fontFamily:["GuardianTextEgyptian","Guardian Text Egyptian Web","Georgia","serif"],fontSize:"15px",lineHeight:1.4,fontWeight:700,fontStyle:"italic"},articleBoldItalic17:{fontFamily:["GuardianTextEgyptian","Guardian Text Egyptian Web","Georgia","serif"],fontSize:"17px",lineHeight:1.4,fontWeight:700,fontStyle:"italic"},articleItalic15:{fontFamily:["GuardianTextEgyptian","Guardian Text Egyptian Web","Georgia","serif"],fontSize:"15px",lineHeight:1.4,fontWeight:400,fontStyle:"italic"},articleItalic17:{fontFamily:["GuardianTextEgyptian","Guardian Text Egyptian Web","Georgia","serif"],fontSize:"17px",lineHeight:1.4,fontWeight:400,fontStyle:"italic"},headlineBold14:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"14px",lineHeight:1.15,fontWeight:700,fontStyle:"normal"},headlineBold17:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"17px",lineHeight:1.15,fontWeight:700,fontStyle:"normal"},headlineBold20:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"20px",lineHeight:1.15,fontWeight:700,fontStyle:"normal"},headlineBold24:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"24px",lineHeight:1.15,fontWeight:700,fontStyle:"normal"},headlineBold28:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"28px",lineHeight:1.15,fontWeight:700,fontStyle:"normal"},headlineBold34:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"34px",lineHeight:1.15,fontWeight:700,fontStyle:"normal"},headlineBold42:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"42px",lineHeight:1.15,fontWeight:700,fontStyle:"normal"},headlineBold50:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"50px",lineHeight:1.15,fontWeight:700,fontStyle:"normal"},headlineBold70:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"70px",lineHeight:1.15,fontWeight:700,fontStyle:"normal"},headlineLight14:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"14px",lineHeight:1.15,fontWeight:300,fontStyle:"normal"},headlineLight17:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"17px",lineHeight:1.15,fontWeight:300,fontStyle:"normal"},headlineLight20:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"20px",lineHeight:1.15,fontWeight:300,fontStyle:"normal"},headlineLight24:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"24px",lineHeight:1.15,fontWeight:300,fontStyle:"normal"},headlineLight28:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"28px",lineHeight:1.15,fontWeight:300,fontStyle:"normal"},headlineLight34:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"34px",lineHeight:1.15,fontWeight:300,fontStyle:"normal"},headlineLight42:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"42px",lineHeight:1.15,fontWeight:300,fontStyle:"normal"},headlineLight50:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"50px",lineHeight:1.15,fontWeight:300,fontStyle:"normal"},headlineLight70:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"70px",lineHeight:1.15,fontWeight:300,fontStyle:"normal"},headlineLightItalic14:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"14px",lineHeight:1.15,fontWeight:300,fontStyle:"italic"},headlineLightItalic17:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"17px",lineHeight:1.15,fontWeight:300,fontStyle:"italic"},headlineLightItalic20:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"20px",lineHeight:1.15,fontWeight:300,fontStyle:"italic"},headlineLightItalic24:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"24px",lineHeight:1.15,fontWeight:300,fontStyle:"italic"},headlineLightItalic28:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"28px",lineHeight:1.15,fontWeight:300,fontStyle:"italic"},headlineLightItalic34:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"34px",lineHeight:1.15,fontWeight:300,fontStyle:"italic"},headlineLightItalic42:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"42px",lineHeight:1.15,fontWeight:300,fontStyle:"italic"},headlineLightItalic50:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"50px",lineHeight:1.15,fontWeight:300,fontStyle:"italic"},headlineLightItalic70:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"70px",lineHeight:1.15,fontWeight:300,fontStyle:"italic"},headlineMedium14:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"14px",lineHeight:1.15,fontWeight:500,fontStyle:"normal"},headlineMedium17:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"17px",lineHeight:1.15,fontWeight:500,fontStyle:"normal"},headlineMedium20:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"20px",lineHeight:1.15,fontWeight:500,fontStyle:"normal"},headlineMedium24:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"24px",lineHeight:1.15,fontWeight:500,fontStyle:"normal"},headlineMedium28:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"28px",lineHeight:1.15,fontWeight:500,fontStyle:"normal"},headlineMedium34:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"34px",lineHeight:1.15,fontWeight:500,fontStyle:"normal"},headlineMedium42:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"42px",lineHeight:1.15,fontWeight:500,fontStyle:"normal"},headlineMedium50:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"50px",lineHeight:1.15,fontWeight:500,fontStyle:"normal"},headlineMedium70:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"70px",lineHeight:1.15,fontWeight:500,fontStyle:"normal"},headlineMediumItalic14:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"14px",lineHeight:1.15,fontWeight:500,fontStyle:"italic"},headlineMediumItalic17:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"17px",lineHeight:1.15,fontWeight:500,fontStyle:"italic"},headlineMediumItalic20:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"20px",lineHeight:1.15,fontWeight:500,fontStyle:"italic"},headlineMediumItalic24:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"24px",lineHeight:1.15,fontWeight:500,fontStyle:"italic"},headlineMediumItalic28:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"28px",lineHeight:1.15,fontWeight:500,fontStyle:"italic"},headlineMediumItalic34:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"34px",lineHeight:1.15,fontWeight:500,fontStyle:"italic"},headlineMediumItalic42:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"42px",lineHeight:1.15,fontWeight:500,fontStyle:"italic"},headlineMediumItalic50:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"50px",lineHeight:1.15,fontWeight:500,fontStyle:"italic"},headlineMediumItalic70:{fontFamily:["GH Guardian Headline","Guardian Egyptian Web","Georgia","serif"],fontSize:"70px",lineHeight:1.15,fontWeight:700,fontStyle:"italic"},textEgyptian14:{fontFamily:["GuardianTextEgyptian","Guardian Text Egyptian Web","Georgia","serif"],fontSize:"14px",lineHeight:1.3,fontWeight:400,fontStyle:"normal"},textEgyptian15:{fontFamily:["GuardianTextEgyptian","Guardian Text Egyptian Web","Georgia","serif"],fontSize:"15px",lineHeight:1.3,fontWeight:400,fontStyle:"normal"},textEgyptian17:{fontFamily:["GuardianTextEgyptian","Guardian Text Egyptian Web","Georgia","serif"],fontSize:"17px",lineHeight:1.3,fontWeight:400,fontStyle:"normal"},textEgyptianBold14:{fontFamily:["GuardianTextEgyptian","Guardian Text Egyptian Web","Georgia","serif"],fontSize:"14px",lineHeight:1.3,fontWeight:700,fontStyle:"normal"},textEgyptianBold15:{fontFamily:["GuardianTextEgyptian","Guardian Text Egyptian Web","Georgia","serif"],fontSize:"15px",lineHeight:1.3,fontWeight:700,fontStyle:"normal"},textEgyptianBold17:{fontFamily:["GuardianTextEgyptian","Guardian Text Egyptian Web","Georgia","serif"],fontSize:"17px",lineHeight:1.3,fontWeight:700,fontStyle:"normal"},textEgyptianBoldItalic14:{fontFamily:["GuardianTextEgyptian","Guardian Text Egyptian Web","Georgia","serif"],fontSize:"14px",lineHeight:1.3,fontWeight:700,fontStyle:"italic"},textEgyptianBoldItalic15:{fontFamily:["GuardianTextEgyptian","Guardian Text Egyptian Web","Georgia","serif"],fontSize:"15px",lineHeight:1.3,fontWeight:700,fontStyle:"italic"},textEgyptianBoldItalic17:{fontFamily:["GuardianTextEgyptian","Guardian Text Egyptian Web","Georgia","serif"],fontSize:"17px",lineHeight:1.3,fontWeight:700,fontStyle:"italic"},textEgyptianItalic14:{fontFamily:["GuardianTextEgyptian","Guardian Text Egyptian Web","Georgia","serif"],fontSize:"14px",lineHeight:1.3,fontWeight:400,fontStyle:"italic"},textEgyptianItalic15:{fontFamily:["GuardianTextEgyptian","Guardian Text Egyptian Web","Georgia","serif"],fontSize:"15px",lineHeight:1.3,fontWeight:400,fontStyle:"italic"},textEgyptianItalic17:{fontFamily:["GuardianTextEgyptian","Guardian Text Egyptian Web","Georgia","serif"],fontSize:"17px",lineHeight:1.3,fontWeight:400,fontStyle:"italic"},textSans12:{fontFamily:["GuardianTextSans","Guardian Text Sans Web","Helvetica Neue","Helvetica","Arial","Lucida Grande","sans-serif"],fontSize:"12px",lineHeight:1.3,fontWeight:400,fontStyle:"normal"},textSans14:{fontFamily:["GuardianTextSans","Guardian Text Sans Web","Helvetica Neue","Helvetica","Arial","Lucida Grande","sans-serif"],fontSize:"14px",lineHeight:1.3,fontWeight:400,fontStyle:"normal"},textSans15:{fontFamily:["GuardianTextSans","Guardian Text Sans Web","Helvetica Neue","Helvetica","Arial","Lucida Grande","sans-serif"],fontSize:"15px",lineHeight:1.3,fontWeight:400,fontStyle:"normal"},textSans17:{fontFamily:["GuardianTextSans","Guardian Text Sans Web","Helvetica Neue","Helvetica","Arial","Lucida Grande","sans-serif"],fontSize:"17px",lineHeight:1.3,fontWeight:400,fontStyle:"normal"},textSans20:{fontFamily:["GuardianTextSans","Guardian Text Sans Web","Helvetica Neue","Helvetica","Arial","Lucida Grande","sans-serif"],fontSize:"20px",lineHeight:1.3,fontWeight:400,fontStyle:"normal"},textSans24:{fontFamily:["GuardianTextSans","Guardian Text Sans Web","Helvetica Neue","Helvetica","Arial","Lucida Grande","sans-serif"],fontSize:"24px",lineHeight:1.3,fontWeight:400,fontStyle:"normal"},textSans28:{fontFamily:["GuardianTextSans","Guardian Text Sans Web","Helvetica Neue","Helvetica","Arial","Lucida Grande","sans-serif"],fontSize:"28px",lineHeight:1.3,fontWeight:400,fontStyle:"normal"},textSans34:{fontFamily:["GuardianTextSans","Guardian Text Sans Web","Helvetica Neue","Helvetica","Arial","Lucida Grande","sans-serif"],fontSize:"34px",lineHeight:1.3,fontWeight:400,fontStyle:"normal"},textSansBold12:{fontFamily:["GuardianTextSans","Guardian Text Sans Web","Helvetica Neue","Helvetica","Arial","Lucida Grande","sans-serif"],fontSize:"12px",lineHeight:1.3,fontWeight:700,fontStyle:"normal"},textSansBold14:{fontFamily:["GuardianTextSans","Guardian Text Sans Web","Helvetica Neue","Helvetica","Arial","Lucida Grande","sans-serif"],fontSize:"14px",lineHeight:1.3,fontWeight:700,fontStyle:"normal"},textSansBold15:{fontFamily:["GuardianTextSans","Guardian Text Sans Web","Helvetica Neue","Helvetica","Arial","Lucida Grande","sans-serif"],fontSize:"15px",lineHeight:1.3,fontWeight:700,fontStyle:"normal"},textSansBold17:{fontFamily:["GuardianTextSans","Guardian Text Sans Web","Helvetica Neue","Helvetica","Arial","Lucida Grande","sans-serif"],fontSize:"17px",lineHeight:1.3,fontWeight:700,fontStyle:"normal"},textSansBold20:{fontFamily:["GuardianTextSans","Guardian Text Sans Web","Helvetica Neue","Helvetica","Arial","Lucida Grande","sans-serif"],fontSize:"20px",lineHeight:1.3,fontWeight:700,fontStyle:"normal"},textSansBold24:{fontFamily:["GuardianTextSans","Guardian Text Sans Web","Helvetica Neue","Helvetica","Arial","Lucida Grande","sans-serif"],fontSize:"24px",lineHeight:1.3,fontWeight:700,fontStyle:"normal"},textSansBold28:{fontFamily:["GuardianTextSans","Guardian Text Sans Web","Helvetica Neue","Helvetica","Arial","Lucida Grande","sans-serif"],fontSize:"28px",lineHeight:1.3,fontWeight:700,fontStyle:"normal"},textSansBold34:{fontFamily:["GuardianTextSans","Guardian Text Sans Web","Helvetica Neue","Helvetica","Arial","Lucida Grande","sans-serif"],fontSize:"34px",lineHeight:1.3,fontWeight:700,fontStyle:"normal"},textSansItalic12:{fontFamily:["GuardianTextSans","Guardian Text Sans Web","Helvetica Neue","Helvetica","Arial","Lucida Grande","sans-serif"],fontSize:"12px",lineHeight:1.3,fontWeight:400,fontStyle:"italic"},textSansItalic14:{fontFamily:["GuardianTextSans","Guardian Text Sans Web","Helvetica Neue","Helvetica","Arial","Lucida Grande","sans-serif"],fontSize:"14px",lineHeight:1.3,fontWeight:400,fontStyle:"italic"},textSansItalic15:{fontFamily:["GuardianTextSans","Guardian Text Sans Web","Helvetica Neue","Helvetica","Arial","Lucida Grande","sans-serif"],fontSize:"15px",lineHeight:1.3,fontWeight:400,fontStyle:"italic"},textSansItalic17:{fontFamily:["GuardianTextSans","Guardian Text Sans Web","Helvetica Neue","Helvetica","Arial","Lucida Grande","sans-serif"],fontSize:"17px",lineHeight:1.3,fontWeight:400,fontStyle:"italic"},textSansItalic20:{fontFamily:["GuardianTextSans","Guardian Text Sans Web","Helvetica Neue","Helvetica","Arial","Lucida Grande","sans-serif"],fontSize:"20px",lineHeight:1.3,fontWeight:400,fontStyle:"italic"},textSansItalic24:{fontFamily:["GuardianTextSans","Guardian Text Sans Web","Helvetica Neue","Helvetica","Arial","Lucida Grande","sans-serif"],fontSize:"24px",lineHeight:1.3,fontWeight:400,fontStyle:"italic"},textSansItalic28:{fontFamily:["GuardianTextSans","Guardian Text Sans Web","Helvetica Neue","Helvetica","Arial","Lucida Grande","sans-serif"],fontSize:"28px",lineHeight:1.3,fontWeight:400,fontStyle:"italic"},textSansItalic34:{fontFamily:["GuardianTextSans","Guardian Text Sans Web","Helvetica Neue","Helvetica","Arial","Lucida Grande","sans-serif"],fontSize:"34px",lineHeight:1.3,fontWeight:400,fontStyle:"italic"},titlepiece42:{fontFamily:["GT Guardian Titlepiece","Georgia","serif"],fontSize:"42px",lineHeight:1.15,fontWeight:700,fontStyle:"normal"},titlepiece50:{fontFamily:["GT Guardian Titlepiece","Georgia","serif"],fontSize:"50px",lineHeight:1.15,fontWeight:700,fontStyle:"normal"},titlepiece70:{fontFamily:["GT Guardian Titlepiece","Georgia","serif"],fontSize:"70px",lineHeight:1.15,fontWeight:700,fontStyle:"normal"}},textDecorationThicknessForFontSize:{12:"2px",14:"2px",15:"2px",17:"2px",20:"3px",24:"3px",28:"3px",34:"4px",42:"5px",50:"6px",70:"6px"},textSans:{large:{fontFamily:["GuardianTextSans","Guardian Text Sans Web","Helvetica Neue","Helvetica","Arial","Lucida Grande","sans-serif"],fontSize:"20px",lineHeight:1.3,fontWeight:400},medium:{fontFamily:["GuardianTextSans","Guardian Text Sans Web","Helvetica Neue","Helvetica","Arial","Lucida Grande","sans-serif"],fontSize:"17px",lineHeight:1.3,fontWeight:400},small:{fontFamily:["GuardianTextSans","Guardian Text Sans Web","Helvetica Neue","Helvetica","Arial","Lucida Grande","sans-serif"],fontSize:"15px",lineHeight:1.3,fontWeight:400},xLarge:{fontFamily:["GuardianTextSans","Guardian Text Sans Web","Helvetica Neue","Helvetica","Arial","Lucida Grande","sans-serif"],fontSize:"24px",lineHeight:1.3,fontWeight:400},xSmall:{fontFamily:["GuardianTextSans","Guardian Text Sans Web","Helvetica Neue","Helvetica","Arial","Lucida Grande","sans-serif"],fontSize:"14px",lineHeight:1.3,fontWeight:400},xxLarge:{fontFamily:["GuardianTextSans","Guardian Text Sans Web","Helvetica Neue","Helvetica","Arial","Lucida Grande","sans-serif"],fontSize:"28px",lineHeight:1.3,fontWeight:400},xxSmall:{fontFamily:["GuardianTextSans","Guardian Text Sans Web","Helvetica Neue","Helvetica","Arial","Lucida Grande","sans-serif"],fontSize:"12px",lineHeight:1.3,fontWeight:400},xxxLarge:{fontFamily:["GuardianTextSans","Guardian Text Sans Web","Helvetica Neue","Helvetica","Arial","Lucida Grande","sans-serif"],fontSize:"34px",lineHeight:1.3,fontWeight:400}},titlepiece:{large:{fontFamily:["GT Guardian Titlepiece","Georgia","serif"],fontSize:"70px",lineHeight:1.15,fontWeight:700},medium:{fontFamily:["GT Guardian Titlepiece","Georgia","serif"],fontSize:"50px",lineHeight:1.15,fontWeight:700},small:{fontFamily:["GT Guardian Titlepiece","Georgia","serif"],fontSize:"42px",lineHeight:1.15,fontWeight:700}}},width:{ctaMedium:"44px",ctaSmall:"36px",ctaXSmall:"24px",iconMedium:"30px",iconSmall:"26px",iconXSmall:"20px",inputXSmall:"24px"}},Ae=e=>e/16,Fe=e=>Number(e.slice(0,-2)),Te=e=>e.map((e=>e.includes(" ")?`"${e}"`:e)).join(", "),Me={xsmall:Fe(Ve.size.xSmall),small:Fe(Ve.size.small),medium:Fe(Ve.size.medium)},Ee=(Ae(Me.xsmall),Ae(Me.small),Ae(Me.medium),{xsmall:Fe(Ve.size.icon.xSmall),small:Fe(Ve.size.icon.small),medium:Fe(Ve.size.icon.medium)}),We={xsmall:Ae(Ee.xsmall),small:Ae(Ee.small),medium:Ae(Ee.medium)},Pe=Me.medium,Oe=Me.small,De=Me.xsmall,Ie=Me.medium,_e=Me.xsmall,Ne=Ee.medium,je=Ee.small,Ue=We.medium,qe=We.small,Xe=Me.medium,Ye=Me.small,Qe=Me.xsmall,Je=Me.xsmall,Ke=Ee.medium,et=Ee.small,tt=Ee.xsmall,it=We.medium,nt=We.small,rt="\n\tposition: absolute;\n\toverflow: hidden; /* gets rid of horizontal scrollbar that appears in some circumstances */\n\twhite-space: nowrap; /* The white-space property forces the content to render on one line. */\n\twidth: 1px;  /* ensures content is announced by VoiceOver. */\n\theight: 1px; /* ensures content is announced by VoiceOver. */\n\tmargin: -1px; /* hide or clip content that does not fit into a 1-pixel visible area. */\n\tpadding: 0; /* hide or clip content that does not fit into a 1-pixel visible area. */\n\tborder: 0;\n\tclip: rect(1px, 1px, 1px, 1px); /* clip removes any visible trace of the element */\n\t-webkit-clip-path: inset(50%); /* clip removes any visible trace of the element */\n\tclip-path: inset(50%); /* clip removes any visible trace of the element */\n",lt={brand:Ve.palette.brand,brandAlt:Ve.palette.brandAlt,neutral:Ve.palette.neutral,error:Ve.palette.error,success:Ve.palette.success,news:Ve.palette.news,opinion:Ve.palette.opinion,sport:Ve.palette.sport,culture:Ve.palette.culture,lifestyle:Ve.palette.lifestyle,labs:Ve.palette.labs,specialReport:Ve.palette.specialReport,specialReportAlt:Ve.palette.specialReportAlt,focus:Ve.palette.focus},{brand:at,brandAlt:ot,neutral:dt,error:st,success:ct,news:ht,opinion:ut,sport:pt,culture:vt,lifestyle:mt,labs:ft,specialReport:gt,focus:xt}=lt,bt=(lt.neutral[100],lt.neutral[97],lt.neutral[10],lt.brand[400],lt.brand[800],lt.neutral[100],lt.brand[500],lt.brand[400],lt.neutral[100],lt.neutral[100],lt.brand[600],lt.brand[300],lt.brandAlt[400],lt.neutral[7],lt.brandAlt[200],lt.neutral[60],lt.neutral[86],lt.success[400],lt.error[400],lt.brand[400],lt.neutral[60],lt.brand[500],lt.brand[500],lt.brand[500],lt.focus[400],lt.brand[600],lt.brand[600],lt.success[500],lt.error[500],lt.neutral[100],lt.brand[800],lt.neutral[100],lt.neutral[100],lt.neutral[7],lt.neutral[86],lt.brand[600],lt.neutral[7],lt.neutral[7],lt.neutral[46],lt.success[400],lt.error[400],lt.neutral[100],lt.brand[400],lt.brand[400],lt.brand[500],lt.neutral[7],lt.neutral[7],lt.neutral[7],lt.neutral[7],lt.neutral[46],lt.brand[400],lt.brand[400],lt.neutral[7],lt.neutral[46],lt.news[550],lt.neutral[100],lt.brand[800],lt.success[500],lt.error[500],lt.brand[400],lt.neutral[100],lt.neutral[100],lt.neutral[100],lt.brandAlt[400],lt.neutral[100],lt.neutral[100],lt.brand[800],lt.neutral[7],lt.neutral[60],lt.neutral[100],lt.neutral[7],lt.neutral[7],lt.neutral[7],{0:Fe(Ve.space[0]),1:Fe(Ve.space[1]),2:Fe(Ve.space[2]),3:Fe(Ve.space[3]),4:Fe(Ve.space[4]),5:Fe(Ve.space[5]),6:Fe(Ve.space[6]),8:Fe(Ve.space[8]),9:Fe(Ve.space[9]),10:Fe(Ve.space[10]),12:Fe(Ve.space[12]),14:Fe(Ve.space[14]),16:Fe(Ve.space[16]),18:Fe(Ve.space[18]),24:Fe(Ve.space[24])}),yt=(Ae(bt[0]),`${Ae(bt[1])}rem`),wt=(Ae(bt[2]),Ae(bt[3]),`${Ae(bt[4])}rem`),St=`${Ae(bt[5])}rem`,Ht=(Ae(bt[6]),Ae(bt[8]),Ae(bt[9]),Ae(bt[10]),Ae(bt[12]),Ae(bt[14]),Ae(bt[16]),Ae(bt[18]),Ae(bt[24]),`\n outline: 0;\n html:not(.src-focus-disabled) & {\n\t box-shadow: 0 0 0 3px ${lt.focus[400]};\n }\n`),$t=`\n outline: 0;\n html:not(.src-focus-disabled) & {\n\toutline: 5px solid ${lt.focus[400]};\n\toutline-offset: 3px;\n }\n`,zt={textSans:{xxsmall:Fe(Ve.typography.textSans.xxSmall.fontSize),xsmall:Fe(Ve.typography.textSans.xSmall.fontSize),small:Fe(Ve.typography.textSans.small.fontSize),medium:Fe(Ve.typography.textSans.medium.fontSize),large:Fe(Ve.typography.textSans.large.fontSize),xlarge:Fe(Ve.typography.textSans.xLarge.fontSize),xxlarge:Fe(Ve.typography.textSans.xxLarge.fontSize),xxxlarge:Fe(Ve.typography.textSans.xxxLarge.fontSize)},body:{xsmall:Fe(Ve.typography.body.xSmall.fontSize),small:Fe(Ve.typography.body.small.fontSize),medium:Fe(Ve.typography.body.medium.fontSize)},headline:{xxxsmall:Fe(Ve.typography.headline.xxxSmall.fontSize),xxsmall:Fe(Ve.typography.headline.xxSmall.fontSize),xsmall:Fe(Ve.typography.headline.xSmall.fontSize),small:Fe(Ve.typography.headline.small.fontSize),medium:Fe(Ve.typography.headline.medium.fontSize),large:Fe(Ve.typography.headline.large.fontSize),xlarge:Fe(Ve.typography.headline.xLarge.fontSize)},titlepiece:{small:Fe(Ve.typography.titlepiece.small.fontSize),medium:Fe(Ve.typography.titlepiece.medium.fontSize),large:Fe(Ve.typography.titlepiece.large.fontSize)}},Ct={textSans:{xxsmall:Ae(zt.textSans.xxsmall),xsmall:Ae(zt.textSans.xsmall),small:Ae(zt.textSans.small),medium:Ae(zt.textSans.medium),large:Ae(zt.textSans.large),xlarge:Ae(zt.textSans.xlarge),xxlarge:Ae(zt.textSans.xxlarge),xxxlarge:Ae(zt.textSans.xxxlarge)},body:{xsmall:Ae(zt.body.xsmall),small:Ae(zt.body.small),medium:Ae(zt.body.medium)},headline:{xxxsmall:Ae(zt.headline.xxxsmall),xxsmall:Ae(zt.headline.xxsmall),xsmall:Ae(zt.headline.xsmall),small:Ae(zt.headline.small),medium:Ae(zt.headline.medium),large:Ae(zt.headline.large),xlarge:Ae(zt.headline.xlarge)},titlepiece:{small:Ae(zt.titlepiece.small),medium:Ae(zt.titlepiece.medium),large:Ae(zt.titlepiece.large)}},Lt={titlepiece:Te(Ve.typography.fontFamily.titlepiece),headline:Te(Ve.typography.fontFamily.headline),body:Te(Ve.typography.fontFamily.body),textSans:Te(Ve.typography.fontFamily.textSans)},kt={tight:Ve.typography.lineHeight.tight,regular:Ve.typography.lineHeight.regular,loose:Ve.typography.lineHeight.loose},Rt={light:Ve.typography.fontWeight.light,regular:Ve.typography.fontWeight.regular,medium:Ve.typography.fontWeight.medium,bold:Ve.typography.fontWeight.bold},Gt={titlepiece:{bold:!0},headline:{light:!0,medium:!0,bold:!0},body:{regular:!0,bold:!0},textSans:{regular:!0,bold:!0}},Zt={titlepiece:{bold:!1},headline:{light:!0,medium:!0,bold:!1},body:{regular:!0,bold:!0},textSans:{regular:!0,bold:!1}},Bt={textSans:{xxsmall:Fe(Ve.typography.textDecorationThicknessForFontSize[12]),xsmall:Fe(Ve.typography.textDecorationThicknessForFontSize[14]),small:Fe(Ve.typography.textDecorationThicknessForFontSize[15]),medium:Fe(Ve.typography.textDecorationThicknessForFontSize[17]),large:Fe(Ve.typography.textDecorationThicknessForFontSize[20]),xlarge:Fe(Ve.typography.textDecorationThicknessForFontSize[24]),xxlarge:Fe(Ve.typography.textDecorationThicknessForFontSize[28]),xxxlarge:Fe(Ve.typography.textDecorationThicknessForFontSize[34])},body:{xsmall:Fe(Ve.typography.textDecorationThicknessForFontSize[14]),small:Fe(Ve.typography.textDecorationThicknessForFontSize[15]),medium:Fe(Ve.typography.textDecorationThicknessForFontSize[17])},headline:{xxxsmall:Fe(Ve.typography.textDecorationThicknessForFontSize[17]),xxsmall:Fe(Ve.typography.textDecorationThicknessForFontSize[20]),xsmall:Fe(Ve.typography.textDecorationThicknessForFontSize[24]),small:Fe(Ve.typography.textDecorationThicknessForFontSize[28]),medium:Fe(Ve.typography.textDecorationThicknessForFontSize[34]),large:Fe(Ve.typography.textDecorationThicknessForFontSize[42]),xlarge:Fe(Ve.typography.textDecorationThicknessForFontSize[50])},titlepiece:{small:Fe(Ve.typography.textDecorationThicknessForFontSize[42]),medium:Fe(Ve.typography.textDecorationThicknessForFontSize[50]),large:Fe(Ve.typography.textDecorationThicknessForFontSize[70])}},Vt=(e,t)=>{switch(e){case"italic":return t?"italic":void 0;case"normal":return"normal";default:return}},At=(e,t,i)=>n=>{const r={...i,...n},l=Number(zt[e][t]),a=Number(Ct[e][t]),o=Zt[e]?.[r.fontWeight]??!1,d=Gt[e]?.[r.fontWeight]?Rt[r.fontWeight]:void 0;return{lineHeight:"px"===r.unit?kt[r.lineHeight]*l+"px":kt[r.lineHeight],fontWeight:d,fontSize:"px"===r.unit?l:`${a}rem`,fontFamily:Lt[e],textDecorationThickness:Number(Bt[e][t]),fontStyle:Vt(r.fontStyle,o)}},Ft=e=>t=>{const{fontFamily:i,fontSize:n,fontStyle:r,fontWeight:l,lineHeight:a,textDecorationThickness:o}=e(t);return`\n\t\t\tfont-family: ${i};\n\t\t\tfont-size: ${"number"==typeof n?`${n}px`:n};\n\t\t\tline-height: ${a};\n\t\t\t${l?`font-weight: ${l};`:""}\n\t\t\t${r?`font-style: ${r};`:""}\n\t\t\t--source-text-decoration-thickness: ${void 0===o?"auto":`${o}px`};\n\t\t`},Tt={lineHeight:"tight",fontWeight:"bold",fontStyle:null,unit:"rem"},Mt={small:At("titlepiece","small",Tt),medium:At("titlepiece","medium",Tt),large:At("titlepiece","large",Tt)},Et={lineHeight:"tight",fontWeight:"medium",fontStyle:null,unit:"rem"},Wt={xxxsmall:At("headline","xxxsmall",Et),xxsmall:At("headline","xxsmall",Et),xsmall:At("headline","xsmall",Et),small:At("headline","small",Et),medium:At("headline","medium",Et),large:At("headline","large",Et),xlarge:At("headline","xlarge",Et)},Pt={lineHeight:"loose",fontWeight:"regular",fontStyle:null,unit:"rem"},Ot={xsmall:At("body","xsmall",Pt),small:At("body","small",Pt),medium:At("body","medium",Pt)},Dt={lineHeight:"regular",fontWeight:"regular",fontStyle:null,unit:"rem"},It={xxsmall:At("textSans","xxsmall",Dt),xsmall:At("textSans","xsmall",Dt),small:At("textSans","small",Dt),medium:At("textSans","medium",Dt),large:At("textSans","large",Dt),xlarge:At("textSans","xlarge",Dt),xxlarge:At("textSans","xxlarge",Dt),xxxlarge:At("textSans","xxxlarge",Dt)},_t=(Ft(Mt.small),Ft(Mt.medium),Ft(Mt.large),{xxxsmall:Ft(Wt.xxxsmall),xxsmall:Ft(Wt.xxsmall),xsmall:Ft(Wt.xsmall),small:Ft(Wt.small),medium:Ft(Wt.medium),large:Ft(Wt.large),xlarge:Ft(Wt.xlarge)}),Nt=(Ft(Ot.xsmall),Ft(Ot.small),Ft(Ot.medium),{xxsmall:Ft(It.xxsmall),xsmall:Ft(It.xsmall),small:Ft(It.small),medium:Ft(It.medium),large:Ft(It.large),xlarge:Ft(It.xlarge),xxlarge:Ft(It.xxlarge),xxxlarge:Ft(It.xxxlarge)}),jt=".2s cubic-bezier(.64, .57, .67, 1.53)",Ut=".3s ease-in-out",qt={mobile:Fe(Ve.breakpoint.mobile),mobileMedium:Fe(Ve.breakpoint.mobileMedium),mobileLandscape:Fe(Ve.breakpoint.mobileLandscape),phablet:Fe(Ve.breakpoint.phablet),tablet:Fe(Ve.breakpoint.tablet),desktop:Fe(Ve.breakpoint.desktop),leftCol:Fe(Ve.breakpoint.leftCol),wide:Fe(Ve.breakpoint.wide)},Xt=e=>`@media (min-width: ${e}px)`,Yt=e=>`@media (max-width: ${e-.1+"px"})`,Qt=(e,t)=>`@media (min-width: ${e}px) and (max-width: ${t-.1+"px"})`,Jt={mobile:Xt(qt.mobile),mobileMedium:Xt(qt.mobileMedium),mobileLandscape:Xt(qt.mobileLandscape),phablet:Xt(qt.phablet),tablet:Xt(qt.tablet),desktop:Xt(qt.desktop),leftCol:Xt(qt.leftCol),wide:Xt(qt.wide)},Kt={mobile:Yt(qt.mobile),mobileMedium:Yt(qt.mobileMedium),mobileLandscape:Yt(qt.mobileLandscape),phablet:Yt(qt.phablet),tablet:Yt(qt.tablet),desktop:Yt(qt.desktop),leftCol:Yt(qt.leftCol),wide:Yt(qt.wide)},ei={mobile:{and:{mobileMedium:Qt(qt.mobile,qt.mobileMedium),mobileLandscape:Qt(qt.mobile,qt.mobileLandscape),phablet:Qt(qt.mobile,qt.phablet),tablet:Qt(qt.mobile,qt.tablet),desktop:Qt(qt.mobile,qt.desktop),leftCol:Qt(qt.mobile,qt.leftCol),wide:Qt(qt.mobileMedium,qt.wide)}},mobileMedium:{and:{mobileLandscape:Qt(qt.mobileMedium,qt.mobileLandscape),phablet:Qt(qt.mobileMedium,qt.phablet),tablet:Qt(qt.mobileMedium,qt.tablet),desktop:Qt(qt.mobileMedium,qt.desktop),leftCol:Qt(qt.mobileMedium,qt.leftCol),wide:Qt(qt.mobileMedium,qt.wide)}},mobileLandscape:{and:{phablet:Qt(qt.mobileLandscape,qt.phablet),tablet:Qt(qt.mobileLandscape,qt.tablet),desktop:Qt(qt.mobileLandscape,qt.desktop),leftCol:Qt(qt.mobileLandscape,qt.leftCol),wide:Qt(qt.mobileLandscape,qt.wide)}},phablet:{and:{tablet:Qt(qt.phablet,qt.tablet),desktop:Qt(qt.phablet,qt.desktop),leftCol:Qt(qt.phablet,qt.leftCol),wide:Qt(qt.phablet,qt.wide)}},tablet:{and:{desktop:Qt(qt.tablet,qt.desktop),leftCol:Qt(qt.tablet,qt.leftCol),wide:Qt(qt.tablet,qt.wide)}},desktop:{and:{leftCol:Qt(qt.desktop,qt.leftCol),wide:Qt(qt.desktop,qt.wide)}},leftCol:{and:{wide:Qt(qt.leftCol,qt.wide)}}},ti=(lt.neutral[100],lt.neutral[7],"\n\tpadding: 0;\n"),ii="\n\tborder: 0;\n\tpadding: 0;\n\tmargin: 0;\n",ni="(appearance: none) or (-webkit-appearance: none) or (-moz-appearance: none)";let ri=0;const li=()=>"src-component-"+ri++,ai=e=>`${e}_description`,oi=({size:e,theme:t})=>Ge("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Ge("path",{fillRule:"evenodd",clipRule:"evenodd",d:"m2.57 21.429 17.1-17.124L18.387 3l-4.844 4.844c-.82-1.887-2.616-3.194-4.693-3.194-2.923 0-5.3 2.355-5.3 5.25C2.072 10.557 1 12.08 1 13.65a4.007 4.007 0 0 0 2.893 3.844l-2.618 2.618 1.295 1.317Zm5.71-3.76c1.767.007 3.693.008 4.237-.019l.032-.002h3.7l.001.002H19a4 4 0 0 0 0-8c-.53 0-1.06.097-1.55.3a4.532 4.532 0 0 0-.763-.687l-1.093 1.093A3.074 3.074 0 0 1 17 12.15a2.56 2.56 0 0 1 2-1 2.5 2.5 0 1 1 0 5h-1.5v-.001h-7.333v.001H9.8l-1.52 1.52Zm4.07-8.632c-.437-1.6-1.786-2.887-3.5-2.887-2.101 0-3.8 1.679-3.8 3.75 0 .699.231 1.323.468 1.965l.032.085-.6.2-.45-1c-1.072.293-2 1.352-2 2.5 0 1.383 1.101 2.5 2.5 2.5h.237l7.113-7.113Z",fill:t?.fill})}),di=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge(oi,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"No wifi"}):""]}),si=({size:e,theme:t})=>Ge("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Ge("path",{fillRule:"evenodd",clipRule:"evenodd",d:"m9.407 2.05.983 12.848h2.712l1.017-12.847L13.136 1H10.39l-.983 1.05Zm5.017 18.272c0-1.491-1.22-2.712-2.746-2.712C10.22 17.61 9 18.83 9 20.322 9 21.78 10.22 23 11.678 23c1.491 0 2.746-1.22 2.746-2.678Z",fill:t?.fill})}),ci=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge(si,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"Exclamation mark"}):""]}),hi=({size:e,theme:t})=>Ge("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Ge("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.848 20.06c1 .304 2.061.455 3.152.455 5.515 0 10-4.151 10-9.242C22 6.152 17.515 2 12 2S2 6.152 2 11.273c0 2.606 1.182 4.97 3.06 6.636V22l3.788-1.94Zm1.637-8.302 2.576 2.666 5.454-5.727-4.97 2.727-2.575-2.666-5.455 5.727 4.97-2.727Z",fill:t?.fill})}),ui=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge(hi,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"Facebook Messenger logo"}):""]}),pi=({size:e,theme:t})=>Ge("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Ge("path",{d:"M12 2C6.467 2 2 6.467 2 12s4.467 10 10 10 10-4.467 10-10S17.533 2 12 2Zm1.133 13.933v.49c-.11.088-.266.155-.422.244a12.49 12.49 0 0 1-.511.2 2.347 2.347 0 0 1-.533.133 4.344 4.344 0 0 1-.511.044c-.356 0-.578-.066-.712-.2a.577.577 0 0 1-.222-.444c0-.178.022-.356.045-.533.022-.178.066-.356.11-.578l.934-4.245-.867-.2v-.466c.134-.045.312-.111.556-.178.222-.067.467-.111.733-.156.267-.044.511-.088.756-.11.244-.023.467-.045.667-.045l.244.155-1.244 5.89h.977Zm.423-7.466c-.2.177-.49.266-.823.266-.31 0-.577-.089-.8-.266a.878.878 0 0 1-.31-.69c0-.31.11-.555.31-.733.2-.177.467-.266.8-.266.356 0 .623.089.823.266.2.178.31.423.31.734-.022.289-.11.51-.31.689Z",fill:t?.fill})}),vi=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge(pi,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"Information"}):""]}),mi=({size:e,theme:t})=>Ge("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Ge("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M21.075 12.35v-.7L5.475 5.2l-.575.45v12.7l.575.4 15.6-6.4Z",fill:t?.fill})}),fi=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge(mi,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"Play"}):""]}),gi=({size:e})=>Ze("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:[Ge("path",{d:"M18.108 7.573a9.717 9.717 0 0 1-.057.328c-.738 3.789-3.262 5.097-6.486 5.097H9.923a.797.797 0 0 0-.788.676l-.84 5.33-.238 1.51A.42.42 0 0 0 8.47 21h2.912a.7.7 0 0 0 .692-.59l.028-.148.548-3.48.036-.19a.7.7 0 0 1 .692-.592h.435c2.82 0 5.029-1.145 5.674-4.459.27-1.384.13-2.54-.583-3.353a2.784 2.784 0 0 0-.797-.615Z",fill:"#A7B4C8"}),Ge("path",{d:"M17.336 7.265a5.83 5.83 0 0 0-.718-.159 9.116 9.116 0 0 0-1.447-.105h-4.385a.697.697 0 0 0-.691.591l-.933 5.91-.027.171a.797.797 0 0 1 .788-.675h1.641c3.224 0 5.748-1.309 6.486-5.097.022-.112.04-.221.058-.328a3.935 3.935 0 0 0-.772-.308Z",fill:"#041F4A"}),Ge("path",{d:"M10.095 7.592a.697.697 0 0 1 .691-.59h4.385c.52 0 1.005.033 1.447.105a5.807 5.807 0 0 1 .883.21c.218.073.42.158.607.256.22-1.4-.001-2.353-.758-3.216C16.515 3.407 15.01 3 13.082 3H7.487a.8.8 0 0 0-.79.676l-2.33 14.772a.48.48 0 0 0 .473.556h3.454l.868-5.503.933-5.909Z",fill:"#052962"})]}),xi=({size:e,isAnnouncedByScreenReader:t=!1})=>Ze(Re,{children:[Ge(gi,{size:e}),t?Ge("span",{css:Be`
					${rt}
				`,children:"PayPal logo"}):""]}),bi={textLabel:lt.neutral[7],textBody:lt.neutral[7],textCta:lt.neutral[7],border:lt.neutral[60],iconFill:lt.neutral[7]},yi={accordion:{textPrimary:lt.neutral[7],borderPrimary:lt.neutral[60]}},wi=e=>{const t={};return e?.textPrimary&&(t.textLabel=e.textPrimary,t.textBody=e.textPrimary,t.textCta=e.textPrimary),e?.borderPrimary&&(t.border=e.borderPrimary),t},Si={readerRevenue:{ctaPrimary:at[400],ctaTertiary:at[400]},readerRevenueBrand:{ctaPrimary:at[400],ctaTertiary:ot[400]},readerRevenueBrandAlt:{ctaPrimary:dt[100],ctaTertiary:dt[7]}},Hi={readerRevenue:{ctaPrimary:ot[400],ctaPrimaryHover:"#FFD213",ctaTertiaryHover:"#E5E5E5"},readerRevenueBrand:{ctaPrimary:ot[400],ctaPrimaryHover:"#FFD213",ctaTertiaryHover:at[300]},readerRevenueBrandAlt:{ctaPrimary:dt[7],ctaPrimaryHover:"#454545",ctaTertiaryHover:"#FFD213"}},$i={readerRevenue:{ctaTertiary:at[400]},readerRevenueBrand:{ctaTertiary:ot[400]},readerRevenueBrandAlt:{ctaTertiary:dt[7]}},zi={textPrimary:Si.readerRevenue.ctaPrimary,backgroundPrimary:Hi.readerRevenue.ctaPrimary,backgroundPrimaryHover:Hi.readerRevenue.ctaPrimaryHover,textTertiary:Si.readerRevenue.ctaTertiary,backgroundTertiaryHover:Hi.readerRevenue.ctaTertiaryHover,borderTertiary:$i.readerRevenue.ctaTertiary},Ci={textPrimary:Si.readerRevenueBrand.ctaPrimary,backgroundPrimary:Hi.readerRevenueBrand.ctaPrimary,backgroundPrimaryHover:Hi.readerRevenueBrand.ctaPrimaryHover,textTertiary:Si.readerRevenueBrand.ctaTertiary,backgroundTertiaryHover:Hi.readerRevenueBrand.ctaTertiaryHover,borderTertiary:$i.readerRevenueBrand.ctaTertiary},Li={textPrimary:Si.readerRevenueBrandAlt.ctaPrimary,backgroundPrimary:Hi.readerRevenueBrandAlt.ctaPrimary,backgroundPrimaryHover:Hi.readerRevenueBrandAlt.ctaPrimaryHover,textTertiary:Si.readerRevenueBrandAlt.ctaTertiary,backgroundTertiaryHover:Hi.readerRevenueBrandAlt.ctaTertiaryHover,borderTertiary:$i.readerRevenueBrandAlt.ctaTertiary},ki={button:zi},Ri={button:Ci},Gi={button:Li},Zi={button:{textPrimary:lt.neutral[100],backgroundPrimary:lt.brand[400],backgroundPrimaryHover:"#234B8A",textSecondary:lt.brand[400],backgroundSecondary:lt.brand[800],backgroundSecondaryHover:"#ACC9F7",textTertiary:lt.brand[400],backgroundTertiaryHover:"#E5E5E5",borderTertiary:lt.brand[400],textSubdued:lt.brand[400]}},Bi={button:{textPrimary:lt.brand[400],backgroundPrimary:lt.neutral[100],backgroundPrimaryHover:"#E0E0E0",textSecondary:lt.neutral[100],backgroundSecondary:lt.brand[600],backgroundSecondaryHover:"#234B8A",textTertiary:lt.neutral[100],backgroundTertiaryHover:lt.brand[300],borderTertiary:lt.neutral[100],textSubdued:lt.neutral[100]}},Vi={button:{textPrimary:lt.neutral[100],backgroundPrimary:lt.neutral[7],backgroundPrimaryHover:"#454545",textSecondary:lt.neutral[7],backgroundSecondary:lt.brandAlt[200],backgroundSecondaryHover:"#F2AE00",textTertiary:lt.neutral[0],backgroundTertiaryHover:"#FFD213",borderTertiary:lt.neutral[7],textSubdued:lt.neutral[7]}},Ai={textPrimary:lt.neutral[100],backgroundPrimary:lt.brand[400],backgroundPrimaryHover:"#234B8A",textSecondary:lt.brand[400],backgroundSecondary:lt.brand[800],backgroundSecondaryHover:"#ACC9F7",textTertiary:lt.brand[400],backgroundTertiary:"transparent",backgroundTertiaryHover:"#E5E5E5",borderTertiary:lt.brand[400],textSubdued:lt.brand[400]},Fi={textPrimary:lt.brand[400],backgroundPrimary:lt.neutral[100],backgroundPrimaryHover:"#E0E0E0",textSecondary:lt.neutral[100],backgroundSecondary:lt.brand[600],backgroundSecondaryHover:"#234B8A",textTertiary:lt.neutral[100],backgroundTertiary:"transparent",backgroundTertiaryHover:lt.brand[300],borderTertiary:lt.neutral[100],textSubdued:lt.neutral[100]},Ti={textPrimary:lt.neutral[100],backgroundPrimary:lt.neutral[7],backgroundPrimaryHover:"#454545",textSecondary:lt.neutral[7],backgroundSecondary:lt.brandAlt[200],backgroundSecondaryHover:"#F2AE00",textTertiary:lt.neutral[0],backgroundTertiary:"transparent",backgroundTertiaryHover:"#FFD213",borderTertiary:lt.neutral[7],textSubdued:lt.neutral[7]},Mi={label:{textLabel:lt.neutral[7],textOptional:lt.neutral[46],textSupporting:lt.neutral[46],textError:lt.error[400],textSuccess:lt.success[400]}},Ei={label:{textLabel:lt.neutral[100],textOptional:lt.brand[800],textSupporting:lt.brand[800],textError:lt.error[500],textSuccess:lt.success[500]}},Wi={textLabel:lt.neutral[7],textOptional:lt.neutral[46],textSupporting:lt.neutral[46],textError:lt.error[400],textSuccess:lt.success[400]},Pi={textLabel:lt.neutral[100],textOptional:lt.brand[800],textSupporting:lt.brand[800],textError:lt.error[500],textSuccess:lt.success[500]},Oi={userFeedback:{textSuccess:lt.success[400],textError:lt.error[400]}},Di={userFeedback:{textSuccess:lt.success[500],textError:lt.error[500]}},Ii={textSuccess:lt.success[400],textError:lt.error[400]},_i={textSuccess:lt.success[500],textError:lt.error[500]},Ni={borderUnselected:lt.neutral[46],borderHover:lt.brand[500],borderSelected:lt.brand[500],borderError:lt.error[400],fillSelected:lt.brand[500],fillUnselected:"transparent",textLabel:lt.neutral[7],textSupporting:lt.neutral[46],textIndeterminate:lt.neutral[46]},ji={...Wi},Ui={borderUnselected:lt.brand[800],borderSelected:lt.neutral[100],borderHover:lt.neutral[100],borderError:lt.error[500],fillSelected:lt.neutral[100],fillUnselected:"transparent",textLabel:lt.neutral[100],textSupporting:lt.brand[800],textIndeterminate:lt.brand[800]},qi={...Pi},Xi={checkbox:{border:lt.neutral[46],borderHover:lt.brand[500],borderChecked:lt.brand[500],borderError:lt.error[400],backgroundChecked:lt.brand[500],textLabel:lt.neutral[7],textLabelSupporting:lt.neutral[46],textIndeterminate:lt.neutral[46]},...Oi,...Mi},Yi={checkbox:{border:lt.brand[800],borderHover:lt.neutral[100],borderChecked:lt.neutral[100],borderError:lt.error[500],backgroundChecked:lt.neutral[100],textLabel:lt.neutral[100],textLabelSupporting:lt.brand[800],textIndeterminate:lt.brand[800]},...Di,...Ei},Qi=e=>{const t={};return e?.backgroundChecked&&(t.fillSelected=e.backgroundChecked),e?.borderChecked&&(t.borderSelected=e.borderChecked),e?.border&&(t.borderUnselected=e.border),e?.textLabelSupporting&&(t.textSupporting=e.textLabelSupporting),{...t,...e}},Ji={textUnselected:lt.neutral[46],textSelected:lt.brand[400],textHover:lt.brand[500],textError:lt.error[400],borderUnselected:lt.neutral[46],borderSelected:lt.brand[500],borderHover:lt.brand[500],borderError:lt.error[400],backgroundUnselected:"transparent",backgroundHover:"transparent",backgroundSelected:"#E3F6FF",backgroundTick:lt.brand[500]},Ki={...Wi},en={choiceCard:{textLabel:lt.neutral[46],textLabelSupporting:lt.neutral[46],textGroupLabel:lt.neutral[7],textGroupLabelSupporting:lt.neutral[46],border:lt.neutral[46],textChecked:lt.brand[400],backgroundChecked:"#E3F6FF",backgroundTick:lt.brand[500],borderChecked:lt.brand[500],textHover:lt.brand[500],borderHover:lt.brand[500],textError:lt.error[400],borderError:lt.error[400]},...Oi},tn=e=>{const t={};return e?.textLabel&&(t.textUnselected=e.textLabel),e?.textChecked&&(t.textSelected=e.textChecked),e?.border&&(t.borderUnselected=e.border),e?.borderChecked&&(t.borderSelected=e.borderChecked),e?.backgroundChecked&&(t.backgroundSelected=e.backgroundChecked),{...t,...e}},nn={link:{textPrimary:lt.brand[500],textPrimaryHover:lt.brand[500],textSecondary:lt.neutral[7],textSecondaryHover:lt.neutral[7]}},rn={link:{textPrimary:lt.neutral[100],textPrimaryHover:lt.neutral[100]}},ln={link:{textPrimary:lt.neutral[7],textPrimaryHover:lt.neutral[7]}},an={textPrimary:lt.brand[500],textPrimaryHover:lt.brand[500],textSecondary:lt.neutral[7],textSecondaryHover:lt.neutral[7]},on={textPrimary:lt.neutral[100],textPrimaryHover:lt.neutral[100]},dn={textPrimary:lt.neutral[7],textPrimaryHover:lt.neutral[7]},sn={borderSelected:lt.brand[500],borderUnselected:lt.neutral[46],borderHover:lt.brand[500],borderError:lt.error[400],fillSelected:lt.brand[500],fillUnselected:"transparent",textLabel:lt.neutral[7],textSupporting:lt.neutral[46]},cn={borderHover:lt.brand[500],borderError:lt.error[400],...Wi},hn={borderSelected:lt.neutral[100],borderUnselected:lt.brand[800],borderHover:lt.neutral[100],borderError:lt.error[500],fillSelected:lt.neutral[100],fillUnselected:"transparent",textLabel:lt.neutral[100],textSupporting:lt.brand[800]},un={borderHover:lt.neutral[100],borderError:lt.error[500],...Pi},pn=e=>{const t={};return e?.backgroundChecked&&(t.fillSelected=e.backgroundChecked,t.borderSelected=e.backgroundChecked),e?.border&&(t.borderUnselected=e.border),e?.textLabelSupporting&&(t.textLabel=e.textLabelSupporting),{...t,...e}},vn={radio:{borderHover:lt.focus[400],border:lt.neutral[60],backgroundChecked:lt.focus[400],textLabel:lt.neutral[7],textLabelSupporting:lt.neutral[46],borderError:lt.error[400]},...Mi,...Oi},mn={radio:{borderHover:lt.neutral[100],border:lt.brand[800],backgroundChecked:lt.neutral[100],textLabel:lt.neutral[100],textLabelSupporting:lt.brand[800],borderError:lt.error[500]},...Ei,...Di},fn={select:{textUserInput:lt.neutral[7],textLabel:lt.neutral[7],textLabelOptional:lt.neutral[46],textLabelSupporting:lt.neutral[46],textError:lt.neutral[7],textSuccess:lt.success[400],backgroundInput:lt.neutral[100],border:lt.neutral[46],borderActive:lt.focus[400],borderError:lt.error[400],borderSuccess:lt.success[400]},...Oi},gn={textUserInput:lt.neutral[7],textLabel:lt.neutral[7],textOptional:lt.neutral[46],textSupporting:lt.neutral[46],textError:lt.neutral[7],textSuccess:lt.success[400],backgroundInput:lt.neutral[100],border:lt.neutral[46],borderActive:lt.focus[400],borderError:lt.error[400],borderSuccess:lt.success[400],iconFill:lt.neutral[7]},xn=e=>{const t={};return e?.textLabelSupporting&&(t.textSupporting=e.textLabelSupporting),e?.textLabelOptional&&(t.textOptional=e.textLabelOptional),e?.textUserInput&&(t.iconFill=e.textUserInput),{...t,...e}},bn={textUserInput:lt.neutral[7],textLabel:lt.neutral[7],textOptional:lt.neutral[46],textSupporting:lt.neutral[46],textError:lt.neutral[7],textSuccess:lt.success[400],backgroundInput:lt.neutral[100],border:lt.neutral[46],borderError:lt.error[400],borderSuccess:lt.success[400]},yn={textInput:{textUserInput:lt.neutral[7],textLabel:lt.neutral[7],textLabelOptional:lt.neutral[46],textLabelSupporting:lt.neutral[46],textError:lt.neutral[7],textSuccess:lt.success[400],backgroundInput:lt.neutral[100],border:lt.neutral[46],borderActive:lt.focus[400],borderError:lt.error[400],borderSuccess:lt.success[400]},...Oi},wn=di,Sn=ci,Hn=ui,$n=vi,zn=fi,Cn=xi,Ln=(e,t,i,n)=>({...e,...n?n(i):i,...t}),kn=e=>Be`
	border-top: 1px solid ${e.border};
`,Rn=Be`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: ${yt} 0 ${St} 0;
	cursor: pointer;
`,Gn=Be`
	${_t.xxxsmall({fontWeight:"bold"})};
	margin-right: ${wt};
`,Zn=e=>Be`
	/*
	TODO:
	Hardcoded max-height because auto is invalid.
	If content is longer, we'll need to set overflow: auto
	but only after max-height has been reached.
	Otherwise, for short content we'll always see a flash
	of a scrollbar as the row height is transitioning
	*/
	color: ${e.textBody};
	max-height: 500px;
	transition: max-height ${Ut};
	overflow: hidden;
	height: auto;
	padding-bottom: ${St};
`,Bn=Be`
	max-height: 0;
	/*
	TODO:
	This transition is being ignored as the hidden
	attribute is applied immediately

	transition: max-height ${jt};
	*/
	overflow: hidden;
`,Vn=Be`
	${Bn};
`,An=Be`
	width: auto;
	display: flex;
	align-items: center;
`,Fn=e=>Be`
	${Nt.small({fontWeight:"bold"})};
	color: ${e.textLabel};
	${Kt.tablet} {
		${rt}
	}
`,Tn=Be`
	svg {
		/* TODO: think about icon sizing */
		width: 18px;
		height: 18px;

		${Jt.tablet} {
			width: 26px;
			height: 26px;
		}
		margin-left: ${yt};
		transition: ${jt};
	}
`,Mn=Be`
	${Tn};
	svg {
		transform: translate(0, 0);
		transition: transform ${jt};
	}

	&:hover,
	&:focus {
		svg {
			transform: translate(0, ${bt[1]/2}px);
		}
	}
`,En=Be`
	${Tn};
	svg {
		transform: rotate(180deg);
		transition: transform ${jt};
	}
`,Wn=Be`
	svg {
		width: 18px;
		height: 18px;
	}
`,Pn=({hideToggleLabel:e=!1,children:t,cssOverrides:n,theme:r,...l})=>{const a=e=>Ln(bi,r,e,wi);return Ge("div",{css:e=>{return[(t=a(e.accordion),Be`
	border-bottom: 1px solid ${t.border};
`),n];var t},...l,children:i.Children.map(t,(t=>(0,i.cloneElement)(t,{hideToggleLabel:e})))})},On=({size:e,theme:t})=>Ge("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Ge("path",{fillRule:"evenodd",clipRule:"evenodd",d:"m1 7.224 10.498 10.498h1.004L23 7.224l-.98-.954L12 14.708 1.98 6.27 1 7.224Z",fill:t?.fill})}),Dn=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge(On,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"Expand to show more"}):""]}),In=Be`
	${rt}
`,_n=({label:e,hideToggleLabel:t=!1,children:i,cssOverrides:n,theme:r,...l})=>{const a=e=>Ln(bi,r,e,wi);return Ge("div",{css:e=>[kn(a(e.accordion)),n],...l,children:Ze("label",{children:[Ge("input",{type:"checkbox",css:e=>{return t=a(e.accordion),Be`
	${rt};

	&:focus + [data-target='label'] > [data-target='toggle'] {
		${Ht};
	}

	&:not(:checked) ~ [data-target='body'] {
		${Bn};
		display: none;
	}

	&:checked ~ [data-target='body'] {
		${Zn(t)};
	}

	&:not(:checked) + [data-target='label'] [data-target='toggle-label-hide'] {
		display: none;
	}

	&:checked + [data-target='label'] [data-target='toggle-label-show'] {
		display: none;
	}
`;var t},role:"button"}),Ze("div",{css:e=>{return t=a(e.accordion),Be`
	${Rn};
	color: ${t.textCta};
`;var t},"data-target":"label",children:[Ge("strong",{css:Gn,children:e}),Ze("div",{"data-target":"toggle",children:[Ze("div",{css:[An,Mn,t?"":Wn],"data-target":"toggle-label-show",children:[Ze("span",{css:e=>[Fn(a(e.accordion)),t?In:""],children:["Show",Ge("span",{css:In,children:" more"})]}),Ge(Dn,{theme:{fill:r?.iconFill}})]}),Ze("div",{css:[An,En,t?"":Wn],"data-target":"toggle-label-hide",children:[Ge("span",{css:e=>[Fn(a(e.accordion)),t?In:""],children:"Hide"}),Ge(Dn,{theme:{fill:r?.iconFill}})]})]})]}),Ge("div",{css:Vn,"data-target":"body",children:Ge("div",{children:i})})]})})},Nn=Be`
	${rt}
`,jn=({label:e,hideToggleLabel:t=!1,children:n,cssOverrides:r,onClick:l=(()=>{}),theme:a})=>{const[o,d]=(0,i.useState)(!1),[s,c]=(0,i.useState)(!1),h=e=>Ln(bi,a,e,wi);return(0,i.useEffect)((()=>{c(!0)})),s?Ze("div",{css:e=>[kn(h(e.accordion)),r],children:[Ze("button",{type:"button","aria-expanded":o,onClick:function(e){d(!o),l(e)},css:e=>{return[(i=h(e.accordion),Be`
	${Rn};
	color: ${i.textCta};

	/* user agent overrides */
	background: none;
	outline: none;
	border: none;
	text-align: left;

	&:focus div {
		${Ht};
	}
`),o?En:Mn,t?"":Wn];var i},children:[Ge("strong",{css:Gn,children:e}),Ze("div",{css:An,children:[Ge("span",t?{css:Nn,children:o?"Hide":"Show more"}:{css:e=>Fn(h(e.accordion)),children:o?"Hide":Ze(Re,{children:["Show",Ge("span",{css:Nn,children:" more"})]})}),Ge(Dn,{theme:{fill:a?.iconFill}})]})]}),Ge("div",{css:e=>{return o?(t=h(e.accordion),Be`
	${Zn(t)};
`):Vn;var t},children:Ge("div",{hidden:!o,children:n})})]}):Ge(_n,{label:e,hideToggleLabel:t,cssOverrides:r,children:n})},Un=Be`
	stroke: #a5c0e8;
	stroke-width: ${5};
	fill: transparent;
`,qn=Be`
	stroke: ${at[400]};
	stroke-dasharray: 82;
	stroke-dashoffset: 82;
	stroke-width: ${5};
	fill: transparent;
`,Xn=({size:e})=>Ge("svg",{width:e?Ee[e]:void 0,viewBox:"0 0 30 30",children:Ze("g",{children:[Ge("animateTransform",{attributeName:"transform",attributeType:"XML",type:"rotate",from:"0 15 15",to:"360 15 15",dur:"2.5s",repeatCount:"indefinite"}),Ge("circle",{cx:"15",cy:"15",r:"12.6",css:Un}),Ge("path",{css:qn,d:"M15,15 m0,-12.6 a 12.6,12.6 0 0,1 0,25.2 a 12.6,12.6 0 0,1 0,-25.2",children:Ge("animate",{attributeName:"stroke-dashoffset",dur:"3.5s",to:"-82",repeatCount:"indefinite"})})]})}),Yn=({hideLabel:e,iconSvg:t,isLoading:n,children:r})=>{const l=[r];return n?(e||l.push(Ge("div",{className:"src-button-space"},"space")),l.push((0,i.cloneElement)(Ge(Xn,{}),{key:"svg"}))):t&&(e||l.push(Ge("div",{className:"src-button-space"},"space")),l.push((0,i.cloneElement)(t,{key:"svg"}))),e?Ze(Re,{children:[Ge("span",{css:Be`
						${rt};
					`,children:r}),l[1]]}):l},Qn=Be`
	display: inline-flex;
	justify-content: space-between;
	align-items: center;
	box-sizing: border-box;
	border: none;
	background: transparent;
	cursor: pointer;
	transition: ${Ut};
	text-decoration: none;
	white-space: nowrap;
	vertical-align: middle;

	:disabled {
		cursor: not-allowed;
	}

	&:focus {
		${$t};
	}
`,Jn={xsmall:16,small:20,default:24},Kn=e=>Be`
		path,
		circle {
			transition: stroke ${Ut};
			stroke: transparent;
		}
		path {
			stroke: currentColor;
		}
		svg {
			/*
		 * The loading spinner width has been specified as 24px in the design
		 * which falls outside of the icon sizes in source-foundations, so we
		 * override the width here.
		 */
			width: ${Jn[e]}px;
		}
	`,er=Be`
	${Nt.medium({fontWeight:"bold"})};
	height: ${Pe}px;
	min-height: ${Pe}px;
	padding: 0 ${bt[5]}px;
	border-radius: ${Pe}px;
	padding-bottom: 2px;
`,tr=Be`
	${Nt.medium({fontWeight:"bold"})};
	height: ${Oe}px;
	min-height: ${Oe}px;
	padding: 0 ${bt[4]}px;
	border-radius: ${Oe}px;
	padding-bottom: 2px;
`,ir=Be`
	${Nt.xsmall({fontWeight:"bold"})};
	height: ${De}px;
	min-height: ${De}px;
	padding: 0 ${bt[3]}px;
	border-radius: ${De}px;
	padding-bottom: 1px;
`,nr=Be`
	svg {
		flex: 0 0 auto;
		display: block;
		fill: currentColor;
		position: relative;
		width: ${Ke}px;
		height: auto;
	}
	.src-button-space {
		width: ${bt[3]}px;
	}
`,rr=Be`
	svg {
		flex: 0 0 auto;
		display: block;
		fill: currentColor;
		position: relative;
		width: ${et}px;
		height: auto;
	}
	.src-button-space {
		width: ${bt[2]}px;
	}
`,lr=Be`
	svg {
		flex: 0 0 auto;
		display: block;
		fill: currentColor;
		position: relative;
		width: ${tt}px;
		height: auto;
	}
	.src-button-space {
		width: ${bt[1]}px;
	}
`,ar=-bt[1],or=Be`
	flex-direction: row-reverse;
	svg {
		margin-left: ${ar}px;
	}
`,dr=Be`
	svg {
		margin-right: ${ar}px;
	}
`,sr=Be`
	justify-content: center;
	padding: 0;
`,cr=Be`
	${sr};
	width: ${Xe}px;
`,hr=Be`
	${sr};
	width: ${Ye}px;
`,ur=Be`
	${sr};
	width: ${Qe}px;
`,pr=Be`
	svg {
		transform: translate(0, 0);
		transition: ${jt};
	}
	&:hover,
	&:focus {
		svg {
			transform: translate(${bt[1]/2}px, 0);
		}
	}
`,vr={primary:e=>Be`
	background-color: ${e.backgroundPrimary};
	color: ${e.textPrimary};

	&:hover {
		background-color: ${e.backgroundPrimaryHover};
	}
`,secondary:e=>Be`
	background-color: ${e.backgroundSecondary};
	color: ${e.textSecondary};

	&:hover {
		background-color: ${e.backgroundSecondaryHover};
	}
`,tertiary:e=>Be`
	background-color: ${e.backgroundTertiary};
	color: ${e.textTertiary};
	border: 1px solid ${e.borderTertiary};

	&:hover {
		background-color: ${e.backgroundTertiaryHover};
	}
`,subdued:e=>Be`
	padding: 0;
	background-color: transparent;
	color: ${e.textSubdued};
	text-decoration: underline;
	text-underline-offset: 4px;

	&:hover {
		text-decoration-thickness: 4px;
	}

	/* Why is this zero? Because the default is to have rounded corners but here, when
	   there is only text, it is more natural to show a rectangle for the focus halo */
	border-radius: 0;
`},mr={right:dr,left:or},fr={default:er,small:tr,xsmall:ir},gr={default:nr,small:rr,xsmall:lr},xr={default:cr,small:hr,xsmall:ur},br=(e,t)=>Ln(Ai,t,e),yr=({priority:e="primary",size:t="default",icon:i,hideLabel:n,iconSide:r="left",nudgeIcon:l,cssOverrides:a,isLoading:o,theme:d})=>s=>[Qn,fr[t],vr[e](br(s.button,d)),i??o?gr[t]:"",(i??o)&&!n?mr[r]:"",l?pr:"",n?xr[t]:"",o?Kn(t):void 0,a],wr=({priority:e,size:t,icon:i,iconSide:n,hideLabel:r,nudgeIcon:l,type:a="button",isLoading:o=!1,loadingAnnouncement:d="Loading",cssOverrides:s,children:c,theme:h,...u})=>Ge("button",{css:yr({size:t,priority:e,icon:i,hideLabel:r,iconSide:n,nudgeIcon:l,cssOverrides:s,isLoading:o,theme:h}),type:a,"aria-live":"polite","aria-label":o?d:void 0,...u,children:Yn({hideLabel:r,iconSvg:i,isLoading:o,children:c})}),Sr=({priority:e,size:t,iconSide:i,icon:n,nudgeIcon:r,hideLabel:l,cssOverrides:a,children:o,theme:d,...s})=>Ge("a",{css:yr({size:t,priority:e,icon:n,hideLabel:l,iconSide:i,nudgeIcon:r,cssOverrides:a,theme:d}),...s,children:Yn({hideLabel:l,iconSvg:n,children:o})}),Hr=({textColor:e,width:t})=>Ze(Re,{children:[Ze("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 -3 300 100",fill:e,width:t,focusable:!1,"aria-hidden":!0,children:[Ge("path",{d:"M0 70.8c0-19.5 13-26.4 27.3-26.4 6.1 0 12 1 15.1 2.3l.3 13.6h-1.4L33 47.2c-1.5-.7-2.8-.9-5.4-.9-7.6 0-11.5 8.8-11.4 23.3.1 17.3 3.1 25.1 10.2 25.1 1.8 0 3.2-.2 4.2-.7V75.5l-4.7-2.7v-1.5h22.5V73l-4.6 2.5v18.3a50.1 50.1 0 0 1-17 2.9C10.5 96.7 0 89 0 70.8Z"}),Ge("path",{d:"m142.8 57.9 1.2.1v11h.3c1.6-8 5.2-11 9.5-11 .7 0 1.5 0 1.9.2v11.2c-.7-.2-2-.2-3.1-.2-3.4 0-6 .6-8.2 1.6v21.7l3.4 1.9v1.4h-19.5v-1.4l3.5-2V63l-4.1-1.2v-1l15-2.8Z"}),Ge("path",{d:"M110.2 74v-4.9c0-7.4-1.6-9.9-6.2-9.9l-1.6.2-8.2 11h-1.1V60.3c3.5-1.1 7.9-2.4 13.7-2.4 10 0 15.8 2.8 15.8 11.1v24l3.6 1v1c-1.4.8-4.2 1.6-7.3 1.6-5 0-7.3-1.6-8.4-4.3h-.4c-2 2.8-5 4.4-9.7 4.4-6 0-10-3.7-10-10S94.2 77 102 75.5l8.1-1.6Zm0 16.6V75.8l-2.5.2c-4 .3-5.3 2.8-5.3 8.3 0 6 2 7.6 4.7 7.6 1.5 0 2.4-.5 3.1-1.3Z"}),Ge("path",{d:"M47.5 61.7v-1.1l15-2.7 1.7.2v29.6c0 3.6 1.7 4.7 4.6 4.7 1.9 0 3.6-.7 4.9-2.3V63.5l-4.1-1.8v-1.1l15-2.7 1.6.1v34l4 1.7v1l-14.9 1.9-1.5-.1V92h-.4a16.8 16.8 0 0 1-11.3 4.7c-7.2 0-10.5-4.2-10.5-10.7V63.5l-4.1-1.8Z"}),Ge("path",{d:"M261.5 92.5V63l-4.2-1.4v-1.5l15-2.7h1.5V62h.5c3.2-2.9 8-4.7 12.8-4.7 6.5 0 9.4 3 9.4 10v25.1l3.5 2v1.4h-19.5v-1.4l3.5-2V68c0-3.8-1.7-5.3-4.8-5.3-2 0-3.6.5-5.1 1.6v28.3l3.4 1.9v1.4h-19.6v-1.4l3.6-2Z"}),Ge("path",{d:"m214 57.8 1.4.2v34.5l3.4 1.9v1.4h-19.5v-1.4l3.5-2v-29l-4.2-1.6v-1.2l15.5-2.8Zm1.5-9.3c0 3.7-3.1 6.4-6.7 6.4a6.4 6.4 0 0 1-6.6-6.4c0-3.6 2.9-6.4 6.6-6.4 3.6 0 6.7 2.8 6.7 6.4Z"}),Ge("path",{d:"M239.8 74v-4.9c0-7.4-1.7-9.9-6.2-9.9l-1.6.2-8.2 11h-1.1V60.3c3.5-1.1 7.9-2.4 13.7-2.4 10 0 15.8 2.8 15.8 11.1v24l3.6 1v1c-1.4.8-4.2 1.6-7.4 1.6-5 0-7.3-1.6-8.4-4.3h-.3c-2 2.8-5 4.4-9.7 4.4-6 0-10-3.7-10-10s3.8-9.6 11.7-11.1l8-1.6Zm0 16.6V75.8l-2.5.2c-4 .3-5.4 2.8-5.4 8.3 0 6 2 7.6 4.8 7.6 1.5 0 2.4-.5 3-1.3Z"}),Ge("path",{d:"M180.6 58.8V47.2l-4.1-1.4v-1l15.2-2.7 1.5.2V92l4.2 1.5v1.3l-15 2-1.2-.2v-4h-.4a13.4 13.4 0 0 1-10 4.1c-8.1 0-14.1-6.2-14.1-19 0-13.5 7-20 17.5-20 3 0 5.3.5 6.4 1.1Zm0 31.8V61c-1-.6-1.7-1.4-4.2-1.3-4 .2-6.6 6.3-6.6 17.2 0 9.8 1.9 15.3 7.3 15.1 1.5 0 2.7-.6 3.5-1.3Z"}),Ge("path",{d:"m68.1 51.6 5.2-2.7V8.5h-4L60 21.1h-1.1l.6-14h41.3l.6 14H100L90.8 8.5h-4v40.3l5.2 2.7V53H68.1v-1.3Z"}),Ge("path",{d:"M105.4 49.8V5l-4-1.6v-.8L115.9 0h1.5v21.2l.4-.4c3.2-2.8 7.8-4.5 12.4-4.5 6.3 0 9.1 3.5 9.1 10.2v23.3l3.4 1.8V53h-18.9v-1.4l3.4-1.8V26.4c0-3.7-1.6-5.1-4.6-5.1a8 8 0 0 0-5 1.6v27l3.3 1.8V53h-19v-1.3l3.5-2Z"}),Ge("path",{d:"M153.7 36c.4 7.4 3.7 13.1 11.6 13.1 3.8 0 6.5-1.7 9-3v1.4c-1.9 2.7-6.9 6.5-13.8 6.5-12.2 0-18.5-6.8-18.5-18.5 0-11.5 6.8-18.6 17.9-18.6 10.3 0 15.7 5.2 15.7 18.8v.3h-21.9Zm-.2-1.7 10.8-.6c0-9.2-1.6-15.3-4.8-15.3-3.3 0-6 7-6 16Z"})]}),Ge("span",{css:Be`
					${rt}
				`,children:"The Guardian"})]}),$r=({textColor:e,textAccentColor:t,width:i})=>Ze(Re,{children:[Ze("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 300 116",width:i,focusable:!1,"aria-hidden":!0,children:[Ge("path",{d:"M68.131 51.554L73.283 48.879V8.502H69.387L59.87 21.091H58.795L59.402 7.059H100.664L101.26 21.091H100.131L90.806 8.502H86.814V48.794L91.998 51.522V52.891H68.131V51.554ZM105.401 49.77V5.02L101.398 3.428V2.59L115.866 0H117.388V21.175L117.792 20.835C120.997 18.045 125.596 16.25 130.194 16.25C136.529 16.25 139.328 19.817 139.328 26.461V49.771L142.714 51.606V52.966H123.797V51.617L127.192 49.77V26.376C127.192 22.726 125.596 21.26 122.594 21.26C120.592 21.26 118.868 21.887 117.59 22.906V49.823L120.922 51.66V52.955H101.995V51.67L105.401 49.77V49.77ZM153.732 36.025C154.125 43.423 157.447 49.145 165.324 49.145C169.135 49.145 171.839 47.382 174.384 46.045V47.5C172.414 50.186 167.422 53.954 160.47 53.954C148.26 53.954 142.021 47.192 142.021 35.474C142.021 24.021 148.845 16.889 159.874 16.889C170.243 16.889 175.629 22.058 175.629 35.665V36.015H153.732V36.026V36.025ZM153.529 34.327L164.271 33.669C164.271 24.509 162.695 18.427 159.544 18.427C156.201 18.427 153.529 25.485 153.529 34.327ZM0 70.808C0 51.33 12.934 44.399 27.338 44.399C33.448 44.399 39.218 45.376 42.443 46.713L42.72 60.31H41.347L32.894 47.16C31.447 46.544 30.074 46.3 27.54 46.3C19.886 46.3 15.968 55.12 16.085 69.587C16.235 86.888 19.247 94.743 26.273 94.743C28.104 94.743 29.509 94.467 30.489 94.043V75.498L25.847 72.845V71.295H48.267V72.951L43.7 75.499V93.787C39.91 95.263 33.512 96.664 26.763 96.664C10.39 96.664 0 89.096 0 70.808ZM47.478 61.722V60.597L62.553 57.944L64.203 58.082V87.696C64.203 91.262 65.927 92.366 68.812 92.366C70.675 92.366 72.357 91.666 73.698 90.063V63.505L69.568 61.721V60.554L84.642 57.9L86.153 58.038V91.983L90.22 93.681V94.764L75.348 96.59L73.837 96.452V91.994H73.421C70.664 94.531 66.811 96.728 62.127 96.728C54.898 96.728 51.587 92.472 51.587 86.018V63.507L47.478 61.723V61.722ZM142.767 57.88L144.002 58.018V68.982H144.342C145.95 60.947 149.505 57.944 153.838 57.944C154.53 57.944 155.286 58.007 155.701 58.219V69.439C155.009 69.237 153.774 69.163 152.603 69.163C149.165 69.163 146.631 69.778 144.406 70.797V92.472L147.834 94.372V95.772H128.289V94.382L131.813 92.482V62.9L127.682 61.67V60.66L142.767 57.88Z",fill:e}),Ge("path",{d:"M180.622 58.804V47.234L176.491 45.791V44.867L191.704 42.076L193.151 42.277V91.963L197.356 93.481V94.765L182.346 96.781L181.175 96.644V92.536H180.835C178.631 94.733 175.597 96.718 170.849 96.718C162.652 96.718 156.669 90.477 156.669 77.708C156.669 64.248 163.621 57.636 174.16 57.636C177.173 57.636 179.451 58.188 180.622 58.804V58.804ZM180.59 90.614V60.917C179.621 60.301 178.929 59.537 176.427 59.622C172.361 59.76 169.849 65.895 169.849 76.806C169.849 86.625 171.658 92.112 177.077 91.932C178.599 91.879 179.834 91.337 180.59 90.616V90.614ZM214.07 57.848L215.379 57.986V92.46L218.818 94.36V95.76H199.273V94.37L202.786 92.47V63.43L198.581 61.785V60.638L214.07 57.847V57.848ZM215.454 48.538C215.454 52.18 212.356 54.918 208.779 54.918C205.064 54.918 202.168 52.169 202.168 48.538C202.168 44.898 205.064 42.085 208.779 42.085C212.356 42.085 215.454 44.898 215.454 48.539V48.538ZM261.453 92.472V63.112L257.322 61.669V60.247L272.332 57.455L273.844 57.593V61.987H274.259C277.495 59.1 282.318 57.253 287.066 57.253C293.602 57.253 296.498 60.343 296.498 67.21V92.408L300 94.36V95.76H280.455V94.37L283.968 92.47V67.9C283.968 64.122 282.318 62.615 279.22 62.615C277.219 62.615 275.579 63.125 274.057 64.249V92.462L277.495 94.362V95.762H257.94V94.372L261.453 92.472V92.472ZM239.768 74.024V69.099C239.768 61.679 238.15 59.249 233.551 59.249C233.008 59.249 232.54 59.312 231.997 59.386L223.811 70.446H222.661V60.269C226.174 59.186 230.571 57.912 236.394 57.912C246.4 57.912 252.223 60.682 252.223 69.036V93.046L255.811 93.99V94.935C254.395 95.815 251.553 96.622 248.434 96.622C243.494 96.622 241.131 95.009 240.045 92.302H239.704C237.607 95.136 234.637 96.75 229.964 96.75C224.013 96.75 219.957 93.045 219.957 86.634C219.957 80.425 223.811 77.06 231.656 75.574L239.768 74.024V74.024ZM239.768 90.614V75.774L237.267 75.977C233.338 76.317 231.923 78.811 231.923 84.341C231.923 90.338 233.881 91.898 236.66 91.898C238.214 91.888 239.098 91.42 239.768 90.614ZM110.202 74.024V69.099C110.202 61.679 108.584 59.249 103.975 59.249C103.432 59.249 102.963 59.312 102.42 59.386L94.234 70.446H93.084V60.269C96.597 59.186 100.994 57.912 106.817 57.912C116.824 57.912 122.647 60.682 122.647 69.036V93.046L126.234 93.99V94.935C124.818 95.815 121.976 96.622 118.857 96.622C113.917 96.622 111.554 95.009 110.468 92.302H110.128C108.031 95.136 105.05 96.75 100.387 96.75C94.437 96.75 90.38 93.045 90.38 86.634C90.38 80.425 94.234 77.06 102.08 75.574L110.202 74.024V74.024ZM110.202 90.614V75.774L107.701 75.977C103.772 76.317 102.357 78.811 102.357 84.341C102.357 90.338 104.315 91.898 107.094 91.898C108.637 91.888 109.521 91.42 110.202 90.614Z",fill:e}),Ge("path",{d:"M73.848 100.316H76.094L79.043 105.411C79.969 107.003 81.001 109.359 81.001 109.359H81.055C81.055 109.359 80.895 106.886 80.895 105.22V100.316H82.715V112.023H80.745L77.51 106.355C76.594 104.763 75.55 102.364 75.55 102.364H75.487C75.487 102.364 75.679 104.912 75.679 106.557V112.034H73.859V100.316H73.848V100.316ZM84.6 108.053V107.257C84.6 104.402 86.26 103.085 88.464 103.085C91.019 103.085 92.084 104.402 92.084 107.129V108.212H86.622C86.675 110.165 87.506 110.579 89.177 110.579C90.317 110.579 91.051 110.324 91.796 109.963V111.375C91.21 111.747 90.263 112.192 88.783 112.192C85.93 112.192 84.6 110.738 84.6 108.053ZM86.601 106.832H90.114C90.114 105.081 89.528 104.54 88.432 104.54C87.548 104.54 86.654 104.932 86.601 106.832ZM92.87 103.245H94.904L95.681 106.493C96.021 107.894 96.394 110.59 96.394 110.59H96.458C96.458 110.59 96.831 107.926 97.225 106.493L98.108 103.245H99.865L100.748 106.493C101.121 107.894 101.568 110.59 101.568 110.59H101.632C101.632 110.59 101.994 107.926 102.334 106.493L103.101 103.245H104.879L102.515 112.034H100.525L99.535 108.457C99.162 107.141 98.928 104.784 98.928 104.784H98.864C98.864 104.784 98.651 107.141 98.278 108.457L97.288 112.034H95.255L92.871 103.245H92.87ZM105.752 111.609V110.048C106.487 110.345 107.104 110.579 108.329 110.579C109.5 110.579 109.968 110.239 109.968 109.602C109.968 109.019 109.808 108.743 108.84 108.509L107.882 108.286C106.583 107.979 105.763 107.31 105.763 105.739C105.763 104.115 106.774 103.075 108.935 103.075C110.106 103.075 110.862 103.287 111.426 103.563V105.091C110.926 104.879 110.096 104.656 109.116 104.656C108.126 104.656 107.615 104.985 107.615 105.601C107.615 106.185 107.892 106.429 108.659 106.609L109.617 106.832C111.299 107.225 111.884 107.904 111.884 109.443C111.884 111.248 110.713 112.171 108.573 112.171C107.477 112.171 106.466 111.98 105.752 111.609V111.609ZM116.728 103.245H118.761L119.538 106.493C119.879 107.894 120.251 110.59 120.251 110.59H120.315C120.315 110.59 120.688 107.926 121.082 106.493L121.965 103.245H123.722L124.605 106.493C124.978 107.894 125.425 110.59 125.425 110.59H125.489C125.489 110.59 125.851 107.926 126.191 106.493L126.958 103.245H128.736L126.372 112.034H124.382L123.392 108.457C123.019 107.141 122.785 104.784 122.785 104.784H122.721C122.721 104.784 122.508 107.141 122.135 108.457L121.145 112.034H119.112L116.728 103.245V103.245ZM129.641 108.053V107.257C129.641 104.402 131.301 103.085 133.505 103.085C136.06 103.085 137.124 104.402 137.124 107.129V108.212H131.663C131.716 110.165 132.547 110.579 134.218 110.579C135.357 110.579 136.092 110.324 136.837 109.963V111.375C136.251 111.747 135.304 112.192 133.824 112.192C130.971 112.192 129.641 110.738 129.641 108.053ZM131.642 106.832H135.155C135.155 105.081 134.569 104.54 133.473 104.54C132.589 104.54 131.685 104.932 131.642 106.832V106.832ZM138.71 111.525V99.541H140.669V104.01H140.754C141.372 103.479 142.128 103.086 143.245 103.086C144.842 103.086 146.471 104.01 146.471 107.077V107.788C146.471 110.792 144.991 112.225 142.138 112.225C140.893 112.225 139.52 111.928 138.71 111.525V111.525ZM144.427 108.064V107.247C144.427 105.198 143.778 104.7 142.309 104.7C141.627 104.7 141.01 104.954 140.659 105.135V110.368C140.989 110.527 141.404 110.707 142.234 110.707C143.384 110.707 144.427 110.272 144.427 108.064V108.064ZM147.632 111.609V110.048C148.366 110.345 148.984 110.579 150.208 110.579C151.379 110.579 151.847 110.239 151.847 109.602C151.847 109.019 151.688 108.743 150.73 108.509L149.772 108.286C148.473 107.979 147.653 107.31 147.653 105.739C147.653 104.115 148.664 103.075 150.825 103.075C151.996 103.075 152.752 103.287 153.317 103.563V105.091C152.816 104.879 151.986 104.656 151.006 104.656C150.016 104.656 149.505 104.985 149.505 105.601C149.505 106.185 149.782 106.429 150.549 106.609L151.507 106.832C153.189 107.225 153.774 107.904 153.774 109.443C153.774 111.248 152.603 112.171 150.464 112.171C149.356 112.171 148.345 111.98 147.632 111.609ZM155.253 99.816H157.276V101.684H155.253V99.816ZM155.285 103.244H157.244V112.033H155.285V103.244ZM159.969 109.9V104.784H158.521V103.245H159.969V101.122H161.928V103.245H164.196V104.784H161.928V109.592C161.928 110.356 162.184 110.579 163.025 110.579C163.386 110.579 164.004 110.484 164.313 110.356V111.683C163.951 111.906 163.237 112.14 162.386 112.14C160.917 112.14 159.969 111.588 159.969 109.9V109.9ZM165.313 108.053V107.257C165.313 104.402 166.974 103.085 169.178 103.085C171.733 103.085 172.797 104.402 172.797 107.129V108.212H167.336C167.389 110.165 168.22 110.579 169.891 110.579C171.03 110.579 171.765 110.324 172.51 109.963V111.375C171.924 111.747 170.977 112.192 169.497 112.192C166.644 112.192 165.313 110.738 165.313 108.053ZM167.315 106.832H170.828C170.828 105.081 170.242 104.54 169.146 104.54C168.262 104.54 167.368 104.932 167.315 106.832V106.832ZM178.035 108.053V107.31C178.035 104.55 179.76 103.085 182.07 103.085C184.561 103.085 186.041 104.518 186.041 107.225V107.968C186.041 110.76 184.348 112.192 182.048 112.192C179.526 112.192 178.035 110.738 178.035 108.053V108.053ZM184.007 108.127V107.236C184.007 105.038 183.124 104.593 182.038 104.593C180.814 104.593 180.068 105.357 180.068 107.161V108.074C180.068 110.229 180.963 110.685 182.091 110.685C183.305 110.675 184.007 109.963 184.007 108.127V108.127ZM188.318 104.784H186.881V103.245H188.318V102.162C188.318 100.241 189.489 99.402 191.139 99.402C191.937 99.402 192.544 99.551 192.832 99.71V101.079C192.608 101.016 192.15 100.952 191.661 100.952C190.766 100.952 190.277 101.355 190.277 102.353V103.266H192.374V104.805H190.277V112.044H188.318V104.784V104.784ZM198.496 109.9V104.784H197.048V103.245H198.496V101.122H200.454V103.245H202.722V104.784H200.454V109.592C200.454 110.356 200.71 110.579 201.551 110.579C201.913 110.579 202.53 110.484 202.839 110.356V111.683C202.477 111.906 201.764 112.14 200.912 112.14C199.443 112.14 198.496 111.588 198.496 109.9V109.9ZM204.212 99.541H206.171V104.137H206.256C206.874 103.532 207.906 103.086 208.96 103.086C210.589 103.086 211.409 103.797 211.409 105.506V112.034H209.45V105.994C209.45 105.114 209.173 104.763 208.045 104.763C207.406 104.763 206.672 104.976 206.171 105.23V112.034H204.212V99.541V99.541ZM212.995 108.053V107.257C212.995 104.402 214.655 103.085 216.859 103.085C219.414 103.085 220.478 104.402 220.478 107.129V108.212H215.017C215.07 110.165 215.901 110.579 217.572 110.579C218.711 110.579 219.446 110.324 220.191 109.963V111.375C219.605 111.747 218.658 112.192 217.178 112.192C214.325 112.192 212.995 110.738 212.995 108.053ZM214.996 106.832H218.509C218.509 105.081 217.923 104.54 216.827 104.54C215.933 104.54 215.039 104.932 214.996 106.832V106.832ZM225.609 115.112V113.732C225.833 113.785 226.163 113.817 226.472 113.817C227.249 113.817 227.739 113.509 228.047 112.681L228.356 111.853L225.29 103.245H227.355L228.313 106.1C228.931 107.915 229.325 110.335 229.325 110.335H229.378C229.378 110.335 229.814 107.915 230.4 106.1L231.315 103.245H233.253L229.878 112.989C229.303 114.645 228.473 115.388 226.898 115.388C226.45 115.388 225.865 115.271 225.609 115.112V115.112ZM233.86 108.053V107.257C233.86 104.402 235.521 103.085 237.724 103.085C240.279 103.085 241.344 104.402 241.344 107.129V108.212H235.882C235.936 110.165 236.766 110.579 238.437 110.579C239.576 110.579 240.311 110.324 241.056 109.963V111.375C240.471 111.747 239.523 112.192 238.044 112.192C235.201 112.192 233.86 110.738 233.86 108.053V108.053ZM235.872 106.832H239.385C239.385 105.081 238.799 104.54 237.703 104.54C236.809 104.54 235.914 104.932 235.872 106.832V106.832ZM242.408 109.666C242.408 108.042 243.42 107.278 245.133 107.066L247.092 106.811V106.142C247.092 105.017 246.634 104.731 245.187 104.731C244.356 104.731 243.611 104.858 243.09 104.975V103.563C243.888 103.234 244.835 103.075 245.953 103.075C247.923 103.075 249.051 103.85 249.051 105.707V112.023H247.443L247.284 111.142H247.188C246.783 111.715 246.134 112.182 245.038 112.182C243.473 112.192 242.408 111.375 242.408 109.666V109.666ZM247.082 110.271V108.042L245.57 108.191C244.74 108.276 244.367 108.722 244.367 109.571C244.367 110.42 244.857 110.77 245.623 110.77C246.219 110.781 246.762 110.568 247.082 110.271ZM251.01 103.245H252.883V104.444H252.979C253.416 103.712 254.384 103.118 255.279 103.118C255.523 103.118 255.736 103.15 255.8 103.203V104.986C255.575 104.948 255.347 104.927 255.119 104.922C254.352 104.922 253.511 105.177 252.969 105.527V112.044H251.01V103.245V103.245Z",fill:t})]}),Ge("span",{css:Be`
					${rt}
				`,children:"The Guardian: news website of the year"})]}),zr=({textColor:e,width:t})=>Ze(Re,{children:[Ze("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 380 200",fill:e,width:t,focusable:!1,"aria-hidden":!0,children:[Ge("defs",{}),Ge("path",{d:"M84.69 196.22l5.82-1.3v-57.13l-5.82-1.3V135h30.44v1.48l-6.27 1.22v58.37h9.92l14.28-22.36h1.48l-1.13 24H84.7v-1.5zm69.56-47.05l2.18.17v45.49l4.87 1.4v1.47h-25.76v-1.48l4.95-1.4v-39.3l-5.3-2.1v-1.48l19.06-2.77zm2.25-11.27a8.24 8.24 0 01-.7 3.15 8.26 8.26 0 01-7.74 4.94 8.13 8.13 0 01-5.99-2.25 8.13 8.13 0 01-2.51-5.88 8.14 8.14 0 018.5-8.14 8.33 8.33 0 018.44 8.18zm46.84 17.19l-14.1 42.62h-9.52l-16.84-43.94-4-2.18v-1.47h26.81v1.47l-5.47 2.08 11.1 31.06h.43l9.92-29.56-6.7-3.58v-1.47h13.83v1.47l-5.46 3.5zm16.63 17.14c.6 11.74 4.35 18.96 16.52 18.96a25.95 25.95 0 0010.62-1.92v1.4c-2.7 4.1-9.3 8.35-18.79 8.35-16.1 0-24.36-9.75-24.36-25.32 0-15.22 9.05-24.7 23.66-24.7s20.87 7.82 20.87 22v1.23h-28.52zm0-1.75l13.5-.6c0-14.97-2-19.22-6.18-19.22-4.54-.07-7.32 6.08-7.32 19.82zM85.47 68.86l6.46-3.36V14.7h-4.9L75.1 30.54h-1.35l.77-17.65h51.75l.75 17.64h-1.42L113.9 14.7h-5v50.69l6.5 3.42v1.72H85.47v-1.67zm47.45-2.25V10.35l-5.01-2.03V7.27L146 4h1.92v26.63l.51-.43A24.22 24.22 0 01164 24.42c7.93 0 11.45 4.48 11.45 12.84v29.35l4.24 2.32v1.73H156v-1.73l4.3-2.32V37.19c0-4.6-2-6.45-5.77-6.45a9.92 9.92 0 00-6.35 2.07v33.88l4.2 2.38v1.59h-23.82v-1.6l4.37-2.45zm61.82-17.28c.49 9.3 4.66 16.5 14.53 16.5 4.77 0 8.16-2.22 11.37-3.9v1.82a22.22 22.22 0 01-17.46 8.13c-15.31 0-23.14-8.5-23.14-23.25 0-14.41 8.56-23.38 22.4-23.38 13 0 19.75 6.5 19.75 23.63v.45h-27.45zm-.26-2.15l13.48-.82c0-11.52-1.99-19.17-5.92-19.17-4.2 0-7.54 8.88-7.54 20h-.02zM0 93.08c0-24.5 16.22-33.23 34.28-33.23a55.07 55.07 0 0118.95 2.87l.35 17.1h-1.71L41.27 63.3a15.55 15.55 0 00-6.72-1.08c-9.6 0-14.5 11.1-14.28 29.3.19 21.77 3.97 31.64 12.78 31.64 1.8.06 3.6-.25 5.28-.89v-23.3l-5.81-3.33V93.7h28.03v2.08l-5.73 3.17v23.03a62.88 62.88 0 01-21.24 3.62C13.05 125.6 0 116.08 0 93.08zm60.31-11.44v-1.46l18.92-3.33 2.03.15v37.33c0 4.5 2.16 5.87 5.8 5.87a7.72 7.72 0 006.12-2.9V83.9l-5.2-2.25v-1.47l18.93-3.33 1.9.17v42.7l5.1 2.15v1.36l-18.68 2.27-1.9-.17v-5.6h-.53a20.95 20.95 0 01-14.16 5.95c-9.06 0-13.22-5.35-13.22-13.48V83.9l-5.11-2.26zM181.2 76.8l1.59.18v13.79h.42c2.02-10.11 6.48-13.89 11.92-13.89a6.02 6.02 0 012.34.35V91.3a16.12 16.12 0 00-3.9-.35 23.81 23.81 0 00-10.26 2.05v27.32l4.3 2.38v1.77h-24.57v-1.75l4.41-2.4V83.13l-5.17-1.59v-1.27l18.92-3.46z"}),Ge("path",{d:"M228.67 77.97V63.44l-5.17-1.81v-1.16l19.04-3.51 1.81.25v62.48l5.27 1.92v1.6l-18.82 2.53-1.46-.17v-5.16h-.43a16.81 16.81 0 01-12.52 5.27c-10.29 0-17.8-7.94-17.8-23.92 0-16.93 8.73-25.25 21.94-25.25a18.71 18.71 0 018.1 1.46h.04zm-.03 40.01V80.64a6.97 6.97 0 00-5.22-1.59c-5.11.18-8.26 7.94-8.26 21.62 0 12.34 2.27 19.25 9.07 19.04a6.68 6.68 0 004.4-1.59v-.14zm42-41.2l1.58.18v43.35l4.32 2.38v1.77h-24.48v-1.75l4.4-2.4v-36.5l-5.25-2.05v-1.44l19.42-3.54zm1.72-11.71a8.22 8.22 0 01-2.52 5.75 8.21 8.21 0 01-5.86 2.28 8.08 8.08 0 01-7.46-4.99 8.08 8.08 0 017.46-11.17 8.29 8.29 0 018.38 8.13zm59.34 55.26V83.35l-5.18-1.8V79.8l18.82-3.51 1.9.17V82h.53a24.84 24.84 0 0116.06-5.95c8.2 0 11.82 3.88 11.82 12.52v31.74l4.4 2.46v1.76H355.5v-1.75l4.41-2.4V89.42c0-4.76-2.08-6.65-5.95-6.65a10.3 10.3 0 00-6.47 2.07v35.48l4.31 2.4v1.76h-24.57v-1.74l4.46-2.4zm-27.26-23.22v-6.19c0-9.33-2.03-12.38-7.81-12.38a15.13 15.13 0 00-1.95.18L284.4 92.64h-1.45V79.8a55.28 55.28 0 0117.22-2.96c12.56 0 19.86 3.47 19.86 14V121l4.5 1.19v1.19a19.29 19.29 0 01-9.26 2.12c-6.2 0-9.16-2.03-10.53-5.42h-.42c-2.64 3.57-6.35 5.6-12.22 5.6-7.46 0-12.56-4.67-12.56-12.7 0-7.8 4.76-12.04 14.68-13.92l10.2-1.95zm0 20.87V99.33l-3.18.26c-4.92.43-6.7 3.57-6.7 10.52 0 7.55 2.47 9.52 5.94 9.52a4.56 4.56 0 003.9-1.59l.04-.06zm-164.1-20.87v-6.19c0-9.33-2.02-12.38-7.8-12.38-.66.02-1.3.08-1.95.18l-10.27 13.92h-1.45V79.8a55.31 55.31 0 0117.24-2.96c12.55 0 19.85 3.47 19.85 14V121l4.5 1.19v1.19a19.29 19.29 0 01-9.26 2.12c-6.19 0-9.15-2.03-10.52-5.42h-.43c-2.63 3.57-6.35 5.6-12.22 5.6-7.46 0-12.55-4.67-12.55-12.7 0-7.8 4.76-12.04 14.68-13.92l10.19-1.95zm0 20.87V99.33l-3.17.26c-4.92.43-6.7 3.57-6.7 10.52 0 7.55 2.47 9.52 5.94 9.52a4.56 4.56 0 003.9-1.59"}),Ge("defs",{children:Ge("clipPath",{id:"clip0",children:Ge("path",{d:"M0 0h380v200H0z"})})})]}),Ge("span",{css:Be`
					${rt}
				`,children:"The Guardian Live"})]}),Cr=({textColor:e="#fff",backgroundColor:t="#000",width:i})=>Ze(Re,{children:[Ze("svg",{viewBox:"0 0 42 42",xmlns:"http://www.w3.org/2000/svg",width:i,focusable:!1,"aria-hidden":!0,children:[Ge("circle",{cx:"21",cy:"21",r:"21",fill:t}),Ge("path",{d:"M33.7 22.15l-2.16.96v9.94a17.44 17.44 0 01-7.27 3.58V22.9l-2.3-.81v-.6H33.7v.66z\n\t\t\t\tM22.95 5.6h-.06c-4.86 0-7.64 6.55-7.5 15.38-.14 8.87 2.64 15.43 7.5 15.43h.06v.68c-7.28.48-17.23-4.94-17.09-16.07-.14-11.17 9.8-16.6 17.1-16.1v.68zm1.47-.72c2.85.44 6.1 2.31 7.32 3.64v6.13h-.7l-6.62-9.09v-.68z",fill:e})]}),Ge("span",{css:Be`
					${rt}
				`,children:"The Guardian"})]}),Lr=e=>Ge(Cr,{textColor:"white",backgroundColor:at[400],...e});Lr.args={width:300};const kr=e=>Ge(Cr,{textColor:at[400],backgroundColor:"white",...e}),Rr=e=>Ge(Cr,{textColor:"white",backgroundColor:dt[7],...e}),Gr=e=>Ge(Cr,{textColor:dt[7],backgroundColor:"white",...e}),Zr={medium:Nt.medium({fontWeight:"bold"}),small:Nt.xsmall({fontWeight:"bold"})},Br=Be`
	${ti};
`,Vr=(e,t)=>Be`
	${Zr[t]};
	color: ${e.textLabel};
`,Ar=e=>Be`
	${Nt.xsmall()};
	color: ${e.textSupporting};
	margin: 2px 0 0;
`,Fr=(e,t)=>Ln(Wi,t,e),Tr=Be`
	${rt}
`,Mr=({hideLabel:e,children:t,theme:i})=>Ge("p",{css:t=>[Ar(Fr(t.label,i)),e?Tr:""],children:t}),Er=Be`
	${rt}
`,Wr=({text:e,optional:t,hideLabel:i,size:n="medium",theme:r})=>Ze("div",{css:e=>[Vr(Fr(e.label,r),n),i?Er:""],children:[e," ",t?Ge("span",{css:e=>(e=>Be`
	${Nt.xsmall()};
	color: ${e.textOptional};
	font-style: italic;
`)(Fr(e.label,r)),children:"Optional"}):""]}),Pr=({text:e,supporting:t,optional:i=!1,hideLabel:n=!1,cssOverrides:r,theme:l,...a})=>Ze(Re,{children:[Ge("legend",{css:[Br,r],...a,children:Ge(Wr,{text:e,optional:i,hideLabel:n,theme:l})}),t?Ge(Mr,{hideLabel:n,theme:l,children:t}):""]}),Or=({size:e,theme:t})=>Ge("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Ge("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-10.704 1.818h1.386l.659-8.636-.91-.91h-.885l-.91.91.66 8.636Zm2.068 3.637c0-.75-.614-1.364-1.364-1.364-.75 0-1.364.614-1.364 1.364 0 .75.614 1.363 1.364 1.363.75 0 1.364-.613 1.364-1.363Z",fill:t?.fill})}),Dr=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge(Or,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"Warning"}):""]}),Ir=(e,t)=>Ln(Ii,t,e),_r=Be`
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
`,Nr=Be`
	${Nt.xsmall()};
	svg {
		width: ${nt}rem;
		height: ${qe}rem;
	}
`,jr=Be`
	${Nt.medium()};
	svg {
		width: ${it}rem;
		height: ${Ue}rem;
	}
`,Ur={small:Nr,medium:jr},qr=(e,t)=>Be`
	${_r};
	${Ur[t]};
	color: ${e.textError};
`,Xr=(e,t)=>Be`
	${_r};
	${Ur[t]};
	color: ${e.textSuccess};
`,Yr=({children:e,size:t="medium",cssOverrides:i,theme:n,...r})=>Ze("span",{css:e=>[qr(Ir(e.userFeedback,n),t),i],role:"alert",...r,children:[Ge(Dr,{}),e]}),Qr=Be`
	${ii};
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
`,Jr=(e,t=!1)=>Be`
	position: relative;
	display: flex;
	align-items: center;
	min-height: ${Ie}px;
	cursor: pointer;

	&:hover {
		input {
			border: ${t?`2px solid ${e.borderError}`:`2px solid ${e.borderHover}`};
			/*
				In the indeterminate state, we increase the border width by 1px on
				hover. This causes the position of the indeterminate dash to shift as it
				is absolutely positioned. This negative margin accounts for the extra
				border width and prevents the shift. We need to locate this css here as
				the hover sits on the container, rather than the input element.
			*/
			&:indeterminate {
				&:after {
					margin: -1px;
				}
			}
		}
	}
	&:active {
		input {
			border-color: ${e.borderHover};
		}
	}
`,Kr=Be`
	cursor: pointer;
`,el=Be`
	align-items: flex-start;
	margin-bottom: ${bt[3]}px;
`,tl=(e,t=!1)=>Be`
	flex: 0 0 auto;
	box-sizing: border-box;
	display: inline-block;
	cursor: pointer;
	width: ${Je}px;
	height: ${_e}px;
	margin: 0 ${bt[2]}px 0 0;

	border: 1px solid currentColor;
	background: ${e.fillUnselected};
	border-radius: 4px;
	position: relative;
	transition: box-shadow ${jt};
	transition-delay: 0.08s;
	color: ${e.borderUnselected};

	&:focus {
		${Ht};
	}

	@supports (${ni}) {
		appearance: none;
		&:checked {
			border: ${t?`2px solid ${e.borderError}`:`2px solid ${e.borderSelected}`};
			& ~ span:before {
				right: 0;
			}
			& ~ span:after {
				top: 0;
			}
		}

		&:indeterminate {
			&:after {
				${Nt.xlarge()};
				color: ${e.textIndeterminate};
				content: '-';
				position: absolute;
				top: -7px;
				left: 6px;
				z-index: 5;
			}
		}
	}
`,il=Be`
	${Nt.medium()};
	margin-top: 1px;
	/* If label text is empty, add additional spacing to align supporting text */
	&:empty {
		margin-top: 2px;
	}
`,nl=Be`
	@supports (${ni}) {
		top: 15px;
		left: 9px;
	}
`,rl=Be`
	@supports (${ni}) {
		top: 5px;
	}
`,ll=({id:e,name:t,label:n,hideLabel:r,optional:l=!1,supporting:a,error:o,cssOverrides:d,children:s,theme:c,...h})=>{const u=e??li(),p=n?Ge(Pr,{text:n,supporting:a,hideLabel:r,optional:l,theme:c}):"",v="string"==typeof o?Ge(Yr,{theme:c,id:ai(u),children:o}):"";return Ze("fieldset",{css:[Qr,d],id:u,...h,children:[p,v,i.Children.map(s,(e=>(0,i.cloneElement)(e,Object.assign(o?{error:!0,"aria-describedby":ai(u)}:{},{name:t}))))]})},al=({id:e,label:t,checked:i,supporting:n,defaultChecked:r,error:l,indeterminate:a,cssOverrides:o,theme:d,...s})=>{const c=e??li(),h=e=>Ln(Ni,d,e,Qi),u=({children:e})=>Ge("div",{css:e=>{return t=h(e.checkbox),Be`
	${Nt.small()};
	color: ${t.textSupporting};
`;var t},children:e}),p=({hasSupportingText:e,children:t})=>Ge("div",{css:t=>{return[(i=h(t.checkbox),Be`
	${Nt.medium()};
	color: ${i.textLabel};
	width: 100%;
`),e?il:""];var i},children:t});return Ze("div",{css:e=>[Jr(h(e.checkbox),l),n?el:""],children:[Ge("input",{id:c,type:"checkbox",css:e=>{return[tl(h(e.checkbox),l),l?(t=h(e.checkbox),Be`
	border: 2px solid ${t.borderError};
	border-radius: 4px;
	&:not(:checked):hover,
	&:active {
		border: 2px solid ${t.borderHover};
	}
`):"",o];var t},"aria-invalid":!!l,ref:e=>{e&&(e.indeterminate=!!a)},defaultChecked:r??void 0,checked:null!=i?null!=i?i:!!r:void 0,...s}),Ge("span",{css:e=>{return[(i=h(e.checkbox),Be`
	@supports (
		(appearance: none) or (-webkit-appearance: none) or (-moz-appearance: none)
	) {
		/* overall positional properties */
		position: absolute;
		width: 6px;
		height: 12px;
		transform: rotate(45deg);
		/*
		these properties are very sensitive and are overridden
		if the checkbox has a label or supporting text
	*/
		top: 14px;
		left: 9px;
		/*
			this prevents simulated click events to the checkbox, eg from Selenium tests
			from being intercepted by the tick
		*/
		pointer-events: none;

		/* the checkmark ✓ */
		&:after,
		&:before {
			position: absolute;
			display: block;
			background-color: ${i.fillSelected};
			transition: all ${jt} ease-in-out;
			content: '';
		}

		/* the short side */
		&:before {
			height: 2px;
			bottom: 0;
			left: 0;
			right: 100%;
			transition-delay: 0.05s;
		}

		/* the long side */
		&:after {
			bottom: 0;
			right: 0;
			top: 100%;
			width: 2px;
			transition-delay: 0.1s;
		}
	}
`),t??n?nl:"",n?rl:""];var i}}),Ge("label",{htmlFor:c,css:Kr,children:n?Ze("div",{children:[Ge(p,{hasSupportingText:!0,children:t}),Ge(u,{children:n})]}):Ge(p,{children:t})})]})},ol=Be`
	${ii};
`,dl=Be`
	width: 100%;

	${Jt.mobileLandscape} {
		display: flex;
		justify-content: flex-start;
	}
`,sl=Be`
	margin-top: ${bt[2]}px;
`,cl=Be`
	width: 100%;
	${Jt.mobileLandscape} {
		@supports (display: grid) {
			display: grid;
			row-gap: ${bt[2]}px;
			column-gap: ${bt[2]}px;
			& > label {
				margin: 0;
			}
		}
	}
`,hl=e=>Be`
	${Jt.mobileLandscape} {
		grid-template-columns: repeat(${e}, 1fr);
	}
`,ul={2:hl(2),3:hl(3),4:hl(4),5:hl(5)},pl=e=>Be`
	${rt};

	&:focus + label {
		html:not(.src-focus-disabled) & {
			outline: 3px solid ${lt.focus[400]};
		}
	}

	&:checked + label {
		box-shadow: inset 0 0 0 2px ${e.borderSelected};
		background-color: ${e.backgroundSelected};

		& > * {
			color: ${e.textSelected};

			/* last child is the tick */
			&:last-child {
				&:before {
					right: 0;
				}
				&:after {
					top: 0;
				}
			}
		}
	}
`,vl=Be`
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
`,ml=e=>Be`
	flex: 1;
	display: flex;
	justify-content: center;
	min-height: ${Ie}px;
	margin: 0 0 ${bt[2]}px 0;
	box-shadow: inset 0 0 0 1px ${e.borderUnselected};
	border-radius: 4px;
	position: relative;
	cursor: pointer;
	background-color: ${e.backgroundUnselected};
	color: ${e.textUnselected};

	${Jt.mobileLandscape} {
		margin: 0 ${bt[2]}px 0 0;
		&:last-child {
			margin: 0;
		}
	}

	&:hover {
		box-shadow: inset 0 0 0 2px ${e.borderHover};
		background-color: ${e.backgroundHover};
		color: ${e.textHover};
	}
`,fl=Be`
	flex: 0 1 auto;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	position: relative;
	box-sizing: border-box;

	${Jt.mobileLandscape} {
		flex-direction: column;
		padding: ${bt[2]}px ${bt[6]}px;
	}

	& > * {
		${Nt.medium({fontWeight:"bold"})};
		text-align: center;
	}

	& svg {
		width: ${Ke}px;
		max-height: ${Ne}px;
		fill: currentColor;
		margin-right: ${bt[1]}px;

		${Jt.mobileLandscape} {
			margin-bottom: -${bt[1]}px;
			margin-right: 0;
		}
	}
`,gl=Be`
	width: 100%;
	${Jt.mobileLandscape} {
		& > div {
			width: 100%;
		}
	}
`,xl=e=>Be`
	/* overall positional properties */
	position: absolute;
	top: 50%;
	left: 50%;
	width: 7px;
	height: 20px;
	transform: rotate(45deg) translateX(-100%) translateY(-35%);
	opacity: 0;

	/* the checkmark ✓ */
	&:after,
	&:before {
		position: absolute;
		display: block;
		background-color: ${e.backgroundTick};
		transition: all ${jt} ease-in-out;
		content: '';
	}

	/* the short side */
	&:before {
		height: 2px;
		bottom: 0;
		left: 0;
		right: 100%;
		transition-delay: 0.05s;
	}

	/* the long side */
	&:after {
		bottom: 0;
		right: 0;
		top: 100%;
		width: 2px;
		transition-delay: 0.1s;
	}
`,bl=e=>Be`
	box-shadow: inset 0 0 0 2px ${e.borderError};

	& > * {
		color: ${e.textError};
	}
`,yl=({id:e,name:t,label:n,hideLabel:r,supporting:l,multi:a,error:o,columns:d,cssOverrides:s,children:c,theme:h,...u})=>{const p=e??li(),v=(n&&!r||l)??o?sl:"";return Ze("fieldset",{css:[ol,s],id:p,...u,children:[n?Ge(Pr,{text:n,supporting:l,hideLabel:r,theme:h}):"","string"==typeof o&&Ge(Yr,{id:ai(p),theme:h,children:o}),Ge("div",{css:[d?[cl,ul[d]]:dl,v],children:i.Children.map(c,(e=>(0,i.cloneElement)(e,Object.assign({type:a?"checkbox":"radio"},o?{error:!0,"aria-describedby":ai(p)}:{},{name:t}))))})]})},wl=({id:e,label:t,value:n,icon:r,checked:l,defaultChecked:a,cssOverrides:o,error:d,onChange:s,theme:c={},type:h="radio",...u})=>{const p=e=>Ln(Ji,c,e,tn),[v,m]=(0,i.useState)(!1);return Ze(Re,{children:[Ge("input",{css:e=>[pl(p(e.choiceCard)),v?vl:"",o],id:e,value:n,"aria-invalid":!!d,defaultChecked:a??void 0,checked:null!=l?null!=l?l:!!a:void 0,onChange:e=>{s&&s(e),m(!0)},type:h,...u}),Ze("label",{css:e=>[ml(p(e.choiceCard)),d?bl(p(e.choiceCard)):""],htmlFor:e,children:[Ze("div",{css:[fl,r?"":gl],children:[r||"",Ge("div",{children:t})]}),Ge("span",{css:e=>[xl(p(e.choiceCard))]})]})]})},Sl=({size:e,theme:t})=>Ge("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Ge("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M23 16.768 12.502 6.27h-1.004L1 16.768l.98.954L12 9.284l10.02 8.438.98-.954Z",fill:t?.fill})}),Hl=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge(Sl,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"Collapse to show less"}):""]}),$l={footer:{border:lt.brand[600],background:lt.brand[400],text:lt.neutral[100],anchor:lt.neutral[100],anchorHover:lt.brandAlt[400]}},zl=(e=$l.footer)=>Be`
	color: ${e.text};
	background-color: ${e.background};
	padding: 0 ${bt[3]}px ${bt[3]}px ${bt[3]}px;

	${Jt.desktop} {
		padding-bottom: ${bt[6]}px;
	}
`,Cl=Be`
	display: flex;
	align-items: center;
`,Ll=Be`
	margin-bottom: ${bt[6]}px;
	${Jt.desktop} {
		margin-bottom: ${bt[1]}px;
	}
`,kl=e=>e-Pe/2,Rl=Be`
	margin-bottom: ${kl(bt[6])}px;
	${Jt.desktop} {
		margin-bottom: ${kl(bt[1])}px;
	}
`,Gl=Be`
	${Nt.xxsmall()};
	display: block;
`,Zl=Be`
	${ei.mobile.and.tablet} {
		padding-right: ${Pe}px;
	}
`,Bl=Ze("a",{href:"#top",css:e=>((e=$l.footer)=>Be`
	display: flex;
	align-items: center;
	height: ${Pe}px;
	padding-left: ${bt[2]}px;

	${Nt.small({fontWeight:"bold"})};
	color: ${e.anchor};
	background-color: ${e.background};
	text-decoration: none;
	white-space: nowrap;

	& :hover {
		color: ${e.anchorHover};
	}

	& :focus {
		${Ht};
	}
`)(e.footer),children:["Back to top",Ge("div",{css:e=>((e=$l.footer)=>Be`
	height: ${Pe}px;
	width: ${Xe}px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: ${Pe}px;
	background: currentColor;
	margin-left: ${bt[2]}px;

	svg {
		height: ${je}px;
		width: ${et}px;
		fill: ${e.background};
	}
`)(e.footer),children:Ge(Hl,{})})]}),Vl=({showBackToTop:e,children:t,cssOverrides:i,...n})=>Ze("footer",{css:e=>[zl(e.footer),i],...n,children:[Ze("div",{css:[Cl,e?Rl:Ll],children:[Ge("div",{css:e=>((e=$l.footer)=>Be`
	border-style: solid;
	border-color: ${e.border};
	border-width: 0 0 1px 0;
	flex: 1 1 auto;

	/* TODO: viewport-specific layout for when footer supports content */
	/* border-width: 1px 0 1px 0;

	${Jt.desktop} {
		border-width: 1px;
	} */
`)(e.footer),children:t}),e?Bl:""]}),Ge("small",{css:[Gl,e?Zl:""],children:"© 2021 Guardian News and Media Limited or its affiliated companies. All rights reserved."})]}),Al=({size:e,theme:t})=>Ge("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Ge("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.41 2 1 19.057l.668.943h20.664l.668-.943L12.59 2h-1.18Zm-.063 12.178h1.306l.621-6.917-.856-.728h-.835l-.857.728.62 6.917ZM12 15.452c.7 0 1.274.573 1.274 1.274 0 .7-.573 1.274-1.274 1.274-.7 0-1.274-.573-1.274-1.274 0-.7.573-1.274 1.274-1.274Z",fill:t?.fill})}),Fl=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge(Al,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"Warning"}):""]}),Tl=({size:e})=>Ge("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Ge("path",{d:"M12.379 5.615c.903 0 2.034-.61 2.708-1.424.61-.737 1.055-1.767 1.055-2.797 0-.14-.012-.28-.038-.394-1.004.038-2.212.674-2.937 1.526-.572.648-1.093 1.665-1.093 2.708 0 .153.025.305.038.356.063.013.165.025.267.025ZM9.2 21c1.234 0 1.78-.826 3.319-.826 1.564 0 1.907.8 3.28.8 1.348 0 2.25-1.245 3.102-2.466.954-1.399 1.348-2.772 1.374-2.835-.09-.026-2.67-1.081-2.67-4.044 0-2.568 2.034-3.725 2.148-3.814-1.347-1.933-3.395-1.983-3.954-1.983-1.513 0-2.746.915-3.522.915-.839 0-1.945-.865-3.255-.865C6.53 5.882 4 7.942 4 11.832c0 2.417.94 4.972 2.098 6.625C7.09 19.856 7.954 21 9.2 21Z",fill:"black"})}),Ml=({size:e,isAnnouncedByScreenReader:t=!1})=>Ze(Re,{children:[Ge(Tl,{size:e}),t?Ge("span",{css:Be`
					${rt}
				`,children:"Apple logo"}):""]}),El=({size:e,theme:t})=>Ge("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Ge("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.045 1v18.274l-8.576-7.167-.931.932L11.523 23h.955l9.985-9.96-.932-.932-8.575 7.166V1h-1.911Z",fill:t?.fill})}),Wl=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge(El,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"Arrow down"}):""]}),Pl=({size:e,theme:t})=>Ge("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Ge("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M23 11.044H4.726l7.167-8.575-.932-.932L1 11.522v.956l9.96 9.984.932-.931-7.166-8.575H23v-1.912Z",fill:t?.fill})}),Ol=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge(Pl,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"Arrow left"}):""]}),Dl=({size:e,theme:t})=>Ge("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Ge("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1 12.956h18.274l-7.167 8.575.932.932L23 12.478v-.956l-9.96-9.985-.932.932 7.166 8.575H1v1.912Z",fill:t?.fill})}),Il=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge(Dl,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"Arrow right"}):""]}),_l=({size:e,theme:t})=>Ge("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Ge("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.956 23V4.726l8.575 7.167.932-.932L12.478 1h-.956l-9.984 9.96.931.932 8.576-7.166V23h1.91Z",fill:t?.fill})}),Nl=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge(_l,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"Arrow up"}):""]}),jl=({size:e,theme:t})=>Ge("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Ge("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2 15.75h3.75L11 21h1V3h-1L5.75 8.25H2l-1 1v5.5l1 1ZM21.3 12c0 2.7-.925 5.175-2.5 7.175l.55.525A9.906 9.906 0 0 0 23 12c0-3.125-1.425-5.9-3.65-7.725l-.55.525c1.575 2 2.5 4.475 2.5 7.2Zm-5.2 0c0 1.575-.425 2.975-1.275 4.2l.65.65C16.75 15.575 17.5 13.9 17.5 12c0-1.925-.75-3.6-2.025-4.875l-.65.65C15.675 9 16.1 10.425 16.1 12Z",fill:t?.fill})}),Ul=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge(jl,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"Audio"}):""]}),ql=({size:e,theme:t})=>Ge("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Ge("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M23 6.5v10.975l-1.475 1.55H2.5L1 17.55V6.5L2.5 5h4.975l2.5-2.5H14L16.5 5h5.025L23 6.5Zm-11 9.75c2.5 0 4.525-2 4.525-4.475 0-2.5-2.025-4.5-4.525-4.5-2.5 0-4.5 2-4.5 4.5 0 2.475 2 4.475 4.5 4.475Z",fill:t?.fill})}),Xl=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge(ql,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"Camera"}):""]}),Yl=({size:e,theme:t})=>Ge("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Ge("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.011 11.883 2 12.896l5.057 7.08h.48L22 5.005l-1.011-.986L7.537 16.207l-4.526-4.324Z",fill:t?.fill})}),Ql=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge(Yl,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"Checkmark"}):""]}),Jl=({size:e,theme:t})=>Ge("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Ge("path",{fillRule:"evenodd",clipRule:"evenodd",d:"m11.258 2 .953.977L4.842 12l7.369 9.023-.953.977-9.498-9.499V11.5L11.258 2Zm10.026 0 .952.977L14.867 12l7.369 9.023-.952.977-9.5-9.499V11.5L21.285 2Z",fill:t?.fill})}),Kl=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge(Jl,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"Double chevron left"}):""]}),ea=({size:e,theme:t})=>Ge("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Ge("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.721 1 6.25 11.471v1.058L16.721 23l.982-.956L9.321 12l8.382-10.043L16.721 1Z",fill:t?.fill})}),ta=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge(ea,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"Chevron left"}):""]}),ia=({size:e,theme:t})=>Ge("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Ge("path",{fillRule:"evenodd",clipRule:"evenodd",d:"m2.712 2 9.499 9.499V12.5L2.712 22l-.952-.977L9.128 12 1.76 2.977 2.712 2Zm10.025 0 9.499 9.499V12.5L12.737 22l-.952-.977L19.153 12l-7.368-9.023.952-.977Z",fill:t?.fill})}),na=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge(ia,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"Double chevron right"}):""]}),ra=({size:e,theme:t})=>Ge("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Ge("path",{fillRule:"evenodd",clipRule:"evenodd",d:"m7.232 1-.982.957L14.632 12 6.25 22.044l.982.956 10.471-10.471V11.47L7.232 1Z",fill:t?.fill})}),la=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge(ra,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"Chevron right"}):""]}),aa=({size:e,theme:t})=>Ge("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Ge("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-8.909-.318-.659-7.864h-.886l-.682 8.523 1.159 1.159 6.34-.59V12l-5.272-.318Z",fill:t?.fill})}),oa=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge(aa,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"Clock"}):""]}),da=({size:e,theme:t})=>Ge("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Ge("path",{fillRule:"evenodd",clipRule:"evenodd",d:"m23 6.57-1.833-1.81H2.833L1 6.57v1.664h22V6.569Zm0 3.69H1v7.164l1.803 1.81h18.364L23 17.424V10.26Zm-17.368 5.5h2.29v-1.158h-2.29v1.158Zm5.772 0h-2.29v-1.158h2.29v1.158Zm1.192 0h2.29v-1.158h-2.29v1.158Zm5.772 0h-2.29v-1.158h2.29v1.158Z",fill:t?.fill})}),sa=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge(da,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"Credit card"}):""]}),ca=({size:e,theme:t})=>Ge("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Ge("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.015 14.042 20.707 22 22 20.709 14.06 12 22 3.291 20.707 2l-8.692 7.958L3.293 2.03 2 3.321 9.97 12 2 20.679l1.293 1.291 8.722-7.928Z",fill:t?.fill})}),ha=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge(ca,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"Close"}):""]}),ua=({size:e,theme:t})=>Ge("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Ge("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2.29 14.786h1.903s1.885-.038 1.866 1.675c-.02 1.275-1.827 1.466-1.827 1.466H2.29v-3.14Zm5.694 6.148c.053.25.233.524.834.552.8.019 1.257-.286 1.257-.286v.59S9.199 22 8.78 22c-.437 0-1.732-.095-1.732-1.294 0-.97 1.066-1.275 1.675-1.275 1.066.038 1.58.418 1.56 1.503 0 .016-1.753.004-2.3 0Zm.002-.476h1.46s0-.552-.704-.552c-.53 0-.703.286-.756.552Zm4.62-.596c.211-.23.566-.413 1.16-.413 1.181 0 1.371.99 1.352 1.256-.018.267-.114 1.276-1.484 1.276-.518 0-.834-.177-1.028-.396v.32h-.933v-3.427h.933v1.384Zm.8 1.586c.551-.02.799-.495.799-.723 0-.229-.134-.705-.838-.705-.546 0-.713.413-.761.615v.248c.048.206.215.565.8.565Zm8.05-.095.02.533s-.438.095-.724.095c-.285 0-1.028-.171-1.028-.895v-1.104h-.78v-.494h.78v-.59h.952v.59h.78v.494h-.78v.952s0 .476.38.476c.381 0 .4-.057.4-.057ZM18.563 15.3h1.104v2.646h.933V15.3h1.123v-.552h-3.16v.552Zm-.38.133.114-.552s-.476-.209-1.313-.209c-.819 0-2.132.457-2.132 1.694 0 1.218 1.39 1.637 2.246 1.637.856 0 1.142-.133 1.142-.133l-.095-.61s-.381.115-1.028.115c-.628-.02-1.275-.514-1.275-1.066.019-.495.59-1.047 1.332-1.047.57 0 1.009.171 1.009.171Zm-8.413-.666s1.56-.076 1.56.838c0 .78-.894.837-.894.837s.248.038.362.21c.095.152.723 1.294.723 1.294h-.952s-.152-.19-.228-.324a5.25 5.25 0 0 0-.229-.419s-.133-.475-.59-.475l-.342-.013v1.23h-.914v-3.178H9.77Zm-.59 1.428h.495s.685-.038.723-.457c.02-.4-.666-.457-.666-.457H9.18v.914Zm3.825.495h1.523v-.59h-1.523v-.724h1.657v-.609h-2.589v3.179h2.608v-.571h-1.675v-.685Zm3.712 2.436h.933v-.648h-.933v.648Zm0 2.779h.933v-2.417h-.933v2.417Zm-10.163-3.96h.913v-3.178h-.913v3.179Zm-4.264.8h1.903s1.885-.038 1.866 1.675c-.02 1.275-1.827 1.466-1.827 1.466H2.29v-3.14Zm.933 2.55h.609s1.256-.076 1.256-1.046c0-.97-1.332-1.066-1.332-1.066h-.533v2.113Zm0-3.958h.609s1.256-.096 1.256-1.047c0-.99-1.332-1.066-1.332-1.066h-.533v2.113Zm8.732-10.951v6.368s-3.693-.666-3.693-3.198c0-2.018 2.734-2.908 3.693-3.17Zm0-.12c-2.22-.16-7.252.88-7.252 3.157 0 1.484 2.665 3.654 7.004 3.711.171 0 5.1-.19 5.025-5.481-.064-4.444-3.39-5.223-4.454-5.358v-.271c4.24.27 7.575 2.82 7.575 5.914 0 3.274-3.73 5.938-8.317 5.938s-8.298-2.664-8.298-5.938C3.238 4.665 6.949 2 11.536 2c.14 0 .28.003.419.008v4.259Z",fill:t?.fill})}),pa=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge(ua,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"Direct Debit logo"}):""]}),va=({size:e,theme:t})=>Ge("svg",{width:void 0,height:e?Ee[e]:void 0,viewBox:"-1 2 50 20",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Ge("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M22.64 7.676h2.386s2.362-.048 2.338 2.1c-.023 1.598-2.29 1.836-2.29 1.836H22.64V7.676Zm7.137 7.707c.067.312.293.656 1.047.691 1.002.024 1.574-.358 1.574-.358v.74s-1.097.263-1.622.263c-.549 0-2.171-.12-2.171-1.623 0-1.216 1.336-1.598 2.1-1.598 1.335.047 1.98.525 1.956 1.884 0 .02-2.199.005-2.884 0Zm.003-.597h1.831s0-.692-.883-.692c-.664 0-.881.358-.948.692Zm5.791-.747c.265-.288.71-.518 1.456-.518 1.48 0 1.718 1.24 1.694 1.575-.024.334-.143 1.598-1.86 1.598-.65 0-1.046-.221-1.29-.496v.4h-1.168v-4.294h1.169v1.735Zm1.003 1.987c.692-.024 1.002-.62 1.002-.906 0-.286-.167-.883-1.05-.883-.685 0-.894.518-.955.77v.312c.06.257.27.707 1.003.707Zm10.092-.119.024.668s-.549.12-.907.12c-.357 0-1.288-.215-1.288-1.122v-1.384h-.978v-.62h.978v-.74h1.193v.74h.978v.62h-.978v1.193s0 .597.477.597.501-.072.501-.072ZM43.04 8.32h1.383v3.316h1.17V8.32H47v-.692h-3.96v.692Zm-.478.167.143-.692s-.596-.262-1.646-.262c-1.026 0-2.672.572-2.672 2.123 0 1.527 1.742 2.052 2.816 2.052 1.073 0 1.43-.167 1.43-.167l-.118-.764s-.478.144-1.289.144c-.787-.024-1.598-.645-1.598-1.336.024-.62.74-1.313 1.67-1.313.716 0 1.264.215 1.264.215Zm-10.545-.835s1.956-.095 1.956 1.05c0 .978-1.121 1.05-1.121 1.05s.31.047.453.262c.12.19.907 1.622.907 1.622h-1.194s-.19-.238-.286-.405a6.55 6.55 0 0 0-.286-.525s-.167-.597-.74-.597l-.43-.015v1.542h-1.145V7.652h1.886Zm-.74 1.79h.62s.86-.048.907-.573c.024-.501-.835-.573-.835-.573h-.692v1.145Zm4.795.62h1.91v-.74h-1.91v-.907h2.076v-.763h-3.244v3.984h3.269v-.715h-2.1v-.86Zm4.653 3.054h1.169v-.812h-1.17v.812Zm0 3.483h1.169v-3.03h-1.17v3.03Zm-12.74-4.963h1.145V7.652h-1.145v3.984ZM22.64 12.64h2.386s2.362-.049 2.338 2.099c-.023 1.598-2.29 1.837-2.29 1.837H22.64V12.64Zm1.17 3.197h.763s1.574-.096 1.574-1.313c0-1.216-1.67-1.336-1.67-1.336h-.668v2.649Zm0-4.963h.763s1.574-.12 1.574-1.312c0-1.241-1.67-1.336-1.67-1.336h-.668v2.648Zm-11.883-.825v7.983s-4.629-.836-4.629-4.009c0-2.53 3.427-3.646 4.63-3.974Zm0-.15c-2.782-.2-9.09 1.103-9.09 3.957 0 1.86 3.34 4.581 8.78 4.652.215 0 6.394-.238 6.299-6.87-.08-5.572-4.25-6.548-5.583-6.717v-.34c5.315.338 9.496 3.534 9.496 7.414 0 4.104-4.677 7.444-10.427 7.444S1 16.098 1 11.994 5.652 4.55 11.402 4.55c.177 0 .352.003.526.01v5.339Z",fill:t?.fill})}),ma=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge(va,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"Direct Debit logo"}):""]}),fa=({size:e,theme:t})=>Ze("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:[Ge("path",{d:"M2.571 4 1 5.699l9.952 7.926h2.096L23 5.699 21.429 4H2.57Z",fill:t?.fill}),Ge("path",{d:"M1 17.625v-9.5l9.952 7h2.096l9.952-7v9.5l-1.571 1.5H2.57L1 17.625Z",fill:t?.fill})]}),ga=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge(fa,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"Email"}):""]}),xa=({size:e,theme:t})=>Ge("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Ge("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M23 10.75h-1.25l-.6-4.525L15.4 12 14 10.575l5.725-5.75-4.475-.575V3h7.275l.475.475v7.275ZM11 8 9.975 9H3v10h16v-5l.975-1H21v6.975L19.975 21h-18L1 19.975V8l.975-1H11v1Z",fill:t?.fill})}),ba=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge(xa,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"External link"}):""]}),ya=({size:e,theme:t})=>Ze("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:[Ge("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.216 5.698c-.75-.251-1.497-.4-2.216-.4-4.626 0-10.437 6.145-10.437 6.145v1.114s1.25 1.322 3.053 2.74l2.916-2.916a4.48 4.48 0 0 1 4.838-4.838l1.845-1.845Zm-4.333 7.016 2.119-2.12v.014l-2.116 2.117a.79.79 0 0 1-.003-.01ZM8.207 14.39l-2.04 2.042a.379.379 0 0 0 .008.005l2.038-2.038a.545.545 0 0 1-.006-.009Zm3.324 2.058-1.828 1.828c.777.267 1.552.426 2.297.426 4.626 0 10.437-6.144 10.437-6.144v-1.114s-1.279-1.352-3.114-2.788l-2.866 2.866c.017.161.026.325.026.49 0 2.468-2.016 4.46-4.483 4.46-.158 0-.315-.008-.469-.024Zm2.861-8.229-.008-.005 1.7-1.7.01.004-1.702 1.701Z",fill:t?.fill}),Ge("rect",{x:20.0598,y:2.55109,width:1.8977,height:24.6701,transform:"rotate(45 20.0598 2.55109)",fill:"#052962"})]}),wa=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge(ya,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"Not visible"}):""]}),Sa=({size:e,theme:t})=>Ge("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Ge("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 4.9c4.875 0 11 6.475 11 6.475v1.175s-6.125 6.475-11 6.475S1 12.55 1 12.55v-1.175S7.125 4.9 12 4.9Zm0 11.775c2.6 0 4.725-2.1 4.725-4.7A4.721 4.721 0 0 0 12 7.25c-2.6 0-4.725 2.1-4.725 4.725 0 2.6 2.125 4.7 4.725 4.7Zm0-6.275c0 .85.7 1.575 1.575 1.575h.775c0 1.3-1.05 2.35-2.35 2.35s-2.35-1.05-2.35-2.35A2.353 2.353 0 0 1 12 9.6v.8Z",fill:t?.fill})}),Ha=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge(Sa,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"View"}):""]}),$a=({size:e,theme:t})=>Ge("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Ge("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.575 6.125V9.25H6.15v3.45h3.425V23H13.7V12.7h3.375l.75-3.45H13.7V6.5c0-1.525.9-2.05 2.075-2.05h2.05L17.7 1.175c-1.025-.1-1.825-.175-3-.175-2.925 0-5.125 1.825-5.125 5.125Z",fill:t?.fill})}),za=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge($a,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"Facebook logo"}):""]}),Ca=({size:e})=>Ge("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Ge("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.575 6.125V9.25H6.15v3.45h3.425V23H13.7V12.7h3.375l.75-3.45H13.7V6.5c0-1.525.9-2.05 2.075-2.05h2.05L17.7 1.175c-1.025-.1-1.825-.175-3-.175-2.925 0-5.125 1.825-5.125 5.125Z",fill:"#1877F2"})}),La=({size:e,isAnnouncedByScreenReader:t=!1})=>Ze(Re,{children:[Ge(Ca,{size:e}),t?Ge("span",{css:Be`
					${rt}
				`,children:"Facebook logo"}):""]}),ka=({size:e,theme:t})=>Ze("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:[Ge("path",{d:"M5.91 3.763 8.21 1l3.78 4.498L15.77 1l2.299 2.763-3.881 2.21H19.5l1 1.106v5.637h-7.4v-6.19h-2.2v6.19H3.5V7.079l1-1.105h5.291l-3.88-2.21Z",fill:t?.fill}),Ge("path",{d:"M10.9 15H4v5.804L5.192 22H10.9v-7Z",fill:t?.fill}),Ge("path",{d:"M20 15h-6.9v7h5.521L20 20.787V15Z",fill:t?.fill})]}),Ra=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge(ka,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"Gift"}):""]}),Ga=({size:e,theme:t})=>Ge("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Ge("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20 12c0 .715-.094 1.408-.27 2.068h-3.328a21.996 21.996 0 0 0 0-4.132h3.33c.175.659.268 1.35.268 2.064Zm-5.607-2.064c.068.656.105 1.346.105 2.064 0 .72-.037 1.411-.106 2.068H9.608A19.888 19.888 0 0 1 9.502 12c0-.718.037-1.408.106-2.064h4.785Zm1.718-2h2.781a8.03 8.03 0 0 0-3.871-3.346c.46.928.834 2.066 1.09 3.346ZM12 4c.003 0 .026 0 .079.024.06.027.163.088.302.219.288.27.638.756.976 1.506.277.617.52 1.355.71 2.187H9.933c.19-.832.432-1.57.71-2.187.337-.75.687-1.235.975-1.506.139-.13.243-.192.303-.22A.21.21 0 0 1 11.998 4H12Zm-3.02.59c-.461.928-.835 2.066-1.091 3.346H5.108A8.03 8.03 0 0 1 8.98 4.59ZM7.598 9.936h-3.33A8.011 8.011 0 0 0 4 12c0 .715.094 1.408.27 2.068h3.328a21.993 21.993 0 0 1 0-4.132Zm.292 6.132H5.11a8.03 8.03 0 0 0 3.87 3.342c-.46-.927-.834-2.064-1.09-3.342ZM12 20h-.002a.215.215 0 0 1-.076-.024 1.178 1.178 0 0 1-.303-.219c-.288-.27-.638-.756-.976-1.506a11.705 11.705 0 0 1-.708-2.183h4.13c-.189.83-.431 1.567-.708 2.183-.338.75-.688 1.235-.976 1.506a1.18 1.18 0 0 1-.303.22.212.212 0 0 1-.076.023H12Zm3.02-.59a8.03 8.03 0 0 0 3.87-3.342h-2.78c-.256 1.278-.63 2.415-1.09 3.342ZM12 2c4.076 0 7.582 2.438 9.14 5.936h.01v.022A9.965 9.965 0 0 1 22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2Z",fill:t?.fill})}),Za=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge(Ga,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"Globe"}):""]}),Ba=({size:e})=>Ze("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:[Ge("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.545 7.648c.395-.87.954-1.629 1.61-2.316 1.483-1.554 3.278-2.55 5.404-2.889 2.974-.475 5.637.226 7.938 2.207.145.126.18.199.023.354-.812.795-1.611 1.603-2.415 2.407-.083.082-.139.183-.285.048-2.026-1.856-5.332-1.834-7.485.167a6.183 6.183 0 0 0-1.608 2.455c-.05-.033-.103-.062-.15-.098L3.545 7.648Z",fill:"#D7282A"}),Ge("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.143 21.691c-2.159-.002-4.18-.695-6.039-2.162a9.003 9.003 0 0 1-2.567-3.199l3.166-2.458c.29.737.651 1.435 1.188 2.027 1.363 1.506 3.053 2.156 5.079 1.945.94-.097 1.798-.416 2.599-.906l.073.067c.052.048.103.096.158.139l2.168 1.69.647.503a8.058 8.058 0 0 1-3.631 1.984 11.55 11.55 0 0 1-2.821.37h-.02Z",fill:"#45AC43"}),Ge("path",{fillRule:"evenodd",clipRule:"evenodd",d:"m18.615 19.337-.541-.421-2.274-1.772a2.506 2.506 0 0 1-.158-.14 5.087 5.087 0 0 0-.073-.066c.635-.485 1.165-1.058 1.514-1.787.139-.29.236-.594.328-.902.064-.212.044-.294-.218-.292-1.175.01-2.35.009-3.526.007h-1.16c-.33 0-.33 0-.33-.343v-.847c.001-.776.002-1.552-.005-2.329v-.014c0-.192.039-.267.261-.267h.003c2.88.008 5.761.006 8.642.002.155 0 .253.011.28.2.092.643.141 1.279.142 1.905v.04c-.003 1.816-.414 3.562-1.39 5.206-.403.68-.888 1.303-1.495 1.82Z",fill:"#5D7FBE"}),Ge("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.703 13.872 3.537 16.33c-.515-.958-.813-1.988-.951-3.06a9.58 9.58 0 0 1 .811-5.349c.044-.094.099-.182.148-.273 1.01.778 2.02 1.557 3.032 2.335.047.036.1.065.15.098-.423 1.261-.402 2.525-.024 3.79Z",fill:"#F4C300"})]}),Va=({size:e,isAnnouncedByScreenReader:t=!1})=>Ze(Re,{children:[Ge(Ba,{size:e}),t?Ge("span",{css:Be`
					${rt}
				`,children:"Google logo"}):""]}),Aa=({size:e,theme:t})=>Ge("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Ge("path",{fillRule:"evenodd",clipRule:"evenodd",d:"m19 21 1-1V9.375L12.6 2h-1.2L4 9.375V20l1 1h4.5v-6.5h5V21H19Z",fill:t?.fill})}),Fa=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge(Aa,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"Home"}):""]}),Ta=({size:e,theme:t})=>Ge("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Ge("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.025 11.5V7H3v5.45l1.025 1.025H17.75L15 17.05l.85.9L21 12.825v-.675l-5.1-5.125-.9.875 2.75 3.6H5.025Z",fill:t?.fill})}),Ma=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge(Ta,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"Indent"}):""]}),Ea=({size:e,theme:t})=>Ze("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:[Ge("path",{d:"M7.075 3.952c0 1.085-.785 1.95-2.08 1.95C3.786 5.902 3 5.037 3 3.952 3 2.843 3.81 2 5.05 2c1.242 0 2 .843 2.025 1.952ZM3.101 19.997V7.442H6.95v12.555H3.1Z",fill:t?.fill}),Ge("path",{d:"M9.25 11.447c0-1.565-.05-2.868-.1-4.005h3.34l.179 1.746h.076c.5-.821 1.747-2.024 3.826-2.024 2.531 0 4.43 1.72 4.43 5.417v7.422H17.15V13.04c0-1.618-.558-2.721-1.95-2.721-1.063 0-1.696.743-1.974 1.462a2.84 2.84 0 0 0-.128.977v7.239H9.25v-8.55Z",fill:t?.fill})]}),Wa=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge(Ea,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"LinkedIn logo"}):""]}),Pa=({size:e,theme:t})=>Ge("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Ge("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1 10.75v2.5h22v-2.5H1Z",fill:t?.fill})}),Oa=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge(Pa,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"Minus sign"}):""]}),Da=({size:e,theme:t})=>Ge("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Ge("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.975 4.95c0 2.5-2.15 4.55-3.975 4.55-1.625 0-3.95-2.05-3.95-4.55S9.5 1 12 1s3.975 1.45 3.975 3.95Zm-11 8.407L6 12.303c2-.694 3.8-1.003 6-1.003 2.175 0 4 .36 6 1.003l1 1.054 2 7.714-1.025 1.029h-16L3 21.071l1.975-7.714Z",fill:t?.fill})}),Ia=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge(Da,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"Account"}):""]}),_a=({size:e,theme:t})=>Ge("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Ge("path",{d:"M18.324 13.99a7.11 7.11 0 0 0-3.604-3.456l-.59-6.87A6.99 6.99 0 0 0 16.89 2H7.114a6.845 6.845 0 0 0 2.76 1.665l-.569 6.87A7.073 7.073 0 0 0 5.68 13.99H11.01v6.006l.99 4.004.991-4.004V13.99h5.332Z",fill:t?.fill})}),Na=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge(_a,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"Pinned"}):""]}),ja=({size:e,theme:t})=>Ge("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Ge("path",{d:"M10.577 15.303c-.54 2.831-1.2 5.546-3.153 6.963-.604-4.279.885-7.489 1.576-10.905-1.182-1.984.142-5.977 2.628-4.993 3.059 1.21-2.649 7.376 1.183 8.146 4 .804 5.634-6.941 3.153-9.46-3.584-3.637-10.434-.083-9.592 5.124.205 1.273 1.52 1.66.526 3.416-2.294-.508-2.979-2.317-2.89-4.73.141-3.941 3.547-6.713 6.963-7.095 4.32-.483 8.375 1.586 8.935 5.65.63 4.587-1.95 9.555-6.57 9.198-1.252-.098-1.777-.718-2.759-1.314Z",fill:t?.fill})}),Ua=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge(ja,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"Pinterest logo"}):""]}),qa=({size:e,theme:t})=>Ge("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Ge("path",{fillRule:"evenodd",clipRule:"evenodd",d:"m10.8 13.2.425 9.8h1.525l.45-9.8 9.8-.45v-1.525l-9.8-.425-.45-9.8h-1.525l-.425 9.8-9.8.425v1.525l9.8.45Z",fill:t?.fill})}),Xa=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge(qa,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"Plus sign"}):""]}),Ya=({size:e,theme:t})=>Ge("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Ge("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.506 4.7h4.976c-.6 4.745-1.13 9.399-1.36 14.605H1c.83-5.068 2.557-9.86 5.506-14.605Zm11.587 0H23c-.53 4.745-1.129 9.399-1.36 14.605h-9.098c.944-5.068 2.603-9.86 5.551-14.605Z",fill:t?.fill})}),Qa=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge(Ya,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"Quote"}):""]}),Ja=({size:e,theme:t})=>Ge("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Ge("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20.705 14.195c-.174.823-.548 1.646-.923 2.345l1.173 1.895a12.866 12.866 0 0 1-2.47 2.47l-1.895-1.223c-.774.425-1.522.749-2.345 1.023l-.474 2.12c-.574.1-1.123.175-1.746.175a9.86 9.86 0 0 1-1.746-.175l-.474-2.17c-.823-.224-1.646-.548-2.345-.973l-1.895 1.223c-.923-.699-1.796-1.547-2.47-2.47l1.222-1.92c-.424-.674-.748-1.497-.972-2.32l-2.17-.474A9.863 9.863 0 0 1 1 11.975c0-.623.075-1.172.175-1.746l2.17-.474c.224-.823.548-1.596.972-2.345L3.095 5.515a12.863 12.863 0 0 1 2.47-2.47L7.46 4.218c.699-.374 1.522-.749 2.345-.923l.474-2.22C10.803 1 11.45 1 12.025 1c.574 0 1.172.025 1.746.075l.474 2.22c.823.174 1.571.549 2.345.923l1.895-1.173a14.456 14.456 0 0 1 2.47 2.47L19.782 7.41c.375.724.749 1.522.923 2.345l2.22.474a20.432 20.432 0 0 1 0 3.492l-2.22.474Zm-8.68 4.839c3.891 0 7.059-3.168 7.059-7.059s-3.168-7.059-7.06-7.059c-3.89 0-7.058 3.168-7.058 7.06 0 3.89 3.168 7.058 7.059 7.058Z",fill:t?.fill})}),Ka=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge(Ja,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"Settings"}):""]}),eo=({size:e,theme:t})=>Ge("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Ge("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M21 6.5 19.5 5h-15L3 6.5v9L4.475 17H7v5h.975L11 17h8.5l1.5-1.5v-9Z",fill:t?.fill})}),to=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge(eo,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"Comments"}):""]}),io=({size:e,theme:t})=>Ge("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Ge("path",{fillRule:"evenodd",clipRule:"evenodd",d:"m19.151 21.336-2.418-7.386L23 9.348l-.312-.989h-7.75L12.546 1h-1.092L9.087 8.36H1.312L1 9.347l6.267 4.602-2.366 7.386.806.624L12 17.357l6.293 4.603.858-.624Z",fill:t?.fill})}),no=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge(io,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"Star"}):""]}),ro=({size:e,theme:t})=>Ge("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Ge("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm-1.773-7.853-2.27-2.17-.8.8 2.709 3.791h.454l7.455-7.716-.82-.8-6.728 6.095Z",fill:t?.fill})}),lo=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge(ro,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"Ticked"}):""]}),ao=({size:e,theme:t})=>Ge("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Ge("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M24 6.1c-.875.375-1.65.6-2.625.725 1.025-.575 1.7-1.425 2.025-2.5-.875.425-1.9 1-2.875 1.075C19.7 4.575 18.6 4 17.2 4c-2.45 0-4.5 2.05-4.5 4.5 0 .275.025.75.125 1.025C9 9.325 5.875 7.575 3.5 4.8c-.325.675-.6 1.475-.6 2.275 0 1.5.8 3.025 2.025 3.75-.4.075-1.675-.325-2.075-.525 0 2.325 1.625 4 3.65 4.475-.775.2-1.375.25-2.05.075.625 1.8 2.2 3.1 4.2 3.1-1.5 1.275-3.475 1.95-5.575 1.975-.375-.075-.775 0-1.075-.075 1.925 1.275 4.425 1.975 6.925 1.975 8.275 0 12.85-6.85 12.85-12.8 0-.175-.05-.4-.05-.575A10.12 10.12 0 0 0 24 6.1Z",fill:t?.fill})}),oo=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge(ao,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"Twitter logo"}):""]}),so=({size:e,theme:t})=>Ge("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Ge("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3 5 1 7v10l2 2h11.5V5H3Zm18.5.5-5 5v3l5 5H23v-13h-1.5Z",fill:t?.fill})}),co=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge(so,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"Video"}):""]}),ho=({size:e,theme:t})=>Ge("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Ge("path",{d:"M19.09 4.52a9.9 9.9 0 0 0-7.05-2.92c-5.49 0-9.96 4.47-9.96 9.96 0 1.75.46 3.47 1.33 4.98L2 21.69l5.28-1.38c1.45.79 3.09 1.21 4.76 1.21 5.49 0 9.96-4.47 9.96-9.96a9.92 9.92 0 0 0-2.91-7.04Zm-7.05 15.32c-1.49 0-2.95-.4-4.22-1.15l-.3-.18-3.13.82.84-3.05-.2-.31a8.19 8.19 0 0 1-1.26-4.41c0-4.56 3.71-8.27 8.28-8.27 2.21 0 4.29.86 5.85 2.43a8.222 8.222 0 0 1 2.42 5.85c0 4.56-3.72 8.27-8.28 8.27Zm4.54-6.2c-.25-.12-1.47-.73-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23a7.283 7.283 0 0 1-1.38-1.72c-.15-.25-.02-.38.11-.51.11-.11.25-.29.37-.44.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43-.14-.01-.31-.01-.48-.01-.17 0-.44.06-.66.31-.22.25-.87.85-.87 2.08 0 1.22.89 2.41 1.02 2.57.12.17 1.75 2.68 4.25 3.76.59.26 1.06.41 1.42.52.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.14-1.18-.06-.08-.23-.14-.48-.27Z",fill:t?.fill})}),uo=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge(ho,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"WhatsApp logo"}):""]}),po=({size:e})=>Ze("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:[Ge("mask",{id:"whats-app-brand__a",style:{maskType:"luminance"},maskUnits:"userSpaceOnUse",x:2,y:2,width:20,height:20,children:Ge("path",{d:"M2 2h20v20H2V2Z",fill:"white"})}),Ze("g",{mask:"url(#whats-app-brand__a)",children:[Ge("mask",{id:"whats-app-brand__b",style:{maskType:"luminance"},maskUnits:"userSpaceOnUse",x:2,y:2,width:20,height:20,children:Ge("path",{d:"M22 2H2v20h20V2Z",fill:"white"})}),Ze("g",{mask:"url(#whats-app-brand__b)",children:[Ge("path",{d:"M12 20.89A8.892 8.892 0 0 0 20.888 12 8.891 8.891 0 0 0 12 3.11 8.892 8.892 0 0 0 3.11 12 8.892 8.892 0 0 0 12 20.89Z",fill:"#2EDB2A"}),Ge("path",{d:"m4.274 15.162 4.25 4.102-5.682 1.628 1.432-5.73Z",fill:"#2EDB2A"}),Ge("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M19.086 4.906A9.922 9.922 0 0 0 12.042 2c-5.489 0-9.956 4.446-9.959 9.91a9.85 9.85 0 0 0 1.33 4.954L2 22l5.28-1.378a9.995 9.995 0 0 0 4.757 1.206h.005c5.488 0 9.955-4.445 9.958-9.91a9.824 9.824 0 0 0-2.914-7.012Zm-7.044 15.249h-.004a8.292 8.292 0 0 1-4.212-1.148l-.303-.179-3.132.818.837-3.04-.197-.311a8.195 8.195 0 0 1-1.266-4.383c.002-4.542 3.715-8.237 8.28-8.237 2.212 0 4.29.858 5.853 2.416a8.174 8.174 0 0 1 2.422 5.827c-.003 4.543-3.715 8.239-8.277 8.239l-.001-.002Zm4.54-6.17c-.25-.124-1.473-.723-1.7-.805-.228-.082-.394-.124-.56.124-.166.248-.643.805-.788.971-.145.166-.29.186-.539.063-.248-.124-1.05-.385-2.002-1.23-.74-.656-1.239-1.467-1.384-1.716-.145-.248-.015-.381.11-.505.111-.11.248-.289.373-.434.124-.145.165-.247.249-.413.083-.166.042-.31-.021-.434s-.56-1.344-.767-1.838c-.201-.484-.406-.418-.56-.425-.145-.007-.311-.01-.477-.01a.917.917 0 0 0-.663.31c-.229.248-.871.847-.871 2.066 0 1.22.891 2.396 1.015 2.562.125.166 1.755 2.666 4.251 3.739.594.255 1.057.407 1.42.522a3.424 3.424 0 0 0 1.567.098c.478-.07 1.473-.6 1.68-1.177.206-.579.207-1.075.144-1.178-.062-.103-.228-.165-.477-.29Z",fill:"white"})]})]})]}),vo=({size:e,isAnnouncedByScreenReader:t=!1})=>Ze(Re,{children:[Ge(po,{size:e}),t?Ge("span",{css:Be`
					${rt}
				`,children:"WhatsApp logo"}):""]}),mo=({size:e})=>Ge("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Ge("path",{d:"m9.6 2.292.225.91A9.037 9.037 0 0 0 7.313 4.24l-.481-.803A9.955 9.955 0 0 1 9.6 2.292Zm4.8 0-.225.91a9.037 9.037 0 0 1 2.512 1.039l.485-.803A9.95 9.95 0 0 0 14.4 2.292ZM3.438 6.832a9.965 9.965 0 0 0-1.145 2.768l.909.225A9.048 9.048 0 0 1 4.24 7.312l-.803-.481Zm-.5 5.168c0-.454.033-.908.101-1.357l-.926-.141c-.15.993-.15 2.003 0 2.997l.926-.141a9.14 9.14 0 0 1-.101-1.358Zm14.231 8.562-.482-.803c-.779.47-1.625.82-2.509 1.039l.225.909a9.973 9.973 0 0 0 2.766-1.145Zm3.893-8.562c0 .455-.033.908-.101 1.358l.927.14c.15-.993.15-2.003 0-2.996l-.927.14c.068.45.102.904.102 1.358Zm.645 2.4-.909-.225a9.05 9.05 0 0 1-1.039 2.513l.803.484c.52-.861.905-1.795 1.145-2.772Zm-8.35 6.562c-.9.136-1.815.136-2.715 0l-.141.927c.993.15 2.003.15 2.997 0l-.14-.927Zm5.938-3.586a9.087 9.087 0 0 1-1.92 1.918l.557.755a10.017 10.017 0 0 0 2.119-2.112l-.756-.561Zm-1.92-12.67a9.079 9.079 0 0 1 1.92 1.92l.755-.563a10.017 10.017 0 0 0-2.113-2.113l-.562.755Zm-12.67 1.92a9.079 9.079 0 0 1 1.92-1.92l-.562-.755A10.017 10.017 0 0 0 3.95 6.062l.755.563Zm15.857.206-.803.48c.471.78.821 1.626 1.04 2.51l.909-.225a9.933 9.933 0 0 0-1.145-2.765Zm-9.92-3.792a9.156 9.156 0 0 1 2.716 0l.141-.927c-.993-.15-2.003-.15-2.997 0l.14.927ZM5.188 20.298l-1.936.451.452-1.936-.913-.214-.452 1.936a.937.937 0 0 0 1.127 1.127l1.934-.444-.212-.92Zm-2.202-2.535.913.213.312-1.343a9.025 9.025 0 0 1-1.007-2.459l-.91.225c.205.829.514 1.628.922 2.377l-.23.987Zm4.375 2.031-1.342.313.212.912.988-.23c.749.409 1.548.718 2.376.922l.225-.91a9.02 9.02 0 0 1-2.453-1.013l-.006.006ZM12 3.875a8.125 8.125 0 0 0-6.875 12.448l-.78 3.332 3.332-.78a8.125 8.125 0 1 0 4.323-15Z",fill:"#3A76F0"})}),fo=({size:e,isAnnouncedByScreenReader:t=!1})=>Ze(Re,{children:[Ge(mo,{size:e}),t?Ge("span",{css:Be`
					${rt}
				`,children:"Signal logo"}):""]}),go=({size:e})=>Ze("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:[Ge("path",{d:"M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.478 2 12c0 5.523 4.478 10 10 10Z",fill:"url(#telegram-brand__a)"}),Ge("path",{d:"m6.527 11.894 5.831-2.516 3.731-1.362a.658.658 0 0 1 .388.116c.079.069.13.166.142.27.02.13.026.263.017.394-.151 1.58-.802 5.419-1.132 7.19-.14.755-.417 1.006-.683 1.025-.581.053-1.022-.383-1.584-.755l-2.231-1.5c-.988-.65-.348-1.005.215-1.592l2.755-2.691a.199.199 0 0 0-.002-.095.212.212 0 0 0-.044-.083.231.231 0 0 0-.208-.02c-.088.02-1.494.95-4.217 2.787-.4.275-.761.408-1.084.4-.358-.007-1.044-.201-1.555-.367-.63-.204-1.124-.31-1.081-.657.02-.174.267-.356.742-.544Z",fill:"white"}),Ge("defs",{children:Ze("linearGradient",{id:"telegram-brand__a",x1:11.8742,y1:1.81167,x2:11.8742,y2:21.9375,gradientUnits:"userSpaceOnUse",children:[Ge("stop",{stopColor:"#2AABEE"}),Ge("stop",{offset:1,stopColor:"#229ED9"})]})})]}),xo=({size:e,isAnnouncedByScreenReader:t=!1})=>Ze(Re,{children:[Ge(go,{size:e}),t?Ge("span",{css:Be`
					${rt}
				`,children:"Telegram logo"}):""]}),bo=({size:e,theme:t})=>Ge("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Ge("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.488 1 18 2.512v18.976l-1.512 1.488L7.512 23 6 21.488V2.512L7.512 1h8.976Zm-4.39 20.488c.536 0 1-.44 1-1 0-.561-.464-1-1-1a1.01 1.01 0 0 0-1.025 1c0 .56.464 1 1.025 1Zm3.975-3v-14h-8v14h8Zm-4.073-4a.99.99 0 1 1 0 1.975c-.561 0-1-.439-1-.975 0-.561.439-1 1-1Zm.683-1.317H11.39l-.658-6.025.658-.658h1.293l.659.658-.66 6.025Z",fill:t?.fill})}),yo=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge(bo,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"Mobile phone with exclamation mark"}):""]}),wo=({size:e,theme:t})=>Ge("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Ge("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.975 2.275v7.25l.475.475h7.275V8.75l-4.5-.6 5.75-5.725L21.55 1l-5.725 5.775-.6-4.5h-1.25Zm-4 19.45v-7.25L9.5 14H2.25v1.25l4.475.575L1 21.575 2.4 23l5.75-5.775.575 4.5h1.25Z",fill:t?.fill})}),So=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge(wo,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"Collapse"}):""]}),Ho=({size:e,theme:t})=>Ge("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Ge("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M23 8.75V1.5l-.5-.5h-7.25v1.25l4.5.6L14 8.575 15.4 10l5.75-5.725.6 4.475H23Zm-22 6.5v7.25l.475.5h7.25v-1.25l-4.475-.6 5.725-5.775L8.6 14l-5.775 5.725-.575-4.475H1Z",fill:t?.fill})}),$o=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge(Ho,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"Expand"}):""]}),zo=({size:e,theme:t})=>Ge("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Ge("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18.262 11.463v7.5h2v-8.476l-1.025-1.025H6.987l2.75-3.525-.85-.9-5.15 5.125v.675l5.1 5.125.9-.875-2.75-3.624h11.275Z",fill:t?.fill})}),Co=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge(zo,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"Up left arrow"}):""]}),Lo=({size:e,theme:t})=>Ge("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Ge("path",{fillRule:"evenodd",clipRule:"evenodd",d:"m23 2.975-.475-.475H15.25v1.25l4.475.575L14 10.075l1.4 1.425 5.75-5.775.6 4.525H23V2.975ZM11 8.5v-2H1v2h10Zm-2 4v-2H1v2h8Zm6 4v-2H1v2h14Zm-4 4v-2H1v2h10Z",fill:t?.fill})}),ko=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge(Lo,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"Pop out"}):""]}),Ro=({size:e,theme:t})=>Ge("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Ge("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.68 5.36V18.64l-3.528-2.72-.882.882 5.046 4.998h.686L23 16.801l-.858-.882-3.503 2.72V5.36l3.503 2.72.858-.882L18.002 2.2h-.686L12.27 7.198l.882.882 3.527-2.72Zm-5.88-.22V3.18H1v1.96h9.8Zm-.98 3.92V7.1H1v1.96h8.82Zm1.96 3.92v-1.96H1v1.96h10.78ZM8.84 16.9v-1.96H1v1.96h7.84Z",fill:t?.fill})}),Go=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge(Ro,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"Scroll content"}):""]}),Zo=({size:e,theme:t})=>Ge("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Ge("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.45 6.125 12.35 1h-.7l-5.1 5.125.85.85 3.6-2.75V10h2V4.225l3.6 2.75.85-.85ZM7.4 17l-.85.9 5.1 5.1h.7l5.1-5.1-.85-.9-3.6 2.75V14h-2v5.75L7.4 17Z",fill:t?.fill})}),Bo=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge(Zo,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"Up and down arrow"}):""]}),Vo=({size:e,theme:t})=>Ge("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Ge("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18.175 10.85 12.325 5h-.7L5.8 10.85l.875.875 4.3-3.45V19h2V8.275l4.3 3.45.9-.875Z",fill:t?.fill})}),Ao=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge(Vo,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"Arrow up"}):""]}),Fo=({size:e,theme:t})=>Ge("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Ge("path",{fillRule:"evenodd",clipRule:"evenodd",d:"m10.85 14 .4 9h1.5l.4-9 8.025 4.15.725-1.3L14.325 12 21.9 7.15l-.725-1.325L13.15 10l-.4-9h-1.5l-.4 8.975-7.975-4.15L2.1 7.15 9.725 12 2.1 16.85l.775 1.3L10.85 14Z",fill:t?.fill})}),To=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge(Fo,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"Asterisk"}):""]}),Mo=({size:e,theme:t})=>Ge("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Ge("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2 15.75h3.75L11 21h1V3h-1L5.75 8.25H2l-1 1v5.5l1 1ZM17.28 12l-3.4 3.85.725.725 3.825-3.425 3.85 3.425.725-.725L19.58 12l3.425-3.85-.725-.725-3.85 3.425-3.825-3.425-.725.725 3.4 3.85Z",fill:t?.fill})}),Eo=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge(Mo,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"Sound off"}):""]}),Wo=({size:e,theme:t})=>Ge("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Ge("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.125 3h-8.25L6.5 4.389v18.148l.458.463L12 19.99 17.042 23l.458-.463V4.389L16.125 3Z",fill:t?.fill})}),Po=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge(Wo,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"Bookmark"}):""]}),Oo=({size:e,theme:t})=>Ge("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Ge("path",{fillRule:"evenodd",clipRule:"evenodd",d:"m15.324 6.777-1.058-1.083 2.318-2.318-2.293-2.293L15.324.025l2.292 2.318L19.96 0l1.084 1.058L18.7 3.401l2.343 2.343-1.058 1.033-2.343-2.318-2.318 2.318ZM17.5 8.625v13.912l-.458.463L12 20.69 6.958 23l-.458-.463V4.389L7.875 3H12c0 3.056 2.475 5.625 5.5 5.625Z",fill:t?.fill})}),Do=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge(Oo,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"Remove bookmark"}):""]}),Io=({size:e,theme:t})=>Ge("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Ge("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.636 2h1.819v3.636H5.636V2Zm10.91 0h1.818v3.636h-1.819V2Zm4.051 1L22 4.422v16.165l-1.403 1.39L3.403 22 2 20.587V4.422L3.403 3h1.324v3.545h3.637V3h7.272v3.545h3.637V3h1.324ZM3.818 9.273h16.364v10.909H3.818V9.272Zm6.364 4.036 1.345-.173v4.773h1.482v-6.363h-.827l-2 .827v.936Z",fill:t?.fill})}),_o=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge(Io,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"Calendar"}):""]}),No=({size:e,theme:t})=>Ge("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Ge("path",{fillRule:"evenodd",clipRule:"evenodd",d:"m2 2.712.977-.952L12 9.128l9.023-7.368.977.952-9.499 9.5H11.5L2 2.711Zm0 10.026.977-.953L12 19.154l9.023-7.369.977.953-9.499 9.498H11.5L2 12.738Z",fill:t?.fill})}),jo=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge(No,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"Double chevron down"}):""]}),Uo=({size:e,theme:t})=>Ge("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Ge("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.806 10.712 11.634 15h.731l3.829-4.288L15.5 10 12 13l-3.5-3-.694.712Z",fill:t?.fill})}),qo=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge(Uo,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"Expand to show more"}):""]}),Xo=({size:e,theme:t})=>Ge("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Ge("path",{fillRule:"evenodd",clipRule:"evenodd",d:"m2 11.259 9.499-9.499H12.5L22 11.259l-.977.952L12 4.843 2.977 12.21 2 11.26Zm0 10.025 9.499-9.499H12.5L22 21.284l-.977.952L12 14.868l-9.023 7.368L2 21.284Z",fill:t?.fill})}),Yo=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge(Xo,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"Double chevron up"}):""]}),Qo=({size:e,theme:t})=>Ge("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Ge("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.975 4C16.95 4 21 8.05 21 13.025c0 4.975-4.05 9-9.025 9C7 22.025 3 18 3 13.025S7 4 11.975 4Zm-.6 1.65-.625 7.675 1.25 1.05 6.35-.525v-1.225l-5.2-.3-.55-6.675h-1.225Z",fill:t?.fill})}),Jo=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge(Qo,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"Clock"}):""]}),Ko=({size:e,theme:t})=>Ge("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Ge("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm5.138-14.358-.782-.78-4.349 3.982-4.364-3.967-.782.78L10.85 12l-3.988 4.342.782.781 4.364-3.967 4.35 3.982.781-.78L13.165 12l3.973-4.358Z",fill:t?.fill})}),ed=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge(Ko,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"Close"}):""]}),td=({size:e,theme:t})=>Ge("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Ge("path",{fillRule:"evenodd",clipRule:"evenodd",d:"m21 20.5-.5.5h-17l-.5-.5v-17l.5-.5h17l.5.5v17Zm-9.5-16h-7v7h7v-7Zm8 7v-7h-7v7h7ZM5.225 8.05v-.4h.5V5.825L5.2 5.9v-.35l.775-.35h.3v2.45h.5v.4h-1.55ZM11.5 12.5h-7v7h7v-7Z",fill:t?.fill})}),id=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge(td,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"Crosswords"}):""]}),nd=({size:e,theme:t})=>Ge("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Ge("path",{fillRule:"evenodd",clipRule:"evenodd",d:"m20 21-.975 1H5l-1-1V3l1-1h11.025L20 6v15ZM18 8H6v1.5h12V8Zm0 3H6v1.5h12V11Zm-5 3H6v1.5h7V14Z",fill:t?.fill})}),rd=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge(nd,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"Document"}):""]}),ld=({size:e,theme:t})=>Ge("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Ge("path",{fillRule:"evenodd",clipRule:"evenodd",d:"m16.575 7 .9.875L12.35 13h-.7l-5.1-5.125L7.425 7 11 9.725V1h2v8.725L16.575 7ZM21 11l1-1h1v9.975L21.975 21h-20L1 19.975V10h1l1 1v8h18v-8Z",fill:t?.fill})}),ad=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge(ld,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"Download"}):""]}),od=({size:e,theme:t})=>Ge("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Ge("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7 5h2V3H7v2Zm8 0h2V3h-2v2ZM7 9h2V7H7v2Zm8 0h2V7h-2v2Zm-8 4h2v-2H7v2Zm8 0h2v-2h-2v2Zm-8 4h2v-2H7v2Zm8 0h2v-2h-2v2Zm-8 4h2v-2H7v2Zm8 0h2v-2h-2v2Z",fill:t?.fill})}),dd=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge(od,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"Drag"}):""]}),sd=({size:e,theme:t})=>Ge("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Ge("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18.404 1 4.397 15.2l2.121 2.149 2.122 2.15L20.759 7.215l-4.24-4.298.73-.74 4.24 4.298 1.187-1.204L18.405 1Zm-3.622 5.71-9.38 9.507.67.679 9.38-9.506-.67-.68ZM3.69 15.915 2.63 16.992 2 21.369l.554.561 4.32-.639 1.058-1.077-4.243-4.3Z",fill:t?.fill})}),cd=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge(sd,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"Edit"}):""]}),hd=({size:e,theme:t})=>Ge("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Ge("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.05 10.207 6.344 9.5H2.707L2 10.207v3.636l.707.707h3.636l.708-.707v-3.636Zm7.475 0-.707-.707h-3.636l-.707.707v3.636l.707.707h3.636l.707-.707v-3.636Zm7.475 0-.707-.707h-3.636l-.707.707v3.636l.707.707h3.636l.707-.707v-3.636Z",fill:t?.fill})}),ud=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge(hd,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"More"}):""]}),pd=({size:e,theme:t})=>Ge("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Ge("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1 9V7h4V4.5l1-1h2.5l1 1V7H23v2H9.5v2.5l-1 1H6l-1-1V9H1Zm7-4H6.5v6H8V5Zm8.5 12H1v-2h15.5v-2.525l.975-.975H20l1 1V15h2v2h-2v2.5l-1 1h-2.525l-.975-1V17Zm3-4H18v6h1.5v-6Z",fill:t?.fill})}),vd=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge(pd,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"Filter"}):""]}),md=({size:e,theme:t})=>Ge("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Ge("path",{fillRule:"evenodd",clipRule:"evenodd",d:"m2.6 10.725.05.675 7.6 1.9 2.375 8.15.775.05 8-18.3-.7-.7-18.1 8.225Z",fill:t?.fill})}),fd=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge(md,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"Location"}):""]}),gd=({size:e,theme:t})=>Ge("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Ge("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.001 1.723c-2.697 0-5.169.949-7.167 2.472l-.524-.524C6.133 1.448 8.88 0 12.001 0c3.122 0 5.869 1.448 7.692 3.67l-.525.525c-1.998-1.523-4.47-2.472-7.167-2.472Zm7.017 11.287L17.52 22h-7.017l-.999-2.972-4.22-4.67v-.649l1.199-1.223 3.37 1.823L10.978 4.02H13l.25 6.743 5.244 1.248.524 1Z",fill:t?.fill})}),xd=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge(gd,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"Interactive"}):""]}),bd=({size:e,theme:t})=>Ge("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Ge("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20.3 8.35 18 6.05l-2.3 2.3-1.05-1.05 2.3-2.3-2.3-2.3 1.05-1.05 2.3 2.3 2.3-2.3 1.05 1.05-2.3 2.3 2.3 2.3-1.05 1.05ZM12 4.975C12 8.275 14.725 11 18 11v9l-1 1h-4.5v-6.5h-5V21H3l-1-1V9.375L9.4 2h1l1.725 1.7c-.075.4-.125.85-.125 1.275Z",fill:t?.fill})}),yd=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge(bd,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"Remove from home"}):""]}),wd=({size:e,theme:t})=>Ge("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Ge("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.25 9V5.75H14v-1.5h3.25V1h1.5v3.25H22v1.5h-3.25V9h-1.5ZM12 4.975C12 8.275 14.725 11 18 11v9l-1 1h-4.5v-6.5h-5V21H3l-1-1V9.375L9.4 2h1l1.725 1.7c-.075.4-.125.85-.125 1.275Z",fill:t?.fill})}),Sd=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge(wd,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"Add to home"}):""]}),Hd=({size:e,theme:t})=>Ge("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Ge("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M19 21H5l-1-1V9.375L11.4 2h1.2L20 9.375V20l-1 1Zm-1.075-6.525c.025-.375.075-.65.075-.95 0-.375-.05-.625-.075-1L16.7 12.25c-.075-.475-.25-.85-.475-1.25l.65-1.05c-.4-.5-.825-.95-1.35-1.325l-1.025.65c-.4-.225-.825-.4-1.3-.475l-.225-1.225a6.99 6.99 0 0 0-1-.075c-.275 0-.6.025-.95.075L10.8 8.8c-.475.075-.9.25-1.3.475l-1-.65C7.925 9 7.525 9.45 7.125 9.95l.65 1.05c-.25.425-.4.85-.475 1.25l-1.225.275c-.025.375-.075.625-.075 1 0 .3.05.575.075.95l1.225.2c.075.5.25.85.475 1.325l-.65.975c.375.525.85 1 1.375 1.4l1-.65c.375.225.825.375 1.3.475l.225 1.225c.375.025.65.075.95.075.375 0 .625-.05 1-.075L13.2 18.2c.475-.1.925-.25 1.3-.475l1.025.65c.525-.4.95-.825 1.35-1.4l-.65-.975c.225-.4.4-.825.475-1.325l1.225-.2Zm-5.95 1.9c-1.6 0-2.85-1.35-2.85-2.85 0-1.65 1.25-2.9 2.85-2.9 1.675 0 2.9 1.225 2.9 2.9 0 1.5-1.25 2.85-2.9 2.85Z",fill:t?.fill})}),$d=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge(Hd,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"Settings"}):""]}),zd=({size:e,theme:t})=>Ge("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Ge("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18 7c0 .825-.15 1.7-.5 2.65L12.5 23h-1L6.55 9.6C6.25 8.8 6 7.875 6 7c0-3.3 2.7-6 6-6s6 2.7 6 6ZM7.75 7c0 2.325 1.925 4.25 4.25 4.25S16.25 9.325 16.25 7 14.325 2.75 12 2.75 7.75 4.675 7.75 7Z",fill:t?.fill})}),Cd=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge(zd,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"Location"}):""]}),Ld=({size:e,theme:t})=>Ge("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Ge("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.273 2c4.023 0 7.25 3.295 7.25 7.273a7.226 7.226 0 0 1-7.25 7.25C5.25 16.523 2 13.296 2 9.273 2 5.295 5.25 2 9.273 2Zm0 1.84A5.403 5.403 0 0 0 3.84 9.274c0 3 2.409 5.454 5.432 5.454 3 0 5.454-2.454 5.454-5.454 0-3.023-2.454-5.432-5.454-5.432Zm7.295 10.887L22 20.16 20.16 22l-5.433-5.432v-.932l.91-.909h.931Z",fill:t?.fill})}),kd=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge(Ld,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"Search"}):""]}),Rd=({size:e,theme:t})=>Ge("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Ge("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.273 2c4.023 0 7.25 3.295 7.25 7.273a7.226 7.226 0 0 1-7.25 7.25C5.25 16.523 2 13.296 2 9.273 2 5.295 5.25 2 9.273 2Zm0 1.84A5.403 5.403 0 0 0 3.84 9.274c0 3 2.409 5.454 5.432 5.454 3 0 5.454-2.454 5.454-5.454 0-3.023-2.454-5.432-5.454-5.432ZM5.636 9.956V8.59h7.273v1.364H5.636Zm10.932 4.772L22 20.16 20.16 22l-5.433-5.432v-.932l.91-.909h.931Z",fill:t?.fill})}),Gd=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge(Rd,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"Zoom out"}):""]}),Zd=({size:e,theme:t})=>Ge("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Ge("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.273 2c4.023 0 7.25 3.295 7.25 7.273a7.226 7.226 0 0 1-7.25 7.25C5.25 16.523 2 13.296 2 9.273 2 5.295 5.25 2 9.273 2Zm0 1.84A5.403 5.403 0 0 0 3.84 9.274c0 3 2.409 5.454 5.432 5.454 3 0 5.454-2.454 5.454-5.454 0-3.023-2.454-5.432-5.454-5.432ZM8.59 5.637h1.364v2.955h2.954v1.364H9.955v2.954H8.59V9.955H5.636V8.59h2.955V5.636Zm7.977 9.091L22 20.16 20.16 22l-5.433-5.432v-.932l.91-.909h.931Z",fill:t?.fill})}),Bd=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge(Zd,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"Zoom in"}):""]}),Vd=({size:e,theme:t})=>Ge("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Ge("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.273 2c1 0 1.954.182 2.84.568.887.387 1.637.91 2.296 1.568.66.66 1.16 1.432 1.545 2.319a6.94 6.94 0 0 1 .569 2.818c0 1-.182 1.931-.569 2.818-.386.886-.886 1.659-1.545 2.318-.659.66-1.409 1.16-2.295 1.545-.887.387-1.841.569-2.841.569-1 0-1.932-.182-2.818-.569-.887-.386-1.66-.886-2.319-1.545a7.457 7.457 0 0 1-1.568-2.318A6.942 6.942 0 0 1 2 9.273c0-1 .182-1.932.568-2.818.387-.887.91-1.66 1.568-2.319a7.457 7.457 0 0 1 2.319-1.568A6.942 6.942 0 0 1 9.273 2Zm0 1.84c-.75 0-1.455.137-2.114.41-.659.295-1.25.682-1.727 1.16-.5.5-.887 1.067-1.16 1.726a5.205 5.205 0 0 0-.431 2.137 5.1 5.1 0 0 0 .432 2.113c.272.66.659 1.228 1.159 1.728S6.5 14 7.159 14.295a5.1 5.1 0 0 0 2.114.432 5.1 5.1 0 0 0 2.113-.431 5.798 5.798 0 0 0 1.75-1.182 5.76 5.76 0 0 0 1.16-1.728c.295-.659.431-1.363.431-2.113s-.136-1.478-.432-2.137C14 6.477 13.636 5.91 13.136 5.41s-1.09-.864-1.75-1.159a5.473 5.473 0 0 0-2.113-.41Zm-.546 3.796c0 .5-.409.91-.909.91s-.909-.41-.909-.91c0-.522.41-.909.91-.909s.908.387.908.91Zm2.91 0c0 .5-.41.91-.91.91s-.909-.41-.909-.91c0-.522.41-.909.91-.909s.908.387.908.91ZM9.272 11.25c-1 0-1.91.273-2.682.818l-.41-.432a5.013 5.013 0 0 1 1.387-.954c.523-.228 1.091-.318 1.705-.318.613 0 1.181.09 1.704.318.523.25 1 .568 1.387.954l-.41.432c-.772-.545-1.659-.818-2.681-.818Zm5.454 5.318v-.932l.91-.909h.931L22 20.16 20.16 22l-5.433-5.432Z",fill:t?.fill})}),Ad=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge(Vd,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"No results"}):""]}),Fd=({size:e,theme:t})=>Ge("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Ge("path",{fillRule:"evenodd",clipRule:"evenodd",d:"m12.488 12.383 9.936 6.633.576-.426V5.425L22.424 5l-9.936 6.633v.75ZM1 12.383l9.961 6.633.55-.426V5.425L10.962 5 1 11.633v.75Z",fill:t?.fill})}),Td=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge(Fd,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"Rewind"}):""]}),Md=({size:e,theme:t})=>Ge("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Ge("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.512 11.633 1.576 5 1 5.425V18.59l.576.426 9.936-6.633v-.75Zm11.488 0L13.039 5l-.55.425V18.59l.55.426L23 12.383v-.75Z",fill:t?.fill})}),Ed=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge(Md,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"Fast forward"}):""]}),Wd=({size:e,theme:t})=>Ge("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Ge("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10 5H7L6 6v13h4V5Zm4 14h3l1-1V5h-4v14Z",fill:t?.fill})}),Pd=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge(Wd,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"Pause"}):""]}),Od=({size:e,theme:t})=>Ge("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Ge("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M19 18V6l-1-1H6L5 6v12l1 1h12l1-1Z",fill:t?.fill})}),Dd=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge(Od,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"Stop"}):""]}),Id=({size:e,theme:t})=>Ge("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Ge("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M23 7V5H1v2h22Zm0 6v-2H1v2h22Zm0 6v-2H1v2h22Z",fill:t?.fill})}),_d=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge(Id,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"Menu"}):""]}),Nd=({size:e,theme:t})=>Ge("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Ge("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.035 0A12.487 12.487 0 0 0 4.48 2.312a11.536 11.536 0 0 0-.299 16.212c4.451 4.525 11.662 4.65 16.212.273 1.044-1.02 1.89-2.213 2.436-3.48-4.177 1.74-9.25.87-12.63-2.587C6.841 9.25 6.145 4.127 8.034 0Z",fill:t?.fill})}),jd=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge(Nd,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"Dark mode"}):""]}),Ud=({size:e,theme:t})=>Ge("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Ge("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M19 3.5V6H3V3.5h16Zm-5.5 5V11H3V8.5h10.5ZM21 16v-2.5H3V16h18Zm-4.5 2.5V21H3v-2.5h13.5Z",fill:t?.fill})}),qd=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge(Ud,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"Message"}):""]}),Xd=({size:e,theme:t})=>Ge("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Ge("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm3.336-14.444v1.27H7.558v-1.27h7.778Zm-2.699 2.54v1.27h-5.08v-1.27h5.08Zm3.81 2.539v1.27h-8.89v-1.27h8.89Zm-2.223 2.54v1.27H7.558v-1.27h6.666Z",fill:t?.fill})}),Yd=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge(Xd,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"Message"}):""]}),Qd=({size:e,theme:t})=>Ge("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Ge("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18.364 2H5.636v5.68H3.43L2 9.29l9.048 7.504h1.904L22 9.289 20.571 7.68h-2.207V2Zm-1.819 5.68v-.946h-9.09v.946h9.09Zm0-3.787h-9.09v.947h9.09v-.947ZM2 20.58v-8.994l9.048 6.627h1.904L22 11.586v8.994L20.571 22H3.43L2 20.58ZM7.455 9.574h9.09v.947h-9.09v-.947Z",fill:t?.fill})}),Jd=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge(Qd,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"Newsletter"}):""]}),Kd=({size:e,theme:t})=>Ge("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Ge("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.672 11.924c0 2.655.935 5.09 2.435 7.057l-.517.516A9.743 9.743 0 0 1 0 11.924 9.743 9.743 0 0 1 3.59 4.35l.517.516c-1.5 1.968-2.435 4.402-2.435 7.058Zm20.607 0c0-2.656-.861-5.09-2.435-7.058l.566-.516A9.743 9.743 0 0 1 24 11.924a9.743 9.743 0 0 1-3.59 7.573l-.566-.516c1.574-1.967 2.435-4.402 2.435-7.057Zm-17.09 0c0 1.574.467 2.975 1.278 4.13l-.664.64c-1.254-1.254-1.967-2.901-1.967-4.77 0-1.87.713-3.59 1.967-4.77l.664.614a7.234 7.234 0 0 0-1.278 4.156Zm13.622 0a7.403 7.403 0 0 0-1.254-4.156l.615-.615c1.254 1.18 1.992 2.902 1.992 4.77 0 1.87-.738 3.517-1.992 4.771l-.615-.64a7.264 7.264 0 0 0 1.254-4.13Zm-2.877 0A3.915 3.915 0 0 1 12 15.858a3.915 3.915 0 0 1-3.934-3.934A3.915 3.915 0 0 1 12 7.989a3.915 3.915 0 0 1 3.934 3.935Zm-1.475 0c0-1.353-1.131-2.46-2.459-2.46a2.435 2.435 0 0 0-2.459 2.46A2.435 2.435 0 0 0 12 14.383c1.328 0 2.459-1.107 2.459-2.46Z",fill:t?.fill})}),es=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge(Kd,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"Notification off"}):""]}),ts=({size:e,theme:t})=>Ge("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Ge("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.672 11.924c0 2.655.935 5.09 2.435 7.057l-.517.516A9.743 9.743 0 0 1 0 11.924 9.743 9.743 0 0 1 3.59 4.35l.517.516c-1.5 1.968-2.435 4.402-2.435 7.058Zm20.607 0c0-2.656-.861-5.09-2.435-7.058l.566-.516A9.743 9.743 0 0 1 24 11.924a9.743 9.743 0 0 1-3.59 7.573l-.566-.516c1.574-1.967 2.435-4.402 2.435-7.057Zm-17.09 0c0 1.574.467 2.975 1.278 4.13l-.664.64c-1.254-1.254-1.967-2.901-1.967-4.77 0-1.87.713-3.59 1.967-4.77l.664.614a7.234 7.234 0 0 0-1.278 4.156Zm13.622 0a7.403 7.403 0 0 0-1.254-4.156l.615-.615c1.254 1.18 1.992 2.902 1.992 4.77 0 1.87-.738 3.517-1.992 4.771l-.615-.64a7.264 7.264 0 0 0 1.254-4.13Zm-2.877 0A3.915 3.915 0 0 0 12 7.989a3.915 3.915 0 0 0-3.934 3.935A3.915 3.915 0 0 0 12 15.858a3.915 3.915 0 0 0 3.934-3.934Z",fill:t?.fill})}),is=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge(ts,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"Notification on"}):""]}),ns=({size:e,theme:t})=>Ge("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Ge("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.753 6.957a4.255 4.255 0 0 1 8.51 0h1.703a5.958 5.958 0 0 0-11.915 0h1.702Zm-1.702 0v2.128l-.851.851V20.15l.851.851h11.915l.851-.851V9.936l-.851-.85V6.956h-1.702v2.128h-8.51V6.957H6.05Zm7.234 6.809c0 .556-.355 1.029-.851 1.204v1.775h-.851V14.97a1.277 1.277 0 1 1 1.702-1.204Z",fill:t?.fill})}),rs=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge(ns,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"Lock"}):""]}),ls=({size:e,theme:t})=>Ge("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Ge("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.072 1.1c1.689 0 3.088 1.375 3.088 3.064 0 1.712-1.399 3.087-3.088 3.087a3.073 3.073 0 0 1-3.063-3.087v-.097a10 10 0 0 0-1.423-.12c-2.775 0-5.476 1.35-6.803 3.739l-.12.217-.025-.025-.217-.603-.844-.434-.627.217c1.76-3.063 5.041-5.017 8.636-5.017.675 0 1.375.096 2.074.241A3.017 3.017 0 0 1 17.072 1.1Zm4.077 5.862a10.04 10.04 0 0 1 1.351 5.017 9.903 9.903 0 0 1-1.327 4.97 9.15 9.15 0 0 1-1.23 1.688c.145.362.217.772.217 1.158 0 .53-.12 1.037-.41 1.52a3.077 3.077 0 0 1-2.678 1.544 3.195 3.195 0 0 1-1.52-.41 3.077 3.077 0 0 1-1.543-2.678c0-.506.144-1.037.41-1.52a3.116 3.116 0 0 1 2.702-1.544c.506 0 1.061.097 1.52.41l.072.049c.313-.386.603-.772.82-1.158a8.083 8.083 0 0 0 1.085-4.029c0-1.278-.29-2.605-.916-3.739l-.12-.217h.023l.627.12.797-.53.12-.651Zm-8.515 14.956-.507-.434-.048-.965.434-.483v-.024h-.241c-2.75 0-5.283-1.592-6.658-4.004a8.006 8.006 0 0 1-.603-1.303c.048-.024.072-.024.096-.048a3.077 3.077 0 0 0 1.544-2.678c0-.506-.144-1.037-.41-1.52a3.106 3.106 0 0 0-2.677-1.543c-.531 0-1.038.144-1.52.41A3.077 3.077 0 0 0 .5 12.004c0 .506.145 1.037.41 1.52a3.133 3.133 0 0 0 2.22 1.519c.216.675.506 1.303.844 1.906a9.914 9.914 0 0 0 8.66 4.969Z",fill:t?.fill})}),as=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge(ls,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"Share"}):""]}),os=({size:e,theme:t})=>Ge("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Ge("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.3 9.5c1.825 0 3.975-2.05 3.975-4.55S12.8 1 10.3 1 6.35 2.45 6.35 4.95 8.675 9.5 10.3 9.5Zm12.35 3.8-1.05 1.05-2.3-2.3-2.3 2.3-1.05-1.05 2.3-2.3-2.3-2.3L17 7.65l2.3 2.3 2.3-2.3 1.05 1.05-2.3 2.3 2.3 2.3ZM10.3 11.5c1.075 0 2.1.075 3.025.25.275 2.6 2.325 4.7 4.875 5.15l1.1 4.1-1.025 1h-16L1.3 21l1.975-7.5L4.3 12.475c2-.675 3.8-.975 6-.975Z",fill:t?.fill})}),ds=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge(os,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"Remove user"}):""]}),ss=({size:e,theme:t})=>Ge("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Ge("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10 9.5c1.825 0 3.975-2.05 3.975-4.55S12.5 1 10 1 6.05 2.45 6.05 4.95 8.375 9.5 10 9.5Zm9.75 5.5h-1.5v-3.25H15v-1.5h3.25V7h1.5v3.25H23v1.5h-3.25V15ZM10 11.5c1.075 0 2.1.075 3.025.25.275 2.6 2.325 4.7 4.875 5.15L19 21l-1.025 1h-16L1 21l1.975-7.5L4 12.475c2-.675 3.8-.975 6-.975Z",fill:t?.fill})}),cs=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge(ss,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"Add user"}):""]}),hs=({size:e,theme:t})=>Ge("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Ge("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18.236 18.718A9.135 9.135 0 0 1 12 21.167c-2.41 0-4.603-.93-6.239-2.45l1.188-4.648.737-.759c1.438-.5 2.732-.722 4.314-.722 1.564 0 2.876.26 4.314.722l.719.76 1.203 4.648ZM22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-10.01-.588c1.355 0 2.951-1.703 2.951-3.779 0-2.076-1.094-3.28-2.95-3.28s-2.932 1.204-2.932 3.28c0 2.076 1.726 3.779 2.932 3.779Z",fill:t?.fill})}),us=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge(hs,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"Account"}):""]}),ps=({size:e,theme:t})=>Ge("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Ge("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.4 9.5c1.825 0 3.975-2.05 3.975-4.55S12.9 1 10.4 1 6.45 2.45 6.45 4.95 8.775 9.5 10.4 9.5Zm5.75 2 1.075-1.05 1.1 1.125L21.6 8.3l1.05 1.075-4.325 4.325-1.05-1.075L16.15 11.5Zm-5.75 0c1.075 0 2.1.075 3.025.25.275 2.6 2.325 4.7 4.875 5.15l1.1 4.1-1.025 1h-16L1.4 21l1.975-7.5L4.4 12.475c2-.675 3.8-.975 6-.975Z",fill:t?.fill})}),vs=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge(ps,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"Verified user"}):""]}),ms=({size:e,theme:t})=>Ge("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Ge("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.488 1 18 2.512v18.976l-1.512 1.488L7.512 23 6 21.488V2.512L7.512 1h8.976Zm-4.39 20.488c.536 0 1-.44 1-1 0-.561-.464-1-1-1a1.01 1.01 0 0 0-1.025 1c0 .56.464 1 1.025 1Zm3.975-3v-14h-8v14h8Z",fill:t?.fill})}),fs=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge(ms,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"Mobile phone"}):""]}),gs=({size:e,theme:t})=>Ge("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Ge("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.019 22a9.935 9.935 0 0 0 8.223-4.35l-.114-.616-.797-.478-.615.16c-1.48 2.095-3.895 3.485-6.697 3.485-4.487 0-8.178-3.69-8.178-8.224 0-4.51 3.69-8.177 8.178-8.177 2.574 0 4.784 1.139 6.31 2.96l-3.303.548v1.138h5.831l.433-.432V2h-1.116l-.57 3.44C17.782 3.32 15.094 2 12.02 2 6.484 2 1.996 6.465 1.996 11.977A10.008 10.008 0 0 0 12.02 22Z",fill:t?.fill})}),xs=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge(gs,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"Reload"}):""]}),bs=({size:e,theme:t})=>Ge("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Ge("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M19 16c1.675 0 3 1.35 3 3 0 1.675-1.325 3-3 3a2.972 2.972 0 0 1-2.975-3c0-.125 0-.275.025-.375L7.1 14.15a2.908 2.908 0 0 1-2.075.825C3.325 14.975 2 13.65 2 12a3.004 3.004 0 0 1 3.025-3.025c.775 0 1.5.35 2.075.875l8.95-4.475c-.025-.1-.025-.225-.025-.4A2.966 2.966 0 0 1 19 2c1.675 0 3 1.325 3 2.975C22 6.65 20.675 8 19 8c-.8 0-1.475-.325-2.05-.825l-8.975 4.45C8 11.7 8 11.825 8 12s0 .3-.025.375l8.975 4.45c.575-.5 1.25-.825 2.05-.825Zm0-12.8c-.975 0-1.8.775-1.8 1.775 0 1 .825 1.825 1.8 1.825 1 0 1.825-.825 1.825-1.825S20 3.2 19 3.2Zm0 17.6c1 0 1.825-.825 1.825-1.8 0-1-.825-1.8-1.825-1.8-.975 0-1.8.8-1.8 1.8 0 .975.825 1.8 1.8 1.8Z",fill:t?.fill})}),ys=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge(bs,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"Share"}):""]}),ws=({size:e,theme:t})=>Ge("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Ge("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M19 16c1.675 0 3 1.35 3 3 0 1.675-1.325 3-3 3a2.972 2.972 0 0 1-2.975-3c0-.125 0-.275.025-.375L7.1 14.15a2.908 2.908 0 0 1-2.075.825C3.325 14.975 2 13.65 2 12a3.004 3.004 0 0 1 3.025-3.025c.775 0 1.5.35 2.075.875l8.95-4.475c-.025-.1-.025-.225-.025-.4A2.966 2.966 0 0 1 19 2c1.675 0 3 1.325 3 2.975C22 6.65 20.675 8 19 8c-.8 0-1.475-.325-2.05-.825l-8.975 4.45C8 11.7 8 11.825 8 12s0 .3-.025.375l8.975 4.45c.575-.5 1.25-.825 2.05-.825Zm0-12.8c-.975 0-1.8.775-1.8 1.775 0 1 .825 1.825 1.8 1.825 1 0 1.825-.825 1.825-1.825S20 3.2 19 3.2Zm0 17.6c1 0 1.825-.825 1.825-1.8 0-1-.825-1.8-1.825-1.8-.975 0-1.8.8-1.8 1.8 0 .975.825 1.8 1.8 1.8Z",fill:t?.fill})}),Ss=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge(ws,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"Share callout"}):""]}),Hs=({size:e,theme:t})=>Ge("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Ge("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M22.3 9.7 20 7.4l-2.3 2.3-1.05-1.05 2.3-2.3-2.3-2.3L17.7 3 20 5.3 22.3 3l1.05 1.05-2.3 2.3 2.3 2.3L22.3 9.7ZM14 6.35c0 3.3 2.7 6 6 6v3.5l-1.5 1.5H10l-3.025 5H6v-5H3.475L2 15.85v-9l1.5-1.5h10.575c-.05.325-.075.675-.075 1Z",fill:t?.fill})}),$s=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge(Hs,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"Remove comment"}):""]}),zs=({size:e,theme:t})=>Ge("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Ge("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M19.25 10V6.75H16v-1.5h3.25V2h1.5v3.25H24v1.5h-3.25V10h-1.5ZM14 6c0 3.3 2.7 6 6 6v3.5L18.5 17H10l-3.025 5H6v-5H3.475L2 15.5v-9L3.5 5h10.575c-.05.325-.075.675-.075 1Z",fill:t?.fill})}),Cs=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge(zs,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"Add comment"}):""]}),Ls=({size:e,theme:t})=>Ge("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Ge("path",{fillRule:"evenodd",clipRule:"evenodd",d:"m14.381 13.196 3.863-2.837h-4.758l-1.479-4.547-1.462 4.547H5.756l3.855 2.831-1.438 4.488L12 14.88l3.856 2.82-1.475-4.503Zm4.77 8.14-.858.624L12 17.357 5.707 21.96l-.806-.624 2.366-7.386L1 9.348l.312-.989h7.775L11.454 1h1.092l2.393 7.36h7.749l.312.988-6.267 4.602 2.418 7.386Z",fill:t?.fill})}),ks=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge(Ls,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"Star outline"}):""]}),Rs=({size:e,theme:t})=>Ge("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Ge("path",{fillRule:"evenodd",clipRule:"evenodd",d:"m13.9 19.975 2.025-.5L14.5 15.05H8.575l-1.5 4.425 2.1.5V21H3.5v-1.075l1.75-.45L11.025 3.05h2.15L18.7 19.475l1.825.45V21H13.9v-1.025ZM8.95 14h5.2L11.7 6.275h-.125L8.95 14Z",fill:t?.fill})}),Gs=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge(Rs,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"Large text"}):""]}),Zs=({size:e,theme:t})=>Ge("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Ge("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.43 14.604 4.16 18.51l1.82.417v.943H1v-.987l1.58-.373L7.623 4.12h1.843l4.913 14.389 1.535.373v.987h-5.79v-.943l1.798-.417-1.272-3.905h-5.22Zm.352-.92h4.606L8.194 6.95h-.11l-2.302 6.733Zm16.143 5.198 1.075.307v.68h-4.102v-.68l1.294-.307-.877-2.632h-3.729v.044l-.57-1.514 2.106-6.032h1.316l3.487 10.134Zm-6.032-3.422h3.159l-1.514-4.716h-.065l-1.58 4.716Z",fill:t?.fill})}),Bs=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge(Zs,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"Text size"}):""]}),Vs=({size:e,theme:t})=>Ge("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Ge("path",{fillRule:"evenodd",clipRule:"evenodd",d:"m13.345 17.69 1.475-.325-1-3.1H9.495l-1.05 3.1 1.525.325v.775h-4.1v-.775l1.3-.325L11.295 5.54h1.55l4 11.825 1.275.325v.775h-4.775v-.775ZM9.82 13.315h3.7l-1.75-5.45h-.1l-1.85 5.45Z",fill:t?.fill})}),As=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge(Vs,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"Small text"}):""]}),Fs=({size:e,theme:t})=>Ge("svg",{width:e?Ee[e]:void 0,height:void 0,viewBox:"-3 -3 30 30",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0,children:Ge("path",{fillRule:"evenodd",clipRule:"evenodd",d:"m17.475 6.125-.9.875L13 4.275V13h-2V4.275L7.425 7l-.875-.875L11.65 1h.7l5.125 5.125ZM22 10h1v9.975L21.975 21h-20L1 19.975V10h1l1 1v8h18v-8l1-1Z",fill:t?.fill})}),Ts=({size:e,theme:t,isAnnouncedByScreenReader:i=!1})=>Ze(Re,{children:[Ge(Fs,{size:e,theme:t}),i?Ge("span",{css:Be`
					${rt}
				`,children:"Upload"}):""]}),Ms=({text:e,supporting:t,optional:i=!1,hideLabel:n=!1,size:r,cssOverrides:l,children:a,theme:o,...d})=>Ze("label",{css:l,...d,children:[Ge(Wr,{hideLabel:n,text:e,optional:i,size:r,theme:o}),t?Ge(Mr,{hideLabel:n,theme:o,children:t}):"",a]}),Es=Be`
	box-sizing: border-box;
	display: flex;
	margin-right: -${bt[5]}px;
	& > * {
		margin-right: ${bt[5]}px;
	}
`,Ws=e=>Be`
	${Kt[e]} {
		display: block;
		margin-right: 0;
		& > * {
			margin-right: 0;
		}
	}
`,Ps=e=>Be`
	margin-bottom: ${-bt[e]}px;
	& > * {
		margin-bottom: ${bt[e]}px;
	}
`,Os={1:Ps(1),2:Ps(2),3:Ps(3),4:Ps(4),5:Ps(5),6:Ps(6),9:Ps(9),12:Ps(12),24:Ps(24)},Ds=Be`
	width: 100% !important;
`,Is=Be`
	& > * {
		${Kt.tablet} {
			${Ds}
		}
	}
`,_s=Be`
	& > * {
		${Kt.desktop} {
			${Ds}
		}
	}
`,Ns=Be`
	& > * {
		${Kt.leftCol} {
			${Ds}
		}
	}
`,js=Be`
	& > * {
		${Kt.wide} {
			${Ds}
		}
	}
`,Us=e=>0===e?"\n\t\t\tdisplay: none;\n\t\t":`\n\t\twidth: calc((100%) * ${e} - ${bt[5]}px);\n\n\t\t/* Reset value that might have been set at a lower breakpoint */\n\t\tdisplay: block;\n\t`,qs=[{totalColumns:4,rule:Kt.tablet},{totalColumns:12,rule:ei.tablet.and.leftCol},{totalColumns:14,rule:ei.leftCol.and.wide},{totalColumns:16,rule:Jt.wide}],Xs=e=>`\n\t\t${qs.reduce(((t,i)=>{if(0===e)return"\n\t\t\t\t\tdisplay: none;\n\t\t\t\t";const n=e/i.totalColumns,r=Us(n<1?n:1);return`\n\t\t\t\t${t}\n\t\t\t\t${i.rule} {\n\t\t\t\t\t${r}\n\t\t\t\t}\n\t\t\t`}),"")}\n\t`,Ys=Be`
	box-sizing: border-box;
`,Qs=Be`
	flex: 1;
`,Js={tablet:Is,desktop:_s,leftCol:Ns,wide:js},Ks={tablet:Ws("tablet"),desktop:Ws("desktop"),leftCol:Ws("leftCol"),wide:Ws("wide")},ec=({collapseBelow:e,collapseUntil:t=e,cssOverrides:i,children:n,spaceY:r,...l})=>Ge("div",{css:[Es,t?Ks[t]:"",t?Js[t]:"",r?Os[r]:"",i],...l,children:n}),tc=({width:e,span:t,cssOverrides:i,children:n,...r})=>{const l=[Ys];return e?l.push(Be`
	${(e=>{const t=Array.isArray(e)?e:[e],i=["mobile","tablet","desktop","leftCol","wide"];let n="";for(const[e,r]of t.entries()){const t=i[e];t&&(n+=`\n\t\t\t\t${Jt[t]} {\n\t\t\t\t\t${Us(r)};\n\t\t\t\t}\n\t\t\t`)}return n})(e)};
`):t?l.push((e=>Be`
	${(e=>{const t=Array.isArray(e)?e:[e],i=["mobile","tablet","desktop","leftCol","wide"];let n="";for(const[e,r]of t.entries()){const t=i[e];t&&(n+=`\n\t\t\t\t${Jt[t]} {\n\t\t\t\t\t${Xs(r)};\n\t\t\t\t}\n\t\t\t`)}return n})(e)}
`)(t)):l.push(Qs),Ge("div",{css:[l,i],...r,children:n})},ic=Be`
	margin: 0 auto;
	box-sizing: border-box;
	padding: 0 ${bt[3]}px;
	width: 100%;
	${Jt.mobileLandscape} {
		padding: 0 ${bt[5]}px;
	}
	${Jt.tablet} {
		width: ${qt.tablet}px;
	}
	${Jt.desktop} {
		width: ${qt.desktop}px;
	}
	${Jt.leftCol} {
		width: ${qt.leftCol}px;
	}
	${Jt.wide} {
		width: ${qt.wide}px;
	}
	border-color: ${lt.neutral[86]};
`,nc=Be`
	border-left-style: solid;
	border-right-style: solid;
	border-left-width: 0;
	border-right-width: 0;

	${Jt.tablet} {
		width: ${qt.tablet+2}px;
		border-left-width: 1px;
		border-right-width: 1px;
	}
	${Jt.desktop} {
		width: ${qt.desktop+2}px;
	}
	${Jt.leftCol} {
		width: ${qt.leftCol+2}px;
	}
	${Jt.wide} {
		width: ${qt.wide+2}px;
	}
`,rc=Be`
	border-top-width: 1px;
	border-top-style: solid;
`,lc=e=>Be`
	background-color: ${e};
`,ac=({element:e="section",border:t=!1,sideBorders:i=!1,topBorder:n=!1,backgroundColor:r,borderColor:l,cssOverrides:a,children:o,...d})=>{return Ge(e,{css:[r&&lc(r),a],...d,children:Ge("div",{css:[ic,r&&lc(r),n&&rc,(i||t)&&nc,l&&(s=l,Be`
	border-color: ${s};
`)],children:o})});var s},oc=({children:e,above:t,below:i,from:n=t,until:r=i})=>{let l;return r&&(l=Be`
			${Kt[r]} {
				display: none;
			}
		`),n&&(l=Be`
			${l}
			${Jt[n]} {
				display: none;
			}
		`),Ge("span",{css:l,children:e})},dc=Be`
	& > * {
		width: 100%;
	}
`,sc=e=>Be`
	& > * + * {
		margin-top: ${bt[e]}px;
	}
`,cc={1:sc(1),2:sc(2),3:sc(3),4:sc(4),5:sc(5),6:sc(6),9:sc(9),12:sc(12),24:sc(24)},hc=({cssOverrides:e,children:t,space:i,...n})=>Ge("div",{css:[dc,i?cc[i]:"",e],...n,children:t}),uc=Be`
	display: block;
	& > * + * {
		margin-left: 0;
	}
	& > * {
		margin-bottom: ${bt[5]}px;
	}
`,pc=Be`
	${Kt.tablet} {
		${uc}
	}
`,vc=Be`
	${Kt.desktop} {
		${uc}
	}
`,mc=Be`
	${Kt.leftCol} {
		${uc}
	}
`,fc=Be`
	${Kt.wide} {
		${uc}
	}
`,gc=Be`
	width: 100% !important;
`,xc=Be`
	& > * {
		${Kt.tablet} {
			${gc}
		}
	}
`,bc=Be`
	& > * {
		${Kt.desktop} {
			${gc}
		}
	}
`,yc=Be`
	& > * {
		${Kt.leftCol} {
			${gc}
		}
	}
`,wc=Be`
	& > * {
		${Kt.wide} {
			${gc}
		}
	}
`,Sc=Be`
	width: 100%;
	${Jt.mobileLandscape} {
		@supports (display: grid) {
			display: grid;
			row-gap: ${bt[5]}px;
			column-gap: ${bt[5]}px;
		}
	}
`,Hc=e=>Be`
	${Jt.mobileLandscape} {
		grid-template-columns: repeat(${e}, 1fr);
	}
`,$c={2:Hc(2),3:Hc(3),4:Hc(4),5:Hc(5)},zc={tablet:xc,desktop:bc,leftCol:yc,wide:wc},Cc={tablet:pc,desktop:vc,leftCol:mc,wide:fc},Lc=({columns:e,collapseBelow:t,collapseUntil:i=t,cssOverrides:n,children:r,...l})=>Ge("div",{css:[Sc,$c[e],i?Cc[i]:"",i?zc[i]:"",n],...l,children:r}),kc=Be`
	display: flex;
	flex-wrap: wrap;
`,Rc=e=>Be`
	margin-left: -${bt[e]}px;
	& > * {
		margin-left: ${bt[e]}px;
		margin-bottom: ${bt[e]}px;
	}
`,Gc={1:Rc(1),2:Rc(2),3:Rc(3),4:Rc(4),5:Rc(5),6:Rc(6),9:Rc(9),12:Rc(12),24:Rc(24)},Zc=({cssOverrides:e,children:t,space:i,...n})=>Ge("div",{css:[kc,i?Gc[i]:"",e],...n,children:t}),Bc=({children:e,iconSvg:t,iconSide:n})=>{const r=Ge(i.Fragment,{children:"      "},"spacer"),l=[e];return t&&("left"===n?l.unshift(r,(0,i.cloneElement)(t,{key:"svg"})):l.push(r,(0,i.cloneElement)(t,{key:"svg"}))),l},Vc=Be`
	position: relative;
	${Nt.medium()};
	cursor: pointer;
	text-decoration: underline;
	text-underline-position: under;
	text-underline-offset: 5%;

	display: inline;
	align-items: center;

	&:focus {
		${Ht};
	}

	&:hover {
		/* If the hover text decoration thickness is not set, we default to the initial value. */
		text-decoration-thickness: var(--source-text-decoration-thickness, auto);
	}
`,Ac=Be`
	/* override user agent styles */
	border: none;
	background: transparent;
	padding: 0;
`,Fc=Be`
	svg {
		fill: currentColor;
		/*
		TODO: hardcoded bottom margin to vertically align
		icons with text. This needs to be revisited when
		the rules of icon spacing have been formalised
		 */
		margin-bottom: -3px;
		width: ${tt}px;
		height: auto;
	}
`,Tc=Be`
	svg {
		margin-left: -${bt[5]}px;
	}
`,Mc=Be`
	svg {
		margin-left: -${bt[6]}px;
		margin-right: ${bt[1]}px;
	}
`,Ec={primary:e=>Be`
	color: ${e.textPrimary};

	&:hover {
		color: ${e.textPrimaryHover};
	}
`,secondary:e=>Be`
	color: ${e.textSecondary};

	&:hover {
		color: ${e.textSecondaryHover};
	}
`},Wc={right:Tc,left:Mc},Pc=({isButton:e,priority:t,iconSvg:i,iconSide:n="left",cssOverrides:r,theme:l})=>{const a=e=>Ln(an,l,e);return l=>[Vc,e?Ac:"",Ec[t](a(l.link)),i?Fc:"",i?Wc[n]:"",r]},Oc=({priority:e="primary",icon:t,iconSide:i="left",cssOverrides:n,children:r,theme:l,...a})=>Ge("a",{css:Pc({priority:e,iconSvg:t,iconSide:i,cssOverrides:n,theme:l}),...a,children:Bc({children:r,iconSvg:t,iconSide:i})}),Dc=({priority:e="primary",icon:t,iconSide:i="left",cssOverrides:n,children:r,theme:l,...a})=>Ge("button",{css:Pc({isButton:!0,priority:e,iconSvg:t,iconSide:i,cssOverrides:n,theme:l}),...a,children:Bc({children:r,iconSvg:t,iconSide:i})}),Ic=Be`
	cursor: pointer;
`,_c=Be`
	align-items: flex-start;
	margin-bottom: ${bt[3]}px;
`,Nc=Be`
	${Nt.medium({fontWeight:"bold"})};
	margin-top: 1px;
	/* If label text is empty, add additional spacing to align supporting text */
	&:empty {
		margin-top: 2px;
	}
`,jc=({id:e,name:t,label:n,hideLabel:r=!1,supporting:l,orientation:a="vertical",error:o,cssOverrides:d,children:s,theme:c,...h})=>{const u=e??li(),p=n?Ge(Pr,{text:n,supporting:l,hideLabel:r,theme:c}):"",v=o&&Ge(Yr,{id:ai(u),theme:c,children:o}),m=Ge(Re,{children:i.Children.map(s,(e=>(0,i.cloneElement)(e,Object.assign(o?{"aria-describedby":ai(u)}:{},{name:t}))))}),f=e=>Ln(cn,c,e.radio);return Ze("fieldset",{"aria-invalid":!!o,id:u,css:e=>{return[(t=f(e),Be`
	${ii};

	&[aria-invalid='true'] input {
		border: 2px solid ${t.borderError};

		&:not(:checked):hover,
		&:active {
			border: 2px solid ${t.borderHover};
		}
	}
`),d];var t},...h,children:[p,v,"vertical"===a?Ge(hc,{children:m}):Ge(Zc,{space:5,children:m})]})},Uc=({id:e,label:t,value:i,supporting:n,checked:r,defaultChecked:l,cssOverrides:a,theme:o,...d})=>{const s=e??li(),c=e=>Ln(sn,o,e.radio,pn),h=({hasSupportingText:e,children:t})=>Ge("div",{css:t=>{return[e?Nc:"",(i=c(t),Be`
	${Nt.medium()};
	color: ${i.textLabel};
	width: 100%;
`)];var i},children:t}),u=({children:e})=>Ge("div",{css:e=>{return t=c(e),Be`
	${Nt.small()};
	color: ${t.textSupporting};
`;var t},children:e}),p=Ge("input",{id:s,type:"radio",css:e=>{return[(t=c(e),Be`
	flex: 0 0 auto;
	cursor: pointer;
	box-sizing: border-box;
	display: inline-block;
	width: ${Je}px;
	height: ${_e}px;
	margin: 0 ${bt[2]}px 0 0;

	border: 1px solid currentColor;
	border-radius: 50%;
	position: relative;
	transition: box-shadow ${jt};
	transition-delay: 0.08s;

	color: ${t.borderUnselected};

	&:checked {
		border: 2px solid ${t.borderSelected};
		color: ${t.fillSelected};
	}

	&:focus {
		${Ht};
	}

	/*
	Take care: Emotion extracts @supports blocks and moves them below
	all other <style> elements, making these values hard to override.
	I have chosen to keep these styles in the @supports block as
	moving them out makes radio buttons look horrible on older browsers
	*/
	@supports (${ni}) {
		appearance: none;
		background-color: ${t.fillUnselected};

		&:after {
			background: currentColor;
			position: absolute;
			content: '';
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			border-radius: 50%;
			transform: scale(0);
			transform-origin: center;
			transition: transform ${jt};
		}

		&:checked {
			&:after {
				transform: scale(0.6);
			}
		}
	}
`),a];var t},value:i,defaultChecked:l??void 0,checked:null!=r?null!=r?r:!!l:void 0,...d});return Ge(Re,{children:t??n?Ze("div",{css:e=>{return[(t=c(e),Be`
	position: relative;
	display: flex;
	align-items: center;
	min-height: ${Ie}px;
	cursor: pointer;

	&:hover {
		input {
			border: 2px solid ${t.borderHover};
		}
	}
`),n?_c:""];var t},children:[p,Ge("label",{htmlFor:s,css:Ic,children:n?Ze("div",{children:[Ge(h,{hasSupportingText:!0,children:t}),Ge(u,{children:n})]}):Ge(h,{children:t})})]}):p})},qc=({cssOverrides:e,children:t,...i})=>Ge("option",{css:e,...i,children:t}),Xc=({children:e,size:t="medium",cssOverrides:i,theme:n,...r})=>Ze("span",{css:e=>[Xr(Ir(e.userFeedback,n),t),i],role:"alert",...r,children:[Ge(lo,{}),e]}),Yc=e=>Be`
	border: 2px solid ${e.borderError};
	border-radius: 4px;
	color: ${e.textError};
	/* When select is active and in an error state, we want the border to remain the same. */
	&:active {
		border: 2px solid ${e.borderError};
	}
`,Qc=e=>Be`
	border: 2px solid ${e.borderSuccess};
	border-radius: 4px;
	color: ${e.textSuccess};
	/* When select is active and in an success state, we want the border to remain the same. */
	&:active {
		border: 2px solid ${e.borderSuccess};
	}
`,Jc=e=>Be`
	svg {
		fill: ${e.textError};
	}
`,Kc=e=>Be`
	svg {
		fill: ${e.textSuccess};
	}
`;Be`
	margin-top: ${bt[1]}px;
`;const eh=Be`
	margin-top: 6px;
`,th=Be`
	margin-top: ${bt[1]}px;
`,ih=({id:e,label:t,optional:i=!1,hideLabel:n=!1,supporting:r,error:l,success:a,cssOverrides:o,children:d,theme:s,...c})=>{const h=e??li(),u=e=>Ln(gn,s,e,xn);return Ze(Re,{children:[Ze(Ms,{text:t,optional:!!i,supporting:r,hideLabel:n,htmlFor:h,theme:s,children:[l&&Ge("div",{css:th,children:Ge(Yr,{id:ai(h),theme:s,children:l})}),!l&&a&&Ge("div",{css:th,children:Ge(Xc,{id:ai(h),theme:s,children:a})})]}),Ze("div",{css:e=>{return[(t=u(e.select),Be`
	position: relative;

	svg {
		display: none;
		position: absolute;
		right: ${bt[3]}px;
		top: ${bt[2]}px;
		width: ${Ke}px;
		height: ${Ne}px;
		fill: ${t.textUserInput};
		pointer-events: none;
	}
`),l?Jc(u(e.select)):"",!l&&a?Kc(u(e.select)):"",l||a?"":eh];var t},children:[Ge("select",{css:e=>{return[(t=u(e.select),Be`
	color: ${t.textUserInput};
	box-sizing: border-box;
	height: ${Ie}px;
	width: 100%;
	${Nt.medium()};
	background-color: ${t.backgroundInput};
	border: 1px solid ${t.border};
	border-radius: 4px;
	padding-left: ${bt[2]}px;

	@supports (${ni}) {
		appearance: none;
		padding-right: ${bt[2]}px;

		& ~ svg {
			display: block;
		}
	}

	&:focus {
		${Ht};
	}

	&:invalid {
		${Yc(t)};
	}
`),l?Yc(u(e.select)):"",!l&&a?Qc(u(e.select)):"",o];var t},"aria-required":!i,"aria-invalid":!!l,"aria-describedby":l??a?ai(h):"",id:h,...c,children:d}),Ge(Dn,{theme:{fill:s?.iconFill}})]})]})},nh={medium:Nt.medium(),small:Nt.xsmall()},rh=e=>Be`
	border: 2px solid ${e.borderError};
	border-radius: 4px;
	color: ${e.textError};
	margin-top: 0;
`,lh=(e,t)=>Be`
	box-sizing: border-box;
	${nh[t]};
	color: ${e.textUserInput};
	background-color: ${e.backgroundInput};
	border: 1px solid ${e.border};
	border-radius: 4px;
	padding: ${bt[2]}px ${bt[2]}px 0 ${bt[2]}px;

	&:focus {
		${Ht};
	}

	&:invalid {
		/* Remove styling of invalid input elements that gets applied in Firefox */
		box-shadow: none;

		/*
		We automatically apply error styling to fields in an invalid state,
		but stop short of applying it to empty required fields.

		Note: the following class will only be applied to a controlled
		component: https://reactjs.org/docs/forms.html#controlled-components
		*/
		.src-has-value {
			${rh(e)}
		}
	}
`,ah=Be`
	margin-top: ${bt[1]}px;
`,oh=Be`
	margin-top: 6px;
`,dh=Be`
	margin-top: 2px;
`,sh=Be`
	width: 100%;
`,ch={textUserInput:lt.neutral[7],textLabel:lt.neutral[7],textOptional:lt.neutral[46],textSupporting:lt.neutral[46],textError:lt.neutral[7],textSuccess:lt.success[400],backgroundInput:lt.neutral[100],border:lt.neutral[46],borderError:lt.error[400],borderSuccess:lt.success[400]},hh=({id:e,label:t,optional:i=!1,hideLabel:n=!1,supporting:r,size:l="medium",error:a,success:o,cssOverrides:d,rows:s=3,className:c,value:h,theme:u,...p})=>{const v=e??li(),m={...ch,...u};return Ze(Re,{children:[Ze(Ms,{text:t,supporting:r,optional:!!i,theme:u,size:l,hideLabel:n,htmlFor:v,children:[a&&Ge("div",{css:dh,children:Ge(Yr,{id:ai(v),theme:u,size:l,children:a})}),!a&&o&&Ge("div",{css:dh,children:Ge(Xc,{id:ai(v),theme:u,size:l,children:o})})]}),Ge("textarea",{css:[sh,lh(m,l),r?oh:ah,a?rh(m):"",!a&&o?(f=m,Be`
	border: 2px solid ${f.borderSuccess};
	border-radius: 4px;
	color: ${f.textSuccess};
	margin-top: 0;
`):"",d],id:v,"aria-required":!i,"aria-invalid":!!a,"aria-describedby":a??o?ai(v):"",required:!i,rows:s,className:(()=>{const e="src-has-value";return c?`${c}${h?` ${e}`:""}`:h?e:void 0})(),value:h,...p})]});var f},uh={medium:Be`
	${Nt.medium()};
	height: ${Me.medium}px;
`,small:Be`
	${Nt.xsmall()};
	height: ${Me.small}px;
`},ph=e=>Be`
	border: 2px solid ${e.borderError};
	border-radius: 4px;
	color: ${e.textError};
	margin-top: 0;
`,vh=e=>Be`
	border: 2px solid ${e.borderSuccess};
	border-radius: 4px;
	color: ${e.textSuccess};
	margin-top: 0;
`,mh=Be`
	margin-top: ${bt[1]}px;
`,fh=Be`
	margin-top: 6px;
`,gh=Be`
	margin-top: 2px;
`,xh=Be`
	width: 100%;
`,bh={30:Be`
	width: 40ex;
	max-width: 100%; /* prevent overflow on narrow viewports */
`,10:Be`
	width: 18ex;
`,4:Be`
	width: 9ex;
`},yh=({id:e,label:t,optional:i=!1,hideLabel:n=!1,supporting:r,size:l="medium",width:a,error:o,success:d,theme:s,cssOverrides:c,...h})=>{const u=e??li(),p=e=>Ln(bn,s,e.textInput);return Ze(Re,{children:[Ze(Ms,{text:t,optional:!!i,hideLabel:n,supporting:r,theme:s,size:l,htmlFor:u,children:[o&&Ge("div",{css:gh,children:Ge(Yr,{id:ai(u),theme:s,size:l,children:o})}),!o&&d&&Ge("div",{css:gh,children:Ge(Xc,{id:ai(u),theme:s,size:l,children:d})})]}),Ge("input",{css:e=>{return[a?bh[a]:xh,(t=p(e),i=l,Be`
	box-sizing: border-box;
	${uh[i]};
	color: ${t.textUserInput};
	background-color: ${t.backgroundInput};
	border: 1px solid ${t.border};
	border-radius: 4px;
	padding: 0 ${bt[2]}px;

	&:focus {
		${Ht}
	}

	&:invalid {
		/* Remove styling of invalid input elements that gets applied in Firefox */
		box-shadow: none;

		/*
			We automatically apply error styling to fields in an invalid state,
			but stop short of applying it to empty required fields.
			*/
		&[value]:not([value='']) {
			${ph(t)};
		}
	}
`),r?fh:mh,o?ph(p(e)):"",!o&&d?vh(p(e)):"",c];var t,i},type:"text",id:u,"aria-required":!i,"aria-invalid":!!o,"aria-describedby":o??d?ai(u):"",required:!i,...h})]})};console.log(e)})()})();