<template>
    <div class="banner">
        
    </div>
</template>

<script>

export default {
    name:"Banner",
    data(){
        return {
            arr:[]
        }
    },
    created(){
        //https://m.maizuo.com/v4/api/billboard/home?__t=1532764395167
        let url="anhao/v4/api/billboard/home";
        this.$http.get(url,{params:{
            __t:1532764395167
        }}).then(res=>{
            console.log(res)
        })
    }
}
</script>

<style>

</style>


