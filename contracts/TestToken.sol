// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TestToken is ERC20 {
    constructor(
        string memory _name,
        uint256 _initialAmount
    ) ERC20(_name, _name) {
        _mint(msg.sender, _initialAmount);
    }

    function mint(address _who, uint256 _amount) public {
        _mint(_who, _amount);
    }
}
