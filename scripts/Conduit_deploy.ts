// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from 'hardhat';
import { Contract, ContractFactory } from 'ethers';

async function main(): Promise<void> {

  // We get the contract to deploy
  const Conduit: ContractFactory = await ethers.getContractFactory(
    'Conduit',
  );
  const conduit: Contract = await Conduit.deploy({gasPrice: 50000000000});
  await conduit.deployed();
  console.log('Conduit deployed to: ', conduit.address);
}


main()
  .then(() => process.exit(0))
  .catch((error: Error) => {
    console.error(error);
    process.exit(1);
  });

// 0x9E9Dc0871E81086AcDb5Ee6cC0B0D48ad3057880

  // npx hardhat run --network rinkeby ./scripts/Conduit_deploy.ts 