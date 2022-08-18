// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract AContract{

    string public presentCaller;
    
    function changeCaller(string memory _name) public{
        presentCaller = _name;
    }
    // return("Stay safe");
}