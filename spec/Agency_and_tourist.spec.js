const Tourist = require('../Tourist');
const Tour = require('../Tour');
const Agency = require('../Agency');

describe('Agency and tourist testing', () => {
  let turkey; let egypt; let india; let thailand; let agency;
  const max = new Tourist('Max', 32);
  const helen = new Tourist('Helen', 28);
  beforeEach(() => {
    turkey = new Tour('Turkey', 70000);
    egypt = new Tour('Egypt', 85000);
    india = new Tour('India', 100000);
    thailand = new Tour('Thailand', 105000);
    agency = new Agency(50000, [turkey, egypt, india, thailand]);
  });

  describe('function availableToursCount', () => {
    it('returns the number of tours available to buy', () => {
      expect(agency.availableToursCount()).toEqual(4);
    });
  });

  describe('function findTour', () => {
    describe('when the tour available', () => {
      it('returns the tour user interested in', () => {
        expect(agency.findTour('India')).toEqual(india);
      });
    });

    describe('when the tour is not available', () => {
      it('returns undefined', () => {
        expect(agency.findTour('Brazil')).toBeUndefined();
      });
    });
  });

  describe('tourist trying to buy a tour and agency to sell it', () => {
    describe('agency tries to sell a tour and it is not available', () => {
      it('returns undefined', () => {
        expect(agency.sell('Brazil')).toBeUndefined();
      });
    });

    describe('tourist is trying to but a tour', () => {
      it('returns true when tour is available and transaction complete', () => {
        expect(max.buy('Thailand', agency)).toEqual(true);
      });
      it('returns false when tour is unavailable and can not be sold', () => {
        expect(max.buy('Thailand', agency)).toEqual(true);
      });
    });

    describe('when a tourist buying a tour', () => {
      beforeEach(() => {
        max.buy('Thailand', agency);
        helen.buy('Maldives', agency);
      });

      it('tourist become an owner of tour if it is available', () => {
        expect(max.tours).toContain(thailand);
      });
      it('tourist cant buy an unavailable tour and obtains nothing', () => {
        expect(helen.tours).not.toContain(thailand);
      });
    });
  });
});
