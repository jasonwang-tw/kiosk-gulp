"use strict";

new Vue({
  el: '#banner',
  data: {
    bannerItem: [{
      imgSrc: '../assets/images/banner.jpg'
    }, {
      imgSrc: '../assets/images/banner.jpg'
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
    active: 0,
    menu: ['熱銷排行TOP10', '優惠活動', '名人堂', '紅茶系列', '綠茶系列', '鮮奶茶系列', '水果茶系列', '珍珠奶茶系列', '抹茶系列']
  }
});
new Vue({
  el: '#top-10',
  data: {
    dispalay: 3,
    tea: [{
      img: '../assets/images/drinkImg.jpg',
      name: '古道茶鄉',
      price: 60,
      rating: 4.7,
      sell: 887,
      link: ''
    }, {
      img: '../assets/images/banner.jpg',
      name: '古道茶鄉',
      price: 60,
      rating: 4.7,
      sell: 887,
      link: ''
    }, {
      img: '../assets/images/drinkImg.jpg',
      name: '古道茶鄉',
      price: 60,
      rating: 4.7,
      sell: 887,
      link: ''
    }, {
      img: '../assets/images/drinkImg.jpg',
      name: '古道茶鄉',
      price: 60,
      rating: 4.7,
      sell: 887,
      link: ''
    }, {
      img: '../assets/images/drinkImg.jpg',
      name: '古道茶鄉',
      price: 60,
      rating: 4.7,
      sell: 887,
      link: ''
    }, {
      img: '../assets/images/drinkImg.jpg',
      name: '古道茶鄉',
      price: 60,
      rating: 4.7,
      sell: 887,
      link: ''
    }, {
      img: '../assets/images/drinkImg.jpg',
      name: '古道茶鄉',
      price: 60,
      rating: 4.7,
      sell: 887,
      link: ''
    }, {
      img: '../assets/images/drinkImg.jpg',
      name: '古道茶鄉',
      price: 60,
      rating: 4.7,
      sell: 887,
      link: ''
    }, {
      img: '../assets/images/drinkImg.jpg',
      name: '古道茶鄉',
      price: 60,
      rating: 4.7,
      sell: 887,
      link: ''
    }, {
      img: '../assets/images/drinkImg.jpg',
      name: '古道茶鄉',
      price: 60,
      rating: 4.7,
      sell: 887,
      link: ''
    }]
  },
  methods: {
    load: function load() {
      var teaLen = this.tea.length;
      console.log('teaLen :>> ', teaLen);

      if (this.dispalay < teaLen) {
        this.dispalay += 3;
      } else {
        alert('nodata');
      }
    }
  }
});
//# sourceMappingURL=all.js.map
