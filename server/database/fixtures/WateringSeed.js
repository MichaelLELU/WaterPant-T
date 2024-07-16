const AbstractSeeder = require("./AbstractSeeder");

class WateringSeed extends AbstractSeeder {
  constructor() {
    super({ table: "watering_frequency", truncate: true });
  }

  run() {
    const frequency = [
      { frequency: "Three times per week" },
      { frequency: "Twice per week" },
      { frequency: "Once per week" },
      { frequency: "Twice per month" },
      { frequency: "Once per month" },
    ];

    frequency.forEach((wFerquency) => this.insert(wFerquency));
  }
}

module.exports = WateringSeed;
