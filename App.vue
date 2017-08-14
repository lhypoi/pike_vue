<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script type="es6">

export default {
  name: 'app',
}
</script>

<style lang="scss">
body{margin: 0;}
*{margin: 0; padding: 0; text-decoration: none; color: #333; list-style: none;}
.clearfix:after{content:"."; display:block; height:0; clear:both; visibility:hidden;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #000;
  text-align: center;
}
</style>
