module.exports = {
  default: {
    require: ["./support/world.js", "./support/hooks.js", "./steps/**/*.js"],
    format: ["progress-bar", "json:reports/cucumber-report.json"],
    publishQuiet: true,
    paths: ["features/*.feature"],
    worldParameters: {},
  },
};
