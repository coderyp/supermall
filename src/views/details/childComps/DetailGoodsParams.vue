<template>
  <div class="param-info" v-if="Object.keys(goodParams).length !== 0" >
    <table class="info-size" :key="index" v-for="(table, index) in goodParams.sizes">
      <tr  v-for="(tr,indey) in table" :key="indey">
        <td v-for="(item, indez) in tr" :key="indez">{{ item }}</td>
      </tr>
    </table>
    <table class="info-param">
      <tr  v-for="(info,index) in goodParams.info" :key="index">
        <td class="info-params-key">{{ info.key }}</td>
        <td class="info-params-value" >{{ info.value }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'DetailGoodsParams',
  props: {
    goodParams: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
  .param-info {
    padding: 20px 15px;
    border-bottom: 5px solid #f2f5f8;
  }
  .param-info table {
    width: 100%;
    border-collapse: collapse;
  }

  .param-info table tr {
    height: 42px;
  }

  .param-info table tr td {
    border-bottom: 1px solid rgba(100, 100, 100, .1);
  }

  .info-size td {
    width: 20%;
  }

  .info-param {
    border-top: 1px solid rgba(0,0,0, .1);
  }

  .info-params-key {
    width: 95px;
  }
  .info-params-value {
    color: #eb4868;
  }
</style>