<template>
    <div class="wheelDetail">
        <mt-header fixed title="轮回明细">
            <div  slot="left">
                <mt-button icon="back"></mt-button>
            </div>
        </mt-header>
        <div class="mt40">
            <div class="iconbox">
                <ul>
                    <li class="flex between alcenter" v-for="(item,index) in detaiList">
                        <div class="">
                            <p class="gold ft14">{{item.title}}</p>
                            <p class="gray mt5">目标金额：{{item.time}}</p>
                        </div>
                        <div class="ft14">
                            <span class="red">{{item.money}}</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"wheelDetail",
    data (){
        return{
            detaiList:[
                {title:"联盟节电扣除",time:"2017-08-16 14:36",money:"-100"},
                {title:"联盟节点赠送",time:"2017-08-16 14:37",money:"+100"},
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
    .wheelDetail{
        .iconbox{
            ul{
                li{
                    width: 100%;
                    background: #13171c;
                    padding: 15px;
                    margin-bottom: 15px;
                    .icon-pic{
                        img{
                            width: 45px;
                            height: 45px;  
                        }
                        
                    }

                }
            }
        
            
        }
    }

</style>


