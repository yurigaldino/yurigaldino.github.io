(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about","chunk-e11621ce"],{"057f":function(t,e,r){var n=r("fc6a"),i=r("241c").f,o={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return i(t)}catch(e){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==o.call(t)?c(t):i(n(t))}},"0c14":function(t,e,r){"use strict";r("9336")},"0e2f":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"listadeusuarios"},[r("b-row",{staticClass:"list"},[r("h1",[t._v("List of countries that speaks portuguese 🗣")]),r("b-col",[t.getCountries.length>5?r("b-badge",{attrs:{href:"#",variant:"success"}},[t._v("This list has "),r("strong",[t._v(t._s(t.getCountries.length))]),t._v(" country(ies) that speak(s) portuguese")]):t._e(),t.getCountries.length>3&&t.getCountries.length<=5?r("b-badge",{attrs:{href:"#",variant:"warning"}},[t._v("This list has "),r("strong",[t._v(t._s(t.getCountries.length))]),t._v(" country(ies) that speak(s) portuguese")]):t._e(),t.getCountries.length>0&&t.getCountries.length<=3?r("b-badge",{attrs:{href:"#",variant:"danger"}},[t._v("This list has "),r("strong",[t._v(t._s(t.getCountries.length))]),t._v(" country(ies) that speak(s) portuguese")]):t._e(),0==t.getCountries.length?r("b-badge",{attrs:{href:"#",variant:"dark"}},[t._v("This list is "),r("strong",[t._v("empty")])]):t._e()],1),r("br"),r("b-row",[r("b-card-group",{attrs:{deck:""}},t._l(t.getCountries,(function(e){return r("b-card",{key:e.alpha2Code,staticStyle:{"min-width":"16rem","max-width":"16rem"},attrs:{"border-variant":"secondary",header:e.name.toUpperCase(),"header-bg-variant":"secondary","header-text-variant":"white",align:"center"}},[r("b-card-text",[r("img",{staticClass:"img-radius",attrs:{src:"https://www.countryflags.io/"+e.altSpellings[0].toLowerCase()+"/flat/64.png",alt:"Country-Profile-Image"}})]),r("router-link",{attrs:{to:{name:"DetailCountry",params:{id:e.alpha2Code,ptcountry:e}}}},[r("b-card-text",[t._v("More details")]),r("br")],1),r("b-card-text",[r("b-button-group",[r("b-button",{staticStyle:{opacity:"0.8"},attrs:{variant:"danger"},on:{click:function(r){return t.deleteCountry(e.alpha2Code)}}},[r("b-icon",{attrs:{icon:"trash-fill"}})],1),r("router-link",{attrs:{to:{name:"EditCountry",params:{id:e.alpha2Code,ptcountry:e}}}},[r("b-button",{attrs:{variant:"outline-primary"}},[r("b-icon",{attrs:{icon:"pencil-fill"}}),t._v(" Edit ")],1),r("br")],1)],1)],1)],1)})),1)],1)],1),r("br")],1)},i=[],o=r("5530"),a=r("2f62"),c={name:"Country",computed:Object(a["c"])(["getCountries"]),methods:Object(o["a"])({},Object(a["b"])(["getPortugueseCountries","deleteCountry"])),created:function(){this.getPortugueseCountries()}},s=c,u=(r("0c14"),r("2877")),l=Object(u["a"])(s,n,i,!1,null,null,null);e["default"]=l.exports},"159b":function(t,e,r){var n=r("da84"),i=r("fdbc"),o=r("17c2"),a=r("9112");for(var c in i){var s=n[c],u=s&&s.prototype;if(u&&u.forEach!==o)try{a(u,"forEach",o)}catch(l){u.forEach=o}}},"17c2":function(t,e,r){"use strict";var n=r("b727").forEach,i=r("a640"),o=r("ae40"),a=i("forEach"),c=o("forEach");t.exports=a&&c?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"356d":function(t,e,r){"use strict";r("4e42")},4160:function(t,e,r){"use strict";var n=r("23e7"),i=r("17c2");n({target:"Array",proto:!0,forced:[].forEach!=i},{forEach:i})},"4e42":function(t,e,r){},5530:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r("a4d3"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("159b");function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}},"746f":function(t,e,r){var n=r("428f"),i=r("5135"),o=r("e538"),a=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});i(e,t)||a(e,t,{value:o.f(t)})}},8418:function(t,e,r){"use strict";var n=r("c04e"),i=r("9bf2"),o=r("5c6c");t.exports=function(t,e,r){var a=n(e);a in t?i.f(t,a,o(0,r)):t[a]=r}},9327:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"lista"},[r("PortugueseCountries"),r("AddCountry")],1)},i=[],o=r("0e2f"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-form",[r("h2",[t._v("Add new country 🏳️")]),r("b-form-group",{attrs:{id:"input-group-1",label:"Name of the country:","label-for":"input-1"}},[r("b-form-input",{attrs:{id:"input-1",type:"text",required:"",placeholder:"Insert country name"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),r("b-form-group",{attrs:{id:"input-group-2",label:"Capital:","label-for":"input-2"}},[r("b-form-input",{attrs:{id:"input-2",required:"",placeholder:"Insert capital"},model:{value:t.capital,callback:function(e){t.capital=e},expression:"capital"}})],1),r("b-form-group",{attrs:{id:"input-group-3",label:"Region:","label-for":"input-3"}},[r("b-form-select",{attrs:{id:"input-3",options:t.subregions,required:""},model:{value:t.subregion,callback:function(e){t.subregion=e},expression:"subregion"}})],1),r("b-form-group",{attrs:{id:"input-group-4",label:"Currency:","label-for":"input-2"}},[r("b-form-input",{attrs:{id:"input-4",required:"",placeholder:"Example: BRL (Brazilian Real), USD (United States Dolar)"},model:{value:t.currency,callback:function(e){t.currency=e},expression:"currency"}})],1),r("b-form-group",{attrs:{id:"input-group-5",label:"ISO 3166 Country Code:","label-for":"input-1",description:"💡 The ISO 3166 Country Code is the standard code for the representation of names of countries and their subdivisions. We use this information to know which flag to use in the country card."}},[r("b-form-input",{attrs:{id:"input-5",type:"text",required:"",placeholder:"Example: BR (Brazil), US (United States)"},model:{value:t.iso,callback:function(e){t.iso=e},expression:"iso"}})],1),r("b-button",{attrs:{variant:"success"},on:{click:function(e){return t.AddNewCountry()}}},[t._v("Add ✔️")])],1)},c=[],s=(r("99af"),r("b0c0"),r("5530")),u=r("2f62"),l={name:"AddCountry",data:function(){return{name:"",capital:"",iso:"",subregion:"",population:"",area:"",currency:"",subregions:[{text:"Select One",value:null},"South America","North America","Oceania","Europe","Asia","Africa"]}},methods:Object(s["a"])(Object(s["a"])({},Object(u["b"])(["addCountry"])),{},{AddNewCountry:function(){console.log("".concat(this.name," e ").concat(this.capital," rolando"));var t={name:this.name,topLevelDomain:[".br"],alpha2Code:this.subregion,alpha3Code:"C"+this.iso,callingCodes:["55"],capital:this.capital,altSpellings:[this.iso,"Brasil",this.name,"República Federativa do Brasil"],region:"Americas",subregion:this.subregion,population:Math.floor(1e7*Math.random())+1e5,latlng:[-65],demonym:"Brazilian",area:Math.floor(1e6*Math.random())+1e4,gini:54.7,timezones:["UTC-05:00","UTC-04:00","UTC-03:00","UTC-02:00"],borders:["ARG","BOL","COL","GUF","GUY","PRY","PER","SUR","URY","VEN"],nativeName:"Brasil",numericCode:"076",currencies:[this.currency],languages:["pt"],translations:{de:"Brasilien",es:"Brasil",fr:"Brésil",ja:"ブラジル",it:"Brasile"},relevance:"2"};this.addCountry(t),alert("País adicionado com sucesso!")}})},f=l,d=(r("356d"),r("2877")),b=Object(d["a"])(f,a,c,!1,null,null,null),p=b.exports,h={name:"Lista",components:{AddCountry:p,PortugueseCountries:o["default"]}},g=h,m=Object(d["a"])(g,n,i,!1,null,null,null);e["default"]=m.exports},9336:function(t,e,r){},"99af":function(t,e,r){"use strict";var n=r("23e7"),i=r("d039"),o=r("e8b5"),a=r("861d"),c=r("7b0b"),s=r("50c4"),u=r("8418"),l=r("65f0"),f=r("1dde"),d=r("b622"),b=r("2d00"),p=d("isConcatSpreadable"),h=9007199254740991,g="Maximum allowed index exceeded",m=b>=51||!i((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),y=f("concat"),v=function(t){if(!a(t))return!1;var e=t[p];return void 0!==e?!!e:o(t)},C=!m||!y;n({target:"Array",proto:!0,forced:C},{concat:function(t){var e,r,n,i,o,a=c(this),f=l(a,0),d=0;for(e=-1,n=arguments.length;e<n;e++)if(o=-1===e?a:arguments[e],v(o)){if(i=s(o.length),d+i>h)throw TypeError(g);for(r=0;r<i;r++,d++)r in o&&u(f,d,o[r])}else{if(d>=h)throw TypeError(g);u(f,d++,o)}return f.length=d,f}})},a4d3:function(t,e,r){"use strict";var n=r("23e7"),i=r("da84"),o=r("d066"),a=r("c430"),c=r("83ab"),s=r("4930"),u=r("fdbf"),l=r("d039"),f=r("5135"),d=r("e8b5"),b=r("861d"),p=r("825a"),h=r("7b0b"),g=r("fc6a"),m=r("c04e"),y=r("5c6c"),v=r("7c73"),C=r("df75"),O=r("241c"),w=r("057f"),S=r("7418"),j=r("06cf"),L=r("9bf2"),P=r("d1e7"),_=r("9112"),x=r("6eeb"),E=r("5692"),k=r("f772"),T=r("d012"),A=r("90e3"),D=r("b622"),M=r("e538"),N=r("746f"),B=r("d44e"),R=r("69f3"),U=r("b727").forEach,G=k("hidden"),V="Symbol",F="prototype",I=D("toPrimitive"),q=R.set,z=R.getterFor(V),H=Object[F],J=i.Symbol,Y=o("JSON","stringify"),$=j.f,W=L.f,Q=w.f,K=P.f,X=E("symbols"),Z=E("op-symbols"),tt=E("string-to-symbol-registry"),et=E("symbol-to-string-registry"),rt=E("wks"),nt=i.QObject,it=!nt||!nt[F]||!nt[F].findChild,ot=c&&l((function(){return 7!=v(W({},"a",{get:function(){return W(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=$(H,e);n&&delete H[e],W(t,e,r),n&&t!==H&&W(H,e,n)}:W,at=function(t,e){var r=X[t]=v(J[F]);return q(r,{type:V,tag:t,description:e}),c||(r.description=e),r},ct=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof J},st=function(t,e,r){t===H&&st(Z,e,r),p(t);var n=m(e,!0);return p(r),f(X,n)?(r.enumerable?(f(t,G)&&t[G][n]&&(t[G][n]=!1),r=v(r,{enumerable:y(0,!1)})):(f(t,G)||W(t,G,y(1,{})),t[G][n]=!0),ot(t,n,r)):W(t,n,r)},ut=function(t,e){p(t);var r=g(e),n=C(r).concat(pt(r));return U(n,(function(e){c&&!ft.call(r,e)||st(t,e,r[e])})),t},lt=function(t,e){return void 0===e?v(t):ut(v(t),e)},ft=function(t){var e=m(t,!0),r=K.call(this,e);return!(this===H&&f(X,e)&&!f(Z,e))&&(!(r||!f(this,e)||!f(X,e)||f(this,G)&&this[G][e])||r)},dt=function(t,e){var r=g(t),n=m(e,!0);if(r!==H||!f(X,n)||f(Z,n)){var i=$(r,n);return!i||!f(X,n)||f(r,G)&&r[G][n]||(i.enumerable=!0),i}},bt=function(t){var e=Q(g(t)),r=[];return U(e,(function(t){f(X,t)||f(T,t)||r.push(t)})),r},pt=function(t){var e=t===H,r=Q(e?Z:g(t)),n=[];return U(r,(function(t){!f(X,t)||e&&!f(H,t)||n.push(X[t])})),n};if(s||(J=function(){if(this instanceof J)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=A(t),r=function(t){this===H&&r.call(Z,t),f(this,G)&&f(this[G],e)&&(this[G][e]=!1),ot(this,e,y(1,t))};return c&&it&&ot(H,e,{configurable:!0,set:r}),at(e,t)},x(J[F],"toString",(function(){return z(this).tag})),x(J,"withoutSetter",(function(t){return at(A(t),t)})),P.f=ft,L.f=st,j.f=dt,O.f=w.f=bt,S.f=pt,M.f=function(t){return at(D(t),t)},c&&(W(J[F],"description",{configurable:!0,get:function(){return z(this).description}}),a||x(H,"propertyIsEnumerable",ft,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!s,sham:!s},{Symbol:J}),U(C(rt),(function(t){N(t)})),n({target:V,stat:!0,forced:!s},{for:function(t){var e=String(t);if(f(tt,e))return tt[e];var r=J(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!ct(t))throw TypeError(t+" is not a symbol");if(f(et,t))return et[t]},useSetter:function(){it=!0},useSimple:function(){it=!1}}),n({target:"Object",stat:!0,forced:!s,sham:!c},{create:lt,defineProperty:st,defineProperties:ut,getOwnPropertyDescriptor:dt}),n({target:"Object",stat:!0,forced:!s},{getOwnPropertyNames:bt,getOwnPropertySymbols:pt}),n({target:"Object",stat:!0,forced:l((function(){S.f(1)}))},{getOwnPropertySymbols:function(t){return S.f(h(t))}}),Y){var ht=!s||l((function(){var t=J();return"[null]"!=Y([t])||"{}"!=Y({a:t})||"{}"!=Y(Object(t))}));n({target:"JSON",stat:!0,forced:ht},{stringify:function(t,e,r){var n,i=[t],o=1;while(arguments.length>o)i.push(arguments[o++]);if(n=e,(b(e)||void 0!==t)&&!ct(t))return d(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!ct(e))return e}),i[1]=e,Y.apply(null,i)}})}J[F][I]||_(J[F],I,J[F].valueOf),B(J,V),T[G]=!0},a640:function(t,e,r){"use strict";var n=r("d039");t.exports=function(t,e){var r=[][t];return!!r&&n((function(){r.call(null,e||function(){throw 1},1)}))}},b0c0:function(t,e,r){var n=r("83ab"),i=r("9bf2").f,o=Function.prototype,a=o.toString,c=/^\s*function ([^ (]*)/,s="name";n&&!(s in o)&&i(o,s,{configurable:!0,get:function(){try{return a.call(this).match(c)[1]}catch(t){return""}}})},b64b:function(t,e,r){var n=r("23e7"),i=r("7b0b"),o=r("df75"),a=r("d039"),c=a((function(){o(1)}));n({target:"Object",stat:!0,forced:c},{keys:function(t){return o(i(t))}})},dbb4:function(t,e,r){var n=r("23e7"),i=r("83ab"),o=r("56ef"),a=r("fc6a"),c=r("06cf"),s=r("8418");n({target:"Object",stat:!0,sham:!i},{getOwnPropertyDescriptors:function(t){var e,r,n=a(t),i=c.f,u=o(n),l={},f=0;while(u.length>f)r=i(n,e=u[f++]),void 0!==r&&s(l,e,r);return l}})},e439:function(t,e,r){var n=r("23e7"),i=r("d039"),o=r("fc6a"),a=r("06cf").f,c=r("83ab"),s=i((function(){a(1)})),u=!c||s;n({target:"Object",stat:!0,forced:u,sham:!c},{getOwnPropertyDescriptor:function(t,e){return a(o(t),e)}})},e538:function(t,e,r){var n=r("b622");e.f=n},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=about.9186fb4a.js.map