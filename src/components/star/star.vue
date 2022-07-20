<template>
    <div class="star">
    <div class="star-item" :class="starType">
      <span v-for="itemClass in itemClasses" v-bind:key="itemClass" :class="itemClass"></span>
    </div>
    </div>
</template>
<script>
const length=5;
const ON='on';
const HALF='half';
const OFF='off';
export default{
     props: {
    //   size: {
    //     type: Number
    //   },
      score: {
        type: Number
      }
    },
    computed: {
        // starType() {
        //     return 'star-'+this.size
        // },
        itemClasses() {
            let result=[];
            let score=Math.floor(this.score*2)/2;
            let hasDecimal=score%1!==0;
            let integer=Math.floor(score);
            for(let i=0;i<integer;i++){
                result.push(ON);
            }
            if(hasDecimal){
                result.push(HALF);
            }
            while(result.length<length){
                result.push(OFF)
            }
            return result;
        }
    }
}
</script>
<style>
.on{
    background-image: url('./star_on.png');
    width:10px;
    height:10px;
        margin-right :3px;
        background-size :10px 10px;
           display: inline-block;
    background-repeat: no-repeat;
}
.half{
    background-image: url('./star_half.png');
    width:10px;
    height:10px;
        margin-right :3px;
        background-size :10px 10px;
                   display: inline-block;
    background-repeat: no-repeat;
}
.off{
    background-image: url('./star_off.png');
    width:10px;
    height:10px;
        margin-right :3px;
        background-size :10px 10px;
                   display: inline-block;
    background-repeat: no-repeat;
}
</style>
