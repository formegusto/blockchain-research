// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract EnergyTrade {
    struct Rate {
        address seller;
        uint256 usage;
    }
    Rate[] private rateBySeller;
    uint256 private totalUsage = 0;

    /**
     regist
     사용량 등록 (only 1 ether rate)
     */
    function regist(uint256 _usage) public {
        rateBySeller.push(Rate(msg.sender, _usage));
        totalUsage += _usage;
    }

    
    /**
    */
    function getAvaliableOfPurchase() public view returns (Rate[] memory){
        return rateBySeller;
    }


}