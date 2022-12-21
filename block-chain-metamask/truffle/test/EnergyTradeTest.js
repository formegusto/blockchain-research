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
    await ins.regist(accounts[0], 10);

    const result = await ins.getAvailableOfPurchase();
    const registed = result[0];

    await expect(registed[1]).to.be.equal("10");

    const total = await ins.getTotalUsage();
    await expect(total).to.be.bignumber.equal("10");
  });

  /**
   * 상황
   * account 1이 등록 후,
   * account 2가 이를 1ether를 보내서 사는 과정
   */
  it("Sell Test", async () => {
    // total 30
    await ins.regist(accounts[0], 10);
    await ins.regist(accounts[2], 20);

    const result = await ins.sell(0, {
      from: accounts[1],
      value: web3.utils.toWei("1", "ether"),
    });
    const sellUsage = result.logs[0].args[0];
    await expect(sellUsage).to.be.bignumber.equal("10");

    // 0으로 바꾸기 작업
    const availableOfPurchase = await ins.getAvailableOfPurchase();
    await expect(availableOfPurchase[0][1]).to.be.equal("0");

    const total = await ins.getTotalUsage();
    await expect(total).to.be.bignumber.equal("20");

    // // 구매량 확인
    const buyUsage = await ins.getBuyUsage(accounts[1]);
    await expect(buyUsage).to.be.bignumber.equal("10");

    const unbuyUsage = await ins.getBuyUsage(accounts[0]);
    await expect(unbuyUsage).to.be.bignumber.equal("0");
  });
});
