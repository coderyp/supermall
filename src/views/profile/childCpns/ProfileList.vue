<template>
  <div class="list">
    <template v-for="(item, index) in infos" >
      <div class="list-item" :key="index">
        <img :src="'~assets/img/profile/' + item.icon" alt="">
        <span>{{item.info}}</span>
      </div>     
    </template>
  </div>
</template>

<script>
export default {
  name: 'ProfileList',
  props: {
    infos: {
      type: Array,
      default() {
        return []
      }
    }
  },
  compnuted: {
    imgSrc() {
      return '~assets/img/profile/' + this.infos.icon
      
    }
  }
}
</script>

<style>
  .list {
    border-top: 18px solid #f8f8f8;
  }

  .list-item {
    line-height: 50px;
    margin-left: 15px;
    border-bottom: 1px solid #f8f8f8;
  }

  .list-item:last-child {
    border-bottom: none;
  }

  .list-item img {
    width: 20px;
    height: 20px;
    vertical-align: middle;
  }

  .list-item span {
    vertical-align: middle;
    margin-left: 8px;
  }
</style>