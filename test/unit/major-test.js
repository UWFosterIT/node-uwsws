require('../setup/');

describe('Major', function () {
  beforeEach(() => {
    uwsws.initialize(config);
  });

  describe('Get', () => {
    it('should return a major search response message', () => {
      let options = {
        campus:            'SEATTLE',
        degreeLevel:       1,
        degreeType:        2,
        majorAbbreviation: 'B A',
        pathway:           '00',
        quarter:           'autumn',
        year:              '2018',
      };

      return uwsws.major.search(options)
        .then((result) => {
          expect(result.data.Students.length).to.be.above(1);
        });
    });

  });
});