<template>
    <div>
        <div @click.stop.prevent='away()' class='jian' v-show="food.count>0">-</div>
        <p class='count' v-show="food.count>0">{{food.count}}</p>
        <div @click.stop.prevent='add()' class='jia' >+</div>
    </div>
</template>
<script>
import Vue from 'vue'
export default{
    props:{
        food:{
            type:Object
        },
    },
    methods:{
        away(){
        //           if (!event._constructed) {
        //   // 去掉自带click事件的点击
        //   return;
        // }
            this.food.count--;
            console.log(this.food.count)
        },
        add(){
        //        if (!event._constructed) {
        //   // 去掉自带click事件的点击
        //   return;
        // }
                 if (!this.food.count) {
          Vue.set(this.food, 'count', 1);
        } else {
               this.food.count++;
        }
             console.log(this.food.count)
        }
    },
    created(){
        console.log(this.food)
    }
}
</script>
<style scoped>
.jian,.jia{
    width: 20px;
    height:20px;
    border-radius: 10px;
   display: inline-block;
   font-size: 18px;
   font-weight: bold;
   text-align: center;
   line-height: 18px;
}
.jian{
   background-color: white;
  border:thin solid rgb(35, 139, 209);
    color:rgb(35, 139, 209) ;
}
.jia{
  background-color: rgb(35, 139, 209);
    color:white ;
}
.count{
    display: inline-block;
    margin-left: 8px;
    margin-right: 8px;
}
</style>
