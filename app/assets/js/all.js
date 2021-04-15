let data_share = {
  popuphide: true, //控制 fixedBg 狀態
  free_open_hide: true, //控制 free_open 狀態
  free_ok_hide: true, //控制 free_ok 狀態
  free_drink_hide: true, //控制 free_drink 狀態
  drink_detail_hide: true, //控制 drink_detail 狀態
}

new Vue({
  el: '#search',
  data: {
    data_share
  }
})

new Vue({
  el: '#main',
  data: {
    data_share
  },
  computed: {},
  methods: {}
})