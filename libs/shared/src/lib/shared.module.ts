import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MailPipe } from './pipes/mail/mail.pipe';

@NgModule({
  declarations: [MailPipe],
  imports: [CommonModule],
  exports: [MailPipe],
})
export class SharedModule {}
