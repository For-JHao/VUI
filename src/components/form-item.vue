<template>
  <div class="form-item">
    <label class="label" v-if="label != ''" ref="itemLabel">{{ label }}</label>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "jh-form-item",
  props: {
    label: {
      type: [String, Number],
      default: "",
    },
  },
};
</script>

<style lang="scss" scope>
.form-item {
  display: flex;
  align-items: center;
  height: 40px;
  .label {
    width: 80px;
    margin-right: 15px;
  }
}
</style>