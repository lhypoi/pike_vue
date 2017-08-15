<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script type="es6">

(function (doc, win) {
  var docEl
  docEl = doc.documentElement
  var resizeEvt
  resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
  var recalc
  recalc = function () {
    var clientWidth = docEl.clientWidth
    if (!clientWidth) return
    docEl.style.fontSize = 20 * (clientWidth / 640) + 'px'
  }

  if (!doc.addEventListener) return
  win.addEventListener(resizeEvt, recalc, false)
  doc.addEventListener('DOMContentLoaded', recalc, false)
})(document, window)

export default {
  name: 'app',
}
</script>

<style lang="scss">
body{margin: 0;}
*{margin: 0; padding: 0; text-decoration: none; color: #333; list-style: none;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #000;
  text-align: center;
}
</style>
