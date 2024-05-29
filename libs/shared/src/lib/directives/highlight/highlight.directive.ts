import { Directive, ElementRef, HostListener } from '@angular/core';
import { Color } from '../../enums/colors.enum';

@Directive({
  selector: '[libHighlight]',
  standalone: true,
})
export class HighlightDirective {
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter(): void {
    this.highlight(Color.Red);
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.highlight();
  }

  private highlight(color?: Color): void {
    if (color !== undefined) {
      this.el.nativeElement.style.backgroundColor = color;
    } else {
      this.el.nativeElement.style.backgroundColor = '';
    }
  }
}
