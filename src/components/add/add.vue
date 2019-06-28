<template>
  <div class="add">
    <x-header :left-options="{showBack: false}">八字</x-header>
    <group>
      <datetime
        v-model="minuteListValue"
        format="YYYY-MM-DD HH:mm"
        :minute-list="['00', '15', '30', '45']"
        @on-change="change"
        :title="titleName"
      ></datetime>
    </group>
    <div class="describe" v-if="!minuteListValue">
      <p>生辰八字，简称八字，是指一个人出生时的干支历日期；年月日时共四柱干支，每柱两字，合共八个字。生辰八字在中国民俗信仰中占有重要地位，古代中国道家、星相家据此推算人的命运的好坏。</p>
      <p>八字预测术在实践中不断发展，从李虚中的三柱、到徐子平的四柱，到人体生物节律学传授的四柱太阳律月亮律，每一个阶梯的递进，都包含着历代学者与社会实践活动者的辛勤付出。</p>
      
      
    </div>
    <div v-if="minuteListValue">
      <load-more tip="八字五行" :show-loading="false" background-color="#fbf9fe"></load-more>
      <table class="table">
        <tr>
          <td>农历：</td>
          <td>{{res.nongli}}</td>
        </tr>
        <tr>
          <td>生肖：</td>
          <td>{{res.shengxiao}}</td>
        </tr>
        <tr>
          <td>春节：</td>
          <td>{{res.chunjie}}</td>
        </tr>
        <tr>
          <td>节前：</td>
          <td>{{res.jieqian}}</td>
        </tr>
        <tr>
          <td>节后：</td>
          <td>{{res.jiehou}}</td>
        </tr>
        <tr>
          <td>八字：</td>
          <td>{{res.bazi}}</td>
        </tr>
        <tr>
          <td>五行：</td>
          <td>{{res.wuxing}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import {
  XHeader,
  XButton,
  Popup,
  Group,
  Datetime,
  TransferDom,
  XInput,
  Checker,
  CheckerItem,
  InlineXSwitch,
  Toast,
  XTable,
  LoadMore
} from "vux";
import { inq } from "./bazi";

export default {
  name: "",
  data() {
    return {
      Custom: "",
      titleName: "选择生日",
      minuteListValue: "",
      res: {}
    };
  },
  mounted() {},
  methods: {
    change() {
      let times = new Date(this.minuteListValue);
      (y = 1988), (m = 4), (d = 12), (h = 9);
      let y = times.getFullYear();
      let m = times.getMonth() + 1;
      let d = times.getDate();
      let h = times.getHours();
      this.res = inq(y, m, d, h);
    }
  },
  components: {
    XHeader,
    XButton,
    Popup,
    Group,
    TransferDom,
    XInput,
    Checker,
    CheckerItem,
    InlineXSwitch,
    Toast,
    Datetime,
    XTable,
    LoadMore
  }
};
</script>

<style lang='less' scoped>
.add {
  .describe{
    padding: 10px;
    p{
      margin: 10px 0;
      text-align: left;
      text-indent: 20px;
      line-height: 20px;
      color: #aaaaaa;
    }
  }
  .list {
    height: 50px;
    border: 1px solid;
    margin: 5px;
  }
  .table {
    border: 1px solid #ddd;
    margin: auto;
    width: 90%;
    tr {
      margin: 15px;
      // padding: 5px;
      display: block;
    }
  }
}
</style>
