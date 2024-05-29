import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
  standalone: true,
})
export class MockCapitalizePipe implements PipeTransform {
  transform(value: string): string {
    return value;
  }
}
