<template>
    <div class="transfer">
       <mt-header fixed title="转账">
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <div class="content white ft16 mt40">
            <div class="flex">
                <p>钱包地址</p>
                <input type="text" placeholder="请输入收款人钱包地址">
                <p class="sao fr tr"><img src="@/assets/images//sao.png" alt=""></p>
            </div>
            <div class="flex">
                <p>数量</p>
                <input type="text" placeholder="请输入转出数量">
            </div>
            <div class="flex">
                <p>钱包密码</p>
                <input type="text" placeholder="请输入钱包密码">
            </div>
            <div class="flex">
                <p>备注</p>
                <input type="text" placeholder="(50字以内)">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"transfer"
}
</script>
<style lang="scss" scoped>
.transfer{
    .content{
        background: #1f2225;
        margin-top: 50px;
        div{
            padding: 18px 15px;
            border-bottom: 1px solid #151515;
            p{width: 23%;}
            input{
                background: transparent;
                padding-left: 10px;
            }
            img{
                width: 20px;
            }
        }
    }
}
</style>


