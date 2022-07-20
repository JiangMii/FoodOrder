<template>
  <div id="app">
  <div>
    <v-header/>
  </div>
  <div class='tab'>
   <div class="tab-item">
        <router-link v-bind:to="'/food'">
          商品
        </router-link>
      </div>
      <div class="tab-item">
        <router-link to="/rate">
          评论
        </router-link>
      </div>
      <div class="tab-item">
        <router-link to="/sell">
          商家
        </router-link>
      </div>
      </div>
  <div>
    <router-view></router-view>
  </div>
  </div>
</template>
<script>
import header from './components/header/header.vue'

export default {
  name: 'App',
  components: {
    'v-header': header
  },
  data(){
    return{
      seller:{}
    }
  },

}
</script>
<style>
.app{
  margin:0;
  padding: 0;
  width: 100%;
  height: 100%;
  top:0;
}
  .tab {
    display: flex;
position:fixed;
    width: 100%;
    height: 40px;
    line-height: 40px;
    border: 1px solid rgba(7,17,27,0.1);
     margin-top: 130px;
     background-color: rgb(243, 236, 236);
     top:0;
    left: 0;
  }

  .tab .tab-item {
    flex: 1;
    text-align: center;

  }

  .tab .tab-item a {
    display: block;
    font-size: 14px;
    color: rgb(77, 85, 93);
    text-decoration: none;
  }

.tab-item:active {
    color: rgb(240, 20, 20);
  }
  .tab-item:visited{
  color: rgb(240, 20, 20);
  }
</style>
