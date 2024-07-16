const AbstractSeeder = require("./AbstractSeeder");

class ExpositionSeed extends AbstractSeeder {
  constructor() {
    super({ table: "solar_expo", truncate: true });
  }

  run() {
    const exposition = [
      {
        exposition: "Full sun",
        description: "Plants need at least 6 hours of direct sun daily",
      },
      {
        exposition: "Part sun",
        description:
          "Plants thrive with between 3 and 6 hours of direct sun per day",
      },
      {
        exposition: "Part shade",
        description:
          "Plants require between 3 and 6 hours of sun per day, but need protection from intense mid-day sun",
      },
      {
        exposition: "Full shade",
        description: "Plants require less than 3 hours of direct sun per day",
      },
    ];

    exposition.forEach((sExposition) => this.insert(sExposition));
  }
}

module.exports = ExpositionSeed;
