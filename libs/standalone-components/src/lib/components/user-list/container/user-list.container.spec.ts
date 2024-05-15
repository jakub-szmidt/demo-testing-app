import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserListContainer } from './user-list.container';

describe('UserListContainer', () => {
  let component: UserListContainer;
  let fixture: ComponentFixture<UserListContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserListContainer],
    }).compileComponents();

    fixture = TestBed.createComponent(UserListContainer);
    component = fixture.componentInstance;

    component.users = [{
      id: 1,
      name: 'name',
      lastName: 'last name',
      email: 'email@email.com'
    }];
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
