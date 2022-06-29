const doBracketsBalance = require('../bracketsFunction.js');


describe('doBracketsBalance', function () {
    it('should return true', function () {
        expect(doBracketsBalance('(){}[]')).toStrictEqual(true);
    });
    it('should return false', function () {
        expect(doBracketsBalance('()}[]')).toStrictEqual(false);
    });
    it('should return false', function () {
        expect(doBracketsBalance('()}[(])')).toStrictEqual(false);
    });
    it('should return false', function () {
        expect(doBracketsBalance(')(')).toStrictEqual(false);
    });
});