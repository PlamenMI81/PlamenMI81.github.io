$(document).ready(function () {
  $('.modal').modal()

  // Sidenav
  const sideNav = document.querySelector('.sidenav')
  M.Sidenav.init(sideNav, {})

// Slider
  const slider = document.querySelector('.slider')
  M.Slider.init(slider, {
    indicators: true,
    height: 500,
    transition: 500,
    interval: 6000
  })
// ScrollSpy
  const ss = document.querySelectorAll('.scrollspy')
  M.ScrollSpy.init(ss, {})
  let filesCount=119
  let imgList = ''
  for (let i = 1; i <= filesCount; i++) {
    imgList += `<img src="img/toplo_img/img%20(${i}).jpg"  />`
  }
  $(imgList).appendTo('#gallery')

  zoomwall.create(document.getElementById('gallery'))
})
