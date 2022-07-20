<template>
    <div v-show='showFlag' class="fooditem">
        <div class='top'>
            <div>
    <div class='img'> <img :src="food.image" alt="" width="390px" height="390px"></div>
          <div class='back' @click="back"> <img src="./back.png"> </div>
            </div>
           
    <div class='name'> {{food.name}}</div>
    <div>  <cardCon :food="food" class='cardCon'  v-show="food.count>0"></cardCon></div>
    <div  class='gouwu' @click='addFirst' v-show="!food.count || food.count === 0">加入购物车</div>
    <div class='itemsell'>月售{{food.sellCount}}份&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        好评率{{food.rating}}%
         </div>
         <div class='price'> ￥{{food.price}}</div>
        </div>
        <split></split>
        <div v-show="food.info" class='mid'>
            <h4>商品信息</h4>
           <p class='info'> {{food.info}}</p>
        </div>
        <split></split>
        <div>
            <h4 class='itemtitle'>商品评价</h4>
            <rateselect :ratings="food.ratings" :only-content='onlyContent' :select-type="selectType" @increment="incrementTotal" class='rateside'></rateselect>
        </div>
        <div class='rateitem'>
          <ul v-show="food.ratings && food.ratings.length">
              <li v-for="(rating,index) in food.ratings" :key="index">
                   <div id='avatar'><img :src="rating.avatar"></div>
        <div id='content'>
        <div id='conup'>
            <p class='pname'>{{rating.username}}</p>
            <p class='time'>{{rating.rateTime}}</p>
        </div>
        <div id='clearo'></div>
        <div id='conmid'>
            <p>{{rating.text}}</p>
        </div>
        </div>
              </li>
          </ul>
        </div>
    </div>
</template>
<script>
import split from '../split/split.vue'
import rateselect from '../rateselect/rateselect.vue'
import cardCon from '../cardCon/cardCon.vue'
import Vue from 'vue'

export default{
data(){
    return{
  showFlag:false,
  infoshow:false,
  onlyContent:false,
  selectType:0,

    }
},
props:{
    food:{
       type: Object
},
},
// mounted(){
// scroll.addEventListener('scroll',function(){
//     var itemheight=document.getElementsByClassName('fooditem').clientHeight
//     var after=document.documentElement.scrollTop
//    console.log(itemheight,after)
//     if(after==itemheight){
//         console.log('低部')
//     }
// })

// },
components:{
    split,rateselect,cardCon
},
watch:{
heightList:function(){
    this.$nextTick(function(){
        var a=document.getElementsByClassName('rateitem')
        var height=a.offsetHeight
        console.log(height)
        return height
    })
}
},
created(){

    if(this.food.info && this.food.info!=null){
        this.infoshow=true
    }
    // let now=document.getElementsByClassName('fooditem')
    // console.log(now.height)
},
methods:{
    show(){
        this.showFlag=true;
    },
    back(){
        this.showFlag=false
    },
    addFirst(){
         Vue.set(this.food,'count',1);

    },

          incrementTotal(type, data) {
        this[type] = data;
        this.$nextTick(() => {
          this.scroll.refresh();
        });
      },
},

}
</script>
<style scoped>
.fooditem{
  position:absolute;
    left: 0;
    top: 0;
    bottom: 48px;
    z-index: 30;
    width: 100%;
    background: #fff;
}
.itemtitle,.rateside{
    padding-left: 24px;
    margin-top: 10px;
    background-color: #fff;
}
.back{
    margin-top:-380px;
    margin-left: 5px;
    width:33px;
    height: 30px;
    border-radius: 50%;
    background-color: rgb(160, 160, 158);
    opacity: 70%;
padding-top: 5px;

}
.rateitem>ul{
    background-color: #fff;
    margin-top: -17px;
}
.name,.sell{
    padding-top: 15px;
}
.name{
    margin-top:350px;
}
.pname{
    float: left;
    margin-left: 5px;
    padding-top: 6px;
}
.itemsell{
    color: rgb(146, 151, 151);
    font-size: 10px;
    margin-top: 20px;
    margin-left: 24px;
}
.price{
    color: red;
    padding-bottom: 15px;
     margin-left: 24px;
}
.info{
    color: rgb(146, 151, 151);
    font-size: 10px;
    margin-top: 10px;
}
.mid{
        margin-left: 24px;
}
.mid > h4{
    margin-top: 10px;
}
#avatar{
    float: left;
    margin-left: 10px;
}
#avatar>img{
    width: 25px;
    height: 25px;
    border-radius: 50%;
}
.time{
    float: right;
}
#clearo{
    clear: both;
}
.gouwu{
    width:90px;
    height: 30px;
    color: #fff;
    background-color: rgb(9, 143, 231);
    padding-left:10px;
    border-radius: 30px;
    float: right;
    line-height: 30px;
}
.cardCon{
float: right;
}
</style>
