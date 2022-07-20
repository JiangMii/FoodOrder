<template>
    <div>
       <div class='side'>
           <ul>
               <li v-for="(item,index) in goods" :key="index" class='li' @click="selectMenu(index)">
                   <p>{{item.name}}</p>
               </li>
           </ul>
       </div>
       <div class='right'>
               <ul>
                   <li v-for="(item,index) in goods" :key="index" class='ditem'>
                       <p class='classitem'>{{item.name}}</p>
                         <ul>
                               <li v-for="(food,index) in item.foods" :key="index" class='food' @click="selectfood(food)">
                                   <div class='pic'><img  :src="food.icon" width="50px" height="40px" ></div>
                                   <div class='word'>
                                       <p class='foodname'>{{food.name}}</p>
                                       <div class='cardCon'><card-con :food='food'></card-con></div>
                                       <p class='foodcount'>月售{{food.sellCount}}&nbsp;&nbsp;&nbsp;好评{{food.rating}}</p>
                                       <p class='foodprice'>￥{{food.price}}</p>
                                   </div>
                               </li>
                           </ul>
                     
                   </li>
               </ul>
           
       </div>
    <fooditem :food='selectFood' ref='fooditem'></fooditem>
    <shop :selectFoods="selectFoods"></shop>
    </div>
</template>
<script>
import data from '../../common/data.json'
import fooditem from '../fooditem/fooditem.vue'
import cardCon from '../cardCon/cardCon.vue'
import Vue from 'vue'
import shop from '../shop/shop.vue'
export default{
    data(){
        return{
          goods:[],
          selectFood:{},
          food:{},
        }
    },
    components: {
      fooditem,cardCon,shop
    },
    created(){
     this.goods=data.goods
    },
    computed:{
       selectFoods(){
        let foods=[];
        this.goods.forEach((good)=>{
            good.foods.forEach((food)=>{
                if(food.count){
                    foods.push(food);
                }
            })
        })
        return foods;
    }
    },
    methods:{
        selectfood(food){
            this.selectFood=food
            this.$refs.fooditem.show();
      
        },
            addFirst(){
         Vue.set(this.food,'count',1);
    },
   

    selectMenu(index){
        let foods=document.getElementsByClassName('ditem')
        var res=0;
        for(let i=0;i<index;i++){
            let now=foods[i].clientHeight
            res=res+now;
            }
            console.log(res)
            document.documentElement.scrollTop=res;
    }
   },
   
}
</script>
<style>
.side{
        position :fixed;
       /* float: left;
       flex :0 0 80px; */
     width: 80px;
     height: 80%;
     background-color: rgb(243, 237, 237);
     margin-top: 170px;
     top:0;
     left: 0;
}
.side>ul{
    margin-top:0;
}
.li{
    border-bottom: 1px solid rgb(201, 196, 196);
    margin-top:0px;
    margin-bottom: 0px;
    padding:6px 5px;
    display: table;
    font-size: 12px;
}
.gouwu{
    width:90px;
    height: 30px;
    color: #fff;
    background-color: rgb(9, 143, 231);
    border-radius: 30px;
    margin-right: 0px;
    float: right;
}
.pic{
    float: left;
}
.foodcount{
    color: rgb(182, 179, 179);
    margin-top: 0px;
    font-size: 15px;
}
.foodprice{
    color: rgb(233, 8, 8);
    margin-top: 0px;
    margin-bottom: 5px;
}
.foodname,.foodcount{
    margin-bottom: 5px;
}
.right{
    margin-left: 72px;
  padding-top: 164px;
  padding-left:0px;
  padding-right:0px;
}
.ditem{
    padding-top: 0px;
    padding-bottom: 0px;
      padding-right:0px;
}
.right > ul{
    margin-top: 0px;
    padding-top:0px;
    padding-left: 0px;
}
.classitem{
    width: 100%;
    height: 30px;
    background-color: rgb(240, 232, 232);
 margin-top:0px;
    margin-bottom: 0px; 
    padding-left: 0px;


}
.foodname{
    margin-top: 0px;
    color: black;
}
.word{
    margin-left: 60px;
}
.food{
    padding-top:15px;
}
.cardCon{
    float: right;
}
</style>
