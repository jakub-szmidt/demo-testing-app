import { IUser } from '../models/user.model';

export const generateRandomString = (length: number): string => {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  let result = '';

  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }

  return result;
};

export const generateRandomUser = (): IUser => {
  const stringLength = 10;

  const id = generateRandomNumberFromInterval(1, 100);
  const name = generateRandomString(stringLength);
  const lastName = generateRandomString(stringLength);
  const email = `${name}_${lastName}@email.com`;

  return {
    id,
    name,
    lastName,
    email,
  };
};

export const generateRandomNumberFromInterval = (
  min: number,
  max: number,
): number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
