<template>
    <div class="help">
        <div class="banner">
            <img src="@/assets/images/banner.png" alt="">
        </div>
        <ul>
            <li v-for="(item,index) in helpList">
                <p class="gold ft16 title">{{item.title}}</p>
                <div class="flex between gray ft14 mt10">
                    <span>{{item.author}}</span>
                    <span>{{item.time}}</span>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:'help',
    data (){
        return{
            helpList:[
                {title:'美联储主席JeromePowell:加密货币NFC色放几颗深V粉红色',author:'管理员',time:'2018-08-17 10:08'},
                {title:'美联储主席JeromePowell:加密货币NFC色放几颗深V粉红色',author:'管理员',time:'2018-08-17 10:08'}
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
.help{
    .banner{
        width: 100%;
        img{
            width: 100%;
            height: 190px;
        }
    }
    ul{
        li{
            padding: 15px;
            border-bottom: 1px solid #444444;
            .title{
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
        }
    }
}
</style>


