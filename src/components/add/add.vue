<template>
	<div>
add
<button>123123</button>
	</div>
</template>

<script>
	
	export default{
	    data(){//原始数据
	        return{             
	        }
	    },
	    props: {//传递参数            
	    },
	    computed:{ //计算属性
	    },
	    components: {//注册模块               
	    },
	    created(){//请求模块  比methods 快        
	    },
	    mounted() {/*
	    	let that=this
			new Promise(function (resolve, reject) {
				return that.$axios({method: 'get',url: '/api/aaa'}).then((res)=>{
					if(res.data.data==1){
						resolve(123)
					}else{
						reject("第1个接口异常")//此处没有问题
					}
				})
			}).then((id)=>{
				return that.$axios({method: 'get',url: '/api/aaa1?a='+id}).then((res)=>{
					if(res.data.data==62){
						return Promise.resolve(456)
					}else{
//						return reject("第2个接口异常")
						return Promise.reject('第2个接口异常');
						//reject("第2个接口异常")// 报错 ReferenceError: reject is not defined
					}
				})
			}).then((id)=>{
				console.log('拿到'+id)
				  that.$axios({method: 'get',url: '/api/aaa2'}).then((res)=>{

				})
			}).catch((error)=>{
				 //alert(error)
			})
			
			this.$axios.all([that.$axios({method: 'get',url: '/api/aaa'}), that.$axios({method: 'get',url: '/api/aaa1'})])
			.then((a)=>{
				console.log(a)
			})
	    */},
	    methods: {//方法
	    	aaa(){
	    		 return this.$axios({method: 'get',url: '/api/aaa'})
	    	},
	    	aaa1(){
	    		 this.$axios({method: 'get',url: '/api/aaa1'})
	    	}
	    }
	}
	
	
</script>

<style lang="less">
	
</style>