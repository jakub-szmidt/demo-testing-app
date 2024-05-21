import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserComponent } from './user.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserComponent],
    }).compileComponents();

    fixture = TestBed.overrideComponent(UserComponent, {
      set: { host: { '(click)': 'dummy' } }, //this is needed to test change of the component's Inputs with ChangeDetectionStrategy.OnPush
    }).createComponent(UserComponent);

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

  it('should display id', () => {
    const elementTitle = debugElement.query(
      By.css('#user-id-title'),
    ).nativeElement;
    const element: HTMLElement = debugElement.query(
      By.css('#user-id'),
    ).nativeElement;

    expect(elementTitle).toBeVisible();
    expect(element).toBeVisible();
    expect(element.textContent).toEqual('1');
  });

  it('should display name', () => {
    const elementTitle = debugElement.query(
      By.css('#user-name-title'),
    ).nativeElement;
    const element: HTMLElement = debugElement.query(
      By.css('#user-name'),
    ).nativeElement;

    expect(elementTitle).toBeVisible();
    expect(element).toBeVisible();
    expect(element.textContent).toEqual('name');
  });

  it('should display last name', () => {
    const elementTitle = debugElement.query(
      By.css('#user-last-name-title'),
    ).nativeElement;
    const element: HTMLElement = debugElement.query(
      By.css('#user-last-name'),
    ).nativeElement;

    expect(elementTitle).toBeVisible();
    expect(element).toBeVisible();
    expect(element.textContent).toEqual('last name');
  });

  it('should display email', () => {
    const elementTitle = debugElement.query(
      By.css('#user-email-title'),
    ).nativeElement;
    const element: HTMLElement = debugElement.query(
      By.css('#user-email'),
    ).nativeElement;

    expect(elementTitle).toBeVisible();
    expect(element).toBeVisible();
    expect(element.textContent).toEqual('email@email.com');
  });

  describe('change detection strategy', () => {
    //change detection can only be triggered by changing reference of Input only from parent component, that is why we need host element
    it(`should update template after host component's click event is triggered`, () => {
      //here we change Input's reference
      component.user = {
        id: 2,
        name: 'name',
        lastName: 'last name',
        email: 'email@email.com',
      };

      debugElement.triggerEventHandler('click', null); //here we trigger change detection lifecycle hook
      fixture.detectChanges();

      const element: HTMLElement = debugElement.query(
        By.css('#user-id'),
      ).nativeElement;

      expect(element.textContent).toEqual('2');
    });

    it(`should not update template if host component's click event is not triggered`, () => {
      component.user = {
        id: 2,
        name: 'name',
        lastName: 'last name',
        email: 'email@email.com',
      };

      fixture.detectChanges();

      const element: HTMLElement = debugElement.query(
        By.css('#user-id'),
      ).nativeElement;

      expect(element.textContent).toEqual('1');
    });
  });
});
