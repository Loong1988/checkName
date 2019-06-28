<template>
  <div>
    <x-header :left-options="{showBack: false}">族谱</x-header>
    <!-- <button @click="clean()">clean</button> -->
    <div class="box">
      <draggable element="ul" :options="{scroll:false}" v-model="list" @change="draChange">
        <div v-for="(item,$index) in list" class="one" :key="$index">
			<div class="add-person" @click.stop="addPerson($index)">+</div>
          <div
            v-for="(item2,$index2) in item.listDital"
            :key="$index2"
            class="two iconfont"
            :class="{'icon-duigou':selected==item2.id}"
            @click="tipTab(item2,item)"
          >
            <span class="iconfont  name" :class="item2.sex==1?'icon-nansheng':'icon-nvsheng'">{{item2.name}}</span>
			
            <span v-if="item2.mate" class="iconfont name" :class="item2.mate.sex==1?'icon-nansheng':'icon-nvsheng'">{{item2.mate.name}}</span>
          </div>
        </div>
      </draggable>

      <div style="width: 90%;margin: auto;">
        <x-button type="primary" :disabled="selected==''" @click.native="auditMember(1)">编辑</x-button>
        <div class="btns-bottom">
          <nav>
            <x-button type="primary" @click.native="auditMember(2)">添加后裔</x-button>
          </nav>
          <nav>
            <x-button type="default" :disabled="selected==''" @click.native="delMember()">删除</x-button>
          </nav>
        </div>
        <!--<x-button type="primary"   @click.native="addMember('')">添加</x-button>-->
      </div>
    </div>

    <div v-transfer-dom class="tk">
      <popup v-model="show8" position="left" width="100%" class="add-family">
        <x-header @on-click-back="cleanback()" :left-options="{preventGoBack: true}">增加成员</x-header>
        分支：{{nowTit}}
        <nav>
          <x-input
            title="姓名："
            placeholder="请输入姓名"
            v-model="filter.name"
            novalidate
            :icon-type="iconType"
            :show-clear="true"
            placeholder-align="right"
          ></x-input>
        </nav>

        <nav class="filter-add">
          性别：
          <checker
            v-model="filter.sex"
            default-item-class="demo1-item"
            selected-item-class="demo1-item-selected"
          >
            <checker-item value="1">男</checker-item>
            <checker-item value="2">女</checker-item>
          </checker>
        </nav>
        <nav class="filter-add" style=" justify-content: space-between;">
          是否有配偶
          <inline-x-switch v-model="filter.isMary"></inline-x-switch>
        </nav>

        <nav class v-show="filter.isMary">
          <x-input
            title="配偶姓名："
            placeholder="请输入配偶姓名"
            v-model="filter.name2"
            novalidate
            :icon-type="iconType"
            :show-clear="true"
            placeholder-align="right"
          ></x-input>
        </nav>

        <div class="foot-btn">
          <x-button type="primary" @click.native="save()">保存</x-button>
        </div>
      </popup>
    </div>
    <toast
      v-model="showPositionValue"
      type="text"
      :time="1200"
      is-show-mask
      text="保存成功"
      :position="'middle'"
    >123</toast>
  </div>
</template>

<script>
import {
  XHeader,
  XButton,
  Popup,
  Group,
  TransferDom,
  XInput,
  Checker,
  CheckerItem,
  InlineXSwitch,
  Toast
} from "vux";
import { data } from "static2/json/data.js";
import draggable from "vuedraggable";
export default {
  data() {
    //原始数据
    return {
      list: [],
      show8: false,
      iconType: "",
      filter: {
        name: "",
        name2: "",
        sex: "1",
        isMary: false
      },
      auditType: "",
      auditTit: "",
      auditItem: {},
      nowTit: "",
      showPositionValue: false,
      selected: "",
      oneAddIndex:0
    };
  },
  props: {
    //传递参数
  },
  computed: {
    //计算属性
  },
  directives: {
    TransferDom
  },
  components: {
    //注册模块
    XHeader,
    XButton,
    Popup,
    Group,
    XInput,
    Checker,
    CheckerItem,
    InlineXSwitch,
    Toast,
    draggable
  },
  created() {
    //请求模块  比methods 快
    let list = localStorage.getItem("list");
    if (list) {
      console.log(list);
    } else {
      localStorage.setItem("list", JSON.stringify(data.list));
    }
    let loc = localStorage.getItem("list");
    console.log(JSON.parse(loc));
	this.list = JSON.parse(loc);
    // 		this.list=[[{
    // 			area:"",
    // 			endTime:"",
    // 			id:"001",
    // 			mate:{
    // 				area:"",
    // 				endTime:"",
    // 				name:"付雪玲",
    // 				sex:"2",
    // 				starTime:"1952-09-28",
    // 			},
    // 			name:"曹留森",
    // 			sex:"1",
    // 			starTime:"1951-03-17",
    // }],[{
    // 			area:"",
    // 			endTime:"",
    // 			id:"002",
    // 			mate:{
    // 				area:"",
    // 				endTime:"",
    // 				name:"方英",
    // 				sex:"2",
    // 				starTime:"1952-09-28",

    // 			},
    // 			name:"曹建立",
    // 			sex:"1",
    // 			starTime:"1951-03-17",
    // },{
    // 			area:"",
    // 			endTime:"",
    // 			id:"003",
    // 			mate:{
    // 				area:"",
    // 				endTime:"",
    // 				name:"燕子",
    // 				sex:"2",
    // 				starTime:"1952-09-28",
    // 			},
    // 			name:"曹龙",
    // 			sex:"1",
    // 			starTime:"1951-03-17",
    // }]]
  },
  mounted() {
    //比created慢  el 加载完毕
    //  	console.log(this.list)
  },
  methods: {
    //方法
    addMember(item) {
      this.nowTit = item.tit;
      this.show8 = true;
      this.filter = {
        name: "",
        name2: "",
        sex: "1",
        isMary: false
      };
    },
    subMember() {},
    auditMember(type) {
      //1 编辑  2 添加  3 删除
      this.auditType = type;
      if (type == 1) {
        //编辑
        this.show8 = true;
        let item = this.auditItem;
        this.filter = {
          name: item.name,
          sex: item.sex
        };
        if (item.mate) {
          this.filter.isMary = true;
          this.filter.name2 = item.mate.name;
        }
      } else if (type == 2) {//添加
            // this.filter = {}
              this.show8 = true;
      } else if (type == 3) {
        //删除
      }
    },
    onBlur() {},
    clearFilter(){
      this.filter = {
        name: "",
        name2: "",
        sex: "1",
        isMary: false
      };
    },
    tipTab(item, item2) {
      //item 当前对象    //item2 当前兄弟对象
      console.log(item);
      console.log(item2);
      this.auditItem = item;
      this.auditTit = item2.tit;
      if (item.id == this.selected) {
        this.selected = "";
      } else {
        this.selected = item.id;
      }
    },
    clean() {
      localStorage.removeItem("list");
	},
	listJson(){
		localStorage.setItem("list", JSON.stringify(this.list));
	},
	addPerson(index){
    console.log(index);
    this.clearFilter()
    this.auditType = 5
    this.show8 = true;
    this.oneAddIndex = index
   

  },
	delMember(){
		// this.list.splice(3,1)
		let id = this.selected
		this.list.forEach((item,index)=>{
			item.listDital.forEach((item2,index2)=>{
					if(item2.id == id){
						item.listDital.splice(index2,1)
						if(item.listDital.length==0){
							this.list.splice(index,1)
						}
					}
			})
		})
      this.listJson()
	},
	cleanback(){
		this.show8 = false
		this.selected = ''
		this.auditItem={}
	},
	draChange(evt){
		this.listJson()
	},
    save() {
      let addObj = {
        name: this.filter.name,
        sex: this.filter.sex,
        starTime: "",
        endTime: "",
        area: ""
      };
      if (this.filter.isMary) {
        addObj.mate = {
          name: this.filter.name2,
          sex: this.filter.sex == 1 ? 2 : 1,
          starTime: "",
          endTime: "",
          area: ""
        };
      }

      if (this.auditType == 1) {
        addObj.id = this.auditItem.id;
        // this.list[this.auditTit].listDital.forEach((item, index) => {
        //   if (item.id == addObj.id) {
        //     item = addObj;
        //   }
		// });
		this.list.forEach((item,index)=>{
			item.listDital.forEach((item2,index2)=>{
					if(item2.id == this.selected){
						// item2 = addObj
						this.list[index].listDital[index2] = addObj
					}
			})
		})
		this.selected = ''
	  }
	  if(this.auditType == 2){
		  addObj.id = new Date().getTime()
		  let obj = {
			  listDital:[addObj],
			  tit:this.list.length
		  }
      console.log('add=======');
		  console.log(obj);
		  this.list.push(obj)
		  console.log(this.list);
		 
      
	  }
	  if(this.auditType == 5){
      addObj.id = new Date().getTime()
      console.log(addObj);
      console.log(this.oneAddIndex);
      console.log(this.list[this.oneAddIndex]);
      this.list[this.oneAddIndex].listDital.push(addObj)

	  }

      this.listJson()
      this.show8 = false;

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
};
</script>

<style lang="less" scoped="">
@import url("//at.alicdn.com/t/font_816014_n52lm48kl5a.css");

.box {
  &>ul{
    height: 55vh;
    overflow: scroll;
    margin-bottom: 10px;
  }
  .name {
    min-width: 75px;
    display: inline-block;
    text-align: left;
  }
  .add-person{
	  width: 30px;
	  height: 30px;
	  border: 1px solid;
	  float: right;
	  line-height: 30px;
  }
  .one {
    border: 1px solid #dddddd;
    box-shadow: 2px 2px 2px #d0cdd1;
    margin: 10px;
    padding: 10px;
    background: #f1f1f1;
    overflow: hidden;
    position: relative;
  }
  .two-box {
  }
  .two {
    border: 1px solid #dddddd;
    background: #fff;
    width: 80%;
    height: 38px;
    border-radius: 6px;
    line-height: 38px;
    box-shadow: 2px 2px 2px #d0cdd1;
    margin: 10px;
    float: left;
  }
  .btns {
    /*float: right;*/
    height: 100%;
    width: 20%;
    position: absolute;
    top: 10px;
    right: 10px;
  }
}

.vux-popup-dialog {
  background: rgb(251, 249, 254);
}
.weui-cell {
  background: #fff;
}
.demo1-item {
  border: 1px solid #ececec;
  padding: 5px 15px;
}
.demo1-item-selected {
  border: 1px solid green;
}
.add-family {
  nav {
    margin-bottom: 10px;
    background: #fff;
    padding: 10px 0;
  }
  .filter-add {
    display: flex;
    align-items: center;
    padding-left: 15px;
  }
}
.foot-btn {
  width: 90%;
  margin: auto;
}
.btns {
  .weui-btn {
    font-size: 14px;
  }
}
.icon-nvsheng::before {
  color: #d95e96;
  margin-right: 5px;
}
.icon-nansheng::before {
  color: #0980fe;
}
.icon-duigou:before {
  content: "\e632";
  position: absolute;
  left: 9%;
  color: #b3acac;
}
.btns-bottom {
  display: flex;
  margin-top: 10px;
  justify-content: space-between;
  & > nav {
    /*flex: 1;*/
    width: 48%;
  }
}
</style>