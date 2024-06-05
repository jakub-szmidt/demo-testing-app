import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserListComponent } from './user-list.component';
import { of } from 'rxjs';
import { Component, DebugElement, Input } from '@angular/core';
import { IUser } from '@demo-testing-app/shared';
import { By } from '@angular/platform-browser';
import { UserContainer } from '../../user/container/user.container';

@Component({
  selector: 'lib-user-container',
  template: ``,
  standalone: true,
})
export class MockUserContainer {
  @Input() user!: IUser;
}

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    TestBed.overrideComponent(UserListComponent, {
      remove: { imports: [UserContainer] },
      add: { imports: [MockUserContainer] },
    });
    TestBed.overrideComponent(UserListComponent, {
      set: { host: { '(click)': 'dummy' } },
    });

    await TestBed.configureTestingModule({
      imports: [UserListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;

    component.props = {
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
      onInfoClick: (): void => {},
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display list of users', () => {
    const users: IUser[] = [
      {
        id: 1,
        name: 'name',
        lastName: 'last name',
        email: 'email@email.com',
      },
      {
        id: 2,
        name: 'name2',
        lastName: 'last name2',
        email: 'email2@email.com',
      },
    ];

    component.props.users$ = of(users);
    debugElement.triggerEventHandler('click', null);
    fixture.detectChanges();

    const userComponents: HTMLElement[] = debugElement
      .queryAll(By.css('lib-user-container'))
      .map((debugEl) => debugEl.nativeElement);

    expect(userComponents.length).toBe(2);
    userComponents.forEach((element) => {
      expect(element).toBeVisible();
    });
  });

  it('should display Add Random User button', () => {
    const button: HTMLElement = debugElement.query(
      By.css('#add-random-user-button'),
    ).nativeElement;

    expect(button).toBeVisible();
  });

  it('should call onAddClick method when Add Random User button is clicked', () => {
    jest.spyOn(component.props, 'onAddClick');
    const button: HTMLElement = debugElement.query(
      By.css('#add-random-user-button'),
    ).nativeElement;

    button.click();

    expect(component.props.onAddClick).toHaveBeenCalled();
  });

  it('should display Remove Last User button', () => {
    const button: HTMLElement = debugElement.query(
      By.css('#remove-last-user-button'),
    ).nativeElement;

    expect(button).toBeVisible();
  });

  it('should call onRemoveClick method when Remove Last User button is clicked', () => {
    jest.spyOn(component.props, 'onRemoveClick');
    const button: HTMLElement = debugElement.query(
      By.css('#remove-last-user-button'),
    ).nativeElement;

    button.click();

    expect(component.props.onRemoveClick).toHaveBeenCalled();
  });

  it('should display Info button', () => {
    const button: HTMLElement = debugElement.query(
      By.css('#info-button'),
    ).nativeElement;

    expect(button).toBeVisible();
  });

  it('should call onAddClick method when Add Random User button is clicked', () => {
    jest.spyOn(component.props, 'onInfoClick');
    const button: HTMLElement = debugElement.query(
      By.css('#info-button'),
    ).nativeElement;

    button.click();

    expect(component.props.onInfoClick).toHaveBeenCalled();
  });
});
