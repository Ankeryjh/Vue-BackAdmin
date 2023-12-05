<template>
    <div class="header-coninter">
        <div class="l-contend">
            <el-button icon="el-icon-menu" size="mini" style="margin: 0px 20px;" @click="handelMenu"></el-button>
            <router-link to="/home" style="color:white;text-decoration:none; font-size: 14px;">主页</router-link>
            
        </div>
        <div class="r-contend">
            <el-dropdown>
                <span class="el-dropdown-link">
                    <img src="../assets/header.jpg" alt="" style="width: 40px; height: 40px; border-radius: 50%; margin-top:5px;margin-right: 20px;">
                    
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>个人中心</el-dropdown-item>
                    <el-dropdown-item>退出</el-dropdown-item>
                   
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>
<script>
import { Store } from 'vuex';
export default {
    data() {
        return {

        }
    },
    methods:{
        handelMenu(){
            this.$store.commit('collapseMenu')
        }
    }
}
</script>
<style>
.header-coninter {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    background-color: #333;
    padding: 0px
}
</style>