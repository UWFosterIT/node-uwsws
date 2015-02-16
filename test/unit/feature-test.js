import uwsws from '../../src/index';

describe('A feature test', () => {
  beforeEach(() => {
    spy(uwsws, 'mainFn');
    uwsws.mainFn();
  });

  it('should have been run once', () => {
    expect(uwsws.mainFn).to.have.been.calledOnce;
  });

  it('should have always returned hello', () => {
    expect(uwsws.mainFn).to.have.always.returned('hello');
  });
});
