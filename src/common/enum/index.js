const EnumMap = require("./enum-map");

const BusinessTypes = new EnumMap({
  it: {
    order: 10,
    value: 1,
    label: "IT・通信",
  },
  staffing: {
    order: 20,
    value: 2,
    label: "人材サービス",
  },
  consulting: {
    order: 30,
    value: 3,
    label: "コンサルティング",
  },
  media: {
    order: 40,
    value: 4,
    label: "メディア・出版",
  },
  ad: {
    order: 50,
    value: 5,
    label: "広告代理店",
  },
  distribution: {
    order: 60,
    value: 6,
    label: "流通",
  },
  restaurant: {
    order: 70,
    value: 7,
    label: "飲食",
  },
  transportation: {
    order: 80,
    value: 8,
    label: "物流・運送",
  },
  finance: {
    order: 90,
    value: 9,
    label: "金融",
  },
  construction: {
    order: 100,
    value: 10,
    label: "建設・不動産",
  },
  energy: {
    order: 110,
    value: 11,
    label: "エネルギー・素材",
  },
  electric: {
    order: 120,
    value: 12,
    label: "電機・精密・輸送機器",
  },
  lifestyle: {
    order: 130,
    value: 13,
    label: "生活関連",
  },
  food: {
    order: 140,
    value: 14,
    label: "食品",
  },
  others: {
    order: 990,
    value: 99,
    label: "その他",
  },
});

const RangeOfEmployees = new EnumMap({
  small1: {
    order: 10,
    value: 1,
    label: "1 - 10"
  },
  small2: {
    order: 20,
    value: 2,
    label: "11 - 49"
  },
  small3: {
    order: 30,
    value: 3,
    label: "50 - 99"
  },
  middle1: {
    order: 40,
    value: 4,
    label: "100 - 199"
  },
  middle2: {
    order: 50,
    value: 5,
    label: "200 - 299"
  },
  middle3: {
    order: 60,
    value: 6,
    label: "300 - 499"
  },
  large1: {
    order: 70,
    value: 7,
    label: "500 - 999"
  },
  large2: {
    order: 80,
    value: 8,
    label: "1000 -"
  }
});

module.exports = {
  BusinessTypes,
  RangeOfEmployees
};
