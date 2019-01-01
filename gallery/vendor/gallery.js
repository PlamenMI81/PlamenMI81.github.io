$(document).ready(function () {
  let productsLink = {
    1: 'ups',
    2: 'adaptori',
    3: 'kolektori',
    4: 'kotli',
    5: 'kranove',
    6: 'liri',
    7: 'liri-hrom',
    8: 'obezv',
    9: 'podlojki',
    10: 'pompi',
    11: 'rad-al',
    12: 'rad-pal',
    13: 'razsh-sad',
    14: 'trybi'
  }
  let productsBg = {
    1: 'UPS',
    2: 'адаптори',
    3: 'колектори',
    4: 'котли',
    5: 'кранове',
    6: 'лири',
    7: 'лири хром',
    8: 'обезвъздушители',
    9: 'подложки',
    10: 'помпи',
    11: 'радиатори алуминиеви',
    12: 'радиатори панелни',
    13: 'разширителни съдове',
    14: 'тръби'
  }
  let productsSection = $('.row')
  let fragment = document.createDocumentFragment()
  for (let i = 1; i <= 14; i++) {
    // if (i == 11) continue
    let current = `<div class="col-lg-3 col-md-4 col-sm-6 col-xs-6">
    <a href="./img/${productsLink[i]}/" class="d-block mb-4 h-100">
      <img class="img-fluid img-thumbnail" src="./img/${productsLink[i]}/thumbs/IMG1_tn.jpg" alt="">
      <p>${productsBg[i].toUpperCase()}</p>
    </a>
  </div>`
    $(fragment).append(current)
  }
  productsSection.empty()
  productsSection.append(fragment)
})
