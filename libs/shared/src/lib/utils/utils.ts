import { IUser } from '../models/user.model';

export const generateRandomString = (): string => {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  let result = '';

  while (counter < 10) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }

  return result;
};

export const generateRandomUser = (): IUser => {
  const id = generateRandomNumberFromInterval(1, 100);
  const name = generateRandomString();
  const lastName = generateRandomString();
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
