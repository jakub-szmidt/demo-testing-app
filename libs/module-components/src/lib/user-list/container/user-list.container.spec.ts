import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserListContainer } from './user-list.container';
import { Component, Input } from '@angular/core';
import { UserListComponentProps } from '@demo-testing-app/shared';
import { provideMockStore } from '@ngrx/store/testing/index';

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

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserListContainer, MockUserListComponent],
      providers: [provideMockStore()],
    }).compileComponents();

    fixture = TestBed.createComponent(UserListContainer);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
