webpackJsonp([0],{AtFq:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=i("MvGc"),e={name:"articleDetail",components:{Loading:i("KgXo").a},data:function(){return{isLoading:!0,id:this.$route.params.id,types:{share:"分享",ask:"问答",job:"招聘"},infos:[],replies:[]}},mounted:function(){this.getData()},methods:{getData:function(){var t=this;this.$fetch(a.a.api+"/topic/"+this.id).then(function(s){t.isLoading=!1,s.success&&(t.infos=s.data,t.replies=t.infos.replies,console.log(t.replies))})}}},n={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"main article"},[i("transition",{attrs:{name:"fade"}},[t.isLoading?i("loading"):t._e()],1),t._v(" "),i("div",{staticClass:"article-title"},[i("h1",[t._v(t._s(t.infos.title))]),t._v(" "),i("p",[i("span",[t._v("发布于 "+t._s(t.changeTime(t.infos.create_at)))]),t._v(" "),t.infos.author?i("span",[t._v("作者 "+t._s(t.infos.author.loginname))]):t._e(),t._v(" "),i("span",[t._v(t._s(t.infos.visit_count)+"次浏览")]),t._v(" "),i("span",[t._v("来自 "+t._s(t.types[t.infos.tab]))])])]),t._v(" "),i("div",{staticClass:"article-content",domProps:{innerHTML:t._s(t.infos.content)}}),t._v(" "),i("div",{staticClass:"replies"},[i("div",{staticClass:"replies-title"},[t._v("\n            回复 ["+t._s(t.infos.reply_count)+"]\n        ")]),t._v(" "),t._l(t.replies,function(s,a){return i("div",{key:s.id,staticClass:"reply"},[i("div",{staticClass:"reply-item"},[i("img",{staticClass:"reply-avatar",attrs:{src:s.author.avatar_url,alt:s.author.loginname}}),t._v(" "),i("div",{staticClass:"reply-conten"},[i("p",{staticClass:"reply-author"},[t._v(t._s(s.author.loginname)+" "+t._s(t.changeTime(s.create_at)))]),t._v(" "),i("div",{domProps:{innerHTML:t._s(s.content)}}),t._v(" "),s.ups.length>0?i("div",{staticClass:"ups"},[i("svg",{staticClass:"icon",attrs:{t:"1564368114755",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2669",width:"14",height:"14"}},[i("path",{attrs:{d:"M1000.59 407.182c-26.679-43.859-67.358-67.449-120.938-70.119-3.23-0.38-6.32-0.57-9.32-0.57l-172.356-0.59c7.819-34.839 11.979-70.079 11.979-102.798 0-33.489-3.66-67.259-10.89-100.388a41.025 41.025 0 0 0-2.36-7.35c-18.68-68.139-79.099-115.118-149.337-115.118-83.269 0-146.058 68.279-146.058 158.817l-0.061 2.28c-0.08 2.39-0.17 5.46 0.01 9.02-3.569 94.348-81.148 176.707-177.807 188.767l-136.178 2.19c-2.24-0.2-4.48-0.3-6.72-0.3-44.209 0-80.178 36.369-80.178 81.039l-0.37 481.182c0 44.369 35.989 80.479 80.229 80.479l149.368 0.03h0.08l567.93-0.98h0.011c31.429 0 51.139-8.8 74.589-24.02a158.319 158.319 0 0 0 54.589-60.578c4.33-6.98 7.55-14.44 9.59-22.22 0.13-0.511 0.26-1.021 0.37-1.521l84.648-381.714a81.977 81.977 0 0 0 2.33-22.699c1.82-32.89-6.16-64.939-23.15-92.839zM82.305 453.161c1.24 0.1 2.49 0.14 3.73 0.12l98.918-1.6v480.142l-103.028-0.02 0.38-478.642z m859.257 51.259l-84.419 380.673h-0.02a39.79 39.79 0 0 0-2.71 4.7c-6.15 12.5-15.2 22.699-26.84 30.27-14.989 9.729-19.319 10.79-30.369 10.79h-0.011l-530.321 0.915V444.231c122.238-30.1 212.877-137.708 216.337-263.466 0.05-1.68 0.03-2.8-0.13-4.48-0.021-0.78 0.02-1.56 0.05-2.35 0.05-1.61 0.09-3.23 0.09-4.87 0-38.22 22.04-76.899 64.149-76.899 34.129 0 63.408 24.02 71.208 58.399 0.44 1.92 1.011 3.78 1.7 5.57 5.15 25.48 7.76 51.339 7.76 76.969 0 40.479-8.31 87.989-22.789 130.318a40.914 40.914 0 0 0 5.39 37.02 40.906 40.906 0 0 0 33.22 17.2l226.506 0.81c1.36 0.19 2.72 0.31 4.09 0.37 26.83 1.1 43.63 10.34 56.159 30.949 8.561 14.06 12.45 30.35 11.25 47.109-0.15 2.02-0.12 4.12 0.04 6.14-0.121 0.47-0.241 0.93-0.34 1.4z",fill:"#ff3838","p-id":"2670"}})]),t._v(" \n                        "+t._s(s.ups.length)+"\n                    ")]):t._e(),t._v(" "),i("div",{staticClass:"floor"},[t._v(t._s(a+1)+"楼")])])])])})],2),t._v(" "),i("div",{staticClass:"back",on:{click:function(s){return s.stopPropagation(),s.preventDefault(),t.$router.go(-1)}}},[i("svg",{staticClass:"icon",attrs:{t:"1564367329808",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"6281",width:"20",height:"23"}},[i("path",{attrs:{d:"M769.405 977.483c-27.074 27.568-71.045 27.568-98.121 0l-416.591-423.804c-27.173-27.568-27.173-72.231 0-99.899l416.492-423.804c13.537-13.734 31.324-20.652 49.109-20.652s35.572 6.917 49.109 20.652c27.173 27.568 27.173 72.331 0 99.899l-367.482 373.806 367.482 373.904c27.074 27.568 27.074 72.231 0 99.899z","p-id":"6282",fill:"#ffffff"}})])])],1)},staticRenderFns:[]};var l=i("VU/8")(e,n,!1,function(t){i("KFUf")},null,null);s.default=l.exports},KFUf:function(t,s){}});
//# sourceMappingURL=0.93c34c9e086ecba4fc6e.js.map