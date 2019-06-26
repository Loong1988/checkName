<template>
<div>
<x-header :left-options="{showBack: false}">八字</x-header>
  <group >
      <datetime v-model="minuteListValue" format="YYYY-MM-DD HH:mm" :minute-list="['00', '15', '30', '45']" @on-change="change" :title="titleName"></datetime>
    </group>
       <load-more tip="天干地支" :show-loading="false" background-color="#fbf9fe"></load-more>
       <x-table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Apple</td>
            <td>$1.25</td>
          </tr>
          <tr>
            <td>Banana</td>
            <td>$1.20</td>
          </tr>
        </tbody>
      </x-table>
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
  Toast,XTable, LoadMore
} from "vux";
import {inq} from './bazi'

export default {
	name:'',
	data(){
	 return {
     Custom:"",
      titleName:"选择生日",
      minuteListValue:"",
      res:{}
	 }
	},
mounted () {
},
	methods: {
    change(){
        let times = new Date(this.minuteListValue)
        y=1988,m=4,d=12,h=9
        let y=times.getFullYear()
        let m=times.getMonth()+1
        let d=times.getDate()
        let h =times.getHours()
        this.res = inq(y,m,d,h)
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
  Toast,Datetime,XTable, LoadMore
	}
}
</script>

<style lang='less' scoped>
.list{
	height: 50px;
	border: 1px solid;
	margin: 5px;                  
}
</style>
