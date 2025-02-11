module.exports = {
  default: {
    require: ["./support/world.js", "./support/hooks.js", "./steps/**/*.js"],
    format: ["progress", "json:reports/cucumber-report.json"], // Alterado 'progress-bar' para 'progress'
    paths: ["features/*.feature"],
    worldParameters: {},
  },
};
