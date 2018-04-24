<template>
  <div class="header">
      <Row type="flex" justify="start" class="code-row-bg">
          <Col class="head-text" span="4"><toggleSideBar></toggleSideBar></Col>
          <HeadList v-for="(item,index ) in headList" :key="index" :span="parseInt((24-16)/headList.length)" :item="item"></HeadList>
          <!-- <Col class="head-text" span="4"><Icon type="heart"></Icon>{{$t('guide')}}</Col>
          <Col class="head-text" span="4"><Icon type="heart"></Icon>{{$t('overview')}}</Col> -->
          <Col class="head-text" span="4"><User></User></Col>
          <Col class="head-text" span="4">
          <!-- <Lang></Lang> -->
          <LangList></LangList>
          </Col>
          <Col class="head-text" span="4"><toggleScreen></toggleScreen></Col>
      </Row>
  </div>
</template>

<script>
import toggleScreen from "../Toggle/ToggleScreen";
import toggleSideBar from "../Toggle/toggleSideBar";
import User from "../user/User";
import Lang from "../Lang";
import LangList from "../LangList";
import HeadList from "./HeadList";
export default {
  name: "theader",
  components: {
    toggleScreen,
    toggleSideBar,
    User,
    Lang,
    LangList: LangList,
    HeadList
  },
  data() {
    return {
      screen: false,
      headList: [
        {
          icontype: "heart",
          value: "guide",
          path:"/index2"
        },
        {
          icontype: "heart",
          value: "overview",
          path:"/list"
        },
        {
          icontype: "heart",
          value: "overview",
          path:"/list"
        }
      ]
    };
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch("ToggleSideBar");
    }
  }
};
</script>
<style>
.msg-group-box {
  float: right;
  font-size: 1em;
}
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
