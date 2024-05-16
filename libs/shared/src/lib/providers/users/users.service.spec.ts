import { TestBed } from '@angular/core/testing';
import { UsersService } from './users.service';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { StoreRootModel } from '../../store/store.models';
import { IUser } from '../../models/user.model';
import { of } from 'rxjs';

const initialState: StoreRootModel = {
  users: [],
};

describe('UsersService', () => {
  let service: UsersService;
  let store: MockStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore({ initialState })],
    });

    service = TestBed.inject(UsersService);
    store = TestBed.inject(MockStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return list of users', () => {
    const user: IUser = {
      id: 1,
      name: 'name',
      lastName: 'last name',
      email: 'email@email.com',
    };

    store.setState({ users: [user] });

    expect(service.getUsers()).toEqual(of([user]));
  });
});
