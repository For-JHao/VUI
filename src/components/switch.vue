<template>
  <div>
      <label class="switch-label">
          <span class="switch-border"></span>
          <span class="switch-button"></span>
      </label>
  </div>
</template>

<script>
export default {
    name:"jh-switch"
}
</script>

<style >
.switch-label{
    display: block;
    width: 30px;
    height: 8px;
    border: 1.5px solid black;
    border-radius: 8px;
    position: relative;
}
.switch-border{
    display: inline-block;
    width: 7px;
    height: 7px;
    border: 1.5px solid black;
    border-radius: 6px;
    position: absolute;
    top: -1px;
    left: -1px;
}

</style>