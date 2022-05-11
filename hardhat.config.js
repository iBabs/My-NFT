require ("@nomiclabs/hardhat-waffle")
require("dotenv").config();

const ALCHEMY_API_KEY_URL = process.env.ALCHEMY_API_KEY_URL;

const RINKEBY_PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby:{
      url: process.env.ALCHEMY_API_KEY_URL,
      accounts:[process.env.PRIVATE_KEY],
     // url: "https://eth-rinkeby.alchemyapi.io/v2/N9xbWiXIi4pRpfI8V3twdxSNseGnkyo0",
      //accounts: ["b7d3c71a20894e89ebd808cdfe5e0f77e89412078600d8f97c72bf595e12f5db"],
    },
  },


};

