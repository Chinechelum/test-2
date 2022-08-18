// transaction hash: 0xc2a84ad7208df7c0d2f63aca6a686ca68e182bfafaab81d3c6c8abf478e5f57d

require("dotenv").config({ path: ".env" });
// import { BytesLike } from "ethers";
import { ethers } from "hardhat";
// import * as dotenv from "dotenv";

// import IMultiSig from "../typechain-types/Imultisig.sol"

async function main() {

    // const aContract = await ethers.getContractFactory("AContract");
    // const TheContract = await aContract.deploy();

    // await TheContract.deployed();

    // console.log(
    //         "factory contract deployed to this address",
    //         TheContract.address
    //     );

  
  const CONTRACTADDRESS = "0x52DeB962195e8Ceef03Cd2ec34fFAcA462A14EcF";
  const ACONTRACT = await ethers.getContractAt("IAContract", CONTRACTADDRESS);
  
  await ACONTRACT.changeCaller("stephen");

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});