(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-yonghu-detail"],{3388:function(t,e,i){"use strict";var n={"mescroll-uni":i("f05e").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("mescroll-uni",{attrs:{up:t.upOption,down:t.downOption},on:{init:function(e){arguments[0]=e=t.$handleEvent(e),t.mescrollInit.apply(void 0,arguments)},down:function(e){arguments[0]=e=t.$handleEvent(e),t.downCallback.apply(void 0,arguments)},up:function(e){arguments[0]=e=t.$handleEvent(e),t.upCallback.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"container",style:{minHeight:"100vh",width:"100%",padding:"0",position:"relative",background:"#f2f2f2",height:"auto"}},[i("v-uni-swiper",{staticClass:"swiper",style:{width:"100%",background:"none",height:"480rpx"},attrs:{"indicator-dots":!0,autoplay:!0,circular:!0,"indicator-active-color":"#ff9400","indicator-color":"rgba(0, 0, 0, .3)",duration:600,interval:9e3,vertical:!1}},t._l(t.swiperList,(function(e,n){return i("v-uni-swiper-item",{key:n,style:{width:"100%",background:"none",height:"100%"}},["http"==e.substring(0,4)?i("v-uni-image",{style:{width:"100%",objectFit:"contain",background:"none",display:"block",height:"100%"},attrs:{mode:"aspectFill",src:e}}):i("v-uni-image",{style:{width:"100%",objectFit:"contain",background:"none",display:"block",height:"100%"},attrs:{mode:"aspectFill",src:t.baseUrl+e}})],1)})),1),i("v-uni-view",{staticClass:"detail-content",style:{padding:"0 0 80rpx",flexWrap:"wrap",background:"none",display:"flex",width:"100%",justifyContent:"space-between",height:"auto"}},[i("v-uni-view",{staticClass:"detail-list-item",style:{padding:"4rpx 24rpx 8rpx",margin:"0 auto",borderColor:"#d8d8d8",borderWidth:"0 0 0px 0",background:"#fff",display:"flex",width:"calc(100% - 0px)",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"lable",style:{padding:"0 10rpx 0 0",color:"#333",textAlign:"left",width:"auto",lineHeight:"48rpx",fontSize:"28rpx",fontWeight:"500"}},[t._v("账号：")]),i("v-uni-view",{staticClass:"text",style:{padding:"0px",margin:"0px",color:"#666",textAlign:"left",flex:"1",width:"auto",lineHeight:"48rpx",fontSize:"28rpx"}},[t._v(t._s(t.detail.zhanghao))])],1),i("v-uni-view",{staticClass:"detail-list-item",style:{padding:"4rpx 24rpx 8rpx",margin:"0 auto",borderColor:"#d8d8d8",borderWidth:"0 0 0px 0",background:"#fff",display:"flex",width:"calc(100% - 0px)",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"lable",style:{padding:"0 10rpx 0 0",color:"#333",textAlign:"left",width:"auto",lineHeight:"48rpx",fontSize:"28rpx",fontWeight:"500"}},[t._v("姓名：")]),i("v-uni-view",{staticClass:"text",style:{padding:"0px",margin:"0px",color:"#666",textAlign:"left",flex:"1",width:"auto",lineHeight:"48rpx",fontSize:"28rpx"}},[t._v(t._s(t.detail.xingming))])],1),i("v-uni-view",{staticClass:"detail-list-item",style:{padding:"4rpx 24rpx 8rpx",margin:"0 auto",borderColor:"#d8d8d8",borderWidth:"0 0 0px 0",background:"#fff",display:"flex",width:"calc(100% - 0px)",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"lable",style:{padding:"0 10rpx 0 0",color:"#333",textAlign:"left",width:"auto",lineHeight:"48rpx",fontSize:"28rpx",fontWeight:"500"}},[t._v("性别：")]),i("v-uni-view",{staticClass:"text",style:{padding:"0px",margin:"0px",color:"#666",textAlign:"left",flex:"1",width:"auto",lineHeight:"48rpx",fontSize:"28rpx"}},[t._v(t._s(t.detail.xingbie))])],1),i("v-uni-view",{staticClass:"detail-list-item",style:{padding:"4rpx 24rpx 8rpx",margin:"0 auto",borderColor:"#d8d8d8",borderWidth:"0 0 0px 0",background:"#fff",display:"flex",width:"calc(100% - 0px)",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"lable",style:{padding:"0 10rpx 0 0",color:"#333",textAlign:"left",width:"auto",lineHeight:"48rpx",fontSize:"28rpx",fontWeight:"500"}},[t._v("手机：")]),i("v-uni-view",{staticClass:"text",staticStyle:{"text-decoration":"underline"},style:{padding:"0px",margin:"0px",color:"#666",textAlign:"left",flex:"1",width:"auto",lineHeight:"48rpx",fontSize:"28rpx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.callClick(t.detail.shouji)}}},[t._v(t._s(t.detail.shouji))])],1),i("v-uni-view",{staticClass:"bottom-content bg-white tabbar border shop",style:{padding:"24rpx 24rpx 80rpx",margin:"0 auto",bottom:"0",display:"flex",borderRadius:"0px",flexWrap:"wrap",left:"0",background:"#fff",width:"100%",position:"fixed",height:"auto",order:"90",zIndex:"9"}})],1)],1)],1)],1)],1)},r=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}))},"41ae":function(t,e,i){"use strict";i.r(e);var n=i("fccf"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},"5dbd":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-5db256ab]{--animate-duration:1s;--animate-delay:1s;--animate-repeat:1}.content[data-v-5db256ab]{min-height:calc(100vh - 44px);box-sizing:border-box}.seat-list[data-v-5db256ab]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;background:#fff;margin:%?20?%;border-radius:%?20?%;padding:%?20?%;font-size:%?30?%}.seat-list .seat-item[data-v-5db256ab]{width:33.33%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;margin-bottom:%?20?%}.seat-list .seat-item .seat-icon[data-v-5db256ab]{width:%?50?%;height:%?50?%;margin-bottom:%?10?%}uni-audio[data-v-5db256ab]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.audio[data-v-5db256ab] .uni-audio-default{width:inherit}',""]),t.exports=e},ac0b:function(t,e,i){var n=i("5dbd");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("7f67ad2c",n,!0,{sourceMap:!1,shadowMode:!1})},bbc6:function(t,e,i){"use strict";var n=i("ac0b"),a=i.n(n);a.a},d56b:function(t,e,i){"use strict";i.r(e);var n=i("3388"),a=i("41ae");for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("bbc6");var o,s=i("f0c5"),l=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"5db256ab",null,!1,n["a"],o);e["default"]=l.exports},fccf:function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("28a5"),i("ac6a"),i("f559"),i("55dd"),i("96cf");var a=n(i("3b8d")),r={data:function(){return{btnColor:["#409eff","#67c23a","#909399","#e6a23c","#f56c6c","#356c6c","#351c6c","#f093a9","#a7c23a","#104eff","#10441f","#a21233","#503319"],id:"",userid:"",detail:{},swiperList:[],commentList:[],mescroll:null,downOption:{auto:!1},upOption:{noMoreSize:3,textNoMore:"~ 没有更多了 ~"},hasNext:!0,user:{},count:0,timer:null,title:""}},components:{},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var t=(0,a.default)(regeneratorRuntime.mark((function t(e){var i,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return i=uni.getStorageSync("nowTable"),t.next=3,this.$api.session(i);case 3:n=t.sent,this.user=n.data,this.id=e.id,e.userid&&(this.userid=e.userid),this.init();case 8:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),onUnload:function(){this.timer&&clearInterval(this.timer)},onShow:function(){var t=(0,a.default)(regeneratorRuntime.mark((function t(e){var i,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return i=uni.getStorageSync("nowTable"),t.next=3,this.$api.session(i);case 3:if(n=t.sent,this.user=n.data,this.btnColor=this.btnColor.sort((function(){return.5-Math.random()})),a=uni.getStorageSync("crossCleanType"),!a){t.next=14;break}return uni.removeStorageSync("crossCleanType"),t.next=11,this.$api.info("yonghu",this.id);case 11:n=t.sent,this.detail=n.data,this.title=this.detail.touxiang;case 14:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),destroyed:function(){},methods:{callClick:function(t){uni.makePhoneCall({phoneNumber:t})},onPayTap:function(){if(!this.user)return!1;uni.setStorageSync("paytable","yonghu"),uni.setStorageSync("payObject",this.detail),this.$utils.jump("../pay-confirm/pay-confirm?type=1")},onDetailTap:function(t){uni.setStorageSync("useridTag",this.userid),this.$utils.jump("./detail?id=".concat(t.id,"&userid=")+this.userid)},onAcrossTap:function(){var t=(0,a.default)(regeneratorRuntime.mark((function t(e,i,n,a,r,o){var s,l,u=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(u.length>6&&void 0!==u[6]?u[6]:1,this.user){t.next=3;break}return t.abrupt("return",!1);case 3:if(uni.setStorageSync("crossTable","yonghu"),uni.setStorageSync("crossObj",this.detail),uni.setStorageSync("statusColumnName",a),uni.setStorageSync("statusColumnValue",o),uni.setStorageSync("tips",r),""==a||a.startsWith("[")){t.next=18;break}s=uni.getStorageSync("crossObj"),t.t0=regeneratorRuntime.keys(s);case 11:if((t.t1=t.t0()).done){t.next=18;break}if(l=t.t1.value,l!=a||s[l]!=o){t.next=16;break}return this.$utils.msg(r),t.abrupt("return");case 16:t.next=11;break;case 18:this.$utils.jump("../".concat(e,"/add-or-update?cross=true"));case 19:case"end":return t.stop()}}),t,this)})));function e(e,i,n,a,r,o){return t.apply(this,arguments)}return e}(),init:function(){var t=(0,a.default)(regeneratorRuntime.mark((function t(){var e,i,n=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=n.length>0&&void 0!==n[0]?n[0]:1,this.timer&&clearInterval(this.timer),t.next=4,this.$api.info("yonghu",this.id);case 4:if(i=t.sent,this.detail=i.data,this.title=this.detail.touxiang,this.swiperList=this.detail.touxiang?this.detail.touxiang.split(","):[],2!=e){t.next=12;break}return this.detail.discussnum++,t.next=12,this.$api.update("yonghu",this.detail);case 12:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),mescrollInit:function(t){this.mescroll=t},downCallback:function(t){this.hasNext=!0,t.resetUpScroll()},upCallback:function(){var t=(0,a.default)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.endSuccess(e.size,this.hasNext);case 1:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),onChatTap:function(){this.$utils.jump("../chat/chat")},download:function(t){var e=this;t=e.$base.url+t,uni.downloadFile({url:t,success:function(i){200===i.statusCode&&(e.$utils.msg("下载成功"),window.open(t))}})},onCartTabTap:function(){this.$utils.tab("../shop-cart/shop-cart")}}};e.default=r}}]);