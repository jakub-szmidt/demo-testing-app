import { StoreRootModel } from './store.models';
import { selectInfoTextToDisplay, selectUsers } from './store.selectors';

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
    infoTextToDisplay: 'text',
  };

  it('should return all users', () => {
    const result = selectUsers.projector(initialState);

    expect(result.length).toBe(2);
    expect(result).toEqual(initialState.users);
  });

  it('should return info text', () => {
    const result = selectInfoTextToDisplay.projector(initialState);

    expect(result).toEqual('text');
  });
});
