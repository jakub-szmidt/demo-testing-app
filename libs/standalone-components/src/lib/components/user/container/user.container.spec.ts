import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserContainer } from './user.container';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('UserContainer', () => {
  let component: UserContainer;
  let fixture: ComponentFixture<UserContainer>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserContainer],
    }).compileComponents();

    fixture = TestBed.createComponent(UserContainer);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;

    component.user = {
      id: 1,
      name: 'name',
      lastName: 'last name',
      email: 'email@email.com',
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display user component', () => {
    const userComponent: HTMLElement = debugElement.query(
      By.css('lib-user-component'),
    ).nativeElement;

    expect(userComponent).toBeVisible();
  });
});
