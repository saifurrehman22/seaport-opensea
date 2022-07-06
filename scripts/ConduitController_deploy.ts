// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from 'hardhat';
import { Contract, ContractFactory } from 'ethers';

async function main(): Promise<void> {

  // We get the contract to deploy
  const ConduitController: ContractFactory = await ethers.getContractFactory(
    'ConduitController',
  );
  const conduitController: Contract = await ConduitController.deploy({gasPrice: 50000000000});
  await conduitController.deployed();
  console.log('ConduitController deployed to: ', conduitController.address);
}


main()
  .then(() => process.exit(0))
  .catch((error: Error) => {
    console.error(error);
    process.exit(1);
  });


  // npx hardhat run --network rinkeby ./scripts/deploy1.ts