import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserListContainer } from './user-list.container';
import { Component, DebugElement, Input } from '@angular/core';
import { UserListComponentProps, UsersService } from '@demo-testing-app/shared';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';

const mockUsersService = {
  getUsers: jest.fn(),
  addRandomUser: jest.fn(),
  removeLastUser: jest.fn(),
};

@Component({
  selector: 'module-lib-user-list-component',
  template: `
    <button id="add-random-user-button" (click)="props.onAddClick()">
      Add random user
    </button>
    <button id="remove-last-user-button" (click)="props.onRemoveClick()">
      Remove last user
    </button>
  `,
})
class MockUserListComponent {
  @Input() props!: UserListComponentProps;
}

describe('UserListContainer', () => {
  let component: UserListContainer;
  let fixture: ComponentFixture<UserListContainer>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserListContainer, MockUserListComponent],
      providers: [{ provide: UsersService, useValue: mockUsersService }],
    }).compileComponents();

    fixture = TestBed.createComponent(UserListContainer);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;

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
      By.css('module-lib-user-list-component'),
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

  it('should call addRandomUser method on Add Random User click', () => {
    const button: HTMLElement = debugElement.query(
      By.css('#add-random-user-button'),
    ).nativeElement;

    button.click();

    expect(mockUsersService.addRandomUser).toHaveBeenCalled();
  });

  it('should call removeLastUser method on Remove Last User click', () => {
    const button: HTMLElement = debugElement.query(
      By.css('#remove-last-user-button'),
    ).nativeElement;

    button.click();

    expect(mockUsersService.removeLastUser).toHaveBeenCalled();
  });
});
