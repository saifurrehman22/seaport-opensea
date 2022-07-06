var Web3 = require('web3');
var web3 = new Web3();
require('dotenv').config();

const encode_value = web3.eth.abi.encodeParameter(
{
    "OrderComponents":{
    "offerer": 'address',
    "offer":[{
         "itemType": 'uint256',
         "token":  'address',
         "identifierOrCriteria": 'uint256',
         "startAmount":  'uint256',         
         "endAmount":  'uint256'
     }], // end of  Struct
    "consideration":[{
        "itemType": 'uint256',
        "token":  'address',
        "identifierOrCriteria": 'uint256',
        "startAmount":  'uint256',         
        "endAmount":  'uint256',
        "recipient":  'address'
    },
    {
        "itemType": 'uint256',
        "token":  'address',
        "identifierOrCriteria": 'uint256',
        "startAmount":  'uint256',         
        "endAmount":  'uint256',
        "recipient":  'address'
    },
    {
        "itemType": 'uint256',
        "token":  'address',
        "identifierOrCriteria": 'uint256',
        "startAmount":  'uint256',         
        "endAmount":  'uint256',
        "recipient":  'address'
    }
],// end of  Struct
    "orderType":"uint256",
    "startTime": 'uint256',
    "endTime":  'uint256',
    "zone": 'address',
    "zoneHash": 'bytes32',
    "salt":  'uint256',         
    "conduitKey":  'bytes32',
    "counter":  'uint256'
  } // end of  Struct
},
{
    "offerer": '0xe2b5a5b611643c7e0e4D705315bf580B75472d7b',
    "offer":[{
         "itemType": 2,
         "token":  '0x30244443157501d6D2E8376Ed3421F8a2De9ce57',
         "identifierOrCriteria": 1,
         "startAmount":  1,         
         "endAmount":  1
     }], // end of  Struct
    "consideration":[{
        "itemType": 0,
        "token":  '0x0000000000000000000000000000000000000000',
        "identifierOrCriteria": 0,
        "startAmount":  "9450000000000000",         //    9450000000000000                                           
        "endAmount":    "9450000000000000",
        "recipient":  '0xe2b5a5b611643c7e0e4D705315bf580B75472d7b'
    },
    {
        "itemType": 0,
        "token":  '0x0000000000000000000000000000000000000000',
        "identifierOrCriteria": 0,
        "startAmount":  250000000000000,         
        "endAmount":  250000000000000,
        "recipient":  '0xe2b5a5b611643c7e0e4D705315bf580B75472d7b'
    },
    {
        "itemType": 0,
        "token":  '0x0000000000000000000000000000000000000000',
        "identifierOrCriteria": 0,
        "startAmount":  300000000000000,         
        "endAmount":  300000000000000,
        "recipient":  '0xe2b5a5b611643c7e0e4D705315bf580B75472d7b'
    }
],
    "orderType":2,
    "startTime": 1656483380,
    "endTime":  1659075380,
    "zone": '0x29D41Cb3863A5E2a204Ac904C6A45aF8f4006902',
    "zoneHash": '0x0000000000000000000000000000000000000000000000000000000000000000',
    "salt":  644047918441,         
    "conduitKey":  '0x0000007b02230091a7ed01230072f7006a004d60a8d4e71d599b8104250f0000',
    "counter":  0
  } // end of  Struct
);

const privateKey = process.env.PRIVATE_KEY;
const structHash = web3.utils.keccak256(encode_value);
const hashGettingFromECDSAAfterPassingTheStructHash = web3.eth.accounts.hashMessage(structHash);
const signature = web3.eth.accounts.sign(structHash, privateKey);
const signerAddress = web3.eth.accounts.recover(structHash, signature.signature);


console.log("\nThis is the abi.encode value similar to on-chain:", encode_value);
console.log("\nThis is the structHash value similar to on-chain:", structHash);
console.log("\nThis is the hash value similar to the one the ECDSA method returns:", hashGettingFromECDSAAfterPassingTheStructHash);
console.log("\nThe require signature is :",signature.signature);
console.log("\nThis is the required signer address :",signerAddress);

// 0xe2b5a5b611643c7e0e4D705315bf580B75472d7b signer address
