require('dotenv').config();
const ethers = require('ethers');

const API_URL = process.env.INFURA_API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const contractAbi = require("../artifacts/contracts/conduit/ConduitController.sol");
const Contract_Address  = '0x14B85b494f0F9c8111A5Ac9c08fdF91Eb625fFa1';   //  address
	
// Connect to the network
let customHttpProvider = new ethers.providers.JsonRpcProvider(API_URL);
const contract = new ethers.Contract(Contract_Address, contractAbi.abi, customHttpProvider);

// Calling readOnly Method
async function main(){
  	const counter = await contract.getConduit(["0x0000007b02230091a7ed01230072f7006a004d60a8d4e71d599b8104250f0000", 0, 50000000000000, "0xeFd4d0D92618527CaDedF88b7A38dF9B11f36661", "0x00000000E88FE2628EbC5DA81d2b3CeaD633E89e", "0x30244443157501d6D2E8376Ed3421F8a2De9ce57", 1, 1, 2, 1657192656, 1659871056, "0x0000000000000000000000000000000000000000000000000000000000000000", 644992033142694, "0x0000007b02230091a7ed01230072f7006a004d60a8d4e71d599b8104250f0000", "0x0000007b02230091a7ed01230072f7006a004d60a8d4e71d599b8104250f0000", 2, [["0x0000000000000000000000000000000000000000000000000000e35fa931a000","0xe2b5a5b611643c7e0e4D705315bf580B75472d7b"],["0x0000000000000000000000000000000000000000000000000000e35fa931a000","0xe2b5a5b611643c7e0e4D705315bf580B75472d7b"],["0x0000000000000000000000000000000000000000000000000000e35fa931a000","0xe2b5a5b611643c7e0e4D705315bf580B75472d7b"]], "0x0836206f80f5a30e01ed2bc3c848f5961efccc040cb767c55e096b5afb221a1a383309961c50fc1be149ec7466407efc5c0b937669e61220fa9547750284462b1c"]
      );
    
     //console.log(contractAbi.abi);
     //console.log(counter.toString());
     console.log(counter);

 }
main();

// npx hardhat run --network rinkeby ./scripts/get.js