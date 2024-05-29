import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mail',
})
export class MailPipe implements PipeTransform {
  transform(value: string): string {
    return `mailto:${value}`;
  }
}
