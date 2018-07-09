/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){"use strict";var n=[],r=e.document,i=Object.getPrototypeOf,o=n.slice,a=n.concat,s=n.push,u=n.indexOf,l={},c=l.toString,f=l.hasOwnProperty,p=f.toString,d=p.call(Object),h={},g=function e(t){return"function"==typeof t&&"number"!=typeof t.nodeType},y=function e(t){return null!=t&&t===t.window},v={type:!0,src:!0,noModule:!0};function m(e,t,n){var i,o=(t=t||r).createElement("script");if(o.text=e,n)for(i in v)n[i]&&(o[i]=n[i]);t.head.appendChild(o).parentNode.removeChild(o)}function x(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[c.call(e)]||"object":typeof e}var b="3.3.1",w=function(e,t){return new w.fn.init(e,t)},T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;w.fn=w.prototype={jquery:"3.3.1",constructor:w,length:0,toArray:function(){return o.call(this)},get:function(e){return null==e?o.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=w.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return w.each(this,e)},map:function(e){return this.pushStack(w.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(o.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:s,sort:n.sort,splice:n.splice},w.extend=w.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||g(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)n=a[t],a!==(r=e[t])&&(l&&r&&(w.isPlainObject(r)||(i=Array.isArray(r)))?(i?(i=!1,o=n&&Array.isArray(n)?n:[]):o=n&&w.isPlainObject(n)?n:{},a[t]=w.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},w.extend({expando:"jQuery"+("3.3.1"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==c.call(e))&&(!(t=i(e))||"function"==typeof(n=f.call(t,"constructor")&&t.constructor)&&p.call(n)===d)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e){m(e)},each:function(e,t){var n,r=0;if(C(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(C(Object(e))?w.merge(n,"string"==typeof e?[e]:e):s.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:u.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r,i=[],o=0,a=e.length,s=!n;o<a;o++)(r=!t(e[o],o))!==s&&i.push(e[o]);return i},map:function(e,t,n){var r,i,o=0,s=[];if(C(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&s.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&s.push(i);return a.apply([],s)},guid:1,support:h}),"function"==typeof Symbol&&(w.fn[Symbol.iterator]=n[Symbol.iterator]),w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function C(e){var t=!!e&&"length"in e&&e.length,n=x(e);return!g(e)&&!y(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}var E=function(e){var t,n,r,i,o,a,s,u,l,c,f,p,d,h,g,y,v,m,x,b="sizzle"+1*new Date,w=e.document,T=0,C=0,E=ae(),k=ae(),S=ae(),D=function(e,t){return e===t&&(f=!0),0},N={}.hasOwnProperty,A=[],j=A.pop,q=A.push,L=A.push,H=A.slice,O=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},P="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",I="\\["+M+"*("+R+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+R+"))|)"+M+"*\\]",W=":("+R+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+I+")*)|.*)\\)|)",$=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),F=new RegExp("^"+M+"*,"+M+"*"),_=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),z=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),X=new RegExp(W),U=new RegExp("^"+R+"$"),V={ID:new RegExp("^#("+R+")"),CLASS:new RegExp("^\\.("+R+")"),TAG:new RegExp("^("+R+"|[*])"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+W),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+P+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},G=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Q=/^[^{]+\{\s*\[native \w/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,K=/[+~]/,Z=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ee=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},te=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ne=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},re=function(){p()},ie=me(function(e){return!0===e.disabled&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"});try{L.apply(A=H.call(w.childNodes),w.childNodes),A[w.childNodes.length].nodeType}catch(e){L={apply:A.length?function(e,t){q.apply(e,H.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function oe(e,t,r,i){var o,s,l,c,f,h,v,m=t&&t.ownerDocument,T=t?t.nodeType:9;if(r=r||[],"string"!=typeof e||!e||1!==T&&9!==T&&11!==T)return r;if(!i&&((t?t.ownerDocument||t:w)!==d&&p(t),t=t||d,g)){if(11!==T&&(f=J.exec(e)))if(o=f[1]){if(9===T){if(!(l=t.getElementById(o)))return r;if(l.id===o)return r.push(l),r}else if(m&&(l=m.getElementById(o))&&x(t,l)&&l.id===o)return r.push(l),r}else{if(f[2])return L.apply(r,t.getElementsByTagName(e)),r;if((o=f[3])&&n.getElementsByClassName&&t.getElementsByClassName)return L.apply(r,t.getElementsByClassName(o)),r}if(n.qsa&&!S[e+" "]&&(!y||!y.test(e))){if(1!==T)m=t,v=e;else if("object"!==t.nodeName.toLowerCase()){(c=t.getAttribute("id"))?c=c.replace(te,ne):t.setAttribute("id",c=b),s=(h=a(e)).length;while(s--)h[s]="#"+c+" "+ve(h[s]);v=h.join(","),m=K.test(e)&&ge(t.parentNode)||t}if(v)try{return L.apply(r,m.querySelectorAll(v)),r}catch(e){}finally{c===b&&t.removeAttribute("id")}}}return u(e.replace(B,"$1"),t,r,i)}function ae(){var e=[];function t(n,i){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=i}return t}function se(e){return e[b]=!0,e}function ue(e){var t=d.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function le(e,t){var n=e.split("|"),i=n.length;while(i--)r.attrHandle[n[i]]=t}function ce(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function fe(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function pe(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function de(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&ie(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function he(e){return se(function(t){return t=+t,se(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function ge(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}n=oe.support={},o=oe.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},p=oe.setDocument=function(e){var t,i,a=e?e.ownerDocument||e:w;return a!==d&&9===a.nodeType&&a.documentElement?(d=a,h=d.documentElement,g=!o(d),w!==d&&(i=d.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",re,!1):i.attachEvent&&i.attachEvent("onunload",re)),n.attributes=ue(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ue(function(e){return e.appendChild(d.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=Q.test(d.getElementsByClassName),n.getById=ue(function(e){return h.appendChild(e).id=b,!d.getElementsByName||!d.getElementsByName(b).length}),n.getById?(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){return e.getAttribute("id")===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n=t.getElementById(e);return n?[n]:[]}}):(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),r.find.TAG=n.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},r.find.CLASS=n.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&g)return t.getElementsByClassName(e)},v=[],y=[],(n.qsa=Q.test(d.querySelectorAll))&&(ue(function(e){h.appendChild(e).innerHTML="<a id='"+b+"'></a><select id='"+b+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&y.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||y.push("\\["+M+"*(?:value|"+P+")"),e.querySelectorAll("[id~="+b+"-]").length||y.push("~="),e.querySelectorAll(":checked").length||y.push(":checked"),e.querySelectorAll("a#"+b+"+*").length||y.push(".#.+[+~]")}),ue(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=d.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&y.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&y.push(":enabled",":disabled"),h.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&y.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),y.push(",.*:")})),(n.matchesSelector=Q.test(m=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&ue(function(e){n.disconnectedMatch=m.call(e,"*"),m.call(e,"[s!='']:x"),v.push("!=",W)}),y=y.length&&new RegExp(y.join("|")),v=v.length&&new RegExp(v.join("|")),t=Q.test(h.compareDocumentPosition),x=t||Q.test(h.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return f=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r||(1&(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===r?e===d||e.ownerDocument===w&&x(w,e)?-1:t===d||t.ownerDocument===w&&x(w,t)?1:c?O(c,e)-O(c,t):0:4&r?-1:1)}:function(e,t){if(e===t)return f=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===d?-1:t===d?1:i?-1:o?1:c?O(c,e)-O(c,t):0;if(i===o)return ce(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?ce(a[r],s[r]):a[r]===w?-1:s[r]===w?1:0},d):d},oe.matches=function(e,t){return oe(e,null,null,t)},oe.matchesSelector=function(e,t){if((e.ownerDocument||e)!==d&&p(e),t=t.replace(z,"='$1']"),n.matchesSelector&&g&&!S[t+" "]&&(!v||!v.test(t))&&(!y||!y.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){}return oe(t,d,null,[e]).length>0},oe.contains=function(e,t){return(e.ownerDocument||e)!==d&&p(e),x(e,t)},oe.attr=function(e,t){(e.ownerDocument||e)!==d&&p(e);var i=r.attrHandle[t.toLowerCase()],o=i&&N.call(r.attrHandle,t.toLowerCase())?i(e,t,!g):void 0;return void 0!==o?o:n.attributes||!g?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},oe.escape=function(e){return(e+"").replace(te,ne)},oe.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},oe.uniqueSort=function(e){var t,r=[],i=0,o=0;if(f=!n.detectDuplicates,c=!n.sortStable&&e.slice(0),e.sort(D),f){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return c=null,e},i=oe.getText=function(e){var t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===o||4===o)return e.nodeValue}else while(t=e[r++])n+=i(t);return n},(r=oe.selectors={cacheLength:50,createPseudo:se,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Z,ee),e[3]=(e[3]||e[4]||e[5]||"").replace(Z,ee),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||oe.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&oe.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return V.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=a(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Z,ee).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=E[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&E(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=oe.attr(r,e);return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace($," ")+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==a?"nextSibling":"previousSibling",y=t.parentNode,v=s&&t.nodeName.toLowerCase(),m=!u&&!s,x=!1;if(y){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===v:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?y.firstChild:y.lastChild],a&&m){x=(d=(l=(c=(f=(p=y)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1])&&l[2],p=d&&y.childNodes[d];while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if(1===p.nodeType&&++x&&p===t){c[e]=[T,d,x];break}}else if(m&&(x=d=(l=(c=(f=(p=t)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1]),!1===x)while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===v:1===p.nodeType)&&++x&&(m&&((c=(f=p[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]=[T,x]),p===t))break;return(x-=i)===r||x%r==0&&x/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||oe.error("unsupported pseudo: "+e);return i[b]?i(t):i.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?se(function(e,n){var r,o=i(e,t),a=o.length;while(a--)e[r=O(e,o[a])]=!(n[r]=o[a])}):function(e){return i(e,0,n)}):i}},pseudos:{not:se(function(e){var t=[],n=[],r=s(e.replace(B,"$1"));return r[b]?se(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}}),has:se(function(e){return function(t){return oe(e,t).length>0}}),contains:se(function(e){return e=e.replace(Z,ee),function(t){return(t.textContent||t.innerText||i(t)).indexOf(e)>-1}}),lang:se(function(e){return U.test(e||"")||oe.error("unsupported lang: "+e),e=e.replace(Z,ee).toLowerCase(),function(t){var n;do{if(n=g?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===d.activeElement&&(!d.hasFocus||d.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:de(!1),disabled:de(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return Y.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:he(function(){return[0]}),last:he(function(e,t){return[t-1]}),eq:he(function(e,t,n){return[n<0?n+t:n]}),even:he(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:he(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:he(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:he(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=r.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=fe(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=pe(t);function ye(){}ye.prototype=r.filters=r.pseudos,r.setFilters=new ye,a=oe.tokenize=function(e,t){var n,i,o,a,s,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=r.preFilter;while(s){n&&!(i=F.exec(s))||(i&&(s=s.slice(i[0].length)||s),u.push(o=[])),n=!1,(i=_.exec(s))&&(n=i.shift(),o.push({value:n,type:i[0].replace(B," ")}),s=s.slice(n.length));for(a in r.filter)!(i=V[a].exec(s))||l[a]&&!(i=l[a](i))||(n=i.shift(),o.push({value:n,type:a,matches:i}),s=s.slice(n.length));if(!n)break}return t?s.length:s?oe.error(e):k(e,u).slice(0)};function ve(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function me(e,t,n){var r=t.dir,i=t.next,o=i||r,a=n&&"parentNode"===o,s=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||a)return e(t,n,i);return!1}:function(t,n,u){var l,c,f,p=[T,s];if(u){while(t=t[r])if((1===t.nodeType||a)&&e(t,n,u))return!0}else while(t=t[r])if(1===t.nodeType||a)if(f=t[b]||(t[b]={}),c=f[t.uniqueID]||(f[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[r]||t;else{if((l=c[o])&&l[0]===T&&l[1]===s)return p[2]=l[2];if(c[o]=p,p[2]=e(t,n,u))return!0}return!1}}function xe(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function be(e,t,n){for(var r=0,i=t.length;r<i;r++)oe(e,t[r],n);return n}function we(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Te(e,t,n,r,i,o){return r&&!r[b]&&(r=Te(r)),i&&!i[b]&&(i=Te(i,o)),se(function(o,a,s,u){var l,c,f,p=[],d=[],h=a.length,g=o||be(t||"*",s.nodeType?[s]:s,[]),y=!e||!o&&t?g:we(g,p,e,s,u),v=n?i||(o?e:h||r)?[]:a:y;if(n&&n(y,v,s,u),r){l=we(v,d),r(l,[],s,u),c=l.length;while(c--)(f=l[c])&&(v[d[c]]=!(y[d[c]]=f))}if(o){if(i||e){if(i){l=[],c=v.length;while(c--)(f=v[c])&&l.push(y[c]=f);i(null,v=[],l,u)}c=v.length;while(c--)(f=v[c])&&(l=i?O(o,f):p[c])>-1&&(o[l]=!(a[l]=f))}}else v=we(v===a?v.splice(h,v.length):v),i?i(null,a,v,u):L.apply(a,v)})}function Ce(e){for(var t,n,i,o=e.length,a=r.relative[e[0].type],s=a||r.relative[" "],u=a?1:0,c=me(function(e){return e===t},s,!0),f=me(function(e){return O(t,e)>-1},s,!0),p=[function(e,n,r){var i=!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):f(e,n,r));return t=null,i}];u<o;u++)if(n=r.relative[e[u].type])p=[me(xe(p),n)];else{if((n=r.filter[e[u].type].apply(null,e[u].matches))[b]){for(i=++u;i<o;i++)if(r.relative[e[i].type])break;return Te(u>1&&xe(p),u>1&&ve(e.slice(0,u-1).concat({value:" "===e[u-2].type?"*":""})).replace(B,"$1"),n,u<i&&Ce(e.slice(u,i)),i<o&&Ce(e=e.slice(i)),i<o&&ve(e))}p.push(n)}return xe(p)}function Ee(e,t){var n=t.length>0,i=e.length>0,o=function(o,a,s,u,c){var f,h,y,v=0,m="0",x=o&&[],b=[],w=l,C=o||i&&r.find.TAG("*",c),E=T+=null==w?1:Math.random()||.1,k=C.length;for(c&&(l=a===d||a||c);m!==k&&null!=(f=C[m]);m++){if(i&&f){h=0,a||f.ownerDocument===d||(p(f),s=!g);while(y=e[h++])if(y(f,a||d,s)){u.push(f);break}c&&(T=E)}n&&((f=!y&&f)&&v--,o&&x.push(f))}if(v+=m,n&&m!==v){h=0;while(y=t[h++])y(x,b,a,s);if(o){if(v>0)while(m--)x[m]||b[m]||(b[m]=j.call(u));b=we(b)}L.apply(u,b),c&&!o&&b.length>0&&v+t.length>1&&oe.uniqueSort(u)}return c&&(T=E,l=w),x};return n?se(o):o}return s=oe.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=a(e)),n=t.length;while(n--)(o=Ce(t[n]))[b]?r.push(o):i.push(o);(o=S(e,Ee(i,r))).selector=e}return o},u=oe.select=function(e,t,n,i){var o,u,l,c,f,p="function"==typeof e&&e,d=!i&&a(e=p.selector||e);if(n=n||[],1===d.length){if((u=d[0]=d[0].slice(0)).length>2&&"ID"===(l=u[0]).type&&9===t.nodeType&&g&&r.relative[u[1].type]){if(!(t=(r.find.ID(l.matches[0].replace(Z,ee),t)||[])[0]))return n;p&&(t=t.parentNode),e=e.slice(u.shift().value.length)}o=V.needsContext.test(e)?0:u.length;while(o--){if(l=u[o],r.relative[c=l.type])break;if((f=r.find[c])&&(i=f(l.matches[0].replace(Z,ee),K.test(u[0].type)&&ge(t.parentNode)||t))){if(u.splice(o,1),!(e=i.length&&ve(u)))return L.apply(n,i),n;break}}}return(p||s(e,d))(i,t,!g,n,!t||K.test(e)&&ge(t.parentNode)||t),n},n.sortStable=b.split("").sort(D).join("")===b,n.detectDuplicates=!!f,p(),n.sortDetached=ue(function(e){return 1&e.compareDocumentPosition(d.createElement("fieldset"))}),ue(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||le("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ue(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||le("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ue(function(e){return null==e.getAttribute("disabled")})||le(P,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),oe}(e);w.find=E,w.expr=E.selectors,w.expr[":"]=w.expr.pseudos,w.uniqueSort=w.unique=E.uniqueSort,w.text=E.getText,w.isXMLDoc=E.isXML,w.contains=E.contains,w.escapeSelector=E.escape;var k=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&w(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},D=w.expr.match.needsContext;function N(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var A=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,t,n){return g(t)?w.grep(e,function(e,r){return!!t.call(e,r,e)!==n}):t.nodeType?w.grep(e,function(e){return e===t!==n}):"string"!=typeof t?w.grep(e,function(e){return u.call(t,e)>-1!==n}):w.filter(t,e,n)}w.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?w.find.matchesSelector(r,e)?[r]:[]:w.find.matches(e,w.grep(t,function(e){return 1===e.nodeType}))},w.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(w(e).filter(function(){for(t=0;t<r;t++)if(w.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)w.find(e,i[t],n);return r>1?w.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&D.test(e)?w(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(w.fn.init=function(e,t,n){var i,o;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(i="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:L.exec(e))||!i[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(i[1]){if(t=t instanceof w?t[0]:t,w.merge(this,w.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:r,!0)),A.test(i[1])&&w.isPlainObject(t))for(i in t)g(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}return(o=r.getElementById(i[2]))&&(this[0]=o,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):g(e)?void 0!==n.ready?n.ready(e):e(w):w.makeArray(e,this)}).prototype=w.fn,q=w(r);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};w.fn.extend({has:function(e){var t=w(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(w.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&w(e);if(!D.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&w.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?w.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?u.call(w(e),this[0]):u.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(w.uniqueSort(w.merge(this.get(),w(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}w.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return k(e,"parentNode")},parentsUntil:function(e,t,n){return k(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return k(e,"nextSibling")},prevAll:function(e){return k(e,"previousSibling")},nextUntil:function(e,t,n){return k(e,"nextSibling",n)},prevUntil:function(e,t,n){return k(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return N(e,"iframe")?e.contentDocument:(N(e,"template")&&(e=e.content||e),w.merge([],e.childNodes))}},function(e,t){w.fn[e]=function(n,r){var i=w.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=w.filter(r,i)),this.length>1&&(O[e]||w.uniqueSort(i),H.test(e)&&i.reverse()),this.pushStack(i)}});var M=/[^\x20\t\r\n\f]+/g;function R(e){var t={};return w.each(e.match(M)||[],function(e,n){t[n]=!0}),t}w.Callbacks=function(e){e="string"==typeof e?R(e):w.extend({},e);var t,n,r,i,o=[],a=[],s=-1,u=function(){for(i=i||e.once,r=t=!0;a.length;s=-1){n=a.shift();while(++s<o.length)!1===o[s].apply(n[0],n[1])&&e.stopOnFalse&&(s=o.length,n=!1)}e.memory||(n=!1),t=!1,i&&(o=n?[]:"")},l={add:function(){return o&&(n&&!t&&(s=o.length-1,a.push(n)),function t(n){w.each(n,function(n,r){g(r)?e.unique&&l.has(r)||o.push(r):r&&r.length&&"string"!==x(r)&&t(r)})}(arguments),n&&!t&&u()),this},remove:function(){return w.each(arguments,function(e,t){var n;while((n=w.inArray(t,o,n))>-1)o.splice(n,1),n<=s&&s--}),this},has:function(e){return e?w.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return i=a=[],o=n="",this},disabled:function(){return!o},lock:function(){return i=a=[],n||t||(o=n=""),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=[e,(n=n||[]).slice?n.slice():n],a.push(n),t||u()),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!r}};return l};function I(e){return e}function W(e){throw e}function $(e,t,n,r){var i;try{e&&g(i=e.promise)?i.call(e).done(t).fail(n):e&&g(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}w.extend({Deferred:function(t){var n=[["notify","progress",w.Callbacks("memory"),w.Callbacks("memory"),2],["resolve","done",w.Callbacks("once memory"),w.Callbacks("once memory"),0,"resolved"],["reject","fail",w.Callbacks("once memory"),w.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},"catch":function(e){return i.then(null,e)},pipe:function(){var e=arguments;return w.Deferred(function(t){w.each(n,function(n,r){var i=g(e[r[4]])&&e[r[4]];o[r[1]](function(){var e=i&&i.apply(this,arguments);e&&g(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[r[0]+"With"](this,i?[e]:arguments)})}),e=null}).promise()},then:function(t,r,i){var o=0;function a(t,n,r,i){return function(){var s=this,u=arguments,l=function(){var e,l;if(!(t<o)){if((e=r.apply(s,u))===n.promise())throw new TypeError("Thenable self-resolution");l=e&&("object"==typeof e||"function"==typeof e)&&e.then,g(l)?i?l.call(e,a(o,n,I,i),a(o,n,W,i)):(o++,l.call(e,a(o,n,I,i),a(o,n,W,i),a(o,n,I,n.notifyWith))):(r!==I&&(s=void 0,u=[e]),(i||n.resolveWith)(s,u))}},c=i?l:function(){try{l()}catch(e){w.Deferred.exceptionHook&&w.Deferred.exceptionHook(e,c.stackTrace),t+1>=o&&(r!==W&&(s=void 0,u=[e]),n.rejectWith(s,u))}};t?c():(w.Deferred.getStackHook&&(c.stackTrace=w.Deferred.getStackHook()),e.setTimeout(c))}}return w.Deferred(function(e){n[0][3].add(a(0,e,g(i)?i:I,e.notifyWith)),n[1][3].add(a(0,e,g(t)?t:I)),n[2][3].add(a(0,e,g(r)?r:W))}).promise()},promise:function(e){return null!=e?w.extend(e,i):i}},o={};return w.each(n,function(e,t){var a=t[2],s=t[5];i[t[1]]=a.add,s&&a.add(function(){r=s},n[3-e][2].disable,n[3-e][3].disable,n[0][2].lock,n[0][3].lock),a.add(t[3].fire),o[t[0]]=function(){return o[t[0]+"With"](this===o?void 0:this,arguments),this},o[t[0]+"With"]=a.fireWith}),i.promise(o),t&&t.call(o,o),o},when:function(e){var t=arguments.length,n=t,r=Array(n),i=o.call(arguments),a=w.Deferred(),s=function(e){return function(n){r[e]=this,i[e]=arguments.length>1?o.call(arguments):n,--t||a.resolveWith(r,i)}};if(t<=1&&($(e,a.done(s(n)).resolve,a.reject,!t),"pending"===a.state()||g(i[n]&&i[n].then)))return a.then();while(n--)$(i[n],s(n),a.reject);return a.promise()}});var B=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;w.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&B.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},w.readyException=function(t){e.setTimeout(function(){throw t})};var F=w.Deferred();w.fn.ready=function(e){return F.then(e)["catch"](function(e){w.readyException(e)}),this},w.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--w.readyWait:w.isReady)||(w.isReady=!0,!0!==e&&--w.readyWait>0||F.resolveWith(r,[w]))}}),w.ready.then=F.then;function _(){r.removeEventListener("DOMContentLoaded",_),e.removeEventListener("load",_),w.ready()}"complete"===r.readyState||"loading"!==r.readyState&&!r.documentElement.doScroll?e.setTimeout(w.ready):(r.addEventListener("DOMContentLoaded",_),e.addEventListener("load",_));var z=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===x(n)){i=!0;for(s in n)z(e,t,s,n[s],!0,o,a)}else if(void 0!==r&&(i=!0,g(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(w(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},X=/^-ms-/,U=/-([a-z])/g;function V(e,t){return t.toUpperCase()}function G(e){return e.replace(X,"ms-").replace(U,V)}var Y=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Q(){this.expando=w.expando+Q.uid++}Q.uid=1,Q.prototype={cache:function(e){var t=e[this.expando];return t||(t={},Y(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[G(t)]=n;else for(r in t)i[G(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][G(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(G):(t=G(t))in r?[t]:t.match(M)||[]).length;while(n--)delete r[t[n]]}(void 0===t||w.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!w.isEmptyObject(t)}};var J=new Q,K=new Q,Z=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ee=/[A-Z]/g;function te(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:Z.test(e)?JSON.parse(e):e)}function ne(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(ee,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n=te(n)}catch(e){}K.set(e,t,n)}else n=void 0;return n}w.extend({hasData:function(e){return K.hasData(e)||J.hasData(e)},data:function(e,t,n){return K.access(e,t,n)},removeData:function(e,t){K.remove(e,t)},_data:function(e,t,n){return J.access(e,t,n)},_removeData:function(e,t){J.remove(e,t)}}),w.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(i=K.get(o),1===o.nodeType&&!J.get(o,"hasDataAttrs"))){n=a.length;while(n--)a[n]&&0===(r=a[n].name).indexOf("data-")&&(r=G(r.slice(5)),ne(o,r,i[r]));J.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){K.set(this,e)}):z(this,function(t){var n;if(o&&void 0===t){if(void 0!==(n=K.get(o,e)))return n;if(void 0!==(n=ne(o,e)))return n}else this.each(function(){K.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){K.remove(this,e)})}}),w.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=J.get(e,t),n&&(!r||Array.isArray(n)?r=J.access(e,t,w.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=w.queue(e,t),r=n.length,i=n.shift(),o=w._queueHooks(e,t),a=function(){w.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return J.get(e,n)||J.access(e,n,{empty:w.Callbacks("once memory").add(function(){J.remove(e,[t+"queue",n])})})}}),w.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?w.queue(this[0],e):void 0===t?this:this.each(function(){var n=w.queue(this,e,t);w._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&w.dequeue(this,e)})},dequeue:function(e){return this.each(function(){w.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=w.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=J.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var re=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ie=new RegExp("^(?:([+-])=|)("+re+")([a-z%]*)$","i"),oe=["Top","Right","Bottom","Left"],ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&w.contains(e.ownerDocument,e)&&"none"===w.css(e,"display")},se=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i};function ue(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return w.css(e,t,"")},u=s(),l=n&&n[3]||(w.cssNumber[t]?"":"px"),c=(w.cssNumber[t]||"px"!==l&&+u)&&ie.exec(w.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)w.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,w.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var le={};function ce(e){var t,n=e.ownerDocument,r=e.nodeName,i=le[r];return i||(t=n.body.appendChild(n.createElement(r)),i=w.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),le[r]=i,i)}function fe(e,t){for(var n,r,i=[],o=0,a=e.length;o<a;o++)(r=e[o]).style&&(n=r.style.display,t?("none"===n&&(i[o]=J.get(r,"display")||null,i[o]||(r.style.display="")),""===r.style.display&&ae(r)&&(i[o]=ce(r))):"none"!==n&&(i[o]="none",J.set(r,"display",n)));for(o=0;o<a;o++)null!=i[o]&&(e[o].style.display=i[o]);return e}w.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?w(this).show():w(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;function ye(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&N(e,t)?w.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)J.set(e[n],"globalEval",!t||J.get(t[n],"globalEval"))}var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===x(o))w.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+w.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;w.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&w.inArray(o,r)>-1)i&&i.push(o);else if(l=w.contains(o.ownerDocument,o),a=ye(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}!function(){var e=r.createDocumentFragment().appendChild(r.createElement("div")),t=r.createElement("input");t.setAttribute("type","radio"),t.setAttribute("checked","checked"),t.setAttribute("name","t"),e.appendChild(t),h.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,e.innerHTML="<textarea>x</textarea>",h.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue}();var be=r.documentElement,we=/^key/,Te=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ce=/^([^.]*)(?:\.(.+)|)/;function Ee(){return!0}function ke(){return!1}function Se(){try{return r.activeElement}catch(e){}}function De(e,t,n,r,i,o){var a,s;if("object"==typeof t){"string"!=typeof n&&(r=r||n,n=void 0);for(s in t)De(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=ke;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return w().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=w.guid++)),e.each(function(){w.event.add(this,t,i,r,n)})}w.event={global:{},add:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.get(e);if(y){n.handler&&(n=(o=n).handler,i=o.selector),i&&w.find.matchesSelector(be,i),n.guid||(n.guid=w.guid++),(u=y.events)||(u=y.events={}),(a=y.handle)||(a=y.handle=function(t){return"undefined"!=typeof w&&w.event.triggered!==t.type?w.event.dispatch.apply(e,arguments):void 0}),l=(t=(t||"").match(M)||[""]).length;while(l--)d=g=(s=Ce.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=w.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=w.event.special[d]||{},c=w.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&w.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(e,r,h,a)||e.addEventListener&&e.addEventListener(d,a)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),w.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.hasData(e)&&J.get(e);if(y&&(u=y.events)){l=(t=(t||"").match(M)||[""]).length;while(l--)if(s=Ce.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){f=w.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||w.removeEvent(e,d,y.handle),delete u[d])}else for(d in u)w.event.remove(e,d+t[l],n,r,!0);w.isEmptyObject(u)&&J.remove(e,"handle events")}},dispatch:function(e){var t=w.event.fix(e),n,r,i,o,a,s,u=new Array(arguments.length),l=(J.get(this,"events")||{})[t.type]||[],c=w.event.special[t.type]||{};for(u[0]=t,n=1;n<arguments.length;n++)u[n]=arguments[n];if(t.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,t)){s=w.event.handlers.call(this,t,l),n=0;while((o=s[n++])&&!t.isPropagationStopped()){t.currentTarget=o.elem,r=0;while((a=o.handlers[r++])&&!t.isImmediatePropagationStopped())t.rnamespace&&!t.rnamespace.test(a.namespace)||(t.handleObj=a,t.data=a.data,void 0!==(i=((w.event.special[a.origType]||{}).handle||a.handler).apply(o.elem,u))&&!1===(t.result=i)&&(t.preventDefault(),t.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,t),t.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&e.button>=1))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?w(i,this).index(l)>-1:w.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(e,t){Object.defineProperty(w.Event.prototype,e,{enumerable:!0,configurable:!0,get:g(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[w.expando]?e:new w.Event(e)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==Se()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===Se()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&N(this,"input"))return this.click(),!1},_default:function(e){return N(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},w.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},w.Event=function(e,t){if(!(this instanceof w.Event))return new w.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ee:ke,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&w.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[w.expando]=!0},w.Event.prototype={constructor:w.Event,isDefaultPrevented:ke,isPropagationStopped:ke,isImmediatePropagationStopped:ke,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ee,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ee,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ee,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},w.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&we.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Te.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},w.event.addProp),w.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){w.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return i&&(i===r||w.contains(r,i))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),w.fn.extend({on:function(e,t,n,r){return De(this,e,t,n,r)},one:function(e,t,n,r){return De(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,w(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=ke),this.each(function(){w.event.remove(this,e,n,t)})}});var Ne=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Ae=/<script|<style|<link/i,je=/checked\s*(?:[^=]|=\s*.checked.)/i,qe=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Le(e,t){return N(e,"table")&&N(11!==t.nodeType?t:t.firstChild,"tr")?w(e).children("tbody")[0]||e:e}function He(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Oe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Pe(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(J.hasData(e)&&(o=J.access(e),a=J.set(t,o),l=o.events)){delete a.handle,a.events={};for(i in l)for(n=0,r=l[i].length;n<r;n++)w.event.add(t,i,l[i][n])}K.hasData(e)&&(s=K.access(e),u=w.extend({},s),K.set(t,u))}}function Me(e,t){var n=t.nodeName.toLowerCase();"input"===n&&pe.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function Re(e,t,n,r){t=a.apply([],t);var i,o,s,u,l,c,f=0,p=e.length,d=p-1,y=t[0],v=g(y);if(v||p>1&&"string"==typeof y&&!h.checkClone&&je.test(y))return e.each(function(i){var o=e.eq(i);v&&(t[0]=y.call(this,i,o.html())),Re(o,t,n,r)});if(p&&(i=xe(t,e[0].ownerDocument,!1,e,r),o=i.firstChild,1===i.childNodes.length&&(i=o),o||r)){for(u=(s=w.map(ye(i,"script"),He)).length;f<p;f++)l=i,f!==d&&(l=w.clone(l,!0,!0),u&&w.merge(s,ye(l,"script"))),n.call(e[f],l,f);if(u)for(c=s[s.length-1].ownerDocument,w.map(s,Oe),f=0;f<u;f++)l=s[f],he.test(l.type||"")&&!J.access(l,"globalEval")&&w.contains(c,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?w._evalUrl&&w._evalUrl(l.src):m(l.textContent.replace(qe,""),c,l))}return e}function Ie(e,t,n){for(var r,i=t?w.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||w.cleanData(ye(r)),r.parentNode&&(n&&w.contains(r.ownerDocument,r)&&ve(ye(r,"script")),r.parentNode.removeChild(r));return e}w.extend({htmlPrefilter:function(e){return e.replace(Ne,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s=e.cloneNode(!0),u=w.contains(e.ownerDocument,e);if(!(h.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||w.isXMLDoc(e)))for(a=ye(s),r=0,i=(o=ye(e)).length;r<i;r++)Me(o[r],a[r]);if(t)if(n)for(o=o||ye(e),a=a||ye(s),r=0,i=o.length;r<i;r++)Pe(o[r],a[r]);else Pe(e,s);return(a=ye(s,"script")).length>0&&ve(a,!u&&ye(e,"script")),s},cleanData:function(e){for(var t,n,r,i=w.event.special,o=0;void 0!==(n=e[o]);o++)if(Y(n)){if(t=n[J.expando]){if(t.events)for(r in t.events)i[r]?w.event.remove(n,r):w.removeEvent(n,r,t.handle);n[J.expando]=void 0}n[K.expando]&&(n[K.expando]=void 0)}}}),w.fn.extend({detach:function(e){return Ie(this,e,!0)},remove:function(e){return Ie(this,e)},text:function(e){return z(this,function(e){return void 0===e?w.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Re(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Le(this,e).appendChild(e)})},prepend:function(){return Re(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Le(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(w.cleanData(ye(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return w.clone(this,e,t)})},html:function(e){return z(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ae.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=w.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(w.cleanData(ye(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return Re(this,arguments,function(t){var n=this.parentNode;w.inArray(this,e)<0&&(w.cleanData(ye(this)),n&&n.replaceChild(t,this))},e)}}),w.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){w.fn[e]=function(e){for(var n,r=[],i=w(e),o=i.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),w(i[a])[t](n),s.apply(r,n.get());return this.pushStack(r)}});var We=new RegExp("^("+re+")(?!px)[a-z%]+$","i"),$e=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},Be=new RegExp(oe.join("|"),"i");!function(){function t(){if(c){l.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",c.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",be.appendChild(l).appendChild(c);var t=e.getComputedStyle(c);i="1%"!==t.top,u=12===n(t.marginLeft),c.style.right="60%",s=36===n(t.right),o=36===n(t.width),c.style.position="absolute",a=36===c.offsetWidth||"absolute",be.removeChild(l),c=null}}function n(e){return Math.round(parseFloat(e))}var i,o,a,s,u,l=r.createElement("div"),c=r.createElement("div");c.style&&(c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",h.clearCloneStyle="content-box"===c.style.backgroundClip,w.extend(h,{boxSizingReliable:function(){return t(),o},pixelBoxStyles:function(){return t(),s},pixelPosition:function(){return t(),i},reliableMarginLeft:function(){return t(),u},scrollboxSize:function(){return t(),a}}))}();function Fe(e,t,n){var r,i,o,a,s=e.style;return(n=n||$e(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||w.contains(e.ownerDocument,e)||(a=w.style(e,t)),!h.pixelBoxStyles()&&We.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function _e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}var ze=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ue={position:"absolute",visibility:"hidden",display:"block"},Ve={letterSpacing:"0",fontWeight:"400"},Ge=["Webkit","Moz","ms"],Ye=r.createElement("div").style;function Qe(e){if(e in Ye)return e;var t=e[0].toUpperCase()+e.slice(1),n=Ge.length;while(n--)if((e=Ge[n]+t)in Ye)return e}function Je(e){var t=w.cssProps[e];return t||(t=w.cssProps[e]=Qe(e)||e),t}function Ke(e,t,n){var r=ie.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ze(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=w.css(e,n+oe[a],!0,i)),r?("content"===n&&(u-=w.css(e,"padding"+oe[a],!0,i)),"margin"!==n&&(u-=w.css(e,"border"+oe[a]+"Width",!0,i))):(u+=w.css(e,"padding"+oe[a],!0,i),"padding"!==n?u+=w.css(e,"border"+oe[a]+"Width",!0,i):s+=w.css(e,"border"+oe[a]+"Width",!0,i));return!r&&o>=0&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))),u}function et(e,t,n){var r=$e(e),i=Fe(e,t,r),o="border-box"===w.css(e,"boxSizing",!1,r),a=o;if(We.test(i)){if(!n)return i;i="auto"}return a=a&&(h.boxSizingReliable()||i===e.style[t]),("auto"===i||!parseFloat(i)&&"inline"===w.css(e,"display",!1,r))&&(i=e["offset"+t[0].toUpperCase()+t.slice(1)],a=!0),(i=parseFloat(i)||0)+Ze(e,t,n||(o?"border":"content"),a,r,i)+"px"}w.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Fe(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=G(t),u=Xe.test(t),l=e.style;if(u||(t=Je(s)),a=w.cssHooks[t]||w.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"==(o=typeof n)&&(i=ie.exec(n))&&i[1]&&(n=ue(e,t,i),o="number"),null!=n&&n===n&&("number"===o&&(n+=i&&i[3]||(w.cssNumber[s]?"":"px")),h.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=G(t);return Xe.test(t)||(t=Je(s)),(a=w.cssHooks[t]||w.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Fe(e,t,r)),"normal"===i&&t in Ve&&(i=Ve[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),w.each(["height","width"],function(e,t){w.cssHooks[t]={get:function(e,n,r){if(n)return!ze.test(w.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?et(e,t,r):se(e,Ue,function(){return et(e,t,r)})},set:function(e,n,r){var i,o=$e(e),a="border-box"===w.css(e,"boxSizing",!1,o),s=r&&Ze(e,t,r,a,o);return a&&h.scrollboxSize()===o.position&&(s-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-Ze(e,t,"border",!1,o)-.5)),s&&(i=ie.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=w.css(e,t)),Ke(e,n,s)}}}),w.cssHooks.marginLeft=_e(h.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Fe(e,"marginLeft"))||e.getBoundingClientRect().left-se(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),w.each({margin:"",padding:"",border:"Width"},function(e,t){w.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+oe[r]+t]=o[r]||o[r-2]||o[0];return i}},"margin"!==e&&(w.cssHooks[e+t].set=Ke)}),w.fn.extend({css:function(e,t){return z(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=$e(e),i=t.length;a<i;a++)o[t[a]]=w.css(e,t[a],!1,r);return o}return void 0!==n?w.style(e,t,n):w.css(e,t)},e,t,arguments.length>1)}});function tt(e,t,n,r,i){return new tt.prototype.init(e,t,n,r,i)}w.Tween=tt,tt.prototype={constructor:tt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||w.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(w.cssNumber[n]?"":"px")},cur:function(){var e=tt.propHooks[this.prop];return e&&e.get?e.get(this):tt.propHooks._default.get(this)},run:function(e){var t,n=tt.propHooks[this.prop];return this.options.duration?this.pos=t=w.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):tt.propHooks._default.set(this),this}},tt.prototype.init.prototype=tt.prototype,tt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=w.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){w.fx.step[e.prop]?w.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[w.cssProps[e.prop]]&&!w.cssHooks[e.prop]?e.elem[e.prop]=e.now:w.style(e.elem,e.prop,e.now+e.unit)}}},tt.propHooks.scrollTop=tt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},w.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},w.fx=tt.prototype.init,w.fx.step={};var nt,rt,it=/^(?:toggle|show|hide)$/,ot=/queueHooks$/;function at(){rt&&(!1===r.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(at):e.setTimeout(at,w.fx.interval),w.fx.tick())}function st(){return e.setTimeout(function(){nt=void 0}),nt=Date.now()}function ut(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=oe[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function lt(e,t,n){for(var r,i=(pt.tweeners[t]||[]).concat(pt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ct(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),y=J.get(e,"fxshow");n.queue||(null==(a=w._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,w.queue(e,"fx").length||a.empty.fire()})}));for(r in t)if(i=t[r],it.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!y||void 0===y[r])continue;g=!0}d[r]=y&&y[r]||w.style(e,r)}if((u=!w.isEmptyObject(t))||!w.isEmptyObject(d)){f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=y&&y.display)&&(l=J.get(e,"display")),"none"===(c=w.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=w.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===w.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1;for(r in d)u||(y?"hidden"in y&&(g=y.hidden):y=J.access(e,"fxshow",{display:l}),o&&(y.hidden=!g),g&&fe([e],!0),p.done(function(){g||fe([e]),J.remove(e,"fxshow");for(r in d)w.style(e,r,d[r])})),u=lt(g?y[r]:0,r,p),r in y||(y[r]=u.start,g&&(u.end=u.start,u.start=0))}}function ft(e,t){var n,r,i,o,a;for(n in e)if(r=G(n),i=t[r],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=w.cssHooks[r])&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function pt(e,t,n){var r,i,o=0,a=pt.prefilters.length,s=w.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=nt||st(),n=Math.max(0,l.startTime+l.duration-t),r=1-(n/l.duration||0),o=0,a=l.tweens.length;o<a;o++)l.tweens[o].run(r);return s.notifyWith(e,[l,r,n]),r<1&&a?n:(a||s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:w.extend({},t),opts:w.extend(!0,{specialEasing:{},easing:w.easing._default},n),originalProperties:t,originalOptions:n,startTime:nt||st(),duration:n.duration,tweens:[],createTween:function(t,n){var r=w.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)l.tweens[n].run(1);return t?(s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l,t])):s.rejectWith(e,[l,t]),this}}),c=l.props;for(ft(c,l.opts.specialEasing);o<a;o++)if(r=pt.prefilters[o].call(l,e,c,l.opts))return g(r.stop)&&(w._queueHooks(l.elem,l.opts.queue).stop=r.stop.bind(r)),r;return w.map(c,lt,l),g(l.opts.start)&&l.opts.start.call(e,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),w.fx.timer(w.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l}w.Animation=w.extend(pt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return ue(n.elem,e,ie.exec(t),n),n}]},tweener:function(e,t){g(e)?(t=e,e=["*"]):e=e.match(M);for(var n,r=0,i=e.length;r<i;r++)n=e[r],pt.tweeners[n]=pt.tweeners[n]||[],pt.tweeners[n].unshift(t)},prefilters:[ct],prefilter:function(e,t){t?pt.prefilters.unshift(e):pt.prefilters.push(e)}}),w.speed=function(e,t,n){var r=e&&"object"==typeof e?w.extend({},e):{complete:n||!n&&t||g(e)&&e,duration:e,easing:n&&t||t&&!g(t)&&t};return w.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in w.fx.speeds?r.duration=w.fx.speeds[r.duration]:r.duration=w.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){g(r.old)&&r.old.call(this),r.queue&&w.dequeue(this,r.queue)},r},w.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=w.isEmptyObject(e),o=w.speed(t,n,r),a=function(){var t=pt(this,w.extend({},e),o);(i||J.get(this,"finish"))&&t.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=w.timers,a=J.get(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&ot.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));!t&&n||w.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=J.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=w.timers,a=r?r.length:0;for(n.finish=!0,w.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),w.each(["toggle","show","hide"],function(e,t){var n=w.fn[t];w.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ut(t,!0),e,r,i)}}),w.each({slideDown:ut("show"),slideUp:ut("hide"),slideToggle:ut("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){w.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),w.timers=[],w.fx.tick=function(){var e,t=0,n=w.timers;for(nt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||w.fx.stop(),nt=void 0},w.fx.timer=function(e){w.timers.push(e),w.fx.start()},w.fx.interval=13,w.fx.start=function(){rt||(rt=!0,at())},w.fx.stop=function(){rt=null},w.fx.speeds={slow:600,fast:200,_default:400},w.fn.delay=function(t,n){return t=w.fx?w.fx.speeds[t]||t:t,n=n||"fx",this.queue(n,function(n,r){var i=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(i)}})},function(){var e=r.createElement("input"),t=r.createElement("select").appendChild(r.createElement("option"));e.type="checkbox",h.checkOn=""!==e.value,h.optSelected=t.selected,(e=r.createElement("input")).value="t",e.type="radio",h.radioValue="t"===e.value}();var dt,ht=w.expr.attrHandle;w.fn.extend({attr:function(e,t){return z(this,w.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){w.removeAttr(this,e)})}}),w.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?w.prop(e,t,n):(1===o&&w.isXMLDoc(e)||(i=w.attrHooks[t.toLowerCase()]||(w.expr.match.bool.test(t)?dt:void 0)),void 0!==n?null===n?void w.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=w.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!h.radioValue&&"radio"===t&&N(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(M);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),dt={set:function(e,t,n){return!1===t?w.removeAttr(e,n):e.setAttribute(n,n),n}},w.each(w.expr.match.bool.source.match(/\w+/g),function(e,t){var n=ht[t]||w.find.attr;ht[t]=function(e,t,r){var i,o,a=t.toLowerCase();return r||(o=ht[a],ht[a]=i,i=null!=n(e,t,r)?a:null,ht[a]=o),i}});var gt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;w.fn.extend({prop:function(e,t){return z(this,w.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[w.propFix[e]||e]})}}),w.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&w.isXMLDoc(e)||(t=w.propFix[t]||t,i=w.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=w.find.attr(e,"tabindex");return t?parseInt(t,10):gt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),h.optSelected||(w.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),w.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){w.propFix[this.toLowerCase()]=this});function vt(e){return(e.match(M)||[]).join(" ")}function mt(e){return e.getAttribute&&e.getAttribute("class")||""}function xt(e){return Array.isArray(e)?e:"string"==typeof e?e.match(M)||[]:[]}w.fn.extend({addClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).addClass(e.call(this,t,mt(this)))});if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).removeClass(e.call(this,t,mt(this)))});if(!arguments.length)return this.attr("class","");if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])while(r.indexOf(" "+o+" ")>-1)r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(e,t){var n=typeof e,r="string"===n||Array.isArray(e);return"boolean"==typeof t&&r?t?this.addClass(e):this.removeClass(e):g(e)?this.each(function(n){w(this).toggleClass(e.call(this,n,mt(this),t),t)}):this.each(function(){var t,i,o,a;if(r){i=0,o=w(this),a=xt(e);while(t=a[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else void 0!==e&&"boolean"!==n||((t=mt(this))&&J.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":J.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&(" "+vt(mt(n))+" ").indexOf(t)>-1)return!0;return!1}});var bt=/\r/g;w.fn.extend({val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=g(e),this.each(function(n){var i;1===this.nodeType&&(null==(i=r?e.call(this,n,w(this).val()):e)?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=w.map(i,function(e){return null==e?"":e+""})),(t=w.valHooks[this.type]||w.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))});if(i)return(t=w.valHooks[i.type]||w.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(bt,""):null==n?"":n}}}),w.extend({valHooks:{option:{get:function(e){var t=w.find.attr(e,"value");return null!=t?t:vt(w.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!N(n.parentNode,"optgroup"))){if(t=w(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=w.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=w.inArray(w.valHooks.option.get(r),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),w.each(["radio","checkbox"],function(){w.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=w.inArray(w(e).val(),t)>-1}},h.checkOn||(w.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),h.focusin="onfocusin"in e;var wt=/^(?:focusinfocus|focusoutblur)$/,Tt=function(e){e.stopPropagation()};w.extend(w.event,{trigger:function(t,n,i,o){var a,s,u,l,c,p,d,h,v=[i||r],m=f.call(t,"type")?t.type:t,x=f.call(t,"namespace")?t.namespace.split("."):[];if(s=h=u=i=i||r,3!==i.nodeType&&8!==i.nodeType&&!wt.test(m+w.event.triggered)&&(m.indexOf(".")>-1&&(m=(x=m.split(".")).shift(),x.sort()),c=m.indexOf(":")<0&&"on"+m,t=t[w.expando]?t:new w.Event(m,"object"==typeof t&&t),t.isTrigger=o?2:3,t.namespace=x.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+x.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=i),n=null==n?[t]:w.makeArray(n,[t]),d=w.event.special[m]||{},o||!d.trigger||!1!==d.trigger.apply(i,n))){if(!o&&!d.noBubble&&!y(i)){for(l=d.delegateType||m,wt.test(l+m)||(s=s.parentNode);s;s=s.parentNode)v.push(s),u=s;u===(i.ownerDocument||r)&&v.push(u.defaultView||u.parentWindow||e)}a=0;while((s=v[a++])&&!t.isPropagationStopped())h=s,t.type=a>1?l:d.bindType||m,(p=(J.get(s,"events")||{})[t.type]&&J.get(s,"handle"))&&p.apply(s,n),(p=c&&s[c])&&p.apply&&Y(s)&&(t.result=p.apply(s,n),!1===t.result&&t.preventDefault());return t.type=m,o||t.isDefaultPrevented()||d._default&&!1!==d._default.apply(v.pop(),n)||!Y(i)||c&&g(i[m])&&!y(i)&&((u=i[c])&&(i[c]=null),w.event.triggered=m,t.isPropagationStopped()&&h.addEventListener(m,Tt),i[m](),t.isPropagationStopped()&&h.removeEventListener(m,Tt),w.event.triggered=void 0,u&&(i[c]=u)),t.result}},simulate:function(e,t,n){var r=w.extend(new w.Event,n,{type:e,isSimulated:!0});w.event.trigger(r,null,t)}}),w.fn.extend({trigger:function(e,t){return this.each(function(){w.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return w.event.trigger(e,t,n,!0)}}),h.focusin||w.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){w.event.simulate(t,e.target,w.event.fix(e))};w.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=J.access(r,t);i||r.addEventListener(e,n,!0),J.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=J.access(r,t)-1;i?J.access(r,t,i):(r.removeEventListener(e,n,!0),J.remove(r,t))}}});var Ct=e.location,Et=Date.now(),kt=/\?/;w.parseXML=function(t){var n;if(!t||"string"!=typeof t)return null;try{n=(new e.DOMParser).parseFromString(t,"text/xml")}catch(e){n=void 0}return n&&!n.getElementsByTagName("parsererror").length||w.error("Invalid XML: "+t),n};var St=/\[\]$/,Dt=/\r?\n/g,Nt=/^(?:submit|button|image|reset|file)$/i,At=/^(?:input|select|textarea|keygen)/i;function jt(e,t,n,r){var i;if(Array.isArray(t))w.each(t,function(t,i){n||St.test(e)?r(e,i):jt(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)});else if(n||"object"!==x(t))r(e,t);else for(i in t)jt(e+"["+i+"]",t[i],n,r)}w.param=function(e,t){var n,r=[],i=function(e,t){var n=g(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(Array.isArray(e)||e.jquery&&!w.isPlainObject(e))w.each(e,function(){i(this.name,this.value)});else for(n in e)jt(n,e[n],t,i);return r.join("&")},w.fn.extend({serialize:function(){return w.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=w.prop(this,"elements");return e?w.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!w(this).is(":disabled")&&At.test(this.nodeName)&&!Nt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=w(this).val();return null==n?null:Array.isArray(n)?w.map(n,function(e){return{name:t.name,value:e.replace(Dt,"\r\n")}}):{name:t.name,value:n.replace(Dt,"\r\n")}}).get()}});var qt=/%20/g,Lt=/#.*$/,Ht=/([?&])_=[^&]*/,Ot=/^(.*?):[ \t]*([^\r\n]*)$/gm,Pt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Mt=/^(?:GET|HEAD)$/,Rt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Bt=r.createElement("a");Bt.href=Ct.href;function Ft(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(M)||[];if(g(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function _t(e,t,n,r){var i={},o=e===Wt;function a(s){var u;return i[s]=!0,w.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):void 0:(t.dataTypes.unshift(l),a(l),!1)}),u}return a(t.dataTypes[0])||!i["*"]&&a("*")}function zt(e,t){var n,r,i=w.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&w.extend(!0,e,r),e}function Xt(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}function Ut(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}w.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ct.href,type:"GET",isLocal:Pt.test(Ct.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":w.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,w.ajaxSettings),t):zt(w.ajaxSettings,e)},ajaxPrefilter:Ft(It),ajaxTransport:Ft(Wt),ajax:function(t,n){"object"==typeof t&&(n=t,t=void 0),n=n||{};var i,o,a,s,u,l,c,f,p,d,h=w.ajaxSetup({},n),g=h.context||h,y=h.context&&(g.nodeType||g.jquery)?w(g):w.event,v=w.Deferred(),m=w.Callbacks("once memory"),x=h.statusCode||{},b={},T={},C="canceled",E={readyState:0,getResponseHeader:function(e){var t;if(c){if(!s){s={};while(t=Ot.exec(a))s[t[1].toLowerCase()]=t[2]}t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return c?a:null},setRequestHeader:function(e,t){return null==c&&(e=T[e.toLowerCase()]=T[e.toLowerCase()]||e,b[e]=t),this},overrideMimeType:function(e){return null==c&&(h.mimeType=e),this},statusCode:function(e){var t;if(e)if(c)E.always(e[E.status]);else for(t in e)x[t]=[x[t],e[t]];return this},abort:function(e){var t=e||C;return i&&i.abort(t),k(0,t),this}};if(v.promise(E),h.url=((t||h.url||Ct.href)+"").replace(Rt,Ct.protocol+"//"),h.type=n.method||n.type||h.method||h.type,h.dataTypes=(h.dataType||"*").toLowerCase().match(M)||[""],null==h.crossDomain){l=r.createElement("a");try{l.href=h.url,l.href=l.href,h.crossDomain=Bt.protocol+"//"+Bt.host!=l.protocol+"//"+l.host}catch(e){h.crossDomain=!0}}if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=w.param(h.data,h.traditional)),_t(It,h,n,E),c)return E;(f=w.event&&h.global)&&0==w.active++&&w.event.trigger("ajaxStart"),h.type=h.type.toUpperCase(),h.hasContent=!Mt.test(h.type),o=h.url.replace(Lt,""),h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(qt,"+")):(d=h.url.slice(o.length),h.data&&(h.processData||"string"==typeof h.data)&&(o+=(kt.test(o)?"&":"?")+h.data,delete h.data),!1===h.cache&&(o=o.replace(Ht,"$1"),d=(kt.test(o)?"&":"?")+"_="+Et+++d),h.url=o+d),h.ifModified&&(w.lastModified[o]&&E.setRequestHeader("If-Modified-Since",w.lastModified[o]),w.etag[o]&&E.setRequestHeader("If-None-Match",w.etag[o])),(h.data&&h.hasContent&&!1!==h.contentType||n.contentType)&&E.setRequestHeader("Content-Type",h.contentType),E.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+$t+"; q=0.01":""):h.accepts["*"]);for(p in h.headers)E.setRequestHeader(p,h.headers[p]);if(h.beforeSend&&(!1===h.beforeSend.call(g,E,h)||c))return E.abort();if(C="abort",m.add(h.complete),E.done(h.success),E.fail(h.error),i=_t(Wt,h,n,E)){if(E.readyState=1,f&&y.trigger("ajaxSend",[E,h]),c)return E;h.async&&h.timeout>0&&(u=e.setTimeout(function(){E.abort("timeout")},h.timeout));try{c=!1,i.send(b,k)}catch(e){if(c)throw e;k(-1,e)}}else k(-1,"No Transport");function k(t,n,r,s){var l,p,d,b,T,C=n;c||(c=!0,u&&e.clearTimeout(u),i=void 0,a=s||"",E.readyState=t>0?4:0,l=t>=200&&t<300||304===t,r&&(b=Xt(h,E,r)),b=Ut(h,b,E,l),l?(h.ifModified&&((T=E.getResponseHeader("Last-Modified"))&&(w.lastModified[o]=T),(T=E.getResponseHeader("etag"))&&(w.etag[o]=T)),204===t||"HEAD"===h.type?C="nocontent":304===t?C="notmodified":(C=b.state,p=b.data,l=!(d=b.error))):(d=C,!t&&C||(C="error",t<0&&(t=0))),E.status=t,E.statusText=(n||C)+"",l?v.resolveWith(g,[p,C,E]):v.rejectWith(g,[E,C,d]),E.statusCode(x),x=void 0,f&&y.trigger(l?"ajaxSuccess":"ajaxError",[E,h,l?p:d]),m.fireWith(g,[E,C]),f&&(y.trigger("ajaxComplete",[E,h]),--w.active||w.event.trigger("ajaxStop")))}return E},getJSON:function(e,t,n){return w.get(e,t,n,"json")},getScript:function(e,t){return w.get(e,void 0,t,"script")}}),w.each(["get","post"],function(e,t){w[t]=function(e,n,r,i){return g(n)&&(i=i||r,r=n,n=void 0),w.ajax(w.extend({url:e,type:t,dataType:i,data:n,success:r},w.isPlainObject(e)&&e))}}),w._evalUrl=function(e){return w.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},w.fn.extend({wrapAll:function(e){var t;return this[0]&&(g(e)&&(e=e.call(this[0])),t=w(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return g(e)?this.each(function(t){w(this).wrapInner(e.call(this,t))}):this.each(function(){var t=w(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=g(e);return this.each(function(n){w(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){w(this).replaceWith(this.childNodes)}),this}}),w.expr.pseudos.hidden=function(e){return!w.expr.pseudos.visible(e)},w.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},w.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}};var Vt={0:200,1223:204},Gt=w.ajaxSettings.xhr();h.cors=!!Gt&&"withCredentials"in Gt,h.ajax=Gt=!!Gt,w.ajaxTransport(function(t){var n,r;if(h.cors||Gt&&!t.crossDomain)return{send:function(i,o){var a,s=t.xhr();if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(a in t.xhrFields)s[a]=t.xhrFields[a];t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");for(a in i)s.setRequestHeader(a,i[a]);n=function(e){return function(){n&&(n=r=s.onload=s.onerror=s.onabort=s.ontimeout=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?o(0,"error"):o(s.status,s.statusText):o(Vt[s.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=n(),r=s.onerror=s.ontimeout=n("error"),void 0!==s.onabort?s.onabort=r:s.onreadystatechange=function(){4===s.readyState&&e.setTimeout(function(){n&&r()})},n=n("abort");try{s.send(t.hasContent&&t.data||null)}catch(e){if(n)throw e}},abort:function(){n&&n()}}}),w.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),w.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return w.globalEval(e),e}}}),w.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),w.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(i,o){t=w("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&o("error"===e.type?404:200,e.type)}),r.head.appendChild(t[0])},abort:function(){n&&n()}}}});var Yt=[],Qt=/(=)\?(?=&|$)|\?\?/;w.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Yt.pop()||w.expando+"_"+Et++;return this[e]=!0,e}}),w.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,a,s=!1!==t.jsonp&&(Qt.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Qt.test(t.data)&&"data");if(s||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=g(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(Qt,"$1"+i):!1!==t.jsonp&&(t.url+=(kt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||w.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},r.always(function(){void 0===o?w(e).removeProp(i):e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,Yt.push(i)),a&&g(o)&&o(a[0]),a=o=void 0}),"script"}),h.createHTMLDocument=function(){var e=r.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),w.parseHTML=function(e,t,n){if("string"!=typeof e)return[];"boolean"==typeof t&&(n=t,t=!1);var i,o,a;return t||(h.createHTMLDocument?((i=(t=r.implementation.createHTMLDocument("")).createElement("base")).href=r.location.href,t.head.appendChild(i)):t=r),o=A.exec(e),a=!n&&[],o?[t.createElement(o[1])]:(o=xe([e],t,a),a&&a.length&&w(a).remove(),w.merge([],o.childNodes))},w.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return s>-1&&(r=vt(e.slice(s)),e=e.slice(0,s)),g(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),a.length>0&&w.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?w("<div>").append(w.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},w.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){w.fn[t]=function(e){return this.on(t,e)}}),w.expr.pseudos.animated=function(e){return w.grep(w.timers,function(t){return e===t.elem}).length},w.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l,c=w.css(e,"position"),f=w(e),p={};"static"===c&&(e.style.position="relative"),s=f.offset(),o=w.css(e,"top"),u=w.css(e,"left"),(l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1)?(a=(r=f.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),g(t)&&(t=t.call(e,n,w.extend({},s))),null!=t.top&&(p.top=t.top-s.top+a),null!=t.left&&(p.left=t.left-s.left+i),"using"in t?t.using.call(e,p):f.css(p)}},w.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){w.offset.setOffset(this,e,t)});var t,n,r=this[0];if(r)return r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===w.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===w.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=w(e).offset()).top+=w.css(e,"borderTopWidth",!0),i.left+=w.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-w.css(r,"marginTop",!0),left:t.left-i.left-w.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===w.css(e,"position"))e=e.offsetParent;return e||be})}}),w.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;w.fn[e]=function(r){return z(this,function(e,r,i){var o;if(y(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===i)return o?o[t]:e[r];o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i},e,r,arguments.length)}}),w.each(["top","left"],function(e,t){w.cssHooks[t]=_e(h.pixelPosition,function(e,n){if(n)return n=Fe(e,t),We.test(n)?w(e).position()[t]+"px":n})}),w.each({Height:"height",Width:"width"},function(e,t){w.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){w.fn[r]=function(i,o){var a=arguments.length&&(n||"boolean"!=typeof i),s=n||(!0===i||!0===o?"margin":"border");return z(this,function(t,n,i){var o;return y(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?w.css(t,n,s):w.style(t,n,i,s)},t,a?i:void 0,a)}})}),w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){w.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),w.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),w.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),w.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),g(e))return r=o.call(arguments,2),i=function(){return e.apply(t||this,r.concat(o.call(arguments)))},i.guid=e.guid=e.guid||w.guid++,i},w.holdReady=function(e){e?w.readyWait++:w.ready(!0)},w.isArray=Array.isArray,w.parseJSON=JSON.parse,w.nodeName=N,w.isFunction=g,w.isWindow=y,w.camelCase=G,w.type=x,w.now=Date.now,w.isNumeric=function(e){var t=w.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return w});var Jt=e.jQuery,Kt=e.$;return w.noConflict=function(t){return e.$===w&&(e.$=Kt),t&&e.jQuery===w&&(e.jQuery=Jt),w},t||(e.jQuery=e.$=w),w});




function photo(){

  var pic=document.getElementById('file').files[0];


  var a='Date ::'+pic.date;
  a+='<br> Name ::'+pic.name;
  a+='<br> Size ::'+pic.size;
  a+='<br> Type ::'+pic.type;

  var filetype= 'application/*';

  if (!pic.type.match(filetype))
    {document.getElementById('res').innerHTML="Invalid File Format"}

  else{

    document.getElementById('res').innerHTML= a;


    }


}

"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 *
 * More info at [www.dropzonejs.com](http://www.dropzonejs.com)
 *
 * Copyright (c) 2012, Matias Meno
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 */

// The Emitter class provides the ability to call `.on()` on Dropzone to listen
// to events.
// It is strongly based on component's emitter class, and I removed the
// functionality because of the dependency hell with different frameworks.
var Emitter = function () {
  function Emitter() {
    _classCallCheck(this, Emitter);
  }

  _createClass(Emitter, [{
    key: "on",

    // Add an event listener for given event
    value: function on(event, fn) {
      this._callbacks = this._callbacks || {};
      // Create namespace for this event
      if (!this._callbacks[event]) {
        this._callbacks[event] = [];
      }
      this._callbacks[event].push(fn);
      return this;
    }
  }, {
    key: "emit",
    value: function emit(event) {
      this._callbacks = this._callbacks || {};
      var callbacks = this._callbacks[event];

      if (callbacks) {
        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        for (var _iterator = callbacks, _isArray = true, _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
          var _ref;

          if (_isArray) {
            if (_i >= _iterator.length) break;
            _ref = _iterator[_i++];
          } else {
            _i = _iterator.next();
            if (_i.done) break;
            _ref = _i.value;
          }

          var callback = _ref;

          callback.apply(this, args);
        }
      }

      return this;
    }

    // Remove event listener for given event. If fn is not provided, all event
    // listeners for that event will be removed. If neither is provided, all
    // event listeners will be removed.

  }, {
    key: "off",
    value: function off(event, fn) {
      if (!this._callbacks || arguments.length === 0) {
        this._callbacks = {};
        return this;
      }

      // specific event
      var callbacks = this._callbacks[event];
      if (!callbacks) {
        return this;
      }

      // remove all handlers
      if (arguments.length === 1) {
        delete this._callbacks[event];
        return this;
      }

      // remove specific handler
      for (var i = 0; i < callbacks.length; i++) {
        var callback = callbacks[i];
        if (callback === fn) {
          callbacks.splice(i, 1);
          break;
        }
      }

      return this;
    }
  }]);

  return Emitter;
}();

var Dropzone = function (_Emitter) {
  _inherits(Dropzone, _Emitter);

  _createClass(Dropzone, null, [{
    key: "initClass",
    value: function initClass() {

      // Exposing the emitter class, mainly for tests
      this.prototype.Emitter = Emitter;

      /*
       This is a list of all available events you can register on a dropzone object.
        You can register an event handler like this:
        dropzone.on("dragEnter", function() { });
        */
      this.prototype.events = ["drop", "dragstart", "dragend", "dragenter", "dragover", "dragleave", "addedfile", "addedfiles", "removedfile", "thumbnail", "error", "errormultiple", "processing", "processingmultiple", "uploadprogress", "totaluploadprogress", "sending", "sendingmultiple", "success", "successmultiple", "canceled", "canceledmultiple", "complete", "completemultiple", "reset", "maxfilesexceeded", "maxfilesreached", "queuecomplete"];

      this.prototype.defaultOptions = {
        /**
         * Has to be specified on elements other than form (or when the form
         * doesn't have an `action` attribute). You can also
         * provide a function that will be called with `files` and
         * must return the url (since `v3.12.0`)
         */
        url: null,

        /**
         * Can be changed to `"put"` if necessary. You can also provide a function
         * that will be called with `files` and must return the method (since `v3.12.0`).
         */
        method: "post",

        /**
         * Will be set on the XHRequest.
         */
        withCredentials: false,

        /**
         * The timeout for the XHR requests in milliseconds (since `v4.4.0`).
         */
        timeout: 30000,

        /**
         * How many file uploads to process in parallel (See the
         * Enqueuing file uploads* documentation section for more info)
         */
        parallelUploads: 2,

        /**
         * Whether to send multiple files in one request. If
         * this it set to true, then the fallback file input element will
         * have the `multiple` attribute as well. This option will
         * also trigger additional events (like `processingmultiple`). See the events
         * documentation section for more information.
         */
        uploadMultiple: false,

        /**
         * Whether you want files to be uploaded in chunks to your server. This can't be
         * used in combination with `uploadMultiple`.
         *
         * See [chunksUploaded](#config-chunksUploaded) for the callback to finalise an upload.
         */
        chunking: false,

        /**
         * If `chunking` is enabled, this defines whether **every** file should be chunked,
         * even if the file size is below chunkSize. This means, that the additional chunk
         * form data will be submitted and the `chunksUploaded` callback will be invoked.
         */
        forceChunking: false,

        /**
         * If `chunking` is `true`, then this defines the chunk size in bytes.
         */
        chunkSize: 2000000,

        /**
         * If `true`, the individual chunks of a file are being uploaded simultaneously.
         */
        parallelChunkUploads: false,

        /**
         * Whether a chunk should be retried if it fails.
         */
        retryChunks: false,

        /**
         * If `retryChunks` is true, how many times should it be retried.
         */
        retryChunksLimit: 3,

        /**
         * If not `null` defines how many files this Dropzone handles. If it exceeds,
         * the event `maxfilesexceeded` will be called. The dropzone element gets the
         * class `dz-max-files-reached` accordingly so you can provide visual feedback.
         */
        maxFilesize: 256,

        /**
         * The name of the file param that gets transferred.
         * **NOTE**: If you have the option  `uploadMultiple` set to `true`, then
         * Dropzone will append `[]` to the name.
         */
        paramName: "file",

        /**
         * Whether thumbnails for images should be generated
         */
        createImageThumbnails: true,

        /**
         * In MB. When the filename exceeds this limit, the thumbnail will not be generated.
         */
        maxThumbnailFilesize: 10,

        /**
         * If `null`, the ratio of the image will be used to calculate it.
         */
        thumbnailWidth: 120,

        /**
         * The same as `thumbnailWidth`. If both are null, images will not be resized.
         */
        thumbnailHeight: 120,

        /**
         * How the images should be scaled down in case both, `thumbnailWidth` and `thumbnailHeight` are provided.
         * Can be either `contain` or `crop`.
         */
        thumbnailMethod: 'crop',

        /**
         * If set, images will be resized to these dimensions before being **uploaded**.
         * If only one, `resizeWidth` **or** `resizeHeight` is provided, the original aspect
         * ratio of the file will be preserved.
         *
         * The `options.transformFile` function uses these options, so if the `transformFile` function
         * is overridden, these options don't do anything.
         */
        resizeWidth: null,

        /**
         * See `resizeWidth`.
         */
        resizeHeight: null,

        /**
         * The mime type of the resized image (before it gets uploaded to the server).
         * If `null` the original mime type will be used. To force jpeg, for example, use `image/jpeg`.
         * See `resizeWidth` for more information.
         */
        resizeMimeType: null,

        /**
         * The quality of the resized images. See `resizeWidth`.
         */
        resizeQuality: 0.8,

        /**
         * How the images should be scaled down in case both, `resizeWidth` and `resizeHeight` are provided.
         * Can be either `contain` or `crop`.
         */
        resizeMethod: 'contain',

        /**
         * The base that is used to calculate the filesize. You can change this to
         * 1024 if you would rather display kibibytes, mebibytes, etc...
         * 1024 is technically incorrect, because `1024 bytes` are `1 kibibyte` not `1 kilobyte`.
         * You can change this to `1024` if you don't care about validity.
         */
        filesizeBase: 1000,

        /**
         * Can be used to limit the maximum number of files that will be handled by this Dropzone
         */
        maxFiles: null,

        /**
         * An optional object to send additional headers to the server. Eg:
         * `{ "My-Awesome-Header": "header value" }`
         */
        headers: null,

        /**
         * If `true`, the dropzone element itself will be clickable, if `false`
         * nothing will be clickable.
         *
         * You can also pass an HTML element, a CSS selector (for multiple elements)
         * or an array of those. In that case, all of those elements will trigger an
         * upload when clicked.
         */
        clickable: true,

        /**
         * Whether hidden files in directories should be ignored.
         */
        ignoreHiddenFiles: true,

        /**
         * The default implementation of `accept` checks the file's mime type or
         * extension against this list. This is a comma separated list of mime
         * types or file extensions.
         *
         * Eg.: `image/*,application/pdf,.psd`
         *
         * If the Dropzone is `clickable` this option will also be used as
         * [`accept`](https://developer.mozilla.org/en-US/docs/HTML/Element/input#attr-accept)
         * parameter on the hidden file input as well.
         */
        acceptedFiles: 'application/dicom',

        /**
         * **Deprecated!**
         * Use acceptedFiles instead.
         */
        acceptedMimeTypes: null,

        /**
         * If false, files will be added to the queue but the queue will not be
         * processed automatically.
         * This can be useful if you need some additional user input before sending
         * files (or if you want want all files sent at once).
         * If you're ready to send the file simply call `myDropzone.processQueue()`.
         *
         * See the [enqueuing file uploads](#enqueuing-file-uploads) documentation
         * section for more information.
         */
        autoProcessQueue: true,

        /**
         * If false, files added to the dropzone will not be queued by default.
         * You'll have to call `enqueueFile(file)` manually.
         */
        autoQueue: true,

        /**
         * If `true`, this will add a link to every file preview to remove or cancel (if
         * already uploading) the file. The `dictCancelUpload`, `dictCancelUploadConfirmation`
         * and `dictRemoveFile` options are used for the wording.
         */
        addRemoveLinks: false,

        /**
         * Defines where to display the file previews – if `null` the
         * Dropzone element itself is used. Can be a plain `HTMLElement` or a CSS
         * selector. The element should have the `dropzone-previews` class so
         * the previews are displayed properly.
         */
        previewsContainer: null,

        /**
         * This is the element the hidden input field (which is used when clicking on the
         * dropzone to trigger file selection) will be appended to. This might
         * be important in case you use frameworks to switch the content of your page.
         */
        hiddenInputContainer: "body",

        /**
         * If null, no capture type will be specified
         * If camera, mobile devices will skip the file selection and choose camera
         * If microphone, mobile devices will skip the file selection and choose the microphone
         * If camcorder, mobile devices will skip the file selection and choose the camera in video mode
         * On apple devices multiple must be set to false.  AcceptedFiles may need to
         * be set to an appropriate mime type (e.g. "image/*", "audio/*", or "video/*").
         */
        capture: null,

        /**
         * **Deprecated**. Use `renameFile` instead.
         */
        renameFilename: null,

        /**
         * A function that is invoked before the file is uploaded to the server and renames the file.
         * This function gets the `File` as argument and can use the `file.name`. The actual name of the
         * file that gets used during the upload can be accessed through `file.upload.filename`.
         */
        renameFile: null,

        /**
         * If `true` the fallback will be forced. This is very useful to test your server
         * implementations first and make sure that everything works as
         * expected without dropzone if you experience problems, and to test
         * how your fallbacks will look.
         */
        forceFallback: false,

        /**
         * The text used before any files are dropped.
         */
        dictDefaultMessage: "Drop your files here or click here to select",

        /**
         * The text that replaces the default message text it the browser is not supported.
         */
        dictFallbackMessage: "Your browser does not support drag'n'drop file uploads.",

        /**
         * The text that will be added before the fallback form.
         * If you provide a  fallback element yourself, or if this option is `null` this will
         * be ignored.
         */
        dictFallbackText: "Please use the fallback form below to upload your files like in the olden days.",

        /**
         * If the filesize is too big.
         * `{{filesize}}` and `{{maxFilesize}}` will be replaced with the respective configuration values.
         */
        dictFileTooBig: "File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",

        /**
         * If the file doesn't match the file type.
         */
        dictInvalidFileType: "You can't upload files of this type.",

        /**
         * If the server response was invalid.
         * `{{statusCode}}` will be replaced with the servers status code.
         */
        dictResponseError: "Server responded with {{statusCode}} code.",

        /**
         * If `addRemoveLinks` is true, the text to be used for the cancel upload link.
         */
        dictCancelUpload: "Cancel upload",

        /**
         * The text that is displayed if an upload was manually canceled
         */
        dictUploadCanceled: "Upload canceled.",

        /**
         * If `addRemoveLinks` is true, the text to be used for confirmation when cancelling upload.
         */
        dictCancelUploadConfirmation: "Are you sure you want to cancel this upload?",

        /**
         * If `addRemoveLinks` is true, the text to be used to remove a file.
         */
        dictRemoveFile: "Remove file",

        /**
         * If this is not null, then the user will be prompted before removing a file.
         */
        dictRemoveFileConfirmation: null,

        /**
         * Displayed if `maxFiles` is st and exceeded.
         * The string `{{maxFiles}}` will be replaced by the configuration value.
         */
        dictMaxFilesExceeded: "You can not upload any more files.",

        /**
         * Allows you to translate the different units. Starting with `tb` for terabytes and going down to
         * `b` for bytes.
         */
        dictFileSizeUnits: { tb: "TB", gb: "GB", mb: "MB", kb: "KB", b: "b" },
        /**
         * Called when dropzone initialized
         * You can add event listeners here
         */
        init: function init() {},


        /**
         * Can be an **object** of additional parameters to transfer to the server, **or** a `Function`
         * that gets invoked with the `files`, `xhr` and, if it's a chunked upload, `chunk` arguments. In case
         * of a function, this needs to return a map.
         *
         * The default implementation does nothing for normal uploads, but adds relevant information for
         * chunked uploads.
         *
         * This is the same as adding hidden input fields in the form element.
         */
        params: function params(files, xhr, chunk) {
          if (chunk) {
            return {
              dzuuid: chunk.file.upload.uuid,
              dzchunkindex: chunk.index,
              dztotalfilesize: chunk.file.size,
              dzchunksize: this.options.chunkSize,
              dztotalchunkcount: chunk.file.upload.totalChunkCount,
              dzchunkbyteoffset: chunk.index * this.options.chunkSize
            };
          }
        },


        /**
         * A function that gets a [file](https://developer.mozilla.org/en-US/docs/DOM/File)
         * and a `done` function as parameters.
         *
         * If the done function is invoked without arguments, the file is "accepted" and will
         * be processed. If you pass an error message, the file is rejected, and the error
         * message will be displayed.
         * This function will not be called if the file is too big or doesn't match the mime types.
         */
        accept: function accept(file, done) {
          return done();
        },


        /**
         * The callback that will be invoked when all chunks have been uploaded for a file.
         * It gets the file for which the chunks have been uploaded as the first parameter,
         * and the `done` function as second. `done()` needs to be invoked when everything
         * needed to finish the upload process is done.
         */
        chunksUploaded: function chunksUploaded(file, done) {
          done();
        },

        /**
         * Gets called when the browser is not supported.
         * The default implementation shows the fallback input field and adds
         * a text.
         */
        fallback: function fallback() {
          // This code should pass in IE7... :(
          var messageElement = void 0;
          this.element.className = this.element.className + " dz-browser-not-supported";

          for (var _iterator2 = this.element.getElementsByTagName("div"), _isArray2 = true, _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
            var _ref2;

            if (_isArray2) {
              if (_i2 >= _iterator2.length) break;
              _ref2 = _iterator2[_i2++];
            } else {
              _i2 = _iterator2.next();
              if (_i2.done) break;
              _ref2 = _i2.value;
            }

            var child = _ref2;

            if (/(^| )dz-message($| )/.test(child.className)) {
              messageElement = child;
              child.className = "dz-message"; // Removes the 'dz-default' class
              break;
            }
          }
          if (!messageElement) {
            messageElement = Dropzone.createElement("<div class=\"dz-message\"><span></span></div>");
            this.element.appendChild(messageElement);
          }

          var span = messageElement.getElementsByTagName("span")[0];
          if (span) {
            if (span.textContent != null) {
              span.textContent = this.options.dictFallbackMessage;
            } else if (span.innerText != null) {
              span.innerText = this.options.dictFallbackMessage;
            }
          }

          return this.element.appendChild(this.getFallbackForm());
        },


        /**
         * Gets called to calculate the thumbnail dimensions.
         *
         * It gets `file`, `width` and `height` (both may be `null`) as parameters and must return an object containing:
         *
         *  - `srcWidth` & `srcHeight` (required)
         *  - `trgWidth` & `trgHeight` (required)
         *  - `srcX` & `srcY` (optional, default `0`)
         *  - `trgX` & `trgY` (optional, default `0`)
         *
         * Those values are going to be used by `ctx.drawImage()`.
         */
        resize: function resize(file, width, height, resizeMethod) {
          var info = {
            srcX: 0,
            srcY: 0,
            srcWidth: file.width,
            srcHeight: file.height
          };

          var srcRatio = file.width / file.height;

          // Automatically calculate dimensions if not specified
          if (width == null && height == null) {
            width = info.srcWidth;
            height = info.srcHeight;
          } else if (width == null) {
            width = height * srcRatio;
          } else if (height == null) {
            height = width / srcRatio;
          }

          // Make sure images aren't upscaled
          width = Math.min(width, info.srcWidth);
          height = Math.min(height, info.srcHeight);

          var trgRatio = width / height;

          if (info.srcWidth > width || info.srcHeight > height) {
            // Image is bigger and needs rescaling
            if (resizeMethod === 'crop') {
              if (srcRatio > trgRatio) {
                info.srcHeight = file.height;
                info.srcWidth = info.srcHeight * trgRatio;
              } else {
                info.srcWidth = file.width;
                info.srcHeight = info.srcWidth / trgRatio;
              }
            } else if (resizeMethod === 'contain') {
              // Method 'contain'
              if (srcRatio > trgRatio) {
                height = width / srcRatio;
              } else {
                width = height * srcRatio;
              }
            } else {
              throw new Error("Unknown resizeMethod '" + resizeMethod + "'");
            }
          }

          info.srcX = (file.width - info.srcWidth) / 2;
          info.srcY = (file.height - info.srcHeight) / 2;

          info.trgWidth = width;
          info.trgHeight = height;

          return info;
        },


        /**
         * Can be used to transform the file (for example, resize an image if necessary).
         *
         * The default implementation uses `resizeWidth` and `resizeHeight` (if provided) and resizes
         * images according to those dimensions.
         *
         * Gets the `file` as the first parameter, and a `done()` function as the second, that needs
         * to be invoked with the file when the transformation is done.
         */
        transformFile: function transformFile(file, done) {
          if ((this.options.resizeWidth || this.options.resizeHeight) && file.type.match(/image.*/)) {
            return this.resizeImage(file, this.options.resizeWidth, this.options.resizeHeight, this.options.resizeMethod, done);
          } else {
            return done(file);
          }
        },


        /**
         * A string that contains the template used for each dropped
         * file. Change it to fulfill your needs but make sure to properly
         * provide all elements.
         *
         * If you want to use an actual HTML element instead of providing a String
         * as a config option, you could create a div with the id `tpl`,
         * put the template inside it and provide the element like this:
         *
         *     document
         *       .querySelector('#tpl')
         *       .innerHTML
         *
         */
        previewTemplate: "<div class=\"dz-preview dz-file-preview\">\n  <div class=\"dz-image\"><img data-dz-thumbnail /></div>\n  <div class=\"dz-details\">\n    <div class=\"dz-size\"><span data-dz-size></span></div>\n    <div class=\"dz-filename\"><span data-dz-name></span></div>\n  </div>\n  <div class=\"dz-progress\"><span class=\"dz-upload\" data-dz-uploadprogress></span></div>\n  <div class=\"dz-error-message\"><span data-dz-errormessage></span></div>\n  <div class=\"dz-success-mark\">\n    <svg width=\"54px\" height=\"54px\" viewBox=\"0 0 54 54\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:sketch=\"http://www.bohemiancoding.com/sketch/ns\">\n      <title>Check</title>\n      <defs></defs>\n      <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" sketch:type=\"MSPage\">\n        <path d=\"M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z\" id=\"Oval-2\" stroke-opacity=\"0.198794158\" stroke=\"#747474\" fill-opacity=\"0.816519475\" fill=\"#FFFFFF\" sketch:type=\"MSShapeGroup\"></path>\n      </g>\n    </svg>\n  </div>\n  <div class=\"dz-error-mark\">\n    <svg width=\"54px\" height=\"54px\" viewBox=\"0 0 54 54\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:sketch=\"http://www.bohemiancoding.com/sketch/ns\">\n      <title>Error</title>\n      <defs></defs>\n      <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" sketch:type=\"MSPage\">\n        <g id=\"Check-+-Oval-2\" sketch:type=\"MSLayerGroup\" stroke=\"#747474\" stroke-opacity=\"0.198794158\" fill=\"#FFFFFF\" fill-opacity=\"0.816519475\">\n          <path d=\"M32.6568542,29 L38.3106978,23.3461564 C39.8771021,21.7797521 39.8758057,19.2483887 38.3137085,17.6862915 C36.7547899,16.1273729 34.2176035,16.1255422 32.6538436,17.6893022 L27,23.3431458 L21.3461564,17.6893022 C19.7823965,16.1255422 17.2452101,16.1273729 15.6862915,17.6862915 C14.1241943,19.2483887 14.1228979,21.7797521 15.6893022,23.3461564 L21.3431458,29 L15.6893022,34.6538436 C14.1228979,36.2202479 14.1241943,38.7516113 15.6862915,40.3137085 C17.2452101,41.8726271 19.7823965,41.8744578 21.3461564,40.3106978 L27,34.6568542 L32.6538436,40.3106978 C34.2176035,41.8744578 36.7547899,41.8726271 38.3137085,40.3137085 C39.8758057,38.7516113 39.8771021,36.2202479 38.3106978,34.6538436 L32.6568542,29 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z\" id=\"Oval-2\" sketch:type=\"MSShapeGroup\"></path>\n        </g>\n      </g>\n    </svg>\n  </div>\n</div>",

        // END OPTIONS
        // (Required by the dropzone documentation parser)


        /*
         Those functions register themselves to the events on init and handle all
         the user interface specific stuff. Overwriting them won't break the upload
         but can break the way it's displayed.
         You can overwrite them if you don't like the default behavior. If you just
         want to add an additional event handler, register it on the dropzone object
         and don't overwrite those options.
         */

        // Those are self explanatory and simply concern the DragnDrop.
        drop: function drop(e) {
          return this.element.classList.remove("dz-drag-hover");
        },
        dragstart: function dragstart(e) {},
        dragend: function dragend(e) {
          return this.element.classList.remove("dz-drag-hover");
        },
        dragenter: function dragenter(e) {
          return this.element.classList.add("dz-drag-hover");
        },
        dragover: function dragover(e) {
          return this.element.classList.add("dz-drag-hover");
        },
        dragleave: function dragleave(e) {
          return this.element.classList.remove("dz-drag-hover");
        },
        paste: function paste(e) {},


        // Called whenever there are no files left in the dropzone anymore, and the
        // dropzone should be displayed as if in the initial state.
        reset: function reset() {
          return this.element.classList.remove("dz-started");
        },


        // Called when a file is added to the queue
        // Receives `file`
        addedfile: function addedfile(file) {
          var _this2 = this;

          if (this.element === this.previewsContainer) {
            this.element.classList.add("dz-started");
          }

          if (this.previewsContainer) {
            file.previewElement = Dropzone.createElement(this.options.previewTemplate.trim());
            file.previewTemplate = file.previewElement; // Backwards compatibility

            this.previewsContainer.appendChild(file.previewElement);
            for (var _iterator3 = file.previewElement.querySelectorAll("[data-dz-name]"), _isArray3 = true, _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
              var _ref3;

              if (_isArray3) {
                if (_i3 >= _iterator3.length) break;
                _ref3 = _iterator3[_i3++];
              } else {
                _i3 = _iterator3.next();
                if (_i3.done) break;
                _ref3 = _i3.value;
              }

              var node = _ref3;

              node.textContent = file.name;
            }
            for (var _iterator4 = file.previewElement.querySelectorAll("[data-dz-size]"), _isArray4 = true, _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator]();;) {
              if (_isArray4) {
                if (_i4 >= _iterator4.length) break;
                node = _iterator4[_i4++];
              } else {
                _i4 = _iterator4.next();
                if (_i4.done) break;
                node = _i4.value;
              }

              node.innerHTML = this.filesize(file.size);
            }

            if (this.options.addRemoveLinks) {
              file._removeLink = Dropzone.createElement("<a class=\"dz-remove\" href=\"javascript:undefined;\" data-dz-remove>" + this.options.dictRemoveFile + "</a>");
              file.previewElement.appendChild(file._removeLink);
            }

            var removeFileEvent = function removeFileEvent(e) {
              e.preventDefault();
              e.stopPropagation();
              if (file.status === Dropzone.UPLOADING) {
                return Dropzone.confirm(_this2.options.dictCancelUploadConfirmation, function () {
                  return _this2.removeFile(file);
                });
              } else {
                if (_this2.options.dictRemoveFileConfirmation) {
                  return Dropzone.confirm(_this2.options.dictRemoveFileConfirmation, function () {
                    return _this2.removeFile(file);
                  });
                } else {
                  return _this2.removeFile(file);
                }
              }
            };

            for (var _iterator5 = file.previewElement.querySelectorAll("[data-dz-remove]"), _isArray5 = true, _i5 = 0, _iterator5 = _isArray5 ? _iterator5 : _iterator5[Symbol.iterator]();;) {
              var _ref4;

              if (_isArray5) {
                if (_i5 >= _iterator5.length) break;
                _ref4 = _iterator5[_i5++];
              } else {
                _i5 = _iterator5.next();
                if (_i5.done) break;
                _ref4 = _i5.value;
              }

              var removeLink = _ref4;

              removeLink.addEventListener("click", removeFileEvent);
            }
          }
        },


        // Called whenever a file is removed.
        removedfile: function removedfile(file) {
          if (file.previewElement != null && file.previewElement.parentNode != null) {
            file.previewElement.parentNode.removeChild(file.previewElement);
          }
          return this._updateMaxFilesReachedClass();
        },


        // Called when a thumbnail has been generated
        // Receives `file` and `dataUrl`
        thumbnail: function thumbnail(file, dataUrl) {
          if (file.previewElement) {
            file.previewElement.classList.remove("dz-file-preview");
            for (var _iterator6 = file.previewElement.querySelectorAll("[data-dz-thumbnail]"), _isArray6 = true, _i6 = 0, _iterator6 = _isArray6 ? _iterator6 : _iterator6[Symbol.iterator]();;) {
              var _ref5;

              if (_isArray6) {
                if (_i6 >= _iterator6.length) break;
                _ref5 = _iterator6[_i6++];
              } else {
                _i6 = _iterator6.next();
                if (_i6.done) break;
                _ref5 = _i6.value;
              }

              var thumbnailElement = _ref5;

              thumbnailElement.alt = file.name;
              thumbnailElement.src = dataUrl;
            }

            return setTimeout(function () {
              return file.previewElement.classList.add("dz-image-preview");
            }, 1);
          }
        },


        // Called whenever an error occurs
        // Receives `file` and `message`
        error: function error(file, message) {
          if (file.previewElement) {
            file.previewElement.classList.add("dz-error");
            if (typeof message !== "String" && message.error) {
              message = message.error;
            }
            for (var _iterator7 = file.previewElement.querySelectorAll("[data-dz-errormessage]"), _isArray7 = true, _i7 = 0, _iterator7 = _isArray7 ? _iterator7 : _iterator7[Symbol.iterator]();;) {
              var _ref6;

              if (_isArray7) {
                if (_i7 >= _iterator7.length) break;
                _ref6 = _iterator7[_i7++];
              } else {
                _i7 = _iterator7.next();
                if (_i7.done) break;
                _ref6 = _i7.value;
              }

              var node = _ref6;

              node.textContent = message;
            }
          }
        },
        errormultiple: function errormultiple() {},


        // Called when a file gets processed. Since there is a cue, not all added
        // files are processed immediately.
        // Receives `file`
        processing: function processing(file) {
          if (file.previewElement) {
            file.previewElement.classList.add("dz-processing");
            if (file._removeLink) {
              return file._removeLink.textContent = this.options.dictCancelUpload;
            }
          }
        },
        processingmultiple: function processingmultiple() {},


        // Called whenever the upload progress gets updated.
        // Receives `file`, `progress` (percentage 0-100) and `bytesSent`.
        // To get the total number of bytes of the file, use `file.size`
        uploadprogress: function uploadprogress(file, progress, bytesSent) {
          if (file.previewElement) {
            for (var _iterator8 = file.previewElement.querySelectorAll("[data-dz-uploadprogress]"), _isArray8 = true, _i8 = 0, _iterator8 = _isArray8 ? _iterator8 : _iterator8[Symbol.iterator]();;) {
              var _ref7;

              if (_isArray8) {
                if (_i8 >= _iterator8.length) break;
                _ref7 = _iterator8[_i8++];
              } else {
                _i8 = _iterator8.next();
                if (_i8.done) break;
                _ref7 = _i8.value;
              }

              var node = _ref7;

              node.nodeName === 'PROGRESS' ? node.value = progress : node.style.width = progress + "%";
            }
          }
        },


        // Called whenever the total upload progress gets updated.
        // Called with totalUploadProgress (0-100), totalBytes and totalBytesSent
        totaluploadprogress: function totaluploadprogress() {},


        // Called just before the file is sent. Gets the `xhr` object as second
        // parameter, so you can modify it (for example to add a CSRF token) and a
        // `formData` object to add additional information.
        sending: function sending() {},
        sendingmultiple: function sendingmultiple() {},


        // When the complete upload is finished and successful
        // Receives `file`
        success: function success(file) {//Enables the download button
          var fileName = 1;

          if(fileName==1) { // returns true if the string is not empty

              // $("#js-upload-submit").removeAttr('disabled');
              // $("#js-upload-submit").css({
              //   "cursor": "pointer",
              //   "box-shadow": "1px 0px 6px #333"
              // });
          } else {
              alert("no file selected");
          }
          if (file.previewElement) {
            return file.previewElement.classList.add("dz-success");
          }


        },
        successmultiple: function successmultiple() {},


        // When the upload is canceled.
        canceled: function canceled(file) {
          return this.emit("error", file, this.options.dictUploadCanceled);
        },
        canceledmultiple: function canceledmultiple() {},


        // When the upload is finished, either with success or an error.
        // Receives `file`
        complete: function complete(file) {
          if (file._removeLink) {
            file._removeLink.textContent = this.options.dictRemoveFile;
          }
          if (file.previewElement) {
            return file.previewElement.classList.add("dz-complete");
          }
        },
        completemultiple: function completemultiple() {},
        maxfilesexceeded: function maxfilesexceeded() {},
        maxfilesreached: function maxfilesreached() {},
        queuecomplete: function queuecomplete() {},
        addedfiles: function addedfiles() {}
      };

      this.prototype._thumbnailQueue = [];
      this.prototype._processingThumbnail = false;
    }

    // global utility

  }, {
    key: "extend",
    value: function extend(target) {
      for (var _len2 = arguments.length, objects = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        objects[_key2 - 1] = arguments[_key2];
      }

      for (var _iterator9 = objects, _isArray9 = true, _i9 = 0, _iterator9 = _isArray9 ? _iterator9 : _iterator9[Symbol.iterator]();;) {
        var _ref8;

        if (_isArray9) {
          if (_i9 >= _iterator9.length) break;
          _ref8 = _iterator9[_i9++];
        } else {
          _i9 = _iterator9.next();
          if (_i9.done) break;
          _ref8 = _i9.value;
        }

        var object = _ref8;

        for (var key in object) {
          var val = object[key];
          target[key] = val;
        }
      }
      return target;
    }
  }]);

  function Dropzone(el, options) {
    _classCallCheck(this, Dropzone);

    var _this = _possibleConstructorReturn(this, (Dropzone.__proto__ || Object.getPrototypeOf(Dropzone)).call(this));

    var fallback = void 0,
        left = void 0;
    _this.element = el;
    // For backwards compatibility since the version was in the prototype previously
    _this.version = Dropzone.version;

    _this.defaultOptions.previewTemplate = _this.defaultOptions.previewTemplate.replace(/\n*/g, "");

    _this.clickableElements = [];
    _this.listeners = [];
    _this.files = []; // All files

    if (typeof _this.element === "string") {
      _this.element = document.querySelector(_this.element);
    }

    // Not checking if instance of HTMLElement or Element since IE9 is extremely weird.
    if (!_this.element || _this.element.nodeType == null) {
      throw new Error("Invalid dropzone element.");
    }

    if (_this.element.dropzone) {
      throw new Error("Dropzone already attached.");
    }

    // Now add this dropzone to the instances.
    Dropzone.instances.push(_this);

    // Put the dropzone inside the element itself.
    _this.element.dropzone = _this;

    var elementOptions = (left = Dropzone.optionsForElement(_this.element)) != null ? left : {};

    _this.options = Dropzone.extend({}, _this.defaultOptions, elementOptions, options != null ? options : {});

    // If the browser failed, just call the fallback and leave
    if (_this.options.forceFallback || !Dropzone.isBrowserSupported()) {
      var _ret;

      return _ret = _this.options.fallback.call(_this), _possibleConstructorReturn(_this, _ret);
    }

    // @options.url = @element.getAttribute "action" unless @options.url?
    if (_this.options.url == null) {
      _this.options.url = _this.element.getAttribute("action");
    }

    if (!_this.options.url) {
      throw new Error("No URL provided.");
    }

    if (_this.options.acceptedFiles && _this.options.acceptedMimeTypes) {
      throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");
    }

    if (_this.options.uploadMultiple && _this.options.chunking) {
      throw new Error('You cannot set both: uploadMultiple and chunking.');
    }

    // Backwards compatibility
    if (_this.options.acceptedMimeTypes) {
      _this.options.acceptedFiles = _this.options.acceptedMimeTypes;
      delete _this.options.acceptedMimeTypes;
    }

    // Backwards compatibility
    if (_this.options.renameFilename != null) {
      _this.options.renameFile = function (file) {
        return _this.options.renameFilename.call(_this, file.name, file);
      };
    }

    _this.options.method = _this.options.method.toUpperCase();

    if ((fallback = _this.getExistingFallback()) && fallback.parentNode) {
      // Remove the fallback
      fallback.parentNode.removeChild(fallback);
    }

    // Display previews in the previewsContainer element or the Dropzone element unless explicitly set to false
    if (_this.options.previewsContainer !== false) {
      if (_this.options.previewsContainer) {
        _this.previewsContainer = Dropzone.getElement(_this.options.previewsContainer, "previewsContainer");
      } else {
        _this.previewsContainer = _this.element;
      }
    }

    if (_this.options.clickable) {
      if (_this.options.clickable === true) {
        _this.clickableElements = [_this.element];
      } else {
        _this.clickableElements = Dropzone.getElements(_this.options.clickable, "clickable");
      }
    }

    _this.init();
    return _this;
  }

  // Returns all files that have been accepted


  _createClass(Dropzone, [{
    key: "getAcceptedFiles",
    value: function getAcceptedFiles() {
      return this.files.filter(function (file) {
        return file.accepted;
      }).map(function (file) {
        return file;
      });
    }

    // Returns all files that have been rejected
    // Not sure when that's going to be useful, but added for completeness.

  }, {
    key: "getRejectedFiles",
    value: function getRejectedFiles() {
      return this.files.filter(function (file) {
        return !file.accepted;
      }).map(function (file) {
        return file;
      });
    }
  }, {
    key: "getFilesWithStatus",
    value: function getFilesWithStatus(status) {
      return this.files.filter(function (file) {
        return file.status === status;
      }).map(function (file) {
        return file;
      });
    }

    // Returns all files that are in the queue

  }, {
    key: "getQueuedFiles",
    value: function getQueuedFiles() {
      return this.getFilesWithStatus(Dropzone.QUEUED);
    }
  }, {
    key: "getUploadingFiles",
    value: function getUploadingFiles() {
      return this.getFilesWithStatus(Dropzone.UPLOADING);
    }
  }, {
    key: "getAddedFiles",
    value: function getAddedFiles() {
      return this.getFilesWithStatus(Dropzone.ADDED);
    }

    // Files that are either queued or uploading

  }, {
    key: "getActiveFiles",
    value: function getActiveFiles() {
      return this.files.filter(function (file) {
        return file.status === Dropzone.UPLOADING || file.status === Dropzone.QUEUED;
      }).map(function (file) {
        return file;
      });
    }

    // The function that gets called when Dropzone is initialized. You
    // can (and should) setup event listeners inside this function.

  }, {
    key: "init",
    value: function init() {
      var _this3 = this;

      // In case it isn't set already
      if (this.element.tagName === "form") {
        this.element.setAttribute("enctype", "multipart/form-data");
      }

      if (this.element.classList.contains("dropzone") && !this.element.querySelector(".dz-message")) {
        this.element.appendChild(Dropzone.createElement("<div class=\"dz-default dz-message\"><span>" + this.options.dictDefaultMessage + "</span></div>"));
      }

      if (this.clickableElements.length) {
        var setupHiddenFileInput = function setupHiddenFileInput() {
          if (_this3.hiddenFileInput) {
            _this3.hiddenFileInput.parentNode.removeChild(_this3.hiddenFileInput);
          }
          _this3.hiddenFileInput = document.createElement("input");
          _this3.hiddenFileInput.setAttribute("type", "file");
          if (_this3.options.maxFiles === null || _this3.options.maxFiles > 1) {
            _this3.hiddenFileInput.setAttribute("multiple", "multiple");
          }
          _this3.hiddenFileInput.className = "dz-hidden-input";

          if (_this3.options.acceptedFiles !== null) {
            _this3.hiddenFileInput.setAttribute("accept", _this3.options.acceptedFiles);
          }
          if (_this3.options.capture !== null) {
            _this3.hiddenFileInput.setAttribute("capture", _this3.options.capture);
          }

          // Not setting `display="none"` because some browsers don't accept clicks
          // on elements that aren't displayed.
          _this3.hiddenFileInput.style.visibility = "hidden";
          _this3.hiddenFileInput.style.position = "absolute";
          _this3.hiddenFileInput.style.top = "0";
          _this3.hiddenFileInput.style.left = "0";
          _this3.hiddenFileInput.style.height = "0";
          _this3.hiddenFileInput.style.width = "0";
          document.querySelector(_this3.options.hiddenInputContainer).appendChild(_this3.hiddenFileInput);
          return _this3.hiddenFileInput.addEventListener("change", function () {
            var files = _this3.hiddenFileInput.files;

            if (files.length) {
              for (var _iterator10 = files, _isArray10 = true, _i10 = 0, _iterator10 = _isArray10 ? _iterator10 : _iterator10[Symbol.iterator]();;) {
                var _ref9;

                if (_isArray10) {
                  if (_i10 >= _iterator10.length) break;
                  _ref9 = _iterator10[_i10++];
                } else {
                  _i10 = _iterator10.next();
                  if (_i10.done) break;
                  _ref9 = _i10.value;
                }

                var file = _ref9;

                _this3.addFile(file);
              }
            }
            _this3.emit("addedfiles", files);
            return setupHiddenFileInput();
          });
        };
        setupHiddenFileInput();
      }

      this.URL = window.URL !== null ? window.URL : window.webkitURL;

      // Setup all event listeners on the Dropzone object itself.
      // They're not in @setupEventListeners() because they shouldn't be removed
      // again when the dropzone gets disabled.
      for (var _iterator11 = this.events, _isArray11 = true, _i11 = 0, _iterator11 = _isArray11 ? _iterator11 : _iterator11[Symbol.iterator]();;) {
        var _ref10;

        if (_isArray11) {
          if (_i11 >= _iterator11.length) break;
          _ref10 = _iterator11[_i11++];
        } else {
          _i11 = _iterator11.next();
          if (_i11.done) break;
          _ref10 = _i11.value;
        }

        var eventName = _ref10;

        this.on(eventName, this.options[eventName]);
      }

      this.on("uploadprogress", function () {
        return _this3.updateTotalUploadProgress();
      });

      this.on("removedfile", function () {
        return _this3.updateTotalUploadProgress();
      });

      this.on("canceled", function (file) {
        return _this3.emit("complete", file);
      });

      // Emit a `queuecomplete` event if all files finished uploading.
      this.on("complete", function (file) {
        if (_this3.getAddedFiles().length === 0 && _this3.getUploadingFiles().length === 0 && _this3.getQueuedFiles().length === 0) {
          // This needs to be deferred so that `queuecomplete` really triggers after `complete`
          return setTimeout(function () {
            return _this3.emit("queuecomplete");
          }, 0);
        }
      });

      var noPropagation = function noPropagation(e) {
        e.stopPropagation();
        if (e.preventDefault) {
          return e.preventDefault();
        } else {
          return e.returnValue = false;
        }
      };

      // Create the listeners
      this.listeners = [{
        element: this.element,
        events: {
          "dragstart": function dragstart(e) {
            return _this3.emit("dragstart", e);
          },
          "dragenter": function dragenter(e) {
            noPropagation(e);
            return _this3.emit("dragenter", e);
          },
          "dragover": function dragover(e) {
            // Makes it possible to drag files from chrome's download bar
            // http://stackoverflow.com/questions/19526430/drag-and-drop-file-uploads-from-chrome-downloads-bar
            // Try is required to prevent bug in Internet Explorer 11 (SCRIPT65535 exception)
            var efct = void 0;
            try {
              efct = e.dataTransfer.effectAllowed;
            } catch (error) {}
            e.dataTransfer.dropEffect = 'move' === efct || 'linkMove' === efct ? 'move' : 'copy';

            noPropagation(e);
            return _this3.emit("dragover", e);
          },
          "dragleave": function dragleave(e) {
            return _this3.emit("dragleave", e);
          },
          "drop": function drop(e) {
            noPropagation(e);
            return _this3.drop(e);
          },
          "dragend": function dragend(e) {
            return _this3.emit("dragend", e);
          }

          // This is disabled right now, because the browsers don't implement it properly.
          // "paste": (e) =>
          //   noPropagation e
          //   @paste e
        } }];

      this.clickableElements.forEach(function (clickableElement) {
        return _this3.listeners.push({
          element: clickableElement,
          events: {
            "click": function click(evt) {
              // Only the actual dropzone or the message element should trigger file selection
              if (clickableElement !== _this3.element || evt.target === _this3.element || Dropzone.elementInside(evt.target, _this3.element.querySelector(".dz-message"))) {
                _this3.hiddenFileInput.click(); // Forward the click
              }
              return true;
            }
          }
        });
      });

      this.enable();

      return this.options.init.call(this);
    }

    // Not fully tested yet

  }, {
    key: "destroy",
    value: function destroy() {
      this.disable();
      this.removeAllFiles(true);
      if (this.hiddenFileInput != null ? this.hiddenFileInput.parentNode : undefined) {
        this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput);
        this.hiddenFileInput = null;
      }
      delete this.element.dropzone;
      return Dropzone.instances.splice(Dropzone.instances.indexOf(this), 1);
    }
  }, {
    key: "updateTotalUploadProgress",
    value: function updateTotalUploadProgress() {
      var totalUploadProgress = void 0;
      var totalBytesSent = 0;
      var totalBytes = 0;

      var activeFiles = this.getActiveFiles();

      if (activeFiles.length) {
        for (var _iterator12 = this.getActiveFiles(), _isArray12 = true, _i12 = 0, _iterator12 = _isArray12 ? _iterator12 : _iterator12[Symbol.iterator]();;) {
          var _ref11;

          if (_isArray12) {
            if (_i12 >= _iterator12.length) break;
            _ref11 = _iterator12[_i12++];
          } else {
            _i12 = _iterator12.next();
            if (_i12.done) break;
            _ref11 = _i12.value;
          }

          var file = _ref11;

          totalBytesSent += file.upload.bytesSent;
          totalBytes += file.upload.total;
        }
        totalUploadProgress = 100 * totalBytesSent / totalBytes;
      } else {
        totalUploadProgress = 100;
      }

      return this.emit("totaluploadprogress", totalUploadProgress, totalBytes, totalBytesSent);
    }

    // @options.paramName can be a function taking one parameter rather than a string.
    // A parameter name for a file is obtained simply by calling this with an index number.

  }, {
    key: "_getParamName",
    value: function _getParamName(n) {
      if (typeof this.options.paramName === "function") {
        return this.options.paramName(n);
      } else {
        return "" + this.options.paramName + (this.options.uploadMultiple ? "[" + n + "]" : "");
      }
    }

    // If @options.renameFile is a function,
    // the function will be used to rename the file.name before appending it to the formData

  }, {
    key: "_renameFile",
    value: function _renameFile(file) {
      if (typeof this.options.renameFile !== "function") {
        return file.name;
      }
      return this.options.renameFile(file);
    }

    // Returns a form that can be used as fallback if the browser does not support DragnDrop
    //
    // If the dropzone is already a form, only the input field and button are returned. Otherwise a complete form element is provided.
    // This code has to pass in IE7 :(

  }, {
    key: "getFallbackForm",
    value: function getFallbackForm() {
      var existingFallback = void 0,
          form = void 0;
      if (existingFallback = this.getExistingFallback()) {
        return existingFallback;
      }

      var fieldsString = "<div class=\"dz-fallback\">";
      if (this.options.dictFallbackText) {
        fieldsString += "<p>" + this.options.dictFallbackText + "</p>";
      }
      fieldsString += "<input type=\"file\" name=\"" + this._getParamName(0) + "\" " + (this.options.uploadMultiple ? 'multiple="multiple"' : undefined) + " /><input type=\"submit\" value=\"Upload!\"></div>";

      var fields = Dropzone.createElement(fieldsString);
      if (this.element.tagName !== "FORM") {
        form = Dropzone.createElement("<form action=\"" + this.options.url + "\" enctype=\"multipart/form-data\" method=\"" + this.options.method + "\"></form>");
        form.appendChild(fields);
      } else {
        // Make sure that the enctype and method attributes are set properly
        this.element.setAttribute("enctype", "multipart/form-data");
        this.element.setAttribute("method", this.options.method);
      }
      return form != null ? form : fields;
    }

    // Returns the fallback elements if they exist already
    //
    // This code has to pass in IE7 :(

  }, {
    key: "getExistingFallback",
    value: function getExistingFallback() {
      var getFallback = function getFallback(elements) {
        for (var _iterator13 = elements, _isArray13 = true, _i13 = 0, _iterator13 = _isArray13 ? _iterator13 : _iterator13[Symbol.iterator]();;) {
          var _ref12;

          if (_isArray13) {
            if (_i13 >= _iterator13.length) break;
            _ref12 = _iterator13[_i13++];
          } else {
            _i13 = _iterator13.next();
            if (_i13.done) break;
            _ref12 = _i13.value;
          }

          var el = _ref12;

          if (/(^| )fallback($| )/.test(el.className)) {
            return el;
          }
        }
      };

      var _arr = ["div", "form"];
      for (var _i14 = 0; _i14 < _arr.length; _i14++) {
        var tagName = _arr[_i14];
        var fallback;
        if (fallback = getFallback(this.element.getElementsByTagName(tagName))) {
          return fallback;
        }
      }
    }

    // Activates all listeners stored in @listeners

  }, {
    key: "setupEventListeners",
    value: function setupEventListeners() {
      return this.listeners.map(function (elementListeners) {
        return function () {
          var result = [];
          for (var event in elementListeners.events) {
            var listener = elementListeners.events[event];
            result.push(elementListeners.element.addEventListener(event, listener, false));
          }
          return result;
        }();
      });
    }

    // Deactivates all listeners stored in @listeners

  }, {
    key: "removeEventListeners",
    value: function removeEventListeners() {
      return this.listeners.map(function (elementListeners) {
        return function () {
          var result = [];
          for (var event in elementListeners.events) {
            var listener = elementListeners.events[event];
            result.push(elementListeners.element.removeEventListener(event, listener, false));
          }
          return result;
        }();
      });
    }

    // Removes all event listeners and cancels all files in the queue or being processed.

  }, {
    key: "disable",
    value: function disable() {
      var _this4 = this;

      this.clickableElements.forEach(function (element) {
        return element.classList.remove("dz-clickable");
      });
      this.removeEventListeners();
      this.disabled = true;

      return this.files.map(function (file) {
        return _this4.cancelUpload(file);
      });
    }
  }, {
    key: "enable",
    value: function enable() {
      delete this.disabled;
      this.clickableElements.forEach(function (element) {
        return element.classList.add("dz-clickable");
      });
      return this.setupEventListeners();
    }

    // Returns a nicely formatted filesize

  }, {
    key: "filesize",
    value: function filesize(size) {
      var selectedSize = 0;
      var selectedUnit = "b";

      if (size > 0) {
        var units = ['tb', 'gb', 'mb', 'kb', 'b'];

        for (var i = 0; i < units.length; i++) {
          var unit = units[i];
          var cutoff = Math.pow(this.options.filesizeBase, 4 - i) / 10;

          if (size >= cutoff) {
            selectedSize = size / Math.pow(this.options.filesizeBase, 4 - i);
            selectedUnit = unit;
            break;
          }
        }

        selectedSize = Math.round(10 * selectedSize) / 10; // Cutting of digits
      }

      return "<strong>" + selectedSize + "</strong> " + this.options.dictFileSizeUnits[selectedUnit];
    }

    // Adds or removes the `dz-max-files-reached` class from the form.

  }, {
    key: "_updateMaxFilesReachedClass",
    value: function _updateMaxFilesReachedClass() {
      if (this.options.maxFiles != null && this.getAcceptedFiles().length >= this.options.maxFiles) {
        if (this.getAcceptedFiles().length === this.options.maxFiles) {
          this.emit('maxfilesreached', this.files);
        }
        return this.element.classList.add("dz-max-files-reached");
      } else {
        return this.element.classList.remove("dz-max-files-reached");
      }
    }
  }, {
    key: "drop",
    value: function drop(e) {
      if (!e.dataTransfer) {
        return;
      }
      this.emit("drop", e);

      // Convert the FileList to an Array
      // This is necessary for IE11
      var files = [];
      for (var i = 0; i < e.dataTransfer.files.length; i++) {
        files[i] = e.dataTransfer.files[i];
      }

      this.emit("addedfiles", files);

      // Even if it's a folder, files.length will contain the folders.
      if (files.length) {
        var items = e.dataTransfer.items;

        if (items && items.length && items[0].webkitGetAsEntry != null) {
          // The browser supports dropping of folders, so handle items instead of files
          this._addFilesFromItems(items);
        } else {
          this.handleFiles(files);
        }
      }
    }
  }, {
    key: "paste",
    value: function paste(e) {
      if (__guard__(e != null ? e.clipboardData : undefined, function (x) {
        return x.items;
      }) == null) {
        return;
      }

      this.emit("paste", e);
      var items = e.clipboardData.items;


      if (items.length) {
        return this._addFilesFromItems(items);
      }
    }
  }, {
    key: "handleFiles",
    value: function handleFiles(files) {
      for (var _iterator14 = files, _isArray14 = true, _i15 = 0, _iterator14 = _isArray14 ? _iterator14 : _iterator14[Symbol.iterator]();;) {
        var _ref13;

        if (_isArray14) {
          if (_i15 >= _iterator14.length) break;
          _ref13 = _iterator14[_i15++];
        } else {
          _i15 = _iterator14.next();
          if (_i15.done) break;
          _ref13 = _i15.value;
        }

        var file = _ref13;

        this.addFile(file);
      }
    }

    // When a folder is dropped (or files are pasted), items must be handled
    // instead of files.

  }, {
    key: "_addFilesFromItems",
    value: function _addFilesFromItems(items) {
      var _this5 = this;

      return function () {
        var result = [];
        for (var _iterator15 = items, _isArray15 = true, _i16 = 0, _iterator15 = _isArray15 ? _iterator15 : _iterator15[Symbol.iterator]();;) {
          var _ref14;

          if (_isArray15) {
            if (_i16 >= _iterator15.length) break;
            _ref14 = _iterator15[_i16++];
          } else {
            _i16 = _iterator15.next();
            if (_i16.done) break;
            _ref14 = _i16.value;
          }

          var item = _ref14;

          var entry;
          if (item.webkitGetAsEntry != null && (entry = item.webkitGetAsEntry())) {
            if (entry.isFile) {
              result.push(_this5.addFile(item.getAsFile()));
            } else if (entry.isDirectory) {
              // Append all files from that directory to files
              result.push(_this5._addFilesFromDirectory(entry, entry.name));
            } else {
              result.push(undefined);
            }
          } else if (item.getAsFile != null) {
            if (item.kind == null || item.kind === "file") {
              result.push(_this5.addFile(item.getAsFile()));
            } else {
              result.push(undefined);
            }
          } else {
            result.push(undefined);
          }
        }
        return result;
      }();
    }

    // Goes through the directory, and adds each file it finds recursively

  }, {
    key: "_addFilesFromDirectory",
    value: function _addFilesFromDirectory(directory, path) {
      var _this6 = this;

      var dirReader = directory.createReader();

      var errorHandler = function errorHandler(error) {
        return __guardMethod__(console, 'log', function (o) {
          return o.log(error);
        });
      };

      var readEntries = function readEntries() {
        return dirReader.readEntries(function (entries) {
          if (entries.length > 0) {
            for (var _iterator16 = entries, _isArray16 = true, _i17 = 0, _iterator16 = _isArray16 ? _iterator16 : _iterator16[Symbol.iterator]();;) {
              var _ref15;

              if (_isArray16) {
                if (_i17 >= _iterator16.length) break;
                _ref15 = _iterator16[_i17++];
              } else {
                _i17 = _iterator16.next();
                if (_i17.done) break;
                _ref15 = _i17.value;
              }

              var entry = _ref15;

              if (entry.isFile) {
                entry.file(function (file) {
                  if (_this6.options.ignoreHiddenFiles && file.name.substring(0, 1) === '.') {
                    return;
                  }
                  file.fullPath = path + "/" + file.name;
                  return _this6.addFile(file);
                });
              } else if (entry.isDirectory) {
                _this6._addFilesFromDirectory(entry, path + "/" + entry.name);
              }
            }

            // Recursively call readEntries() again, since browser only handle
            // the first 100 entries.
            // See: https://developer.mozilla.org/en-US/docs/Web/API/DirectoryReader#readEntries
            readEntries();
          }
          return null;
        }, errorHandler);
      };

      return readEntries();
    }

    // If `done()` is called without argument the file is accepted
    // If you call it with an error message, the file is rejected
    // (This allows for asynchronous validation)
    //
    // This function checks the filesize, and if the file.type passes the
    // `acceptedFiles` check.

  }, {
    key: "accept",
    value: function accept(file, done) {
      if (this.options.maxFilesize && file.size > this.options.maxFilesize * 1024 * 1024) {
        return done(this.options.dictFileTooBig.replace("{{filesize}}", Math.round(file.size / 1024 / 10.24) / 100).replace("{{maxFilesize}}", this.options.maxFilesize));
      } else if (!Dropzone.isValidFile(file, this.options.acceptedFiles)) {
        return done(this.options.dictInvalidFileType);
      } else if (this.options.maxFiles != null && this.getAcceptedFiles().length >= this.options.maxFiles) {
        done(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}", this.options.maxFiles));
        return this.emit("maxfilesexceeded", file);
      } else {
        return this.options.accept.call(this, file, done);
      }
    }
  }, {
    key: "addFile",
    value: function addFile(file) {
      var _this7 = this;

      file.upload = {
        uuid: Dropzone.uuidv4(),
        progress: 0,
        // Setting the total upload size to file.size for the beginning
        // It's actual different than the size to be transmitted.
        total: file.size,
        bytesSent: 0,
        filename: this._renameFile(file),
        chunked: this.options.chunking && (this.options.forceChunking || file.size > this.options.chunkSize),
        totalChunkCount: Math.ceil(file.size / this.options.chunkSize)
      };
      this.files.push(file);

      file.status = Dropzone.ADDED;

      this.emit("addedfile", file);

      this._enqueueThumbnail(file);

      return this.accept(file, function (error) {
        if (error) {
          file.accepted = false;
          _this7._errorProcessing([file], error); // Will set the file.status
        } else {
          file.accepted = true;
          if (_this7.options.autoQueue) {
            _this7.enqueueFile(file);
          } // Will set .accepted = true
        }
        return _this7._updateMaxFilesReachedClass();
      });
    }

    // Wrapper for enqueueFile

  }, {
    key: "enqueueFiles",
    value: function enqueueFiles(files) {
      for (var _iterator17 = files, _isArray17 = true, _i18 = 0, _iterator17 = _isArray17 ? _iterator17 : _iterator17[Symbol.iterator]();;) {
        var _ref16;

        if (_isArray17) {
          if (_i18 >= _iterator17.length) break;
          _ref16 = _iterator17[_i18++];
        } else {
          _i18 = _iterator17.next();
          if (_i18.done) break;
          _ref16 = _i18.value;
        }

        var file = _ref16;

        this.enqueueFile(file);
      }
      return null;
    }
  }, {
    key: "enqueueFile",
    value: function enqueueFile(file) {
      var _this8 = this;

      if (file.status === Dropzone.ADDED && file.accepted === true) {
        file.status = Dropzone.QUEUED;
        if (this.options.autoProcessQueue) {
          return setTimeout(function () {
            return _this8.processQueue();
          }, 0); // Deferring the call
        }
      } else {
        throw new Error("This file can't be queued because it has already been processed or was rejected.");
      }
    }
  }, {
    key: "_enqueueThumbnail",
    value: function _enqueueThumbnail(file) {
      var _this9 = this;

      if (this.options.createImageThumbnails && file.type.match(/image.*/) && file.size <= this.options.maxThumbnailFilesize * 1024 * 1024) {
        this._thumbnailQueue.push(file);
        return setTimeout(function () {
          return _this9._processThumbnailQueue();
        }, 0); // Deferring the call
      }
    }
  }, {
    key: "_processThumbnailQueue",
    value: function _processThumbnailQueue() {
      var _this10 = this;

      if (this._processingThumbnail || this._thumbnailQueue.length === 0) {
        return;
      }

      this._processingThumbnail = true;
      var file = this._thumbnailQueue.shift();
      return this.createThumbnail(file, this.options.thumbnailWidth, this.options.thumbnailHeight, this.options.thumbnailMethod, true, function (dataUrl) {
        _this10.emit("thumbnail", file, dataUrl);
        _this10._processingThumbnail = false;
        return _this10._processThumbnailQueue();
      });
    }

    // Can be called by the user to remove a file

  }, {
    key: "removeFile",
    value: function removeFile(file) {
      if (file.status === Dropzone.UPLOADING) {
        this.cancelUpload(file);
      }
      this.files = without(this.files, file);

      this.emit("removedfile", file);
      if (this.files.length === 0) {
        return this.emit("reset");
      }
    }

    // Removes all files that aren't currently processed from the list

  }, {
    key: "removeAllFiles",
    value: function removeAllFiles(cancelIfNecessary) {
      // Create a copy of files since removeFile() changes the @files array.
      if (cancelIfNecessary == null) {
        cancelIfNecessary = false;
      }
      for (var _iterator18 = this.files.slice(), _isArray18 = true, _i19 = 0, _iterator18 = _isArray18 ? _iterator18 : _iterator18[Symbol.iterator]();;) {
        var _ref17;

        if (_isArray18) {
          if (_i19 >= _iterator18.length) break;
          _ref17 = _iterator18[_i19++];
        } else {
          _i19 = _iterator18.next();
          if (_i19.done) break;
          _ref17 = _i19.value;
        }

        var file = _ref17;

        if (file.status !== Dropzone.UPLOADING || cancelIfNecessary) {
          this.removeFile(file);
        }
      }
      return null;
    }

    // Resizes an image before it gets sent to the server. This function is the default behavior of
    // `options.transformFile` if `resizeWidth` or `resizeHeight` are set. The callback is invoked with
    // the resized blob.

  }, {
    key: "resizeImage",
    value: function resizeImage(file, width, height, resizeMethod, callback) {
      var _this11 = this;

      return this.createThumbnail(file, width, height, resizeMethod, false, function (dataUrl, canvas) {
        if (canvas == null) {
          // The image has not been resized
          return callback(file);
        } else {
          var resizeMimeType = _this11.options.resizeMimeType;

          if (resizeMimeType == null) {
            resizeMimeType = file.type;
          }
          var resizedDataURL = canvas.toDataURL(resizeMimeType, _this11.options.resizeQuality);
          if (resizeMimeType === 'image/jpeg' || resizeMimeType === 'image/jpg') {
            // Now add the original EXIF information
            resizedDataURL = ExifRestore.restore(file.dataURL, resizedDataURL);
          }
          return callback(Dropzone.dataURItoBlob(resizedDataURL));
        }
      });
    }
  }, {
    key: "createThumbnail",
    value: function createThumbnail(file, width, height, resizeMethod, fixOrientation, callback) {
      var _this12 = this;

      var fileReader = new FileReader();

      fileReader.onload = function () {

        file.dataURL = fileReader.result;

        // Don't bother creating a thumbnail for SVG images since they're vector
        if (file.type === "image/svg+xml") {
          if (callback != null) {
            callback(fileReader.result);
          }
          return;
        }

        return _this12.createThumbnailFromUrl(file, width, height, resizeMethod, fixOrientation, callback);
      };

      return fileReader.readAsDataURL(file);
    }
  }, {
    key: "createThumbnailFromUrl",
    value: function createThumbnailFromUrl(file, width, height, resizeMethod, fixOrientation, callback, crossOrigin) {
      var _this13 = this;

      // Not using `new Image` here because of a bug in latest Chrome versions.
      // See https://github.com/enyo/dropzone/pull/226
      var img = document.createElement("img");

      if (crossOrigin) {
        img.crossOrigin = crossOrigin;
      }

      img.onload = function () {
        var loadExif = function loadExif(callback) {
          return callback(1);
        };
        if (typeof EXIF !== 'undefined' && EXIF !== null && fixOrientation) {
          loadExif = function loadExif(callback) {
            return EXIF.getData(img, function () {
              return callback(EXIF.getTag(this, 'Orientation'));
            });
          };
        }

        return loadExif(function (orientation) {
          file.width = img.width;
          file.height = img.height;

          var resizeInfo = _this13.options.resize.call(_this13, file, width, height, resizeMethod);

          var canvas = document.createElement("canvas");
          var ctx = canvas.getContext("2d");

          canvas.width = resizeInfo.trgWidth;
          canvas.height = resizeInfo.trgHeight;

          if (orientation > 4) {
            canvas.width = resizeInfo.trgHeight;
            canvas.height = resizeInfo.trgWidth;
          }

          switch (orientation) {
            case 2:
              // horizontal flip
              ctx.translate(canvas.width, 0);
              ctx.scale(-1, 1);
              break;
            case 3:
              // 180° rotate left
              ctx.translate(canvas.width, canvas.height);
              ctx.rotate(Math.PI);
              break;
            case 4:
              // vertical flip
              ctx.translate(0, canvas.height);
              ctx.scale(1, -1);
              break;
            case 5:
              // vertical flip + 90 rotate right
              ctx.rotate(0.5 * Math.PI);
              ctx.scale(1, -1);
              break;
            case 6:
              // 90° rotate right
              ctx.rotate(0.5 * Math.PI);
              ctx.translate(0, -canvas.height);
              break;
            case 7:
              // horizontal flip + 90 rotate right
              ctx.rotate(0.5 * Math.PI);
              ctx.translate(canvas.width, -canvas.height);
              ctx.scale(-1, 1);
              break;
            case 8:
              // 90° rotate left
              ctx.rotate(-0.5 * Math.PI);
              ctx.translate(-canvas.width, 0);
              break;
          }

          // This is a bugfix for iOS' scaling bug.
          drawImageIOSFix(ctx, img, resizeInfo.srcX != null ? resizeInfo.srcX : 0, resizeInfo.srcY != null ? resizeInfo.srcY : 0, resizeInfo.srcWidth, resizeInfo.srcHeight, resizeInfo.trgX != null ? resizeInfo.trgX : 0, resizeInfo.trgY != null ? resizeInfo.trgY : 0, resizeInfo.trgWidth, resizeInfo.trgHeight);

          var thumbnail = canvas.toDataURL("image/png");

          if (callback != null) {
            return callback(thumbnail, canvas);
          }
        });
      };

      if (callback != null) {
        img.onerror = callback;
      }

      return img.src = file.dataURL;
    }

    // Goes through the queue and processes files if there aren't too many already.

  }, {
    key: "processQueue",
    value: function processQueue() {
      var parallelUploads = this.options.parallelUploads;

      var processingLength = this.getUploadingFiles().length;
      var i = processingLength;

      // There are already at least as many files uploading than should be
      if (processingLength >= parallelUploads) {
        return;
      }

      var queuedFiles = this.getQueuedFiles();

      if (!(queuedFiles.length > 0)) {
        return;
      }

      if (this.options.uploadMultiple) {
        // The files should be uploaded in one request
        return this.processFiles(queuedFiles.slice(0, parallelUploads - processingLength));
      } else {
        while (i < parallelUploads) {
          if (!queuedFiles.length) {
            return;
          } // Nothing left to process
          this.processFile(queuedFiles.shift());
          i++;
        }
      }
    }

    // Wrapper for `processFiles`

  }, {
    key: "processFile",
    value: function processFile(file) {
      return this.processFiles([file]);
    }

    // Loads the file, then calls finishedLoading()

  }, {
    key: "processFiles",
    value: function processFiles(files) {
      for (var _iterator19 = files, _isArray19 = true, _i20 = 0, _iterator19 = _isArray19 ? _iterator19 : _iterator19[Symbol.iterator]();;) {
        var _ref18;

        if (_isArray19) {
          if (_i20 >= _iterator19.length) break;
          _ref18 = _iterator19[_i20++];
        } else {
          _i20 = _iterator19.next();
          if (_i20.done) break;
          _ref18 = _i20.value;
        }

        var file = _ref18;

        file.processing = true; // Backwards compatibility
        file.status = Dropzone.UPLOADING;

        this.emit("processing", file);
      }

      if (this.options.uploadMultiple) {
        this.emit("processingmultiple", files);
      }

      return this.uploadFiles(files);
    }
  }, {
    key: "_getFilesWithXhr",
    value: function _getFilesWithXhr(xhr) {
      var files = void 0;
      return files = this.files.filter(function (file) {
        return file.xhr === xhr;
      }).map(function (file) {
        return file;
      });
    }

    // Cancels the file upload and sets the status to CANCELED
    // **if** the file is actually being uploaded.
    // If it's still in the queue, the file is being removed from it and the status
    // set to CANCELED.

  }, {
    key: "cancelUpload",
    value: function cancelUpload(file) {
      if (file.status === Dropzone.UPLOADING) {
        var groupedFiles = this._getFilesWithXhr(file.xhr);
        for (var _iterator20 = groupedFiles, _isArray20 = true, _i21 = 0, _iterator20 = _isArray20 ? _iterator20 : _iterator20[Symbol.iterator]();;) {
          var _ref19;

          if (_isArray20) {
            if (_i21 >= _iterator20.length) break;
            _ref19 = _iterator20[_i21++];
          } else {
            _i21 = _iterator20.next();
            if (_i21.done) break;
            _ref19 = _i21.value;
          }

          var groupedFile = _ref19;

          groupedFile.status = Dropzone.CANCELED;
        }
        if (typeof file.xhr !== 'undefined') {
          file.xhr.abort();
        }
        for (var _iterator21 = groupedFiles, _isArray21 = true, _i22 = 0, _iterator21 = _isArray21 ? _iterator21 : _iterator21[Symbol.iterator]();;) {
          var _ref20;

          if (_isArray21) {
            if (_i22 >= _iterator21.length) break;
            _ref20 = _iterator21[_i22++];
          } else {
            _i22 = _iterator21.next();
            if (_i22.done) break;
            _ref20 = _i22.value;
          }

          var _groupedFile = _ref20;

          this.emit("canceled", _groupedFile);
        }
        if (this.options.uploadMultiple) {
          this.emit("canceledmultiple", groupedFiles);
        }
      } else if (file.status === Dropzone.ADDED || file.status === Dropzone.QUEUED) {
        file.status = Dropzone.CANCELED;
        this.emit("canceled", file);
        if (this.options.uploadMultiple) {
          this.emit("canceledmultiple", [file]);
        }
      }

      if (this.options.autoProcessQueue) {
        return this.processQueue();
      }
    }
  }, {
    key: "resolveOption",
    value: function resolveOption(option) {
      if (typeof option === 'function') {
        for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
          args[_key3 - 1] = arguments[_key3];
        }

        return option.apply(this, args);
      }
      return option;
    }
  }, {
    key: "uploadFile",
    value: function uploadFile(file) {
      return this.uploadFiles([file]);
    }
  }, {
    key: "uploadFiles",
    value: function uploadFiles(files) {
      var _this14 = this;

      this._transformFiles(files, function (transformedFiles) {
        if (files[0].upload.chunked) {
          // This file should be sent in chunks!

          // If the chunking option is set, we **know** that there can only be **one** file, since
          // uploadMultiple is not allowed with this option.
          var file = files[0];
          var transformedFile = transformedFiles[0];
          var startedChunkCount = 0;

          file.upload.chunks = [];

          var handleNextChunk = function handleNextChunk() {
            var chunkIndex = 0;

            // Find the next item in file.upload.chunks that is not defined yet.
            while (file.upload.chunks[chunkIndex] !== undefined) {
              chunkIndex++;
            }

            // This means, that all chunks have already been started.
            if (chunkIndex >= file.upload.totalChunkCount) return;

            startedChunkCount++;

            var start = chunkIndex * _this14.options.chunkSize;
            var end = Math.min(start + _this14.options.chunkSize, file.size);

            var dataBlock = {
              name: _this14._getParamName(0),
              data: transformedFile.webkitSlice ? transformedFile.webkitSlice(start, end) : transformedFile.slice(start, end),
              filename: file.upload.filename,
              chunkIndex: chunkIndex
            };

            file.upload.chunks[chunkIndex] = {
              file: file,
              index: chunkIndex,
              dataBlock: dataBlock, // In case we want to retry.
              status: Dropzone.UPLOADING,
              progress: 0,
              retries: 0 // The number of times this block has been retried.
            };

            _this14._uploadData(files, [dataBlock]);
          };

          file.upload.finishedChunkUpload = function (chunk) {
            var allFinished = true;
            chunk.status = Dropzone.SUCCESS;

            // Clear the data from the chunk
            chunk.dataBlock = null;

            for (var i = 0; i < file.upload.totalChunkCount; i++) {
              if (file.upload.chunks[i] === undefined) {
                return handleNextChunk();
              }
              if (file.upload.chunks[i].status !== Dropzone.SUCCESS) {
                allFinished = false;
              }
            }

            if (allFinished) {
              _this14.options.chunksUploaded(file, function () {
                _this14._finished(files, '', null);
              });
            }
          };

          if (_this14.options.parallelChunkUploads) {
            for (var i = 0; i < file.upload.totalChunkCount; i++) {
              handleNextChunk();
            }
          } else {
            handleNextChunk();
          }
        } else {
          var dataBlocks = [];
          for (var _i23 = 0; _i23 < files.length; _i23++) {
            dataBlocks[_i23] = {
              name: _this14._getParamName(_i23),
              data: transformedFiles[_i23],
              filename: files[_i23].upload.filename
            };
          }
          _this14._uploadData(files, dataBlocks);
        }
      });
    }

    /// Returns the right chunk for given file and xhr

  }, {
    key: "_getChunk",
    value: function _getChunk(file, xhr) {
      for (var i = 0; i < file.upload.totalChunkCount; i++) {
        if (file.upload.chunks[i] !== undefined && file.upload.chunks[i].xhr === xhr) {
          return file.upload.chunks[i];
        }
      }
    }

    // This function actually uploads the file(s) to the server.
    // If dataBlocks contains the actual data to upload (meaning, that this could either be transformed
    // files, or individual chunks for chunked upload).

  }, {
    key: "_uploadData",
    value: function _uploadData(files, dataBlocks) {
      var _this15 = this;

      var xhr = new XMLHttpRequest();

      // Put the xhr object in the file objects to be able to reference it later.
      for (var _iterator22 = files, _isArray22 = true, _i24 = 0, _iterator22 = _isArray22 ? _iterator22 : _iterator22[Symbol.iterator]();;) {
        var _ref21;

        if (_isArray22) {
          if (_i24 >= _iterator22.length) break;
          _ref21 = _iterator22[_i24++];
        } else {
          _i24 = _iterator22.next();
          if (_i24.done) break;
          _ref21 = _i24.value;
        }

        var file = _ref21;

        file.xhr = xhr;
      }
      if (files[0].upload.chunked) {
        // Put the xhr object in the right chunk object, so it can be associated later, and found with _getChunk
        files[0].upload.chunks[dataBlocks[0].chunkIndex].xhr = xhr;
      }

      var method = this.resolveOption(this.options.method, files);
      var url = this.resolveOption(this.options.url, files);
      xhr.open(method, url, true);

      // Setting the timeout after open because of IE11 issue: https://gitlab.com/meno/dropzone/issues/8
      xhr.timeout = this.resolveOption(this.options.timeout, files);

      // Has to be after `.open()`. See https://github.com/enyo/dropzone/issues/179
      xhr.withCredentials = !!this.options.withCredentials;

      xhr.onload = function (e) {
        _this15._finishedUploading(files, xhr, e);
      };

      xhr.onerror = function () {
        _this15._handleUploadError(files, xhr);
      };

      // Some browsers do not have the .upload property
      var progressObj = xhr.upload != null ? xhr.upload : xhr;
      progressObj.onprogress = function (e) {
        return _this15._updateFilesUploadProgress(files, xhr, e);
      };

      var headers = {
        "Accept": "application/json",
        "Cache-Control": "no-cache",
        "X-Requested-With": "XMLHttpRequest"
      };

      if (this.options.headers) {
        Dropzone.extend(headers, this.options.headers);
      }

      for (var headerName in headers) {
        var headerValue = headers[headerName];
        if (headerValue) {
          xhr.setRequestHeader(headerName, headerValue);
        }
      }

      var formData = new FormData();

      // Adding all @options parameters
      if (this.options.params) {
        var additionalParams = this.options.params;
        if (typeof additionalParams === 'function') {
          additionalParams = additionalParams.call(this, files, xhr, files[0].upload.chunked ? this._getChunk(files[0], xhr) : null);
        }

        for (var key in additionalParams) {
          var value = additionalParams[key];
          formData.append(key, value);
        }
      }

      // Let the user add additional data if necessary
      for (var _iterator23 = files, _isArray23 = true, _i25 = 0, _iterator23 = _isArray23 ? _iterator23 : _iterator23[Symbol.iterator]();;) {
        var _ref22;

        if (_isArray23) {
          if (_i25 >= _iterator23.length) break;
          _ref22 = _iterator23[_i25++];
        } else {
          _i25 = _iterator23.next();
          if (_i25.done) break;
          _ref22 = _i25.value;
        }

        var _file = _ref22;

        this.emit("sending", _file, xhr, formData);
      }
      if (this.options.uploadMultiple) {
        this.emit("sendingmultiple", files, xhr, formData);
      }

      this._addFormElementData(formData);

      // Finally add the files
      // Has to be last because some servers (eg: S3) expect the file to be the last parameter
      for (var i = 0; i < dataBlocks.length; i++) {
        var dataBlock = dataBlocks[i];
        formData.append(dataBlock.name, dataBlock.data, dataBlock.filename);
      }

      this.submitRequest(xhr, formData, files);
    }

    // Transforms all files with this.options.transformFile and invokes done with the transformed files when done.

  }, {
    key: "_transformFiles",
    value: function _transformFiles(files, done) {
      var _this16 = this;

      var transformedFiles = [];
      // Clumsy way of handling asynchronous calls, until I get to add a proper Future library.
      var doneCounter = 0;

      var _loop = function _loop(i) {
        _this16.options.transformFile.call(_this16, files[i], function (transformedFile) {
          transformedFiles[i] = transformedFile;
          if (++doneCounter === files.length) {
            done(transformedFiles);
          }
        });
      };

      for (var i = 0; i < files.length; i++) {
        _loop(i);
      }
    }

    // Takes care of adding other input elements of the form to the AJAX request

  }, {
    key: "_addFormElementData",
    value: function _addFormElementData(formData) {
      // Take care of other input elements
      if (this.element.tagName === "FORM") {
        for (var _iterator24 = this.element.querySelectorAll("input, textarea, select, button"), _isArray24 = true, _i26 = 0, _iterator24 = _isArray24 ? _iterator24 : _iterator24[Symbol.iterator]();;) {
          var _ref23;

          if (_isArray24) {
            if (_i26 >= _iterator24.length) break;
            _ref23 = _iterator24[_i26++];
          } else {
            _i26 = _iterator24.next();
            if (_i26.done) break;
            _ref23 = _i26.value;
          }

          var input = _ref23;

          var inputName = input.getAttribute("name");
          var inputType = input.getAttribute("type");
          if (inputType) inputType = inputType.toLowerCase();

          // If the input doesn't have a name, we can't use it.
          if (typeof inputName === 'undefined' || inputName === null) continue;

          if (input.tagName === "SELECT" && input.hasAttribute("multiple")) {
            // Possibly multiple values
            for (var _iterator25 = input.options, _isArray25 = true, _i27 = 0, _iterator25 = _isArray25 ? _iterator25 : _iterator25[Symbol.iterator]();;) {
              var _ref24;

              if (_isArray25) {
                if (_i27 >= _iterator25.length) break;
                _ref24 = _iterator25[_i27++];
              } else {
                _i27 = _iterator25.next();
                if (_i27.done) break;
                _ref24 = _i27.value;
              }

              var option = _ref24;

              if (option.selected) {
                formData.append(inputName, option.value);
              }
            }
          } else if (!inputType || inputType !== "checkbox" && inputType !== "radio" || input.checked) {
            formData.append(inputName, input.value);
          }
        }
      }
    }

    // Invoked when there is new progress information about given files.
    // If e is not provided, it is assumed that the upload is finished.

  }, {
    key: "_updateFilesUploadProgress",
    value: function _updateFilesUploadProgress(files, xhr, e) {
      var progress = void 0;
      if (typeof e !== 'undefined') {
        progress = 100 * e.loaded / e.total;

        if (files[0].upload.chunked) {
          var file = files[0];
          // Since this is a chunked upload, we need to update the appropriate chunk progress.
          var chunk = this._getChunk(file, xhr);
          chunk.progress = progress;
          chunk.total = e.total;
          chunk.bytesSent = e.loaded;
          var fileProgress = 0,
              fileTotal = void 0,
              fileBytesSent = void 0;
          file.upload.progress = 0;
          file.upload.total = 0;
          file.upload.bytesSent = 0;
          for (var i = 0; i < file.upload.totalChunkCount; i++) {
            if (file.upload.chunks[i] !== undefined && file.upload.chunks[i].progress !== undefined) {
              file.upload.progress += file.upload.chunks[i].progress;
              file.upload.total += file.upload.chunks[i].total;
              file.upload.bytesSent += file.upload.chunks[i].bytesSent;
            }
          }
          file.upload.progress = file.upload.progress / file.upload.totalChunkCount;
        } else {
          for (var _iterator26 = files, _isArray26 = true, _i28 = 0, _iterator26 = _isArray26 ? _iterator26 : _iterator26[Symbol.iterator]();;) {
            var _ref25;

            if (_isArray26) {
              if (_i28 >= _iterator26.length) break;
              _ref25 = _iterator26[_i28++];
            } else {
              _i28 = _iterator26.next();
              if (_i28.done) break;
              _ref25 = _i28.value;
            }

            var _file2 = _ref25;

            _file2.upload.progress = progress;
            _file2.upload.total = e.total;
            _file2.upload.bytesSent = e.loaded;
          }
        }
        for (var _iterator27 = files, _isArray27 = true, _i29 = 0, _iterator27 = _isArray27 ? _iterator27 : _iterator27[Symbol.iterator]();;) {
          var _ref26;

          if (_isArray27) {
            if (_i29 >= _iterator27.length) break;
            _ref26 = _iterator27[_i29++];
          } else {
            _i29 = _iterator27.next();
            if (_i29.done) break;
            _ref26 = _i29.value;
          }

          var _file3 = _ref26;

          this.emit("uploadprogress", _file3, _file3.upload.progress, _file3.upload.bytesSent);
        }
      } else {
        // Called when the file finished uploading

        var allFilesFinished = true;

        progress = 100;

        for (var _iterator28 = files, _isArray28 = true, _i30 = 0, _iterator28 = _isArray28 ? _iterator28 : _iterator28[Symbol.iterator]();;) {
          var _ref27;

          if (_isArray28) {
            if (_i30 >= _iterator28.length) break;
            _ref27 = _iterator28[_i30++];
          } else {
            _i30 = _iterator28.next();
            if (_i30.done) break;
            _ref27 = _i30.value;
          }

          var _file4 = _ref27;

          if (_file4.upload.progress !== 100 || _file4.upload.bytesSent !== _file4.upload.total) {
            allFilesFinished = false;
          }
          _file4.upload.progress = progress;
          _file4.upload.bytesSent = _file4.upload.total;
        }

        // Nothing to do, all files already at 100%
        if (allFilesFinished) {
          return;
        }

        for (var _iterator29 = files, _isArray29 = true, _i31 = 0, _iterator29 = _isArray29 ? _iterator29 : _iterator29[Symbol.iterator]();;) {
          var _ref28;

          if (_isArray29) {
            if (_i31 >= _iterator29.length) break;
            _ref28 = _iterator29[_i31++];
          } else {
            _i31 = _iterator29.next();
            if (_i31.done) break;
            _ref28 = _i31.value;
          }

          var _file5 = _ref28;

          this.emit("uploadprogress", _file5, progress, _file5.upload.bytesSent);
        }
      }
    }
  }, {
    key: "_finishedUploading",
    value: function _finishedUploading(files, xhr, e) {
      var response = void 0;

      if (files[0].status === Dropzone.CANCELED) {
        return;
      }

      if (xhr.readyState !== 4) {
        return;
      }

      if (xhr.responseType !== 'arraybuffer' && xhr.responseType !== 'blob') {
        response = xhr.responseText;

        if (xhr.getResponseHeader("content-type") && ~xhr.getResponseHeader("content-type").indexOf("application/json")) {
          try {
            response = JSON.parse(response);
          } catch (error) {
            e = error;
            response = "Invalid JSON response from server.";
          }
        }
      }

      this._updateFilesUploadProgress(files);

      if (!(200 <= xhr.status && xhr.status < 300)) {
        this._handleUploadError(files, xhr, response);
      } else {
        if (files[0].upload.chunked) {
          files[0].upload.finishedChunkUpload(this._getChunk(files[0], xhr));
        } else {
          this._finished(files, response, e);
        }
      }
    }
  }, {
    key: "_handleUploadError",
    value: function _handleUploadError(files, xhr, response) {
      if (files[0].status === Dropzone.CANCELED) {
        return;
      }

      if (files[0].upload.chunked && this.options.retryChunks) {
        var chunk = this._getChunk(files[0], xhr);
        if (chunk.retries++ < this.options.retryChunksLimit) {
          this._uploadData(files, [chunk.dataBlock]);
          return;
        } else {
          console.warn('Retried this chunk too often. Giving up.');
        }
      }

      for (var _iterator30 = files, _isArray30 = true, _i32 = 0, _iterator30 = _isArray30 ? _iterator30 : _iterator30[Symbol.iterator]();;) {
        var _ref29;

        if (_isArray30) {
          if (_i32 >= _iterator30.length) break;
          _ref29 = _iterator30[_i32++];
        } else {
          _i32 = _iterator30.next();
          if (_i32.done) break;
          _ref29 = _i32.value;
        }

        var file = _ref29;

        this._errorProcessing(files, response || this.options.dictResponseError.replace("{{statusCode}}", xhr.status), xhr);
      }
    }
  }, {
    key: "submitRequest",
    value: function submitRequest(xhr, formData, files) {
      xhr.send(formData);
    }

    // Called internally when processing is finished.
    // Individual callbacks have to be called in the appropriate sections.

  }, {
    key: "_finished",
    value: function _finished(files, responseText, e) {
      for (var _iterator31 = files, _isArray31 = true, _i33 = 0, _iterator31 = _isArray31 ? _iterator31 : _iterator31[Symbol.iterator]();;) {
        var _ref30;

        if (_isArray31) {
          if (_i33 >= _iterator31.length) break;
          _ref30 = _iterator31[_i33++];
        } else {
          _i33 = _iterator31.next();
          if (_i33.done) break;
          _ref30 = _i33.value;
        }

        var file = _ref30;

        file.status = Dropzone.SUCCESS;
        this.emit("success", file, responseText, e);
        this.emit("complete", file);
      }
      if (this.options.uploadMultiple) {
        this.emit("successmultiple", files, responseText, e);
        this.emit("completemultiple", files);
      }

      if (this.options.autoProcessQueue) {
        return this.processQueue();
      }
    }

    // Called internally when processing is finished.
    // Individual callbacks have to be called in the appropriate sections.

  }, {
    key: "_errorProcessing",
    value: function _errorProcessing(files, message, xhr) {
      for (var _iterator32 = files, _isArray32 = true, _i34 = 0, _iterator32 = _isArray32 ? _iterator32 : _iterator32[Symbol.iterator]();;) {
        var _ref31;

        if (_isArray32) {
          if (_i34 >= _iterator32.length) break;
          _ref31 = _iterator32[_i34++];
        } else {
          _i34 = _iterator32.next();
          if (_i34.done) break;
          _ref31 = _i34.value;
        }

        var file = _ref31;

        file.status = Dropzone.ERROR;
        this.emit("error", file, message, xhr);
        this.emit("complete", file);
      }
      if (this.options.uploadMultiple) {
        this.emit("errormultiple", files, message, xhr);
        this.emit("completemultiple", files);
      }

      if (this.options.autoProcessQueue) {
        return this.processQueue();
      }
    }
  }], [{
    key: "uuidv4",
    value: function uuidv4() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0,
            v = c === 'x' ? r : r & 0x3 | 0x8;
        return v.toString(16);
      });
    }
  }]);

  return Dropzone;
}(Emitter);

Dropzone.initClass();

Dropzone.version = "5.4.0";

// This is a map of options for your different dropzones. Add configurations
// to this object for your different dropzone elemens.
//
// Example:
//
//     Dropzone.options.myDropzoneElementId = { maxFilesize: 1 };
//
// To disable autoDiscover for a specific element, you can set `false` as an option:
//
//     Dropzone.options.myDisabledElementId = false;
//
// And in html:
//
//     <form action="/upload" id="my-dropzone-element-id" class="dropzone"></form>
Dropzone.options = {};

// Returns the options for an element or undefined if none available.
Dropzone.optionsForElement = function (element) {
  // Get the `Dropzone.options.elementId` for this element if it exists
  if (element.getAttribute("id")) {
    return Dropzone.options[camelize(element.getAttribute("id"))];
  } else {
    return undefined;
  }
};

// Holds a list of all dropzone instances
Dropzone.instances = [];

// Returns the dropzone for given element if any
Dropzone.forElement = function (element) {
  if (typeof element === "string") {
    element = document.querySelector(element);
  }
  if ((element != null ? element.dropzone : undefined) == null) {
    throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.");
  }
  return element.dropzone;
};

// Set to false if you don't want Dropzone to automatically find and attach to .dropzone elements.
Dropzone.autoDiscover = true;

// Looks for all .dropzone elements and creates a dropzone for them
Dropzone.discover = function () {
  var dropzones = void 0;
  if (document.querySelectorAll) {
    dropzones = document.querySelectorAll(".dropzone");
  } else {
    dropzones = [];
    // IE :(
    var checkElements = function checkElements(elements) {
      return function () {
        var result = [];
        for (var _iterator33 = elements, _isArray33 = true, _i35 = 0, _iterator33 = _isArray33 ? _iterator33 : _iterator33[Symbol.iterator]();;) {
          var _ref32;

          if (_isArray33) {
            if (_i35 >= _iterator33.length) break;
            _ref32 = _iterator33[_i35++];
          } else {
            _i35 = _iterator33.next();
            if (_i35.done) break;
            _ref32 = _i35.value;
          }

          var el = _ref32;

          if (/(^| )dropzone($| )/.test(el.className)) {
            result.push(dropzones.push(el));
          } else {
            result.push(undefined);
          }
        }
        return result;
      }();
    };
    checkElements(document.getElementsByTagName("div"));
    checkElements(document.getElementsByTagName("form"));
  }

  return function () {
    var result = [];
    for (var _iterator34 = dropzones, _isArray34 = true, _i36 = 0, _iterator34 = _isArray34 ? _iterator34 : _iterator34[Symbol.iterator]();;) {
      var _ref33;

      if (_isArray34) {
        if (_i36 >= _iterator34.length) break;
        _ref33 = _iterator34[_i36++];
      } else {
        _i36 = _iterator34.next();
        if (_i36.done) break;
        _ref33 = _i36.value;
      }

      var dropzone = _ref33;

      // Create a dropzone unless auto discover has been disabled for specific element
      if (Dropzone.optionsForElement(dropzone) !== false) {
        result.push(new Dropzone(dropzone));
      } else {
        result.push(undefined);
      }
    }
    return result;
  }();
};

// Since the whole Drag'n'Drop API is pretty new, some browsers implement it,
// but not correctly.
// So I created a blacklist of userAgents. Yes, yes. Browser sniffing, I know.
// But what to do when browsers *theoretically* support an API, but crash
// when using it.
//
// This is a list of regular expressions tested against navigator.userAgent
//
// ** It should only be used on browser that *do* support the API, but
// incorrectly **
//
Dropzone.blacklistedBrowsers = [
// The mac os and windows phone version of opera 12 seems to have a problem with the File drag'n'drop API.
/opera.*(Macintosh|Windows Phone).*version\/12/i];

// Checks if the browser is supported
Dropzone.isBrowserSupported = function () {
  var capableBrowser = true;

  if (window.File && window.FileReader && window.FileList && window.Blob && window.FormData && document.querySelector) {
    if (!("classList" in document.createElement("a"))) {
      capableBrowser = false;
    } else {
      // The browser supports the API, but may be blacklisted.
      for (var _iterator35 = Dropzone.blacklistedBrowsers, _isArray35 = true, _i37 = 0, _iterator35 = _isArray35 ? _iterator35 : _iterator35[Symbol.iterator]();;) {
        var _ref34;

        if (_isArray35) {
          if (_i37 >= _iterator35.length) break;
          _ref34 = _iterator35[_i37++];
        } else {
          _i37 = _iterator35.next();
          if (_i37.done) break;
          _ref34 = _i37.value;
        }

        var regex = _ref34;

        if (regex.test(navigator.userAgent)) {
          capableBrowser = false;
          continue;
        }
      }
    }
  } else {
    capableBrowser = false;
  }

  return capableBrowser;
};

Dropzone.dataURItoBlob = function (dataURI) {
  // convert base64 to raw binary data held in a string
  // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
  var byteString = atob(dataURI.split(',')[1]);

  // separate out the mime component
  var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

  // write the bytes of the string to an ArrayBuffer
  var ab = new ArrayBuffer(byteString.length);
  var ia = new Uint8Array(ab);
  for (var i = 0, end = byteString.length, asc = 0 <= end; asc ? i <= end : i >= end; asc ? i++ : i--) {
    ia[i] = byteString.charCodeAt(i);
  }

  // write the ArrayBuffer to a blob
  return new Blob([ab], { type: mimeString });
};

// Returns an array without the rejected item
var without = function without(list, rejectedItem) {
  return list.filter(function (item) {
    return item !== rejectedItem;
  }).map(function (item) {
    return item;
  });
};

// abc-def_ghi -> abcDefGhi
var camelize = function camelize(str) {
  return str.replace(/[\-_](\w)/g, function (match) {
    return match.charAt(1).toUpperCase();
  });
};

// Creates an element from string
Dropzone.createElement = function (string) {
  var div = document.createElement("div");
  div.innerHTML = string;
  return div.childNodes[0];
};

// Tests if given element is inside (or simply is) the container
Dropzone.elementInside = function (element, container) {
  if (element === container) {
    return true;
  } // Coffeescript doesn't support do/while loops
  while (element = element.parentNode) {
    if (element === container) {
      return true;
    }
  }
  return false;
};

Dropzone.getElement = function (el, name) {
  var element = void 0;
  if (typeof el === "string") {
    element = document.querySelector(el);
  } else if (el.nodeType != null) {
    element = el;
  }
  if (element == null) {
    throw new Error("Invalid `" + name + "` option provided. Please provide a CSS selector or a plain HTML element.");
  }
  return element;
};

Dropzone.getElements = function (els, name) {
  var el = void 0,
      elements = void 0;
  if (els instanceof Array) {
    elements = [];
    try {
      for (var _iterator36 = els, _isArray36 = true, _i38 = 0, _iterator36 = _isArray36 ? _iterator36 : _iterator36[Symbol.iterator]();;) {
        if (_isArray36) {
          if (_i38 >= _iterator36.length) break;
          el = _iterator36[_i38++];
        } else {
          _i38 = _iterator36.next();
          if (_i38.done) break;
          el = _i38.value;
        }

        elements.push(this.getElement(el, name));
      }
    } catch (e) {
      elements = null;
    }
  } else if (typeof els === "string") {
    elements = [];
    for (var _iterator37 = document.querySelectorAll(els), _isArray37 = true, _i39 = 0, _iterator37 = _isArray37 ? _iterator37 : _iterator37[Symbol.iterator]();;) {
      if (_isArray37) {
        if (_i39 >= _iterator37.length) break;
        el = _iterator37[_i39++];
      } else {
        _i39 = _iterator37.next();
        if (_i39.done) break;
        el = _i39.value;
      }

      elements.push(el);
    }
  } else if (els.nodeType != null) {
    elements = [els];
  }

  if (elements == null || !elements.length) {
    throw new Error("Invalid `" + name + "` option provided. Please provide a CSS selector, a plain HTML element or a list of those.");
  }

  return elements;
};

// Asks the user the question and calls accepted or rejected accordingly
//
// The default implementation just uses `window.confirm` and then calls the
// appropriate callback.
Dropzone.confirm = function (question, accepted, rejected) {
  if (window.confirm(question)) {
    return accepted();
  } else if (rejected != null) {
    return rejected();
  }
};

// Validates the mime type like this:
//
// https://developer.mozilla.org/en-US/docs/HTML/Element/input#attr-accept
Dropzone.isValidFile = function (file, acceptedFiles) {
  if (!acceptedFiles) {
    return true;
  } // If there are no accepted mime types, it's OK
  acceptedFiles = acceptedFiles.split(",");

  var mimeType = file.type;
  var baseMimeType = mimeType.replace(/\/.*$/, "");

  for (var _iterator38 = acceptedFiles, _isArray38 = true, _i40 = 0, _iterator38 = _isArray38 ? _iterator38 : _iterator38[Symbol.iterator]();;) {
    var _ref35;

    if (_isArray38) {
      if (_i40 >= _iterator38.length) break;
      _ref35 = _iterator38[_i40++];
    } else {
      _i40 = _iterator38.next();
      if (_i40.done) break;
      _ref35 = _i40.value;
    }

    var validType = _ref35;

    validType = validType.trim();
    if (validType.charAt(0) === ".") {
      if (file.name.toLowerCase().indexOf(validType.toLowerCase(), file.name.length - validType.length) !== -1) {
        return true;
      }
    } else if (/\/\*$/.test(validType)) {
      // This is something like a image/* mime type
      if (baseMimeType === validType.replace(/\/.*$/, "")) {
        return true;
      }
    } else {
      if (mimeType === validType) {
        return true;
      }
    }
  }

  return false;
};

// Augment jQuery
if (typeof jQuery !== 'undefined' && jQuery !== null) {
  jQuery.fn.dropzone = function (options) {
    return this.each(function () {
      return new Dropzone(this, options);
    });
  };
}

if (typeof module !== 'undefined' && module !== null) {
  module.exports = Dropzone;
} else {
  window.Dropzone = Dropzone;
}

// Dropzone file status codes
Dropzone.ADDED = "added";

Dropzone.QUEUED = "queued";
// For backwards compatibility. Now, if a file is accepted, it's either queued
// or uploading.
Dropzone.ACCEPTED = Dropzone.QUEUED;

Dropzone.UPLOADING = "uploading";
Dropzone.PROCESSING = Dropzone.UPLOADING; // alias

Dropzone.CANCELED = "canceled";
Dropzone.ERROR = "error";
Dropzone.SUCCESS = "success";

/*

 Bugfix for iOS 6 and 7
 Source: http://stackoverflow.com/questions/11929099/html5-canvas-drawimage-ratio-bug-ios
 based on the work of https://github.com/stomita/ios-imagefile-megapixel

 */

// Detecting vertical squash in loaded image.
// Fixes a bug which squash image vertically while drawing into canvas for some images.
// This is a bug in iOS6 devices. This function from https://github.com/stomita/ios-imagefile-megapixel
var detectVerticalSquash = function detectVerticalSquash(img) {
  var iw = img.naturalWidth;
  var ih = img.naturalHeight;
  var canvas = document.createElement("canvas");
  canvas.width = 1;
  canvas.height = ih;
  var ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);

  var _ctx$getImageData = ctx.getImageData(1, 0, 1, ih),
      data = _ctx$getImageData.data;

  // search image edge pixel position in case it is squashed vertically.


  var sy = 0;
  var ey = ih;
  var py = ih;
  while (py > sy) {
    var alpha = data[(py - 1) * 4 + 3];

    if (alpha === 0) {
      ey = py;
    } else {
      sy = py;
    }

    py = ey + sy >> 1;
  }
  var ratio = py / ih;

  if (ratio === 0) {
    return 1;
  } else {
    return ratio;
  }
};

// A replacement for context.drawImage
// (args are for source and destination).
var drawImageIOSFix = function drawImageIOSFix(ctx, img, sx, sy, sw, sh, dx, dy, dw, dh) {
  var vertSquashRatio = detectVerticalSquash(img);
  return ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh / vertSquashRatio);
};

// Based on MinifyJpeg
// Source: http://www.perry.cz/files/ExifRestorer.js
// http://elicon.blog57.fc2.com/blog-entry-206.html

var ExifRestore = function () {
  function ExifRestore() {
    _classCallCheck(this, ExifRestore);
  }

  _createClass(ExifRestore, null, [{
    key: "initClass",
    value: function initClass() {
      this.KEY_STR = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    }
  }, {
    key: "encode64",
    value: function encode64(input) {
      var output = '';
      var chr1 = undefined;
      var chr2 = undefined;
      var chr3 = '';
      var enc1 = undefined;
      var enc2 = undefined;
      var enc3 = undefined;
      var enc4 = '';
      var i = 0;
      while (true) {
        chr1 = input[i++];
        chr2 = input[i++];
        chr3 = input[i++];
        enc1 = chr1 >> 2;
        enc2 = (chr1 & 3) << 4 | chr2 >> 4;
        enc3 = (chr2 & 15) << 2 | chr3 >> 6;
        enc4 = chr3 & 63;
        if (isNaN(chr2)) {
          enc3 = enc4 = 64;
        } else if (isNaN(chr3)) {
          enc4 = 64;
        }
        output = output + this.KEY_STR.charAt(enc1) + this.KEY_STR.charAt(enc2) + this.KEY_STR.charAt(enc3) + this.KEY_STR.charAt(enc4);
        chr1 = chr2 = chr3 = '';
        enc1 = enc2 = enc3 = enc4 = '';
        if (!(i < input.length)) {
          break;
        }
      }
      return output;
    }
  }, {
    key: "restore",
    value: function restore(origFileBase64, resizedFileBase64) {
      if (!origFileBase64.match('data:image/jpeg;base64,')) {
        return resizedFileBase64;
      }
      var rawImage = this.decode64(origFileBase64.replace('data:image/jpeg;base64,', ''));
      var segments = this.slice2Segments(rawImage);
      var image = this.exifManipulation(resizedFileBase64, segments);
      return "data:image/jpeg;base64," + this.encode64(image);
    }
  }, {
    key: "exifManipulation",
    value: function exifManipulation(resizedFileBase64, segments) {
      var exifArray = this.getExifArray(segments);
      var newImageArray = this.insertExif(resizedFileBase64, exifArray);
      var aBuffer = new Uint8Array(newImageArray);
      return aBuffer;
    }
  }, {
    key: "getExifArray",
    value: function getExifArray(segments) {
      var seg = undefined;
      var x = 0;
      while (x < segments.length) {
        seg = segments[x];
        if (seg[0] === 255 & seg[1] === 225) {
          return seg;
        }
        x++;
      }
      return [];
    }
  }, {
    key: "insertExif",
    value: function insertExif(resizedFileBase64, exifArray) {
      var imageData = resizedFileBase64.replace('data:image/jpeg;base64,', '');
      var buf = this.decode64(imageData);
      var separatePoint = buf.indexOf(255, 3);
      var mae = buf.slice(0, separatePoint);
      var ato = buf.slice(separatePoint);
      var array = mae;
      array = array.concat(exifArray);
      array = array.concat(ato);
      return array;
    }
  }, {
    key: "slice2Segments",
    value: function slice2Segments(rawImageArray) {
      var head = 0;
      var segments = [];
      while (true) {
        var length;
        if (rawImageArray[head] === 255 & rawImageArray[head + 1] === 218) {
          break;
        }
        if (rawImageArray[head] === 255 & rawImageArray[head + 1] === 216) {
          head += 2;
        } else {
          length = rawImageArray[head + 2] * 256 + rawImageArray[head + 3];
          var endPoint = head + length + 2;
          var seg = rawImageArray.slice(head, endPoint);
          segments.push(seg);
          head = endPoint;
        }
        if (head > rawImageArray.length) {
          break;
        }
      }
      return segments;
    }
  }, {
    key: "decode64",
    value: function decode64(input) {
      var output = '';
      var chr1 = undefined;
      var chr2 = undefined;
      var chr3 = '';
      var enc1 = undefined;
      var enc2 = undefined;
      var enc3 = undefined;
      var enc4 = '';
      var i = 0;
      var buf = [];
      // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
      var base64test = /[^A-Za-z0-9\+\/\=]/g;
      if (base64test.exec(input)) {
        console.warn('There were invalid base64 characters in the input text.\nValid base64 characters are A-Z, a-z, 0-9, \'+\', \'/\',and \'=\'\nExpect errors in decoding.');
      }
      input = input.replace(/[^A-Za-z0-9\+\/\=]/g, '');
      while (true) {
        enc1 = this.KEY_STR.indexOf(input.charAt(i++));
        enc2 = this.KEY_STR.indexOf(input.charAt(i++));
        enc3 = this.KEY_STR.indexOf(input.charAt(i++));
        enc4 = this.KEY_STR.indexOf(input.charAt(i++));
        chr1 = enc1 << 2 | enc2 >> 4;
        chr2 = (enc2 & 15) << 4 | enc3 >> 2;
        chr3 = (enc3 & 3) << 6 | enc4;
        buf.push(chr1);
        if (enc3 !== 64) {
          buf.push(chr2);
        }
        if (enc4 !== 64) {
          buf.push(chr3);
        }
        chr1 = chr2 = chr3 = '';
        enc1 = enc2 = enc3 = enc4 = '';
        if (!(i < input.length)) {
          break;
        }
      }
      return buf;
    }
  }]);

  return ExifRestore;
}();

ExifRestore.initClass();

/*
 * contentloaded.js
 *
 * Author: Diego Perini (diego.perini at gmail.com)
 * Summary: cross-browser wrapper for DOMContentLoaded
 * Updated: 20101020
 * License: MIT
 * Version: 1.2
 *
 * URL:
 * http://javascript.nwbox.com/ContentLoaded/
 * http://javascript.nwbox.com/ContentLoaded/MIT-LICENSE
 */

// @win window reference
// @fn function reference
var contentLoaded = function contentLoaded(win, fn) {
  var done = false;
  var top = true;
  var doc = win.document;
  var root = doc.documentElement;
  var add = doc.addEventListener ? "addEventListener" : "attachEvent";
  var rem = doc.addEventListener ? "removeEventListener" : "detachEvent";
  var pre = doc.addEventListener ? "" : "on";
  var init = function init(e) {
    if (e.type === "readystatechange" && doc.readyState !== "complete") {
      return;
    }
    (e.type === "load" ? win : doc)[rem](pre + e.type, init, false);
    if (!done && (done = true)) {
      return fn.call(win, e.type || e);
    }
  };

  var poll = function poll() {
    try {
      root.doScroll("left");
    } catch (e) {
      setTimeout(poll, 50);
      return;
    }
    return init("poll");
  };

  if (doc.readyState !== "complete") {
    if (doc.createEventObject && root.doScroll) {
      try {
        top = !win.frameElement;
      } catch (error) {}
      if (top) {
        poll();
      }
    }
    doc[add](pre + "DOMContentLoaded", init, false);
    doc[add](pre + "readystatechange", init, false);
    return win[add](pre + "load", init, false);
  }
};

// As a single function to be able to write tests.
Dropzone._autoDiscoverFunction = function () {
  if (Dropzone.autoDiscover) {
    return Dropzone.discover();
  }
};
contentLoaded(window, Dropzone._autoDiscoverFunction);

function __guard__(value, transform) {
  return typeof value !== 'undefined' && value !== null ? transform(value) : undefined;
}
function __guardMethod__(obj, methodName, transform) {
  if (typeof obj !== 'undefined' && obj !== null && typeof obj[methodName] === 'function') {
    return transform(obj, methodName);
  } else {
    return undefined;
  }
}

Dropzone.options.myDropzone = {

autoProcessQueue: false,

init: function() {
    var submitButton = document.querySelector("#upload-button");
    myDropzone = this;

    submitButton.addEventListener("click", function() {
        myDropzone.processQueue();
    });

    this.on("sending", function() {
        $("#myDropzone").submit()
    });
  }
};

/*! cornerstone-core - 2.0.0 - 2018-01-21 | (c) 2016 Chris Hafey | https://github.com/cornerstonejs/cornerstone */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("cornerstone-core",[],t):"object"==typeof exports?exports["cornerstone-core"]=t():e.cornerstone=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(a){if(r[a])return r[a].exports;var n=r[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,a){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=44)}([function(e,t,r){"use strict";function a(e){if(void 0===e)throw new Error("getEnabledElement: parameter element must not be undefined");for(var t=0;t<l.length;t++)if(l[t].element===e)return l[t];throw new Error("element not enabled")}function n(e){if(void 0===e)throw new Error("getEnabledElement: enabledElement element must not be undefined");l.push(e)}function i(e){var t=[];return l.forEach(function(r){r.image&&r.image.imageId===e&&t.push(r)}),t}function o(){return l}Object.defineProperty(t,"__esModule",{value:!0}),t.getEnabledElement=a,t.addEnabledElement=n,t.getEnabledElementsByImageId=i,t.getEnabledElements=o;var l=[]},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return window.performance?performance.now():Date.now()}},function(e,t,r){"use strict";function a(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=void 0;return"function"==typeof window.CustomEvent?a=new CustomEvent(t,{detail:r,cancelable:!0}):(a=document.createEvent("CustomEvent"),a.initCustomEvent(t,!0,!0,r)),e.dispatchEvent(a)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r){if(void 0===e)throw new Error("setToPixelCoordinateSystem: parameter enabledElement must not be undefined");if(void 0===t)throw new Error("setToPixelCoordinateSystem: parameter context must not be undefined");var a=(0,n.default)(e,r);t.setTransform(a.m[0],a.m[1],a.m[2],a.m[3],a.m[4],a.m[5])};var a=r(25),n=function(e){return e&&e.__esModule?e:{default:e}}(a)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=(0,a.getEnabledElement)(e);if(void 0===r.image&&!r.layers.length)throw new Error("updateImage: image has not been loaded yet");(0,i.default)(r,t)};var a=r(0),n=r(5),i=function(e){return e&&e.__esModule?e:{default:e}}(n)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e.needsRedraw=!0,t&&(e.invalid=!0)}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(void 0===e)throw new Error("getDefaultViewport: parameter canvas must not be undefined");if(void 0===t)return{scale:1,translation:{x:0,y:0},voi:{windowWidth:void 0,windowCenter:void 0},invert:!1,pixelReplication:!1,rotation:0,hflip:!1,vflip:!1,modalityLUT:void 0,voiLUT:void 0,colormap:void 0,labelmap:!1,displayedArea:{tlhc:{x:1,y:1},brhc:{x:1,y:1},rowPixelSpacing:1,columnPixelSpacing:1,presentationSizeMode:"SCALE TO FIT"}};var r=e.height/t.rows,a=e.width/t.columns;return{scale:Math.min(a,r),translation:{x:0,y:0},voi:{windowWidth:t.windowWidth,windowCenter:t.windowCenter},invert:t.invert,pixelReplication:!1,rotation:0,hflip:!1,vflip:!1,modalityLUT:t.modalityLUT,voiLUT:t.voiLUT,colormap:t.colormap,labelmap:Boolean(t.labelmap),displayedArea:{tlhc:{x:1,y:1},brhc:{x:t.columns+1,y:t.rows+1},rowPixelSpacing:void 0!==t.rowPixelSpacing?t.rowPixelSpacing:1,columnPixelSpacing:void 0!==t.columnPixelSpacing?t.columnPixelSpacing:1,presentationSizeMode:"SCALE TO FIT"}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(31),n=r(32),i=function(e){return e&&e.__esModule?e:{default:e}}(n);t.default={getColormap:a.getColormap,getColormapsList:a.getColormapsList,LookupTable:i.default}},function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function n(e,t){return void 0!==e.cachedLut&&e.cachedLut.windowCenter===t.voi.windowCenter&&e.cachedLut.windowWidth===t.voi.windowWidth&&e.cachedLut.invert===t.invert?e.cachedLut.lutArray:((0,f.default)(e,t.voi.windowWidth,t.voi.windowCenter,t.invert),e.cachedLut.windowWidth=t.voi.windowWidth,e.cachedLut.windowCenter=t.voi.windowCenter,e.cachedLut.invert=t.invert,e.cachedLut.lutArray)}function i(e,t,r){e.renderingTools.renderCanvas||(e.renderingTools.renderCanvas=document.createElement("canvas"));var a=e.renderingTools.renderCanvas;if(255===e.viewport.voi.windowWidth&&128===e.viewport.voi.windowCenter&&!1===e.viewport.invert&&t.getCanvas&&t.getCanvas())return t.getCanvas();if(!1===(0,x.default)(e,t)&&!0!==r)return a;a.width===t.width&&a.height===t.height||(0,I.default)(e,t);var i=(0,d.default)(),o=n(t,e.viewport);t.stats=t.stats||{},t.stats.lastLutGenerateTime=(0,d.default)()-i;var l=e.renderingTools.renderCanvasData,u=e.renderingTools.renderCanvasContext;return t.rgba?(0,g.default)(t,o,l.data):(0,m.default)(t,o,l.data),i=(0,d.default)(),u.putImageData(l,0,0),t.stats.lastPutImageDataTime=(0,d.default)()-i,a}function o(e,t){if(void 0===e)throw new Error("renderColorImage: enabledElement parameter must not be undefined");var r=e.image;if(void 0===r)throw new Error("renderColorImage: image must be loaded before it can be drawn");var a=e.canvas.getContext("2d");a.setTransform(1,0,0,1,0,0),a.fillStyle="black",a.fillRect(0,0,e.canvas.width,e.canvas.height),a.imageSmoothingEnabled=!e.viewport.pixelReplication,a.mozImageSmoothingEnabled=a.imageSmoothingEnabled,(0,h.default)(e,a);var n=void 0;n=e.options&&e.options.renderer&&"webgl"===e.options.renderer.toLowerCase()?w.default.renderer.render(e):i(e,r,t);var o=e.viewport.displayedArea.tlhc.x-1,l=e.viewport.displayedArea.tlhc.y-1,u=e.viewport.displayedArea.brhc.x-e.viewport.displayedArea.tlhc.x,d=e.viewport.displayedArea.brhc.y-e.viewport.displayedArea.tlhc.y;a.drawImage(n,o,l,u,d,0,0,u,d),e.renderingTools=(0,T.default)(e)}function l(e,t){if(void 0===e)throw new Error("addColorLayer: layer parameter must not be undefined");var r=e.image;if(void 0===r)throw new Error("addColorLayer: image must be loaded before it can be drawn");r.rgba=!0,e.canvas=i(e,r,t);var a=e.canvas.getContext("2d");a.imageSmoothingEnabled=!e.viewport.pixelReplication,a.mozImageSmoothingEnabled=a.imageSmoothingEnabled,e.renderingTools=(0,T.default)(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.renderColorImage=o,t.addColorLayer=l;var u=r(1),d=a(u),s=r(47),f=a(s),c=r(22),m=a(c),v=r(48),g=a(v),p=r(3),h=a(p),b=r(13),w=a(b),y=r(12),x=a(y),_=r(10),I=a(_),P=r(11),T=a(P)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return(0,n.default)(e)};var a=r(25),n=function(e){return e&&e.__esModule?e:{default:e}}(a)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var r=e.renderingTools.renderCanvas;r.width=t.width,r.height=t.height;var a=r.getContext("2d");a.fillStyle="white",a.fillRect(0,0,r.width,r.height);var n=a.getImageData(0,0,t.width,t.height);e.renderingTools.renderCanvasContext=a,e.renderingTools.renderCanvasData=n}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.image.imageId,r=e.viewport;return e.renderingTools.lastRenderedImageId=t,e.renderingTools.lastRenderedViewport={windowCenter:r.voi.windowCenter,windowWidth:r.voi.windowWidth,invert:r.invert,rotation:r.rotation,hflip:r.hflip,vflip:r.vflip,modalityLUT:r.modalityLUT,voiLUT:r.voiLUT,colormap:r.colormap},e.renderingTools}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var r=e.renderingTools.lastRenderedImageId,a=e.renderingTools.lastRenderedViewport;return t.imageId!==r||!a||a.windowCenter!==e.viewport.voi.windowCenter||a.windowWidth!==e.viewport.voi.windowWidth||a.invert!==e.viewport.invert||a.rotation!==e.viewport.rotation||a.hflip!==e.viewport.hflip||a.vflip!==e.viewport.vflip||a.modalityLUT!==e.viewport.modalityLUT||a.voiLUT!==e.viewport.voiLUT||a.colormap!==e.viewport.colormap}},function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(49),i=r(37),o=a(i),l=r(36),u=a(l),d={createProgramFromString:o.default,renderer:{render:n.render,initRenderer:n.initRenderer,getRenderCanvas:n.getRenderCanvas,isWebGLAvailable:n.isWebGLAvailable},textureCache:u.default};Object.defineProperty(d,"isWebGLInitialized",{enumerable:!0,configurable:!1,get:function(){return n.isWebGLInitialized}}),t.default=d},function(e,t,r){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),i=function(){function e(){a(this,e),this.listeners={}}return n(e,[{key:"addEventListener",value:function(e,t){e in this.listeners||(this.listeners[e]=[]),this.listeners[e].push(t)}},{key:"removeEventListener",value:function(e,t){if(e in this.listeners)for(var r=this.listeners[e],a=0,n=r.length;a<n;a++)if(r[a]===t)return void r.splice(a,1)}},{key:"dispatchEvent",value:function(e){if(!(e.type in this.listeners))return!0;for(var t=this.listeners[e.type],r=0,a=t.length;r<a;r++)t[r].call(this,e);return!e.defaultPrevented}}]),e}(),o=new i;t.default=o},function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function n(e,t,r){var a=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];e.renderingTools.renderCanvas||(e.renderingTools.renderCanvas=document.createElement("canvas"));var n=e.renderingTools.renderCanvas;if(!1===(0,y.default)(e,t)&&!0!==r)return n;n.width===t.width&&n.height===t.height||(0,_.default)(e,t);var i=(0,v.default)(),o=(0,b.default)(t,e.viewport,r);t.stats=t.stats||{},t.stats.lastLutGenerateTime=(0,v.default)()-i;var l=e.renderingTools.renderCanvasData,d=e.renderingTools.renderCanvasContext;return a?(0,u.default)(t,o,l.data):(0,s.default)(t,o,l.data),i=(0,v.default)(),d.putImageData(l,0,0),t.stats.lastPutImageDataTime=(0,v.default)()-i,n}function i(e,t){if(void 0===e)throw new Error("drawImage: enabledElement parameter must not be undefined");var r=e.image;if(void 0===r)throw new Error("drawImage: image must be loaded before it can be drawn");var a=e.canvas.getContext("2d");a.setTransform(1,0,0,1,0,0),a.fillStyle="black",a.fillRect(0,0,e.canvas.width,e.canvas.height),a.imageSmoothingEnabled=!e.viewport.pixelReplication,a.mozImageSmoothingEnabled=a.imageSmoothingEnabled,(0,c.default)(e,a);var i=void 0;i=e.options&&e.options.renderer&&"webgl"===e.options.renderer.toLowerCase()?p.default.renderer.render(e):n(e,r,t);var o=e.viewport.displayedArea.tlhc.x-1,l=e.viewport.displayedArea.tlhc.y-1,u=e.viewport.displayedArea.brhc.x-e.viewport.displayedArea.tlhc.x,d=e.viewport.displayedArea.brhc.y-e.viewport.displayedArea.tlhc.y;a.drawImage(i,o,l,u,d,0,0,u,d),e.renderingTools=(0,P.default)(e)}function o(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(void 0===e)throw new Error("addGrayscaleLayer: layer parameter must not be undefined");var a=e.image;if(void 0===a)throw new Error("addGrayscaleLayer: image must be loaded before it can be drawn");e.canvas=n(e,a,t,r);var i=e.canvas.getContext("2d");i.imageSmoothingEnabled=!e.viewport.pixelReplication,i.mozImageSmoothingEnabled=i.imageSmoothingEnabled,e.renderingTools=(0,P.default)(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.renderGrayscaleImage=i,t.addGrayscaleLayer=o;var l=r(21),u=a(l),d=r(33),s=a(d),f=r(3),c=a(f),m=r(1),v=a(m),g=r(13),p=a(g),h=r(35),b=a(h),w=r(12),y=a(w),x=r(10),_=a(x),I=r(11),P=a(I)},function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){(0,d.default)(e,t);var r=t.modalityLUT,a=t.voiLUT,n=t.voi.windowWidth,o=t.voi.windowCenter,u=t.invert||"MONOCHROME1"===e.photometricInterpretation,s=e.maxPixelValue,f=e.minPixelValue,c=Math.min(f,0);if(void 0===e.cachedLut){var m=s-c+1;e.cachedLut={},e.cachedLut.lutArray=new Uint8ClampedArray(m)}var v=e.cachedLut.lutArray,g=(0,i.default)(e.slope,e.intercept,r),p=(0,l.default)(n,o,a);if(!0===u)for(var h=f;h<=s;h++)v[h+-c]=255-p(g(h));else for(var b=f;b<=s;b++)v[b+-c]=p(g(b));return v};var n=r(17),i=a(n),o=r(18),l=a(o),u=r(29),d=a(u)},function(e,t,r){"use strict";function a(e,t){return function(r){return r*e+t}}function n(e){var t=e.lut[0],r=e.lut[e.lut.length-1],a=e.firstValueMapped+e.lut.length;return function(n){return n<e.firstValueMapped?t:n>=a?r:e.lut[n]}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r){return r?n(r):a(e,t)}},function(e,t,r){"use strict";function a(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function n(e,t){return function(r){return 255*((r-t)/e+.5)}}function i(e){var t=Math.max.apply(Math,a(e.lut)).toString(2).length,r=t-8,n=e.lut[0]>>r,i=e.lut[e.lut.length-1]>>r,o=e.firstValueMapped+e.lut.length-1;return function(t){return t<e.firstValueMapped?n:t>=o?i:e.lut[t-e.firstValueMapped]>>r}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r){return r?i(r):n(e,t)}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r){return void 0!==r?t[e]<<r>>r:t[e]}},function(e,t,r){"use strict";function a(e){window.setTimeout(e,1e3/60)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return window.requestAnimationFrame(e)||window.webkitRequestAnimationFrame(e)||window.mozRequestAnimationFrame(e)||window.oRequestAnimationFrame(e)||window.msRequestAnimationFrame(e)||a(e)}},function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r){var a=(0,i.default)(),n=e.getPixelData();e.stats.lastGetPixelDataTime=(0,i.default)()-a;var o=void 0!==e.pixelRepresentation&&1===e.pixelRepresentation,u=o&&void 0!==e.bitsStored?32-e.bitsStored:void 0,d=n.length,s=e.minPixelValue,f=3,c=0;if(a=(0,i.default)(),n instanceof Int16Array)if(s<0)for(;c<d;)r[f]=t[(0,l.default)(c++,n,u)+-s],f+=4;else for(;c<d;)r[f]=t[(0,l.default)(c++,n,u)],f+=4;else if(n instanceof Uint16Array)for(;c<d;)r[f]=t[(0,l.default)(c++,n,u)],f+=4;else if(s<0)for(;c<d;)r[f]=t[(0,l.default)(c++,n,u)+-s],f+=4;else for(;c<d;)r[f]=t[(0,l.default)(c++,n,u)],f+=4;e.stats.lastStoredPixelDataToCanvasImageDataTime=(0,i.default)()-a};var n=r(1),i=a(n),o=r(19),l=a(o)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r){var a=(0,n.default)(),i=e.getPixelData();e.stats.lastGetPixelDataTime=(0,n.default)()-a;var o=e.minPixelValue,l=0,u=0,d=i.length;if(a=(0,n.default)(),o<0)for(;u<d;)r[l++]=t[i[u++]+-o],r[l++]=t[i[u++]+-o],r[l]=t[i[u]+-o],u+=2,l+=2;else for(;u<d;)r[l++]=t[i[u++]],r[l++]=t[i[u++]],r[l]=t[i[u]],u+=2,l+=2;e.stats.lastStoredPixelDataToCanvasImageDataTime=(0,n.default)()-a};var a=r(1),n=function(e){return e&&e.__esModule?e:{default:e}}(a)},function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function n(e,t,r){var a=(0,u.default)(),n=e.getPixelData();e.stats.lastGetPixelDataTime=(0,u.default)()-a;var i=n.length,l=e.minPixelValue,d=0,s=0,f=void 0,c=void 0;if(a=(0,u.default)(),c=t instanceof o.default.LookupTable?t.Table:t,l<0)for(;s<i;)f=c[n[s++]+-l],r[d++]=f[0],r[d++]=f[1],r[d++]=f[2],r[d++]=f[3];else for(;s<i;)f=c[n[s++]],r[d++]=f[0],r[d++]=f[1],r[d++]=f[2],r[d++]=f[3];e.stats.lastStoredPixelDataToCanvasImageDataTime=(0,u.default)()-a}Object.defineProperty(t,"__esModule",{value:!0});var i=r(7),o=a(i),l=r(1),u=a(l);t.default=n},function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function n(e,t,r,a){var n=(0,u.default)(),i=e.getPixelData();e.stats.lastGetPixelDataTime=(0,u.default)()-n;var l=i.length,d=e.minPixelValue,s=0,f=0,c=void 0,m=void 0,v=void 0;if(n=(0,u.default)(),v=r instanceof o.default.LookupTable?r.Table:r,d<0)for(;f<l;)c=t[i[f++]+-d],m=v[c],a[s++]=m[0],a[s++]=m[1],a[s++]=m[2],a[s++]=m[3];else for(;f<l;)c=t[i[f++]],m=v[c],a[s++]=m[0],a[s++]=m[1],a[s++]=m[2],a[s++]=m[3];e.stats.lastStoredPixelDataToCanvasImageDataTime=(0,u.default)()-n}Object.defineProperty(t,"__esModule",{value:!0});var i=r(7),o=a(i),l=r(1),u=a(l);t.default=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var r=new a.Transform;r.translate(e.canvas.width/2,e.canvas.height/2);var n=e.viewport.rotation;0!==n&&r.rotate(n*Math.PI/180);var i=e.viewport.scale,o=e.viewport.scale;e.viewport.displayedArea.rowPixelSpacing<e.viewport.displayedArea.columnPixelSpacing?i*=e.viewport.displayedArea.columnPixelSpacing/e.viewport.displayedArea.rowPixelSpacing:e.viewport.displayedArea.columnPixelSpacing<e.viewport.displayedArea.rowPixelSpacing&&(o*=e.viewport.displayedArea.rowPixelSpacing/e.viewport.displayedArea.columnPixelSpacing),r.scale(i,o),0!==n&&r.rotate(-n*Math.PI/180),r.translate(e.viewport.translation.x,e.viewport.translation.y),0!==n&&r.rotate(n*Math.PI/180),void 0!==t&&r.scale(t,t),e.viewport.hflip&&r.scale(-1,1),e.viewport.vflip&&r.scale(1,-1);var l=e.viewport.displayedArea.brhc.x-e.viewport.displayedArea.tlhc.x,u=e.viewport.displayedArea.brhc.y-e.viewport.displayedArea.tlhc.y;return r.translate(-l/2,-u/2),r};var a=r(34)},function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function n(e,t,r){e.renderingTools.renderCanvas||(e.renderingTools.renderCanvas=document.createElement("canvas"));var a=e.renderingTools.renderCanvas,n=e.viewport.colormap||e.options.colormap;if(n&&"string"==typeof n&&(n=y.default.getColormap(n)),!n)throw new Error("renderLabelMapImage: colormap not found.");var i=n.getId();if(!1===(0,p.default)(e,t)&&!0!==r&&e.renderingTools.colormapId===i)return a;a.width===t.width&&a.height===t.height||(0,c.default)(e,t);var o=(0,s.default)();e.renderingTools.colorLut&&!r&&e.renderingTools.colormapId===i||(e.renderingTools.colorLut=n.createLookupTable(),e.renderingTools.colormapId=i),t.stats=t.stats||{},t.stats.lastLutGenerateTime=(0,s.default)()-o;var l=e.renderingTools.colorLut,u=e.renderingTools.renderCanvasData,d=e.renderingTools.renderCanvasContext;return(0,b.default)(t,l,u.data),o=(0,s.default)(),d.putImageData(u,0,0),t.stats.lastPutImageDataTime=(0,s.default)()-o,a}function i(e,t){if(void 0===e)throw new Error("renderLabelMapImage: enabledElement parameter must not be undefined");var r=e.image;if(void 0===r)throw new Error("renderLabelMapImage: image must be loaded before it can be drawn");var a=e.canvas.getContext("2d");a.setTransform(1,0,0,1,0,0),a.fillStyle="black",a.fillRect(0,0,e.canvas.width,e.canvas.height),a.imageSmoothingEnabled=!e.viewport.pixelReplication,a.mozImageSmoothingEnabled=a.imageSmoothingEnabled,(0,u.default)(e,a);var i=n(e,r,t),o=e.viewport.displayedArea.tlhc.x-1,l=e.viewport.displayedArea.tlhc.y-1,d=e.viewport.displayedArea.brhc.x-e.viewport.displayedArea.tlhc.x,s=e.viewport.displayedArea.brhc.y-e.viewport.displayedArea.tlhc.y;a.drawImage(i,o,l,d,s,0,0,d,s),e.renderingTools=(0,v.default)(e)}function o(e,t){if(void 0===e)throw new Error("addLabelMapLayer: layer parameter must not be undefined");var r=e.image;if(void 0===r)throw new Error("addLabelMapLayer: image must be loaded before it can be drawn");e.canvas=n(e,r,t);var a=e.canvas.getContext("2d");a.imageSmoothingEnabled=!e.viewport.pixelReplication,a.mozImageSmoothingEnabled=a.imageSmoothingEnabled,e.renderingTools=(0,v.default)(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.renderLabelMapImage=i,t.addLabelMapLayer=o;var l=r(3),u=a(l),d=r(1),s=a(d),f=r(10),c=a(f),m=r(11),v=a(m),g=r(12),p=a(g),h=r(23),b=a(h),w=r(7),y=a(w)},function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function n(e,t,r){e.renderingTools.renderCanvas||(e.renderingTools.renderCanvas=document.createElement("canvas"));var a=e.renderingTools.renderCanvas,n=e.viewport.colormap||e.options.colormap;if(n&&"string"==typeof n&&(n=_.default.getColormap(n)),!n)throw new Error("renderPseudoColorImage: colormap not found.");var i=n.getId();if(!1===(0,b.default)(e,t)&&!0!==r&&e.renderingTools.colormapId===i)return a;a.width===t.width&&a.height===t.height||(0,c.default)(e,t);var o=(0,s.default)();e.renderingTools.colorLut&&!r&&e.renderingTools.colormapId===i||(n.setNumberOfColors(256),e.renderingTools.colorLut=n.createLookupTable(),e.renderingTools.colormapId=i);var l=(0,v.default)(t,e.viewport,r);t.stats=t.stats||{},t.stats.lastLutGenerateTime=(0,s.default)()-o;var u=e.renderingTools.colorLut,d=e.renderingTools.renderCanvasData,f=e.renderingTools.renderCanvasContext;return(0,y.default)(t,l,u,d.data),o=(0,s.default)(),f.putImageData(d,0,0),t.stats.lastPutImageDataTime=(0,s.default)()-o,a}function i(e,t){if(void 0===e)throw new Error("drawImage: enabledElement parameter must not be undefined");var r=e.image;if(void 0===r)throw new Error("drawImage: image must be loaded before it can be drawn");var a=e.canvas.getContext("2d");a.setTransform(1,0,0,1,0,0),a.fillStyle="black",a.fillRect(0,0,e.canvas.width,e.canvas.height),a.imageSmoothingEnabled=!e.viewport.pixelReplication,a.mozImageSmoothingEnabled=a.imageSmoothingEnabled,(0,u.default)(e,a);var i=n(e,r,t),o=e.viewport.displayedArea.tlhc.x-1,l=e.viewport.displayedArea.tlhc.y-1,d=e.viewport.displayedArea.brhc.x-e.viewport.displayedArea.tlhc.x,s=e.viewport.displayedArea.brhc.y-e.viewport.displayedArea.tlhc.y;a.drawImage(i,o,l,d,s,0,0,d,s),e.renderingTools=(0,p.default)(e)}function o(e,t){if(void 0===e)throw new Error("addPseudoColorLayer: layer parameter must not be undefined");var r=e.image;if(void 0===r)throw new Error("addPseudoColorLayer: image must be loaded before it can be drawn");e.canvas=n(e,r,t);var a=e.canvas.getContext("2d");a.imageSmoothingEnabled=!e.viewport.pixelReplication,a.mozImageSmoothingEnabled=a.imageSmoothingEnabled,e.renderingTools=(0,p.default)(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.renderPseudoColorImage=i,t.addPseudoColorLayer=o;var l=r(3),u=a(l),d=r(1),s=a(d),f=r(10),c=a(f),m=r(35),v=a(m),g=r(11),p=a(g),h=r(12),b=a(h),w=r(24),y=a(w),x=r(7),_=a(x)},function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function n(e,t,r){var a=t.element,n={viewport:t.viewport,element:t.element,image:t.image,enabledElement:t,layerId:r};(0,_.default)(a,e,n)}function i(e,t){if(e.layerId===t.layerId)throw new Error("rescaleImage: both arguments represent the same layer");var r=e.image,a=t.image;if(r.imageId&&a.imageId){var n=t.viewport.displayedArea.columnPixelSpacing*a.width/(e.viewport.displayedArea.columnPixelSpacing*r.width),i=t.viewport.scale/e.viewport.scale*n;t.viewport.scale=e.viewport.scale*i}}function o(e,t,r){var a=(0,g.default)(),o=(0,p.getEnabledElement)(e),l=o.layers,u=void 0;t&&(u=(0,b.default)(o.canvas,t),r&&r.viewport&&(u=Object.assign(u,r.viewport))),!1!==o.syncViewports&&(o.syncViewports=!0);var d={image:t,layerId:a,viewport:u,options:r||{},renderingTools:{}};return l.length&&t&&i(l[0],d),l.push(d),n("cornerstonelayeradded",o,a),1===l.length&&t&&f(e,a),a}function l(e,t){var r=(0,p.getEnabledElement)(e),a=r.layers,i=r.layers.findIndex(function(e){return e.layerId===t});-1!==i&&(a.splice(i,1),t===r.activeLayerId&&a.length&&f(e,a[0].layerId),n("cornerstonelayerremoved",r,t))}function u(e,t){return(0,p.getEnabledElement)(e).layers.find(function(e){return e.layerId===t})}function d(e){return(0,p.getEnabledElement)(e).layers}function s(e){return(0,p.getEnabledElement)(e).layers.filter(function(e){return e.options&&!1!==e.options.visible&&0!==e.options.opacity})}function f(e,t){var r=(0,p.getEnabledElement)(e);if(r.activeLayerId!==t){var a=r.layers.findIndex(function(e){return e.layerId===t});if(-1===a)throw new Error("setActiveLayer: layer not found in layers array");var i=r.layers[a];if(!i.image)throw new Error("setActiveLayer: layer with undefined image cannot be set as active.");r.activeLayerId=t,r.image=i.image,r.viewport=i.viewport,(0,y.default)(e),n("cornerstoneactivelayerchanged",r,t)}}function c(e,t,r){var a=(0,p.getEnabledElement)(e),n=a.layers[0],o=void 0;if(!(o=r?u(e,r):m(e)))throw new Error("setLayerImage: Layer not found");if(o.image=t,!t)return void(o.viewport=void 0);if(!o.viewport){var l=(0,b.default)(a.canvas,t);o.options&&o.options.viewport&&(o.viewport=Object.assign(l,o.options.viewport)),n.layerId!==r&&i(n,o)}}function m(e){var t=(0,p.getEnabledElement)(e);return t.layers.find(function(e){return e.layerId===t.activeLayerId})}Object.defineProperty(t,"__esModule",{value:!0}),t.rescaleImage=i,t.addLayer=o,t.removeLayer=l,t.getLayer=u,t.getLayers=d,t.getVisibleLayers=s,t.setActiveLayer=f,t.setLayerImage=c,t.getActiveLayer=m;var v=r(60),g=a(v),p=r(0),h=r(6),b=a(h),w=r(4),y=a(w),x=r(2),_=a(x)},function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function n(e){return e.modalityLUT&&e.modalityLUT.lut&&e.modalityLUT.lut.length>0}function i(e){return e.voiLUT&&e.voiLUT.lut&&e.voiLUT.lut.length>0}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(void 0===e.minPixelValue||void 0===e.maxPixelValue){var r=void 0!==e.pixelRepresentation&&1===e.pixelRepresentation,a=r&&void 0!==e.bitsStored?32-e.bitsStored:void 0,o=void 0;if(r&&void 0!==a){var u=e.getPixelData();o=(0,l.default)(u.map(function(e,t){return(0,d.default)(t,u,a)}))}else o=(0,l.default)(e.getPixelData());e.minPixelValue=o.min,e.maxPixelValue=o.max}if(i(t)){var s=(0,l.default)(t.voiLUT.lut);t.voi.minMax=s,t.voiLUT.minMax=s}else if(n(t)){var f=(0,l.default)(t.modalityLUT.lut);t.modalityLUT.minMax=f,t.voi.minMax=f}if(void 0===t.voi.windowWidth||void 0===t.voi.windowCenter){var c=e.minPixelValue,m=e.maxPixelValue;t.voiLUT?(c=t.voiLUT.minMax.min,m=t.voiLUT.minMax.max):t.modalityLUT&&(c=t.modalityLUT.minMax.min,m=t.modalityLUT.minMax.max),t.voi.windowCenter=(c+m+1)/2*e.slope+e.intercept,t.voi.windowWidth=Math.abs((c+1-m)*e.slope)}};var o=r(30),l=a(o),u=r(19),d=a(u)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){for(var t=e[0],r=e[0],a=void 0,n=e.length,i=0;i<n;i++)a=e[i],t=Math.min(t,a),r=Math.max(r,a);return{min:t,max:r}}},function(e,t,r){"use strict";function a(e,t,r){r=null===r?100:r;for(var a=(t-e)/(r-1),n=[];r-- >0;)n.push(e),e+=a;return n[n.length-1]=t,n}function n(e,t){for(var r=0,a=e.length-1;r<=a;){var n=r+Math.floor((a-r)/2),i=e[n];if(i===t)return n;t<i?a=n-1:r=n+1}return r}function i(e,t){var r=void 0,a=[],i=t.length;for(e.sort(function(e,t){return e-t}),r=0;r<i;r++)a[r]=n(e,t[r]);return a}function o(e,t,r){var n=void 0,o=[],l=[],u=[],d=[];for(r=null===r?1:r,n=0;n<t.length;n++){var s=t[n];o.push((e-1)*s[0]),l.push(s[1]),u.push(s[1])}var f=a(0,1,e);for(n=0;n<e;n++)f[n]=(e-1)*Math.pow(f[n],r);var c=i(o,f);for(n=1;n<e-1;n++){var m=c[n],v=(f[n]-o[m-1])/(o[m]-o[m-1]),g=l[m]-u[m-1];d[n]=v*g+u[m-1]}return d[0]=u[0],d[e-1]=l[t.length-1],d}function l(e,t,r){var a=void 0,n=[];t=null===t?256:t,r=null===r?1:r;var i=o(t,e.red,r),l=o(t,e.green,r),u=o(t,e.blue,r);for(a=0;a<t;a++){var d=Math.round(255*i[a]),s=Math.round(255*l[a]),f=Math.round(255*u[a]),c=[d,s,f,255];n.push(c)}return n}function u(){var e=[];return Object.keys(m).forEach(function(t){if(m.hasOwnProperty(t)){var r=m[t];e.push({id:t,name:r.name})}}),e.sort(function(e,t){var r=e.name.toLowerCase(),a=t.name.toLowerCase();return r===a?0:r<a?-1:1}),e}function d(e,t){var r=m[e];return r||(r=m[e]=t||{name:"",colors:[]}),!r.colors&&r.segmentedData&&(r.colors=l(r.segmentedData,r.numColors,r.gamma)),{getId:function(){return e},getColorSchemeName:function(){return r.name},setColorSchemeName:function(e){r.name=e},getNumberOfColors:function(){return r.colors.length},setNumberOfColors:function(e){for(;r.colors.length<e;)r.colors.push(c);r.colors.length=e},getColor:function(e){return this.isValidIndex(e)?r.colors[e]:c},getColorRepeating:function(e){var t=r.colors.length;return e=t?e%t:0,this.getColor(e)},setColor:function(e,t){this.isValidIndex(e)&&(r.colors[e]=t)},addColor:function(e){r.colors.push(e)},insertColor:function(e,t){this.isValidIndex(e)&&r.colors.splice(e,1,t)},removeColor:function(e){this.isValidIndex(e)&&r.colors.splice(e,1)},clearColors:function(){r.colors=[]},buildLookupTable:function(e){if(e){var t=r.colors.length;e.setNumberOfTableValues(t);for(var a=0;a<t;a++)e.setTableValue(a,r.colors[a])}},createLookupTable:function(){var e=new f.default;return this.buildLookupTable(e),e},isValidIndex:function(e){return e>=0&&e<r.colors.length}}}Object.defineProperty(t,"__esModule",{value:!0}),t.getColormapsList=u,t.getColormap=d;var s=r(32),f=function(e){return e&&e.__esModule?e:{default:e}}(s),c=[0,0,0,0],m={hotIron:{name:"Hot Iron",numOfColors:256,colors:[[0,0,0,255],[2,0,0,255],[4,0,0,255],[6,0,0,255],[8,0,0,255],[10,0,0,255],[12,0,0,255],[14,0,0,255],[16,0,0,255],[18,0,0,255],[20,0,0,255],[22,0,0,255],[24,0,0,255],[26,0,0,255],[28,0,0,255],[30,0,0,255],[32,0,0,255],[34,0,0,255],[36,0,0,255],[38,0,0,255],[40,0,0,255],[42,0,0,255],[44,0,0,255],[46,0,0,255],[48,0,0,255],[50,0,0,255],[52,0,0,255],[54,0,0,255],[56,0,0,255],[58,0,0,255],[60,0,0,255],[62,0,0,255],[64,0,0,255],[66,0,0,255],[68,0,0,255],[70,0,0,255],[72,0,0,255],[74,0,0,255],[76,0,0,255],[78,0,0,255],[80,0,0,255],[82,0,0,255],[84,0,0,255],[86,0,0,255],[88,0,0,255],[90,0,0,255],[92,0,0,255],[94,0,0,255],[96,0,0,255],[98,0,0,255],[100,0,0,255],[102,0,0,255],[104,0,0,255],[106,0,0,255],[108,0,0,255],[110,0,0,255],[112,0,0,255],[114,0,0,255],[116,0,0,255],[118,0,0,255],[120,0,0,255],[122,0,0,255],[124,0,0,255],[126,0,0,255],[128,0,0,255],[130,0,0,255],[132,0,0,255],[134,0,0,255],[136,0,0,255],[138,0,0,255],[140,0,0,255],[142,0,0,255],[144,0,0,255],[146,0,0,255],[148,0,0,255],[150,0,0,255],[152,0,0,255],[154,0,0,255],[156,0,0,255],[158,0,0,255],[160,0,0,255],[162,0,0,255],[164,0,0,255],[166,0,0,255],[168,0,0,255],[170,0,0,255],[172,0,0,255],[174,0,0,255],[176,0,0,255],[178,0,0,255],[180,0,0,255],[182,0,0,255],[184,0,0,255],[186,0,0,255],[188,0,0,255],[190,0,0,255],[192,0,0,255],[194,0,0,255],[196,0,0,255],[198,0,0,255],[200,0,0,255],[202,0,0,255],[204,0,0,255],[206,0,0,255],[208,0,0,255],[210,0,0,255],[212,0,0,255],[214,0,0,255],[216,0,0,255],[218,0,0,255],[220,0,0,255],[222,0,0,255],[224,0,0,255],[226,0,0,255],[228,0,0,255],[230,0,0,255],[232,0,0,255],[234,0,0,255],[236,0,0,255],[238,0,0,255],[240,0,0,255],[242,0,0,255],[244,0,0,255],[246,0,0,255],[248,0,0,255],[250,0,0,255],[252,0,0,255],[254,0,0,255],[255,0,0,255],[255,2,0,255],[255,4,0,255],[255,6,0,255],[255,8,0,255],[255,10,0,255],[255,12,0,255],[255,14,0,255],[255,16,0,255],[255,18,0,255],[255,20,0,255],[255,22,0,255],[255,24,0,255],[255,26,0,255],[255,28,0,255],[255,30,0,255],[255,32,0,255],[255,34,0,255],[255,36,0,255],[255,38,0,255],[255,40,0,255],[255,42,0,255],[255,44,0,255],[255,46,0,255],[255,48,0,255],[255,50,0,255],[255,52,0,255],[255,54,0,255],[255,56,0,255],[255,58,0,255],[255,60,0,255],[255,62,0,255],[255,64,0,255],[255,66,0,255],[255,68,0,255],[255,70,0,255],[255,72,0,255],[255,74,0,255],[255,76,0,255],[255,78,0,255],[255,80,0,255],[255,82,0,255],[255,84,0,255],[255,86,0,255],[255,88,0,255],[255,90,0,255],[255,92,0,255],[255,94,0,255],[255,96,0,255],[255,98,0,255],[255,100,0,255],[255,102,0,255],[255,104,0,255],[255,106,0,255],[255,108,0,255],[255,110,0,255],[255,112,0,255],[255,114,0,255],[255,116,0,255],[255,118,0,255],[255,120,0,255],[255,122,0,255],[255,124,0,255],[255,126,0,255],[255,128,4,255],[255,130,8,255],[255,132,12,255],[255,134,16,255],[255,136,20,255],[255,138,24,255],[255,140,28,255],[255,142,32,255],[255,144,36,255],[255,146,40,255],[255,148,44,255],[255,150,48,255],[255,152,52,255],[255,154,56,255],[255,156,60,255],[255,158,64,255],[255,160,68,255],[255,162,72,255],[255,164,76,255],[255,166,80,255],[255,168,84,255],[255,170,88,255],[255,172,92,255],[255,174,96,255],[255,176,100,255],[255,178,104,255],[255,180,108,255],[255,182,112,255],[255,184,116,255],[255,186,120,255],[255,188,124,255],[255,190,128,255],[255,192,132,255],[255,194,136,255],[255,196,140,255],[255,198,144,255],[255,200,148,255],[255,202,152,255],[255,204,156,255],[255,206,160,255],[255,208,164,255],[255,210,168,255],[255,212,172,255],[255,214,176,255],[255,216,180,255],[255,218,184,255],[255,220,188,255],[255,222,192,255],[255,224,196,255],[255,226,200,255],[255,228,204,255],[255,230,208,255],[255,232,212,255],[255,234,216,255],[255,236,220,255],[255,238,224,255],[255,240,228,255],[255,242,232,255],[255,244,236,255],[255,246,240,255],[255,248,244,255],[255,250,248,255],[255,252,252,255],[255,255,255,255]]},pet:{name:"PET",numColors:256,colors:[[0,0,0,255],[0,2,1,255],[0,4,3,255],[0,6,5,255],[0,8,7,255],[0,10,9,255],[0,12,11,255],[0,14,13,255],[0,16,15,255],[0,18,17,255],[0,20,19,255],[0,22,21,255],[0,24,23,255],[0,26,25,255],[0,28,27,255],[0,30,29,255],[0,32,31,255],[0,34,33,255],[0,36,35,255],[0,38,37,255],[0,40,39,255],[0,42,41,255],[0,44,43,255],[0,46,45,255],[0,48,47,255],[0,50,49,255],[0,52,51,255],[0,54,53,255],[0,56,55,255],[0,58,57,255],[0,60,59,255],[0,62,61,255],[0,65,63,255],[0,67,65,255],[0,69,67,255],[0,71,69,255],[0,73,71,255],[0,75,73,255],[0,77,75,255],[0,79,77,255],[0,81,79,255],[0,83,81,255],[0,85,83,255],[0,87,85,255],[0,89,87,255],[0,91,89,255],[0,93,91,255],[0,95,93,255],[0,97,95,255],[0,99,97,255],[0,101,99,255],[0,103,101,255],[0,105,103,255],[0,107,105,255],[0,109,107,255],[0,111,109,255],[0,113,111,255],[0,115,113,255],[0,117,115,255],[0,119,117,255],[0,121,119,255],[0,123,121,255],[0,125,123,255],[0,128,125,255],[1,126,127,255],[3,124,129,255],[5,122,131,255],[7,120,133,255],[9,118,135,255],[11,116,137,255],[13,114,139,255],[15,112,141,255],[17,110,143,255],[19,108,145,255],[21,106,147,255],[23,104,149,255],[25,102,151,255],[27,100,153,255],[29,98,155,255],[31,96,157,255],[33,94,159,255],[35,92,161,255],[37,90,163,255],[39,88,165,255],[41,86,167,255],[43,84,169,255],[45,82,171,255],[47,80,173,255],[49,78,175,255],[51,76,177,255],[53,74,179,255],[55,72,181,255],[57,70,183,255],[59,68,185,255],[61,66,187,255],[63,64,189,255],[65,63,191,255],[67,61,193,255],[69,59,195,255],[71,57,197,255],[73,55,199,255],[75,53,201,255],[77,51,203,255],[79,49,205,255],[81,47,207,255],[83,45,209,255],[85,43,211,255],[86,41,213,255],[88,39,215,255],[90,37,217,255],[92,35,219,255],[94,33,221,255],[96,31,223,255],[98,29,225,255],[100,27,227,255],[102,25,229,255],[104,23,231,255],[106,21,233,255],[108,19,235,255],[110,17,237,255],[112,15,239,255],[114,13,241,255],[116,11,243,255],[118,9,245,255],[120,7,247,255],[122,5,249,255],[124,3,251,255],[126,1,253,255],[128,0,255,255],[130,2,252,255],[132,4,248,255],[134,6,244,255],[136,8,240,255],[138,10,236,255],[140,12,232,255],[142,14,228,255],[144,16,224,255],[146,18,220,255],[148,20,216,255],[150,22,212,255],[152,24,208,255],[154,26,204,255],[156,28,200,255],[158,30,196,255],[160,32,192,255],[162,34,188,255],[164,36,184,255],[166,38,180,255],[168,40,176,255],[170,42,172,255],[171,44,168,255],[173,46,164,255],[175,48,160,255],[177,50,156,255],[179,52,152,255],[181,54,148,255],[183,56,144,255],[185,58,140,255],[187,60,136,255],[189,62,132,255],[191,64,128,255],[193,66,124,255],[195,68,120,255],[197,70,116,255],[199,72,112,255],[201,74,108,255],[203,76,104,255],[205,78,100,255],[207,80,96,255],[209,82,92,255],[211,84,88,255],[213,86,84,255],[215,88,80,255],[217,90,76,255],[219,92,72,255],[221,94,68,255],[223,96,64,255],[225,98,60,255],[227,100,56,255],[229,102,52,255],[231,104,48,255],[233,106,44,255],[235,108,40,255],[237,110,36,255],[239,112,32,255],[241,114,28,255],[243,116,24,255],[245,118,20,255],[247,120,16,255],[249,122,12,255],[251,124,8,255],[253,126,4,255],[255,128,0,255],[255,130,4,255],[255,132,8,255],[255,134,12,255],[255,136,16,255],[255,138,20,255],[255,140,24,255],[255,142,28,255],[255,144,32,255],[255,146,36,255],[255,148,40,255],[255,150,44,255],[255,152,48,255],[255,154,52,255],[255,156,56,255],[255,158,60,255],[255,160,64,255],[255,162,68,255],[255,164,72,255],[255,166,76,255],[255,168,80,255],[255,170,85,255],[255,172,89,255],[255,174,93,255],[255,176,97,255],[255,178,101,255],[255,180,105,255],[255,182,109,255],[255,184,113,255],[255,186,117,255],[255,188,121,255],[255,190,125,255],[255,192,129,255],[255,194,133,255],[255,196,137,255],[255,198,141,255],[255,200,145,255],[255,202,149,255],[255,204,153,255],[255,206,157,255],[255,208,161,255],[255,210,165,255],[255,212,170,255],[255,214,174,255],[255,216,178,255],[255,218,182,255],[255,220,186,255],[255,222,190,255],[255,224,194,255],[255,226,198,255],[255,228,202,255],[255,230,206,255],[255,232,210,255],[255,234,214,255],[255,236,218,255],[255,238,222,255],[255,240,226,255],[255,242,230,255],[255,244,234,255],[255,246,238,255],[255,248,242,255],[255,250,246,255],[255,252,250,255],[255,255,255,255]]},hotMetalBlue:{name:"Hot Metal Blue",numColors:256,colors:[[0,0,0,255],[0,0,2,255],[0,0,4,255],[0,0,6,255],[0,0,8,255],[0,0,10,255],[0,0,12,255],[0,0,14,255],[0,0,16,255],[0,0,17,255],[0,0,19,255],[0,0,21,255],[0,0,23,255],[0,0,25,255],[0,0,27,255],[0,0,29,255],[0,0,31,255],[0,0,33,255],[0,0,35,255],[0,0,37,255],[0,0,39,255],[0,0,41,255],[0,0,43,255],[0,0,45,255],[0,0,47,255],[0,0,49,255],[0,0,51,255],[0,0,53,255],[0,0,55,255],[0,0,57,255],[0,0,59,255],[0,0,61,255],[0,0,63,255],[0,0,65,255],[0,0,67,255],[0,0,69,255],[0,0,71,255],[0,0,73,255],[0,0,75,255],[0,0,77,255],[0,0,79,255],[0,0,81,255],[0,0,83,255],[0,0,84,255],[0,0,86,255],[0,0,88,255],[0,0,90,255],[0,0,92,255],[0,0,94,255],[0,0,96,255],[0,0,98,255],[0,0,100,255],[0,0,102,255],[0,0,104,255],[0,0,106,255],[0,0,108,255],[0,0,110,255],[0,0,112,255],[0,0,114,255],[0,0,116,255],[0,0,117,255],[0,0,119,255],[0,0,121,255],[0,0,123,255],[0,0,125,255],[0,0,127,255],[0,0,129,255],[0,0,131,255],[0,0,133,255],[0,0,135,255],[0,0,137,255],[0,0,139,255],[0,0,141,255],[0,0,143,255],[0,0,145,255],[0,0,147,255],[0,0,149,255],[0,0,151,255],[0,0,153,255],[0,0,155,255],[0,0,157,255],[0,0,159,255],[0,0,161,255],[0,0,163,255],[0,0,165,255],[0,0,167,255],[3,0,169,255],[6,0,171,255],[9,0,173,255],[12,0,175,255],[15,0,177,255],[18,0,179,255],[21,0,181,255],[24,0,183,255],[26,0,184,255],[29,0,186,255],[32,0,188,255],[35,0,190,255],[38,0,192,255],[41,0,194,255],[44,0,196,255],[47,0,198,255],[50,0,200,255],[52,0,197,255],[55,0,194,255],[57,0,191,255],[59,0,188,255],[62,0,185,255],[64,0,182,255],[66,0,179,255],[69,0,176,255],[71,0,174,255],[74,0,171,255],[76,0,168,255],[78,0,165,255],[81,0,162,255],[83,0,159,255],[85,0,156,255],[88,0,153,255],[90,0,150,255],[93,2,144,255],[96,4,138,255],[99,6,132,255],[102,8,126,255],[105,9,121,255],[108,11,115,255],[111,13,109,255],[114,15,103,255],[116,17,97,255],[119,19,91,255],[122,21,85,255],[125,23,79,255],[128,24,74,255],[131,26,68,255],[134,28,62,255],[137,30,56,255],[140,32,50,255],[143,34,47,255],[146,36,44,255],[149,38,41,255],[152,40,38,255],[155,41,35,255],[158,43,32,255],[161,45,29,255],[164,47,26,255],[166,49,24,255],[169,51,21,255],[172,53,18,255],[175,55,15,255],[178,56,12,255],[181,58,9,255],[184,60,6,255],[187,62,3,255],[190,64,0,255],[194,66,0,255],[198,68,0,255],[201,70,0,255],[205,72,0,255],[209,73,0,255],[213,75,0,255],[217,77,0,255],[221,79,0,255],[224,81,0,255],[228,83,0,255],[232,85,0,255],[236,87,0,255],[240,88,0,255],[244,90,0,255],[247,92,0,255],[251,94,0,255],[255,96,0,255],[255,98,3,255],[255,100,6,255],[255,102,9,255],[255,104,12,255],[255,105,15,255],[255,107,18,255],[255,109,21,255],[255,111,24,255],[255,113,26,255],[255,115,29,255],[255,117,32,255],[255,119,35,255],[255,120,38,255],[255,122,41,255],[255,124,44,255],[255,126,47,255],[255,128,50,255],[255,130,53,255],[255,132,56,255],[255,134,59,255],[255,136,62,255],[255,137,65,255],[255,139,68,255],[255,141,71,255],[255,143,74,255],[255,145,76,255],[255,147,79,255],[255,149,82,255],[255,151,85,255],[255,152,88,255],[255,154,91,255],[255,156,94,255],[255,158,97,255],[255,160,100,255],[255,162,103,255],[255,164,106,255],[255,166,109,255],[255,168,112,255],[255,169,115,255],[255,171,118,255],[255,173,121,255],[255,175,124,255],[255,177,126,255],[255,179,129,255],[255,181,132,255],[255,183,135,255],[255,184,138,255],[255,186,141,255],[255,188,144,255],[255,190,147,255],[255,192,150,255],[255,194,153,255],[255,196,156,255],[255,198,159,255],[255,200,162,255],[255,201,165,255],[255,203,168,255],[255,205,171,255],[255,207,174,255],[255,209,176,255],[255,211,179,255],[255,213,182,255],[255,215,185,255],[255,216,188,255],[255,218,191,255],[255,220,194,255],[255,222,197,255],[255,224,200,255],[255,226,203,255],[255,228,206,255],[255,229,210,255],[255,231,213,255],[255,233,216,255],[255,235,219,255],[255,237,223,255],[255,239,226,255],[255,240,229,255],[255,242,232,255],[255,244,236,255],[255,246,239,255],[255,248,242,255],[255,250,245,255],[255,251,249,255],[255,253,252,255],[255,255,255,255]]},pet20Step:{name:"PET 20 Step",numColors:256,colors:[[0,0,0,255],[0,0,0,255],[0,0,0,255],[0,0,0,255],[0,0,0,255],[0,0,0,255],[0,0,0,255],[0,0,0,255],[0,0,0,255],[0,0,0,255],[0,0,0,255],[0,0,0,255],[0,0,0,255],[96,0,80,255],[96,0,80,255],[96,0,80,255],[96,0,80,255],[96,0,80,255],[96,0,80,255],[96,0,80,255],[96,0,80,255],[96,0,80,255],[96,0,80,255],[96,0,80,255],[96,0,80,255],[96,0,80,255],[48,48,80,255],[48,48,80,255],[48,48,80,255],[48,48,80,255],[48,48,80,255],[48,48,80,255],[48,48,80,255],[48,48,80,255],[48,48,80,255],[48,48,80,255],[48,48,80,255],[48,48,80,255],[48,48,80,255],[48,48,112,255],[48,48,112,255],[48,48,112,255],[48,48,112,255],[48,48,112,255],[48,48,112,255],[48,48,112,255],[48,48,112,255],[48,48,112,255],[48,48,112,255],[48,48,112,255],[48,48,112,255],[80,80,128,255],[80,80,128,255],[80,80,128,255],[80,80,128,255],[80,80,128,255],[80,80,128,255],[80,80,128,255],[80,80,128,255],[80,80,128,255],[80,80,128,255],[80,80,128,255],[80,80,128,255],[80,80,128,255],[96,96,176,255],[96,96,176,255],[96,96,176,255],[96,96,176,255],[96,96,176,255],[96,96,176,255],[96,96,176,255],[96,96,176,255],[96,96,176,255],[96,96,176,255],[96,96,176,255],[96,96,176,255],[96,96,176,255],[112,112,192,255],[112,112,192,255],[112,112,192,255],[112,112,192,255],[112,112,192,255],[112,112,192,255],[112,112,192,255],[112,112,192,255],[112,112,192,255],[112,112,192,255],[112,112,192,255],[112,112,192,255],[112,112,192,255],[128,128,224,255],[128,128,224,255],[128,128,224,255],[128,128,224,255],[128,128,224,255],[128,128,224,255],[128,128,224,255],[128,128,224,255],[128,128,224,255],[128,128,224,255],[128,128,224,255],[128,128,224,255],[48,96,48,255],[48,96,48,255],[48,96,48,255],[48,96,48,255],[48,96,48,255],[48,96,48,255],[48,96,48,255],[48,96,48,255],[48,96,48,255],[48,96,48,255],[48,96,48,255],[48,96,48,255],[48,96,48,255],[48,144,48,255],[48,144,48,255],[48,144,48,255],[48,144,48,255],[48,144,48,255],[48,144,48,255],[48,144,48,255],[48,144,48,255],[48,144,48,255],[48,144,48,255],[48,144,48,255],[48,144,48,255],[48,144,48,255],[80,192,80,255],[80,192,80,255],[80,192,80,255],[80,192,80,255],[80,192,80,255],[80,192,80,255],[80,192,80,255],[80,192,80,255],[80,192,80,255],[80,192,80,255],[80,192,80,255],[80,192,80,255],[80,192,80,255],[64,224,64,255],[64,224,64,255],[64,224,64,255],[64,224,64,255],[64,224,64,255],[64,224,64,255],[64,224,64,255],[64,224,64,255],[64,224,64,255],[64,224,64,255],[64,224,64,255],[64,224,64,255],[224,224,80,255],[224,224,80,255],[224,224,80,255],[224,224,80,255],[224,224,80,255],[224,224,80,255],[224,224,80,255],[224,224,80,255],[224,224,80,255],[224,224,80,255],[224,224,80,255],[224,224,80,255],[224,224,80,255],[208,208,96,255],[208,208,96,255],[208,208,96,255],[208,208,96,255],[208,208,96,255],[208,208,96,255],[208,208,96,255],[208,208,96,255],[208,208,96,255],[208,208,96,255],[208,208,96,255],[208,208,96,255],[208,208,96,255],[208,176,64,255],[208,176,64,255],[208,176,64,255],[208,176,64,255],[208,176,64,255],[208,176,64,255],[208,176,64,255],[208,176,64,255],[208,176,64,255],[208,176,64,255],[208,176,64,255],[208,176,64,255],[208,176,64,255],[208,144,0,255],[208,144,0,255],[208,144,0,255],[208,144,0,255],[208,144,0,255],[208,144,0,255],[208,144,0,255],[208,144,0,255],[208,144,0,255],[208,144,0,255],[208,144,0,255],[208,144,0,255],[192,96,0,255],[192,96,0,255],[192,96,0,255],[192,96,0,255],[192,96,0,255],[192,96,0,255],[192,96,0,255],[192,96,0,255],[192,96,0,255],[192,96,0,255],[192,96,0,255],[192,96,0,255],[192,96,0,255],[176,48,0,255],[176,48,0,255],[176,48,0,255],[176,48,0,255],[176,48,0,255],[176,48,0,255],[176,48,0,255],[176,48,0,255],[176,48,0,255],[176,48,0,255],[176,48,0,255],[176,48,0,255],[176,48,0,255],[255,0,0,255],[255,0,0,255],[255,0,0,255],[255,0,0,255],[255,0,0,255],[255,0,0,255],[255,0,0,255],[255,0,0,255],[255,0,0,255],[255,0,0,255],[255,0,0,255],[255,0,0,255],[255,0,0,255],[255,255,255,255],[255,255,255,255],[255,255,255,255],[255,255,255,255],[255,255,255,255],[255,255,255,255],[255,255,255,255],[255,255,255,255],[255,255,255,255],[255,255,255,255],[255,255,255,255],[255,255,255,255],[255,255,255,255]]},gray:{name:"Gray",numColors:256,gamma:1,segmentedData:{red:[[0,0,0],[1,1,1]],green:[[0,0,0],[1,1,1]],blue:[[0,0,0],[1,1,1]]}},jet:{name:"Jet",numColors:256,gamma:1,segmentedData:{red:[[0,0,0],[.35,0,0],[.66,1,1],[.89,1,1],[1,.5,.5]],green:[[0,0,0],[.125,0,0],[.375,1,1],[.64,1,1],[.91,0,0],[1,0,0]],blue:[[0,.5,.5],[.11,1,1],[.34,1,1],[.65,0,0],[1,0,0]]}},hsv:{name:"HSV",numColors:256,gamma:1,segmentedData:{red:[[0,1,1],[.15873,1,1],[.174603,.96875,.96875],[.333333,.03125,.03125],[.349206,0,0],[.666667,0,0],[.68254,.03125,.03125],[.84127,.96875,.96875],[.857143,1,1],[1,1,1]],green:[[0,0,0],[.15873,.9375,.9375],[.174603,1,1],[.507937,1,1],[.666667,.0625,.0625],[.68254,0,0],[1,0,0]],blue:[[0,0,0],[.333333,0,0],[.349206,.0625,.0625],[.507937,1,1],[.84127,1,1],[.857143,.9375,.9375],[1,.09375,.09375]]}},hot:{name:"Hot",numColors:256,gamma:1,segmentedData:{red:[[0,.0416,.0416],[.365079,1,1],[1,1,1]],green:[[0,0,0],[.365079,0,0],[.746032,1,1],[1,1,1]],blue:[[0,0,0],[.746032,0,0],[1,1,1]]}},cool:{name:"Cool",numColors:256,gamma:1,segmentedData:{red:[[0,0,0],[1,1,1]],green:[[0,1,1],[1,0,0]],blue:[[0,1,1],[1,1,1]]}},spring:{name:"Spring",numColors:256,gamma:1,segmentedData:{red:[[0,1,1],[1,1,1]],green:[[0,0,0],[1,1,1]],blue:[[0,1,1],[1,0,0]]}},summer:{name:"Summer",numColors:256,gamma:1,segmentedData:{red:[[0,0,0],[1,1,1]],green:[[0,.5,.5],[1,1,1]],blue:[[0,.4,.4],[1,.4,.4]]}},autumn:{name:"Autumn",numColors:256,gamma:1,segmentedData:{red:[[0,1,1],[1,1,1]],green:[[0,0,0],[1,1,1]],blue:[[0,0,0],[1,0,0]]}},winter:{name:"Winter",numColors:256,gamma:1,segmentedData:{red:[[0,0,0],[1,0,0]],green:[[0,0,0],[1,1,1]],blue:[[0,1,1],[1,.5,.5]]}},bone:{name:"Bone",numColors:256,gamma:1,segmentedData:{red:[[0,0,0],[.746032,.652778,.652778],[1,1,1]],green:[[0,0,0],[.365079,.319444,.319444],[.746032,.777778,.777778],[1,1,1]],blue:[[0,0,0],[.365079,.444444,.444444],[1,1,1]]}},copper:{name:"Copper",numColors:256,gamma:1,segmentedData:{red:[[0,0,0],[.809524,1,1],[1,1,1]],green:[[0,0,0],[1,.7812,.7812]],blue:[[0,0,0],[1,.4975,.4975]]}},spectral:{name:"Spectral",numColors:256,gamma:1,segmentedData:{red:[[0,0,0],[.05,.4667,.4667],[.1,.5333,.5333],[.15,0,0],[.2,0,0],[.25,0,0],[.3,0,0],[.35,0,0],[.4,0,0],[.45,0,0],[.5,0,0],[.55,0,0],[.6,0,0],[.65,.7333,.7333],[.7,.9333,.9333],[.75,1,1],[.8,1,1],[.85,1,1],[.9,.8667,.8667],[.95,.8,.8],[1,.8,.8]],green:[[0,0,0],[.05,0,0],[.1,0,0],[.15,0,0],[.2,0,0],[.25,.4667,.4667],[.3,.6,.6],[.35,.6667,.6667],[.4,.6667,.6667],[.45,.6,.6],[.5,.7333,.7333],[.55,.8667,.8667],[.6,1,1],[.65,1,1],[.7,.9333,.9333],[.75,.8,.8],[.8,.6,.6],[.85,0,0],[.9,0,0],[.95,0,0],[1,.8,.8]],blue:[[0,0,0],[.05,.5333,.5333],[.1,.6,.6],[.15,.6667,.6667],[.2,.8667,.8667],[.25,.8667,.8667],[.3,.8667,.8667],[.35,.6667,.6667],[.4,.5333,.5333],[.45,0,0],[.5,0,0],[.55,0,0],[.6,0,0],[.65,0,0],[.7,0,0],[.75,0,0],[.8,0,0],[.85,0,0],[.9,0,0],[.95,0,0],[1,.8,.8]]}},coolwarm:{name:"CoolWarm",numColors:256,gamma:1,segmentedData:{red:[[0,.2298057,.2298057],[.03125,.26623388,.26623388],[.0625,.30386891,.30386891],[.09375,.342804478,.342804478],[.125,.38301334,.38301334],[.15625,.424369608,.424369608],[.1875,.46666708,.46666708],[.21875,.509635204,.509635204],[.25,.552953156,.552953156],[.28125,.596262162,.596262162],[.3125,.639176211,.639176211],[.34375,.681291281,.681291281],[.375,.722193294,.722193294],[.40625,.761464949,.761464949],[.4375,.798691636,.798691636],[.46875,.833466556,.833466556],[.5,.865395197,.865395197],[.53125,.897787179,.897787179],[.5625,.924127593,.924127593],[.59375,.944468518,.944468518],[.625,.958852946,.958852946],[.65625,.96732803,.96732803],[.6875,.969954137,.969954137],[.71875,.966811177,.966811177],[.75,.958003065,.958003065],[.78125,.943660866,.943660866],[.8125,.923944917,.923944917],[.84375,.89904617,.89904617],[.875,.869186849,.869186849],[.90625,.834620542,.834620542],[.9375,.795631745,.795631745],[.96875,.752534934,.752534934],[1,.705673158,.705673158]],green:[[0,.298717966,.298717966],[.03125,.353094838,.353094838],[.0625,.406535296,.406535296],[.09375,.458757618,.458757618],[.125,.50941904,.50941904],[.15625,.558148092,.558148092],[.1875,.604562568,.604562568],[.21875,.648280772,.648280772],[.25,.688929332,.688929332],[.28125,.726149107,.726149107],[.3125,.759599947,.759599947],[.34375,.788964712,.788964712],[.375,.813952739,.813952739],[.40625,.834302879,.834302879],[.4375,.849786142,.849786142],[.46875,.860207984,.860207984],[.5,.86541021,.86541021],[.53125,.848937047,.848937047],[.5625,.827384882,.827384882],[.59375,.800927443,.800927443],[.625,.769767752,.769767752],[.65625,.734132809,.734132809],[.6875,.694266682,.694266682],[.71875,.650421156,.650421156],[.75,.602842431,.602842431],[.78125,.551750968,.551750968],[.8125,.49730856,.49730856],[.84375,.439559467,.439559467],[.875,.378313092,.378313092],[.90625,.312874446,.312874446],[.9375,.24128379,.24128379],[.96875,.157246067,.157246067],[1,.01555616,.01555616]],blue:[[0,.753683153,.753683153],[.03125,.801466763,.801466763],[.0625,.84495867,.84495867],[.09375,.883725899,.883725899],[.125,.917387822,.917387822],[.15625,.945619588,.945619588],[.1875,.968154911,.968154911],[.21875,.98478814,.98478814],[.25,.995375608,.995375608],[.28125,.999836203,.999836203],[.3125,.998151185,.998151185],[.34375,.990363227,.990363227],[.375,.976574709,.976574709],[.40625,.956945269,.956945269],[.4375,.931688648,.931688648],[.46875,.901068838,.901068838],[.5,.865395561,.865395561],[.53125,.820880546,.820880546],[.5625,.774508472,.774508472],[.59375,.726736146,.726736146],[.625,.678007945,.678007945],[.65625,.628751763,.628751763],[.6875,.579375448,.579375448],[.71875,.530263762,.530263762],[.75,.481775914,.481775914],[.78125,.434243684,.434243684],[.8125,.387970225,.387970225],[.84375,.343229596,.343229596],[.875,.300267182,.300267182],[.90625,.259301199,.259301199],[.9375,.220525627,.220525627],[.96875,.184115123,.184115123],[1,.150232812,.150232812]]}},blues:{name:"Blues",numColors:256,gamma:1,segmentedData:{red:[[0,.9686274528503418,.9686274528503418],[.125,.8705882430076599,.8705882430076599],[.25,.7764706015586853,.7764706015586853],[.375,.6196078658103943,.6196078658103943],[.5,.41960784792900085,.41960784792900085],[.625,.25882354378700256,.25882354378700256],[.75,.12941177189350128,.12941177189350128],[.875,.0313725508749485,.0313725508749485],[1,.0313725508749485,.0313725508749485]],green:[[0,.9843137264251709,.9843137264251709],[.125,.9215686321258545,.9215686321258545],[.25,.8588235378265381,.8588235378265381],[.375,.7921568751335144,.7921568751335144],[.5,.6823529601097107,.6823529601097107],[.625,.572549045085907,.572549045085907],[.75,.4431372582912445,.4431372582912445],[.875,.3176470696926117,.3176470696926117],[1,.1882352977991104,.1882352977991104]],blue:[[0,1,1],[.125,.9686274528503418,.9686274528503418],[.25,.9372549057006836,.9372549057006836],[.375,.8823529481887817,.8823529481887817],[.5,.8392156958580017,.8392156958580017],[.625,.7764706015586853,.7764706015586853],[.75,.7098039388656616,.7098039388656616],[.875,.6117647290229797,.6117647290229797],[1,.41960784792900085,.41960784792900085]]}}}},function(e,t,r){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t,r){if(e>1)throw new Error("HSVToRGB expects hue < 1");var a=[];if(0===t)return a[0]=r,a[1]=r,a[2]=r,a;var n=Math.floor(6*e),i=6*e-n,o=r*(1-t),l=r*(1-t*i),u=r*(1-t*(1-i));switch(n){case 0:case 6:a[0]=r,a[1]=u,a[2]=o;break;case 1:a[0]=l,a[1]=r,a[2]=o;break;case 2:a[0]=o,a[1]=r,a[2]=u;break;case 3:a[0]=o,a[1]=l,a[2]=r;break;case 4:a[0]=u,a[1]=o,a[2]=r;break;case 5:a[0]=r,a[1]=o,a[2]=l}return a}function i(e,t){var r=void 0;return r=e<t.Range[0]?t.MaxIndex+l+1.5:e>t.Range[1]?t.MaxIndex+u+1.5:(e+t.Shift)*t.Scale,Math.floor(r)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),l=0,u=1,d=function(){function e(){a(this,e),this.NumberOfColors=256,this.Ramp="linear",this.TableRange=[0,255],this.HueRange=[0,.66667],this.SaturationRange=[1,1],this.ValueRange=[1,1],this.AlphaRange=[1,1],this.NaNColor=[128,0,0,255],this.BelowRangeColor=[0,0,0,255],this.UseBelowRangeColor=!0,this.AboveRangeColor=[255,255,255,255],this.UseAboveRangeColor=!0,this.InputRange=[0,255],this.Table=[]}return o(e,[{key:"setNumberOfTableValues",value:function(e){this.NumberOfColors=e}},{key:"setRamp",value:function(e){this.Ramp=e}},{key:"setTableRange",value:function(e,t){this.TableRange[0]=e,this.TableRange[1]=t}},{key:"setHueRange",value:function(e,t){this.HueRange[0]=e,this.HueRange[1]=t}},{key:"setSaturationRange",value:function(e,t){this.SaturationRange[0]=e,this.SaturationRange[1]=t}},{key:"setValueRange",value:function(e,t){this.ValueRange[0]=e,this.ValueRange[1]=t}},{key:"setRange",value:function(e,t){this.InputRange[0]=e,this.InputRange[1]=t}},{key:"setAlphaRange",value:function(e,t){this.AlphaRange[0]=e,this.AlphaRange[1]=t}},{key:"getColor",value:function(e){return this.mapValue(e)}},{key:"build",value:function(e){if(!(this.Table.length>1)||e){this.Table=[];var t=this.NumberOfColors-1,r=void 0,a=void 0,i=void 0,o=void 0;t?(r=(this.HueRange[1]-this.HueRange[0])/t,a=(this.SaturationRange[1]-this.SaturationRange[0])/t,i=(this.ValueRange[1]-this.ValueRange[0])/t,o=(this.AlphaRange[1]-this.AlphaRange[0])/t):r=a=i=o=0;for(var l=0;l<=t;l++){var u=this.HueRange[0]+l*r,d=this.SaturationRange[0]+l*a,s=this.ValueRange[0]+l*i,f=this.AlphaRange[0]+l*o,c=n(u,d,s),m=[];switch(this.Ramp){case"scurve":m[0]=Math.floor(127.5*(1+Math.cos((1-c[0])*Math.PI))),m[1]=Math.floor(127.5*(1+Math.cos((1-c[1])*Math.PI))),m[2]=Math.floor(127.5*(1+Math.cos((1-c[2])*Math.PI))),m[3]=Math.floor(255*f);break;case"linear":m[0]=Math.floor(255*c[0]+.5),m[1]=Math.floor(255*c[1]+.5),m[2]=Math.floor(255*c[2]+.5),m[3]=Math.floor(255*f+.5);break;case"sqrt":m[0]=Math.floor(255*Math.sqrt(c[0])+.5),m[1]=Math.floor(255*Math.sqrt(c[1])+.5),m[2]=Math.floor(255*Math.sqrt(c[2])+.5),m[3]=Math.floor(255*Math.sqrt(f)+.5);break;default:throw new Error("Invalid Ramp value ("+this.Ramp+")")}this.Table.push(m)}this.buildSpecialColors()}}},{key:"buildSpecialColors",value:function(){var e=this.NumberOfColors,t=e+l,r=e+u,a=e+2;this.UseBelowRangeColor||0===e?this.Table[t]=this.BelowRangeColor:this.Table[t]=this.Table[0],this.UseAboveRangeColor||0===e?this.Table[r]=this.AboveRangeColor:this.Table[r]=this.Table[e-1],this.Table[a]=this.NaNColor}},{key:"mapValue",value:function(e){var t=this.getIndex(e);if(t<0)return this.NaNColor;if(0===t){if(this.UseBelowRangeColor&&e<this.TableRange[0])return this.BelowRangeColor}else if(t===this.NumberOfColors-1&&this.UseAboveRangeColor&&e>this.TableRange[1])return this.AboveRangeColor;return this.Table[t]}},{key:"getIndex",value:function(e){var t={};if(t.Range=[],t.MaxIndex=this.NumberOfColors-1,t.Shift=-this.TableRange[0],this.TableRange[1]<=this.TableRange[0]?t.Scale=Number.MAX_VALUE:t.Scale=t.MaxIndex/(this.TableRange[1]-this.TableRange[0]),t.Range[0]=this.TableRange[0],t.Range[1]=this.TableRange[1],isNaN(e))return-1;var r=i(e,t);return r===this.NumberOfColors+l?r=0:r===this.NumberOfColors+u&&(r=this.NumberOfColors-1),r}},{key:"setTableValue",value:function(e,t){if(5===arguments.length&&(t=Array.prototype.slice.call(arguments,1)),e<0)throw new Error("Can't set the table value for negative index ("+e+")");e>=this.NumberOfColors&&new Error("Index "+e+" is greater than the number of colors "+this.NumberOfColors),this.Table[e]=t,0!==e&&e!==this.NumberOfColors-1||this.buildSpecialColors()}}]),e}();t.default=d},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r){var a=(0,n.default)(),i=e.getPixelData();e.stats.lastGetPixelDataTime=(0,n.default)()-a;var o=i.length,l=e.minPixelValue,u=0,d=0,s=void 0;if(a=(0,n.default)(),i instanceof Int16Array)if(l<0)for(;d<o;)s=t[i[d++]+-l],r[u++]=s,r[u++]=s,r[u++]=s,r[u++]=255;else for(;d<o;)s=t[i[d++]],r[u++]=s,r[u++]=s,r[u++]=s,r[u++]=255;else if(i instanceof Uint16Array)for(;d<o;)s=t[i[d++]],r[u++]=s,r[u++]=s,r[u++]=s,r[u++]=255;else if(l<0)for(;d<o;)s=t[i[d++]+-l],r[u++]=s,r[u++]=s,r[u++]=s,r[u++]=255;else for(;d<o;)s=t[i[d++]],r[u++]=s,r[u++]=s,r[u++]=s,r[u++]=255;e.stats.lastStoredPixelDataToCanvasImageDataTime=(0,n.default)()-a};var a=r(1),n=function(e){return e&&e.__esModule?e:{default:e}}(a)},function(e,t,r){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}();t.Transform=function(){function e(){a(this,e),this.reset()}return n(e,[{key:"reset",value:function(){this.m=[1,0,0,1,0,0]}},{key:"clone",value:function(){var t=new e;return t.m[0]=this.m[0],t.m[1]=this.m[1],t.m[2]=this.m[2],t.m[3]=this.m[3],t.m[4]=this.m[4],t.m[5]=this.m[5],t}},{key:"multiply",value:function(e){var t=this.m[0]*e.m[0]+this.m[2]*e.m[1],r=this.m[1]*e.m[0]+this.m[3]*e.m[1],a=this.m[0]*e.m[2]+this.m[2]*e.m[3],n=this.m[1]*e.m[2]+this.m[3]*e.m[3],i=this.m[0]*e.m[4]+this.m[2]*e.m[5]+this.m[4],o=this.m[1]*e.m[4]+this.m[3]*e.m[5]+this.m[5];this.m[0]=t,this.m[1]=r,this.m[2]=a,this.m[3]=n,this.m[4]=i,this.m[5]=o}},{key:"invert",value:function(){var e=1/(this.m[0]*this.m[3]-this.m[1]*this.m[2]),t=this.m[3]*e,r=-this.m[1]*e,a=-this.m[2]*e,n=this.m[0]*e,i=e*(this.m[2]*this.m[5]-this.m[3]*this.m[4]),o=e*(this.m[1]*this.m[4]-this.m[0]*this.m[5]);this.m[0]=t,this.m[1]=r,this.m[2]=a,this.m[3]=n,this.m[4]=i,this.m[5]=o}},{key:"rotate",value:function(e){var t=Math.cos(e),r=Math.sin(e),a=this.m[0]*t+this.m[2]*r,n=this.m[1]*t+this.m[3]*r,i=this.m[0]*-r+this.m[2]*t,o=this.m[1]*-r+this.m[3]*t;this.m[0]=a,this.m[1]=n,this.m[2]=i,this.m[3]=o}},{key:"translate",value:function(e,t){this.m[4]+=this.m[0]*e+this.m[2]*t,this.m[5]+=this.m[1]*e+this.m[3]*t}},{key:"scale",value:function(e,t){this.m[0]*=e,this.m[1]*=e,this.m[2]*=t,this.m[3]*=t}},{key:"transformPoint",value:function(e,t){var r=e,a=t;return e=r*this.m[0]+a*this.m[2]+this.m[4],t=r*this.m[1]+a*this.m[3]+this.m[5],{x:e,y:t}}}]),e}()},function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r){return void 0!==e.cachedLut&&e.cachedLut.windowCenter===t.voi.windowCenter&&e.cachedLut.windowWidth===t.voi.windowWidth&&(0,i.default)(e.cachedLut.modalityLUT,t.modalityLUT)&&(0,i.default)(e.cachedLut.voiLUT,t.voiLUT)&&e.cachedLut.invert===t.invert&&!0!==r?e.cachedLut.lutArray:((0,l.default)(e,t),e.cachedLut.windowWidth=t.voi.windowWidth,e.cachedLut.windowCenter=t.voi.windowCenter,e.cachedLut.invert=t.invert,e.cachedLut.voiLUT=t.voiLUT,e.cachedLut.modalityLUT=t.modalityLUT,e.cachedLut.lutArray)};var n=r(46),i=a(n),o=r(16),l=a(o)},function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function n(){return{maximumSizeInBytes:h,cacheSizeInBytes:b,numberOfImagesCached:p.length}}function i(){function e(e,t){return e.timeStamp>t.timeStamp?-1:e.timeStamp<t.timeStamp?1:0}if(!(b<=h)){for(p.sort(e);b>h;){var t=p[p.length-1];b-=t.sizeInBytes,delete g[t.imageId],p.pop(),(0,v.default)(c.default,"cornerstonewebgltextureremoved",{imageId:t.imageId})}var r=n();(0,v.default)(c.default,"cornerstonewebgltexturecachefull",r)}}function o(e){if(void 0===e)throw new Error("setMaximumSizeBytes: parameter numBytes must not be undefined");if(void 0===e.toFixed)throw new Error("setMaximumSizeBytes: parameter numBytes must be a number");h=e,i()}function l(e,t){var r=e.imageId;if(void 0===e)throw new Error("putImageTexture: image must not be undefined");if(void 0===r)throw new Error("putImageTexture: imageId must not be undefined");if(void 0===t)throw new Error("putImageTexture: imageTexture must not be undefined");if(!0===Object.prototype.hasOwnProperty.call(g,r))throw new Error("putImageTexture: imageId already in cache");var a={imageId:r,imageTexture:t,timeStamp:new Date,sizeInBytes:t.sizeInBytes};if(g[r]=a,p.push(a),void 0===t.sizeInBytes)throw new Error("putImageTexture: imageTexture.sizeInBytes must not be undefined");if(void 0===t.sizeInBytes.toFixed)throw new Error("putImageTexture: imageTexture.sizeInBytes is not a number");b+=a.sizeInBytes,i()}function u(e){if(void 0===e)throw new Error("getImageTexture: imageId must not be undefined");var t=g[e];if(void 0!==t)return t.timeStamp=new Date,t.imageTexture}function d(e){if(void 0===e)throw new Error("removeImageTexture: imageId must not be undefined");var t=g[e];if(void 0===t)throw new Error("removeImageTexture: imageId must not be undefined");return p.splice(p.indexOf(t),1),b-=t.sizeInBytes,delete g[e],t.imageTexture}function s(){for(;p.length>0;){var e=p.pop();delete g[e.imageId]}b=0}Object.defineProperty(t,"__esModule",{value:!0});var f=r(14),c=a(f),m=r(2),v=a(m),g={},p=[],h=268435456,b=0;t.default={purgeCache:s,getImageTexture:u,putImageTexture:l,removeImageTexture:d,setMaximumSizeBytes:o}},function(e,t,r){"use strict";function a(e,t,r){var a=e.createShader(r);if(e.shaderSource(a,t),e.compileShader(a),!e.getShaderParameter(a,e.COMPILE_STATUS)&&!e.isContextLost()){var n=e.getShaderInfoLog(a);console.error("Could not compile shader:\n"+n)}return a}function n(e,t,r){var a=e.createProgram();if(e.attachShader(a,t),e.attachShader(a,r),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS)&&!e.isContextLost()){var n=e.getProgramInfoLog(a);console.error("WebGL program filed to link:\n"+n)}return a}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r){return n(e,a(e,t,e.VERTEX_SHADER),a(e,r,e.FRAGMENT_SHADER))}},function(e,t,r){"use strict";function a(e,t){if(void 0===e)throw new Error("renderWebImage: enabledElement parameter must not be undefined");var r=e.image;if(void 0===r)throw new Error("renderWebImage: image must be loaded before it can be drawn");if(e.viewport.voi.windowWidth===e.image.windowWidth&&e.viewport.voi.windowCenter===e.image.windowCenter&&!1===e.viewport.invert){var a=e.canvas.getContext("2d");a.setTransform(1,0,0,1,0,0),a.fillStyle="black",a.fillRect(0,0,e.canvas.width,e.canvas.height),a.imageSmoothingEnabled=!e.viewport.pixelReplication,a.mozImageSmoothingEnabled=a.imageSmoothingEnabled,(0,i.default)(e,a);var n=e.viewport.displayedArea.tlhc.x-1,l=e.viewport.displayedArea.tlhc.y-1,u=e.viewport.displayedArea.brhc.x-e.viewport.displayedArea.tlhc.x,d=e.viewport.displayedArea.brhc.y-e.viewport.displayedArea.tlhc.y;a.drawImage(r.getImage(),n,l,u,d,0,0,u,d)}else(0,o.renderColorImage)(e,t)}Object.defineProperty(t,"__esModule",{value:!0}),t.renderWebImage=a;var n=r(3),i=function(e){return e&&e.__esModule?e:{default:e}}(n),o=r(8)},function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function n(e,t){t.width!==e.clientWidth&&(t.width=e.clientWidth,t.style.width=e.clientWidth+"px"),t.height!==e.clientHeight&&(t.height=e.clientHeight,t.style.height=e.clientHeight+"px")}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var r=(0,i.getEnabledElement)(e);n(e,r.canvas);var a={element:e};(0,f.default)(e,"cornerstoneelementresized",a),void 0!==r.image&&(!0===t?(0,l.default)(e):(0,d.default)(e))};var i=r(0),o=r(40),l=a(o),u=r(4),d=a(u),s=r(2),f=a(s)},function(e,t,r){"use strict";function a(e){return 0===e.viewport.rotation||180===e.viewport.rotation?{width:e.image.width,height:e.image.height}:{width:e.image.height,height:e.image.width}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=(0,n.getEnabledElement)(e),r=a(t),i=t.canvas.height/r.height,l=t.canvas.width/r.width;t.viewport.scale=Math.min(l,i),t.viewport.translation.x=0,t.viewport.translation.y=0,(0,o.default)(e)};var n=r(0),i=r(4),o=function(e){return e&&e.__esModule?e:{default:e}}(i)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r,n,i){if(void 0===e)throw new Error("getStoredPixels: parameter element must not be undefined");t=Math.round(t),r=Math.round(r);for(var o=(0,a.getEnabledElement)(e),l=[],u=0,d=o.image.getPixelData(),s=0;s<i;s++)for(var f=0;f<n;f++){var c=(s+r)*o.image.columns+(f+t);l[u++]=d[c]}return l};var a=r(0)},function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function n(e){if(void 0===e)throw new Error("setMaximumSizeBytes: parameter numBytes must not be undefined");if(void 0===e.toFixed)throw new Error("setMaximumSizeBytes: parameter numBytes must be a number");h=e,(0,p.default)(v.default,"cornerstoneimagecachemaximumsizechanged"),i()}function i(){function e(e,t){return e.timeStamp>t.timeStamp?-1:e.timeStamp<t.timeStamp?1:0}if(!(b<=h)){for(y.sort(e);b>h;){var t=y[y.length-1],r=t.imageId;u(r),(0,p.default)(v.default,"cornerstoneimagecachepromiseremoved",{imageId:r})}var a=d();(0,p.default)(v.default,"cornerstoneimagecachefull",a)}}function o(e,t){if(void 0===e)throw new Error("putImageLoadObject: imageId must not be undefined");if(void 0===t.promise)throw new Error("putImageLoadObject: imageLoadObject.promise must not be undefined");if(!0===w.hasOwnProperty(e))throw new Error("putImageLoadObject: imageId already in cache");if(t.cancelFn&&"function"!=typeof t.cancelFn)throw new Error("putImageLoadObject: imageLoadObject.cancelFn must be a function");var r={loaded:!1,imageId:e,sharedCacheKey:void 0,imageLoadObject:t,timeStamp:Date.now(),sizeInBytes:0};w[e]=r,y.push(r),t.promise.then(function(e){if(-1!==y.indexOf(r)){if(r.loaded=!0,r.image=e,void 0===e.sizeInBytes)throw new Error("putImageLoadObject: image.sizeInBytes must not be undefined");if(void 0===e.sizeInBytes.toFixed)throw new Error("putImageLoadObject: image.sizeInBytes is not a number");r.sizeInBytes=e.sizeInBytes,b+=r.sizeInBytes;var t={action:"addImage",image:r};(0,p.default)(v.default,"cornerstoneimagecachechanged",t),r.sharedCacheKey=e.sharedCacheKey,i()}},function(){var t=w[e];y.splice(y.indexOf(t),1),delete w[e]})}function l(e){if(void 0===e)throw new Error("getImageLoadObject: imageId must not be undefined");var t=w[e];if(void 0!==t)return t.timeStamp=Date.now(),t.imageLoadObject}function u(e){if(void 0===e)throw new Error("removeImageLoadObject: imageId must not be undefined");var t=w[e];if(void 0===t)throw new Error("removeImageLoadObject: imageId was not present in imageCache");y.splice(y.indexOf(t),1),b-=t.sizeInBytes;var r={action:"deleteImage",image:t};(0,p.default)(v.default,"cornerstoneimagecachechanged",r),s(t.imageLoadObject.promise),delete w[e]}function d(){return{maximumSizeInBytes:h,cacheSizeInBytes:b,numberOfImagesCached:y.length}}function s(e){e.then(function(e){e.decache&&e.decache()})}function f(){for(;y.length>0;){u(y[0].imageId)}}function c(e,t){var r=w[e];r&&r.imageLoadObject.promise.then(function(e){var a=t-e.sizeInBytes;e.sizeInBytes=t,r.sizeInBytes=t,b+=a;var n={action:"changeImageSize",image:e};(0,p.default)(v.default,"cornerstoneimagecachechanged",n)})}Object.defineProperty(t,"__esModule",{value:!0}),t.cachedImages=void 0,t.setMaximumSizeBytes=n,t.putImageLoadObject=o,t.getImageLoadObject=l,t.removeImageLoadObject=u,t.getCacheInfo=d,t.purgeCache=f,t.changeImageIdCacheSize=c;var m=r(14),v=a(m),g=r(2),p=a(g),h=1073741824,b=0,w={},y=t.cachedImages=[];t.default={imageCache:w,cachedImages:y,setMaximumSizeBytes:n,putImageLoadObject:o,getImageLoadObject:l,removeImageLoadObject:u,getCacheInfo:d,purgeCache:f,changeImageIdCacheSize:c}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(e.color&&!e.falseColor)throw new Error("Color transforms are not implemented yet");var r=e.minPixelValue,a=0,i=0,o=e.width*e.height,l=e.origPixelData||e.getPixelData(),u=new Uint8Array(4*o),d=void 0,s=void 0;if(e.color=!0,e.falseColor=!0,e.origPixelData=l,t instanceof n.default.LookupTable)for(t.build();i<o;)d=l[i++],s=t.mapValue(d),u[a++]=s[0],u[a++]=s[1],u[a++]=s[2],u[a++]=s[3];else if(r<0)for(;i<o;)d=l[i++],u[a++]=t[d+-r][0],u[a++]=t[d+-r][1],u[a++]=t[d+-r][2],u[a++]=t[d+-r][3];else for(;i<o;)d=l[i++],u[a++]=t[d][0],u[a++]=t[d][1],u[a++]=t[d][2],u[a++]=t[d][3];e.rgba=!0,e.cachedLut=void 0,e.render=void 0,e.slope=1,e.intercept=0,e.minPixelValue=0,e.maxPixelValue=255,e.windowWidth=255,e.windowCenter=128,e.getPixelData=function(){return u}};var a=r(7),n=function(e){return e&&e.__esModule?e:{default:e}}(a)},function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(5);Object.defineProperty(t,"drawImage",{enumerable:!0,get:function(){return a(n).default}});var i=r(16);Object.defineProperty(t,"generateLut",{enumerable:!0,get:function(){return a(i).default}});var o=r(6);Object.defineProperty(t,"getDefaultViewport",{enumerable:!0,get:function(){return a(o).default}});var l=r(20);Object.defineProperty(t,"requestAnimationFrame",{enumerable:!0,get:function(){return a(l).default}});var u=r(21);Object.defineProperty(t,"storedPixelDataToCanvasImageData",{enumerable:!0,get:function(){return a(u).default}});var d=r(22);Object.defineProperty(t,"storedColorPixelDataToCanvasImageData",{enumerable:!0,get:function(){return a(d).default}});var s=r(23);Object.defineProperty(t,"storedPixelDataToCanvasImageDataColorLUT",{enumerable:!0,get:function(){return a(s).default}});var f=r(24);Object.defineProperty(t,"storedPixelDataToCanvasImageDataPseudocolorLUT",{enumerable:!0,get:function(){return a(f).default}});var c=r(45);Object.defineProperty(t,"internal",{enumerable:!0,get:function(){return a(c).default}});var m=r(26);Object.defineProperty(t,"renderLabelMapImage",{enumerable:!0,get:function(){return m.renderLabelMapImage}});var v=r(27);Object.defineProperty(t,"renderPseudoColorImage",{enumerable:!0,get:function(){return v.renderPseudoColorImage}});var g=r(8);Object.defineProperty(t,"renderColorImage",{enumerable:!0,get:function(){return g.renderColorImage}});var p=r(15);Object.defineProperty(t,"renderGrayscaleImage",{enumerable:!0,get:function(){return p.renderGrayscaleImage}});var h=r(38);Object.defineProperty(t,"renderWebImage",{enumerable:!0,get:function(){return h.renderWebImage}});var b=r(57);Object.defineProperty(t,"canvasToPixel",{enumerable:!0,get:function(){return a(b).default}});var w=r(58);Object.defineProperty(t,"disable",{enumerable:!0,get:function(){return a(w).default}});var y=r(59);Object.defineProperty(t,"displayImage",{enumerable:!0,get:function(){return a(y).default}});var x=r(61);Object.defineProperty(t,"draw",{enumerable:!0,get:function(){return a(x).default}});var _=r(62);Object.defineProperty(t,"drawInvalidated",{enumerable:!0,get:function(){return a(_).default}});var I=r(63);Object.defineProperty(t,"enable",{enumerable:!0,get:function(){return a(I).default}});var P=r(66);Object.defineProperty(t,"getElementData",{enumerable:!0,get:function(){return P.getElementData}}),Object.defineProperty(t,"removeElementData",{enumerable:!0,get:function(){return P.removeElementData}});var T=r(0);Object.defineProperty(t,"getEnabledElement",{enumerable:!0,get:function(){return T.getEnabledElement}}),Object.defineProperty(t,"addEnabledElement",{enumerable:!0,get:function(){return T.addEnabledElement}}),Object.defineProperty(t,"getEnabledElementsByImageId",{enumerable:!0,get:function(){return T.getEnabledElementsByImageId}}),Object.defineProperty(t,"getEnabledElements",{enumerable:!0,get:function(){return T.getEnabledElements}});var C=r(28);Object.defineProperty(t,"addLayer",{enumerable:!0,get:function(){return C.addLayer}}),Object.defineProperty(t,"removeLayer",{enumerable:!0,get:function(){return C.removeLayer}}),Object.defineProperty(t,"getLayer",{enumerable:!0,get:function(){return C.getLayer}}),Object.defineProperty(t,"getLayers",{enumerable:!0,get:function(){return C.getLayers}}),Object.defineProperty(t,"getVisibleLayers",{enumerable:!0,get:function(){return C.getVisibleLayers}}),Object.defineProperty(t,"setActiveLayer",{enumerable:!0,get:function(){return C.setActiveLayer}}),Object.defineProperty(t,"getActiveLayer",{enumerable:!0,get:function(){return C.getActiveLayer}}),Object.defineProperty(t,"setLayerImage",{enumerable:!0,get:function(){return C.setLayerImage}});var E=r(40);Object.defineProperty(t,"fitToWindow",{enumerable:!0,get:function(){return a(E).default}});var L=r(67);Object.defineProperty(t,"getDefaultViewportForImage",{enumerable:!0,get:function(){return a(L).default}});var M=r(68);Object.defineProperty(t,"getImage",{enumerable:!0,get:function(){return a(M).default}});var O=r(69);Object.defineProperty(t,"getPixels",{enumerable:!0,get:function(){return a(O).default}});var j=r(41);Object.defineProperty(t,"getStoredPixels",{enumerable:!0,get:function(){return a(j).default}});var R=r(70);Object.defineProperty(t,"getViewport",{enumerable:!0,get:function(){return a(R).default}});var A=r(71);Object.defineProperty(t,"loadImage",{enumerable:!0,get:function(){return A.loadImage}}),Object.defineProperty(t,"loadAndCacheImage",{enumerable:!0,get:function(){return A.loadAndCacheImage}}),Object.defineProperty(t,"registerImageLoader",{enumerable:!0,get:function(){return A.registerImageLoader}}),Object.defineProperty(t,"registerUnknownImageLoader",{enumerable:!0,get:function(){return A.registerUnknownImageLoader}});var S=r(72);Object.defineProperty(t,"invalidate",{enumerable:!0,get:function(){return a(S).default}});var D=r(73);Object.defineProperty(t,"invalidateImageId",{enumerable:!0,get:function(){return a(D).default}});var U=r(74);Object.defineProperty(t,"pageToPixel",{enumerable:!0,get:function(){return a(U).default}});var V=r(75);Object.defineProperty(t,"pixelToCanvas",{enumerable:!0,get:function(){return a(V).default}});var B=r(76);Object.defineProperty(t,"reset",{enumerable:!0,get:function(){return a(B).default}});var F=r(39);Object.defineProperty(t,"resize",{enumerable:!0,get:function(){return a(F).default}});var z=r(3);Object.defineProperty(t,"setToPixelCoordinateSystem",{enumerable:!0,get:function(){return a(z).default}});var k=r(77);Object.defineProperty(t,"setViewport",{enumerable:!0,get:function(){return a(k).default}});var W=r(4);Object.defineProperty(t,"updateImage",{enumerable:!0,get:function(){return a(W).default}});var N=r(43);Object.defineProperty(t,"pixelDataToFalseColorData",{enumerable:!0,get:function(){return a(N).default}});var G=r(78);Object.defineProperty(t,"rendering",{enumerable:!0,get:function(){return a(G).default}});var H=r(42);Object.defineProperty(t,"imageCache",{enumerable:!0,get:function(){return a(H).default}});var X=r(79);Object.defineProperty(t,"metaData",{enumerable:!0,get:function(){return a(X).default}});var q=r(13);Object.defineProperty(t,"webGL",{enumerable:!0,get:function(){return a(q).default}});var Y=r(7);Object.defineProperty(t,"colors",{enumerable:!0,get:function(){return a(Y).default}});var K=r(80);Object.defineProperty(t,"convertImageToFalseColorImage",{enumerable:!0,get:function(){return K.convertImageToFalseColorImage}}),Object.defineProperty(t,"convertToFalseColorImage",{enumerable:!0,get:function(){return K.convertToFalseColorImage}}),Object.defineProperty(t,"restoreImage",{enumerable:!0,get:function(){return K.restoreImage}});var J=r(14);Object.defineProperty(t,"events",{enumerable:!0,get:function(){return a(J).default}});var Q=r(2);Object.defineProperty(t,"triggerEvent",{enumerable:!0,get:function(){return a(Q).default}})},function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(5),i=a(n),o=r(16),l=a(o),u=r(6),d=a(u),s=r(20),f=a(s),c=r(21),m=a(c),v=r(33),g=a(v),p=r(22),h=a(p),b=r(23),w=a(b),y=r(24),x=a(y),_=r(9),I=a(_),P=r(25),T=a(P),C=r(34);t.default={drawImage:i.default,generateLut:l.default,getDefaultViewport:d.default,requestAnimationFrame:f.default,storedPixelDataToCanvasImageData:m.default,storedPixelDataToCanvasImageDataRGBA:g.default,storedPixelDataToCanvasImageDataColorLUT:w.default,storedPixelDataToCanvasImageDataPseudocolorLUT:x.default,storedColorPixelDataToCanvasImageData:h.default,getTransform:I.default,calculateTransform:T.default,Transform:C.Transform}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){return!e&&!t||!(!e||!t)&&e.id===t.id}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r,a,i){var o=e.maxPixelValue,l=e.minPixelValue,u=Math.min(l,0);if(void 0===e.cachedLut){var d=o-u+1;e.cachedLut={},e.cachedLut.lutArray=new Uint8ClampedArray(d)}var s=e.cachedLut.lutArray,f=(0,n.default)(t,r,i);if(!0===a)for(var c=l;c<=o;c++)s[c+-u]=255-f(c);else for(var m=l;m<=o;m++)s[m+-u]=f(m);return s};var a=r(18),n=function(e){return e&&e.__esModule?e:{default:e}}(a)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r){var a=(0,n.default)(),i=e.getPixelData();e.stats.lastGetPixelDataTime=(0,n.default)()-a;var o=e.minPixelValue,l=0,u=0,d=i.length;if(a=(0,n.default)(),o<0)for(;u<d;)r[l++]=t[i[u++]+-o],r[l++]=t[i[u++]+-o],r[l++]=t[i[u++]+-o],r[l++]=i[u++];else for(;u<d;)r[l++]=t[i[u++]],r[l++]=t[i[u++]],r[l++]=t[i[u++]],r[l++]=i[u++];e.stats.lastStoredPixelDataToCanvasImageDataTime=(0,n.default)()-a};var a=r(1),n=function(e){return e&&e.__esModule?e:{default:e}}(a)},function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function n(){return S}function i(){for(var e in x.shaders){var t=x.shaders[e];t.attributes={},t.uniforms={},t.vert=_.vertexShader,t.program=(0,C.default)(D,t.vert,t.frag),t.attributes.texCoordLocation=D.getAttribLocation(t.program,"a_texCoord"),D.enableVertexAttribArray(t.attributes.texCoordLocation),t.attributes.positionLocation=D.getAttribLocation(t.program,"a_position"),D.enableVertexAttribArray(t.attributes.positionLocation),t.uniforms.resolutionLocation=D.getUniformLocation(t.program,"u_resolution")}}function o(){!0!==B&&s(S)&&(g(),i(),t.isWebGLInitialized=B=!0)}function l(e,t,r){e.bufferData(e.ARRAY_BUFFER,new Float32Array([t,r,0,r,t,0,0,0]),e.STATIC_DRAW)}function u(e){e.preventDefault(),console.warn("WebGL Context Lost!")}function d(e){e.preventDefault(),t.isWebGLInitialized=B=!1,P.default.purgeCache(),o()}function s(e){D=null;try{var t={preserveDrawingBuffer:!0};D=e.getContext("webgl",t)||e.getContext("experimental-webgl",t),e.removeEventListener("webglcontextlost",u,!1),e.addEventListener("webglcontextlost",u,!1),e.removeEventListener("webglcontextrestored",d,!1),e.addEventListener("webglcontextrestored",d,!1)}catch(e){throw new Error("Error creating WebGL context")}return D||(console.error("Unable to initialize WebGL. Your browser may not support it."),D=null),D}function f(e,t){if(e.color)return"rgb";var r=t&&t.voi&&t.voi.minMax?t.voi.minMax:{min:e.minPixelValue,max:e.maxPixelValue},a="int";return r.min>=0&&(a="u"+a),r.max>255?a+="16":a+="8",a}function c(e,t){var r=f(e,t);return x.shaders.hasOwnProperty(r)?x.shaders[r]:x.shaders.rgb}function m(e,t,r,a){var n={uint8:D.LUMINANCE,int8:D.LUMINANCE_ALPHA,uint16:D.LUMINANCE_ALPHA,int16:D.RGB,rgb:D.RGB},i={int8:1,uint16:2,int16:3,rgb:3},o=f(e,t),l=n[o],u=D.createTexture();D.bindTexture(D.TEXTURE_2D,u),D.texParameteri(D.TEXTURE_2D,D.TEXTURE_MIN_FILTER,D.NEAREST),D.texParameteri(D.TEXTURE_2D,D.TEXTURE_MAG_FILTER,D.NEAREST),D.texParameteri(D.TEXTURE_2D,D.TEXTURE_WRAP_S,D.CLAMP_TO_EDGE),D.texParameteri(D.TEXTURE_2D,D.TEXTURE_WRAP_T,D.CLAMP_TO_EDGE),D.pixelStorei(D.UNPACK_ALIGNMENT,1);var d=x.dataUtilities[o].storedPixelDataToImageData(e,r,a);return D.texImage2D(D.TEXTURE_2D,0,l,e.width,e.height,0,l,D.UNSIGNED_BYTE,d),{texture:u,sizeInBytes:e.width*e.height*i[o]}}function v(e,t,r,a){var n=P.default.getImageTexture(e.imageId);return n||(n=m(e,t,r,a),P.default.putImageTexture(e,n)),n.texture}function g(){V=D.createBuffer(),D.bindBuffer(D.ARRAY_BUFFER,V),D.bufferData(D.ARRAY_BUFFER,new Float32Array([1,1,0,1,1,0,0,0]),D.STATIC_DRAW),U=D.createBuffer(),D.bindBuffer(D.ARRAY_BUFFER,U),D.bufferData(D.ARRAY_BUFFER,new Float32Array([1,1,0,1,1,0,0,0]),D.STATIC_DRAW)}function p(e,t,r,a,n){D.clearColor(1,0,0,1),D.viewport(0,0,a,n),D.clear(D.COLOR_BUFFER_BIT|D.DEPTH_BUFFER_BIT),D.useProgram(e.program),D.bindBuffer(D.ARRAY_BUFFER,U),D.vertexAttribPointer(e.attributes.texCoordLocation,2,D.FLOAT,!1,0,0),D.bindBuffer(D.ARRAY_BUFFER,V),D.vertexAttribPointer(e.attributes.positionLocation,2,D.FLOAT,!1,0,0);for(var i in t){var o=D.getUniformLocation(e.program,i);if(o){var u=t[i],d=u.type,s=u.value;"i"===d?D.uniform1i(o,s):"f"===d?D.uniform1f(o,s):"2f"===d&&D.uniform2f(o,s[0],s[1])}}l(D,a,n),D.activeTexture(D.TEXTURE0),D.bindTexture(D.TEXTURE_2D,r),D.drawArrays(D.TRIANGLE_STRIP,0,4)}function h(e){var t=e.minMax,r=t.min,a=t.max,n=e.firstValueMapped+e.lut.length;return function(t){return t<e.firstValueMapped?r:t>=n?a:e.lut[t]}}function b(e){var t=e.minMax,r=t.min,a=t.max,n=e.firstValueMapped+e.lut.length-1;return function(t){return t<e.firstValueMapped?r:t>=n?a:e.lut[t]}}function w(e){var t=e.image;S.width=t.width,S.height=t.height;var r=e.viewport;(0,L.default)(t,r);var a=(0,O.default)(),n=void 0!==r.modalityLUT&&void 0!==r.modalityLUT.lut?h(r.modalityLUT):void 0,i=void 0!==r.voiLUT&&void 0!==r.voiLUT.lut?b(r.voiLUT):void 0;t.stats=t.stats||{},t.stats.lastLutGenerateTime=(0,O.default)()-a;var o=c(t,r),l=v(t,r,n,i);return p(o,{u_resolution:{type:"2f",value:[t.width,t.height]},wc:{type:"f",value:r.voi.windowCenter},ww:{type:"f",value:r.voi.windowWidth},slope:{type:"f",value:t.slope},intercept:{type:"f",value:t.intercept},minPixelValue:{type:"f",value:t.minPixelValue},invert:{type:"i",value:r.invert?1:0}},l,t.width,t.height),S}function y(){var e={failIfMajorPerformanceCaveat:!0};try{var t=document.createElement("canvas");return Boolean(window.WebGLRenderingContext)&&(t.getContext("webgl",e)||t.getContext("experimental-webgl",e))}catch(e){return!1}}Object.defineProperty(t,"__esModule",{value:!0}),t.isWebGLInitialized=void 0,t.getRenderCanvas=n,t.initRenderer=o,t.render=w,t.isWebGLAvailable=y;var x=r(50),_=r(56),I=r(36),P=a(I),T=r(37),C=a(T),E=r(29),L=a(E),M=r(1),O=a(M),j=r(17),R=(a(j),r(18)),A=(a(R),r(30)),S=(a(A),document.createElement("canvas")),D=void 0,U=void 0,V=void 0,B=!1;t.isWebGLInitialized=B},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.dataUtilities=t.shaders=void 0;var a=r(51),n=r(52),i=r(53),o=r(54),l=r(55),u={int16:a.int16Shader,int8:n.int8Shader,rgb:i.rgbShader,uint16:o.uint16Shader,uint8:l.uint8Shader},d={int16:a.int16DataUtilities,int8:n.int8DataUtilities,rgb:i.rgbDataUtilities,uint16:o.uint16DataUtilities,uint8:l.uint8DataUtilities};t.shaders=u,t.dataUtilities=d},function(e,t,r){"use strict";function a(e,t,r){for(var a=e.getPixelData(),n=new Uint8Array(e.width*e.height*3),o=void 0!==e.pixelRepresentation&&1===e.pixelRepresentation,l=o&&void 0!==e.bitsStored?32-e.bitsStored:void 0,u=0,d=0;d<a.length;d++){var s=(0,i.default)(d,a,l);"MONOCHROME1"===e.photometricInterpretation&&(s=e.maxPixelValue-s),t&&(s=t(s)),r&&(s=r(s));var f=Math.abs(s);n[u++]=255&f,n[u++]=f>>8,n[u++]=s<0?0:1}return n}Object.defineProperty(t,"__esModule",{value:!0}),t.int16Shader=t.int16DataUtilities=void 0;var n=r(19),i=function(e){return e&&e.__esModule?e:{default:e}}(n),o={};t.int16DataUtilities={storedPixelDataToImageData:a};o.frag="precision mediump float;uniform sampler2D u_image;uniform float ww;uniform float wc;uniform float slope;uniform float intercept;uniform int invert;varying vec2 v_texCoord;void main() {vec4 color = texture2D(u_image, v_texCoord);float intensity = color.r*256.0 + color.g*65536.0;if (color.b == 0.0)intensity = -intensity;intensity = intensity * slope + intercept;float center0 = wc - 0.5;float width0 = max(ww, 1.0);intensity = (intensity - center0) / width0 + 0.5;intensity = clamp(intensity, 0.0, 1.0);gl_FragColor = vec4(intensity, intensity, intensity, 1.0);if (invert == 1)gl_FragColor.rgb = 1.0 - gl_FragColor.rgb;}",t.int16Shader=o},function(e,t,r){"use strict";function a(e,t,r){for(var a=e.getPixelData(),n=new Uint8Array(e.width*e.height*2),i=0,o=0;o<a.length;o++){var l=a[o];"MONOCHROME1"===e.photometricInterpretation&&(l=e.maxPixelValue-l),t&&(l=t(l)),r&&(l=r(l)),n[i++]=l,n[i++]=l<0?0:1}return n}Object.defineProperty(t,"__esModule",{value:!0});var n={};t.int8DataUtilities={storedPixelDataToImageData:a};n.frag="precision mediump float;uniform sampler2D u_image;uniform float ww;uniform float wc;uniform float slope;uniform float intercept;uniform int invert;varying vec2 v_texCoord;void main() {vec4 color = texture2D(u_image, v_texCoord);float intensity = color.r*256.;if (color.a == 0.0)intensity = -intensity;intensity = intensity * slope + intercept;float center0 = wc - 0.5;float width0 = max(ww, 1.0);intensity = (intensity - center0) / width0 + 0.5;intensity = clamp(intensity, 0.0, 1.0);gl_FragColor = vec4(intensity, intensity, intensity, 1.0);if (invert == 1)gl_FragColor.rgb = 1.0 - gl_FragColor.rgb;}",t.int8Shader=n},function(e,t,r){"use strict";function a(e){var t=e.minPixelValue,r=0,a=0,n=e.width*e.height*4,i=e.width*e.height*3,o=e.getPixelData(),l=new Uint8Array(i);if(t<0)for(;a<n;)l[r++]=o[a++]+-t,l[r++]=o[a++]+-t,l[r++]=o[a++]+-t,a+=1;else for(;a<n;)l[r++]=o[a++],l[r++]=o[a++],l[r++]=o[a++],a+=1;return l}Object.defineProperty(t,"__esModule",{value:!0});var n={};t.rgbDataUtilities={storedPixelDataToImageData:a};n.frag="precision mediump float;uniform sampler2D u_image;uniform float ww;uniform float wc;uniform float slope;uniform float intercept;uniform float minPixelValue;uniform int invert;varying vec2 v_texCoord;void main() {vec3 color = texture2D(u_image, v_texCoord).xyz;color = color * 256.0 * slope + intercept;float center0 = wc - 0.5 - minPixelValue;float width0 = max(ww, 1.0);color = (color - center0) / width0 + 0.5;gl_FragColor = vec4(color, 1);if (invert == 1)gl_FragColor.rgb = 1. - gl_FragColor.rgb;}",t.rgbShader=n},function(e,t,r){"use strict";function a(e,t,r){for(var a=e.getPixelData(),n=new Uint8Array(e.width*e.height*2),i=0,o=0;o<a.length;o++){var l=a[o];"MONOCHROME1"===e.photometricInterpretation&&(l=e.maxPixelValue-l),t&&(l=t(l)),r&&(l=r(l)),n[i++]=255&l,n[i++]=l>>8}return n}Object.defineProperty(t,"__esModule",{value:!0});var n={};t.uint16DataUtilities={storedPixelDataToImageData:a};n.frag="precision mediump float;uniform sampler2D u_image;uniform float ww;uniform float wc;uniform float slope;uniform float intercept;uniform int invert;varying vec2 v_texCoord;void main() {vec4 color = texture2D(u_image, v_texCoord);float intensity = color.r*256.0 + color.a*65536.0;intensity = intensity * slope + intercept;float center0 = wc - 0.5;float width0 = max(ww, 1.0);intensity = (intensity - center0) / width0 + 0.5;intensity = clamp(intensity, 0.0, 1.0);gl_FragColor = vec4(intensity, intensity, intensity, 1.0);if (invert == 1)gl_FragColor.rgb = 1.0 - gl_FragColor.rgb;}",t.uint16Shader=n},function(e,t,r){"use strict";function a(e,t,r){if(t||r){for(var a=e.getPixelData(),n=new Uint8Array(a.length),i=0;i<a.length;i++){var o=a[i];"MONOCHROME1"===e.photometricInterpretation&&(o=e.maxPixelValue-o),t&&(o=t(o)),r&&(o=r(o)),n[i]=o}return n}return"MONOCHROME1"===e.photometricInterpretation&&e.getPixelData().map(function(t){return e.maxPixelValue-t}),e.getPixelData()}Object.defineProperty(t,"__esModule",{value:!0});var n={};t.uint8DataUtilities={storedPixelDataToImageData:a};n.frag="precision mediump float;uniform sampler2D u_image;uniform float ww;uniform float wc;uniform float slope;uniform float intercept;uniform int invert;varying vec2 v_texCoord;void main() {vec4 color = texture2D(u_image, v_texCoord);float intensity = color.r*256.0;intensity = intensity * slope + intercept;float center0 = wc - 0.5;float width0 = max(ww, 1.0);intensity = (intensity - center0) / width0 + 0.5;intensity = clamp(intensity, 0.0, 1.0);gl_FragColor = vec4(intensity, intensity, intensity, 1.0);if (invert == 1)gl_FragColor.rgb = 1.0 - gl_FragColor.rgb;}",t.uint8Shader=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.vertexShader="attribute vec2 a_position;attribute vec2 a_texCoord;uniform vec2 u_resolution;varying vec2 v_texCoord;void main() {vec2 zeroToOne = a_position / u_resolution;vec2 zeroToTwo = zeroToOne * 2.0;vec2 clipSpace = zeroToTwo - 1.0;gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);v_texCoord = a_texCoord;}"},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var r=(0,a.getEnabledElement)(e),n=(0,i.default)(r);return n.invert(),n.transformPoint(t.x,t.y)};var a=r(0),n=r(9),i=function(e){return e&&e.__esModule?e:{default:e}}(n)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(void 0===e)throw new Error("disable: element must not be undefined");for(var t=(0,a.getEnabledElements)(),r=0;r<t.length;r++)if(t[r].element===e){var n={element:e};(0,i.default)(e,"cornerstoneelementdisabled",n),t[r].element.removeChild(t[r].canvas),t[r].canvas=void 0,t.splice(r,1);break}};var a=r(0),n=r(2),i=function(e){return e&&e.__esModule?e:{default:e}}(n)},function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r){if(void 0===e)throw new Error("displayImage: parameter element must not be undefined");if(void 0===t)throw new Error("displayImage: parameter image must not be undefined");var a=(0,n.getEnabledElement)(e),i=a.image;if(a.image=t,a.layers&&a.layers.length&&(0,f.setLayerImage)(e,t),void 0===a.viewport&&(a.viewport=(0,o.default)(a.canvas,t)),r)for(var l in r)null!==r[l]&&(a.viewport[l]=r[l]);var d=void 0;if(void 0!==a.lastImageTimeStamp){d=(1e3/((0,s.default)()-a.lastImageTimeStamp)).toFixed()}a.lastImageTimeStamp=(0,s.default)();var c={viewport:a.viewport,element:a.element,image:a.image,oldImage:i,enabledElement:a,frameRate:d};(0,m.default)(a.element,"cornerstonenewimage",c),(0,u.default)(e)};var n=r(0),i=r(6),o=a(i),l=r(4),u=a(l),d=r(1),s=a(d),f=r(28),c=r(2),m=a(c)},function(e,t,r){"use strict";function a(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return a()+a()+"-"+a()+"-"+a()+"-"+a()+"-"+a()+a()+a()}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=(0,a.getEnabledElement)(e);if(void 0===t.image)throw new Error("draw: image has not been loaded yet");(0,i.default)(t)};var a=r(0),n=r(5),i=function(e){return e&&e.__esModule?e:{default:e}}(n)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){for(var e=(0,a.getEnabledElements)(),t=0;t<e.length;t++){var r=e[t];!0===r.invalid&&(0,i.default)(r,!0)}};var a=r(0),n=r(5),i=function(e){return e&&e.__esModule?e:{default:e}}(n)},function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function n(e){return void 0!==e.image||e.layers.length}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){function r(e){if(void 0!==o.canvas){var t={enabledElement:o,timestamp:e};(0,g.default)(o.element,"cornerstoneprerender",t),o.needsRedraw&&n(o)&&(0,d.default)(o,o.invalid),(0,f.default)(r)}}if(void 0===e)throw new Error("enable: parameter element cannot be undefined");t&&t.renderer&&"webgl"===t.renderer.toLowerCase()&&(m.default.renderer.isWebGLAvailable()?(m.default.renderer.initRenderer(),t.renderer="webgl"):(console.error("WebGL not available, falling back to Canvas renderer"),delete t.renderer));var a=document.createElement("canvas");e.appendChild(a);var o={element:e,canvas:a,image:void 0,invalid:!1,needsRedraw:!0,options:t,layers:[],data:{},renderingTools:{}};(0,i.addEnabledElement)(o),(0,l.default)(e,!0),r()};var i=r(0),o=r(39),l=a(o),u=r(64),d=a(u),s=r(20),f=a(s),c=r(13),m=a(c),v=r(2),g=a(v)},function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var r=e.image,a=e.element,n=e.layers||[];if(e.canvas&&(e.image||n.length)){var o=(0,i.default)();if(r.stats={lastGetPixelDataTime:-1,lastStoredPixelDataToCanvasImageDataTime:-1,lastPutImageDataTime:-1,lastRenderTime:-1,lastLutGenerateTime:-1},n&&n.length)(0,l.default)(e,t);else if(r){var c=r.render;c||(c=e.viewport.colormap&&""!==e.viewport.colormap&&!0===e.image.labelmap?f.renderLabelMapImage:e.viewport.colormap&&""!==e.viewport.colormap?s.renderPseudoColorImage:r.color?u.renderColorImage:d.renderGrayscaleImage),c(e,t)}var v=(0,i.default)()-o,g={viewport:e.viewport,element:a,image:r,enabledElement:e,canvasContext:e.canvas.getContext("2d"),renderTimeInMs:v};r.stats.lastRenderTime=v,e.invalid=!1,e.needsRedraw=!1,(0,m.default)(a,"cornerstoneimagerendered",g)}};var n=r(1),i=a(n),o=r(65),l=a(o),u=r(8),d=r(15),s=r(27),f=r(26),c=r(2),m=a(c)},function(e,t,r){"use strict";function a(e,t){return m[t]/m[e]}function n(e,t){e.forEach(function(e){if(e!==t&&e.viewport&&t.viewport){m[e.layerId]||(m[e.layerId]=e.viewport.scale);var r=a(t.layerId,e.layerId);e.viewport.scale=t.viewport.scale*r,e.viewport.rotation=t.viewport.rotation,e.viewport.translation={x:t.viewport.translation.x/r,y:t.viewport.translation.y/r},e.viewport.hflip=t.viewport.hflip,e.viewport.vflip=t.viewport.vflip}})}function i(e,t,r){t.forEach(function(t,a){if(t.image){e.save(),t.canvas=e.canvas,(0,c.default)(t,e);var n=t.viewport.colormap||t.options.colormap,i=t.viewport.labelmap,o=t.invalid||r;if(n&&""!==n&&!0===i)(0,s.addLabelMapLayer)(t,o);else if(n&&""!==n)(0,d.addPseudoColorLayer)(t,o);else if(!0===t.image.color)(0,u.addColorLayer)(t,o);else{var f=0===a;(0,l.addGrayscaleLayer)(t,o,f)}t.options&&t.options.opacity?e.globalAlpha=t.options.opacity:e.globalAlpha=1,t.options&&t.options.fillStyle&&(e.fillStyle=t.options.fillStyle),e.imageSmoothingEnabled=!t.viewport.pixelReplication,e.mozImageSmoothingEnabled=e.imageSmoothingEnabled;var m=t.viewport.displayedArea.tlhc.x-1,v=t.viewport.displayedArea.tlhc.y-1,g=t.viewport.displayedArea.brhc.x-t.viewport.displayedArea.tlhc.x,p=t.viewport.displayedArea.brhc.y-t.viewport.displayedArea.tlhc.y;e.drawImage(t.canvas,m,v,g,p,0,0,g,p),e.restore(),t.invalid=!1}})}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var r=e.element,a=(0,o.getLayers)(r),l=(0,o.getActiveLayer)(r),u=(0,o.getVisibleLayers)(r),d=!e.lastSyncViewportsState&&e.syncViewports;e.lastSyncViewportsState=e.syncViewports,d&&a.forEach(function(e){e.viewport&&(m[e.layerId]=e.viewport.scale)}),!0===e.syncViewports&&n(u,l);var s=e.canvas.getContext("2d");s.setTransform(1,0,0,1,0,0),s.fillStyle="black",s.fillRect(0,0,e.canvas.width,e.canvas.height),i(s,u,t)};var o=r(28),l=r(15),u=r(8),d=r(27),s=r(26),f=r(3),c=function(e){return e&&e.__esModule?e:{default:e}}(f),m={}},function(e,t,r){"use strict";function a(e,t){var r=(0,i.getEnabledElement)(e);return!1===r.data.hasOwnProperty(t)&&(r.data[t]={}),r.data[t]}function n(e,t){delete(0,i.getEnabledElement)(e).data[t]}Object.defineProperty(t,"__esModule",{value:!0}),t.getElementData=a,t.removeElementData=n;var i=r(0)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var r=(0,a.getEnabledElement)(e);return(0,i.default)(r.canvas,t)};var a=r(0),n=r(6),i=function(e){return e&&e.__esModule?e:{default:e}}(n)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return(0,a.getEnabledElement)(e).image};var a=r(0)},function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r,a,i){var l=(0,o.default)(e,t,r,a,i),d=(0,n.getEnabledElement)(e),s=(0,u.default)(d.image.slope,d.image.intercept,d.viewport.modalityLUT);return l.map(s)};var n=r(0),i=r(41),o=a(i),l=r(17),u=a(l)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=(0,a.getEnabledElement)(e),r=t.viewport;if(void 0!==r)return Object.assign({},r)};var a=r(0)},function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function n(e,t){var r=e.indexOf(":"),a=e.substring(0,r),n=v[a];if(void 0===n||null===n){if(void 0!==g)return g(e);throw new Error("loadImageFromImageLoader: no image loader for imageId")}var i=n(e,t);return i.promise.then(function(e){(0,m.default)(f.default,"cornerstoneimageloaded",{image:e})},function(t){var r={imageId:e,error:t};(0,m.default)(f.default,"cornerstoneimageloadfailed",r)}),i}function i(e,t){if(void 0===e)throw new Error("loadImage: parameter imageId must not be undefined");var r=(0,d.getImageLoadObject)(e);return void 0!==r?r.promise:n(e,t).promise}function o(e,t){if(void 0===e)throw new Error("loadAndCacheImage: parameter imageId must not be undefined");var r=(0,d.getImageLoadObject)(e);return void 0!==r?r.promise:(r=n(e,t),(0,d.putImageLoadObject)(e,r),r.promise)}function l(e,t){v[e]=t}function u(e){var t=g;return g=e,t}Object.defineProperty(t,"__esModule",{value:!0}),t.loadImage=i,t.loadAndCacheImage=o,t.registerImageLoader=l,t.registerUnknownImageLoader=u;var d=r(42),s=r(14),f=a(s),c=r(2),m=a(c),v={},g=void 0},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=(0,a.getEnabledElement)(e);t.invalid=!0,t.needsRedraw=!0;var r={element:e};(0,i.default)(e,"cornerstoneinvalidated",r)};var a=r(0),n=r(2),i=function(e){return e&&e.__esModule?e:{default:e}}(n)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){(0,a.getEnabledElementsByImageId)(e).forEach(function(e){(0,i.default)(e,!0)})};var a=r(0),n=r(5),i=function(e){return e&&e.__esModule?e:{default:e}}(n)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r){var n=(0,a.getEnabledElement)(e);if(void 0===n.image)throw new Error("image has not been loaded yet");var o=e.getBoundingClientRect(),l=t-o.left-window.pageXOffset,u=r-o.top-window.pageYOffset,d={x:l,y:u},s=(0,i.default)(n);return s.invert(),s.transformPoint(d.x,d.y)};var a=r(0),n=r(9),i=function(e){return e&&e.__esModule?e:{default:e}}(n)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var r=(0,a.getEnabledElement)(e);return(0,i.default)(r).transformPoint(t.x,t.y)};var a=r(0),n=r(9),i=function(e){return e&&e.__esModule?e:{default:e}}(n)},function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=(0,n.getEnabledElement)(e);t.viewport=(0,o.default)(t.canvas,t.image),(0,u.default)(e)};var n=r(0),i=r(6),o=a(i),l=r(4),u=a(l)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var r=(0,a.getEnabledElement)(e);r.viewport.translation.x=t.translation.x,r.viewport.translation.y=t.translation.y,r.viewport.voi.windowCenter=t.voi.windowCenter,r.viewport.invert=t.invert,r.viewport.pixelReplication=t.pixelReplication,r.viewport.rotation=t.rotation,r.viewport.hflip=t.hflip,r.viewport.vflip=t.vflip,r.viewport.modalityLUT=t.modalityLUT,r.viewport.voiLUT=t.voiLUT,r.viewport.colormap=t.colormap,r.viewport.labelmap=t.labelmap,r.viewport.voi.windowWidth=Math.max(t.voi.windowWidth,o),r.viewport.scale=Math.max(t.scale,l),r.viewport.rotation%=360,r.viewport.rotation<0&&(r.viewport.rotation+=360),(0,i.default)(e)};var a=r(0),n=r(4),i=function(e){return e&&e.__esModule?e:{default:e}}(n),o=1e-6,l=1e-4},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(8),n=r(15),i=r(38);t.default={colorImage:a.renderColorImage,grayscaleImage:n.renderGrayscaleImage,webImage:i.renderWebImage}},function(e,t,r){"use strict";function a(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=void 0;for(r=0;r<o.length&&!(o[r].priority<=t);r++);o.splice(r,0,{priority:t,provider:e})}function n(e){for(var t=0;t<o.length;t++)if(o[t].provider===e){o.splice(t,1);break}}function i(e,t){for(var r=0;r<o.length;r++){var a=o[r].provider(e,t);if(void 0!==a)return a}}Object.defineProperty(t,"__esModule",{value:!0}),t.addProvider=a,t.removeProvider=n;var o=[];t.default={addProvider:a,removeProvider:n,get:i}},function(e,t,r){"use strict";function a(e){for(var t=Number.MAX_VALUE,r=Number.MIN_VALUE,a=e.length,n=void 0,i=0;i<a;i++)n=e[i],t=t<n?t:n,r=r>n?r:n;return{minPixelValue:t,maxPixelValue:r}}function n(e){if(e.restore)return e.restore;var t=e.color,r=e.rgba,a=e.cachedLut,n=e.slope,i=e.windowWidth,o=e.windowCenter,l=e.minPixelValue,u=e.maxPixelValue;return function(){if(e.color=t,e.rgba=r,e.cachedLut=a,e.slope=n,e.windowWidth=i,e.windowCenter=o,e.minPixelValue=l,e.maxPixelValue=u,e.origPixelData){var d=e.origPixelData;e.getPixelData=function(){return d}}e.origPixelData=void 0,e.colormapId=void 0,e.falseColor=void 0}}function i(e){return e&&"string"==typeof e&&(e=(0,c.getColormap)(e)),e}function o(e){return!(!e.restore||"function"!=typeof e.restore)&&(e.restore(),!0)}function l(e,t){if(e.color&&!e.falseColor)throw new Error("Color transforms are not implemented yet");t=i(t);var r=t.getId();if(e.colormapId===r)return!1;if(o(e),r){var l=e.minPixelValue||0,u=e.maxPixelValue||255;e.restore=n(e);var d=t.createLookupTable();d.setTableRange(l,u),(0,f.default)(e,d);var s=a(e.getPixelData());e.minPixelValue=s.minPixelValue,e.maxPixelValue=s.maxPixelValue,e.windowWidth=255,e.windowCenter=128,e.colormapId=r}return!0}function u(e,t){return l((0,d.getEnabledElement)(e).image,t)}Object.defineProperty(t,"__esModule",{value:!0}),t.restoreImage=t.convertToFalseColorImage=t.convertImageToFalseColorImage=void 0;var d=r(0),s=r(43),f=function(e){return e&&e.__esModule?e:{default:e}}(s),c=r(31);t.convertImageToFalseColorImage=l,t.convertToFalseColorImage=u,t.restoreImage=o}])});
//# sourceMappingURL=cornerstone.min.js.map
/*! cornerstone-math - 0.1.6 - 2017-06-09 | (c) 2017 Chris Hafey | https://github.com/chafey/cornerstoneTools */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("cornerstoneMath",[],e):"object"==typeof exports?exports.cornerstoneMath=e():t.cornerstoneMath=e()}(this,function(){return function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=9)}([function(t,e,n){"use strict";function i(t,e,n){return t<e?e:t>n?n:t}function r(t){return t*(Math.PI/180)}function o(t){return t*(180/Math.PI)}function s(t){return"number"==typeof t?t?t<0?-1:1:t===t?0:NaN:NaN}Object.defineProperty(e,"__esModule",{value:!0}),e.clamp=i,e.degToRad=r,e.radToDeg=o,e.sign=s},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(3),r=function(t){return t&&t.__esModule?t:{default:t}}(i),o=n(0),s=function(t,e,n){this.x=t||0,this.y=e||0,this.z=n||0};s.prototype={constructor:s,set:function(t,e,n){return this.x=t,this.y=e,this.z=n,this},setX:function(t){return this.x=t,this},setY:function(t){return this.y=t,this},setZ:function(t){return this.z=t,this},setComponent:function(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}},getComponent:function(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}},copy:function(t){return this.x=t.x,this.y=t.y,this.z=t.z,this},add:function(t,e){return void 0!==e?(console.warn("DEPRECATED: Vector3's .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,e)):(this.x+=t.x,this.y+=t.y,this.z+=t.z,this)},addScalar:function(t){return this.x+=t,this.y+=t,this.z+=t,this},addVectors:function(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this},sub:function(t,e){return void 0!==e?(console.warn("DEPRECATED: Vector3's .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,e)):(this.x-=t.x,this.y-=t.y,this.z-=t.z,this)},subVectors:function(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this},multiply:function(t,e){return void 0!==e?(console.warn("DEPRECATED: Vector3's .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(t,e)):(this.x*=t.x,this.y*=t.y,this.z*=t.z,this)},multiplyScalar:function(t){return this.x*=t,this.y*=t,this.z*=t,this},multiplyVectors:function(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this},applyAxisAngle:function(){var t=void 0;return function(e,n){return void 0===t&&(t=new r.default),this.applyQuaternion(t.setFromAxisAngle(e,n)),this}}(),applyMatrix3:function(t){var e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this},applyMatrix4:function(t){var e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i+r[12],this.y=r[1]*e+r[5]*n+r[9]*i+r[13],this.z=r[2]*e+r[6]*n+r[10]*i+r[14],this},applyProjection:function(t){var e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this},applyQuaternion:function(t){var e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,s=t.z,a=t.w,h=a*e+o*i-s*n,u=a*n+s*e-r*i,c=a*i+r*n-o*e,l=-r*e-o*n-s*i;return this.x=h*a+l*-r+u*-s-c*-o,this.y=u*a+l*-o+c*-r-h*-s,this.z=c*a+l*-s+h*-o-u*-r,this},transformDirection:function(t){var e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize(),this},divide:function(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this},divideScalar:function(t){if(0!==t){var e=1/t;this.x*=e,this.y*=e,this.z*=e}else this.x=0,this.y=0,this.z=0;return this},min:function(t){return this.x>t.x&&(this.x=t.x),this.y>t.y&&(this.y=t.y),this.z>t.z&&(this.z=t.z),this},max:function(t){return this.x<t.x&&(this.x=t.x),this.y<t.y&&(this.y=t.y),this.z<t.z&&(this.z=t.z),this},clamp:function(t,e){return this.x<t.x?this.x=t.x:this.x>e.x&&(this.x=e.x),this.y<t.y?this.y=t.y:this.y>e.y&&(this.y=e.y),this.z<t.z?this.z=t.z:this.z>e.z&&(this.z=e.z),this},clampScalar:function(){var t=void 0,e=void 0;return function(n,i){return void 0===t&&(t=new s,e=new s),t.set(n,n,n),e.set(i,i,i),this.clamp(t,e)}}(),floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this},ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this},round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this},roundToZero:function(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this},negate:function(){return this.multiplyScalar(-1)},dot:function(t){return this.x*t.x+this.y*t.y+this.z*t.z},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)},lengthManhattan:function(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)},normalize:function(){return this.divideScalar(this.length())},setLength:function(t){var e=this.length();return 0!==e&&t!==e&&this.multiplyScalar(t/e),this},lerp:function(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this},cross:function(t,e){if(void 0!==e)return console.warn("DEPRECATED: Vector3's .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(t,e);var n=this.x,i=this.y,r=this.z;return this.x=i*t.z-r*t.y,this.y=r*t.x-n*t.z,this.z=n*t.y-i*t.x,this},crossVectors:function(t,e){var n=t.x,i=t.y,r=t.z,o=e.x,s=e.y,a=e.z;return this.x=i*a-r*s,this.y=r*o-n*a,this.z=n*s-i*o,this},projectOnVector:function(){var t=void 0,e=void 0;return function(n){return void 0===t&&(t=new s),t.copy(n).normalize(),e=this.dot(t),this.copy(t).multiplyScalar(e)}}(),projectOnPlane:function(){var t=void 0;return function(e){return void 0===t&&(t=new s),t.copy(this).projectOnVector(e),this.sub(t)}}(),reflect:function(){var t=void 0;return function(e){return void 0===t&&(t=new s),this.sub(t.copy(e).multiplyScalar(2*this.dot(e)))}}(),angleTo:function(t){var e=this.dot(t)/(this.length()*t.length());return Math.acos((0,o.clamp)(e,-1,1))},distanceTo:function(t){return Math.sqrt(this.distanceToSquared(t))},distanceToSquared:function(t){var e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i},setFromMatrixPosition:function(t){return this.x=t.elements[12],this.y=t.elements[13],this.z=t.elements[14],this},setFromMatrixScale:function(t){var e=this.set(t.elements[0],t.elements[1],t.elements[2]).length(),n=this.set(t.elements[4],t.elements[5],t.elements[6]).length(),i=this.set(t.elements[8],t.elements[9],t.elements[10]).length();return this.x=e,this.y=n,this.z=i,this},setFromMatrixColumn:function(t,e){var n=4*t,i=e.elements;return this.x=i[n],this.y=i[n+1],this.z=i[n+2],this},equals:function(t){return t.x===this.x&&t.y===this.y&&t.z===this.z},fromArray:function(t){return this.x=t[0],this.y=t[1],this.z=t[2],this},toArray:function(){return[this.x,this.y,this.z]},clone:function(){return new s(this.x,this.y,this.z)}},e.default=s},function(t,e,n){"use strict";function i(t){return t*t}function r(t,e){return i(t.x-e.x)+i(t.y-e.y)}function o(t,e){var n=r(t.start,t.end);if(0===n)return r(e,t.start);var i=((e.x-t.start.x)*(t.end.x-t.start.x)+(e.y-t.start.y)*(t.end.y-t.start.y))/n;return i<0?r(e,t.start):i>1?r(e,t.end):r(e,{x:t.start.x+i*(t.end.x-t.start.x),y:t.start.y+i*(t.end.y-t.start.y)})}function s(t,e){return Math.sqrt(o(t,e))}function a(t,e){var n={},i=t.start.x,r=t.start.y,o=t.end.x,s=t.end.y,a=e.start.x,u=e.start.y,c=e.end.x,l=e.end.y,f=void 0,y=void 0,d=void 0,p=void 0,x=void 0,m=void 0,v=void 0,g=void 0,b=void 0,z=void 0,M=void 0,w=void 0;if(f=s-r,d=i-o,x=o*r-i*s,b=f*a+d*u+x,z=f*c+d*l+x,(0===b||0===z||(0,h.sign)(b)!==(0,h.sign)(z))&&(y=l-u,p=a-c,m=c*u-a*l,v=y*i+p*r+m,g=y*o+p*s+m,0===v||0===g||(0,h.sign)(v)!==(0,h.sign)(g))){M=f*p-y*d,w=d*m-p*x;var P=parseFloat(w/M);w=y*x-f*m;var R=parseFloat(w/M);return n.x=P,n.y=R,n}}Object.defineProperty(e,"__esModule",{value:!0});var h=n(0),u={distanceToPoint:s,intersectLine:a};e.default=u},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(t,e,n,i){this.x=t||0,this.y=e||0,this.z=n||0,this.w=void 0!==i?i:1};i.prototype.setFromAxisAngle=function(t,e){var n=e/2,i=Math.sin(n);return this.x=t.x*i,this.y=t.y*i,this.z=t.z*i,this.w=Math.cos(n),this},i.prototype.multiplyQuaternions=function(t,e){var n=t.x,i=t.y,r=t.z,o=t.w,s=e.x,a=e.y,h=e.z,u=e.w;return this.x=n*u+o*s+i*h-r*a,this.y=i*u+o*a+r*s-n*h,this.z=r*u+o*h+n*a-i*s,this.w=o*u-n*s-i*a-r*h,this},i.prototype.setFromRotationMatrix=function(t){var e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],s=e[5],a=e[9],h=e[2],u=e[6],c=e[10],l=n+s+c,f=void 0;return l>0?(f=.5/Math.sqrt(l+1),this.w=.25/f,this.x=(u-a)*f,this.y=(r-h)*f,this.z=(o-i)*f):n>s&&n>c?(f=2*Math.sqrt(1+n-s-c),this.w=(u-a)/f,this.x=.25*f,this.y=(i+o)/f,this.z=(r+h)/f):s>c?(f=2*Math.sqrt(1+s-n-c),this.w=(r-h)/f,this.x=(i+o)/f,this.y=.25*f,this.z=(a+u)/f):(f=2*Math.sqrt(1+c-n-s),this.w=(o-i)/f,this.x=(r+h)/f,this.y=(a+u)/f,this.z=.25*f),this},e.default=i},function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),o=n(1),s=function(t){return t&&t.__esModule?t:{default:t}}(o),a=n(0),h=function(){function t(e,n){i(this,t),this.start=void 0!==e?e:new s.default,this.end=void 0!==n?n:new s.default}return r(t,[{key:"set",value:function(t,e){return this.start.copy(t),this.end.copy(e),this}},{key:"copy",value:function(t){return this.start.copy(t.start),this.end.copy(t.end),this}},{key:"center",value:function(t){return(t||new s.default).addVectors(this.start,this.end).multiplyScalar(.5)}},{key:"delta",value:function(t){return(t||new s.default).subVectors(this.end,this.start)}},{key:"distanceSq",value:function(){return this.start.distanceToSquared(this.end)}},{key:"distance",value:function(){return this.start.distanceTo(this.end)}},{key:"at",value:function(t,e){var n=e||new s.default;return this.delta(n).multiplyScalar(t).add(this.start)}},{key:"closestPointToPointParameter",value:function(){var t=new s.default,e=new s.default;return function(n,i){t.subVectors(n,this.start),e.subVectors(this.end,this.start);var r=e.dot(e),o=e.dot(t),s=o/r;return i&&(s=(0,a.clamp)(s,0,1)),s}}},{key:"closestPointToPoint",value:function(t,e,n){var i=this.closestPointToPointParameter(t,e),r=n||new s.default;return this.delta(r).multiplyScalar(i).add(this.start)}},{key:"applyMatrix4",value:function(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}},{key:"equals",value:function(t){return t.start.equals(this.start)&&t.end.equals(this.end)}},{key:"clone",value:function(){return(new t).copy(this)}},{key:"intersectLine",value:function(t){var e=this.end.clone().sub(this.start),n=t.end.clone().sub(t.start),i=t.start.clone().sub(this.start),r=e.clone().cross(n),o=i.clone().cross(n);if(0!==i.dot(e)){var s=o.dot(r)/r.lengthSq();if(!(s>1||isNaN(s))){var a=this.start.clone().add(e.clone().multiplyScalar(s));return a.clone().sub(t.start).lengthSq()+a.clone().sub(t.end).lengthSq()<=t.distanceSq()?a:void 0}}}}]),t}();e.default=h},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),r=function(t){return t&&t.__esModule?t:{default:t}}(i),o=function(t,e,n,i,r,o,s,a,h,u,c,l,f,y,d,p){this.elements=new Float32Array(16);var x=this.elements;x[0]=void 0!==t?t:1,x[4]=e||0,x[8]=n||0,x[12]=i||0,x[1]=r||0,x[5]=void 0!==o?o:1,x[9]=s||0,x[13]=a||0,x[2]=h||0,x[6]=u||0,x[10]=void 0!==c?c:1,x[14]=l||0,x[3]=f||0,x[7]=y||0,x[11]=d||0,x[15]=void 0!==p?p:1};o.prototype.makeRotationFromQuaternion=function(t){var e=this.elements,n=t.x,i=t.y,r=t.z,o=t.w,s=n+n,a=i+i,h=r+r,u=n*s,c=n*a,l=n*h,f=i*a,y=i*h,d=r*h,p=o*s,x=o*a,m=o*h;return e[0]=1-(f+d),e[4]=c-m,e[8]=l+x,e[1]=c+m,e[5]=1-(u+d),e[9]=y-p,e[2]=l-x,e[6]=y+p,e[10]=1-(u+f),e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this},o.prototype.multiplyMatrices=function(t,e){var n=t.elements,i=e.elements,r=this.elements,o=n[0],s=n[4],a=n[8],h=n[12],u=n[1],c=n[5],l=n[9],f=n[13],y=n[2],d=n[6],p=n[10],x=n[14],m=n[3],v=n[7],g=n[11],b=n[15],z=i[0],M=i[4],w=i[8],P=i[12],R=i[1],L=i[5],S=i[9],T=i[13],_=i[2],j=i[6],O=i[10],V=i[14],q=i[3],E=i[7],k=i[11],A=i[15];return r[0]=o*z+s*R+a*_+h*q,r[4]=o*M+s*L+a*j+h*E,r[8]=o*w+s*S+a*O+h*k,r[12]=o*P+s*T+a*V+h*A,r[1]=u*z+c*R+l*_+f*q,r[5]=u*M+c*L+l*j+f*E,r[9]=u*w+c*S+l*O+f*k,r[13]=u*P+c*T+l*V+f*A,r[2]=y*z+d*R+p*_+x*q,r[6]=y*M+d*L+p*j+x*E,r[10]=y*w+d*S+p*O+x*k,r[14]=y*P+d*T+p*V+x*A,r[3]=m*z+v*R+g*_+b*q,r[7]=m*M+v*L+g*j+b*E,r[11]=m*w+v*S+g*O+b*k,r[15]=m*P+v*T+g*V+b*A,this},o.prototype.multiply=function(t,e){return void 0!==e?(console.warn("DEPRECATED: Matrix4's .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(t,e)):this.multiplyMatrices(this,t)},o.prototype.getInverse=function(t,e){var n=this.elements,i=t.elements,r=i[0],o=i[4],s=i[8],a=i[12],h=i[1],u=i[5],c=i[9],l=i[13],f=i[2],y=i[6],d=i[10],p=i[14],x=i[3],m=i[7],v=i[11],g=i[15];n[0]=c*p*m-l*d*m+l*y*v-u*p*v-c*y*g+u*d*g,n[4]=a*d*m-s*p*m-a*y*v+o*p*v+s*y*g-o*d*g,n[8]=s*l*m-a*c*m+a*u*v-o*l*v-s*u*g+o*c*g,n[12]=a*c*y-s*l*y-a*u*d+o*l*d+s*u*p-o*c*p,n[1]=l*d*x-c*p*x-l*f*v+h*p*v+c*f*g-h*d*g,n[5]=s*p*x-a*d*x+a*f*v-r*p*v-s*f*g+r*d*g,n[9]=a*c*x-s*l*x-a*h*v+r*l*v+s*h*g-r*c*g,n[13]=s*l*f-a*c*f+a*h*d-r*l*d-s*h*p+r*c*p,n[2]=u*p*x-l*y*x+l*f*m-h*p*m-u*f*g+h*y*g,n[6]=a*y*x-o*p*x-a*f*m+r*p*m+o*f*g-r*y*g,n[10]=o*l*x-a*u*x+a*h*m-r*l*m-o*h*g+r*u*g,n[14]=a*u*f-o*l*f-a*h*y+r*l*y+o*h*p-r*u*p,n[3]=c*y*x-u*d*x-c*f*m+h*d*m+u*f*v-h*y*v,n[7]=o*d*x-s*y*x+s*f*m-r*d*m-o*f*v+r*y*v,n[11]=s*u*x-o*c*x-s*h*m+r*c*m+o*h*v-r*u*v,n[15]=o*c*f-s*u*f+s*h*y-r*c*y-o*h*d+r*u*d;var b=r*n[0]+h*n[4]+f*n[8]+x*n[12];if(0===b){var z="Matrix4.getInverse(): can't invert matrix, determinant is 0";if(e)throw new Error(z);return console.warn(z),this.identity(),this}return this.multiplyScalar(1/b),this},o.prototype.applyToVector3Array=function(){var t=new r.default;return function(e,n,i){void 0===n&&(n=0),void 0===i&&(i=e.length);for(var r=0,o=n;r<i;r+=3,o+=3)t.x=e[o],t.y=e[o+1],t.z=e[o+2],t.applyMatrix4(this),e[o]=t.x,e[o+1]=t.y,e[o+2]=t.z;return e}},o.prototype.makeTranslation=function(t,e,n){return this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this},o.prototype.multiplyScalar=function(t){var e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this},o.prototype.set=function(t,e,n,i,r,o,s,a,h,u,c,l,f,y,d,p){var x=this.elements;return x[0]=t,x[4]=e,x[8]=n,x[12]=i,x[1]=r,x[5]=o,x[9]=s,x[13]=a,x[2]=h,x[6]=u,x[10]=c,x[14]=l,x[3]=f,x[7]=y,x[11]=d,x[15]=p,this},o.prototype.makeScale=function(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this},e.default=o},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),r=function(t){return t&&t.__esModule?t:{default:t}}(i),o=function(t,e){this.normal=void 0!==t?t:new r.default(1,0,0),this.constant=void 0!==e?e:0};o.prototype={constructor:o,set:function(t,e){return this.normal.copy(t),this.constant=e,this},setComponents:function(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this},setFromNormalAndCoplanarPoint:function(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this},setFromCoplanarPoints:function(){var t=new r.default,e=new r.default;return function(n,i,r){var o=t.subVectors(r,i).cross(e.subVectors(n,i)).normalize();return this.setFromNormalAndCoplanarPoint(o,n),this}}(),copy:function(t){return this.normal.copy(t.normal),this.constant=t.constant,this},normalize:function(){var t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this},negate:function(){return this.constant*=-1,this.normal.negate(),this},distanceToPoint:function(t){return this.normal.dot(t)+this.constant},distanceToSphere:function(t){return this.distanceToPoint(t.center)-t.radius},projectPoint:function(t,e){return this.orthoPoint(t,e).sub(t).negate()},orthoPoint:function(t,e){var n=this.distanceToPoint(t);return(e||new r.default).copy(this.normal).multiplyScalar(n)},isIntersectionLine:function(t){var e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0},intersectLine:function(){var t=new r.default;return function(e,n){var i=n||new r.default,o=e.delta(t),s=this.normal.dot(o);if(0!==s){var a=-(e.start.dot(this.normal)+this.constant)/s;if(!(a<0||a>1))return i.copy(o).multiplyScalar(a).add(e.start)}else if(0===this.distanceToPoint(e.start))return i.copy(e.start)}}(),intersectPlane:function(t){var e=this.normal.clone().cross(t.normal),n=new r.default,i={origin:n,direction:e};if(this.normal.clone().cross(t.normal).length<1e-10)return i.direction=new r.default,i;var o=this.constant,s=t.constant,a=this.normal.clone().dot(t.normal),h=-(o-s*a)/(1-a*a),u=-(s-o*a)/(1-a*a);return i.origin=this.normal.clone().multiplyScalar(h).add(t.normal.clone().multiplyScalar(u)),i},coplanarPoint:function(t){return(t||new r.default).copy(this.normal).multiplyScalar(-this.constant)},translate:function(t){return this.constant=this.constant-t.dot(this.normal),this},equals:function(t){return t.normal.equals(this.normal)&&t.constant===this.constant},clone:function(){return(new o).copy(this)}},e.default=o},function(t,e,n){"use strict";function i(t){return{x:t.pageX,y:t.pageY}}function r(t,e){return{x:t.x-e.x,y:t.y-e.y}}function o(t){return{x:t.x,y:t.y}}function s(t,e){return Math.sqrt(a(t,e))}function a(t,e){var n=r(t,e);return n.x*n.x+n.y*n.y}function h(t,e){return!(t.x<e.left||t.x>e.left+e.width||t.y<e.top||t.y>e.top+e.height)}function u(t,e){var n=[],i=void 0;return t.forEach(function(t,r){var o=s(t,e);n.push(o),i=0===r?o:Math.min(o,i)}),t[n.indexOf(i)]}Object.defineProperty(e,"__esModule",{value:!0});var c={subtract:r,copy:o,pageToPoint:i,distance:s,distanceSquared:a,insideRect:h,findClosestPoint:u};e.default=c},function(t,e,n){"use strict";function i(t){return[{start:{x:t.left,y:t.top},end:{x:t.left+t.width,y:t.top}},{start:{x:t.left+t.width,y:t.top},end:{x:t.left+t.width,y:t.top+t.height}},{start:{x:t.left+t.width,y:t.top+t.height},end:{x:t.left,y:t.top+t.height}},{start:{x:t.left,y:t.top+t.height},end:{x:t.left,y:t.top}}]}function r(t,e){var n=655535;return i(t).forEach(function(t){var i=u.default.distanceToPoint(t,e);i<n&&(n=i)}),n}function o(t){return{topLeft:{x:t.left,y:t.top},bottomRight:{x:t.left+t.width,y:t.top+t.height}}}function s(t,e){var n=void 0,i=void 0,r=o(t),s=o(e);return n=t.width>=0?e.width>=0?!(r.bottomRight.x<=s.topLeft.x||s.bottomRight.x<=r.topLeft.x):!(r.bottomRight.x<=s.bottomRight.x||s.topLeft.x<=r.topLeft.x):e.width>=0?!(r.topLeft.x<=s.topLeft.x||s.bottomRight.x<=r.bottomRight.x):!(r.topLeft.x<=s.bottomRight.x||s.topLeft.x<=r.bottomRight.x),i=t.height>=0?e.height>=0?!(r.bottomRight.y<=s.topLeft.y||s.bottomRight.y<=r.topLeft.y):!(r.bottomRight.y<=s.bottomRight.y||s.topLeft.y<=r.topLeft.y):e.height>=0?!(r.topLeft.y<=s.topLeft.y||s.bottomRight.y<=r.bottomRight.y):!(r.topLeft.y<=s.bottomRight.y||s.top<=r.bottomRight.y),n&&i}function a(t,e){var n={topLeft:{},bottomRight:{}};if(s(t,e)){var i=o(t),r=o(e);return t.width>=0?e.width>=0?(n.topLeft.x=Math.max(i.topLeft.x,r.topLeft.x),n.bottomRight.x=Math.min(i.bottomRight.x,r.bottomRight.x)):(n.topLeft.x=Math.max(i.topLeft.x,r.bottomRight.x),n.bottomRight.x=Math.min(i.bottomRight.x,r.topLeft.x)):e.width>=0?(n.topLeft.x=Math.min(i.topLeft.x,r.bottomRight.x),n.bottomRight.x=Math.max(i.bottomRight.x,r.topLeft.x)):(n.topLeft.x=Math.min(i.topLeft.x,r.topLeft.x),n.bottomRight.x=Math.max(i.bottomRight.x,r.bottomRight.x)),t.height>=0?e.height>=0?(n.topLeft.y=Math.max(i.topLeft.y,r.topLeft.y),n.bottomRight.y=Math.min(i.bottomRight.y,r.bottomRight.y)):(n.topLeft.y=Math.max(i.topLeft.y,r.bottomRight.y),n.bottomRight.y=Math.min(i.bottomRight.y,r.topLeft.y)):e.height>=0?(n.topLeft.y=Math.min(i.topLeft.y,r.bottomRight.y),n.bottomRight.y=Math.max(i.bottomRight.y,r.topLeft.y)):(n.topLeft.y=Math.min(i.topLeft.y,r.topLeft.y),n.bottomRight.y=Math.max(i.bottomRight.y,r.bottomRight.y)),n}}Object.defineProperty(e,"__esModule",{value:!0});var h=n(2),u=function(t){return t&&t.__esModule?t:{default:t}}(h),c={distanceToPoint:r,getIntersectionRect:a};e.default=c},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(4);Object.defineProperty(e,"Line3",{enumerable:!0,get:function(){return i(r).default}});var o=n(2);Object.defineProperty(e,"lineSegment",{enumerable:!0,get:function(){return i(o).default}});var s=n(0);Object.defineProperty(e,"clamp",{enumerable:!0,get:function(){return s.clamp}}),Object.defineProperty(e,"degToRad",{enumerable:!0,get:function(){return s.degToRad}}),Object.defineProperty(e,"radToDeg",{enumerable:!0,get:function(){return s.radToDeg}}),Object.defineProperty(e,"sign",{enumerable:!0,get:function(){return s.sign}});var a=n(5);Object.defineProperty(e,"Matrix4",{enumerable:!0,get:function(){return i(a).default}});var h=n(6);Object.defineProperty(e,"Plane",{enumerable:!0,get:function(){return i(h).default}});var u=n(7);Object.defineProperty(e,"point",{enumerable:!0,get:function(){return i(u).default}});var c=n(3);Object.defineProperty(e,"quaternion",{enumerable:!0,get:function(){return i(c).default}});var l=n(8);Object.defineProperty(e,"rect",{enumerable:!0,get:function(){return i(l).default}});var f=n(1);Object.defineProperty(e,"Vector3",{enumerable:!0,get:function(){return i(f).default}})}])});
//# sourceMappingURL=cornerstoneMath.min.js.map
/*! cornerstone-tools - 2.0.0 - 2017-12-13 | (c) 2017 Chris Hafey | https://github.com/cornerstonejs/cornerstoneTools */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("cornerstoneTools",[],t):"object"==typeof exports?exports.cornerstoneTools=t():e.cornerstoneTools=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(n){if(a[n])return a[n].exports;var o=a[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var a={};return t.m=e,t.c=a,t.d=function(e,a,n){t.o(e,a)||Object.defineProperty(e,a,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=60)}([function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=window.cornerstone,o=window.cornerstoneMath,r=window.Hammer;t.default={set cornerstone(e){n=e},get cornerstone(){return n},set cornerstoneMath(e){o=e},get cornerstoneMath(){return o},set Hammer(e){r=e},get Hammer(){return r}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={IMAGE_RENDERED:"cornerstoneimagerendered",NEW_IMAGE:"cornerstonenewimage",IMAGE_CACHE_PROMISE_REMOVED:"cornerstoneimagecachepromiseremoved",ELEMENT_DISABLED:"cornerstoneelementdisabled",MOUSE_DOWN:"cornerstonetoolsmousedown",MOUSE_UP:"cornerstonetoolsmouseup",MOUSE_DOWN_ACTIVATE:"cornerstonetoolsmousedownactivate",MOUSE_DRAG:"cornerstonetoolsmousedrag",MOUSE_MOVE:"cornerstonetoolsmousemove",MOUSE_CLICK:"cornerstonetoolsmouseclick",MOUSE_DOUBLE_CLICK:"cornerstonetoolsmousedoubleclick",MOUSE_WHEEL:"cornerstonetoolsmousewheel",TOUCH_START:"cornerstonetoolstouchstart",TOUCH_START_ACTIVE:"cornerstonetoolstouchstartactive",TOUCH_END:"cornerstonetoolstouchend",TOUCH_DRAG:"cornerstonetoolstouchdrag",TOUCH_DRAG_END:"cornerstonetoolstouchdragend",TOUCH_PINCH:"cornerstonetoolstouchpinch",TOUCH_ROTATE:"cornerstonetoolstouchrotate",TOUCH_PRESS:"cornerstonetoolstouchpress",TAP:"cornerstonetoolstap",DOUBLE_TAP:"cornerstonetoolsdoubletap",MULTI_TOUCH_START:"cornerstonetoolsmultitouchstart",MULTI_TOUCH_START_ACTIVE:"cornerstonetoolsmultitouchstartactive",MULTI_TOUCH_DRAG:"cornerstonetoolsmultitouchdrag",KEY_DOWN:"cornerstonetoolskeydown",KEY_UP:"cornerstonetoolskeyup",KEY_PRESS:"cornerstonetoolskeypress",MEASUREMENT_ADDED:"cornerstonetoolsmeasurementadded",MEASUREMENT_MODIFIED:"cornerstonetoolsmeasurementmodified",MEASUREMENT_REMOVED:"cornerstonemeasurementremoved",TOOL_DEACTIVATED:"cornerstonetoolstooldeactivated",CLIP_STOPPED:"cornerstonetoolsclipstopped",STACK_SCROLL:"cornerstonestackscroll",LINE_SAMPLE_UPDATED:"cornerstonelinesampleupdated"};t.default=n},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=v.default.cornerstone.getEnabledElement(e);return void 0===t.toolStateManager&&(t.toolStateManager=m.globalImageIdSpecificToolStateManager),t.toolStateManager}function r(e,t,a){o(e).add(e,t,a);var n=c.default.MEASUREMENT_ADDED,r={toolType:t,element:e,measurementData:a};(0,h.default)(e,n,r)}function i(e,t){return o(e).get(e,t)}function l(e,t,a){for(var n=o(e),r=n.get(e,t),i=-1,l=0;l<r.data.length;l++)r.data[l]===a&&(i=l);if(-1!==i){r.data.splice(i,1);var d=c.default.MEASUREMENT_REMOVED,u={toolType:t,element:e,measurementData:a};(0,h.default)(e,d,u)}}function d(e,t){var a=o(e),n=a.get(e,t);void 0!==n&&(n.data=[])}function u(e,t){v.default.cornerstone.getEnabledElement(e).toolStateManager=t}Object.defineProperty(t,"__esModule",{value:!0}),t.getElementToolStateManager=t.setElementToolStateManager=t.clearToolState=t.removeToolState=t.getToolState=t.addToolState=void 0;var s=a(1),c=n(s),f=a(0),v=n(f),m=a(18),g=a(5),h=n(g);t.addToolState=r,t.getToolState=i,t.removeToolState=l,t.clearToolState=d,t.setElementToolStateManager=u,t.getElementToolStateManager=o},function(e,t,a){"use strict";function n(e,t){if(!r[e])return{};var a=r[e],n=a.find(function(e){return e.element===t});return n?n.options:{}}function o(e,t,a){if(!r[e])return void(r[e]=[{element:t,options:a}]);var n=r[e],o=n.findIndex(function(e){return e.element===t});-1===o?r[e].push({element:t,options:a}):r[e][o].options=a}Object.defineProperty(t,"__esModule",{value:!0});var r={};t.getToolOptions=n,t.setToolOptions=o},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){return 0!=(t&1<<e-1)}},function(e,t,a){"use strict";function n(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=void 0;return"function"==typeof window.CustomEvent?n=new CustomEvent(t,{detail:a,cancelable:!0}):(n=document.createEvent("CustomEvent"),n.initCustomEvent(t,!0,!0,a)),e.dispatchEvent(n)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n},function(e,t,a){"use strict";function n(e){f=e}function o(){return f}function r(e){s=e}function i(){return s}function l(e){c=e}function d(){return c}function u(e){return e?c:s}Object.defineProperty(t,"__esModule",{value:!0});var s="white",c="greenyellow",f="transparent",v={setFillColor:n,getFillColor:o,setToolColor:r,getToolColor:i,setActiveColor:l,getActiveColor:d,getColorIfActive:u};t.default=v},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,a,n,r,i){"[object Array]"!==Object.prototype.toString.call(t)&&(t=[t]);var l=o.default.getFont(),d=o.default.getFontSize(),u=o.default.getBackgroundColor();e.save(),e.font=l,e.textBaseline="top",e.strokeStyle=r;var s=0;t.forEach(function(t){var a=e.measureText(t).width;s=Math.max(s,a)}),e.fillStyle=u;var c={width:s+10,height:5+t.length*(d+5)};return i&&i.centering&&!0===i.centering.x&&(a-=c.width/2),i&&i.centering&&!0===i.centering.y&&(n-=c.height/2),c.left=a,c.top=n,i&&!0===i.debug&&(e.fillStyle="#FF0000"),e.fillRect(c.left,c.top,c.width,c.height),t.forEach(function(t,o){e.fillStyle=r,e.fillText(t,a+5,n+5+o*(d+5))}),e.restore(),c};var n=a(13),o=function(e){return e&&e.__esModule?e:{default:e}}(n)},function(e,t,a){"use strict";function n(e){l=e}function o(){return l}function r(e){d=e}function i(){return d}Object.defineProperty(t,"__esModule",{value:!0});var l=1,d=2,u={setToolWidth:n,getToolWidth:o,setActiveWidth:r,getActiveWidth:i};t.default=u},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){function t(t){var a=t.detail,n=a.element,r=(0,P.getToolOptions)(M,n);(0,x.default)(a.which,r.mouseButtonMask)&&(e.addNewMeasurement?e.addNewMeasurement(a):o(a),t.preventDefault(),t.stopPropagation())}function a(t){var a=t.detail;u.default.setCoords(a);var n=(0,_.getToolState)(a.element,M);if(n){for(var o=!1,r=0;r<n.data.length;r++){var i=a.currentPoints.canvas,d=n.data[r];!0===(0,v.default)(a.element,d.handles,i)&&(o=!0),(e.pointNearTool(a.element,d,i)&&!d.active||!e.pointNearTool(a.element,d,i)&&d.active)&&(d.active=!d.active,o=!0)}!0===o&&l.default.cornerstone.updateImage(a.element)}}function n(t){function a(){o.invalidated=!0,(0,y.default)(n,o.handles)&&(0,_.removeToolState)(i,M,o),l.default.cornerstone.updateImage(i),i.addEventListener(r.default.MOUSE_MOVE,O)}var n=t.detail,o=void 0,i=n.element,d=(0,P.getToolOptions)(M,i);if((0,x.default)(n.which,d.mouseButtonMask)){var u=n.startPoints.canvas,s=(0,_.getToolState)(t.currentTarget,M);if(s){var f=void 0,v=void 0;for(v=!(!e.options||void 0===e.options.preventHandleOutsideImage)&&e.options.preventHandleOutsideImage,f=0;f<s.data.length;f++){o=s.data[f];var m=(0,c.default)(i,o.handles,u,6);if(m)return i.removeEventListener(r.default.MOUSE_MOVE,O),o.active=!0,(0,g.default)(n,M,o,m,a,v),t.stopImmediatePropagation(),t.stopPropagation(),void t.preventDefault()}if(e.pointNearTool){var h=e.options||{deleteIfHandleOutsideImage:!0,preventHandleOutsideImage:!1};for(f=0;f<s.data.length;f++)if(o=s.data[f],o.active=!1,e.pointNearTool(i,o,u))return o.active=!0,i.removeEventListener(r.default.MOUSE_MOVE,O),(0,T.default)(t,o,s,M,h,a),t.stopImmediatePropagation(),t.stopPropagation(),void t.preventDefault()}}}}function o(t){var a=l.default.cornerstone,n=t.element,o=e.createNewMeasurement(t);if(o){(0,_.addToolState)(t.element,M,o),n.removeEventListener(r.default.MOUSE_MOVE,O),n.removeEventListener(r.default.MOUSE_DOWN,b),n.removeEventListener(r.default.MOUSE_DOWN_ACTIVATE,C),I&&n.removeEventListener(r.default.MOUSE_DOUBLE_CLICK,I),a.updateImage(n);var i=void 0;i=1===Object.keys(o.handles).length?g.default:p.default;var d=void 0;d=!(!e.options||void 0===e.options.preventHandleOutsideImage)&&e.options.preventHandleOutsideImage,i(t,M,o,o.handles.end,function(){o.active=!1,o.invalidated=!0,(0,y.default)(t,o.handles)&&(0,_.removeToolState)(n,M,o),n.addEventListener(r.default.MOUSE_MOVE,O),n.addEventListener(r.default.MOUSE_DOWN,b),n.addEventListener(r.default.MOUSE_DOWN_ACTIVATE,C),I&&n.addEventListener(r.default.MOUSE_DOUBLE_CLICK,I),a.updateImage(n)},d)}}function i(t){t.removeEventListener(r.default.IMAGE_RENDERED,e.onImageRendered),t.removeEventListener(r.default.MOUSE_MOVE,O),t.removeEventListener(r.default.MOUSE_DOWN,b),t.removeEventListener(r.default.MOUSE_DOWN_ACTIVATE,C),I&&t.removeEventListener(r.default.MOUSE_DOUBLE_CLICK,I),l.default.cornerstone.updateImage(t)}function d(t){t.removeEventListener(r.default.IMAGE_RENDERED,e.onImageRendered),t.removeEventListener(r.default.MOUSE_MOVE,O),t.removeEventListener(r.default.MOUSE_DOWN,b),t.removeEventListener(r.default.MOUSE_DOWN_ACTIVATE,C),I&&t.removeEventListener(r.default.MOUSE_DOUBLE_CLICK,I),t.addEventListener(r.default.IMAGE_RENDERED,e.onImageRendered),l.default.cornerstone.updateImage(t)}function s(t,a){(0,P.setToolOptions)(M,t,{mouseButtonMask:a}),t.removeEventListener(r.default.IMAGE_RENDERED,e.onImageRendered),t.removeEventListener(r.default.MOUSE_MOVE,O),t.removeEventListener(r.default.MOUSE_DOWN,b),t.removeEventListener(r.default.MOUSE_DOWN_ACTIVATE,C),t.addEventListener(r.default.IMAGE_RENDERED,e.onImageRendered),t.addEventListener(r.default.MOUSE_MOVE,O),t.addEventListener(r.default.MOUSE_DOWN,b),t.addEventListener(r.default.MOUSE_DOWN_ACTIVATE,C),I&&(t.removeEventListener(r.default.MOUSE_DOUBLE_CLICK,I),t.addEventListener(r.default.MOUSE_DOUBLE_CLICK,I)),l.default.cornerstone.updateImage(t)}function f(t,a){(0,P.setToolOptions)(M,t,{mouseButtonMask:a});var n=r.default.TOOL_DEACTIVATED,o={mouseButtonMask:a,toolType:M,type:n};(0,S.default)(t,n,o),t.removeEventListener(r.default.IMAGE_RENDERED,e.onImageRendered),t.removeEventListener(r.default.MOUSE_MOVE,O),t.removeEventListener(r.default.MOUSE_DOWN,b),t.removeEventListener(r.default.MOUSE_DOWN_ACTIVATE,C),t.addEventListener(r.default.IMAGE_RENDERED,e.onImageRendered),t.addEventListener(r.default.MOUSE_MOVE,O),t.addEventListener(r.default.MOUSE_DOWN,b),I&&(t.removeEventListener(r.default.MOUSE_DOUBLE_CLICK,I),t.addEventListener(r.default.MOUSE_DOUBLE_CLICK,I)),e.deactivate&&e.deactivate(t,a),l.default.cornerstone.updateImage(t)}function m(){return E}function h(e){E=e}var E={},M=e.toolType,O=e.mouseMoveCallback||a,b=e.mouseDownCallback||n,C=e.mouseDownActivateCallback||t,I=e.mouseDoubleClickCallback,w={enable:d,disable:i,activate:s,deactivate:f,getConfiguration:m,setConfiguration:h,mouseDownCallback:n,mouseMoveCallback:a,mouseDownActivateCallback:t};return e.pointNearTool&&(w.pointNearTool=e.pointNearTool),I&&(w.mouseDoubleClickCallback=I),e.addNewMeasurement&&(w.addNewMeasurement=e.addNewMeasurement),w};var o=a(1),r=n(o),i=a(0),l=n(i),d=a(36),u=n(d),s=a(21),c=n(s),f=a(37),v=n(f),m=a(23),g=n(m),h=a(24),p=n(h),E=a(38),T=n(E),M=a(14),y=n(M),O=a(4),x=n(O),_=a(2),b=a(5),S=n(b),P=a(3)},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,a,n,o){e.strokeStyle=n,Object.keys(a).forEach(function(n){var i=a[n];if(!0!==i.drawnIndependently&&(!o||!0!==o.drawHandlesIfActive||i.active)){e.beginPath(),i.active?e.lineWidth=l.default.getActiveWidth():e.lineWidth=l.default.getToolWidth();var u=r.default.cornerstone.pixelToCanvas(t.element,i);e.arc(u.x,u.y,d,0,2*Math.PI),o&&o.fill&&(e.fillStyle=o.fill,e.fill()),e.stroke()}})};var o=a(0),r=n(o),i=a(8),l=n(i),d=6},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){Object.keys(e).forEach(function(t){e[t].active=!1})}function r(e){if(e)for(var t=0;t<e.data.length;t++){var a=e.data[t];a.active=!1,a.handles&&o(a.handles)}}function i(e){function t(t){var r=s.default.cornerstone,i=t.element,l=e.createNewMeasurement(t);if(l){if((0,y.addToolState)(i,e.toolType,l),1===Object.keys(l.handles).length&&t.type===d.default.TAP)return l.active=!1,l.handles.end.active=!1,l.handles.end.highlight=!1,l.invalidated=!0,(0,f.default)(t,l.handles)&&(0,y.removeToolState)(i,e.toolType,l),void r.updateImage(i);i.removeEventListener(d.default.TOUCH_START_ACTIVE,e.touchDownActivateCallback||a),i.removeEventListener(d.default.TAP,e.tapCallback||n),i.removeEventListener(d.default.TOUCH_START,e.touchStartCallback||o),r.updateImage(i),(0,E.default)(t,e.toolType,l,l.handles.end,function(){l.active=!1,l.invalidated=!0,(0,f.default)(t,l.handles)&&(0,y.removeToolState)(i,e.toolType,l),i.addEventListener(d.default.TOUCH_START_ACTIVE,e.touchDownActivateCallback||a),i.addEventListener(d.default.TAP,e.tapCallback||n),i.addEventListener(d.default.TOUCH_START,e.touchStartCallback||o),r.updateImage(i)})}}function a(a){var n=a.detail;e.addNewMeasurement?e.addNewMeasurement(n):t(n),a.stopImmediatePropagation(),a.preventDefault()}function n(t){function i(){r(g),(0,f.default)(l,p.handles)&&(0,y.removeToolState)(c,e.toolType,p),u.updateImage(c),c.addEventListener(d.default.TOUCH_START,e.touchStartCallback||o),c.addEventListener(d.default.TAP,e.tapCallback||n)}var l=t.detail,u=s.default.cornerstone,c=l.element,v=l.currentPoints.canvas,g=(0,y.getToolState)(t.currentTarget,e.toolType),p=void 0,E=void 0;if(r(g),g)for(E=0;E<g.data.length;E++){p=g.data[E];var T=(0,m.default)(c,p.handles,v,25);if(T)return c.removeEventListener(d.default.TOUCH_START,e.touchStartCallback||o),c.removeEventListener(d.default.TAP,e.tapCallback||n),p.active=!0,T.active=!0,u.updateImage(c),(0,h.default)(t,e.toolType,p,T,i),t.stopImmediatePropagation(),void t.preventDefault()}if(g&&e.pointNearTool)for(E=0;E<g.data.length;E++)if(p=g.data[E],e.pointNearTool(c,p,v))return c.removeEventListener(d.default.TOUCH_START,e.touchStartCallback||o),c.removeEventListener(d.default.TAP,e.tapCallback||n),p.active=!0,u.updateImage(c),(0,M.default)(t,p,g,e.toolType,!0,i),t.stopImmediatePropagation(),void t.preventDefault();return e.touchDownActivateCallback?e.touchDownActivateCallback(t):a(t),!1}function o(t){function a(t,a){c.active=!1,c.invalidated=!0,(0,f.default)(r,c.handles)&&(0,y.removeToolState)(r.element,e.toolType,c),i.updateImage(r.element),l.addEventListener(d.default.TOUCH_START,e.touchStartCallback||o),l.addEventListener(d.default.TAP,e.tapCallback||n),e.pressCallback&&l.addEventListener(d.default.TOUCH_PRESS,e.pressCallback),t&&t.type===d.default.TOUCH_PRESS&&(0,x.default)(l,t.type,a)}var r=t.detail,i=s.default.cornerstone,l=r.element,u=r.startPoints.canvas,c=void 0,v=(0,y.getToolState)(t.currentTarget,e.toolType),g=void 0;if(v){for(g=0;g<v.data.length;g++){c=v.data[g];var p=(0,m.default)(r.element,c.handles,u,28);if(p)return l.removeEventListener(d.default.TOUCH_START,e.touchStartCallback||o),l.removeEventListener(d.default.TAP,e.tapCallback||n),e.pressCallback&&l.removeEventListener(d.default.TOUCH_PRESS,e.pressCallback),c.active=!0,(0,h.default)(t,e.toolType,c,p,a),t.stopImmediatePropagation(),t.preventDefault(),void t.stopPropagation()}if(e.pointNearTool)for(g=0;g<v.data.length;g++)if(c=v.data[g],e.pointNearTool(r.element,c,u))return l.removeEventListener(d.default.TOUCH_START,e.touchStartCallback||o),l.removeEventListener(d.default.TAP,e.tapCallback||n),e.pressCallback&&l.removeEventListener(d.default.TOUCH_PRESS,e.pressCallback),(0,M.default)(t,c,v,e.toolType,!0,a),t.stopImmediatePropagation(),t.preventDefault(),void t.stopPropagation()}}function i(t){t.removeEventListener(d.default.IMAGE_RENDERED,e.onImageRendered),t.removeEventListener(d.default.TOUCH_START,e.touchStartCallback||o),t.removeEventListener(d.default.TOUCH_START_ACTIVE,e.touchDownActivateCallback||a),t.removeEventListener(d.default.TAP,e.tapCallback||n),e.doubleTapCallback&&t.removeEventListener(d.default.DOUBLE_TAP,e.doubleTapCallback),e.pressCallback&&t.removeEventListener(d.default.TOUCH_PRESS,e.pressCallback),s.default.cornerstone.updateImage(t)}function l(t){t.removeEventListener(d.default.IMAGE_RENDERED,e.onImageRendered),t.removeEventListener(d.default.TOUCH_START,e.touchStartCallback||o),t.removeEventListener(d.default.TOUCH_START_ACTIVE,e.touchDownActivateCallback||a),t.removeEventListener(d.default.TAP,e.tapCallback||n),t.addEventListener(d.default.IMAGE_RENDERED,e.onImageRendered),e.doubleTapCallback&&t.removeEventListener(d.default.DOUBLE_TAP,e.doubleTapCallback),e.pressCallback&&t.removeEventListener(d.default.TOUCH_PRESS,e.pressCallback),s.default.cornerstone.updateImage(t)}function u(t){t.removeEventListener(d.default.IMAGE_RENDERED,e.onImageRendered),t.removeEventListener(d.default.TOUCH_START,e.touchStartCallback||o),t.removeEventListener(d.default.TOUCH_START_ACTIVE,e.touchDownActivateCallback||a),t.removeEventListener(d.default.TAP,e.tapCallback||n),t.addEventListener(d.default.IMAGE_RENDERED,e.onImageRendered),t.addEventListener(d.default.TOUCH_START,e.touchStartCallback||o),t.addEventListener(d.default.TOUCH_START_ACTIVE,e.touchDownActivateCallback||a),t.addEventListener(d.default.TAP,e.tapCallback||n),e.doubleTapCallback&&(t.removeEventListener(d.default.DOUBLE_TAP,e.doubleTapCallback),t.addEventListener(d.default.DOUBLE_TAP,e.doubleTapCallback)),e.pressCallback&&(t.removeEventListener(d.default.TOUCH_PRESS,e.pressCallback),t.addEventListener(d.default.TOUCH_PRESS,e.pressCallback)),s.default.cornerstone.updateImage(t)}function c(t){var r=d.default.TOOL_DEACTIVATED,i={toolType:e.toolType,type:r};(0,x.default)(t,r,i),t.removeEventListener(d.default.IMAGE_RENDERED,e.onImageRendered),t.removeEventListener(d.default.TOUCH_START,e.touchStartCallback||o),t.removeEventListener(d.default.TOUCH_START_ACTIVE,e.touchDownActivateCallback||a),t.removeEventListener(d.default.TAP,e.tapCallback||n),t.addEventListener(d.default.IMAGE_RENDERED,e.onImageRendered),t.addEventListener(d.default.TOUCH_START,e.touchStartCallback||o),e.doubleTapCallback&&t.removeEventListener(d.default.DOUBLE_TAP,e.doubleTapCallback),e.pressCallback&&t.removeEventListener(d.default.TOUCH_PRESS,e.pressCallback),s.default.cornerstone.updateImage(t)}var v={enable:l,disable:i,activate:u,deactivate:c,touchStartCallback:e.touchStartCallback||o,touchDownActivateCallback:e.touchDownActivateCallback||a,tapCallback:e.tapCallback||n};return e.pointNearTool&&(v.pointNearTool=e.pointNearTool),e.doubleTapCallback&&(v.doubleTapCallback=e.doubleTapCallback),e.pressCallback&&(v.pressCallback=e.pressCallback),e.addNewMeasurement&&(v.addNewMeasurement=e.addNewMeasurement),v}Object.defineProperty(t,"__esModule",{value:!0});var l=a(1),d=n(l),u=a(0),s=n(u),c=a(14),f=n(c),v=a(21),m=n(v),g=a(52),h=n(g),p=a(27),E=n(p),T=a(51),M=n(T),y=a(2),O=a(5),x=n(O);t.default=i},function(e,t,a){"use strict";function n(e){u=e}function o(){return u}function r(e){s=e}function i(){return s}function l(e){c=e}function d(){return c}Object.defineProperty(t,"__esModule",{value:!0});var u=void 0,s=void 0,c=void 0,f={setStartLoadHandler:n,getStartLoadHandler:o,setEndLoadHandler:r,getEndLoadHandler:i,setErrorLoadingHandler:l,getErrorLoadingHandler:d};t.default=f},function(e,t,a){"use strict";function n(e){s=e}function o(){return s}function r(e){u=e}function i(){return u}function l(e){c=e}function d(){return c}Object.defineProperty(t,"__esModule",{value:!0});var u=15,s=u+"px Arial",c="transparent",f={setFont:n,getFont:o,setFontSize:r,getFontSize:i,setBackgroundColor:l,getBackgroundColor:d};t.default=f},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var a=e.image,n={left:0,top:0,width:a.width,height:a.height},r=!1;return Object.keys(t).forEach(function(e){var a=t[e];!0!==a.allowedOutsideImage&&!1===o.default.cornerstoneMath.point.insideRect(a,n)&&(r=!0)}),r};var n=a(0),o=function(e){return e&&e.__esModule?e:{default:e}}(n)},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,a){var n=[o.default.TOUCH_DRAG];return a&&!0===a.fireOnTouchStart&&n.push(o.default.TOUCH_START),{activate:function(o){a&&a.eventData&&(0,r.setToolOptions)(t,o,a.eventData),n.forEach(function(t){o.removeEventListener(t,e),o.addEventListener(t,e)}),a&&a.activateCallback&&a.activateCallback(o)},disable:function(t){n.forEach(function(a){t.removeEventListener(a,e)}),a&&a.disableCallback&&a.disableCallback(t)},enable:function(t){n.forEach(function(a){t.removeEventListener(a,e)}),a&&a.enableCallback&&a.enableCallback(t)},deactivate:function(t){n.forEach(function(a){t.removeEventListener(a,e)}),a&&a.deactivateCallback&&a.deactivateCallback(t)}}};var n=a(1),o=function(e){return e&&e.__esModule?e:{default:e}}(n),r=a(3)},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(!t)throw new Error("simpleMouseButtonTool: toolType is required");var a={};return{activate:function(a,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};i.mouseButtonMask=n,(0,r.setToolOptions)(t,a,i),a.removeEventListener(o.default.MOUSE_DOWN_ACTIVATE,e),a.addEventListener(o.default.MOUSE_DOWN_ACTIVATE,e)},disable:function(t){t.removeEventListener(o.default.MOUSE_DOWN_ACTIVATE,e)},enable:function(t){t.removeEventListener(o.default.MOUSE_DOWN_ACTIVATE,e)},deactivate:function(t){t.removeEventListener(o.default.MOUSE_DOWN_ACTIVATE,e)},getConfiguration:function(){return a},setConfiguration:function(e){a=e}}};var n=a(1),o=function(e){return e&&e.__esModule?e:{default:e}}(n),r=a(3)},function(e,t,a){"use strict";function n(e){var t=r.default.cornerstoneMath;return e instanceof t.Vector3?e:new t.Vector3(e[0],e[1],e[2])}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;var o=a(0),r=function(e){return e&&e.__esModule?e:{default:e}}(o)},function(e,t,a){"use strict";function n(){function e(e){return d[e]}function t(e,t){d[e]=t}function a(){return d}function n(e){d=e}function o(e,t,a){var n=r.default.cornerstone.getEnabledElement(e);n.image&&!1!==d.hasOwnProperty(n.image.imageId)||(d[n.image.imageId]={});var o=d[n.image.imageId];!1===o.hasOwnProperty(t)&&(o[t]={data:[]}),o[t].data.push(a)}function i(e,t){var a=r.default.cornerstone.getEnabledElement(e);if(a.image&&!1!==d.hasOwnProperty(a.image.imageId)){var n=d[a.image.imageId];if(!1!==n.hasOwnProperty(t)){return n[t]}}}function l(e){var t=r.default.cornerstone.getEnabledElement(e);t.image&&!1!==d.hasOwnProperty(t.image.imageId)&&delete d[t.image.imageId]}var d={};return{get:i,add:o,clear:l,saveImageIdToolState:e,restoreImageIdToolState:t,saveToolState:a,restoreToolState:n,toolState:d}}Object.defineProperty(t,"__esModule",{value:!0}),t.globalImageIdSpecificToolStateManager=t.newImageIdSpecificToolStateManager=void 0;var o=a(0),r=function(e){return e&&e.__esModule?e:{default:e}}(o),i=n();t.newImageIdSpecificToolStateManager=n,t.globalImageIdSpecificToolStateManager=i},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(e.boundingBox)return o.default.cornerstoneMath.point.insideRect(t,e.boundingBox)};var n=a(0),o=function(e){return e&&e.__esModule?e:{default:e}}(n)},function(e,t,a){"use strict";function n(e){return parseFloat("."+e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var a=r.default.cornerstone,o=a.metaData.get("patientStudyModule",e.imageId),i=a.metaData.get("generalSeriesModule",e.imageId);if(o&&i){if("PT"===i.modality){var l=t*e.slope+e.intercept,d=o.patientWeight;if(d){var u=a.metaData.get("petIsotopeModule",e.imageId);if(u){var s=u.radiopharmaceuticalInfo,c=s.radiopharmaceuticalStartTime,f=s.radionuclideTotalDose,v=s.radionuclideHalfLife,m=i.seriesTime;if(c&&f&&v&&m){var g=n(m.fractionalSeconds||0)+m.seconds+60*m.minutes+60*m.hours*60,h=n(c.fractionalSeconds)+c.seconds+60*c.minutes+60*c.hours*60,p=g-h;return l*d/(f*Math.exp(-p*Math.log(2)/v))*1e3}}}}}};var o=a(0),r=function(e){return e&&e.__esModule?e:{default:e}}(o)},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,a,n){var o=void 0;if(t)return Object.keys(t).forEach(function(i){var d=t[i];if(d.hasOwnProperty("pointNearHandle")){if(d.pointNearHandle(e,d,a))return void(o=d)}else if(!0===d.hasBoundingBox){if((0,l.default)(d,a))return void(o=d)}else{var u=r.default.cornerstone.pixelToCanvas(e,d),s=r.default.cornerstoneMath.point.distance(u,a);if(s<=n)return void(o=d)}}),o};var o=a(0),r=n(o),i=a(19),l=n(i)},function(e,t,a){"use strict";function n(){var e=navigator.userAgent,t=e.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i)||[],a=void 0;return/trident/i.test(t[1])?(a=/\brv[ :]+(\d+)/g.exec(e)||[],"IE "+(a[1]||"")):"Chrome"===t[1]&&null!==(a=e.match(/\b(OPR|Edge)\/(\d+)/))?a.slice(1).join(" ").replace("OPR","Opera"):(t=t[2]?[t[1],t[2]]:[navigator.appName,navigator.appVersion,"-?"],null!==(a=e.match(/version\/(\d+)/i))&&t.splice(1,1,a[1]),t.join(" "))}function o(e){d=e}function r(){return d||i()}function i(){var e=n(),t=e.split(" "),a=t[0],o=t[1],r=u[a];return r?r[o]?r[o]:r.default:u.default}function l(){return new RegExp("Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini").test(navigator.userAgent)}Object.defineProperty(t,"__esModule",{value:!0});var d=void 0,u={default:6,IE:{9:6,10:8,default:8},Firefox:{default:6},Opera:{10:8,11:6,12:6,default:6},Chrome:{default:6},Safari:{default:6}};t.getDefaultSimultaneousRequests=i,t.getMaxSimultaneousRequests=r,t.setMaxSimultaneousRequests=o,t.getBrowserInfo=n,t.isMobileDevice=l},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,a,n,o,i){function d(e){var o=e.detail;!1===n.hasMoved&&(n.hasMoved=!0),n.active=!0,n.x=o.currentPoints.image.x+v.x,n.y=o.currentPoints.image.y+v.y,i&&(n.x=Math.max(n.x,0),n.x=Math.min(n.x,o.image.width),n.y=Math.max(n.y,0),n.y=Math.min(n.y,o.image.height)),c.updateImage(f);var l=r.default.MEASUREMENT_MODIFIED,d={toolType:t,element:f,measurementData:a};(0,u.default)(f,l,d)}function s(){n.active=!1,f.removeEventListener(r.default.MOUSE_DRAG,d),f.removeEventListener(r.default.MOUSE_UP,s),f.removeEventListener(r.default.MOUSE_CLICK,s),c.updateImage(f),"function"==typeof o&&o()}var c=l.default.cornerstone,f=e.element,v={x:n.x-e.currentPoints.image.x,y:n.y-e.currentPoints.image.y};f.addEventListener(r.default.MOUSE_DRAG,d),f.addEventListener(r.default.MOUSE_UP,s),f.addEventListener(r.default.MOUSE_CLICK,s)};var o=a(1),r=n(o),i=a(0),l=n(i),d=a(5),u=n(d)},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,a,n,o,i){function d(e){var o=e.detail;n.active=!0,n.x=o.currentPoints.image.x,n.y=o.currentPoints.image.y,i&&(n.x=Math.max(n.x,0),n.x=Math.min(n.x,o.image.width),n.y=Math.max(n.y,0),n.y=Math.min(n.y,o.image.height)),m.updateImage(g);var l=r.default.MEASUREMENT_MODIFIED,d={toolType:t,element:g,measurementData:a};(0,u.default)(g,l,d)}function s(e){g.removeEventListener(r.default.MOUSE_MOVE,s),g.removeEventListener(r.default.MOUSE_DRAG,s),g.addEventListener(r.default.MOUSE_MOVE,d),g.addEventListener(r.default.MOUSE_DRAG,d),g.addEventListener(r.default.MOUSE_CLICK,v),e.type===r.default.MOUSE_DRAG&&g.addEventListener(r.default.MOUSE_UP,v)}function c(e){e.detail.measurementData===a&&v()}function f(e){e.detail.toolType===t&&(g.removeEventListener(r.default.MOUSE_MOVE,d),g.removeEventListener(r.default.MOUSE_DRAG,d),g.removeEventListener(r.default.MOUSE_CLICK,v),g.removeEventListener(r.default.MOUSE_UP,v),g.removeEventListener(r.default.MEASUREMENT_REMOVED,c),g.removeEventListener(r.default.TOOL_DEACTIVATED,f),n.active=!1,m.updateImage(g))}function v(){g.removeEventListener(r.default.MOUSE_MOVE,d),g.removeEventListener(r.default.MOUSE_DRAG,d),g.removeEventListener(r.default.MOUSE_CLICK,v),g.removeEventListener(r.default.MOUSE_UP,v),g.removeEventListener(r.default.MEASUREMENT_REMOVED,c),g.removeEventListener(r.default.TOOL_DEACTIVATED,f),n.active=!1,m.updateImage(g),"function"==typeof o&&o()}var m=l.default.cornerstone,g=e.element;g.addEventListener(r.default.MOUSE_DRAG,s),g.addEventListener(r.default.MOUSE_MOVE,s),g.addEventListener(r.default.MEASUREMENT_REMOVED,c),g.addEventListener(r.default.TOOL_DEACTIVATED,f)};var o=a(1),r=n(o),i=a(0),l=n(i),d=a(5),u=n(d)},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return{activate:function(t){t.removeEventListener(o.default.MOUSE_WHEEL,e),t.addEventListener(o.default.MOUSE_WHEEL,e)},disable:function(t){t.removeEventListener(o.default.MOUSE_WHEEL,e)},enable:function(t){t.removeEventListener(o.default.MOUSE_WHEEL,e)},deactivate:function(t){t.removeEventListener(o.default.MOUSE_WHEEL,e)}}};var n=a(1),o=function(e){return e&&e.__esModule?e:{default:e}}(n)},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t={};return{disable:function(t){t.removeEventListener(r.default.IMAGE_RENDERED,e)},enable:function(t){t.removeEventListener(r.default.IMAGE_RENDERED,e),t.addEventListener(r.default.IMAGE_RENDERED,e),l.default.cornerstone.updateImage(t)},getConfiguration:function(){return t},setConfiguration:function(e){t=e}}};var o=a(1),r=n(o),i=a(0),l=n(i)},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,a,n,o,i){function d(e){var o=e.detail;n.x=o.currentPoints.image.x+h.x,n.y=o.currentPoints.image.y+h.y,i&&(n.x=Math.max(n.x,0),n.x=Math.min(n.x,o.image.width),n.y=Math.max(n.y,0),n.y=Math.min(n.y,o.image.height)),v.updateImage(m);var l=r.default.MEASUREMENT_MODIFIED,d={toolType:t,element:m,measurementData:a};(0,u.default)(m,l,d)}function s(e){var t=e.detail;if(m.removeEventListener(r.default.TOUCH_DRAG,d),m.removeEventListener(r.default.TOUCH_PINCH,s),m.removeEventListener(r.default.TOUCH_END,s),m.removeEventListener(r.default.TAP,s),m.removeEventListener(r.default.TOUCH_START,c),m.removeEventListener(r.default.TOOL_DEACTIVATED,f),e.type===r.default.TOUCH_PINCH||e.type===r.default.TOUCH_PRESS)return n.active=!1,v.updateImage(m),void o();n.active=!1,a.active=!1,n.x=t.currentPoints.image.x+h.x,n.y=t.currentPoints.image.y+h.y,i&&(n.x=Math.max(n.x,0),n.x=Math.min(n.x,t.image.width),n.y=Math.max(n.y,0),n.y=Math.min(n.y,t.image.height)),v.updateImage(m),"function"==typeof o&&o()}function c(e){return e.stopImmediatePropagation(),!1}function f(){m.removeEventListener(r.default.TOUCH_DRAG,d),m.removeEventListener(r.default.TOUCH_PINCH,s),m.removeEventListener(r.default.TOUCH_END,s),m.removeEventListener(r.default.TAP,s),m.removeEventListener(r.default.TOUCH_START,c),m.removeEventListener(r.default.TOOL_DEACTIVATED,f),n.active=!1,a.active=!1,n.x=e.currentPoints.image.x+h.x,n.y=e.currentPoints.image.y+h.y,i&&(n.x=Math.max(n.x,0),n.x=Math.min(n.x,e.image.width),n.y=Math.max(n.y,0),n.y=Math.min(n.y,e.image.height)),v.updateImage(m)}var v=l.default.cornerstone,m=e.element,g=v.pageToPixel(m,e.currentPoints.page.x,e.currentPoints.page.y+50),h={x:n.x-g.x,y:n.y-g.y};n.active=!0,a.active=!0,m.addEventListener(r.default.TOUCH_DRAG,d),m.addEventListener(r.default.TOUCH_PINCH,s),m.addEventListener(r.default.TOUCH_END,s),m.addEventListener(r.default.TAP,s),m.addEventListener(r.default.TOUCH_START,c),m.addEventListener(r.default.TOOL_DEACTIVATED,f)};var o=a(1),r=n(o),i=a(0),l=n(i),d=a(5),u=n(d)},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var a=(0,f.default)(t.rowCosines),n=(0,f.default)(t.columnCosines),o=(0,f.default)(t.imagePositionPatient),r=e.clone().sub(o);return{x:a.dot(r)/t.columnPixelSpacing,y:n.dot(r)/t.rowPixelSpacing}}function r(e,t){var a=(0,f.default)(t.rowCosines),n=(0,f.default)(t.columnCosines),o=(0,f.default)(t.imagePositionPatient),r=a.clone().multiplyScalar(e.x);r.multiplyScalar(t.columnPixelSpacing);var i=n.clone().multiplyScalar(e.y);i.multiplyScalar(t.rowPixelSpacing);var l=r.add(i);return l.add(o),l}function i(e){var t=r({x:0,y:0},e),a=r({x:e.columns,y:0},e),n=r({x:0,y:e.rows},e),o=r({x:e.columns,y:e.rows},e);return{top:new s.default.cornerstoneMath.Line3(t,a),left:new s.default.cornerstoneMath.Line3(t,n),right:new s.default.cornerstoneMath.Line3(a,o),bottom:new s.default.cornerstoneMath.Line3(n,o)}}function l(e,t){var a=[];return Object.keys(t).forEach(function(n){var o=t[n],r=e.intersectLine(o);r&&a.push(r)}),a}function d(e,t){var a=(0,f.default)(e.rowCosines),n=(0,f.default)(e.columnCosines),o=(0,f.default)(e.imagePositionPatient),d=(0,f.default)(t.rowCosines),u=(0,f.default)(t.columnCosines),c=(0,f.default)(t.imagePositionPatient),v=a.clone().cross(n),m=new s.default.cornerstoneMath.Plane;m.setFromNormalAndCoplanarPoint(v,o);var g=d.clone().cross(u),h=new s.default.cornerstoneMath.Plane;h.setFromNormalAndCoplanarPoint(g,c);var p=h.clone().intersectPlane(m),E=p.origin,T=p.direction,M=r({x:t.columns,y:t.rows},t),y=c.distanceTo(M),O=new s.default.cornerstoneMath.Line3;O.start=E,O.end=E.clone().add(T.multiplyScalar(y));var x=i(t),_=l(O,x);if(2===_.length)return{start:_[0],end:_[1]}}Object.defineProperty(t,"__esModule",{value:!0}),t.projectPatientPointToImagePlane=o,t.imagePointToPatientPoint=r,t.planePlaneIntersection=d;var u=a(0),s=n(u),c=a(17),f=n(c)},function(e,t,a){"use strict";function n(e,t,a,n,o,r){if(!v.hasOwnProperty(a))throw new Error("Request type must be one of interaction, thumbnail, or prefetch");if(e&&t){var i={type:a,imageId:t,preventCache:n,doneCallback:o,failCallback:r},l=c.default.cornerstone.imageCache.getImageLoadObject(t);if(l)return void l.promise.then(function(e){o(e)},function(e){r(e)});v[a].push(i)}}function o(e){if(!v.hasOwnProperty(e))throw new Error("Request type must be one of interaction, thumbnail, or prefetch");v[e]=[]}function r(){h&&setTimeout(function(){l()},p)}function i(e){var t=c.default.cornerstone,a=e.type;m[a]++,h=!0;var n=e.imageId,o=e.doneCallback,i=e.failCallback,l=t.imageCache.getImageLoadObject(n);if(l)return void l.promise.then(function(e){m[a]--,o(e),r()},function(e){m[a]--,i(e),r()});var d=function(e){return"prefetch"===e.type?-5:"interactive"===e.type?0:"thumbnail"===e.type?5:void 0}(e),u=void 0;u=!0===e.preventCache?t.loadImage(n,{priority:d,type:e.type}):t.loadAndCacheImage(n,{priority:d,type:e.type}),u.then(function(e){m[a]--,o(e),r()},function(e){m[a]--,i(e),r()})}function l(){var e=(0,f.getMaxSimultaneousRequests)();g={interaction:Math.max(e,1),thumbnail:Math.max(e-2,1),prefetch:Math.max(e-1,1)};for(var t=m.interaction+m.thumbnail+m.prefetch,a=e-t,n=0;n<a;n++){var o=d();o&&i(o)}}function d(){return v.interaction.length&&m.interaction<g.interaction?v.interaction.shift():v.thumbnail.length&&m.thumbnail<g.thumbnail?v.thumbnail.shift():v.prefetch.length&&m.prefetch<g.prefetch?v.prefetch.shift():(v.interaction.length||v.thumbnail.length||v.prefetch.length||(h=!1),!1)}function u(){return v}Object.defineProperty(t,"__esModule",{value:!0});var s=a(0),c=function(e){return e&&e.__esModule?e:{default:e}}(s),f=a(22),v={interaction:[],thumbnail:[],prefetch:[]},m={interaction:0,thumbnail:0,prefetch:0},g={interaction:6,thumbnail:6,prefetch:5},h=!1,p=20;t.default={addRequest:n,clearRequestStack:o,startGrabbing:l,getRequestPool:u}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=(0,r.getToolState)(e,"stack");if(n&&n.data&&n.data.length){var i=n.data[0],l=i.currentImageIdIndex+t;if(a){l%=i.imageIds.length}else l=Math.min(i.imageIds.length-1,l),l=Math.max(0,l);(0,o.default)(e,l)}};var n=a(44),o=function(e){return e&&e.__esModule?e:{default:e}}(n),r=a(2)},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var a=Math.pow(10,t);return Math.round(e*a)/a}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var a=e.width/2,n=e.height/2;if(a<=0||n<=0)return!1;var o={x:e.left+a,y:e.top+n},r={x:t.x-o.x,y:t.y-o.y};return r.x*r.x/(a*a)+r.y*r.y/(n*n)<=1}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return e.stopPropagation&&e.stopPropagation(),e.preventDefault&&e.preventDefault(),e.cancelBubble=!0,e.returnValue=!1,!1}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,a,n,r){if(!e)throw new Error("getRGBPixels: parameter element must not be undefined");t=Math.round(t),a=Math.round(a);var i=o.default.cornerstone.getEnabledElement(e),l=[],d=0,u=i.image.getPixelData(),s=void 0,c=void 0,f=void 0;if(i.image.color)for(c=0;c<r;c++)for(f=0;f<n;f++){s=4*((c+a)*i.image.columns+(f+t));var v=u[s],m=u[s+1],g=u[s+2],h=u[s+3];l[d++]=v,l[d++]=m,l[d++]=g,l[d++]=h}return l};var n=a(0),o=function(e){return e&&e.__esModule?e:{default:e}}(n)},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return{page:o.default.cornerstoneMath.point.copy(e.page),image:o.default.cornerstoneMath.point.copy(e.image),client:o.default.cornerstoneMath.point.copy(e.client),canvas:o.default.cornerstoneMath.point.copy(e.canvas)}};var n=a(0),o=function(e){return e&&e.__esModule?e:{default:e}}(n)},function(e,t,a){"use strict";function n(e){r=e.currentPoints.canvas}function o(){return r}Object.defineProperty(t,"__esModule",{value:!0});var r=void 0,i={setCoords:n,getCoords:o};t.default=i},function(e,t,a){"use strict";function n(e){var t=void 0;return Object.keys(e).forEach(function(a){var n=e[a];if(!0===n.active)return void(t=n)}),t}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,a,o){o||(o=6);var i=n(t),l=(0,r.default)(e,t,a,o);return i!==l&&(void 0!==l&&(l.active=!0),void 0!==i&&(i.active=!1),!0)};var o=a(21),r=function(e){return e&&e.__esModule?e:{default:e}}(o)},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,a,n,o,i){function d(e){var a=e.detail;t.active=!0,Object.keys(t.handles).forEach(function(e){var n=t.handles[e];!0!==n.movesIndependently&&(n.x+=a.deltaPoints.image.x,n.y+=a.deltaPoints.image.y,!0===o.preventHandleOutsideImage&&(n.x=Math.max(n.x,0),n.x=Math.min(n.x,a.image.width),n.y=Math.max(n.y,0),n.y=Math.min(n.y,a.image.height)))}),v.updateImage(g);var i=r.default.MEASUREMENT_MODIFIED,l={toolType:n,element:g,measurementData:t};(0,f.default)(g,i,l),e.preventDefault(),e.stopPropagation()}function c(e){var a=e.detail;t.invalidated=!0,g.removeEventListener(r.default.MOUSE_DRAG,d),g.removeEventListener(r.default.MOUSE_UP,c),g.removeEventListener(r.default.MOUSE_CLICK,c),!0===o.deleteIfHandleOutsideImage&&(0,u.default)(a,t.handles)&&(0,s.removeToolState)(g,n,t),v.updateImage(g),"function"==typeof i&&i()}var v=l.default.cornerstone,m=e.detail,g=m.element;return g.addEventListener(r.default.MOUSE_DRAG,d),g.addEventListener(r.default.MOUSE_UP,c),g.addEventListener(r.default.MOUSE_CLICK,c),!0};var o=a(1),r=n(o),i=a(0),l=n(i),d=a(14),u=n(d),s=a(2),c=a(5),f=n(c)},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,a){var n=(0,i.getToolState)(e,"timeSeries");if(n&&n.data&&n.data.length){var o=r.default.cornerstone,l=n.data[0],u=l.stacks[l.currentStackIndex],s=u.currentImageIdIndex,c=l.currentStackIndex+t;if(a?(c>=l.stacks.length&&(c=0),c<0&&(c=l.stacks.length-1)):(c=Math.min(l.stacks.length-1,c),c=Math.max(0,c)),c!==l.currentStackIndex){var f=o.getViewport(e),v=l.stacks[c],m=d.default.getStartLoadHandler(),g=d.default.getEndLoadHandler(),h=d.default.getErrorLoadingHandler();m&&m(e);var p=void 0;p=!0===v.preventCache?o.loadImage(v.imageIds[s]):o.loadAndCacheImage(v.imageIds[s]),p.then(function(t){l.currentImageIdIndex!==s&&(v.currentImageIdIndex=s,l.currentStackIndex=c,o.displayImage(e,t,f),g&&g(e,t))},function(t){var a=v.imageIds[s];h&&h(e,a,t)})}}};var o=a(0),r=n(o),i=a(2),l=a(12),d=n(l)},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var a={},n=[o.default.MULTI_TOUCH_DRAG];return t&&!0===t.fireOnTouchStart&&n.push(o.default.MULTI_TOUCH_START),{activate:function(a){n.forEach(function(t){a.removeEventListener(t,e),a.addEventListener(t,e)}),t&&t.activateCallback&&t.activateCallback(a)},disable:function(a){n.forEach(function(t){a.removeEventListener(t,e)}),t&&t.disableCallback&&t.disableCallback(a)},enable:function(a){n.forEach(function(t){a.removeEventListener(t,e)}),t&&t.enableCallback&&t.enableCallback(a)},deactivate:function(a){n.forEach(function(t){a.removeEventListener(t,e)}),t&&t.deactivateCallback&&t.deactivateCallback(a)},getConfiguration:function(){return a},setConfiguration:function(e){a=e}}};var n=a(1),o=function(e){return e&&e.__esModule?e:{default:e}}(n)},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var a=(0,n.planePlaneIntersection)(e,t);if(a)return{start:(0,n.projectPatientPointToImagePlane)(a.start,e),end:(0,n.projectPatientPointToImagePlane)(a.end,e)}};var n=a(28)},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,a,n){var o=r.default.cornerstone,i=o.getEnabledElement(a).image,d=o.getEnabledElement(n).image;if(i&&d){var s=o.metaData.get("imagePlaneModule",i.imageId),f=o.metaData.get("imagePlaneModule",d.imageId);if(s&&f&&s.rowCosines&&s.columnCosines&&s.imagePositionPatient&&f.rowCosines&&f.columnCosines&&f.imagePositionPatient&&s.frameOfReferenceUID===f.frameOfReferenceUID){s.rowCosines=(0,v.default)(s.rowCosines),s.columnCosines=(0,v.default)(s.columnCosines),s.imagePositionPatient=(0,v.default)(s.imagePositionPatient),f.rowCosines=(0,v.default)(f.rowCosines),f.columnCosines=(0,v.default)(f.columnCosines),f.imagePositionPatient=(0,v.default)(f.imagePositionPatient);var m=s.rowCosines.clone().cross(s.columnCosines),g=f.rowCosines.clone().cross(f.columnCosines),h=m.angleTo(g);if(!((h=Math.abs(h))<.5)){var p=(0,l.default)(s,f);if(p){var E=o.pixelToCanvas(t.element,p.start),T=o.pixelToCanvas(t.element,p.end),M=u.default.getActiveColor(),y=c.default.getToolWidth();e.setTransform(1,0,0,1,0,0),e.save(),e.beginPath(),e.strokeStyle=M,e.lineWidth=y,e.moveTo(E.x,E.y),e.lineTo(T.x,T.y),e.stroke(),e.restore()}}}}};var o=a(0),r=n(o),i=a(41),l=n(i),d=a(6),u=n(d),s=a(8),c=n(s),f=a(17),v=n(f)},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=a(63),r=n(o),i=a(64),l=n(i),d={getOrientationString:r.default,invertOrientationString:l.default};t.default=d},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){function a(a){if(v.currentImageIdIndex===t){try{i.getEnabledElement(e)}catch(e){return}u?(u.currentImageIdIndex=t,u.render(e,o.data)):i.displayImage(e,a),h&&h(e,a)}}function n(a){var n=v.imageIds[t];p&&p(e,n,a)}var o=(0,d.getToolState)(e,"stack");if(o&&o.data&&o.data.length){var i=l.default.cornerstone,u=void 0;if(o.data.length>1){var c=(0,d.getToolState)(e,"stackRenderer");c&&c.data&&c.data.length&&(u=c.data[0])}var v=o.data[0];t<0&&(t+=v.imageIds.length);var g=f.default.getStartLoadHandler(),h=f.default.getEndLoadHandler(),p=f.default.getErrorLoadingHandler();if(t!==v.currentImageIdIndex){g&&g(e);var E={newImageIdIndex:t,direction:t-v.currentImageIdIndex};v.currentImageIdIndex=t;var T=v.imageIds[t],M=Boolean(v.preventCache),y=void 0;y=M?i.loadImage(T):i.loadAndCacheImage(T),y.then(a,n),s.default.startGrabbing(),(0,m.default)(e,r.default.STACK_SCROLL,E)}}};var o=a(1),r=n(o),i=a(0),l=n(i),d=a(2),u=a(29),s=n(u),c=a(12),f=n(c),v=a(5),m=n(v)},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,a,n,r){if(!e)throw new Error("getLuminance: parameter element must not be undefined");t=Math.round(t),a=Math.round(a);var i=o.default.cornerstone.getEnabledElement(e),l=i.image,d=[],u=0,s=l.getPixelData(),c=void 0,f=void 0,v=void 0;if(l.color)for(f=0;f<r;f++)for(v=0;v<n;v++){c=4*((f+a)*l.columns+(v+t));var m=s[c],g=s[c+1],h=s[c+2];d[u++]=.2126*m+.7152*g+.0722*h}else for(f=0;f<r;f++)for(v=0;v<n;v++)c=(f+a)*l.columns+(v+t),d[u++]=s[c]*l.slope+l.intercept;return d};var n=a(0),o=function(e){return e&&e.__esModule?e:{default:e}}(n)},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,a,n,o){var r=n/2*.5522848,i=o/2*.5522848,l=t+n,d=a+o,u=t+n/2,s=a+o/2;e.beginPath(),e.moveTo(t,s),e.bezierCurveTo(t,s-i,u-r,a,u,a),e.bezierCurveTo(u+r,a,l,s-i,l,s),e.bezierCurveTo(l,s+i,u+r,d,u,d),e.bezierCurveTo(u-r,d,t,s+i,t,s),e.closePath(),e.stroke()}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,a,n){e.beginPath(),e.strokeStyle=a,e.lineWidth=n,e.arc(t.x,t.y,6,0,2*Math.PI),e.stroke()}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,a,n,o){var r=Math.atan2(a.y-t.y,a.x-t.x);e.beginPath(),e.moveTo(t.x,t.y),e.lineTo(a.x,a.y),e.strokeStyle=n,e.lineWidth=o,e.stroke(),e.beginPath(),e.moveTo(a.x,a.y),e.lineTo(a.x-10*Math.cos(r-Math.PI/7),a.y-10*Math.sin(r-Math.PI/7)),e.lineTo(a.x-10*Math.cos(r+Math.PI/7),a.y-10*Math.sin(r+Math.PI/7)),e.lineTo(a.x,a.y),e.lineTo(a.x-10*Math.cos(r-Math.PI/7),a.y-10*Math.sin(r-Math.PI/7)),e.strokeStyle=n,e.lineWidth=o,e.stroke(),e.fillStyle=n,e.fill()}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){for(var a=0,n=0,r=0,i=0,l=t.top;l<t.top+t.height;l++)for(var d=t.left;d<t.left+t.width;d++){var u={x:d,y:l};(0,o.default)(t,u)&&(a+=e[i],n+=e[i]*e[i],r++),i++}if(0===r)return{count:r,mean:0,variance:0,stdDev:0};var s=a/r,c=n/r-s*s;return{count:r,mean:s,variance:c,stdDev:Math.sqrt(c)}};var n=a(32),o=function(e){return e&&e.__esModule?e:{default:e}}(n)},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t={};return{activate:function(t){t.removeEventListener(o.default.KEY_DOWN,e),t.addEventListener(o.default.KEY_DOWN,e)},disable:function(t){t.removeEventListener(o.default.KEY_DOWN,e)},enable:function(t){t.removeEventListener(o.default.KEY_DOWN,e)},deactivate:function(t){t.removeEventListener(o.default.KEY_DOWN,e)},getConfiguration:function(){return t},setConfiguration:function(e){t=e}}};var n=a(1),o=function(e){return e&&e.__esModule?e:{default:e}}(n)},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,a,n,o,i){function d(e){var a=e.detail;t.active=!0,Object.keys(t.handles).forEach(function(e){var n=t.handles[e];!0!==n.movesIndependently&&(n.x+=a.deltaPoints.image.x,n.y+=a.deltaPoints.image.y)}),g.updateImage(m);var o=r.default.MEASUREMENT_MODIFIED,i={toolType:n,element:m,measurementData:t};(0,f.default)(m,o,i),e.preventDefault(),e.stopPropagation()}function c(e){var a=e.detail;t.active=!1,t.invalidated=!1,m.removeEventListener(r.default.TOUCH_DRAG,d),m.removeEventListener(r.default.TOUCH_PINCH,c),m.removeEventListener(r.default.TOUCH_PRESS,c),m.removeEventListener(r.default.TOUCH_END,c),m.removeEventListener(r.default.TOUCH_DRAG_END,c),m.removeEventListener(r.default.TAP,c);var l=(0,u.default)(a,t.handles);!0===o&&!0===l&&(0,s.removeToolState)(m,n,t),g.updateImage(m),"function"==typeof i&&i(e)}var v=e.detail,m=v.element,g=l.default.cornerstone;return m.addEventListener(r.default.TOUCH_DRAG,d),m.addEventListener(r.default.TOUCH_PINCH,c),m.addEventListener(r.default.TOUCH_PRESS,c),m.addEventListener(r.default.TOUCH_END,c),m.addEventListener(r.default.TOUCH_DRAG_END,c),m.addEventListener(r.default.TAP,c),!0};var o=a(1),r=n(o),i=a(0),l=n(i),d=a(14),u=n(d),s=a(2),c=a(5),f=n(c)},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t,a,n,r){if(a.value){var i=d.default.cornerstone,l=(new Date).getTime(),u=Math.abs(t.y-r.y),s=u/10;if(u<1)return t.y=r.y,void(a.value=!1);t.y>r.y?t.y-=s:t.y<r.y&&(t.y+=s),i.updateImage(n.element),i.requestAnimationFrame(function(){o(l,t,a,n,r)})}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,a,n,r){function l(e){var o=e.detail;c.value=!1,!1===n.hasMoved&&(n.hasMoved=!0),n.active=!0;var r=o.currentPoints,l={x:r.page.x,y:r.page.y+E};M=m.pageToPixel(g,l.x,l.y),n.x=M.x,n.y=M.y,m.updateImage(g);var d=i.default.MEASUREMENT_MODIFIED,u={toolType:t,element:g,measurementData:a};(0,s.default)(g,d,u)}function u(e){var t=e.detail;c.value=!1,n.active=!1,g.removeEventListener(i.default.TOUCH_DRAG,l),f.forEach(function(e){g.removeEventListener(e,u)}),m.updateImage(g),e.type===i.default.TOUCH_PRESS&&(t.handlePressed=a,n.x=v.currentPoints.image.x,n.y=v.currentPoints.image.y),"function"==typeof r&&r(e)}c.value=!0;var v=e.detail,m=d.default.cornerstone,g=v.element,h=m.getEnabledElement(g),p=(new Date).getTime(),E=-57,T={x:v.currentPoints.page.x,y:v.currentPoints.page.y+E},M=m.pageToPixel(g,T.x,T.y);g.addEventListener(i.default.TOUCH_DRAG,l),f.forEach(function(e){g.addEventListener(e,u)}),o(p,n,c,h,M)};var r=a(1),i=n(r),l=a(0),d=n(l),u=a(5),s=n(u),c={value:!1},f=[i.default.TOUCH_END,i.default.TOUCH_DRAG_END,i.default.TOUCH_PINCH,i.default.TOUCH_PRESS,i.default.TAP]},function(e,t,a){"use strict";function n(e,t){var a=Date.now();if(e!==s){if(a-c<=d)return t.preventDefault(),t.stopPropagation(),t.stopImmediatePropagation(),!1;s=e}c=a}function o(e,t,a){var n=a?f:v;t.forEach(function(t){e.addEventListener(t,n)})}function r(e,t,a){var n=a?f:v;t.forEach(function(t){e.removeEventListener(t,n)})}function i(e){r(e,m,u.mouse),r(e,g,u.touch)}function l(e){i(e),o(e,m,u.mouse),o(e,g,u.touch)}Object.defineProperty(t,"__esModule",{value:!0});var d=2e3,u={mouse:0,touch:1},s=void 0,c=void 0,f=n.bind(null,u.mouse),v=n.bind(null,u.touch),m=["mousedown","mouseup"],g=["touchstart","touchend"],h={enable:l,disable:i};t.default=h},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return{activate:function(t){t.removeEventListener(o.default.DOUBLE_TAP,e),t.addEventListener(o.default.DOUBLE_TAP,e)},disable:function(t){t.removeEventListener(o.default.DOUBLE_TAP,e)},enable:function(t){t.removeEventListener(o.default.DOUBLE_TAP,e)},deactivate:function(t){t.removeEventListener(o.default.DOUBLE_TAP,e)}}};var n=a(1),o=function(e){return e&&e.__esModule?e:{default:e}}(n)},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){function a(a){var n=a.element,i=e.createNewMeasurement(a);i&&((0,O.addToolState)(a.element,h,i),n.removeEventListener(r.default.MOUSE_MOVE,o),(0,g.default)(a,h,i,i.handles.end,function(){i.active=!1,(0,T.default)(a,i.handles)&&(0,O.removeToolState)(a.element,h,i),n.addEventListener(r.default.MOUSE_MOVE,o)},t))}function n(e){var t=e.detail,n=t.element,o=(0,x.getToolOptions)(h,n);if((0,y.default)(t.which,o.mouseButtonMask))return a(t),!1}function o(t){var a=t.detail;u.default.setCoords(a);var n=(0,O.getToolState)(a.element,h);if(void 0!==n){for(var o=!1,r=a.currentPoints.canvas,i=0;i<n.data.length;i++){var d=n.data[i];!0===(0,v.default)(a.element,d.handles,r)&&(o=!0),(e.pointInsideRect(a.element,d,r)&&!d.active||!e.pointInsideRect(a.element,d,r)&&d.active)&&(d.active=!d.active,o=!0)}!0===o&&l.default.cornerstone.updateImage(a.element)}}function i(a){function n(){s.active=!1,(0,T.default)(i,s.handles)&&(0,O.removeToolState)(i.element,h,s),u.updateImage(i.element),d.addEventListener(r.default.MOUSE_MOVE,o)}var i=a.detail,d=i.element,u=l.default.cornerstone,s=void 0,f=(0,x.getToolOptions)(h,d);if((0,y.default)(i.which,f.mouseButtonMask)){var v=i.startPoints.canvas,m=(0,O.getToolState)(a.currentTarget,h),E=void 0;if(void 0!==m)for(E=0;E<m.data.length;E++){s=m.data[E];var M=(0,c.default)(i.element,s.handles,v,25);if(void 0!==M)return d.removeEventListener(r.default.MOUSE_MOVE,o),s.active=!0,(0,g.default)(i,h,s,M,n,t),a.stopImmediatePropagation(),!1}var _={deleteIfHandleOutsideImage:!0,preventHandleOutsideImage:t};if(void 0!==m&&void 0!==e.pointInsideRect)for(E=0;E<m.data.length;E++)if(s=m.data[E],e.pointInsideRect(i.element,s,v))return d.removeEventListener(r.default.MOUSE_MOVE,o),(0,p.default)(a,s,m,h,_,n),d.addEventListener(r.default.MOUSE_MOVE,o),a.stopImmediatePropagation(),!1}}function d(t){t.removeEventListener(r.default.IMAGE_RENDERED,e.onImageRendered),t.removeEventListener(r.default.MOUSE_MOVE,o),t.removeEventListener(r.default.MOUSE_DOWN,i),t.removeEventListener(r.default.MOUSE_DOWN_ACTIVATE,n),l.default.cornerstone.updateImage(t)}function s(t){t.removeEventListener(r.default.IMAGE_RENDERED,e.onImageRendered),t.removeEventListener(r.default.MOUSE_MOVE,o),t.removeEventListener(r.default.MOUSE_DOWN,i),t.removeEventListener(r.default.MOUSE_DOWN_ACTIVATE,n),t.addEventListener(r.default.IMAGE_RENDERED,e.onImageRendered),l.default.cornerstone.updateImage(t)}function f(t,a){(0,x.setToolOptions)(h,t,{mouseButtonMask:a}),t.removeEventListener(r.default.IMAGE_RENDERED,e.onImageRendered),t.removeEventListener(r.default.MOUSE_MOVE,o),t.removeEventListener(r.default.MOUSE_DOWN,i),t.removeEventListener(r.default.MOUSE_DOWN_ACTIVATE,n),t.addEventListener(r.default.IMAGE_RENDERED,e.onImageRendered),t.addEventListener(r.default.MOUSE_MOVE,o),t.addEventListener(r.default.MOUSE_DOWN,i),t.addEventListener(r.default.MOUSE_DOWN_ACTIVATE,n),l.default.cornerstone.updateImage(t)}function m(t,a){(0,x.setToolOptions)(h,t,{mouseButtonMask:a}),t.removeEventListener(r.default.IMAGE_RENDERED,e.onImageRendered),t.removeEventListener(r.default.MOUSE_MOVE,o),t.removeEventListener(r.default.MOUSE_DOWN,i),t.removeEventListener(r.default.MOUSE_DOWN_ACTIVATE,n),t.addEventListener(r.default.IMAGE_RENDERED,e.onImageRendered),t.addEventListener(r.default.MOUSE_MOVE,o),t.addEventListener(r.default.MOUSE_DOWN,i),l.default.cornerstone.updateImage(t)}var h=e.toolType;return{enable:s,disable:d,activate:f,deactivate:m}};var o=a(1),r=n(o),i=a(0),l=n(i),d=a(36),u=n(d),s=a(21),c=n(s),f=a(37),v=n(f),m=a(23),g=n(m),h=a(38),p=n(h),E=a(14),T=n(E),M=a(4),y=n(M),O=a(2),x=a(3)},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return{activate:function(t){t.removeEventListener(o.default.TOUCH_PINCH,e),t.addEventListener(o.default.TOUCH_PINCH,e)},disable:function(t){t.removeEventListener(o.default.TOUCH_PINCH,e)},enable:function(t){t.removeEventListener(o.default.TOUCH_PINCH,e)},deactivate:function(t){t.removeEventListener(o.default.TOUCH_PINCH,e)}}};var n=a(1),o=function(e){return e&&e.__esModule?e:{default:e}}(n)},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){function t(t){e.onMouseMove(t)}function a(o){var r=o.detail,l=r.element;e.onMouseUp(o),l.removeEventListener(i.default.MOUSE_DRAG,t),l.removeEventListener(i.default.MOUSE_DRAG,n),l.removeEventListener(i.default.MOUSE_UP,a),l.removeEventListener(i.default.MOUSE_CLICK,a)}function n(t){return e.onDrag(t),!1}function o(o){var r=o.detail,l=r.element,d=(0,m.getToolOptions)(f,l);if((0,v.default)(r.which,d.mouseButtonMask))return l.addEventListener(i.default.MOUSE_DRAG,n),l.addEventListener(i.default.MOUSE_UP,a),l.addEventListener(i.default.MOUSE_CLICK,a),e.onMouseDown(o),!1;l.addEventListener(i.default.MOUSE_DRAG,t),l.addEventListener(i.default.MOUSE_UP,a)}function r(t){var a=t.detail,n=a.element,o=(0,u.getToolState)(n,g),r=void 0;o?r=o.data[0].pixelData:(r=new Uint8ClampedArray(a.image.width*a.image.height),(0,u.addToolState)(n,g,{pixelData:r}));var i=d.default.cornerstone.getLayer(a.element,h);i.image.setPixelData(r),i.invalid=!0,d.default.cornerstone.updateImage(n),e.onImageRendered(t)}function l(e,a){(0,m.setToolOptions)(f,e,{mouseButtonMask:a}),e.removeEventListener(i.default.IMAGE_RENDERED,r),e.addEventListener(i.default.IMAGE_RENDERED,r),e.removeEventListener(i.default.MOUSE_DOWN_ACTIVATE,o),e.addEventListener(i.default.MOUSE_DOWN_ACTIVATE,o),e.removeEventListener(i.default.MOUSE_MOVE,t),e.addEventListener(i.default.MOUSE_MOVE,t);var n=d.default.cornerstone.getEnabledElement(e),l=n.image,s=l.width,c=l.height,v=new Uint8ClampedArray(s*c),E=p.getConfiguration(),T=E.colormapId;if(!T){T="BrushColorMap";var M=d.default.cornerstone.colors.getColormap(T);M.setNumberOfColors(2),M.setColor(0,[0,0,0,0]),M.setColor(1,[255,0,0,255])}var y={minPixelValue:0,maxPixelValue:1,slope:1,intercept:0,getPixelData:function(){return v},rows:n.image.height,columns:n.image.width,height:c,width:s,pixelData:v,setPixelData:function(e){v=e},colormap:T,color:!1,rgba:!1,labelmap:!0,invert:!1,columnPixelSpacing:1,rowPixelSpacing:1,sizeInBytes:n.image.width*n.image.height},O=void 0,x={viewport:{pixelReplication:!0}};h&&(O=d.default.cornerstone.getLayer(e,h)),O||(h=d.default.cornerstone.addLayer(e,y,x)),(0,u.addToolState)(e,g,{pixelData:v}),E.brushLayerId=h,p.setConfiguration(E),d.default.cornerstone.updateImage(e)}function s(e){e.removeEventListener(i.default.IMAGE_RENDERED,r),e.removeEventListener(i.default.MOUSE_DOWN_ACTIVATE,o),e.removeEventListener(i.default.MOUSE_MOVE,t)}var f=e.toolType,p=(0,c.default)({mouseMoveCallback:t,mouseDownActivateCallback:o,onImageRendered:r,deactivate:s});return p.activate=l,p}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var r=a(1),i=n(r),l=a(0),d=n(l),u=a(2),s=a(9),c=n(s),f=a(4),v=n(f),m=a(3),g="brush",h=void 0},function(e,t,a){"use strict";function n(e,t,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,r=Math.round(n),i=Math.round(o);if(1===e)return[[r,i]];for(var l=[],d=0,u=-e;u<=e;u++){var s=i+u;if(!(s>t||s<0))for(var c=-e;c<=e;c++){var f=r+c;f>a||f<0||c*c+u*u<e*e&&(l[d++]=[r+c,i+u])}}return l}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n},function(e,t,a){"use strict";function n(e,t,a,n){var o=function(e,t){return t*n+e};e.forEach(function(e){var n=o(e[0],e[1]);t[n]=a})}function o(e,t,a,n){var o=i.default.cornerstone.pixelToCanvas(n,{x:0,y:0}),r=i.default.cornerstone.pixelToCanvas(n,{x:1,y:1}),l=r.x-o.x,d=r.y-o.y;t.save(),t.fillStyle=a,e.forEach(function(e){var a=i.default.cornerstone.pixelToCanvas(n,{x:e[0],y:e[1]});t.fillRect(a.x,a.y,l,d)}),t.restore()}Object.defineProperty(t,"__esModule",{value:!0}),t.drawBrushOnCanvas=t.drawBrushPixels=void 0;var r=a(0),i=function(e){return e&&e.__esModule?e:{default:e}}(r);t.drawBrushPixels=n,t.drawBrushOnCanvas=o},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=a(0);Object.defineProperty(t,"external",{enumerable:!0,get:function(){return n(o).default}});var r=a(61);Object.defineProperty(t,"referenceLines",{enumerable:!0,get:function(){return n(r).default}});var i=a(43);Object.defineProperty(t,"orientation",{enumerable:!0,get:function(){return n(i).default}});var l=a(29);Object.defineProperty(t,"requestPoolManager",{enumerable:!0,get:function(){return n(l).default}});var d=a(65);Object.defineProperty(t,"setContextToDisplayFontSize",{enumerable:!0,get:function(){return n(d).default}});var u=a(44);Object.defineProperty(t,"scrollToIndex",{enumerable:!0,get:function(){return n(u).default}});var s=a(30);Object.defineProperty(t,"scroll",{enumerable:!0,get:function(){return n(s).default}});var c=a(31);Object.defineProperty(t,"roundToDecimal",{enumerable:!0,get:function(){return n(c).default}});var f=a(28);Object.defineProperty(t,"projectPatientPointToImagePlane",{enumerable:!0,get:function(){return f.projectPatientPointToImagePlane}}),Object.defineProperty(t,"imagePointToPatientPoint",{enumerable:!0,get:function(){return f.imagePointToPatientPoint}}),Object.defineProperty(t,"planePlaneIntersection",{enumerable:!0,get:function(){return f.planePlaneIntersection}});var v=a(19);Object.defineProperty(t,"pointInsideBoundingBox",{enumerable:!0,get:function(){return n(v).default}});var m=a(32);Object.defineProperty(t,"pointInEllipse",{enumerable:!0,get:function(){return n(m).default}});var g=a(33);Object.defineProperty(t,"pauseEvent",{enumerable:!0,get:function(){return n(g).default}});var h=a(4);Object.defineProperty(t,"isMouseButtonEnabled",{enumerable:!0,get:function(){return n(h).default}});var p=a(34);Object.defineProperty(t,"getRGBPixels",{enumerable:!0,get:function(){return n(p).default}});var E=a(22);Object.defineProperty(t,"getDefaultSimultaneousRequests",{enumerable:!0,get:function(){return E.getDefaultSimultaneousRequests}}),Object.defineProperty(t,"getMaxSimultaneousRequests",{enumerable:!0,get:function(){return E.getMaxSimultaneousRequests}}),Object.defineProperty(t,"getBrowserInfo",{enumerable:!0,get:function(){return E.getBrowserInfo}}),Object.defineProperty(t,"isMobileDevice",{enumerable:!0,get:function(){return E.isMobileDevice}});var T=a(45);Object.defineProperty(t,"getLuminance",{enumerable:!0,get:function(){return n(T).default}});var M=a(7);Object.defineProperty(t,"drawTextBox",{enumerable:!0,get:function(){return n(M).default}});var y=a(46);Object.defineProperty(t,"drawEllipse",{enumerable:!0,get:function(){return n(y).default}});var O=a(47);Object.defineProperty(t,"drawCircle",{enumerable:!0,get:function(){return n(O).default}});var x=a(48);Object.defineProperty(t,"drawArrow",{enumerable:!0,get:function(){return n(x).default}});var _=a(35);Object.defineProperty(t,"copyPoints",{enumerable:!0,get:function(){return n(_).default}});var b=a(20);Object.defineProperty(t,"calculateSUV",{enumerable:!0,get:function(){return n(b).default}});var S=a(49);Object.defineProperty(t,"calculateEllipseStatistics",{enumerable:!0,get:function(){return n(S).default}});var P=a(66);Object.defineProperty(t,"probeTool4D",{enumerable:!0,get:function(){return n(P).default}});var C=a(39);Object.defineProperty(t,"incrementTimePoint",{enumerable:!0,get:function(){return n(C).default}});var I=a(69);Object.defineProperty(t,"timeSeriesPlayer",{enumerable:!0,get:function(){return n(I).default}});var w=a(70);Object.defineProperty(t,"timeSeriesScroll",{enumerable:!0,get:function(){return w.timeSeriesScroll}}),Object.defineProperty(t,"timeSeriesScrollWheel",{enumerable:!0,get:function(){return w.timeSeriesScrollWheel}}),Object.defineProperty(t,"timeSeriesScrollTouchDrag",{enumerable:!0,get:function(){return w.timeSeriesScrollTouchDrag}});var L=a(71);Object.defineProperty(t,"wwwcSynchronizer",{enumerable:!0,get:function(){return n(L).default}});var D=a(72);Object.defineProperty(t,"updateImageSynchronizer",{enumerable:!0,get:function(){return n(D).default}});var U=a(73);Object.defineProperty(t,"Synchronizer",{enumerable:!0,get:function(){return n(U).default}});var A=a(74);Object.defineProperty(t,"stackScrollSynchronizer",{enumerable:!0,get:function(){return n(A).default}});var R=a(75);Object.defineProperty(t,"stackImagePositionSynchronizer",{enumerable:!0,get:function(){return n(R).default}});var k=a(76);Object.defineProperty(t,"stackImagePositionOffsetSynchronizer",{enumerable:!0,get:function(){return n(k).default}});var j=a(77);Object.defineProperty(t,"stackImageIndexSynchronizer",{enumerable:!0,get:function(){return n(j).default}});var N=a(78);Object.defineProperty(t,"panZoomSynchronizer",{enumerable:!0,get:function(){return n(N).default}});var H=a(8);Object.defineProperty(t,"toolStyle",{enumerable:!0,get:function(){return n(H).default}});var V=a(2);Object.defineProperty(t,"addToolState",{enumerable:!0,get:function(){return V.addToolState}}),Object.defineProperty(t,"getToolState",{enumerable:!0,get:function(){return V.getToolState}}),Object.defineProperty(t,"removeToolState",{enumerable:!0,get:function(){return V.removeToolState}}),Object.defineProperty(t,"clearToolState",{enumerable:!0,get:function(){return V.clearToolState}}),Object.defineProperty(t,"setElementToolStateManager",{enumerable:!0,get:function(){return V.setElementToolStateManager}}),Object.defineProperty(t,"getElementToolStateManager",{enumerable:!0,get:function(){return V.getElementToolStateManager}});var B=a(36);Object.defineProperty(t,"toolCoordinates",{enumerable:!0,get:function(){return n(B).default}});var W=a(6);Object.defineProperty(t,"toolColors",{enumerable:!0,get:function(){return n(W).default}});var G=a(79);Object.defineProperty(t,"addTimeSeriesStateManager",{enumerable:!0,get:function(){return G.addTimeSeriesStateManager}}),Object.defineProperty(t,"newTimeSeriesSpecificToolStateManager",{enumerable:!0,get:function(){return G.newTimeSeriesSpecificToolStateManager}});var F=a(13);Object.defineProperty(t,"textStyle",{enumerable:!0,get:function(){return n(F).default}});var Y=a(80);Object.defineProperty(t,"stackSpecificStateManager",{enumerable:!0,get:function(){return Y.stackSpecificStateManager}}),Object.defineProperty(t,"newStackSpecificToolStateManager",{enumerable:!0,get:function(){return Y.newStackSpecificToolStateManager}}),Object.defineProperty(t,"addStackStateManager",{enumerable:!0,get:function(){return Y.addStackStateManager}});var z=a(12);Object.defineProperty(t,"loadHandlerManager",{enumerable:!0,get:function(){return n(z).default}});var K=a(18);Object.defineProperty(t,"newImageIdSpecificToolStateManager",{enumerable:!0,get:function(){return K.newImageIdSpecificToolStateManager}}),Object.defineProperty(t,"globalImageIdSpecificToolStateManager",{enumerable:!0,get:function(){return K.globalImageIdSpecificToolStateManager}});var X=a(81);Object.defineProperty(t,"newFrameOfReferenceSpecificToolStateManager",{enumerable:!0,get:function(){return X.newFrameOfReferenceSpecificToolStateManager}}),Object.defineProperty(t,"globalFrameOfReferenceSpecificToolStateManager",{enumerable:!0,get:function(){return X.globalFrameOfReferenceSpecificToolStateManager}});var q=a(82);Object.defineProperty(t,"appState",{enumerable:!0,get:function(){return n(q).default}});var Z=a(83);Object.defineProperty(t,"stackScrollKeyboard",{enumerable:!0,get:function(){return n(Z).default}});var J=a(84);Object.defineProperty(t,"stackScroll",{enumerable:!0,get:function(){return J.stackScroll}}),Object.defineProperty(t,"stackScrollWheel",{enumerable:!0,get:function(){return J.stackScrollWheel}}),Object.defineProperty(t,"stackScrollTouchDrag",{enumerable:!0,get:function(){return J.stackScrollTouchDrag}}),Object.defineProperty(t,"stackScrollMultiTouch",{enumerable:!0,get:function(){return J.stackScrollMultiTouch}});var Q=a(85);Object.defineProperty(t,"stackPrefetch",{enumerable:!0,get:function(){return n(Q).default}});var $=a(86);Object.defineProperty(t,"scrollIndicator",{enumerable:!0,get:function(){return n($).default}});var ee=a(87);Object.defineProperty(t,"stackRenderers",{enumerable:!0,get:function(){return n(ee).default}});var te=a(89);Object.defineProperty(t,"playClip",{enumerable:!0,get:function(){return te.playClip}}),Object.defineProperty(t,"stopClip",{enumerable:!0,get:function(){return te.stopClip}});var ae=a(14);Object.defineProperty(t,"anyHandlesOutsideImage",{enumerable:!0,get:function(){return n(ae).default}});var ne=a(10);Object.defineProperty(t,"drawHandles",{enumerable:!0,get:function(){return n(ne).default}});var oe=a(21);Object.defineProperty(t,"getHandleNearImagePoint",{enumerable:!0,get:function(){return n(oe).default}});var re=a(37);Object.defineProperty(t,"handleActivator",{enumerable:!0,get:function(){return n(re).default}});var ie=a(38);Object.defineProperty(t,"moveAllHandles",{enumerable:!0,get:function(){return n(ie).default}});var le=a(23);Object.defineProperty(t,"moveHandle",{enumerable:!0,get:function(){return n(le).default}});var de=a(24);Object.defineProperty(t,"moveNewHandle",{enumerable:!0,get:function(){return n(de).default}});var ue=a(27);Object.defineProperty(t,"moveNewHandleTouch",{enumerable:!0,get:function(){return n(ue).default}});var se=a(51);Object.defineProperty(t,"touchMoveAllHandles",{enumerable:!0,get:function(){return n(se).default}});var ce=a(52);Object.defineProperty(t,"touchMoveHandle",{enumerable:!0,get:function(){return n(ce).default}});var fe=a(90);Object.defineProperty(t,"keyboardInput",{enumerable:!0,get:function(){return n(fe).default}});var ve=a(91);Object.defineProperty(t,"mouseInput",{enumerable:!0,get:function(){return n(ve).default}});var me=a(92);Object.defineProperty(t,"mouseWheelInput",{enumerable:!0,get:function(){return n(me).default}});var ge=a(53);Object.defineProperty(t,"preventGhostClick",{enumerable:!0,get:function(){return n(ge).default}});var he=a(93);Object.defineProperty(t,"touchInput",{enumerable:!0,get:function(){return n(he).default}});var pe=a(94);Object.defineProperty(t,"angle",{enumerable:!0,get:function(){return pe.angle}}),Object.defineProperty(t,"angleTouch",{enumerable:!0,get:function(){return pe.angleTouch}});var Ee=a(95);Object.defineProperty(t,"arrowAnnotate",{enumerable:!0,get:function(){return Ee.arrowAnnotate}}),Object.defineProperty(t,"arrowAnnotateTouch",{enumerable:!0,get:function(){return Ee.arrowAnnotateTouch}});var Te=a(96);Object.defineProperty(t,"crosshairs",{enumerable:!0,get:function(){return Te.crosshairs}}),Object.defineProperty(t,"crosshairsTouch",{enumerable:!0,get:function(){return Te.crosshairsTouch}});var Me=a(26);Object.defineProperty(t,"displayTool",{enumerable:!0,get:function(){return n(Me).default}});var ye=a(54);Object.defineProperty(t,"doubleTapTool",{enumerable:!0,get:function(){return n(ye).default}});var Oe=a(97);Object.defineProperty(t,"doubleTapZoom",{enumerable:!0,get:function(){return n(Oe).default}});var xe=a(98);Object.defineProperty(t,"dragProbe",{enumerable:!0,get:function(){return xe.dragProbe}}),Object.defineProperty(t,"dragProbeTouch",{enumerable:!0,get:function(){return xe.dragProbeTouch}});var _e=a(99);Object.defineProperty(t,"ellipticalRoi",{enumerable:!0,get:function(){return _e.ellipticalRoi}}),Object.defineProperty(t,"ellipticalRoiTouch",{enumerable:!0,get:function(){return _e.ellipticalRoiTouch}});var be=a(100);Object.defineProperty(t,"freehand",{enumerable:!0,get:function(){return be.freehand}});var Se=a(101);Object.defineProperty(t,"highlight",{enumerable:!0,get:function(){return Se.highlight}}),Object.defineProperty(t,"highlightTouch",{enumerable:!0,get:function(){return Se.highlightTouch}});var Pe=a(102);Object.defineProperty(t,"imageStats",{enumerable:!0,get:function(){return n(Pe).default}});var Ce=a(50);Object.defineProperty(t,"keyboardTool",{enumerable:!0,get:function(){return n(Ce).default}});var Ie=a(103);Object.defineProperty(t,"length",{enumerable:!0,get:function(){return Ie.length}}),Object.defineProperty(t,"lengthTouch",{enumerable:!0,get:function(){return Ie.lengthTouch}});var we=a(104);Object.defineProperty(t,"magnify",{enumerable:!0,get:function(){return we.magnify}}),Object.defineProperty(t,"magnifyTouchDrag",{enumerable:!0,get:function(){return we.magnifyTouchDrag}});var Le=a(55);Object.defineProperty(t,"mouseButtonRectangleTool",{enumerable:!0,get:function(){return n(Le).default}});var De=a(9);Object.defineProperty(t,"mouseButtonTool",{enumerable:!0,get:function(){return n(De).default}});var Ue=a(25);Object.defineProperty(t,"mouseWheelTool",{enumerable:!0,get:function(){return n(Ue).default}});var Ae=a(40);Object.defineProperty(t,"multiTouchDragTool",{enumerable:!0,get:function(){return n(Ae).default}});var Re=a(105);Object.defineProperty(t,"orientationMarkers",{enumerable:!0,get:function(){return n(Re).default}});var ke=a(106);Object.defineProperty(t,"pan",{enumerable:!0,get:function(){return ke.pan}}),Object.defineProperty(t,"panTouchDrag",{enumerable:!0,get:function(){return ke.panTouchDrag}});var je=a(107);Object.defineProperty(t,"panMultiTouch",{enumerable:!0,get:function(){return n(je).default}});var Ne=a(108);Object.defineProperty(t,"probe",{enumerable:!0,get:function(){return Ne.probe}}),Object.defineProperty(t,"probeTouch",{enumerable:!0,get:function(){return Ne.probeTouch}});var He=a(109);Object.defineProperty(t,"rectangleRoi",{enumerable:!0,get:function(){return He.rectangleRoi}}),Object.defineProperty(t,"rectangleRoiTouch",{enumerable:!0,get:function(){return He.rectangleRoiTouch}});var Ve=a(110);Object.defineProperty(t,"rotate",{enumerable:!0,get:function(){return Ve.rotate}}),Object.defineProperty(t,"rotateTouchDrag",{enumerable:!0,get:function(){return Ve.rotateTouchDrag}});var Be=a(111);Object.defineProperty(t,"rotateTouch",{enumerable:!0,get:function(){return n(Be).default}});var We=a(112);Object.defineProperty(t,"saveAs",{enumerable:!0,get:function(){return n(We).default}});var Ge=a(113);Object.defineProperty(t,"seedAnnotate",{enumerable:!0,get:function(){return Ge.seedAnnotate}}),Object.defineProperty(t,"seedAnnotateTouch",{enumerable:!0,get:function(){return Ge.seedAnnotateTouch}});var Fe=a(114);Object.defineProperty(t,"simpleAngle",{enumerable:!0,get:function(){return Fe.simpleAngle}}),Object.defineProperty(t,"simpleAngleTouch",{enumerable:!0,get:function(){return Fe.simpleAngleTouch}});var Ye=a(16);Object.defineProperty(t,"simpleMouseButtonTool",{enumerable:!0,get:function(){return n(Ye).default}});var ze=a(115);Object.defineProperty(t,"textMarker",{enumerable:!0,get:function(){return ze.textMarker}}),Object.defineProperty(t,"textMarkerTouch",{enumerable:!0,get:function(){return ze.textMarkerTouch}});var Ke=a(15);Object.defineProperty(t,"touchDragTool",{enumerable:!0,get:function(){return n(Ke).default}});var Xe=a(56);Object.defineProperty(t,"touchPinchTool",{enumerable:!0,get:function(){return n(Xe).default}});var qe=a(11);Object.defineProperty(t,"touchTool",{enumerable:!0,get:function(){return n(qe).default}});var Ze=a(116);Object.defineProperty(t,"wwwc",{enumerable:!0,get:function(){return Ze.wwwc}}),Object.defineProperty(t,"wwwcTouchDrag",{enumerable:!0,get:function(){return Ze.wwwcTouchDrag}});var Je=a(117);Object.defineProperty(t,"wwwcRegion",{enumerable:!0,get:function(){return Je.wwwcRegion}}),Object.defineProperty(t,"wwwcRegionTouch",{enumerable:!0,get:function(){return Je.wwwcRegionTouch}});var Qe=a(118);Object.defineProperty(t,"zoom",{enumerable:!0,get:function(){return Qe.zoom}}),Object.defineProperty(t,"zoomWheel",{enumerable:!0,get:function(){return Qe.zoomWheel}}),Object.defineProperty(t,"zoomTouchPinch",{enumerable:!0,get:function(){return Qe.zoomTouchPinch}}),Object.defineProperty(t,"zoomTouchDrag",{enumerable:!0,get:function(){return Qe.zoomTouchDrag}});var $e=a(119);Object.defineProperty(t,"brush",{enumerable:!0,get:function(){return $e.brush}});var et=a(120);Object.defineProperty(t,"adaptiveBrush",{enumerable:!0,get:function(){return et.adaptiveBrush}});var tt=a(121);Object.defineProperty(t,"version",{enumerable:!0,get:function(){return n(tt).default}});var at=a(3);Object.defineProperty(t,"setToolOptions",{enumerable:!0,get:function(){return at.setToolOptions}}),Object.defineProperty(t,"getToolOptions",{enumerable:!0,get:function(){return at.getToolOptions}})},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=a(41),r=n(o),i=a(62),l=n(i),d=a(42),u=n(d),s={calculateReferenceLine:r.default,tool:l.default,renderActiveReferenceLine:u.default};t.default=s},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.detail,a=(0,c.getToolState)(e.currentTarget,m);if(void 0!==a){var n=a.data[0].synchronizationContext,o=n.getSourceElements(),r=a.data[0].renderer,i=t.canvasContext.canvas.getContext("2d");s.default.cornerstone.setToPixelCoordinateSystem(t.enabledElement,i),o.forEach(function(a){a!==e.currentTarget&&r(i,t,e.currentTarget,a)})}}function r(e,t,a){a=a||v.default,(0,c.addToolState)(e,m,{synchronizationContext:t,renderer:a}),e.removeEventListener(d.default.IMAGE_RENDERED,o),e.addEventListener(d.default.IMAGE_RENDERED,o),s.default.cornerstone.updateImage(e)}function i(e){e.removeEventListener(d.default.IMAGE_RENDERED,o),s.default.cornerstone.updateImage(e)}Object.defineProperty(t,"__esModule",{value:!0});var l=a(1),d=n(l),u=a(0),s=n(u),c=a(2),f=a(42),v=n(f),m="referenceLines",g={enable:r,disable:i};t.default=g},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){for(var t=(0,l.default)(e),a="",n=t.x<0?"R":"L",o=t.y<0?"A":"P",i=t.z<0?"F":"H",d=new r.default.cornerstoneMath.Vector3(Math.abs(t.x),Math.abs(t.y),Math.abs(t.z)),u=0;u<3;u++)if(d.x>1e-4&&d.x>d.y&&d.x>d.z)a+=n,d.x=0;else if(d.y>1e-4&&d.y>d.x&&d.y>d.z)a+=o,d.y=0;else{if(!(d.z>1e-4&&d.z>d.x&&d.z>d.y))break;a+=i,d.z=0}return a};var o=a(0),r=n(o),i=a(17),l=n(i)},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.replace("H","f");return t=t.replace("F","h"),t=t.replace("R","l"),t=t.replace("L","r"),t=t.replace("A","p"),t=t.replace("P","a"),t=t.toUpperCase()}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,a){return o.default.cornerstone.setToPixelCoordinateSystem(e,t,.1),{fontSize:a/e.viewport.scale/.1,lineHeight:a/e.viewport.scale/.1,fontScale:.1}};var n=a(0),o=function(e){return e&&e.__esModule?e:{default:e}}(n)},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=d.default.cornerstone,a=[];e.timeSeries.stacks.forEach(function(n){var o=void 0;o=!0===n.preventCache?t.loadImage(n.imageIds[e.imageIdIndex]):t.loadAndCacheImage(n.imageIds[e.imageIdIndex]),o.then(function(t){var n=Math.round(e.handles.end.x)+Math.round(e.handles.end.y)*t.width,o=t.getPixelData()[n];a.push(o)})}),e.lineSample.set(a)}function r(e){var t=(0,v.getToolState)(e.element,"timeSeries");if(void 0!==t&&void 0!==t.data&&0!==t.data.length){var a=t.data[0],n={timeSeries:a,lineSample:new p.default,imageIdIndex:a.stacks[a.currentStackIndex].currentImageIdIndex,visible:!0,handles:{end:{x:e.currentPoints.image.x,y:e.currentPoints.image.y,highlight:!0,active:!0}}};return o(n),g.default.add(n),n}}function i(e){var t=d.default.cornerstone,a=e.detail,n=(0,v.getToolState)(e.currentTarget,O);if(n){var o=a.canvasContext;o.setTransform(1,0,0,1,0,0);for(var r=T.default.getFont(),i=0;i<n.data.length;i++){o.save();var l=n.data[i];o.beginPath(),(0,f.default)(o,a,l.handles,"white"),o.stroke(),o.font=r;var u={x:l.handles.end.x+3,y:l.handles.end.y-3},s=t.pixelToCanvas(a.element,u);o.fillStyle="white",(0,y.default)(o,l.handles.end.x+", "+l.handles.end.y,s.x,s.y,"white"),o.restore()}}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(0),d=n(l),u=a(9),s=n(u),c=a(10),f=n(c),v=a(2),m=a(67),g=n(m),h=a(68),p=n(h),E=a(13),T=n(E),M=a(7),y=n(M),O="probe4D",x=(0,s.default)({createNewMeasurement:r,onImageRendered:i,toolType:O});t.default=x},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(){var e=d.default.cornerstone,t=this;t.measurements=[],this.add=function(a){var n=t.measurements.push(a),o={index:n,measurement:a};(0,s.default)(e.events,i.default.MEASUREMENT_ADDED,o)},this.remove=function(a){var n=t.measurements[a];t.measurements.splice(a,1);var o={index:a,measurement:n};(0,s.default)(e.events,i.default.MEASUREMENT_REMOVED,o)}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(1),i=n(r),l=a(0),d=n(l),u=a(5),s=n(u),c=new o;t.default=c},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=l.default.cornerstone,t=this;t.samples=[],this.set=function(a){t.samples=a,(0,u.default)(e.events,r.default.LINE_SAMPLE_UPDATED)}};var o=a(1),r=n(o),i=a(0),l=n(i),d=a(5),u=n(d)},function(e,t,a){"use strict";function n(e,t){if(void 0===e)throw new Error("playClip: element must not be undefined");void 0===t&&(t=30);var a=(0,r.getToolState)(e,"timeSeries");if(void 0!==a&&void 0!==a.data&&0!==a.data.length){var n=(0,r.getToolState)(e,d),o=void 0;void 0===n||0===n.data.length?(o={intervalId:void 0,framesPerSecond:t,lastFrameTimeStamp:void 0,frameRate:0},(0,r.addToolState)(e,d,o)):(o=n.data[0],o.framesPerSecond=t),void 0===o.intervalId&&(o.intervalId=setInterval(function(){o.framesPerSecond>0?(0,l.default)(e,1,!0):(0,l.default)(e,-1,!0)},1e3/Math.abs(o.framesPerSecond)))}}function o(e){var t=(0,r.getToolState)(e,d);if(t&&t.data&&t.data.length){var a=t.data[0];clearInterval(a.intervalId),a.intervalId=void 0}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(2),i=a(39),l=function(e){return e&&e.__esModule?e:{default:e}}(i),d="timeSeriesPlayer",u={start:n,stop:o};t.default=u},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.detail,a=t.element;a.removeEventListener(s.default.MOUSE_DRAG,i),a.removeEventListener(s.default.MOUSE_UP,o),a.removeEventListener(s.default.MOUSE_CLICK,o)}function r(e){var t=e.detail,a=t.element,n=(0,O.getToolOptions)(x,a);if((0,M.default)(t.which,n.mouseButtonMask))return n.deltaY=0,(0,O.setToolOptions)(x,a,n),a.addEventListener(s.default.MOUSE_DRAG,i),a.addEventListener(s.default.MOUSE_UP,o),a.addEventListener(s.default.MOUSE_CLICK,o),e.stopImmediatePropagation(),!1}function i(e){var t=e.detail,a=t.element;e.data.deltaY+=t.deltaPoints.page.y;var n=(0,y.getToolState)(t.element,"timeSeries");if(void 0!==n&&void 0!==n.data&&0!==n.data.length){var o=n.data[0],r=a.offsetHeight/o.stacks.length;if(void 0!==e.data.options&&void 0!==e.data.options.timeSeriesScrollSpeed&&(r=e.data.options.timeSeriesScrollSpeed),e.data.deltaY>=r||e.data.deltaY<=-r){var i=Math.round(e.data.deltaY/r),l=e.data.deltaY%r;(0,E.default)(t.element,i),e.data.deltaY=l}return!1}}function l(e){var t=e.detail,a=-t.direction;(0,E.default)(t.element,a)}function d(e){var t=e.originalEvent.detail,a={deltaY:0};a.deltaY+=t.deltaPoints.page.y;var n=(0,y.getToolState)(t.element,"stack");if(void 0!==n&&void 0!==n.data&&0!==n.data.length){if(a.deltaY>=3||a.deltaY<=-3){var o=a.deltaY/3,r=a.deltaY%3;(0,E.default)(a.element,o),a.deltaY=r}return!1}}Object.defineProperty(t,"__esModule",{value:!0}),t.timeSeriesScrollTouchDrag=t.timeSeriesScrollWheel=t.timeSeriesScroll=void 0;var u=a(1),s=n(u),c=a(16),f=n(c),v=a(15),m=n(v),g=a(25),h=n(g),p=a(39),E=n(p),T=a(4),M=n(T),y=a(2),O=a(3),x="timeSeriesScroll",_=(0,f.default)(r,x),b=(0,h.default)(l),S=(0,m.default)(d);t.timeSeriesScroll=_,t.timeSeriesScrollWheel=b,t.timeSeriesScrollTouchDrag=S},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,a){if(a!==t){var n=o.default.cornerstone,r=n.getViewport(t),i=n.getViewport(a);i.voi.windowWidth===r.voi.windowWidth&&i.voi.windowCenter===r.voi.windowCenter&&i.invert===r.invert||(i.voi.windowWidth=r.voi.windowWidth,i.voi.windowCenter=r.voi.windowCenter,i.invert=r.invert,e.setViewport(a,i))}};var n=a(0),o=function(e){return e&&e.__esModule?e:{default:e}}(n)},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,a){a!==t&&o.default.cornerstone.updateImage(a)};var n=a(0),o=function(e){return e&&e.__esModule?e:{default:e}}(n)},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){return e.filter(function(e,t,a){return a.indexOf(e)===t})}function r(e,t){function a(e,t){s.length&&f.length&&(v=!0,f.forEach(function(a){var n=f.indexOf(a);if(-1!==n){var o=m.imageIds.targetElements[n],r=s.indexOf(e);if(-1!==r){var i=m.imageIds.sourceElements[r],l=void 0;i===o?l=0:void 0!==m.distances[i]&&(l=m.distances[i][o]),g(d,e,a,t,l)}}}),v=!1)}function n(e){var t=e.detail;!0!==v&&a(e.currentTarget,t)}function r(e){var t=e.detail.element;d.remove(t)}var i=u.default.cornerstone,d=this,s=[],f=[],v=!1,m={},g=t;this.setHandler=function(e){g=e},this.getHandler=function(){return g},this.getDistances=function(){s.length&&f.length&&(m.distances={},m.imageIds={sourceElements:[],targetElements:[]},s.forEach(function(e){var t=i.getEnabledElement(e);if(t&&t.image){var a=t.image.imageId,n=i.metaData.get("imagePlaneModule",a);if(n&&n.imagePositionPatient){var o=(0,c.default)(n.imagePositionPatient);m.hasOwnProperty(t)||(m.distances[a]={},m.imageIds.sourceElements.push(a),f.forEach(function(t){var n=i.getEnabledElement(t);if(n&&n.image){var r=n.image.imageId;if(m.imageIds.targetElements.push(r),e!==t&&a!==r&&!m.distances[a].hasOwnProperty(r)){var l=i.metaData.get("imagePlaneModule",r);if(l&&l.imagePositionPatient){var d=(0,c.default)(l.imagePositionPatient);m.distances[a][r]=d.clone().sub(o)}}}}),Object.keys(m.distances[a]).length||delete m.distances[a])}}}))},this.addSource=function(t){-1===s.indexOf(t)&&(s.push(t),t.addEventListener(e,n),d.getDistances(),d.updateDisableHandlers())},this.addTarget=function(e){-1===f.indexOf(e)&&(f.push(e),d.getDistances(),g(d,e,e,0),d.updateDisableHandlers())},this.add=function(e){d.addSource(e),d.addTarget(e)},this.removeSource=function(t){var o=s.indexOf(t);-1!==o&&(s.splice(o,1),t.removeEventListener(e,n),d.getDistances(),a(t),d.updateDisableHandlers())},this.removeTarget=function(e){var t=f.indexOf(e);-1!==t&&(f.splice(t,1),d.getDistances(),g(d,e,e,0),d.updateDisableHandlers())},this.remove=function(e){d.removeTarget(e),d.removeSource(e)},this.getSourceElements=function(){return s},this.getTargetElements=function(){return f},this.displayImage=function(e,t,a){v=!0,i.displayImage(e,t,a),v=!1},this.setViewport=function(e,t){v=!0,i.setViewport(e,t),v=!1},this.updateDisableHandlers=function(){o(s.concat(f)).forEach(function(e){e.removeEventListener(l.default.ELEMENT_DISABLED,r),e.addEventListener(l.default.ELEMENT_DISABLED,r)})},this.destroy=function(){o(s.concat(f)).forEach(function(e){d.remove(e)})}}Object.defineProperty(t,"__esModule",{value:!0});var i=a(1),l=n(i),d=a(0),u=n(d),s=a(17),c=n(s);t.default=r},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,a,n){if(t!==a&&n&&n.direction){var o=r.default.cornerstone,l=(0,i.getToolState)(a,"stack"),u=l.data[0],s=u.currentImageIdIndex+n.direction;if(s=Math.min(Math.max(s,0),u.imageIds.length-1),u.currentImageIdIndex!==s){var c=d.default.getStartLoadHandler(),f=d.default.getEndLoadHandler(),v=d.default.getErrorLoadingHandler();c&&c(a);var m=void 0;m=!0===u.preventCache?o.loadImage(u.imageIds[s]):o.loadAndCacheImage(u.imageIds[s]),m.then(function(t){var n=o.getViewport(a);u.currentImageIdIndex=s,e.displayImage(a,t,n),f&&f(a,t)},function(e){var t=u.imageIds[s];v&&v(a,t,e)})}}};var o=a(0),r=n(o),i=a(2),l=a(12),d=n(l)},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,a){if(a!==t){var n=r.default.cornerstone,o=n.getEnabledElement(t).image,l=n.metaData.get("imagePlaneModule",o.imageId);if(void 0!==l&&void 0!==l.imagePositionPatient){var u=(0,s.default)(l.imagePositionPatient),c=(0,i.getToolState)(a,"stack"),f=c.data[0],v=Number.MAX_VALUE,m=-1;if(f.imageIds.forEach(function(e,t){var a=n.metaData.get("imagePlaneModule",e);if(void 0!==a&&void 0!==a.imagePositionPatient){var o=(0,s.default)(a.imagePositionPatient),r=o.distanceToSquared(u);r<v&&(v=r,m=t)}}),m!==f.currentImageIdIndex){var g=d.default.getStartLoadHandler(),h=d.default.getEndLoadHandler(),p=d.default.getErrorLoadingHandler();if(g&&g(a),-1!==m){var E=void 0;E=!0===f.preventCache?n.loadImage(f.imageIds[m]):n.loadAndCacheImage(f.imageIds[m]),E.then(function(t){var o=n.getViewport(a);f.currentImageIdIndex=m,e.displayImage(a,t,o),h&&h(a,t)},function(e){var t=f.imageIds[m];p&&p(a,t,e)})}}}}};var o=a(0),r=n(o),i=a(2),l=a(12),d=n(l),u=a(17),s=n(u)},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,a,n,o){if(a!==t){var l=r.default.cornerstone,u=l.getEnabledElement(t),c=l.metaData.get("imagePlaneModule",u.image.imageId),f=(0,s.default)(c.imagePositionPatient),v=(0,i.getToolState)(a,"stack"),m=v.data[0],g=Number.MAX_VALUE,h=-1;if(o){var p=f.clone().add(o);if(m.imageIds.forEach(function(e,t){var a=l.metaData.get("imagePlaneModule",e),n=(0,s.default)(a.imagePositionPatient),o=p.distanceToSquared(n);o<g&&(g=o,h=t)}),h!==m.currentImageIdIndex&&-1!==h){var E=d.default.getStartLoadHandler(),T=d.default.getEndLoadHandler(),M=d.default.getErrorLoadingHandler();E&&E(a);var y=void 0;y=!0===m.preventCache?l.loadImage(m.imageIds[h]):l.loadAndCacheImage(m.imageIds[h]),y.then(function(t){var n=l.getViewport(a);m.currentImageIdIndex=h,e.displayImage(a,t,n),T&&T(a,t)},function(e){var t=m.imageIds[h];M&&M(a,t,e)})}}}};var o=a(0),r=n(o),i=a(2),l=a(12),d=n(l),u=a(17),s=n(u)},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,a){if(a!==t){var n=r.default.cornerstone,o=(0,i.getToolState)(t,"stack"),l=o.data[0],u=(0,i.getToolState)(a,"stack"),s=u.data[0],c=l.currentImageIdIndex;if((c=Math.min(Math.max(c,0),s.imageIds.length-1))!==s.currentImageIdIndex){var f=d.default.getStartLoadHandler(),v=d.default.getEndLoadHandler(),m=d.default.getErrorLoadingHandler();f&&f(a);var g=void 0;g=!0===s.preventCache?n.loadImage(s.imageIds[c]):n.loadAndCacheImage(s.imageIds[c]),g.then(function(t){var o=n.getViewport(a);s.currentImageIdIndex=c,e.displayImage(a,t,o),v&&v(a,t)},function(e){var t=s.imageIds[c];m&&m(a,t,e)})}}};var o=a(0),r=n(o),i=a(2),l=a(12),d=n(l)},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,a){if(a!==t){var n=o.default.cornerstone,r=n.getViewport(t),i=n.getViewport(a);i.scale===r.scale&&i.translation.x===r.translation.x&&i.translation.y===r.translation.y||(i.scale=r.scale,i.translation.x=r.translation.x,i.translation.y=r.translation.y,e.setViewport(a,i))}};var n=a(0),o=function(e){return e&&e.__esModule?e:{default:e}}(n)},function(e,t,a){"use strict";function n(e,t){function a(a,n,r){if(!(e.indexOf(n)>=0))return t.add(a,n,r);!1===o.hasOwnProperty(n)&&(o[n]={data:[]}),o[n].data.push(r)}function n(a,n){return e.indexOf(n)>=0?(!1===o.hasOwnProperty(n)&&(o[n]={data:[]}),o[n]):t.get(a,n)}var o={};return{get:n,add:a}}function o(e,t){t=t||["timeSeries"];var a=(0,i.getElementToolStateManager)(e);void 0===a&&(a=r.globalImageIdSpecificToolStateManager);var o=n(t,a);l.push(o),(0,i.setElementToolStateManager)(e,o)}Object.defineProperty(t,"__esModule",{value:!0}),t.newTimeSeriesSpecificToolStateManager=t.addTimeSeriesStateManager=void 0;var r=a(18),i=a(2),l=[];t.addTimeSeriesStateManager=o,t.newTimeSeriesSpecificToolStateManager=n},function(e,t,a){"use strict";function n(e,t){function a(){return i}function n(e){i=e}function o(a,n,o){if(!(e.indexOf(n)>=0))return t.add(a,n,o);!1===i.hasOwnProperty(n)&&(i[n]={data:[]}),i[n].data.push(o)}function r(a,n){return e.indexOf(n)>=0?(!1===i.hasOwnProperty(n)&&(i[n]={data:[]}),i[n]):t.get(a,n)}var i={};return{get:r,add:o,saveToolState:a,restoreToolState:n,toolState:i}}function o(e,t){var a=(0,i.getElementToolStateManager)(e);a||(a=r.globalImageIdSpecificToolStateManager);var o=["stack","stackPrefetch","playClip","volume","slab","referenceLines","crosshairs","stackRenderer"];t&&(o=o.concat(t));var d=n(o,a);l.push(d),(0,i.setElementToolStateManager)(e,d)}Object.defineProperty(t,"__esModule",{value:!0}),t.addStackStateManager=t.newStackSpecificToolStateManager=t.stackSpecificStateManager=void 0;var r=a(18),i=a(2),l=[],d={newStackSpecificToolStateManager:n,addStackStateManager:o};t.stackSpecificStateManager=d,t.newStackSpecificToolStateManager=n,t.addStackStateManager=o},function(e,t,a){"use strict";function n(){function e(e,t,a){!1===n.hasOwnProperty(e)&&(n[e]={});var o=n[e];!1===o.hasOwnProperty(t)&&(o[t]={data:[]}),o[t].data.push(a)}function t(e,t){if(!1!==n.hasOwnProperty(e)){var a=n[e];if(!1!==a.hasOwnProperty(t)){return a[t]}}}function a(e,t,a){if(!1!==n.hasOwnProperty(e)){var o=n[e];if(!1!==o.hasOwnProperty(t)){for(var r=o[t],i=-1,l=0;l<r.data.length;l++)r.data[l]===a&&(i=l);-1!==i&&r.data.splice(i,1)}}}var n={};return{get:t,add:e,remove:a}}Object.defineProperty(t,"__esModule",{value:!0});var o=n();t.newFrameOfReferenceSpecificToolStateManager=n,t.globalFrameOfReferenceSpecificToolStateManager=o},function(e,t,a){"use strict";function n(e){var t={imageIdToolState:l.globalImageIdSpecificToolStateManager.saveToolState(),elementToolState:{},elementViewport:{}};return e.forEach(function(e){var a=(0,d.getElementToolStateManager)(e);a!==l.globalImageIdSpecificToolStateManager&&(t.elementToolState[e.id]=a.saveToolState(),t.elementViewport[e.id]=i.default.cornerstone.getViewport(e))}),t}function o(e){if(e.hasOwnProperty("imageIdToolState")&&e.hasOwnProperty("elementToolState")&&e.hasOwnProperty("elementViewport")){var t=i.default.cornerstone;return l.globalImageIdSpecificToolStateManager.restoreToolState(e.imageIdToolState),Object.keys(e.elementViewport).forEach(function(a){var n=document.getElementById(a);if(n&&e.elementToolState.hasOwnProperty(a)){var o=(0,d.getElementToolStateManager)(n);if(o!==l.globalImageIdSpecificToolStateManager){o.restoreToolState(e.elementToolState[a]);var r=e.elementViewport[a];t.setViewport(n,r),t.updateImage(n)}}}),e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(0),i=function(e){return e&&e.__esModule?e:{default:e}}(r),l=a(18),d=a(2),u={save:n,restore:o};t.default=u},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.detail,a=t.keyCode;if(a===u.UP||a===u.DOWN){var n=1;a===u.DOWN&&(n=-1),(0,i.default)(t.element,n)}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(30),i=n(r),l=a(50),d=n(l),u={UP:38,DOWN:40},s=(0,d.default)(o);t.default=s},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.detail,a=t.element;a.removeEventListener(s.default.MOUSE_DRAG,l),a.removeEventListener(s.default.MOUSE_UP,o),a.removeEventListener(s.default.MOUSE_CLICK,o)}function r(e){var t=e.detail,a=t.element,n=(0,_.getToolOptions)(b,a);if((0,M.default)(t.which,n.mouseButtonMask))return n.deltaY=0,(0,_.setToolOptions)(b,a,n),a.addEventListener(s.default.MOUSE_DRAG,l),a.addEventListener(s.default.MOUSE_UP,o),a.addEventListener(s.default.MOUSE_CLICK,o),e.stopImmediatePropagation(),!1}function i(e){var t=e.detail,a=-t.direction,n=S.getConfiguration(),o=!1;n&&n.loop&&(o=n.loop),(0,O.default)(t.element,a,o)}function l(e){var t=e.detail,a=t.element,n=(0,x.getToolState)(a,"stack");if(n&&n.data&&n.data.length){var o=n.data[0],r=S.getConfiguration(),i=Math.max(2,a.offsetHeight/Math.max(o.imageIds.length,8));r&&r.stackScrollSpeed&&(i=r.stackScrollSpeed);var l=(0,_.getToolOptions)(b,a),d=l.deltaY||0;if(d+=t.deltaPoints.page.y,Math.abs(d)>=i){var u=Math.round(d/i);(0,O.default)(a,u),l.deltaY=d%i}else l.deltaY=d;(0,_.setToolOptions)(b,a,l),e.preventDefault(),e.stopPropagation()}}function d(e){var t=e.detail,a=L.getConfiguration();a&&a.testPointers(t)&&l(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.stackScrollMultiTouch=t.stackScrollTouchDrag=t.stackScrollWheel=t.stackScroll=void 0;var u=a(1),s=n(u),c=a(15),f=n(c),v=a(40),m=n(v),g=a(16),h=n(g),p=a(25),E=n(p),T=a(4),M=n(T),y=a(30),O=n(y),x=a(2),_=a(3),b="stackScroll",S=(0,h.default)(r,b),P=(0,E.default)(i),C={eventData:{deltaY:0}},I=(0,f.default)(l,b,C),w={testPointers:function(e){return e.numPointers>=3}},L=(0,m.default)(d,C);L.setConfiguration(w),t.stackScroll=S,t.stackScrollWheel=P,t.stackScrollTouchDrag=I,t.stackScrollMultiTouch=L},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){e=Math.round(e)||0,t=Math.round(t)||0;var a=[],n=t-e+1;if(n<=0)return a;for(;n--;)a[n]=t--;return a}function r(e,t){var a=[],n=[];return e.forEach(function(e){e<t?a.push(e):e>t&&n.push(e)}),{low:e.indexOf(C(a)),high:e.indexOf(I(n))}}function i(e){function t(e){var t=d.indicesToRequest.indexOf(e);t>-1&&d.indicesToRequest.splice(t,1)}function a(e){t(i.imageIds.indexOf(e.imageId))}function n(t){console.log("prefetch errored: "+t),f&&f(e,s,t,"stackPrefetch")}var o=(0,y.getToolState)(e,"stack");if(o&&o.data&&o.data.length){var i=o.data[0],l=(0,y.getToolState)(e,x);if(l){var d=l.data[0]||{};if(d.indicesToRequest&&d.indicesToRequest.length||(d.enabled=!1),!1!==d.enabled){l.data[0].indicesToRequest.sort(function(e,t){return e-t});if(d.indicesToRequest.slice().forEach(function(e){var a=i.imageIds[e];if(a){h.default.cornerstone.imageCache.getImageLoadObject(a)&&t(e)}}),d.indicesToRequest.length){E.default.clearRequestStack(_);for(var u=r(d.indicesToRequest,i.currentImageIdIndex),s=void 0,c=void 0,f=M.default.getErrorLoadingHandler(),v=u.low,m=u.high;v>=0||m<d.indicesToRequest.length;){var g=i.currentImageIdIndex,p=g-d.indicesToRequest[v]>b.maxImagesToPrefetch,T=d.indicesToRequest[m]-g>b.maxImagesToPrefetch,O=!p&&v>=0,S=!T&&m<d.indicesToRequest.length;if(!S&&!O)break;O&&(c=d.indicesToRequest[v--],s=i.imageIds[c],E.default.addRequest(e,s,_,!1,a,n)),S&&(c=d.indicesToRequest[m++],s=i.imageIds[c],E.default.addRequest(e,s,_,!1,a,n))}E.default.startGrabbing()}}}}}function l(e){return function(t){var a=t.detail,n=void 0;try{n=(0,y.getToolState)(e,"stack")}catch(e){return}if(n&&n.data&&n.data.length){var o=n.data[0],r=o.imageIds.indexOf(a.imageId);if(!(r<0)){var i=(0,y.getToolState)(e,x);i&&i.data&&i.data.length&&i.data[0].indicesToRequest.push(r)}}}}function d(e){clearTimeout(S),S=setTimeout(function(){var t=e.target;try{i(t)}catch(e){return}},P)}function u(e){(0,y.getToolState)(e,x).data=[];var t=(0,y.getToolState)(e,"stack");if(t&&t.data&&t.data.length){var a=t.data[0];if(!0===a.preventCache)return void console.warn("A stack that should not be cached was given the stackPrefetch");var n={indicesToRequest:o(0,a.imageIds.length-1),enabled:!0,direction:1},r=n.indicesToRequest.indexOf(a.currentImageIdIndex);n.indicesToRequest.splice(r,1),(0,y.addToolState)(e,x,n),i(e),e.removeEventListener(m.default.NEW_IMAGE,d),e.addEventListener(m.default.NEW_IMAGE,d);var u=l(e);h.default.cornerstone.events.removeEventListener(m.default.IMAGE_CACHE_PROMISE_REMOVED,u),h.default.cornerstone.events.addEventListener(m.default.IMAGE_CACHE_PROMISE_REMOVED,u)}}function s(e){clearTimeout(S),e.removeEventListener(m.default.NEW_IMAGE,d);var t=l(e);h.default.cornerstone.events.removeEventListener(m.default.IMAGE_CACHE_PROMISE_REMOVED,t);var a=(0,y.getToolState)(e,x);a&&a.data.length&&(a.data[0].enabled=!1,E.default.clearRequestStack(_))}function c(){return b}function f(e){b=e,e.maxSimultaneousRequests&&(0,O.setMaxSimultaneousRequests)(e.maxSimultaneousRequests)}Object.defineProperty(t,"__esModule",{value:!0});var v=a(1),m=n(v),g=a(0),h=n(g),p=a(29),E=n(p),T=a(12),M=n(T),y=a(2),O=a(22),x="stackPrefetch",_="prefetch",b={maxImagesToPrefetch:1/0},S=void 0,P=10,C=function(e){return Math.max.apply(null,e)},I=function(e){return Math.min.apply(null,e)},w={enable:u,disable:s,getConfiguration:c,setConfiguration:f};t.default=w},function(e,t,a){"use strict";function n(e){var t=e.detail,a=t.element,n=t.enabledElement.canvas.width,o=t.enabledElement.canvas.height;if(!n||!o)return!1;var r=t.enabledElement.canvas.getContext("2d");r.setTransform(1,0,0,1,0,0),r.save();var d=u.getConfiguration();r.fillStyle=d.backgroundColor,"horizontal"===d.orientation?r.fillRect(0,o-l,n,l):r.fillRect(0,0,l,o);var s=(0,i.getToolState)(a,"stack");if(s&&s.data&&s.data.length){var c=s.data[0].imageIds,f=s.data[0].currentImageIdIndex,v=n/c.length,m=o/c.length,g=v*f,h=m*f;r.fillStyle=d.fillColor,"horizontal"===d.orientation?r.fillRect(g,o-l,v,l):r.fillRect(0,h,l,m),r.restore()}}Object.defineProperty(t,"__esModule",{value:!0});var o=a(26),r=function(e){return e&&e.__esModule?e:{default:e}}(o),i=a(2),l=6,d={backgroundColor:"rgb(19, 63, 141)",fillColor:"white",orientation:"horizontal"},u=(0,r.default)(n);u.setConfiguration(d),t.default=u},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(88),o=function(e){return e&&e.__esModule?e:{default:e}}(n),r={};r.FusionRenderer=o.default,t.default=r},function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),r=a(0),i=function(e){return e&&e.__esModule?e:{default:e}}(r),l=a(2),d=function(){function e(){n(this,e),this.currentImageIdIndex=0,this.layerIds=[],this.findImageFn=void 0}return o(e,[{key:"render",value:function(e,t){var a=this;if(!Number.isInteger(this.currentImageIdIndex))throw new Error("FusionRenderer: render - Image ID Index is not an integer");if(!this.findImageFn)throw new Error("No findImage function has been defined");if(!t){t=(0,l.getToolState)(e,"stack").data}var n=i.default.cornerstone,o=t[0],r=o.imageIds[this.currentImageIdIndex],d=t.slice(1,t.length);n.loadAndCacheImage(r).then(function(t){var i=a.layerIds[0];i?n.setLayerImage(e,t,i):(i=n.addLayer(e,t,o.options),a.layerIds.push(i)),n.displayImage(e,t),d.forEach(function(t,o){var l=a.findImageFn(t.imageIds,r),d=o+1,u=a.layerIds[d];u||(u=n.addLayer(e,void 0,t.options),a.layerIds.push(u)),l?n.loadAndCacheImage(l).then(function(t){n.setLayerImage(e,t,u),n.updateImage(e)}):(n.setLayerImage(e,void 0,u),n.setActiveLayer(e,i),n.updateImage(e))})})}}]),e}();t.default=d},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var a=void 0,n=void 0,o=void 0,r=0,i=e.length,l=[];for(l.isTimeVarying=!1,("number"!=typeof t||t<=0)&&(t=1),a=1;a<i;a++)o=Number(e[a])/t|0,l.push(o),1===a?n=o:o!==n&&(l.isTimeVarying=!0),r+=o;return l.length>0&&(o=l.isTimeVarying?r/l.length|0:l[0],l.push(o)),l}function r(e){var t=e.intervalId;void 0!==t&&(e.intervalId=void 0,e.usingFrameTimeVector?clearTimeout(t):clearInterval(t))}function i(e){var t={element:e};(0,p.default)(e,s.default.CLIP_STOPPED,t)}function l(e,t){var a=void 0,n=void 0;if(void 0===e)throw new Error("playClip: element must not be undefined");var l=(0,g.getToolState)(e,"stack");if(l&&l.data&&l.data.length){var d=f.default.cornerstone,u=void 0;if(l.data.length>1){var s=(0,g.getToolState)(e,"stackRenderer");s&&s.data&&s.data.length&&(u=s.data[0])}var c=l.data[0],v=(0,g.getToolState)(e,E);v&&v.data&&v.data.length?(a=v.data[0],r(a)):(a={intervalId:void 0,framesPerSecond:30,lastFrameTimeStamp:void 0,frameRate:0,frameTimeVector:void 0,ignoreFrameTimeVector:!1,usingFrameTimeVector:!1,speed:1,reverse:!1,loop:!0},(0,g.addToolState)(e,E,a)),(t<0||t>0)&&(a.framesPerSecond=Number(t),a.reverse=a.framesPerSecond<0,a.ignoreFrameTimeVector=!0),!0!==a.ignoreFrameTimeVector&&a.frameTimeVector&&a.frameTimeVector.length===c.imageIds.length&&(n=o(a.frameTimeVector,a.speed));var h=function(){var t=void 0,n=void 0,o=void 0,s=void 0,f=c.currentImageIdIndex,v=c.imageIds.length;if(a.reverse?f--:f++,!a.loop&&(f<0||f>=v))return r(a),void i(e);f>=v&&(f=0),f<0&&(f=v-1),f!==c.currentImageIdIndex&&(n=m.default.getStartLoadHandler(),o=m.default.getEndLoadHandler(),s=m.default.getErrorLoadingHandler(),n&&n(e),t=!0===c.preventCache?d.loadImage(c.imageIds[f]):d.loadAndCacheImage(c.imageIds[f]),t.then(function(t){try{c.currentImageIdIndex=f,u?(u.currentImageIdIndex=f,u.render(e,l.data)):d.displayImage(e,t),o&&o(e,t)}catch(e){return}},function(t){var a=c.imageIds[f];s&&s(e,a,t)}))};n&&n.length>0&&n.isTimeVarying?(a.usingFrameTimeVector=!0,a.intervalId=setTimeout(function e(){a.intervalId=setTimeout(e,n[c.currentImageIdIndex]),h()},0)):(a.usingFrameTimeVector=!1,a.intervalId=setInterval(h,1e3/Math.abs(a.framesPerSecond)))}}function d(e){var t=(0,g.getToolState)(e,E);t&&t.data&&t.data.length&&r(t.data[0])}Object.defineProperty(t,"__esModule",{value:!0}),t.stopClip=t.playClip=void 0;var u=a(1),s=n(u),c=a(0),f=n(c),v=a(12),m=n(v),g=a(2),h=a(5),p=n(h),E="playClip";t.playClip=l,t.stopClip=d},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=c.default.cornerstone,a=e.currentTarget,n={event:window.event||e,element:a,viewport:t.getViewport(a),image:t.getEnabledElement(a).image,currentPoints:{page:{x:m,y:g},image:t.pageToPixel(a,m,g)},keyCode:e.keyCode,which:e.which};n.currentPoints.canvas=t.pixelToCanvas(a,n.currentPoints.image);var o={keydown:u.default.KEY_DOWN,keypress:u.default.KEY_PRESS,keyup:u.default.KEY_UP};(0,v.default)(a,o[e.type],n)}function r(e){m=e.pageX,g=e.pageY}function i(e){h.forEach(function(t){e.removeEventListener(t,o),e.addEventListener(t,o)}),e.removeEventListener("mousemove",r),e.addEventListener("mousemove",r)}function l(e){h.forEach(function(t){e.removeEventListener(t,o)}),e.removeEventListener("mousemove",r)}Object.defineProperty(t,"__esModule",{value:!0});var d=a(1),u=n(d),s=a(0),c=n(s),f=a(5),v=n(f),m=void 0,g=void 0,h=["keydown","keypress","keyup"],p={enable:i,disable:l};t.default=p},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){return"number"!=typeof e.buttons?e.which:0===e.buttons?0:e.buttons%2==1?1:e.buttons%4==2?3:e.buttons%8==4?2:0}function r(){y=!1}function i(e){var t=m.default.cornerstone,a=e.currentTarget,n=f.default.MOUSE_DOUBLE_CLICK,o={page:m.default.cornerstoneMath.point.pageToPoint(e),image:t.pageToPixel(a,e.pageX,e.pageY),client:{x:e.clientX,y:e.clientY}};o.canvas=t.pixelToCanvas(a,o.image);var r=(0,h.default)(o),i={event:e,which:e.which,viewport:t.getViewport(a),image:t.getEnabledElement(a).image,element:a,startPoints:o,lastPoints:r,currentPoints:o,deltaPoints:{x:0,y:0},type:n};(0,M.default)(a,n,i)}function l(e){function t(e){var t=f.default.MOUSE_DRAG,a={page:m.default.cornerstoneMath.point.pageToPoint(e),image:n.pageToPixel(i,e.pageX,e.pageY),client:{x:e.clientX,y:e.clientY}};a.canvas=n.pixelToCanvas(i,a.image);var o={page:m.default.cornerstoneMath.point.subtract(a.page,s.page),image:m.default.cornerstoneMath.point.subtract(a.image,s.image),client:m.default.cornerstoneMath.point.subtract(a.client,s.client),canvas:m.default.cornerstoneMath.point.subtract(a.canvas,s.canvas)},r={which:v,viewport:n.getViewport(i),image:n.getEnabledElement(i).image,element:i,startPoints:u,lastPoints:s,currentPoints:a,deltaPoints:o,type:t,ctrlKey:e.ctrlKey,metaKey:e.metaKey,shiftKey:e.shiftKey};return(0,M.default)(r.element,t,r),s=(0,h.default)(a),(0,E.default)(e)}function a(e){clearTimeout(O);var o=f.default.MOUSE_UP;y&&(o=f.default.MOUSE_CLICK);var r={page:m.default.cornerstoneMath.point.pageToPoint(e),image:n.pageToPixel(i,e.pageX,e.pageY),client:{x:e.clientX,y:e.clientY}};r.canvas=n.pixelToCanvas(i,r.image);var l={page:m.default.cornerstoneMath.point.subtract(r.page,s.page),image:m.default.cornerstoneMath.point.subtract(r.image,s.image),client:m.default.cornerstoneMath.point.subtract(r.client,s.client),canvas:m.default.cornerstoneMath.point.subtract(r.canvas,s.canvas)},c={event:e,which:v,viewport:n.getViewport(i),image:n.getEnabledElement(i).image,element:i,startPoints:u,lastPoints:s,currentPoints:r,deltaPoints:l,type:o};(0,M.default)(c.element,o,c),document.removeEventListener("mousemove",t),document.removeEventListener("mouseup",a),i.addEventListener("mousemove",d),y=!0}O=setTimeout(r,x);var n=m.default.cornerstone,i=e.currentTarget,l=f.default.MOUSE_DOWN;i.removeEventListener("mousemove",d);var u={page:m.default.cornerstoneMath.point.pageToPoint(e),image:n.pageToPixel(i,e.pageX,e.pageY),client:{x:e.clientX,y:e.clientY}};u.canvas=n.pixelToCanvas(i,u.image);var s=(0,h.default)(u),c={event:e,which:o(e),viewport:n.getViewport(i),image:n.getEnabledElement(i).image,element:i,startPoints:u,lastPoints:s,currentPoints:u,deltaPoints:{x:0,y:0},type:l};(0,M.default)(c.element,l,c)&&(c.type=f.default.MOUSE_DOWN_ACTIVATE,(0,M.default)(c.element,f.default.MOUSE_DOWN_ACTIVATE,c));var v=o(e);return document.addEventListener("mousemove",t),document.addEventListener("mouseup",a),(0,E.default)(e)}function d(e){var t=m.default.cornerstone,a=e.currentTarget,n=f.default.MOUSE_MOVE,o={page:m.default.cornerstoneMath.point.pageToPoint(e),image:t.pageToPixel(a,e.pageX,e.pageY),client:{x:e.clientX,y:e.clientY}};o.canvas=t.pixelToCanvas(a,o.image);var r=(0,h.default)(o),i={page:m.default.cornerstoneMath.point.pageToPoint(e),image:t.pageToPixel(a,e.pageX,e.pageY),client:{x:e.clientX,y:e.clientY}};i.canvas=t.pixelToCanvas(a,i.image);var l={page:m.default.cornerstoneMath.point.subtract(i.page,r.page),image:m.default.cornerstoneMath.point.subtract(i.image,r.image),client:m.default.cornerstoneMath.point.subtract(i.client,r.client),canvas:m.default.cornerstoneMath.point.subtract(i.canvas,r.canvas)},d={viewport:t.getViewport(a),image:t.getEnabledElement(a).image,element:a,startPoints:o,lastPoints:r,currentPoints:i,deltaPoints:l,type:n};(0,M.default)(a,n,d),r=(0,h.default)(i)}function u(e){e.removeEventListener("mousedown",l),e.removeEventListener("mousemove",d),e.removeEventListener("dblclick",i)}function s(e){u(e),e.addEventListener("mousedown",l),e.addEventListener("mousemove",d),e.addEventListener("dblclick",i)}Object.defineProperty(t,"__esModule",{value:!0});var c=a(1),f=n(c),v=a(0),m=n(v),g=a(35),h=n(g),p=a(33),E=n(p),T=a(5),M=n(T),y=!0,O=void 0,x=200,_={enable:s,disable:u};t.default=_},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){if(!("mousewheel"===e.type&&0===e.wheelDeltaY||"DOMMouseScroll"===e.type&&1===e.axis)){e.preventDefault();var t=s.default.cornerstone,a=e.currentTarget,n=void 0,o=void 0;void 0!==e.pageX&&void 0!==e.pageY?(n=e.pageX,o=e.pageY):(n=e.x,o=e.y);var r=t.pageToPixel(a,n,o);e=window.event&&window.event.wheelDelta?window.event:e;var i=void 0;i=e.wheelDelta?-e.wheelDelta:e.deltaY?-e.deltaY:e.detail?-e.detail:e.wheelDelta;var l=i<0?-1:1,u={element:a,viewport:t.getViewport(a),image:t.getEnabledElement(a).image,direction:l,pageX:n,pageY:o,imageX:r.x,imageY:r.y};(0,f.default)(a,d.default.MOUSE_WHEEL,u)}}function r(e){i(e),v.forEach(function(t){e.addEventListener(t,o)})}function i(e){v.forEach(function(t){e.removeEventListener(t,o)})}Object.defineProperty(t,"__esModule",{value:!0});var l=a(1),d=n(l),u=a(0),s=n(u),c=a(5),f=n(c),v=["mousewheel","DOMMouseScroll"],m={enable:r,disable:i};t.default=m},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=s.default.cornerstone,a=e.currentTarget||e.srcEvent.currentTarget,n=void 0,o=void 0,r=void 0,i=void 0,l=void 0;switch(e.preventDefault(),(e.pointers&&e.pointers.length>1||e.touches&&e.touches.length>1)&&(L=!1,clearTimeout(S)),e.type){case"tap":L=!1,clearTimeout(S),y={page:s.default.cornerstoneMath.point.pageToPoint(e.pointers[0]),image:t.pageToPixel(a,e.pointers[0].pageX,e.pointers[0].pageY),client:{x:e.pointers[0].clientX,y:e.pointers[0].clientY}},y.canvas=t.pixelToCanvas(a,y.image),n=d.default.TAP,_={event:e,viewport:t.getViewport(a),image:t.getEnabledElement(a).image,element:a,currentPoints:y,type:n,isTouchEvent:!0},(0,E.default)(a,n,_);break;case"doubletap":L=!1,clearTimeout(S),y={page:s.default.cornerstoneMath.point.pageToPoint(e.pointers[0]),image:t.pageToPixel(a,e.pointers[0].pageX,e.pointers[0].pageY),client:{x:e.pointers[0].clientX,y:e.pointers[0].clientY}},y.canvas=t.pixelToCanvas(a,y.image),n=d.default.DOUBLE_TAP,_={event:e,viewport:t.getViewport(a),image:t.getEnabledElement(a).image,element:a,currentPoints:y,type:n,isTouchEvent:!0},(0,E.default)(a,n,_);break;case"pinchstart":L=!1,clearTimeout(S),C=1;break;case"pinchmove":if(L=!1,clearTimeout(S),!0===w){C=e.scale,w=!1;break}o=(e.scale-C)/C,M={page:e.center,image:t.pageToPixel(a,e.center.x,e.center.y)},M.canvas=t.pixelToCanvas(a,M.image),n=d.default.TOUCH_PINCH,_={event:e,startPoints:M,viewport:t.getViewport(a),image:t.getEnabledElement(a).image,element:a,direction:e.scale<1?1:-1,scaleChange:o,type:n,isTouchEvent:!0},(0,E.default)(a,n,_),C=e.scale;break;case"touchstart":C=1,clearTimeout(S),clearTimeout(b),b=setTimeout(function(){M={page:s.default.cornerstoneMath.point.pageToPoint(e.touches[0]),image:t.pageToPixel(a,e.touches[0].pageX,e.touches[0].pageY),client:{x:e.touches[0].clientX,y:e.touches[0].clientY}},M.canvas=t.pixelToCanvas(a,M.image),n=d.default.TOUCH_START,e.touches.length>1&&(n=d.default.MULTI_TOUCH_START),_={event:e,viewport:t.getViewport(a),image:t.getEnabledElement(a).image,element:a,startPoints:M,currentPoints:M,type:n,isTouchEvent:!0},!0===(0,E.default)(a,n,_)&&(n=d.default.TOUCH_START_ACTIVE,e.touches.length>1&&(n=d.default.MULTI_TOUCH_START_ACTIVE),_.type=n,(0,E.default)(a,n,_)),O=(0,f.default)(M)},50),L=!0,P=0,S=setTimeout(function(){L&&(y={page:s.default.cornerstoneMath.point.pageToPoint(e.touches[0]),image:t.pageToPixel(a,e.touches[0].pageX,e.touches[0].pageY),client:{x:e.touches[0].clientX,y:e.touches[0].clientY}},y.canvas=t.pixelToCanvas(a,M.image),n=d.default.TOUCH_PRESS,_={event:e,viewport:t.getViewport(a),image:t.getEnabledElement(a).image,element:a,currentPoints:y,type:n,isTouchEvent:!0},(0,E.default)(a,n,_))},U);break;case"touchend":C=1,L=!1,clearTimeout(S),setTimeout(function(){M={page:s.default.cornerstoneMath.point.pageToPoint(e.changedTouches[0]),image:t.pageToPixel(a,e.changedTouches[0].pageX,e.changedTouches[0].pageY),client:{x:e.changedTouches[0].clientX,y:e.changedTouches[0].clientY}},M.canvas=t.pixelToCanvas(a,M.image),n=d.default.TOUCH_END,_={event:e,viewport:t.getViewport(a),image:t.getEnabledElement(a).image,element:a,startPoints:M,currentPoints:M,type:n,isTouchEvent:!0},(0,E.default)(a,n,_)},50);break;case"panmove":r={x:e.deltaX-D.x,y:e.deltaY-D.y},D={x:e.deltaX,y:e.deltaY},y={page:{x:O.page.x+r.x,y:O.page.y+r.y},image:t.pageToPixel(a,O.page.x+r.x,O.page.y+r.y),client:{x:O.client.x+r.x,y:O.client.y+r.y}},y.canvas=t.pixelToCanvas(a,y.image),x={page:s.default.cornerstoneMath.point.subtract(y.page,O.page),image:s.default.cornerstoneMath.point.subtract(y.image,O.image),client:s.default.cornerstoneMath.point.subtract(y.client,O.client),canvas:s.default.cornerstoneMath.point.subtract(y.canvas,O.canvas)},P+=Math.sqrt(x.page.x*x.page.x+x.page.y*x.page.y),P>A&&(L=!1,clearTimeout(S)),n=d.default.TOUCH_DRAG,e.pointers.length>1&&(n=d.default.MULTI_TOUCH_DRAG),_={viewport:t.getViewport(a),image:t.getEnabledElement(a).image,element:a,startPoints:M,lastPoints:O,currentPoints:y,deltaPoints:x,numPointers:e.pointers.length,type:n,isTouchEvent:!0},(0,E.default)(a,n,_),O=(0,f.default)(y);break;case"panstart":D={x:e.deltaX,y:e.deltaY},y={page:s.default.cornerstoneMath.point.pageToPoint(e.pointers[0]),image:t.pageToPixel(a,e.pointers[0].pageX,e.pointers[0].pageY),client:{x:e.pointers[0].clientX,y:e.pointers[0].clientY}},y.canvas=t.pixelToCanvas(a,y.image),O=(0,f.default)(y);break;case"panend":return L=!1,(clearTimeout(S),O)?(y={page:s.default.cornerstoneMath.point.pageToPoint(e.pointers[0]),image:t.pageToPixel(a,e.pointers[0].pageX,e.pointers[0].pageY),client:{x:e.pointers[0].clientX,y:e.pointers[0].clientY}},y.canvas=t.pixelToCanvas(a,y.image),x={page:s.default.cornerstoneMath.point.subtract(y.page,O.page),image:s.default.cornerstoneMath.point.subtract(y.image,O.image),client:s.default.cornerstoneMath.point.subtract(y.client,O.client),canvas:s.default.cornerstoneMath.point.subtract(y.canvas,O.canvas)},n=d.default.TOUCH_DRAG_END,_={event:e.srcEvent,viewport:t.getViewport(a),image:t.getEnabledElement(a).image,element:a,startPoints:M,lastPoints:O,currentPoints:y,deltaPoints:x,type:n,isTouchEvent:!0},(0,E.default)(a,n,_),i=e.pointers.length-e.changedPointers.length,2===i&&(w=!0),(0,m.default)(e)):!1;case"rotatemove":L=!1,clearTimeout(S),l=e.rotation-I,I=e.rotation,n=d.default.TOUCH_ROTATE,_={event:e.srcEvent,viewport:t.getViewport(a),image:t.getEnabledElement(a).image,element:a,rotation:l,type:n},(0,E.default)(a,n,_)}return!1}function r(e){i(e);var t=s.default.Hammer,a={inputClass:t.SUPPORT_POINTER_EVENTS?t.PointerEventInput:t.TouchInput},n=new t.Manager(e,a),r={pointers:0,direction:t.DIRECTION_ALL,threshold:0},l=new t.Pan(r),d=new t.Pinch({threshold:0}),u=new t.Rotate({threshold:0});d.recognizeWith(l),d.recognizeWith(u),u.recognizeWith(l);var c=new t.Tap({event:"doubletap",taps:2,interval:1500,threshold:50,posThreshold:50});c.recognizeWith(l),n.add([c,l,u,d]),n.on("tap doubletap panstart panmove panend pinchstart pinchmove rotatemove",o),h.default.enable(e),["touchstart","touchend"].forEach(function(t){e.addEventListener(t,o)});var f=(0,T.getToolOptions)(R,e);f.hammer=n,(0,T.setToolOptions)(R,e,f)}function i(e){h.default.disable(e),["touchstart","touchend"].forEach(function(t){e.removeEventListener(t,o)});var t=(0,T.getToolOptions)(R,e),a=t.hammer;a&&a.off("tap doubletap panstart panmove panend pinchstart pinchmove rotatemove",o)}Object.defineProperty(t,"__esModule",{value:!0});var l=a(1),d=n(l),u=a(0),s=n(u),c=a(35),f=n(c),v=a(33),m=n(v),g=a(53),h=n(g),p=a(5),E=n(p),T=a(3),M=void 0,y=void 0,O=void 0,x=void 0,_=void 0,b=void 0,S=void 0,P=void 0,C=1,I=0,w=!1,L=!1,D=void 0,U=700,A=5,R="touchInput",k={enable:r,disable:i};t.default=k},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){return{visible:!0,active:!0,handles:{start:{x:e.currentPoints.image.x-20,y:e.currentPoints.image.y+10,highlight:!0,active:!1},end:{x:e.currentPoints.image.x,y:e.currentPoints.image.y,highlight:!0,active:!0},start2:{x:e.currentPoints.image.x-20,y:e.currentPoints.image.y+10,highlight:!0,active:!1},end2:{x:e.currentPoints.image.x,y:e.currentPoints.image.y+20,highlight:!0,active:!1}}}}function r(e,t,a){var n=d.default.cornerstone,o={start:n.pixelToCanvas(e,t.handles.start),end:n.pixelToCanvas(e,t.handles.end)},r=d.default.cornerstoneMath.lineSegment.distanceToPoint(o,a);return r<5||(o.start=n.pixelToCanvas(e,t.handles.start2),o.end=n.pixelToCanvas(e,t.handles.end2),(r=d.default.cornerstoneMath.lineSegment.distanceToPoint(o,a))<5)}function i(e){var t=e.detail,a=(0,b.getToolState)(e.currentTarget,S);if(void 0!==a){var n=t.canvasContext.canvas.getContext("2d");n.setTransform(1,0,0,1,0,0);for(var o=void 0,r=E.default.getToolWidth(),i=M.default.getFont(),l=P.getConfiguration(),u=d.default.cornerstone,s=0;s<a.data.length;s++){n.save(),l&&l.shadow&&(n.shadowColor=l.shadowColor||"#000000",n.shadowOffsetX=l.shadowOffsetX||1,n.shadowOffsetY=l.shadowOffsetY||1);var c=a.data[s];o=c.active?O.default.getActiveColor():O.default.getToolColor(),n.beginPath(),n.strokeStyle=o,n.lineWidth=r;var f=u.pixelToCanvas(t.element,c.handles.start),v=u.pixelToCanvas(t.element,c.handles.end);n.moveTo(f.x,f.y),n.lineTo(v.x,v.y),f=u.pixelToCanvas(t.element,c.handles.start2),v=u.pixelToCanvas(t.element,c.handles.end2),n.moveTo(f.x,f.y),n.lineTo(v.x,v.y),n.stroke(),(0,_.default)(n,t,c.handles),n.fillStyle=o;var g=(Math.ceil(c.handles.start.x)-Math.ceil(c.handles.end.x))*t.image.columnPixelSpacing,p=(Math.ceil(c.handles.start.y)-Math.ceil(c.handles.end.y))*t.image.rowPixelSpacing,T=(Math.ceil(c.handles.start2.x)-Math.ceil(c.handles.end2.x))*t.image.columnPixelSpacing,y=(Math.ceil(c.handles.start2.y)-Math.ceil(c.handles.end2.y))*t.image.rowPixelSpacing,x=Math.acos(Math.abs((g*T+p*y)/(Math.sqrt(g*g+p*p)*Math.sqrt(T*T+y*y))));x*=180/Math.PI;var C=(0,h.default)(x,2),I=C.toString()+String.fromCharCode(parseInt("00B0",16)),w=(f.x+v.x)/2,L=(f.y+v.y)/2;n.font=i,(0,m.default)(n,I,w,L,o),n.restore()}}}Object.defineProperty(t,"__esModule",{value:!0}),t.angleTouch=t.angle=void 0;var l=a(0),d=n(l),u=a(9),s=n(u),c=a(11),f=n(c),v=a(7),m=n(v),g=a(31),h=n(g),p=a(8),E=n(p),T=a(13),M=n(T),y=a(6),O=n(y),x=a(10),_=n(x),b=a(2),S="angle",P=(0,s.default)({createNewMeasurement:o,onImageRendered:i,pointNearTool:r,toolType:S}),C=(0,f.default)({createNewMeasurement:o,onImageRendered:i,pointNearTool:r,toolType:S});t.angle=P,t.angleTouch=C},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){e(prompt("Enter your annotation:"))}function r(e,t,a){a(prompt("Change your annotation:"))}function i(e){function t(e){null===e?(0,G.removeToolState)(a,Y,n):n.text=e,n.active=!1,o.updateImage(a),a.addEventListener(m.default.MOUSE_MOVE,K.mouseMoveCallback),a.addEventListener(m.default.MOUSE_DOWN,K.mouseDownCallback),a.addEventListener(m.default.MOUSE_DOWN_ACTIVATE,K.mouseDownActivateCallback),a.addEventListener(m.default.MOUSE_DOUBLE_CLICK,K.mouseDoubleClickCallback)}var a=e.element,n=l(e),o=h.default.cornerstone;(0,G.addToolState)(a,Y,n),a.removeEventListener(m.default.MOUSE_MOVE,K.mouseMoveCallback),a.removeEventListener(m.default.MOUSE_DOWN,K.mouseDownCallback),a.removeEventListener(m.default.MOUSE_DOWN_ACTIVATE,K.mouseDownActivateCallback),a.removeEventListener(m.default.MOUSE_DOUBLE_CLICK,K.mouseDoubleClickCallback),o.updateImage(a),(0,A.default)(e,Y,n,n.handles.end,function(){(0,N.default)(e,n.handles)&&(0,G.removeToolState)(a,Y,n);var r=K.getConfiguration();void 0===n.text&&r.getTextCallback(t),o.updateImage(a)})}function l(e){return{visible:!0,active:!0,handles:{start:{x:e.currentPoints.image.x,y:e.currentPoints.image.y,highlight:!0,active:!1},end:{x:e.currentPoints.image.x,y:e.currentPoints.image.y,highlight:!0,active:!1},textBox:{active:!1,hasMoved:!1,movesIndependently:!1,drawnIndependently:!0,allowedOutsideImage:!0,hasBoundingBox:!0}}}}function d(e,t,a){var n=h.default.cornerstone,o={start:n.pixelToCanvas(e,t.handles.start),end:n.pixelToCanvas(e,t.handles.end)};return h.default.cornerstoneMath.lineSegment.distanceToPoint(o,a)<25}function u(e){var t=e.detail,a=(0,G.getToolState)(e.currentTarget,Y);if(a){var n=t.enabledElement,o=h.default.cornerstone,r=t.canvasContext.canvas.getContext("2d");r.setTransform(1,0,0,1,0,0);for(var i=void 0,l=_.default.getToolWidth(),d=S.default.getFont(),u=K.getConfiguration(),s=0;s<a.data.length;s++){r.save(),u&&u.shadow&&(r.shadowColor=u.shadowColor||"#000000",r.shadowOffsetX=u.shadowOffsetX||1,r.shadowOffsetY=u.shadowOffsetY||1);var c=a.data[s];i=c.active?C.default.getActiveColor():C.default.getToolColor();var f=o.pixelToCanvas(t.element,c.handles.start),v=o.pixelToCanvas(t.element,c.handles.end);u.arrowFirst?(0,D.default)(r,v,f,i,l):(0,D.default)(r,f,v,i,l);var m={drawHandlesIfActive:u&&u.drawHandlesOnHover};if(u.drawHandles&&(0,w.default)(r,t,c.handles,i,m),c.text&&""!==c.text){r.font=d;var g=r.measureText(c.text).width+10,p=S.default.getFontSize()+10,E=Math.max(g,p)/2+5;v.x<f.x&&(E=-E);var T=void 0;if(!c.handles.textBox.hasMoved){T=u.arrowFirst?{x:v.x-g/2+E,y:v.y-p/2}:{x:f.x-g/2-E,y:f.y-p/2};var M=o.internal.getTransform(n);M.invert();var y=M.transformPoint(T.x,T.y);c.handles.textBox.x=y.x,c.handles.textBox.y=y.y}T=o.pixelToCanvas(t.element,c.handles.textBox);var x=(0,O.default)(r,c.text,T.x,T.y,i);if(c.handles.textBox.boundingBox=x,c.handles.textBox.hasMoved){var b={start:{},end:{}},P={x:(f.x+v.x)/2,y:(f.y+v.y)/2},I=[f,v,P];b.end.x=T.x,b.end.y=T.y,b.start=h.default.cornerstoneMath.point.findClosestPoint(I,b.end);var L=[{x:x.left+x.width/2,y:x.top},{x:x.left,y:x.top+x.height/2},{x:x.left+x.width/2,y:x.top+x.height},{x:x.left+x.width,y:x.top+x.height/2}];b.end=h.default.cornerstoneMath.point.findClosestPoint(L,b.start),r.beginPath(),r.strokeStyle=i,r.lineWidth=l,r.setLineDash([2,3]),r.moveTo(b.start.x,b.start.y),r.lineTo(b.end.x,b.end.y),r.stroke()}}r.restore()}}}function s(e){function t(e){null===e?(0,G.removeToolState)(a,Y,n):n.text=e,n.active=!1,o.updateImage(a),a.addEventListener(m.default.TOUCH_PRESS,X.pressCallback),a.addEventListener(m.default.TOUCH_START_ACTIVE,X.touchDownActivateCallback),a.addEventListener(m.default.TAP,X.tapCallback)}var a=e.element,n=l(e),o=h.default.cornerstone;(0,G.addToolState)(a,Y,n),a.removeEventListener(m.default.TOUCH_PRESS,X.pressCallback),a.removeEventListener(m.default.TOUCH_START_ACTIVE,X.touchDownActivateCallback),a.removeEventListener(m.default.TAP,X.tapCallback),o.updateImage(a),(0,k.default)(e,Y,n,n.handles.end,function(){o.updateImage(a),(0,N.default)(e,n.handles)&&(0,G.removeToolState)(a,Y,n);var r=K.getConfiguration();void 0===n.text&&r.getTextCallback(t)})}function c(e){function t(e,t,a){!0===a?(0,G.removeToolState)(n,Y,e):e.text=t,e.active=!1,o.updateImage(n)}var a=e.detail,n=a.element,o=h.default.cornerstone,r=(0,F.getToolOptions)(Y,n),i=void 0;if((0,V.default)(a.which,r.mouseButtonMask)){var l=K.getConfiguration(),u=a.currentPoints.canvas,s=(0,G.getToolState)(n,Y);if(s)for(var c=0;c<s.data.length;c++)if(i=s.data[c],d(n,i,u)||(0,W.default)(i.handles.textBox,u))return i.active=!0,o.updateImage(n),l.changeTextCallback(i,a,t),e.stopImmediatePropagation(),!1}}function f(e){function t(e,t,a){console.log("pressCallback doneChangingTextCallback"),!0===a?(0,G.removeToolState)(n,Y,e):e.text=t,e.active=!1,o.updateImage(n),n.addEventListener(m.default.TOUCH_START,X.touchStartCallback),n.addEventListener(m.default.TOUCH_START_ACTIVE,X.touchDownActivateCallback),n.addEventListener(m.default.TAP,X.tapCallback)}var a=e.detail,n=a.element,o=h.default.cornerstone,r=void 0,i=K.getConfiguration(),l=a.currentPoints.canvas,u=(0,G.getToolState)(n,Y);if(u){if(a.handlePressed)return n.removeEventListener(m.default.TOUCH_START,X.touchStartCallback),n.removeEventListener(m.default.TOUCH_START_ACTIVE,X.touchDownActivateCallback),n.removeEventListener(m.default.TAP,X.tapCallback),i.changeTextCallback(a.handlePressed,a,t),e.stopImmediatePropagation(),!1;for(var s=0;s<u.data.length;s++)if(r=u.data[s],d(n,r,l)||(0,W.default)(r.handles.textBox,l))return r.active=!0,o.updateImage(n),n.removeEventListener(m.default.TOUCH_START,X.touchStartCallback),n.removeEventListener(m.default.TOUCH_START_ACTIVE,X.touchDownActivateCallback),n.removeEventListener(m.default.TAP,X.tapCallback),i.changeTextCallback(r,a,t),e.stopImmediatePropagation(),!1;e.preventDefault(),e.stopPropagation()}}Object.defineProperty(t,"__esModule",{value:!0}),t.arrowAnnotateTouch=t.arrowAnnotate=void 0;var v=a(1),m=n(v),g=a(0),h=n(g),p=a(9),E=n(p),T=a(11),M=n(T),y=a(7),O=n(y),x=a(8),_=n(x),b=a(13),S=n(b),P=a(6),C=n(P),I=a(10),w=n(I),L=a(48),D=n(L),U=a(24),A=n(U),R=a(27),k=n(R),j=a(14),N=n(j),H=a(4),V=n(H),B=a(19),W=n(B),G=a(2),F=a(3),Y="arrowAnnotate",z={getTextCallback:o,changeTextCallback:r,drawHandles:!1,drawHandlesOnHover:!0,arrowFirst:!0},K=(0,E.default)({addNewMeasurement:i,createNewMeasurement:l,onImageRendered:u,pointNearTool:d,toolType:Y,mouseDoubleClickCallback:c});K.setConfiguration(z);var X=(0,M.default)({addNewMeasurement:s,createNewMeasurement:l,onImageRendered:u,pointNearTool:d,toolType:Y,pressCallback:f});t.arrowAnnotate=K,t.arrowAnnotateTouch=X},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.detail;e.stopImmediatePropagation();var a=(0,y.getToolState)(e.currentTarget,C);if(a){var n=E.default.cornerstone,o=e.currentTarget,r=n.getEnabledElement(o),i=r.image.imageId,l=n.metaData.get("imagePlaneModule",i),d=t.currentPoints.image,u=(0,_.imagePointToPatientPoint)(d,l);a.data[0].synchronizationContext.getSourceElements().forEach(function(e){if(e!==o){var t=Number.MAX_VALUE,a=-1,r=(0,y.getToolState)(e,"stack");if(void 0!==r){var i=r.data[0];if(i.imageIds.forEach(function(e,o){var r=n.metaData.get("imagePlaneModule",e),i=(0,S.default)(r.imagePositionPatient),l=(0,S.default)(r.rowCosines),d=(0,S.default)(r.columnCosines),s=d.clone().cross(l.clone()),c=Math.abs(s.clone().dot(i)-s.clone().dot(u));c<t&&(t=c,a=o)}),a!==i.currentImageIdIndex&&-1!==a&&void 0!==i.imageIds[a]){var l=M.default.getStartLoadHandler(),d=M.default.getEndLoadHandler(),s=M.default.getErrorLoadingHandler();l&&l(e);var c=void 0;c=!0===i.preventCache?n.loadImage(i.imageIds[a]):n.loadAndCacheImage(i.imageIds[a]),c.then(function(t){var o=n.getViewport(e);i.currentImageIdIndex=a,n.displayImage(e,t,o),d&&d(e,t)},function(t){var n=i.imageIds[a];s&&s(e,n,t)})}}}})}}function r(e){var t=e.detail,a=t.element;a.removeEventListener(h.default.MOUSE_DRAG,l),a.removeEventListener(h.default.MOUSE_UP,r)}function i(e){var t=e.detail,a=t.element,n=(0,P.getToolOptions)(C,a);(0,x.default)(t.which,n.mouseButtonMask)&&(a.addEventListener(h.default.MOUSE_DRAG,l),a.addEventListener(h.default.MOUSE_UP,r),o(e),e.preventDefault(),e.stopPropagation())}function l(e){o(e),e.preventDefault(),e.stopPropagation()}function d(e,t,a){(0,P.setToolOptions)(C,e,{mouseButtonMask:t}),(0,y.clearToolState)(e,C),(0,y.addToolState)(e,C,{synchronizationContext:a}),e.removeEventListener(h.default.MOUSE_DOWN,i),e.addEventListener(h.default.MOUSE_DOWN,i)}function u(e){e.removeEventListener(h.default.MOUSE_DOWN,i)}function s(e){var t=e.detail,a=t.element;a.removeEventListener(h.default.TOUCH_DRAG,f),a.removeEventListener(h.default.TOUCH_DRAG_END,s)}function c(e){var t=e.detail,a=t.element;return a.addEventListener(h.default.TOUCH_DRAG,f),a.addEventListener(h.default.TOUCH_DRAG_END,s),o(e),!1}function f(e){o(e),e.preventDefault(),e.stopPropagation()}function v(e,t){(0,y.clearToolState)(e,C),(0,y.addToolState)(e,C,{synchronizationContext:t}),e.removeEventListener(h.default.TOUCH_START,c),e.addEventListener(h.default.TOUCH_START,c)}function m(e){e.removeEventListener(h.default.TOUCH_START,c)}Object.defineProperty(t,"__esModule",{value:!0}),t.crosshairsTouch=t.crosshairs=void 0;var g=a(1),h=n(g),p=a(0),E=n(p),T=a(12),M=n(T),y=a(2),O=a(4),x=n(O),_=a(28),b=a(17),S=n(b),P=a(3),C="crosshairs",I={activate:d,deactivate:u,enable:d,disable:u},w={activate:v,deactivate:m,enable:v,disable:m};t.crosshairs=I,t.crosshairsTouch=w},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){l.default.cornerstone.fitToWindow(e.element)}function r(e){var t=e.detail;s.strategy(t),e.preventDefault(),e.stopPropagation()}Object.defineProperty(t,"__esModule",{value:!0});var i=a(0),l=n(i),d=a(54),u=n(d),s=(0,u.default)(r);s.strategies={default:o},s.strategy=o,t.default=s},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=v.default.cornerstone,a=t.getEnabledElement(e.element),n=a.canvas.getContext("2d");n.setTransform(1,0,0,1,0,0);var o=y.default.getActiveColor(),r=T.default.getFont(),i=T.default.getFontSize(),l=U.getConfiguration();n.save(),l&&l.shadow&&(n.shadowColor=l.shadowColor||"#000000",n.shadowOffsetX=l.shadowOffsetX||1,n.shadowOffsetY=l.shadowOffsetY||1);var d=Math.round(e.currentPoints.image.x),u=Math.round(e.currentPoints.image.y),s=void 0,c=void 0,f=void 0;if(!(d<0||u<0||d>=e.image.columns||u>=e.image.rows)){if(e.image.color)s=(0,b.default)(e.element,d,u,1,1),c=d+", "+u,f="R: "+s[0]+" G: "+s[1]+" B: "+s[2]+" A: "+s[3];else{s=t.getStoredPixels(e.element,d,u,1,1);var m=s[0],g=m*e.image.slope+e.image.intercept,h=(0,P.default)(e.image,m);c=d+", "+u,f="SP: "+m+" MO: "+parseFloat(g.toFixed(3)),h&&(f+=" SUV: "+parseFloat(h.toFixed(3)))}var p={x:e.currentPoints.image.x+3,y:e.currentPoints.image.y-3},E=t.pixelToCanvas(e.element,p);n.font=r,n.fillStyle=o,(0,x.default)(n,f,E.x,E.y+i+5,o),(0,x.default)(n,c,E.x,E.y,o),n.restore()}}function r(e){var t=v.default.cornerstone,a=e.element,n=t.getEnabledElement(a),o=n.image,r=n.canvas.getContext("2d");r.setTransform(1,0,0,1,0,0);var i=y.default.getActiveColor(),l=T.default.getFont(),d=U.getConfiguration();r.save(),d&&d.shadow&&(r.shadowColor=d.shadowColor||"#000000",r.shadowOffsetX=d.shadowOffsetX||1,r.shadowOffsetY=d.shadowOffsetY||1);var u=t.metaData.get("generalSeriesModule",o.imageId),s=void 0;u&&(s=u.modality);var c=void 0;c=!0===e.isTouchEvent?t.pageToPixel(a,e.currentPoints.page.x,e.currentPoints.page.y-4*T.default.getFontSize()):t.pageToPixel(a,e.currentPoints.page.x,e.currentPoints.page.y-T.default.getFontSize()/2);var f=void 0,m="";if(!(c.x<0||c.y<0||c.x>=o.columns||c.y>=o.rows)){if(o.color)f=(0,b.default)(a,c.x,c.y,1,1),m="R: "+f[0]+" G: "+f[1]+" B: "+f[2];else{f=t.getStoredPixels(a,c.x,c.y,1,1);var g=f[0],h=g*e.image.slope+e.image.intercept,p=parseFloat(h.toFixed(2));if("CT"===s)m+="HU: "+p;else if("PT"===s){m+=p;var E=(0,P.default)(e.image,g);E&&(m+=" SUV: "+parseFloat(E.toFixed(2)))}else m+=p}var M=t.pixelToCanvas(a,c);r.font=l,r.fillStyle=i;var O=void 0,_=r.measureText(m).width;O=!0===e.isTouchEvent?{x:-_/2-5,y:-T.default.getFontSize()-10-12}:{x:12,y:-(T.default.getFontSize()+10)/2},r.beginPath(),r.strokeStyle=i,r.arc(M.x,M.y,6,0,2*Math.PI),r.stroke(),(0,x.default)(r,m,M.x+O.x,M.y+O.y,i),r.restore()}}function i(e){var t=e.detail,a=t.element;a.removeEventListener(c.default.IMAGE_RENDERED,d),a.removeEventListener(c.default.MOUSE_DRAG,u),a.removeEventListener(c.default.MOUSE_UP,i),a.removeEventListener(c.default.MOUSE_CLICK,i),v.default.cornerstone.updateImage(t.element)}function l(e){var t=e.detail,a=t.element,n=(0,w.getToolOptions)(L,a);(0,I.default)(t.which,n.mouseButtonMask)&&(a.addEventListener(c.default.IMAGE_RENDERED,d),a.addEventListener(c.default.MOUSE_DRAG,u),a.addEventListener(c.default.MOUSE_UP,i),a.addEventListener(c.default.MOUSE_CLICK,i),U.strategy(t),e.preventDefault(),e.stopPropagation())}function d(){D&&(U.strategy(D),D=null)}function u(e){var t=e.detail,a=t.element;D=t,v.default.cornerstone.updateImage(a),e.preventDefault(),e.stopPropagation()}Object.defineProperty(t,"__esModule",{value:!0}),t.dragProbeTouch=t.dragProbe=void 0;var s=a(1),c=n(s),f=a(0),v=n(f),m=a(16),g=n(m),h=a(15),p=n(h),E=a(13),T=n(E),M=a(6),y=n(M),O=a(7),x=n(O),_=a(34),b=n(_),S=a(20),P=n(S),C=a(4),I=n(C),w=a(3),L="dragProbe",D=void 0,U=(0,g.default)(l,L);U.strategies={default:o,minimal:r},U.strategy=o;var A={fireOnTouchStart:!0},R=(0,p.default)(u,L,A);t.dragProbe=U,t.dragProbeTouch=R},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){return{visible:!0,active:!0,invalidated:!0,handles:{start:{x:e.currentPoints.image.x,y:e.currentPoints.image.y,highlight:!0,active:!1},end:{x:e.currentPoints.image.x,y:e.currentPoints.image.y,highlight:!0,active:!0},textBox:{active:!1,hasMoved:!1,movesIndependently:!1,drawnIndependently:!0,allowedOutsideImage:!0,hasBoundingBox:!0}}}}function r(e,t,a,n){var o=c.default.cornerstone,r=o.pixelToCanvas(e,t.handles.start),i=o.pixelToCanvas(e,t.handles.end),l={left:Math.min(r.x,i.x)+n/2,top:Math.min(r.y,i.y)+n/2,width:Math.abs(r.x-i.x)-n,height:Math.abs(r.y-i.y)-n},d={left:Math.min(r.x,i.x)-n/2,top:Math.min(r.y,i.y)-n/2,width:Math.abs(r.x-i.x)+n,height:Math.abs(r.y-i.y)+n},u=(0,P.default)(l,a);return!(!(0,P.default)(d,a)||u)}function i(e,t,a){return r(e,t,a,15)}function l(e,t,a){return r(e,t,a,25)}function d(e){var t=e.toString().split(".");return t[0]=t[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),t.join(".")}function u(e){var t=e.detail,a=(0,D.getToolState)(e.currentTarget,U);if(a){var n=c.default.cornerstone,o=t.image,r=t.element,i=p.default.getToolWidth(),l=A.getConfiguration(),u=t.canvasContext.canvas.getContext("2d"),s=n.metaData.get("generalSeriesModule",o.imageId),f=void 0;s&&(f=s.modality),u.setTransform(1,0,0,1,0,0);for(var v=0;v<a.data.length;v++){u.save();var m=a.data[v];l&&l.shadow&&(u.shadowColor=l.shadowColor||"#000000",u.shadowOffsetX=l.shadowOffsetX||1,u.shadowOffsetY=l.shadowOffsetY||1);var g=T.default.getColorIfActive(m.active),h=n.pixelToCanvas(r,m.handles.start),E=n.pixelToCanvas(r,m.handles.end),M=Math.min(h.x,E.x),O=Math.min(h.y,E.y),_=Math.abs(h.x-E.x),S=Math.abs(h.y-E.y);if(u.beginPath(),u.strokeStyle=g,u.lineWidth=i,(0,b.default)(u,M,O,_,S),u.closePath(),l&&l.drawHandlesOnHover)if(!0===m.active)(0,y.default)(u,t,m.handles,g);else{var P={drawHandlesIfActive:!0};(0,y.default)(u,t,m.handles,g,P)}else(0,y.default)(u,t,m.handles,g);var C=void 0,w=void 0,R=void 0;if(!1===m.invalidated)w=m.meanStdDev,R=m.meanStdDevSUV,C=m.area;else{var k={left:Math.round(Math.min(m.handles.start.x,m.handles.end.x)),top:Math.round(Math.min(m.handles.start.y,m.handles.end.y)),width:Math.round(Math.abs(m.handles.start.x-m.handles.end.x)),height:Math.round(Math.abs(m.handles.start.y-m.handles.end.y))};if(!o.color){var j=n.getPixels(r,k.left,k.top,k.width,k.height);w=(0,I.default)(j,k),"PT"===f&&(R={mean:(0,L.default)(o,(w.mean-o.intercept)/o.slope),stdDev:(0,L.default)(o,(w.stdDev-o.intercept)/o.slope)}),w&&!isNaN(w.mean)&&(m.meanStdDev=w,m.meanStdDevSUV=R)}var N=o.columnPixelSpacing||1,H=o.rowPixelSpacing||1;C=Math.PI*(k.width*N/2)*(k.height*H/2),isNaN(C)||(m.area=C),m.invalidated=!1}var V=[];if(w&&void 0!==w.mean){var B="";"CT"===f&&(B=" HU");var W="Mean: "+d(w.mean.toFixed(2))+B,G="StdDev: "+d(w.stdDev.toFixed(2))+B;if(R&&void 0!==R.mean){W+=" SUV: "+d(R.mean.toFixed(2)),G+=" SUV: "+d(R.stdDev.toFixed(2))}V.push(W),V.push(G)}if(C){var F=" mm"+String.fromCharCode(178);o.rowPixelSpacing&&o.columnPixelSpacing||(F=" pixels"+String.fromCharCode(178));var Y="Area: "+d(C.toFixed(2))+F;V.push(Y)}m.handles.textBox.hasMoved||(m.handles.textBox.x=Math.max(m.handles.start.x,m.handles.end.x),m.handles.textBox.y=(m.handles.start.y+m.handles.end.y)/2);var z=n.pixelToCanvas(r,m.handles.textBox),K={centering:{x:!1,y:!0}},X=(0,x.default)(u,V,z.x,z.y,g,K);if(m.handles.textBox.boundingBox=X,m.handles.textBox.hasMoved){var q={start:{},end:{x:z.x,y:z.y}},Z=[{x:M+_/2,y:O},{x:M,y:O+S/2},{x:M+_/2,y:O+S},{x:M+_,y:O+S/2}];q.start=c.default.cornerstoneMath.point.findClosestPoint(Z,q.end);var J=[{x:X.left+X.width/2,y:X.top},{x:X.left,y:X.top+X.height/2},{x:X.left+X.width/2,y:X.top+X.height},{x:X.left+X.width,y:X.top+X.height/2}];q.end=c.default.cornerstoneMath.point.findClosestPoint(J,q.start),u.beginPath(),u.strokeStyle=g,u.lineWidth=i,u.setLineDash([2,3]),u.moveTo(q.start.x,q.start.y),u.lineTo(q.end.x,q.end.y),u.stroke()}u.restore()}}}Object.defineProperty(t,"__esModule",{value:!0}),t.ellipticalRoiTouch=t.ellipticalRoi=void 0;var s=a(0),c=n(s),f=a(9),v=n(f),m=a(11),g=n(m),h=a(8),p=n(h),E=a(6),T=n(E),M=a(10),y=n(M),O=a(7),x=n(O),_=a(46),b=n(_),S=a(32),P=n(S),C=a(49),I=n(C),w=a(20),L=n(w),D=a(2),U="ellipticalRoi",A=(0,v.default)({createNewMeasurement:o,onImageRendered:u,pointNearTool:i,toolType:U}),R=(0,g.default)({createNewMeasurement:o,onImageRendered:u,pointNearTool:l,toolType:U});t.ellipticalRoi=A,t.ellipticalRoiTouch=R},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=(0,L.getToolState)(e.element,U);if(void 0!==t){var a=R.getConfiguration(),n=t.data[a.currentTool],o={x:e.currentPoints.image.x,y:e.currentPoints.image.y,highlight:!0,active:!0,lines:[]};n.handles.length&&n.handles[a.currentHandle-1].lines.push(e.currentPoints.image),n.handles.push(o),a.currentHandle+=1,a.freehand=!1,O.default.cornerstone.updateImage(e.element)}}function r(e,t){var a=(0,L.getToolState)(e.element,U);if(void 0!==a){var n=a.data[t];if(void 0!==n.handles)for(var o=e.currentPoints.canvas,r=0;r<n.handles.length;r++){var i=O.default.cornerstone.pixelToCanvas(e.element,n.handles[r]);if(O.default.cornerstoneMath.point.distance(i,o)<5)return r}}}function i(e){var t=(0,L.getToolState)(e.element,U);if(t)for(var a=void 0,n=0;n<t.data.length;n++)if(void 0!==(a=r(e,n)))return{handleNearby:a,toolIndex:n}}function l(e){var t=e.detail;if(t.element.removeEventListener(M.default.MOUSE_UP,l),void 0!==(0,L.getToolState)(t.element,U)){var a=R.getConfiguration();t.event.shiftKey||(a.freehand=!1),O.default.cornerstone.updateImage(t.element)}}function d(e){var t=e.detail,a=(0,L.getToolState)(t.element,U);if(a){var n=R.getConfiguration(),o=a.data[n.currentTool],i=Math.max(t.currentPoints.image.x,0);i=Math.min(i,t.image.width),n.mouseLocation.handles.start.x=i;var l=Math.max(t.currentPoints.image.y,0);l=Math.min(l,t.image.height),n.mouseLocation.handles.start.y=l;var d=n.currentHandle;if(n.modifying&&(o.active=!0,o.highlight=!0,o.handles[d].x=n.mouseLocation.handles.start.x,o.handles[d].y=n.mouseLocation.handles.start.y,d)){var u=o.handles[d-1].lines.length-1,s=o.handles[d-1].lines[u];s.x=n.mouseLocation.handles.start.x,s.y=n.mouseLocation.handles.start.y}if(n.freehand)o.handles[d-1].lines.push(t.currentPoints.image);else{var c=r(t,n.currentTool);void 0!==c&&c<o.handles.length-1&&(n.mouseLocation.handles.start.x=o.handles[c].x,n.mouseLocation.handles.start.y=o.handles[c].y)}O.default.cornerstone.updateImage(t.element)}}function u(e){var t=e.element;t.addEventListener(M.default.MOUSE_MOVE,d),t.addEventListener(M.default.MOUSE_UP,l);var a={visible:!0,active:!0,handles:[]},n=R.getConfiguration();n.mouseLocation.handles.start.x=e.currentPoints.image.x,n.mouseLocation.handles.start.y=e.currentPoints.image.y,(0,L.addToolState)(e.element,U,a);var o=(0,L.getToolState)(e.element,U);n.currentTool=o.data.length-1}function s(e,t){var a=e.element,n=(0,L.getToolState)(e.element,U);if(n){var o=R.getConfiguration(),r=n.data[o.currentTool];r.active=!1,r.highlight=!1,void 0!==t&&r.handles[o.currentHandle-1].lines.push({x:r.handles[t].x,y:r.handles[t].y}),o.modifying&&(o.modifying=!1),o.currentHandle=0,o.currentTool=-1,a.removeEventListener(M.default.MOUSE_MOVE,d),O.default.cornerstone.updateImage(e.element)}}function c(e){var t=e.detail,a=t.element,n=(0,D.getToolOptions)(U,a);if((0,w.default)(t.which,n.mouseButtonMask)){var c=(0,L.getToolState)(t.element,U),f=void 0,v=void 0,m=R.getConfiguration(),g=m.currentTool;if(m.modifying)return void s(t);if(g<0){var h=i(t);h?(f=h.handleNearby,v=h.toolIndex,void 0!==f&&(a.addEventListener(M.default.MOUSE_MOVE,d),a.addEventListener(M.default.MOUSE_UP,l),m.modifying=!0,m.currentHandle=f,m.currentTool=v)):(u(t),o(t))}else g>=0&&c.data[g].active&&(f=r(t,g),void 0!==f?s(t,f):t.event.shiftKey?m.freehand=!0:o(t));e.preventDefault(),e.stopPropagation()}}function f(e){var t=e.detail,a=(0,L.getToolState)(e.currentTarget,U);if(void 0!==a){var n=O.default.cornerstone,o=R.getConfiguration(),r=t.canvasContext.canvas.getContext("2d");r.setTransform(1,0,0,1,0,0);for(var i=void 0,l=_.default.getToolWidth(),d=S.default.getFillColor(),u=0;u<a.data.length;u++){r.save();var s=a.data[u];s.active?(i=S.default.getActiveColor(),d=S.default.getFillColor()):(i=S.default.getToolColor(),d=S.default.getToolColor());var c=void 0;if(s.handles.length)for(var f=0;f<s.handles.length;f++){c=s.handles[f];var v=n.pixelToCanvas(t.element,c);r.beginPath(),r.strokeStyle=i,r.lineWidth=l,r.moveTo(v.x,v.y);for(var m=0;m<s.handles[f].lines.length;m++){var g=n.pixelToCanvas(t.element,s.handles[f].lines[m]);r.lineTo(g.x,g.y),r.stroke()}var h=n.pixelToCanvas(t.element,o.mouseLocation.handles.start);f===s.handles.length-1&&(!s.active||o.freehand||o.modifying||(r.lineTo(h.x,h.y),r.stroke()))}var p={fill:d};s.active&&(0,C.default)(r,t,o.mouseLocation.handles,i,p),(0,C.default)(r,t,s.handles,i,p),r.restore()}}}function v(e){e.removeEventListener(M.default.MOUSE_DOWN,c),e.removeEventListener(M.default.MOUSE_UP,l),e.removeEventListener(M.default.MOUSE_MOVE,d),e.removeEventListener(M.default.IMAGE_RENDERED,f),e.addEventListener(M.default.IMAGE_RENDERED,f),O.default.cornerstone.updateImage(e)}function m(e){e.removeEventListener(M.default.MOUSE_DOWN,c),e.removeEventListener(M.default.MOUSE_UP,l),e.removeEventListener(M.default.MOUSE_MOVE,d),e.removeEventListener(M.default.IMAGE_RENDERED,f),O.default.cornerstone.updateImage(e)}function g(e,t){(0,D.setToolOptions)(U,e,{mouseButtonMask:t}),e.removeEventListener(M.default.MOUSE_DOWN,c),e.removeEventListener(M.default.MOUSE_UP,l),e.removeEventListener(M.default.MOUSE_MOVE,d),e.removeEventListener(M.default.IMAGE_RENDERED,f),e.addEventListener(M.default.IMAGE_RENDERED,f),e.addEventListener(M.default.MOUSE_DOWN,c),O.default.cornerstone.updateImage(e)}function h(e){e.removeEventListener(M.default.MOUSE_DOWN,c),e.removeEventListener(M.default.MOUSE_UP,l),e.removeEventListener(M.default.MOUSE_MOVE,d),e.removeEventListener(M.default.IMAGE_RENDERED,f),e.addEventListener(M.default.IMAGE_RENDERED,f),O.default.cornerstone.updateImage(e)}function p(){return A}function E(e){A=e}Object.defineProperty(t,"__esModule",{value:!0}),t.freehand=void 0;var T=a(1),M=n(T),y=a(0),O=n(y),x=a(8),_=n(x),b=a(6),S=n(b),P=a(10),C=n(P),I=a(4),w=n(I),L=a(2),D=a(3),U="freehand",A={mouseLocation:{handles:{start:{highlight:!0,active:!0}}},freehand:!1,modifying:!1,currentHandle:0,currentTool:-1},R={enable:v,disable:m,activate:g,deactivate:h,getConfiguration:p,setConfiguration:E};t.freehand=R},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=(0,M.getToolState)(e.event.currentTarget,y);if(!(t&&t.data&&t.data.length>0)){return{visible:!0,active:!0,handles:{start:{x:e.currentPoints.image.x,y:e.currentPoints.image.y,highlight:!0,active:!1},end:{x:e.currentPoints.image.x,y:e.currentPoints.image.y,highlight:!0,active:!0}}}}}function r(e,t,a){var n=u.default.cornerstone,o=n.pixelToCanvas(e,t.handles.start),r=n.pixelToCanvas(e,t.handles.end),i={left:Math.min(o.x,r.x),top:Math.min(o.y,r.y),width:Math.abs(o.x-r.x),height:Math.abs(o.y-r.y)},l=!1;return a.x>=i.left&&a.x<=i.left+i.width&&a.y>=i.top&&a.y<=i.top+i.height&&(l=!0),l}function i(e,t,a){var n=u.default.cornerstone,o=n.pixelToCanvas(e,t.handles.start),r=n.pixelToCanvas(e,t.handles.end),i={left:Math.min(o.x,r.x),top:Math.min(o.y,r.y),width:Math.abs(o.x-r.x),height:Math.abs(o.y-r.y)};return u.default.cornerstoneMath.rect.distanceToPoint(i,a)<5}function l(e){var t=e.detail,a=(0,M.getToolState)(e.currentTarget,y);if(void 0!==a){var n=u.default.cornerstone,o=t.canvasContext.canvas.getContext("2d");o.setTransform(1,0,0,1,0,0);var r=void 0,i=g.default.getToolWidth();o.save();var l=a.data[0];if(l){r=l.active?p.default.getActiveColor():p.default.getToolColor();var d=n.pixelToCanvas(t.element,l.handles.start),s=n.pixelToCanvas(t.element,l.handles.end),c={left:Math.min(d.x,s.x),top:Math.min(d.y,s.y),width:Math.abs(d.x-s.x),height:Math.abs(d.y-s.y)};o.beginPath(),o.strokeStyle="transparent",o.rect(0,0,o.canvas.clientWidth,o.canvas.clientHeight),o.rect(c.width+c.left,c.top,-c.width,c.height),o.stroke(),o.fillStyle="rgba(0,0,0,0.7)",o.fill(),o.closePath(),o.beginPath(),o.strokeStyle=r,o.lineWidth=i,o.setLineDash([4]),o.strokeRect(c.left,c.top,c.width,c.height),o.setLineDash([]),(0,T.default)(o,t,l.handles,r),o.restore()}}}Object.defineProperty(t,"__esModule",{value:!0}),t.highlightTouch=t.highlight=void 0;var d=a(0),u=n(d),s=a(55),c=n(s),f=a(11),v=n(f),m=a(8),g=n(m),h=a(6),p=n(h),E=a(10),T=n(E),M=a(2),y="highlight",O=(0,c.default)({createNewMeasurement:o,onImageRendered:l,pointNearTool:i,pointInsideRect:r,toolType:y},!0),x=(0,v.default)({createNewMeasurement:o,onImageRendered:l,pointNearTool:i,pointInsideRect:r,toolType:y},!0);t.highlight=O,t.highlightTouch=x},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.detail,a=t.image,n=a.stats,o=t.canvasContext.canvas.getContext("2d");o.setTransform(1,0,0,1,0,0);var r=[];Object.keys(n).forEach(function(e){var t=e+" : "+n[e];r.push(t)}),(0,d.default)(o,r,0,0,"orange"),r.forEach(function(e){console.log(e)})}Object.defineProperty(t,"__esModule",{value:!0});var r=a(26),i=n(r),l=a(7),d=n(l),u=(0,i.default)(o);t.default=u},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){return{visible:!0,active:!0,handles:{start:{x:e.currentPoints.image.x,y:e.currentPoints.image.y,highlight:!0,active:!1},end:{x:e.currentPoints.image.x,y:e.currentPoints.image.y,highlight:!0,active:!0},textBox:{active:!1,hasMoved:!1,movesIndependently:!1,drawnIndependently:!0,allowedOutsideImage:!0,hasBoundingBox:!0}}}}function r(e,t,a){var n=d.default.cornerstone,o={start:n.pixelToCanvas(e,t.handles.start),end:n.pixelToCanvas(e,t.handles.end)};return d.default.cornerstoneMath.lineSegment.distanceToPoint(o,a)<25}function i(e){var t=e.detail,a=(0,y.getToolState)(e.currentTarget,O);if(a){var n=d.default.cornerstone,o=t.canvasContext.canvas.getContext("2d"),r=t.image,i=t.element;o.setTransform(1,0,0,1,0,0);var l=h.default.getToolWidth(),u=x.getConfiguration(),s=n.metaData.get("imagePlaneModule",r.imageId),c=void 0,f=void 0;s?(c=s.rowPixelSpacing||s.rowImagePixelSpacing,f=s.columnPixelSpacing||s.colImagePixelSpacing):(c=r.rowPixelSpacing,f=r.columnPixelSpacing);for(var v=0;v<a.data.length;v++){o.save(),u&&u.shadow&&(o.shadowColor=u.shadowColor||"#000000",o.shadowOffsetX=u.shadowOffsetX||1,o.shadowOffsetY=u.shadowOffsetY||1);var g=a.data[v],p=E.default.getColorIfActive(g.active),T=n.pixelToCanvas(i,g.handles.start),_=n.pixelToCanvas(i,g.handles.end);o.beginPath(),o.strokeStyle=p,o.lineWidth=l,o.moveTo(T.x,T.y),o.lineTo(_.x,_.y),o.stroke();var b={drawHandlesIfActive:u&&u.drawHandlesOnHover};(0,M.default)(o,t,g.handles,p,b),o.fillStyle=p;var S=(g.handles.end.x-g.handles.start.x)*(c||1),P=(g.handles.end.y-g.handles.start.y)*(f||1),C=Math.sqrt(S*S+P*P);g.length=C;var I=" mm";c&&f||(I=" pixels");var w=""+C.toFixed(2)+I;if(!g.handles.textBox.hasMoved){var L={x:Math.max(g.handles.start.x,g.handles.end.x)};L.x===g.handles.start.x?L.y=g.handles.start.y:L.y=g.handles.end.y,g.handles.textBox.x=L.x,g.handles.textBox.y=L.y}var D=n.pixelToCanvas(t.element,g.handles.textBox);D.x+=10;var U={centering:{x:!1,y:!0}},A=(0,m.default)(o,w,D.x,D.y,p,U);if(g.handles.textBox.boundingBox=A,g.handles.textBox.hasMoved){var R={start:{},end:{}},k={x:(T.x+_.x)/2,y:(T.y+_.y)/2},j=[T,_,k];R.end.x=D.x,R.end.y=D.y,R.start=d.default.cornerstoneMath.point.findClosestPoint(j,R.end);var N=[{x:A.left+A.width/2,y:A.top},{x:A.left,y:A.top+A.height/2},{x:A.left+A.width/2,y:A.top+A.height},{x:A.left+A.width,y:A.top+A.height/2}];R.end=d.default.cornerstoneMath.point.findClosestPoint(N,R.start),o.beginPath(),o.strokeStyle=p,o.lineWidth=l,o.setLineDash([2,3]),o.moveTo(R.start.x,R.start.y),o.lineTo(R.end.x,R.end.y),o.stroke()}o.restore()}}}Object.defineProperty(t,"__esModule",{value:!0}),t.lengthTouch=t.length=void 0;var l=a(0),d=n(l),u=a(9),s=n(u),c=a(11),f=n(c),v=a(7),m=n(v),g=a(8),h=n(g),p=a(6),E=n(p),T=a(10),M=n(T),y=a(2),O="length",x=(0,s.default)({createNewMeasurement:o,onImageRendered:i,pointNearTool:r,toolType:O}),_=(0,f.default)({createNewMeasurement:o,onImageRendered:i,pointNearTool:r,toolType:O});t.length=x,t.lengthTouch=_},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.detail,a=t.element;a.removeEventListener(T.default.MOUSE_DRAG,u),a.removeEventListener(T.default.MOUSE_UP,o),a.removeEventListener(T.default.MOUSE_CLICK,o),a.removeEventListener(T.default.NEW_IMAGE,l),r(t)}function r(e){e.element.querySelector(".magnifyTool").style.display="none",document.body.style.cursor="default"}function i(e){var t=e.detail,a=t.element,n=(0,P.getToolOptions)(C,a);(0,S.default)(t.which,n.mouseButtonMask)&&(a.addEventListener(T.default.MOUSE_DRAG,u),a.addEventListener(T.default.MOUSE_UP,o),a.addEventListener(T.default.MOUSE_CLICK,o),L=t.currentPoints,a.addEventListener(T.default.NEW_IMAGE,l),s(t),e.preventDefault(),e.stopPropagation())}function l(e){var t=e.detail;t.currentPoints=L,s(t)}function d(e){var t=e.detail,a=t.element;a.removeEventListener(T.default.TOUCH_DRAG_END,d),a.removeEventListener(T.default.TOUCH_END,d),a.removeEventListener(T.default.NEW_IMAGE,l),r(t)}function u(e){var t=e.detail,a=t.element;L=t.currentPoints,s(t),!0===t.isTouchEvent&&(a.addEventListener(T.default.TOUCH_DRAG_END,d),a.addEventListener(T.default.TOUCH_END,d)),e.preventDefault(),e.stopPropagation()}function s(e){var t=e.element,a=t.querySelector(".magnifyTool");a||c(e.element);var n=D.getConfiguration(),o=n.magnifySize,r=n.magnificationLevel,i=t.querySelector("canvas:not(.magnifyTool)");i.getContext("2d").setTransform(1,0,0,1,0,0);var l=a.getContext("2d");l.setTransform(1,0,0,1,0,0);var d=o/r,u=y.default.cornerstone.pixelToCanvas(e.element,e.currentPoints.image);!0===e.isTouchEvent&&(u.y-=1.25*d),u.x=Math.max(u.x,0),u.x=Math.min(u.x,i.width),u.y=Math.max(u.y,0),u.y=Math.min(u.y,i.height),l.clearRect(0,0,o,o),l.fillStyle="transparent",l.fillRect(0,0,o,o);var s={x:u.x-.5*d,y:u.y-.5*d};"Safari"===w&&(s.x=Math.max(s.x,0),s.y=Math.max(s.y,0)),s.x=Math.min(s.x,i.width),s.y=Math.min(s.y,i.height);var f={x:(i.width-s.x)*r,y:(i.height-s.y)*r};l.drawImage(i,s.x,s.y,i.width-s.x,i.height-s.y,0,0,f.x,f.y),a.style.top=u.y-.5*o+"px",a.style.left=u.x-.5*o+"px",a.style.display="block",document.body.style.cursor="none"}function c(e){if(null===e.querySelector(".magnifyTool")){var t=document.createElement("canvas");t.classList.add("magnifyTool");var a=D.getConfiguration();t.width=a.magnifySize,t.height=a.magnifySize,t.style.position="absolute",e.appendChild(t)}}function f(e){var t=e.querySelector(".magnifyTool");t&&e.removeChild(t)}function v(e){e.removeEventListener(T.default.MOUSE_DOWN,i),f(e)}function m(e){if(!w){var t=(0,_.getBrowserInfo)(),a=t.split(" ");w=a[0]}c(e)}function g(e,t){(0,P.setToolOptions)(C,e,{mouseButtonMask:t}),e.removeEventListener(T.default.MOUSE_DOWN,i),e.addEventListener(T.default.MOUSE_DOWN,i),c(e)}function h(){return I}function p(e){I=e}Object.defineProperty(t,"__esModule",{value:!0}),t.magnifyTouchDrag=t.magnify=void 0;var E=a(1),T=n(E),M=a(0),y=n(M),O=a(15),x=n(O),_=a(22),b=a(4),S=n(b),P=a(3),C="magnify",I={magnifySize:100,magnificationLevel:2},w=void 0,L=void 0,D={enable:m,activate:g,deactivate:v,disable:v,getConfiguration:h,setConfiguration:p},U={fireOnTouchStart:!0,activateCallback:c,disableCallback:f},A=(0,x.default)(u,C,U);t.magnify=D,t.magnifyTouchDrag=A},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=d.default.cornerstone,a=t.getEnabledElement(e),n=t.metaData.get("imagePlaneModule",a.image.imageId);if(n&&n.rowCosines&&n.columnCosines){var o=s.default.getOrientationString(n.rowCosines),r=s.default.getOrientationString(n.columnCosines),i=s.default.invertOrientationString(o);return{top:s.default.invertOrientationString(r),bottom:r,left:i,right:o}}}function r(e){var t=d.default.cornerstone,a=t.getEnabledElement(e),n=void 0;n={x:a.image.width/2,y:5};var o=t.pixelToCanvas(e,n);n={x:a.image.width/2,y:a.image.height-5};var r=t.pixelToCanvas(e,n);n={x:5,y:a.image.height/2};var i=t.pixelToCanvas(e,n);return n={x:a.image.width-10,y:a.image.height/2},{top:o,bottom:r,left:i,right:t.pixelToCanvas(e,n)}}function i(e){var t=e.detail,a=t.element,n=o(a);if(n){var i=r(a,n),l=t.canvasContext.canvas.getContext("2d");l.setTransform(1,0,0,1,0,0);var d=m.default.getToolColor(),u={top:l.measureText(n.top).width,left:l.measureText(n.left).width,right:l.measureText(n.right).width,bottom:l.measureText(n.bottom).width};(0,h.default)(l,n.top,i.top.x-u.top/2,i.top.y,d),(0,h.default)(l,n.left,i.left.x-u.left/2,i.left.y,d);var s=p.getConfiguration();s&&s.drawAllMarkers&&((0,h.default)(l,n.right,i.right.x-u.right/2,i.right.y,d),(0,h.default)(l,n.bottom,i.bottom.x-u.bottom/2,i.bottom.y,d))}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(0),d=n(l),u=a(43),s=n(u),c=a(26),f=n(c),v=a(6),m=n(v),g=a(7),h=n(g),p=(0,f.default)(i);t.default=p},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.detail,a=t.element;a.removeEventListener(d.default.MOUSE_DRAG,i),a.removeEventListener(d.default.MOUSE_UP,o),a.removeEventListener(d.default.MOUSE_CLICK,o)}function r(e){var t=e.detail,a=t.element,n=(0,p.getToolOptions)(E,a);(0,h.default)(t.which,n.mouseButtonMask)&&(a.addEventListener(d.default.MOUSE_DRAG,i),a.addEventListener(d.default.MOUSE_UP,o),a.addEventListener(d.default.MOUSE_CLICK,o),e.preventDefault(),e.stopPropagation())}function i(e){var t=e.detail,a=t.viewport.scale,n=t.viewport.scale;t.image.rowPixelSpacing<t.image.columnPixelSpacing?a*=t.image.columnPixelSpacing/t.image.rowPixelSpacing:t.image.columnPixelSpacing<t.image.rowPixelSpacing&&(n*=t.image.rowPixelSpacing/t.image.columnPixelSpacing),t.viewport.translation.x+=t.deltaPoints.page.x/a,t.viewport.translation.y+=t.deltaPoints.page.y/n,s.default.cornerstone.setViewport(t.element,t.viewport),e.preventDefault(),e.stopPropagation()}Object.defineProperty(t,"__esModule",{value:!0}),t.panTouchDrag=t.pan=void 0;var l=a(1),d=n(l),u=a(0),s=n(u),c=a(16),f=n(c),v=a(15),m=n(v),g=a(4),h=n(g),p=a(3),E="pan",T=(0,f.default)(r,E),M=(0,m.default)(i,E);t.pan=T,t.panTouchDrag=M},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.detail,a=s.getConfiguration();a&&a.testPointers(t)&&(t.viewport.translation.x+=t.deltaPoints.page.x/t.viewport.scale,t.viewport.translation.y+=t.deltaPoints.page.y/t.viewport.scale,i.default.cornerstone.setViewport(t.element,t.viewport),e.preventDefault(),e.stopPropagation())}Object.defineProperty(t,"__esModule",{value:!0});var r=a(0),i=n(r),l=a(40),d=n(l),u={testPointers:function(e){return e.numPointers>=2}},s=(0,d.default)(o);s.setConfiguration(u),t.default=s},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){return{visible:!0,active:!0,handles:{end:{x:e.currentPoints.image.x,y:e.currentPoints.image.y,highlight:!0,active:!0}}}}function r(e,t,a){var n=d.default.cornerstone.pixelToCanvas(e,t.handles.end);return d.default.cornerstoneMath.point.distance(n,a)<5}function i(e){var t=e.detail,a=(0,b.getToolState)(e.currentTarget,S);if(a){var n=d.default.cornerstone,o=t.canvasContext.canvas.getContext("2d");o.setTransform(1,0,0,1,0,0);for(var r=void 0,i=h.default.getFont(),l=h.default.getFontSize(),u=0;u<a.data.length;u++){o.save();var s=a.data[u];r=s.active?m.default.getActiveColor():m.default.getToolColor(),(0,E.default)(o,t,s.handles,r);var c=Math.round(s.handles.end.x),f=Math.round(s.handles.end.y),v=void 0,g=void 0,p=void 0;if(c<0||f<0||c>=t.image.columns||f>=t.image.rows)return;if(t.image.color)g=c+", "+f,v=(0,O.default)(t.element,c,f,1,1),p="R: "+v[0]+" G: "+v[1]+" B: "+v[2];else{v=n.getStoredPixels(t.element,c,f,1,1);var T=v[0],y=T*t.image.slope+t.image.intercept,x=(0,_.default)(t.image,T);g=c+", "+f,p="SP: "+T+" MO: "+parseFloat(y.toFixed(3)),x&&(p+=" SUV: "+parseFloat(x.toFixed(3)))}var P={x:s.handles.end.x+3,y:s.handles.end.y-3},C=n.pixelToCanvas(t.element,P);o.font=i,o.fillStyle=r,(0,M.default)(o,p,C.x,C.y+l+5,r),(0,M.default)(o,g,C.x,C.y,r),o.restore()}}}Object.defineProperty(t,"__esModule",{value:!0}),t.probeTouch=t.probe=void 0;var l=a(0),d=n(l),u=a(9),s=n(u),c=a(11),f=n(c),v=a(6),m=n(v),g=a(13),h=n(g),p=a(10),E=n(p),T=a(7),M=n(T),y=a(34),O=n(y),x=a(20),_=n(x),b=a(2),S="probe",P=(0,s.default)({createNewMeasurement:o,onImageRendered:i,pointNearTool:r,toolType:S}),C=(0,f.default)({createNewMeasurement:o,onImageRendered:i,pointNearTool:r,toolType:S});t.probe=P,t.probeTouch=C},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){return{visible:!0,active:!0,invalidated:!0,handles:{start:{x:e.currentPoints.image.x,y:e.currentPoints.image.y,highlight:!0,active:!1},end:{x:e.currentPoints.image.x,y:e.currentPoints.image.y,highlight:!0,active:!0},textBox:{active:!1,hasMoved:!1,movesIndependently:!1,drawnIndependently:!0,allowedOutsideImage:!0,hasBoundingBox:!0}}}}function r(e,t,a){var n=s.default.cornerstone,o=n.pixelToCanvas(e,t.handles.start),r=n.pixelToCanvas(e,t.handles.end),i={left:Math.min(o.x,r.x),top:Math.min(o.y,r.y),width:Math.abs(o.x-r.x),height:Math.abs(o.y-r.y)};return s.default.cornerstoneMath.rect.distanceToPoint(i,a)<5}function i(e,t){for(var a=0,n=0,o=0,r=0,i=t.top;i<t.top+t.height;i++)for(var l=t.left;l<t.left+t.width;l++)a+=e[r],n+=e[r]*e[r],o++,r++;if(0===o)return{count:o,mean:0,variance:0,stdDev:0};var d=a/o,u=n/o-d*d;return{count:o,mean:d,variance:u,stdDev:Math.sqrt(u)}}function l(e){var t=e.toString().split(".");return t[0]=t[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),t.join(".")}function d(e){var t=e.detail,a=(0,b.getToolState)(e.currentTarget,S);if(a){var n=s.default.cornerstone,o=t.image,r=t.element,d=h.default.getToolWidth(),u=P.getConfiguration(),c=t.canvasContext.canvas.getContext("2d"),f=n.metaData.get("generalSeriesModule",o.imageId),v=void 0;f&&(v=f.modality),c.setTransform(1,0,0,1,0,0);for(var m=0;m<a.data.length;m++){c.save();var g=a.data[m];u&&u.shadow&&(c.shadowColor=u.shadowColor||"#000000",c.shadowOffsetX=u.shadowOffsetX||1,c.shadowOffsetY=u.shadowOffsetY||1);var p=E.default.getColorIfActive(g.active),T=n.pixelToCanvas(r,g.handles.start),y=n.pixelToCanvas(r,g.handles.end),x=Math.min(T.x,y.x),C=Math.min(T.y,y.y),I=Math.abs(T.x-y.x),w=Math.abs(T.y-y.y);if(c.beginPath(),c.strokeStyle=p,c.lineWidth=d,c.rect(x,C,I,w),c.stroke(),u&&u.drawHandlesOnHover)if(!0===g.active)(0,M.default)(c,t,g.handles,p);else{var L={drawHandlesIfActive:!0};(0,M.default)(c,t,g.handles,p,L)}else(0,M.default)(c,t,g.handles,p);var D=void 0,U=void 0,A=void 0;if(!1===g.invalidated)U=g.meanStdDev,A=g.meanStdDevSUV,D=g.area;else{var R={left:Math.min(g.handles.start.x,g.handles.end.x),top:Math.min(g.handles.start.y,g.handles.end.y),width:Math.abs(g.handles.start.x-g.handles.end.x),height:Math.abs(g.handles.start.y-g.handles.end.y)};if(!o.color){U=i(n.getPixels(r,R.left,R.top,R.width,R.height),R),"PT"===v&&(A={mean:(0,_.default)(o,(U.mean-o.intercept)/o.slope),stdDev:(0,_.default)(o,(U.stdDev-o.intercept)/o.slope)}),U&&!isNaN(U.mean)&&(g.meanStdDev=U,g.meanStdDevSUV=A)}D=R.width*(o.columnPixelSpacing||1)*(R.height*(o.rowPixelSpacing||1)),isNaN(D)||(g.area=D),g.invalidated=!1}var k=[];if(U&&U.mean){var j="";"CT"===v&&(j=" HU");var N="Mean: "+l(U.mean.toFixed(2))+j,H="StdDev: "+l(U.stdDev.toFixed(2))+j;if(A&&void 0!==A.mean){N+=" SUV: "+l(A.mean.toFixed(2)),H+=" SUV: "+l(A.stdDev.toFixed(2))}k.push(N),k.push(H)}if(D){var V=" mm"+String.fromCharCode(178);o.rowPixelSpacing&&o.columnPixelSpacing||(V=" pixels"+String.fromCharCode(178));var B="Area: "+l(D.toFixed(2))+V;k.push(B)}g.handles.textBox.hasMoved||(g.handles.textBox.x=Math.max(g.handles.start.x,g.handles.end.x),g.handles.textBox.y=(g.handles.start.y+g.handles.end.y)/2);var W=n.pixelToCanvas(r,g.handles.textBox),G={centering:{x:!1,y:!0}},F=(0,O.default)(c,k,W.x,W.y,p,G);if(g.handles.textBox.boundingBox=F,g.handles.textBox.hasMoved){var Y={start:{},end:{x:W.x,y:W.y}},z=[{x:x+I/2,y:C},{x:x,y:C+w/2},{x:x+I/2,y:C+w},{x:x+I,y:C+w/2}];Y.start=s.default.cornerstoneMath.point.findClosestPoint(z,Y.end);var K=[{x:F.left+F.width/2,y:F.top},{x:F.left,y:F.top+F.height/2},{x:F.left+F.width/2,y:F.top+F.height},{x:F.left+F.width,y:F.top+F.height/2}];Y.end=s.default.cornerstoneMath.point.findClosestPoint(K,Y.start),c.beginPath(),c.strokeStyle=p,c.lineWidth=d,c.setLineDash([2,3]),c.moveTo(Y.start.x,Y.start.y),c.lineTo(Y.end.x,Y.end.y),c.stroke()}c.restore()}}}Object.defineProperty(t,"__esModule",{value:!0}),t.rectangleRoiTouch=t.rectangleRoi=void 0;var u=a(0),s=n(u),c=a(9),f=n(c),v=a(11),m=n(v),g=a(8),h=n(g),p=a(6),E=n(p),T=a(10),M=n(T),y=a(7),O=n(y),x=a(20),_=n(x),b=a(2),S="rectangleRoi",P=(0,f.default)({createNewMeasurement:o,onImageRendered:d,pointNearTool:r,toolType:S}),C=(0,m.default)({createNewMeasurement:o,onImageRendered:d,pointNearTool:r,toolType:S});t.rectangleRoi=P,t.rectangleRoiTouch=C},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.element.getBoundingClientRect(e.element),a={x:e.currentPoints.client.x,y:e.currentPoints.client.y},n=e.element.clientWidth,o=e.element.clientHeight,r={x:a.x-t.left-n/2,y:-1*(a.y-t.top-o/2)},i=Math.atan2(r.y,r.x),l=i*(180/Math.PI),d=-1*l+90;e.viewport.rotation=d,v.default.cornerstone.setViewport(e.element,e.viewport)}function r(e){e.viewport.rotation+=e.deltaPoints.page.x/e.viewport.scale,v.default.cornerstone.setViewport(e.element,e.viewport)}function i(e){e.viewport.rotation+=e.deltaPoints.page.y/e.viewport.scale,v.default.cornerstone.setViewport(e.element,e.viewport)}function l(e){var t=e.detail,a=t.element;a.removeEventListener(c.default.MOUSE_DRAG,u),a.removeEventListener(c.default.MOUSE_UP,l),a.removeEventListener(c.default.MOUSE_CLICK,l)}function d(e){var t=e.detail,a=t.element,n=(0,M.getToolOptions)(y,a);(0,T.default)(t.which,n.mouseButtonMask)&&(a.addEventListener(c.default.MOUSE_DRAG,u),a.addEventListener(c.default.MOUSE_UP,l),a.addEventListener(c.default.MOUSE_CLICK,l),e.preventDefault(),e.stopPropagation())}function u(e){var t=e.detail;O.strategy(t),v.default.cornerstone.setViewport(t.element,t.viewport),e.preventDefault(),e.stopPropagation()}Object.defineProperty(t,"__esModule",{value:!0}),t.rotateTouchDrag=t.rotate=void 0;var s=a(1),c=n(s),f=a(0),v=n(f),m=a(16),g=n(m),h=a(15),p=n(h),E=a(4),T=n(E),M=a(3),y="rotate",O=(0,g.default)(d,y);O.strategies={default:o,horizontal:r,vertical:i},O.strategy=o;var x=(0,p.default)(u,y);t.rotate=O,t.rotateTouchDrag=x},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.detail;return t.viewport.rotation+=t.rotation,s.default.cornerstone.setViewport(t.element,t.viewport),!1}function r(e){e.removeEventListener(d.default.TOUCH_ROTATE,o)}function i(e){e.removeEventListener(d.default.TOUCH_ROTATE,o),e.addEventListener(d.default.TOUCH_ROTATE,o)}Object.defineProperty(t,"__esModule",{value:!0});var l=a(1),d=n(l),u=a(0),s=n(u),c={activate:i,disable:r};t.default=c},function(e,t,a){"use strict";function n(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"image/png",n=e.querySelector("canvas"),o=document.createElement("a");if(o.download=t,o.href=n.toDataURL(a,1),document.createEvent){var r=document.createEvent("MouseEvents");r.initMouseEvent("click",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),o.dispatchEvent(r)}else o.fireEvent&&o.fireEvent("onclick")}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){e(prompt("Enter your annotation:"))}function r(e,t,a){a(prompt("Change your annotation:"))}function i(e){function t(e){null===e?(0,B.removeToolState)(n,G,r):r.text=e,r.active=!1,a.updateImage(n)}var a=h.default.cornerstone,n=e.element,o=Y.getConfiguration(),r=l(e);(0,B.addToolState)(n,G,r),a.updateImage(n),(0,D.default)(e,G,r,r.handles.end,function(){(0,w.default)(e,r.handles)&&(0,B.removeToolState)(n,G,r),void 0===r.text&&o.getTextCallback(t),a.updateImage(n)})}function l(e){return{visible:!0,active:!0,handles:{end:{x:e.currentPoints.image.x,y:e.currentPoints.image.y,highlight:!0,active:!1},textBox:{active:!1,hasMoved:!1,movesIndependently:!1,drawnIndependently:!0,allowedOutsideImage:!0,hasBoundingBox:!0}}}}function d(e,t,a){if(t.handles.end){var n=h.default.cornerstone.pixelToCanvas(e,t.handles.end);return h.default.cornerstoneMath.point.distance(n,a)<25}}function u(e){var t=e.detail,a=(0,B.getToolState)(e.currentTarget,G);if(a){var n=h.default.cornerstone,o=t.enabledElement,r=t.canvasContext.canvas.getContext("2d");r.setTransform(1,0,0,1,0,0);for(var i=t.canvasContext.canvas.width,l=void 0,d=S.default.getToolWidth(),u=_.default.getFont(),s=Y.getConfiguration(),c=0;c<a.data.length;c++){r.save(),s&&s.shadow&&(r.shadowColor=s.shadowColor||"#000000",r.shadowOffsetX=s.shadowOffsetX||1,r.shadowOffsetY=s.shadowOffsetY||1);var f=a.data[c];l=f.active?C.default.getActiveColor():C.default.getToolColor();var v=n.pixelToCanvas(t.element,f.handles.end);(0,k.default)(r,v,l,d);var m={drawHandlesIfActive:s&&s.drawHandlesOnHover};if(s.drawHandles&&(0,A.default)(r,t,v,l,m),f.text&&""!==f.text){r.font=u;var g="";g=s.showCoordinates?f.text+" x: "+Math.round(f.handles.end.x)+" y: "+Math.round(f.handles.end.y):f.text;var p=r.measureText(g).width+10,E=_.default.getFontSize()+10,T=Math.max(p,E)/2+5;v.x>i/2&&(T=-T);var M=void 0;if(!f.handles.textBox.hasMoved){M={x:v.x-p/2+T,y:v.y-E/2};var y=n.internal.getTransform(o);y.invert();var x=y.transformPoint(M.x,M.y);f.handles.textBox.x=x.x,f.handles.textBox.y=x.y}M=n.pixelToCanvas(t.element,f.handles.textBox);var b=(0,O.default)(r,g,M.x,M.y,l);if(f.handles.textBox.boundingBox=b,f.handles.textBox.hasMoved){var P={start:{},end:{}};P.end.x=M.x,P.end.y=M.y,P.start=v;var I=[{x:b.left+b.width/2,y:b.top},{x:b.left,y:b.top+b.height/2},{x:b.left+b.width/2,y:b.top+b.height},{x:b.left+b.width,y:b.top+b.height/2}];P.end=h.default.cornerstoneMath.point.findClosestPoint(I,P.start),r.beginPath(),r.strokeStyle=l,r.lineWidth=d,r.setLineDash([2,3]),r.moveTo(P.start.x,P.start.y),r.lineTo(P.end.x,P.end.y),r.stroke()}}r.restore()}}}function s(e){function t(e){null===e?(0,B.removeToolState)(n,G,r):r.text=e,r.active=!1,a.updateImage(n)}var a=h.default.cornerstone,n=e.element,o=Y.getConfiguration(),r=l(e);(0,B.addToolState)(n,G,r),a.updateImage(n),(0,D.default)(e,G,r,r.handles.end,function(){(0,w.default)(e,r.handles)&&(0,B.removeToolState)(n,G,r),void 0===r.text&&o.getTextCallback(t),a.updateImage(n)})}function c(e){function t(e,t,a){!0===a?(0,B.removeToolState)(o,G,e):e.text=t,e.active=!1,n.updateImage(o)}var a=e.detail,n=h.default.cornerstone,o=a.element,r=void 0,i=(0,W.getToolOptions)(G,o);if((0,N.default)(a.which,i.mouseButtonMask)){var l=Y.getConfiguration(),u=a.currentPoints.canvas,s=(0,B.getToolState)(o,G);if(s){for(var c=0;c<s.data.length;c++)if(r=s.data[c],d(o,r,u)||(0,V.default)(r.handles.textBox,u))return r.active=!0,n.updateImage(o),l.changeTextCallback(r,a,t),e.stopImmediatePropagation(),!1;e.preventDefault(),e.stopPropagation()}}}function f(e){function t(e,t,a){console.log("pressCallback doneChangingTextCallback"),!0===a?(0,B.removeToolState)(o,G,e):e.text=t,e.active=!1,n.updateImage(o),o.addEventListener(m.default.TOUCH_START,z.touchStartCallback),o.addEventListener(m.default.TOUCH_START_ACTIVE,z.touchDownActivateCallback),o.addEventListener(m.default.TAP,z.tapCallback)}var a=e.detail,n=h.default.cornerstone,o=a.element,r=void 0,i=Y.getConfiguration(),l=a.currentPoints.canvas,u=(0,B.getToolState)(o,G);if(!u)return!1;if(a.handlePressed)return o.removeEventListener(m.default.TOUCH_START,z.touchStartCallback),o.removeEventListener(m.default.TOUCH_START_ACTIVE,z.touchDownActivateCallback),o.removeEventListener(m.default.TAP,z.tapCallback),i.changeTextCallback(a.handlePressed,a,t),e.stopImmediatePropagation(),!1;for(var s=0;s<u.data.length;s++)if(r=u.data[s],d(o,r,l)||(0,V.default)(r.handles.textBox,l))return r.active=!0,n.updateImage(o),o.removeEventListener(m.default.TOUCH_START,z.touchStartCallback),o.removeEventListener(m.default.TOUCH_START_ACTIVE,z.touchDownActivateCallback),o.removeEventListener(m.default.TAP,z.tapCallback),i.changeTextCallback(r,a,t),e.stopImmediatePropagation(),!1;e.preventDefault(),e.stopPropagation()}Object.defineProperty(t,"__esModule",{value:!0}),t.seedAnnotateTouch=t.seedAnnotate=void 0;var v=a(1),m=n(v),g=a(0),h=n(g),p=a(9),E=n(p),T=a(11),M=n(T),y=a(7),O=n(y),x=a(13),_=n(x),b=a(8),S=n(b),P=a(6),C=n(P),I=a(14),w=n(I),L=a(23),D=n(L),U=a(10),A=n(U),R=a(47),k=n(R),j=a(4),N=n(j),H=a(19),V=n(H),B=a(2),W=a(3),G="seedAnnotate",F={getTextCallback:o,changeTextCallback:r,drawHandles:!1,drawHandlesOnHover:!0,currentLetter:"A",currentNumber:0,showCoordinates:!0,countUp:!0},Y=(0,E.default)({addNewMeasurement:i,createNewMeasurement:l,onImageRendered:u,pointNearTool:d,toolType:G,mouseDoubleClickCallback:c});Y.setConfiguration(F);var z=(0,M.default)({addNewMeasurement:s,createNewMeasurement:l,onImageRendered:u,pointNearTool:d,toolType:G,pressCallback:f});t.seedAnnotate=Y,t.seedAnnotateTouch=z},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){return{visible:!0,active:!0,handles:{start:{x:e.currentPoints.image.x,y:e.currentPoints.image.y,highlight:!0,active:!1},middle:{x:e.currentPoints.image.x,y:e.currentPoints.image.y,highlight:!0,active:!0},end:{x:e.currentPoints.image.x,y:e.currentPoints.image.y,highlight:!0,active:!1},textBox:{active:!1,hasMoved:!1,movesIndependently:!1,drawnIndependently:!0,allowedOutsideImage:!0,hasBoundingBox:!0}}}}function r(e,t,a){var n=v.default.cornerstone,o={start:n.pixelToCanvas(e,t.handles.start),end:n.pixelToCanvas(e,t.handles.middle)},r=v.default.cornerstoneMath.lineSegment.distanceToPoint(o,a);return r<25||(o.start=n.pixelToCanvas(e,t.handles.middle),o.end=n.pixelToCanvas(e,t.handles.end),(r=v.default.cornerstoneMath.lineSegment.distanceToPoint(o,a))<25)}function i(e){return Math.sqrt(Math.pow(e.x,2)+Math.pow(e.y,2))}function l(e){var t=e.detail,a=(0,k.getToolState)(e.currentTarget,j);if(a){var n=v.default.cornerstone,o=t.enabledElement,r=t.canvasContext.canvas.getContext("2d");r.setTransform(1,0,0,1,0,0);for(var l=void 0,d=x.default.getToolWidth(),u=y.default.getFont(),s=N.getConfiguration(),c=0;c<a.data.length;c++){r.save(),s&&s.shadow&&(r.shadowColor=s.shadowColor||"#000000",r.shadowOffsetX=s.shadowOffsetX||1,r.shadowOffsetY=s.shadowOffsetY||1);var f=a.data[c];l=f.active?b.default.getActiveColor():b.default.getToolColor();var m=n.pixelToCanvas(t.element,f.handles.start),g=n.pixelToCanvas(t.element,f.handles.middle),h=n.pixelToCanvas(t.element,f.handles.end);r.beginPath(),r.strokeStyle=l,r.lineWidth=d,r.moveTo(m.x,m.y),r.lineTo(g.x,g.y),r.lineTo(h.x,h.y),r.stroke();var E={drawHandlesIfActive:s&&s.drawHandlesOnHover};(0,U.default)(r,t,f.handles,l,E),r.fillStyle=l;var M=t.image.columnPixelSpacing||1,O=t.image.rowPixelSpacing||1,_="";t.image.rowPixelSpacing&&t.image.columnPixelSpacing||(_=" (isotropic)");var S={x:(Math.ceil(f.handles.middle.x)-Math.ceil(f.handles.start.x))*M,y:(Math.ceil(f.handles.middle.y)-Math.ceil(f.handles.start.y))*O},P={x:(Math.ceil(f.handles.end.x)-Math.ceil(f.handles.middle.x))*M,y:(Math.ceil(f.handles.end.y)-Math.ceil(f.handles.middle.y))*O},C={x:(Math.ceil(f.handles.end.x)-Math.ceil(f.handles.start.x))*M,y:(Math.ceil(f.handles.end.y)-Math.ceil(f.handles.start.y))*O},I=i(S),w=i(P),L=i(C),D=Math.acos((Math.pow(I,2)+Math.pow(w,2)-Math.pow(L,2))/(2*I*w));D*=180/Math.PI;var A=(0,T.default)(D,2);if(A){var R=A.toString()+String.fromCharCode(parseInt("00B0",16))+_,H=void 0;if(f.handles.textBox.hasMoved)H=n.pixelToCanvas(t.element,f.handles.textBox);else{H={x:g.x,y:g.y},r.font=u;var V=r.measureText(R).width;g.x<m.x?H.x-=15+V+10:H.x+=15;var B=n.internal.getTransform(o);B.invert();var W=B.transformPoint(H.x,H.y);f.handles.textBox.x=W.x,f.handles.textBox.y=W.y}var G={centering:{x:!1,y:!0}},F=(0,p.default)(r,R,H.x,H.y,l,G);if(f.handles.textBox.boundingBox=F,f.handles.textBox.hasMoved){var Y={start:{},end:{}},z=[m,h,g];Y.end.x=H.x,Y.end.y=H.y,Y.start=v.default.cornerstoneMath.point.findClosestPoint(z,Y.end);var K=[{x:F.left+F.width/2,y:F.top},{x:F.left,y:F.top+F.height/2},{x:F.left+F.width/2,y:F.top+F.height},{x:F.left+F.width,y:F.top+F.height/2}];Y.end=v.default.cornerstoneMath.point.findClosestPoint(K,Y.start),r.beginPath(),r.strokeStyle=l,r.lineWidth=d,r.setLineDash([2,3]),r.moveTo(Y.start.x,Y.start.y),r.lineTo(Y.end.x,Y.end.y),r.stroke()}}r.restore()}}}function d(e){var t=v.default.cornerstone,a=o(e),n=e.element;(0,k.addToolState)(n,j,a),n.removeEventListener(c.default.MOUSE_MOVE,N.mouseMoveCallback),n.removeEventListener(c.default.MOUSE_DRAG,N.mouseMoveCallback),n.removeEventListener(c.default.MOUSE_DOWN,N.mouseDownCallback),n.removeEventListener(c.default.MOUSE_DOWN_ACTIVATE,N.mouseDownActivateCallback),t.updateImage(n),(0,I.default)(e,j,a,a.handles.middle,function(){if(a.active=!1,(0,P.default)(e,a.handles))return(0,k.removeToolState)(n,j,a),n.addEventListener(c.default.MOUSE_MOVE,N.mouseMoveCallback),n.addEventListener(c.default.MOUSE_DRAG,N.mouseMoveCallback),n.addEventListener(c.default.MOUSE_DOWN,N.mouseDownCallback),n.addEventListener(c.default.MOUSE_DOWN_ACTIVATE,N.mouseDownActivateCallback),void t.updateImage(n);a.handles.end.active=!0,t.updateImage(n),(0,I.default)(e,j,a,a.handles.end,function(){a.active=!1,(0,P.default)(e,a.handles)&&(0,k.removeToolState)(n,j,a),n.addEventListener(c.default.MOUSE_MOVE,N.mouseMoveCallback),n.addEventListener(c.default.MOUSE_DRAG,N.mouseMoveCallback),n.addEventListener(c.default.MOUSE_DOWN,N.mouseDownCallback),n.addEventListener(c.default.MOUSE_DOWN_ACTIVATE,N.mouseDownActivateCallback),t.updateImage(n)})})}function u(e){var t=v.default.cornerstone,a=o(e),n=e.element;(0,k.addToolState)(n,j,a),n.removeEventListener(c.default.TOUCH_DRAG,H.touchMoveCallback),n.removeEventListener(c.default.TOUCH_START_ACTIVE,H.touchDownActivateCallback),n.removeEventListener(c.default.TOUCH_START,H.touchStartCallback),n.removeEventListener(c.default.TAP,H.tapCallback),t.updateImage(n),(0,L.default)(e,j,a,a.handles.middle,function(){if((0,P.default)(e,a.handles))return(0,k.removeToolState)(n,j,a),n.addEventListener(c.default.TOUCH_DRAG,H.touchMoveCallback),n.addEventListener(c.default.TOUCH_START,H.touchStartCallback),n.addEventListener(c.default.TOUCH_START_ACTIVE,H.touchDownActivateCallback),n.addEventListener(c.default.TAP,H.tapCallback),void t.updateImage(n);(0,L.default)(e,j,a,a.handles.end,function(){(0,P.default)(e,a.handles)&&((0,k.removeToolState)(n,j,a),t.updateImage(n)),n.addEventListener(c.default.TOUCH_DRAG,H.touchMoveCallback),n.addEventListener(c.default.TOUCH_START,H.touchStartCallback),n.addEventListener(c.default.TOUCH_START_ACTIVE,H.touchDownActivateCallback),n.addEventListener(c.default.TAP,H.tapCallback)})})}Object.defineProperty(t,"__esModule",{value:!0}),t.simpleAngleTouch=t.simpleAngle=void 0;var s=a(1),c=n(s),f=a(0),v=n(f),m=a(9),g=n(m),h=a(7),p=n(h),E=a(31),T=n(E),M=a(13),y=n(M),O=a(8),x=n(O),_=a(6),b=n(_),S=a(14),P=n(S),C=a(24),I=n(C),w=a(27),L=n(w),D=a(10),U=n(D),A=a(11),R=n(A),k=a(2),j="simpleAngle",N=(0,g.default)({createNewMeasurement:o,addNewMeasurement:d,onImageRendered:l,pointNearTool:r,toolType:j}),H=(0,R.default)({createNewMeasurement:o,addNewMeasurement:u,onImageRendered:l,pointNearTool:r,toolType:j});t.simpleAngle=N,t.simpleAngleTouch=H},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=C.getConfiguration();if(t.current){var a={visible:!0,active:!0,text:t.current,handles:{end:{x:e.currentPoints.image.x,y:e.currentPoints.image.y,highlight:!0,active:!0,hasBoundingBox:!0}}},n={left:0,top:0,width:e.image.width,height:e.image.height};if(f.default.cornerstoneMath.point.insideRect(a.handles.end,n)){var o=t.markers.indexOf(t.current);return t.ascending?(o+=1)>=t.markers.length&&(t.loop?o-=t.markers.length:o=-1):(o-=1)<0&&(t.loop?o+=t.markers.length:o=-1),t.current=t.markers[o],a}}}function r(e,t,a){if(t.handles.end.boundingBox){var n=f.default.cornerstoneMath.rect.distanceToPoint(t.handles.end.boundingBox,a),o=(0,E.default)(t.handles.end,a);return n<10||o}}function i(e){var t=e.detail,a=(0,b.getToolState)(t.element,P);if(a){var n=t.canvasContext.canvas.getContext("2d");n.setTransform(1,0,0,1,0,0);for(var o=C.getConfiguration(),r=0;r<a.data.length;r++){var i=a.data[r],l=M.default.getToolColor();i.active&&(l=M.default.getActiveColor()),n.save(),o&&o.shadow&&(n.shadowColor=o.shadowColor||"#000000",n.shadowOffsetX=o.shadowOffsetX||1,n.shadowOffsetY=o.shadowOffsetY||1),n.fillStyle=l;var d=n.measureText(i.text);i.textWidth=d.width+10;var u=f.default.cornerstone.pixelToCanvas(t.element,i.handles.end),s={centering:{x:!0,y:!0}};i.handles.end.boundingBox=(0,_.default)(n,i.text,u.x,u.y-10,l,s),n.restore()}}}function l(e){function t(e,t,a){!0===a?(0,b.removeToolState)(o,P,e):e.text=t,e.active=!1,n.updateImage(o),o.addEventListener(s.default.MOUSE_MOVE,C.mouseMoveCallback),o.addEventListener(s.default.MOUSE_DOWN,C.mouseDownCallback),o.addEventListener(s.default.MOUSE_DOWN_ACTIVATE,C.mouseDownActivateCallback),o.addEventListener(s.default.MOUSE_DOUBLE_CLICK,C.mouseDoubleClickCallback)}var a=e.detail,n=f.default.cornerstone,o=a.element,i=void 0,l=(0,S.getToolOptions)(P,o);if((0,O.default)(a.which,l.mouseButtonMask)){var d=C.getConfiguration(),u=a.currentPoints.canvas,c=(0,b.getToolState)(o,P);if(c){for(var v=0;v<c.data.length;v++)if(i=c.data[v],r(o,i,u))return i.active=!0,n.updateImage(o),o.removeEventListener(s.default.MOUSE_MOVE,C.mouseMoveCallback),o.removeEventListener(s.default.MOUSE_DOWN,C.mouseDownCallback),o.removeEventListener(s.default.MOUSE_DOWN_ACTIVATE,C.mouseDownActivateCallback),o.removeEventListener(s.default.MOUSE_DOUBLE_CLICK,C.mouseDoubleClickCallback),d.changeTextCallback(i,a,t),e.stopImmediatePropagation(),e.preventDefault(),void e.stopPropagation();e.preventDefault(),e.stopPropagation()}}}function d(e){function t(e,t,a){!0===a?(0,b.removeToolState)(o,P,e):e.text=t,e.active=!1,n.updateImage(o),o.addEventListener(s.default.TOUCH_DRAG,I.touchMoveCallback),o.addEventListener(s.default.TOUCH_START_ACTIVE,I.touchDownActivateCallback),o.addEventListener(s.default.TOUCH_START,I.touchStartCallback),o.addEventListener(s.default.TAP,I.tapCallback),o.addEventListener(s.default.TOUCH_PRESS,I.pressCallback)}var a=e.detail,n=f.default.cornerstone,o=a.element,i=void 0,l=C.getConfiguration(),d=a.currentPoints.canvas,u=(0,b.getToolState)(o,P);if(!u)return!1;if(a.handlePressed)return a.handlePressed.active=!0,n.updateImage(o),o.removeEventListener(s.default.TOUCH_DRAG,I.touchMoveCallback),o.removeEventListener(s.default.TOUCH_START_ACTIVE,I.touchDownActivateCallback),o.removeEventListener(s.default.TOUCH_START,I.touchStartCallback),o.removeEventListener(s.default.TAP,I.tapCallback),o.removeEventListener(s.default.TOUCH_PRESS,I.pressCallback),l.changeTextCallback(a.handlePressed,a,t),e.stopImmediatePropagation(),e.preventDefault(),void e.stopPropagation();for(var c=0;c<u.data.length;c++)if(i=u.data[c],r(o,i,d))return i.active=!0,n.updateImage(o),o.removeEventListener(s.default.TOUCH_DRAG,I.touchMoveCallback),o.removeEventListener(s.default.TOUCH_START_ACTIVE,I.touchDownActivateCallback),o.removeEventListener(s.default.TOUCH_START,I.touchStartCallback),o.removeEventListener(s.default.TAP,I.tapCallback),o.removeEventListener(s.default.TOUCH_PRESS,I.pressCallback),l.changeTextCallback(i,a,t),e.stopImmediatePropagation(),e.preventDefault(),void e.stopPropagation();e.preventDefault(),e.stopPropagation()}Object.defineProperty(t,"__esModule",{value:!0}),t.textMarkerTouch=t.textMarker=void 0;var u=a(1),s=n(u),c=a(0),f=n(c),v=a(9),m=n(v),g=a(11),h=n(g),p=a(19),E=n(p),T=a(6),M=n(T),y=a(4),O=n(y),x=a(7),_=n(x),b=a(2),S=a(3),P="textMarker",C=(0,m.default)({createNewMeasurement:o,onImageRendered:i,pointNearTool:r,toolType:P,mouseDoubleClickCallback:l}),I=(0,h.default)({createNewMeasurement:o,onImageRendered:i,pointNearTool:r,toolType:P,pressCallback:d});t.textMarker=C,t.textMarkerTouch=I},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.detail,a=t.element;a.removeEventListener(s.default.MOUSE_DRAG,l),a.removeEventListener(s.default.MOUSE_UP,o),a.removeEventListener(s.default.MOUSE_CLICK,o)}function r(e){var t=e.detail,a=t.element,n=(0,T.getToolOptions)(M,a);(0,E.default)(t.which,n.mouseButtonMask)&&(a.addEventListener(s.default.MOUSE_DRAG,l),a.addEventListener(s.default.MOUSE_UP,o),a.addEventListener(s.default.MOUSE_CLICK,o),e.preventDefault(),e.stopPropagation())}function i(e){var t=e.image.maxPixelValue*e.image.slope+e.image.intercept,a=e.image.minPixelValue*e.image.slope+e.image.intercept,n=t-a,o=n/1024,r=e.deltaPoints.page.x*o,i=e.deltaPoints.page.y*o;e.viewport.voi.windowWidth+=r,e.viewport.voi.windowCenter+=i}function l(e){var t=e.detail;y.strategy(t),f.default.cornerstone.setViewport(t.element,t.viewport)}function d(e){var t=e.detail;e.stopImmediatePropagation();var a=t,n=a.image.maxPixelValue*a.image.slope+a.image.intercept,o=a.image.minPixelValue*a.image.slope+a.image.intercept,r=n-o,i=r/1024,l=a.deltaPoints.page.x*i,d=a.deltaPoints.page.y*i,u=y.getConfiguration();u.orientation?0===u.orientation?(a.viewport.voi.windowWidth+=l,a.viewport.voi.windowCenter+=d):(a.viewport.voi.windowWidth+=d,a.viewport.voi.windowCenter+=l):(a.viewport.voi.windowWidth+=l,a.viewport.voi.windowCenter+=d),f.default.cornerstone.setViewport(a.element,a.viewport)}Object.defineProperty(t,"__esModule",{value:!0}),t.wwwcTouchDrag=t.wwwc=void 0;var u=a(1),s=n(u),c=a(0),f=n(c),v=a(16),m=n(v),g=a(15),h=n(g),p=a(4),E=n(p),T=a(3),M="wwwc",y=(0,m.default)(r,M);y.strategies={default:i},y.strategy=i;var O=(0,h.default)(d);t.wwwc=y,t.wwwcTouchDrag=O},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t,a){var n=e.length;if(n<2)return{min:t,max:a,mean:(t+a)/2};for(var o=a,r=t,i=0,l=0;l<n;l++){var d=e[l];o=Math.min(o,d),r=Math.max(r,d),i+=d}return{min:o,max:r,mean:i/n}}function r(e){var t=e.detail,a=t.element,n=(0,P.getToolState)(a,U);n&&n.data&&(n.data=[]),a.removeEventListener(M.default.MOUSE_MOVE,c),a.removeEventListener(M.default.MOUSE_DRAG,c),a.removeEventListener(M.default.MOUSE_UP,i),a.removeEventListener(M.default.MOUSE_CLICK,i),a.addEventListener(M.default.MOUSE_DOWN,u)}function i(e){var t=e.detail,a=t.element;a.removeEventListener(M.default.MOUSE_MOVE,c),a.removeEventListener(M.default.MOUSE_DRAG,c),a.removeEventListener(M.default.MOUSE_UP,i),a.removeEventListener(M.default.MOUSE_CLICK,i),a.addEventListener(M.default.MOUSE_DOWN,u);var n=(0,P.getToolState)(t.element,U);n&&n.data&&n.data.length&&(n.data[0].endPoint={x:t.currentPoints.image.x,y:t.currentPoints.image.y},l(t))}function l(e){var t=O.default.cornerstone,a=(0,P.getToolState)(e.element,U);if(a&&a.data&&a.data.length){var n=a.data[0].startPoint,r=a.data[0].endPoint,i=Math.abs(n.x-r.x),l=Math.abs(n.y-r.y),d=Math.min(n.x,r.x),u=Math.min(n.y,r.y);d=Math.max(d,0),d=Math.min(d,e.image.width),u=Math.max(u,0),u=Math.min(u,e.image.height),i=Math.floor(Math.min(i,Math.abs(e.image.width-d))),l=Math.floor(Math.min(l,Math.abs(e.image.height-u)));var s=(0,I.default)(e.element,d,u,i,l),c=o(s,e.image.minPixelValue,e.image.maxPixelValue),f=R.getConfiguration(),v=t.getViewport(e.element);void 0===f.minWindowWidth&&(f.minWindowWidth=10),v.voi.windowWidth=Math.max(Math.abs(c.max-c.min),f.minWindowWidth),v.voi.windowCenter=c.mean,t.setViewport(e.element,v),a.data=[],t.updateImage(e.element)}}function d(e){var t=e.detail,a=t.element;a.removeEventListener(M.default.MOUSE_MOVE,d),a.removeEventListener(M.default.MOUSE_DRAG,d),a.addEventListener(M.default.MOUSE_MOVE,c),a.addEventListener(M.default.MOUSE_DRAG,c),a.addEventListener(M.default.MOUSE_CLICK,i),e.type===M.default.MOUSE_DRAG&&a.addEventListener(M.default.MOUSE_UP,i)}function u(e){var t=e.detail,a=t.element,n=(0,D.getToolOptions)(U,a);if((0,L.default)(t.which,n.mouseButtonMask))return a.addEventListener(M.default.MOUSE_DRAG,d),a.addEventListener(M.default.MOUSE_MOVE,d),a.removeEventListener(M.default.MOUSE_DOWN,u),s(t),!1}function s(e){var t=(0,P.getToolState)(e.element,U);t&&t.data&&(t.data=[]);var a={startPoint:{x:e.currentPoints.image.x,y:e.currentPoints.image.y}};(0,P.addToolState)(e.element,U,a)}function c(e){var t=e.detail,a=t.element,n=(0,P.getToolState)(a,U);n&&n.data&&n.data.length&&(n.data[0].endPoint={x:t.currentPoints.image.x,y:t.currentPoints.image.y},O.default.cornerstone.updateImage(a))}function f(e){var t=e.detail,a=t.element,n=t.canvasContext,o=O.default.cornerstone,r=(0,P.getToolState)(t.element,U);if(r&&r.data&&r.data.length){var i=r.data[0].startPoint,l=r.data[0].endPoint;if(i&&l){n.setTransform(1,0,0,1,0,0);var d=S.default.getActiveColor(),u=o.pixelToCanvas(a,i),s=o.pixelToCanvas(a,l),c=Math.min(u.x,s.x),f=Math.min(u.y,s.y),v=Math.abs(u.x-s.x),m=Math.abs(u.y-s.y),g=_.default.getToolWidth(),h=R.getConfiguration();n.save(),h&&h.shadow&&(n.shadowColor=h.shadowColor||"#000000",n.shadowOffsetX=h.shadowOffsetX||1,n.shadowOffsetY=h.shadowOffsetY||1),n.beginPath(),n.strokeStyle=d,n.lineWidth=g,n.rect(c,f,v,m),n.stroke(),n.restore()}}}function v(e){e.removeEventListener(M.default.MOUSE_DOWN,u),e.removeEventListener(M.default.MOUSE_UP,i),e.removeEventListener(M.default.MOUSE_CLICK,i),e.removeEventListener(M.default.MOUSE_DRAG,c),e.removeEventListener(M.default.MOUSE_MOVE,c),e.removeEventListener(M.default.IMAGE_RENDERED,f),e.removeEventListener(M.default.NEW_IMAGE,r),O.default.cornerstone.updateImage(e)}function m(e,t){if((0,D.setToolOptions)(U,e,{mouseButtonMask:t}),!(0,P.getToolState)(e,U)){var a=[];(0,P.addToolState)(e,U,a)}e.removeEventListener(M.default.MOUSE_DOWN,u),e.removeEventListener(M.default.MOUSE_UP,i),e.removeEventListener(M.default.MOUSE_CLICK,i),e.removeEventListener(M.default.MOUSE_DRAG,c),e.removeEventListener(M.default.MOUSE_MOVE,c),e.removeEventListener(M.default.IMAGE_RENDERED,f),e.removeEventListener(M.default.NEW_IMAGE,r),e.addEventListener(M.default.MOUSE_DOWN,u),e.addEventListener(M.default.IMAGE_RENDERED,f),e.addEventListener(M.default.NEW_IMAGE,r),O.default.cornerstone.updateImage(e)}function g(e){e.removeEventListener(M.default.TOUCH_DRAG,c),e.removeEventListener(M.default.TOUCH_START,s),e.removeEventListener(M.default.TOUCH_DRAG_END,l),e.removeEventListener(M.default.IMAGE_RENDERED,f)}function h(e){if(!(0,P.getToolState)(e,U)){var t=[];(0,P.addToolState)(e,U,t)}e.removeEventListener(M.default.TOUCH_DRAG,c),e.removeEventListener(M.default.TOUCH_START,s),e.removeEventListener(M.default.TOUCH_DRAG_END,l),e.removeEventListener(M.default.IMAGE_RENDERED,f),e.addEventListener(M.default.TOUCH_DRAG,c),e.addEventListener(M.default.TOUCH_START,s),e.addEventListener(M.default.TOUCH_DRAG_END,l),e.addEventListener(M.default.IMAGE_RENDERED,f)}function p(){return A}function E(e){A=e}Object.defineProperty(t,"__esModule",{value:!0}),t.wwwcRegionTouch=t.wwwcRegion=void 0;var T=a(1),M=n(T),y=a(0),O=n(y),x=a(8),_=n(x),b=a(6),S=n(b),P=a(2),C=a(45),I=n(C),w=a(4),L=n(w),D=a(3),U="wwwcRegion",A={minWindowWidth:10},R={activate:m,deactivate:v,disable:v,setConfiguration:E,getConfiguration:p},k={activate:h,deactivate:g,disable:g};t.wwwcRegion=R,t.wwwcRegionTouch=k},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var a=D.getConfiguration(),n=Math.log(e.scale)/Math.log(1.7),o=n+t,r=Math.pow(1.7,o);return a.maxScale&&r>a.maxScale?e.scale=a.maxScale:a.minScale&&r<a.minScale?e.scale=a.minScale:e.scale=r,e}function r(e,t,a){return e.x=Math.max(e.x,0),e.y=Math.max(e.y,0),e.x=Math.min(e.x,t),e.y=Math.min(e.y,a),e}function i(e,t){if(t.hflip&&(e.x*=-1),t.vflip&&(e.y*=-1),0!==t.rotation){var a=t.rotation*Math.PI/180,n=Math.cos(a),o=Math.sin(a),r=e.x*n-e.y*o,i=e.x*o+e.y*n;e.x=r,e.y=i}return e}function l(e,t){var a=E.default.cornerstone,n=e.element,r=o(e.viewport,t);a.setViewport(n,r);var l=a.pageToPixel(n,e.startPoints.page.x,e.startPoints.page.y),d={x:e.startPoints.image.x-l.x,y:e.startPoints.image.y-l.y};d=i(d,r),r.translation.x-=d.x,r.translation.y-=d.y,a.setViewport(n,r)}function d(e,t){var a=e.element,n=e.image,l=D.getConfiguration(),d=o(e.viewport,t),u={x:0,y:0};if(t<0)d.scale<3&&(Math.abs(d.translation.x)<.01?d.translation.x=0:u.x=d.translation.x/8,Math.abs(d.translation.y)<.01?d.translation.y=0:u.y=d.translation.y/8);else{l&&l.preventZoomOutsideImage&&(L.image=r(L.image,n.width,n.height));var s={x:n.width/2-L.image.x,y:n.height/2-L.image.y};s=i(s,d);var c={x:d.translation.x-s.x,y:d.translation.y-s.y};Math.abs(c.x)<.01?d.translation.x=s.x:u.x=c.x/8,Math.abs(c.y)<.01?d.translation.y=s.y:u.y=c.y/8}d.translation.x-=u.x,d.translation.y-=u.y,E.default.cornerstone.setViewport(a,d)}function u(e,t){var a=e.element,n=o(e.viewport,t);E.default.cornerstone.setViewport(a,n)}function s(e){var t=e.detail,a=t.element;a.removeEventListener(h.default.MOUSE_DRAG,f),a.removeEventListener(h.default.MOUSE_UP,s),a.removeEventListener(h.default.MOUSE_CLICK,s)}function c(e){var t=e.detail,a=t.element,n=(0,I.getToolOptions)(w,a);(0,O.default)(t.which,n.mouseButtonMask)&&(L=t.startPoints,a.addEventListener(h.default.MOUSE_DRAG,f),a.addEventListener(h.default.MOUSE_UP,s),a.addEventListener(h.default.MOUSE_CLICK,s),e.preventDefault(),e.stopPropagation())}function f(e){var t=e.detail;if(!t.deltaPoints.page.y)return!1;var a=t.deltaPoints.page.y/100;D.strategy(t,a),e.preventDefault(),e.stopPropagation()}function v(e){var t=e.detail,a=-t.direction/4,n=D.getConfiguration();n&&n.invert&&(a*=-1);var r=o(t.viewport,a);E.default.cornerstone.setViewport(t.element,r)}function m(e){var t=e.detail,a=E.default.cornerstone,n=D.getConfiguration(),o=t.viewport,r=t.element;o.scale+=t.scaleChange*o.scale,n.maxScale&&o.scale>n.maxScale?o.scale=n.maxScale:n.minScale&&o.scale<n.minScale&&(o.scale=n.minScale),a.setViewport(r,o);var l=a.pageToPixel(r,t.startPoints.page.x,t.startPoints.page.y),d={x:t.startPoints.image.x-l.x,y:t.startPoints.image.y-l.y};d=i(d,o),o.translation.x-=d.x,o.translation.y-=d.y,a.setViewport(r,o)}Object.defineProperty(t,"__esModule",{value:!0}),t.zoomTouchDrag=t.zoomTouchPinch=t.zoomWheel=t.zoom=void 0;var g=a(1),h=n(g),p=a(0),E=n(p),T=a(16),M=n(T),y=a(4),O=n(y),x=a(25),_=n(x),b=a(56),S=n(b),P=a(15),C=n(P),I=a(3),w="zoom",L=void 0,D=(0,M.default)(c,w);D.strategies={default:l,translate:d,zoomToCenter:u},D.strategy=l;var U=(0,_.default)(v),A=(0,S.default)(m),R=(0,C.default)(f,w);t.zoom=D,t.zoomWheel=U,t.zoomTouchPinch=A,t.zoomTouchDrag=R},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=O.getConfiguration(),a=e.element,n=c.default.cornerstone.getLayer(a,t.brushLayerId),o=n.image,r=o.rows,i=o.columns,l=e.currentPoints.image,d=l.x,u=l.y,s=(0,f.getToolState)(a,E),v=s.data[0].pixelData,m=t.draw,g=t.radius;if(!(d<0||d>i||u<0||u>r)){var T=(0,h.default)(g,r,i,d,u);(0,p.drawBrushPixels)(T,v,m,i),n.invalid=!0,c.default.cornerstone.updateImage(a)}}function r(e){var t=e.detail;M=t.currentPoints.image,y=!1}function i(e){var t=e.detail;o(t),y=!0,M=t.currentPoints.image}function l(e){var t=e.detail;M=t.currentPoints.image,c.default.cornerstone.updateImage(t.element)}function d(e){var t=e.detail;o(t),y=!0,M=t.currentPoints.image}function u(e){var t=e.detail;if(M){var a=t.image,n=a.rows,o=a.columns,r=M,i=r.x,l=r.y;if(!(i<0||i>o||l<0||l>n)){var d=O.getConfiguration(),u=d.radius,s=t.canvasContext,c=y?d.dragColor:d.hoverColor,f=t.element;s.setTransform(1,0,0,1,0,0);var v=(0,h.default)(u,n,o,i,l);(0,p.drawBrushOnCanvas)(v,s,c,f)}}}Object.defineProperty(t,"__esModule",{value:!0}),t.brush=void 0;var s=a(0),c=n(s),f=a(2),v=a(57),m=n(v),g=a(58),h=n(g),p=a(59),E="brush",T={draw:1,radius:3,hoverColor:"green",dragColor:"yellow"},M=void 0,y=!1,O=(0,m.default)({onMouseMove:l,onMouseDown:i,onMouseUp:r,onDrag:d,toolType:"brush",onImageRendered:u});O.setConfiguration(T),t.brush=O},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t,a){var n=C.getConfiguration(),o=n.tolerance,r=Number.MAX_VALUE,i=-Number.MAX_VALUE;e.forEach(function(e){var n=e[1]*a+e[0],o=t[n];r=Math.min(o,r),i=Math.max(o,i)}),b=r-o,_=i+o}function r(e,t,a,n){for(var o=C.getConfiguration(),r=o.draw,i=Math.round(x.x),l=Math.round(x.y),d=null,u=[],s=o.radius;0!==d&&s>o.minRadius;){d=0,u=(0,T.default)(s,a,n,i,l);for(var c=0;c<u.length;c++){var f=u[c][0],v=u[c][1],m=v*n+f,g=e[m];if(g>_||g<b){d++;break}}s--}return 0===d&&(0,M.drawBrushPixels)(u,t,r,n),s}function i(e){var t=C.getConfiguration(),a=e.element,n=m.default.cornerstone.getLayer(a,t.brushLayerId),o=m.default.cornerstone.getLayers(a)[0],i=n.image,l=i.rows,d=i.columns,u=(0,g.getToolState)(a,y),s=u.data[0];S=r(o.image.getPixelData(),s.pixelData,l,d),n.invalid=!0,m.default.cornerstone.updateImage(a)}function l(e){var t=C.getConfiguration(),a=e.element,n=m.default.cornerstone.getLayer(a,t.brushLayerId),o=n.image,r=o.rows,i=o.columns,l=e.currentPoints.image,d=l.x,u=l.y,s=(0,g.getToolState)(a,y),c=s.data[0].pixelData,f=t.draw,v=t.radius;if(!(d<0||d>i||u<0||u>r)){var h=(0,T.default)(v,r,i,d,u);(0,M.drawBrushPixels)(h,c,f,i),n.invalid=!0,m.default.cornerstone.updateImage(a)}}function d(e){var t=e.detail;x=t.currentPoints.image;var a=C.getConfiguration();P=!1,S=a.radius,m.default.cornerstone.updateImage(t.element)}function u(e){var t=e.detail,a=t.element,n=C.getConfiguration(),r=m.default.cornerstone.getLayer(a,n.brushLayerId),d=m.default.cornerstone.getLayers(a)[0],u=t.currentPoints.image,s=u.x,c=u.y,f=r.image,v=f.rows,g=f.columns,h=(0,T.default)(n.radius,v,g,s,c);0===n.draw?l(t):(o(h,d.image.getPixelData(),g),i(t)),P=!0,x=t.currentPoints.image}function s(e){var t=e.detail;x=t.currentPoints.image,m.default.cornerstone.updateImage(t.element)}function c(e){var t=e.detail;0===O.draw?l(t):i(t),P=!0,x=t.currentPoints.image}function f(e){var t=e.detail;if(x){var a=t.image,n=a.rows,o=a.columns,r=x,i=r.x,l=r.y;if(!(i<0||i>o||l<0||l>n)){var d=C.getConfiguration(),u=t.canvasContext,s=P?d.dragColor:d.hoverColor,c=t.element;S=S||d.radius,u.setTransform(1,0,0,1,0,0);var f=(0,T.default)(S,n,o,i,l);(0,M.drawBrushOnCanvas)(f,u,s,c)}}}Object.defineProperty(t,"__esModule",{value:!0}),t.adaptiveBrush=void 0;var v=a(0),m=n(v),g=a(2),h=a(57),p=n(h),E=a(58),T=n(E),M=a(59),y="brush",O={draw:1,radius:3,tolerance:5,minRadius:1,hoverColor:"green",dragColor:"yellow"},x=void 0,_=void 0,b=void 0,S=void 0,P=void 0,C=(0,p.default)({onMouseMove:s,onMouseDown:u,onMouseUp:d,onDrag:c,toolType:"adaptiveBrush",onImageRendered:f});C.setConfiguration(O),t.adaptiveBrush=C},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default="2.0.0"}])});
//# sourceMappingURL=cornerstoneTools.min.js.map
/*! dicom-parser - 1.7.6 - 2017-11-04 | (c) 2017 Chris Hafey | https://github.com/chafey/dicomParser */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("dicom-parser",[],t):"object"==typeof exports?exports["dicom-parser"]=t():e.dicomParser=t()}(this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var i=r[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=43)}([function(e,t,r){"use strict";(function(e){function n(){return a.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function i(e,t){if(n()<t)throw new RangeError("Invalid typed array length");return a.TYPED_ARRAY_SUPPORT?(e=new Uint8Array(t),e.__proto__=a.prototype):(null===e&&(e=new a(t)),e.length=t),e}function a(e,t,r){if(!(a.TYPED_ARRAY_SUPPORT||this instanceof a))return new a(e,t,r);if("number"==typeof e){if("string"==typeof t)throw new Error("If encoding is specified then the first argument must be a string");return u(this,e)}return o(this,e,t,r)}function o(e,t,r,n){if("number"==typeof t)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&t instanceof ArrayBuffer?h(e,t,r,n):"string"==typeof t?l(e,t,r):d(e,t)}function s(e){if("number"!=typeof e)throw new TypeError('"size" argument must be a number');if(e<0)throw new RangeError('"size" argument must not be negative')}function f(e,t,r,n){return s(t),t<=0?i(e,t):void 0!==r?"string"==typeof n?i(e,t).fill(r,n):i(e,t).fill(r):i(e,t)}function u(e,t){if(s(t),e=i(e,t<0?0:0|p(t)),!a.TYPED_ARRAY_SUPPORT)for(var r=0;r<t;++r)e[r]=0;return e}function l(e,t,r){if("string"==typeof r&&""!==r||(r="utf8"),!a.isEncoding(r))throw new TypeError('"encoding" must be a valid string encoding');var n=0|m(t,r);e=i(e,n);var o=e.write(t,r);return o!==n&&(e=e.slice(0,o)),e}function c(e,t){var r=t.length<0?0:0|p(t.length);e=i(e,r);for(var n=0;n<r;n+=1)e[n]=255&t[n];return e}function h(e,t,r,n){if(t.byteLength,r<0||t.byteLength<r)throw new RangeError("'offset' is out of bounds");if(t.byteLength<r+(n||0))throw new RangeError("'length' is out of bounds");return t=void 0===r&&void 0===n?new Uint8Array(t):void 0===n?new Uint8Array(t,r):new Uint8Array(t,r,n),a.TYPED_ARRAY_SUPPORT?(e=t,e.__proto__=a.prototype):e=c(e,t),e}function d(e,t){if(a.isBuffer(t)){var r=0|p(t.length);return e=i(e,r),0===e.length?e:(t.copy(e,0,0,r),e)}if(t){if("undefined"!=typeof ArrayBuffer&&t.buffer instanceof ArrayBuffer||"length"in t)return"number"!=typeof t.length||J(t.length)?i(e,0):c(e,t);if("Buffer"===t.type&&$(t.data))return c(e,t.data)}throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}function p(e){if(e>=n())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+n().toString(16)+" bytes");return 0|e}function g(e){return+e!=e&&(e=0),a.alloc(+e)}function m(e,t){if(a.isBuffer(e))return e.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(e)||e instanceof ArrayBuffer))return e.byteLength;"string"!=typeof e&&(e=""+e);var r=e.length;if(0===r)return 0;for(var n=!1;;)switch(t){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":case void 0:return Y(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return G(e).length;default:if(n)return Y(e).length;t=(""+t).toLowerCase(),n=!0}}function _(e,t,r){var n=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===r||r>this.length)&&(r=this.length),r<=0)return"";if(r>>>=0,t>>>=0,r<=t)return"";for(e||(e="utf8");;)switch(e){case"hex":return D(this,t,r);case"utf8":case"utf-8":return O(this,t,r);case"ascii":return R(this,t,r);case"latin1":case"binary":return I(this,t,r);case"base64":return P(this,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return L(this,t,r);default:if(n)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),n=!0}}function b(e,t,r){var n=e[t];e[t]=e[r],e[r]=n}function v(e,t,r,n,i){if(0===e.length)return-1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),r=+r,isNaN(r)&&(r=i?0:e.length-1),r<0&&(r=e.length+r),r>=e.length){if(i)return-1;r=e.length-1}else if(r<0){if(!i)return-1;r=0}if("string"==typeof t&&(t=a.from(t,n)),a.isBuffer(t))return 0===t.length?-1:y(e,t,r,n,i);if("number"==typeof t)return t&=255,a.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(e,t,r):Uint8Array.prototype.lastIndexOf.call(e,t,r):y(e,[t],r,n,i);throw new TypeError("val must be string, number or Buffer")}function y(e,t,r,n,i){function a(e,t){return 1===o?e[t]:e.readUInt16BE(t*o)}var o=1,s=e.length,f=t.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(e.length<2||t.length<2)return-1;o=2,s/=2,f/=2,r/=2}var u;if(i){var l=-1;for(u=r;u<s;u++)if(a(e,u)===a(t,-1===l?0:u-l)){if(-1===l&&(l=u),u-l+1===f)return l*o}else-1!==l&&(u-=u-l),l=-1}else for(r+f>s&&(r=s-f),u=r;u>=0;u--){for(var c=!0,h=0;h<f;h++)if(a(e,u+h)!==a(t,h)){c=!1;break}if(c)return u}return-1}function w(e,t,r,n){r=Number(r)||0;var i=e.length-r;n?(n=Number(n))>i&&(n=i):n=i;var a=t.length;if(a%2!=0)throw new TypeError("Invalid hex string");n>a/2&&(n=a/2);for(var o=0;o<n;++o){var s=parseInt(t.substr(2*o,2),16);if(isNaN(s))return o;e[r+o]=s}return o}function E(e,t,r,n){return V(Y(t,e.length-r),e,r,n)}function k(e,t,r,n){return V(W(t),e,r,n)}function x(e,t,r,n){return k(e,t,r,n)}function S(e,t,r,n){return V(G(t),e,r,n)}function A(e,t,r,n){return V(H(t,e.length-r),e,r,n)}function P(e,t,r){return 0===t&&r===e.length?K.fromByteArray(e):K.fromByteArray(e.slice(t,r))}function O(e,t,r){r=Math.min(e.length,r);for(var n=[],i=t;i<r;){var a=e[i],o=null,s=a>239?4:a>223?3:a>191?2:1;if(i+s<=r){var f,u,l,c;switch(s){case 1:a<128&&(o=a);break;case 2:f=e[i+1],128==(192&f)&&(c=(31&a)<<6|63&f)>127&&(o=c);break;case 3:f=e[i+1],u=e[i+2],128==(192&f)&&128==(192&u)&&(c=(15&a)<<12|(63&f)<<6|63&u)>2047&&(c<55296||c>57343)&&(o=c);break;case 4:f=e[i+1],u=e[i+2],l=e[i+3],128==(192&f)&&128==(192&u)&&128==(192&l)&&(c=(15&a)<<18|(63&f)<<12|(63&u)<<6|63&l)>65535&&c<1114112&&(o=c)}}null===o?(o=65533,s=1):o>65535&&(o-=65536,n.push(o>>>10&1023|55296),o=56320|1023&o),n.push(o),i+=s}return T(n)}function T(e){var t=e.length;if(t<=Q)return String.fromCharCode.apply(String,e);for(var r="",n=0;n<t;)r+=String.fromCharCode.apply(String,e.slice(n,n+=Q));return r}function R(e,t,r){var n="";r=Math.min(e.length,r);for(var i=t;i<r;++i)n+=String.fromCharCode(127&e[i]);return n}function I(e,t,r){var n="";r=Math.min(e.length,r);for(var i=t;i<r;++i)n+=String.fromCharCode(e[i]);return n}function D(e,t,r){var n=e.length;(!t||t<0)&&(t=0),(!r||r<0||r>n)&&(r=n);for(var i="",a=t;a<r;++a)i+=q(e[a]);return i}function L(e,t,r){for(var n=e.slice(t,r),i="",a=0;a<n.length;a+=2)i+=String.fromCharCode(n[a]+256*n[a+1]);return i}function B(e,t,r){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+t>r)throw new RangeError("Trying to access beyond buffer length")}function M(e,t,r,n,i,o){if(!a.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>i||t<o)throw new RangeError('"value" argument is out of bounds');if(r+n>e.length)throw new RangeError("Index out of range")}function U(e,t,r,n){t<0&&(t=65535+t+1);for(var i=0,a=Math.min(e.length-r,2);i<a;++i)e[r+i]=(t&255<<8*(n?i:1-i))>>>8*(n?i:1-i)}function F(e,t,r,n){t<0&&(t=4294967295+t+1);for(var i=0,a=Math.min(e.length-r,4);i<a;++i)e[r+i]=t>>>8*(n?i:3-i)&255}function j(e,t,r,n,i,a){if(r+n>e.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function z(e,t,r,n,i){return i||j(e,t,r,4,3.4028234663852886e38,-3.4028234663852886e38),X.write(e,t,r,n,23,4),r+4}function N(e,t,r,n,i){return i||j(e,t,r,8,1.7976931348623157e308,-1.7976931348623157e308),X.write(e,t,r,n,52,8),r+8}function Z(e){if(e=C(e).replace(ee,""),e.length<2)return"";for(;e.length%4!=0;)e+="=";return e}function C(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function q(e){return e<16?"0"+e.toString(16):e.toString(16)}function Y(e,t){t=t||1/0;for(var r,n=e.length,i=null,a=[],o=0;o<n;++o){if((r=e.charCodeAt(o))>55295&&r<57344){if(!i){if(r>56319){(t-=3)>-1&&a.push(239,191,189);continue}if(o+1===n){(t-=3)>-1&&a.push(239,191,189);continue}i=r;continue}if(r<56320){(t-=3)>-1&&a.push(239,191,189),i=r;continue}r=65536+(i-55296<<10|r-56320)}else i&&(t-=3)>-1&&a.push(239,191,189);if(i=null,r<128){if((t-=1)<0)break;a.push(r)}else if(r<2048){if((t-=2)<0)break;a.push(r>>6|192,63&r|128)}else if(r<65536){if((t-=3)<0)break;a.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;a.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return a}function W(e){for(var t=[],r=0;r<e.length;++r)t.push(255&e.charCodeAt(r));return t}function H(e,t){for(var r,n,i,a=[],o=0;o<e.length&&!((t-=2)<0);++o)r=e.charCodeAt(o),n=r>>8,i=r%256,a.push(i),a.push(n);return a}function G(e){return K.toByteArray(Z(e))}function V(e,t,r,n){for(var i=0;i<n&&!(i+r>=t.length||i>=e.length);++i)t[i+r]=e[i];return i}function J(e){return e!==e}/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
var K=r(49),X=r(50),$=r(28);t.Buffer=a,t.SlowBuffer=g,t.INSPECT_MAX_BYTES=50,a.TYPED_ARRAY_SUPPORT=void 0!==e.TYPED_ARRAY_SUPPORT?e.TYPED_ARRAY_SUPPORT:function(){try{var e=new Uint8Array(1);return e.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===e.foo()&&"function"==typeof e.subarray&&0===e.subarray(1,1).byteLength}catch(e){return!1}}(),t.kMaxLength=n(),a.poolSize=8192,a._augment=function(e){return e.__proto__=a.prototype,e},a.from=function(e,t,r){return o(null,e,t,r)},a.TYPED_ARRAY_SUPPORT&&(a.prototype.__proto__=Uint8Array.prototype,a.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&a[Symbol.species]===a&&Object.defineProperty(a,Symbol.species,{value:null,configurable:!0})),a.alloc=function(e,t,r){return f(null,e,t,r)},a.allocUnsafe=function(e){return u(null,e)},a.allocUnsafeSlow=function(e){return u(null,e)},a.isBuffer=function(e){return!(null==e||!e._isBuffer)},a.compare=function(e,t){if(!a.isBuffer(e)||!a.isBuffer(t))throw new TypeError("Arguments must be Buffers");if(e===t)return 0;for(var r=e.length,n=t.length,i=0,o=Math.min(r,n);i<o;++i)if(e[i]!==t[i]){r=e[i],n=t[i];break}return r<n?-1:n<r?1:0},a.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},a.concat=function(e,t){if(!$(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return a.alloc(0);var r;if(void 0===t)for(t=0,r=0;r<e.length;++r)t+=e[r].length;var n=a.allocUnsafe(t),i=0;for(r=0;r<e.length;++r){var o=e[r];if(!a.isBuffer(o))throw new TypeError('"list" argument must be an Array of Buffers');o.copy(n,i),i+=o.length}return n},a.byteLength=m,a.prototype._isBuffer=!0,a.prototype.swap16=function(){var e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)b(this,t,t+1);return this},a.prototype.swap32=function(){var e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)b(this,t,t+3),b(this,t+1,t+2);return this},a.prototype.swap64=function(){var e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)b(this,t,t+7),b(this,t+1,t+6),b(this,t+2,t+5),b(this,t+3,t+4);return this},a.prototype.toString=function(){var e=0|this.length;return 0===e?"":0===arguments.length?O(this,0,e):_.apply(this,arguments)},a.prototype.equals=function(e){if(!a.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===a.compare(this,e)},a.prototype.inspect=function(){var e="",r=t.INSPECT_MAX_BYTES;return this.length>0&&(e=this.toString("hex",0,r).match(/.{2}/g).join(" "),this.length>r&&(e+=" ... ")),"<Buffer "+e+">"},a.prototype.compare=function(e,t,r,n,i){if(!a.isBuffer(e))throw new TypeError("Argument must be a Buffer");if(void 0===t&&(t=0),void 0===r&&(r=e?e.length:0),void 0===n&&(n=0),void 0===i&&(i=this.length),t<0||r>e.length||n<0||i>this.length)throw new RangeError("out of range index");if(n>=i&&t>=r)return 0;if(n>=i)return-1;if(t>=r)return 1;if(t>>>=0,r>>>=0,n>>>=0,i>>>=0,this===e)return 0;for(var o=i-n,s=r-t,f=Math.min(o,s),u=this.slice(n,i),l=e.slice(t,r),c=0;c<f;++c)if(u[c]!==l[c]){o=u[c],s=l[c];break}return o<s?-1:s<o?1:0},a.prototype.includes=function(e,t,r){return-1!==this.indexOf(e,t,r)},a.prototype.indexOf=function(e,t,r){return v(this,e,t,r,!0)},a.prototype.lastIndexOf=function(e,t,r){return v(this,e,t,r,!1)},a.prototype.write=function(e,t,r,n){if(void 0===t)n="utf8",r=this.length,t=0;else if(void 0===r&&"string"==typeof t)n=t,r=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t|=0,isFinite(r)?(r|=0,void 0===n&&(n="utf8")):(n=r,r=void 0)}var i=this.length-t;if((void 0===r||r>i)&&(r=i),e.length>0&&(r<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var a=!1;;)switch(n){case"hex":return w(this,e,t,r);case"utf8":case"utf-8":return E(this,e,t,r);case"ascii":return k(this,e,t,r);case"latin1":case"binary":return x(this,e,t,r);case"base64":return S(this,e,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return A(this,e,t,r);default:if(a)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),a=!0}},a.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var Q=4096;a.prototype.slice=function(e,t){var r=this.length;e=~~e,t=void 0===t?r:~~t,e<0?(e+=r)<0&&(e=0):e>r&&(e=r),t<0?(t+=r)<0&&(t=0):t>r&&(t=r),t<e&&(t=e);var n;if(a.TYPED_ARRAY_SUPPORT)n=this.subarray(e,t),n.__proto__=a.prototype;else{var i=t-e;n=new a(i,void 0);for(var o=0;o<i;++o)n[o]=this[o+e]}return n},a.prototype.readUIntLE=function(e,t,r){e|=0,t|=0,r||B(e,t,this.length);for(var n=this[e],i=1,a=0;++a<t&&(i*=256);)n+=this[e+a]*i;return n},a.prototype.readUIntBE=function(e,t,r){e|=0,t|=0,r||B(e,t,this.length);for(var n=this[e+--t],i=1;t>0&&(i*=256);)n+=this[e+--t]*i;return n},a.prototype.readUInt8=function(e,t){return t||B(e,1,this.length),this[e]},a.prototype.readUInt16LE=function(e,t){return t||B(e,2,this.length),this[e]|this[e+1]<<8},a.prototype.readUInt16BE=function(e,t){return t||B(e,2,this.length),this[e]<<8|this[e+1]},a.prototype.readUInt32LE=function(e,t){return t||B(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},a.prototype.readUInt32BE=function(e,t){return t||B(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},a.prototype.readIntLE=function(e,t,r){e|=0,t|=0,r||B(e,t,this.length);for(var n=this[e],i=1,a=0;++a<t&&(i*=256);)n+=this[e+a]*i;return i*=128,n>=i&&(n-=Math.pow(2,8*t)),n},a.prototype.readIntBE=function(e,t,r){e|=0,t|=0,r||B(e,t,this.length);for(var n=t,i=1,a=this[e+--n];n>0&&(i*=256);)a+=this[e+--n]*i;return i*=128,a>=i&&(a-=Math.pow(2,8*t)),a},a.prototype.readInt8=function(e,t){return t||B(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},a.prototype.readInt16LE=function(e,t){t||B(e,2,this.length);var r=this[e]|this[e+1]<<8;return 32768&r?4294901760|r:r},a.prototype.readInt16BE=function(e,t){t||B(e,2,this.length);var r=this[e+1]|this[e]<<8;return 32768&r?4294901760|r:r},a.prototype.readInt32LE=function(e,t){return t||B(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},a.prototype.readInt32BE=function(e,t){return t||B(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},a.prototype.readFloatLE=function(e,t){return t||B(e,4,this.length),X.read(this,e,!0,23,4)},a.prototype.readFloatBE=function(e,t){return t||B(e,4,this.length),X.read(this,e,!1,23,4)},a.prototype.readDoubleLE=function(e,t){return t||B(e,8,this.length),X.read(this,e,!0,52,8)},a.prototype.readDoubleBE=function(e,t){return t||B(e,8,this.length),X.read(this,e,!1,52,8)},a.prototype.writeUIntLE=function(e,t,r,n){if(e=+e,t|=0,r|=0,!n){M(this,e,t,r,Math.pow(2,8*r)-1,0)}var i=1,a=0;for(this[t]=255&e;++a<r&&(i*=256);)this[t+a]=e/i&255;return t+r},a.prototype.writeUIntBE=function(e,t,r,n){if(e=+e,t|=0,r|=0,!n){M(this,e,t,r,Math.pow(2,8*r)-1,0)}var i=r-1,a=1;for(this[t+i]=255&e;--i>=0&&(a*=256);)this[t+i]=e/a&255;return t+r},a.prototype.writeUInt8=function(e,t,r){return e=+e,t|=0,r||M(this,e,t,1,255,0),a.TYPED_ARRAY_SUPPORT||(e=Math.floor(e)),this[t]=255&e,t+1},a.prototype.writeUInt16LE=function(e,t,r){return e=+e,t|=0,r||M(this,e,t,2,65535,0),a.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8):U(this,e,t,!0),t+2},a.prototype.writeUInt16BE=function(e,t,r){return e=+e,t|=0,r||M(this,e,t,2,65535,0),a.TYPED_ARRAY_SUPPORT?(this[t]=e>>>8,this[t+1]=255&e):U(this,e,t,!1),t+2},a.prototype.writeUInt32LE=function(e,t,r){return e=+e,t|=0,r||M(this,e,t,4,4294967295,0),a.TYPED_ARRAY_SUPPORT?(this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e):F(this,e,t,!0),t+4},a.prototype.writeUInt32BE=function(e,t,r){return e=+e,t|=0,r||M(this,e,t,4,4294967295,0),a.TYPED_ARRAY_SUPPORT?(this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e):F(this,e,t,!1),t+4},a.prototype.writeIntLE=function(e,t,r,n){if(e=+e,t|=0,!n){var i=Math.pow(2,8*r-1);M(this,e,t,r,i-1,-i)}var a=0,o=1,s=0;for(this[t]=255&e;++a<r&&(o*=256);)e<0&&0===s&&0!==this[t+a-1]&&(s=1),this[t+a]=(e/o>>0)-s&255;return t+r},a.prototype.writeIntBE=function(e,t,r,n){if(e=+e,t|=0,!n){var i=Math.pow(2,8*r-1);M(this,e,t,r,i-1,-i)}var a=r-1,o=1,s=0;for(this[t+a]=255&e;--a>=0&&(o*=256);)e<0&&0===s&&0!==this[t+a+1]&&(s=1),this[t+a]=(e/o>>0)-s&255;return t+r},a.prototype.writeInt8=function(e,t,r){return e=+e,t|=0,r||M(this,e,t,1,127,-128),a.TYPED_ARRAY_SUPPORT||(e=Math.floor(e)),e<0&&(e=255+e+1),this[t]=255&e,t+1},a.prototype.writeInt16LE=function(e,t,r){return e=+e,t|=0,r||M(this,e,t,2,32767,-32768),a.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8):U(this,e,t,!0),t+2},a.prototype.writeInt16BE=function(e,t,r){return e=+e,t|=0,r||M(this,e,t,2,32767,-32768),a.TYPED_ARRAY_SUPPORT?(this[t]=e>>>8,this[t+1]=255&e):U(this,e,t,!1),t+2},a.prototype.writeInt32LE=function(e,t,r){return e=+e,t|=0,r||M(this,e,t,4,2147483647,-2147483648),a.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24):F(this,e,t,!0),t+4},a.prototype.writeInt32BE=function(e,t,r){return e=+e,t|=0,r||M(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),a.TYPED_ARRAY_SUPPORT?(this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e):F(this,e,t,!1),t+4},a.prototype.writeFloatLE=function(e,t,r){return z(this,e,t,!0,r)},a.prototype.writeFloatBE=function(e,t,r){return z(this,e,t,!1,r)},a.prototype.writeDoubleLE=function(e,t,r){return N(this,e,t,!0,r)},a.prototype.writeDoubleBE=function(e,t,r){return N(this,e,t,!1,r)},a.prototype.copy=function(e,t,r,n){if(r||(r=0),n||0===n||(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<r&&(n=r),n===r)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("sourceStart out of bounds");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-r&&(n=e.length-t+r);var i,o=n-r;if(this===e&&r<t&&t<n)for(i=o-1;i>=0;--i)e[i+t]=this[i+r];else if(o<1e3||!a.TYPED_ARRAY_SUPPORT)for(i=0;i<o;++i)e[i+t]=this[i+r];else Uint8Array.prototype.set.call(e,this.subarray(r,r+o),t);return o},a.prototype.fill=function(e,t,r,n){if("string"==typeof e){if("string"==typeof t?(n=t,t=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),1===e.length){var i=e.charCodeAt(0);i<256&&(e=i)}if(void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!a.isEncoding(n))throw new TypeError("Unknown encoding: "+n)}else"number"==typeof e&&(e&=255);if(t<0||this.length<t||this.length<r)throw new RangeError("Out of range index");if(r<=t)return this;t>>>=0,r=void 0===r?this.length:r>>>0,e||(e=0);var o;if("number"==typeof e)for(o=t;o<r;++o)this[o]=e;else{var s=a.isBuffer(e)?e:Y(new a(e,n).toString()),f=s.length;for(o=0;o<r-t;++o)this[o+t]=s[o%f]}return this};var ee=/[^+\/0-9A-Za-z-_]/g}).call(t,r(2))},function(e,t,r){"use strict";function n(e){if(void 0===e)throw"dicomParser.readTag: missing required parameter 'byteStream'";return"x"+("00000000"+(256*e.readUint16()*256+e.readUint16()).toString(16)).substr(-8)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n},function(e,t){var r;r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(r=window)}e.exports=r},function(e,t){function r(){throw new Error("setTimeout has not been defined")}function n(){throw new Error("clearTimeout has not been defined")}function i(e){if(l===setTimeout)return setTimeout(e,0);if((l===r||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(t){try{return l.call(null,e,0)}catch(t){return l.call(this,e,0)}}}function a(e){if(c===clearTimeout)return clearTimeout(e);if((c===n||!c)&&clearTimeout)return c=clearTimeout,clearTimeout(e);try{return c(e)}catch(t){try{return c.call(null,e)}catch(t){return c.call(this,e)}}}function o(){g&&d&&(g=!1,d.length?p=d.concat(p):m=-1,p.length&&s())}function s(){if(!g){var e=i(o);g=!0;for(var t=p.length;t;){for(d=p,p=[];++m<t;)d&&d[m].run();m=-1,t=p.length}d=null,g=!1,a(e)}}function f(e,t){this.fun=e,this.array=t}function u(){}var l,c,h=e.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:r}catch(e){l=r}try{c="function"==typeof clearTimeout?clearTimeout:n}catch(e){c=n}}();var d,p=[],g=!1,m=-1;h.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];p.push(new f(e,t)),1!==p.length||g||i(s)},f.prototype.run=function(){this.fun.apply(null,this.array)},h.title="browser",h.browser=!0,h.env={},h.argv=[],h.version="",h.versions={},h.on=u,h.addListener=u,h.once=u,h.off=u,h.removeListener=u,h.removeAllListeners=u,h.emit=u,h.prependListener=u,h.prependOnceListener=u,h.listeners=function(e){return[]},h.binding=function(e){throw new Error("process.binding is not supported")},h.cwd=function(){return"/"},h.chdir=function(e){throw new Error("process.chdir is not supported")},h.umask=function(){return 0}},function(e,t,r){"use strict";function n(e){if(!(this instanceof n))return new n(e);u.call(this,e),l.call(this,e),e&&!1===e.readable&&(this.readable=!1),e&&!1===e.writable&&(this.writable=!1),this.allowHalfOpen=!0,e&&!1===e.allowHalfOpen&&(this.allowHalfOpen=!1),this.once("end",i)}function i(){this.allowHalfOpen||this._writableState.ended||o(a,this)}function a(e){e.end()}var o=r(14),s=Object.keys||function(e){var t=[];for(var r in e)t.push(r);return t};e.exports=n;var f=r(6);f.inherits=r(7);var u=r(31),l=r(35);f.inherits(n,u);for(var c=s(l.prototype),h=0;h<c.length;h++){var d=c[h];n.prototype[d]||(n.prototype[d]=l.prototype[d])}Object.defineProperty(n.prototype,"destroyed",{get:function(){return void 0!==this._readableState&&void 0!==this._writableState&&(this._readableState.destroyed&&this._writableState.destroyed)},set:function(e){void 0!==this._readableState&&void 0!==this._writableState&&(this._readableState.destroyed=e,this._writableState.destroyed=e)}}),n.prototype._destroy=function(e,t){this.push(null),this.end(),o(t,e)}},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){return void 0!==e.parser?e.parser:t}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=r(10),s=function(){function e(t,r,i){n(this,e),this.byteArrayParser=t,this.byteArray=r,this.elements=i}return a(e,[{key:"uint16",value:function(e,t){var r=this.elements[e];if(t=void 0!==t?t:0,r&&0!==r.length)return i(r,this.byteArrayParser).readUint16(this.byteArray,r.dataOffset+2*t)}},{key:"int16",value:function(e,t){var r=this.elements[e];if(t=void 0!==t?t:0,r&&0!==r.length)return i(r,this.byteArrayParser).readInt16(this.byteArray,r.dataOffset+2*t)}},{key:"uint32",value:function(e,t){var r=this.elements[e];if(t=void 0!==t?t:0,r&&0!==r.length)return i(r,this.byteArrayParser).readUint32(this.byteArray,r.dataOffset+4*t)}},{key:"int32",value:function(e,t){var r=this.elements[e];if(t=void 0!==t?t:0,r&&0!==r.length)return i(r,this.byteArrayParser).readInt32(this.byteArray,r.dataOffset+4*t)}},{key:"float",value:function(e,t){var r=this.elements[e];if(t=void 0!==t?t:0,r&&0!==r.length)return i(r,this.byteArrayParser).readFloat(this.byteArray,r.dataOffset+4*t)}},{key:"double",value:function(e,t){var r=this.elements[e];if(t=void 0!==t?t:0,r&&0!==r.length)return i(r,this.byteArrayParser).readDouble(this.byteArray,r.dataOffset+8*t)}},{key:"numStringValues",value:function(e){var t=this.elements[e];if(t&&t.length>0){var r=(0,o.readFixedString)(this.byteArray,t.dataOffset,t.length),n=r.match(/\\/g);return null===n?1:n.length+1}}},{key:"string",value:function(e,t){var r=this.elements[e];if(r&&r.length>0){var n=(0,o.readFixedString)(this.byteArray,r.dataOffset,r.length);if(t>=0){return n.split("\\")[t].trim()}return n.trim()}}},{key:"text",value:function(e,t){var r=this.elements[e];if(r&&r.length>0){var n=(0,o.readFixedString)(this.byteArray,r.dataOffset,r.length);if(t>=0){return n.split("\\")[t].replace(/ +$/,"")}return n.replace(/ +$/,"")}}},{key:"floatString",value:function(e,t){var r=this.elements[e];if(r&&r.length>0){t=void 0!==t?t:0;var n=this.string(e,t);if(void 0!==n)return parseFloat(n)}}},{key:"intString",value:function(e,t){var r=this.elements[e];if(r&&r.length>0){t=void 0!==t?t:0;var n=this.string(e,t);if(void 0!==n)return parseInt(n)}}},{key:"attributeTag",value:function(e){var t=this.elements[e];if(t&&4===t.length){var r=i(t,this.byteArrayParser).readUint16,n=this.byteArray,a=t.dataOffset;return"x"+("00000000"+(256*r(n,a)*256+r(n,a+2)).toString(16)).substr(-8)}}}]),e}();t.default=s},function(e,t,r){(function(e){function r(e){return Array.isArray?Array.isArray(e):"[object Array]"===m(e)}function n(e){return"boolean"==typeof e}function i(e){return null===e}function a(e){return null==e}function o(e){return"number"==typeof e}function s(e){return"string"==typeof e}function f(e){return"symbol"==typeof e}function u(e){return void 0===e}function l(e){return"[object RegExp]"===m(e)}function c(e){return"object"==typeof e&&null!==e}function h(e){return"[object Date]"===m(e)}function d(e){return"[object Error]"===m(e)||e instanceof Error}function p(e){return"function"==typeof e}function g(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||void 0===e}function m(e){return Object.prototype.toString.call(e)}t.isArray=r,t.isBoolean=n,t.isNull=i,t.isNullOrUndefined=a,t.isNumber=o,t.isString=s,t.isSymbol=f,t.isUndefined=u,t.isRegExp=l,t.isObject=c,t.isDate=h,t.isError=d,t.isFunction=p,t.isPrimitive=g,t.isBuffer=e.isBuffer}).call(t,r(0).Buffer)},function(e,t){"function"==typeof Object.create?e.exports=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}:e.exports=function(e,t){e.super_=t;var r=function(){};r.prototype=t.prototype,e.prototype=new r,e.prototype.constructor=e}},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};if(r=void 0===r?t.byteArray.length:r,void 0===t)throw"dicomParser.parseDicomDataSetExplicit: missing required parameter 'byteStream'";if(r<t.position||r>t.byteArray.length)throw"dicomParser.parseDicomDataSetExplicit: invalid value for parameter 'maxP osition'";for(var i=e.elements;t.position<r;){var a=(0,s.default)(t,e.warnings,n.untilTag);if(i[a.tag]=a,a.tag===n.untilTag)return}if(t.position>r)throw"dicomParser:parseDicomDataSetExplicit: buffer overrun"}function a(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};if(r=void 0===r?e.byteArray.length:r,void 0===t)throw"dicomParser.parseDicomDataSetImplicit: missing required parameter 'byteStream'";if(r<t.position||r>t.byteArray.length)throw"dicomParser.parseDicomDataSetImplicit: invalid value for parameter 'maxPosition'";for(var i=e.elements;t.position<r;){var a=(0,u.default)(t,n.untilTag,n.vrCallback);if(i[a.tag]=a,a.tag===n.untilTag)return}}Object.defineProperty(t,"__esModule",{value:!0}),t.parseDicomDataSetExplicit=i,t.parseDicomDataSetImplicit=a;var o=r(9),s=n(o),f=r(18),u=n(f)},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e,t,r){if(void 0===e)throw"dicomParser.readDicomElementExplicit: missing required parameter 'byteStream'";var n={tag:(0,h.default)(e),vr:e.readFixedString(2)};return 2===g(n.vr)?(n.length=e.readUint16(),n.dataOffset=e.position):(e.seek(2),n.length=e.readUint32(),n.dataOffset=e.position),4294967295===n.length&&(n.hadUndefinedLength=!0),n.tag===r?n:"SQ"===n.vr?((0,p.default)(e,n,t),n):4294967295===n.length?"x7fe00010"===n.tag?((0,o.default)(e,n,t),n):"UN"===n.vr?((0,f.default)(e,n),n):((0,l.default)(e,n),n):(e.seek(n.length),n)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=i;var a=r(24),o=n(a),s=r(25),f=n(s),u=r(17),l=n(u),c=r(1),h=n(c),d=r(26),p=n(d),g=function(e){return"OB"===e||"OW"===e||"SQ"===e||"OF"===e||"UT"===e||"UN"===e?4:2}},function(e,t,r){"use strict";function n(e,t,r){if(r<0)throw"dicomParser.readFixedString - length cannot be less than 0";if(t+r>e.length)throw"dicomParser.readFixedString: attempt to read past end of buffer";for(var n,i="",a=0;a<r;a++){if(0===(n=e[t+a]))return t+=r,i;i+=String.fromCharCode(n)}return i}Object.defineProperty(t,"__esModule",{value:!0}),t.readFixedString=n},function(e,t,r){"use strict";function n(e){if(void 0===e)throw"dicomParser.readSequenceItem: missing required parameter 'byteStream'";var t={tag:(0,a.default)(e),length:e.readUint32(),dataOffset:e.position};if("xfffee000"!==t.tag)throw"dicomParser.readSequenceItem: item tag (FFFE,E000) not found at offset "+e.position;return t}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;var i=r(1),a=function(e){return e&&e.__esModule?e:{default:e}}(i)},function(e,t,r){"use strict";(function(e){function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=r(13),o=function(e){return e&&e.__esModule?e:{default:e}}(a),s=r(10),f=function(){function t(r,i,a){if(n(this,t),void 0===r)throw"dicomParser.ByteStream: missing required parameter 'byteArrayParser'";if(void 0===i)throw"dicomParser.ByteStream: missing required parameter 'byteArray'";if(i instanceof Uint8Array==!1&&i instanceof e==!1)throw"dicomParser.ByteStream: parameter byteArray is not of type Uint8Array or Buffer";if(a<0)throw"dicomParser.ByteStream: parameter 'position' cannot be less than 0";if(a>=i.length)throw"dicomParser.ByteStream: parameter 'position' cannot be greater than or equal to 'byteArray' length";this.byteArrayParser=r,this.byteArray=i,this.position=a||0,this.warnings=[]}return i(t,[{key:"seek",value:function(e){if(this.position+e<0)throw"dicomParser.ByteStream.prototype.seek: cannot seek to position < 0";this.position+=e}},{key:"readByteStream",value:function(e){if(this.position+e>this.byteArray.length)throw"dicomParser.ByteStream.prototype.readByteStream: readByteStream - buffer overread";var r=(0,o.default)(this.byteArray,this.position,e);return this.position+=e,new t(this.byteArrayParser,r)}},{key:"readUint16",value:function(){var e=this.byteArrayParser.readUint16(this.byteArray,this.position);return this.position+=2,e}},{key:"readUint32",value:function(){var e=this.byteArrayParser.readUint32(this.byteArray,this.position);return this.position+=4,e}},{key:"readFixedString",value:function(e){var t=(0,s.readFixedString)(this.byteArray,this.position,e);return this.position+=e,t}}]),t}();t.default=f}).call(t,r(0).Buffer)},function(e,t,r){"use strict";(function(e){function r(t,r,n){if(void 0!==e&&t instanceof e)return t.slice(r,r+n);if(t instanceof Uint8Array)return new Uint8Array(t.buffer,t.byteOffset+r,n);throw"dicomParser.from: unknown type for byteArray"}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r}).call(t,r(0).Buffer)},function(e,t,r){"use strict";(function(t){function r(e,r,n,i){if("function"!=typeof e)throw new TypeError('"callback" argument must be a function');var a,o,s=arguments.length;switch(s){case 0:case 1:return t.nextTick(e);case 2:return t.nextTick(function(){e.call(null,r)});case 3:return t.nextTick(function(){e.call(null,r,n)});case 4:return t.nextTick(function(){e.call(null,r,n,i)});default:for(a=new Array(s-1),o=0;o<a.length;)a[o++]=arguments[o];return t.nextTick(function(){e.apply(null,a)})}}!t.version||0===t.version.indexOf("v0.")||0===t.version.indexOf("v1.")&&0!==t.version.indexOf("v1.8.")?e.exports=r:e.exports=t.nextTick}).call(t,r(3))},function(e,t,r){"use strict";var n="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Int32Array;t.assign=function(e){for(var t=Array.prototype.slice.call(arguments,1);t.length;){var r=t.shift();if(r){if("object"!=typeof r)throw new TypeError(r+"must be non-object");for(var n in r)r.hasOwnProperty(n)&&(e[n]=r[n])}}return e},t.shrinkBuf=function(e,t){return e.length===t?e:e.subarray?e.subarray(0,t):(e.length=t,e)};var i={arraySet:function(e,t,r,n,i){if(t.subarray&&e.subarray)return void e.set(t.subarray(r,r+n),i);for(var a=0;a<n;a++)e[i+a]=t[r+a]},flattenChunks:function(e){var t,r,n,i,a,o;for(n=0,t=0,r=e.length;t<r;t++)n+=e[t].length;for(o=new Uint8Array(n),i=0,t=0,r=e.length;t<r;t++)a=e[t],o.set(a,i),i+=a.length;return o}},a={arraySet:function(e,t,r,n,i){for(var a=0;a<n;a++)e[i+a]=t[r+a]},flattenChunks:function(e){return[].concat.apply([],e)}};t.setTyped=function(e){e?(t.Buf8=Uint8Array,t.Buf16=Uint16Array,t.Buf32=Int32Array,t.assign(t,i)):(t.Buf8=Array,t.Buf16=Array,t.Buf32=Array,t.assign(t,a))},t.setTyped(n)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={AE:!0,AS:!0,AT:!1,CS:!0,DA:!0,DS:!0,DT:!0,FL:!1,FD:!1,IS:!0,LO:!0,LT:!0,OB:!1,OD:!1,OF:!1,OW:!1,PN:!0,SH:!0,SL:!1,SQ:!1,SS:!1,ST:!0,TM:!0,UI:!0,UL:!1,UN:void 0,UR:!0,US:!1,UT:!0},i=function(e){return n[e]},a=function(e){return parseInt(e[4])%2==1},o=function(e){if(void 0!==e){var t=e.split("^");return{familyName:t[0],givenName:t[1],middleName:t[2],prefix:t[3],suffix:t[4]}}};t.isStringVr=i,t.isPrivateTag=a,t.parsePN=o},function(e,t,r){"use strict";function n(e,t){if(void 0===e)throw"dicomParser.readDicomElementImplicit: missing required parameter 'byteStream'";for(var r=e.byteArray.length-8;e.position<=r;){if(65534===e.readUint16()){if(57357===e.readUint16()){return 0!==e.readUint32()&&e.warnings("encountered non zero length following item delimiter at position "+(e.position-4)+" while reading element of undefined length with tag "+t.tag),void(t.length=e.position-t.dataOffset)}}}t.length=e.byteArray.length-t.dataOffset,e.seek(e.byteArray.length-e.position)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e,t,r){if(void 0===e)throw"dicomParser.readDicomElementImplicit: missing required parameter 'byteStream'";var n={tag:(0,l.default)(e),length:e.readUint32(),dataOffset:e.position};return 4294967295===n.length&&(n.hadUndefinedLength=!0),n.tag===t?n:c(n,e,r)?((0,f.default)(e,n),n):n.hadUndefinedLength?((0,o.default)(e,n),n):(e.seek(n.length),n)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=i;var a=r(17),o=n(a),s=r(27),f=n(s),u=r(1),l=n(u),c=function(e,t,r){if(void 0!==r)return"SQ"===r(e.tag);if(t.position+4<=t.byteArray.length){var n=(0,l.default)(t);return t.seek(-4),"xfffee000"===n||"xfffee0dd"===n}return t.warnings.push("eof encountered before finding sequence item tag or sequence delimiter tag in peeking to determine VR"),!1}},function(e,t,r){"use strict";(function(e){function r(t,r){if(void 0!==e&&t instanceof e)return e.alloc(r);if(t instanceof Uint8Array)return new Uint8Array(r);throw"dicomParser.alloc: unknown type for byteArray"}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r}).call(t,r(0).Buffer)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={readUint16:function(e,t){if(t<0)throw"littleEndianByteArrayParser.readUint16: position cannot be less than 0";if(t+2>e.length)throw"littleEndianByteArrayParser.readUint16: attempt to read past end of buffer";return e[t]+256*e[t+1]},readInt16:function(e,t){if(t<0)throw"littleEndianByteArrayParser.readInt16: position cannot be less than 0";if(t+2>e.length)throw"littleEndianByteArrayParser.readInt16: attempt to read past end of buffer";var r=e[t]+(e[t+1]<<8);return 32768&r&&(r=r-65535-1),r},readUint32:function(e,t){if(t<0)throw"littleEndianByteArrayParser.readUint32: position cannot be less than 0";if(t+4>e.length)throw"littleEndianByteArrayParser.readUint32: attempt to read past end of buffer";return e[t]+256*e[t+1]+256*e[t+2]*256+256*e[t+3]*256*256},readInt32:function(e,t){if(t<0)throw"littleEndianByteArrayParser.readInt32: position cannot be less than 0";if(t+4>e.length)throw"littleEndianByteArrayParser.readInt32: attempt to read past end of buffer";return e[t]+(e[t+1]<<8)+(e[t+2]<<16)+(e[t+3]<<24)},readFloat:function(e,t){if(t<0)throw"littleEndianByteArrayParser.readFloat: position cannot be less than 0";if(t+4>e.length)throw"littleEndianByteArrayParser.readFloat: attempt to read past end of buffer";var r=new Uint8Array(4);return r[0]=e[t],r[1]=e[t+1],r[2]=e[t+2],r[3]=e[t+3],new Float32Array(r.buffer)[0]},readDouble:function(e,t){if(t<0)throw"littleEndianByteArrayParser.readDouble: position cannot be less than 0";if(t+8>e.length)throw"littleEndianByteArrayParser.readDouble: attempt to read past end of buffer";var r=new Uint8Array(8);return r[0]=e[t],r[1]=e[t+1],r[2]=e[t+2],r[3]=e[t+3],r[4]=e[t+4],r[5]=e[t+5],r[6]=e[t+6],r[7]=e[t+7],new Float64Array(r.buffer)[0]}}},function(e,t,r){function n(e,t){for(var r in e)t[r]=e[r]}function i(e,t,r){return o(e,t,r)}var a=r(0),o=a.Buffer;o.from&&o.alloc&&o.allocUnsafe&&o.allocUnsafeSlow?e.exports=a:(n(a,t),t.Buffer=i),n(o,i),i.from=function(e,t,r){if("number"==typeof e)throw new TypeError("Argument must not be a number");return o(e,t,r)},i.alloc=function(e,t,r){if("number"!=typeof e)throw new TypeError("Argument must be a number");var n=o(e);return void 0!==t?"string"==typeof r?n.fill(t,r):n.fill(t):n.fill(0),n},i.allocUnsafe=function(e){if("number"!=typeof e)throw new TypeError("Argument must be a number");return o(e)},i.allocUnsafeSlow=function(e){if("number"!=typeof e)throw new TypeError("Argument must be a number");return a.SlowBuffer(e)}},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e,t,r,n,i){if(n=n||1,i=i||t.fragments,void 0===e)throw"dicomParser.readEncapsulatedPixelDataFromFragments: missing required parameter 'dataSet'";if(void 0===t)throw"dicomParser.readEncapsulatedPixelDataFromFragments: missing required parameter 'pixelDataElement'";if(void 0===r)throw"dicomParser.readEncapsulatedPixelDataFromFragments: missing required parameter 'startFragmentIndex'";if(void 0===n)throw"dicomParser.readEncapsulatedPixelDataFromFragments: missing required parameter 'numFragments'";if("x7fe00010"!==t.tag)throw"dicomParser.readEncapsulatedPixelDataFromFragments: parameter 'pixelDataElement' refers to non pixel data tag (expected tag = x7fe00010";if(!0!==t.encapsulatedPixelData)throw"dicomParser.readEncapsulatedPixelDataFromFragments: parameter 'pixelDataElement' refers to pixel data element that does not have encapsulated pixel data";if(!0!==t.hadUndefinedLength)throw"dicomParser.readEncapsulatedPixelDataFromFragments: parameter 'pixelDataElement' refers to pixel data element that does not have encapsulated pixel data";if(void 0===t.basicOffsetTable)throw"dicomParser.readEncapsulatedPixelDataFromFragments: parameter 'pixelDataElement' refers to pixel data element that does not have encapsulated pixel data";if(void 0===t.fragments)throw"dicomParser.readEncapsulatedPixelDataFromFragments: parameter 'pixelDataElement' refers to pixel data element that does not have encapsulated pixel data";if(t.fragments.length<=0)throw"dicomParser.readEncapsulatedPixelDataFromFragments: parameter 'pixelDataElement' refers to pixel data element that does not have encapsulated pixel data";if(r<0)throw"dicomParser.readEncapsulatedPixelDataFromFragments: parameter 'startFragmentIndex' must be >= 0";if(r>=t.fragments.length)throw"dicomParser.readEncapsulatedPixelDataFromFragments: parameter 'startFragmentIndex' must be < number of fragments";if(n<1)throw"dicomParser.readEncapsulatedPixelDataFromFragments: parameter 'numFragments' must be > 0";if(r+n>t.fragments.length)throw"dicomParser.readEncapsulatedPixelDataFromFragments: parameter 'startFragment' + 'numFragments' < number of fragments";var a=new f.default(e.byteArrayParser,e.byteArray,t.dataOffset),s=(0,l.default)(a);if("xfffee000"!==s.tag)throw"dicomParser.readEncapsulatedPixelData: missing basic offset table xfffee000";a.seek(s.length);var u=a.position;if(1===n)return(0,h.default)(a.byteArray,u+i[r].offset+8,i[r].length);for(var c=d(i,r,n),p=(0,o.default)(a.byteArray,c),g=0,m=r;m<r+n;m++)for(var _=u+i[m].offset+8,b=0;b<i[m].length;b++)p[g++]=a.byteArray[_++];return p}Object.defineProperty(t,"__esModule",{value:!0}),t.default=i;var a=r(19),o=n(a),s=r(12),f=n(s),u=r(11),l=n(u),c=r(13),h=n(c),d=function(e,t,r){for(var n=0,i=t;i<t+r;i++)n+=e[i].length;return n}},function(e,t,r){"use strict";function n(e,t){function r(t,r){for(var n="",i=0;i<t;i++)0!==i&&(n+="/"),n+=r.call(e,o,i).toString();return n}if(void 0===e||void 0===t)throw"dicomParser.explicitElementToString: missing required parameters";if(void 0===t.vr)throw"dicomParser.explicitElementToString: cannot convert implicit element to string";var n,i=t.vr,o=t.tag;if(!0===a.isStringVr(i))n=e.string(o);else{if("AT"===i){var s=e.uint32(o);if(void 0===s)return;return s<0&&(s=4294967295+s+1),"x"+s.toString(16).toUpperCase()}"US"===i?n=r(t.length/2,e.uint16):"SS"===i?n=r(t.length/2,e.int16):"UL"===i?n=r(t.length/4,e.uint32):"SL"===i?n=r(t.length/4,e.int32):"FD"===i?n=r(t.length/8,e.double):"FL"===i&&(n=r(t.length/4,e.float))}return n}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;var i=r(16),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(i)},function(e,t,r){"use strict";function n(e,t,r){if(void 0===e)throw"dicomParser.findEndOfEncapsulatedElement: missing required parameter 'byteStream'";if(void 0===t)throw"dicomParser.findEndOfEncapsulatedElement: missing required parameter 'element'";if(t.encapsulatedPixelData=!0,t.basicOffsetTable=[],t.fragments=[],"xfffee000"!==(0,a.default)(e))throw"dicomParser.findEndOfEncapsulatedElement: basic offset table not found";for(var n=e.readUint32(),i=n/4,o=0;o<i;o++){var s=e.readUint32();t.basicOffsetTable.push(s)}for(var f=e.position;e.position<e.byteArray.length;){var u=(0,a.default)(e),l=e.readUint32();if("xfffee0dd"===u)return e.seek(l),void(t.length=e.position-t.dataOffset);if("xfffee000"!==u)return r&&r.push("unexpected tag "+u+" while searching for end of pixel data element with undefined length"),l>e.byteArray.length-e.position&&(l=e.byteArray.length-e.position),t.fragments.push({offset:e.position-f-8,position:e.position,length:l}),e.seek(l),void(t.length=e.position-t.dataOffset);t.fragments.push({offset:e.position-f-8,position:e.position,length:l}),e.seek(l)}r&&r.push("pixel data element "+t.tag+" missing sequence delimiter tag xfffee0dd")}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;var i=r(1),a=function(e){return e&&e.__esModule?e:{default:e}}(i)},function(e,t,r){"use strict";function n(e,t){if(void 0===e)throw"dicomParser.findAndSetUNElementLength: missing required parameter 'byteStream'";for(var r=e.byteArray.length-8;e.position<=r;){if(65534===e.readUint16()){if(57565===e.readUint16()){return 0!==e.readUint32()&&e.warnings("encountered non zero length following item delimiter at position "+(e.position-4)+" while reading element of undefined length with tag "+t.tag),void(t.length=e.position-t.dataOffset)}}}t.length=e.byteArray.length-t.dataOffset,e.seek(e.byteArray.length-e.position)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e,t){for(var r={};e.position<e.byteArray.length;){var n=(0,h.default)(e,t);if(r[n.tag]=n,"xfffee00d"===n.tag)return new l.default(e.byteArrayParser,e.byteArray,r)}return t.push("eof encountered before finding item delimiter tag while reading sequence item of undefined length"),new l.default(e.byteArrayParser,e.byteArray,r)}function a(e,t){var r=(0,p.default)(e);return 4294967295===r.length?(r.hadUndefinedLength=!0,r.dataSet=i(e,t),r.length=e.position-r.dataOffset):(r.dataSet=new l.default(e.byteArrayParser,e.byteArray,{}),b.parseDicomDataSetExplicit(r.dataSet,e,e.position+r.length)),r}function o(e,t,r){for(;e.position+4<=e.byteArray.length;){var n=(0,m.default)(e);if(e.seek(-4),"xfffee0dd"===n)return t.length=e.position-t.dataOffset,e.seek(8),t;var i=a(e,r);t.items.push(i)}r.push("eof encountered before finding sequence delimitation tag while reading sequence of undefined length"),t.length=e.position-t.dataOffset}function s(e,t,r){for(var n=t.dataOffset+t.length;e.position<n;){var i=a(e,r);t.items.push(i)}}function f(e,t,r){if(void 0===e)throw"dicomParser.readSequenceItemsExplicit: missing required parameter 'byteStream'";if(void 0===t)throw"dicomParser.readSequenceItemsExplicit: missing required parameter 'element'";t.items=[],4294967295===t.length?o(e,t,r):s(e,t,r)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=f;var u=r(5),l=n(u),c=r(9),h=n(c),d=r(11),p=n(d),g=r(1),m=n(g),_=r(8),b=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(_)},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e,t){for(var r={};e.position<e.byteArray.length;){var n=(0,h.default)(e,void 0,t);if(r[n.tag]=n,"xfffee00d"===n.tag)return new l.default(e.byteArrayParser,e.byteArray,r)}return e.warnings.push("eof encountered before finding sequence item delimiter in sequence item of undefined length"),new l.default(e.byteArrayParser,e.byteArray,r)}function a(e,t){var r=(0,p.default)(e);return 4294967295===r.length?(r.hadUndefinedLength=!0,r.dataSet=i(e,t),r.length=e.position-r.dataOffset):(r.dataSet=new l.default(e.byteArrayParser,e.byteArray,{}),b.parseDicomDataSetImplicit(r.dataSet,e,e.position+r.length,{vrCallback:t})),r}function o(e,t,r){for(;e.position+4<=e.byteArray.length;){var n=(0,m.default)(e);if(e.seek(-4),"xfffee0dd"===n)return t.length=e.position-t.dataOffset,e.seek(8),t;var i=a(e,r);t.items.push(i)}e.warnings.push("eof encountered before finding sequence delimiter in sequence of undefined length"),t.length=e.byteArray.length-t.dataOffset}function s(e,t,r){for(var n=t.dataOffset+t.length;e.position<n;){var i=a(e,r);t.items.push(i)}}function f(e,t,r){if(void 0===e)throw"dicomParser.readSequenceItemsImplicit: missing required parameter 'byteStream'";if(void 0===t)throw"dicomParser.readSequenceItemsImplicit: missing required parameter 'element'";t.items=[],4294967295===t.length?o(e,t,r):s(e,t,r)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=f;var u=r(5),l=n(u),c=r(18),h=n(c),d=r(11),p=n(d),g=r(1),m=n(g),_=r(8),b=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(_)},function(e,t){var r={}.toString;e.exports=Array.isArray||function(e){return"[object Array]"==r.call(e)}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={readUint16:function(e,t){if(t<0)throw"bigEndianByteArrayParser.readUint16: position cannot be less than 0";if(t+2>e.length)throw"bigEndianByteArrayParser.readUint16: attempt to read past end of buffer";return(e[t]<<8)+e[t+1]},readInt16:function(e,t){if(t<0)throw"bigEndianByteArrayParser.readInt16: position cannot be less than 0";if(t+2>e.length)throw"bigEndianByteArrayParser.readInt16: attempt to read past end of buffer";var r=(e[t]<<8)+e[t+1];return 32768&r&&(r=r-65535-1),r},readUint32:function(e,t){if(t<0)throw"bigEndianByteArrayParser.readUint32: position cannot be less than 0";if(t+4>e.length)throw"bigEndianByteArrayParser.readUint32: attempt to read past end of buffer";return 256*(256*(256*e[t]+e[t+1])+e[t+2])+e[t+3]},readInt32:function(e,t){if(t<0)throw"bigEndianByteArrayParser.readInt32: position cannot be less than 0";if(t+4>e.length)throw"bigEndianByteArrayParser.readInt32: attempt to read past end of buffer";return(e[t]<<24)+(e[t+1]<<16)+(e[t+2]<<8)+e[t+3]},readFloat:function(e,t){if(t<0)throw"bigEndianByteArrayParser.readFloat: position cannot be less than 0";if(t+4>e.length)throw"bigEndianByteArrayParser.readFloat: attempt to read past end of buffer";var r=new Uint8Array(4);return r[3]=e[t],r[2]=e[t+1],r[1]=e[t+2],r[0]=e[t+3],new Float32Array(r.buffer)[0]},readDouble:function(e,t){if(t<0)throw"bigEndianByteArrayParser.readDouble: position cannot be less than 0";if(t+8>e.length)throw"bigEndianByteArrayParser.readDouble: attempt to read past end of buffer";var r=new Uint8Array(8);return r[7]=e[t],r[6]=e[t+1],r[5]=e[t+2],r[4]=e[t+3],r[3]=e[t+4],r[2]=e[t+5],r[1]=e[t+6],r[0]=e[t+7],new Float64Array(r.buffer)[0]}}},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e,t){function r(){if(n.seek(128),"DICM"!==n.readFixedString(4))throw"dicomParser.readPart10Header: DICM prefix not found at location 132 - this is not a valid DICOM P10 file."}if(void 0===e)throw"dicomParser.readPart10Header: missing required parameter 'byteArray'";var n=new o.default(l.default,e);return function(){r();for(var e=[],t={};n.position<n.byteArray.length;){var i=n.position,a=(0,h.default)(n,e);if(a.tag>"x0002ffff"){n.position=i;break}a.parser=l.default,t[a.tag]=a}var o=new f.default(n.byteArrayParser,n.byteArray,t);return o.warnings=n.warnings,o.position=n.position,o}()}Object.defineProperty(t,"__esModule",{value:!0}),t.default=i;var a=r(12),o=n(a),s=r(5),f=n(s),u=r(20),l=n(u),c=r(9),h=n(c)},function(e,t,r){"use strict";(function(t,n){function i(e){return F.from(e)}function a(e){return F.isBuffer(e)||e instanceof j}function o(e,t,r){if("function"==typeof e.prependListener)return e.prependListener(t,r);e._events&&e._events[t]?B(e._events[t])?e._events[t].unshift(r):e._events[t]=[r,e._events[t]]:e.on(t,r)}function s(e,t){L=L||r(4),e=e||{},this.objectMode=!!e.objectMode,t instanceof L&&(this.objectMode=this.objectMode||!!e.readableObjectMode);var n=e.highWaterMark,i=this.objectMode?16:16384;this.highWaterMark=n||0===n?n:i,this.highWaterMark=Math.floor(this.highWaterMark),this.buffer=new q,this.length=0,this.pipes=null,this.pipesCount=0,this.flowing=null,this.ended=!1,this.endEmitted=!1,this.reading=!1,this.sync=!0,this.needReadable=!1,this.emittedReadable=!1,this.readableListening=!1,this.resumeScheduled=!1,this.destroyed=!1,this.defaultEncoding=e.defaultEncoding||"utf8",this.awaitDrain=0,this.readingMore=!1,this.decoder=null,this.encoding=null,e.encoding&&(C||(C=r(36).StringDecoder),this.decoder=new C(e.encoding),this.encoding=e.encoding)}function f(e){if(L=L||r(4),!(this instanceof f))return new f(e);this._readableState=new s(e,this),this.readable=!0,e&&("function"==typeof e.read&&(this._read=e.read),"function"==typeof e.destroy&&(this._destroy=e.destroy)),U.call(this)}function u(e,t,r,n,a){var o=e._readableState;if(null===t)o.reading=!1,g(e,o);else{var s;a||(s=c(o,t)),s?e.emit("error",s):o.objectMode||t&&t.length>0?("string"==typeof t||o.objectMode||Object.getPrototypeOf(t)===F.prototype||(t=i(t)),n?o.endEmitted?e.emit("error",new Error("stream.unshift() after end event")):l(e,o,t,!0):o.ended?e.emit("error",new Error("stream.push() after EOF")):(o.reading=!1,o.decoder&&!r?(t=o.decoder.write(t),o.objectMode||0!==t.length?l(e,o,t,!1):b(e,o)):l(e,o,t,!1))):n||(o.reading=!1)}return h(o)}function l(e,t,r,n){t.flowing&&0===t.length&&!t.sync?(e.emit("data",r),e.read(0)):(t.length+=t.objectMode?1:r.length,n?t.buffer.unshift(r):t.buffer.push(r),t.needReadable&&m(e)),b(e,t)}function c(e,t){var r;return a(t)||"string"==typeof t||void 0===t||e.objectMode||(r=new TypeError("Invalid non-string/buffer chunk")),r}function h(e){return!e.ended&&(e.needReadable||e.length<e.highWaterMark||0===e.length)}function d(e){return e>=H?e=H:(e--,e|=e>>>1,e|=e>>>2,e|=e>>>4,e|=e>>>8,e|=e>>>16,e++),e}function p(e,t){return e<=0||0===t.length&&t.ended?0:t.objectMode?1:e!==e?t.flowing&&t.length?t.buffer.head.data.length:t.length:(e>t.highWaterMark&&(t.highWaterMark=d(e)),e<=t.length?e:t.ended?t.length:(t.needReadable=!0,0))}function g(e,t){if(!t.ended){if(t.decoder){var r=t.decoder.end();r&&r.length&&(t.buffer.push(r),t.length+=t.objectMode?1:r.length)}t.ended=!0,m(e)}}function m(e){var t=e._readableState;t.needReadable=!1,t.emittedReadable||(Z("emitReadable",t.flowing),t.emittedReadable=!0,t.sync?D(_,e):_(e))}function _(e){Z("emit readable"),e.emit("readable"),x(e)}function b(e,t){t.readingMore||(t.readingMore=!0,D(v,e,t))}function v(e,t){for(var r=t.length;!t.reading&&!t.flowing&&!t.ended&&t.length<t.highWaterMark&&(Z("maybeReadMore read 0"),e.read(0),r!==t.length);)r=t.length;t.readingMore=!1}function y(e){return function(){var t=e._readableState;Z("pipeOnDrain",t.awaitDrain),t.awaitDrain&&t.awaitDrain--,0===t.awaitDrain&&M(e,"data")&&(t.flowing=!0,x(e))}}function w(e){Z("readable nexttick read 0"),e.read(0)}function E(e,t){t.resumeScheduled||(t.resumeScheduled=!0,D(k,e,t))}function k(e,t){t.reading||(Z("resume read 0"),e.read(0)),t.resumeScheduled=!1,t.awaitDrain=0,e.emit("resume"),x(e),t.flowing&&!t.reading&&e.read(0)}function x(e){var t=e._readableState;for(Z("flow",t.flowing);t.flowing&&null!==e.read(););}function S(e,t){if(0===t.length)return null;var r;return t.objectMode?r=t.buffer.shift():!e||e>=t.length?(r=t.decoder?t.buffer.join(""):1===t.buffer.length?t.buffer.head.data:t.buffer.concat(t.length),t.buffer.clear()):r=A(e,t.buffer,t.decoder),r}function A(e,t,r){var n;return e<t.head.data.length?(n=t.head.data.slice(0,e),t.head.data=t.head.data.slice(e)):n=e===t.head.data.length?t.shift():r?P(e,t):O(e,t),n}function P(e,t){var r=t.head,n=1,i=r.data;for(e-=i.length;r=r.next;){var a=r.data,o=e>a.length?a.length:e;if(o===a.length?i+=a:i+=a.slice(0,e),0===(e-=o)){o===a.length?(++n,r.next?t.head=r.next:t.head=t.tail=null):(t.head=r,r.data=a.slice(o));break}++n}return t.length-=n,i}function O(e,t){var r=F.allocUnsafe(e),n=t.head,i=1;for(n.data.copy(r),e-=n.data.length;n=n.next;){var a=n.data,o=e>a.length?a.length:e;if(a.copy(r,r.length-e,0,o),0===(e-=o)){o===a.length?(++i,n.next?t.head=n.next:t.head=t.tail=null):(t.head=n,n.data=a.slice(o));break}++i}return t.length-=i,r}function T(e){var t=e._readableState;if(t.length>0)throw new Error('"endReadable()" called on non-empty stream');t.endEmitted||(t.ended=!0,D(R,t,e))}function R(e,t){e.endEmitted||0!==e.length||(e.endEmitted=!0,t.readable=!1,t.emit("end"))}function I(e,t){for(var r=0,n=e.length;r<n;r++)if(e[r]===t)return r;return-1}var D=r(14);e.exports=f;var L,B=r(28);f.ReadableState=s;var M=(r(32).EventEmitter,function(e,t){return e.listeners(t).length}),U=r(33),F=r(21).Buffer,j=t.Uint8Array||function(){},z=r(6);z.inherits=r(7);var N=r(57),Z=void 0;Z=N&&N.debuglog?N.debuglog("stream"):function(){};var C,q=r(58),Y=r(34);z.inherits(f,U);var W=["error","close","destroy","pause","resume"];Object.defineProperty(f.prototype,"destroyed",{get:function(){return void 0!==this._readableState&&this._readableState.destroyed},set:function(e){this._readableState&&(this._readableState.destroyed=e)}}),f.prototype.destroy=Y.destroy,f.prototype._undestroy=Y.undestroy,f.prototype._destroy=function(e,t){this.push(null),t(e)},f.prototype.push=function(e,t){var r,n=this._readableState;return n.objectMode?r=!0:"string"==typeof e&&(t=t||n.defaultEncoding,t!==n.encoding&&(e=F.from(e,t),t=""),r=!0),u(this,e,t,!1,r)},f.prototype.unshift=function(e){return u(this,e,null,!0,!1)},f.prototype.isPaused=function(){return!1===this._readableState.flowing},f.prototype.setEncoding=function(e){return C||(C=r(36).StringDecoder),this._readableState.decoder=new C(e),this._readableState.encoding=e,this};var H=8388608;f.prototype.read=function(e){Z("read",e),e=parseInt(e,10);var t=this._readableState,r=e;if(0!==e&&(t.emittedReadable=!1),0===e&&t.needReadable&&(t.length>=t.highWaterMark||t.ended))return Z("read: emitReadable",t.length,t.ended),0===t.length&&t.ended?T(this):m(this),null;if(0===(e=p(e,t))&&t.ended)return 0===t.length&&T(this),null;var n=t.needReadable;Z("need readable",n),(0===t.length||t.length-e<t.highWaterMark)&&(n=!0,Z("length less than watermark",n)),t.ended||t.reading?(n=!1,Z("reading or ended",n)):n&&(Z("do read"),t.reading=!0,t.sync=!0,0===t.length&&(t.needReadable=!0),this._read(t.highWaterMark),t.sync=!1,t.reading||(e=p(r,t)));var i;return i=e>0?S(e,t):null,null===i?(t.needReadable=!0,e=0):t.length-=e,0===t.length&&(t.ended||(t.needReadable=!0),r!==e&&t.ended&&T(this)),null!==i&&this.emit("data",i),i},f.prototype._read=function(e){this.emit("error",new Error("_read() is not implemented"))},f.prototype.pipe=function(e,t){function r(e,t){Z("onunpipe"),e===h&&t&&!1===t.hasUnpiped&&(t.hasUnpiped=!0,a())}function i(){Z("onend"),e.end()}function a(){Z("cleanup"),e.removeListener("close",u),e.removeListener("finish",l),e.removeListener("drain",m),e.removeListener("error",f),e.removeListener("unpipe",r),h.removeListener("end",i),h.removeListener("end",c),h.removeListener("data",s),_=!0,!d.awaitDrain||e._writableState&&!e._writableState.needDrain||m()}function s(t){Z("ondata"),b=!1,!1!==e.write(t)||b||((1===d.pipesCount&&d.pipes===e||d.pipesCount>1&&-1!==I(d.pipes,e))&&!_&&(Z("false write response, pause",h._readableState.awaitDrain),h._readableState.awaitDrain++,b=!0),h.pause())}function f(t){Z("onerror",t),c(),e.removeListener("error",f),0===M(e,"error")&&e.emit("error",t)}function u(){e.removeListener("finish",l),c()}function l(){Z("onfinish"),e.removeListener("close",u),c()}function c(){Z("unpipe"),h.unpipe(e)}var h=this,d=this._readableState;switch(d.pipesCount){case 0:d.pipes=e;break;case 1:d.pipes=[d.pipes,e];break;default:d.pipes.push(e)}d.pipesCount+=1,Z("pipe count=%d opts=%j",d.pipesCount,t);var p=(!t||!1!==t.end)&&e!==n.stdout&&e!==n.stderr,g=p?i:c;d.endEmitted?D(g):h.once("end",g),e.on("unpipe",r);var m=y(h);e.on("drain",m);var _=!1,b=!1;return h.on("data",s),o(e,"error",f),e.once("close",u),e.once("finish",l),e.emit("pipe",h),d.flowing||(Z("pipe resume"),h.resume()),e},f.prototype.unpipe=function(e){var t=this._readableState,r={hasUnpiped:!1};if(0===t.pipesCount)return this;if(1===t.pipesCount)return e&&e!==t.pipes?this:(e||(e=t.pipes),t.pipes=null,t.pipesCount=0,t.flowing=!1,e&&e.emit("unpipe",this,r),this);if(!e){var n=t.pipes,i=t.pipesCount;t.pipes=null,t.pipesCount=0,t.flowing=!1;for(var a=0;a<i;a++)n[a].emit("unpipe",this,r);return this}var o=I(t.pipes,e);return-1===o?this:(t.pipes.splice(o,1),t.pipesCount-=1,1===t.pipesCount&&(t.pipes=t.pipes[0]),e.emit("unpipe",this,r),this)},f.prototype.on=function(e,t){var r=U.prototype.on.call(this,e,t);if("data"===e)!1!==this._readableState.flowing&&this.resume();else if("readable"===e){var n=this._readableState;n.endEmitted||n.readableListening||(n.readableListening=n.needReadable=!0,n.emittedReadable=!1,n.reading?n.length&&m(this):D(w,this))}return r},f.prototype.addListener=f.prototype.on,f.prototype.resume=function(){var e=this._readableState;return e.flowing||(Z("resume"),e.flowing=!0,E(this,e)),this},f.prototype.pause=function(){return Z("call pause flowing=%j",this._readableState.flowing),!1!==this._readableState.flowing&&(Z("pause"),this._readableState.flowing=!1,this.emit("pause")),this},f.prototype.wrap=function(e){var t=this._readableState,r=!1,n=this;e.on("end",function(){if(Z("wrapped end"),t.decoder&&!t.ended){var e=t.decoder.end();e&&e.length&&n.push(e)}n.push(null)}),e.on("data",function(i){if(Z("wrapped data"),t.decoder&&(i=t.decoder.write(i)),(!t.objectMode||null!==i&&void 0!==i)&&(t.objectMode||i&&i.length)){n.push(i)||(r=!0,e.pause())}});for(var i in e)void 0===this[i]&&"function"==typeof e[i]&&(this[i]=function(t){return function(){return e[t].apply(e,arguments)}}(i));for(var a=0;a<W.length;a++)e.on(W[a],n.emit.bind(n,W[a]));return n._read=function(t){Z("wrapped _read",t),r&&(r=!1,e.resume())},n},f._fromList=S}).call(t,r(2),r(3))},function(e,t){function r(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function n(e){return"function"==typeof e}function i(e){return"number"==typeof e}function a(e){return"object"==typeof e&&null!==e}function o(e){return void 0===e}e.exports=r,r.EventEmitter=r,r.prototype._events=void 0,r.prototype._maxListeners=void 0,r.defaultMaxListeners=10,r.prototype.setMaxListeners=function(e){if(!i(e)||e<0||isNaN(e))throw TypeError("n must be a positive number");return this._maxListeners=e,this},r.prototype.emit=function(e){var t,r,i,s,f,u;if(this._events||(this._events={}),"error"===e&&(!this._events.error||a(this._events.error)&&!this._events.error.length)){if((t=arguments[1])instanceof Error)throw t;var l=new Error('Uncaught, unspecified "error" event. ('+t+")");throw l.context=t,l}if(r=this._events[e],o(r))return!1;if(n(r))switch(arguments.length){case 1:r.call(this);break;case 2:r.call(this,arguments[1]);break;case 3:r.call(this,arguments[1],arguments[2]);break;default:s=Array.prototype.slice.call(arguments,1),r.apply(this,s)}else if(a(r))for(s=Array.prototype.slice.call(arguments,1),u=r.slice(),i=u.length,f=0;f<i;f++)u[f].apply(this,s);return!0},r.prototype.addListener=function(e,t){var i;if(!n(t))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,n(t.listener)?t.listener:t),this._events[e]?a(this._events[e])?this._events[e].push(t):this._events[e]=[this._events[e],t]:this._events[e]=t,a(this._events[e])&&!this._events[e].warned&&(i=o(this._maxListeners)?r.defaultMaxListeners:this._maxListeners)&&i>0&&this._events[e].length>i&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),"function"==typeof console.trace&&console.trace()),this},r.prototype.on=r.prototype.addListener,r.prototype.once=function(e,t){function r(){this.removeListener(e,r),i||(i=!0,t.apply(this,arguments))}if(!n(t))throw TypeError("listener must be a function");var i=!1;return r.listener=t,this.on(e,r),this},r.prototype.removeListener=function(e,t){var r,i,o,s;if(!n(t))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;if(r=this._events[e],o=r.length,i=-1,r===t||n(r.listener)&&r.listener===t)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,t);else if(a(r)){for(s=o;s-- >0;)if(r[s]===t||r[s].listener&&r[s].listener===t){i=s;break}if(i<0)return this;1===r.length?(r.length=0,delete this._events[e]):r.splice(i,1),this._events.removeListener&&this.emit("removeListener",e,t)}return this},r.prototype.removeAllListeners=function(e){var t,r;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[e]&&delete this._events[e],this;if(0===arguments.length){for(t in this._events)"removeListener"!==t&&this.removeAllListeners(t);return this.removeAllListeners("removeListener"),this._events={},this}if(r=this._events[e],n(r))this.removeListener(e,r);else if(r)for(;r.length;)this.removeListener(e,r[r.length-1]);return delete this._events[e],this},r.prototype.listeners=function(e){return this._events&&this._events[e]?n(this._events[e])?[this._events[e]]:this._events[e].slice():[]},r.prototype.listenerCount=function(e){if(this._events){var t=this._events[e];if(n(t))return 1;if(t)return t.length}return 0},r.listenerCount=function(e,t){return e.listenerCount(t)}},function(e,t,r){e.exports=r(32).EventEmitter},function(e,t,r){"use strict";function n(e,t){var r=this,n=this._readableState&&this._readableState.destroyed,i=this._writableState&&this._writableState.destroyed;if(n||i)return void(t?t(e):!e||this._writableState&&this._writableState.errorEmitted||o(a,this,e));this._readableState&&(this._readableState.destroyed=!0),this._writableState&&(this._writableState.destroyed=!0),this._destroy(e||null,function(e){!t&&e?(o(a,r,e),r._writableState&&(r._writableState.errorEmitted=!0)):t&&t(e)})}function i(){this._readableState&&(this._readableState.destroyed=!1,this._readableState.reading=!1,this._readableState.ended=!1,this._readableState.endEmitted=!1),this._writableState&&(this._writableState.destroyed=!1,this._writableState.ended=!1,this._writableState.ending=!1,this._writableState.finished=!1,this._writableState.errorEmitted=!1)}function a(e,t){e.emit("error",t)}var o=r(14);e.exports={destroy:n,undestroy:i}},function(e,t,r){"use strict";(function(t,n,i){function a(e){var t=this;this.next=null,this.entry=null,this.finish=function(){P(t,e)}}function o(e){return B.from(e)}function s(e){return B.isBuffer(e)||e instanceof M}function f(){}function u(e,t){T=T||r(4),e=e||{},this.objectMode=!!e.objectMode,t instanceof T&&(this.objectMode=this.objectMode||!!e.writableObjectMode);var n=e.highWaterMark,i=this.objectMode?16:16384;this.highWaterMark=n||0===n?n:i,this.highWaterMark=Math.floor(this.highWaterMark),this.finalCalled=!1,this.needDrain=!1,this.ending=!1,this.ended=!1,this.finished=!1,this.destroyed=!1;var o=!1===e.decodeStrings;this.decodeStrings=!o,this.defaultEncoding=e.defaultEncoding||"utf8",this.length=0,this.writing=!1,this.corked=0,this.sync=!0,this.bufferProcessing=!1,this.onwrite=function(e){b(t,e)},this.writecb=null,this.writelen=0,this.bufferedRequest=null,this.lastBufferedRequest=null,this.pendingcb=0,this.prefinished=!1,this.errorEmitted=!1,this.bufferedRequestCount=0,this.corkedRequestsFree=new a(this)}function l(e){if(T=T||r(4),!(F.call(l,this)||this instanceof T))return new l(e);this._writableState=new u(e,this),this.writable=!0,e&&("function"==typeof e.write&&(this._write=e.write),"function"==typeof e.writev&&(this._writev=e.writev),"function"==typeof e.destroy&&(this._destroy=e.destroy),"function"==typeof e.final&&(this._final=e.final)),L.call(this)}function c(e,t){var r=new Error("write after end");e.emit("error",r),O(t,r)}function h(e,t,r,n){var i=!0,a=!1;return null===r?a=new TypeError("May not write null values to stream"):"string"==typeof r||void 0===r||t.objectMode||(a=new TypeError("Invalid non-string/buffer chunk")),a&&(e.emit("error",a),O(n,a),i=!1),i}function d(e,t,r){return e.objectMode||!1===e.decodeStrings||"string"!=typeof t||(t=B.from(t,r)),t}function p(e,t,r,n,i,a){if(!r){var o=d(t,n,i);n!==o&&(r=!0,i="buffer",n=o)}var s=t.objectMode?1:n.length;t.length+=s;var f=t.length<t.highWaterMark;if(f||(t.needDrain=!0),t.writing||t.corked){var u=t.lastBufferedRequest;t.lastBufferedRequest={chunk:n,encoding:i,isBuf:r,callback:a,next:null},u?u.next=t.lastBufferedRequest:t.bufferedRequest=t.lastBufferedRequest,t.bufferedRequestCount+=1}else g(e,t,!1,s,n,i,a);return f}function g(e,t,r,n,i,a,o){t.writelen=n,t.writecb=o,t.writing=!0,t.sync=!0,r?e._writev(i,t.onwrite):e._write(i,a,t.onwrite),t.sync=!1}function m(e,t,r,n,i){--t.pendingcb,r?(O(i,n),O(S,e,t),e._writableState.errorEmitted=!0,e.emit("error",n)):(i(n),e._writableState.errorEmitted=!0,e.emit("error",n),S(e,t))}function _(e){e.writing=!1,e.writecb=null,e.length-=e.writelen,e.writelen=0}function b(e,t){var r=e._writableState,n=r.sync,i=r.writecb;if(_(r),t)m(e,r,n,t,i);else{var a=E(r);a||r.corked||r.bufferProcessing||!r.bufferedRequest||w(e,r),n?R(v,e,r,a,i):v(e,r,a,i)}}function v(e,t,r,n){r||y(e,t),t.pendingcb--,n(),S(e,t)}function y(e,t){0===t.length&&t.needDrain&&(t.needDrain=!1,e.emit("drain"))}function w(e,t){t.bufferProcessing=!0;var r=t.bufferedRequest;if(e._writev&&r&&r.next){var n=t.bufferedRequestCount,i=new Array(n),o=t.corkedRequestsFree;o.entry=r;for(var s=0,f=!0;r;)i[s]=r,r.isBuf||(f=!1),r=r.next,s+=1;i.allBuffers=f,g(e,t,!0,t.length,i,"",o.finish),t.pendingcb++,t.lastBufferedRequest=null,o.next?(t.corkedRequestsFree=o.next,o.next=null):t.corkedRequestsFree=new a(t)}else{for(;r;){var u=r.chunk,l=r.encoding,c=r.callback;if(g(e,t,!1,t.objectMode?1:u.length,u,l,c),r=r.next,t.writing)break}null===r&&(t.lastBufferedRequest=null)}t.bufferedRequestCount=0,t.bufferedRequest=r,t.bufferProcessing=!1}function E(e){return e.ending&&0===e.length&&null===e.bufferedRequest&&!e.finished&&!e.writing}function k(e,t){e._final(function(r){t.pendingcb--,r&&e.emit("error",r),t.prefinished=!0,e.emit("prefinish"),S(e,t)})}function x(e,t){t.prefinished||t.finalCalled||("function"==typeof e._final?(t.pendingcb++,t.finalCalled=!0,O(k,e,t)):(t.prefinished=!0,e.emit("prefinish")))}function S(e,t){var r=E(t);return r&&(x(e,t),0===t.pendingcb&&(t.finished=!0,e.emit("finish"))),r}function A(e,t,r){t.ending=!0,S(e,t),r&&(t.finished?O(r):e.once("finish",r)),t.ended=!0,e.writable=!1}function P(e,t,r){var n=e.entry;for(e.entry=null;n;){var i=n.callback;t.pendingcb--,i(r),n=n.next}t.corkedRequestsFree?t.corkedRequestsFree.next=e:t.corkedRequestsFree=e}var O=r(14);e.exports=l;var T,R=!t.browser&&["v0.10","v0.9."].indexOf(t.version.slice(0,5))>-1?n:O;l.WritableState=u;var I=r(6);I.inherits=r(7);var D={deprecate:r(61)},L=r(33),B=r(21).Buffer,M=i.Uint8Array||function(){},U=r(34);I.inherits(l,L),u.prototype.getBuffer=function(){for(var e=this.bufferedRequest,t=[];e;)t.push(e),e=e.next;return t},function(){try{Object.defineProperty(u.prototype,"buffer",{get:D.deprecate(function(){return this.getBuffer()},"_writableState.buffer is deprecated. Use _writableState.getBuffer instead.","DEP0003")})}catch(e){}}();var F;"function"==typeof Symbol&&Symbol.hasInstance&&"function"==typeof Function.prototype[Symbol.hasInstance]?(F=Function.prototype[Symbol.hasInstance],Object.defineProperty(l,Symbol.hasInstance,{value:function(e){return!!F.call(this,e)||e&&e._writableState instanceof u}})):F=function(e){return e instanceof this},l.prototype.pipe=function(){this.emit("error",new Error("Cannot pipe, not readable"))},l.prototype.write=function(e,t,r){var n=this._writableState,i=!1,a=s(e)&&!n.objectMode;return a&&!B.isBuffer(e)&&(e=o(e)),"function"==typeof t&&(r=t,t=null),a?t="buffer":t||(t=n.defaultEncoding),"function"!=typeof r&&(r=f),n.ended?c(this,r):(a||h(this,n,e,r))&&(n.pendingcb++,i=p(this,n,a,e,t,r)),i},l.prototype.cork=function(){this._writableState.corked++},l.prototype.uncork=function(){var e=this._writableState;e.corked&&(e.corked--,e.writing||e.corked||e.finished||e.bufferProcessing||!e.bufferedRequest||w(this,e))},l.prototype.setDefaultEncoding=function(e){if("string"==typeof e&&(e=e.toLowerCase()),!(["hex","utf8","utf-8","ascii","binary","base64","ucs2","ucs-2","utf16le","utf-16le","raw"].indexOf((e+"").toLowerCase())>-1))throw new TypeError("Unknown encoding: "+e);return this._writableState.defaultEncoding=e,this},l.prototype._write=function(e,t,r){r(new Error("_write() is not implemented"))},l.prototype._writev=null,l.prototype.end=function(e,t,r){var n=this._writableState;"function"==typeof e?(r=e,e=null,t=null):"function"==typeof t&&(r=t,t=null),null!==e&&void 0!==e&&this.write(e,t),n.corked&&(n.corked=1,this.uncork()),n.ending||n.finished||A(this,n,r)},Object.defineProperty(l.prototype,"destroyed",{get:function(){return void 0!==this._writableState&&this._writableState.destroyed},set:function(e){this._writableState&&(this._writableState.destroyed=e)}}),l.prototype.destroy=U.destroy,l.prototype._undestroy=U.undestroy,l.prototype._destroy=function(e,t){this.end(),t(e)}}).call(t,r(3),r(59).setImmediate,r(2))},function(e,t,r){function n(e){if(e&&!f(e))throw new Error("Unknown encoding: "+e)}function i(e){return e.toString(this.encoding)}function a(e){this.charReceived=e.length%2,this.charLength=this.charReceived?2:0}function o(e){this.charReceived=e.length%3,this.charLength=this.charReceived?3:0}var s=r(0).Buffer,f=s.isEncoding||function(e){switch(e&&e.toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":case"raw":return!0;default:return!1}},u=t.StringDecoder=function(e){switch(this.encoding=(e||"utf8").toLowerCase().replace(/[-_]/,""),n(e),this.encoding){case"utf8":this.surrogateSize=3;break;case"ucs2":case"utf16le":this.surrogateSize=2,this.detectIncompleteChar=a;break;case"base64":this.surrogateSize=3,this.detectIncompleteChar=o;break;default:return void(this.write=i)}this.charBuffer=new s(6),this.charReceived=0,this.charLength=0};u.prototype.write=function(e){for(var t="";this.charLength;){var r=e.length>=this.charLength-this.charReceived?this.charLength-this.charReceived:e.length;if(e.copy(this.charBuffer,this.charReceived,0,r),this.charReceived+=r,this.charReceived<this.charLength)return"";e=e.slice(r,e.length),t=this.charBuffer.slice(0,this.charLength).toString(this.encoding);var n=t.charCodeAt(t.length-1);if(!(n>=55296&&n<=56319)){if(this.charReceived=this.charLength=0,0===e.length)return t;break}this.charLength+=this.surrogateSize,t=""}this.detectIncompleteChar(e);var i=e.length;this.charLength&&(e.copy(this.charBuffer,0,e.length-this.charReceived,i),i-=this.charReceived),t+=e.toString(this.encoding,0,i);var i=t.length-1,n=t.charCodeAt(i);if(n>=55296&&n<=56319){var a=this.surrogateSize;return this.charLength+=a,this.charReceived+=a,this.charBuffer.copy(this.charBuffer,a,0,a),e.copy(this.charBuffer,0,0,a),t.substring(0,i)}return t},u.prototype.detectIncompleteChar=function(e){for(var t=e.length>=3?3:e.length;t>0;t--){var r=e[e.length-t];if(1==t&&r>>5==6){this.charLength=2;break}if(t<=2&&r>>4==14){this.charLength=3;break}if(t<=3&&r>>3==30){this.charLength=4;break}}this.charReceived=t},u.prototype.end=function(e){var t="";if(e&&e.length&&(t=this.write(e)),this.charReceived){var r=this.charReceived,n=this.charBuffer,i=this.encoding;t+=n.slice(0,r).toString(i)}return t}},function(e,t,r){"use strict";function n(e){this.afterTransform=function(t,r){return i(e,t,r)},this.needTransform=!1,this.transforming=!1,this.writecb=null,this.writechunk=null,this.writeencoding=null}function i(e,t,r){var n=e._transformState;n.transforming=!1;var i=n.writecb;if(!i)return e.emit("error",new Error("write callback called multiple times"));n.writechunk=null,n.writecb=null,null!==r&&void 0!==r&&e.push(r),i(t);var a=e._readableState;a.reading=!1,(a.needReadable||a.length<a.highWaterMark)&&e._read(a.highWaterMark)}function a(e){if(!(this instanceof a))return new a(e);s.call(this,e),this._transformState=new n(this);var t=this;this._readableState.needReadable=!0,this._readableState.sync=!1,e&&("function"==typeof e.transform&&(this._transform=e.transform),"function"==typeof e.flush&&(this._flush=e.flush)),this.once("prefinish",function(){"function"==typeof this._flush?this._flush(function(e,r){o(t,e,r)}):o(t)})}function o(e,t,r){if(t)return e.emit("error",t);null!==r&&void 0!==r&&e.push(r);var n=e._writableState,i=e._transformState;if(n.length)throw new Error("Calling transform done when ws.length != 0");if(i.transforming)throw new Error("Calling transform done when still transforming");return e.push(null)}e.exports=a;var s=r(4),f=r(6);f.inherits=r(7),f.inherits(a,s),a.prototype.push=function(e,t){return this._transformState.needTransform=!1,s.prototype.push.call(this,e,t)},a.prototype._transform=function(e,t,r){throw new Error("_transform() is not implemented")},a.prototype._write=function(e,t,r){var n=this._transformState;if(n.writecb=r,n.writechunk=e,n.writeencoding=t,!n.transforming){var i=this._readableState;(n.needTransform||i.needReadable||i.length<i.highWaterMark)&&this._read(i.highWaterMark)}},a.prototype._read=function(e){var t=this._transformState;null!==t.writechunk&&t.writecb&&!t.transforming?(t.transforming=!0,this._transform(t.writechunk,t.writeencoding,t.afterTransform)):t.needTransform=!0},a.prototype._destroy=function(e,t){var r=this;s.prototype._destroy.call(this,e,function(e){t(e),r.emit("close")})}},function(e,t,r){"use strict";e.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},function(e,t,r){"use strict";function n(e,t,r,n){for(var i=65535&e|0,a=e>>>16&65535|0,o=0;0!==r;){o=r>2e3?2e3:r,r-=o;do{i=i+t[n++]|0,a=a+i|0}while(--o);i%=65521,a%=65521}return i|a<<16|0}e.exports=n},function(e,t,r){"use strict";function n(e,t,r,n){var a=i,o=n+r;e^=-1;for(var s=n;s<o;s++)e=e>>>8^a[255&(e^t[s])];return-1^e}var i=function(){for(var e,t=[],r=0;r<256;r++){e=r;for(var n=0;n<8;n++)e=1&e?3988292384^e>>>1:e>>>1;t[r]=e}return t}();e.exports=n},function(e,t,r){(function(e,n){function i(e,r){var n={seen:[],stylize:o};return arguments.length>=3&&(n.depth=arguments[2]),arguments.length>=4&&(n.colors=arguments[3]),g(r)?n.showHidden=r:r&&t._extend(n,r),w(n.showHidden)&&(n.showHidden=!1),w(n.depth)&&(n.depth=2),w(n.colors)&&(n.colors=!1),w(n.customInspect)&&(n.customInspect=!0),n.colors&&(n.stylize=a),f(n,e,n.depth)}function a(e,t){var r=i.styles[t];return r?"["+i.colors[r][0]+"m"+e+"["+i.colors[r][1]+"m":e}function o(e,t){return e}function s(e){var t={};return e.forEach(function(e,r){t[e]=!0}),t}function f(e,r,n){if(e.customInspect&&r&&A(r.inspect)&&r.inspect!==t.inspect&&(!r.constructor||r.constructor.prototype!==r)){var i=r.inspect(n,e);return v(i)||(i=f(e,i,n)),i}var a=u(e,r);if(a)return a;var o=Object.keys(r),g=s(o);if(e.showHidden&&(o=Object.getOwnPropertyNames(r)),S(r)&&(o.indexOf("message")>=0||o.indexOf("description")>=0))return l(r);if(0===o.length){if(A(r)){var m=r.name?": "+r.name:"";return e.stylize("[Function"+m+"]","special")}if(E(r))return e.stylize(RegExp.prototype.toString.call(r),"regexp");if(x(r))return e.stylize(Date.prototype.toString.call(r),"date");if(S(r))return l(r)}var _="",b=!1,y=["{","}"];if(p(r)&&(b=!0,y=["[","]"]),A(r)){_=" [Function"+(r.name?": "+r.name:"")+"]"}if(E(r)&&(_=" "+RegExp.prototype.toString.call(r)),x(r)&&(_=" "+Date.prototype.toUTCString.call(r)),S(r)&&(_=" "+l(r)),0===o.length&&(!b||0==r.length))return y[0]+_+y[1];if(n<0)return E(r)?e.stylize(RegExp.prototype.toString.call(r),"regexp"):e.stylize("[Object]","special");e.seen.push(r);var w;return w=b?c(e,r,n,g,o):o.map(function(t){return h(e,r,n,g,t,b)}),e.seen.pop(),d(w,_,y)}function u(e,t){if(w(t))return e.stylize("undefined","undefined");if(v(t)){var r="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(r,"string")}return b(t)?e.stylize(""+t,"number"):g(t)?e.stylize(""+t,"boolean"):m(t)?e.stylize("null","null"):void 0}function l(e){return"["+Error.prototype.toString.call(e)+"]"}function c(e,t,r,n,i){for(var a=[],o=0,s=t.length;o<s;++o)I(t,String(o))?a.push(h(e,t,r,n,String(o),!0)):a.push("");return i.forEach(function(i){i.match(/^\d+$/)||a.push(h(e,t,r,n,i,!0))}),a}function h(e,t,r,n,i,a){var o,s,u;if(u=Object.getOwnPropertyDescriptor(t,i)||{value:t[i]},u.get?s=u.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):u.set&&(s=e.stylize("[Setter]","special")),I(n,i)||(o="["+i+"]"),s||(e.seen.indexOf(u.value)<0?(s=m(r)?f(e,u.value,null):f(e,u.value,r-1),s.indexOf("\n")>-1&&(s=a?s.split("\n").map(function(e){return"  "+e}).join("\n").substr(2):"\n"+s.split("\n").map(function(e){return"   "+e}).join("\n"))):s=e.stylize("[Circular]","special")),w(o)){if(a&&i.match(/^\d+$/))return s;o=JSON.stringify(""+i),o.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(o=o.substr(1,o.length-2),o=e.stylize(o,"name")):(o=o.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),o=e.stylize(o,"string"))}return o+": "+s}function d(e,t,r){var n=0;return e.reduce(function(e,t){return n++,t.indexOf("\n")>=0&&n++,e+t.replace(/\u001b\[\d\d?m/g,"").length+1},0)>60?r[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+r[1]:r[0]+t+" "+e.join(", ")+" "+r[1]}function p(e){return Array.isArray(e)}function g(e){return"boolean"==typeof e}function m(e){return null===e}function _(e){return null==e}function b(e){return"number"==typeof e}function v(e){return"string"==typeof e}function y(e){return"symbol"==typeof e}function w(e){return void 0===e}function E(e){return k(e)&&"[object RegExp]"===O(e)}function k(e){return"object"==typeof e&&null!==e}function x(e){return k(e)&&"[object Date]"===O(e)}function S(e){return k(e)&&("[object Error]"===O(e)||e instanceof Error)}function A(e){return"function"==typeof e}function P(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||void 0===e}function O(e){return Object.prototype.toString.call(e)}function T(e){return e<10?"0"+e.toString(10):e.toString(10)}function R(){var e=new Date,t=[T(e.getHours()),T(e.getMinutes()),T(e.getSeconds())].join(":");return[e.getDate(),M[e.getMonth()],t].join(" ")}function I(e,t){return Object.prototype.hasOwnProperty.call(e,t)}var D=/%[sdj%]/g;t.format=function(e){if(!v(e)){for(var t=[],r=0;r<arguments.length;r++)t.push(i(arguments[r]));return t.join(" ")}for(var r=1,n=arguments,a=n.length,o=String(e).replace(D,function(e){if("%%"===e)return"%";if(r>=a)return e;switch(e){case"%s":return String(n[r++]);case"%d":return Number(n[r++]);case"%j":try{return JSON.stringify(n[r++])}catch(e){return"[Circular]"}default:return e}}),s=n[r];r<a;s=n[++r])m(s)||!k(s)?o+=" "+s:o+=" "+i(s);return o},t.deprecate=function(r,i){function a(){if(!o){if(n.throwDeprecation)throw new Error(i);n.traceDeprecation?console.trace(i):console.error(i),o=!0}return r.apply(this,arguments)}if(w(e.process))return function(){return t.deprecate(r,i).apply(this,arguments)};if(!0===n.noDeprecation)return r;var o=!1;return a};var L,B={};t.debuglog=function(e){if(w(L)&&(L=n.env.NODE_DEBUG||""),e=e.toUpperCase(),!B[e])if(new RegExp("\\b"+e+"\\b","i").test(L)){var r=n.pid;B[e]=function(){var n=t.format.apply(t,arguments);console.error("%s %d: %s",e,r,n)}}else B[e]=function(){};return B[e]},t.inspect=i,i.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},i.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},t.isArray=p,t.isBoolean=g,t.isNull=m,t.isNullOrUndefined=_,t.isNumber=b,t.isString=v,t.isSymbol=y,t.isUndefined=w,t.isRegExp=E,t.isObject=k,t.isDate=x,t.isError=S,t.isFunction=A,t.isPrimitive=P,t.isBuffer=r(71);var M=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];t.log=function(){console.log("%s - %s",R(),t.format.apply(t,arguments))},t.inherits=r(72),t._extend=function(e,t){if(!t||!k(t))return e;for(var r=Object.keys(t),n=r.length;n--;)e[r[n]]=t[r[n]];return e}}).call(t,r(2),r(3))},function(e,t,r){"use strict";function n(e,t,r,n,i){if(n=n||t.basicOffsetTable,i=i||t.fragments,void 0===e)throw"dicomParser.readEncapsulatedImageFrame: missing required parameter 'dataSet'";if(void 0===t)throw"dicomParser.readEncapsulatedImageFrame: missing required parameter 'pixelDataElement'";if(void 0===r)throw"dicomParser.readEncapsulatedImageFrame: missing required parameter 'frameIndex'";if(void 0===n)throw"dicomParser.readEncapsulatedImageFrame: parameter 'pixelDataElement' does not have basicOffsetTable";if("x7fe00010"!==t.tag)throw"dicomParser.readEncapsulatedImageFrame: parameter 'pixelDataElement' refers to non pixel data tag (expected tag = x7fe00010)";if(!0!==t.encapsulatedPixelData)throw"dicomParser.readEncapsulatedImageFrame: parameter 'pixelDataElement' refers to pixel data element that does not have encapsulated pixel data";if(!0!==t.hadUndefinedLength)throw"dicomParser.readEncapsulatedImageFrame: parameter 'pixelDataElement' refers to pixel data element that does not have undefined length";if(void 0===t.fragments)throw"dicomParser.readEncapsulatedImageFrame: parameter 'pixelDataElement' refers to pixel data element that does not have fragments";if(0===n.length)throw"dicomParser.readEncapsulatedImageFrame: basicOffsetTable has zero entries";if(r<0)throw"dicomParser.readEncapsulatedImageFrame: parameter 'frameIndex' must be >= 0";if(r>=n.length)throw"dicomParser.readEncapsulatedImageFrame: parameter 'frameIndex' must be < basicOffsetTable.length";var f=n[r],u=o(i,f);if(void 0===u)throw"dicomParser.readEncapsulatedImageFrame: unable to find fragment that matches basic offset table entry";var l=s(r,n,i,u);return(0,a.default)(e,t,u,l,i)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;var i=r(22),a=function(e){return e&&e.__esModule?e:{default:e}}(i),o=function(e,t){for(var r=0;r<e.length;r++)if(e[r].offset===t)return r},s=function(e,t,r,n){if(e===t.length-1)return r.length-n;for(var i=t[e+1],a=n+1;a<r.length;a++)if(r[a].offset===i)return a-n;throw"dicomParser.calculateNumberOfFragmentsForFrame: could not find fragment with offset matching basic offset table"}},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=r(44);Object.keys(i).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return i[e]}})});var a=r(8);Object.keys(a).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return a[e]}})});var o=r(10);Object.keys(o).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}})});var s=r(19);Object.defineProperty(t,"alloc",{enumerable:!0,get:function(){return n(s).default}});var f=r(51);Object.defineProperty(t,"version",{enumerable:!0,get:function(){return n(f).default}});var u=r(29);Object.defineProperty(t,"bigEndianByteArrayParser",{enumerable:!0,get:function(){return n(u).default}});var l=r(12);Object.defineProperty(t,"ByteStream",{enumerable:!0,get:function(){return n(l).default}});var c=r(13);Object.defineProperty(t,"sharedCopy",{enumerable:!0,get:function(){return n(c).default}});var h=r(5);Object.defineProperty(t,"DataSet",{enumerable:!0,get:function(){return n(h).default}});var d=r(25);Object.defineProperty(t,"findAndSetUNElementLength",{enumerable:!0,get:function(){return n(d).default}});var p=r(24);Object.defineProperty(t,"findEndOfEncapsulatedElement",{enumerable:!0,get:function(){return n(p).default}});var g=r(17);Object.defineProperty(t,"findItemDelimitationItemAndSetElementLength",{enumerable:!0,get:function(){return n(g).default}});var m=r(20);Object.defineProperty(t,"littleEndianByteArrayParser",{enumerable:!0,get:function(){return n(m).default}});var _=r(52);Object.defineProperty(t,"parseDicom",{enumerable:!0,get:function(){return n(_).default}});var b=r(9);Object.defineProperty(t,"readDicomElementExplicit",{enumerable:!0,get:function(){return n(b).default}});var v=r(18);Object.defineProperty(t,"readDicomElementImplicit",{enumerable:!0,get:function(){return n(v).default}});var y=r(42);Object.defineProperty(t,"readEncapsulatedImageFrame",{enumerable:!0,get:function(){return n(y).default}});var w=r(74);Object.defineProperty(t,"readEncapsulatedPixelData",{enumerable:!0,get:function(){return n(w).default}});var E=r(22);Object.defineProperty(t,"readEncapsulatedPixelDataFromFragments",{enumerable:!0,get:function(){return n(E).default}});var k=r(30);Object.defineProperty(t,"readPart10Header",{enumerable:!0,get:function(){return n(k).default}});var x=r(26);Object.defineProperty(t,"readSequenceItemsExplicit",{enumerable:!0,get:function(){return n(x).default}});var S=r(27);Object.defineProperty(t,"readSequenceItemsImplicit",{enumerable:!0,get:function(){return n(S).default}});var A=r(11);Object.defineProperty(t,"readSequenceItem",{enumerable:!0,get:function(){return n(A).default}});var P=r(1);Object.defineProperty(t,"readTag",{enumerable:!0,get:function(){return n(P).default}})},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=r(16);Object.keys(i).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return i[e]}})});var a=r(45);Object.defineProperty(t,"parseTM",{enumerable:!0,get:function(){return n(a).default}});var o=r(46);Object.defineProperty(t,"parseDA",{enumerable:!0,get:function(){return n(o).default}});var s=r(23);Object.defineProperty(t,"explicitElementToString",{enumerable:!0,get:function(){return n(s).default}});var f=r(47);Object.defineProperty(t,"explicitDataSetToJS",{enumerable:!0,get:function(){return n(f).default}});var u=r(48);Object.defineProperty(t,"createJPEGBasicOffsetTable",{enumerable:!0,get:function(){return n(u).default}})},function(e,t,r){"use strict";function n(e,t){if(e.length>=2){var r=parseInt(e.substring(0,2),10),n=e.length>=4?parseInt(e.substring(2,4),10):void 0,i=e.length>=6?parseInt(e.substring(4,6),10):void 0,a=e.length>=8?parseInt(e.substring(7,13),10):void 0;if(t&&(isNaN(r)||void 0!==n&&isNaN(n)||void 0!==i&&isNaN(i)||void 0!==a&&isNaN(a)||r<0||r>23||n&&(n<0||n>59)||i&&(i<0||i>59)||a&&(a<0||a>999999)))throw"invalid TM '"+e+"'";return{hours:r,minutes:n,seconds:i,fractionalSeconds:a}}if(t)throw"invalid TM '"+e+"'"}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n},function(e,t,r){"use strict";function n(e,t){switch(e){case 2:return t%4==0&&t%100||t%400==0?29:28;case 9:case 4:case 6:case 11:return 30;default:return 31}}function i(e,t,r){return!isNaN(r)&&(t>0&&t<=12&&e>0&&e<=n(t,r))}function a(e,t){if(e&&8===e.length){var r=parseInt(e.substring(0,4),10),n=parseInt(e.substring(4,6),10),a=parseInt(e.substring(6,8),10);if(t&&!0!==i(a,n,r))throw"invalid DA '"+e+"'";return{year:r,month:n,day:a}}if(t)throw"invalid DA '"+e+"'"}Object.defineProperty(t,"__esModule",{value:!0}),t.default=a},function(e,t,r){"use strict";function n(e,t){if(void 0===e)throw"dicomParser.explicitDataSetToJS: missing required parameter dataSet";t=t||{omitPrivateAttibutes:!0,maxElementLength:128};var r={};for(var i in e.elements){var o=e.elements[i];if(!0!==t.omitPrivateAttibutes||!s.isPrivateTag(i))if(o.items){for(var f=[],u=0;u<o.items.length;u++)f.push(n(o.items[u].dataSet,t));r[i]=f}else{var l;l=void 0,o.length<t.maxElementLength&&(l=(0,a.default)(e,o)),r[i]=void 0!==l?l:{dataOffset:o.dataOffset,length:o.length}}}return r}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;var i=r(23),a=function(e){return e&&e.__esModule?e:{default:e}}(i),o=r(16),s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(o)},function(e,t,r){"use strict";function n(e,t){return 255===e.byteArray[t]&&217===e.byteArray[t+1]}function i(e,t,r){var i=t.fragments[r];return!(!n(e,i.position+i.length-2)&&!n(e,i.position+i.length-3))}function a(e,t,r){for(var n=r;n<t.fragments.length;n++)if(i(e,t,n))return n}function o(e,t,r){if(void 0===e)throw"dicomParser.createJPEGBasicOffsetTable: missing required parameter dataSet";if(void 0===t)throw"dicomParser.createJPEGBasicOffsetTable: missing required parameter pixelDataElement";if("x7fe00010"!==t.tag)throw"dicomParser.createJPEGBasicOffsetTable: parameter 'pixelDataElement' refers to non pixel data tag (expected tag = x7fe00010'";if(!0!==t.encapsulatedPixelData)throw"dicomParser.createJPEGBasicOffsetTable: parameter 'pixelDataElement' refers to pixel data element that does not have encapsulated pixel data";if(!0!==t.hadUndefinedLength)throw"dicomParser.createJPEGBasicOffsetTable: parameter 'pixelDataElement' refers to pixel data element that does not have encapsulated pixel data";if(void 0===t.basicOffsetTable)throw"dicomParser.createJPEGBasicOffsetTable: parameter 'pixelDataElement' refers to pixel data element that does not have encapsulated pixel data";if(void 0===t.fragments)throw"dicomParser.createJPEGBasicOffsetTable: parameter 'pixelDataElement' refers to pixel data element that does not have encapsulated pixel data";if(t.fragments.length<=0)throw"dicomParser.createJPEGBasicOffsetTable: parameter 'pixelDataElement' refers to pixel data element that does not have encapsulated pixel data";if(r&&r.length<=0)throw"dicomParser.createJPEGBasicOffsetTable: parameter 'fragments' must not be zero length";r=r||t.fragments;for(var n=[],i=0;;){n.push(t.fragments[i].offset);var o=a(e,t,i);if(void 0===o||o===t.fragments.length-1)return n;i=o+1}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o},function(e,t,r){"use strict";function n(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");return"="===e[t-2]?2:"="===e[t-1]?1:0}function i(e){return 3*e.length/4-n(e)}function a(e){var t,r,i,a,o,s=e.length;a=n(e),o=new c(3*s/4-a),r=a>0?s-4:s;var f=0;for(t=0;t<r;t+=4)i=l[e.charCodeAt(t)]<<18|l[e.charCodeAt(t+1)]<<12|l[e.charCodeAt(t+2)]<<6|l[e.charCodeAt(t+3)],o[f++]=i>>16&255,o[f++]=i>>8&255,o[f++]=255&i;return 2===a?(i=l[e.charCodeAt(t)]<<2|l[e.charCodeAt(t+1)]>>4,o[f++]=255&i):1===a&&(i=l[e.charCodeAt(t)]<<10|l[e.charCodeAt(t+1)]<<4|l[e.charCodeAt(t+2)]>>2,o[f++]=i>>8&255,o[f++]=255&i),o}function o(e){return u[e>>18&63]+u[e>>12&63]+u[e>>6&63]+u[63&e]}function s(e,t,r){for(var n,i=[],a=t;a<r;a+=3)n=(e[a]<<16)+(e[a+1]<<8)+e[a+2],i.push(o(n));return i.join("")}function f(e){for(var t,r=e.length,n=r%3,i="",a=[],o=0,f=r-n;o<f;o+=16383)a.push(s(e,o,o+16383>f?f:o+16383));return 1===n?(t=e[r-1],i+=u[t>>2],i+=u[t<<4&63],i+="=="):2===n&&(t=(e[r-2]<<8)+e[r-1],i+=u[t>>10],i+=u[t>>4&63],i+=u[t<<2&63],i+="="),a.push(i),a.join("")}t.byteLength=i,t.toByteArray=a,t.fromByteArray=f;for(var u=[],l=[],c="undefined"!=typeof Uint8Array?Uint8Array:Array,h="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",d=0,p=h.length;d<p;++d)u[d]=h[d],l[h.charCodeAt(d)]=d;l["-".charCodeAt(0)]=62,l["_".charCodeAt(0)]=63},function(e,t){t.read=function(e,t,r,n,i){var a,o,s=8*i-n-1,f=(1<<s)-1,u=f>>1,l=-7,c=r?i-1:0,h=r?-1:1,d=e[t+c];for(c+=h,a=d&(1<<-l)-1,d>>=-l,l+=s;l>0;a=256*a+e[t+c],c+=h,l-=8);for(o=a&(1<<-l)-1,a>>=-l,l+=n;l>0;o=256*o+e[t+c],c+=h,l-=8);if(0===a)a=1-u;else{if(a===f)return o?NaN:1/0*(d?-1:1);o+=Math.pow(2,n),a-=u}return(d?-1:1)*o*Math.pow(2,a-n)},t.write=function(e,t,r,n,i,a){var o,s,f,u=8*a-i-1,l=(1<<u)-1,c=l>>1,h=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,d=n?0:a-1,p=n?1:-1,g=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(s=isNaN(t)?1:0,o=l):(o=Math.floor(Math.log(t)/Math.LN2),t*(f=Math.pow(2,-o))<1&&(o--,f*=2),t+=o+c>=1?h/f:h*Math.pow(2,1-c),t*f>=2&&(o++,f/=2),o+c>=l?(s=0,o=l):o+c>=1?(s=(t*f-1)*Math.pow(2,i),o+=c):(s=t*Math.pow(2,c-1)*Math.pow(2,i),o=0));i>=8;e[r+d]=255&s,d+=p,s/=256,i-=8);for(o=o<<i|s,u+=i;u>0;e[r+d]=255&o,d+=p,o/=256,u-=8);e[r+d-p]|=128*g}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default="1.7.6"},function(e,t,r){"use strict";(function(e){function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function i(e){return e&&e.__esModule?e:{default:e}}function a(t,n){function i(e){if(void 0===e.elements.x00020010)throw"dicomParser.parseDicom: missing required meta header attribute 0002,0010";var r=e.elements.x00020010;return w.readFixedString(t,r.dataOffset,r.length)}function a(e){return"1.2.840.10008.1.2"!==e}function o(i,a){if("1.2.840.10008.1.2.1.99"===i){if(n&&n.inflater){var o=n.inflater(t,a);return new c.default(g.default,o,0)}if(void 0!==e&&this.module!==e){var f=r(54),l=(0,v.default)(t,a,t.length-a),h=f.inflateRawSync(l),d=(0,s.default)(t,h.length+a);return t.copy(d,0,0,a),h.copy(d,a),new c.default(g.default,d,0)}if("undefined"!=typeof pako){var p=t.slice(a),m=pako.inflateRaw(p),_=(0,s.default)(t,m.length+a);return _.set(t.slice(0,a),0),_.set(m,a),new c.default(g.default,_,0)}throw"dicomParser.parseDicom: no inflater available to handle deflate transfer syntax"}return"1.2.840.10008.1.2.2"===i?new c.default(u.default,t,a):new c.default(g.default,t,a)}function f(e,t){for(var r in e.elements)e.elements.hasOwnProperty(r)&&(t.elements[r]=e.elements[r]);return void 0!==e.warnings&&(t.warnings=e.warnings.concat(t.warnings)),t}function l(e){var t=i(e),r=a(t),s=o(t,e.position),f={},u=new d.default(s.byteArrayParser,s.byteArray,f);u.warnings=s.warnings;try{r?k.parseDicomDataSetExplicit(u,s,s.byteArray.length,n):k.parseDicomDataSetImplicit(u,s,s.byteArray.length,n)}catch(e){var l={exception:e,dataSet:u};throw l}return u}if(void 0===t)throw"dicomParser.parseDicom: missing required parameter 'byteArray'";return function(){var e=(0,_.default)(t,n);return f(e,l(e))}()}Object.defineProperty(t,"__esModule",{value:!0}),t.default=a;var o=r(19),s=i(o),f=r(29),u=i(f),l=r(12),c=i(l),h=r(5),d=i(h),p=r(20),g=i(p),m=r(30),_=i(m),b=r(13),v=i(b),y=r(10),w=n(y),E=r(8),k=n(E)}).call(t,r(53)(e))},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t,r){(function(e,n){function i(t,r,n){function i(){for(var e;null!==(e=t.read());)s.push(e),f+=e.length;t.once("readable",i)}function a(e){t.removeListener("end",o),t.removeListener("readable",i),n(e)}function o(){var r=e.concat(s,f);s=[],n(null,r),t.close()}var s=[],f=0;t.on("error",a),t.on("end",o),t.end(r),i()}function a(t,r){if("string"==typeof r&&(r=new e(r)),!e.isBuffer(r))throw new TypeError("Not a string or buffer");var n=g.Z_FINISH;return t._processChunk(r,n)}function o(e){if(!(this instanceof o))return new o(e);d.call(this,e,g.DEFLATE)}function s(e){if(!(this instanceof s))return new s(e);d.call(this,e,g.INFLATE)}function f(e){if(!(this instanceof f))return new f(e);d.call(this,e,g.GZIP)}function u(e){if(!(this instanceof u))return new u(e);d.call(this,e,g.GUNZIP)}function l(e){if(!(this instanceof l))return new l(e);d.call(this,e,g.DEFLATERAW)}function c(e){if(!(this instanceof c))return new c(e);d.call(this,e,g.INFLATERAW)}function h(e){if(!(this instanceof h))return new h(e);d.call(this,e,g.UNZIP)}function d(r,n){if(this._opts=r=r||{},this._chunkSize=r.chunkSize||t.Z_DEFAULT_CHUNK,p.call(this,r),r.flush&&r.flush!==g.Z_NO_FLUSH&&r.flush!==g.Z_PARTIAL_FLUSH&&r.flush!==g.Z_SYNC_FLUSH&&r.flush!==g.Z_FULL_FLUSH&&r.flush!==g.Z_FINISH&&r.flush!==g.Z_BLOCK)throw new Error("Invalid flush flag: "+r.flush);if(this._flushFlag=r.flush||g.Z_NO_FLUSH,r.chunkSize&&(r.chunkSize<t.Z_MIN_CHUNK||r.chunkSize>t.Z_MAX_CHUNK))throw new Error("Invalid chunk size: "+r.chunkSize);if(r.windowBits&&(r.windowBits<t.Z_MIN_WINDOWBITS||r.windowBits>t.Z_MAX_WINDOWBITS))throw new Error("Invalid windowBits: "+r.windowBits);if(r.level&&(r.level<t.Z_MIN_LEVEL||r.level>t.Z_MAX_LEVEL))throw new Error("Invalid compression level: "+r.level);if(r.memLevel&&(r.memLevel<t.Z_MIN_MEMLEVEL||r.memLevel>t.Z_MAX_MEMLEVEL))throw new Error("Invalid memLevel: "+r.memLevel);if(r.strategy&&r.strategy!=t.Z_FILTERED&&r.strategy!=t.Z_HUFFMAN_ONLY&&r.strategy!=t.Z_RLE&&r.strategy!=t.Z_FIXED&&r.strategy!=t.Z_DEFAULT_STRATEGY)throw new Error("Invalid strategy: "+r.strategy);if(r.dictionary&&!e.isBuffer(r.dictionary))throw new Error("Invalid dictionary: it should be a Buffer instance");this._binding=new g.Zlib(n);var i=this;this._hadError=!1,this._binding.onerror=function(e,r){i._binding=null,i._hadError=!0;var n=new Error(e);n.errno=r,n.code=t.codes[r],i.emit("error",n)};var a=t.Z_DEFAULT_COMPRESSION;"number"==typeof r.level&&(a=r.level);var o=t.Z_DEFAULT_STRATEGY;"number"==typeof r.strategy&&(o=r.strategy),this._binding.init(r.windowBits||t.Z_DEFAULT_WINDOWBITS,a,r.memLevel||t.Z_DEFAULT_MEMLEVEL,o,r.dictionary),this._buffer=new e(this._chunkSize),this._offset=0,this._closed=!1,this._level=a,this._strategy=o,this.once("end",this.close)}var p=r(55),g=r(63),m=r(41),_=r(73).ok;g.Z_MIN_WINDOWBITS=8,g.Z_MAX_WINDOWBITS=15,g.Z_DEFAULT_WINDOWBITS=15,g.Z_MIN_CHUNK=64,g.Z_MAX_CHUNK=1/0,g.Z_DEFAULT_CHUNK=16384,g.Z_MIN_MEMLEVEL=1,g.Z_MAX_MEMLEVEL=9,g.Z_DEFAULT_MEMLEVEL=8,g.Z_MIN_LEVEL=-1,g.Z_MAX_LEVEL=9,g.Z_DEFAULT_LEVEL=g.Z_DEFAULT_COMPRESSION,Object.keys(g).forEach(function(e){e.match(/^Z/)&&(t[e]=g[e])}),t.codes={Z_OK:g.Z_OK,Z_STREAM_END:g.Z_STREAM_END,Z_NEED_DICT:g.Z_NEED_DICT,Z_ERRNO:g.Z_ERRNO,Z_STREAM_ERROR:g.Z_STREAM_ERROR,Z_DATA_ERROR:g.Z_DATA_ERROR,Z_MEM_ERROR:g.Z_MEM_ERROR,Z_BUF_ERROR:g.Z_BUF_ERROR,Z_VERSION_ERROR:g.Z_VERSION_ERROR},Object.keys(t.codes).forEach(function(e){t.codes[t.codes[e]]=e}),t.Deflate=o,t.Inflate=s,t.Gzip=f,t.Gunzip=u,t.DeflateRaw=l,t.InflateRaw=c,t.Unzip=h,t.createDeflate=function(e){return new o(e)},t.createInflate=function(e){return new s(e)},t.createDeflateRaw=function(e){return new l(e)},t.createInflateRaw=function(e){return new c(e)},t.createGzip=function(e){return new f(e)},t.createGunzip=function(e){return new u(e)},t.createUnzip=function(e){return new h(e)},t.deflate=function(e,t,r){return"function"==typeof t&&(r=t,t={}),i(new o(t),e,r)},t.deflateSync=function(e,t){return a(new o(t),e)},t.gzip=function(e,t,r){return"function"==typeof t&&(r=t,t={}),i(new f(t),e,r)},t.gzipSync=function(e,t){return a(new f(t),e)},t.deflateRaw=function(e,t,r){return"function"==typeof t&&(r=t,t={}),i(new l(t),e,r)},t.deflateRawSync=function(e,t){return a(new l(t),e)},t.unzip=function(e,t,r){return"function"==typeof t&&(r=t,t={}),i(new h(t),e,r)},t.unzipSync=function(e,t){return a(new h(t),e)},t.inflate=function(e,t,r){return"function"==typeof t&&(r=t,t={}),i(new s(t),e,r)},t.inflateSync=function(e,t){return a(new s(t),e)},t.gunzip=function(e,t,r){return"function"==typeof t&&(r=t,t={}),i(new u(t),e,r)},t.gunzipSync=function(e,t){return a(new u(t),e)},t.inflateRaw=function(e,t,r){return"function"==typeof t&&(r=t,t={}),i(new c(t),e,r)},t.inflateRawSync=function(e,t){return a(new c(t),e)},m.inherits(d,p),d.prototype.params=function(e,r,i){if(e<t.Z_MIN_LEVEL||e>t.Z_MAX_LEVEL)throw new RangeError("Invalid compression level: "+e);if(r!=t.Z_FILTERED&&r!=t.Z_HUFFMAN_ONLY&&r!=t.Z_RLE&&r!=t.Z_FIXED&&r!=t.Z_DEFAULT_STRATEGY)throw new TypeError("Invalid strategy: "+r);if(this._level!==e||this._strategy!==r){var a=this;this.flush(g.Z_SYNC_FLUSH,function(){a._binding.params(e,r),a._hadError||(a._level=e,a._strategy=r,i&&i())})}else n.nextTick(i)},d.prototype.reset=function(){return this._binding.reset()},d.prototype._flush=function(t){this._transform(new e(0),"",t)},d.prototype.flush=function(t,r){var i=this._writableState;if(("function"==typeof t||void 0===t&&!r)&&(r=t,t=g.Z_FULL_FLUSH),i.ended)r&&n.nextTick(r);else if(i.ending)r&&this.once("end",r);else if(i.needDrain){var a=this;this.once("drain",function(){a.flush(r)})}else this._flushFlag=t,this.write(new e(0),"",r)},d.prototype.close=function(e){if(e&&n.nextTick(e),!this._closed){this._closed=!0,this._binding.close();var t=this;n.nextTick(function(){t.emit("close")})}},d.prototype._transform=function(t,r,n){var i,a=this._writableState,o=a.ending||a.ended,s=o&&(!t||a.length===t.length);if(null===!t&&!e.isBuffer(t))return n(new Error("invalid input"));s?i=g.Z_FINISH:(i=this._flushFlag,t.length>=a.length&&(this._flushFlag=this._opts.flush||g.Z_NO_FLUSH));this._processChunk(t,i,n)},d.prototype._processChunk=function(t,r,n){function i(l,d){if(!f._hadError){var p=o-d;if(_(p>=0,"have should not go down"),p>0){var g=f._buffer.slice(f._offset,f._offset+p);f._offset+=p,u?f.push(g):(c.push(g),h+=g.length)}if((0===d||f._offset>=f._chunkSize)&&(o=f._chunkSize,f._offset=0,f._buffer=new e(f._chunkSize)),0===d){if(s+=a-l,a=l,!u)return!0;var m=f._binding.write(r,t,s,a,f._buffer,f._offset,f._chunkSize);return m.callback=i,void(m.buffer=t)}if(!u)return!1;n()}}var a=t&&t.length,o=this._chunkSize-this._offset,s=0,f=this,u="function"==typeof n;if(!u){var l,c=[],h=0;this.on("error",function(e){l=e});do{var d=this._binding.writeSync(r,t,s,a,this._buffer,this._offset,o)}while(!this._hadError&&i(d[0],d[1]));if(this._hadError)throw l;var p=e.concat(c,h);return this.close(),p}var g=this._binding.write(r,t,s,a,this._buffer,this._offset,o);g.buffer=t,g.callback=i},m.inherits(o,d),m.inherits(s,d),m.inherits(f,d),m.inherits(u,d),m.inherits(l,d),m.inherits(c,d),m.inherits(h,d)}).call(t,r(0).Buffer,r(3))},function(e,t,r){e.exports=r(56).Transform},function(e,t,r){t=e.exports=r(31),t.Stream=t,t.Readable=t,t.Writable=r(35),t.Duplex=r(4),t.Transform=r(37),t.PassThrough=r(62)},function(e,t){},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t,r){e.copy(t,r)}var a=r(21).Buffer;e.exports=function(){function e(){n(this,e),this.head=null,this.tail=null,this.length=0}return e.prototype.push=function(e){var t={data:e,next:null};this.length>0?this.tail.next=t:this.head=t,this.tail=t,++this.length},e.prototype.unshift=function(e){var t={data:e,next:this.head};0===this.length&&(this.tail=t),this.head=t,++this.length},e.prototype.shift=function(){if(0!==this.length){var e=this.head.data;return 1===this.length?this.head=this.tail=null:this.head=this.head.next,--this.length,e}},e.prototype.clear=function(){this.head=this.tail=null,this.length=0},e.prototype.join=function(e){if(0===this.length)return"";for(var t=this.head,r=""+t.data;t=t.next;)r+=e+t.data;return r},e.prototype.concat=function(e){if(0===this.length)return a.alloc(0);if(1===this.length)return this.head.data;for(var t=a.allocUnsafe(e>>>0),r=this.head,n=0;r;)i(r.data,t,n),n+=r.data.length,r=r.next;return t},e}()},function(e,t,r){function n(e,t){this._id=e,this._clearFn=t}var i=Function.prototype.apply;t.setTimeout=function(){return new n(i.call(setTimeout,window,arguments),clearTimeout)},t.setInterval=function(){return new n(i.call(setInterval,window,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},n.prototype.unref=n.prototype.ref=function(){},n.prototype.close=function(){this._clearFn.call(window,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},r(60),t.setImmediate=setImmediate,t.clearImmediate=clearImmediate},function(e,t,r){(function(e,t){!function(e,r){"use strict";function n(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),r=0;r<t.length;r++)t[r]=arguments[r+1];var n={callback:e,args:t};return u[f]=n,s(f),f++}function i(e){delete u[e]}function a(e){var t=e.callback,n=e.args;switch(n.length){case 0:t();break;case 1:t(n[0]);break;case 2:t(n[0],n[1]);break;case 3:t(n[0],n[1],n[2]);break;default:t.apply(r,n)}}function o(e){if(l)setTimeout(o,0,e);else{var t=u[e];if(t){l=!0;try{a(t)}finally{i(e),l=!1}}}}if(!e.setImmediate){var s,f=1,u={},l=!1,c=e.document,h=Object.getPrototypeOf&&Object.getPrototypeOf(e);h=h&&h.setTimeout?h:e,"[object process]"==={}.toString.call(e.process)?function(){s=function(e){t.nextTick(function(){o(e)})}}():function(){if(e.postMessage&&!e.importScripts){var t=!0,r=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=r,t}}()?function(){var t="setImmediate$"+Math.random()+"$",r=function(r){r.source===e&&"string"==typeof r.data&&0===r.data.indexOf(t)&&o(+r.data.slice(t.length))};e.addEventListener?e.addEventListener("message",r,!1):e.attachEvent("onmessage",r),s=function(r){e.postMessage(t+r,"*")}}():e.MessageChannel?function(){var e=new MessageChannel;e.port1.onmessage=function(e){o(e.data)},s=function(t){e.port2.postMessage(t)}}():c&&"onreadystatechange"in c.createElement("script")?function(){var e=c.documentElement;s=function(t){var r=c.createElement("script");r.onreadystatechange=function(){o(t),r.onreadystatechange=null,e.removeChild(r),r=null},e.appendChild(r)}}():function(){s=function(e){setTimeout(o,0,e)}}(),h.setImmediate=n,h.clearImmediate=i}}("undefined"==typeof self?void 0===e?this:e:self)}).call(t,r(2),r(3))},function(e,t,r){(function(t){function r(e,t){function r(){if(!i){if(n("throwDeprecation"))throw new Error(t);n("traceDeprecation")?console.trace(t):console.warn(t),i=!0}return e.apply(this,arguments)}if(n("noDeprecation"))return e;var i=!1;return r}function n(e){try{if(!t.localStorage)return!1}catch(e){return!1}var r=t.localStorage[e];return null!=r&&"true"===String(r).toLowerCase()}e.exports=r}).call(t,r(2))},function(e,t,r){"use strict";function n(e){if(!(this instanceof n))return new n(e);i.call(this,e)}e.exports=n;var i=r(37),a=r(6);a.inherits=r(7),a.inherits(n,i),n.prototype._transform=function(e,t,r){r(null,e)}},function(e,t,r){(function(e,n){function i(e){if(e<t.DEFLATE||e>t.UNZIP)throw new TypeError("Bad argument");this.mode=e,this.init_done=!1,this.write_in_progress=!1,this.pending_close=!1,this.windowBits=0,this.level=0,this.memLevel=0,this.strategy=0,this.dictionary=null}function a(e,t){for(var r=0;r<e.length;r++)this[t+r]=e[r]}var o=r(38),s=r(64),f=r(65),u=r(67),l=r(70);for(var c in l)t[c]=l[c];t.NONE=0,t.DEFLATE=1,t.INFLATE=2,t.GZIP=3,t.GUNZIP=4,t.DEFLATERAW=5,t.INFLATERAW=6,t.UNZIP=7,i.prototype.init=function(e,r,n,i,a){switch(this.windowBits=e,this.level=r,this.memLevel=n,this.strategy=i,this.mode!==t.GZIP&&this.mode!==t.GUNZIP||(this.windowBits+=16),this.mode===t.UNZIP&&(this.windowBits+=32),this.mode!==t.DEFLATERAW&&this.mode!==t.INFLATERAW||(this.windowBits=-this.windowBits),this.strm=new s,this.mode){case t.DEFLATE:case t.GZIP:case t.DEFLATERAW:var o=f.deflateInit2(this.strm,this.level,t.Z_DEFLATED,this.windowBits,this.memLevel,this.strategy);break;case t.INFLATE:case t.GUNZIP:case t.INFLATERAW:case t.UNZIP:var o=u.inflateInit2(this.strm,this.windowBits);break;default:throw new Error("Unknown mode "+this.mode)}if(o!==t.Z_OK)return void this._error(o);this.write_in_progress=!1,this.init_done=!0},i.prototype.params=function(){throw new Error("deflateParams Not supported")},i.prototype._writeCheck=function(){if(!this.init_done)throw new Error("write before init");if(this.mode===t.NONE)throw new Error("already finalized");if(this.write_in_progress)throw new Error("write already in progress");if(this.pending_close)throw new Error("close is pending")},i.prototype.write=function(t,r,n,i,a,o,s){this._writeCheck(),this.write_in_progress=!0;var f=this;return e.nextTick(function(){f.write_in_progress=!1;var e=f._write(t,r,n,i,a,o,s);f.callback(e[0],e[1]),f.pending_close&&f.close()}),this},i.prototype.writeSync=function(e,t,r,n,i,a,o){return this._writeCheck(),this._write(e,t,r,n,i,a,o)},i.prototype._write=function(e,r,i,o,s,l,c){if(this.write_in_progress=!0,e!==t.Z_NO_FLUSH&&e!==t.Z_PARTIAL_FLUSH&&e!==t.Z_SYNC_FLUSH&&e!==t.Z_FULL_FLUSH&&e!==t.Z_FINISH&&e!==t.Z_BLOCK)throw new Error("Invalid flush value");null==r&&(r=new n(0),o=0,i=0),s._set?s.set=s._set:s.set=a;var h=this.strm;switch(h.avail_in=o,h.input=r,h.next_in=i,h.avail_out=c,h.output=s,h.next_out=l,this.mode){case t.DEFLATE:case t.GZIP:case t.DEFLATERAW:var d=f.deflate(h,e);break;case t.UNZIP:case t.INFLATE:case t.GUNZIP:case t.INFLATERAW:var d=u.inflate(h,e);break;default:throw new Error("Unknown mode "+this.mode)}return d!==t.Z_STREAM_END&&d!==t.Z_OK&&this._error(d),this.write_in_progress=!1,[h.avail_in,h.avail_out]},i.prototype.close=function(){if(this.write_in_progress)return void(this.pending_close=!0);this.pending_close=!1,this.mode===t.DEFLATE||this.mode===t.GZIP||this.mode===t.DEFLATERAW?f.deflateEnd(this.strm):u.inflateEnd(this.strm),this.mode=t.NONE},i.prototype.reset=function(){switch(this.mode){case t.DEFLATE:case t.DEFLATERAW:var e=f.deflateReset(this.strm);break;case t.INFLATE:case t.INFLATERAW:var e=u.inflateReset(this.strm)}e!==t.Z_OK&&this._error(e)},i.prototype._error=function(e){this.onerror(o[e]+": "+this.strm.msg,e),this.write_in_progress=!1,this.pending_close&&this.close()},t.Zlib=i}).call(t,r(3),r(0).Buffer)},function(e,t,r){"use strict";function n(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}e.exports=n},function(e,t,r){"use strict";function n(e,t){return e.msg=B[t],t}function i(e){return(e<<1)-(e>4?9:0)}function a(e){for(var t=e.length;--t>=0;)e[t]=0}function o(e){var t=e.state,r=t.pending;r>e.avail_out&&(r=e.avail_out),0!==r&&(R.arraySet(e.output,t.pending_buf,t.pending_out,r,e.next_out),e.next_out+=r,t.pending_out+=r,e.total_out+=r,e.avail_out-=r,t.pending-=r,0===t.pending&&(t.pending_out=0))}function s(e,t){I._tr_flush_block(e,e.block_start>=0?e.block_start:-1,e.strstart-e.block_start,t),e.block_start=e.strstart,o(e.strm)}function f(e,t){e.pending_buf[e.pending++]=t}function u(e,t){e.pending_buf[e.pending++]=t>>>8&255,e.pending_buf[e.pending++]=255&t}function l(e,t,r,n){var i=e.avail_in;return i>n&&(i=n),0===i?0:(e.avail_in-=i,R.arraySet(t,e.input,e.next_in,i,r),1===e.state.wrap?e.adler=D(e.adler,t,i,r):2===e.state.wrap&&(e.adler=L(e.adler,t,i,r)),e.next_in+=i,e.total_in+=i,i)}function c(e,t){var r,n,i=e.max_chain_length,a=e.strstart,o=e.prev_length,s=e.nice_match,f=e.strstart>e.w_size-ue?e.strstart-(e.w_size-ue):0,u=e.window,l=e.w_mask,c=e.prev,h=e.strstart+fe,d=u[a+o-1],p=u[a+o];e.prev_length>=e.good_match&&(i>>=2),s>e.lookahead&&(s=e.lookahead);do{if(r=t,u[r+o]===p&&u[r+o-1]===d&&u[r]===u[a]&&u[++r]===u[a+1]){a+=2,r++;do{}while(u[++a]===u[++r]&&u[++a]===u[++r]&&u[++a]===u[++r]&&u[++a]===u[++r]&&u[++a]===u[++r]&&u[++a]===u[++r]&&u[++a]===u[++r]&&u[++a]===u[++r]&&a<h);if(n=fe-(h-a),a=h-fe,n>o){if(e.match_start=t,o=n,n>=s)break;d=u[a+o-1],p=u[a+o]}}}while((t=c[t&l])>f&&0!=--i);return o<=e.lookahead?o:e.lookahead}function h(e){var t,r,n,i,a,o=e.w_size;do{if(i=e.window_size-e.lookahead-e.strstart,e.strstart>=o+(o-ue)){R.arraySet(e.window,e.window,o,o,0),e.match_start-=o,e.strstart-=o,e.block_start-=o,r=e.hash_size,t=r;do{n=e.head[--t],e.head[t]=n>=o?n-o:0}while(--r);r=o,t=r;do{n=e.prev[--t],e.prev[t]=n>=o?n-o:0}while(--r);i+=o}if(0===e.strm.avail_in)break;if(r=l(e.strm,e.window,e.strstart+e.lookahead,i),e.lookahead+=r,e.lookahead+e.insert>=se)for(a=e.strstart-e.insert,e.ins_h=e.window[a],e.ins_h=(e.ins_h<<e.hash_shift^e.window[a+1])&e.hash_mask;e.insert&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[a+se-1])&e.hash_mask,e.prev[a&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=a,a++,e.insert--,!(e.lookahead+e.insert<se)););}while(e.lookahead<ue&&0!==e.strm.avail_in)}function d(e,t){var r=65535;for(r>e.pending_buf_size-5&&(r=e.pending_buf_size-5);;){if(e.lookahead<=1){if(h(e),0===e.lookahead&&t===M)return be;if(0===e.lookahead)break}e.strstart+=e.lookahead,e.lookahead=0;var n=e.block_start+r;if((0===e.strstart||e.strstart>=n)&&(e.lookahead=e.strstart-n,e.strstart=n,s(e,!1),0===e.strm.avail_out))return be;if(e.strstart-e.block_start>=e.w_size-ue&&(s(e,!1),0===e.strm.avail_out))return be}return e.insert=0,t===j?(s(e,!0),0===e.strm.avail_out?ye:we):(e.strstart>e.block_start&&(s(e,!1),e.strm.avail_out),be)}function p(e,t){for(var r,n;;){if(e.lookahead<ue){if(h(e),e.lookahead<ue&&t===M)return be;if(0===e.lookahead)break}if(r=0,e.lookahead>=se&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+se-1])&e.hash_mask,r=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),0!==r&&e.strstart-r<=e.w_size-ue&&(e.match_length=c(e,r)),e.match_length>=se)if(n=I._tr_tally(e,e.strstart-e.match_start,e.match_length-se),e.lookahead-=e.match_length,e.match_length<=e.max_lazy_match&&e.lookahead>=se){e.match_length--;do{e.strstart++,e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+se-1])&e.hash_mask,r=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart}while(0!=--e.match_length);e.strstart++}else e.strstart+=e.match_length,e.match_length=0,e.ins_h=e.window[e.strstart],e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+1])&e.hash_mask;else n=I._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++;if(n&&(s(e,!1),0===e.strm.avail_out))return be}return e.insert=e.strstart<se-1?e.strstart:se-1,t===j?(s(e,!0),0===e.strm.avail_out?ye:we):e.last_lit&&(s(e,!1),0===e.strm.avail_out)?be:ve}function g(e,t){for(var r,n,i;;){if(e.lookahead<ue){if(h(e),e.lookahead<ue&&t===M)return be;if(0===e.lookahead)break}if(r=0,e.lookahead>=se&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+se-1])&e.hash_mask,r=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),e.prev_length=e.match_length,e.prev_match=e.match_start,e.match_length=se-1,0!==r&&e.prev_length<e.max_lazy_match&&e.strstart-r<=e.w_size-ue&&(e.match_length=c(e,r),e.match_length<=5&&(e.strategy===H||e.match_length===se&&e.strstart-e.match_start>4096)&&(e.match_length=se-1)),e.prev_length>=se&&e.match_length<=e.prev_length){i=e.strstart+e.lookahead-se,n=I._tr_tally(e,e.strstart-1-e.prev_match,e.prev_length-se),e.lookahead-=e.prev_length-1,e.prev_length-=2;do{++e.strstart<=i&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+se-1])&e.hash_mask,r=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart)}while(0!=--e.prev_length);if(e.match_available=0,e.match_length=se-1,e.strstart++,n&&(s(e,!1),0===e.strm.avail_out))return be}else if(e.match_available){if(n=I._tr_tally(e,0,e.window[e.strstart-1]),n&&s(e,!1),e.strstart++,e.lookahead--,0===e.strm.avail_out)return be}else e.match_available=1,e.strstart++,e.lookahead--}return e.match_available&&(n=I._tr_tally(e,0,e.window[e.strstart-1]),e.match_available=0),e.insert=e.strstart<se-1?e.strstart:se-1,t===j?(s(e,!0),0===e.strm.avail_out?ye:we):e.last_lit&&(s(e,!1),0===e.strm.avail_out)?be:ve}function m(e,t){for(var r,n,i,a,o=e.window;;){if(e.lookahead<=fe){if(h(e),e.lookahead<=fe&&t===M)return be;if(0===e.lookahead)break}if(e.match_length=0,e.lookahead>=se&&e.strstart>0&&(i=e.strstart-1,(n=o[i])===o[++i]&&n===o[++i]&&n===o[++i])){a=e.strstart+fe;do{}while(n===o[++i]&&n===o[++i]&&n===o[++i]&&n===o[++i]&&n===o[++i]&&n===o[++i]&&n===o[++i]&&n===o[++i]&&i<a);e.match_length=fe-(a-i),e.match_length>e.lookahead&&(e.match_length=e.lookahead)}if(e.match_length>=se?(r=I._tr_tally(e,1,e.match_length-se),e.lookahead-=e.match_length,e.strstart+=e.match_length,e.match_length=0):(r=I._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++),r&&(s(e,!1),0===e.strm.avail_out))return be}return e.insert=0,t===j?(s(e,!0),0===e.strm.avail_out?ye:we):e.last_lit&&(s(e,!1),0===e.strm.avail_out)?be:ve}function _(e,t){for(var r;;){if(0===e.lookahead&&(h(e),0===e.lookahead)){if(t===M)return be;break}if(e.match_length=0,r=I._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++,r&&(s(e,!1),0===e.strm.avail_out))return be}return e.insert=0,t===j?(s(e,!0),0===e.strm.avail_out?ye:we):e.last_lit&&(s(e,!1),0===e.strm.avail_out)?be:ve}function b(e,t,r,n,i){this.good_length=e,this.max_lazy=t,this.nice_length=r,this.max_chain=n,this.func=i}function v(e){e.window_size=2*e.w_size,a(e.head),e.max_lazy_match=T[e.level].max_lazy,e.good_match=T[e.level].good_length,e.nice_match=T[e.level].nice_length,e.max_chain_length=T[e.level].max_chain,e.strstart=0,e.block_start=0,e.lookahead=0,e.insert=0,e.match_length=e.prev_length=se-1,e.match_available=0,e.ins_h=0}function y(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=$,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new R.Buf16(2*ae),this.dyn_dtree=new R.Buf16(2*(2*ne+1)),this.bl_tree=new R.Buf16(2*(2*ie+1)),a(this.dyn_ltree),a(this.dyn_dtree),a(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new R.Buf16(oe+1),this.heap=new R.Buf16(2*re+1),a(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new R.Buf16(2*re+1),a(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function w(e){var t;return e&&e.state?(e.total_in=e.total_out=0,e.data_type=X,t=e.state,t.pending=0,t.pending_out=0,t.wrap<0&&(t.wrap=-t.wrap),t.status=t.wrap?ce:me,e.adler=2===t.wrap?0:1,t.last_flush=M,I._tr_init(t),N):n(e,C)}function E(e){var t=w(e);return t===N&&v(e.state),t}function k(e,t){return e&&e.state?2!==e.state.wrap?C:(e.state.gzhead=t,N):C}function x(e,t,r,i,a,o){if(!e)return C;var s=1;if(t===W&&(t=6),i<0?(s=0,i=-i):i>15&&(s=2,i-=16),a<1||a>Q||r!==$||i<8||i>15||t<0||t>9||o<0||o>J)return n(e,C);8===i&&(i=9);var f=new y;return e.state=f,f.strm=e,f.wrap=s,f.gzhead=null,f.w_bits=i,f.w_size=1<<f.w_bits,f.w_mask=f.w_size-1,f.hash_bits=a+7,f.hash_size=1<<f.hash_bits,f.hash_mask=f.hash_size-1,f.hash_shift=~~((f.hash_bits+se-1)/se),f.window=new R.Buf8(2*f.w_size),f.head=new R.Buf16(f.hash_size),f.prev=new R.Buf16(f.w_size),f.lit_bufsize=1<<a+6,f.pending_buf_size=4*f.lit_bufsize,f.pending_buf=new R.Buf8(f.pending_buf_size),f.d_buf=1*f.lit_bufsize,f.l_buf=3*f.lit_bufsize,f.level=t,f.strategy=o,f.method=r,E(e)}function S(e,t){return x(e,t,$,ee,te,K)}function A(e,t){var r,s,l,c;if(!e||!e.state||t>z||t<0)return e?n(e,C):C;if(s=e.state,!e.output||!e.input&&0!==e.avail_in||s.status===_e&&t!==j)return n(e,0===e.avail_out?Y:C);if(s.strm=e,r=s.last_flush,s.last_flush=t,s.status===ce)if(2===s.wrap)e.adler=0,f(s,31),f(s,139),f(s,8),s.gzhead?(f(s,(s.gzhead.text?1:0)+(s.gzhead.hcrc?2:0)+(s.gzhead.extra?4:0)+(s.gzhead.name?8:0)+(s.gzhead.comment?16:0)),f(s,255&s.gzhead.time),f(s,s.gzhead.time>>8&255),f(s,s.gzhead.time>>16&255),f(s,s.gzhead.time>>24&255),f(s,9===s.level?2:s.strategy>=G||s.level<2?4:0),f(s,255&s.gzhead.os),s.gzhead.extra&&s.gzhead.extra.length&&(f(s,255&s.gzhead.extra.length),f(s,s.gzhead.extra.length>>8&255)),s.gzhead.hcrc&&(e.adler=L(e.adler,s.pending_buf,s.pending,0)),s.gzindex=0,s.status=he):(f(s,0),f(s,0),f(s,0),f(s,0),f(s,0),f(s,9===s.level?2:s.strategy>=G||s.level<2?4:0),f(s,Ee),s.status=me);else{var h=$+(s.w_bits-8<<4)<<8,d=-1;d=s.strategy>=G||s.level<2?0:s.level<6?1:6===s.level?2:3,h|=d<<6,0!==s.strstart&&(h|=le),h+=31-h%31,s.status=me,u(s,h),0!==s.strstart&&(u(s,e.adler>>>16),u(s,65535&e.adler)),e.adler=1}if(s.status===he)if(s.gzhead.extra){for(l=s.pending;s.gzindex<(65535&s.gzhead.extra.length)&&(s.pending!==s.pending_buf_size||(s.gzhead.hcrc&&s.pending>l&&(e.adler=L(e.adler,s.pending_buf,s.pending-l,l)),o(e),l=s.pending,s.pending!==s.pending_buf_size));)f(s,255&s.gzhead.extra[s.gzindex]),s.gzindex++;s.gzhead.hcrc&&s.pending>l&&(e.adler=L(e.adler,s.pending_buf,s.pending-l,l)),s.gzindex===s.gzhead.extra.length&&(s.gzindex=0,s.status=de)}else s.status=de;if(s.status===de)if(s.gzhead.name){l=s.pending;do{if(s.pending===s.pending_buf_size&&(s.gzhead.hcrc&&s.pending>l&&(e.adler=L(e.adler,s.pending_buf,s.pending-l,l)),o(e),l=s.pending,s.pending===s.pending_buf_size)){c=1;break}c=s.gzindex<s.gzhead.name.length?255&s.gzhead.name.charCodeAt(s.gzindex++):0,f(s,c)}while(0!==c);s.gzhead.hcrc&&s.pending>l&&(e.adler=L(e.adler,s.pending_buf,s.pending-l,l)),0===c&&(s.gzindex=0,s.status=pe)}else s.status=pe;if(s.status===pe)if(s.gzhead.comment){l=s.pending;do{if(s.pending===s.pending_buf_size&&(s.gzhead.hcrc&&s.pending>l&&(e.adler=L(e.adler,s.pending_buf,s.pending-l,l)),o(e),l=s.pending,s.pending===s.pending_buf_size)){c=1;break}c=s.gzindex<s.gzhead.comment.length?255&s.gzhead.comment.charCodeAt(s.gzindex++):0,f(s,c)}while(0!==c);s.gzhead.hcrc&&s.pending>l&&(e.adler=L(e.adler,s.pending_buf,s.pending-l,l)),0===c&&(s.status=ge)}else s.status=ge;if(s.status===ge&&(s.gzhead.hcrc?(s.pending+2>s.pending_buf_size&&o(e),s.pending+2<=s.pending_buf_size&&(f(s,255&e.adler),f(s,e.adler>>8&255),e.adler=0,s.status=me)):s.status=me),0!==s.pending){if(o(e),0===e.avail_out)return s.last_flush=-1,N}else if(0===e.avail_in&&i(t)<=i(r)&&t!==j)return n(e,Y);if(s.status===_e&&0!==e.avail_in)return n(e,Y);if(0!==e.avail_in||0!==s.lookahead||t!==M&&s.status!==_e){var p=s.strategy===G?_(s,t):s.strategy===V?m(s,t):T[s.level].func(s,t);if(p!==ye&&p!==we||(s.status=_e),p===be||p===ye)return 0===e.avail_out&&(s.last_flush=-1),N;if(p===ve&&(t===U?I._tr_align(s):t!==z&&(I._tr_stored_block(s,0,0,!1),t===F&&(a(s.head),0===s.lookahead&&(s.strstart=0,s.block_start=0,s.insert=0))),o(e),0===e.avail_out))return s.last_flush=-1,N}return t!==j?N:s.wrap<=0?Z:(2===s.wrap?(f(s,255&e.adler),f(s,e.adler>>8&255),f(s,e.adler>>16&255),f(s,e.adler>>24&255),f(s,255&e.total_in),f(s,e.total_in>>8&255),f(s,e.total_in>>16&255),f(s,e.total_in>>24&255)):(u(s,e.adler>>>16),u(s,65535&e.adler)),o(e),s.wrap>0&&(s.wrap=-s.wrap),0!==s.pending?N:Z)}function P(e){var t;return e&&e.state?(t=e.state.status)!==ce&&t!==he&&t!==de&&t!==pe&&t!==ge&&t!==me&&t!==_e?n(e,C):(e.state=null,t===me?n(e,q):N):C}function O(e,t){var r,n,i,o,s,f,u,l,c=t.length;if(!e||!e.state)return C;if(r=e.state,2===(o=r.wrap)||1===o&&r.status!==ce||r.lookahead)return C;for(1===o&&(e.adler=D(e.adler,t,c,0)),r.wrap=0,c>=r.w_size&&(0===o&&(a(r.head),r.strstart=0,r.block_start=0,r.insert=0),l=new R.Buf8(r.w_size),R.arraySet(l,t,c-r.w_size,r.w_size,0),t=l,c=r.w_size),s=e.avail_in,f=e.next_in,u=e.input,e.avail_in=c,e.next_in=0,e.input=t,h(r);r.lookahead>=se;){n=r.strstart,i=r.lookahead-(se-1);do{r.ins_h=(r.ins_h<<r.hash_shift^r.window[n+se-1])&r.hash_mask,r.prev[n&r.w_mask]=r.head[r.ins_h],r.head[r.ins_h]=n,n++}while(--i);r.strstart=n,r.lookahead=se-1,h(r)}return r.strstart+=r.lookahead,r.block_start=r.strstart,r.insert=r.lookahead,r.lookahead=0,r.match_length=r.prev_length=se-1,r.match_available=0,e.next_in=f,e.input=u,e.avail_in=s,r.wrap=o,N}var T,R=r(15),I=r(66),D=r(39),L=r(40),B=r(38),M=0,U=1,F=3,j=4,z=5,N=0,Z=1,C=-2,q=-3,Y=-5,W=-1,H=1,G=2,V=3,J=4,K=0,X=2,$=8,Q=9,ee=15,te=8,re=286,ne=30,ie=19,ae=2*re+1,oe=15,se=3,fe=258,ue=fe+se+1,le=32,ce=42,he=69,de=73,pe=91,ge=103,me=113,_e=666,be=1,ve=2,ye=3,we=4,Ee=3;T=[new b(0,0,0,0,d),new b(4,4,8,4,p),new b(4,5,16,8,p),new b(4,6,32,32,p),new b(4,4,16,16,g),new b(8,16,32,32,g),new b(8,16,128,128,g),new b(8,32,128,256,g),new b(32,128,258,1024,g),new b(32,258,258,4096,g)],t.deflateInit=S,t.deflateInit2=x,t.deflateReset=E,t.deflateResetKeep=w,t.deflateSetHeader=k,t.deflate=A,t.deflateEnd=P,t.deflateSetDictionary=O,t.deflateInfo="pako deflate (from Nodeca project)"},function(e,t,r){"use strict";function n(e){for(var t=e.length;--t>=0;)e[t]=0}function i(e,t,r,n,i){this.static_tree=e,this.extra_bits=t,this.extra_base=r,this.elems=n,this.max_length=i,this.has_stree=e&&e.length}function a(e,t){this.dyn_tree=e,this.max_code=0,this.stat_desc=t}function o(e){return e<256?ae[e]:ae[256+(e>>>7)]}function s(e,t){e.pending_buf[e.pending++]=255&t,e.pending_buf[e.pending++]=t>>>8&255}function f(e,t,r){e.bi_valid>G-r?(e.bi_buf|=t<<e.bi_valid&65535,s(e,e.bi_buf),e.bi_buf=t>>G-e.bi_valid,e.bi_valid+=r-G):(e.bi_buf|=t<<e.bi_valid&65535,e.bi_valid+=r)}function u(e,t,r){f(e,r[2*t],r[2*t+1])}function l(e,t){var r=0;do{r|=1&e,e>>>=1,r<<=1}while(--t>0);return r>>>1}function c(e){16===e.bi_valid?(s(e,e.bi_buf),e.bi_buf=0,e.bi_valid=0):e.bi_valid>=8&&(e.pending_buf[e.pending++]=255&e.bi_buf,e.bi_buf>>=8,e.bi_valid-=8)}function h(e,t){var r,n,i,a,o,s,f=t.dyn_tree,u=t.max_code,l=t.stat_desc.static_tree,c=t.stat_desc.has_stree,h=t.stat_desc.extra_bits,d=t.stat_desc.extra_base,p=t.stat_desc.max_length,g=0;for(a=0;a<=H;a++)e.bl_count[a]=0;for(f[2*e.heap[e.heap_max]+1]=0,r=e.heap_max+1;r<W;r++)n=e.heap[r],a=f[2*f[2*n+1]+1]+1,a>p&&(a=p,g++),f[2*n+1]=a,n>u||(e.bl_count[a]++,o=0,n>=d&&(o=h[n-d]),s=f[2*n],e.opt_len+=s*(a+o),c&&(e.static_len+=s*(l[2*n+1]+o)));if(0!==g){do{for(a=p-1;0===e.bl_count[a];)a--;e.bl_count[a]--,e.bl_count[a+1]+=2,e.bl_count[p]--,g-=2}while(g>0);for(a=p;0!==a;a--)for(n=e.bl_count[a];0!==n;)(i=e.heap[--r])>u||(f[2*i+1]!==a&&(e.opt_len+=(a-f[2*i+1])*f[2*i],f[2*i+1]=a),n--)}}function d(e,t,r){var n,i,a=new Array(H+1),o=0;for(n=1;n<=H;n++)a[n]=o=o+r[n-1]<<1;for(i=0;i<=t;i++){var s=e[2*i+1];0!==s&&(e[2*i]=l(a[s]++,s))}}function p(){var e,t,r,n,a,o=new Array(H+1);for(r=0,n=0;n<N-1;n++)for(se[n]=r,e=0;e<1<<Q[n];e++)oe[r++]=n;for(oe[r-1]=n,a=0,n=0;n<16;n++)for(fe[n]=a,e=0;e<1<<ee[n];e++)ae[a++]=n;for(a>>=7;n<q;n++)for(fe[n]=a<<7,e=0;e<1<<ee[n]-7;e++)ae[256+a++]=n;for(t=0;t<=H;t++)o[t]=0;for(e=0;e<=143;)ne[2*e+1]=8,e++,o[8]++;for(;e<=255;)ne[2*e+1]=9,e++,o[9]++;for(;e<=279;)ne[2*e+1]=7,e++,o[7]++;for(;e<=287;)ne[2*e+1]=8,e++,o[8]++;for(d(ne,C+1,o),e=0;e<q;e++)ie[2*e+1]=5,ie[2*e]=l(e,5);ue=new i(ne,Q,Z+1,C,H),le=new i(ie,ee,0,q,H),ce=new i(new Array(0),te,0,Y,V)}function g(e){var t;for(t=0;t<C;t++)e.dyn_ltree[2*t]=0;for(t=0;t<q;t++)e.dyn_dtree[2*t]=0;for(t=0;t<Y;t++)e.bl_tree[2*t]=0;e.dyn_ltree[2*J]=1,e.opt_len=e.static_len=0,e.last_lit=e.matches=0}function m(e){e.bi_valid>8?s(e,e.bi_buf):e.bi_valid>0&&(e.pending_buf[e.pending++]=e.bi_buf),e.bi_buf=0,e.bi_valid=0}function _(e,t,r,n){m(e),n&&(s(e,r),s(e,~r)),D.arraySet(e.pending_buf,e.window,t,r,e.pending),e.pending+=r}function b(e,t,r,n){var i=2*t,a=2*r;return e[i]<e[a]||e[i]===e[a]&&n[t]<=n[r]}function v(e,t,r){for(var n=e.heap[r],i=r<<1;i<=e.heap_len&&(i<e.heap_len&&b(t,e.heap[i+1],e.heap[i],e.depth)&&i++,!b(t,n,e.heap[i],e.depth));)e.heap[r]=e.heap[i],r=i,i<<=1;e.heap[r]=n}function y(e,t,r){var n,i,a,s,l=0;if(0!==e.last_lit)do{n=e.pending_buf[e.d_buf+2*l]<<8|e.pending_buf[e.d_buf+2*l+1],i=e.pending_buf[e.l_buf+l],l++,0===n?u(e,i,t):(a=oe[i],u(e,a+Z+1,t),s=Q[a],0!==s&&(i-=se[a],f(e,i,s)),n--,a=o(n),u(e,a,r),0!==(s=ee[a])&&(n-=fe[a],f(e,n,s)))}while(l<e.last_lit);u(e,J,t)}function w(e,t){var r,n,i,a=t.dyn_tree,o=t.stat_desc.static_tree,s=t.stat_desc.has_stree,f=t.stat_desc.elems,u=-1;for(e.heap_len=0,e.heap_max=W,r=0;r<f;r++)0!==a[2*r]?(e.heap[++e.heap_len]=u=r,e.depth[r]=0):a[2*r+1]=0;for(;e.heap_len<2;)i=e.heap[++e.heap_len]=u<2?++u:0,a[2*i]=1,e.depth[i]=0,e.opt_len--,s&&(e.static_len-=o[2*i+1]);for(t.max_code=u,r=e.heap_len>>1;r>=1;r--)v(e,a,r);i=f;do{r=e.heap[1],e.heap[1]=e.heap[e.heap_len--],v(e,a,1),n=e.heap[1],e.heap[--e.heap_max]=r,e.heap[--e.heap_max]=n,a[2*i]=a[2*r]+a[2*n],e.depth[i]=(e.depth[r]>=e.depth[n]?e.depth[r]:e.depth[n])+1,a[2*r+1]=a[2*n+1]=i,e.heap[1]=i++,v(e,a,1)}while(e.heap_len>=2);e.heap[--e.heap_max]=e.heap[1],h(e,t),d(a,u,e.bl_count)}function E(e,t,r){var n,i,a=-1,o=t[1],s=0,f=7,u=4;for(0===o&&(f=138,u=3),t[2*(r+1)+1]=65535,n=0;n<=r;n++)i=o,o=t[2*(n+1)+1],++s<f&&i===o||(s<u?e.bl_tree[2*i]+=s:0!==i?(i!==a&&e.bl_tree[2*i]++,e.bl_tree[2*K]++):s<=10?e.bl_tree[2*X]++:e.bl_tree[2*$]++,s=0,a=i,0===o?(f=138,u=3):i===o?(f=6,u=3):(f=7,u=4))}function k(e,t,r){var n,i,a=-1,o=t[1],s=0,l=7,c=4;for(0===o&&(l=138,c=3),n=0;n<=r;n++)if(i=o,o=t[2*(n+1)+1],!(++s<l&&i===o)){if(s<c)do{u(e,i,e.bl_tree)}while(0!=--s);else 0!==i?(i!==a&&(u(e,i,e.bl_tree),s--),u(e,K,e.bl_tree),f(e,s-3,2)):s<=10?(u(e,X,e.bl_tree),f(e,s-3,3)):(u(e,$,e.bl_tree),f(e,s-11,7));s=0,a=i,0===o?(l=138,c=3):i===o?(l=6,c=3):(l=7,c=4)}}function x(e){var t;for(E(e,e.dyn_ltree,e.l_desc.max_code),E(e,e.dyn_dtree,e.d_desc.max_code),w(e,e.bl_desc),t=Y-1;t>=3&&0===e.bl_tree[2*re[t]+1];t--);return e.opt_len+=3*(t+1)+5+5+4,t}function S(e,t,r,n){var i;for(f(e,t-257,5),f(e,r-1,5),f(e,n-4,4),i=0;i<n;i++)f(e,e.bl_tree[2*re[i]+1],3);k(e,e.dyn_ltree,t-1),k(e,e.dyn_dtree,r-1)}function A(e){var t,r=4093624447;for(t=0;t<=31;t++,r>>>=1)if(1&r&&0!==e.dyn_ltree[2*t])return B;if(0!==e.dyn_ltree[18]||0!==e.dyn_ltree[20]||0!==e.dyn_ltree[26])return M;for(t=32;t<Z;t++)if(0!==e.dyn_ltree[2*t])return M;return B}function P(e){he||(p(),he=!0),e.l_desc=new a(e.dyn_ltree,ue),e.d_desc=new a(e.dyn_dtree,le),e.bl_desc=new a(e.bl_tree,ce),e.bi_buf=0,e.bi_valid=0,g(e)}function O(e,t,r,n){f(e,(F<<1)+(n?1:0),3),_(e,t,r,!0)}function T(e){f(e,j<<1,3),u(e,J,ne),c(e)}function R(e,t,r,n){var i,a,o=0;e.level>0?(e.strm.data_type===U&&(e.strm.data_type=A(e)),w(e,e.l_desc),w(e,e.d_desc),o=x(e),i=e.opt_len+3+7>>>3,(a=e.static_len+3+7>>>3)<=i&&(i=a)):i=a=r+5,r+4<=i&&-1!==t?O(e,t,r,n):e.strategy===L||a===i?(f(e,(j<<1)+(n?1:0),3),y(e,ne,ie)):(f(e,(z<<1)+(n?1:0),3),S(e,e.l_desc.max_code+1,e.d_desc.max_code+1,o+1),y(e,e.dyn_ltree,e.dyn_dtree)),g(e),n&&m(e)}function I(e,t,r){return e.pending_buf[e.d_buf+2*e.last_lit]=t>>>8&255,e.pending_buf[e.d_buf+2*e.last_lit+1]=255&t,e.pending_buf[e.l_buf+e.last_lit]=255&r,e.last_lit++,0===t?e.dyn_ltree[2*r]++:(e.matches++,t--,e.dyn_ltree[2*(oe[r]+Z+1)]++,e.dyn_dtree[2*o(t)]++),e.last_lit===e.lit_bufsize-1}var D=r(15),L=4,B=0,M=1,U=2,F=0,j=1,z=2,N=29,Z=256,C=Z+1+N,q=30,Y=19,W=2*C+1,H=15,G=16,V=7,J=256,K=16,X=17,$=18,Q=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],ee=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],te=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],re=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],ne=new Array(2*(C+2));n(ne);var ie=new Array(2*q);n(ie);var ae=new Array(512);n(ae);var oe=new Array(256);n(oe);var se=new Array(N);n(se);var fe=new Array(q);n(fe);var ue,le,ce,he=!1;t._tr_init=P,t._tr_stored_block=O,t._tr_flush_block=R,t._tr_tally=I,t._tr_align=T},function(e,t,r){"use strict";function n(e){return(e>>>24&255)+(e>>>8&65280)+((65280&e)<<8)+((255&e)<<24)}function i(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new b.Buf16(320),this.work=new b.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function a(e){var t;return e&&e.state?(t=e.state,e.total_in=e.total_out=t.total=0,e.msg="",t.wrap&&(e.adler=1&t.wrap),t.mode=F,t.last=0,t.havedict=0,t.dmax=32768,t.head=null,t.hold=0,t.bits=0,t.lencode=t.lendyn=new b.Buf32(ge),t.distcode=t.distdyn=new b.Buf32(me),t.sane=1,t.back=-1,T):D}function o(e){var t;return e&&e.state?(t=e.state,t.wsize=0,t.whave=0,t.wnext=0,a(e)):D}function s(e,t){var r,n;return e&&e.state?(n=e.state,t<0?(r=0,t=-t):(r=1+(t>>4),t<48&&(t&=15)),t&&(t<8||t>15)?D:(null!==n.window&&n.wbits!==t&&(n.window=null),n.wrap=r,n.wbits=t,o(e))):D}function f(e,t){var r,n;return e?(n=new i,e.state=n,n.window=null,r=s(e,t),r!==T&&(e.state=null),r):D}function u(e){return f(e,_e)}function l(e){if(be){var t;for(m=new b.Buf32(512),_=new b.Buf32(32),t=0;t<144;)e.lens[t++]=8;for(;t<256;)e.lens[t++]=9;for(;t<280;)e.lens[t++]=7;for(;t<288;)e.lens[t++]=8;for(E(x,e.lens,0,288,m,0,e.work,{bits:9}),t=0;t<32;)e.lens[t++]=5;E(S,e.lens,0,32,_,0,e.work,{bits:5}),be=!1}e.lencode=m,e.lenbits=9,e.distcode=_,e.distbits=5}function c(e,t,r,n){var i,a=e.state;return null===a.window&&(a.wsize=1<<a.wbits,a.wnext=0,a.whave=0,a.window=new b.Buf8(a.wsize)),n>=a.wsize?(b.arraySet(a.window,t,r-a.wsize,a.wsize,0),a.wnext=0,a.whave=a.wsize):(i=a.wsize-a.wnext,i>n&&(i=n),b.arraySet(a.window,t,r-n,i,a.wnext),n-=i,n?(b.arraySet(a.window,t,r-n,n,0),a.wnext=n,a.whave=a.wsize):(a.wnext+=i,a.wnext===a.wsize&&(a.wnext=0),a.whave<a.wsize&&(a.whave+=i))),0}function h(e,t){var r,i,a,o,s,f,u,h,d,p,g,m,_,ge,me,_e,be,ve,ye,we,Ee,ke,xe,Se,Ae=0,Pe=new b.Buf8(4),Oe=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!e||!e.state||!e.output||!e.input&&0!==e.avail_in)return D;r=e.state,r.mode===V&&(r.mode=J),s=e.next_out,a=e.output,u=e.avail_out,o=e.next_in,i=e.input,f=e.avail_in,h=r.hold,d=r.bits,p=f,g=u,ke=T;e:for(;;)switch(r.mode){case F:if(0===r.wrap){r.mode=J;break}for(;d<16;){if(0===f)break e;f--,h+=i[o++]<<d,d+=8}if(2&r.wrap&&35615===h){r.check=0,Pe[0]=255&h,Pe[1]=h>>>8&255,r.check=y(r.check,Pe,2,0),h=0,d=0,r.mode=j;break}if(r.flags=0,r.head&&(r.head.done=!1),!(1&r.wrap)||(((255&h)<<8)+(h>>8))%31){e.msg="incorrect header check",r.mode=he;break}if((15&h)!==U){e.msg="unknown compression method",r.mode=he;break}if(h>>>=4,d-=4,Ee=8+(15&h),0===r.wbits)r.wbits=Ee;else if(Ee>r.wbits){e.msg="invalid window size",r.mode=he;break}r.dmax=1<<Ee,e.adler=r.check=1,r.mode=512&h?H:V,h=0,d=0;break;case j:for(;d<16;){if(0===f)break e;f--,h+=i[o++]<<d,d+=8}if(r.flags=h,(255&r.flags)!==U){e.msg="unknown compression method",r.mode=he;break}if(57344&r.flags){e.msg="unknown header flags set",r.mode=he;break}r.head&&(r.head.text=h>>8&1),512&r.flags&&(Pe[0]=255&h,Pe[1]=h>>>8&255,r.check=y(r.check,Pe,2,0)),h=0,d=0,r.mode=z;case z:for(;d<32;){if(0===f)break e;f--,h+=i[o++]<<d,d+=8}r.head&&(r.head.time=h),512&r.flags&&(Pe[0]=255&h,Pe[1]=h>>>8&255,Pe[2]=h>>>16&255,Pe[3]=h>>>24&255,r.check=y(r.check,Pe,4,0)),h=0,d=0,r.mode=N;case N:for(;d<16;){if(0===f)break e;f--,h+=i[o++]<<d,d+=8}r.head&&(r.head.xflags=255&h,r.head.os=h>>8),512&r.flags&&(Pe[0]=255&h,Pe[1]=h>>>8&255,r.check=y(r.check,Pe,2,0)),h=0,d=0,r.mode=Z;case Z:if(1024&r.flags){for(;d<16;){if(0===f)break e;f--,h+=i[o++]<<d,d+=8}r.length=h,r.head&&(r.head.extra_len=h),512&r.flags&&(Pe[0]=255&h,Pe[1]=h>>>8&255,r.check=y(r.check,Pe,2,0)),h=0,d=0}else r.head&&(r.head.extra=null);r.mode=C;case C:if(1024&r.flags&&(m=r.length,m>f&&(m=f),m&&(r.head&&(Ee=r.head.extra_len-r.length,r.head.extra||(r.head.extra=new Array(r.head.extra_len)),b.arraySet(r.head.extra,i,o,m,Ee)),512&r.flags&&(r.check=y(r.check,i,m,o)),f-=m,o+=m,r.length-=m),r.length))break e;r.length=0,r.mode=q;case q:if(2048&r.flags){if(0===f)break e;m=0;do{Ee=i[o+m++],r.head&&Ee&&r.length<65536&&(r.head.name+=String.fromCharCode(Ee))}while(Ee&&m<f);if(512&r.flags&&(r.check=y(r.check,i,m,o)),f-=m,o+=m,Ee)break e}else r.head&&(r.head.name=null);r.length=0,r.mode=Y;case Y:if(4096&r.flags){if(0===f)break e;m=0;do{Ee=i[o+m++],r.head&&Ee&&r.length<65536&&(r.head.comment+=String.fromCharCode(Ee))}while(Ee&&m<f);if(512&r.flags&&(r.check=y(r.check,i,m,o)),f-=m,o+=m,Ee)break e}else r.head&&(r.head.comment=null);r.mode=W;case W:if(512&r.flags){for(;d<16;){if(0===f)break e;f--,h+=i[o++]<<d,d+=8}if(h!==(65535&r.check)){e.msg="header crc mismatch",r.mode=he;break}h=0,d=0}r.head&&(r.head.hcrc=r.flags>>9&1,r.head.done=!0),e.adler=r.check=0,r.mode=V;break;case H:for(;d<32;){if(0===f)break e;f--,h+=i[o++]<<d,d+=8}e.adler=r.check=n(h),h=0,d=0,r.mode=G;case G:if(0===r.havedict)return e.next_out=s,e.avail_out=u,e.next_in=o,e.avail_in=f,r.hold=h,r.bits=d,I;e.adler=r.check=1,r.mode=V;case V:if(t===P||t===O)break e;case J:if(r.last){h>>>=7&d,d-=7&d,r.mode=ue;break}for(;d<3;){if(0===f)break e;f--,h+=i[o++]<<d,d+=8}switch(r.last=1&h,h>>>=1,d-=1,3&h){case 0:r.mode=K;break;case 1:if(l(r),r.mode=re,t===O){h>>>=2,d-=2;break e}break;case 2:r.mode=Q;break;case 3:e.msg="invalid block type",r.mode=he}h>>>=2,d-=2;break;case K:for(h>>>=7&d,d-=7&d;d<32;){if(0===f)break e;f--,h+=i[o++]<<d,d+=8}if((65535&h)!=(h>>>16^65535)){e.msg="invalid stored block lengths",r.mode=he;break}if(r.length=65535&h,h=0,d=0,r.mode=X,t===O)break e;case X:r.mode=$;case $:if(m=r.length){if(m>f&&(m=f),m>u&&(m=u),0===m)break e;b.arraySet(a,i,o,m,s),f-=m,o+=m,u-=m,s+=m,r.length-=m;break}r.mode=V;break;case Q:for(;d<14;){if(0===f)break e;f--,h+=i[o++]<<d,d+=8}if(r.nlen=257+(31&h),h>>>=5,d-=5,r.ndist=1+(31&h),h>>>=5,d-=5,r.ncode=4+(15&h),h>>>=4,d-=4,r.nlen>286||r.ndist>30){e.msg="too many length or distance symbols",r.mode=he;break}r.have=0,r.mode=ee;case ee:for(;r.have<r.ncode;){for(;d<3;){if(0===f)break e;f--,h+=i[o++]<<d,d+=8}r.lens[Oe[r.have++]]=7&h,h>>>=3,d-=3}for(;r.have<19;)r.lens[Oe[r.have++]]=0;if(r.lencode=r.lendyn,r.lenbits=7,xe={bits:r.lenbits},ke=E(k,r.lens,0,19,r.lencode,0,r.work,xe),r.lenbits=xe.bits,ke){e.msg="invalid code lengths set",r.mode=he;break}r.have=0,r.mode=te;case te:for(;r.have<r.nlen+r.ndist;){for(;Ae=r.lencode[h&(1<<r.lenbits)-1],me=Ae>>>24,_e=Ae>>>16&255,be=65535&Ae,!(me<=d);){if(0===f)break e;f--,h+=i[o++]<<d,d+=8}if(be<16)h>>>=me,d-=me,r.lens[r.have++]=be;else{if(16===be){for(Se=me+2;d<Se;){if(0===f)break e;f--,h+=i[o++]<<d,d+=8}if(h>>>=me,d-=me,0===r.have){e.msg="invalid bit length repeat",r.mode=he;break}Ee=r.lens[r.have-1],m=3+(3&h),h>>>=2,d-=2}else if(17===be){for(Se=me+3;d<Se;){if(0===f)break e;f--,h+=i[o++]<<d,d+=8}h>>>=me,d-=me,Ee=0,m=3+(7&h),h>>>=3,d-=3}else{for(Se=me+7;d<Se;){if(0===f)break e;f--,h+=i[o++]<<d,d+=8}h>>>=me,d-=me,Ee=0,m=11+(127&h),h>>>=7,d-=7}if(r.have+m>r.nlen+r.ndist){e.msg="invalid bit length repeat",r.mode=he;break}for(;m--;)r.lens[r.have++]=Ee}}if(r.mode===he)break;if(0===r.lens[256]){e.msg="invalid code -- missing end-of-block",r.mode=he;break}if(r.lenbits=9,xe={bits:r.lenbits},ke=E(x,r.lens,0,r.nlen,r.lencode,0,r.work,xe),r.lenbits=xe.bits,ke){e.msg="invalid literal/lengths set",r.mode=he;break}if(r.distbits=6,r.distcode=r.distdyn,xe={bits:r.distbits},ke=E(S,r.lens,r.nlen,r.ndist,r.distcode,0,r.work,xe),r.distbits=xe.bits,ke){e.msg="invalid distances set",r.mode=he;break}if(r.mode=re,t===O)break e;case re:r.mode=ne;case ne:if(f>=6&&u>=258){e.next_out=s,e.avail_out=u,e.next_in=o,e.avail_in=f,r.hold=h,r.bits=d,w(e,g),s=e.next_out,a=e.output,u=e.avail_out,o=e.next_in,i=e.input,f=e.avail_in,h=r.hold,d=r.bits,r.mode===V&&(r.back=-1);break}for(r.back=0;Ae=r.lencode[h&(1<<r.lenbits)-1],me=Ae>>>24,_e=Ae>>>16&255,be=65535&Ae,!(me<=d);){if(0===f)break e;f--,h+=i[o++]<<d,d+=8}if(_e&&0==(240&_e)){for(ve=me,ye=_e,we=be;Ae=r.lencode[we+((h&(1<<ve+ye)-1)>>ve)],me=Ae>>>24,_e=Ae>>>16&255,be=65535&Ae,!(ve+me<=d);){if(0===f)break e;f--,h+=i[o++]<<d,d+=8}h>>>=ve,d-=ve,r.back+=ve}if(h>>>=me,d-=me,r.back+=me,r.length=be,0===_e){r.mode=fe;break}if(32&_e){r.back=-1,r.mode=V;break}if(64&_e){e.msg="invalid literal/length code",r.mode=he;break}r.extra=15&_e,r.mode=ie;case ie:if(r.extra){for(Se=r.extra;d<Se;){if(0===f)break e;f--,h+=i[o++]<<d,d+=8}r.length+=h&(1<<r.extra)-1,h>>>=r.extra,d-=r.extra,r.back+=r.extra}r.was=r.length,r.mode=ae;case ae:for(;Ae=r.distcode[h&(1<<r.distbits)-1],me=Ae>>>24,_e=Ae>>>16&255,be=65535&Ae,!(me<=d);){if(0===f)break e;f--,h+=i[o++]<<d,d+=8}if(0==(240&_e)){for(ve=me,ye=_e,we=be;Ae=r.distcode[we+((h&(1<<ve+ye)-1)>>ve)],me=Ae>>>24,_e=Ae>>>16&255,be=65535&Ae,!(ve+me<=d);){if(0===f)break e;f--,h+=i[o++]<<d,d+=8}h>>>=ve,d-=ve,r.back+=ve}if(h>>>=me,d-=me,r.back+=me,64&_e){e.msg="invalid distance code",r.mode=he;break}r.offset=be,r.extra=15&_e,r.mode=oe;case oe:if(r.extra){for(Se=r.extra;d<Se;){if(0===f)break e;f--,h+=i[o++]<<d,d+=8}r.offset+=h&(1<<r.extra)-1,h>>>=r.extra,d-=r.extra,r.back+=r.extra}if(r.offset>r.dmax){e.msg="invalid distance too far back",r.mode=he;break}r.mode=se;case se:if(0===u)break e;if(m=g-u,r.offset>m){if((m=r.offset-m)>r.whave&&r.sane){e.msg="invalid distance too far back",r.mode=he;break}m>r.wnext?(m-=r.wnext,_=r.wsize-m):_=r.wnext-m,m>r.length&&(m=r.length),ge=r.window}else ge=a,_=s-r.offset,m=r.length;m>u&&(m=u),u-=m,r.length-=m;do{a[s++]=ge[_++]}while(--m);0===r.length&&(r.mode=ne);break;case fe:if(0===u)break e;a[s++]=r.length,u--,r.mode=ne;break;case ue:if(r.wrap){for(;d<32;){if(0===f)break e;f--,h|=i[o++]<<d,d+=8}if(g-=u,e.total_out+=g,r.total+=g,g&&(e.adler=r.check=r.flags?y(r.check,a,g,s-g):v(r.check,a,g,s-g)),g=u,(r.flags?h:n(h))!==r.check){e.msg="incorrect data check",r.mode=he;break}h=0,d=0}r.mode=le;case le:if(r.wrap&&r.flags){for(;d<32;){if(0===f)break e;f--,h+=i[o++]<<d,d+=8}if(h!==(4294967295&r.total)){e.msg="incorrect length check",r.mode=he;break}h=0,d=0}r.mode=ce;case ce:ke=R;break e;case he:ke=L;break e;case de:return B;case pe:default:return D}return e.next_out=s,e.avail_out=u,e.next_in=o,e.avail_in=f,r.hold=h,r.bits=d,(r.wsize||g!==e.avail_out&&r.mode<he&&(r.mode<ue||t!==A))&&c(e,e.output,e.next_out,g-e.avail_out)?(r.mode=de,B):(p-=e.avail_in,g-=e.avail_out,e.total_in+=p,e.total_out+=g,r.total+=g,r.wrap&&g&&(e.adler=r.check=r.flags?y(r.check,a,g,e.next_out-g):v(r.check,a,g,e.next_out-g)),e.data_type=r.bits+(r.last?64:0)+(r.mode===V?128:0)+(r.mode===re||r.mode===X?256:0),(0===p&&0===g||t===A)&&ke===T&&(ke=M),ke)}function d(e){if(!e||!e.state)return D;var t=e.state;return t.window&&(t.window=null),e.state=null,T}function p(e,t){var r;return e&&e.state?(r=e.state,0==(2&r.wrap)?D:(r.head=t,t.done=!1,T)):D}function g(e,t){var r,n,i=t.length;return e&&e.state?(r=e.state,0!==r.wrap&&r.mode!==G?D:r.mode===G&&(n=1,(n=v(n,t,i,0))!==r.check)?L:c(e,t,i,i)?(r.mode=de,B):(r.havedict=1,T)):D}var m,_,b=r(15),v=r(39),y=r(40),w=r(68),E=r(69),k=0,x=1,S=2,A=4,P=5,O=6,T=0,R=1,I=2,D=-2,L=-3,B=-4,M=-5,U=8,F=1,j=2,z=3,N=4,Z=5,C=6,q=7,Y=8,W=9,H=10,G=11,V=12,J=13,K=14,X=15,$=16,Q=17,ee=18,te=19,re=20,ne=21,ie=22,ae=23,oe=24,se=25,fe=26,ue=27,le=28,ce=29,he=30,de=31,pe=32,ge=852,me=592,_e=15,be=!0;t.inflateReset=o,t.inflateReset2=s,t.inflateResetKeep=a,t.inflateInit=u,t.inflateInit2=f,t.inflate=h,t.inflateEnd=d,t.inflateGetHeader=p,t.inflateSetDictionary=g,t.inflateInfo="pako inflate (from Nodeca project)"},function(e,t,r){"use strict";e.exports=function(e,t){var r,n,i,a,o,s,f,u,l,c,h,d,p,g,m,_,b,v,y,w,E,k,x,S,A;r=e.state,n=e.next_in,S=e.input,i=n+(e.avail_in-5),a=e.next_out,A=e.output,o=a-(t-e.avail_out),s=a+(e.avail_out-257),f=r.dmax,u=r.wsize,l=r.whave,c=r.wnext,h=r.window,d=r.hold,p=r.bits,g=r.lencode,m=r.distcode,_=(1<<r.lenbits)-1,b=(1<<r.distbits)-1;e:do{p<15&&(d+=S[n++]<<p,p+=8,d+=S[n++]<<p,p+=8),v=g[d&_];t:for(;;){if(y=v>>>24,d>>>=y,p-=y,0===(y=v>>>16&255))A[a++]=65535&v;else{if(!(16&y)){if(0==(64&y)){v=g[(65535&v)+(d&(1<<y)-1)];continue t}if(32&y){r.mode=12;break e}e.msg="invalid literal/length code",r.mode=30;break e}w=65535&v,y&=15,y&&(p<y&&(d+=S[n++]<<p,p+=8),w+=d&(1<<y)-1,d>>>=y,p-=y),p<15&&(d+=S[n++]<<p,p+=8,d+=S[n++]<<p,p+=8),v=m[d&b];r:for(;;){if(y=v>>>24,d>>>=y,p-=y,!(16&(y=v>>>16&255))){if(0==(64&y)){v=m[(65535&v)+(d&(1<<y)-1)];continue r}e.msg="invalid distance code",r.mode=30;break e}if(E=65535&v,y&=15,p<y&&(d+=S[n++]<<p,(p+=8)<y&&(d+=S[n++]<<p,p+=8)),(E+=d&(1<<y)-1)>f){e.msg="invalid distance too far back",r.mode=30;break e}if(d>>>=y,p-=y,y=a-o,E>y){if((y=E-y)>l&&r.sane){e.msg="invalid distance too far back",r.mode=30;break e}if(k=0,x=h,0===c){if(k+=u-y,y<w){w-=y;do{A[a++]=h[k++]}while(--y);k=a-E,x=A}}else if(c<y){if(k+=u+c-y,(y-=c)<w){w-=y;do{A[a++]=h[k++]}while(--y);if(k=0,c<w){y=c,w-=y;do{A[a++]=h[k++]}while(--y);k=a-E,x=A}}}else if(k+=c-y,y<w){w-=y;do{A[a++]=h[k++]}while(--y);k=a-E,x=A}for(;w>2;)A[a++]=x[k++],A[a++]=x[k++],A[a++]=x[k++],w-=3;w&&(A[a++]=x[k++],w>1&&(A[a++]=x[k++]))}else{k=a-E;do{A[a++]=A[k++],A[a++]=A[k++],A[a++]=A[k++],w-=3}while(w>2);w&&(A[a++]=A[k++],w>1&&(A[a++]=A[k++]))}break}}break}}while(n<i&&a<s);w=p>>3,n-=w,p-=w<<3,d&=(1<<p)-1,e.next_in=n,e.next_out=a,e.avail_in=n<i?i-n+5:5-(n-i),e.avail_out=a<s?s-a+257:257-(a-s),r.hold=d,r.bits=p}},function(e,t,r){"use strict";var n=r(15),i=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],a=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],o=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],s=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];e.exports=function(e,t,r,f,u,l,c,h){var d,p,g,m,_,b,v,y,w,E=h.bits,k=0,x=0,S=0,A=0,P=0,O=0,T=0,R=0,I=0,D=0,L=null,B=0,M=new n.Buf16(16),U=new n.Buf16(16),F=null,j=0;for(k=0;k<=15;k++)M[k]=0;for(x=0;x<f;x++)M[t[r+x]]++;for(P=E,A=15;A>=1&&0===M[A];A--);if(P>A&&(P=A),0===A)return u[l++]=20971520,u[l++]=20971520,h.bits=1,0;for(S=1;S<A&&0===M[S];S++);for(P<S&&(P=S),R=1,k=1;k<=15;k++)if(R<<=1,(R-=M[k])<0)return-1;if(R>0&&(0===e||1!==A))return-1;for(U[1]=0,k=1;k<15;k++)U[k+1]=U[k]+M[k];for(x=0;x<f;x++)0!==t[r+x]&&(c[U[t[r+x]]++]=x);if(0===e?(L=F=c,b=19):1===e?(L=i,B-=257,F=a,j-=257,b=256):(L=o,F=s,b=-1),D=0,x=0,k=S,_=l,O=P,T=0,g=-1,I=1<<P,m=I-1,1===e&&I>852||2===e&&I>592)return 1;for(var z=0;;){z++,v=k-T,c[x]<b?(y=0,w=c[x]):c[x]>b?(y=F[j+c[x]],w=L[B+c[x]]):(y=96,w=0),d=1<<k-T,p=1<<O,S=p;do{p-=d,u[_+(D>>T)+p]=v<<24|y<<16|w|0}while(0!==p);for(d=1<<k-1;D&d;)d>>=1;if(0!==d?(D&=d-1,D+=d):D=0,x++,0==--M[k]){if(k===A)break;k=t[r+c[x]]}if(k>P&&(D&m)!==g){for(0===T&&(T=P),_+=S,O=k-T,R=1<<O;O+T<A&&!((R-=M[O+T])<=0);)O++,R<<=1;if(I+=1<<O,1===e&&I>852||2===e&&I>592)return 1;g=D&m,u[g]=P<<24|O<<16|_-l|0}}return 0!==D&&(u[_+D]=k-T<<24|64<<16|0),h.bits=P,0}},function(e,t,r){"use strict";e.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},function(e,t){e.exports=function(e){return e&&"object"==typeof e&&"function"==typeof e.copy&&"function"==typeof e.fill&&"function"==typeof e.readUInt8}},function(e,t){"function"==typeof Object.create?e.exports=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}:e.exports=function(e,t){e.super_=t;var r=function(){};r.prototype=t.prototype,e.prototype=new r,e.prototype.constructor=e}},function(e,t,r){"use strict";(function(t){/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
function n(e,t){if(e===t)return 0;for(var r=e.length,n=t.length,i=0,a=Math.min(r,n);i<a;++i)if(e[i]!==t[i]){r=e[i],n=t[i];break}return r<n?-1:n<r?1:0}function i(e){return t.Buffer&&"function"==typeof t.Buffer.isBuffer?t.Buffer.isBuffer(e):!(null==e||!e._isBuffer)}function a(e){return Object.prototype.toString.call(e)}function o(e){return!i(e)&&("function"==typeof t.ArrayBuffer&&("function"==typeof ArrayBuffer.isView?ArrayBuffer.isView(e):!!e&&(e instanceof DataView||!!(e.buffer&&e.buffer instanceof ArrayBuffer))))}function s(e){if(y.isFunction(e)){if(k)return e.name;var t=e.toString(),r=t.match(S);return r&&r[1]}}function f(e,t){return"string"==typeof e?e.length<t?e:e.slice(0,t):e}function u(e){if(k||!y.isFunction(e))return y.inspect(e);var t=s(e);return"[Function"+(t?": "+t:"")+"]"}function l(e){return f(u(e.actual),128)+" "+e.operator+" "+f(u(e.expected),128)}function c(e,t,r,n,i){throw new x.AssertionError({message:r,actual:e,expected:t,operator:n,stackStartFunction:i})}function h(e,t){e||c(e,!0,t,"==",x.ok)}function d(e,t,r,s){if(e===t)return!0;if(i(e)&&i(t))return 0===n(e,t);if(y.isDate(e)&&y.isDate(t))return e.getTime()===t.getTime();if(y.isRegExp(e)&&y.isRegExp(t))return e.source===t.source&&e.global===t.global&&e.multiline===t.multiline&&e.lastIndex===t.lastIndex&&e.ignoreCase===t.ignoreCase;if(null!==e&&"object"==typeof e||null!==t&&"object"==typeof t){if(o(e)&&o(t)&&a(e)===a(t)&&!(e instanceof Float32Array||e instanceof Float64Array))return 0===n(new Uint8Array(e.buffer),new Uint8Array(t.buffer));if(i(e)!==i(t))return!1;s=s||{actual:[],expected:[]};var f=s.actual.indexOf(e);return-1!==f&&f===s.expected.indexOf(t)||(s.actual.push(e),s.expected.push(t),g(e,t,r,s))}return r?e===t:e==t}function p(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function g(e,t,r,n){if(null===e||void 0===e||null===t||void 0===t)return!1;if(y.isPrimitive(e)||y.isPrimitive(t))return e===t;if(r&&Object.getPrototypeOf(e)!==Object.getPrototypeOf(t))return!1;var i=p(e),a=p(t);if(i&&!a||!i&&a)return!1;if(i)return e=E.call(e),t=E.call(t),d(e,t,r);var o,s,f=A(e),u=A(t);if(f.length!==u.length)return!1;for(f.sort(),u.sort(),s=f.length-1;s>=0;s--)if(f[s]!==u[s])return!1;for(s=f.length-1;s>=0;s--)if(o=f[s],!d(e[o],t[o],r,n))return!1;return!0}function m(e,t,r){d(e,t,!0)&&c(e,t,r,"notDeepStrictEqual",m)}function _(e,t){if(!e||!t)return!1;if("[object RegExp]"==Object.prototype.toString.call(t))return t.test(e);try{if(e instanceof t)return!0}catch(e){}return!Error.isPrototypeOf(t)&&!0===t.call({},e)}function b(e){var t;try{e()}catch(e){t=e}return t}function v(e,t,r,n){var i;if("function"!=typeof t)throw new TypeError('"block" argument must be a function');"string"==typeof r&&(n=r,r=null),i=b(t),n=(r&&r.name?" ("+r.name+").":".")+(n?" "+n:"."),e&&!i&&c(i,r,"Missing expected exception"+n);var a="string"==typeof n,o=!e&&y.isError(i),s=!e&&i&&!r;if((o&&a&&_(i,r)||s)&&c(i,r,"Got unwanted exception"+n),e&&i&&r&&!_(i,r)||!e&&i)throw i}var y=r(41),w=Object.prototype.hasOwnProperty,E=Array.prototype.slice,k=function(){return"foo"===function(){}.name}(),x=e.exports=h,S=/\s*function\s+([^\(\s]*)\s*/;x.AssertionError=function(e){this.name="AssertionError",this.actual=e.actual,this.expected=e.expected,this.operator=e.operator,e.message?(this.message=e.message,this.generatedMessage=!1):(this.message=l(this),this.generatedMessage=!0);var t=e.stackStartFunction||c;if(Error.captureStackTrace)Error.captureStackTrace(this,t);else{var r=new Error;if(r.stack){var n=r.stack,i=s(t),a=n.indexOf("\n"+i);if(a>=0){var o=n.indexOf("\n",a+1);n=n.substring(o+1)}this.stack=n}}},y.inherits(x.AssertionError,Error),x.fail=c,x.ok=h,x.equal=function(e,t,r){e!=t&&c(e,t,r,"==",x.equal)},x.notEqual=function(e,t,r){e==t&&c(e,t,r,"!=",x.notEqual)},x.deepEqual=function(e,t,r){d(e,t,!1)||c(e,t,r,"deepEqual",x.deepEqual)},x.deepStrictEqual=function(e,t,r){d(e,t,!0)||c(e,t,r,"deepStrictEqual",x.deepStrictEqual)},x.notDeepEqual=function(e,t,r){d(e,t,!1)&&c(e,t,r,"notDeepEqual",x.notDeepEqual)},x.notDeepStrictEqual=m,x.strictEqual=function(e,t,r){e!==t&&c(e,t,r,"===",x.strictEqual)},x.notStrictEqual=function(e,t,r){e===t&&c(e,t,r,"!==",x.notStrictEqual)},x.throws=function(e,t,r){v(!0,e,t,r)},x.doesNotThrow=function(e,t,r){v(!1,e,t,r)},x.ifError=function(e){if(e)throw e};var A=Object.keys||function(e){var t=[];for(var r in e)w.call(e,r)&&t.push(r);return t}}).call(t,r(2))},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e,t,r){if(u||(u=!0,console&&console.log&&console.log("WARNING: dicomParser.readEncapsulatedPixelData() has been deprecated")),void 0===e)throw"dicomParser.readEncapsulatedPixelData: missing required parameter 'dataSet'";if(void 0===t)throw"dicomParser.readEncapsulatedPixelData: missing required parameter 'element'";if(void 0===r)throw"dicomParser.readEncapsulatedPixelData: missing required parameter 'frame'";if("x7fe00010"!==t.tag)throw"dicomParser.readEncapsulatedPixelData: parameter 'element' refers to non pixel data tag (expected tag = x7fe00010)";if(!0!==t.encapsulatedPixelData)throw"dicomParser.readEncapsulatedPixelData: parameter 'element' refers to pixel data element that does not have encapsulated pixel data";if(!0!==t.hadUndefinedLength)throw"dicomParser.readEncapsulatedPixelData: parameter 'element' refers to pixel data element that does not have encapsulated pixel data";if(void 0===t.basicOffsetTable)throw"dicomParser.readEncapsulatedPixelData: parameter 'element' refers to pixel data element that does not have encapsulated pixel data";if(void 0===t.fragments)throw"dicomParser.readEncapsulatedPixelData: parameter 'element' refers to pixel data element that does not have encapsulated pixel data";if(r<0)throw"dicomParser.readEncapsulatedPixelData: parameter 'frame' must be >= 0";return 0!==t.basicOffsetTable.length?(0,o.default)(e,t,r):(0,f.default)(e,t,0,t.fragments.length)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=i;var a=r(42),o=n(a),s=r(22),f=n(s),u=!1}])});
//# sourceMappingURL=dicomParser.min.js.map
/*! cornerstone-wado-image-loader - 2.1.2 - 2018-06-05 | (c) 2016 Chris Hafey | https://github.com/cornerstonejs/cornerstoneWADOImageLoader */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("dicom-parser"));
	else if(typeof define === 'function' && define.amd)
		define("cornerstoneWADOImageLoader", ["dicom-parser"], factory);
	else if(typeof exports === 'object')
		exports["cornerstoneWADOImageLoader"] = factory(require("dicom-parser"));
	else
		root["cornerstoneWADOImageLoader"] = factory(root["dicomParser"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_dicom_parser__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./imageLoader/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./externalModules.js":
/*!****************************!*\
  !*** ./externalModules.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.external = exports.dicomParser = undefined;

var _dicomParser = __webpack_require__(/*! dicom-parser */ "dicom-parser");

var dicomParser = _interopRequireWildcard(_dicomParser);

var _registerLoaders = __webpack_require__(/*! ./imageLoader/registerLoaders.js */ "./imageLoader/registerLoaders.js");

var _registerLoaders2 = _interopRequireDefault(_registerLoaders);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/* eslint import/extensions:0 */
var cornerstone = void 0;

var external = {
  set cornerstone(cs) {
    cornerstone = cs;

    (0, _registerLoaders2.default)(cornerstone);
  },
  get cornerstone() {
    return cornerstone;
  }
};

exports.dicomParser = dicomParser;
exports.external = external;

/***/ }),

/***/ "./imageLoader/colorSpaceConverters/convertPALETTECOLOR.js":
/*!*****************************************************************!*\
  !*** ./imageLoader/colorSpaceConverters/convertPALETTECOLOR.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (imageFrame, rgbaBuffer) {
  var numPixels = imageFrame.columns * imageFrame.rows;
  var pixelData = imageFrame.pixelData;
  var rData = imageFrame.redPaletteColorLookupTableData;
  var gData = imageFrame.greenPaletteColorLookupTableData;
  var bData = imageFrame.bluePaletteColorLookupTableData;
  var len = imageFrame.redPaletteColorLookupTableData.length;
  var palIndex = 0;
  var rgbaIndex = 0;

  var start = imageFrame.redPaletteColorLookupTableDescriptor[1];
  var shift = imageFrame.redPaletteColorLookupTableDescriptor[2] === 8 ? 0 : 8;

  var rDataCleaned = convertLUTto8Bit(rData, shift);
  var gDataCleaned = convertLUTto8Bit(gData, shift);
  var bDataCleaned = convertLUTto8Bit(bData, shift);

  for (var i = 0; i < numPixels; ++i) {
    var value = pixelData[palIndex++];

    if (value < start) {
      value = 0;
    } else if (value > start + len - 1) {
      value = len - 1;
    } else {
      value -= start;
    }

    rgbaBuffer[rgbaIndex++] = rDataCleaned[value];
    rgbaBuffer[rgbaIndex++] = gDataCleaned[value];
    rgbaBuffer[rgbaIndex++] = bDataCleaned[value];
    rgbaBuffer[rgbaIndex++] = 255;
  }
};

/* eslint no-bitwise: 0 */

function convertLUTto8Bit(lut, shift) {
  var numEntries = lut.length;
  var cleanedLUT = new Uint8ClampedArray(numEntries);

  for (var i = 0; i < numEntries; ++i) {
    cleanedLUT[i] = lut[i] >> shift;
  }

  return cleanedLUT;
}

/**
 * Convert pixel data with PALETTE COLOR Photometric Interpretation to RGBA
 *
 * @param {ImageFrame} imageFrame
 * @param {Uint8ClampedArray} rgbaBuffer
 * @returns {void}
 */

/***/ }),

/***/ "./imageLoader/colorSpaceConverters/convertRGBColorByPixel.js":
/*!********************************************************************!*\
  !*** ./imageLoader/colorSpaceConverters/convertRGBColorByPixel.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (imageFrame, rgbaBuffer) {
  if (imageFrame === undefined) {
    throw new Error('decodeRGB: rgbBuffer must not be undefined');
  }
  if (imageFrame.length % 3 !== 0) {
    throw new Error('decodeRGB: rgbBuffer length must be divisible by 3');
  }

  var numPixels = imageFrame.length / 3;
  var rgbIndex = 0;
  var rgbaIndex = 0;

  for (var i = 0; i < numPixels; i++) {
    rgbaBuffer[rgbaIndex++] = imageFrame[rgbIndex++]; // red
    rgbaBuffer[rgbaIndex++] = imageFrame[rgbIndex++]; // green
    rgbaBuffer[rgbaIndex++] = imageFrame[rgbIndex++]; // blue
    rgbaBuffer[rgbaIndex++] = 255; // alpha
  }
};

/***/ }),

/***/ "./imageLoader/colorSpaceConverters/convertRGBColorByPlane.js":
/*!********************************************************************!*\
  !*** ./imageLoader/colorSpaceConverters/convertRGBColorByPlane.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (imageFrame, rgbaBuffer) {
  if (imageFrame === undefined) {
    throw new Error('decodeRGB: rgbBuffer must not be undefined');
  }
  if (imageFrame.length % 3 !== 0) {
    throw new Error('decodeRGB: rgbBuffer length must be divisible by 3');
  }

  var numPixels = imageFrame.length / 3;
  var rgbaIndex = 0;
  var rIndex = 0;
  var gIndex = numPixels;
  var bIndex = numPixels * 2;

  for (var i = 0; i < numPixels; i++) {
    rgbaBuffer[rgbaIndex++] = imageFrame[rIndex++]; // red
    rgbaBuffer[rgbaIndex++] = imageFrame[gIndex++]; // green
    rgbaBuffer[rgbaIndex++] = imageFrame[bIndex++]; // blue
    rgbaBuffer[rgbaIndex++] = 255; // alpha
  }
};

/***/ }),

/***/ "./imageLoader/colorSpaceConverters/convertYBRFullByPixel.js":
/*!*******************************************************************!*\
  !*** ./imageLoader/colorSpaceConverters/convertYBRFullByPixel.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (imageFrame, rgbaBuffer) {
  if (imageFrame === undefined) {
    throw new Error('decodeRGB: ybrBuffer must not be undefined');
  }
  if (imageFrame.length % 3 !== 0) {
    throw new Error('decodeRGB: ybrBuffer length must be divisble by 3');
  }

  var numPixels = imageFrame.length / 3;
  var ybrIndex = 0;
  var rgbaIndex = 0;

  for (var i = 0; i < numPixels; i++) {
    var y = imageFrame[ybrIndex++];
    var cb = imageFrame[ybrIndex++];
    var cr = imageFrame[ybrIndex++];

    rgbaBuffer[rgbaIndex++] = y + 1.40200 * (cr - 128); // red
    rgbaBuffer[rgbaIndex++] = y - 0.34414 * (cb - 128) - 0.71414 * (cr - 128); // green
    rgbaBuffer[rgbaIndex++] = y + 1.77200 * (cb - 128); // blue
    rgbaBuffer[rgbaIndex++] = 255; // alpha
  }
};

/***/ }),

/***/ "./imageLoader/colorSpaceConverters/convertYBRFullByPlane.js":
/*!*******************************************************************!*\
  !*** ./imageLoader/colorSpaceConverters/convertYBRFullByPlane.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (imageFrame, rgbaBuffer) {
  if (imageFrame === undefined) {
    throw new Error('decodeRGB: ybrBuffer must not be undefined');
  }
  if (imageFrame.length % 3 !== 0) {
    throw new Error('decodeRGB: ybrBuffer length must be divisble by 3');
  }

  var numPixels = imageFrame.length / 3;
  var rgbaIndex = 0;
  var yIndex = 0;
  var cbIndex = numPixels;
  var crIndex = numPixels * 2;

  for (var i = 0; i < numPixels; i++) {
    var y = imageFrame[yIndex++];
    var cb = imageFrame[cbIndex++];
    var cr = imageFrame[crIndex++];

    rgbaBuffer[rgbaIndex++] = y + 1.40200 * (cr - 128); // red
    rgbaBuffer[rgbaIndex++] = y - 0.34414 * (cb - 128) - 0.71414 * (cr - 128); // green
    rgbaBuffer[rgbaIndex++] = y + 1.77200 * (cb - 128); // blue
    rgbaBuffer[rgbaIndex++] = 255; // alpha
  }
};

/***/ }),

/***/ "./imageLoader/colorSpaceConverters/index.js":
/*!***************************************************!*\
  !*** ./imageLoader/colorSpaceConverters/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _convertRGBColorByPixel = __webpack_require__(/*! ./convertRGBColorByPixel.js */ "./imageLoader/colorSpaceConverters/convertRGBColorByPixel.js");

Object.defineProperty(exports, 'convertRGBColorByPixel', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_convertRGBColorByPixel).default;
  }
});

var _convertRGBColorByPlane = __webpack_require__(/*! ./convertRGBColorByPlane.js */ "./imageLoader/colorSpaceConverters/convertRGBColorByPlane.js");

Object.defineProperty(exports, 'convertRGBColorByPlane', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_convertRGBColorByPlane).default;
  }
});

var _convertYBRFullByPixel = __webpack_require__(/*! ./convertYBRFullByPixel.js */ "./imageLoader/colorSpaceConverters/convertYBRFullByPixel.js");

Object.defineProperty(exports, 'convertYBRFullByPixel', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_convertYBRFullByPixel).default;
  }
});

var _convertYBRFullByPlane = __webpack_require__(/*! ./convertYBRFullByPlane.js */ "./imageLoader/colorSpaceConverters/convertYBRFullByPlane.js");

Object.defineProperty(exports, 'convertYBRFullByPlane', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_convertYBRFullByPlane).default;
  }
});

var _convertPALETTECOLOR = __webpack_require__(/*! ./convertPALETTECOLOR.js */ "./imageLoader/colorSpaceConverters/convertPALETTECOLOR.js");

Object.defineProperty(exports, 'convertPALETTECOLOR', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_convertPALETTECOLOR).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./imageLoader/configure.js":
/*!**********************************!*\
  !*** ./imageLoader/configure.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ./internal/index.js */ "./imageLoader/internal/index.js");

function configure(options) {
  (0, _index.setOptions)(options);
}

exports.default = configure;

/***/ }),

/***/ "./imageLoader/convertColorSpace.js":
/*!******************************************!*\
  !*** ./imageLoader/convertColorSpace.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = convertColorSpace;

var _index = __webpack_require__(/*! ./colorSpaceConverters/index.js */ "./imageLoader/colorSpaceConverters/index.js");

function convertRGB(imageFrame, rgbaBuffer) {
  if (imageFrame.planarConfiguration === 0) {
    (0, _index.convertRGBColorByPixel)(imageFrame.pixelData, rgbaBuffer);
  } else {
    (0, _index.convertRGBColorByPlane)(imageFrame.pixelData, rgbaBuffer);
  }
}

function convertYBRFull(imageFrame, rgbaBuffer) {
  if (imageFrame.planarConfiguration === 0) {
    (0, _index.convertYBRFullByPixel)(imageFrame.pixelData, rgbaBuffer);
  } else {
    (0, _index.convertYBRFullByPlane)(imageFrame.pixelData, rgbaBuffer);
  }
}

function convertColorSpace(imageFrame, imageData) {
  var rgbaBuffer = imageData.data;
  // convert based on the photometric interpretation

  if (imageFrame.photometricInterpretation === 'RGB') {
    convertRGB(imageFrame, rgbaBuffer);
  } else if (imageFrame.photometricInterpretation === 'YBR_RCT') {
    convertRGB(imageFrame, rgbaBuffer);
  } else if (imageFrame.photometricInterpretation === 'YBR_ICT') {
    convertRGB(imageFrame, rgbaBuffer);
  } else if (imageFrame.photometricInterpretation === 'PALETTE COLOR') {
    (0, _index.convertPALETTECOLOR)(imageFrame, rgbaBuffer);
  } else if (imageFrame.photometricInterpretation === 'YBR_FULL_422') {
    convertRGB(imageFrame, rgbaBuffer);
  } else if (imageFrame.photometricInterpretation === 'YBR_FULL') {
    convertYBRFull(imageFrame, rgbaBuffer);
  } else {
    throw new Error('No color space conversion for photometric interpretation ' + imageFrame.photometricInterpretation);
  }
}

/***/ }),

/***/ "./imageLoader/createImage.js":
/*!************************************!*\
  !*** ./imageLoader/createImage.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _externalModules = __webpack_require__(/*! ../externalModules.js */ "./externalModules.js");

var _getImageFrame = __webpack_require__(/*! ./getImageFrame.js */ "./imageLoader/getImageFrame.js");

var _getImageFrame2 = _interopRequireDefault(_getImageFrame);

var _decodeImageFrame = __webpack_require__(/*! ./decodeImageFrame.js */ "./imageLoader/decodeImageFrame.js");

var _decodeImageFrame2 = _interopRequireDefault(_decodeImageFrame);

var _isColorImage = __webpack_require__(/*! ./isColorImage.js */ "./imageLoader/isColorImage.js");

var _isColorImage2 = _interopRequireDefault(_isColorImage);

var _convertColorSpace = __webpack_require__(/*! ./convertColorSpace.js */ "./imageLoader/convertColorSpace.js");

var _convertColorSpace2 = _interopRequireDefault(_convertColorSpace);

var _getMinMax = __webpack_require__(/*! ../shared/getMinMax.js */ "./shared/getMinMax.js");

var _getMinMax2 = _interopRequireDefault(_getMinMax);

var _isJPEGBaseline8BitColor = __webpack_require__(/*! ./isJPEGBaseline8BitColor.js */ "./imageLoader/isJPEGBaseline8BitColor.js");

var _isJPEGBaseline8BitColor2 = _interopRequireDefault(_isJPEGBaseline8BitColor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var lastImageIdDrawn = '';

function isModalityLUTForDisplay(sopClassUid) {
  // special case for XA and XRF
  // https://groups.google.com/forum/#!searchin/comp.protocols.dicom/Modality$20LUT$20XA/comp.protocols.dicom/UBxhOZ2anJ0/D0R_QP8V2wIJ
  return sopClassUid !== '1.2.840.10008.5.1.4.1.1.12.1' && // XA
  sopClassUid !== '1.2.840.10008.5.1.4.1.1.12.2.1'; // XRF
}

function convertToIntPixelData(floatPixelData) {
  var floatMinMax = (0, _getMinMax2.default)(floatPixelData);
  var floatRange = Math.abs(floatMinMax.max - floatMinMax.min);
  var intRange = 65535;
  var slope = floatRange / intRange;
  var intercept = floatMinMax.min;
  var numPixels = floatPixelData.length;
  var intPixelData = new Uint16Array(numPixels);
  var min = 65535;
  var max = 0;

  for (var i = 0; i < numPixels; i++) {
    var rescaledPixel = Math.floor((floatPixelData[i] - intercept) / slope);

    intPixelData[i] = rescaledPixel;
    min = Math.min(min, rescaledPixel);
    max = Math.max(max, rescaledPixel);
  }

  return {
    min: min,
    max: max,
    intPixelData: intPixelData,
    slope: slope,
    intercept: intercept
  };
}

/**
 * Helper function to set pixel data to the right typed array.  This is needed because web workers
 * can transfer array buffers but not typed arrays
 * @param imageFrame
 */
function setPixelDataType(imageFrame) {
  if (imageFrame.bitsAllocated === 32) {
    imageFrame.pixelData = new Float32Array(imageFrame.pixelData);
  } else if (imageFrame.bitsAllocated === 16) {
    if (imageFrame.pixelRepresentation === 0) {
      imageFrame.pixelData = new Uint16Array(imageFrame.pixelData);
    } else {
      imageFrame.pixelData = new Int16Array(imageFrame.pixelData);
    }
  } else {
    imageFrame.pixelData = new Uint8Array(imageFrame.pixelData);
  }
}

function createImage(imageId, pixelData, transferSyntax, options) {

  if (!pixelData || !pixelData.length) {
    return Promise.reject(new Error('The file does not contain image data.'));
  }

  var cornerstone = _externalModules.external.cornerstone;
  var canvas = document.createElement('canvas');
  var imageFrame = (0, _getImageFrame2.default)(imageId);
  var decodePromise = (0, _decodeImageFrame2.default)(imageFrame, transferSyntax, pixelData, canvas, options);

  return new Promise(function (resolve, reject) {
    decodePromise.then(function (imageFrame) {
      var imagePlaneModule = cornerstone.metaData.get('imagePlaneModule', imageId) || {};
      var voiLutModule = cornerstone.metaData.get('voiLutModule', imageId) || {};
      var modalityLutModule = cornerstone.metaData.get('modalityLutModule', imageId) || {};
      var sopCommonModule = cornerstone.metaData.get('sopCommonModule', imageId) || {};
      var isColorImage = (0, _isColorImage2.default)(imageFrame.photometricInterpretation);

      // JPEGBaseline (8 bits) is already returning the pixel data in the right format (rgba)
      // because it's using a canvas to load and decode images.
      if (!(0, _isJPEGBaseline8BitColor2.default)(imageFrame, transferSyntax)) {
        setPixelDataType(imageFrame);

        // convert color space
        if (isColorImage) {
          // setup the canvas context
          canvas.height = imageFrame.rows;
          canvas.width = imageFrame.columns;

          var context = canvas.getContext('2d');
          var imageData = context.createImageData(imageFrame.columns, imageFrame.rows);

          (0, _convertColorSpace2.default)(imageFrame, imageData);
          imageFrame.imageData = imageData;
          imageFrame.pixelData = imageData.data;

          // calculate smallest and largest PixelValue of the converted pixelData
          var minMax = (0, _getMinMax2.default)(imageFrame.pixelData);

          imageFrame.smallestPixelValue = minMax.min;
          imageFrame.largestPixelValue = minMax.max;
        }
      }

      var image = {
        imageId: imageId,
        color: isColorImage,
        columnPixelSpacing: imagePlaneModule.pixelSpacing ? imagePlaneModule.pixelSpacing[1] : undefined,
        columns: imageFrame.columns,
        height: imageFrame.rows,
        intercept: modalityLutModule.rescaleIntercept ? modalityLutModule.rescaleIntercept : 0,
        invert: imageFrame.photometricInterpretation === 'MONOCHROME1',
        minPixelValue: imageFrame.smallestPixelValue,
        maxPixelValue: imageFrame.largestPixelValue,
        render: undefined, // set below
        rowPixelSpacing: imagePlaneModule.pixelSpacing ? imagePlaneModule.pixelSpacing[0] : undefined,
        rows: imageFrame.rows,
        sizeInBytes: imageFrame.pixelData.length,
        slope: modalityLutModule.rescaleSlope ? modalityLutModule.rescaleSlope : 1,
        width: imageFrame.columns,
        windowCenter: voiLutModule.windowCenter ? voiLutModule.windowCenter[0] : undefined,
        windowWidth: voiLutModule.windowWidth ? voiLutModule.windowWidth[0] : undefined,
        decodeTimeInMS: imageFrame.decodeTimeInMS,
        floatPixelData: undefined
      };

      // add function to return pixel data
      if (imageFrame.pixelData instanceof Float32Array) {
        var floatPixelData = imageFrame.pixelData;
        var results = convertToIntPixelData(floatPixelData);

        image.minPixelValue = results.min;
        image.maxPixelValue = results.max;
        image.slope = results.slope;
        image.intercept = results.intercept;
        image.floatPixelData = floatPixelData;
        image.getPixelData = function () {
          return results.intPixelData;
        };
      } else {
        image.getPixelData = function () {
          return imageFrame.pixelData;
        };
      }

      // Setup the renderer
      if (image.color) {
        image.render = cornerstone.renderColorImage;
        image.getCanvas = function () {
          if (lastImageIdDrawn === imageId) {
            return canvas;
          }

          canvas.height = image.rows;
          canvas.width = image.columns;
          var context = canvas.getContext('2d');

          context.putImageData(imageFrame.imageData, 0, 0);
          lastImageIdDrawn = imageId;

          return canvas;
        };
      } else {
        image.render = cornerstone.renderGrayscaleImage;
      }

      // Modality LUT
      if (modalityLutModule.modalityLUTSequence && modalityLutModule.modalityLUTSequence.length > 0 && isModalityLUTForDisplay(sopCommonModule.sopClassUID)) {
        image.modalityLUT = modalityLutModule.modalityLUTSequence[0];
      }

      // VOI LUT
      if (voiLutModule.voiLUTSequence && voiLutModule.voiLUTSequence.length > 0) {
        image.voiLUT = voiLutModule.voiLUTSequence[0];
      }

      if (image.color) {
        image.windowWidth = 255;
        image.windowCenter = 127;
      }

      // set the ww/wc to cover the dynamic range of the image if no values are supplied
      if (image.windowCenter === undefined || image.windowWidth === undefined) {
        var maxVoi = image.maxPixelValue * image.slope + image.intercept;
        var minVoi = image.minPixelValue * image.slope + image.intercept;

        image.windowWidth = maxVoi - minVoi;
        image.windowCenter = (maxVoi + minVoi) / 2;
      }
      resolve(image);
    }, reject);
  });
}

exports.default = createImage;

/***/ }),

/***/ "./imageLoader/decodeImageFrame.js":
/*!*****************************************!*\
  !*** ./imageLoader/decodeImageFrame.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _options = __webpack_require__(/*! ./internal/options.js */ "./imageLoader/internal/options.js");

var _webWorkerManager = __webpack_require__(/*! ./webWorkerManager.js */ "./imageLoader/webWorkerManager.js");

var _webWorkerManager2 = _interopRequireDefault(_webWorkerManager);

var _decodeJPEGBaseline8BitColor = __webpack_require__(/*! ./decodeJPEGBaseline8BitColor.js */ "./imageLoader/decodeJPEGBaseline8BitColor.js");

var _decodeJPEGBaseline8BitColor2 = _interopRequireDefault(_decodeJPEGBaseline8BitColor);

var _decodeImageFrame = __webpack_require__(/*! ../shared/decodeImageFrame.js */ "./shared/decodeImageFrame.js");

var _decodeImageFrame2 = _interopRequireDefault(_decodeImageFrame);

var _calculateMinMax = __webpack_require__(/*! ../shared/calculateMinMax.js */ "./shared/calculateMinMax.js");

var _calculateMinMax2 = _interopRequireDefault(_calculateMinMax);

var _decodeJPEG = __webpack_require__(/*! ../shared/decoders/decodeJPEG2000.js */ "./shared/decoders/decodeJPEG2000.js");

var _decodeJPEGLS = __webpack_require__(/*! ../shared/decoders/decodeJPEGLS.js */ "./shared/decoders/decodeJPEGLS.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var codecsInitialized = false;

function processDecodeTask(imageFrame, transferSyntax, pixelData, options) {
  var priority = options.priority || undefined;
  var transferList = options.transferPixelData ? [pixelData.buffer] : undefined;
  var loaderOptions = (0, _options.getOptions)();
  var strict = loaderOptions.strict,
      decodeConfig = loaderOptions.decodeConfig,
      useWebWorkers = loaderOptions.useWebWorkers;


  if (useWebWorkers === false) {
    if (codecsInitialized === false) {
      (0, _decodeJPEG.initializeJPEG2000)(decodeConfig);
      (0, _decodeJPEGLS.initializeJPEGLS)(decodeConfig);

      codecsInitialized = true;
    }

    return new Promise(function (resolve, reject) {
      try {
        var decodeArguments = [imageFrame, transferSyntax, pixelData, decodeConfig, options];
        var decodedImageFrame = _decodeImageFrame2.default.apply(undefined, decodeArguments);

        (0, _calculateMinMax2.default)(decodedImageFrame, strict);

        resolve(decodedImageFrame);
      } catch (error) {
        reject(error);
      }
    });
  }

  return _webWorkerManager2.default.addTask('decodeTask', {
    imageFrame: imageFrame,
    transferSyntax: transferSyntax,
    pixelData: pixelData,
    options: options
  }, priority, transferList).promise;
}

function decodeImageFrame(imageFrame, transferSyntax, pixelData, canvas) {
  var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

  // TODO: Turn this into a switch statement instead
  if (transferSyntax === '1.2.840.10008.1.2') {
    // Implicit VR Little Endian
    return processDecodeTask(imageFrame, transferSyntax, pixelData, options);
  } else if (transferSyntax === '1.2.840.10008.1.2.1') {
    // Explicit VR Little Endian
    return processDecodeTask(imageFrame, transferSyntax, pixelData, options);
  } else if (transferSyntax === '1.2.840.10008.1.2.2') {
    // Explicit VR Big Endian (retired)
    return processDecodeTask(imageFrame, transferSyntax, pixelData, options);
  } else if (transferSyntax === '1.2.840.10008.1.2.1.99') {
    // Deflate transfer syntax (deflated by dicomParser)
    return processDecodeTask(imageFrame, transferSyntax, pixelData, options);
  } else if (transferSyntax === '1.2.840.10008.1.2.5') {
    // RLE Lossless
    return processDecodeTask(imageFrame, transferSyntax, pixelData, options);
  } else if (transferSyntax === '1.2.840.10008.1.2.4.50') {
    // JPEG Baseline lossy process 1 (8 bit)

    // Handle 8-bit JPEG Baseline color images using the browser's built-in
    // JPEG decoding
    if (imageFrame.bitsAllocated === 8 && (imageFrame.samplesPerPixel === 3 || imageFrame.samplesPerPixel === 4)) {
      return (0, _decodeJPEGBaseline8BitColor2.default)(imageFrame, pixelData, canvas);
    }

    return processDecodeTask(imageFrame, transferSyntax, pixelData, options);
  } else if (transferSyntax === '1.2.840.10008.1.2.4.51') {
    // JPEG Baseline lossy process 2 & 4 (12 bit)
    return processDecodeTask(imageFrame, transferSyntax, pixelData, options);
  } else if (transferSyntax === '1.2.840.10008.1.2.4.57') {
    // JPEG Lossless, Nonhierarchical (Processes 14)
    return processDecodeTask(imageFrame, transferSyntax, pixelData, options);
  } else if (transferSyntax === '1.2.840.10008.1.2.4.70') {
    // JPEG Lossless, Nonhierarchical (Processes 14 [Selection 1])
    return processDecodeTask(imageFrame, transferSyntax, pixelData, options);
  } else if (transferSyntax === '1.2.840.10008.1.2.4.80') {
    // JPEG-LS Lossless Image Compression
    return processDecodeTask(imageFrame, transferSyntax, pixelData, options);
  } else if (transferSyntax === '1.2.840.10008.1.2.4.81') {
    // JPEG-LS Lossy (Near-Lossless) Image Compression
    return processDecodeTask(imageFrame, transferSyntax, pixelData, options);
  } else if (transferSyntax === '1.2.840.10008.1.2.4.90') {
    // JPEG 2000 Lossless
    return processDecodeTask(imageFrame, transferSyntax, pixelData, options);
  } else if (transferSyntax === '1.2.840.10008.1.2.4.91') {
    // JPEG 2000 Lossy
    return processDecodeTask(imageFrame, transferSyntax, pixelData, options);
  }

  /* Don't know if these work...
   // JPEG 2000 Part 2 Multicomponent Image Compression (Lossless Only)
   else if(transferSyntax === "1.2.840.10008.1.2.4.92")
   {
   return cornerstoneWADOImageLoader.decodeJPEG2000(dataSet, frame);
   }
   // JPEG 2000 Part 2 Multicomponent Image Compression
   else if(transferSyntax === "1.2.840.10008.1.2.4.93")
   {
   return cornerstoneWADOImageLoader.decodeJPEG2000(dataSet, frame);
   }
   */

  return new Promise(function (resolve, reject) {
    reject(new Error('No decoder for transfer syntax ' + transferSyntax));
  });
}

exports.default = decodeImageFrame;

/***/ }),

/***/ "./imageLoader/decodeJPEGBaseline8BitColor.js":
/*!****************************************************!*\
  !*** ./imageLoader/decodeJPEGBaseline8BitColor.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getMinMax = __webpack_require__(/*! ../shared/getMinMax.js */ "./shared/getMinMax.js");

var _getMinMax2 = _interopRequireDefault(_getMinMax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Special decoder for 8 bit jpeg that leverages the browser's built in JPEG decoder for increased performance
 */

function arrayBufferToString(buffer) {
  return binaryToString(String.fromCharCode.apply(null, Array.prototype.slice.apply(new Uint8Array(buffer))));
}

function binaryToString(binary) {
  var error = void 0;

  try {
    return decodeURIComponent(escape(binary));
  } catch (_error) {
    error = _error;
    if (error instanceof URIError) {
      return binary;
    }
    throw error;
  }
}

function decodeJPEGBaseline8BitColor(imageFrame, pixelData, canvas) {
  var start = new Date().getTime();
  var imgBlob = new Blob([pixelData], { type: 'image/jpeg' });

  return new Promise(function (resolve, reject) {
    var fileReader = new FileReader();

    if (fileReader.readAsBinaryString === undefined) {
      fileReader.readAsArrayBuffer(imgBlob);
    } else {
      fileReader.readAsBinaryString(imgBlob); // doesn't work on IE11
    }

    fileReader.onload = function () {
      var img = new Image();

      img.onload = function () {
        canvas.height = img.height;
        canvas.width = img.width;
        imageFrame.rows = img.height;
        imageFrame.columns = img.width;
        var context = canvas.getContext('2d');

        context.drawImage(this, 0, 0);
        var imageData = context.getImageData(0, 0, img.width, img.height);
        var end = new Date().getTime();

        imageFrame.pixelData = imageData.data;
        imageFrame.imageData = imageData;
        imageFrame.decodeTimeInMS = end - start;

        // calculate smallest and largest PixelValue
        var minMax = (0, _getMinMax2.default)(imageFrame.pixelData);

        imageFrame.smallestPixelValue = minMax.min;
        imageFrame.largestPixelValue = minMax.max;

        resolve(imageFrame);
      };

      img.onerror = function (error) {
        reject(error);
      };

      if (fileReader.readAsBinaryString === undefined) {
        img.src = 'data:image/jpeg;base64,' + window.btoa(arrayBufferToString(fileReader.result));
      } else {
        img.src = 'data:image/jpeg;base64,' + window.btoa(fileReader.result); // doesn't work on IE11
      }
    };

    fileReader.onerror = function (e) {
      reject(e);
    };
  });
}

exports.default = decodeJPEGBaseline8BitColor;

/***/ }),

/***/ "./imageLoader/getImageFrame.js":
/*!**************************************!*\
  !*** ./imageLoader/getImageFrame.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _externalModules = __webpack_require__(/*! ../externalModules.js */ "./externalModules.js");

function getImageFrame(imageId) {
  var imagePixelModule = _externalModules.external.cornerstone.metaData.get('imagePixelModule', imageId);

  return {
    samplesPerPixel: imagePixelModule.samplesPerPixel,
    photometricInterpretation: imagePixelModule.photometricInterpretation,
    planarConfiguration: imagePixelModule.planarConfiguration,
    rows: imagePixelModule.rows,
    columns: imagePixelModule.columns,
    bitsAllocated: imagePixelModule.bitsAllocated,
    bitsStored: imagePixelModule.bitsStored,
    pixelRepresentation: imagePixelModule.pixelRepresentation, // 0 = unsigned,
    smallestPixelValue: imagePixelModule.smallestPixelValue,
    largestPixelValue: imagePixelModule.largestPixelValue,
    redPaletteColorLookupTableDescriptor: imagePixelModule.redPaletteColorLookupTableDescriptor,
    greenPaletteColorLookupTableDescriptor: imagePixelModule.greenPaletteColorLookupTableDescriptor,
    bluePaletteColorLookupTableDescriptor: imagePixelModule.bluePaletteColorLookupTableDescriptor,
    redPaletteColorLookupTableData: imagePixelModule.redPaletteColorLookupTableData,
    greenPaletteColorLookupTableData: imagePixelModule.greenPaletteColorLookupTableData,
    bluePaletteColorLookupTableData: imagePixelModule.bluePaletteColorLookupTableData,
    pixelData: undefined // populated later after decoding
  };
}

exports.default = getImageFrame;

/***/ }),

/***/ "./imageLoader/index.js":
/*!******************************!*\
  !*** ./imageLoader/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ./colorSpaceConverters/index.js */ "./imageLoader/colorSpaceConverters/index.js");

Object.keys(_index).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _index[key];
    }
  });
});

var _index2 = __webpack_require__(/*! ./wadouri/index.js */ "./imageLoader/wadouri/index.js");

Object.defineProperty(exports, 'wadouri', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index2).default;
  }
});

var _index3 = __webpack_require__(/*! ./wadors/index.js */ "./imageLoader/wadors/index.js");

Object.defineProperty(exports, 'wadors', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index3).default;
  }
});

var _configure = __webpack_require__(/*! ./configure.js */ "./imageLoader/configure.js");

Object.defineProperty(exports, 'configure', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_configure).default;
  }
});

var _convertColorSpace = __webpack_require__(/*! ./convertColorSpace.js */ "./imageLoader/convertColorSpace.js");

Object.defineProperty(exports, 'convertColorSpace', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_convertColorSpace).default;
  }
});

var _createImage = __webpack_require__(/*! ./createImage.js */ "./imageLoader/createImage.js");

Object.defineProperty(exports, 'createImage', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_createImage).default;
  }
});

var _decodeImageFrame = __webpack_require__(/*! ./decodeImageFrame.js */ "./imageLoader/decodeImageFrame.js");

Object.defineProperty(exports, 'decodeImageFrame', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_decodeImageFrame).default;
  }
});

var _decodeJPEGBaseline8BitColor = __webpack_require__(/*! ./decodeJPEGBaseline8BitColor.js */ "./imageLoader/decodeJPEGBaseline8BitColor.js");

Object.defineProperty(exports, 'decodeJPEGBaseline8BitColor', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_decodeJPEGBaseline8BitColor).default;
  }
});

var _getImageFrame = __webpack_require__(/*! ./getImageFrame.js */ "./imageLoader/getImageFrame.js");

Object.defineProperty(exports, 'getImageFrame', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_getImageFrame).default;
  }
});

var _getMinMax = __webpack_require__(/*! ../shared/getMinMax.js */ "./shared/getMinMax.js");

Object.defineProperty(exports, 'getMinMax', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_getMinMax).default;
  }
});

var _isColorImage = __webpack_require__(/*! ./isColorImage.js */ "./imageLoader/isColorImage.js");

Object.defineProperty(exports, 'isColorImage', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isColorImage).default;
  }
});

var _isJPEGBaseline8BitColor = __webpack_require__(/*! ./isJPEGBaseline8BitColor.js */ "./imageLoader/isJPEGBaseline8BitColor.js");

Object.defineProperty(exports, 'isJPEGBaseline8BitColor', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isJPEGBaseline8BitColor).default;
  }
});

var _webWorkerManager = __webpack_require__(/*! ./webWorkerManager.js */ "./imageLoader/webWorkerManager.js");

Object.defineProperty(exports, 'webWorkerManager', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_webWorkerManager).default;
  }
});

var _version = __webpack_require__(/*! ../version.js */ "./version.js");

Object.defineProperty(exports, 'version', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_version).default;
  }
});

var _index4 = __webpack_require__(/*! ./internal/index.js */ "./imageLoader/internal/index.js");

Object.defineProperty(exports, 'internal', {
  enumerable: true,
  get: function get() {
    return _index4.internal;
  }
});

var _externalModules = __webpack_require__(/*! ../externalModules.js */ "./externalModules.js");

Object.defineProperty(exports, 'external', {
  enumerable: true,
  get: function get() {
    return _externalModules.external;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./imageLoader/internal/index.js":
/*!***************************************!*\
  !*** ./imageLoader/internal/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.internal = exports.xhrRequest = exports.getOptions = exports.setOptions = undefined;

var _xhrRequest = __webpack_require__(/*! ./xhrRequest.js */ "./imageLoader/internal/xhrRequest.js");

var _xhrRequest2 = _interopRequireDefault(_xhrRequest);

var _options = __webpack_require__(/*! ./options.js */ "./imageLoader/internal/options.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var internal = {
  xhrRequest: _xhrRequest2.default,
  setOptions: _options.setOptions,
  getOptions: _options.getOptions
};

exports.setOptions = _options.setOptions;
exports.getOptions = _options.getOptions;
exports.xhrRequest = _xhrRequest2.default;
exports.internal = internal;

/***/ }),

/***/ "./imageLoader/internal/options.js":
/*!*****************************************!*\
  !*** ./imageLoader/internal/options.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setOptions = setOptions;
exports.getOptions = getOptions;
var options = {
  // callback allowing customization of the xhr (e.g. adding custom auth headers, cors, etc)
  beforeSend: function beforeSend() /* xhr, imageId */{},

  // callback allowing modification of newly created image objects
  imageCreated: function imageCreated() /* image */{},

  strict: false,
  useWebWorkers: true,
  decodeConfig: {
    usePDFJS: false
  }
};

function setOptions(newOptions) {
  options = Object.assign(options, newOptions);
}

function getOptions() {
  return options;
}

/***/ }),

/***/ "./imageLoader/internal/xhrRequest.js":
/*!********************************************!*\
  !*** ./imageLoader/internal/xhrRequest.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _externalModules = __webpack_require__(/*! ../../externalModules.js */ "./externalModules.js");

var _options = __webpack_require__(/*! ./options.js */ "./imageLoader/internal/options.js");

function xhrRequest(url, imageId) {
  var headers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var params = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  var cornerstone = _externalModules.external.cornerstone;
  var options = (0, _options.getOptions)();

  // Make the request for the DICOM P10 SOP Instance
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();

    xhr.open('get', url, true);
    xhr.responseType = 'arraybuffer';
    options.beforeSend(xhr, imageId);
    Object.keys(headers).forEach(function (key) {
      xhr.setRequestHeader(key, headers[key]);
    });

    params.deferred = {
      resolve: resolve,
      reject: reject
    };
    params.url = url;
    params.imageId = imageId;

    // Event triggered when downloading an image starts
    xhr.onloadstart = function (event) {
      // Action
      if (options.onloadstart) {
        options.onloadstart(event, params);
      }

      // Event
      var eventData = {
        url: url,
        imageId: imageId
      };

      cornerstone.triggerEvent(cornerstone.events, 'cornerstoneimageloadstart', eventData);
    };

    // Event triggered when downloading an image ends
    xhr.onloadend = function (event) {
      // Action
      if (options.onloadend) {
        options.onloadend(event, params);
      }

      var eventData = {
        url: url,
        imageId: imageId
      };

      // Event
      cornerstone.triggerEvent(cornerstone.events, 'cornerstoneimageloadend', eventData);
    };

    // handle response data
    xhr.onreadystatechange = function (event) {
      // Action
      if (options.onreadystatechange) {
        options.onreadystatechange(event, params);

        return;
      }

      // Default action
      // TODO: consider sending out progress messages here as we receive the pixel data
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(xhr.response, xhr);
        } else {
          // request failed, reject the Promise
          reject(xhr);
        }
      }
    };

    // Event triggered when downloading an image progresses
    xhr.onprogress = function (oProgress) {
      // console.log('progress:',oProgress)
      var loaded = oProgress.loaded; // evt.loaded the bytes browser receive
      var total = void 0;
      var percentComplete = void 0;

      if (oProgress.lengthComputable) {
        total = oProgress.total; // evt.total the total bytes seted by the header
        percentComplete = Math.round(loaded / total * 100);
      }

      // Action
      if (options.onprogress) {
        options.onprogress(oProgress, params);
      }

      // Event
      var eventData = {
        url: url,
        imageId: imageId,
        loaded: loaded,
        total: total,
        percentComplete: percentComplete
      };

      cornerstone.triggerEvent(cornerstone.events, 'cornerstoneimageloadprogress', eventData);
    };

    xhr.send();
  });
}

exports.default = xhrRequest;

/***/ }),

/***/ "./imageLoader/isColorImage.js":
/*!*************************************!*\
  !*** ./imageLoader/isColorImage.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (photoMetricInterpretation) {
  return photoMetricInterpretation === 'RGB' || photoMetricInterpretation === 'PALETTE COLOR' || photoMetricInterpretation === 'YBR_FULL' || photoMetricInterpretation === 'YBR_FULL_422' || photoMetricInterpretation === 'YBR_PARTIAL_422' || photoMetricInterpretation === 'YBR_PARTIAL_420' || photoMetricInterpretation === 'YBR_RCT' || photoMetricInterpretation === 'YBR_ICT';
};

/***/ }),

/***/ "./imageLoader/isJPEGBaseline8BitColor.js":
/*!************************************************!*\
  !*** ./imageLoader/isJPEGBaseline8BitColor.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function isJPEGBaseline8BitColor(imageFrame, transferSyntax) {
  transferSyntax = transferSyntax || imageFrame.transferSyntax;

  if (imageFrame.bitsAllocated === 8 && transferSyntax === '1.2.840.10008.1.2.4.50' && (imageFrame.samplesPerPixel === 3 || imageFrame.samplesPerPixel === 4)) {
    return true;
  }
}

exports.default = isJPEGBaseline8BitColor;

/***/ }),

/***/ "./imageLoader/registerLoaders.js":
/*!****************************************!*\
  !*** ./imageLoader/registerLoaders.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ./wadors/index.js */ "./imageLoader/wadors/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ./wadouri/index.js */ "./imageLoader/wadouri/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Register the WADO-URI and WADO-RS image loaders and metaData providers
 * with an instance of Cornerstone Core.
 *
 * @param cornerstone The Cornerstone Core library to register the image loaders with
 */
function registerLoaders(cornerstone) {
  _index2.default.register(cornerstone);
  _index4.default.register(cornerstone);
}

exports.default = registerLoaders;

/***/ }),

/***/ "./imageLoader/wadors/findIndexOfString.js":
/*!*************************************************!*\
  !*** ./imageLoader/wadors/findIndexOfString.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function checkToken(token, data, dataOffset) {

  if (dataOffset + token.length > data.length) {
    return false;
  }

  var endIndex = dataOffset;

  for (var i = 0; i < token.length; i++) {
    if (token[i] !== data[endIndex++]) {
      return false;
    }
  }

  return true;
}

function stringToUint8Array(str) {
  var uint = new Uint8Array(str.length);

  for (var i = 0, j = str.length; i < j; i++) {
    uint[i] = str.charCodeAt(i);
  }

  return uint;
}

function findIndexOfString(data, str, offset) {

  offset = offset || 0;

  var token = stringToUint8Array(str);

  for (var i = offset; i < data.length; i++) {
    if (token[0] === data[i]) {
      // console.log('match @', i);
      if (checkToken(token, data, i)) {
        return i;
      }
    }
  }

  return -1;
}
exports.default = findIndexOfString;

/***/ }),

/***/ "./imageLoader/wadors/getPixelData.js":
/*!********************************************!*\
  !*** ./imageLoader/wadors/getPixelData.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../internal/index.js */ "./imageLoader/internal/index.js");

var _findIndexOfString = __webpack_require__(/*! ./findIndexOfString.js */ "./imageLoader/wadors/findIndexOfString.js");

var _findIndexOfString2 = _interopRequireDefault(_findIndexOfString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function findBoundary(header) {
  for (var i = 0; i < header.length; i++) {
    if (header[i].substr(0, 2) === '--') {
      return header[i];
    }
  }
}

function findContentType(header) {
  for (var i = 0; i < header.length; i++) {
    if (header[i].substr(0, 13) === 'Content-Type:') {
      return header[i].substr(13).trim();
    }
  }
}

function uint8ArrayToString(data, offset, length) {
  offset = offset || 0;
  length = length || data.length - offset;
  var str = '';

  for (var i = offset; i < offset + length; i++) {
    str += String.fromCharCode(data[i]);
  }

  return str;
}

function getPixelData(uri, imageId) {
  var mediaType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'application/octet-stream';

  var headers = {
    accept: mediaType
  };

  return new Promise(function (resolve, reject) {
    var loadPromise = (0, _index.xhrRequest)(uri, imageId, headers);

    loadPromise.then(function (imageFrameAsArrayBuffer /* , xhr*/) {

      // request succeeded, Parse the multi-part mime response
      var response = new Uint8Array(imageFrameAsArrayBuffer);

      // First look for the multipart mime header
      var tokenIndex = (0, _findIndexOfString2.default)(response, '\r\n\r\n');

      if (tokenIndex === -1) {
        reject(new Error('invalid response - no multipart mime header'));
      }
      var header = uint8ArrayToString(response, 0, tokenIndex);
      // Now find the boundary  marker
      var split = header.split('\r\n');
      var boundary = findBoundary(split);

      if (!boundary) {
        reject(new Error('invalid response - no boundary marker'));
      }
      var offset = tokenIndex + 4; // skip over the \r\n\r\n

      // find the terminal boundary marker
      var endIndex = (0, _findIndexOfString2.default)(response, boundary, offset);

      if (endIndex === -1) {
        reject(new Error('invalid response - terminating boundary not found'));
      }

      // Remove \r\n from the length
      var length = endIndex - offset - 2;

      // return the info for this pixel data
      resolve({
        contentType: findContentType(split),
        imageFrame: {
          pixelData: new Uint8Array(imageFrameAsArrayBuffer, offset, length)
        }
      });
    });
  });
}

exports.default = getPixelData;

/***/ }),

/***/ "./imageLoader/wadors/index.js":
/*!*************************************!*\
  !*** ./imageLoader/wadors/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ./metaData/index.js */ "./imageLoader/wadors/metaData/index.js");

var _findIndexOfString = __webpack_require__(/*! ./findIndexOfString.js */ "./imageLoader/wadors/findIndexOfString.js");

var _findIndexOfString2 = _interopRequireDefault(_findIndexOfString);

var _getPixelData = __webpack_require__(/*! ./getPixelData.js */ "./imageLoader/wadors/getPixelData.js");

var _getPixelData2 = _interopRequireDefault(_getPixelData);

var _metaDataManager = __webpack_require__(/*! ./metaDataManager.js */ "./imageLoader/wadors/metaDataManager.js");

var _metaDataManager2 = _interopRequireDefault(_metaDataManager);

var _loadImage = __webpack_require__(/*! ./loadImage.js */ "./imageLoader/wadors/loadImage.js");

var _loadImage2 = _interopRequireDefault(_loadImage);

var _register = __webpack_require__(/*! ./register.js */ "./imageLoader/wadors/register.js");

var _register2 = _interopRequireDefault(_register);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var metaData = {
  getNumberString: _index.getNumberString,
  getNumberValue: _index.getNumberValue,
  getNumberValues: _index.getNumberValues,
  getValue: _index.getValue,
  metaDataProvider: _index.metaDataProvider
};

exports.default = {
  metaData: metaData,
  findIndexOfString: _findIndexOfString2.default,
  getPixelData: _getPixelData2.default,
  loadImage: _loadImage2.default,
  metaDataManager: _metaDataManager2.default,
  register: _register2.default
};

/***/ }),

/***/ "./imageLoader/wadors/loadImage.js":
/*!*****************************************!*\
  !*** ./imageLoader/wadors/loadImage.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTransferSyntaxForContentType = getTransferSyntaxForContentType;

var _metaDataManager = __webpack_require__(/*! ./metaDataManager.js */ "./imageLoader/wadors/metaDataManager.js");

var _metaDataManager2 = _interopRequireDefault(_metaDataManager);

var _getPixelData = __webpack_require__(/*! ./getPixelData.js */ "./imageLoader/wadors/getPixelData.js");

var _getPixelData2 = _interopRequireDefault(_getPixelData);

var _createImage = __webpack_require__(/*! ../createImage.js */ "./imageLoader/createImage.js");

var _createImage2 = _interopRequireDefault(_createImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Helper method to extract the transfer-syntax from the response of the server.
 * @param {string} contentType The value of the content-type header as returned by the WADO-RS server.
 * @return The transfer-syntax as announced by the server, or Implicit Little Endian by default.
 */
function getTransferSyntaxForContentType(contentType) {
  var transferSyntax = '1.2.840.10008.1.2'; // Default is Implicit Little Endian.

  if (contentType) {
    // Browse through the content type parameters
    var parameters = contentType.split(';');

    for (var parameterIndex in parameters) {
      var parameter = parameters[parameterIndex];

      // Look for a transfer-syntax=XXXX pair
      var parameterValues = parameter.split('=');

      if (parameterValues.length !== 2) {
        continue;
      }

      if (parameterValues[0].trim() === 'transfer-syntax') {
        transferSyntax = parameterValues[1].trim() || transferSyntax;
      }
    }
  }

  return transferSyntax;
}

function loadImage(imageId, options) {
  var start = new Date().getTime();
  var uri = imageId.substring(7);

  var promise = new Promise(function (resolve, reject) {
    // check to make sure we have metadata for this imageId
    var metaData = _metaDataManager2.default.get(imageId);

    if (metaData === undefined) {
      var error = new Error('no metadata for imageId ' + imageId);

      return reject(error);
    }

    // TODO: load bulk data items that we might need
    var mediaType = 'multipart/related; type="application/octet-stream"'; // 'image/dicom+jp2';

    // get the pixel data from the server
    (0, _getPixelData2.default)(uri, imageId, mediaType).then(function (result) {
      var transferSyntax = getTransferSyntaxForContentType(result.contentType);
      var pixelData = result.imageFrame.pixelData;
      var imagePromise = (0, _createImage2.default)(imageId, pixelData, transferSyntax, options);

      imagePromise.then(function (image) {
        // add the loadTimeInMS property
        var end = new Date().getTime();

        image.loadTimeInMS = end - start;
        resolve(image);
      }, reject);
    }, reject);
  });

  return {
    promise: promise,
    cancelFn: undefined
  };
}

exports.default = loadImage;

/***/ }),

/***/ "./imageLoader/wadors/metaData/getNumberString.js":
/*!********************************************************!*\
  !*** ./imageLoader/wadors/metaData/getNumberString.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getValue = __webpack_require__(/*! ./getValue.js */ "./imageLoader/wadors/metaData/getValue.js");

var _getValue2 = _interopRequireDefault(_getValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns the first string value as a Javascript number
 *
 * @param element - The javascript object for the specified element in the metadata
 * @param [index] - the index of the value in a multi-valued element, default is 0
 * @param [defaultValue] - The default value to return if the element does not exist
 * @returns {*}
 */
function getNumberString(element, index, defaultValue) {
  var value = (0, _getValue2.default)(element, index, defaultValue);

  if (value === undefined) {
    return;
  }

  return parseFloat(value);
}

exports.default = getNumberString;

/***/ }),

/***/ "./imageLoader/wadors/metaData/getNumberValue.js":
/*!*******************************************************!*\
  !*** ./imageLoader/wadors/metaData/getNumberValue.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getValue = __webpack_require__(/*! ./getValue.js */ "./imageLoader/wadors/metaData/getValue.js");

var _getValue2 = _interopRequireDefault(_getValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getNumberValue(element, index) {
  var value = (0, _getValue2.default)(element, index);

  if (value === undefined) {
    return;
  }

  return parseFloat(value);
}

exports.default = getNumberValue;

/***/ }),

/***/ "./imageLoader/wadors/metaData/getNumberValues.js":
/*!********************************************************!*\
  !*** ./imageLoader/wadors/metaData/getNumberValues.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Returns the values as an array of javascript numbers
 *
 * @param element - The javascript object for the specified element in the metadata
 * @param [minimumLength] - the minimum number of values
 * @returns {*}
 */
function getNumberValues(element, minimumLength) {
  if (!element) {
    return;
  }
  // Value is not present if the attribute has a zero length value
  if (!element.Value) {
    return;
  }
  // make sure we have the expected length
  if (minimumLength && element.Value.length < minimumLength) {
    return;
  }

  var values = [];

  for (var i = 0; i < element.Value.length; i++) {
    values.push(parseFloat(element.Value[i]));
  }

  return values;
}

exports.default = getNumberValues;

/***/ }),

/***/ "./imageLoader/wadors/metaData/getValue.js":
/*!*************************************************!*\
  !*** ./imageLoader/wadors/metaData/getValue.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Returns the raw value
 *
 * @param element - The javascript object for the specified element in the metadata
 * @param [index] - the index of the value in a multi-valued element, default is 0
 * @param [defaultValue] - The default value to return if the element does not exist
 * @returns {*}
 */
function getValue(element, index, defaultValue) {
  index = index || 0;
  if (!element) {
    return defaultValue;
  }
  // Value is not present if the attribute has a zero length value
  if (!element.Value) {
    return defaultValue;
  }
  // make sure we have the specified index
  if (element.Value.length <= index) {
    return defaultValue;
  }

  return element.Value[index];
}

exports.default = getValue;

/***/ }),

/***/ "./imageLoader/wadors/metaData/index.js":
/*!**********************************************!*\
  !*** ./imageLoader/wadors/metaData/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getNumberString = __webpack_require__(/*! ./getNumberString.js */ "./imageLoader/wadors/metaData/getNumberString.js");

Object.defineProperty(exports, 'getNumberString', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_getNumberString).default;
  }
});

var _getNumberValue = __webpack_require__(/*! ./getNumberValue.js */ "./imageLoader/wadors/metaData/getNumberValue.js");

Object.defineProperty(exports, 'getNumberValue', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_getNumberValue).default;
  }
});

var _getNumberValues = __webpack_require__(/*! ./getNumberValues.js */ "./imageLoader/wadors/metaData/getNumberValues.js");

Object.defineProperty(exports, 'getNumberValues', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_getNumberValues).default;
  }
});

var _getValue = __webpack_require__(/*! ./getValue.js */ "./imageLoader/wadors/metaData/getValue.js");

Object.defineProperty(exports, 'getValue', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_getValue).default;
  }
});

var _metaDataProvider = __webpack_require__(/*! ./metaDataProvider.js */ "./imageLoader/wadors/metaData/metaDataProvider.js");

Object.defineProperty(exports, 'metaDataProvider', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_metaDataProvider).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./imageLoader/wadors/metaData/metaDataProvider.js":
/*!*********************************************************!*\
  !*** ./imageLoader/wadors/metaData/metaDataProvider.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _externalModules = __webpack_require__(/*! ../../../externalModules.js */ "./externalModules.js");

var _getNumberValues = __webpack_require__(/*! ./getNumberValues.js */ "./imageLoader/wadors/metaData/getNumberValues.js");

var _getNumberValues2 = _interopRequireDefault(_getNumberValues);

var _getValue = __webpack_require__(/*! ./getValue.js */ "./imageLoader/wadors/metaData/getValue.js");

var _getValue2 = _interopRequireDefault(_getValue);

var _getNumberValue = __webpack_require__(/*! ./getNumberValue.js */ "./imageLoader/wadors/metaData/getNumberValue.js");

var _getNumberValue2 = _interopRequireDefault(_getNumberValue);

var _metaDataManager = __webpack_require__(/*! ../metaDataManager.js */ "./imageLoader/wadors/metaDataManager.js");

var _metaDataManager2 = _interopRequireDefault(_metaDataManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function metaDataProvider(type, imageId) {
  var metaData = _metaDataManager2.default.get(imageId);

  if (!metaData) {
    return;
  }

  if (type === 'generalSeriesModule') {
    return {
      modality: (0, _getValue2.default)(metaData['00080060']),
      seriesInstanceUID: (0, _getValue2.default)(metaData['0020000e']),
      seriesNumber: (0, _getNumberValue2.default)(metaData['00200011']),
      studyInstanceUID: (0, _getValue2.default)(metaData['0020000d']),
      seriesDate: _externalModules.dicomParser.parseDA((0, _getValue2.default)(metaData['00080021'])),
      seriesTime: _externalModules.dicomParser.parseTM((0, _getValue2.default)(metaData['00080031'], 0, ''))
    };
  }

  if (type === 'patientStudyModule') {
    return {
      patientAge: (0, _getNumberValue2.default)(metaData['00101010']),
      patientSize: (0, _getNumberValue2.default)(metaData['00101020']),
      patientWeight: (0, _getNumberValue2.default)(metaData['00101030'])
    };
  }

  if (type === 'imagePlaneModule') {
    var imageOrientationPatient = (0, _getNumberValues2.default)(metaData['00200037'], 6);
    var imagePositionPatient = (0, _getNumberValues2.default)(metaData['00200032'], 3);
    var pixelSpacing = (0, _getNumberValues2.default)(metaData['00280030'], 2);
    var columnPixelSpacing = 1.0;
    var rowPixelSpacing = 1.0;

    if (pixelSpacing) {
      rowPixelSpacing = pixelSpacing[0];
      columnPixelSpacing = pixelSpacing[1];
    }

    var rowCosines = null;
    var columnCosines = null;

    if (imageOrientationPatient) {
      rowCosines = [parseFloat(imageOrientationPatient[0]), parseFloat(imageOrientationPatient[1]), parseFloat(imageOrientationPatient[2])];
      columnCosines = [parseFloat(imageOrientationPatient[3]), parseFloat(imageOrientationPatient[4]), parseFloat(imageOrientationPatient[5])];
    }

    return {
      frameOfReferenceUID: (0, _getValue2.default)(metaData['00200052']),
      rows: (0, _getNumberValue2.default)(metaData['00280010']),
      columns: (0, _getNumberValue2.default)(metaData['00280011']),
      imageOrientationPatient: imageOrientationPatient,
      rowCosines: rowCosines,
      columnCosines: columnCosines,
      imagePositionPatient: imagePositionPatient,
      sliceThickness: (0, _getNumberValue2.default)(metaData['00180050']),
      sliceLocation: (0, _getNumberValue2.default)(metaData['00201041']),
      pixelSpacing: pixelSpacing,
      rowPixelSpacing: rowPixelSpacing,
      columnPixelSpacing: columnPixelSpacing
    };
  }

  if (type === 'imagePixelModule') {
    return {
      samplesPerPixel: (0, _getNumberValue2.default)(metaData['00280002']),
      photometricInterpretation: (0, _getValue2.default)(metaData['00280004']),
      rows: (0, _getNumberValue2.default)(metaData['00280010']),
      columns: (0, _getNumberValue2.default)(metaData['00280011']),
      bitsAllocated: (0, _getNumberValue2.default)(metaData['00280100']),
      bitsStored: (0, _getNumberValue2.default)(metaData['00280101']),
      highBit: (0, _getValue2.default)(metaData['00280102']),
      pixelRepresentation: (0, _getNumberValue2.default)(metaData['00280103']),
      planarConfiguration: (0, _getNumberValue2.default)(metaData['00280006']),
      pixelAspectRatio: (0, _getValue2.default)(metaData['00280034']),
      smallestPixelValue: (0, _getNumberValue2.default)(metaData['00280106']),
      largestPixelValue: (0, _getNumberValue2.default)(metaData['00280107']),
      redPaletteColorLookupTableDescriptor: (0, _getNumberValues2.default)(metaData['00281101']),
      greenPaletteColorLookupTableDescriptor: (0, _getNumberValues2.default)(metaData['00281102']),
      bluePaletteColorLookupTableDescriptor: (0, _getNumberValues2.default)(metaData['00281103']),
      redPaletteColorLookupTableData: (0, _getNumberValues2.default)(metaData['00281201']),
      greenPaletteColorLookupTableData: (0, _getNumberValues2.default)(metaData['00281202']),
      bluePaletteColorLookupTableData: (0, _getNumberValues2.default)(metaData['00281203'])
    };
  }

  if (type === 'voiLutModule') {
    return {
      // TODO VOT LUT Sequence
      windowCenter: (0, _getNumberValues2.default)(metaData['00281050'], 1),
      windowWidth: (0, _getNumberValues2.default)(metaData['00281051'], 1)
    };
  }

  if (type === 'modalityLutModule') {
    return {
      // TODO VOT LUT Sequence
      rescaleIntercept: (0, _getNumberValue2.default)(metaData['00281052']),
      rescaleSlope: (0, _getNumberValue2.default)(metaData['00281053']),
      rescaleType: (0, _getValue2.default)(metaData['00281054'])
    };
  }

  if (type === 'sopCommonModule') {
    return {
      sopClassUID: (0, _getValue2.default)(metaData['00080016']),
      sopInstanceUID: (0, _getValue2.default)(metaData['00080018'])
    };
  }

  if (type === 'petIsotopeModule') {
    var radiopharmaceuticalInfo = (0, _getValue2.default)(metaData['00540016']);

    if (radiopharmaceuticalInfo === undefined) {
      return;
    }

    return {
      radiopharmaceuticalInfo: {
        radiopharmaceuticalStartTime: _externalModules.dicomParser.parseTM((0, _getValue2.default)(radiopharmaceuticalInfo['00181072'], 0, '')),
        radionuclideTotalDose: (0, _getNumberValue2.default)(radiopharmaceuticalInfo['00181074']),
        radionuclideHalfLife: (0, _getNumberValue2.default)(radiopharmaceuticalInfo['00181075'])
      }
    };
  }
}

exports.default = metaDataProvider;

/***/ }),

/***/ "./imageLoader/wadors/metaDataManager.js":
/*!***********************************************!*\
  !*** ./imageLoader/wadors/metaDataManager.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});


var imageIds = [];

function add(imageId, metadata) {
  imageIds[imageId] = metadata;
}

function get(imageId) {
  return imageIds[imageId];
}

function remove(imageId) {
  imageIds[imageId] = undefined;
}

function purge() {
  imageIds = [];
}

exports.default = {
  add: add,
  get: get,
  remove: remove,
  purge: purge
};

/***/ }),

/***/ "./imageLoader/wadors/register.js":
/*!****************************************!*\
  !*** ./imageLoader/wadors/register.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (cornerstone) {
  // register wadors scheme and metadata provider
  cornerstone.registerImageLoader('wadors', _loadImage2.default);
  cornerstone.metaData.addProvider(_index.metaDataProvider);
};

var _loadImage = __webpack_require__(/*! ./loadImage.js */ "./imageLoader/wadors/loadImage.js");

var _loadImage2 = _interopRequireDefault(_loadImage);

var _index = __webpack_require__(/*! ./metaData/index.js */ "./imageLoader/wadors/metaData/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./imageLoader/wadouri/dataSetCacheManager.js":
/*!****************************************************!*\
  !*** ./imageLoader/wadouri/dataSetCacheManager.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getInfo = getInfo;

var _externalModules = __webpack_require__(/*! ../../externalModules.js */ "./externalModules.js");

var _index = __webpack_require__(/*! ../internal/index.js */ "./imageLoader/internal/index.js");

/**
 * This object supports loading of DICOM P10 dataset from a uri and caching it so it can be accessed
 * by the caller.  This allows a caller to access the datasets without having to go through cornerstone's
 * image loader mechanism.  One reason a caller may need to do this is to determine the number of frames
 * in a multiframe sop instance so it can create the imageId's correctly.
 */
var cacheSizeInBytes = 0;

var loadedDataSets = {};
var promises = {};

// returns true if the wadouri for the specified index has been loaded
function isLoaded(uri) {
  return loadedDataSets[uri] !== undefined;
}

function get(uri) {
  if (!loadedDataSets[uri]) {
    return;
  }

  return loadedDataSets[uri].dataSet;
}

// loads the dicom dataset from the wadouri sp
function load(uri) {
  var loadRequest = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _index.xhrRequest;
  var imageId = arguments[2];

  var cornerstone = _externalModules.external.cornerstone;

  // if already loaded return it right away
  if (loadedDataSets[uri]) {
    // console.log('using loaded dataset ' + uri);
    return new Promise(function (resolve) {
      loadedDataSets[uri].cacheCount++;
      resolve(loadedDataSets[uri].dataSet);
    });
  }

  // if we are currently loading this uri, increment the cacheCount and return its promise
  if (promises[uri]) {
    // console.log('returning existing load promise for ' + uri);
    promises[uri].cacheCount++;

    return promises[uri];
  }

  // This uri is not loaded or being loaded, load it via an xhrRequest
  var loadDICOMPromise = loadRequest(uri, imageId);

  // handle success and failure of the XHR request load
  var promise = new Promise(function (resolve, reject) {
    loadDICOMPromise.then(function (dicomPart10AsArrayBuffer /* , xhr*/) {
      var byteArray = new Uint8Array(dicomPart10AsArrayBuffer);

      // Reject the promise if parsing the dicom file fails
      var dataSet = void 0;

      try {
        dataSet = _externalModules.dicomParser.parseDicom(byteArray);
      } catch (error) {
        return reject(error);
      }

      loadedDataSets[uri] = {
        dataSet: dataSet,
        cacheCount: promise.cacheCount
      };
      cacheSizeInBytes += dataSet.byteArray.length;
      resolve(dataSet);

      cornerstone.triggerEvent(cornerstone.events, 'datasetscachechanged', {
        uri: uri,
        action: 'loaded',
        cacheInfo: getInfo()
      });
    }, reject).then(function () {
      // Remove the promise if success
      delete promises[uri];
    }, function () {
      // Remove the promise if failure
      delete promises[uri];
    });
  });

  promise.cacheCount = 1;

  promises[uri] = promise;

  return promise;
}

// remove the cached/loaded dicom dataset for the specified wadouri to free up memory
function unload(uri) {
  var cornerstone = _externalModules.external.cornerstone;

  // console.log('unload for ' + uri);
  if (loadedDataSets[uri]) {
    loadedDataSets[uri].cacheCount--;
    if (loadedDataSets[uri].cacheCount === 0) {
      // console.log('removing loaded dataset for ' + uri);
      cacheSizeInBytes -= loadedDataSets[uri].dataSet.byteArray.length;
      delete loadedDataSets[uri];

      cornerstone.triggerEvent(cornerstone.events, 'datasetscachechanged', {
        uri: uri,
        action: 'unloaded',
        cacheInfo: getInfo()
      });
    }
  }
}

function getInfo() {
  return {
    cacheSizeInBytes: cacheSizeInBytes,
    numberOfDataSetsCached: Object.keys(loadedDataSets).length
  };
}

// removes all cached datasets from memory
function purge() {
  loadedDataSets = {};
  promises = {};
}

exports.default = {
  isLoaded: isLoaded,
  load: load,
  unload: unload,
  getInfo: getInfo,
  purge: purge,
  get: get
};

/***/ }),

/***/ "./imageLoader/wadouri/fileManager.js":
/*!********************************************!*\
  !*** ./imageLoader/wadouri/fileManager.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var files = [];

function add(file) {
  var fileIndex = files.push(file);

  return "dicomfile:" + (fileIndex - 1);
}

function get(index) {
  return files[index];
}

function remove(index) {
  files[index] = undefined;
}

function purge() {
  files = [];
}

exports.default = {
  add: add,
  get: get,
  remove: remove,
  purge: purge
};

/***/ }),

/***/ "./imageLoader/wadouri/getEncapsulatedImageFrame.js":
/*!**********************************************************!*\
  !*** ./imageLoader/wadouri/getEncapsulatedImageFrame.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getEncapsulatedImageFrame;

var _externalModules = __webpack_require__(/*! ../../externalModules.js */ "./externalModules.js");

/**
 * Function to deal with extracting an image frame from an encapsulated data set.
 */

function framesAreFragmented(dataSet) {
  var numberOfFrames = dataSet.intString('x00280008');
  var pixelDataElement = dataSet.elements.x7fe00010;

  return numberOfFrames !== pixelDataElement.fragments.length;
}

function getEncapsulatedImageFrame(dataSet, frameIndex) {
  if (dataSet.elements.x7fe00010 && dataSet.elements.x7fe00010.basicOffsetTable.length) {
    // Basic Offset Table is not empty
    return _externalModules.dicomParser.readEncapsulatedImageFrame(dataSet, dataSet.elements.x7fe00010, frameIndex);
  }

  // Empty basic offset table

  if (framesAreFragmented(dataSet)) {
    var basicOffsetTable = _externalModules.dicomParser.createJPEGBasicOffsetTable(dataSet, dataSet.elements.x7fe00010);

    return _externalModules.dicomParser.readEncapsulatedImageFrame(dataSet, dataSet.elements.x7fe00010, frameIndex, basicOffsetTable);
  }

  return _externalModules.dicomParser.readEncapsulatedPixelDataFromFragments(dataSet, dataSet.elements.x7fe00010, frameIndex);
}

/***/ }),

/***/ "./imageLoader/wadouri/getPixelData.js":
/*!*********************************************!*\
  !*** ./imageLoader/wadouri/getPixelData.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getEncapsulatedImageFrame = __webpack_require__(/*! ./getEncapsulatedImageFrame.js */ "./imageLoader/wadouri/getEncapsulatedImageFrame.js");

var _getEncapsulatedImageFrame2 = _interopRequireDefault(_getEncapsulatedImageFrame);

var _getUncompressedImageFrame = __webpack_require__(/*! ./getUncompressedImageFrame.js */ "./imageLoader/wadouri/getUncompressedImageFrame.js");

var _getUncompressedImageFrame2 = _interopRequireDefault(_getUncompressedImageFrame);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getPixelData(dataSet) {
  var frameIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  var pixelDataElement = dataSet.elements.x7fe00010 || dataSet.elements.x7fe00008;

  if (!pixelDataElement) {
    return null;
  }

  if (pixelDataElement.encapsulatedPixelData) {
    return (0, _getEncapsulatedImageFrame2.default)(dataSet, frameIndex);
  }

  return (0, _getUncompressedImageFrame2.default)(dataSet, frameIndex);
}

exports.default = getPixelData;

/***/ }),

/***/ "./imageLoader/wadouri/getUncompressedImageFrame.js":
/*!**********************************************************!*\
  !*** ./imageLoader/wadouri/getUncompressedImageFrame.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _unpackBinaryFrame = __webpack_require__(/*! ./unpackBinaryFrame.js */ "./imageLoader/wadouri/unpackBinaryFrame.js");

var _unpackBinaryFrame2 = _interopRequireDefault(_unpackBinaryFrame);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Function to deal with extracting an image frame from an encapsulated data set.
 */

function getUncompressedImageFrame(dataSet, frameIndex) {
  var pixelDataElement = dataSet.elements.x7fe00010 || dataSet.elements.x7fe00008;
  var bitsAllocated = dataSet.uint16('x00280100');
  var rows = dataSet.uint16('x00280010');
  var columns = dataSet.uint16('x00280011');
  var samplesPerPixel = dataSet.uint16('x00280002');

  var pixelDataOffset = pixelDataElement.dataOffset;
  var pixelsPerFrame = rows * columns * samplesPerPixel;

  var frameOffset = void 0;

  if (bitsAllocated === 8) {
    frameOffset = pixelDataOffset + frameIndex * pixelsPerFrame;
    if (frameOffset >= dataSet.byteArray.length) {
      throw new Error('frame exceeds size of pixelData');
    }

    return new Uint8Array(dataSet.byteArray.buffer, frameOffset, pixelsPerFrame);
  } else if (bitsAllocated === 16) {
    frameOffset = pixelDataOffset + frameIndex * pixelsPerFrame * 2;
    if (frameOffset >= dataSet.byteArray.length) {
      throw new Error('frame exceeds size of pixelData');
    }

    return new Uint8Array(dataSet.byteArray.buffer, frameOffset, pixelsPerFrame * 2);
  } else if (bitsAllocated === 1) {
    frameOffset = pixelDataOffset + frameIndex * pixelsPerFrame * 0.125;
    if (frameOffset >= dataSet.byteArray.length) {
      throw new Error('frame exceeds size of pixelData');
    }

    return (0, _unpackBinaryFrame2.default)(dataSet.byteArray, frameOffset, pixelsPerFrame);
  } else if (bitsAllocated === 32) {
    frameOffset = pixelDataOffset + frameIndex * pixelsPerFrame * 4;
    if (frameOffset >= dataSet.byteArray.length) {
      throw new Error('frame exceeds size of pixelData');
    }

    return new Uint8Array(dataSet.byteArray.buffer, frameOffset, pixelsPerFrame * 4);
  }

  throw new Error('unsupported pixel format');
}

exports.default = getUncompressedImageFrame;

/***/ }),

/***/ "./imageLoader/wadouri/index.js":
/*!**************************************!*\
  !*** ./imageLoader/wadouri/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ./metaData/index.js */ "./imageLoader/wadouri/metaData/index.js");

var _dataSetCacheManager = __webpack_require__(/*! ./dataSetCacheManager.js */ "./imageLoader/wadouri/dataSetCacheManager.js");

var _dataSetCacheManager2 = _interopRequireDefault(_dataSetCacheManager);

var _fileManager = __webpack_require__(/*! ./fileManager.js */ "./imageLoader/wadouri/fileManager.js");

var _fileManager2 = _interopRequireDefault(_fileManager);

var _getEncapsulatedImageFrame = __webpack_require__(/*! ./getEncapsulatedImageFrame.js */ "./imageLoader/wadouri/getEncapsulatedImageFrame.js");

var _getEncapsulatedImageFrame2 = _interopRequireDefault(_getEncapsulatedImageFrame);

var _getUncompressedImageFrame = __webpack_require__(/*! ./getUncompressedImageFrame.js */ "./imageLoader/wadouri/getUncompressedImageFrame.js");

var _getUncompressedImageFrame2 = _interopRequireDefault(_getUncompressedImageFrame);

var _loadFileRequest = __webpack_require__(/*! ./loadFileRequest.js */ "./imageLoader/wadouri/loadFileRequest.js");

var _loadFileRequest2 = _interopRequireDefault(_loadFileRequest);

var _loadImage = __webpack_require__(/*! ./loadImage.js */ "./imageLoader/wadouri/loadImage.js");

var _parseImageId = __webpack_require__(/*! ./parseImageId.js */ "./imageLoader/wadouri/parseImageId.js");

var _parseImageId2 = _interopRequireDefault(_parseImageId);

var _unpackBinaryFrame = __webpack_require__(/*! ./unpackBinaryFrame.js */ "./imageLoader/wadouri/unpackBinaryFrame.js");

var _unpackBinaryFrame2 = _interopRequireDefault(_unpackBinaryFrame);

var _register = __webpack_require__(/*! ./register.js */ "./imageLoader/wadouri/register.js");

var _register2 = _interopRequireDefault(_register);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var metaData = {
  getImagePixelModule: _index.getImagePixelModule,
  getLUTs: _index.getLUTs,
  getModalityLUTOutputPixelRepresentation: _index.getModalityLUTOutputPixelRepresentation,
  getNumberValues: _index.getNumberValues,
  metaDataProvider: _index.metaDataProvider
};

exports.default = {
  metaData: metaData,
  dataSetCacheManager: _dataSetCacheManager2.default,
  fileManager: _fileManager2.default,
  getEncapsulatedImageFrame: _getEncapsulatedImageFrame2.default,
  getUncompressedImageFrame: _getUncompressedImageFrame2.default,
  loadFileRequest: _loadFileRequest2.default,
  loadImageFromPromise: _loadImage.loadImageFromPromise,
  getLoaderForScheme: _loadImage.getLoaderForScheme,
  loadImage: _loadImage.loadImage,
  parseImageId: _parseImageId2.default,
  unpackBinaryFrame: _unpackBinaryFrame2.default,
  register: _register2.default
};

/***/ }),

/***/ "./imageLoader/wadouri/loadFileRequest.js":
/*!************************************************!*\
  !*** ./imageLoader/wadouri/loadFileRequest.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _parseImageId = __webpack_require__(/*! ./parseImageId.js */ "./imageLoader/wadouri/parseImageId.js");

var _parseImageId2 = _interopRequireDefault(_parseImageId);

var _fileManager = __webpack_require__(/*! ./fileManager.js */ "./imageLoader/wadouri/fileManager.js");

var _fileManager2 = _interopRequireDefault(_fileManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function loadFileRequest(uri) {
  var parsedImageId = (0, _parseImageId2.default)(uri);
  var fileIndex = parseInt(parsedImageId.url, 10);
  var file = _fileManager2.default.get(fileIndex);

  return new Promise(function (resolve, reject) {
    var fileReader = new FileReader();

    fileReader.onload = function (e) {
      var dicomPart10AsArrayBuffer = e.target.result;

      resolve(dicomPart10AsArrayBuffer);
    };

    fileReader.onerror = reject;

    fileReader.readAsArrayBuffer(file);
  });
}

exports.default = loadFileRequest;

/***/ }),

/***/ "./imageLoader/wadouri/loadImage.js":
/*!******************************************!*\
  !*** ./imageLoader/wadouri/loadImage.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadImage = exports.getLoaderForScheme = exports.loadImageFromPromise = undefined;

var _createImage = __webpack_require__(/*! ../createImage.js */ "./imageLoader/createImage.js");

var _createImage2 = _interopRequireDefault(_createImage);

var _parseImageId = __webpack_require__(/*! ./parseImageId.js */ "./imageLoader/wadouri/parseImageId.js");

var _parseImageId2 = _interopRequireDefault(_parseImageId);

var _dataSetCacheManager = __webpack_require__(/*! ./dataSetCacheManager.js */ "./imageLoader/wadouri/dataSetCacheManager.js");

var _dataSetCacheManager2 = _interopRequireDefault(_dataSetCacheManager);

var _loadFileRequest = __webpack_require__(/*! ./loadFileRequest.js */ "./imageLoader/wadouri/loadFileRequest.js");

var _loadFileRequest2 = _interopRequireDefault(_loadFileRequest);

var _getPixelData = __webpack_require__(/*! ./getPixelData.js */ "./imageLoader/wadouri/getPixelData.js");

var _getPixelData2 = _interopRequireDefault(_getPixelData);

var _index = __webpack_require__(/*! ../internal/index.js */ "./imageLoader/internal/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// add a decache callback function to clear out our dataSetCacheManager
function addDecache(imageLoadObject, imageId) {
  imageLoadObject.decache = function () {
    // console.log('decache');
    var parsedImageId = (0, _parseImageId2.default)(imageId);

    _dataSetCacheManager2.default.unload(parsedImageId.url);
  };
}

function loadImageFromPromise(dataSetPromise, imageId) {
  var frame = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var sharedCacheKey = arguments[3];
  var options = arguments[4];
  var callbacks = arguments[5];

  var start = new Date().getTime();
  var imageLoadObject = {
    cancelFn: undefined
  };

  imageLoadObject.promise = new Promise(function (resolve, reject) {
    dataSetPromise.then(function (dataSet /* , xhr*/) {
      var pixelData = (0, _getPixelData2.default)(dataSet, frame);
      var transferSyntax = dataSet.string('x00020010');
      var loadEnd = new Date().getTime();
      var imagePromise = (0, _createImage2.default)(imageId, pixelData, transferSyntax, options);

      addDecache(imageLoadObject, imageId);

      imagePromise.then(function (image) {
        image.data = dataSet;
        image.sharedCacheKey = sharedCacheKey;
        var end = new Date().getTime();

        image.loadTimeInMS = loadEnd - start;
        image.totalTimeInMS = end - start;
        if (callbacks !== undefined && callbacks.imageDoneCallback !== undefined) {
          callbacks.imageDoneCallback(image);
        }
        resolve(image);
      }, function (error) {
        // Reject the error, and the dataSet
        reject({
          error: error,
          dataSet: dataSet
        });
      });
    }, function (error) {
      // Reject the error
      reject({
        error: error
      });
    });
  });

  return imageLoadObject;
}

function loadImageFromDataSet(dataSet, imageId) {
  var frame = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var sharedCacheKey = arguments[3];
  var options = arguments[4];

  var start = new Date().getTime();

  var promise = new Promise(function (resolve, reject) {
    var loadEnd = new Date().getTime();
    var imagePromise = void 0;

    try {
      var pixelData = (0, _getPixelData2.default)(dataSet, frame);
      var transferSyntax = dataSet.string('x00020010');

      imagePromise = (0, _createImage2.default)(imageId, pixelData, transferSyntax, options);
    } catch (error) {
      // Reject the error, and the dataSet
      reject({
        error: error,
        dataSet: dataSet
      });

      return;
    }

    imagePromise.then(function (image) {
      image.data = dataSet;
      image.sharedCacheKey = sharedCacheKey;
      var end = new Date().getTime();

      image.loadTimeInMS = loadEnd - start;
      image.totalTimeInMS = end - start;
      resolve(image);
    }, reject);
  });

  return {
    promise: promise,
    cancelFn: undefined
  };
}

function getLoaderForScheme(scheme) {
  if (scheme === 'dicomweb' || scheme === 'wadouri') {
    return _index.xhrRequest;
  } else if (scheme === 'dicomfile') {
    return _loadFileRequest2.default;
  }
}

function loadImage(imageId, options) {
  var parsedImageId = (0, _parseImageId2.default)(imageId);
  var loader = getLoaderForScheme(parsedImageId.scheme);

  // if the dataset for this url is already loaded, use it
  if (_dataSetCacheManager2.default.isLoaded(parsedImageId.url)) {
    var dataSet = _dataSetCacheManager2.default.get(parsedImageId.url, loader, imageId);

    return loadImageFromDataSet(dataSet, imageId, parsedImageId.frame, parsedImageId.url, options);
  }

  // load the dataSet via the dataSetCacheManager
  var dataSetPromise = _dataSetCacheManager2.default.load(parsedImageId.url, loader, imageId);

  return loadImageFromPromise(dataSetPromise, imageId, parsedImageId.frame, parsedImageId.url, options);
}

exports.loadImageFromPromise = loadImageFromPromise;
exports.getLoaderForScheme = getLoaderForScheme;
exports.loadImage = loadImage;

/***/ }),

/***/ "./imageLoader/wadouri/metaData/getImagePixelModule.js":
/*!*************************************************************!*\
  !*** ./imageLoader/wadouri/metaData/getImagePixelModule.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function getLutDescriptor(dataSet, tag) {
  if (!dataSet.elements[tag] || dataSet.elements[tag].length !== 6) {
    return;
  }

  return [dataSet.uint16(tag, 0), dataSet.uint16(tag, 1), dataSet.uint16(tag, 2)];
}

function getLutData(lutDataSet, tag, lutDescriptor) {
  var lut = [];
  var lutData = lutDataSet.elements[tag];

  for (var i = 0; i < lutDescriptor[0]; i++) {
    // Output range is always unsigned
    if (lutDescriptor[2] === 16) {
      lut[i] = lutDataSet.uint16(tag, i);
    } else {
      lut[i] = lutDataSet.byteArray[i + lutData.dataOffset];
    }
  }

  return lut;
}

function populatePaletteColorLut(dataSet, imagePixelModule) {
  imagePixelModule.redPaletteColorLookupTableDescriptor = getLutDescriptor(dataSet, 'x00281101');
  imagePixelModule.greenPaletteColorLookupTableDescriptor = getLutDescriptor(dataSet, 'x00281102');
  imagePixelModule.bluePaletteColorLookupTableDescriptor = getLutDescriptor(dataSet, 'x00281103');

  // The first Palette Color Lookup Table Descriptor value is the number of entries in the lookup table.
  // When the number of table entries is equal to 2ˆ16 then this value shall be 0.
  // See http://dicom.nema.org/MEDICAL/DICOM/current/output/chtml/part03/sect_C.7.6.3.html#sect_C.7.6.3.1.5
  if (imagePixelModule.redPaletteColorLookupTableDescriptor[0] === 0) {
    imagePixelModule.redPaletteColorLookupTableDescriptor[0] = 65536;
    imagePixelModule.greenPaletteColorLookupTableDescriptor[0] = 65536;
    imagePixelModule.bluePaletteColorLookupTableDescriptor[0] = 65536;
  }

  // The third Palette Color Lookup Table Descriptor value specifies the number of bits for each entry in the Lookup Table Data.
  // It shall take the value of 8 or 16.
  // The LUT Data shall be stored in a format equivalent to 8 bits allocated when the number of bits for each entry is 8, and 16 bits allocated when the number of bits for each entry is 16, where in both cases the high bit is equal to bits allocated-1.
  // The third value shall be identical for each of the Red, Green and Blue Palette Color Lookup Table Descriptors.
  //
  // Note: Some implementations have encoded 8 bit entries with 16 bits allocated, padding the high bits;
  // this can be detected by comparing the number of entries specified in the LUT Descriptor with the actual value length of the LUT Data entry.
  // The value length in bytes should equal the number of entries if bits allocated is 8, and be twice as long if bits allocated is 16.
  var numLutEntries = imagePixelModule.redPaletteColorLookupTableDescriptor[0];
  var lutData = dataSet.elements.x00281201;
  var lutBitsAllocated = lutData.length === numLutEntries ? 8 : 16;

  // If the descriptors do not appear to have the correct values, correct them
  if (imagePixelModule.redPaletteColorLookupTableDescriptor[2] !== lutBitsAllocated) {
    imagePixelModule.redPaletteColorLookupTableDescriptor[2] = lutBitsAllocated;
    imagePixelModule.greenPaletteColorLookupTableDescriptor[2] = lutBitsAllocated;
    imagePixelModule.bluePaletteColorLookupTableDescriptor[2] = lutBitsAllocated;
  }

  imagePixelModule.redPaletteColorLookupTableData = getLutData(dataSet, 'x00281201', imagePixelModule.redPaletteColorLookupTableDescriptor);
  imagePixelModule.greenPaletteColorLookupTableData = getLutData(dataSet, 'x00281202', imagePixelModule.greenPaletteColorLookupTableDescriptor);
  imagePixelModule.bluePaletteColorLookupTableData = getLutData(dataSet, 'x00281203', imagePixelModule.bluePaletteColorLookupTableDescriptor);
}

function populateSmallestLargestPixelValues(dataSet, imagePixelModule) {
  var pixelRepresentation = dataSet.uint16('x00280103');

  if (pixelRepresentation === 0) {
    imagePixelModule.smallestPixelValue = dataSet.uint16('x00280106');
    imagePixelModule.largestPixelValue = dataSet.uint16('x00280107');
  } else {
    imagePixelModule.smallestPixelValue = dataSet.int16('x00280106');
    imagePixelModule.largestPixelValue = dataSet.int16('x00280107');
  }
}

function getImagePixelModule(dataSet) {
  var imagePixelModule = {
    samplesPerPixel: dataSet.uint16('x00280002'),
    photometricInterpretation: dataSet.string('x00280004'),
    rows: dataSet.uint16('x00280010'),
    columns: dataSet.uint16('x00280011'),
    bitsAllocated: dataSet.uint16('x00280100'),
    bitsStored: dataSet.uint16('x00280101'),
    highBit: dataSet.uint16('x00280102'),
    pixelRepresentation: dataSet.uint16('x00280103'),
    planarConfiguration: dataSet.uint16('x00280006'),
    pixelAspectRatio: dataSet.string('x00280034')
  };

  populateSmallestLargestPixelValues(dataSet, imagePixelModule);

  if (imagePixelModule.photometricInterpretation === 'PALETTE COLOR' && dataSet.elements.x00281101) {
    populatePaletteColorLut(dataSet, imagePixelModule);
  }

  return imagePixelModule;
}

exports.default = getImagePixelModule;

/***/ }),

/***/ "./imageLoader/wadouri/metaData/getLUTs.js":
/*!*************************************************!*\
  !*** ./imageLoader/wadouri/metaData/getLUTs.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function getLUT(pixelRepresentation, lutDataSet) {
  var numLUTEntries = lutDataSet.uint16('x00283002', 0);

  if (numLUTEntries === 0) {
    numLUTEntries = 65535;
  }
  var firstValueMapped = 0;

  if (pixelRepresentation === 0) {
    firstValueMapped = lutDataSet.uint16('x00283002', 1);
  } else {
    firstValueMapped = lutDataSet.int16('x00283002', 1);
  }
  var numBitsPerEntry = lutDataSet.uint16('x00283002', 2);
  // console.log('LUT(', numLUTEntries, ',', firstValueMapped, ',', numBitsPerEntry, ')');
  var lut = {
    id: '1',
    firstValueMapped: firstValueMapped,
    numBitsPerEntry: numBitsPerEntry,
    lut: []
  };

  // console.log("minValue=", minValue, "; maxValue=", maxValue);
  for (var i = 0; i < numLUTEntries; i++) {
    if (pixelRepresentation === 0) {
      lut.lut[i] = lutDataSet.uint16('x00283006', i);
    } else {
      lut.lut[i] = lutDataSet.int16('x00283006', i);
    }
  }

  return lut;
}

function getLUTs(pixelRepresentation, lutSequence) {
  if (!lutSequence || !lutSequence.items.length) {
    return;
  }
  var luts = [];

  for (var i = 0; i < lutSequence.items.length; i++) {
    var lutDataSet = lutSequence.items[i].dataSet;
    var lut = getLUT(pixelRepresentation, lutDataSet);

    if (lut) {
      luts.push(lut);
    }
  }

  return luts;
}

exports.default = getLUTs;

/***/ }),

/***/ "./imageLoader/wadouri/metaData/getModalityLUTOutputPixelRepresentation.js":
/*!*********************************************************************************!*\
  !*** ./imageLoader/wadouri/metaData/getModalityLUTOutputPixelRepresentation.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint no-bitwise: 0 */

function getMinStoredPixelValue(dataSet) {
  var pixelRepresentation = dataSet.uint16('x00280103');
  var bitsStored = dataSet.uint16('x00280101');

  if (pixelRepresentation === 0) {
    return 0;
  }

  return -1 << bitsStored - 1;
}

// 0 = unsigned / US, 1 = signed / SS
function getModalityLUTOutputPixelRepresentation(dataSet) {

  // CT SOP Classes are always signed
  var sopClassUID = dataSet.string('x00080016');

  if (sopClassUID === '1.2.840.10008.5.1.4.1.1.2' || sopClassUID === '1.2.840.10008.5.1.4.1.1.2.1') {
    return 1;
  }

  // if rescale intercept and rescale slope are present, pass the minimum stored
  // pixel value through them to see if we get a signed output range
  var rescaleIntercept = dataSet.floatString('x00281052');
  var rescaleSlope = dataSet.floatString('x00281053');

  if (rescaleIntercept !== undefined && rescaleSlope !== undefined) {
    var minStoredPixelValue = getMinStoredPixelValue(dataSet); //
    var minModalityLutValue = minStoredPixelValue * rescaleSlope + rescaleIntercept;

    if (minModalityLutValue < 0) {
      return 1;
    }

    return 0;
  }

  // Output of non linear modality lut is always unsigned
  if (dataSet.elements.x00283000 && dataSet.elements.x00283000.length > 0) {
    return 0;
  }

  // If no modality lut transform, output is same as pixel representation
  return dataSet.uint16('x00280103');
}

exports.default = getModalityLUTOutputPixelRepresentation;

/***/ }),

/***/ "./imageLoader/wadouri/metaData/getNumberValues.js":
/*!*********************************************************!*\
  !*** ./imageLoader/wadouri/metaData/getNumberValues.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function getNumberValues(dataSet, tag, minimumLength) {
  var values = [];
  var valueAsString = dataSet.string(tag);

  if (!valueAsString) {
    return;
  }
  var split = valueAsString.split('\\');

  if (minimumLength && split.length < minimumLength) {
    return;
  }
  for (var i = 0; i < split.length; i++) {
    values.push(parseFloat(split[i]));
  }

  return values;
}

exports.default = getNumberValues;

/***/ }),

/***/ "./imageLoader/wadouri/metaData/index.js":
/*!***********************************************!*\
  !*** ./imageLoader/wadouri/metaData/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getImagePixelModule = __webpack_require__(/*! ./getImagePixelModule.js */ "./imageLoader/wadouri/metaData/getImagePixelModule.js");

Object.defineProperty(exports, 'getImagePixelModule', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_getImagePixelModule).default;
  }
});

var _getLUTs = __webpack_require__(/*! ./getLUTs.js */ "./imageLoader/wadouri/metaData/getLUTs.js");

Object.defineProperty(exports, 'getLUTs', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_getLUTs).default;
  }
});

var _getModalityLUTOutputPixelRepresentation = __webpack_require__(/*! ./getModalityLUTOutputPixelRepresentation.js */ "./imageLoader/wadouri/metaData/getModalityLUTOutputPixelRepresentation.js");

Object.defineProperty(exports, 'getModalityLUTOutputPixelRepresentation', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_getModalityLUTOutputPixelRepresentation).default;
  }
});

var _getNumberValues = __webpack_require__(/*! ./getNumberValues.js */ "./imageLoader/wadouri/metaData/getNumberValues.js");

Object.defineProperty(exports, 'getNumberValues', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_getNumberValues).default;
  }
});

var _metaDataProvider = __webpack_require__(/*! ./metaDataProvider.js */ "./imageLoader/wadouri/metaData/metaDataProvider.js");

Object.defineProperty(exports, 'metaDataProvider', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_metaDataProvider).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./imageLoader/wadouri/metaData/metaDataProvider.js":
/*!**********************************************************!*\
  !*** ./imageLoader/wadouri/metaData/metaDataProvider.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _externalModules = __webpack_require__(/*! ../../../externalModules.js */ "./externalModules.js");

var _getNumberValues = __webpack_require__(/*! ./getNumberValues.js */ "./imageLoader/wadouri/metaData/getNumberValues.js");

var _getNumberValues2 = _interopRequireDefault(_getNumberValues);

var _parseImageId = __webpack_require__(/*! ../parseImageId.js */ "./imageLoader/wadouri/parseImageId.js");

var _parseImageId2 = _interopRequireDefault(_parseImageId);

var _dataSetCacheManager = __webpack_require__(/*! ../dataSetCacheManager.js */ "./imageLoader/wadouri/dataSetCacheManager.js");

var _dataSetCacheManager2 = _interopRequireDefault(_dataSetCacheManager);

var _getImagePixelModule = __webpack_require__(/*! ./getImagePixelModule.js */ "./imageLoader/wadouri/metaData/getImagePixelModule.js");

var _getImagePixelModule2 = _interopRequireDefault(_getImagePixelModule);

var _getLUTs = __webpack_require__(/*! ./getLUTs.js */ "./imageLoader/wadouri/metaData/getLUTs.js");

var _getLUTs2 = _interopRequireDefault(_getLUTs);

var _getModalityLUTOutputPixelRepresentation = __webpack_require__(/*! ./getModalityLUTOutputPixelRepresentation.js */ "./imageLoader/wadouri/metaData/getModalityLUTOutputPixelRepresentation.js");

var _getModalityLUTOutputPixelRepresentation2 = _interopRequireDefault(_getModalityLUTOutputPixelRepresentation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function metaDataProvider(type, imageId) {
  var parsedImageId = (0, _parseImageId2.default)(imageId);

  var dataSet = _dataSetCacheManager2.default.get(parsedImageId.url);

  if (!dataSet) {
    return;
  }

  if (type === 'generalSeriesModule') {
    return {
      modality: dataSet.string('x00080060'),
      seriesInstanceUID: dataSet.string('x0020000e'),
      seriesNumber: dataSet.intString('x00200011'),
      studyInstanceUID: dataSet.string('x0020000d'),
      seriesDate: _externalModules.dicomParser.parseDA(dataSet.string('x00080021')),
      seriesTime: _externalModules.dicomParser.parseTM(dataSet.string('x00080031') || '')
    };
  }

  if (type === 'patientStudyModule') {
    return {
      patientAge: dataSet.intString('x00101010'),
      patientSize: dataSet.floatString('x00101020'),
      patientWeight: dataSet.floatString('x00101030')
    };
  }

  if (type === 'imagePlaneModule') {

    var imageOrientationPatient = (0, _getNumberValues2.default)(dataSet, 'x00200037', 6);
    var imagePositionPatient = (0, _getNumberValues2.default)(dataSet, 'x00200032', 3);
    var pixelSpacing = (0, _getNumberValues2.default)(dataSet, 'x00280030', 2);

    var columnPixelSpacing = 1.0;
    var rowPixelSpacing = 1.0;

    if (pixelSpacing) {
      rowPixelSpacing = pixelSpacing[0];
      columnPixelSpacing = pixelSpacing[1];
    }

    var rowCosines = null;
    var columnCosines = null;

    if (imageOrientationPatient) {
      rowCosines = [parseFloat(imageOrientationPatient[0]), parseFloat(imageOrientationPatient[1]), parseFloat(imageOrientationPatient[2])];
      columnCosines = [parseFloat(imageOrientationPatient[3]), parseFloat(imageOrientationPatient[4]), parseFloat(imageOrientationPatient[5])];
    }

    return {
      frameOfReferenceUID: dataSet.string('x00200052'),
      rows: dataSet.uint16('x00280010'),
      columns: dataSet.uint16('x00280011'),
      imageOrientationPatient: imageOrientationPatient,
      rowCosines: rowCosines,
      columnCosines: columnCosines,
      imagePositionPatient: imagePositionPatient,
      sliceThickness: dataSet.floatString('x00180050'),
      sliceLocation: dataSet.floatString('x00201041'),
      pixelSpacing: pixelSpacing,
      rowPixelSpacing: rowPixelSpacing,
      columnPixelSpacing: columnPixelSpacing
    };
  }

  if (type === 'imagePixelModule') {
    return (0, _getImagePixelModule2.default)(dataSet);
  }

  if (type === 'modalityLutModule') {
    return {
      rescaleIntercept: dataSet.floatString('x00281052'),
      rescaleSlope: dataSet.floatString('x00281053'),
      rescaleType: dataSet.string('x00281054'),
      modalityLUTSequence: (0, _getLUTs2.default)(dataSet.uint16('x00280103'), dataSet.elements.x00283000)
    };
  }

  if (type === 'voiLutModule') {
    var modalityLUTOutputPixelRepresentation = (0, _getModalityLUTOutputPixelRepresentation2.default)(dataSet);

    return {
      windowCenter: (0, _getNumberValues2.default)(dataSet, 'x00281050', 1),
      windowWidth: (0, _getNumberValues2.default)(dataSet, 'x00281051', 1),
      voiLUTSequence: (0, _getLUTs2.default)(modalityLUTOutputPixelRepresentation, dataSet.elements.x00283010)
    };
  }

  if (type === 'sopCommonModule') {
    return {
      sopClassUID: dataSet.string('x00080016'),
      sopInstanceUID: dataSet.string('x00080018')
    };
  }

  if (type === 'petIsotopeModule') {
    var radiopharmaceuticalInfo = dataSet.elements.x00540016;

    if (radiopharmaceuticalInfo === undefined) {
      return;
    }

    var firstRadiopharmaceuticalInfoDataSet = radiopharmaceuticalInfo.items[0].dataSet;

    return {
      radiopharmaceuticalInfo: {
        radiopharmaceuticalStartTime: _externalModules.dicomParser.parseTM(firstRadiopharmaceuticalInfoDataSet.string('x00181072') || ''),
        radionuclideTotalDose: firstRadiopharmaceuticalInfoDataSet.floatString('x00181074'),
        radionuclideHalfLife: firstRadiopharmaceuticalInfoDataSet.floatString('x00181075')
      }
    };
  }
}

exports.default = metaDataProvider;

/***/ }),

/***/ "./imageLoader/wadouri/parseImageId.js":
/*!*********************************************!*\
  !*** ./imageLoader/wadouri/parseImageId.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function parseImageId(imageId) {
  // build a url by parsing out the url scheme and frame index from the imageId
  var firstColonIndex = imageId.indexOf(':');
  var url = imageId.substring(firstColonIndex + 1);
  var frameIndex = url.indexOf('frame=');
  var frame = void 0;

  if (frameIndex !== -1) {
    var frameStr = url.substr(frameIndex + 6);

    frame = parseInt(frameStr, 10);
    url = url.substr(0, frameIndex - 1);
  }

  return {
    scheme: imageId.substr(0, firstColonIndex),
    url: url,
    frame: frame
  };
}

exports.default = parseImageId;

/***/ }),

/***/ "./imageLoader/wadouri/register.js":
/*!*****************************************!*\
  !*** ./imageLoader/wadouri/register.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (cornerstone) {
  // register dicomweb and wadouri image loader prefixes
  cornerstone.registerImageLoader('dicomweb', _loadImage.loadImage);
  cornerstone.registerImageLoader('wadouri', _loadImage.loadImage);
  cornerstone.registerImageLoader('dicomfile', _loadImage.loadImage);

  // add wadouri metadata provider
  cornerstone.metaData.addProvider(_index.metaDataProvider);
};

var _loadImage = __webpack_require__(/*! ./loadImage.js */ "./imageLoader/wadouri/loadImage.js");

var _index = __webpack_require__(/*! ./metaData/index.js */ "./imageLoader/wadouri/metaData/index.js");

/***/ }),

/***/ "./imageLoader/wadouri/unpackBinaryFrame.js":
/*!**************************************************!*\
  !*** ./imageLoader/wadouri/unpackBinaryFrame.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint no-bitwise: 0 */

function isBitSet(byte, bitPos) {
  return byte & 1 << bitPos;
}

/**
 * Function to deal with unpacking a binary frame
 */
function unpackBinaryFrame(byteArray, frameOffset, pixelsPerFrame) {
  // Create a new pixel array given the image size
  var pixelData = new Uint8Array(pixelsPerFrame);

  for (var i = 0; i < pixelsPerFrame; i++) {
    // Compute byte position
    var bytePos = Math.floor(i / 8);

    // Get the current byte
    var byte = byteArray[bytePos + frameOffset];

    // Bit position (0-7) within byte
    var bitPos = i % 8;

    // Check whether bit at bitpos is set
    pixelData[i] = isBitSet(byte, bitPos) ? 1 : 0;
  }

  return pixelData;
}

exports.default = unpackBinaryFrame;

/***/ }),

/***/ "./imageLoader/webWorkerManager.js":
/*!*****************************************!*\
  !*** ./imageLoader/webWorkerManager.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _options = __webpack_require__(/*! ./internal/options.js */ "./imageLoader/internal/options.js");

// the taskId to assign to the next task added via addTask()
var nextTaskId = 0;

// array of queued tasks sorted with highest priority task first
var tasks = [];

// array of web workers to dispatch decode tasks to
var webWorkers = [];

// The options for CornerstoneWADOImageLoader
var options = (0, _options.getOptions)();

var defaultConfig = {
  maxWebWorkers: navigator.hardwareConcurrency || 1,
  startWebWorkersOnDemand: true,
  webWorkerPath: '../../dist/cornerstoneWADOImageLoaderWebWorker.js',
  webWorkerTaskPaths: [],
  taskConfiguration: {
    decodeTask: {
      loadCodecsOnStartup: true,
      initializeCodecsOnStartup: false,
      codecsPath: '../dist/cornerstoneWADOImageLoaderCodecs.js',
      usePDFJS: false,
      strict: options.strict
    }
  }
};

var config = void 0;

var statistics = {
  maxWebWorkers: 0,
  numWebWorkers: 0,
  numTasksQueued: 0,
  numTasksExecuting: 0,
  numTasksCompleted: 0,
  totalTaskTimeInMS: 0,
  totalTimeDelayedInMS: 0
};

/**
 * Function to start a task on a web worker
 */
function startTaskOnWebWorker() {
  // return immediately if no decode tasks to do
  if (!tasks.length) {
    return;
  }

  // look for a web worker that is ready
  for (var i = 0; i < webWorkers.length; i++) {
    if (webWorkers[i].status === 'ready') {
      // mark it as busy so tasks are not assigned to it
      webWorkers[i].status = 'busy';

      // get the highest priority task
      var task = tasks.shift();

      task.start = new Date().getTime();

      // update stats with how long this task was delayed (waiting in queue)
      var end = new Date().getTime();

      statistics.totalTimeDelayedInMS += end - task.added;

      // assign this task to this web worker and send the web worker
      // a message to execute it
      webWorkers[i].task = task;
      webWorkers[i].worker.postMessage({
        taskType: task.taskType,
        workerIndex: i,
        data: task.data
      }, task.transferList);
      statistics.numTasksExecuting++;

      return;
    }
  }

  // if no available web workers and we haven't started max web workers, start a new one
  if (webWorkers.length < config.maxWebWorkers) {
    spawnWebWorker();
  }
}

/**
 * Function to handle a message from a web worker
 * @param msg
 */
function handleMessageFromWorker(msg) {
  // console.log('handleMessageFromWorker', msg.data);
  if (msg.data.taskType === 'initialize') {
    webWorkers[msg.data.workerIndex].status = 'ready';
    startTaskOnWebWorker();
  } else {
    var start = webWorkers[msg.data.workerIndex].task.start;

    webWorkers[msg.data.workerIndex].task.deferred.resolve(msg.data.result);
    webWorkers[msg.data.workerIndex].task = undefined;

    statistics.numTasksExecuting--;
    webWorkers[msg.data.workerIndex].status = 'ready';
    statistics.numTasksCompleted++;

    var end = new Date().getTime();

    statistics.totalTaskTimeInMS += end - start;

    startTaskOnWebWorker();
  }
}

/**
 * Spawns a new web worker
 */
function spawnWebWorker() {
  // prevent exceeding maxWebWorkers
  if (webWorkers.length >= config.maxWebWorkers) {
    return;
  }

  // spawn the webworker
  var worker = new Worker(config.webWorkerPath);

  webWorkers.push({
    worker: worker,
    status: 'initializing'
  });
  worker.addEventListener('message', handleMessageFromWorker);
  worker.postMessage({
    taskType: 'initialize',
    workerIndex: webWorkers.length - 1,
    config: config
  });
}

/**
 * Initialization function for the web worker manager - spawns web workers
 * @param configObject
 */
function initialize(configObject) {
  configObject = configObject || defaultConfig;

  // prevent being initialized more than once
  if (config) {
    throw new Error('WebWorkerManager already initialized');
  }

  config = configObject;

  config.maxWebWorkers = config.maxWebWorkers || navigator.hardwareConcurrency || 1;

  // Spawn new web workers
  if (!config.startWebWorkersOnDemand) {
    for (var i = 0; i < config.maxWebWorkers; i++) {
      spawnWebWorker();
    }
  }
}

/**
 * dynamically loads a web worker task
 * @param sourcePath
 * @param taskConfig
 */
function loadWebWorkerTask(sourcePath, taskConfig) {
  // add it to the list of web worker tasks paths so on demand web workers
  // load this properly
  config.webWorkerTaskPaths.push(sourcePath);

  // if a task specific configuration is provided, merge it into the config
  if (taskConfig) {
    config.taskConfiguration = Object.assign(config.taskConfiguration, taskConfig);
  }

  // tell each spawned web worker to load this task
  for (var i = 0; i < webWorkers.length; i++) {
    webWorkers[i].worker.postMessage({
      taskType: 'loadWebWorkerTask',
      workerIndex: webWorkers.length - 1,
      sourcePath: sourcePath,
      config: config
    });
  }
}

/**
 * Function to add a decode task to be performed
 *
 * @param taskType - the taskType for this task
 * @param data - data specific to the task
 * @param priority - optional priority of the task (defaults to 0), > 0 is higher, < 0 is lower
 * @param transferList - optional array of data to transfer to web worker
 * @returns {*}
 */
function addTask(taskType, data) {
  var priority = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var transferList = arguments[3];

  if (!config) {
    initialize();
  }

  var deferred = {};
  var promise = new Promise(function (resolve, reject) {
    deferred = {
      resolve: resolve,
      reject: reject
    };
  });

  // find the right spot to insert this decode task (based on priority)
  var i = void 0;

  for (i = 0; i < tasks.length; i++) {
    if (tasks[i].priority < priority) {
      break;
    }
  }

  var taskId = nextTaskId++;

  // insert the decode task at position i
  tasks.splice(i, 0, {
    taskId: taskId,
    taskType: taskType,
    status: 'ready',
    added: new Date().getTime(),
    data: data,
    deferred: deferred,
    priority: priority,
    transferList: transferList
  });

  // try to start a task on the web worker since we just added a new task and a web worker may be available
  startTaskOnWebWorker();

  return {
    taskId: taskId,
    promise: promise
  };
}

/**
 * Changes the priority of a queued task
 * @param taskId - the taskId to change the priority of
 * @param priority - priority of the task (defaults to 0), > 0 is higher, < 0 is lower
 * @returns boolean - true on success, false if taskId not found
 */
function setTaskPriority(taskId) {
  var priority = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  // search for this taskId
  for (var i = 0; i < tasks.length; i++) {
    if (tasks[i].taskId === taskId) {
      // taskId found, remove it
      var task = tasks.splice(i, 1)[0];

      // set its priority
      task.priority = priority;

      // find the right spot to insert this decode task (based on priority)
      for (i = 0; i < tasks.length; i++) {
        if (tasks[i].priority < priority) {
          break;
        }
      }

      // insert the decode task at position i
      tasks.splice(i, 0, task);

      return true;
    }
  }

  return false;
}

/**
 * Cancels a queued task and rejects
 * @param taskId - the taskId to cancel
 * @param reason - optional reason the task was rejected
 * @returns boolean - true on success, false if taskId not found
 */
function cancelTask(taskId, reason) {
  // search for this taskId
  for (var i = 0; i < tasks.length; i++) {
    if (tasks[i].taskId === taskId) {
      // taskId found, remove it
      var task = tasks.splice(i, 1);

      task.deferred.reject(reason);

      return true;
    }
  }

  return false;
}

/**
 * Function to return the statistics on running web workers
 * @returns object containing statistics
 */
function getStatistics() {
  statistics.maxWebWorkers = config.maxWebWorkers;
  statistics.numWebWorkers = webWorkers.length;
  statistics.numTasksQueued = tasks.length;

  return statistics;
}

exports.default = {
  initialize: initialize,
  loadWebWorkerTask: loadWebWorkerTask,
  addTask: addTask,
  getStatistics: getStatistics,
  setTaskPriority: setTaskPriority,
  cancelTask: cancelTask
};

/***/ }),

/***/ "./shared/calculateMinMax.js":
/*!***********************************!*\
  !*** ./shared/calculateMinMax.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = calculateMinMax;

var _getMinMax = __webpack_require__(/*! ./getMinMax.js */ "./shared/getMinMax.js");

var _getMinMax2 = _interopRequireDefault(_getMinMax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Check the minimum and maximum values in the imageFrame pixel data
 * match with the provided smallestPixelValue and largestPixelValue metaData.
 *
 * If 'strict' is true, log to the console a warning if these values do not match.
 * Otherwise, correct them automatically.
 *
 * @param {Object} imageFrame
 * @param {Boolean} strict If 'strict' is true, log to the console a warning if these values do not match.
 * Otherwise, correct them automatically.Default is true.
 */
function calculateMinMax(imageFrame) {
  var strict = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  var minMax = (0, _getMinMax2.default)(imageFrame.pixelData);
  var mustAssign = !(isNumber(imageFrame.smallestPixelValue) && isNumber(imageFrame.largestPixelValue));

  if (strict === true && !mustAssign) {
    if (imageFrame.smallestPixelValue !== minMax.min) {
      console.warn('Image smallestPixelValue tag is incorrect. Rendering performance will suffer considerably.');
    }

    if (imageFrame.largestPixelValue !== minMax.max) {
      console.warn('Image largestPixelValue tag is incorrect. Rendering performance will suffer considerably.');
    }
  } else {
    imageFrame.smallestPixelValue = minMax.min;
    imageFrame.largestPixelValue = minMax.max;
  }
}

function isNumber(numValue) {
  return typeof numValue === "number";
}

/***/ }),

/***/ "./shared/decodeImageFrame.js":
/*!************************************!*\
  !*** ./shared/decodeImageFrame.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _decodeLittleEndian = __webpack_require__(/*! ./decoders/decodeLittleEndian.js */ "./shared/decoders/decodeLittleEndian.js");

var _decodeLittleEndian2 = _interopRequireDefault(_decodeLittleEndian);

var _decodeBigEndian = __webpack_require__(/*! ./decoders/decodeBigEndian.js */ "./shared/decoders/decodeBigEndian.js");

var _decodeBigEndian2 = _interopRequireDefault(_decodeBigEndian);

var _decodeRLE = __webpack_require__(/*! ./decoders/decodeRLE.js */ "./shared/decoders/decodeRLE.js");

var _decodeRLE2 = _interopRequireDefault(_decodeRLE);

var _decodeJPEGBaseline = __webpack_require__(/*! ./decoders/decodeJPEGBaseline.js */ "./shared/decoders/decodeJPEGBaseline.js");

var _decodeJPEGBaseline2 = _interopRequireDefault(_decodeJPEGBaseline);

var _decodeJPEGLossless = __webpack_require__(/*! ./decoders/decodeJPEGLossless.js */ "./shared/decoders/decodeJPEGLossless.js");

var _decodeJPEGLossless2 = _interopRequireDefault(_decodeJPEGLossless);

var _decodeJPEGLS = __webpack_require__(/*! ./decoders/decodeJPEGLS.js */ "./shared/decoders/decodeJPEGLS.js");

var _decodeJPEGLS2 = _interopRequireDefault(_decodeJPEGLS);

var _decodeJPEG = __webpack_require__(/*! ./decoders/decodeJPEG2000.js */ "./shared/decoders/decodeJPEG2000.js");

var _decodeJPEG2 = _interopRequireDefault(_decodeJPEG);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function decodeImageFrame(imageFrame, transferSyntax, pixelData, decodeConfig, options) {
  var start = new Date().getTime();

  if (transferSyntax === '1.2.840.10008.1.2') {
    // Implicit VR Little Endian
    imageFrame = (0, _decodeLittleEndian2.default)(imageFrame, pixelData);
  } else if (transferSyntax === '1.2.840.10008.1.2.1') {
    // Explicit VR Little Endian
    imageFrame = (0, _decodeLittleEndian2.default)(imageFrame, pixelData);
  } else if (transferSyntax === '1.2.840.10008.1.2.2') {
    // Explicit VR Big Endian (retired)
    imageFrame = (0, _decodeBigEndian2.default)(imageFrame, pixelData);
  } else if (transferSyntax === '1.2.840.10008.1.2.1.99') {
    // Deflate transfer syntax (deflated by dicomParser)
    imageFrame = (0, _decodeLittleEndian2.default)(imageFrame, pixelData);
  } else if (transferSyntax === '1.2.840.10008.1.2.5') {
    // RLE Lossless
    imageFrame = (0, _decodeRLE2.default)(imageFrame, pixelData);
  } else if (transferSyntax === '1.2.840.10008.1.2.4.50') {
    // JPEG Baseline lossy process 1 (8 bit)
    imageFrame = (0, _decodeJPEGBaseline2.default)(imageFrame, pixelData);
  } else if (transferSyntax === '1.2.840.10008.1.2.4.51') {
    // JPEG Baseline lossy process 2 & 4 (12 bit)
    imageFrame = (0, _decodeJPEGBaseline2.default)(imageFrame, pixelData);
  } else if (transferSyntax === '1.2.840.10008.1.2.4.57') {
    // JPEG Lossless, Nonhierarchical (Processes 14)
    imageFrame = (0, _decodeJPEGLossless2.default)(imageFrame, pixelData);
  } else if (transferSyntax === '1.2.840.10008.1.2.4.70') {
    // JPEG Lossless, Nonhierarchical (Processes 14 [Selection 1])
    imageFrame = (0, _decodeJPEGLossless2.default)(imageFrame, pixelData);
  } else if (transferSyntax === '1.2.840.10008.1.2.4.80') {
    // JPEG-LS Lossless Image Compression
    imageFrame = (0, _decodeJPEGLS2.default)(imageFrame, pixelData);
  } else if (transferSyntax === '1.2.840.10008.1.2.4.81') {
    // JPEG-LS Lossy (Near-Lossless) Image Compression
    imageFrame = (0, _decodeJPEGLS2.default)(imageFrame, pixelData);
  } else if (transferSyntax === '1.2.840.10008.1.2.4.90') {
    // JPEG 2000 Lossless
    imageFrame = (0, _decodeJPEG2.default)(imageFrame, pixelData, decodeConfig, options);
  } else if (transferSyntax === '1.2.840.10008.1.2.4.91') {
    // JPEG 2000 Lossy
    imageFrame = (0, _decodeJPEG2.default)(imageFrame, pixelData, decodeConfig, options);
  } else {
    throw new Error('no decoder for transfer syntax ' + transferSyntax);
  }

  /* Don't know if these work...
   // JPEG 2000 Part 2 Multicomponent Image Compression (Lossless Only)
   else if(transferSyntax === "1.2.840.10008.1.2.4.92")
   {
   return decodeJPEG2000(dataSet, frame);
   }
   // JPEG 2000 Part 2 Multicomponent Image Compression
   else if(transferSyntax === "1.2.840.10008.1.2.4.93")
   {
   return decodeJPEG2000(dataSet, frame);
   }
   */

  var shouldShift = imageFrame.pixelRepresentation !== undefined && imageFrame.pixelRepresentation === 1;
  var shift = shouldShift && imageFrame.bitsStored !== undefined ? 32 - imageFrame.bitsStored : undefined;

  if (shouldShift && shift !== undefined) {
    for (var i = 0; i < imageFrame.pixelData.length; i++) {
      // eslint-disable-next-line no-bitwise
      imageFrame.pixelData[i] = imageFrame.pixelData[i] << shift >> shift;
    }
  }

  var end = new Date().getTime();

  imageFrame.decodeTimeInMS = end - start;

  return imageFrame;
}

exports.default = decodeImageFrame;

/***/ }),

/***/ "./shared/decoders/decodeBigEndian.js":
/*!********************************************!*\
  !*** ./shared/decoders/decodeBigEndian.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint no-bitwise: 0 */
function swap16(val) {
  return (val & 0xFF) << 8 | val >> 8 & 0xFF;
}

function decodeBigEndian(imageFrame, pixelData) {
  if (imageFrame.bitsAllocated === 16) {
    var arrayBuffer = pixelData.buffer;
    var offset = pixelData.byteOffset;
    var length = pixelData.length;
    // if pixel data is not aligned on even boundary, shift it so we can create the 16 bit array
    // buffers on it

    if (offset % 2) {
      arrayBuffer = arrayBuffer.slice(offset);
      offset = 0;
    }

    if (imageFrame.pixelRepresentation === 0) {
      imageFrame.pixelData = new Uint16Array(arrayBuffer, offset, length / 2);
    } else {
      imageFrame.pixelData = new Int16Array(arrayBuffer, offset, length / 2);
    }
    // Do the byte swap
    for (var i = 0; i < imageFrame.pixelData.length; i++) {
      imageFrame.pixelData[i] = swap16(imageFrame.pixelData[i]);
    }
  } else if (imageFrame.bitsAllocated === 8) {
    imageFrame.pixelData = pixelData;
  }

  return imageFrame;
}

exports.default = decodeBigEndian;

/***/ }),

/***/ "./shared/decoders/decodeJPEG2000.js":
/*!*******************************************!*\
  !*** ./shared/decoders/decodeJPEG2000.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function decodeJpx(imageFrame, pixelData) {
  var jpxImage = new JpxImage();

  jpxImage.parse(pixelData);

  var tileCount = jpxImage.tiles.length;

  if (tileCount !== 1) {
    throw new Error('JPEG2000 decoder returned a tileCount of ' + tileCount + ', when 1 is expected');
  }

  imageFrame.columns = jpxImage.width;
  imageFrame.rows = jpxImage.height;
  imageFrame.pixelData = jpxImage.tiles[0].items;

  return imageFrame;
}

var openJPEG = void 0;

function decodeOpenJPEG(data, bytesPerPixel, signed) {
  var dataPtr = openJPEG._malloc(data.length);

  openJPEG.writeArrayToMemory(data, dataPtr);

  // create param outpout
  var imagePtrPtr = openJPEG._malloc(4);
  var imageSizePtr = openJPEG._malloc(4);
  var imageSizeXPtr = openJPEG._malloc(4);
  var imageSizeYPtr = openJPEG._malloc(4);
  var imageSizeCompPtr = openJPEG._malloc(4);

  var t0 = new Date().getTime();
  var ret = openJPEG.ccall('jp2_decode', 'number', ['number', 'number', 'number', 'number', 'number', 'number', 'number'], [dataPtr, data.length, imagePtrPtr, imageSizePtr, imageSizeXPtr, imageSizeYPtr, imageSizeCompPtr]);
  // add num vomp..etc

  if (ret !== 0) {
    console.log('[opj_decode] decoding failed!');
    openJPEG._free(dataPtr);
    openJPEG._free(openJPEG.getValue(imagePtrPtr, '*'));
    openJPEG._free(imageSizeXPtr);
    openJPEG._free(imageSizeYPtr);
    openJPEG._free(imageSizePtr);
    openJPEG._free(imageSizeCompPtr);

    return;
  }

  var imagePtr = openJPEG.getValue(imagePtrPtr, '*');

  var image = {
    length: openJPEG.getValue(imageSizePtr, 'i32'),
    sx: openJPEG.getValue(imageSizeXPtr, 'i32'),
    sy: openJPEG.getValue(imageSizeYPtr, 'i32'),
    nbChannels: openJPEG.getValue(imageSizeCompPtr, 'i32'), // hard coded for now
    perf_timetodecode: undefined,
    pixelData: undefined
  };

  // Copy the data from the EMSCRIPTEN heap into the correct type array
  var length = image.sx * image.sy * image.nbChannels;
  var src32 = new Int32Array(openJPEG.HEAP32.buffer, imagePtr, length);

  if (bytesPerPixel === 1) {
    if (Uint8Array.from) {
      image.pixelData = Uint8Array.from(src32);
    } else {
      image.pixelData = new Uint8Array(length);
      for (var i = 0; i < length; i++) {
        image.pixelData[i] = src32[i];
      }
    }
  } else if (signed) {
    if (Int16Array.from) {
      image.pixelData = Int16Array.from(src32);
    } else {
      image.pixelData = new Int16Array(length);
      for (var _i = 0; _i < length; _i++) {
        image.pixelData[_i] = src32[_i];
      }
    }
  } else if (Uint16Array.from) {
    image.pixelData = Uint16Array.from(src32);
  } else {
    image.pixelData = new Uint16Array(length);
    for (var _i2 = 0; _i2 < length; _i2++) {
      image.pixelData[_i2] = src32[_i2];
    }
  }

  var t1 = new Date().getTime();

  image.perf_timetodecode = t1 - t0;

  // free
  openJPEG._free(dataPtr);
  openJPEG._free(imagePtrPtr);
  openJPEG._free(imagePtr);
  openJPEG._free(imageSizePtr);
  openJPEG._free(imageSizeXPtr);
  openJPEG._free(imageSizeYPtr);
  openJPEG._free(imageSizeCompPtr);

  return image;
}

function decodeOpenJpeg2000(imageFrame, pixelData) {
  var bytesPerPixel = imageFrame.bitsAllocated <= 8 ? 1 : 2;
  var signed = imageFrame.pixelRepresentation === 1;

  var image = decodeOpenJPEG(pixelData, bytesPerPixel, signed);

  imageFrame.columns = image.sx;
  imageFrame.rows = image.sy;
  imageFrame.pixelData = image.pixelData;
  if (image.nbChannels > 1) {
    imageFrame.photometricInterpretation = 'RGB';
  }

  return imageFrame;
}

function initializeJPEG2000(decodeConfig) {
  // check to make sure codec is loaded
  if (!decodeConfig.usePDFJS) {
    if (typeof OpenJPEG === 'undefined') {
      throw new Error('OpenJPEG decoder not loaded');
    }
  }

  if (!openJPEG) {
    openJPEG = OpenJPEG();
    if (!openJPEG || !openJPEG._jp2_decode) {
      throw new Error('OpenJPEG failed to initialize');
    }
  }
}

function decodeJPEG2000(imageFrame, pixelData, decodeConfig) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  initializeJPEG2000(decodeConfig);

  if (options.usePDFJS || decodeConfig.usePDFJS) {
    // OHIF image-JPEG2000 https://github.com/OHIF/image-JPEG2000
    // console.log('PDFJS')
    return decodeJpx(imageFrame, pixelData);
  }

  // OpenJPEG2000 https://github.com/jpambrun/openjpeg
  // console.log('OpenJPEG')
  return decodeOpenJpeg2000(imageFrame, pixelData);
}

exports.default = decodeJPEG2000;
exports.initializeJPEG2000 = initializeJPEG2000;

/***/ }),

/***/ "./shared/decoders/decodeJPEGBaseline.js":
/*!***********************************************!*\
  !*** ./shared/decoders/decodeJPEGBaseline.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});


function decodeJPEGBaseline(imageFrame, pixelData) {
  // check to make sure codec is loaded
  if (typeof JpegImage === 'undefined') {
    throw new Error('No JPEG Baseline decoder loaded');
  }
  var jpeg = new JpegImage();

  jpeg.parse(pixelData);

  // Do not use the internal jpeg.js color transformation,
  // since we will handle this afterwards
  jpeg.colorTransform = false;

  if (imageFrame.bitsAllocated === 8) {
    imageFrame.pixelData = jpeg.getData(imageFrame.columns, imageFrame.rows);

    return imageFrame;
  } else if (imageFrame.bitsAllocated === 16) {
    imageFrame.pixelData = jpeg.getData16(imageFrame.columns, imageFrame.rows);

    return imageFrame;
  }
}

exports.default = decodeJPEGBaseline;

/***/ }),

/***/ "./shared/decoders/decodeJPEGLS.js":
/*!*****************************************!*\
  !*** ./shared/decoders/decodeJPEGLS.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var charLS = void 0;

function jpegLSDecode(data, isSigned) {
  // prepare input parameters
  var dataPtr = charLS._malloc(data.length);

  charLS.writeArrayToMemory(data, dataPtr);

  // prepare output parameters
  var imagePtrPtr = charLS._malloc(4);
  var imageSizePtr = charLS._malloc(4);
  var widthPtr = charLS._malloc(4);
  var heightPtr = charLS._malloc(4);
  var bitsPerSamplePtr = charLS._malloc(4);
  var stridePtr = charLS._malloc(4);
  var allowedLossyErrorPtr = charLS._malloc(4);
  var componentsPtr = charLS._malloc(4);
  var interleaveModePtr = charLS._malloc(4);

  // Decode the image
  var result = charLS.ccall('jpegls_decode', 'number', ['number', 'number', 'number', 'number', 'number', 'number', 'number', 'number', 'number', 'number', 'number'], [dataPtr, data.length, imagePtrPtr, imageSizePtr, widthPtr, heightPtr, bitsPerSamplePtr, stridePtr, componentsPtr, allowedLossyErrorPtr, interleaveModePtr]);

  // Extract result values into object
  var image = {
    result: result,
    width: charLS.getValue(widthPtr, 'i32'),
    height: charLS.getValue(heightPtr, 'i32'),
    bitsPerSample: charLS.getValue(bitsPerSamplePtr, 'i32'),
    stride: charLS.getValue(stridePtr, 'i32'),
    components: charLS.getValue(componentsPtr, 'i32'),
    allowedLossyError: charLS.getValue(allowedLossyErrorPtr, 'i32'),
    interleaveMode: charLS.getValue(interleaveModePtr, 'i32'),
    pixelData: undefined
  };

  // Copy image from emscripten heap into appropriate array buffer type
  var imagePtr = charLS.getValue(imagePtrPtr, '*');

  if (image.bitsPerSample <= 8) {
    image.pixelData = new Uint8Array(image.width * image.height * image.components);
    image.pixelData.set(new Uint8Array(charLS.HEAP8.buffer, imagePtr, image.pixelData.length));
  } else if (isSigned) {
    image.pixelData = new Int16Array(image.width * image.height * image.components);
    image.pixelData.set(new Int16Array(charLS.HEAP16.buffer, imagePtr, image.pixelData.length));
  } else {
    image.pixelData = new Uint16Array(image.width * image.height * image.components);
    image.pixelData.set(new Uint16Array(charLS.HEAP16.buffer, imagePtr, image.pixelData.length));
  }

  // free memory and return image object
  charLS._free(dataPtr);
  charLS._free(imagePtr);
  charLS._free(imagePtrPtr);
  charLS._free(imageSizePtr);
  charLS._free(widthPtr);
  charLS._free(heightPtr);
  charLS._free(bitsPerSamplePtr);
  charLS._free(stridePtr);
  charLS._free(componentsPtr);
  charLS._free(interleaveModePtr);

  return image;
}

function initializeJPEGLS() {
  // check to make sure codec is loaded
  if (typeof CharLS === 'undefined') {
    throw new Error('No JPEG-LS decoder loaded');
  }

  // Try to initialize CharLS
  // CharLS https://github.com/cornerstonejs/charls
  if (!charLS) {
    charLS = CharLS();
    if (!charLS || !charLS._jpegls_decode) {
      throw new Error('JPEG-LS failed to initialize');
    }
  }
}

function decodeJPEGLS(imageFrame, pixelData) {
  initializeJPEGLS();

  var image = jpegLSDecode(pixelData, imageFrame.pixelRepresentation === 1);

  // throw error if not success or too much data
  if (image.result !== 0 && image.result !== 6) {
    throw new Error('JPEG-LS decoder failed to decode frame (error code ' + image.result + ')');
  }

  imageFrame.columns = image.width;
  imageFrame.rows = image.height;
  imageFrame.pixelData = image.pixelData;

  return imageFrame;
}

exports.default = decodeJPEGLS;
exports.initializeJPEGLS = initializeJPEGLS;

/***/ }),

/***/ "./shared/decoders/decodeJPEGLossless.js":
/*!***********************************************!*\
  !*** ./shared/decoders/decodeJPEGLossless.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});


function decodeJPEGLossless(imageFrame, pixelData) {
  // check to make sure codec is loaded
  if (typeof jpeg === 'undefined' || typeof jpeg.lossless === 'undefined' || typeof jpeg.lossless.Decoder === 'undefined') {
    throw new Error('No JPEG Lossless decoder loaded');
  }

  var byteOutput = imageFrame.bitsAllocated <= 8 ? 1 : 2;
  // console.time('jpeglossless');
  var buffer = pixelData.buffer;
  var decoder = new jpeg.lossless.Decoder();
  var decompressedData = decoder.decode(buffer, pixelData.byteOffset, pixelData.length, byteOutput);
  // console.timeEnd('jpeglossless');

  if (imageFrame.pixelRepresentation === 0) {
    if (imageFrame.bitsAllocated === 16) {
      imageFrame.pixelData = new Uint16Array(decompressedData.buffer);

      return imageFrame;
    }
    // untested!
    imageFrame.pixelData = new Uint8Array(decompressedData.buffer);

    return imageFrame;
  }
  imageFrame.pixelData = new Int16Array(decompressedData.buffer);

  return imageFrame;
}

exports.default = decodeJPEGLossless;

/***/ }),

/***/ "./shared/decoders/decodeLittleEndian.js":
/*!***********************************************!*\
  !*** ./shared/decoders/decodeLittleEndian.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function decodeLittleEndian(imageFrame, pixelData) {
  var arrayBuffer = pixelData.buffer;
  var offset = pixelData.byteOffset;
  var length = pixelData.length;

  if (imageFrame.bitsAllocated === 16) {
    // if pixel data is not aligned on even boundary, shift it so we can create the 16 bit array
    // buffers on it
    if (offset % 2) {
      arrayBuffer = arrayBuffer.slice(offset);
      offset = 0;
    }

    if (imageFrame.pixelRepresentation === 0) {
      imageFrame.pixelData = new Uint16Array(arrayBuffer, offset, length / 2);
    } else {
      imageFrame.pixelData = new Int16Array(arrayBuffer, offset, length / 2);
    }
  } else if (imageFrame.bitsAllocated === 8 || imageFrame.bitsAllocated === 1) {
    imageFrame.pixelData = pixelData;
  } else if (imageFrame.bitsAllocated === 32) {
    // if pixel data is not aligned on even boundary, shift it
    if (offset % 2) {
      arrayBuffer = arrayBuffer.slice(offset);
      offset = 0;
    }

    imageFrame.pixelData = new Float32Array(arrayBuffer, offset, length / 4);
  }

  return imageFrame;
}

exports.default = decodeLittleEndian;

/***/ }),

/***/ "./shared/decoders/decodeRLE.js":
/*!**************************************!*\
  !*** ./shared/decoders/decodeRLE.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function decodeRLE(imageFrame, pixelData) {
  if (imageFrame.bitsAllocated === 8) {
    if (imageFrame.planarConfiguration) {
      return decode8Planar(imageFrame, pixelData);
    }

    return decode8(imageFrame, pixelData);
  } else if (imageFrame.bitsAllocated === 16) {
    return decode16(imageFrame, pixelData);
  }

  throw new Error('unsupported pixel format for RLE');
}

function decode8(imageFrame, pixelData) {
  var frameData = pixelData;
  var frameSize = imageFrame.rows * imageFrame.columns;
  var outFrame = new ArrayBuffer(frameSize * imageFrame.samplesPerPixel);
  var header = new DataView(frameData.buffer, frameData.byteOffset);
  var data = new Int8Array(frameData.buffer, frameData.byteOffset);
  var out = new Int8Array(outFrame);

  var outIndex = 0;
  var numSegments = header.getInt32(0, true);

  for (var s = 0; s < numSegments; ++s) {
    outIndex = s;

    var inIndex = header.getInt32((s + 1) * 4, true);
    var maxIndex = header.getInt32((s + 2) * 4, true);

    if (maxIndex === 0) {
      maxIndex = frameData.length;
    }

    var endOfSegment = frameSize * numSegments;

    while (inIndex < maxIndex) {
      var n = data[inIndex++];

      if (n >= 0 && n <= 127) {
        // copy n bytes
        for (var i = 0; i < n + 1 && outIndex < endOfSegment; ++i) {
          out[outIndex] = data[inIndex++];
          outIndex += imageFrame.samplesPerPixel;
        }
      } else if (n <= -1 && n >= -127) {
        var value = data[inIndex++];
        // run of n bytes

        for (var j = 0; j < -n + 1 && outIndex < endOfSegment; ++j) {
          out[outIndex] = value;
          outIndex += imageFrame.samplesPerPixel;
        }
      } /* else if (n === -128) {
         } // do nothing */
    }
  }
  imageFrame.pixelData = new Uint8Array(outFrame);

  return imageFrame;
}

function decode8Planar(imageFrame, pixelData) {
  var frameData = pixelData;
  var frameSize = imageFrame.rows * imageFrame.columns;
  var outFrame = new ArrayBuffer(frameSize * imageFrame.samplesPerPixel);
  var header = new DataView(frameData.buffer, frameData.byteOffset);
  var data = new Int8Array(frameData.buffer, frameData.byteOffset);
  var out = new Int8Array(outFrame);

  var outIndex = 0;
  var numSegments = header.getInt32(0, true);

  for (var s = 0; s < numSegments; ++s) {
    outIndex = s * frameSize;

    var inIndex = header.getInt32((s + 1) * 4, true);
    var maxIndex = header.getInt32((s + 2) * 4, true);

    if (maxIndex === 0) {
      maxIndex = frameData.length;
    }

    var endOfSegment = frameSize * numSegments;

    while (inIndex < maxIndex) {
      var n = data[inIndex++];

      if (n >= 0 && n <= 127) {
        // copy n bytes
        for (var i = 0; i < n + 1 && outIndex < endOfSegment; ++i) {
          out[outIndex] = data[inIndex++];
          outIndex++;
        }
      } else if (n <= -1 && n >= -127) {
        var value = data[inIndex++];
        // run of n bytes

        for (var j = 0; j < -n + 1 && outIndex < endOfSegment; ++j) {
          out[outIndex] = value;
          outIndex++;
        }
      } /* else if (n === -128) {
         } // do nothing */
    }
  }
  imageFrame.pixelData = new Uint8Array(outFrame);

  return imageFrame;
}

function decode16(imageFrame, pixelData) {
  var frameData = pixelData;
  var frameSize = imageFrame.rows * imageFrame.columns;
  var outFrame = new ArrayBuffer(frameSize * imageFrame.samplesPerPixel * 2);

  var header = new DataView(frameData.buffer, frameData.byteOffset);
  var data = new Int8Array(frameData.buffer, frameData.byteOffset);
  var out = new Int8Array(outFrame);

  var numSegments = header.getInt32(0, true);

  for (var s = 0; s < numSegments; ++s) {
    var outIndex = 0;
    var highByte = s === 0 ? 1 : 0;

    var inIndex = header.getInt32((s + 1) * 4, true);
    var maxIndex = header.getInt32((s + 2) * 4, true);

    if (maxIndex === 0) {
      maxIndex = frameData.length;
    }

    while (inIndex < maxIndex) {
      var n = data[inIndex++];

      if (n >= 0 && n <= 127) {
        for (var i = 0; i < n + 1 && outIndex < frameSize; ++i) {
          out[outIndex * 2 + highByte] = data[inIndex++];
          outIndex++;
        }
      } else if (n <= -1 && n >= -127) {
        var value = data[inIndex++];

        for (var j = 0; j < -n + 1 && outIndex < frameSize; ++j) {
          out[outIndex * 2 + highByte] = value;
          outIndex++;
        }
      } /* else if (n === -128) {
         } // do nothing */
    }
  }
  if (imageFrame.pixelRepresentation === 0) {
    imageFrame.pixelData = new Uint16Array(outFrame);
  } else {
    imageFrame.pixelData = new Int16Array(outFrame);
  }

  return imageFrame;
}

exports.default = decodeRLE;

/***/ }),

/***/ "./shared/getMinMax.js":
/*!*****************************!*\
  !*** ./shared/getMinMax.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Calculate the minimum and maximum values in an Array
 *
 * @param {Number[]} storedPixelData
 * @return {{min: Number, max: Number}}
 */
function getMinMax(storedPixelData) {
  // we always calculate the min max values since they are not always
  // present in DICOM and we don't want to trust them anyway as cornerstone
  // depends on us providing reliable values for these
  var min = storedPixelData[0];
  var max = storedPixelData[0];
  var storedPixel = void 0;
  var numPixels = storedPixelData.length;

  for (var index = 1; index < numPixels; index++) {
    storedPixel = storedPixelData[index];
    min = Math.min(min, storedPixel);
    max = Math.max(max, storedPixel);
  }

  return {
    min: min,
    max: max
  };
}

exports.default = getMinMax;

/***/ }),

/***/ "./version.js":
/*!********************!*\
  !*** ./version.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = '2.1.2';

/***/ }),

/***/ "dicom-parser":
/*!*****************************************************************************************************************!*\
  !*** external {"commonjs":"dicom-parser","commonjs2":"dicom-parser","amd":"dicom-parser","root":"dicomParser"} ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_dicom_parser__;

/***/ })

/******/ });
});
//# sourceMappingURL=cornerstoneWADOImageLoader.js.map
// The table below was generated by running the following javascript in the console window while
// viewing the HTML version of the standard here:
// DICOM Standard here: http://dicom.nema.org/medical/dicom/current/output/html/part06.html
// see the blog post about it here: http://chafey.blogspot.com/2015/08/parsing-dicom-standard-with-javascript.html

/*
 (function () {
 var elements = document.querySelectorAll('#table_A-1 ~ div tbody tr');
 var result = "";for(var i=0; i < elements.length; i++) {
 result += "'" + elements[i].childNodes[1].childNodes[1].innerText.replace(/[^\x20-\x7E]+/g, '')  + "':'" +
 elements[i].childNodes[3].childNodes[1].innerText.replace(/[^\x20-\x7E]+/g, '') + "',\n";
 }
 return result;
 })();
 */

var uids = {
  '1.2.840.10008.1.1':'Verification SOP Class',
  '1.2.840.10008.1.2':'Implicit VR Little Endian: Default Transfer Syntax for DICOM',
  '1.2.840.10008.1.2.1':'Explicit VR Little Endian',
  '1.2.840.10008.1.2.1.99':'Deflated Explicit VR Little Endian',
  '1.2.840.10008.1.2.2':'Explicit VR Big Endian (Retired)',
  '1.2.840.10008.1.2.4.50':'JPEG Baseline (Process 1): Default Transfer Syntax for Lossy JPEG 8 Bit Image Compression',
  '1.2.840.10008.1.2.4.51':'JPEG Extended (Process 2 & 4): Default Transfer Syntax for Lossy JPEG 12 Bit Image Compression (Process 4 only)',
  '1.2.840.10008.1.2.4.52':'JPEG Extended (Process 3 & 5) (Retired)',
  '1.2.840.10008.1.2.4.53':'JPEG Spectral Selection, Non-Hierarchical (Process 6 & 8) (Retired)',
  '1.2.840.10008.1.2.4.54':'JPEG Spectral Selection, Non-Hierarchical (Process 7 & 9) (Retired)',
  '1.2.840.10008.1.2.4.55':'JPEG Full Progression, Non-Hierarchical (Process 10 & 12) (Retired)',
  '1.2.840.10008.1.2.4.56':'JPEG Full Progression, Non-Hierarchical (Process 11 & 13) (Retired)',
  '1.2.840.10008.1.2.4.57':'JPEG Lossless, Non-Hierarchical (Process 14)',
  '1.2.840.10008.1.2.4.58':'JPEG Lossless, Non-Hierarchical (Process 15) (Retired)',
  '1.2.840.10008.1.2.4.59':'JPEG Extended, Hierarchical (Process 16 & 18) (Retired)',
  '1.2.840.10008.1.2.4.60':'JPEG Extended, Hierarchical (Process 17 & 19) (Retired)',
  '1.2.840.10008.1.2.4.61':'JPEG Spectral Selection, Hierarchical (Process 20 & 22) (Retired)',
  '1.2.840.10008.1.2.4.62':'JPEG Spectral Selection, Hierarchical (Process 21 & 23) (Retired)',
  '1.2.840.10008.1.2.4.63':'JPEG Full Progression, Hierarchical (Process 24 & 26) (Retired)',
  '1.2.840.10008.1.2.4.64':'JPEG Full Progression, Hierarchical (Process 25 & 27) (Retired)',
  '1.2.840.10008.1.2.4.65':'JPEG Lossless, Hierarchical (Process 28) (Retired)',
  '1.2.840.10008.1.2.4.66':'JPEG Lossless, Hierarchical (Process 29) (Retired)',
  '1.2.840.10008.1.2.4.70':'JPEG Lossless, Non-Hierarchical, First-Order Prediction (Process 14 [Selection Value 1]): Default Transfer Syntax for Lossless JPEG Image Compression',
  '1.2.840.10008.1.2.4.80':'JPEG-LS Lossless Image Compression',
  '1.2.840.10008.1.2.4.81':'JPEG-LS Lossy (Near-Lossless) Image Compression',
  '1.2.840.10008.1.2.4.90':'JPEG 2000 Image Compression (Lossless Only)',
  '1.2.840.10008.1.2.4.91':'JPEG 2000 Image Compression',
  '1.2.840.10008.1.2.4.92':'JPEG 2000 Part 2 Multi-component Image Compression (Lossless Only)',
  '1.2.840.10008.1.2.4.93':'JPEG 2000 Part 2 Multi-component Image Compression',
  '1.2.840.10008.1.2.4.94':'JPIP Referenced',
  '1.2.840.10008.1.2.4.95':'JPIP Referenced Deflate',
  '1.2.840.10008.1.2.4.100':'MPEG2 Main Profile @ Main Level',
  '1.2.840.10008.1.2.4.101':'MPEG2 Main Profile @ High Level',
  '1.2.840.10008.1.2.4.102':'MPEG-4 AVC/H.264 High Profile / Level 4.1',
  '1.2.840.10008.1.2.4.103':'MPEG-4 AVC/H.264 BD-compatible High Profile / Level 4.1',
  '1.2.840.10008.1.2.4.104':'MPEG-4 AVC/H.264 High Profile / Level 4.2 For 2D Video',
  '1.2.840.10008.1.2.4.105':'MPEG-4 AVC/H.264 High Profile / Level 4.2 For 3D Video',
  '1.2.840.10008.1.2.4.106':'MPEG-4 AVC/H.264 Stereo High Profile / Level 4.2',
  '1.2.840.10008.1.2.5':'RLE Lossless',
  '1.2.840.10008.1.2.6.1':'RFC 2557 MIME encapsulation',
  '1.2.840.10008.1.2.6.2':'XML Encoding',
  '1.2.840.10008.1.3.10':'Media Storage Directory Storage',
  '1.2.840.10008.1.4.1.1':'Talairach Brain Atlas Frame of Reference',
  '1.2.840.10008.1.4.1.2':'SPM2 T1 Frame of Reference',
  '1.2.840.10008.1.4.1.3':'SPM2 T2 Frame of Reference',
  '1.2.840.10008.1.4.1.4':'SPM2 PD Frame of Reference',
  '1.2.840.10008.1.4.1.5':'SPM2 EPI Frame of Reference',
  '1.2.840.10008.1.4.1.6':'SPM2 FIL T1 Frame of Reference',
  '1.2.840.10008.1.4.1.7':'SPM2 PET Frame of Reference',
  '1.2.840.10008.1.4.1.8':'SPM2 TRANSM Frame of Reference',
  '1.2.840.10008.1.4.1.9':'SPM2 SPECT Frame of Reference',
  '1.2.840.10008.1.4.1.10':'SPM2 GRAY Frame of Reference',
  '1.2.840.10008.1.4.1.11':'SPM2 WHITE Frame of Reference',
  '1.2.840.10008.1.4.1.12':'SPM2 CSF Frame of Reference',
  '1.2.840.10008.1.4.1.13':'SPM2 BRAINMASK Frame of Reference',
  '1.2.840.10008.1.4.1.14':'SPM2 AVG305T1 Frame of Reference',
  '1.2.840.10008.1.4.1.15':'SPM2 AVG152T1 Frame of Reference',
  '1.2.840.10008.1.4.1.16':'SPM2 AVG152T2 Frame of Reference',
  '1.2.840.10008.1.4.1.17':'SPM2 AVG152PD Frame of Reference',
  '1.2.840.10008.1.4.1.18':'SPM2 SINGLESUBJT1 Frame of Reference',
  '1.2.840.10008.1.4.2.1':'ICBM 452 T1 Frame of Reference',
  '1.2.840.10008.1.4.2.2':'ICBM Single Subject MRI Frame of Reference',
  '1.2.840.10008.1.5.1':'Hot Iron Color Palette SOP Instance',
  '1.2.840.10008.1.5.2':'PET Color Palette SOP Instance',
  '1.2.840.10008.1.5.3':'Hot Metal Blue Color Palette SOP Instance',
  '1.2.840.10008.1.5.4':'PET 20 Step Color Palette SOP Instance',
  '1.2.840.10008.1.9':'Basic Study Content Notification SOP Class (Retired)',
  '1.2.840.10008.1.20.1':'Storage Commitment Push Model SOP Class',
  '1.2.840.10008.1.20.1.1':'Storage Commitment Push Model SOP Instance',
  '1.2.840.10008.1.20.2':'Storage Commitment Pull Model SOP Class (Retired)',
  '1.2.840.10008.1.20.2.1':'Storage Commitment Pull Model SOP Instance (Retired)',
  '1.2.840.10008.1.40':'Procedural Event Logging SOP Class',
  '1.2.840.10008.1.40.1':'Procedural Event Logging SOP Instance',
  '1.2.840.10008.1.42':'Substance Administration Logging SOP Class',
  '1.2.840.10008.1.42.1':'Substance Administration Logging SOP Instance',
  '1.2.840.10008.2.6.1':'DICOM UID Registry',
  '1.2.840.10008.2.16.4':'DICOM Controlled Terminology',
  '1.2.840.10008.3.1.1.1':'DICOM Application Context Name',
  '1.2.840.10008.3.1.2.1.1':'Detached Patient Management SOP Class (Retired)',
  '1.2.840.10008.3.1.2.1.4':'Detached Patient Management Meta SOP Class (Retired)',
  '1.2.840.10008.3.1.2.2.1':'Detached Visit Management SOP Class (Retired)',
  '1.2.840.10008.3.1.2.3.1':'Detached Study Management SOP Class (Retired)',
  '1.2.840.10008.3.1.2.3.2':'Study Component Management SOP Class (Retired)',
  '1.2.840.10008.3.1.2.3.3':'Modality Performed Procedure Step SOP Class',
  '1.2.840.10008.3.1.2.3.4':'Modality Performed Procedure Step Retrieve SOP Class',
  '1.2.840.10008.3.1.2.3.5':'Modality Performed Procedure Step Notification SOP Class',
  '1.2.840.10008.3.1.2.5.1':'Detached Results Management SOP Class (Retired)',
  '1.2.840.10008.3.1.2.5.4':'Detached Results Management Meta SOP Class (Retired)',
  '1.2.840.10008.3.1.2.5.5':'Detached Study Management Meta SOP Class (Retired)',
  '1.2.840.10008.3.1.2.6.1':'Detached Interpretation Management SOP Class (Retired)',
  '1.2.840.10008.4.2':'Storage Service Class',
  '1.2.840.10008.5.1.1.1':'Basic Film Session SOP Class',
  '1.2.840.10008.5.1.1.2':'Basic Film Box SOP Class',
  '1.2.840.10008.5.1.1.4':'Basic Grayscale Image Box SOP Class',
  '1.2.840.10008.5.1.1.4.1':'Basic Color Image Box SOP Class',
  '1.2.840.10008.5.1.1.4.2':'Referenced Image Box SOP Class (Retired)',
  '1.2.840.10008.5.1.1.9':'Basic Grayscale Print Management Meta SOP Class',
  '1.2.840.10008.5.1.1.9.1':'Referenced Grayscale Print Management Meta SOP Class (Retired)',
  '1.2.840.10008.5.1.1.14':'Print Job SOP Class',
  '1.2.840.10008.5.1.1.15':'Basic Annotation Box SOP Class',
  '1.2.840.10008.5.1.1.16':'Printer SOP Class',
  '1.2.840.10008.5.1.1.16.376':'Printer Configuration Retrieval SOP Class',
  '1.2.840.10008.5.1.1.17':'Printer SOP Instance',
  '1.2.840.10008.5.1.1.17.376':'Printer Configuration Retrieval SOP Instance',
  '1.2.840.10008.5.1.1.18':'Basic Color Print Management Meta SOP Class',
  '1.2.840.10008.5.1.1.18.1':'Referenced Color Print Management Meta SOP Class (Retired)',
  '1.2.840.10008.5.1.1.22':'VOI LUT Box SOP Class',
  '1.2.840.10008.5.1.1.23':'Presentation LUT SOP Class',
  '1.2.840.10008.5.1.1.24':'Image Overlay Box SOP Class (Retired)',
  '1.2.840.10008.5.1.1.24.1':'Basic Print Image Overlay Box SOP Class (Retired)',
  '1.2.840.10008.5.1.1.25':'Print Queue SOP Instance (Retired)',
  '1.2.840.10008.5.1.1.26':'Print Queue Management SOP Class (Retired)',
  '1.2.840.10008.5.1.1.27':'Stored Print Storage SOP Class (Retired)',
  '1.2.840.10008.5.1.1.29':'Hardcopy Grayscale Image Storage SOP Class (Retired)',
  '1.2.840.10008.5.1.1.30':'Hardcopy Color Image Storage SOP Class (Retired)',
  '1.2.840.10008.5.1.1.31':'Pull Print Request SOP Class (Retired)',
  '1.2.840.10008.5.1.1.32':'Pull Stored Print Management Meta SOP Class (Retired)',
  '1.2.840.10008.5.1.1.33':'Media Creation Management SOP Class UID',
  '1.2.840.10008.5.1.1.40':'Display System SOP Class',
  '1.2.840.10008.5.1.1.40.1':'Display System SOP Instance',
  '1.2.840.10008.5.1.4.1.1.1':'Computed Radiography Image Storage',
  '1.2.840.10008.5.1.4.1.1.1.1':'Digital X-Ray Image Storage - For Presentation',
  '1.2.840.10008.5.1.4.1.1.1.1.1':'Digital X-Ray Image Storage - For Processing',
  '1.2.840.10008.5.1.4.1.1.1.2':'Digital Mammography X-Ray Image Storage - For Presentation',
  '1.2.840.10008.5.1.4.1.1.1.2.1':'Digital Mammography X-Ray Image Storage - For Processing',
  '1.2.840.10008.5.1.4.1.1.1.3':'Digital Intra-Oral X-Ray Image Storage - For Presentation',
  '1.2.840.10008.5.1.4.1.1.1.3.1':'Digital Intra-Oral X-Ray Image Storage - For Processing',
  '1.2.840.10008.5.1.4.1.1.2':'CT Image Storage',
  '1.2.840.10008.5.1.4.1.1.2.1':'Enhanced CT Image Storage',
  '1.2.840.10008.5.1.4.1.1.2.2':'Legacy Converted Enhanced CT Image Storage',
  '1.2.840.10008.5.1.4.1.1.3':'Ultrasound Multi-frame Image Storage (Retired)',
  '1.2.840.10008.5.1.4.1.1.3.1':'Ultrasound Multi-frame Image Storage',
  '1.2.840.10008.5.1.4.1.1.4':'MR Image Storage',
  '1.2.840.10008.5.1.4.1.1.4.1':'Enhanced MR Image Storage',
  '1.2.840.10008.5.1.4.1.1.4.2':'MR Spectroscopy Storage',
  '1.2.840.10008.5.1.4.1.1.4.3':'Enhanced MR Color Image Storage',
  '1.2.840.10008.5.1.4.1.1.4.4':'Legacy Converted Enhanced MR Image Storage',
  '1.2.840.10008.5.1.4.1.1.5':'Nuclear Medicine Image Storage (Retired)',
  '1.2.840.10008.5.1.4.1.1.6':'Ultrasound Image Storage (Retired)',
  '1.2.840.10008.5.1.4.1.1.6.1':'Ultrasound Image Storage',
  '1.2.840.10008.5.1.4.1.1.6.2':'Enhanced US Volume Storage',
  '1.2.840.10008.5.1.4.1.1.7':'Secondary Capture Image Storage',
  '1.2.840.10008.5.1.4.1.1.7.1':'Multi-frame Single Bit Secondary Capture Image Storage',
  '1.2.840.10008.5.1.4.1.1.7.2':'Multi-frame Grayscale Byte Secondary Capture Image Storage',
  '1.2.840.10008.5.1.4.1.1.7.3':'Multi-frame Grayscale Word Secondary Capture Image Storage',
  '1.2.840.10008.5.1.4.1.1.7.4':'Multi-frame True Color Secondary Capture Image Storage',
  '1.2.840.10008.5.1.4.1.1.8':'Standalone Overlay Storage (Retired)',
  '1.2.840.10008.5.1.4.1.1.9':'Standalone Curve Storage (Retired)',
  '1.2.840.10008.5.1.4.1.1.9.1':'Waveform Storage - Trial (Retired)',
  '1.2.840.10008.5.1.4.1.1.9.1.1':'12-lead ECG Waveform Storage',
  '1.2.840.10008.5.1.4.1.1.9.1.2':'General ECG Waveform Storage',
  '1.2.840.10008.5.1.4.1.1.9.1.3':'Ambulatory ECG Waveform Storage',
  '1.2.840.10008.5.1.4.1.1.9.2.1':'Hemodynamic Waveform Storage',
  '1.2.840.10008.5.1.4.1.1.9.3.1':'Cardiac Electrophysiology Waveform Storage',
  '1.2.840.10008.5.1.4.1.1.9.4.1':'Basic Voice Audio Waveform Storage',
  '1.2.840.10008.5.1.4.1.1.9.4.2':'General Audio Waveform Storage',
  '1.2.840.10008.5.1.4.1.1.9.5.1':'Arterial Pulse Waveform Storage',
  '1.2.840.10008.5.1.4.1.1.9.6.1':'Respiratory Waveform Storage',
  '1.2.840.10008.5.1.4.1.1.10':'Standalone Modality LUT Storage (Retired)',
  '1.2.840.10008.5.1.4.1.1.11':'Standalone VOI LUT Storage (Retired)',
  '1.2.840.10008.5.1.4.1.1.11.1':'Grayscale Softcopy Presentation State Storage SOP Class',
  '1.2.840.10008.5.1.4.1.1.11.2':'Color Softcopy Presentation State Storage SOP Class',
  '1.2.840.10008.5.1.4.1.1.11.3':'Pseudo-Color Softcopy Presentation State Storage SOP Class',
  '1.2.840.10008.5.1.4.1.1.11.4':'Blending Softcopy Presentation State Storage SOP Class',
  '1.2.840.10008.5.1.4.1.1.11.5':'XA/XRF Grayscale Softcopy Presentation State Storage',
  '1.2.840.10008.5.1.4.1.1.12.1':'X-Ray Angiographic Image Storage',
  '1.2.840.10008.5.1.4.1.1.12.1.1':'Enhanced XA Image Storage',
  '1.2.840.10008.5.1.4.1.1.12.2':'X-Ray Radiofluoroscopic Image Storage',
  '1.2.840.10008.5.1.4.1.1.12.2.1':'Enhanced XRF Image Storage',
  '1.2.840.10008.5.1.4.1.1.12.3':'X-Ray Angiographic Bi-Plane Image Storage (Retired)',
  '1.2.840.10008.5.1.4.1.1.13.1.1':'X-Ray 3D Angiographic Image Storage',
  '1.2.840.10008.5.1.4.1.1.13.1.2':'X-Ray 3D Craniofacial Image Storage',
  '1.2.840.10008.5.1.4.1.1.13.1.3':'Breast Tomosynthesis Image Storage',
  '1.2.840.10008.5.1.4.1.1.13.1.4':'Breast Projection X-Ray Image Storage - For Presentation',
  '1.2.840.10008.5.1.4.1.1.13.1.5':'Breast Projection X-Ray Image Storage - For Processing',
  '1.2.840.10008.5.1.4.1.1.14.1':'Intravascular Optical Coherence Tomography Image Storage - For Presentation',
  '1.2.840.10008.5.1.4.1.1.14.2':'Intravascular Optical Coherence Tomography Image Storage - For Processing',
  '1.2.840.10008.5.1.4.1.1.20':'Nuclear Medicine Image Storage',
  '1.2.840.10008.5.1.4.1.1.30':'Parametric Map Storage',
  '1.2.840.10008.5.1.4.1.1.66':'Raw Data Storage',
  '1.2.840.10008.5.1.4.1.1.66.1':'Spatial Registration Storage',
  '1.2.840.10008.5.1.4.1.1.66.2':'Spatial Fiducials Storage',
  '1.2.840.10008.5.1.4.1.1.66.3':'Deformable Spatial Registration Storage',
  '1.2.840.10008.5.1.4.1.1.66.4':'Segmentation Storage',
  '1.2.840.10008.5.1.4.1.1.66.5':'Surface Segmentation Storage',
  '1.2.840.10008.5.1.4.1.1.67':'Real World Value Mapping Storage',
  '1.2.840.10008.5.1.4.1.1.68.1':'Surface Scan Mesh Storage',
  '1.2.840.10008.5.1.4.1.1.68.2':'Surface Scan Point Cloud Storage',
  '1.2.840.10008.5.1.4.1.1.77.1':'VL Image Storage - Trial (Retired)',
  '1.2.840.10008.5.1.4.1.1.77.2':'VL Multi-frame Image Storage - Trial (Retired)',
  '1.2.840.10008.5.1.4.1.1.77.1.1':'VL Endoscopic Image Storage',
  '1.2.840.10008.5.1.4.1.1.77.1.1.1':'Video Endoscopic Image Storage',
  '1.2.840.10008.5.1.4.1.1.77.1.2':'VL Microscopic Image Storage',
  '1.2.840.10008.5.1.4.1.1.77.1.2.1':'Video Microscopic Image Storage',
  '1.2.840.10008.5.1.4.1.1.77.1.3':'VL Slide-Coordinates Microscopic Image Storage',
  '1.2.840.10008.5.1.4.1.1.77.1.4':'VL Photographic Image Storage',
  '1.2.840.10008.5.1.4.1.1.77.1.4.1':'Video Photographic Image Storage',
  '1.2.840.10008.5.1.4.1.1.77.1.5.1':'Ophthalmic Photography 8 Bit Image Storage',
  '1.2.840.10008.5.1.4.1.1.77.1.5.2':'Ophthalmic Photography 16 Bit Image Storage',
  '1.2.840.10008.5.1.4.1.1.77.1.5.3':'Stereometric Relationship Storage',
  '1.2.840.10008.5.1.4.1.1.77.1.5.4':'Ophthalmic Tomography Image Storage',
  '1.2.840.10008.5.1.4.1.1.77.1.5.5':'Wide Field Ophthalmic Photography Stereographic Projection Image Storage',
  '1.2.840.10008.5.1.4.1.1.77.1.5.6':'Wide Field Ophthalmic Photography 3D Coordinates Image Storage',
  '1.2.840.10008.5.1.4.1.1.77.1.6':'VL Whole Slide Microscopy Image Storage',
  '1.2.840.10008.5.1.4.1.1.78.1':'Lensometry Measurements Storage',
  '1.2.840.10008.5.1.4.1.1.78.2':'Autorefraction Measurements Storage',
  '1.2.840.10008.5.1.4.1.1.78.3':'Keratometry Measurements Storage',
  '1.2.840.10008.5.1.4.1.1.78.4':'Subjective Refraction Measurements Storage',
  '1.2.840.10008.5.1.4.1.1.78.5':'Visual Acuity Measurements Storage',
  '1.2.840.10008.5.1.4.1.1.78.6':'Spectacle Prescription Report Storage',
  '1.2.840.10008.5.1.4.1.1.78.7':'Ophthalmic Axial Measurements Storage',
  '1.2.840.10008.5.1.4.1.1.78.8':'Intraocular Lens Calculations Storage',
  '1.2.840.10008.5.1.4.1.1.79.1':'Macular Grid Thickness and Volume Report Storage',
  '1.2.840.10008.5.1.4.1.1.80.1':'Ophthalmic Visual Field Static Perimetry Measurements Storage',
  '1.2.840.10008.5.1.4.1.1.81.1':'Ophthalmic Thickness Map Storage',
  '1.2.840.10008.5.1.4.1.1.82.1':'Corneal Topography Map Storage',
  '1.2.840.10008.5.1.4.1.1.88.1':'Text SR Storage - Trial (Retired)',
  '1.2.840.10008.5.1.4.1.1.88.2':'Audio SR Storage - Trial (Retired)',
  '1.2.840.10008.5.1.4.1.1.88.3':'Detail SR Storage - Trial (Retired)',
  '1.2.840.10008.5.1.4.1.1.88.4':'Comprehensive SR Storage - Trial (Retired)',
  '1.2.840.10008.5.1.4.1.1.88.11':'Basic Text SR Storage',
  '1.2.840.10008.5.1.4.1.1.88.22':'Enhanced SR Storage',
  '1.2.840.10008.5.1.4.1.1.88.33':'Comprehensive SR Storage',
  '1.2.840.10008.5.1.4.1.1.88.34':'Comprehensive 3D SR Storage',
  '1.2.840.10008.5.1.4.1.1.88.35':'Extensible SR Storage',
  '1.2.840.10008.5.1.4.1.1.88.40':'Procedure Log Storage',
  '1.2.840.10008.5.1.4.1.1.88.50':'Mammography CAD SR Storage',
  '1.2.840.10008.5.1.4.1.1.88.59':'Key Object Selection Document Storage',
  '1.2.840.10008.5.1.4.1.1.88.65':'Chest CAD SR Storage',
  '1.2.840.10008.5.1.4.1.1.88.67':'X-Ray Radiation Dose SR Storage',
  '1.2.840.10008.5.1.4.1.1.88.68':'Radiopharmaceutical Radiation Dose SR Storage',
  '1.2.840.10008.5.1.4.1.1.88.69':'Colon CAD SR Storage',
  '1.2.840.10008.5.1.4.1.1.88.70':'Implantation Plan SR Storage',
  '1.2.840.10008.5.1.4.1.1.104.1':'Encapsulated PDF Storage',
  '1.2.840.10008.5.1.4.1.1.104.2':'Encapsulated CDA Storage',
  '1.2.840.10008.5.1.4.1.1.128':'Positron Emission Tomography Image Storage',
  '1.2.840.10008.5.1.4.1.1.128.1':'Legacy Converted Enhanced PET Image Storage',
  '1.2.840.10008.5.1.4.1.1.129':'Standalone PET Curve Storage (Retired)',
  '1.2.840.10008.5.1.4.1.1.130':'Enhanced PET Image Storage',
  '1.2.840.10008.5.1.4.1.1.131':'Basic Structured Display Storage',
  '1.2.840.10008.5.1.4.1.1.481.1':'RT Image Storage',
  '1.2.840.10008.5.1.4.1.1.481.2':'RT Dose Storage',
  '1.2.840.10008.5.1.4.1.1.481.3':'RT Structure Set Storage',
  '1.2.840.10008.5.1.4.1.1.481.4':'RT Beams Treatment Record Storage',
  '1.2.840.10008.5.1.4.1.1.481.5':'RT Plan Storage',
  '1.2.840.10008.5.1.4.1.1.481.6':'RT Brachy Treatment Record Storage',
  '1.2.840.10008.5.1.4.1.1.481.7':'RT Treatment Summary Record Storage',
  '1.2.840.10008.5.1.4.1.1.481.8':'RT Ion Plan Storage',
  '1.2.840.10008.5.1.4.1.1.481.9':'RT Ion Beams Treatment Record Storage',
  '1.2.840.10008.5.1.4.1.1.501.1':'DICOS CT Image Storage',
  '1.2.840.10008.5.1.4.1.1.501.2.1':'DICOS Digital X-Ray Image Storage - For Presentation',
  '1.2.840.10008.5.1.4.1.1.501.2.2':'DICOS Digital X-Ray Image Storage - For Processing',
  '1.2.840.10008.5.1.4.1.1.501.3':'DICOS Threat Detection Report Storage',
  '1.2.840.10008.5.1.4.1.1.501.4':'DICOS 2D AIT Storage',
  '1.2.840.10008.5.1.4.1.1.501.5':'DICOS 3D AIT Storage',
  '1.2.840.10008.5.1.4.1.1.501.6':'DICOS Quadrupole Resonance (QR) Storage',
  '1.2.840.10008.5.1.4.1.1.601.1':'Eddy Current Image Storage',
  '1.2.840.10008.5.1.4.1.1.601.2':'Eddy Current Multi-frame Image Storage',
  '1.2.840.10008.5.1.4.1.2.1.1':'Patient Root Query/Retrieve Information Model - FIND',
  '1.2.840.10008.5.1.4.1.2.1.2':'Patient Root Query/Retrieve Information Model - MOVE',
  '1.2.840.10008.5.1.4.1.2.1.3':'Patient Root Query/Retrieve Information Model - GET',
  '1.2.840.10008.5.1.4.1.2.2.1':'Study Root Query/Retrieve Information Model - FIND',
  '1.2.840.10008.5.1.4.1.2.2.2':'Study Root Query/Retrieve Information Model - MOVE',
  '1.2.840.10008.5.1.4.1.2.2.3':'Study Root Query/Retrieve Information Model - GET',
  '1.2.840.10008.5.1.4.1.2.3.1':'Patient/Study Only Query/Retrieve Information Model - FIND (Retired)',
  '1.2.840.10008.5.1.4.1.2.3.2':'Patient/Study Only Query/Retrieve Information Model - MOVE (Retired)',
  '1.2.840.10008.5.1.4.1.2.3.3':'Patient/Study Only Query/Retrieve Information Model - GET (Retired)',
  '1.2.840.10008.5.1.4.1.2.4.2':'Composite Instance Root Retrieve - MOVE',
  '1.2.840.10008.5.1.4.1.2.4.3':'Composite Instance Root Retrieve - GET',
  '1.2.840.10008.5.1.4.1.2.5.3':'Composite Instance Retrieve Without Bulk Data - GET',
  '1.2.840.10008.5.1.4.31':'Modality Worklist Information Model - FIND',
  '1.2.840.10008.5.1.4.32':'General Purpose Worklist Management Meta SOP Class (Retired)',
  '1.2.840.10008.5.1.4.32.1':'General Purpose Worklist Information Model - FIND (Retired)',
  '1.2.840.10008.5.1.4.32.2':'General Purpose Scheduled Procedure Step SOP Class (Retired)',
  '1.2.840.10008.5.1.4.32.3':'General Purpose Performed Procedure Step SOP Class (Retired)',
  '1.2.840.10008.5.1.4.33':'Instance Availability Notification SOP Class',
  '1.2.840.10008.5.1.4.34.1':'RT Beams Delivery Instruction Storage - Trial (Retired)',
  '1.2.840.10008.5.1.4.34.2':'RT Conventional Machine Verification - Trial (Retired)',
  '1.2.840.10008.5.1.4.34.3':'RT Ion Machine Verification - Trial (Retired)',
  '1.2.840.10008.5.1.4.34.4':'Unified Worklist and Procedure Step Service Class - Trial (Retired)',
  '1.2.840.10008.5.1.4.34.4.1':'Unified Procedure Step - Push SOP Class - Trial (Retired)',
  '1.2.840.10008.5.1.4.34.4.2':'Unified Procedure Step - Watch SOP Class - Trial (Retired)',
  '1.2.840.10008.5.1.4.34.4.3':'Unified Procedure Step - Pull SOP Class - Trial (Retired)',
  '1.2.840.10008.5.1.4.34.4.4':'Unified Procedure Step - Event SOP Class - Trial (Retired)',
  '1.2.840.10008.5.1.4.34.5':'UPS Global Subscription SOP Instance',
  '1.2.840.10008.5.1.4.34.5.1':'UPS Filtered Global Subscription SOP Instance',
  '1.2.840.10008.5.1.4.34.6':'Unified Worklist and Procedure Step Service Class',
  '1.2.840.10008.5.1.4.34.6.1':'Unified Procedure Step - Push SOP Class',
  '1.2.840.10008.5.1.4.34.6.2':'Unified Procedure Step - Watch SOP Class',
  '1.2.840.10008.5.1.4.34.6.3':'Unified Procedure Step - Pull SOP Class',
  '1.2.840.10008.5.1.4.34.6.4':'Unified Procedure Step - Event SOP Class',
  '1.2.840.10008.5.1.4.34.7':'RT Beams Delivery Instruction Storage',
  '1.2.840.10008.5.1.4.34.8':'RT Conventional Machine Verification',
  '1.2.840.10008.5.1.4.34.9':'RT Ion Machine Verification',
  '1.2.840.10008.5.1.4.37.1':'General Relevant Patient Information Query',
  '1.2.840.10008.5.1.4.37.2':'Breast Imaging Relevant Patient Information Query',
  '1.2.840.10008.5.1.4.37.3':'Cardiac Relevant Patient Information Query',
  '1.2.840.10008.5.1.4.38.1':'Hanging Protocol Storage',
  '1.2.840.10008.5.1.4.38.2':'Hanging Protocol Information Model - FIND',
  '1.2.840.10008.5.1.4.38.3':'Hanging Protocol Information Model - MOVE',
  '1.2.840.10008.5.1.4.38.4':'Hanging Protocol Information Model - GET',
  '1.2.840.10008.5.1.4.39.1':'Color Palette Storage',
  '1.2.840.10008.5.1.4.39.2':'Color Palette Information Model - FIND',
  '1.2.840.10008.5.1.4.39.3':'Color Palette Information Model - MOVE',
  '1.2.840.10008.5.1.4.39.4':'Color Palette Information Model - GET',
  '1.2.840.10008.5.1.4.41':'Product Characteristics Query SOP Class',
  '1.2.840.10008.5.1.4.42':'Substance Approval Query SOP Class',
  '1.2.840.10008.5.1.4.43.1':'Generic Implant Template Storage',
  '1.2.840.10008.5.1.4.43.2':'Generic Implant Template Information Model - FIND',
  '1.2.840.10008.5.1.4.43.3':'Generic Implant Template Information Model - MOVE',
  '1.2.840.10008.5.1.4.43.4':'Generic Implant Template Information Model - GET',
  '1.2.840.10008.5.1.4.44.1':'Implant Assembly Template Storage',
  '1.2.840.10008.5.1.4.44.2':'Implant Assembly Template Information Model - FIND',
  '1.2.840.10008.5.1.4.44.3':'Implant Assembly Template Information Model - MOVE',
  '1.2.840.10008.5.1.4.44.4':'Implant Assembly Template Information Model - GET',
  '1.2.840.10008.5.1.4.45.1':'Implant Template Group Storage',
  '1.2.840.10008.5.1.4.45.2':'Implant Template Group Information Model - FIND',
  '1.2.840.10008.5.1.4.45.3':'Implant Template Group Information Model - MOVE',
  '1.2.840.10008.5.1.4.45.4':'Implant Template Group Information Model - GET',
  '1.2.840.10008.7.1.1':'Native DICOM Model',
  '1.2.840.10008.7.1.2':'Abstract Multi-Dimensional Image Model',
  '1.2.840.10008.8.1.1':'DICOM Content Mapping Resource',
  '1.2.840.10008.15.0.3.1':'dicomDeviceName',
  '1.2.840.10008.15.0.3.2':'dicomDescription',
  '1.2.840.10008.15.0.3.3':'dicomManufacturer',
  '1.2.840.10008.15.0.3.4':'dicomManufacturerModelName',
  '1.2.840.10008.15.0.3.5':'dicomSoftwareVersion',
  '1.2.840.10008.15.0.3.6':'dicomVendorData',
  '1.2.840.10008.15.0.3.7':'dicomAETitle',
  '1.2.840.10008.15.0.3.8':'dicomNetworkConnectionReference',
  '1.2.840.10008.15.0.3.9':'dicomApplicationCluster',
  '1.2.840.10008.15.0.3.10':'dicomAssociationInitiator',
  '1.2.840.10008.15.0.3.11':'dicomAssociationAcceptor',
  '1.2.840.10008.15.0.3.12':'dicomHostname',
  '1.2.840.10008.15.0.3.13':'dicomPort',
  '1.2.840.10008.15.0.3.14':'dicomSOPClass',
  '1.2.840.10008.15.0.3.15':'dicomTransferRole',
  '1.2.840.10008.15.0.3.16':'dicomTransferSyntax',
  '1.2.840.10008.15.0.3.17':'dicomPrimaryDeviceType',
  '1.2.840.10008.15.0.3.18':'dicomRelatedDeviceReference',
  '1.2.840.10008.15.0.3.19':'dicomPreferredCalledAETitle',
  '1.2.840.10008.15.0.3.20':'dicomTLSCyphersuite',
  '1.2.840.10008.15.0.3.21':'dicomAuthorizedNodeCertificateReference',
  '1.2.840.10008.15.0.3.22':'dicomThisNodeCertificateReference',
  '1.2.840.10008.15.0.3.23':'dicomInstalled',
  '1.2.840.10008.15.0.3.24':'dicomStationName',
  '1.2.840.10008.15.0.3.25':'dicomDeviceSerialNumber',
  '1.2.840.10008.15.0.3.26':'dicomInstitutionName',
  '1.2.840.10008.15.0.3.27':'dicomInstitutionAddress',
  '1.2.840.10008.15.0.3.28':'dicomInstitutionDepartmentName',
  '1.2.840.10008.15.0.3.29':'dicomIssuerOfPatientID',
  '1.2.840.10008.15.0.3.30':'dicomPreferredCallingAETitle',
  '1.2.840.10008.15.0.3.31':'dicomSupportedCharacterSet',
  '1.2.840.10008.15.0.4.1':'dicomConfigurationRoot',
  '1.2.840.10008.15.0.4.2':'dicomDevicesRoot',
  '1.2.840.10008.15.0.4.3':'dicomUniqueAETitlesRegistryRoot',
  '1.2.840.10008.15.0.4.4':'dicomDevice',
  '1.2.840.10008.15.0.4.5':'dicomNetworkAE',
  '1.2.840.10008.15.0.4.6':'dicomNetworkConnection',
  '1.2.840.10008.15.0.4.7':'dicomUniqueAETitle',
  '1.2.840.10008.15.0.4.8':'dicomTransferCapability',
  '1.2.840.10008.15.1.1':'Universal Coordinated Time',
};

// This script will load the WebWorkers and Codecs from unpkg url

function getBlobUrl (url) {
  const baseUrl = window.URL || window.webkitURL;
  const blob = new Blob([`importScripts('${url}')`], { type: 'application/javascript' });

  return baseUrl.createObjectURL(blob);
}

function UrlExists (url) {
  const http = new XMLHttpRequest();

  http.open('HEAD', url, false);
  http.send();

  return http.status !== 404;
}

let webWorkerUrl = getBlobUrl('https://unpkg.com/cornerstone-wado-image-loader/dist/cornerstoneWADOImageLoaderWebWorker.min.js');
let codecsUrl = getBlobUrl('https://unpkg.com/cornerstone-wado-image-loader/dist/cornerstoneWADOImageLoaderCodecs.js');

if (UrlExists('../../dist/cornerstoneWADOImageLoaderWebWorker.min.js')) {
  webWorkerUrl = '../../dist/cornerstoneWADOImageLoaderWebWorker.min.js';
}

if (UrlExists('../../dist/cornerstoneWADOImageLoaderCodecs.js')) {
  codecsUrl = '../dist/cornerstoneWADOImageLoaderCodecs.js';
}

try {
  window.cornerstoneWADOImageLoader.webWorkerManager.initialize({
    maxWebWorkers: 4,
    startWebWorkersOnDemand: true,
    webWorkerPath: webWorkerUrl,
    webWorkerTaskPaths: [],
    taskConfiguration: {
      decodeTask: {
        loadCodecsOnStartup: true,
        initializeCodecsOnStartup: false,
        codecsPath: codecsUrl,
        usePDFJS: false,
        strict: true
      }
    }
  });
} catch (error) {
  throw new Error('cornerstoneWADOImageLoader is not loaded');
}

