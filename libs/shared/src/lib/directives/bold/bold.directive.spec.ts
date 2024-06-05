import { Component, DebugElement } from '@angular/core';
import { BoldDirective } from './bold.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SharedModule } from '../../shared.module';

@Component({
  standalone: true,
  template: `<h2 libBold></h2>`,
  imports: [SharedModule],
})
class HostComponent {}

describe('BoldDirective', () => {
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
    const directive = new BoldDirective(fixture.elementRef);

    expect(directive).toBeTruthy();
  });

  it('should highlight in red on mouse hover', () => {
    const element: HTMLElement = debugElement.query(By.css('h2')).nativeElement;

    element.dispatchEvent(new MouseEvent('mouseenter'));
    fixture.detectChanges();

    expect(element.style.fontWeight).toBe('bold');
  });
});
