<template>
  <div>
      <input 
      :name="name"
      :id="id"
      :placeholder="placeholder" 
      :type="type" 
      :disabled="disabled" 
      :value="value"
      @input="userInput"
      :class='{"is-disabled":disabled}'/>
       <span style="position:relative">
           <i :class='["iconfont", "icon-jian", {"clearable": type=="password"? false:clearable}]'
           style="font-size:16px" 
           v-if="type!='password'&&clearable"
           @click="clearValue"
           >
           </i>
       </span>
  </div>
</template>

<script>
export default {
    name:"jh-input",
    props:{
        name:String,
        id:String,
        value:String,
        placeholder:String,
        type:String,
        disabled:{
            type:Boolean,
            default:false
        },
        clearable:{
            type:Boolean,
            default:false,
        },
    },
    methods:{
        //结合value，实现v-model的双向数据绑定
        userInput(event){
            this.$emit("input",event.target.value)
        },
        //clearable实现，需要组件绑定input事件或使用了v-model
        clearValue(){ 
            this.$emit("input","")
        }
    }
}
</script>

<style scope>
.is-disabled{
    cursor: not-allowed;
}
.clearable{
    position: absolute;
    left: -16px;
    top: 5px;
}
</style>