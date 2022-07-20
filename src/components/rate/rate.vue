<template>
    <div class='rate'>
        <div class='up'>
            <div class='upleft'>
                <p class='scoreo'>{{seller.score}}</p>
                <p>综合评分</p>
                <p class='scoreb'>高于周边商家69.2%</p>
            </div>
            <div class='upright'>
                <div>服务态度<span class='service'>{{seller.serviceScore}}</span></div>
                 <div>商品评分<span class='food'>{{seller.foodScore}}</span></div>
                 <div>送达时间<span class='deliver'>{{seller.deliveryTime}}分钟</span></div>
            </div>
        </div>
<div class='clear'> </div>

    <split></split>
<rateselect :ratings='ratings' @increment="incrementTotal" :select-type="selectType" :only-content="onlyContent"></rateselect>
<div class='rates'>
<ul>
    <li v-for="(rating,key) in ratings" :key='key' v-show="needShow(rating.rateType,rating.text)">
         <div class='avatar'><img :src="rating.avatar"></div>
    <div class='content'>
        <div class='conup'>
            <p>{{rating.username}}</p>
            <p>{{rating.rateTime}}</p>
        </div>
        <div class='clearo'></div>
        <div class='conmid'>
            <p>{{rating.text}}</p>
        </div>
        <div class='condown' v-show="rating.recommend &&rating.recommend.length">
            <img src='./zan.png' class="icon" style="float:left">
            <p class='zanc' v-for="item in rating.recommend" :key="item">{{item}}</p>
        </div>
    </div>
    </li>
</ul>
</div>
    </div>
</template>
<script>
 import BScroll from 'better-scroll';
import data from '../../common/data.json';
import split from '../split/split.vue';
import rateselect from '../rateselect/rateselect.vue';
const ALL=2;
export default{
  components: { split ,rateselect},
    data(){
        return{
            seller:{},
            ratings:[],
            selectType:ALL,
            onlyContent:false
        }
    },
    created(){
        this.seller=data.seller
        this.ratings=data.ratings
             this.$nextTick(() => {
        console.log(this.$el);
        this.scroll = new BScroll(this.$el, {click: true});
      });
    },
    methods:{
        incrementTotal(type, data) {
        this[type] = data;
        this.$nextTick(() => {
          this.scroll.refresh();
        });
      },
        needShow(type,text){
            if(this.onlyContent && !text){
                return false
            }
            if(this.selectType===ALL){
                return true
            }else{
                return type===this.selectType
            }
        }
    }
}
</script>
<style>
/* .up{
       position: relative;
} */
.rate{
    padding-top:170px;
}
.upleft{
    width:40%;
    border-right: 1px solid gray;
    padding-right: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    float: left;
}
.upleft > p{
    text-align: center;
}
.scoreo{
    color:rgb(241, 162, 59);
    font-size: 25px;
    font-weight: bolder;
    margin-bottom: -3px;
    margin-top: 5px;
}
.scoreb{
    color: darkgray;
    margin-top:-10px;
}
.upright{
width: 55%;
}
.service, .food{
    color: rgb(241, 162, 59);
}
.deliver{
    color: gray;
}
.service, .food,.deliver{
    margin-left: 15px;
}
.upright > div{
    margin-top: 12px;
    margin-left: 15px;
}
.clear,.clearo{
    clear: both;
}
.icon{
float: left;
}
ul{
    padding-left: 5px;
}
li{
    list-style: none;
    border-bottom:1px solid rgb(211, 204, 204);
    padding-top: 10px;
    padding-bottom: 15px;
}
.avatar{
margin-right: 8px;
float: left;
}
.conmid,.condown{
    margin-left: 35px;
}
.avatar > img{
    width: 30px;
    height: 30px;
    border-radius: 50%;
}

.conup :nth-child(1){
    font-weight: bold;
    float: left;
        margin-top: 5px;
    margin-bottom: 5px;
}
.conup :nth-child(2){
    float: right;
        margin-top: 5px;
    margin-bottom: 5px;
}
.zanc{
    border:1px solid rgb(196, 192, 192);
    color: gray;
    display: inline-block;
    font-size: 15px;
    margin:5px 5px;
    padding:1px 6px;
}
.icon{
    width: 20px;
    height: 20px;
    margin-top:10px;
}
</style>
