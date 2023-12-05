<template>
   <div>
      <el-row>
         <el-col :span="8" style="padding-right: 10px;">
            <el-card style="margin-bottom: 40px;">
               <div class="l-info">
                  <img src="../assets/header.jpg" alt=""
                     style="width: 150px;height:150px;border-radius: 50%; margin-right: 30px;">
                  <div class="user-info">
                     <p style="margin-bottom: 10px; font-size: 24px; ">Adnmin</p>
                     <p style="font-size: 16px;  color: #999999;">超级管理员</p>
                  </div>
               </div>
               <div class="r-info">
                  <p>上次登录时间：<span>2022-3-19</span></p>
                  <p>上次登录地点：<span>杭州</span></p>
               </div>
            </el-card>
            <el-card>
               <el-table :data="tableData" :row-class-name="tableRowClassName" style="width: 100%;height: 400px;">
                  <el-table-column v-for="(val, key) in tableList" :prop="key" :label="val">
                  </el-table-column>
               </el-table>
            </el-card>
         </el-col>
         <el-col :span="16" style="padding-left: 10px;">
            <div class="num" style="display: flex; flex-wrap: wrap; justify-content: space-around">
               <el-card v-for="item in countData" :key="item.name" :body-style="{ display: 'flex', padding: 0 }">
                  <i class="icon" :class="`el-icon-${item.icon}`" :style="{ backgroundColor: item.color }"></i>
                  <div class="money" style="display: flex; flex-direction: column; justify-content: center;">
                     <p style="font-size: 30px; line-height: 30px; height:30px; margin-bottom: 10px;">￥{{ item.value }}</p>
                     <p style="font-size: 14px; color:#999;text-align: center;">{{ item.name }}</p>
                  </div>
               </el-card>
            </div>
            <el-card style="height: 260px;margin-top:10px;">
               <div ref="echarts1" style="height: 260px; width: 100%;"></div>
            </el-card>
            <div style="display: flex;justify-content: spance-around;margin-top: 10px;">
               <el-card style="height: 260px;">
                  <div ref="echarts2" style="height: 260px;width: 100%;"></div>
               </el-card>
               <el-card style="height: 260px;">
                  <div ref="echarts3" style="height: 250px;"></div>
               </el-card>
            </div>
         </el-col>

      </el-row>
   </div>
</template>
<script>
import { getData } from '@/API';
import * as echarts from 'echarts'
export default {
   data() {
      return {
         tableData: [],
         tableList: {
            name: '手机',
            todayBuy: '今日销售',
            monthBuy: '月销售',
            totalBuy: '总销售'
         },
         countData: [
            {
               name: "今日支付订单",
               value: 1234,
               icon: "success",
               color: "#2ec7c9",
            },
            {
               name: "今日收藏订单",
               value: 210,
               icon: "star-on",
               color: "#ffb980",
            },
            {
               name: "今日未支付订单",
               value: 1234,
               icon: "s-goods",
               color: "#5ab1ef",
            },
            {
               name: "本月支付订单",
               value: 1234,
               icon: "success",
               color: "#2ec7c9",
            },
            {
               name: "本月收藏订单",
               value: 210,
               icon: "star-on",
               color: "#ffb980",
            },
            {
               name: "本月未支付订单",
               value: 1234,
               icon: "s-goods",
               color: "#5ab1ef",
            },
         ],

      }
   },
   methods: {
      tableRowClassName({ row, rowIndex }) {
         if (rowIndex === 1) {
            return 'warning-row';
         } else if (rowIndex === 3) {
            return 'success-row';
         }
         return '';
      }
   },
   mounted() {
      getData().then(({ data }) => {
         const { tableData, userData,videoData } = data.data
         this.tableData = tableData
         const echarts1 = echarts.init(this.$refs.echarts1)
         var echarts1Option = {}
         const { orderData } = data.data
         const xAxis = Object.keys(orderData.data[0])
         const xAxisData = {
            data: xAxis
         }
         echarts1Option.xAxis = {
            data: [
               "一月份", "二月份", "三月份", "四月份", "五月份", "六月份"
            ]
         }
         echarts1Option.yAxis = {}
         echarts1Option.tooltip = {}
         echarts1Option.legend = xAxisData
         echarts1Option.series = []
         xAxis.forEach(key => {
            echarts1Option.series.push({
               name: key,
               data: orderData.data.map(item => item[key]),
               type: 'line'
            })
         })
         console.log(echarts1Option)
         echarts1.setOption(echarts1Option)
         const echarts2 = echarts.init(this.$refs.echarts2)
         const eachrts2Option = {
            legend: {
               // 图例文字颜色
               textStyle: {
                  color: "#333",
               },
            },
            grid: {
               left: "20%",
            },
            // 提示框
            tooltip: {
               trigger: "axis",
            },
            xAxis: {
               type: "category", // 类目轴
               data: userData.map(item => item.date),
               axisLine: {
                  lineStyle: {
                     color: "#17b3a3",
                  },
               },
               axisLabel: {
                  interval: 0,
                  color: "#333",
               },
            },
            yAxis: [
               {
                  type: "value",
                  axisLine: {
                     lineStyle: {
                        color: "#17b3a3",
                     },
                  },
               },
            ],
            color: ["#2ec7c9", "#b6a2de"],
            series: [
               {
                  name: '新增用户',
                  data: userData.map(item => item.new),
                  type: 'bar'
               },
               {
                  name: '活跃用户',
                  data: userData.map(item => item.active),
                  type: 'bar'
               }
            ],
         }
         echarts2.setOption(eachrts2Option)
         const echarts3 = echarts.init(this.$refs.echarts3)
            const eachrts3Option = {
                tooltip: {
                    trigger: "item",
                },
                color: [
                    "#0f78f4",
                    "#dd536b",
                    "#9462e5",
                    "#a6a6a6",
                    "#e1bb22",
                    "#39c362",
                    "#3ed1cf",
                ],
                series: [
                    {
                        data: videoData,
                        type: 'pie'
                    }
                ],
            }
            echarts3.setOption(eachrts3Option)
      })
   }
}

</script>
<style>
.l-info {
   padding-bottom: 15px;
   display: flex;
   align-items: center;
   margin-bottom: 20px;
   border-bottom: 1px solid #ccc;

}

.r-info p {
   line-height: 28px;
   font-size: 14px;
   color: #999999;
}

.r-info span {
   color: #666666;
   margin-left: 60px;
}

.el-table .warning-row {
   background: oldlace;
}

.el-table .success-row {
   background: #f0f9eb;
}

.num i {
   width: 80px;
   height: 80px;
   text-align: center;
   font-size: 30px;
   line-height: 80px;
   color: #fff;
   margin-right: 25px;
}

.el-card {
   margin-bottom: 20px;
   flex: 30%;
   margin-right: 15px;

}
</style>
