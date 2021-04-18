let share = {
  popuphide: true, //控制 fixedBg 狀態
  free_open_hide: true, //控制 free_open 狀態
  free_ok_hide: true, //控制 free_ok 狀態
  free_drink_hide: true, //控制 free_drink 狀態
  drink_detail_hide: true, //控制 drink_detail 狀態
  // order
  scan_1_hide: true,
  scan_2_hide: true,
  scan_3_hide: true,

}

new Vue({
  el: '#search',
  data: {
    share
  }
})

new Vue({
  el: '#main',
  data: {
    share
  },
  computed: {},
  methods: {}
})