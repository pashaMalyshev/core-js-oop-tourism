const Tour = require('../Tour');

describe('Tour', () => {
  let turkey;
  beforeEach(() => {
    turkey = new Tour('Turkey', 70000);
  });

  it('has a name', () => {
    expect(turkey.country).toEqual('Turkey');
  });

  it('has an age as described', () => {
    expect(turkey.price).toEqual(70000);
  });
});
