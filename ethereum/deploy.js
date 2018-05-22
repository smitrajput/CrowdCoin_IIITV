const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');


const provider = new HDWalletProvider(
	'bracket viable cinnamon copy bulk add artist neutral outer used arctic metal',
	'https://rinkeby.infura.io/TjPCov1EfOz0asRKzGYi'

);

const web3 = new Web3(provider);