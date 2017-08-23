import Vue from 'vue'

Vue.directive('touchmmh', function (el, binding) {
  var oDiv = el
  var x = 0
  var y = 0
  var left
  var mx
  oDiv.addEventListener('touchstart', function (e) {
    if (e.touches.length > 1) {
      return false
    }
    left = oDiv.offsetLeft
    x = e.touches[0].clientX + Math.abs(left)
    y = e.touches[0].clientY
    // e.preventDefault()
  }, false)
  oDiv.addEventListener('touchmove', function (e) {
    var touch = e.touches[0]
    mx = touch.clientX - x
    var my = touch.clientY - y
    var isScrolling = Math.abs(mx) < Math.abs(my) ? 1 : 0
    if (isScrolling === 0) {
      // e.preventDefault()
      if (oDiv.offsetWidth + mx <= oDiv.parentNode.offsetWidth) {
        oDiv.style.left = oDiv.parentNode.offsetWidth - oDiv.offsetWidth + 'px'
        return
      } else if (mx >= 0) {
        oDiv.style.left = 0 + 'px'
        return
      } else {
        oDiv.style.left = mx + 'px'
      }
    }
  }, false)
  oDiv.addEventListener('touchend', function (e) {
  }, false)
})
