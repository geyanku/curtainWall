<!--
  author: za-geyan
  desc: 祝福墙弹幕组件
  date: 2018-06-28 11:30:00
-->
<template>
  <div ref="wall" class="c-benedition-wall">
  </div>
</template>

<script>
  import Benediction from './Benediction'

  import { FONTSIZE, WALLHEIGHT, MAXDURATION, DURATIONRANGE, DELAYRANGE } from './constant'

  export default {
    data() {
      return {
        playList: []
      }
    },
    methods: {
      getRandomOffset() {
        // 获取不会遮挡其他弹幕的高度
        const height = WALLHEIGHT - FONTSIZE  // 防止文字溢出下边缘
        return parseInt(Math.random() * height)
      },
      getRandomSpeed() {
        // 获取弹幕划过时间
        return (MAXDURATION + parseInt(DURATIONRANGE * Math.random()))
      },
      init() {
        let curDelay = 0
        // 初始化列表
        this.benedList.forEach((item) => {
          curDelay += parseInt(Math.random() * DELAYRANGE)
          let obj = new Benediction(this.$refs.wall, item, this.getRandomSpeed(), curDelay, true)
          this.playList.push(obj)
        })
      }
    },
    mounted() {
      this.init()
    },
    props: {
      benedList: {
        type: Array,
        default: () => []
      },
    },
  }
</script>

<style lang="scss">
  .c-benedition-wall {
    width: 100%;
    height: 200px;
    position: relative;

    p {
      position: absolute;
      top: 0;
      width: 100%;
      text-align: right;
      font-family: "PingFang SC";
      span {
        color: rgb(251, 242, 213);
        line-height: 1.2;
        background-color: rgba(0, 0, 0, .2);
        border-radius: 7px;
        padding:0 10px;
      }

      &.play {
        transform: translateX(100%);
      }
    }
  }
</style>