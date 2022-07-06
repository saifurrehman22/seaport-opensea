require('dotenv').config();
const ethers = require('ethers');
const Web3 = require('web3');
var web3 = new Web3();

const API_URL = process.env.INFURA_API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const contractAbi = require("../artifacts/contracts/Seaport.sol/Seaport.json");
const Contract_Address  = '0x2e5094304001bDc12F234541235963cE55711a9e';   // seaport address
// Connect to the network
let customHttpProvider = new ethers.providers.JsonRpcProvider(API_URL);

// Sending transaction
async function fulfillBasicOrder() {	
    
      
    let wallet = new ethers.Wallet(PRIVATE_KEY, customHttpProvider);
    let contractWithSigner = new ethers.Contract(Contract_Address, contractAbi.abi, wallet);
    
    let num = "0x0000000000000000000000000000000000000000";
    let convert_num = web3.utils.toChecksumAddress(num);

    const addData = await contractWithSigner.fulfillBasicOrder([convert_num, 0, 50000000000000, "0xe2b5a5b611643c7e0e4d705315bf580b75472d7b", "0x29D41Cb3863A5E2a204Ac904C6A45aF8f4006902", "0x30244443157501d6D2E8376Ed3421F8a2De9ce57", 1, 1, 2, 1656483380, 1659075380, "0x0000000000000000000000000000000000000000000000000000000000000000", 644047918441, "0x0000007b02230091a7ed01230072f7006a004d60a8d4e71d599b8104250f0000", "0x0000007b02230091a7ed01230072f7006a004d60a8d4e71d599b8104250f0000", 2, [["0x0000000000000000000000000000000000000000000000000000e35fa931a000","0xe2b5a5b611643c7e0e4D705315bf580B75472d7b"],["0x0000000000000000000000000000000000000000000000000000e35fa931a000","0xe2b5a5b611643c7e0e4D705315bf580B75472d7b"],["0x0000000000000000000000000000000000000000000000000000e35fa931a000","0xe2b5a5b611643c7e0e4D705315bf580B75472d7b"]], "0x38afdd5cb80d32c9bacfb1c5a011b2a666972d0c0ada60cbe6a59163f40baff11d78891aeffbdd9e4018b12a0a64cf17711a6d1e2602d1a031f058b51d4d0f861b"],
    {
        gasLimit: 100000,
        value: ethers.utils.parseEther(0.01.toString())
      }) 
    console.log("Transaction Successfully Done");
    console.log("Tx Hash :", addData.hash);
    console.log("The tx is :",addData);          
}
	
// Calling function
fulfillBasicOrder();