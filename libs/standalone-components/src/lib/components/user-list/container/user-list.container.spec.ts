import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserListContainer } from './user-list.container';
import { of } from 'rxjs';
import { provideMockStore } from '@ngrx/store/testing/index';

describe('UserListContainer', () => {
  let component: UserListContainer;
  let fixture: ComponentFixture<UserListContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserListContainer],
      providers: [provideMockStore()],
    }).compileComponents();

    fixture = TestBed.createComponent(UserListContainer);
    component = fixture.componentInstance;

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
});
