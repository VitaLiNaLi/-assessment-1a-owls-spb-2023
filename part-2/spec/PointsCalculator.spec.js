const Team = require('../Team');
const PointsCalculator = require('../PointsCalculator');

describe('PointsCalculator', () => {
  let ducks;
  let calculator;

  beforeEach(() => {
    ducks = new Team({
      name: 'Ducks',
      wins: 6,
      losses: 2,
      overtimeLosses: 2,
    });
    calculator = new PointsCalculator();
  });

  it('высчитывает очки для команды', () => {
    expect(calculator.pointsForTeam(ducks)).toEqual(14);
  });
});
