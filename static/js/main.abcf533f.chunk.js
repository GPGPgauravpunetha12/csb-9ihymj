/*! For license information please see main.abcf533f.chunk.js.LICENSE.txt */
(this["webpackJsonpcovid-19-tracker"]=this["webpackJsonpcovid-19-tracker"]||[]).push([[0],{100:function(t,e,r){},101:function(t,e,r){},102:function(t,e,r){},203:function(t,e,r){},204:function(t,e,r){},207:function(t,e,r){"use strict";r.r(e);var n=r(0),o=r.n(n),a=r(10),i=r.n(a),c=(r(100),r(35)),u=r(16),s=(r(101),r(239)),l=r(240),f=r(241),h=r(233),p=r(237),d=r(88),v=r(238),m=(r(102),["title","cases","total","active","isRed"]);var y=function(t){var e=t.title,r=t.cases,n=t.total,a=t.active,i=t.isRed,c=Object(d.a)(t,m);return console.log(e,a),o.a.createElement(h.a,{onClick:c.onClick,className:"infoBox ".concat(a&&"infoBox--selected"," ").concat(i&&"infoBox--red")},o.a.createElement(p.a,null,o.a.createElement(v.a,{color:"textSecondary",gutterBottom:!0},e),o.a.createElement("h2",{className:"infoBox__cases ".concat(!i&&"infoBox__cases--green")},r),o.a.createElement(v.a,{className:"infoBox__total",color:"textSecondary"},n," Total")))},g=r(85),w=r(14),E=r.n(w);function b(){b=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(k){c=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof f?e:f,a=Object.create(o.prototype),i=new O(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return _()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=E(i,r);if(c){if(c===l)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=s(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===l)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,i),a}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(k){return{type:"throw",arg:k}}}t.wrap=u;var l={};function f(){}function h(){}function p(){}var d={};c(d,o,(function(){return this}));var v=Object.getPrototypeOf,m=v&&v(v(j([])));m&&m!==e&&r.call(m,o)&&(d=m);var y=p.prototype=f.prototype=Object.create(d);function g(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){var n;this._invoke=function(o,a){function i(){return new e((function(n,i){!function n(o,a,i,c){var u=s(t[o],t,a);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(f).then((function(t){l.value=t,i(l)}),(function(t){return n("throw",t,i,c)}))}c(u.arg)}(o,a,n,i)}))}return n=n?n.then(i,i):i()}}function E(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method))return l;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var n=s(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,l;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function j(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:_}}function _(){return{value:void 0,done:!0}}return h.prototype=p,c(y,"constructor",p),c(p,"constructor",h),h.displayName=c(p,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c(t,i,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},g(w.prototype),c(w.prototype,a,(function(){return this})),t.AsyncIterator=w,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new w(u(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},g(y),c(y,i,"Generator"),c(y,o,(function(){return this})),c(y,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=j,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,l):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:j(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),l}},t}var x={legend:{display:!1},elements:{point:{radius:0}},maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1,callbacks:{label:function(t,e){return E()(t.value).format("+0,0")}}},scales:{xAxes:[{type:"time",time:{format:"MM/DD/YY",tooltipFormat:"ll"}}],yAxes:[{gridLines:{display:!1},ticks:{callback:function(t,e,r){return E()(t).format("0a")}}}]}},L=function(t,e){var r,n=[];for(var o in t.cases){if(r){var a={x:o,y:t[e][o]-r};n.push(a)}r=t[e][o]}return n};var O=function(t){var e=t.casesType,r=Object(n.useState)({}),a=Object(u.a)(r,2),i=a[0],s=a[1];return Object(n.useEffect)((function(){(function(){var t=Object(c.a)(b().mark((function t(){return b().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120").then((function(t){return t.json()})).then((function(t){var r=L(t,e);s(r),console.log(r)}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e]),o.a.createElement("div",null,(null===i||void 0===i?void 0:i.length)>0&&o.a.createElement(g.Line,{data:{datasets:[{backgroundColor:"rgba(204, 16, 52, 0.5)",borderColor:"#CC1034",data:i}]},options:x}))};r(203);var j=function(t){var e=t.countries;return o.a.createElement("div",{className:"table"},e.map((function(t){return o.a.createElement("tr",null,o.a.createElement("td",null,t.country),o.a.createElement("td",null,o.a.createElement("strong",null,E()(t.cases).format("0,0"))))})))},_=r(87),k=r(242),N=r(243),S={cases:{hex:"#CC1034",rgb:"rgb(204, 16, 52)",half_op:"rgba(204, 16, 52, 0.5)",multiplier:800},recovered:{hex:"#7dd71d",rgb:"rgb(125, 215, 29)",half_op:"rgba(125, 215, 29, 0.5)",multiplier:1200},deaths:{hex:"#fb4443",rgb:"rgb(251, 68, 67)",half_op:"rgba(251, 68, 67, 0.5)",multiplier:2e3}},C=function(t){var e=Object(_.a)(t);return e.sort((function(t,e){return t.cases>e.cases?-1:1})),e},G=function(t){return t?"+".concat(E()(t).format("0.0a")):"+0"},T=r(244),I=r(245);r(204);var P=function(t){var e=t.countries,r=t.casesType,n=t.center,a=t.zoom;return o.a.createElement("div",{className:"map"},o.a.createElement(T.a,{center:n,zoom:a},o.a.createElement(I.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cases";return t.map((function(t){return o.a.createElement(k.a,{center:[t.countryInfo.lat,t.countryInfo.long],color:S[e].hex,fillColor:S[e].hex,fillOpacity:.4,radius:Math.sqrt(t[e])*S[e].multiplier},o.a.createElement(N.a,null,o.a.createElement("div",{className:"info-container"},o.a.createElement("div",{className:"info-flag",style:{backgroundImage:"url(".concat(t.countryInfo.flag,")")}}),o.a.createElement("div",{className:"info-name"},t.country),o.a.createElement("div",{className:"info-confirmed"},"Cases: ",E()(t.cases).format("0,0")),o.a.createElement("div",{className:"info-recovered"},"Recovered: ",E()(t.recovered).format("0,0")),o.a.createElement("div",{className:"info-deaths"},"Deaths: ",E()(t.deaths).format("0,0")))))}))}(e,r)))};r(205);function F(){F=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(_){c=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof f?e:f,a=Object.create(o.prototype),i=new L(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return j()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=E(i,r);if(c){if(c===l)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=s(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===l)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,i),a}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(_){return{type:"throw",arg:_}}}t.wrap=u;var l={};function f(){}function h(){}function p(){}var d={};c(d,o,(function(){return this}));var v=Object.getPrototypeOf,m=v&&v(v(O([])));m&&m!==e&&r.call(m,o)&&(d=m);var y=p.prototype=f.prototype=Object.create(d);function g(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){var n;this._invoke=function(o,a){function i(){return new e((function(n,i){!function n(o,a,i,c){var u=s(t[o],t,a);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(f).then((function(t){l.value=t,i(l)}),(function(t){return n("throw",t,i,c)}))}c(u.arg)}(o,a,n,i)}))}return n=n?n.then(i,i):i()}}function E(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method))return l;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var n=s(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,l;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function b(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(b,this),this.reset(!0)}function O(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:j}}function j(){return{value:void 0,done:!0}}return h.prototype=p,c(y,"constructor",p),c(p,"constructor",h),h.displayName=c(p,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c(t,i,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},g(w.prototype),c(w.prototype,a,(function(){return this})),t.AsyncIterator=w,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new w(u(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},g(y),c(y,i,"Generator"),c(y,o,(function(){return this})),c(y,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=O,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,l):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),x(r),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;x(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:O(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),l}},t}var B=function(){var t=Object(n.useState)("worldwide"),e=Object(u.a)(t,2),r=e[0],a=e[1],i=Object(n.useState)({}),d=Object(u.a)(i,2),v=d[0],m=d[1],g=Object(n.useState)([]),w=Object(u.a)(g,2),b=w[0],x=w[1],L=Object(n.useState)([]),_=Object(u.a)(L,2),k=_[0],N=_[1],S=Object(n.useState)([]),T=Object(u.a)(S,2),I=T[0],B=T[1],R=Object(n.useState)("cases"),A=Object(u.a)(R,2),D=A[0],Y=A[1],M=Object(n.useState)({lat:34.80746,lng:-40.4796}),z=Object(u.a)(M,2),W=z[0],J=z[1],q=Object(n.useState)(3),V=Object(u.a)(q,2),$=V[0],H=V[1];Object(n.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/all").then((function(t){return t.json()})).then((function(t){m(t)}))}),[]),Object(n.useEffect)((function(){(function(){var t=Object(c.a)(F().mark((function t(){return F().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:fetch("https://disease.sh/v3/covid-19/countries").then((function(t){return t.json()})).then((function(t){var e=t.map((function(t){return{name:t.country,value:t.countryInfo.iso2}})),r=C(t);x(e),N(t),B(r)}));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]),console.log(D);var K=function(){var t=Object(c.a)(F().mark((function t(e){var r,n;return F().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.target.value,n="worldwide"===r?"https://disease.sh/v3/covid-19/all":"https://disease.sh/v3/covid-19/countries/".concat(r),t.next=4,fetch(n).then((function(t){return t.json()})).then((function(t){a(r),m(t),J([t.countryInfo.lat,t.countryInfo.long]),H(4)}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return o.a.createElement("div",{className:"app"},o.a.createElement("div",{className:"app__left"},o.a.createElement("div",{className:"app__header"},o.a.createElement("h1",null,"COVID-19 Tracker"),o.a.createElement(s.a,{className:"app__dropdown"},o.a.createElement(l.a,{variant:"outlined",value:r,onChange:K},o.a.createElement(f.a,{value:"worldwide"},"Worldwide"),b.map((function(t){return o.a.createElement(f.a,{value:t.value},t.name)}))))),o.a.createElement("div",{className:"app__stats"},o.a.createElement(y,{onClick:function(t){return Y("cases")},title:"Coronavirus Cases",isRed:!0,active:"cases"===D,cases:G(v.todayCases),total:E()(v.cases).format("0.0a")}),o.a.createElement(y,{onClick:function(t){return Y("recovered")},title:"Recovered",active:"recovered"===D,cases:G(v.todayRecovered),total:E()(v.recovered).format("0.0a")}),o.a.createElement(y,{onClick:function(t){return Y("deaths")},title:"Deaths",isRed:!0,active:"deaths"===D,cases:G(v.todayDeaths),total:E()(v.deaths).format("0.0a")})),o.a.createElement(P,{countries:k,casesType:D,center:W,zoom:$})),o.a.createElement(h.a,{className:"app__right"},o.a.createElement(p.a,null,o.a.createElement("div",{className:"app__information"},o.a.createElement("h3",null,"Live Cases by Country"),o.a.createElement(j,{countries:I}),o.a.createElement("h3",null,"Worldwide new ",D),o.a.createElement(O,{casesType:D})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},95:function(t,e,r){t.exports=r(207)}},[[95,1,2]]]);
//# sourceMappingURL=main.abcf533f.chunk.js.map