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

// TEST 6
xdescribe('toNumber', () => {
    test('converts string to number', () => {
        expect(nums.toNumber("6")).toBe(6);
        expect(nums.toNumber("59")).toBe(59);
        expect(nums.toNumber("9000")).toBe(9000);
    });
});

// TEST 7
xdescribe('convertFirst', () => {
    test('converts string to number and multiplies', () => {
        expect(nums.convertFirst('3', 8)).toBe(24);
        expect(nums.convertFirst('2', '7')).toBe(14);
        expect(nums.convertFirst(9, '5')).toBe(45);
    });
});

// TEST 8
xdescribe('isBigger', () => {
    test('returns true if first number is larger', () => {
        expect(nums.isBigger(4, 7)).toBe(false);
        expect(nums.isBigger(7, 4)).toBe(true);
        expect(nums.isBigger(7, 7)).toBe(false);
    });
});

// TEST 9
xdescribe('twoDecimal', () => {
    test('returns integer to two decimal places', () => {
        expect(nums.twoDecimal(6.3452)).toBe(6.35);
        expect(nums.twoDecimal(4.6522730)).toBe(4.65);
        expect(nums.twoDecimal(2.34420)).toBe(2.34);
    });
});

// TEST 10
xdescribe('roundUp', () => {
    test('rounds an integer up to nearest whole number', () => {
        expect(nums.roundUp(5.1)).toBe(6);
        expect(nums.roundUp(3.5)).toBe(4);
        expect(nums.roundUp(9.00000000001)).toBe(10);
    });
});

// TEST 11
xdescribe('toCelsius', () => {
    test('converts temperature in fahrenheit to celsius and rounds up', () => {
        expect(nums.toCelsius(76)).toBe(25);
        expect(nums.toCelsius(43)).toBe(7);
        expect(nums.toCelsius(100)).toBe(38);
    });
});

// TEST 12
xdescribe('toFahrenheit', () => {
    test('converts temperature in fahrenheit to celsius and rounds up', () => {
        expect(nums.toFahrenheit(24)).toBe('75 degrees Fahrenheit');
        expect(nums.toFahrenheit(201)).toBe('393 degrees Fahrenheit');
        expect(nums.toFahrenheit(61)).toBe('141 degrees Fahrenheit');
    });
});
