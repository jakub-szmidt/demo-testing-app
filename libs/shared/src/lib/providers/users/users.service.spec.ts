import { TestBed } from '@angular/core/testing';
import { UsersService } from './users.service';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { StoreRootModel } from '../../store/store.models';
import { IUser } from '../../models/user.model';
import * as StoreSelectors from '../../store/store.selectors';
import { addUser, removeLastUser, removeUser } from '../../store/store.actions';

const initialState: StoreRootModel = {
  users: [
    {
      id: 0,
      name: 'name',
      lastName: 'last name',
      email: 'email@email.com',
    },
  ],
  infoTextToDisplay: 'infotext',
};

describe('UsersService', () => {
  let service: UsersService;
  let store: MockStore<StoreRootModel>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore({ initialState })],
    });

    service = TestBed.inject(UsersService);
    store = TestBed.inject(MockStore);
  });

  afterEach(() => {
    store.resetSelectors();
    jest.clearAllMocks();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return list of users', (done) => {
    const user: IUser = {
      id: 1,
      name: 'name',
      lastName: 'last name',
      email: 'email@email.com',
    };

    jest.spyOn(store, 'select');
    store.overrideSelector(StoreSelectors.selectUsers, [user]);

    service.getUsers().subscribe((result) => {
      expect(result).toEqual([user]);
      done();
    });
    expect(store.select).toHaveBeenCalledWith(StoreSelectors.selectUsers);
  });

  it('should dispatch addUser action', () => {
    const user: IUser = {
      id: 2,
      name: 'name',
      lastName: 'last name',
      email: 'email@email.com',
    };

    jest.spyOn(store, 'dispatch');
    service.addUser(user);

    expect(store.dispatch).toHaveBeenCalledWith(addUser({ user }));
  });

  it('should dispatch removeUser action', () => {
    const userId = 0;

    jest.spyOn(store, 'dispatch');
    service.removeUserById(userId);

    expect(store.dispatch).toHaveBeenCalledWith(removeUser({ userId }));
  });

  it('should dispatch addUser action with random user', () => {
    jest.spyOn(store, 'dispatch');

    service.addRandomUser();

    expect(store.dispatch).toHaveBeenCalled();
  });

  it('should dispatch removeLastUser action', () => {
    jest.spyOn(store, 'dispatch');

    service.removeLastUser();

    expect(store.dispatch).toHaveBeenCalledWith(removeLastUser());
  });
});
