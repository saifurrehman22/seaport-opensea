require('dotenv').config();
const ethers = require('ethers');

const API_URL = process.env.INFURA_API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const contractAbi = require("../artifacts/contracts/conduit/ConduitController.sol/ConduitController.json");
const Contract_Address  = '0x14B85b494f0F9c8111A5Ac9c08fdF91Eb625fFa1';   // seaport address
	
// Connect to the network
let customHttpProvider = new ethers.providers.JsonRpcProvider(API_URL);
const contract = new ethers.Contract(Contract_Address, contractAbi.abi, customHttpProvider);

// Calling readOnly Method
async function main(){
  	const counter = await contract.getTotalChannels("0x49C91eD69b3Cf89d478D0B9E01339730e0c3789C");
    
     //console.log(contractAbi.abi);
     console.log(counter.toString());
     //console.log(counter);

 }
main();