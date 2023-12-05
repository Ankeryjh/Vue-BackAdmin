<template>
    <div>
        
        <el-container>
            <el-aside style="width: 240px;"><ComponentAside></ComponentAside></el-aside>
            <el-container>
                <el-header>
                    <CommonHeader></CommonHeader>
                </el-header>
                <el-main>
                    <router-view></router-view>
                </el-main>
                
            </el-container>
         
        </el-container>
        
    </div>
</template>
<script>
import ComponentAside from '@/components/ComponentAside.vue';
import CommonHeader from '@/components/CommonHeader.vue';
export default {
    data() {
        return {}
    },
    components:{
        ComponentAside,
        CommonHeader
    }
    
}
</script>

<style>
.el-header {
    padding: 0
}
</style>