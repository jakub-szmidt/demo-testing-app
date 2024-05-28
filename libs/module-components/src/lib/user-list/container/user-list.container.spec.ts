import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserListContainer } from './user-list.container';

describe('UserListContainer', () => {
  let component: UserListContainer;
  let fixture: ComponentFixture<UserListContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserListContainer],
    }).compileComponents();

    fixture = TestBed.createComponent(UserListContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
