const nums = require('../practice/02_math_and_numbers')

// TEST 1
xdescribe('sum', () => {
    test('returns sum of two numbers', () => {
        expect(nums.sum(1, 1)).toBe(2);
        expect(nums.sum(5, 9)).toBe(14);
        expect(nums.sum(-3, 4)).toBe(1);
        expect(nums.sum(26, 14)).toBe(40);
    });
});

// TEST 2
xdescribe('subtract', () => {
    test('subtracts two numbers', () => {
        expect(nums.subtract(10, 2)).toBe(8);
        expect(nums.subtract(1, 2)).toBe(-1);
        expect(nums.subtract(5, 5)).toBe(0);
    });
});

//TEST 3
xdescribe('multiply', () => {
    test('multiplies two numbers', () => {
        expect(nums.multiply(10, 2)).toBe(20);
        expect(nums.multiply(1, 2)).toBe(2);
        expect(nums.multiply(-5, -5)).toBe(25);
    });
});

// TEST 4
xdescribe('divide', () => {
    test('divides two numbers', () => {
        expect(nums.divide(10, 2)).toBe(5);
        expect(nums.divide(1, 2)).toBe(0.5);
        expect(nums.divide(-5, -5)).toBe(1);
    });
});

// TEST 5
xdescribe('isEven', () => {
    test('returns true if even', () => {
        expect(nums.isEven(4)).toBe(true);
        expect(nums.isEven(5)).toBe(false);
        expect(nums.isEven(90)).toBe(true);
    })
})
