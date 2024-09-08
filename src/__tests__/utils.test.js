// Your tests here

const { isPalindrome } = require('../utils');

describe('isPalindrome function', () => {
  test('should return true for palindromic words', () => {
    expect(isPalindrome("racecar")).toBe(true);
    expect(isPalindrome("mom")).toBe(true);
    expect(isPalindrome("level")).toBe(true);
  });

  test('should return false for non-palindromic words', () => {
    expect(isPalindrome("car")).toBe(false);
    expect(isPalindrome("hello")).toBe(false);
    expect(isPalindrome("world")).toBe(false);
  });

  test('should return true for words that are a combination of uppercase and lowercase letters', () => {
    expect(isPalindrome("Racecar")).toBe(true);
    expect(isPalindrome("Madam")).toBe(true);
    expect(isPalindrome("LeVel")).toBe(true);
  });

  test('should return false for an empty string', () => {
    expect(isPalindrome("")).toBe(false);
  });

  test('should throw an error if input has any non-alphabetic characters', () => {
    expect(() => isPalindrome("12321")).toThrow();
    expect(() => isPalindrome("hello123")).toThrow();
    expect(() => isPalindrome("race@car")).toThrow();
  });

  test('should throw an error if input that isn\'t a string', () => {
    expect(() => isPalindrome(12321)).toThrow();
    expect(() => isPalindrome(true)).toThrow();
    expect(() => isPalindrome({})).toThrow();
  });
});