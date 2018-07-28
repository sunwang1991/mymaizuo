<template>
    <div class="head">
        <div class="head_left">
            <div>三</div>
            <div>卖座电影</div>
        </div>
        <div class="head_right">
            <router-link tag="div" to="/city">
                长沙
            </router-link>
            <router-link tag="div" to="/user">
                我的
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name:"Head",
}
</script>

<style scoped>
.head{
    background: #282828;
    position: fixed;
    z-index: 500;
    top: 0;
    right: 0;
    left: 0;
    width: auto;
    height: 50px;
    line-height: 50px;
    overflow: hidden;
    display:flex;
    justify-content: space-between;
    color:#fff;
}
.head_left{
    display:flex;
    box-sizing:border-box;
    padding:0 10px;
}
.head_left div{
    padding:0 10px;
}
.head_right{
    display:flex;
    box-sizing:border-box;
    padding:0 10px;
}
.head_right div{
    padding:0 10px;
}
</style>


