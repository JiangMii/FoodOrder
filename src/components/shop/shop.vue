<template>
    <div class='shop'>
        <div>
        <div class='car' @click="carclick"><img src=''> <div class='count' v-show="totalCount>0">{{totalCount}}</div></div>
        <p class='price'>￥{{totalPrice}}</p><p class='peis'>另需配送费￥4元</p>
        <div :class='payclass' @click="total">{{pay}}</div>
        </div>
        <div class='caritem' v-show="carshow">
            <div class='cartop'><p>购物车</p><p class='carclear' @click="clear">清空</p></div>
            <div class='carcontent'>
                <ul class='carul'>
                    <li v-for="(item,index) in selectFoods" :key='index'>
                        <p class='itemname'>{{item.name}}</p>
                        <p class='itemprice'>￥{{item.price*item.count}}</p>
                        <card-con :food='item' class='carmount'></card-con>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import cardCon from '../cardCon/cardCon.vue'
export default{
    data(){
        return{
            carshow:false,
        }
    },
    props:{
        selectFoods:{
            type:Array,
        }
    },
    components:{
       cardCon
    },
    created(){
          console.log(this.selectFoods)
    },
    computed:{
        totalPrice(){
            let total=0;
            this.selectFoods.forEach((food)=>{
                total=total+food.count*food.price;
            })
            return total;
        },
        totalCount(){
            let count=0;
            this.selectFoods.forEach((food)=>{
                count+=food.count
            })
            return count;
        },
        pay(){
            if(this.totalPrice===0){
                return '还差20元起送'
            }else if(this.totalPrice<20){
                let least=20-this.totalPrice
                return `还差￥${least}元起送`;
            }else{
                return '去结算';
            }
        },
        payclass(){
            if(this.totalPrice >= 20){
                return 'enough'
            }else{
                return 'not-enough'
            }
        },
    },
    methods:{
        total(){
            let res=this.totalPrice;
           alert('您需要支付'+res)
        },
        clear(){
            this.selectFoods=[]
        },
        carclick(){
        if (!this.totalCount) {
        return;
        }
            this.carshow=!this.carshow;
        }
    }
}
</script>
<style scoped>
.shop{
    position: fixed;
    left:0;
    bottom: 0;
    z-index: 40;
    width:100%;
    height:48px;
    background-color: #141d27;
}
.car,.price,.peis,.less{
    display: inline-block;
}
.car{
    width: 46px;
    height:46px;
    margin-left: 10px;
    border-radius: 50%;
    border: 7px solid #141d27;
    background-color: #2b343c;
    position: relative;
    top :-20px;
}
.count{
    float: right;
    width:24px;
    height: 24px;
    border-radius: 50%;
    background-color: red;
    color:#fff;
    font-weight: bold;
    text-align: center;
   line-height: 24px;
   margin-right: -10px;
   margin-top:-10px
}
.price{
    color: #fff;
    font-weight: bolder;
}
.peis{
    font-size:15px;
    color: #7a7a7a;
    width:130px;
    border-left: 2px solid rgb(138, 137, 137);
    padding-left: 15px;
    margin-left: 8px;
    
}
.not-enough{
    float: right;
    height:48px;
    width: 120px;
        font-size:13px;
        font-weight: bold;
    color: #8a8a8a;
    background-color: #303233;
    text-align: center;
    padding-top: 14px;
}
.enough{
    float: right;
    height:48px;
    width: 120px;
        font-size:13px;
        font-weight: bold;
    color: #fff;
    background-color: rgb(10, 158, 10);
    text-align: center;
    padding-top: 14px;
}
.caritem{
    position: absolute;
bottom: 100%;
    left: 0;
z-index:30;
    width:100%;
}
.cartop{
    background-color: #b6b4b4;
    margin-bottom: 0px;
    padding-right:18px;
    padding-left: 18px;
}
.cartop > p{
    display: inline-block;
    margin-top: 10px;
    margin-bottom: 10px;
}

.carclear{
    float: right;
    color: rgb(35, 129, 216);
}
.carul>li{
    border-top: 1px solid grey;
    background-color: #fff;
    padding-top:5px;
    padding-bottom: 5px;
        padding-right:18px;
    padding-left: 18px;
}
.carul{
    margin-top: 0;
    margin-bottom: 0;
}
.itemname,.itemprice,.carmount{
    display: inline-block;
}

.itemprice{
   right: 105px;
  position: absolute;
   color:red;
}
.carmount{
    float: right;
}
</style>
