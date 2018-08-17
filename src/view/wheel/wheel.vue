<template>
    <div class="wheel">
        <mt-header fixed title="轮回"></mt-header>
        <div class="mt40 mb55">
            <div class="iconbox">
                <ul>
                    <li class="flex between alcenter" v-for="(item,index) in iconList">
                        <router-link :to='{name:"wheelDetail"}'>
                            <div class="flex">
                                <div class="icon-pic mt5">
                                    <img :src="item.pic" alt="">
                                </div>
                                <div class="ml20">
                                    <p class="gold ft14">{{item.title}}</p>
                                    <p class="gray mt5">目标金额：{{item.goal}}</p>
                                    <p class="gray mt5">剩余金额：{{item.residue}}</p>
                                </div>
                            </div>
                            <div class="gold ft14">
                                <span>{{item.code}}</span>
                            </div>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
        <!-- <tabBar></tabBar> -->
    </div>
</template>
<script>
import tabBar from '@/components/tabBar'
export default {
    name:"wheel",
    components:{tabBar},
    data (){
        return{
            iconList:[
                {pic:require("@/assets/images/btc.png"),title:"BTC",goal:"100BTC",residue:"30BTC",code:"#123456"},
                {pic:require("@/assets/images/eth.png"),title:"ETH",goal:"100BTC",residue:"30BTC",code:"#123456"},
                {pic:require("@/assets/images/eth.png"),title:"JNB",goal:"100BTC",residue:"30BTC",code:"#123456"},
                {pic:require("@/assets/images/btc.png"),title:"BTC",goal:"100BTC",residue:"30BTC",code:"#123456"},
                {pic:require("@/assets/images/eth.png"),title:"ETH",goal:"100BTC",residue:"30BTC",code:"#123456"},
                {pic:require("@/assets/images/eth.png"),title:"JNB",goal:"100BTC",residue:"30BTC",code:"#123456"},
                {pic:require("@/assets/images/btc.png"),title:"BTC",goal:"100BTC",residue:"30BTC",code:"#123456"},
                {pic:require("@/assets/images/eth.png"),title:"ETH",goal:"100BTC",residue:"30BTC",code:"#123456"},
                {pic:require("@/assets/images/eth.png"),title:"JNB",goal:"100BTC",residue:"30BTC",code:"#123456"},
            ]
        }
    },
    beforeCreate () {
         document.querySelector('body').setAttribute('style', 'background-color:#111419')
    },
}
</script>
<style lang="scss" scoped>
    .wheel{
        .iconbox{
            padding: 15px;
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
                        }
                        
                    }

                }
            }
        
            
        }
    }

</style>


