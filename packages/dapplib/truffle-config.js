require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid enroll frame short fan renew rural exchange hover climb sure genuine'; 
let testAccounts = [
"0xa03ce486d03ccbf60a06908c1ead3f3e0940b5ee935c686a10c097325f538cf5",
"0xa5a518c889f6b88b80214047691a281c0b5939249d1506c9e2f9873668520a6e",
"0x6c2b0bc9bfe23364293c2a16e16fd5992a44ecc22aca77d6a02092b58aabf8d4",
"0xd577de98cdb3391b98854fcdf4f3a5044be051d1c5156e775e62075c67648d3b",
"0xd418c4cf63a3135abe07501d1d1504e701076d67daf5af960159c4bbca8dccb7",
"0x5707d7631fdc5099d1d157257cec4a8068be03ec134b76f11dfeeb045321b8eb",
"0xdb45a7877b178df7f9abba581ce3e7f852e56000bb220df72f4ccac85b2b0227",
"0x5571ec0723f7ad785ebc7b1c8e4b63137fa3280b3cf40b0fdaaac87a96474ab1",
"0x7e040bdf86595d7dd2e2aae07a3a5c1a35dab6d5dddfbc41b3a694ec9997a773",
"0xde9baefbc97edcd76fc99ccadfc77cab769e693f3e0ed558e887062377d1044a"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

