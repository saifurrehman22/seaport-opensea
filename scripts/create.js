require('dotenv').config();
const ethers = require('ethers');
const Web3 = require('web3');
var web3 = new Web3();

const API_URL = process.env.INFURA_API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const contractAbi = require("../artifacts/contracts/Seaport.sol/Seaport.json");
const Contract_Address  = '0x52E7dD32125171409b7109D50644117Dbcd427EE';   // seaport address
// Connect to the network
let customHttpProvider = new ethers.providers.JsonRpcProvider(API_URL);

// Sending transaction
async function fulfillBasicOrder() {	
    
    console.log("Transaction Succ");
      
    let wallet = new ethers.Wallet(PRIVATE_KEY, customHttpProvider);
    let contractWithSigner = new ethers.Contract(Contract_Address, contractAbi.abi, wallet);
    
    let num = "0x0000000000000000000000000000000000000000";
    let convert_num = web3.utils.toChecksumAddress(num);

    const addData = await contractWithSigner.fulfillBasicOrder(["0x0000000000000000000000000000000000000000", 0, 50000000000000, "0xe2b5a5b611643c7e0e4D705315bf580B75472d7b", "0x124E69af99D73ff8877f5eD5Cc1F7Ec631Fa5e1d", "0xB9469d01Ed9D8a3aA98D64c35AaE2B26Bd7F2A43", 2, 1, 2, 1658817494, 1761495894, "0x0000000000000000000000000000000000000000000000000000000000000000", 644992033142694, "0xD373CCeb6CE66a6a7376fC9E725797Ab8de9C49f000000000000000000000000", "0xD373CCeb6CE66a6a7376fC9E725797Ab8de9C49f000000000000000000000000", 2, [[50000000000000,"0xe2b5a5b611643c7e0e4D705315bf580B75472d7b"],[50000000000000,"0x36F0Bebf56C379564Ee4B44627cEb983d82A9fc5"]], "0xa2a3719f7a6c80b2252d97ab40aa2a7f1f093cfedf246c80cf3e74463b2efd8a1e031412bf9fd23d96cdf7ce3012e4952daf86810b805209ed79baf9f9efbc231b"],
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



// private key account 3
// 66a9c12c06d887d22d4699bca227a9e77e715b03dfd8fe1562f688e796bf09c8

// private key account 1
// d55878384be5aacc497db207aec296a35d29457d6bb49c7dfbb2dfee054a3243