import { TestBed, fakeAsync, flush } from '@angular/core/testing';
import { UsersService } from './users.service';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { StoreRootModel } from '../../store/store.models';
import { IUser } from '../../models/user.model';
import { selectUsers } from '../../store/store.selectors';
import { addUser } from '../../store/store.actions';

describe('UsersService', () => {
  let service: UsersService;
  let store: MockStore<StoreRootModel>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore()],
    });

    service = TestBed.inject(UsersService);
    store = TestBed.inject(MockStore);
  });

  afterEach(() => {
    store.resetSelectors();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return list of users', fakeAsync(() => {
    const user: IUser = {
      id: 1,
      name: 'name',
      lastName: 'last name',
      email: 'email@email.com',
    };

    store.overrideSelector(selectUsers, [user]);

    service.getUsers().subscribe((result) => expect(result).toEqual([user]));
  }));

  // it('should return list of usessrs', () => {
  //   const user: IUser = {
  //     id: 1,
  //     name: 'name',
  //     lastName: 'last name',
  //     email: 'email@email.com',
  //   };

  //   // store.overrideSelector(selectUsers, [user]);
  //   store.setState({ users: [user] });

  //   service.getUsers().subscribe((result) => expect(result).toEqual([user]));
  // });

  it('should add user to store', fakeAsync(() => {
    jest.spyOn(store, 'dispatch');
    const user: IUser = {
      id: 2,
      name: 'name',
      lastName: 'last name',
      email: 'email@email.com',
    };
    service.addUser(user);
    store.refreshState();
    expect(store.dispatch).toHaveBeenCalledWith(addUser({ user }));
    store
      .select(selectUsers)
      .subscribe((result) => expect(result).toEqual([user]));
  }));
});
