import { MailPipe } from './mail.pipe';

describe('MailPipe', () => {
  it('create an instance', () => {
    const pipe = new MailPipe();
    expect(pipe).toBeTruthy();
  });
});
