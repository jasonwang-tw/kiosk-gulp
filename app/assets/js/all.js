let dataShare = {
  active: 0,
}
// menuActive
let activeIndex = document.querySelector('.mainIndex').getAttribute('data-index');
// get main id
let main_el = document.querySelector('.mainIndex').getAttribute('id');

dataShare.active = activeIndex;

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
    dataShare,
    menu: [
      {
        name: '熱銷排行TOP10',
        link: 'top10.html'
      },
      {
        name: '優惠活動',
        link: '#'
      },
      {
        name: '名人堂',
        link: 'celebrity.html'
      },
      {
        name: '紅茶系列',
        link: '#'
      },
      {
        name: '綠茶系列',
        link: '#'
      },
      {
        name: '鮮奶茶系列',
        link: '#'
      },
      {
        name: '水果茶系列',
        link: '#'
      },
      {
        name: '珍珠奶茶系列',
        link: '#'
      },
      {
        name: '抹茶系列',
        link: '#'
      },
    ]
  }
})

new Vue({
  el: '#' + main_el,
  data: {
    dispalay: 3,
    tea: [
      {
        img: '../assets/images/drinkImg.jpg',
        name: '古道茶鄉',
        price: 60,
        rating: 4.7,
        sell: 887,
        link: '#'
      },
      {
        img: '../assets/images/banner.jpg',
        name: '古道茶鄉',
        price: 60,
        rating: 4.7,
        sell: 887,
        link: '#'
      },
      {
        img: '../assets/images/drinkImg.jpg',
        name: '古道茶鄉',
        price: 60,
        rating: 4.7,
        sell: 887,
        link: '#'
      },
      {
        img: '../assets/images/drinkImg.jpg',
        name: '古道茶鄉',
        price: 60,
        rating: 4.7,
        sell: 887,
        link: '#'
      },
      {
        img: '../assets/images/drinkImg.jpg',
        name: '古道茶鄉',
        price: 60,
        rating: 4.7,
        sell: 887,
        link: '#'
      },
      {
        img: '../assets/images/drinkImg.jpg',
        name: '古道茶鄉',
        price: 60,
        rating: 4.7,
        sell: 887,
        link: '#'
      },
      {
        img: '../assets/images/drinkImg.jpg',
        name: '古道茶鄉',
        price: 60,
        rating: 4.7,
        sell: 887,
        link: '#'
      },
      {
        img: '../assets/images/drinkImg.jpg',
        name: '古道茶鄉',
        price: 60,
        rating: 4.7,
        sell: 887,
        link: '#'
      },
      {
        img: '../assets/images/drinkImg.jpg',
        name: '古道茶鄉',
        price: 60,
        rating: 4.7,
        sell: 887,
        link: '#'
      },
      {
        img: '../assets/images/drinkImg.jpg',
        name: '古道茶鄉',
        price: 60,
        rating: 4.7,
        sell: 887,
        link: '#'
      }
    ],
    recommend: [{
      photo: '../assets/images/photo1.png',
      name: 'Jomen',
      info: '到底是高單價的飲料好喝還是低單價的飲料好喝買買看就知道',
      link: '#'
    },
    {
      photo: '../assets/images/photo2.png',
      name: '滴妹',
      info: '獨家配出了連再睡五分鐘都喝不到的配方，連哥哥都說好喝',
      link: '#'
    },
    {
      photo: '../assets/images/photo3.png',
      name: 'HowHow',
      info: '°.°·(((p(≧□≦)q)))·°.°不買我也不會難過的ㄏ嗚嗚',
      link: '#'
    }
      ,
    {
      photo: '../assets/images/photo4.png',
      name: '冷淡熊',
      info: '嗨，大家好〜在這裡我會給大家帶來搞笑，惡趣味的飲料〜',
      link: '#'
    },
    {
      photo: '../assets/images/photo1.png',
      name: 'Jomen',
      info: '到底是高單價的飲料好喝還是低單價的飲料好喝買買看就知道',
      link: '#'
    },
    {
      photo: '../assets/images/photo1.png',
      name: 'Jomen',
      info: '到底是高單價的飲料好喝還是低單價的飲料好喝買買看就知道',
      link: '#'
    },
    {
      photo: '../assets/images/photo1.png',
      name: 'Jomen',
      info: '到底是高單價的飲料好喝還是低單價的飲料好喝買買看就知道',
      link: '#'
    },]
  },
  methods: {
    load() {
      let teaLen = this.tea.length
      let recommendLen = this.recommend.length

      if (this.dispalay < teaLen || this.dispalay < recommendLen) {
        this.dispalay += 3
      } else {
        alert('nodata')
      }

    },
  }
})