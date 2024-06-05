import { Component } from '@angular/core';
import { MailPipe } from './mail.pipe';
import { SharedModule } from '../../shared.module';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
  standalone: true,
  template: `<h2>{{ 'text' | mail }}</h2>`,
  imports: [SharedModule],
})
class HostComponent {}

describe('MailPipe', () => {
  const pipe = new MailPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should add mailto to string with transform', () => {
    expect(pipe.transform('text')).toEqual('mailto:text');
  });

  it('should add mailto to string in component', async () => {
    await TestBed.configureTestingModule({
      imports: [HostComponent],
    }).compileComponents();

    const fixture = TestBed.createComponent(HostComponent);
    const debugElement = fixture.debugElement;

    fixture.detectChanges();

    const headerElement = debugElement.query(By.css('h2')).nativeElement;
    expect(headerElement.textContent).toEqual('mailto:text');
  });
});
