"use strict";

var dataShare = {
  active: 0
}; // menuActive

var activeIndex = document.querySelector('.mainIndex').getAttribute('data-index');
dataShare.active = activeIndex;
new Vue({
  el: '#banner',
  data: {
    bannerItem: [{
      imgSrc: './assets/images/banner.jpg'
    }, {
      imgSrc: './assets/images/banner.jpg'
    }]
  }
});
new Vue({
  el: '#search',
  data: {
    searchKey: ''
  }
});
new Vue({
  el: '#topMenu',
  data: {
    dataShare: dataShare,
    menu: [{
      name: '熱銷排行TOP10',
      link: 'top10.html'
    }, {
      name: '優惠活動',
      link: '#'
    }, {
      name: '名人堂',
      link: 'celebrity.html'
    }, {
      name: '紅茶系列',
      link: '#'
    }, {
      name: '綠茶系列',
      link: '#'
    }, {
      name: '鮮奶茶系列',
      link: '#'
    }, {
      name: '水果茶系列',
      link: '#'
    }, {
      name: '珍珠奶茶系列',
      link: '#'
    }, {
      name: '抹茶系列',
      link: '#'
    }]
  }
});
new Vue({
  el: '#main',
  data: {
    dispalay: 3,
    loading: false,
    tea: [{
      img: './assets/images/drinkImg.jpg',
      name: '古道茶鄉',
      price: 60,
      rating: 4.7,
      sell: 887,
      link: '#'
    }, {
      img: './assets/images/banner.jpg',
      name: '古道茶鄉',
      price: 60,
      rating: 4.7,
      sell: 887,
      link: '#'
    }, {
      img: './assets/images/drinkImg.jpg',
      name: '古道茶鄉',
      price: 60,
      rating: 4.7,
      sell: 887,
      link: '#'
    }, {
      img: './assets/images/drinkImg.jpg',
      name: '古道茶鄉',
      price: 60,
      rating: 4.7,
      sell: 887,
      link: '#'
    }, {
      img: './assets/images/drinkImg.jpg',
      name: '古道茶鄉',
      price: 60,
      rating: 4.7,
      sell: 887,
      link: '#'
    }, {
      img: './assets/images/drinkImg.jpg',
      name: '古道茶鄉',
      price: 60,
      rating: 4.7,
      sell: 887,
      link: '#'
    }, {
      img: './assets/images/drinkImg.jpg',
      name: '古道茶鄉',
      price: 60,
      rating: 4.7,
      sell: 887,
      link: '#'
    }, {
      img: './assets/images/drinkImg.jpg',
      name: '古道茶鄉',
      price: 60,
      rating: 4.7,
      sell: 887,
      link: '#'
    }, {
      img: './assets/images/drinkImg.jpg',
      name: '古道茶鄉',
      price: 60,
      rating: 4.7,
      sell: 887,
      link: '#'
    }, {
      img: './assets/images/drinkImg.jpg',
      name: '古道茶鄉',
      price: 60,
      rating: 4.7,
      sell: 887,
      link: '#'
    }],
    recommend: [{
      photo: './assets/images/photo1.png',
      name: 'Jomen',
      info: '到底是高單價的飲料好喝還是低單價的飲料好喝買買看就知道',
      link: '#'
    }, {
      photo: './assets/images/photo2.png',
      name: '滴妹',
      info: '獨家配出了連再睡五分鐘都喝不到的配方，連哥哥都說好喝',
      link: '#'
    }, {
      photo: './assets/images/photo3.png',
      name: 'HowHow',
      info: '°.°·(((p(≧□≦)q)))·°.°不買我也不會難過的ㄏ嗚嗚',
      link: '#'
    }, {
      photo: './assets/images/photo4.png',
      name: '冷淡熊',
      info: '嗨，大家好〜在這裡我會給大家帶來搞笑，惡趣味的飲料〜',
      link: 'celebrity_detail.html',
      like: 99,
      quantity: 3,
      drink: [{
        img: './assets/images/drinkImg.jpg',
        name: '冷淡茶',
        price: 60,
        rating: 4.7,
        sell: 887,
        link: '#',
        good: true
      }, {
        img: './assets/images/drinkImg.jpg',
        name: '草莓熊',
        price: 60,
        rating: 4.7,
        sell: 887,
        link: '#',
        good: true
      }, {
        img: './assets/images/drinkImg.jpg',
        name: '黑白熊',
        price: 60,
        rating: 4.7,
        sell: 887,
        link: '#',
        good: false
      }]
    }, {
      photo: './assets/images/photo1.png',
      name: 'Jomen',
      info: '到底是高單價的飲料好喝還是低單價的飲料好喝買買看就知道',
      link: '#'
    }, {
      photo: './assets/images/photo1.png',
      name: 'Jomen',
      info: '到底是高單價的飲料好喝還是低單價的飲料好喝買買看就知道',
      link: '#'
    }, {
      photo: './assets/images/photo1.png',
      name: 'Jomen',
      info: '到底是高單價的飲料好喝還是低單價的飲料好喝買買看就知道',
      link: '#'
    }]
  },
  computed: {
    noMore_recommender: function noMore_recommender() {
      return this.dispalay >= this.recommend.length;
    },
    disabled_recommender: function disabled_recommender() {
      return this.loading || this.noMore_recommender;
    },
    noMore_top_10: function noMore_top_10() {
      return this.dispalay >= this.tea.length;
    },
    disabled_top_10: function disabled_top_10() {
      return this.loading || this.noMore_top_10;
    }
  },
  methods: {
    load: function load() {
      var _this = this;

      this.loading = true;
      setTimeout(function () {
        _this.dispalay += 3;
        _this.loading = false;
      }, 1000);
    }
  }
});
//# sourceMappingURL=all.js.map
