
require('dotenv').config();


var HDWalletProvider = require('truffle-hdwallet-provider');
var mnemonic = process.env.PRIVATE_KEY;

module.exports = {
    compilers: {
        solc: {
            version: '0.5.7'
        }
    },
    solc: {
        optimizer: {
            enabled: true
        }
    },
    networks: {
        development: {
            protocol: 'http',
            host: 'localhost',
            port: 8545,
            gas: 5000000,
            gasPrice: 5e9,
            networkId: '*',
        },
        matic: {
            provider: function () {
                return new HDWalletProvider(mnemonic, 'https://testnet2.matic.network');
            },
            network_id: "*",
            gas: 7000000,
            gasPrice: 0
        },
        ropsten: {
            provider: function() {
                return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/v3/" + process.env.INFURA_KEY)
            },
            network_id: 3,
            gas: 7000000
        },
        main: {
            provider: function () {
                return new HDWalletProvider(mnemonic, 'https://mainnet.infura.io/v3/' + process.env.INFURA_KEY);
            },
            network_id: 1,
            gas: 8000000,
            gasPrice: 50e9,
        },
    },
};