<template>
    <div class="charge">
    <mt-header fixed title="充币">
        <router-link to="/" slot="left">
            <mt-button icon="back"></mt-button>
        </router-link>
    </mt-header>
    <div class="content mt40">
        <div class="code tc mt40">
            <img src="@/assets/images/code.png" alt="">
        </div>
        <div class="mt40 tc gold ft16">
            <span>c15scas5df45s4cas54d5ad4csa5dd4csa5d4</span>
        </div>
        <div class="copy tc gold ft16">复制地址</div>
    </div>

    </div>
</template>
<script>
export default {
    name:'chargrMoney'
}
</script>
<style lang="scss" scoped>
.charge{
    .content{
        top: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        position: fixed;
        background: url(../assets/images/charge_bg.png) no-repeat;
        background-size: cover;
        .code{
            margin-top: 80px;
            img{
                width:150px;
                height: 150px;
            }
        }
        .copy{
            margin: 40px auto auto auto;
            width: 80%;
            height: 50px;
            line-height: 50px;
            background: #0c0c0d;
            border-radius: 8px;
        }
    }
}
</style>


