<template>
  <div class="app-wrapper">
    <SideBar></SideBar>
    <!-- 主体 -->
    <div class="main-wrapper">
      <!-- 头部 -->
      <THeader>
      </THeader>
      <!-- 头部 /-->
      <!-- 内容部分 -->
      <Main></Main>
      <!-- 内容部分 /-->
    </div>
    <!-- 主体 /-->
  </div>
</template>
<script>
import SideBar from "./sideBar/SideBar";
import THeader from "./header/THeader";
import NavBar from "./navbar/NavBar";
import Main from "./main/Main";
import User from "./user/User";
// import Cookies from 'js-cookie'
import bus from "./bus";

export default {
  name: "full",
  components: {
    THeader,
    SideBar,
    Main,
    NavBar,
    User
  },
  data() {
    return {
      lang: this.$lang,
      fee: true
    };
  },
  computed: {
    loading() {
      return bus.loading;
    }
  },
  mounted() {
    this.lang = this.$lang;
  }
};
</script>
<style >

.head-text {
  line-height: 50px;
}
</style>





<!-- Add "scoped" attribute to limit CSS to this component only -->
