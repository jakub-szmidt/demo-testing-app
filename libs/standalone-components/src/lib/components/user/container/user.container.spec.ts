import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserContainer } from './user.container';
import { Component, DebugElement, Input } from '@angular/core';
import { By } from '@angular/platform-browser';
import { UserComponent } from '../component/user.component';
import { IUser } from '@demo-testing-app/shared';

@Component({
  selector: 'lib-user-component',
  template: ``,
  standalone: true,
})
class MockUserComponent {
  @Input() user!: IUser;
}

describe('UserContainer', () => {
  let component: UserContainer;
  let fixture: ComponentFixture<UserContainer>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    TestBed.overrideComponent(UserContainer, {
      remove: { imports: [UserComponent] },
      add: { imports: [MockUserComponent] },
    });

    await TestBed.configureTestingModule({
      imports: [UserContainer],
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
      By.css('lib-user-component'),
    ).nativeElement;

    expect(userComponent).toBeVisible();
  });
});
