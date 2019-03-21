<template>
<div>
   <draggable element="ul" :options="{scroll:false}"  v-model="list">
      <li class="list" v-for="(item,index) in list" :key="index">{{item.name}}</li>
    </draggable>
</div>

</template>

<script>
import draggable from 'vuedraggable'
export default {
	name:'',
	data(){
	 return {
 list:[
        {
          id: 1,
          name: 'a'
        },
        {
          id: 2,
          name: 'b'
        },
        {
          id: 3,
          name: 'c'
        },
        {
          id: 4,
          name: 'd'
        },
        {
          id: 5,
          name: 'e'
        },
        {
          id: 6,
          name: 'f'
        },
      ]

	 }
	},
mounted () {
},
	methods: {
	},
	components: {
		draggable
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
