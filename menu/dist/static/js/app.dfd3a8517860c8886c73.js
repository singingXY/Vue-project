webpackJsonp([2],{Iuor:function(t,s){},KgXo:function(t,s,e){"use strict";var a={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"loading"},[s("div",{staticClass:"three-bounce"},[s("div",{staticClass:"one"}),this._v(" "),s("div",{staticClass:"two"}),this._v(" "),s("div",{staticClass:"three"})])])}]};var n=e("VU/8")({name:"Loading"},a,!1,function(t){e("zmp4")},"data-v-0cb9673c",null);s.a=n.exports},LMMi:function(t,s){},MvGc:function(t,s,e){"use strict";s.b=function(t){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new n.a(function(e,a){i.a.get(t,{params:s}).then(function(t){e(t.data)}).catch(function(t){a(t)})})};var a=e("//Fk"),n=e.n(a),o=e("mtWM"),i=e.n(o),r={api:" https://cnodejs.org/api/v1",ajaxGet:function(t,s){i.a.get(t,{params:s}).then(function(t){return console.log(t),t})}};i.a.interceptors.response.use(function(t){return t},function(t){return n.a.reject(t)}),s.a=r},NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("4bK6"),n=e.n(a),o=e("/ocq"),i=e("MvGc"),r={name:"index",components:{Loading:e("KgXo").a},data:function(){return{isLoading:!0,list:[],types:[],tab:"",page:1}},mounted:function(){this.page=parseInt(this.$route.query.page)||1,this.tab=this.$route.query.tab,this.getData(),this.types=[{text:"全部",value:""},{text:"精华",value:"good"},{text:"分享",value:"share"},{text:"招聘",value:"job"},{text:"问答",value:"ask"}]},methods:{getData:function(){var t=this;this.isLoading=!0,this.$fetch(i.a.api+"/topics",{page:this.page,tab:this.tab}).then(function(s){console.log(s),t.isLoading=!1,s.success&&(t.list=s.data)})},prev:function(){this.page--;var t={page:this.page};this.tab&&(t.tab=this.tab),this.$router.push({path:"list",query:t})},next:function(){this.page++;var t={page:this.page};this.tab&&(t.tab=this.tab),this.$router.push({path:"list",query:t})},onTabSelect:function(t){this.tab=t,this.page=1;var s={page:this.page};this.tab&&(s.tab=this.tab),this.$router.push({path:"list",query:s})}},watch:{$route:function(){this.page=this.$route.query.page||1,this.tab=this.$route.query.tab,this.getData()}},filters:{getType:function(t){var s=t;switch(t){case"job":s="招聘";break;case"good":s="精华";break;case"share":s="分享";break;case"ask":s="问答";break;default:s="全部"}return s}}},c={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"main"},[e("div",{staticClass:"list-type"},[e("ul",t._l(t.types,function(s){return e("li",{key:s.value,class:{active:t.tab===s.value},on:{click:function(e){return t.onTabSelect(s.value)}}},[t._v(t._s(s.text))])}),0)]),t._v(" "),e("transition",{attrs:{name:"fade"}},[t.isLoading?e("loading"):t._e()],1),t._v(" "),e("ul",{staticClass:"list"},t._l(t.list,function(s){return e("li",{key:s.id},[e("img",{staticClass:"avatar",attrs:{src:s.author.avatar_url,alt:s.author.loginname}}),t._v(" "),e("p",[s.tab?e("span",{staticClass:"type",class:{typegood:s.good}},[t._v(t._s(t._f("getType")(s.tab)))]):t._e(),t._v(" "),s.top?e("span",{staticClass:"type typetop"},[t._v("置顶")]):t._e()]),t._v(" "),e("p",{staticClass:"title"},[e("router-link",{attrs:{to:{name:"article",params:{id:s.id}}}},[t._v(t._s(s.title))])],1),t._v(" "),e("p",{staticClass:"count"},[e("span",[t._v(t._s(s.reply_count))]),t._v("/"+t._s(s.visit_count))]),t._v(" "),e("p",{staticClass:"date"},[t._v(" "+t._s(t.changeTime(s.last_reply_at)))])])}),0),t._v(" "),0==t.isLoading?e("div",{staticClass:"load-more"},[e("span",{directives:[{name:"show",rawName:"v-show",value:1!=t.page,expression:"page != 1"}],staticClass:"prev",on:{click:t.prev}},[t._v("上一页")]),t._v(" "),e("span",{staticClass:"next",on:{click:t.next}},[t._v("下一页")])]):t._e()],1)},staticRenderFns:[]};var l=e("VU/8")(r,c,!1,function(t){e("LMMi")},null,null).exports;n.a.use(o.a);var u=[{path:"/",name:"index",component:l},{path:"/topic/:id",name:"article",component:function(){return e.e(0).then(e.bind(null,"AtFq"))}},{path:"*",component:l}],p=new o.a({mode:"history",routes:u}),h=e("PJh5"),d=e.n(h),j={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"head"},[s("div",{staticClass:"logo"},[s("img",{attrs:{src:"//static2.cnodejs.org/public/images/cnodejs_light.svg"}})])])}]};var v={name:"app",components:{VHeader:e("VU/8")({},j,!1,function(t){e("zS8k")},null,null).exports},data:function(){return{scrollTop:null,isScrollTop:!1}},props:{el:String},mounted:function(){var t=this;window.addEventListener("scroll",function(){t.scrollTop=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop||document.querySelector(t.el).scrollTop,t.scrollTop>150?t.isScrollTop=!0:t.isScrollTop=!1},!0);try{document.body.removeChild(document.getElementById("Loading")),setTimeout(function(){document.getElementById("app").style.display="block"},500)}catch(t){}},methods:{scrollToTop:function(){var t=this;setTimeout(function s(){t.scrollTop>0&&setTimeout(function(){t.scrollTop=t.scrollTop-30,document.documentElement.scrollTop>0?document.documentElement.scrollTop=t.scrollTop-30:window.pageYOffset>0?window.pageYOffset=t.scrollTop-30:document.body.scrollTop>0?document.body.scrollTop=t.scrollTop-30:document.querySelector(t.el).scrollTop&&(document.querySelector(t.el).scrollTop=t.scrollTop-30),s()},1)},1)}}},m={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("VHeader"),this._v(" "),s("router-view"),this._v(" "),s("transition",{attrs:{name:"slide-fade"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:this.isScrollTop,expression:"isScrollTop"}],staticClass:"backtotop"},[s("i",{on:{click:this.scrollToTop}},[s("svg",{staticClass:"icon",attrs:{t:"1564122083435",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"13586",width:"500",height:"500"}},[s("path",{attrs:{d:"M415.402667 621.141333c-13.226667 0-23.978667-10.752-23.978667-23.978666V443.733333c0-127.914667 57.856-181.674667 120.576-226.730666C581.632 266.154667 632.576 315.904 632.576 443.733333v153.429334c0 13.226667-10.752 23.978667-23.978667 23.978666H415.402667z",fill:"#b9f4b6","p-id":"13587","data-spm-anchor-id":"a313x.7781069.0.i2"}}),s("path",{staticClass:"selected",attrs:{d:"M856.661333 541.269333l-118.101333-78.165333V443.733333c0-157.952-128.597333-284.16-183.893333-331.093333a65.6896 65.6896 0 0 0-85.333334 0C414.037333 159.658667 285.44 285.781333 285.44 443.733333v19.285334l-118.101333 78.250666a65.9456 65.9456 0 0 0-29.610667 55.04v64.768c0 36.437333 29.610667 66.048 66.048 66.048H819.968c36.437333 0 66.048-29.610667 66.048-66.048v-64.768c0.170667-22.186667-10.837333-42.752-29.354667-55.04zM285.44 658.858667h-79.445333v-61.354667l79.445333-52.565333v113.92z m68.266667 0V443.733333c0-128.085333 109.482667-236.032 158.293333-277.76 48.810667 41.728 157.952 149.418667 158.293333 277.248V658.773333l-316.586666 0.085334z m464.213333 0h-79.36V544.938667l79.36 52.565333v61.354667z",fill:"#333C4F","p-id":"13588","data-spm-anchor-id":"a313x.7781069.0.i9"}}),s("path",{staticClass:"selected",attrs:{d:"M513.194667 505.6c-54.016 0-97.962667-43.946667-97.962667-97.962667s43.946667-97.962667 97.962667-97.962666 97.962667 43.946667 97.962666 97.962666-43.946667 97.962667-97.962666 97.962667z m0-127.744c-16.384 0-29.696 13.312-29.696 29.696s13.312 29.696 29.696 29.696 29.696-13.312 29.696-29.696-13.312-29.696-29.696-29.696zM512 927.061333c-17.578667 0-31.914667-14.336-31.914667-31.914666V767.402667c0-17.578667 14.336-31.914667 31.914667-31.914667 17.578667 0 31.914667 14.336 31.914667 31.914667v127.744c0 17.493333-14.336 31.914667-31.914667 31.914666zM386.304 876.458667c-17.578667 0-31.914667-14.336-31.914667-31.914667v-52.224c0-17.578667 14.336-31.914667 31.914667-31.914667 17.578667 0 31.914667 14.336 31.914667 31.914667v52.224c0 17.493333-14.336 31.914667-31.914667 31.914667zM637.696 876.458667c-17.578667 0-31.914667-14.336-31.914667-31.914667v-52.224c0-17.578667 14.336-31.914667 31.914667-31.914667 17.578667 0 31.914667 14.336 31.914667 31.914667v52.224c0.085333 17.493333-14.336 31.914667-31.914667 31.914667z",fill:"#333C4F","p-id":"13589","data-spm-anchor-id":"a313x.7781069.0.i10"}})])])])])],1)},staticRenderFns:[]};var f=e("VU/8")(v,m,!1,function(t){e("Iuor")},null,null).exports;n.a.prototype.$fetch=i.b,n.a.prototype.changeTime=function(t){return d()(t).startOf("minute").fromNow().replace(/hours?/,"小时").replace("ago","前").replace(/days?/,"天").replace(/minutes?/,"分钟").replace(/\ban?/,"1").replace(/months?/,"个月").replace(/\byears?/,"年").replace(/\s/g,"").replace("fewseconds","分钟")},new n.a({el:"#app",router:p,components:{App:f},template:"<App/>"})},uslO:function(t,s,e){var a={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-SG":"oYA3","./en-SG.js":"oYA3","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-il":"QZk1","./en-il.js":"QZk1","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./ga":"U5Iz","./ga.js":"U5Iz","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it-ch":"/E8D","./it-ch.js":"/E8D","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ku":"kI9l","./ku.js":"kI9l","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mn":"CqHt","./mn.js":"CqHt","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./tg":"5SNd","./tg.js":"5SNd","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./ug-cn":"To0v","./ug-cn.js":"To0v","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function n(t){return e(o(t))}function o(t){var s=a[t];if(!(s+1))throw new Error("Cannot find module '"+t+"'.");return s}n.keys=function(){return Object.keys(a)},n.resolve=o,t.exports=n,n.id="uslO"},zS8k:function(t,s){},zmp4:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.dfd3a8517860c8886c73.js.map