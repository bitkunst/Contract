//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

interface IStakingContract {
  function deposit(uint amount) external payable;

  function withdraw(address _address, uint amount) external;
}
