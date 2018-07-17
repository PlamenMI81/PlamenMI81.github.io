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
  let productsSection = $('#products')
  let fragment = document.createDocumentFragment()
  for (let i = 1; i <= 14; i++) {
    let current = `<article>
    <div>
        <a href="./${productsLink[i]}/">${productsBg[i]}</a>
    </div>
</article>`
    $(fragment).append(current)
  }
  productsSection.empty()
  productsSection.append(fragment)
})