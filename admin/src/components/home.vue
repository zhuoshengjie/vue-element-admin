<template>
    <el-container>
        <el-header>
            <el-row>
                <el-col :span="5" ><div class="grid-content bg-purple"><span>大数据知识库平台</span></div></el-col>
                <!-- <el-col :span="16"><div class="grid-content bg-purple"><span></span></div></el-col> -->
                <el-col :span="3" :offset="16"><div class="grid-content bg-purple"><el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <!-- <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu> -->
        </el-dropdown><span>2019-07-16</span></div></el-col>
            </el-row>
        </el-header>
        <el-container style="height: 500px; border: 1px solid #eee">
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
            <el-menu :default-openeds="['1']" router @open="handleOpen" @select="handleSelect" @close="handleClose" :default-active="this.$route.path">
            <el-submenu index="1">
                <template slot="title"><el-row type="flex" class="row-bg" justify="space-around">
                <el-col :span="5" :push="1"><div class="grid-content bg-purple"><i class="el-icon-message"></i></div></el-col>
                <el-col :span="12" :offset="6"><div class="grid-content bg-purple">查询</div></el-col>
                </el-row>
                </template>
                <el-menu-item-group>
                <el-menu-item index="/home/p1">三码查询</el-menu-item>
                <el-menu-item index="/home/p2">轨迹查询</el-menu-item>
                <el-menu-item index="/home/p3">通联查询</el-menu-item>
                <el-menu-item index="/home/p4">批量查询</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            </el-menu>
        </el-aside>
        
          <el-container>
              <el-header style="background-color: gray;">
                <el-breadcrumb separator=">>">
                  <el-breadcrumb-item :to="{ path: '/' }">查询</el-breadcrumb-item>
                  <el-breadcrumb-item :to="{ path: '/home/p1'}" v-if="this.selectPath=='/home/p1'">三码查询</el-breadcrumb-item>
                  <el-breadcrumb-item :to="{ path: '/home/p2'}" v-if="this.selectPath=='/home/p2'">轨迹查询</el-breadcrumb-item>
                  <el-breadcrumb-item :to="{ path: '/home/p3'}" v-if="this.selectPath=='/home/p3'">通联查询</el-breadcrumb-item>
                  <el-breadcrumb-item :to="{ path: '/home/p4'}" v-if="this.selectPath=='/home/p4'">批量查询</el-breadcrumb-item>                  
                </el-breadcrumb>
              </el-header>
              <router-view></router-view>
          </el-container>
        </el-container>
    </el-container>
</template>
<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
  body {
    margin: 0;
  }
</style>

<script>
  export default {
    data() {
      return {
        search: '',
        selectPath: ''
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      handleSelect(key, keyPath) {
        console.log(key);
        this.selectPath = key
      }
      // openFullScreen() {
      //   this.fullscreenLoading = true;
      //   setTimeout(() => {
      //     this.fullscreenLoading = false;
      //   }, 300);
      // }
      // openFullScreen() {
      //   const loading = this.$loading({
      //     lock: true,
      //     text: 'Loading',
      //     spinner: 'el-icon-loading',
      //     background: 'rgba(0, 0, 0, 0.7)'
      //   });
      //   setTimeout(() => {
      //     loading.close();
      //   }, 2000);
      // }
    }
  }
</script>