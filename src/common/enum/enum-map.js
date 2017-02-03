const { has, map, sortBy } = require('lodash');

class EnumMap {
  constructor(itemMap) {
    this.items = [];
    this.valueKeyMap = {}; // value - key

    this._createMap(itemMap);
  }

  length() {
    return this.items.length;
  }

  keyOf(value) {
    return this.valueKeyMap[value];
  }

  valueOf(key) {
    return this[key] ? this[key].value : undefined;
  }

  labelOf(key) {
    return this[key] ? this[key].label : undefined;
  }

  keys() {
    return this.items.map(item => item.key);
  }

  values() {
    return this.items.map(item => item.value);
  }

  labels() {
    return this.items.map(item => item.label);
  }

  keyMap() {
    const _map = {};
    this.items.forEach(item => {_map[item.key] = item.key});
    return _map;
  }

  valueMap() {
    const _map = {};
    this.items.forEach(item => {_map[item.key] = item.value});
    return _map;
  }

  labelMap() {
    const _map = {};
    this.items.forEach(item => {_map[item.key] = item.label});
    return _map;
  }

  list() {
    return this.items;
  }

  _createMap(itemMap) {
    const valueMap = {}; // key - value
    const labelMap = {}; // key - label

    map(itemMap, (item, key) => {

      // key, value, label の重複は許可しない
      if (has(this.valueKeyMap, key)) {
        throw new Error(`duplicated key '${key}' is not allowed.`);
      }
      if (has(valueMap, item.value)) {
        throw new Error(`duplicated value '${item.value}' is not allowed.`);
      }
      if (has(labelMap, item.label)) {
        throw new Error(`duplicated label '${item.label}' is not allowed.`);
      }

      // add to maps
      this.valueKeyMap[item.value] = key;
      valueMap[key] = item.value;
      labelMap[key] = item.label;

      // store item
      const enumItem = Object.assign({}, item, {key});
      this[key] = enumItem;
      this.items.push(enumItem);
    });

    // sort items
    this.items = sortBy(this.items, ['order', 'value']);
  }

}

module.exports = EnumMap;
