<template>
	<view class="content">
		<view :style='{"minHeight":"100vh","width":"100%","padding":"24rpx","position":"relative","background":"#5578ba","height":"auto"}'>
			<view v-if="user&&user.id" :style='{"padding":"24rpx 24rpx","margin":"0 0 0px 0","borderRadius":"16rpx","background":"url(http://codegen.caihongy.cn/20240120/2a6417ab267f451a87953e830a6d499c.png)","display":"flex","width":"100%","position":"relative","height":"auto"}' @tap="onPageTap('../user-info/user-info')" class="header" v-bind:class="{'status':isH5Plus}">
				<view :style='{"alignContent":"center","padding":"0px 0 0","margin":"0","alignItems":"center","flexWrap":"wrap","textAlign":"center","flex":"1","background":"none","display":"flex","width":"100%","position":"relative","height":"auto"}' v-if="tableName=='yonghu'" class="userinfo">
					<image :style='{"width":"88rpx","padding":"0","margin":"0 20rpx 0 0","borderRadius":"100%","height":"88rpx"}' :src="user.touxiang?baseUrl+user.touxiang:'/static/gen/upload.png'"></image>
					<view :style='{"width":"240rpx","margin":"10rpx auto 0","flex":"1","flexDirection":"column","display":"flex"}' class="info">
						<view :style='{"width":"100%","lineHeight":"36rpx","fontSize":"28rpx","color":"#333","textAlign":"left"}'>{{user.zhanghao}}<text v-if="user.vip&& user.vip=='是'">(VIP)</text></view>
					</view>
					
					<view :style='{"width":"100%","margin":"40rpx 0 0","flexWrap":"wrap","flexDirection":"row","display":"flex"}' class="info">
						<view :style='{"width":"auto","margin":"0 20rpx 20rpx 0","lineHeight":"36rpx","fontSize":"28rpx","color":"#333"}'>手机：{{user.shouji}}</view>
						<view :style='{"width":"auto","margin":"0 20rpx 20rpx 0","lineHeight":"36rpx","fontSize":"28rpx","color":"#333"}' v-if="user.money">余额：{{user.money}}</view>
						<view :style='{"width":"auto","margin":"0 20rpx 20rpx 0","lineHeight":"36rpx","fontSize":"28rpx","color":"#333"}' v-if="user.jf||user.jf==0">积分：{{user.jf}}</view>
					</view>
				</view>
				<view :style='{"padding":"8rpx 20rpx","alignItems":"center","borderRadius":"16rpx","background":"none","flexDirection":"column","display":"flex","width":"auto","justifyContent":"center","height":"auto"}' class="setting">
					<text class="icon iconfont icon-qita6" :style='{"border":"0","margin":"0 6rpx 0 0","color":"#333","borderRadius":"0","display":"inline-block","width":"48rpx","lineHeight":"48rpx","fontSize":"56rpx"}'></text>
					<text :style='{"lineHeight":"2","fontSize":"28rpx","color":"#333","display":"inline-block"}'>设置</text>
				</view>
			</view>
			
			<view v-else :style='{"padding":"24rpx 24rpx","margin":"0 0 0px 0","borderRadius":"16rpx","background":"url(http://codegen.caihongy.cn/20240120/2a6417ab267f451a87953e830a6d499c.png)","display":"flex","width":"100%","position":"relative","height":"auto"}' @tap="loginClick" class="header" v-bind:class="{'status':isH5Plus}">
				<view :style='{"alignItems":"center","color":"#666","display":"flex","width":"100%","fontSize":"36rpx","justifyContent":"center","height":"100%"}'>登录/注册</view>
			</view>
			
			<view :style='{"width":"100%","background":"none","height":"auto"}' class="list">
				<view :style='{"width":"100%","padding":"20rpx 0 0","margin":"20rpx 0","borderRadius":"0","background":"#fff","height":"auto"}'>
					<view :style='{"width":"100%","padding":"0 20rpx","background":"none","justifyContent":"space-between","display":"flex","height":"auto"}'>
						<view :style='{"fontSize":"30rpx","lineHeight":"72rpx","color":"#333","fontWeight":"500"}'>我的订单</view>
						<view :style='{"color":"#666","fontSize":"26rpx","lineHeight":"72rpx"}' @tap="onPageTap('../shop-order/shop-order')">查看全部订单></view>
					</view>
					<view :style='{"width":"100%","padding":"20rpx 20rpx","color":"#363636","justifyContent":"space-around","display":"flex","height":"auto"}'>
						<view class="list-item" :style='{"padding":"10rpx 20rpx","alignItems":"center","borderRadius":"0px","flexDirection":"column","background":"#f6f8f6","display":"flex","height":"auto"}' @tap="onPageTap('../shop-order/shop-order?nav=未支付')">
							<span class="icon iconfont icon-chujia3" :style='{"color":"inherit","lineHeight":"1","fontSize":"48rpx"}'></span>
							<view :style='{"color":"inherit","lineHeight":"2","fontSize":"24rpx"}' class="title">未支付</view>
						</view>
						<view class="list-item" :style='{"padding":"10rpx 20rpx","alignItems":"center","borderRadius":"0px","flexDirection":"column","background":"#f6f8f6","display":"flex","height":"auto"}' @tap="onPageTap('../shop-order/shop-order?nav=已支付')">
							<span class="icon iconfont icon-hexiao15" :style='{"color":"inherit","lineHeight":"1","fontSize":"48rpx"}'></span>
							<view :style='{"color":"inherit","lineHeight":"2","fontSize":"24rpx"}' class="title">已支付</view>
						</view>
						<view class="list-item" :style='{"padding":"10rpx 20rpx","alignItems":"center","borderRadius":"0px","flexDirection":"column","background":"#f6f8f6","display":"flex","height":"auto"}' @tap="onPageTap('../shop-order/shop-order?nav=已完成')">
							<span class="icon iconfont icon-yanziwancheng" :style='{"color":"inherit","lineHeight":"1","fontSize":"48rpx"}'></span>
							<view :style='{"color":"inherit","lineHeight":"2","fontSize":"24rpx"}' class="title">已完成</view>
						</view>
						<view class="list-item" :style='{"padding":"10rpx 20rpx","alignItems":"center","borderRadius":"0px","flexDirection":"column","background":"#f6f8f6","display":"flex","height":"auto"}' @tap="onPageTap('../shop-order/shop-order?nav=已取消')">
							<span class="icon iconfont icon-shanchu7" :style='{"color":"inherit","lineHeight":"1","fontSize":"48rpx"}'></span>
							<view :style='{"color":"inherit","lineHeight":"2","fontSize":"24rpx"}' class="title">已取消</view>
						</view>
						<view class="list-item" :style='{"padding":"10rpx 20rpx","alignItems":"center","borderRadius":"0px","flexDirection":"column","background":"#f6f8f6","display":"flex","height":"auto"}' @tap="onPageTap('../shop-order/shop-order?nav=已退款')">
							<span class="icon iconfont icon-tijiaoyanzi" :style='{"color":"inherit","lineHeight":"1","fontSize":"48rpx"}'></span>
							<view :style='{"color":"inherit","lineHeight":"2","fontSize":"24rpx"}' class="title">已退款</view>
						</view>
						<!-- <view class="list-item" :style='{"alignItems":"center","flex":"1","flexDirection":"column","display":"flex","height":"auto"}' @tap="onPageTap('../shop-order/shop-order?nav=已发货')">
							<span class="icon iconfont icon-menu16" :style='{"color":"#333","lineHeight":"1","fontSize":"36rpx"}'></span>
							<view :style='{"color":"#333","lineHeight":"2","fontSize":"24rpx"}' class="title">已发货</view>
						</view> -->
					</view>
				</view>
				
				<view :style='{"width":"100%","margin":"0","background":"#fff","height":"auto"}'>
					<view :style='{"padding":"0 20rpx","margin":"0 0 20rpx","background":"none","display":"none","width":"100%","justifyContent":"space-between","height":"auto"}'>
						<view :style='{"fontSize":"32rpx","lineHeight":"72rpx","color":"#333","fontWeight":"600"}'>我的服务</view>
					</view>
					<view :style='{"padding":"32rpx 0 0","flexWrap":"wrap","flexDirection":"row","display":"flex","width":"100%","justifyContent":"flex-start","height":"auto"}'>
					
						<block v-for="item in menuList" v-bind:key="item.roleName">
							<block v-if="role==item.roleName" v-bind:key="menu.menu" v-for="(menu,index) in item.backMenu">
								<block v-bind:key="child.tableName" v-for=" (child,sort) in menu.child">
									<view :style='{"padding":"0","borderColor":"#eee","margin":"0 0 32rpx 0","borderRadius":"0","alignItems":"center","flexWrap":"wrap","borderWidth":"0 0 0px","background":"#fff","display":"flex","width":"33.3%","borderStyle":"solid","height":"100%"}' v-if="child.tableName!='orders/已发货' && child.tableName!='orders/已退款' &&child.tableName!='orders/已取消' && child.tableName!='orders/未支付' && child.tableName!='orders/已支付' && child.tableName!='orders/已完成' && child.tableName!='exampaper' && child.tableName!='examquestion' " @tap="onPageTap('../'+child.tableName+'/list?userid='+user.id+'&menuJump='+child.menuJump)" class="li" hover-class="hover">
										<view :style='{"width":"100%","lineHeight":"1","fontSize":"40rpx","color":"#333","textAlign":"center","display":"inline-block"}' :class="child.appFrontIcon"></view>
										<view :style='{"padding":"0 20rpx","margin":"0px 0 0","color":"#555","textAlign":"center","flex":"1","display":"inline-block","width":"100%","fontSize":"26rpx"}' class="text">{{child.menu}}</view>
										<view :style='{"width":"28rpx","lineHeight":"28rpx","fontSize":"32rpx","color":"#bbb","display":"none"}' class="icon iconfont icon-jinru"></view>
									</view>
								</block>
							</block>
						</block>
						
						<view @tap="onPageTap('../shop-recharge/pay-confirm')" :style='{"padding":"0","borderColor":"#eee","margin":"0 0 32rpx 0","borderRadius":"0","alignItems":"center","flexWrap":"wrap","borderWidth":"0 0 0px","background":"#fff","display":"flex","width":"33.3%","borderStyle":"solid","height":"100%"}' class="li" hover-class="hover">
							<view :style='{"width":"100%","lineHeight":"1","fontSize":"40rpx","color":"#333","textAlign":"center","display":"inline-block"}' class="cuIcon-moneybag"></view>
							<view class="text" :style='{"padding":"0 20rpx","margin":"0px 0 0","color":"#555","textAlign":"center","flex":"1","display":"inline-block","width":"100%","fontSize":"26rpx"}'>用户充值</view>
							<view :style='{"width":"28rpx","lineHeight":"28rpx","fontSize":"32rpx","color":"#bbb","display":"none"}' class="icon iconfont icon-jinru"></view>
						</view>
						<view v-if="user&&user.id" @tap="passwordShow()" :style='{"padding":"0","borderColor":"#eee","margin":"0 0 32rpx 0","borderRadius":"0","alignItems":"center","flexWrap":"wrap","borderWidth":"0 0 0px","background":"#fff","display":"flex","width":"33.3%","borderStyle":"solid","height":"100%"}' class="li" hover-class="hover">
							<view :style='{"width":"100%","lineHeight":"1","fontSize":"40rpx","color":"#333","textAlign":"center","display":"inline-block"}' class="cuIcon-lock"></view>
							<view class="text" :style='{"padding":"0 20rpx","margin":"0px 0 0","color":"#555","textAlign":"center","flex":"1","display":"inline-block","width":"100%","fontSize":"26rpx"}'>修改密码</view>
							<view :style='{"width":"28rpx","lineHeight":"28rpx","fontSize":"32rpx","color":"#bbb","display":"none"}' class="icon iconfont icon-jinru"></view>
						</view>
					</view>
				</view>
			</view>
			
			<!-- 推荐 -->
			<view class="recommend" :style='{"width":"100%","padding":"0","margin":"40rpx 0","borderRadius":"16rpx","background":"none","height":"auto"}' v-if="recommendList.length">
				<view :style='{"padding":"0 24rpx","color":"#333","textAlign":"center","background":"none","width":"100%","lineHeight":"1","fontSize":"28rpx","fontWeight":"500","height":"auto"}'>更多精选商品</view>
				<view :style='{"padding":"0","margin":"40rpx 0 0","flexWrap":"wrap","background":"none","display":"flex","width":"100%","justifyContent":"space-between","height":"auto"}'>
					<view v-for="(item,index) in recommendList" :key="index" :style='{"border":"0px solid #eee","padding":"0","margin":"0 0 40rpx","borderRadius":"16rpx","background":"#fff","width":"48%","height":"auto"}' @click="recommendDetail(item.id)">
						<image :style='{"width":"100%","objectFit":"cover","borderRadius":"16rpx 16rpx 0 0","float":"right","display":"block","height":"320rpx"}' :src="item[recommendPicture]?(baseUrl + item[recommendPicture].split(',')[0]):''"></image>
						<view :style='{"padding":"0 12rpx","margin":"0","overflow":"hidden","whiteSpace":"nowrap","color":"#333","width":"100%","lineHeight":"48rpx","fontSize":"28rpx","textOverflow":"ellipsis"}'>{{item[recommendTitle]}}</view>
						<view :style='{"width":"100%","padding":"0 12rpx","lineHeight":"48rpx","fontSize":"26rpx","color":"#999","textAlign":"right"}'>{{item.addtime}}</view>
					</view>
				</view>
			</view>
			<view style="width: 100%;height: 80px"></view>
		</view>
		<uni-popup class="popup-content" ref="passwordPopup" type="bottom">
			<view class="passwordForm">
				<view class="passwordInput">
					<input type="password" v-model="passwordForm.mima" placeholder="原密码" />
				</view>
				<view class="passwordInput">
					<input type="password" v-model="passwordForm.newmima" placeholder="新密码" />
				</view>
				<view class="passwordInput">
					<input type="password" v-model="passwordForm.newmima1" placeholder="确认密码" />
				</view>
				<view class="passwordBtnView">
					<button class="passwordBtn" @click="updatePassword">更新</button>
				</view>
			</view>
		</uni-popup>
	</view>
</template>
<script>
	import menu from '@/utils/menu'
	export default {
		data() {
			return {
				isH5Plus: true,
				user: {},
				tableName:'',
				role: '',
				menuList: [],
				iconArr: [
				  'cuIcon-same',
				  'cuIcon-deliver',
				  'cuIcon-evaluate',
				  'cuIcon-shop',
				  'cuIcon-ticket',
				  'cuIcon-cascades',
				  'cuIcon-discover',
				  'cuIcon-question',
				  'cuIcon-pic',
				  'cuIcon-filter',
				  'cuIcon-footprint',
				  'cuIcon-pulldown',
				  'cuIcon-pullup',
				  'cuIcon-moreandroid',
				  'cuIcon-refund',
				  'cuIcon-qrcode',
				  'cuIcon-remind',
				  'cuIcon-profile',
				  'cuIcon-home',
				  'cuIcon-message',
				  'cuIcon-link',
				  'cuIcon-lock',
				  'cuIcon-unlock',
				  'cuIcon-vip',
				  'cuIcon-weibo',
				  'cuIcon-activity',
				  'cuIcon-friendadd',
				  'cuIcon-friendfamous',
				  'cuIcon-friend',
				  'cuIcon-goods',
				  'cuIcon-selection'
				],
				recommendList: [],
				recommendTable: '',
				recommendTitle: '',
				recommendPicture: '',
				passwordForm: {
					mima: '',
					newmima: '',
					newmima1: '',
				},
			};
		},
		computed: {
			baseUrl() {
				return this.$base.url;
			},
		},
		async onLoad(){
			let menus = menu.list();
			this.menuList = menus;
		},
		async onShow(){
            uni.removeStorageSync("useridTag");
			this.role = uni.getStorageSync("appRole");
			await this.getSession()
			this.getThumbsup()
			this.getStoreup()
			this.tableName = uni.getStorageSync("nowTable");
			let menus = menu.list();
			this.menuList = menus;
			this.getRecommendList()
		},
		methods: {
			async getSession(){
				let table = uni.getStorageSync("nowTable");
				let res = await this.$api.session(table);
				this.user = res.data;
				this.$forceUpdate()
			},
			async getThumbsup(){
				if(!this.user||!this.user.id){
					return false
				}
				let res = await this.$api.page('storeup',{userid: this.user.id,type: 21})
				this.user.thumbsnum = Number(res.data.total)
				this.$forceUpdate()
			},
			async getStoreup(){
				if(!this.user||!this.user.id){
					return false
				}
				let res = await this.$api.page('storeup',{userid: this.user.id,type: 1})
				this.user.storenum = Number(res.data.total)
				this.$forceUpdate()
			},
			loginClick(){
				uni.navigateTo({
					url: '../login/login'
				});
			},
			onPageTap(url) {
                uni.setStorageSync("useridTag",1);
				uni.navigateTo({
					url: url,
					fail: function() {
						uni.switchTab({
							url: url
						});
					}
				});
			},
			async getRecommendList(){
				let params = {
					page: 1,
					limit: 4
				}
				let res;
				if(uni.getStorageSync("appUserid")) {
					res = await this.$api.recommend2('meishicaipin', params);
				} else {
					res = await this.$api.recommend('meishicaipin', params);
				}
				this.recommendList = res.data.list
				this.recommendTable = 'meishicaipin'
				this.recommendTitle = 'caipinmingcheng'
				this.recommendPicture = 'tupian'
				this.$forceUpdate()
			},
			recommendDetail(id) {
				uni.navigateTo({
					url: `../${this.recommendTable}/detail?id=${id}`,
					fail: function() {
						uni.switchTab({
							url: `../${this.recommendTable}/detail?id=${id}`
						});
					}
				});
			},
			passwordShow() {
				this.passwordForm = {
					mima: '',
					newmima: '',
					newmima1: '',
				}
				this.$forceUpdate()
				this.$refs.passwordPopup.open()
			},
			async updatePassword() {
				if (this.passwordForm.mima == ''){
					this.$utils.msg('原密码不能为空')
					return false
				}
				if (this.passwordForm.newmima == ''){
					this.$utils.msg('新密码不能为空')
					return false
				}
				if (this.passwordForm.newmima1 == ''){
					this.$utils.msg('确认密码不能为空')
					return false
				}
				let password = ''
				if (this.user.mima) {
					password = this.user.mima;
				} else if (this.user.password) {
					password = this.user.password;
				}
				let newpassword = this.passwordForm.mima
				let res = await this.$api.encrypt('md5',this.passwordForm.mima)
				newpassword = res.data
				if(password != newpassword){
					this.$utils.msg('原密码不正确')
					return false
				}
				if (this.passwordForm.newmima != this.passwordForm.newmima1){
					this.$utils.msg('两次密码不一致')
					return false
				}
				if (this.tableName == 'yonghu') {
				}
				this.user.password = this.passwordForm.newmima
				this.user.mima = this.passwordForm.newmima
				await this.$api.update(this.tableName,this.user)
				this.$utils.msg('修改密码成功,下次登录系统生效')
				this.$refs.passwordPopup.close()
				this.getSession()
			},
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		height: calc(100vh - 94px);
		box-sizing: border-box;
	}
	.passwordForm {
		width: 100%;
		padding: 10px 20px 60px;
		background: #fff;
	
		.passwordInput {
			background: #eee;
			margin: 0 0 10px;
			padding: 0 10px;
	
			input {
				height: 36px;
				line-height: 36px;
				font-size: 14px;
			}
		}
	
		.passwordBtnView {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			padding: 10px 0;
	
			.passwordBtn {
				padding: 0 20px;
				width: auto;
				height: 20px;
				line-height: 20px;
				font-size: 14px;
				color: #fff;
				background: #007aff;
				border: none;
				border-radius: 5px;
	
			}
		}
	}
</style>
