require("jest");

const { BusinessTypes, NumberOfEmployees } = require("../");

describe("Enum", () => {

  describe("BusinessTypes", () => {

    it('length が取得できること', () => {
      expect(BusinessTypes.length()).toBe(15);
    });

    it("value に対する key が取得できること", () => {
      const key = BusinessTypes.keyOf(7);
      expect(key).toBe("restaurant");
    });

    it("key に対する value が取得できること", () => {
      const value = BusinessTypes.valueOf("construction");
      expect(value).toBe(10);
    });

    it("key に対する label が取得できること", () => {
      const label = BusinessTypes.labelOf("lifestyle");
      expect(label).toBe("生活関連");
    });

  });

  describe("NumberOfEmployees", () => {

    it('length が取得できること', () => {
      expect(NumberOfEmployees.length()).toBe(8);
    });

    it("value に対する key が取得できること", () => {
      const key = NumberOfEmployees.keyOf(3);
      expect(key).toBe("small3");
    });

    it("key に対する value が取得できること", () => {
      const value = NumberOfEmployees.valueOf("large1");
      expect(value).toBe(7);
    });

    it("key に対する value が取得できること", () => {
      const label = NumberOfEmployees.labelOf("middle1");
      expect(label).toBe("100 - 199");
    });

  });

});
