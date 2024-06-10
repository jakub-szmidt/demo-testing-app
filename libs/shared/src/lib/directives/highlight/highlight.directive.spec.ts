import { Component, DebugElement } from '@angular/core';
import { HighlightDirective } from './highlight.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
  standalone: true,
  template: `<h2 libHighlight>Text</h2>`,
  imports: [HighlightDirective],
})
class HostComponent {}

describe('HighlightDirective', () => {
  let fixture: ComponentFixture<HostComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HostComponent);
    debugElement = fixture.debugElement;

    fixture.detectChanges();
  });

  it('should create an instance', () => {
    const directive = new HighlightDirective(fixture.elementRef);

    expect(directive).toBeTruthy();
  });

  it('should highlight in red on mouse hover', () => {
    const element: HTMLElement = debugElement.query(By.css('h2')).nativeElement;

    element.dispatchEvent(new MouseEvent('mouseenter'));
    fixture.detectChanges();

    expect(element.style.backgroundColor).toBe('rgb(255, 255, 0)');
  });
});
