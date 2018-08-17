<template>
    <div class="earnings">
        <div class="earnbox gold">
            <div class="title ft18 tc">收益</div>
            <div class="assetbox">
                <p class="ft15">总资产折合(CNY)</p>
                <p class="money mt10">15390.2</p>
                <ul class="flex ft14">
                    <li>
                        <p>轮回资产</p>
                        <span>3256.00</span>
                    </li>
                    <li class="tc">
                        <p>推荐资产</p>
                        <span>3256.00</span>
                    </li>
                    <li class="tr">
                        <p>团队资产</p>
                        <span>3256.00</span>
                    </li>
                </ul>
            </div>
        </div>
        <ul class="detail gray">
            <li class="flex between alcenter ft16" v-for="(item,index) in detaiList">
                <span>{{item.title}}</span> 
                <img src="@/assets/images/arrow.png" alt=""> 
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:"earnings",
    data (){
        return{
            detaiList:[{title:"轮回明细"},{title:"推荐明细"},{title:"团队明细"}]
        }
    },
    beforeCreate () {
         document.querySelector('body').setAttribute('style', 'background-color:#1c1c1d')
    },
}
</script>
<style lang="scss" scoped>
    .earnings{
        .earnbox{
            width: 100%;
            background-size: cover;
            background: url(../assets/images/earnsbg.png) no-repeat;
            border-bottom: 1px solid #242525;
            .title{
                height: 40px;
                line-height: 40px;
            }
            .assetbox{
                padding: 0 25px;
                .money{
                    font-size: 36px;
                }
                ul{
                    width: 100%;
                    margin: 30px 0;
                    li{
                        flex: 1;
                        p{
                            margin-bottom: 10px;
                        }
       
                    }
                }
            }
        }
        .detail{
            li{
                height: 50px;
                border-bottom: 1px solid #242525;
                padding: 15px;
                img{
                    height: 20px;
                }
            }
        }
    }
</style>




