let share = {
  popuphide: true, //控制 fixedBg 狀態
  free_open_hide: true, //控制 free_open 狀態
  free_ok_hide: true, //控制 free_ok 狀態
  free_error_hide: true, //控制 free_ok 狀態
  free_drink_hide: true, //控制 free_drink 狀態
  drink_detail_hide: true, //控制 drink_detail 狀態
  // order status
  scan_1_hide: true,
  scan_2_hide: true,
  scan_3_hide: true,
  scan_4_hide: true,
  scan_5_hide: true,
  scan_6_hide: true,
  // company
  company_1: true,
  company_2: true,
  // donate_scan
  donate_scan_1: true,
  donate_scan_2: true,
  donate_scan_3: true,
  // donate_impor
  donate_impor_1: true,
  donate_impor_2: true,
  // fixture_flow
  fixture_1: true,
  fixture_2: true,
  fixture_3: true,
  fixture_4: true,
  fixture_5: true,
  // paying0
  paying_error: true,
  paying_popup: false,
  paying: false
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

