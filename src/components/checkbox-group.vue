<template>
  <div class="check-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "jh-checkbox-group",
  props: {
    value: null,
  },
  provide() {
    return{
        groupValue:this
    };
  },
};
</script>

<style>
</style>