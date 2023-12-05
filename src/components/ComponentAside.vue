<template>
    <div>
        <el-row class="tac">
        <el-col :span="24">
            <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"  :collapse="isCollapse"
                background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" router="true">
                <h3 style="color: white; text-align: center;font-weight: 400;margin:10px 0px;">通用后台管理</h3>
                <el-menu-item v-for="item in Nochildren" :key="item.name" :index="item.path">
                    <i :class="`el-icon-${item.icon}`"></i>
                    <span slot="title">{{ item.label }}</span>
                </el-menu-item>
                <el-submenu v-for="item in HaveChildren" :key="item.label" :index="item.path">
                    <template slot="title">
                        <i :class="`el-icon-${item.icon}`"></i>
                        <span>{{item.label }}</span>
                    </template>
                    <el-menu-item-group v-for="itemarr in item.children" :key="itemarr.path">
                        <el-menu-item :index="itemarr.path">{{itemarr.label}}</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
            </el-menu>
        </el-col>
    </el-row>
    </div>
   
</template>
<script>
export default {
    data() {
        return {
            menulist: [
                {
                    path: '/',
                    name: 'home',
                    label: '首页',
                    icon: 's-home',
                    url: 'Home/Home'
                },
                {
                    path: '/mall',
                    name: 'mall',
                    label: '商品管理',
                    icon: 'video-play',
                    url: 'MallManage/MallManage'
                },
                {
                    path: '/user',
                    name: 'user',
                    label: '用户管理',
                    icon: 'user',
                    url: 'UserManage/UserManage'
                },
                {
                    label: '其他',
                    icon: 'location',
                    
                    children: [
                        {
                            path: '/pageone',
                            name: 'page1',
                            label: '页面1',
                            icon: 'setting',
                            url: 'Other/PageOne'
                        },
                        {
                            path: '/pagetwo',
                            name: 'page2',
                            label: '页面2',
                            icon: 'setting',
                            url: 'Other/PageTwo'
                        }
                    ]
                }
            ]
        }
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    },
    computed: {
        Nochildren() {
            return this.menulist.filter(item => !item.children)
        },
        HaveChildren() {
            return this.menulist.filter(item => item.children)
        },
        isCollapse() {
      return this.$store.state.tab.isCollapse
    }
    }
}
</script>
<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 240px;
  min-height: 400px;
  height: 100vh;
}</style>