import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfoComponent } from './info.component';
import { of } from 'rxjs';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('InfoComponent', () => {
  let component: InfoComponent;
  let fixture: ComponentFixture<InfoComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InfoComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;

    component.props = {
      textToDisplay$: of('text'),
      onBackClick: (): void => {},
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display info text', () => {
    const textElement = debugElement.query(By.css('p')).nativeElement;

    expect(textElement.textContent).toContain('text');
  });

  it('should display Back button', () => {
    const buttonElement = debugElement.query(By.css('button')).nativeElement;

    expect(buttonElement).toBeVisible();
  });

  it('should call onBackClick when Back button is clicked', () => {
    jest.spyOn(component.props, 'onBackClick');
    const buttonElement = debugElement.query(By.css('button')).nativeElement;

    buttonElement.click();

    expect(component.props.onBackClick).toHaveBeenCalled();
  });
});
