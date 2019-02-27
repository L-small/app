<template>
  <div class="header">
    <p>{{title}}</p>
  </div>
</template>
<script>
export default {
  props: ['title']
}
</script>

<style scoped>
.header {
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 999;
  width: 100%;
  height: 49px;
  /* background: #6fc181; */
  background: #50a095;
  color: #fff;
  text-align: center;
  font-size: 14px;
  line-height: 49px;
}
</style>
