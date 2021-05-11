<template>
  <label>
    <span class="checkbox">
      <span :class="{ 'iconfont icon-gou onCheck': checkValueType() }"></span>
      <input
        type="checkbox"
        style="display: contents"
        :value="label"
        :name="name"
        v-model="checkValue"
      />
    </span>
    <span :class='["label-text",{"text-oncheck":checkValueType()}]'>
      <slot>{{label}}</slot>
    </span>
  </label>
</template>

<script>
export default {
  name: "jh-checkbox",
  props: {
    value: {
        type:[Boolean,Array],
        default:false
    },
    label:{
        type:String,
        default:''
    },
    name: String,
  },
  inject:{
    //groupValue不一定存在，必须设置默认值
    'groupValue':{
      default:''
    }
  },
  methods:{
    checkValueType(){
     return this.checkValue instanceof Array? this.checkValue.includes(this.label) : this.checkValue
    }
  },
  computed:{
    //承接vue对原生checkbox上的v-model操作
      checkValue:{
          set(value){
             this.groupValue==''? this.$emit("input",value): this.groupValue.$emit("input",value)
          },
          get(){
              return this.groupValue==''? this.value: this.groupValue.value
          }
      }
  }
};
</script>

<style lang="scss" scope>
.checkbox {
  display: inline-block;
  position: relative;
  cursor: pointer;
  height: 12px;
  width: 12px;
  border: 1px solid rgb(21, 72, 105);
  border-radius: 4px;
  opacity: 0.8;
  &:hover {
    background-color: rgb(171, 201, 221);
  }
  .onCheck {
    position: absolute;
    top: -3px;
  }
}
.label-text {
  margin: 6px;
}
.text-oncheck{
  color: rgb(46 163 179);
}
</style>