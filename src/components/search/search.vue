<template>
	<div>
		<x-header :left-options="{showBack: false}">搜索</x-header>
		<search 
			@result-click="resultClick" 
			@on-change="getResult" 
			:results="results" 
			v-model.trim="value" 
			position="absolute" 
			auto-scroll-to-top top="46px" 
			@on-focus="onFocus" 
			@on-cancel="onCancel" 
			@on-submit="onSubmit" 
			ref="search">
		</search>


<!--    <div style="padding:15px;">
      <x-button
        @click.native="setFocus"
        type="primary">set focus</x-button>
    </div>-->
    
    
<!--    <group>
      <cell
        title="static position demo"
        is-link
        link="/component/search-static"></cell>
    </group>-->
	
	</div>
</template>

<script>
	import { XHeader, Search , Group, Cell, XButton } from 'vux'
	import {data} from "static2/json/data.js"
	import PY from "@/core/pinyin.js"
	let pinyin = new PY()
	
	//import 
	export default {
		data() { //原始数据
			return {
				results: [],
      			value: '',
      			list:data.list
			}
		},
		props: { //传递参数            
		},
		computed: { //计算属性
		},
		components: { //注册模块
			XHeader,
			Search,Group, Cell, XButton
		},
		created() { //请求模块  比methods 快        
		},
		mounted() { //比created慢  el 加载完毕
			
		},
		methods: { //方法
			setFocus() {
					this.$refs.search.setFocus()
				},
				resultClick(item) {
					console.log(111)
					window.alert('you click the result item: ' + JSON.stringify(item))
				},
				getResult(val) {
					console.log('on-change', val)
					if(!val.trim()){
						this.results = []
						return
					}
					let n=this.nameList(val.substr(1))
					if(n){
						this.results = [{
					      title: `已经重名--${n}`,
					      other: 1
					    }]
					}else{
						this.results = [{
					      title: `恭喜!-家族内没有重名`,
					      other: 1
					    }]
					}
				},
				onSubmit() {
					this.$refs.search.setBlur()
					this.$vux.toast.show({
						type: 'text',
						position: 'top',
						text: 'on submit'
					})
				},
				onFocus() {
					console.log('on focus')
				},
				onCancel() {
					console.log('on cancel')
				},
				nameList(n) {
					
					let names = n 
					if(!names){
						return
					}
					let nameArr=names.split("")	
//					console.log(nameArr)
					let allName = []
					this.list.forEach((item,index)=>{
//						console.log(item.listDital)
						item.listDital.forEach((item2,index2)=>{
							let py = item2.name
							allName.push(py)
							if(item2.mate){
								let py2 = item2.mate.name
								allName.push(py2)
							}
						})
					})
					console.log(allName)
					
					
					for(let oneName of allName){
						let nameArrMore = oneName.split("")	
						nameArrMore.shift()
//						console.log(nameArrMore)
						for(let one of nameArr){
							for(let two of nameArrMore){
								//pinyin.ConvertPinyin()
								let onePY = pinyin.ConvertPinyin(one)
								let twoPY = pinyin.ConvertPinyin(two)
								if(onePY==twoPY){
									return oneName
								}
							}
						}
					}
					
					return false
				}
		}
	}
	
	
function getResult (val) {
  let rs = []
  for (let i = 0; i < 20; i++) {
    rs.push({
      title: `${val} result: ${i + 1} `,
      other: i
    })
  }
  return rs
}


</script>

<style lang="less">
.weui-search-bar .weui-search-bar__label{
	position: absolute;
    top: 4px;
}
</style>