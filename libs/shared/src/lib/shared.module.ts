import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MailPipe } from './pipes/mail/mail.pipe';
import { BoldDirective } from './directives/bold/bold.directive';

@NgModule({
  declarations: [MailPipe, BoldDirective],
  imports: [CommonModule],
  exports: [MailPipe, BoldDirective],
})
export class SharedModule {}
