
export default {
  name: 'Devpanel',
  data() {
    return {
      ifPanel: true
    }
  },
  computed: {
    // linkTitle: () => i18n.linkTitle[lan],
  },
  mounted() {
    // window.addEventListener('resize', this.resize.bind(this), true)
  },
  methods: {
    skipPractice() {
      this.$store.commit('reset', true)  // 重启游戏
      // setTimeout(`window.open('../pre/guide-2.html?condition=' + this.$store.state.speedCondition,"_self")`, 1200)
      let a = '../pre/guide-2.html?condition=' + this.$store.state.speedCondition
      setTimeout(function() {window.location.href = a}, 1200);
    },
    skipFormalGame() {
      window.open('../pre/guide-3.html',"_self")
    }
  }
}

