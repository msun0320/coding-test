// I did not finish learning how to do unit testing for React components today,
// so I wrote some basic testing as if I did before using Jasmine to test pure functions.
describe('generateRange', function() {
  it('returns an array of dates between 2 dates', function() {
    expect(generateRange('2020-05-01', '2020-05-10')).toEqual([
        '2020-05-01',
        '2020-05-02',
        '2020-05-03',
        '2020-05-04',
        '2020-05-05',
        '2020-05-06',
        '2020-05-07',
        '2020-05-08',
        '2020-05-09',
        '2020-05-10',
      ]);
  });
});

describe('convertArrToObj', function() {
  it('returns an object which keys are items in the array, values are zeroes', function() {
    expect(convertArrToObj(['2020-05-01', '2020-05-02', '2020-05-03'])).toEqual({
      '2020-05-01': 0,
      '2020-05-02': 0,
      '2020-05-03': 0   
    });
  });
});

describe('formatUnixTime', function() {
  it('returns local date in yyyy-mm-dd', function() {
    expect(formatUnixTime(1588393200)).toEqual('2020-05-01');
  });
});

describe('countEventsByDate', function() {
  it('returns an objects including frequency', function() {
    expect(countEventsByDate([
        {timestamp: 1588393200},
        {timestamp: 1588450930},
        {timestamp: 1588468930},
      ], {
        '2020-05-01': 0,
        '2020-05-02': 0,
        '2020-05-03': 0 
      })).toEqual({
        '2020-05-01': 1,
        '2020-05-02': 2,
        '2020-05-03': 0 
    });
  });
});