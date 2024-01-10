import hre from "hardhat";
import { createPublicClient, getContract, http } from "viem";
import {hardhat} from "viem/chains"

async function main() {
  const publicClient = await hre.viem.getPublicClient();
  const myToken = await hre.viem.deployContract("TestToken", ["TEST", 1_000_000n]);
  const res = await myToken.read.totalSupply();
  console.log({res})
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
