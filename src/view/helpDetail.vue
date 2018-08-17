<template>
    <div class="helpDetail">
        <mt-header fixed title="帮助详情">
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <div class="mt40">
            <div class="detailbox">
                <p class="title ft16">{{title}}</p>
                <p class="time gray"><span>{{admin}}</span><span  class="ml10">{{time}}</span></p>
                <div class="content" v-html="content"></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'helpDetail',
    data (){
        return{
            title:"金融危机十反思录：区块链可能避免这场危机吗?",
            admin:'管理员',
            time:'2018-08-17 09:46',
            content:"2008年8月，就在雷曼CEO福尔德的私人飞机穿梭于纽约-汉城空中的同时，在曼哈顿花园大道雷曼的另一栋办公楼里，一大队人马正在通宵达旦、紧锣密鼓地部署着另一项秘密工作。"
        }
    },
    beforeCreate () {
         document.querySelector('body').setAttribute('style', 'background-color:#ffffff')
    },
}
</script>
<style lang="scss" scoped>
.helpDetail{
    .detailbox{
        padding: 10px 15px;
        .time{
            padding: 5px 0;
        }
    }
}
</style>

