require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz enroll supply suggest name return mad social inner knife equal genre'; 
let testAccounts = [
"0x70a556423a28e739802a688134ac586ad0fa8bea36c3bf37481bf8f718925e4c",
"0xf8b339743247273aa5a49585d884b449c16da75c9af94868e539f620e20c6ec9",
"0x8ba5e00ea8cbaa61494efa5d345f550ffa2d0cfad5394129483f76ac12a4825a",
"0x83b0bec54ef45242fbc4a0ac43a96124122da23f5970741d468a2c9881d41b87",
"0x9e7d1526482eb067a53aa42fffdd488a77f112809255e04f67c1da3019e34377",
"0x95d6cffee98a0bffb2866db3811fed714823625939a074592422b148ea93cb23",
"0x8a41a23920d0ba5a782a399b51bd9227c98a964cb22b8c45f648d4133d856300",
"0x79dcfe0562fa17779a218b940e711af9e10b523a1ce4f95e13a22e9f5b8b9637",
"0xf47b5d3e908600e19310ffb54a4c2ce3feb3451cc11382c1d685a1b75d381c0c",
"0xb34f280e2fbb97d75e39d9b20d3c209dcb5c87df9896359d6367779d6a40c58b"
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

