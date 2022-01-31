<template>
  <el-row>
    <el-button class="default">{{text}}</el-button>
  </el-row>
</template>

<script>
export default {
  name: "ButtonDefaultAuto",
  props:{
    text: String,
  }
}
</script>

<style scoped>
.default{
  font-weight: 600;
  font-size: 14px;
  font-family: Raleway;
  color: #757575;
  width: 165px;
  height: 48px;
  margin-right: 20px;
}
@media (max-width: 480px) {
  .default{
    width: 328px;
  }
}
.el-button{
  --el-button-active-border-color: none;
  --el-button-active-bg-color: none;
  --el-button-hover-bg-color: none;
  --el-button-hover-border-color: none;
}
</style>

