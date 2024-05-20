import {
  generateRandomNumberFromInterval,
  generateRandomString,
  generateRandomUser,
} from './utils';

describe('utils', () => {
  describe('generateRandomString method', () => {
    it('should return a string of the specified length', () => {
      const length = 15;
      const result = generateRandomString(length);

      expect(result.length).toBe(length);
    });

    it('should only contain characters from the specified character set', () => {
      const length = 10;
      const result = generateRandomString(length);
      const characters =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      const regex = new RegExp(`^[${characters}]+$`);

      expect(regex.test(result)).toBe(true);
    });

    it('should generate different strings for different calls', () => {
      const length = 10;
      const result1 = generateRandomString(length);
      const result2 = generateRandomString(length);

      expect(result1).not.toEqual(result2);
    });
  });

  describe('generateRandomUser method', () => {
    it('should return an user object with the specified properties', () => {
      const user = generateRandomUser();

      expect(user).toHaveProperty('id');
      expect(user).toHaveProperty('name');
      expect(user).toHaveProperty('lastName');
      expect(user).toHaveProperty('email');
    });

    it('should have a valid email format', () => {
      const user = generateRandomUser();

      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      expect(emailRegex.test(user.email)).toBe(true);
    });
  });

  describe('generateRandomNumberFromInterval method', () => {
    it('should return an integer', () => {
      const min = 1;
      const max = 100;

      const result = generateRandomNumberFromInterval(min, max);
      expect(Number.isInteger(result)).toBe(true);
    });

    it('should return a number within the specified range', () => {
      const min = 5;
      const max = 10;

      const result = generateRandomNumberFromInterval(min, max);
      expect(result).toBeGreaterThanOrEqual(min);
      expect(result).toBeLessThanOrEqual(max);
    });
  });
});
