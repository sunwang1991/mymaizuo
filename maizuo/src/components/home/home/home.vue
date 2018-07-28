<template>
    <div class="home_wrap">
        <Head/>
        <Banner/>
        <HomeComming/>
        <HomePlaying/>
    </div>
</template>

<script>
import Head from "@/components/shareCom/head";
import HomeComming from "@/components/home/homeComming/homeComming";
import HomePlaying from "@/components/home/homePlaying/homePlaying";
import Banner from "@/components/banner/banner";
export default {
    name: 'Home',
    data(){
        return {
        
        }
    },
    components:{Head,Banner,HomeComming,HomePlaying}
}
</script>

<style>

</style>

