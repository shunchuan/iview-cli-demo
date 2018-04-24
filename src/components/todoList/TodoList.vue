<template>
  <div id="TodoList">
    <Input size="large" placeholder="请输入列表数据" v-model="itemValue"></Input>
    <Button type="primary" size="large" @click="add" long>添加</Button>
    <ul>
        <list-item
            v-for=" 
                (item ,index) in list " 
                :key="index"  
                :index="index" 
                :item="item"
                @removeHander="removeHander"
                >
        </list-item>
    </ul>
    <Table highlight-row ref="currentRowTable" :columns="columns" :data="list"></Table>
  </div>
</template>

<script>
import ListItem from "./ListItem";
export default {
  components: {
    "list-item": ListItem
  },
  data() {
    return {
      columns: [
        {
          type: "index",
          width: 60,
          align: "center"
        },
        {
          title: "Name",
          key: "name"
        }
      ],
      itemValue: "",
      list: []
    };
  },
  computed: {
    itemText() {
      return "";
    }
  },
  methods: {
    add() {
      this.list.unshift({ name: this.itemValue });
      //   this.list.push(this.itemValue);
      this.itemValue = "";
    },
    removeHander(index) {
      //   alert(index);
      this.list.splice(index, 1);
    }
  }
};
</script>
<style scoped>

</style>


