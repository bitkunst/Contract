// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import './ERC20.sol';

contract MyToken is ERC20('BK Token', 'BKT') {
    address public minter;

    constructor() {
        minter = msg.sender;
    }

    modifier onlyMinter() {
        require(msg.sender == minter, 'Only Minter');
        _;
    }

    function mint(address to, uint amount) external onlyMinter {
        _mint(to, amount);
    }

    function burn(address to, uint amount) external onlyMinter {
        _burn(to, amount);
    }
}
