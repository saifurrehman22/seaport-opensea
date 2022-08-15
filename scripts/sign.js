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
    }
],// end of  Struct
    "startTime": 'uint256',
    "endTime":  'uint256',
    "orderType":"uint256",
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
         "token":  '0x300DB168085427687E09Ed19354CA542D0e99ba9',
         "identifierOrCriteria": 1,
         "startAmount":  1,         
         "endAmount":  1
     }], // end of  Struct
    "consideration":[{
        "itemType": 0,
        "token":  '0x0000000000000000000000000000000000000000',
        "identifierOrCriteria": 0,
        "startAmount":  50000000000000,         //    9450000000000000                                           
        "endAmount":    50000000000000,
        "recipient":  '0xe2b5a5b611643c7e0e4D705315bf580B75472d7b'
    },
    {
        "itemType": 0,
        "token":  '0x0000000000000000000000000000000000000000',
        "identifierOrCriteria": 0,
        "startAmount":  250000000000000,         
        "endAmount":  250000000000000,
        "recipient":  '0x8De9C5A032463C561423387a9648c5C7BCC5BC90'
    }
],
    "startTime": 1658817494,
    "endTime":  1761495894,
    "orderType":2,
    "zone": '0xc7DcFf695109DA82665Bd485697bAdfa8E5b0B5d',
    "zoneHash": '0x0000000000000000000000000000000000000000000000000000000000000000',
    "salt":  644992033142694,         
    "conduitKey":  '0xe2b5a5b611643c7e0e4D705315bf580B75472d7b000000000000000000000000',
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
 
// remixd -s .    // remix connect localhost