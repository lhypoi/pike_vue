import Vue from 'vue'

Vue.directive('touchmmh', function (el, binding) {
  var oDiv = el
  var x = 0

  oDiv.addEventListener('touchstart', function (e) {
    if (e.touches.length > 1) {
      return false
    }
    x = e.touches[0].clientX
    e.preventDefault()
  }, false)
  oDiv.addEventListener('touchmove', function (e) {
    var touch = e.touches[0]
    console.log(2)
    var mx = touch.clientX - x
    oDiv.style.left = mx + 'px'
  }, false)
  oDiv.addEventListener('touchend', function (ev) {
  }, false)
})
