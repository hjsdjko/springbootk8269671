(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-shop-order-confirm-shop-order-confirm"],{"1bab":function(e,t,r){"use strict";var a,o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-uni-view",{staticClass:"content"},[r("v-uni-form",[r("v-uni-view",{staticClass:"cu-form-group"},[r("v-uni-view",{staticClass:"title"},[e._v("购买清单")])],1),e._l(e.orderGoods,(function(t,a){return r("v-uni-view",{key:a,staticClass:"cu-form-group"},[r("v-uni-image",{staticClass:"avator",attrs:{src:e.baseUrl+t.picture,mode:""}}),r("v-uni-view",{staticClass:"title"},[r("v-uni-view",[e._v(e._s(t.goodname))]),1!=e.seat?r("v-uni-view",[e._v("x"+e._s(t.buynumber)),1==e.type||3==e.type?r("v-uni-text",{staticStyle:{"margin-left":"30upx",color:"red"}},[e._v("￥"+e._s(t.total))]):e._e(),2==e.type?r("v-uni-text",{staticStyle:{"margin-left":"30upx",color:"red"}},[e._v(e._s(t.total)+"积分")]):e._e()],1):r("v-uni-view",[e._v(e._s(t.address)+"号"),1==e.type?r("v-uni-text",{staticStyle:{"margin-left":"30upx",color:"red"}},[e._v("￥"+e._s(t.total))]):e._e(),2==e.type?r("v-uni-text",{staticStyle:{"margin-left":"30upx",color:"red"}},[e._v(e._s(t.total)+"积分")]):e._e()],1)],1)],1)})),r("v-uni-view",{staticClass:"cu-form-group"},[1==e.type||3==e.type?r("v-uni-view",{staticClass:"title"},[e._v("总价")]):e._e(),2==e.type?r("v-uni-view",{staticClass:"title"},[e._v("总积分")]):e._e(),r("v-uni-view",[1==e.type||3==e.type?r("v-uni-text",[e._v("￥"+e._s(e.totalPrice))]):e._e(),2==e.type?r("v-uni-text",[e._v(e._s(e.total)+"积分")]):e._e()],1)],1),r("v-uni-view",{staticClass:"cu-form-group"},[e._v("备注"),r("v-uni-input",{staticStyle:{"margin-left":"30upx","border-bottom":"1px solid #999999",height:"60upx","font-size":"28rpx"},attrs:{name:"remark"},model:{value:e.remark,callback:function(t){e.remark=t},expression:"remark"}})],1)],2),r("v-uni-view",{staticClass:"padding",staticStyle:{"text-align":"center"}},[1==e.type?r("v-uni-button",{staticClass:"bg-red lg",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onSubmitTap()}}},[e._v("确认支付")]):e._e(),2==e.type?r("v-uni-button",{staticClass:"bg-red lg",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onSubmitTap()}}},[e._v("确认兑换")]):e._e()],1)],1)},n=[];r.d(t,"b",(function(){return o})),r.d(t,"c",(function(){return n})),r.d(t,"a",(function(){return a}))},"291a":function(e,t,r){var a=r("24fb");t=a(!1),t.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.avator[data-v-06650907]{width:%?150?%;height:%?150?%;margin:%?20?% 0}',""]),e.exports=t},"510e":function(e,t,r){var a=r("291a");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var o=r("4f06").default;o("73b4c31c",a,!0,{sourceMap:!1,shadowMode:!1})},"83fd":function(e,t,r){"use strict";r.r(t);var a=r("daab"),o=r.n(a);for(var n in a)"default"!==n&&function(e){r.d(t,e,(function(){return a[e]}))}(n);t["default"]=o.a},b1b8:function(e,t,r){"use strict";r.r(t);var a=r("1bab"),o=r("83fd");for(var n in o)"default"!==n&&function(e){r.d(t,e,(function(){return o[e]}))}(n);r("b6e0");var i,s=r("f0c5"),u=Object(s["a"])(o["default"],a["b"],a["c"],!1,null,"06650907",null,!1,a["a"],i);t["default"]=u.exports},b6e0:function(e,t,r){"use strict";var a=r("510e"),o=r.n(a);o.a},daab:function(e,t,r){"use strict";var a=r("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r("28a5");var o=a(r("bd86"));r("96cf");var n=a(r("3b8d"));r("c5f6"),r("ac6a");var i={data:function(){return{user:{},orderGoods:{},address:{},total:0,type:1,seat:0,remark:""}},computed:{baseUrl:function(){return this.$base.url},totalPrice:function(){var e=0;return 1==this.seat?e=this.total:this.orderGoods.forEach((function(t){e+=t.price*t.buynumber})),Number(e).toFixed(2)}},onLoad:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.type=t.type,this.seat=t.seat,this.orderGoods=uni.getStorageSync("orderGoods"),this.changePrice(),1!=this.seat)for(r=0;r<this.orderGoods.length;r++)0==this.total?this.total=parseFloat(this.orderGoods[r].price)*this.orderGoods[r].buynumber:this.total=parseFloat(this.total)+parseFloat(this.orderGoods[r].price)*this.orderGoods[r].buynumber;else this.total=parseFloat(this.orderGoods[0].total),this.address=this.orderGoods[0].address;this.total=this.total.toFixed(2);case 6:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),onShow:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=uni.getStorageSync("nowTable"),e.next=3,this.$api.session(t);case 3:r=e.sent,this.user=r.data;case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),methods:{changePrice:function(){var e=this,t=0;this.orderGoods.forEach((function(r){t=1==e.seat?r.total:r.price*r.buynumber,r.total=t.toFixed(2)})),this.$forceUpdate()},onSubmitTap:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=this,r=uni.getStorageSync("nowTable"),uni.showModal({title:"提示",content:"是否确认支付",success:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(a){var n,i,s,u,d,c,l,p;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!a.confirm){e.next=65;break}if(n=t.type,i=!0,s="已支付",1!=n){e.next=8;break}t.user.money-t.totalPrice<0&&(t.$utils.msg("余额不足，请先充值"),i=!1,s="未支付",setTimeout((function(){uni.switchTab({url:"../center/center"})}),1500)),e.next=13;break;case 8:if(2!=n){e.next=13;break}if(!(t.user.jf-t.totalPrice<0)){e.next=13;break}return t.$utils.msg("积分不足，兑换商品失败"),i=!1,e.abrupt("return");case 13:u=0;case 14:if(!(u<t.orderGoods.length)){e.next=51;break}if("meishicaipin"!=t.orderGoods[u].tablename){e.next=40;break}return e.next=18,t.$api.info("meishicaipin",t.orderGoods[u].goodid);case 18:if(c=e.sent,!(c.data.onelimittimes>0)){e.next=24;break}if(!(t.orderGoods[u].buynumber>c.data.onelimittimes)){e.next=24;break}return t.$utils.msg("".concat(t.orderGoods[u].goodname,"超过可购买数量")),i=!1,e.abrupt("break",51);case 24:if(!(c.data.alllimittimes<t.orderGoods[u].buynumber)){e.next=30;break}return t.$utils.msg("".concat(t.orderGoods[u].goodname,"已售罄")),i=!1,e.abrupt("break",51);case 30:if(1==t.seat){e.next=36;break}return c.data.alllimittimes=c.data.alllimittimes-t.orderGoods[u].buynumber,e.next=34,t.$api.update("meishicaipin",c.data);case 34:e.next=40;break;case 36:if(c.data.selected=c.data.selected+","+t.orderGoods[u].activeSeat,!i){e.next=40;break}return e.next=40,t.$api.update("meishicaipin",c.data);case 40:return d={orderid:t.$utils.genTradeNo(),tablename:t.orderGoods[u].tablename,userid:t.user.id,goodid:t.orderGoods[u].goodid,goodname:t.orderGoods[u].goodname,picture:t.orderGoods[u].picture,buynumber:t.orderGoods[u].buynumber,discountprice:t.orderGoods[u].price,price:t.orderGoods[u].price,total:t.orderGoods[u].total,discounttotal:t.orderGoods[u].total,type:n,remark:t.remark,sfsh:"",role:r,goodtype:t.orderGoods[u].goodtype},(0,o.default)(d,"goodtype",t.orderGoods[u].goodtype),(0,o.default)(d,"status",s),l=d,1==t.seat&&(l["address"]=t.address,p=t.address.split(",").length,l["buynumber"]=p,l["total"]=t.orderGoods[u].total,l["discounttotal"]=t.orderGoods[u].total),e.next=44,t.$api.add("orders",l);case 44:if(!t.orderGoods[u].id){e.next=48;break}return e.next=47,t.$api.del("cart",JSON.stringify([t.orderGoods[u].id]));case 47:uni.removeStorageSync("cart".concat(t.orderGoods[u].goodid).concat(t.user.id));case 48:u++,e.next=14;break;case 51:if(!i){e.next=65;break}if(1!=n){e.next=60;break}return t.$utils.msgBack("支付成功"),t.user.money=Number((Number(t.user.money)-Number(t.totalPrice)).toFixed(2)),(t.user.jf||0==t.user.jf)&&(t.user.jf=Number((Number(t.user.jf)+Number(t.totalPrice)).toFixed(2))),e.next=58,t.$api.update(r,t.user);case 58:e.next=65;break;case 60:if(2!=n){e.next=65;break}return t.$utils.msgBack("兑换成功"),t.user.jf=Number((Number(t.user.jf)-Number(t.totalPrice)).toFixed(2)),e.next=65,t.$api.update(r,t.user);case 65:case"end":return e.stop()}}),e)})));function a(t){return e.apply(this,arguments)}return a}()});case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),onAddressTap:function(){this.$utils.jump("../shop-address/shop-address")}}};t.default=i}}]);