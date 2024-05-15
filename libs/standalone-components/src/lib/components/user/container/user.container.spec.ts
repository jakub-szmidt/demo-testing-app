import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserContainer } from './user.container';

describe('UserContainer', () => {
  let component: UserContainer;
  let fixture: ComponentFixture<UserContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserContainer],
    }).compileComponents();

    fixture = TestBed.createComponent(UserContainer);
    component = fixture.componentInstance;

    component.user = {
      id: 1,
      name: 'name',
      lastName: 'last name',
      email: 'email@email.com'
    }

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
