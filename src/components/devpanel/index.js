
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
      setTimeout(`window.open('../pre/guide-2.html',"_self")`, 2000)
    },
    skipFormalGame() {
      window.open('../pre/questionare.html',"_self")
    },
  }
}

