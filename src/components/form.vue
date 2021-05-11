<template>
  <div class="form" :style='{width:labelWidth}'>
      <slot></slot>
  </div>
</template>

<script>
export default {
    name:"jh-form",
    props:{
        value:{
            type:Object,
            require:true
        },
        labelWidth:{
            type:String,
            default:""
        }
    },
  

}
</script>

<style>
</style>