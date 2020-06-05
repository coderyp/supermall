<template>
  <div>
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{ total }})</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import { mapGetters } from 'vuex'

export default {
  name: 'CartNavBar',
  components: {
    NavBar
  },
  computed: {
    // ...mapGetters(['getTotal'])
    ...mapGetters({
      'total': 'getTotal'
    })
  }
}
</script>

<style scoped>
  .nav-bar {
    background-color: var(--color-tint);
    font-size: 18px;
    color: #fff;
  }
</style>