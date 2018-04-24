<template>
  <div class="main-container">
        <container>
          <!-- 面包屑 -->
          <Breadcrumb>
            <Breadcrumb-item href="/">
              <Icon type="ios-home-outline"></Icon>
              Home
            </Breadcrumb-item>
            <Breadcrumb-item>
              <Icon type="pound"></Icon>
              {{state.router.currentPageName}}
            </Breadcrumb-item>
          </Breadcrumb>
          <!-- 面包屑 /-->
          <!-- 路由 -->
          <transition name="fade" mode="out-in">
            <router-view></router-view>
          </transition>
          <!-- 路由/ -->
        </container>
      </div>
</template>
<script>
import Container from "../container/Container";
export default {
  components: {
    Container
  },
  methods: {
    /**
     * 选择菜单
     */
    selectFn(a) {
      console.log(a, this.$route.path);
      this.$router.push({
        path: a
      });
    }
  },
  computed: {
    state() {
      return this.$store.state.app;
    },
    langList() {
      return this.$store.state.app.langList;
    }
  },
  mounted() {}
};
</script>
<style scoped>

</style>

