require('jest');
const EnumMap = require('../enum-map');

describe('EnumMap', () => {

  it('value の重複があったら error をスローすること', () => {
    const invalid = {
      pen: {
        value: 1,
        label: 'ペン',
        order: 1
      },
      pineapple: {
        value: 2,
        label: 'パイナップル',
        order: 2
      },
      apple: {
        value: 1, // invalid
        label: 'アップル',
        order: 3
      }
    };
    expect(new EnumMap(invalid)).toThrowError(TypeError);
  });

  it('label の重複があったら error をスローすること', () => {
    const invalid = {
      pen: {
        value: 1,
        label: 'ペン',
        order: 1
      },
      pineapple: {
        value: 2,
        label: 'パイナップル',
        order: 2
      },
      apple: {
        value: 3,
        label: 'ペン', // invalid
        order: 3
      }
    };
    expect(new EnumMap(invalid)).toThrowError(TypeError);
  });


  const testEnum = new EnumMap({
    pen: {
      value: 5,
      label: 'ペン',
      order: 1
    },
    apple: {
      value: 2,
      label: 'アップル',
      order: 3
    },
    pineapple: {
      value: 3,
      label: 'パイナップル',
      order: 2
    },
  });

  it('length が取得できること', () => {
    expect(testEnum.length()).toBe(3);
  });

  it('enum.${key}.key で key にアクセスできること', () => {
    expect(testEnum.pen.key).toBe('pen');
  });

  it('enum.key.value で value にアクセスできること', () => {
    expect(testEnum.pen.value).toBe(5);
  });

  it('enum.key.label で label にアクセスできること', () => {
    expect(testEnum.pen.label).toBe('ペン');
  });

  it('enum.key.order で order にアクセスできること', () => {
    expect(testEnum.pen.order).toBe(1);
  });

  it('value に対する key が取得できること', () => {
    const key = testEnum.keyOf(5);
    expect(key).toBe('pen');
  });

  it('value に対する key が存在しない場合は undefined を返すこと', () => {
    const key = testEnum.keyOf(100);
    expect(key).toBe(undefined);
  });

  it('key に対する value が取得できること', () => {
    const value = testEnum.valueOf('apple');
    expect(value).toBe(2);
  });

  it('key に対する value が存在しない場合は undefined を返すこと', () => {
    const value = testEnum.valueOf('xxx');
    expect(value).toBe(undefined);
  });

  it('key に対する label が取得できること', () => {
    const label = testEnum.labelOf('pineapple');
    expect(label).toBe('パイナップル');
  });

  it('key に対する label が存在しない場合は undefined を返すこと', () => {
    const label = testEnum.valueOf('xxx');
    expect(label).toBe(undefined);
  });

  it('enum の key が order 順に配列で取得できること', () => {
    const keys = testEnum.keys();
    expect(keys).toEqual(['pen', 'pineapple', 'apple']);
  });

  it('enum の value が order 順に配列で取得できること', () => {
    const values = testEnum.values();
    expect(values).toEqual([5, 3, 2]);
  });

  it('enum の value が order 順に配列で取得できること', () => {
    const values = testEnum.labels();
    expect(values).toEqual(['ペン', 'パイナップル', 'アップル']);
  });

  it('enum の key が map で取得できること', () => {
    const keyMap = testEnum.keyMap();
    expect(keyMap.pen).toEqual('pen');
    expect(keyMap.apple).toEqual('apple');
    expect(keyMap.pineapple).toEqual('pineapple');
  });

  it('enum の value が map で取得できること', () => {
    const valueMap = testEnum.valueMap();
    expect(valueMap.pen).toEqual(5);
    expect(valueMap.apple).toEqual(2);
    expect(valueMap.pineapple).toEqual(3);
  });

  it('enum の label が map で取得できること', () => {
    const labelMap = testEnum.labelMap();
    expect(labelMap.pen).toEqual('ペン');
    expect(labelMap.apple).toEqual('アップル');
    expect(labelMap.pineapple).toEqual('パイナップル');
  });

  it('enum の {key, value, label, order} が配列で取得できること', () => {
    const list = testEnum.list();
    expect(list).toEqual([
      {key: 'pen', value: 5, label: 'ペン', order: 1},
      {key: 'pineapple', value: 3, label: 'パイナップル', order: 2},
      {key: 'apple', value: 2, label: 'アップル', order: 3}
    ]);
  });
});

