<template>
<div>
        <div class='label'>
            <p class='all' @click='select(2)' :class="{'active': selectType === 2}">全部{{ratings.length}}</p>
            <p class='positive' @click="select(0)" :class="{'active': selectType === 0}">满意{{position.length}}</p>
            <p class='nagetive' @click='select(1)' :class="{'active': selectType === 1}">吐槽{{nagetive.length}}</p>
        </div>
        <div class="choose" @click='only' >
            <div class='yes' :class="{'on':onlyContent}">√</div><p>只看有内容的评价</p>
        </div>
        </div>
</template>
<script>
//   const POSITIVE = 0;
//   const NEGATIVE = 1;
export default{
    data(){
return{
    positive:[],
    nagetive:[],
    selectT:this.selectType,
    onlyC:this.onlyContent
}
    },
props: {
    ratings:{
        type:Array,
        default(){
            return [];
        }
    },
     selectType: {
        type: Number,
        default: 2
      },
      onlyContent: {
        type: Boolean,
        default: false
      }
},
methods:{
    select(now){
        this.selectT=now;
        this.$emit('increment','selectType',now)
    },

    only(){
        this.onlyC=!this.onlyC
         this.$emit('increment', 'onlyContent', this.onlyC);
    },
},
        created:function(){
const ratings=this.ratings
let positive=[],nagetive=[];
for(let i=0;i<ratings.length;i++){
if(ratings[i].rateType==0){
positive.push(ratings[i])
}else{
    nagetive.push(ratings[i])
}
}
this.position=positive;
this.nagetive=nagetive;
    }
}
</script>
<style>
.label{
    margin-top:10px;
    margin-bottom: 10px;
}
.all,.positive,.nagetive{
    width: 80px;
    height: 30px;
    margin-left: 10px;
    border:1px solid rgb(194, 191, 191);
    text-align: center;
    display: inline-block;
    padding-top: 8px;
}
.all{
    background-color: rgb(40, 146, 207);
    color: white;
}
.positive.active{
    color: blanchedalmond;
    background-color: rgb(40, 146, 207);
}
.positive{
    background-color: rgb(151, 204, 224);
}
.nagetive.active{
    color: cornsilk;
    background-color: gray;
}
.nagetive{
    background-color: rgb(214, 208, 208);
}
.nagec{
    background-color: grey;
    color: white;
}
.choose{
    height: 55px;
    border-top: 1px solid gainsboro;
    border-bottom: 1px solid gainsboro;
}
.choose > p{
    color: rgb(160, 154, 154);
    display: inline-block;
    font-size: 15px;
}
.yes{
    text-align: center;
    height: 23px;
    width: 23px;
    border-radius: 50%;
    background-color: rgb(151, 150, 150);
    display: inline-block;
    color: white;
    margin-right: 5px;
}
.yes.on{
    background-color:rgb(69, 212, 69) ;
}
</style>

