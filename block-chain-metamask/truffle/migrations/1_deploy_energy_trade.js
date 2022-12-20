const EnergyTrade = artifacts.require("EnergyTrade");

module.exports = async function (deployer) {
  await deployer.deploy(EnergyTrade);
};
// truffle migrate --reset
