const ROBOTS_OF_PIAIC = artifacts.require("ROBOTS_OF_PIAIC");

module.exports = function (deployer) {
  deployer.deploy(ROBOTS_OF_PIAIC);
};