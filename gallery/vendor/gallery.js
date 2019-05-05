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
    11: 'izolaciq_folio',
    12: 'pompi',
    13: 'pres_adaptori',
    14: 'rad_kranove',
    15: 'raz_sudove',
    16: 'kuki',
    17: 'sfer_kranove',
    18: 'termoglavi',
    19: 'termostati',
    20: 'trubi_pex',
    21: 'trubi_pex_iz',
    22: 'trubi_podovo',
    23: 'c_pompi',
    24: 'ups'
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
    11: 'изолация с фолио',
    12: 'помпи',
    13: 'прес адаптори',
    14: 'радиаторни кранове',
    15: 'разширителни съдове',
    16: 'куки регулируеми',
    17: 'сферични кранове',
    18: 'термоглави',
    19: 'термостати',
    20: 'тръби pex',
    21: 'тръби pex с изолация',
    22: 'тръби за подово',
    23: 'циркулационни помпи',
    24: 'ups'
  }
  let productsSection = $('.row')
  let fragment = document.createDocumentFragment()
  for (let i = 1; i <= 24; i++) {
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
