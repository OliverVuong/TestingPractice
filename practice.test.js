import { capitalize } from './practice';

test('capitalize world', () => {
  expect(capitalize('world')).toBe('World');
});

test('already capitalized', () => {
    expect(capitalize('Universe')).toBe('Universe');
});

test('special character', () => {
    expect(capitalize('! hello')).toBe('! hello');
})