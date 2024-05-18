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
    min-width: 100%;
    height: 100%;
    table-layout: fixed;
    .index {
      width: 20px !important;
    }
    .text {
      width: 60px;
    }
  }
  .date {
    margin-top: 10px;
    .datepicker {
      font-size: 20px;
    }
  }
}
</style>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
import { convertToyyyyMMdd } from "@/utils/formatTimer";
import dayjs from "dayjs";
// dayjs英转中插件
var toObject = require("dayjs/plugin/toObject");
dayjs.extend(toObject);
var myVar;
export default {
  name: "failureStatisticsReport",
  data() {
    return {
      loading: true,
      dep_title: "",
      defaultDate: [],
      data: [],
      params: {
        token: this.token,
        start_date: convertToyyyyMMdd(new Date())[0],
        end_date: convertToyyyyMMdd(new Date())[1],
        dep: "",
      },
      searchData: {
        token: "",
        start_date: "",
        end_date: "",
        dep: "",
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
    // 默认当年的日期
    this.defaultDate = convertToyyyyMMdd(new Date());
    this.searchData.token = this.token;
    this.searchData.start_date = convertToyyyyMMdd(new Date())[0];
    this.searchData.end_date = convertToyyyyMMdd(new Date())[1];

    const stashObj = JSON.parse(localStorage.getItem("currentPageData"));
    if (!stashObj) {
      this.params = { ...this.params, ...this.searchData };
    } else {
      this.params = stashObj.searchData;
    }

    this.$nextTick(() => {
      const TREE_NODES = JSON.parse(localStorage.getItem("TreeNodes"));
      const VALUE = JSON.parse(localStorage.getItem("currentPageData"))?.defaultDate;
      if (TREE_NODES) {
        this.$refs.tree.setCheckedNodes(TREE_NODES);
      }
      if (VALUE) {
        this.defaultDate = VALUE;
        this.searchData.start_date = VALUE[0];
        this.searchData.end_date = VALUE[1];
      }
    });
    this.initData();
  },

  mounted() {
    const td = document.querySelectorAll("table tbody tr > td:nth-child(1)");
    td.forEach((v) => {
      v.style.color = "#b92d5d";
    });
  },

  methods: {
    name() {
      const stashObj = JSON.parse(localStorage.getItem("currentPageData"));
      if (stashObj) {
        return stashObj.dep_title;
      } else {
        return "";
      }
    },

    formatInitDate() {
      return `${this.params.start_date}至${this.params.end_date}`;
    },

    async initData() {
      this.loading = true;
      const resp = await axios({
        method: "GET",
        url: process.env.VUE_APP_INVALID,
        params: this.params,
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

    handleChange(value) {
      if (value) {
        this.searchData.start_date = value[0];
        this.searchData.end_date = value[1];
      } else {
        this.searchData.start_date = "";
        this.searchData.end_date = "";
      }
    },

    filterData() {
      this.searchData.token = this.token;
      this.params = { ...this.params, ...this.searchData };
      localStorage.setItem("currentPageData", JSON.stringify(this.$data));
      this.initData();
    },

    handlercurrent(data, checked) {
      checked.checkedNodes.forEach((ele) => {
        this.$refs.tree.setCheckedKeys([data.id]);
      });
      if (this.$route.params.id !== data.code) {
        let res = this.$refs.tree.getCheckedNodes();
        if (res[0]) {
          this.searchData.dep = res[0].code;
          this.dep_title = res[0].name;
          localStorage.setItem("currentPageData", JSON.stringify(this.$data));
          localStorage.setItem("TreeNodes", JSON.stringify(res));
        } else {
          this.searchData.dep = "";
          this.dep_title = "";
          this.$refs.tree.setCheckedKeys([]);
          localStorage.setItem("TreeNodes", JSON.stringify(res));
        }
      }
    },

    go_qualityManagementReport() {
      this.$router.push({
        path: "/qualityManagementReport",
      });
    },
  },

  computed: {
    ...mapGetters(["token", "setEerTreeData"]),
  },

  destroyed() {
    clearTimeout(myVar);
  },
  beforeRouteLeave(to, from, next) {
    if (to.name === "layout") {
      localStorage.removeItem("currentPageData");
      localStorage.removeItem("TreeNodes");
    }
    next();
  },
};
</script>

<template>
  <div class="failureStatisticsReport">
    <table v-loading="loading" element-loading-text="加载中">
      <tbody>
        <tr>
          <th colspan="13">生产部{{ name() }}{{ formatInitDate() }}入库（{{ order_total_num }}）单，延误（{{ order_delay_num }}）单管理统计</th>
        </tr>
        <tr>
          <th class="index" rowspan="2">序号</th>
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
          <td class="index">1</td>
          <td class="text">管异合计( 件 )</td>
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
          <td class="index">2</td>
          <td class="text">提报合计( 单 )</td>
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
          <td class="index">3</td>
          <td class="text">提报未判( 单 )</td>
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
          <td class="index">4</td>
          <td class="text">提报未结( 单 )</td>
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
          <td class="index">5</td>
          <td class="text">提报已结( 单 )</td>
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
          <td class="index">6</td>
          <td class="text">失效材料( 元 )</td>
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
          <td class="index">7</td>
          <td class="text">时间延误( 时 )</td>
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
          <td class="index">8</td>
          <td class="text">延时扣费( 元 )</td>
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
          <td class="index">9</td>
          <td class="text">IQC漏出( 批 )</td>
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
          <td class="index">10</td>
          <td class="text">IQC漏出( 件 )</td>
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
          <td class="index">11</td>
          <td class="text">IQC失效( 元 )</td>
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

    <FloatingBall>
      <div class="top-box">
        <div class="tilte">选择日期</div>
        <div class="tree">
          <div class="date">
            <el-date-picker class="datepicker" :clearable="false" v-model="defaultDate" @change="handleChange" value-format="yyyy-MM-dd" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" size="mini"> </el-date-picker>
          </div>
          <div style="margin: 25px 0 10px 0; color: #7f7f7f">选择车间</div>
          <el-tree ref="tree" :data="setEerTreeData" show-checkbox node-key="id" default-expand-all draggable @check="handlercurrent">
            <span class="custom-tree-node" slot-scope="{ node, data }">
              <span>{{ data.name }}</span>
            </span>
          </el-tree>
        </div>
      </div>
      <el-button type="primary" size="mini" @click="filterData">查询</el-button>
    </FloatingBall>
  </div>
</template>
