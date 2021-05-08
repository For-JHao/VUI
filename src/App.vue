<template>
  <div id="app">
    <!-- <div>
      <jh-button>默认</jh-button>
      <jh-button type='message' >信息</jh-button>
      <jh-button type='confirm'>确认</jh-button>
      <jh-button type='remind'>提醒</jh-button>
      <jh-button type='warning'>警告</jh-button>
    </div>
    <div>
      <jh-button plain>默认</jh-button>
      <jh-button plain type='message'>信息</jh-button>
      <jh-button plain type='confirm'>确认</jh-button>
      <jh-button plain type='remind'>提醒</jh-button>
      <jh-button plain type='warning'>警告</jh-button>
    </div> 
      <div>
      <jh-button circle plain >Do</jh-button>
      <jh-button circle plain type='message'>it</jh-button>
      <jh-button circle plain type='confirm'>确认</jh-button>
      <jh-button circle plain type='remind'>提醒</jh-button>
      <jh-button circle plain type='warning'>警告</jh-button>
    </div>
    
      <div>
      <jh-button round="left" plain>Go</jh-button>
      <jh-button round="right" plain type='message'>Go</jh-button>
      <jh-button disabled round="right" plain type='confirm'>sorry</jh-button>
      <jh-button disabled round="right" plain type='remind'>禁用</jh-button>
      <jh-button disabled round="right" plain type='warning'>禁用</jh-button>

    </div> 
    <div>
      <jh-button round="right" plain type='remind'>Go</jh-button>
      <jh-button round="left" plain type='warning'>Go</jh-button>
    </div> -->

  <!-- <div>
    <jh-dialog title="提示" width="40vw" top="20vh" :disabled.sync="disabled" >
      "let's do it"
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
      <template v-slot:title>
        
        </template>
      <template v-slot:foot>
        <jh-button @click="fun()">确认</jh-button>
      </template>
    </jh-dialog>
    <jh-button v-on:click="disabled=true">提示</jh-button>
  </div>
  -->
<!-- <div>
<div>gogog</div>
  <jh-input placeholder="this is userid" type="password" v-model="user.id" clearable value=12345></jh-input>
  <div>haha</div>
  <jh-input placeholder="this is username" type="text" v-model="user.name" clearable></jh-input>
  <label for="male">amale</label>
  <jh-input id="male"></jh-input>
</div> -->

  <jh-switch></jh-switch>
   </div> 
</template>

<script>


export default {
  data(){
    return{
     user:{
       id:"123",
       name:"haha"
     },
    }
  },
  methods:{
}
}
</script>

<style lang="scss">

</style>
