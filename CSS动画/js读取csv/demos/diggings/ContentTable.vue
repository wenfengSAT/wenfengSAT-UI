<template>
  <div class="">
    <table aria-describedby="监测维度" class="w-100 mt-1 demo-tabel">
      <tr>
        <th scope="col" class="text-left pl-2">监测维度</th>
        <th scope="col">基准数值</th>
        <th scope="col">预警值</th>
        <th scope="col">最新监测数值</th>
        <th scope="col">上期监测数值</th>
        <th scope="col">新增数值</th>
        <th scope="col">超采量</th>
      </tr>
      <tr>
        <td class="text-left pl-2 font-weight-bold">高程（m）</td>
        <td>1160.00</td>
        <td>1180.00</td>
        <td>1190.00</td>
        <td>1216.00</td>
        <td>-26.00</td>
        <td>-30.00</td>
      </tr>
      <tr>
        <td class="text-left pl-2 font-weight-bold">面积（km²）</td>
        <td>0.78</td>
        <td>0.65</td>
        <td class="demo-badge-num">0.88</td>
        <td class="demo-badge-num">0.80</td>
        <td>+0.08</td>
        <td class="demo-badge-num">+0.10</td>
      </tr>
      <tr>
        <td class="text-left pl-2 font-weight-bold"> 挖方（万m³ ）</td>
        <td>80.00</td>
        <td>70.00</td>
        <td class="demo-badge-num">94.60</td>
        <td class="demo-badge-blue">71.40</td>
        <td>23.20</td>
        <td class="demo-badge-num">+14.60</td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  title: '内容表格统计',
  data() {
    return {};
  },
};
</script>
<style lang="scss">
  .demo-tabel {
    border-collapse: collapse;
    text-align: center;
    td,
    th {
      border: 1px solid #ccc;
      height: 40px;
      min-width: 100px;
    }
  }
  .demo-badge-num {
    color: #FF6600;
    font-weight: bold;
  }
  .demo-badge-blue {
    color: #409EFF;
    font-weight: bold;
  }
</style>
