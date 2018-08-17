<template>
    <div class="wallet">
        <mt-header fixed title="钱包账户"></mt-header>
        <div class="mt40 container">
            <div class="content">
                <div class="assets">
                    <p class="ft18">BTC</p>
                    <p class="ft36 mt5">9996.50000</p>
                    <p class="ft16 mt5">1000000.000(锁仓)</p>
                </div>
                <div class="wallet-list white mt15">
                    <ul>
                        <li class="flex alcenter">
                            <img class="icon" src="@/assets/images/w1.png" alt="">
                            <div class="flex between flex1 ft15">
                                <span>充币</span>
                                <img class="arrow" src="@/assets/images/arrow.png" alt="">
                            </div>
                        </li>
                        <li class="flex alcenter">
                            <img class="icon" src="@/assets/images/w2.png" alt="">
                            <div class="flex between flex1 ft15">
                                <span>提币</span>
                                <img class="arrow" src="@/assets/images/arrow.png" alt="">
                            </div>
                        </li>
                        <li class="flex alcenter">
                            <img class="icon" src="@/assets/images/w3.png" alt="">
                            <div class="flex between flex1 ft15">
                                <span>转账</span>
                                <img class="arrow" src="@/assets/images/arrow.png" alt="">
                            </div>
                        </li>
                        <li class="flex alcenter">
                            <img class="icon" src="@/assets/images/w4.png" alt="">
                            <div class="flex between flex1 ft15">
                                <span>市场</span>
                                <img class="arrow" src="@/assets/images/arrow.png" alt="">
                            </div>
                        </li>
                     
                    </ul>
                </div>
            </div>
             
        </div>
    </div>
</template>
<script>
export default {
    name:'walletAccount'
}
</script>
<style lang="scss" scoped>
.wallet{
    .container{
        .content{
            padding: 15px;
            .assets{
                width: 100%;
                background: url(../assets/images/walletbg.png) no-repeat;
                background-size: cover;
                color:#ac7b38;
                border-radius: 8px;
                padding: 15px;
            }  
            .wallet-list{
                background: #1f2225;
                border-radius: 8px;
                ul{
                    li{
                        padding-left:15px;
                        .icon{
                            width: 33px;
                            height: 33px;
                        }
                        .flex1{
                            flex:1;
                            padding: 15px;
                            border-bottom:1px solid #1c1f22;
                            .arrow{
                               height: 20px;
                            }
                        }
                        
                    }
                }
            } 
        }
    }
    
}
</style>


