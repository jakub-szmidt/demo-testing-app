import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[libBold]',
})
export class BoldDirective {
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter(): void {
    this.bold(true);
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.bold(false);
  }

  private bold(bold: boolean): void {
    if (bold) {
      this.el.nativeElement.style.fontWeight = 'bold';
    } else {
      this.el.nativeElement.style.fontWeight = 'normal';
    }
  }
}
