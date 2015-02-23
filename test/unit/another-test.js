import uwsws from '../../src/index';

describe('A second file of tests', () => {
  beforeEach(() => {
    spy(uwsws, 'anotherFn');
    uwsws.anotherFn();
  });

  it('should have been run once', () => {
    expect(uwsws.anotherFn).to.have.been.calledOnce;
  });

  it('should have always returned hello', () => {
    expect(uwsws.anotherFn).to.have.always.returned('ok');
  });
});
