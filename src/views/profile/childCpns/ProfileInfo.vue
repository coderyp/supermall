<template>
  <div class="info">
    <div class="balance info-item">
      <span class="count">{{balance}}</span>元
      <div>我的余额</div>
    </div>
    <div class="preference info-item">
      <span class="count">{{preference}}</span>个
      <div>我的优惠</div>
    </div>
    <div class="integration info-item">
      <span class="count">{{integration}}</span>元
      <div>我的积分</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileInfo',
  data() {
    return {
      balance: 0.00,
      preference: 0,
      integration: 0
    }
  }
}
</script>

<style>
  .info {
    display: flex;
    text-align: center;
    justify-content: space-between;
    font-size: 14px;
    background: #f8f8f8;
    padding: 24px;
  }

  .count {
  color: #ff5f3e;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.5;
  }

</style>