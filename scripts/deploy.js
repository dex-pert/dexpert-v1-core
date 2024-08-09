const { ethers } = require("hardhat")


//0x3EEb14EFC9ae37C39D91AaFDD9D137a4FCce98F1
async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const MyContract = await ethers.getContractFactory("DexpertSwapV1Factory");
  const myContract = await MyContract.deploy("0xDed7220fb36929866d1B70cED7b3f17d057075B4");
  console.log("Contract deployed to address:", myContract.target);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
