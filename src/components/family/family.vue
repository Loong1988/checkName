<template>
	<div>
		<x-header :left-options="{showBack: false}">族谱1</x-header>
		<button @click="clean()">clean</button>
		<div class="box">
			<div v-for='item in list' class="one">
					
					<div v-for='(item2,index) in item.listDital' 
						 class="two iconfont "
						 :class="{'icon-duigou':selected==item2.id}"
						 @click="tipTab(item2,item)">
									<span class="iconfont icon-nansheng">
										{{item2.name}}
										
									</span>
									<span v-if='item2.mate' class="iconfont icon-nvsheng">{{item2.mate.name}}</span>
					</div>
<!--				<div class="btns">
				    <x-button type="primary" @click.native='addMember(item)'>添加</x-button>
				    <x-button type="default" @click.native='subMember(item)'>删除</x-button>
				</div>-->
			</div>
			<div style="width: 90%;margin: auto;">
				<x-button type="primary"   @click.native="auditMember(1)">编辑</x-button>
				<div class="btns-bottom">
					<nav>
						<x-button type="primary" @click.native='auditMember(2)'>添加</x-button>
					</nav>
					<nav>
						<x-button type="default" @click.native='auditMember(3)'>删除</x-button>
					</nav>
				</div>
				<!--<x-button type="primary"   @click.native="addMember('')">添加</x-button>-->
			</div>
		</div>
		
	<div v-transfer-dom class="tk">
      <popup v-model="show8" position="left" width="100%" class='add-family'>
        <x-header @on-click-back='show8 = false' :left-options="{preventGoBack: true}" >增加成员</x-header>
        分支：{{nowTit}}
         <nav>
         	<x-input title="姓名：" placeholder="请输入姓名" v-model='filter.name' novalidate :icon-type="iconType" :show-clear="true"  placeholder-align="right"></x-input>
         	
         </nav>
         
         <nav class="filter-add">
         	
         	性别：
	         <checker v-model="filter.sex" default-item-class="demo1-item" selected-item-class="demo1-item-selected">
				      <checker-item value="1">男</checker-item>
				      <checker-item value="2">女</checker-item>
		      </checker>
		      
         	
         </nav>
	      <nav class="filter-add" style=" justify-content: space-between;">
			是否有配偶		      	
	      	<inline-x-switch v-model="filter.isMary"></inline-x-switch>
	      </nav>
	      
	      <nav  class="" v-show='filter.isMary'>
         	<x-input title="配偶姓名：" placeholder="请输入配偶姓名" v-model='filter.name2' novalidate :icon-type="iconType" :show-clear="true" placeholder-align="right"></x-input>
	      </nav>
	      
	      
	      
	      
         <div class="foot-btn">
	         	<x-button type="primary" @click.native='save()'>保存</x-button>
         </div>
      </popup>
    </div>
		  <toast v-model="showPositionValue" type="text" :time="1200" is-show-mask text="保存成功" :position="'middle'">123</toast>
	</div>
</template>

<script>
import { XHeader ,XButton  ,Popup, 
	Group,TransferDom,XInput,Checker, 
	CheckerItem,InlineXSwitch,Toast  } from 'vux'
import {data} from "static2/json/data.js"
export default{
    data(){//原始数据
        return{    
        	list:[],
        	 show8: false,
        	 iconType: '',
        	 filter:{
        	 	name:'',
        	 	name2:'',
        	 	sex:'1',
        	 	isMary:false
        	 },
        	 auditType:'',
        	 auditTit:'',
        	 auditItem:{},
        	 nowTit:'',
        	 showPositionValue:false,
        	 selected:""
        }
    },
    props: {//传递参数            
    },
    computed:{ //计算属性
    },
    directives: {
    	TransferDom
	},
    components: {//注册模块
    	XHeader,XButton, Popup, Group,XInput,Checker, 
    	CheckerItem,InlineXSwitch,Toast
    },
    created(){//请求模块  比methods 快     
    		let list = localStorage.getItem('list')
    		if(list){
    			console.log(list)
    		}else{
    			localStorage.setItem('list',JSON.stringify(data.list))
    		}
    		//this.list= localStorage.getItem('list')
    		let loc = localStorage.getItem('list')
    		console.log(JSON.parse(loc))
    		this.list = JSON.parse(loc)
    },
    mounted() {//比created慢  el 加载完毕
//  	console.log(this.list)
    },
    methods: {//方法
    	addMember(item){
			this.nowTit = item.tit
    		this.show8=true
    		this.filter = {
        	 	name:'',
        	 	name2:'',
        	 	sex:'1',
        	 	isMary:false
        	 }
    	},
    	subMember(){
    		
    	},
    	auditMember(type){
    		this.auditType=type
    		if(type==1){//编辑
	    		this.show8=true
	    		let item = this.auditItem 
	    		this.filter = {
	        	 	name:item.name,
	        	 	sex:item.sex,
	        	 }
	    		if(item.mate){
	    			this.filter.isMary=true
	    			this.filter.name2=item.mate.name
	    		}
    		}else if(type==2){//添加
    			
    		}else if(type==3){//删除
    			
    		}
    		
    	},
    	onBlur(){
    		
    	},
    	tipTab(item,item2){
//  		console.log(item2)
    		this.auditItem = item
    		this.auditTit = item2.tit
    		console.log(item)
    		if(item.id == this.selected){
    			this.selected = ''
    		}else{
    			this.selected = item.id
    		}
    		
    	},
    	clean(){
    		localStorage.removeItem('list')
    	},
    	save(){
    		let addObj={
				name: this.filter.name,
				"sex": this.filter.sex,
				"starTime": "",
				"endTime": "",
				"area": "",
    		}
    		if(this.filter.isMary){
    			addObj.mate={
    				name: this.filter.name2,
					"sex": this.filter.sex==1?2:1,
					"starTime": "",
					"endTime": "",
					"area": "",
    			}
    		}
    		
    		if(this.auditType==1){
    			addObj.id = this.auditItem.id
    			this.list[this.auditTit].forEach((item,index)=>{
    				if(item.id==addObj.id){
    					item=addObj
    				}
    			})
    		}
    		localStorage.setItem('list',JSON.stringify(data.list))
    		this.show8=false
    		
/*    		if(this.nowTit){//添加
     			console.log(1111)
    		
    			this.list.forEach((item,index)=>{
    				if(item.tit==this.nowTit){
    					item.listDital.push(addObj)
    					
    				}
    			})

    		}else{
    			console.log(222)
    			let last = this.list.length-1
    			let tit = this.list[last].tit+1
    			let lastObj={
    				"tit": tit,
				   "listDital": [addObj]
    			}
    			this.list.push(lastObj)
    		}
    		this.showPositionValue = true
    		localStorage.setItem('list',JSON.stringify(data.list))
    		this.show8=false*/
    		//新建子代
    	}
    }
}
	
	
</script>

<style lang="less" scoped="">
@import url("//at.alicdn.com/t/font_816014_n52lm48kl5a.css");
	.box{
		.one{
			border: 1px solid #DDDDDD;
			box-shadow: 2px 2px 2px #D0CDD1;
			margin: 10px;
			padding: 10px;
			background: #f1f1f1;
			overflow: hidden;
			position: relative;
		}
		.two-box{
		}
		.two{
			border: 1px solid #DDDDDD;
			background: #fff;
			width: 90%;
			height: 38px;
			border-radius: 6px;
			line-height: 38px;
			box-shadow: 2px 2px 2px #D0CDD1;
			margin:  10px;
			float: left;
			
		}
		.btns{
			/*float: right;*/
			height: 100%;
			width: 20%;
			position: absolute;
			top: 10px;
			right: 10px;
		}
	}
	
.vux-popup-dialog{
	background: rgb(251,249,254);
}
.weui-cell{
	background: #fff;
}
.demo1-item {
  border: 1px solid #ececec;
  padding: 5px 15px;
}
.demo1-item-selected {
  border: 1px solid green;
}
.add-family{
	nav{
		margin-bottom: 10px;
		background: #fff;
		padding: 10px 0
	}
	.filter-add{
		display: flex;
   		 align-items: center;
   		 padding-left: 15px;
   		 
	}
}
.foot-btn{
	width: 90%;
	margin: auto;
}
.btns{
	.weui-btn{
		font-size: 14px;
	}
}
.icon-nvsheng::before{
	color: #d95e96;
	margin-right: 5px;
}
.icon-nansheng::before{
	color: #0980fe;
}
.icon-duigou:before {
    content: "\e632";
    position: absolute;
    left: 9%;
    color: #b3acac;
}
.btns-bottom{
	    display: flex;
	    margin-top: 10px;
	    justify-content: space-between;
	    &>nav{
	    	/*flex: 1;*/
	    	width: 48%;
	    }
}
</style>