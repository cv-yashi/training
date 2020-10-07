import { EvenNumberPipe } from './even-number.pipe';

describe('EvenNumberPipe', () => {
  it('create an instance', () => {
    const pipe = new EvenNumberPipe();
    expect(pipe).toBeTruthy();
  });
});
