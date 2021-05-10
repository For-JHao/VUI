<template>
  <div>
      <slot></slot>
  </div>
</template>

<script>
export default {
    name:"jh-radio-group",
    props:{
        value:null,
    },
    provide(){
        return{
            groupValue:this
        }
    }
}
</script>

<style>

</style>