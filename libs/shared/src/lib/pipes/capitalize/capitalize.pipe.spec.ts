import { Component } from '@angular/core';
import { CapitalizePipe } from './capitalize.pipe';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
  standalone: true,
  template: `<h2>{{ 'text' | capitalize }}</h2>`,
  imports: [CapitalizePipe],
})
class HostComponent {}

describe('CapitalizePipe', () => {
  const pipe = new CapitalizePipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should capitalize string with transform', () => {
    expect(pipe.transform('text')).toEqual('Text');
  });

  it('should capitalize string in component', async () => {
    await TestBed.configureTestingModule({
      imports: [HostComponent],
    }).compileComponents();

    const fixture = TestBed.createComponent(HostComponent);
    const debugElement = fixture.debugElement;

    fixture.detectChanges();

    const headerElement = debugElement.query(By.css('h2')).nativeElement;
    expect(headerElement.textContent).toEqual('Text');
  });
});
