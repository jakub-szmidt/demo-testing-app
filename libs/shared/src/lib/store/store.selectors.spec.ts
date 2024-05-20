import { StoreRootModel } from './store.models';
import { selectUsers } from './store.selectors';

describe('store selector', () => {
  const initialState: StoreRootModel = {
    users: [
      {
        id: 1,
        name: 'name',
        lastName: 'last name',
        email: 'email@email.com',
      },
      {
        id: 2,
        name: 'name',
        lastName: 'last name',
        email: 'email@email.com',
      },
    ],
  };

  it('should return all users', () => {
    const result = selectUsers.projector(initialState);

    expect(result.length).toBe(2);
    expect(result).toEqual(initialState.users);
  });
});
