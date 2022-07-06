// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from 'hardhat';
import { Contract, ContractFactory } from 'ethers';

async function main(): Promise<void> {
  // Hardhat always runs the compile task when running scripts through it.
  // If this runs in a standalone fashion you may want to call compile manually
  // to make sure everything is compiled
  // await run("compile");
  // We get the contract to deploy
  const nftMarketplace: ContractFactory = await ethers.getContractFactory(
    'Seaport',
  );
  
  const seaPort: Contract = await nftMarketplace.deploy("0x14B85b494f0F9c8111A5Ac9c08fdF91Eb625fFa1",{gasPrice: 50000000000});
  await seaPort.deployed();
  console.log('seaPort deployed to: ', seaPort.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error: Error) => {
    console.error(error);
    process.exit(1);
  });

  // npx hardhat run --network rinkeby ./scripts/deploy.ts