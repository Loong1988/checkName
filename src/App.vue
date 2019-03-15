<template>
	<div id="app">
		 <!--<x-header :left-options="{showBack: false}">姓名检测</x-header>-->
		 <router-view> </router-view>
		<tabbar>
			<tabbar-item selected :link="{path:'/search'}">
				<img slot="icon" src="../static/img/ship.jpg">
				<span slot="label">检测</span>
			</tabbar-item>
			<tabbar-item show-dot :link="{path:'/family'}" >
				<img slot="icon" src="../static/img/ship.jpg">
				<span slot="label">族谱</span>
			</tabbar-item>
			<tabbar-item  :link="{path:'/add'}">
				<img slot="icon" src="../static/img/ship.jpg">
				<span slot="label">添加</span>
			</tabbar-item>
			<tabbar-item badge="2">
				<img slot="icon" src="../static/img/ship.jpg">
				<span slot="label">News</span>
			</tabbar-item>
		</tabbar>
	</div>
</template>
<script>
	import { Tabbar, TabbarItem,XHeader  } from 'vux'

	export default {
		name: 'App',
		data() {
			return {}
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
</style>