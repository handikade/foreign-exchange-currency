(function(e){function n(n){for(var r,u,o=n[0],i=n[1],s=n[2],d=0,p=[];d<o.length;d++)u=o[d],Object.prototype.hasOwnProperty.call(c,u)&&c[u]&&p.push(c[u][0]),c[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);l&&l(n);while(p.length)p.shift()();return a.push.apply(a,s||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],r=!0,o=1;o<t.length;o++){var i=t[o];0!==c[i]&&(r=!1)}r&&(a.splice(n--,1),e=u(u.s=t[0]))}return e}var r={},c={app:0},a=[];function u(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.m=e,u.c=r,u.d=function(e,n,t){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)u.d(t,r,function(n){return e[n]}.bind(null,r));return t},u.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="/foreign-exchange-currency/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=n,o=o.slice();for(var s=0;s<o.length;s++)n(o[s]);var l=i;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"102e":function(e,n,t){},"1c07":function(e,n,t){"use strict";var r=t("c43e"),c=t.n(r);c.a},"1f8e":function(e,n,t){"use strict";var r=t("d481"),c=t.n(r);c.a},"2ec3":function(e,n,t){"use strict";var r=t("fa32"),c=t.n(r);c.a},3653:function(e,n,t){"use strict";var r=t("e9a8"),c=t.n(r);c.a},"56d7":function(e,n,t){"use strict";t.r(n);t("cadf"),t("551c"),t("f751"),t("097d");var r=t("2b0e"),c=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},a=[],u=t("2877"),o={},i=Object(u["a"])(o,c,a,!1,null,null,null),s=i.exports,l=t("8c4f"),d=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"home"},[t("app-header",[t("header-content",{attrs:{"currency-name":e.currencyDictionary[e.baseCurrencyCode].name}},[t("input-currency",{attrs:{value:e.baseCurrencyValue},on:{input:e.handleValueInput}})],1)],1),t("app-body",[t("currency-card-container",e._l(e.showedCurrencies,(function(n,r){return t("currency-card",{key:r,attrs:{"base-currency-code":e.baseCurrencyCode,"base-currency-value":e.baseCurrencyValue,"currency-code":n.currencyCode,"currency-name":n.currencyName,"currency-rate":n.currencyRate},on:{remove:e.remove}})})),1),e.isShowAddInput?e._e():t("button-add-currency",{on:{click:e.showAddInput}}),e.isShowAddInput?t("input-add-currency",{attrs:{options:e.currencyOptions},on:{submit:e.handleSubmit}}):e._e()],1)],1)},p=[],f=(t("ac6a"),t("8615"),t("7f7f"),function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"app-header"},[t("l-container",[e._t("default")],2)],1)}),y=[],h=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"layout-container"},[e._t("default")],2)},v=[],m={name:"LayoutContainer"},_=m,b=(t("1f8e"),Object(u["a"])(_,h,v,!1,null,"453084e4",null)),C=b.exports,g={name:"AppHeader",components:{LContainer:C}},w=g,S=(t("cd44"),Object(u["a"])(w,f,y,!1,null,"21c83180",null)),O=S.exports,I=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"header-content"},[t("div",{staticClass:"header-content__currency"},[e._v(e._s(e.currencyName))]),t("div",{staticClass:"header-content__input"},[e._t("default")],2)])},A=[],x={name:"HeaderContent",props:{currencyName:{type:String,default:""}}},j=x,k=(t("bc92"),Object(u["a"])(j,I,A,!1,null,"523b90be",null)),D=k.exports,R=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{class:e.styleClass},[t("div",{staticClass:"input-currency__currency"},[e._v("USD")]),t("div",{staticClass:"input-currency__divider"}),t("money",e._b({staticClass:"input-currency__input",attrs:{value:e.value},on:{blur:e.handleBlur,focus:e.handleFocus,input:e.handleInput}},"money",e.money,!1))],1)},$=[],N=(t("c5f6"),t("716b")),P={name:"InputCurrency",components:{Money:N["Money"]},props:{value:{type:Number,default:0}},data:function(){return{money:{decimal:".",thousands:",",prefix:"",suffix:"",precision:4,masked:!1},isFocus:!1}},computed:{styleClass:function(){return["input-currency",{"input-currency--is-focus":this.isFocus}]}},methods:{handleFocus:function(){console.log("isFocus"),this.isFocus=!0},handleBlur:function(){console.log("isBlur"),this.isFocus=!1},handleInput:function(e){this.$emit("input",e)}}},E=P,F=(t("9178"),Object(u["a"])(E,R,$,!1,null,"19176dd5",null)),B=F.exports,M=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"app-body"},[t("l-container",[e._t("default")],2)],1)},V=[],H={name:"AppBody",components:{LContainer:C}},L=H,U=(t("3653"),Object(u["a"])(L,M,V,!1,null,"4ca190b5",null)),G=U.exports,J=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("button",{staticClass:"button-add-currency",on:{click:e.handleClick}},[e._v("Add More Currencies")])},Y=[],T={name:"ButtonAddCurrency",methods:{handleClick:function(){this.$emit("click")}}},K=T,W=(t("2ec3"),Object(u["a"])(K,J,Y,!1,null,"4735427c",null)),q=W.exports,z=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"input-add-currency"},[t("select",{directives:[{name:"model",rawName:"v-model",value:e.currency,expression:"currency"}],staticClass:"input-add-currency__input",on:{change:function(n){var t=Array.prototype.filter.call(n.target.options,(function(e){return e.selected})).map((function(e){var n="_value"in e?e._value:e.value;return n}));e.currency=n.target.multiple?t:t[0]}}},[t("option",{attrs:{disabled:""},domProps:{value:null}},[e._v("Please select one...")]),e._l(e.options,(function(n){return t("option",{key:n.value,domProps:{value:n.value}},[e._v(e._s(n.label))])}))],2),t("button",{staticClass:"input-add-currency__button",on:{click:e.handleClick}},[e._v(e._s(e.buttonLabel))])])},Q=[],X={name:"InputAddCurrency",props:{options:{type:Array,default:function(){return[]}}},data:function(){return{currency:null}},computed:{buttonLabel:function(){return this.currency?"Submit":"Cancel"}},methods:{handleClick:function(){this.$emit("submit",this.currency)}}},Z=X,ee=(t("1c07"),Object(u["a"])(Z,z,Q,!1,null,"1c3658ec",null)),ne=ee.exports,te=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"currency-card-container"},[e._t("default")],2)},re=[],ce={name:"CurrencyCardContainer"},ae=ce,ue=(t("67d0"),Object(u["a"])(ae,te,re,!1,null,"c946d546",null)),oe=ue.exports,ie=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"currency-card"},[t("div",{staticClass:"currency-card__head"},[t("div",{staticClass:"currency-card__head__currency"},[e._v(e._s(e.currencyCode))]),t("div",{staticClass:"currency-card__head__value"},[e._v(e._s(e.value.toLocaleString()))])]),t("div",{staticClass:"currency-card__body"},[t("div",{staticClass:"currency-card__body__currency"},[t("div",{staticClass:"currency-card__body__currency__name"},[e._v(e._s(e.currencyName))]),t("div",{staticClass:"currency-card__body__currency__rate"},[e._v(e._s(e.currencyRateString))])]),t("div",{staticClass:"currency-card__body__button",on:{click:e.remove}},[t("img",{attrs:{src:e.trashIcon,alt:"Trash Icon"}})])])])},se=[],le={name:"CurrencyCard",props:{baseCurrencyCode:{type:String,default:""},baseCurrencyValue:{type:Number,default:0},currencyCode:{type:String,default:""},currencyName:{type:String,default:""},currencyRate:{type:Number,default:0}},data:function(){return{trashIcon:t("c637")}},computed:{value:function(){return this.currencyRate*this.baseCurrencyValue},currencyRateString:function(){return"1 ".concat(this.baseCurrencyCode," = ").concat(this.currencyCode," ").concat(this.currencyRate)}},methods:{remove:function(){this.$emit("remove",this.currencyCode)}}},de=le,pe=(t("8f1d"),Object(u["a"])(de,ie,se,!1,null,"353d12dc",null)),fe=pe.exports,ye=t("bc3a"),he=t.n(ye),ve="https://api.exchangeratesapi.io/",me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"USD";return he.a.get("".concat(ve,"latest"),{params:{base:e}})},_e={name:"home",components:{AppHeader:O,HeaderContent:D,InputCurrency:B,ButtonAddCurrency:q,InputAddCurrency:ne,AppBody:G,CurrencyCardContainer:oe,CurrencyCard:fe},data:function(){return{baseCurrencyCode:"USD",baseCurrencyValue:0,currencyDictionary:{USD:{code:"USD",name:"United States Dollar"},CAD:{code:"CAD",name:"Canadian Dollar"},IDR:{code:"IDR",name:"Indonesian Rupiah"},GBP:{code:"GBP",name:"Great Britain Pound"},CHF:{code:"CHF",name:"Confoederatio Helvetica Franc"},SGD:{code:"SGD",name:"Singapore Dollar"},INR:{code:"INR",name:"Indian Rupee"},MYR:{code:"MYR",name:"Malaysian Ringgit"},JPY:{code:"JPY",name:"Japanese Yen"},KRW:{code:"KRW",name:"Korean Won"}},showedCurrencies:[],rates:{},isShowAddInput:!1,currencyOptions:[]}},methods:{showAddInput:function(){this.isShowAddInput=!0},hideAddInput:function(){this.isShowAddInput=!1},handleSubmit:function(e){e&&this.showedCurrencies.push({currencyCode:this.currencyDictionary[e].code,currencyName:this.currencyDictionary[e].name,currencyRate:this.rates[e]}),this.hideAddInput()},handleValueInput:function(e){this.baseCurrencyValue=e},remove:function(e){console.log("remove",e),this.showedCurrencies=this.showedCurrencies.filter((function(n){return n.currencyCode!=e}))},generateCurrencyOptions:function(){var e=this,n=Object.values(this.currencyDictionary);n.forEach((function(n){n.code!=e.baseCurrencyCode&&e.currencyOptions.push({label:n.name,value:n.code})}))}},mounted:function(){var e=this;me(this.baseCurrencyCode).then((function(n){e.rates=n.data.rates})),this.generateCurrencyOptions()}},be=_e,Ce=Object(u["a"])(be,d,p,!1,null,null,null),ge=Ce.exports;r["a"].use(l["a"]);var we=new l["a"]({routes:[{path:"/",name:"home",component:ge}]}),Se=t("2f62");r["a"].use(Se["a"]);var Oe=new Se["a"].Store({state:{},mutations:{},actions:{}}),Ie=t("9483");Object(Ie["a"])("".concat("/foreign-exchange-currency/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),r["a"].config.productionTip=!1,new r["a"]({router:we,store:Oe,render:function(e){return e(s)}}).$mount("#app")},"67d0":function(e,n,t){"use strict";var r=t("102e"),c=t.n(r);c.a},"7b37":function(e,n,t){},"8f1d":function(e,n,t){"use strict";var r=t("c1fd"),c=t.n(r);c.a},9178:function(e,n,t){"use strict";var r=t("b084"),c=t.n(r);c.a},b084:function(e,n,t){},bc92:function(e,n,t){"use strict";var r=t("7b37"),c=t.n(r);c.a},c1fd:function(e,n,t){},c43e:function(e,n,t){},c637:function(e,n,t){e.exports=t.p+"img/trash.d5b711e9.svg"},cd44:function(e,n,t){"use strict";var r=t("de24"),c=t.n(r);c.a},d481:function(e,n,t){},de24:function(e,n,t){},e9a8:function(e,n,t){},fa32:function(e,n,t){}});
//# sourceMappingURL=app.f8ad7208.js.map