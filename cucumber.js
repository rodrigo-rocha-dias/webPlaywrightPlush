module.exports = {
  default: {
    require: ["./support/world.js", "./support/hooks.js", "./steps/**/*.js"],
    format: ["progress-bar"],
    publishQuiet: true,
    paths: ["features/*.feature"],
    worldParameters: {},
  },
};
