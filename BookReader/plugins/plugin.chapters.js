!function(t){var n={};function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=n,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)r.d(e,o,function(n){return t[n]}.bind(null,o));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="",r(r.s=24)}([function(t,n,r){(function(n){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n&&n)||Function("return this")()}).call(this,r(27))},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n){var r={}.hasOwnProperty;t.exports=function(t,n){return r.call(t,n)}},function(t,n,r){var e=r(1);t.exports=!e((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,n,r){var e=r(4),o=r(10),i=r(7);t.exports=e?function(t,n,r){return o.f(t,n,i(1,r))}:function(t,n,r){return t[n]=r,t}},function(t,n,r){var e=r(32),o=r(33);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.3.3",mode:e?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,r){var e=r(29),o=r(15);t.exports=function(t){return e(o(t))}},function(t,n,r){var e=r(2);t.exports=function(t,n){if(!e(t))return t;var r,o;if(n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!e(o=r.call(t)))return o;if(!n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,r){var e=r(4),o=r(16),i=r(17),u=r(9),c=Object.defineProperty;n.f=e?c:function(t,n,r){if(i(t),n=u(n,!0),i(r),o)try{return c(t,n,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[n]=r.value),t}},function(t,n,r){var e=r(0),o=r(5);t.exports=function(t,n){try{o(e,t,n)}catch(r){e[t]=n}return n}},function(t,n,r){var e=r(0),o=r(6),i=r(19),u=r(51),c=e.Symbol,a=o("wks");t.exports=function(t){return a[t]||(a[t]=u&&c[t]||(u?c:i)("Symbol."+t))}},function(t,n,r){var e=r(4),o=r(28),i=r(7),u=r(8),c=r(9),a=r(3),f=r(16),s=Object.getOwnPropertyDescriptor;n.f=e?s:function(t,n){if(t=u(t),n=c(n,!0),f)try{return s(t,n)}catch(t){}if(a(t,n))return i(!o.f.call(t,n),t[n])}},function(t,n){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,n,r){var e=r(4),o=r(1),i=r(30);t.exports=!e&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,n,r){var e=r(2);t.exports=function(t){if(!e(t))throw TypeError(String(t)+" is not an object");return t}},function(t,n,r){var e=r(6);t.exports=e("native-function-to-string",Function.toString)},function(t,n){var r=0,e=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++r+e).toString(36)}},function(t,n){t.exports={}},function(t,n,r){var e=r(22),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},function(t,n){var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:r)(t)}},function(t,n,r){var e=r(14);t.exports=Array.isArray||function(t){return"Array"==e(t)}},function(t,n,r){"use strict";r.r(n);var e;r(25);jQuery.extend(BookReader.defaultOptions,{olHost:"https://openlibrary.org",enableChaptersPlugin:!0,bookId:""}),BookReader.prototype.setup=(e=BookReader.prototype.setup,function(t){e.call(this,t),this.olHost=t.olHost,this.enableChaptersPlugin=t.enableChaptersPlugin,this.bookId=t.bookId}),BookReader.prototype.init=function(t){return function(){t.call(this),this.enableChaptersPlugin&&"embed"!==this.ui&&this.getOpenLibraryRecord()}}(BookReader.prototype.init),BookReader.prototype.addChapter=function(t,n,r){var e=this,o=BookReader.util.cssPercentage(r,this.getNumLeafs()-1),i="Chapter: ".concat(t," | ").concat("Page"," ").concat(n);$("<div><div>".concat(i,"</div></div>")).addClass("BRchapter").css({left:o}).appendTo(this.$(".BRnavline")).data({pageIndex:r}).bt({contentSelector:'$(this).find("> div")',trigger:"hover",closeWhenOthersOpen:!0,cssStyles:{padding:"12px 14px",backgroundColor:"#fff",border:"4px solid rgb(216,216,216)",color:"rgb(52,52,52)"},shrinkToFit:!1,width:"230px",padding:0,spikeGirth:0,spikeLength:0,overlap:"0px",overlay:!1,killTitle:!1,offsetParent:null,positions:["top"],fill:"white",windowMargin:10,strokeWidth:0,cornerRadius:0,centerPointX:0,centerPointY:0,shadow:!1}).hover((function(t){e.$(".BRsearch,.BRchapter").removeClass("front"),$(t.target).addClass("front")}),(function(t){return $(t.target).removeClass("front")})).bind("click",(function(t){return e.jumpToIndex($(t.target).data("pageIndex"))}))},BookReader.prototype.removeChapters=function(){this.$(".BRnavpos .BRchapter").remove()},BookReader.prototype.updateTOC=function(t){this.removeChapters();for(var n=0;n<t.length;n++)this.addChapterFromEntry(t[n])},BookReader.prototype.addChapterFromEntry=function(t){var n=this.getPageIndex(t.pagenum);n&&this.addChapter(t.title,t.pagenum,n),this.$(".BRchapter, .BRsearch").each((function(t,n){var r=$(n);r.hover((function(){return r.addClass("front")}),(function(){return r.removeClass("front")}))}))},BookReader.prototype.getOpenLibraryRecord=function(){var t=this,n="".concat(this.olHost,"//query.json?type=/type/edition&*="),r="".concat(n,"&ocaid=").concat(this.bookId);$.ajax({url:r,dataType:"jsonp"}).then((function(r){return r&&r.length>0?r:$.ajax({url:"".concat(n,"&source_records=ia:").concat(t.bookId),dataType:"jsonp"})})).then((function(n){var r;n&&n.length>0&&(r=n[0])&&r.table_of_contents&&t.updateTOC(r.table_of_contents)}))}},function(t,n,r){"use strict";var e=r(26),o=r(1),i=r(23),u=r(2),c=r(48),a=r(21),f=r(49),s=r(50),p=r(52),l=r(12)("isConcatSpreadable"),d=!o((function(){var t=[];return t[l]=!1,t.concat()[0]!==t})),v=p("concat"),h=function(t){if(!u(t))return!1;var n=t[l];return void 0!==n?!!n:i(t)};e({target:"Array",proto:!0,forced:!d||!v},{concat:function(t){var n,r,e,o,i,u=c(this),p=s(u,0),l=0;for(n=-1,e=arguments.length;n<e;n++)if(i=-1===n?u:arguments[n],h(i)){if(l+(o=a(i.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(r=0;r<o;r++,l++)r in i&&f(p,l,i[r])}else{if(l>=9007199254740991)throw TypeError("Maximum allowed index exceeded");f(p,l++,i)}return p.length=l,p}})},function(t,n,r){var e=r(0),o=r(13).f,i=r(5),u=r(31),c=r(11),a=r(37),f=r(47);t.exports=function(t,n){var r,s,p,l,d,v=t.target,h=t.global,y=t.stat;if(r=h?e:y?e[v]||c(v,{}):(e[v]||{}).prototype)for(s in n){if(l=n[s],p=t.noTargetGet?(d=o(r,s))&&d.value:r[s],!f(h?s:v+(y?".":"#")+s,t.forced)&&void 0!==p){if(typeof l==typeof p)continue;a(l,p)}(t.sham||p&&p.sham)&&i(l,"sham",!0),u(r,s,l,t)}}},function(t,n){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,n,r){"use strict";var e={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!e.call({1:2},1);n.f=i?function(t){var n=o(this,t);return!!n&&n.enumerable}:e},function(t,n,r){var e=r(1),o=r(14),i="".split;t.exports=e((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,n,r){var e=r(0),o=r(2),i=e.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},function(t,n,r){var e=r(0),o=r(6),i=r(5),u=r(3),c=r(11),a=r(18),f=r(34),s=f.get,p=f.enforce,l=String(a).split("toString");o("inspectSource",(function(t){return a.call(t)})),(t.exports=function(t,n,r,o){var a=!!o&&!!o.unsafe,f=!!o&&!!o.enumerable,s=!!o&&!!o.noTargetGet;"function"==typeof r&&("string"!=typeof n||u(r,"name")||i(r,"name",n),p(r).source=l.join("string"==typeof n?n:"")),t!==e?(a?!s&&t[n]&&(f=!0):delete t[n],f?t[n]=r:i(t,n,r)):f?t[n]=r:c(n,r)})(Function.prototype,"toString",(function(){return"function"==typeof this&&s(this).source||a.call(this)}))},function(t,n){t.exports=!1},function(t,n,r){var e=r(0),o=r(11),i=e["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,n,r){var e,o,i,u=r(35),c=r(0),a=r(2),f=r(5),s=r(3),p=r(36),l=r(20),d=c.WeakMap;if(u){var v=new d,h=v.get,y=v.has,g=v.set;e=function(t,n){return g.call(v,t,n),n},o=function(t){return h.call(v,t)||{}},i=function(t){return y.call(v,t)}}else{var b=p("state");l[b]=!0,e=function(t,n){return f(t,b,n),n},o=function(t){return s(t,b)?t[b]:{}},i=function(t){return s(t,b)}}t.exports={set:e,get:o,has:i,enforce:function(t){return i(t)?o(t):e(t,{})},getterFor:function(t){return function(n){var r;if(!a(n)||(r=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return r}}}},function(t,n,r){var e=r(0),o=r(18),i=e.WeakMap;t.exports="function"==typeof i&&/native code/.test(o.call(i))},function(t,n,r){var e=r(6),o=r(19),i=e("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,n,r){var e=r(3),o=r(38),i=r(13),u=r(10);t.exports=function(t,n){for(var r=o(n),c=u.f,a=i.f,f=0;f<r.length;f++){var s=r[f];e(t,s)||c(t,s,a(n,s))}}},function(t,n,r){var e=r(39),o=r(41),i=r(46),u=r(17);t.exports=e("Reflect","ownKeys")||function(t){var n=o.f(u(t)),r=i.f;return r?n.concat(r(t)):n}},function(t,n,r){var e=r(40),o=r(0),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?i(e[t])||i(o[t]):e[t]&&e[t][n]||o[t]&&o[t][n]}},function(t,n,r){t.exports=r(0)},function(t,n,r){var e=r(42),o=r(45).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return e(t,o)}},function(t,n,r){var e=r(3),o=r(8),i=r(43).indexOf,u=r(20);t.exports=function(t,n){var r,c=o(t),a=0,f=[];for(r in c)!e(u,r)&&e(c,r)&&f.push(r);for(;n.length>a;)e(c,r=n[a++])&&(~i(f,r)||f.push(r));return f}},function(t,n,r){var e=r(8),o=r(21),i=r(44),u=function(t){return function(n,r,u){var c,a=e(n),f=o(a.length),s=i(u,f);if(t&&r!=r){for(;f>s;)if((c=a[s++])!=c)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===r)return t||s||0;return!t&&-1}};t.exports={includes:u(!0),indexOf:u(!1)}},function(t,n,r){var e=r(22),o=Math.max,i=Math.min;t.exports=function(t,n){var r=e(t);return r<0?o(r+n,0):i(r,n)}},function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,r){var e=r(1),o=/#|\.prototype\./,i=function(t,n){var r=c[u(t)];return r==f||r!=a&&("function"==typeof n?e(n):!!n)},u=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=i.data={},a=i.NATIVE="N",f=i.POLYFILL="P";t.exports=i},function(t,n,r){var e=r(15);t.exports=function(t){return Object(e(t))}},function(t,n,r){"use strict";var e=r(9),o=r(10),i=r(7);t.exports=function(t,n,r){var u=e(n);u in t?o.f(t,u,i(0,r)):t[u]=r}},function(t,n,r){var e=r(2),o=r(23),i=r(12)("species");t.exports=function(t,n){var r;return o(t)&&("function"!=typeof(r=t.constructor)||r!==Array&&!o(r.prototype)?e(r)&&null===(r=r[i])&&(r=void 0):r=void 0),new(void 0===r?Array:r)(0===n?0:n)}},function(t,n,r){var e=r(1);t.exports=!!Object.getOwnPropertySymbols&&!e((function(){return!String(Symbol())}))},function(t,n,r){var e=r(1),o=r(12)("species");t.exports=function(t){return!e((function(){var n=[];return(n.constructor={})[o]=function(){return{foo:1}},1!==n[t](Boolean).foo}))}}]);
//# sourceMappingURL=plugin.chapters.js.map