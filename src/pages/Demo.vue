<template>
  <div class="demo-page">
    <curtain-wall :bened-list="curtainList"></curtain-wall>
  </div>
</template>

<script>
import CurtainWall from '@/components/CurtainWall'
export default {
  name: 'DemoPage',
  data () {
    return {
      curtainList: [
        '我是第一条弹幕',
        '我不是第三条弹幕，我是第二条',
        '我其实才是第三条弹幕',
        '我是第四条弹幕'
      ]
    }
  },
  components: {
    CurtainWall
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
