const { PointsCalculator } = require("./PointsCalculator");
const fs = require("fs").promises;

class League {
  constructor(options = {}) {
    this.teams = options.teams || [];
    this.calculator = options.calculator || new PointsCalculator();
  }

  standings() {
      .slice(0)
      .sort(
        (a, b) =>
          b.wins * 2 + b.overtimeLosses - (a.wins * 2 + a.overtimeLosses)
      );

    return sortable;
  }

  async writeStandings(file) {
    const meta=this.standings().reduce((a, b) => a + `${this.standings().indexOf(b)+1}. ${b.name} - ${b.wins * 2 + b.overtimeLosses} points\n`, "")
    await fs.writeFile(file, meta);
  }

  scoresOf(name) {
    const all = this.standings().filter((el) => el.name == name);

    return all[0].wins * 2 + all[0].overtimeLosses;
  }
}

module.exports = League;
