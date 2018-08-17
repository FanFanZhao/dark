<template>
    <div class="mine">
        <mt-header fixed title="我的"></mt-header>
        <div class="content mt40 gold">
            <div class="mineinfo flex between alcenter">
                <div class="ft16">
                    <p>Hello Word!</p>
                    <span class="mt5">152****3776</span>
                </div>
                <div class="userhead">
                    <img src="@/assets/images/user.png" alt="">
                </div>
            </div>
            <div class="assets mt20">
                <p class="ft18">总资产</p>
                <p class="ft36 mt5">≈9996.50000</p>
                <p class="ft16 mt5">0123fnsdjkfzs13621sad1d1asd1d</p>
            </div>
            <div class="myassets mt15">
                <ul>
                    <li class="flex between alcenter" v-for="(item,index) in iconList">
                        <div class="flex alcenter">
                            <div class="icon-pic mt5">
                                <img :src="item.pic" alt="">
                            </div>
                            <p class="gold ft14 ml15">{{item.title}}</p>
                        </div>
                        <div class="gold">
                            <p class="ft16">{{item.goal}}</p>
                            <p class="gray">{{item.lock}}(锁仓)</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"mine",
    data (){
        return{
            iconList:[
                {pic:require("@/assets/images/btc.png"),title:"BTC",goal:"100.0000",lock:"100.00"},
                {pic:require("@/assets/images/eth.png"),title:"ETH",goal:"100.000",lock:"100.00"},
                {pic:require("@/assets/images/eth.png"),title:"JNB",goal:"100.000",lock:"100.00"},
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
.mine{
    .content{
        padding: 15px;
        .mineinfo{
            .userhead{
                img{
                    width: 60px;
                    border-radius: 50%; 
                }
            }
        }
        .assets{
            width: 100%;
            background: url(../../assets/images/walletbg.png) no-repeat;
            background-size: cover;
            color:#ac7b38;
            border-radius: 8px;
            padding: 15px;
        }
        .myassets{
            ul{
                li{
                    width: 100%;
                    background: #1f2225;
                    padding: 10px;
                    border-radius: 8px;
                    margin-bottom: 15px;
                    .icon-pic{
                        img{
                            width: 45px;
                            height: 45px; 
                            border-radius: 50%; 
                        }
                        
                    }

                }
            }
        }


    }
}
</style>


