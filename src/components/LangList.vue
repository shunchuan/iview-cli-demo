<template>
    <Select v-model="lang" size="small" @on-change="changeLang"
        style="width:80px;position:relative;margin-top: -8px">
        <Option v-for="item in langList" :value="item.value" :key="item.value">{{ item.label }}</Option>
    </Select>
</template>
<script>
export default {
  data() {
      return {
          lang: 'CN'
      }
  },
  created() {
    this.lang = this.$store.state.app.lang;
  },
  computed: {
    state() {
      return this.$store.state.app;
    },
    langList() {
      return this.$store.state.app.langList;
    }
  },
  methods: {
    /* 改变语言 */
    changeLang() {
      this.$store.commit("SET_LANG", this.lang);
      window.location.reload();
    }
  }
};
</script>

