<template>
  <button 
  class="jh-button" :class='[type,{"plain":plain},"round-"+round,{"circle":circle},{"disabled":disabled}]' 
  v-on:click="onClick"
  :disabled="disabled">
      <span><slot></slot></span>
  </button>
</template>

<script>
export default {
    name:'jh-button',
    props:{
        type:{
            validator:function(value){
                return ['confirm','message','remind','warning'].indexOf(value)!==-1
            }
        },
        plain:{
          type:Boolean,
          default:false
        },
        round:{
          default:null,
          validator:function(value){
                return ['left','right'].indexOf(value)!==-1
            },
        },
        circle:{
          type:Boolean,
          default:false,
        },
        disabled:{
          type:Boolean,
          default:false,
        }
    },
    methods:{
      onClick(){
        this.$emit('click')
      }
    },
    created(){
        
    }
}
</script>

<style lang='scss' scoped>
.jh-button{
  line-height: 1;
  cursor: pointer;
  border: 1px solid #dcdfe6;
  color: #606266;
  box-sizing: border-box;
  outline: none;
  transition: 0.1s;
  font-weight: 500;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 6px;
  background-color: rgb(207, 230, 248);
  margin: 2px;
    &:hover {
    color: white;
    border-color: #c6e2ff;
    background-color: #bdd6f3;
  }
}
.confirm{
  background-color: rgb(124, 187, 206);
  border-color: rgb(9, 104, 141);
  &:hover,
  &:focus {
    background-color: rgb(74, 123, 163);
    color: #fff;
  }
}
.message{
  background-color: rgb(145, 149, 151);
  border-color: rgb(13, 13, 14);
  &:hover,
  &:focus {
    background-color: rgb(102, 103, 105);
    color: #fff;
  }
}
.remind{
  background-color: rgb(201, 199, 129);
  border-color: rgb(157, 180, 72);
  &:hover,
  &:focus {
    background-color: rgb(140, 155, 84);
    color: #fff;
  }
}
.warning{
  background-color: rgb(179, 122, 84);
  border-color: rgb(194, 136, 88);
  &:hover,
  &:focus {
    background-color: rgb(223, 68, 41);
    color: #fff;
  }
}
.plain{
  opacity: 0.5; //透明度
  color:white;
  &:hover,
  &:focus{
    opacity: 0.8;
    color:black;
  }
}
.round-right{
  border-radius: 30px 10px;
}
.round-left{
    border-radius: 10px 30px;
}
.circle{
  border-radius: 50%;
  padding: 10px;
  min-width: 40px;
}
.disabled{
  cursor: not-allowed;
  color: black;
  opacity: 0.5;
  background-color: transparent;
}
</style>