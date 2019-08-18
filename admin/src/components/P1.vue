<template>
              
              <el-main>
                <el-table :data="tableData" align="center" style="width:100%">
                    <el-table-column prop="date" label="日期" width="200">
                    </el-table-column>
                    <el-table-column prop="name" label="姓名" width="200">
                    </el-table-column>
                    <el-table-column prop="address" label="地址" width="500" align="right">
                      <template slot="header" slot-scope="scope">
                        <div>请输入文字:<el-time-picker
                          v-model="value1"
                          :picker-options="{
                            selectableRange: '18:30:00 - 20:30:00'
                          }"
                          placeholder="任意时间点">
                        </el-time-picker>
                        </div>
                      </template>
                      <template slot-scope="scope">
                        <el-button
                          size="mini"
                          type="primary"
                          @click="handleEdit(scope.$index, scope.row)" v-loading.fullscreen.lock="fullscreenLoading">查询</el-button>
                        <el-button
                          size="mini"
                          type="danger"
                          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                      </template>
                    </el-table-column>
                </el-table>
              </el-main>
              <!-- <el-button v-if="false"
                type="primary"
                @click="openFullScreen"
                v-loading.fullscreen.lock="fullscreenLoading">
                指令方式
              </el-button> -->
              <!-- <el-button
                type="primary"
                @click="openFullScreen">
                服务方式
              </el-button> -->
</template>

<script>
export default {
  data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(2).fill(item),
        search: '',
        value1: new Date(2016, 9, 10, 18, 40),
        fullscreenLoading: false,
        // falsh: openFullScreen()
      }
    },
    methods: {
      handleEdit(index, row) {
        // console.log(index, row);
        // this.falsh
        this.fullscreenLoading = true;
        setTimeout(() => {
          this.fullscreenLoading = false;
        }, 300);
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
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

<style>

</style>