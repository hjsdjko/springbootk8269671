(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-shop-order-shop-order"],{"1ce4":function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,".cover[data-v-6a340bfa]{width:%?150?%;height:%?150?%}",""]),t.exports=e},"2d1d":function(t,e,n){var r=n("1ce4");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=n("4f06").default;i("613cafcf",r,!0,{sourceMap:!1,shadowMode:!1})},"95a9":function(t,e,n){"use strict";n.r(e);var r=n("fba4"),i=n("b92d");for(var s in i)"default"!==s&&function(t){n.d(e,t,(function(){return i[t]}))}(s);n("def8");var a,u=n("f0c5"),c=Object(u["a"])(i["default"],r["b"],r["c"],!1,null,"6a340bfa",null,!1,r["a"],a);e["default"]=c.exports},b92d:function(t,e,n){"use strict";n.r(e);var r=n("f911"),i=n.n(r);for(var s in r)"default"!==s&&function(t){n.d(e,t,(function(){return r[t]}))}(s);e["default"]=i.a},def8:function(t,e,n){"use strict";var r=n("2d1d"),i=n.n(r);i.a},f911:function(t,e,n){"use strict";var r=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var i=r(n("3b8d"));n("c5f6");var s={data:function(){return{navlist:["全部","未支付","已支付","已完成","已取消","已退款"],currentIndex:0,pages:1,list:[],mescroll:null,downOption:{auto:!1},upOption:{page:{},noMoreSize:3,textNoMore:"~ 没有更多了 ~"},hasNext:!0,status:"",user:""}},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(t){if(t.nav)for(var e in this.status=t.nav,this.navlist)this.status==this.navlist[e]&&(this.currentIndex=Number(e))},onShow:function(){var t=(0,i.default)(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=uni.getStorageSync("nowTable"),t.next=3,this.$api.session(e);case 3:n=t.sent,this.user=n.data,this.hasNext=!0,this.mescroll&&this.mescroll.resetUpScroll();case 7:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),methods:{navselect:function(t,e){this.currentIndex=t,this.status="全部"==e?"":"已支付"==e?"已支付":e,this.hasNext=!0,this.mescroll&&this.mescroll.resetUpScroll()},priceChange:function(t){return Number(t).toFixed(2)},mescrollInit:function(t){this.mescroll=t},downCallback:function(t){this.hasNext=!0,t.resetUpScroll()},upCallback:function(){var t=(0,i.default)(regeneratorRuntime.mark((function t(e){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n={page:e.num,limit:e.size,sort:"addtime",order:"desc",userid:uni.getStorageSync("appUserid")},this.status&&(n["status"]=this.status),t.next=4,this.$api.list("orders",n);case 4:r=t.sent,1==e.num&&(this.list=[]),this.list=this.list.concat(r.data.list),0==r.data.list.length&&(this.hasNext=!1),e.endSuccess(e.size,this.hasNext);case 9:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),onCancelTap:function(){var t=(0,i.default)(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=this,uni.showModal({title:"提示",content:"是否确认退".concat(e.total>0?"款":"订"),success:function(){var t=(0,i.default)(regeneratorRuntime.mark((function t(r){var i,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(i=uni.getStorageSync("nowTable"),!r.confirm){t.next=18;break}return e.status="已退款",t.next=5,n.$api.update("orders",e);case 5:if(s=t.sent,"meishicaipin"!=e.tablename||3==e.type){t.next=14;break}return t.next=9,n.$api.info(e.tablename,e.goodid);case 9:if(s=t.sent,0!=s.code){t.next=14;break}return s.data.alllimittimes=Number(s.data.alllimittimes)+Number(e.buynumber),t.next=14,n.$api.update(e.tablename,s.data);case 14:n.hasNext=!0,n.mescroll&&n.mescroll.resetUpScroll(),1==e.type||3==e.type?(n.user.money=Number((Number(n.user.money)+Number(e.total)).toFixed(2)),n.user.jf&&(n.user.jf=Number((Number(n.user.jf)-Number(e.total)).toFixed(2)))):2==e.type&&(n.user.jf=Number((Number(n.user.jf)+Number(e.total)).toFixed(2))),n.$api.update(i,n.user);case 18:case"end":return t.stop()}}),t)})));function r(e){return t.apply(this,arguments)}return r}()});case 2:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),orderDiscuss:function(t){this.$utils.jump("../".concat(t.tablename,"/detail?id=").concat(t.goodid,"&&userid=").concat(this.user.id))},logistics:function(t){this.$utils.jump("./logistics?id="+t.id)},returnGood:function(){var t=(0,i.default)(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=this,uni.showModal({title:"是否退货?",content:"退货审核通过后,金额将返回账户中",success:function(){var t=(0,i.default)(regeneratorRuntime.mark((function t(r){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!r.confirm){t.next=6;break}return e.sfsh="待审核",t.next=4,n.$api.update("orders",e);case 4:t.sent,n.$utils.msg("申请已提交");case 6:case"end":return t.stop()}}),t)})));function r(e){return t.apply(this,arguments)}return r}()});case 2:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),cancel:function(){var t=(0,i.default)(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=this,uni.showModal({title:"提示",content:"是否取消订单",success:function(){var t=(0,i.default)(regeneratorRuntime.mark((function t(r){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!r.confirm){t.next=15;break}return e.status="已取消",t.next=4,n.$api.update("orders",e);case 4:if(i=t.sent,"meishicaipin"!=e.tablename){t.next=13;break}return t.next=8,n.$api.info(e.tablename,e.goodid);case 8:if(i=t.sent,0!=i.code){t.next=13;break}return i.data.alllimittimes=i.data.alllimittimes+e.buynumber,t.next=13,n.$api.update(e.tablename,i.data);case 13:n.hasNext=!0,n.mescroll&&n.mescroll.resetUpScroll();case 15:case"end":return t.stop()}}),t)})));function r(e){return t.apply(this,arguments)}return r}()});case 2:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),pay:function(){var t=(0,i.default)(regeneratorRuntime.mark((function t(e){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=this,r=uni.getStorageSync("nowTable"),uni.showModal({title:"提示",content:"是否支付订单",success:function(){var t=(0,i.default)(regeneratorRuntime.mark((function t(i){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!i.confirm){t.next=25;break}if(1!=e.type){t.next=12;break}if(!(n.user.money-e.total<0)){t.next=5;break}return n.$utils.msg("余额不足，请先充值"),t.abrupt("return");case 5:return n.$utils.msgBack("支付成功"),n.user.money=Number((Number(n.user.money)-Number(e.total)).toFixed(2)),(n.user.jf||0==n.user.jf)&&(n.user.jf=Number((Number(n.user.jf)+Number(e.total)).toFixed(2))),t.next=10,n.$api.update(r,n.user);case 10:t.next=20;break;case 12:if(2!=e.type){t.next=20;break}if(!(n.user.jf-e.total<0)){t.next=16;break}return n.$utils.msg("积分不足，兑换商品失败"),t.abrupt("return");case 16:return n.$utils.msgBack("兑换成功"),n.user.jf=Number((Number(n.user.jf)-Number(e.total)).toFixed(2)),t.next=20,n.$api.update(r,n.user);case 20:return e.status="已支付",t.next=23,n.$api.update("orders",e);case 23:t.sent,n.mescroll&&n.mescroll.resetUpScroll();case 25:case"end":return t.stop()}}),t)})));function s(e){return t.apply(this,arguments)}return s}()});case 3:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),onConfirm:function(){var t=(0,i.default)(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=this,uni.showModal({title:"提示",content:"是否确认收货",success:function(){var t=(0,i.default)(regeneratorRuntime.mark((function t(r){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(uni.getStorageSync("nowTable"),!r.confirm){t.next=8;break}return e.status="已完成",t.next=5,n.$api.update("orders",e);case 5:t.sent,n.hasNext=!0,n.mescroll&&n.mescroll.resetUpScroll();case 8:case"end":return t.stop()}}),t)})));function r(e){return t.apply(this,arguments)}return r}()});case 2:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),del:function(){var t=(0,i.default)(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=this,uni.showModal({title:"提示",content:"是否确认删除",success:function(){var t=(0,i.default)(regeneratorRuntime.mark((function t(r){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!r.confirm){t.next=6;break}return t.next=3,n.$api.del("orders",JSON.stringify([e]));case 3:t.sent,n.mescroll&&n.mescroll.resetUpScroll(),n.$utils.msg("删除成功");case 6:case"end":return t.stop()}}),t)})));function r(e){return t.apply(this,arguments)}return r}()});case 2:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()}};e.default=s},fba4:function(t,e,n){"use strict";var r={"mescroll-uni":n("f05e").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-scroll-view",{staticClass:"bg-white nav",attrs:{"scroll-x":!0}},[n("v-uni-view",{staticClass:"flex text-center"},t._l(t.navlist,(function(e,r){return n("v-uni-view",{key:r,staticClass:"cu-item flex-sub text-df ",class:[r==t.currentIndex?"text-red cur":""],on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.navselect(r,e)}}},[t._v(t._s(e))])})),1)],1),n("mescroll-uni",{attrs:{top:88,up:t.upOption,down:t.downOption},on:{init:function(e){arguments[0]=e=t.$handleEvent(e),t.mescrollInit.apply(void 0,arguments)},down:function(e){arguments[0]=e=t.$handleEvent(e),t.downCallback.apply(void 0,arguments)},up:function(e){arguments[0]=e=t.$handleEvent(e),t.upCallback.apply(void 0,arguments)}}},t._l(t.list,(function(e,r){return n("v-uni-view",{key:r},[n("v-uni-view",{staticClass:"bg-white margin-sm padding-sm solids-bottom radius text-content"},[n("v-uni-view",{staticClass:"flex justify-between"},[n("v-uni-view",{staticClass:"text-bold",staticStyle:{"flex-shrink":"0"}},[n("v-uni-text",{staticClass:"text-red"},[t._v(t._s("未支付"==e.status?"未支付":""))]),n("v-uni-text",{staticClass:"text-green"},[t._v(t._s("已支付"==e.status?"已支付":""))]),n("v-uni-text",{staticClass:"text-red"},[t._v(t._s("已发货"==e.status?"已发货":""))]),n("v-uni-text",{staticClass:"text-blue"},[t._v(t._s("已完成"==e.status?"已完成":""))]),n("v-uni-text",{staticClass:"text-grey"},[t._v(t._s("已取消"==e.status?"已取消":""))]),n("v-uni-text",{staticClass:"text-grey"},[t._v(t._s("已退款"==e.status?"已退款":""))]),"待审核"==e.sfsh&&"已完成"==e.status?n("v-uni-text",{staticStyle:{"font-size":"24rpx"}},[t._v("(退货审核中)")]):t._e()],1),n("v-uni-view",[n("v-uni-text",{staticClass:"icon-goods padding-right-sm"}),n("v-uni-text",{staticClass:"text-bold solids-bottom"},[t._v(t._s(e.orderid))])],1)],1),n("v-uni-view",{staticClass:"bg-white margin-xs padding-xs  radius text-content"},[n("v-uni-view",{staticClass:"flex padding-top-sm solids-top"},[n("v-uni-image",{staticClass:" cover radius solids",staticStyle:{"flex-shrink":"0"},attrs:{src:t.baseUrl+e.picture,mode:"aspectFill"}}),n("v-uni-view",{staticClass:"text-content padding-left",staticStyle:{"flex-grow":"1"}},[n("v-uni-view",[t._v(t._s(e.goodname))]),1==e.type||3==e.type?n("v-uni-view",[t._v(t._s(e.buynumber)+" x ￥"+t._s(t.priceChange(e.price)))]):t._e(),2==e.type?n("v-uni-view",[t._v(t._s(e.buynumber)+" x "+t._s(t.priceChange(e.price))+"积分")]):t._e(),n("v-uni-view",{staticClass:"flex justify-end"},[t._v("下单时间："+t._s(e.addtime))]),n("v-uni-view",{staticClass:"flex justify-end"},[t._v("备注："+t._s(e.remark))])],1)],1),1==e.type||3==e.type?n("v-uni-view",{staticClass:"flex justify-end"},[t._v("合计"+t._s(t.priceChange(e.total))+"元")]):t._e(),2==e.type?n("v-uni-view",{staticClass:"flex justify-end"},[t._v("合计"+t._s(e.total)+"积分")]):t._e()],1),n("v-uni-view",{staticClass:"flex justify-end"}),n("v-uni-view",{staticClass:"flex justify-end",staticStyle:{"font-size":"24upx"}},["未支付"==e.status?n("v-uni-view",[n("v-uni-view",{staticClass:"round cu-btn lines-grey mid  margin-right-sm",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.pay(e)}}},[t._v("支付")]),n("v-uni-view",{staticClass:"round cu-btn lines-grey mid  margin-right-sm",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.cancel(e)}}},[t._v("取消订单")])],1):t._e(),"已支付"==e.status?n("v-uni-view",[n("v-uni-view",{staticClass:"round cu-btn lines-grey mid  margin-right-sm",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.onCancelTap(e)}}},[t._v(t._s(e.total>0?"退款":"退订"))])],1):t._e(),"已完成"==e.status?n("v-uni-view",[""==e.sfsh?n("v-uni-view",{staticClass:"round cu-btn lines-grey mid  margin-right-sm",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.returnGood(e)}}},[t._v("退货")]):t._e(),n("v-uni-view",{staticClass:"round cu-btn lines-grey mid  margin-right-sm",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.orderDiscuss(e)}}},[t._v("评价")])],1):t._e(),"已发货"==e.status?n("v-uni-view",[n("v-uni-view",{staticClass:"round cu-btn lines-grey mid  margin-right-sm",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.onConfirm(e)}}},[t._v("确认收货")])],1):t._e(),"已取消"==e.status||"已完成"==e.status||"已退款"==e.status?n("v-uni-view",[n("v-uni-view",{staticClass:"round cu-btn lines-grey mid  margin-right-sm",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.del(e.id)}}},[t._v("删除订单")])],1):t._e(),e.logistics?n("v-uni-view",{staticClass:"round cu-btn lines-grey mid  margin-right-sm",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.logistics(e)}}},[t._v("物流")]):t._e()],1)],1)],1)})),1)],1)},s=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return r}))}}]);