import { 
    capitalize, 
    reverseString,
    calculatorFactory,
    caesarCipher,
    analyzeArray 
} from './practice';

test('capitalize world', () => {
  expect(capitalize('world')).toBe('World');
});

test('already capitalized', () => {
    expect(capitalize('Universe')).toBe('Universe');
});

test('special character', () => {
    expect(capitalize('! hello')).toBe('! hello');
})

test('reverse balthazar', () => {
    expect(reverseString('balthazar')).toBe('razahtlab');
})

test('reverse special character', () => {
    expect(reverseString(' ?!@#123')).toBe('321#@!? ');
})

describe('Calculator', () => {
    let calculator = calculatorFactory();
    test('add 2 and 3 equals 5', () => {
        expect(calculator.add(2, 3)).toBe(5);
    })
    test('5 minus 2 equals 3', () => {
        expect(calculator.subtract(5, 2)).toBe(3);
    })
    test('divide 8 by 4 equals 2', () => {
        expect(calculator.divide(8, 4)).toBe(2);
    })
    test('multiply 3 and 7 equals 21', () => {
        expect(calculator.multiply(3, 7)).toBe(21);
    })
})