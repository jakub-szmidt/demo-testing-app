import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserListContainer } from './user-list.container';
import { of } from 'rxjs';
import { Component, DebugElement, Input } from '@angular/core';
import { By } from '@angular/platform-browser';
import {
  StoreActions,
  UserListComponentProps,
  UsersService,
} from '@demo-testing-app/shared';
import { UserListComponent } from '../component/user-list.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

const mockUsersService = {
  getUsers: jest.fn(),
  addRandomUser: jest.fn(),
  removeLastUser: jest.fn(),
};

@Component({
  selector: 'lib-user-list-component',
  template: ``,
  standalone: true,
})
class MockUserListComponent {
  @Input() props!: UserListComponentProps;
}

describe('UserListContainer', () => {
  let component: UserListContainer;
  let fixture: ComponentFixture<UserListContainer>;
  let debugElement: DebugElement;
  let store: MockStore;

  beforeEach(async () => {
    TestBed.overrideComponent(UserListContainer, {
      remove: { imports: [UserListComponent] },
      add: { imports: [MockUserListComponent] },
    });

    await TestBed.configureTestingModule({
      imports: [UserListContainer],
      providers: [
        { provide: UsersService, useValue: mockUsersService },
        provideMockStore(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(UserListContainer);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    store = TestBed.inject(MockStore);

    fixture.detectChanges();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display User List Component', () => {
    const userListComponent = debugElement.query(
      By.css('lib-user-list-component'),
    ).nativeElement;

    expect(userListComponent).toBeVisible();
  });

  it('should retrieve list of users on init', (done) => {
    mockUsersService.getUsers.mockReturnValue(
      of([
        {
          id: 1,
          name: 'name',
          lastName: 'last name',
          email: 'email@email.com',
        },
      ]),
    );

    component.ngOnInit();

    expect(mockUsersService.getUsers).toHaveBeenCalled();
    const users$ = component.props.componentProps.users$;
    users$.subscribe((users) => {
      expect(users).toEqual([
        {
          id: 1,
          name: 'name',
          lastName: 'last name',
          email: 'email@email.com',
        },
      ]);
      done();
    });
  });

  it(`should call service's addRandomUser method on onAddClick`, () => {
    component.props.componentProps.onAddClick();

    expect(mockUsersService.addRandomUser).toHaveBeenCalled();
  });

  it(`should call service's removeLastUser method on onRemoveClick`, () => {
    component.props.componentProps.onRemoveClick();

    expect(mockUsersService.removeLastUser).toHaveBeenCalled();
  });

  it(`should dispatch navigateToInfoPage action on onInfoClick`, () => {
    jest.spyOn(store, 'dispatch');
    component.props.componentProps.onInfoClick();

    expect(store.dispatch).toHaveBeenCalledWith(
      StoreActions.navigateToInfoPage(),
    );
  });
});
