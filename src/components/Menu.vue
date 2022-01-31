<template>
  <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
  >
    <el-menu-item @click="toTab(1)" index="1">За номером авто</el-menu-item>
    <el-menu-item @click="toTab(2)" index="2">За параметрами</el-menu-item>
  </el-menu>
  <div class="line"></div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name:"Menu",
  methods:{
    toTab(newTab){
      this.$emit('next', newTab)}
  },
  setup() {
    const activeIndex = ref('1')
    const activeIndex2 = ref('1')
    const handleSelect = (key, keyPath) => {
      console.log(key, keyPath)
    }
    return {
      activeIndex,
      activeIndex2,
      handleSelect,
    }
  },
})
</script>
<style scoped>
.el-menu-demo{
  margin-bottom: 24px;
  width: 50%;
}
.el-menu{
  font-family: Open Sans;
  font-weight: 600;
  font-size: 14px;
}
</style>
