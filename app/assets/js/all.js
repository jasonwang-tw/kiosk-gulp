new Vue({
  el: '#banner',
  data: {
    bannerItem: [
      {
        imgSrc: '../assets/images/banner.jpg'
      },
      {
        imgSrc: '../assets/images/banner.jpg'
      }
    ]
  }
})
new Vue({
  el: '#search',
  data: {
    searchKey: ''
  }
})
new Vue({
  el: '#topMenu',
  data: {
    active: 0,
    menu: [
      '熱銷排行TOP10',
      '優惠活動',
      '名人堂',
      '紅茶系列',
      '綠茶系列',
      '鮮奶茶系列',
      '水果茶系列',
      '珍珠奶茶系列',
      '抹茶系列'
    ]
  }
})
new Vue({
  el: '#top-10',
  data: {
    dispalay: 2,
    tea: [
      {
        name: 'tea1'
      },
      {
        name: 'tea1'
      },
      {
        name: 'tea1'
      },
      {
        name: 'tea1'
      },
      {
        name: 'tea1'
      },
      {
        name: 'tea1'
      },
      {
        name: 'tea1'
      },
      {
        name: 'tea1'
      },
      {
        name: 'tea1'
      },
      {
        name: 'tea1'
      },
      {
        name: 'tea1'
      },
      {
        name: 'tea1'
      },
      {
        name: 'tea1'
      },
      {
        name: 'tea1'
      },
      {
        name: 'tea1'
      },
      {
        name: 'tea1'
      },
      {
        name: 'tea1'
      },
      {
        name: 'tea1'
      },
      {
        name: 'tea1'
      },
      {
        name: 'tea1'
      },
      {
        name: 'tea1'
      },
      {
        name: 'tea1'
      },
      {
        name: 'tea1'
      }
    ]
  },
  methods: {
    load() {
      let teaLen = this.tea.length
      // console.log('t :>> ', t)
      if (this.dispalay < teaLen) {
        this.dispalay += 2
      } else {
        alert('nodata')
      }
    }
  }
})