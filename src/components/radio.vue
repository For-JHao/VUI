<template>
  <label class="box">
    <span :class="['circle',{'circleOn':fatherValue == label}]">
      <span :class="{'circle-core ': fatherValue == label}"></span>
      <input
        type="radio"
        :name="name"
        :value="label"
        style="display: contents"
        v-model="fatherValue"
      />
    </span>
    <span :class='["label-text",{"LabelOn":fatherValue == label}]'>
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

<script>
export default {
  name: "jh-radio",
  props: {
    value: {
      default:false
    },
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

<style lang="scss" scope>
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
  .LabelOn{
      color: #2ea3b3;
  }
}
.circle {
  position: relative;
  width: 14px;
  height: 14px;
  border-radius: 7px;
  border: 2px solid black;
  box-sizing: border-box;
  background-color: white;

}  
  .circleOn{
    border-color: #2ea3b3;
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
  background-color: rgb(89, 167, 219);
  transition: all 0.2s ease;
}
</style>