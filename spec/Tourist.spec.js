const Tourist = require('../Tourist');

describe('Tourist', () => {
  let amelia;
  beforeEach(() => {
    amelia = new Tourist('Amelia', 25);
  });

  it('has a name', () => {
    expect(amelia.name).toEqual('Amelia');
  });

  it('has an age as described', () => {
    expect(amelia.age).toEqual(25);
  });
  it('has an empty list(array) of tours', () => {
    expect(amelia.tours).toEqual([]);
  });
});
