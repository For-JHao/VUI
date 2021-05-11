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

    <!-- <div>
      <jh-switch v-model="change" on-color="red" off-color="blue"></jh-switch>
      <jh-switch v-model="change" on-color="red" off-color="blue"></jh-switch>
      <jh-switch v-model="ch"></jh-switch>
    </div> -->

    <!-- <div>
      <jh-radio label="1" v-model="sign">male</jh-radio>
      <jh-radio label="2" v-model="sign">female</jh-radio>

      <jh-radio label="3" v-model="sign"></jh-radio>
      <jh-radio label="4" v-model="sign"></jh-radio>

      <jh-radio-group v-model="sign">
        <jh-radio label="5"></jh-radio>
        <jh-radio label="6"></jh-radio>
      </jh-radio-group>

      <jh-radio label="7"></jh-radio>
      <jh-radio label="8"></jh-radio>
    </div> -->

    <!-- <div>
      <jh-checkbox label="1" v-model="sign"></jh-checkbox>
      <jh-checkbox label="2" v-model="sign">b</jh-checkbox>
      <jh-checkbox label="" v-model="sign"></jh-checkbox>
      <jh-checkbox v-model="sign">c</jh-checkbox>
      <br />

      <jh-checkbox label="4" v-model="array"></jh-checkbox>
      <jh-checkbox label="5" v-model="array">b</jh-checkbox>
      <jh-checkbox label="" v-model="array"></jh-checkbox>
      <jh-checkbox v-model="array"></jh-checkbox>
      <br />

      <jh-checkbox-group v-model="array">
        <jh-checkbox label="4">gogo</jh-checkbox>
        <jh-checkbox label="5">finnish</jh-checkbox>
        <jh-checkbox label=""></jh-checkbox>
        <jh-checkbox></jh-checkbox>
      </jh-checkbox-group>
    </div> -->

    <jh-form v-model="userInfo" label-width="400px">
      <jh-form-item label="username">
        <jh-input placeholder="username" v-model="userInfo.username"></jh-input>
      </jh-form-item>
      <jh-form-item label="gender">
        <jh-radio-group v-model="userInfo.gender">
          <jh-radio label="male">male</jh-radio>
          <jh-radio label="female">female</jh-radio>
        </jh-radio-group>
      </jh-form-item>
      <jh-form-item label="adult">
        <jh-switch v-model="userInfo.isAdult"></jh-switch>
      </jh-form-item>
      <jh-form-item label="skill">
        <jh-checkbox-group v-model="userInfo.skill">
          <jh-checkbox label="唱歌"></jh-checkbox>
          <jh-checkbox label="跳舞"></jh-checkbox>
          <jh-checkbox label="绘画"></jh-checkbox>
        </jh-checkbox-group>
      </jh-form-item>
      <jh-form-item>
        <jh-button>确认</jh-button>
      </jh-form-item>
    </jh-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sign: false,
      array: [],
      userInfo: {
        username: "",
        gender: "",
        isAdult: false,
        skill: [],
      },
    };
  },
  methods: {},
};
</script>

<style lang="scss">
</style>
