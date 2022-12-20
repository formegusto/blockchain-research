// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;


/*
 1eth의 가치로 자신의 사용량을
 Energy Market에 올려 공유하는 smart contract
*/
contract EnergyTrade {
    struct Rate {
        address payable seller;
        uint256 usage;
    }
    Rate[] rateBySeller;
    uint256 private totalUsage = 0;
    event Usage(uint256 usage);

    /**
     regist
     사용량 등록 (only 1 ether rate)
     */
    function regist(address payable seller, uint256 _usage) public {
        Rate memory rate = Rate(seller, _usage);
        rateBySeller.push(rate);
        totalUsage += _usage;
    }

    
    /**
     getAvailableOfPurchase
     등록된 전력 데이터 공유
    */
    function getAvailableOfPurchase() public view returns (Rate[] memory){
        return rateBySeller;
    }

    /**
     총 액수 확인
     */
    function getTotalUsage() public view returns (uint256) {
        return totalUsage;
    }

    /**
     sell
     전력량 구매
     */
    function sell(uint256 index) public payable {
        address payable seller = rateBySeller[index].seller;
        seller.transfer(msg.value);

        uint256 usage = rateBySeller[index].usage;

        totalUsage -= usage;
        delete rateBySeller[index];

        emit Usage(usage);
    }
}