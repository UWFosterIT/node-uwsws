import Another from './another';

const UWSWS = {
  anotherFn: Another.anotherFn,
  multiply: Another.multiply,
  mainFn() {
    return 'hello';
  }
};

export default UWSWS;
