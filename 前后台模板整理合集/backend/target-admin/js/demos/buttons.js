$(function () {
  $('#loading-ex-1').click (function () {
    var btn = $(this)
    btn.button('loading')
    setTimeout(function () {
      btn.button('reset')
    }, 3000)
  })
})