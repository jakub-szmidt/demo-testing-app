import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserComponent } from './user.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import {
  MockBoldDirective,
  MockCapitalizePipe,
  MockHighlightDirective,
  MockMailPipe,
} from '@demo-testing-app/shared';
import { MatCardModule } from '@angular/material/card';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MockCapitalizePipe, MockHighlightDirective, MatCardModule],
      declarations: [UserComponent, MockMailPipe, MockBoldDirective],
    }).compileComponents();

    fixture = TestBed.createComponent(UserComponent);
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
});
