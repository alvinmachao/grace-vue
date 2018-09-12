<template>
  <div class="studio_index">
    <div v-html="html"></div>  
  </div>
</template>
import 
<script>
export default {
  data() {
    return {
      html: ""
    };
  },
  components: {},
  async mounted() {
    // var a = await this.$api.user.test();
    // this.html = a.data;
    // console.log(a);
    // $("#aa").load(
    //   "/biubiubiu/static/public/templatesBox/box/test.html",
    //   res => {
    //     window.Template.setTemplateData(
    //       "",
    //       "/biubiubiu/static/public/templatesBox/box/timg.jpg"
    //     );
    //   }
    // );
  }
};
</script>

<style lang="less">
.studio_index {
  width: 1000px;
  height: 500px;
  #aa {
    width: 100%;
    height: 100%;
  }
}
</style>
