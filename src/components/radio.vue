<template>
  <label class="box">
    <span class="circle">
      <span :class="{ 'circle-core': fatherValue == label }"></span>
      <input
        type="radio"
        :name="name"
        :value="label"
        style="display: contents"
        v-model="fatherValue"
      />
    </span>
    <span class="label-text">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

<script>
export default {
  name: "jh-radio",
  props: {
    value: null,
    label: null,
    name: String,
  },
  inject: {
    //接收radio-group的provide
    groupValue: {
      default: undefined,
    },
  },
  computed: {
    //v-model不能直接监听props的value，故使用computed
    fatherValue: {
      set(value) {
        this.groupValue
          ? this.groupValue.$emit("input", value)
          : this.$emit("input", value);
      },
      get() {
        return this.groupValue ? this.groupValue.value : this.value;
      },
    },
  },
};
</script>

<style lang="scss">
.box {
  display: inline-flex;
  align-items: center;
  margin: 5px;
  height: 25px;
  cursor: pointer;
  &:hover {
    .circle {
      background-color: rgb(188, 190, 192);
    }
  }
}
.circle {
  position: relative;
  width: 14px;
  height: 14px;
  border-radius: 7px;
  border: 2px solid rgb(143, 171, 204);
  box-sizing: border-box;
  background-color: white;
}
.label-text {
  margin-left: 5px;
  cursor: pointer;
}
.circle-core {
  display: block;
  width: 5px;
  height: 5px;
  border-radius: 2.5px;
  position: absolute;
  top: 2.5px;
  left: 2.5px;
  background-color: rgb(50, 101, 196);
  transition: all 0.2s ease;
}
</style>