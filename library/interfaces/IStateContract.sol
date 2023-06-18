//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "../Constant.sol";

interface IStateContract {
  function getWhiteListInfo(
    address
  ) external view returns (Constant.whiteListInfo memory);

  function isWhiteList(address _address) external view returns (bool);

  function deposit(address _address, uint amount) external;

  function withdraw(address _address, uint amount) external;

  function checkAmount(
    address _address,
    uint amount
  ) external view returns (bool);
}
