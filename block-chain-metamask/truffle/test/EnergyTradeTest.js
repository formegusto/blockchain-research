const chai = require("chai");
const BN = web3.utils.BN;
chai.use(require("chai-bn")(BN));
const { expect } = require("chai");

const EnergyTrade = artifacts.require("EnergyTrade");

contract("EnergyTradeTest", async (accounts) => {
  let ins;

  beforeEach(async () => {
    ins = await EnergyTrade.new();
  });

  it("Regist Test", async () => {
    await ins.regist(10, { from: accounts[0] });

    const result = await ins.getAvaliableOfPurchase();
    const registed = result[0];

    await expect(registed[1]).to.be.equal("10");
  });
});
