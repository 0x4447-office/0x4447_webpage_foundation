<template>
  <ParentLayout>
    <template #page-bottom>
      <div class="layout-footer">
          Est. 2016, Copr. <a href="https://0x4447.com">0x4447, LLC.</a>
      </div>
    </template>
  </ParentLayout>
</template>

<script>
import ParentLayout from "@parent-theme/layouts/Layout.vue";
export default {
  name: "Layout",
  components: {
    ParentLayout
  }
};
</script>

<style lang="stylus">
  .layout-footer
    padding: 40px 0;
    border-top: 1px solid #eaecef;
    text-align: center;
    color: #4e6e8e;
</style>
