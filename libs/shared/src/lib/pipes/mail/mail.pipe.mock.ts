import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mail',
})
export class MockMailPipe implements PipeTransform {
  transform(value: string): string {
    return value;
  }
}
