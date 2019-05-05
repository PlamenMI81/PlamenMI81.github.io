$(document).ready(function () {
  let productsLink = {
    1: 'alum_rad',
    2: 'panelni_rad',
    3: 'liri',
    4: 'auto_obezv',
    5: 'adaptori',
    6: 'garnituri',
    7: 'kit',
    8: 'kolektori_podovo',
    9: 'kolektori',
    10: 'podlojka',
    11: 'pompi',
    12: 'pres_adaptori',
    13: 'rad_kranove',
    14: 'raz_sudove',
    15: 'kuki',
    16: 'sfer_kranove',
    17: 'termoglavi',
    18: 'termostati',
    19: 'trubi_pex',
    20: 'trubi_pex_iz',
    21: 'trubi_podovo',
    22: 'c_pompi',
    23: 'ups'
  }
  let productsBg = {
    1: 'алуминиеви радиатори',
    2: 'панелни радиатори',
    3: 'лири за баня',
    4: 'автоматични обезвъздушители',
    5: 'адаптори',
    6: 'гарнитури за ал. радиатори 1,5мм',
    7: 'кит комплекти',
    8: 'колектори за подово',
    9: 'месингови колектори',
    10: 'подложка за подово отопление',
    11: 'помпи',
    12: 'прес адаптори',
    13: 'радиаторни кранове',
    14: 'разширителни съдове',
    15: 'куки регулируеми',
    16: 'сферични кранове',
    17: 'термоглави',
    18: 'термостати',
    19: 'тръби pex',
    20: 'тръби pex с изолация',
    21: 'тръби за подово',
    22: 'циркулационни помпи',
    23: 'ups'
  }
  let productsSection = $('.row')
  let fragment = document.createDocumentFragment()
  for (let i = 1; i <= 23; i++) {
    let current = `<div class="col-lg-3 col-md-4 col-sm-6 col-6">
    <a href="./img/${productsLink[i]}/" class="d-block mb-4 h-100">
      <div class="img-wraper">
        <img class="img-fluid img-thumbnail" src="./img/${productsLink[i]}/thumbs/IMG (1).jpg" alt="">
      </div>
      <p>${productsBg[i].toUpperCase()}</p>
    </a>
  </div>`
    $(fragment).append(current)
  }
  productsSection.empty()
  productsSection.append(fragment)
})
