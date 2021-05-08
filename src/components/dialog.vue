<template>
<transition name="dialog-show">
  <div class="backg" v-show="disabled">
      <div class="jhdialog" :style="[{'width':width},{'margin-top':top}]">
          <div class="head">
              <slot name="title">{{title}}
              </slot>
                  <span class="iconfont icon-RectangleCopy4 closeicon" @click="dialogOff"></span>
            </div>
          <div class="body"><slot></slot></div>
          <div class="foot" v-if="$slots.foot" >
              <slot name="foot"></slot>
          </div>
      </div>
  </div>
  </transition>
</template>

<script>
export default {
    name:"jh-dialog",
    props:{
        title:{
            type:String,
            default:"提示"
        },
        width:{
            type:String,
            default:"30vw"
        },
        top:{
            type:String,
            default:"30vh"
        },
        disabled:{
            type:Boolean,
            default:true
        },
    },
    methods:{
        //dialog框的显示隐藏，支持sync
        dialogOff(){
            this.$emit('update:disabled',false)
        }
    }
}
</script>

<style lang="scss" scope>
.backg {
  position: fixed;
  top: 0;
  right: 0;
  bottom: -3vh;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 2001;
  background-color: rgba(0, 0, 0, 0.5);

}  
.jhdialog {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    width: 35vw;
  }
  .jhdialog>div{
      width: 100%;
      box-sizing: border-box;
  }
  .head{
    padding: 20px 20px 10px;
    display: flex;
    justify-content: space-between;
     
  }
.body {
    padding: 30px 20px;
    color: #606266;
    font-size: 14px;
    }
.foot {
    padding: 10px 20px 20px;
    text-align: right;
    box-sizing: border-box;
    }
.dialog-show-leave-to,
.dialog-show-enter{
    opacity: 0;
}
.dialog-show-leave-active{
    transition: opacity 0.20s ease-out;
}
.dialog-show-enter-active{
    transition: opacity 0.20s ease-in;

}
.dialog-show-leave,
.dialog-show-enter-to{
    opacity: 1;
}
.closeicon{
&:hover{
    cursor: pointer;
}
}
</style>