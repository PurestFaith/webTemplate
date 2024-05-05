<style scoped lang="scss">
@import url("../style/FloatingBall/FloatingBall.scss");
.failureStatisticsReport {
  table {
    td {
      padding: 3px;
      width: 30px;
      height: 35px;
      font-size: 12px;
      border: 1px solid #dbdcde;
    }
    th {
      background: #f2f2f2;
      font-weight: 600;
      width: 80px;
      font-size: 13px;
      height: 25px;
      border: 1px solid #dbdcde;
    }
    tr:nth-child(2n -1) {
      background: #fafafa;
    }
    tr:hover {
      background-color: #f5f7fa;
    }
  }

  table {
    width: 100%;
    height: 100%;
    table-layout: fixed;
  }
  .date {
    margin-top: 10px;
    .datepicker {
      font-size: 20px;
    }
  }
}
</style>

<template>
  <div class="failureStatisticsReport">
    <table v-loading="loading" element-loading-text="加载中">
      <tbody>
        <tr>
          <th colspan="13">生产部{{ formatInitDate() }}入库（{{ order_total_num }}）单，延误（{{ order_delay_num }}）单管理统计</th>
        </tr>
        <tr>
          <th rowspan="2">序号</th>
          <th colspan="2">{{ formatInitDate() }}</th>
          <th rowspan="2">管理</th>
          <th rowspan="2">生产</th>
          <th rowspan="2">技术</th>
          <th rowspan="2">设备</th>
          <th colspan="3">质量</th>
          <th colspan="2">交货延误</th>
          <th></th>
        </tr>
        <tr>
          <th colspan="2">生产部管理异常统计</th>
          <th>IQC</th>
          <th>OQC</th>
          <th>QA</th>
          <th>采购</th>
          <th>小时</th>
          <th>备注说明</th>
        </tr>
        <tr>
          <td>1</td>
          <td>管异合计( 件 )</td>
          <td>{{ gyhj.num1 }}</td>
          <td>{{ gyhj.num2 }}</td>
          <td>{{ gyhj.num3 }}</td>
          <td>{{ gyhj.num4 }}</td>
          <td>{{ gyhj.num5 }}</td>
          <td @click="go_qualityManagementReport">{{ gyhj.num6 }}</td>
          <td @click="go_qualityManagementReport">{{ gyhj.num7 }}</td>
          <td @click="go_qualityManagementReport">{{ gyhj.num8 }}</td>
          <td>{{ gyhj.num9 }}</td>
          <td>{{ gyhj.num10 }}</td>
          <td>{{ gyhj.num11 }}</td>
        </tr>
        <tr>
          <td>2</td>
          <td>提报合计( 单 )</td>
          <td>{{ tbhj.num1 }}</td>
          <td>{{ tbhj.num2 }}</td>
          <td>{{ tbhj.num3 }}</td>
          <td>{{ tbhj.num4 }}</td>
          <td>{{ tbhj.num5 }}</td>
          <td @click="go_qualityManagementReport">{{ tbhj.num6 }}</td>
          <td @click="go_qualityManagementReport">{{ tbhj.num7 }}</td>
          <td @click="go_qualityManagementReport">{{ tbhj.num8 }}</td>
          <td>{{ tbhj.num9 }}</td>
          <td>{{ tbhj.num10 }}</td>
          <td>{{ tbhj.num11 }}</td>
        </tr>
        <tr>
          <td>3</td>
          <td>提报未判( 单 )</td>
          <td>{{ tbwp.num1 }}</td>
          <td>{{ tbwp.num2 }}</td>
          <td>{{ tbwp.num3 }}</td>
          <td>{{ tbwp.num4 }}</td>
          <td>{{ tbwp.num5 }}</td>
          <td @click="go_qualityManagementReport">{{ tbwp.num6 }}</td>
          <td @click="go_qualityManagementReport">{{ tbwp.num7 }}</td>
          <td @click="go_qualityManagementReport">{{ tbwp.num8 }}</td>
          <td>{{ tbwp.num9 }}</td>
          <td>{{ tbwp.num10 }}</td>
          <td>{{ tbwp.num11 }}</td>
        </tr>
        <tr>
          <td>4</td>
          <td>提报未结( 单 )</td>
          <td>{{ tbwj.num1 }}</td>
          <td>{{ tbwj.num2 }}</td>
          <td>{{ tbwj.num3 }}</td>
          <td>{{ tbwj.num4 }}</td>
          <td>{{ tbwj.num5 }}</td>
          <td @click="go_qualityManagementReport">{{ tbwj.num6 }}</td>
          <td @click="go_qualityManagementReport">{{ tbwj.num7 }}</td>
          <td @click="go_qualityManagementReport">{{ tbwj.num8 }}</td>
          <td>{{ tbwj.num9 }}</td>
          <td>{{ tbwj.num10 }}</td>
          <td>{{ tbwj.num11 }}</td>
        </tr>
        <tr>
          <td>5</td>
          <td>提报已结( 单 )</td>
          <td>{{ tbyj.num1 }}</td>
          <td>{{ tbyj.num2 }}</td>
          <td>{{ tbyj.num3 }}</td>
          <td>{{ tbyj.num4 }}</td>
          <td>{{ tbyj.num5 }}</td>
          <td @click="go_qualityManagementReport">{{ tbyj.num6 }}</td>
          <td @click="go_qualityManagementReport">{{ tbyj.num7 }}</td>
          <td @click="go_qualityManagementReport">{{ tbyj.num8 }}</td>
          <td>{{ tbyj.num9 }}</td>
          <td>{{ tbyj.num10 }}</td>
          <td>{{ tbyj.num11 }}</td>
        </tr>
        <tr>
          <td>6</td>
          <td>失效材料( 元 )</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>7</td>
          <td>时间延误( 时 )</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>8</td>
          <td>延时扣费( 元 )</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>9</td>
          <td>IQC漏出( 批 )</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>10</td>
          <td>IQC漏出( 件 )</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>11</td>
          <td>IQC失效( 元 )</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>

    <FloatingBall @requestInterface="requestInterface">
      <div class="top-box">
        <div class="tilte">选择车间</div>
        <div class="tree">
          <div class="date">
            <el-date-picker class="datepicker" v-model="value1" @change="handleChange" value-format="yyyy-MM-dd" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" size="mini"> </el-date-picker>
          </div>
          <!-- <el-tree ref="treeRef" :data="data" show-checkbox check-strictly node-key="id" default-expand-all draggable @check="handlercurrent">
            <span class="custom-tree-node" slot-scope="{ node, data }">
              <span>{{ data.name }}</span>
            </span>
          </el-tree> -->
        </div>
      </div>
    </FloatingBall>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
var myVar;
export default {
  name: "failureStatisticsReport",
  data() {
    return {
      loading: true,
      value1: "",
      showFlag: false,
      data: [],
      initParams: {
        token: this.token,
        start_date: "",
        end_date: "",
      },
      gyhj: {},
      tbhj: {},
      tbwj: {},
      tbwp: {},
      tbyj: {},
      order_delay_num: "",
      order_total_num: "",
    };
  },
  created() {
    this.initData();
    this.data = this.treeData;
  },
  filters: {},
  mounted() {
    const td = document.querySelectorAll("table tbody tr > td:nth-child(1)");
    td.forEach((v) => {
      v.style.color = "#b92d5d";
      v.style.width = "22px";
    });
  },
  computed: {
    ...mapGetters(["token", "treeData"]),
  },

  destroyed() {
    clearTimeout(myVar);
  },

  methods: {
    formatInitDate() {
      return this.initParams.start_date ? `${this.initParams.start_date}至${this.initParams.end_date}` : "年 月 日 至 月 日";
    },
    async initData() {
      this.loading = true;
      const resp = await axios({
        method: "GET",
        url: process.env.VUE_APP_INVALID,
        params: {
          token: this.token,
          start_date: this.initParams.start_date,
          end_date: this.initParams.end_date,
        },
      });
      this.gyhj = { ...resp.data.gyhj };
      this.tbhj = { ...resp.data.tbhj };
      this.tbwj = { ...resp.data.tbwj };
      this.tbwp = { ...resp.data.tbwp };
      this.tbyj = { ...resp.data.tbyj };
      this.order_delay_num = resp.data.order_delay_num;
      this.order_total_num = resp.data.order_total_num;
      myVar = setTimeout(() => {
        this.loading = false;
      }, 500);
    },

    requestInterface() {
      if (!this.value1) return;
      this.showFlag = true;
      this.initData();
      this.value1 = "";
    },
    handleChange(value) {
      if (value) {
        this.initParams.start_date = value[0];
        this.initParams.end_date = value[1];
      } else {
        this.initParams.start_date = "";
        this.initParams.end_date = "";
      }
    },
    handlercurrent(data, list) {
      if (data.level === 1) {
        this.$refs.treeRef.setCheckedKeys([data.id]);
      } else if (data.level === 2) {
        list.checkedNodes.forEach((element) => {
          if (element.level === 1) {
            this.$refs.treeRef.setCheckedKeys([data.id]); //取消当前选中节点
          }
        });
      }
      if (this.$route.params.id !== data.code) {
        this.departCode = data.code;
      } else {
        this.$refs.treeRef.setCheckedKeys([]);
      }
    },
    go_qualityManagementReport() {
      this.$router.push({
        path: "/qualityManagementReport",
      });
    },
  },
};
</script>
