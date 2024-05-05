<style scoped lang="scss">
@import url("../style/FloatingBall/FloatingBall.scss");
.settlementVoucher {
  td {
    padding: 3px;
    width: 70px;
    height: 25px;
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
    pre {
      font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial, sans-serif;
    }
  }
  .redwineRed {
    color: #c5567b;
    font-weight: normal;
  }
  tr:nth-child(2n -1) {
    background: #fafafa;
  }
  tr:hover {
    background-color: #f5f7fa;
  }
  table {
    width: 100%;
  }
}
</style>

<template>
  <div class="settlementVoucher">
    <table>
      <tbody>
        <tr>
          <th colspan="13">
            <pre> 生产部第            车间xx工段ERP                         号xxx开关xxx型号 M022A29003制令单，数量xxx只的结算凭证</pre>
          </th>
        </tr>
        <tr>
          <th rowspan="2">序号</th>
          <th colspan="9">
            <pre>本入库单                    号，数量              只，每只总定额              元，合计               元。</pre>
          </th>
          <th colspan="2">延误交货</th>
          <th rowspan="2">备注说明</th>
        </tr>
        <tr>
          <th>分红人数 人</th>
          <th class="redwineRed">装配</th>
          <th class="redwineRed">管理</th>
          <th class="redwineRed">生产</th>
          <th class="redwineRed">技术</th>
          <th class="redwineRed">设备</th>
          <th class="redwineRed">OQC</th>
          <th class="redwineRed">QA</th>
          <th class="redwineRed">IQC</th>
          <th class="redwineRed">采购</th>
          <th>小时</th>
        </tr>
        <tr v-for="(item, index) in 13">
          <td>{{ index + 1 }}</td>
          <td>分红人姓名</td>
          <td class="redwineRed">定额</td>
          <td class="redwineRed">主任</td>
          <td class="redwineRed">工段长</td>
          <td class="redwineRed">技术员</td>
          <td class="redwineRed">维护员</td>
          <td class="redwineRed">检测员</td>
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
        <div class="tilte">settlementVoucher</div>
        <div class="tree">pageBpageBpagepageB</div>
      </div>
    </FloatingBall>
  </div>
</template>

<script>
export default {
  name: "settlementVoucher",
  data() {
    return {};
  },
  methods: {},
};
</script>
