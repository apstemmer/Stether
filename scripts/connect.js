var Web3 = require('web3');
// create an instance of web3 using the HTTP provider.
// NOTE in mist web3 is already available, so check first if its available before instantiating
var web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/fGX3Znz5UrNYiEybAHEz"));

export var web3;
