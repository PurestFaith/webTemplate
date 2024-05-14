<style scoped lang="scss">
@import url("../style/FloatingBall/FloatingBall.scss");
.qualityManagementReport {
  td {
    padding: 3px;
    width: 30px;
    height: 25px;
    border: 1px solid #dbdcde;
    font-size: 12px;
  }
  th {
    background: #f2f2f2;
    font-weight: 600;
    width: 80px;
    font-size: 13px;
    border: 1px solid #dbdcde;
    height: 25px;
  }
  tr:nth-child(2n -1) {
    background: #fafafa;
  }
  tr:hover {
    background-color: #f5f7fa;
  }
  table {
    min-width: 100%;
    .index {
      width: 60px !important;
    }
    .name {
      width: 120px;
    }
  }
}
</style>

<script>
export default {
  name: "qualityManagementReport",
  data() {
    return {};
  },
  methods: {},
  mounted() {
    const td = document.querySelectorAll("table tbody tr > td:nth-child(1)");
    td.forEach((v) => {
      v.style.color = "#b92d5d";
    });
  },
};
</script>

<template>
  <div class="qualityManagementReport">
    <table>
      <tbody>
        <tr>
          <th class="index" rowspan="2">序号</th>
          <th class="name">质控部长</th>
          <th colspan="4">质控部合计( 次 )</th>
          <th></th>
          <th></th>
          <th colspan="2">一工段</th>
          <th></th>
          <th></th>
          <th colspan="2">二工段</th>
          <th></th>
          <th></th>
          <th colspan="2">三工段</th>
          <th></th>
          <th></th>
          <th colspan="2">四工段</th>
          <th></th>
          <th></th>
          <th colspan="2">五工段</th>
          <th colspan="2"></th>
        </tr>
        <tr>
          <th>姓名</th>
          <th>PQC</th>
          <th>IQC</th>
          <th>OQC</th>
          <th>QA</th>
          <th>PQC</th>
          <th>IQC</th>
          <th>OQC</th>
          <th>QA</th>
          <th>PQC</th>
          <th>IQC</th>
          <th>OQC</th>
          <th>QA</th>
          <th>PQC</th>
          <th>IQC</th>
          <th>OQC</th>
          <th>QA</th>
          <th>PQC</th>
          <th>IQC</th>
          <th>OQC</th>
          <th>QA</th>
          <th>PQC</th>
          <th>IQC</th>
          <th>OQC</th>
          <th>OA</th>
          <th></th>
          <th></th>
        </tr>
        <tr>
          <td>1</td>
          <td>提报合计(单)</td>
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
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>2</td>
          <td>提报未判(单)</td>
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
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>3</td>
          <td>提报未结(单)</td>
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
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>4</td>
          <td>提报已结(单)</td>
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
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>5</td>
          <td>失效材料(元)</td>
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
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>6</td>
          <td>失效时间(分)</td>
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
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>7</td>
          <td>延时费用(元)</td>
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
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>8</td>
          <td>IQC漏出(批)</td>
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
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>9</td>
          <td>IQC漏出(件)</td>
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
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>9</td>
          <td>IQC失效(元)</td>
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
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>

    <FloatingBall>
      <div class="top-box">
        <div class="tilte">qualityManagementReport</div>
        <div class="tree">qualityManagementReport</div>
      </div>
    </FloatingBall>
  </div>
</template>
