import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserContainer } from './user.container';
import { Component, DebugElement, Input } from '@angular/core';
import { By } from '@angular/platform-browser';
import { IUser } from '@demo-testing-app/shared';

@Component({
  selector: 'module-lib-user-component',
  template: ``,
})
class MockUserComponent {
  @Input() user!: IUser;
}

describe('UserContainer', () => {
  let component: UserContainer;
  let fixture: ComponentFixture<UserContainer>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserContainer, MockUserComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UserContainer);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display user component', () => {
    const userComponent: HTMLElement = debugElement.query(
      By.css('module-lib-user-component'),
    ).nativeElement;

    expect(userComponent).toBeVisible();
  });
});
