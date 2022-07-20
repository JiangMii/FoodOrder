 <template>
     <div class='header'>
         <div class="up">
         <div class='toux'>
             <img width='64' height='64' src='http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg'>
             </div>
             <div class="info">
                 <div class="info-1">
                      <img width='40' height='20' src="./brand@2x.png" style="float:left">
                 <span class="name" style="color:white">{{seller.name}}</span>
                 </div>
                <div class="info-2" style="margin-top:8px">
                    <span class="send" style="color:white">{{seller.description}}/{{seller.deliveryTime}}分钟送达</span>
                </div>
                <div class="info-3" style="margin-top:8px">
                     <img  width='18' height='18' src='./decrease.png' style="float:left"><span class="send" style="margin-left:5px;color:white">支付20-3</span>
                   <div class="more" @click="showDetail"><a style="color:white">&nbsp;5个 ></a></div>
                </div>
             </div>
                </div>
                
                    <div class="teller" @click="showDetail">
                    <img src='./bulletin@2x.png' style="float:left;margin-right:6px"  width='35' height='18'><p style="color:white">在融和现代制作工艺，坚守纯天然、无添加     ></p>
                   </div>
         <div v-show="detailshow" class='detail' @click='hideDetail'>
             <br><br><br><br>
        <div class='deup'>
            <h4>优惠信息</h4>
        </div><br>
        <div>
        <ul class='tanc'>
    <li v-for="(item,key) in seller.supports" :key="key" class='tanco'> 
        <div :class="classMap[item.type]"></div><p class='tancp'>{{item.description}}</p>
    </li>
</ul>
</div><br>
<div class='dedo'>
    <h4> 商家公告</h4>
</div>
 <p class='gg'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{seller.bulletin}}</p>
    </div>
     </div>
 </template>
 <script>
import data from '../../common/data.json';
export default{
   data(){
    return{
        seller:{},
       detailshow:false,
       classMap:['one','two','three','four','five']
    }
},

  created(){
    this.seller=data.seller;
  },
    methods: {
      showDetail() {
        this.detailshow = true;
         this.stopScroll();
      },
        stopScroll() {
          document.documentElement.style.overflow='hidden';
          document.body.style.position='fixed';
          document.body.style.top='0px';
          document.body.style.width='100%';
        },
        openScroll(){
           document.documentElement.style.overflow='scroll';
            document.body.style.position='static';
        },
      hideDetail() {

        this.detailshow = false;
        this.openScroll();
      }
    },
}
 </script>
 <style>
.header{
     position: fixed;
    width: 100%;
    margin-left: 0;
    margin-top:0;
    background-color: rgb(168, 175, 182);
    top:0px;
    left: 0px;
}
 .toux{
     float: left;
     margin-left: 18px;
      margin-top: 18px;
 }

 .info > div{
     margin-left: 100px;
 }
.name{
    font-weight: bold;
    margin-left: 24px;
}
.more{
    float: right;
    width: 55px;
    height: 25px;
    border-radius: 15px;
    background-color: rgb(0,0,0,0.2);
    font-size:13px;
    padding-left: 10px;
    line-height: 25px;
}
.more > a{
    padding-left: 3px;
    margin-top: 6px;
}

.teller{
margin-left: 10px;
}
.one{
    background-image: url('./on.png');
    background-size: cover;
    float: left;
}
.two{
      background-image: url('./to.png');
        background-size: cover;
        float: left;
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
.detail{
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 50;
    background-color: rgba(7, 17, 27, 0.8);
    margin-top:-180px;
    animation-name: bounce-in;
    animation-duration: 0.5s;
}
.detailclose{
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: rgba(7, 17, 27, 0.8);
    margin-top:-180px;
    animation-name: bounce-out;
    animation-duration: 0.5s;
}
.deup > h4{
    color: white;
}
.tancp{
    color: white;
    padding-top:-15px;
}
.dedo > h4{
    color: white;
}
.gg{
    color: white;
    margin-left: 5px;
    margin-right:5px;
    padding-left: 8px;
    padding-right: 8px;
}
.deup{
    margin-left: 42%;
}
.tanc > li{
    list-style: none;
}
.tanco > div{
    width: 18px;
    height: 18px;
    float: left;
    margin-right: 6px;

}
 .deup::after, .deup::before{
            position: absolute;
            width:160px;
            height:1px;
            background:white;
            content:'';
        }
 .deup::after{
            left:0;
            margin-top:-15px;
        }
.deup::before{
            right:0;
            margin-top:10px;
        }
.dedo{
    margin-left: 42%;
}
 .dedo::after, .dedo::before{
            position: absolute;
            width:160px;
            height:1px;
            background:white;
            content:'';
        }
 .dedo::after{
            left:0;
              margin-top:-15px;
        }
.dedo::before{
            right:0;
            margin-top:10px;
        }
@keyframes bounce-in {
      0% {
        transform: scale(0);
      }
      50% {
        transform: scale(1.5);
      }
      100% {
        transform: scale(1);
      }
    }
@keyframes bounce-out {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.5);
      }
      100% {
        transform: scale(0);
      }
    }
 </style>
 
