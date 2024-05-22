import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserListContainer } from './user-list.container';
import { of } from 'rxjs';
import { provideMockStore } from '@ngrx/store/testing/index';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { UsersService } from '@demo-testing-app/shared';

const mockUserService = {
  getUsers: jest.fn(),
};

describe('UserListContainer', () => {
  let component: UserListContainer;
  let fixture: ComponentFixture<UserListContainer>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserListContainer],
      providers: [
        provideMockStore(),
        { provide: UsersService, useValue: mockUserService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(UserListContainer);

    component = fixture.componentInstance;
    debugElement = fixture.debugElement;

    component.props.componentProps = {
      users$: of([
        {
          id: 1,
          name: 'name',
          lastName: 'last name',
          email: 'email@email.com',
        },
      ]),
      onAddClick: (): void => {},
      onRemoveClick: (): void => {},
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display User List Component', () => {
    const component = debugElement.query(
      By.css('lib-user-list-component'),
    ).nativeElement;

    expect(component).toBeVisible();
  });

  it('should', () => {
    expect(mockUserService.getUsers).toHaveBeenCalled();
  });
});
