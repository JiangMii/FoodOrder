<template>
<div class='sell'>
<div class='up'>
    <div class='upl'>
        <h4>{{name}}</h4>
        <star :score="3.5" class='star'></star>
        <p class='amount'>月售{{amount}}单</p>
    </div>
    <div class='upr1' v-show="like">
        <img src="./before.png" @click="likeit"><p class='likep'>收藏</p>
    </div>
    <div class='upr2' v-show="!like" @click="likeit">
        <img src="./after.png"><p class='likep'>已收藏</p>
    </div>
</div>

    <div class='middle'>
<ul class='jies'>
     <li class='jieitem'><p>起送价</p><span>{{price}}</span>元</li> 
     <li class='jieitem'><p>商家配送</p><span>{{send}}</span>元</li>
     <li class='jieitem'><p>平均配送时间</p><span>{{amount}}</span>分钟</li>
</ul>
    </div>
    <div class='gongg'>
<split></split>
<p>公告与活动</p>
<p>本店上选优良食材，无污染、无添加，放心进行使用</p>
<ul class='wu'>
    <li v-for="(item,key) in seller.supports" :key="key" class='wuo'> 
        <div :class="classMap[item.type]"></div><p class='wup'>{{item.description}}</p>
    </li>
</ul>
</div>

<div>
    <p>商家实景</p>
    <span  class='pic' v-for="(item,key) in seller.pics" :key='key'>
    <img :src="item" width="120px" height="120px">
    </span>
</div>
<split></split>
<div class='info'>
<p>商家信息</p>
<ul>
    <li class='infop'  v-for="item in seller.infos" :key='item'>   {{item}}</li>
</ul>
</div>
    </div>
</template>
<script>
import Star from '../star/star.vue'
import Split from '../split/split.vue'
import data from '../../common/data.json'
export default{
    data(){
        return{
            name:'香粥坊',
            amount:'90',
            like:true,
            price:'20',
            send:'4',
            seller:{},
            classMap:['one','two','three','four','five']
        }
    },
  created(){
    this.seller=data.seller;
  },
    components: {
        Star,Split
    },
    methods:{
        likeit(){
            this.like=!this.like
        }
    }
}
</script>
<style>
.sell{
   position: absolute; 
    width :100%; 
    margin-top: 170px;
}
.upl{
    float: left;
    margin-left: 8px;
}
div[class^=upr]{
    float: right;
    margin-top: 6px;
}
.likep{
    margin-top:3px;
    margin-right: 10px;
    padding-right: 10px;
}
h4{
    margin-top:5px;
    margin-bottom: 5px;
}
.star{
display: inline-block;
margin-right: 8px;
}
.amount{
    display: inline-block;
        font-size :10px;
        color :rgb(77, 85, 93);
}
.jies{
  
    display :flex;
    width: 100%;
}
.jies:first-child{
    padding-left: 0px;
}
.jieitem{
  flex:1;
  list-style: none;
   text-align :center;
    border-right :1px solid rgba(7, 17, 27, 0.1);
}
.jieitem > span{
    font-size:24px;
    color :rgb(7, 17, 27)
}
.jieitem > p{
      margin-bottom: 4px;
          font-size: 10px;
          color :rgb(147, 153, 149); 
}
.gongg>p{
              font-size: 15px;
}
.wu{
    padding-left: 15px;
}
.wuo > div{
    width: 18px;
    height: 18px;
    float: left;
    margin-right: 6px;
}
.wu > li{
    list-style: none;
    border-top:1px solid rgba(7, 17, 27, 0.1);
    height: 30px;
    padding-top: 10px;
}
.wup{
    margin-top:0px;
}
.pic > img{
    margin-left: 5px;
}
.info > ul{
    padding-left: 10px;
}
.infop{
    list-style: none;
    height :35px;
    padding-top: 10px;
    border-top:1px solid rgba(7, 17, 27, 0.1);
}
.one{
    background-image: url('./on.png');
    background-size: cover;
}
.two{
      background-image: url('./to.png');
        background-size: cover;
}
.three{
      background-image: url('./th.png');
        background-size: cover;
}
.four{
      background-image: url('./fo.png');
        background-size: cover;
}
.five{
      background-image: url('./fi.png');
        background-size: cover;
}
</style>
