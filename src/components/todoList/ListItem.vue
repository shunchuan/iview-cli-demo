<template>
  <li @click="remove">
      <!-- {{itemText}} -->
      {{item.name}}
  </li>
</template>

<script>
export default {
  props: ["item", "index"],
  computed: {
    itemText() {
      return this.item + this.index;
    }
  },
  methods: {
    remove() {
      // alert(this.index)
      this.$emit("removeHander", this.index);
    }
  }
};
</script>
<style scoped>

</style>


