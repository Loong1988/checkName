<template>
	<div id="app">
		 <!--<x-header :left-options="{showBack: false}">姓名检测</x-header>-->
		 <router-view> </router-view>
		<tabbar>
			<tabbar-item selected :link="{path:'/search'}">
				<img slot="icon" src="../static/img/sreach.png">
				<span slot="label">检测</span>
			</tabbar-item>
			 <!-- show-dot -->
			<tabbar-item :link="{path:'/family'}" >
				<img slot="icon" src="../static/img/fam.png">
				<span slot="label">族谱</span>
			</tabbar-item>
			<tabbar-item  :link="{path:'/add'}">
				<img slot="icon" src="../static/img/bazi.png">
				<span slot="label">八字</span>
			</tabbar-item>
			<!-- <tabbar-item badge="2">
				<img slot="icon" src="../static/img/ship.jpg">
				<span slot="label">关于</span>
			</tabbar-item> -->
		</tabbar>
	</div>
</template>
<script>
	import { Tabbar, TabbarItem,XHeader  } from 'vux'

	export default {
		name: 'App',
		data() {
			return {
				red:'red'
			}
		},
		props: {},
		computed: {},
		components: {
			Tabbar,
			XHeader ,
			TabbarItem
		},
		created() {},
		mounted() {},
		methods: {}
	}
</script>

<style>
@import url('../src/common/css/reset.css');
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}
	html,body{
		width: 100%;
		margin: 0;
	}
	.weui-bar__item_on .weui-tabbar__label{
color: #1296db!important
	}
</style>