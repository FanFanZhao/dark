<template>
    <div>
        <router-view></router-view>
        <mt-tabbar fixed >
            <router-link :to="{name:'wheel'}">
                <mt-tab-item id="one">
                <img slot="icon" :src="val=='one' ? '/static/images/turn1.png' : '/static/images/turn0.png'">
                轮回
                </mt-tab-item>
            </router-link>
            <router-link :to="{name:'help'}">
                <mt-tab-item id="two">
                <img slot="icon" :src="val=='two' ? '/static/images/help1.png' : '/static/images/help0.png'">
                帮助
                </mt-tab-item>
            </router-link>
            <router-link :to="{name:'earnings'}">
                <mt-tab-item id="three">
                <img slot="icon" :src="val=='three' ? '/static/images/come1.png' : '/static/images/come0.png'">
                收益
                </mt-tab-item>
            </router-link>
            <router-link :to="{name:'wheel'}">
                <mt-tab-item id="four">
                <img slot="icon" :src="val=='four' ? '/static/images/c1.png' : '/static/images/c0.png'">
                C2C
                </mt-tab-item>
            </router-link>
            <router-link :to="{name:'mine'}">
                <mt-tab-item id="five">
                <img slot="icon" :src="val=='five' ? '/static/images/mine1.png' : '/static/images/mine0.png'">
                我的
                </mt-tab-item>
            </router-link>
        </mt-tabbar>
    </div>
</template>
<script>
export default {
    name:'home',
    data (){
        return{
            selected:'one',
            val:'one',
        }
    },
    watch: {
        selected: function (val, oldVal) {
            // 这里就可以通过 val 的值变更来确定
            console.log(val)
            this.val=val;
        }
    }
}
</script>
<style scoped>
    .mint-tabbar{
        background: #111111;
        color: #999999;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .mint-tabbar > .mint-tab-item.is-selected {
        background-color: transparent;
        color: #f1cd78;
    }
</style>


