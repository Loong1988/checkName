<template>
  <div class="search">
    <x-header :left-options="{showBack: false}">搜索</x-header>
    <search
      @result-click="resultClick"
      @on-change="getResult"
      :results="results"
      v-model.trim="value"
      position="absolute"
      auto-scroll-to-top
      top="46px"
      @on-focus="onFocus"
      @on-cancel="onCancel"
      @on-submit="onSubmit"
      ref="search"
    ></search>
    <nav class="nav">
      <button-tab v-model="tabs">
        <button-tab-item @on-item-click="consoleIndex()">
          <span>帅气男孩名</span>
        </button-tab-item>
        <button-tab-item @on-item-click="consoleIndex()">
          <span>漂亮女孩名</span>
        </button-tab-item>
      </button-tab>
    </nav>
    <main class="main">
      <div v-for="(item,$index) in names.boy.hot" :key="$index" class="box">
        <p class="name">{{item.name}}</p>
        <p class="describe">{{item.describe}}</p>
      </div>
	  <nav>
		  <span v-for="(item,$index) in names.boy.list" :key="$index">{{item}}</span>
	  </nav>
    </main>
  </div>
</template>

<script>
import {
  XHeader,
  Search,
  Group,
  Cell,
  XButton,
  ButtonTab,
  ButtonTabItem
} from "vux";
import axios from "axios";
import { data } from "static2/json/data.js";
import PY from "@/core/pinyin.js";
import { names } from "../../common/datas/name";
let pinyin = new PY();
console.log(names);
//import
export default {
  data() {
    //原始数据
    return {
      results: [],
      value: "",
      list: data.list,
      names: names,
      tabs: 0,
      red: "#f75731"
    };
  },
  props: {
    //传递参数
  },
  computed: {
    //计算属性
  },
  components: {
    //注册模块
    XHeader,
    Search,
    Group,
    Cell,
    XButton,
    ButtonTab,
    ButtonTabItem
  },
  created() {
    //请求模块  比methods 快
    // axios.get('http://localhost:3000/users/test')
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
	//   });
	// let arr = this.names.boy.list.replace(/[\r\n]/g,"").replace(/\ +/g,"")
	// let a = arr.split('、')
	console.log(this.names.boy.list);
  },
  mounted() {
    //比created慢  el 加载完毕
    // console.log(111);
    // 		axios.get('http://127.0.0.1:3000/one'
    // 		).then(function(res){
    // 			console.log(res);//处理成功的函数 相当于success
    // 		}).catch(function(error){
    // 			console.log(error)//错误处理 相当于error
    // 		})
  },
  methods: {
    //方法
    consoleIndex() {
      console.log("click demo01", this.tabs);
    },
    setFocus() {
      this.$refs.search.setFocus();
    },
    resultClick(item) {
      console.log(111);
      window.alert("you click the result item: " + JSON.stringify(item));
    },
    getResult(val) {
      console.log("on-change", val);
      if (!val.trim()) {
        this.results = [];
        return;
      }
      let n = this.nameList(val.substr(1));
      if (n) {
        this.results = [
          {
            title: `已经重名--${n}`,
            other: 1
          }
        ];
      } else {
        this.results = [
          {
            title: `恭喜!-家族内没有重名`,
            other: 1
          }
        ];
      }
    },
    onSubmit() {
      this.$refs.search.setBlur();
      this.$vux.toast.show({
        type: "text",
        position: "top",
        text: "on submit"
      });
    },
    onFocus() {
      console.log("on focus");
    },
    onCancel() {
      console.log("on cancel");
    },
    nameList(n) {
      let names = n;
      if (!names) {
        return;
      }
      let nameArr = names.split("");
      //					console.log(nameArr)
      let allName = [];
      this.list.forEach((item, index) => {
        //						console.log(item.listDital)
        item.listDital.forEach((item2, index2) => {
          let py = item2.name;
          allName.push(py);
          if (item2.mate) {
            let py2 = item2.mate.name;
            allName.push(py2);
          }
        });
      });
      console.log(allName);

      for (let oneName of allName) {
        let nameArrMore = oneName.split("");
        nameArrMore.shift();
        //						console.log(nameArrMore)
        for (let one of nameArr) {
          for (let two of nameArrMore) {
            //pinyin.ConvertPinyin()
            let onePY = pinyin.ConvertPinyin(one);
            let twoPY = pinyin.ConvertPinyin(two);
            if (onePY == twoPY) {
              return oneName;
            }
          }
        }
      }

      return false;
    }
  }
};

function getResult(val) {
  let rs = [];
  for (let i = 0; i < 20; i++) {
    rs.push({
      title: `${val} result: ${i + 1} `,
      other: i
    });
  }
  return rs;
}
</script>

<style lang="less">
.search {
  .weui-search-bar .weui-search-bar__label {
    position: absolute;
    top: 4px;
  }
  .vux-button-group > a.vux-button-tab-item-first {
    text-decoration: none !important;
  }
  .vux-button-group > a.vux-button-group-current {
    text-decoration: none !important;
  }
  .vux-button-group > a.vux-button-tab-item-last {
    text-decoration: none !important;
  }
}
</style>
<style lang="less" scoped>
.search {
  .nav{
	  width: 90%;
	  margin: 20px auto 10px;
  }
  .main {
	padding: 10px;
	height: 70vh;
	overflow:scroll;
    .box {
      margin-bottom: 20px;
      text-align: left;
      .name {
        font-size: 26px;
        margin-bottom: 5px;
      }
      .describe {
        color: #aaa;
        border: 1px solid #ddd;
        padding: 2px;
        border-radius: 3px;
      }
    }
  }
}
</style>
