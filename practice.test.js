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