<template>
  <div>
      <label
      :class='["switch-label",{"switch-label-on":value}]' 
      @click="switchChange"
      ref="swLabel">
          <span :class='["switch-core",{"switch-core-on":value}]'></span>
      </label>
      <input  type="checkbox" ref="checkbox" :name="name" style="display:contents">
  </div>
</template>

<script>
export default {
    name:"jh-switch",
    props:{
        name:{
            type:String,
            dafalut:''
        },
        value:{
            type:Boolean,
            default:false
        },
        onColor:{
            type:String,
            default:''
        },
        offColor:{
            type:String,
            dafalut:''
        }
    },
    methods:{
        //switch的v-model实现
        switchChange(){
            this.$emit('input',!this.value);
        },
        //用户自定义颜色实现
        setColor(){
            if(this.onColor||this.offColor){
                let style=this.$refs.swLabel.style;
                let color=this.value? this.onColor:this.offColor
                style.backgroundColor=color;
                style.borderColor=color;
            }
        }
    },
    watch:{
        value(){
            this.$refs.checkbox.checked=this.value
            this.setColor()
        }
    },
    mounted(){
        this.setColor()
        this.$refs.checkbox.checked=this.value
    }
}
</script>

<style scope>
.switch-label{
    display: block;
    width: 30px;
    height: 8px;
    border: 1.5px solid black;
    border-radius: 8px;
    position: relative;
    transition: all 0.35s ease;
}
.switch-core{
    display: inline-block;
    width: 8px;
    height: 8px;
    background-color: white;
    border: 1.5px solid black;
    border-radius: 6px;
    position: absolute;
    top: -1px;
    left: -1px;
    transition: all 0.35s ease;
}
.switch-core-on{
    left: 21px;
    background-color: rgb(53, 52, 52);
}
.switch-label-on{
    background-color: rgb(189, 187, 185);
}
</style>