import Vue from "vue";
import VueRouter from "vue-router";
import Sell from '@/components/seller/seller.vue';
import Food from '@/components/food/food.vue';
import Rate from '@/components/rate/rate.vue';
Vue.use(VueRouter);
const router =new VueRouter({
    routes:[
        {
            path:'/',
            component:Food
        },
        {
            path:'/sell',
            component: Sell
        },
        {
            path:'/food',
            component: Food
        },
        {
            path:'/rate',
            component:Rate
        }
    ]
})
export default router;