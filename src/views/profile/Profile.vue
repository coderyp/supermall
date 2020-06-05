<template>
  <div class="profile">
    <nav-bar class="profile-nav"><div slot="center">我的信息</div></nav-bar>
    <profile-header />
    <profile-info />
    <profile-list :infos="orderList" />
    <profile-list :infos="serviceList" />
  </div>
</template>
<script>
import ProfileHeader from './childCpns/ProfileHeader'
import ProfileInfo from './childCpns/ProfileInfo'
import ProfileList from './childCpns/ProfileList'

import NavBar from 'components/common/navbar/NavBar'

export default {
  name: 'Profile',
  data () {
    return {
      orderList: [
        { icon: 'message.png', info: '我的消息' },
        { icon: 'pointer.png', info: '积分商城' },
        { icon: 'vip.png', info: '会员卡' },
      ],
      serviceList: [
        { icon: 'cart.png', info: '我的购物车' },
        { icon: 'app.png', info: '下载购物APP' }]
    }
  },
  components: {
    ProfileHeader,
    ProfileInfo,
    ProfileList,
    NavBar

  }
}

</script>
<style>
  .profile-nav {
    background-color: var(--color-tint);
    color: #fff;
    font-size: 18px;
  }
</style>
