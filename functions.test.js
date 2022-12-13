let {returnTwo, greeting, add, multiply, subtract, divide} = require('./functions.js');

test('returnTwo should return int 2', () => {
    expect(returnTwo()).toBe(2);
});

test('greeting(James) returns Hello, James', () => {
    expect(greeting('James')).toBe('Hello, James');
});

test('greeting(Jill) returns Hello, Jill', () => {
    expect(greeting('Jill')).toBe('Hello, Jill');
});

describe('Math functions', () => {
    test('adds 1 and 2 and equals 3', () => {
        expect(add(1, 2)).toEqual(3);
    });
    
    test('adds 5 and 5 and equals 14', () => {
        expect(add(5, 9)).toBe(14);
    });

    test('subtracts 10 from 48 and equals 38', () => {
        expect(subtract(48, 10)).toBe(38);
    });

    test('subtracts 13 from 72 and equals 59', () => {
        expect(subtract(72, 13)).toBe(59);
    });

    test('multiplies 18 by 12 and equals 216', () => {
        expect(multiply(18, 12)).toBe(216);
    });

    test('multiplies 7 by 24 and equals 168', () => {
        expect(multiply(7, 24)).toBe(168);
    });

    test('sends string to multiply function, returns NaN', () => {
        expect(multiply('bob', 3)).toBeNaN()
    })

    test('divides 36 by 12 and equals 3', () => {
        expect(divide(36, 12)).toBe(3);
    });

    test('divides 54 by 9 and equals 6', () => {
        expect(divide(54, 9)).toBe(6);
    });
})