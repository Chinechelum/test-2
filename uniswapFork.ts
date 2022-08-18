import { ethers } from "hardhat";

async function main() {
  //interact with uniswap swapTokenforExactToken function
  //swap usdt to dai
  //TO-DO
  //erc20 token interface
  //Approve the uniswap contract
  //check balance of signer before swap
  //swap token caling the function
  //check balance after swap.

  const USDTAddress = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";
  const DAIAddress = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
  const UNIRouter = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D";
  const amountOutMin = 100;
  const amountIn = 200000;

  const helpers = require("@nomicfoundation/hardhat-network-helpers");
  const USDTHolder = "0xf584f8728b874a6a5c7a8d4d387c9aae9172d621";
  await helpers.impersonateAccount(USDTHolder);
  const impersonatedSigner = await ethers.getSigner(USDTHolder);

  const USDT = await ethers.getContractAt(
    "IERC20",
    USDTAddress,
    impersonatedSigner
  );
  const DAI = await ethers.getContractAt("IERC20", DAIAddress);
  const ROUTER = await ethers.getContractAt(
    "IUniswap",
    UNIRouter,
    impersonatedSigner
  );
  await USDT.approve(UNIRouter, amountIn);
    const usdtBal = await USDT.balanceOf(USDTHolder);
    const daiBal = await DAI.balanceOf(USDTHolder);

    console.log("balance before swap", usdtBal, daiBal);

  const result = await ROUTER.swapExactTokensForTokens(
    amountIn,
    amountOutMin,
    [USDTAddress, DAIAddress],
    USDTHolder,
    9660768252
  );

  console.log(result);

    const usdtBalAfter = await USDT.balanceOf(USDTHolder);
    const daiBalAfter = await DAI.balanceOf(USDTHolder);

    console.log("balance after swap", usdtBalAfter, daiBalAfter);



    //second function
    const WETHAddress = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
  const _value = ethers.utils.parseEther("1");


//   uint[] memory amounts
const result2 = await ROUTER.swapExactETHForTokens(amountOutMin, [WETHAddress, DAIAddress], USDTHolder, 9660768252, {value: _value});

  console.log(result2);

//   const CONTRACTADDRESS = "0x6e828b59fc799b6ef92e42d2f39e438a7477f469";
//   const MULTISIG = await ethers.getContractAt("IMultiSig", CONTRACTADDRESS);
  //   await wallet.sendTransaction({ to: CONTRACTADDRESS, value: _value });
  //   console.log();
  //   console.log("contractBalance", await MULTISIG.contractBalance());

  // await MULTISIG.withdrawEther(_value);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// usdt:140783941600306
//usdc: 2144000000000000004000

//140783941600305
//2144000000000000006000
