<template>
 <transition name="alvin-transition" mode="out-in">   
   <slot></slot>
 </transition>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  components: {}
};
</script>

<style lang="less">
.alvin-transition-enter-active,
.alvin-transition-leave-active {
  transition: all 0.3s;
}
.alvin-transition-enter {
  opacity: 0;
}
.alvin-transition-leave-to {
  opacity: 0;
}
</style>
