const cons = require('../practice/03_conditionals')

// TEST 1
xdescribe('isAdult', () => {
    test('returns Adult if 18 or older; otherwise, returns Child', () => {
        expect(cons.isAdult(23)).toBe('Adult');
        expect(cons.isAdult(17)).toBe('Child');
        expect(cons.isAdult(18)).toBe('Adult');
    });
});

// TEST 2
xdescribe('canDrive', () => {
    test('returns correct driving status', () => {
        expect(cons.canDrive(12)).toBe('no driving');
        expect(cons.canDrive(14)).toBe('no driving');
        expect(cons.canDrive(15)).toBe('learners permit');
        expect(cons.canDrive(16)).toBe('can drive during day');
        expect(cons.canDrive(17)).toBe('can drive during day');
        expect(cons.canDrive(18)).toBe('can drive anytime');
        expect(cons.canDrive(19)).toBe('can drive anytime');
        expect(cons.canDrive(45)).toBe('can drive anytime');
    });
});

// TEST 3
xdescribe('doubleDigits', () => {
    test('it returns true if number is double digit', () => {
        expect(cons.doubleDigits(10)).toBe(true);
        expect(cons.doubleDigits(9)).toBe(false);
        expect(cons.doubleDigits(99)).toBe(true);
        expect(cons.doubleDigits(100)).toBe(false);
    });
});

// TEST 4
xdescribe('evenAndGreaterThan10', () => {
    test('returns true is number is even and greater than 10', () => {
        expect(cons.evenAndGreaterThanTen(10)).toBe(false);
        expect(cons.evenAndGreaterThanTen(12)).toBe(true);
        expect(cons.evenAndGreaterThanTen(15)).toBe(false);
        expect(cons.evenAndGreaterThanTen(8)).toBe(false);

    });
});

// TEST 5
xdescribe('orPractice', () => {
    test('returns Yes if between 5-10, negative or over 100; otherwise, No', () => {
        expect(cons.orPractice(10)).toBe('No');
        expect(cons.orPractice(9)).toBe('Yes');
        expect(cons.orPractice(5)).toBe('No');
        expect(cons.orPractice(6)).toBe('Yes');
        expect(cons.orPractice(0)).toBe('No');
        expect(cons.orPractice(-1)).toBe('Yes');
        expect(cons.orPractice(100)).toBe('No');
        expect(cons.orPractice(101)).toBe('Yes');
    });
});



