const HDWalletProvider = require('@truffle/hdwallet-provider');
module.exports = {
  api_keys: {
    testnet_bscscan: 'VTJJ86VD6ZKVE3WQBMRE1CGP7HUM4Z8KRC',
  },
  networks: {
    dev: {
     host: "https://data-seed-prebsc-2-s2.binance.org:8545",     // Localhost (default: none)
     port: "*",            // Standard Ethereum port (default: none)
     network_id: 97,       // Any network (default: none)
    },
    //
    bsc: {
      provider: () => new HDWalletProvider("1dc24441dc85b57c55b0033c3a0d2d0bf9357c8cdf8688856d900444e4384121", `https://data-seed-prebsc-2-s2.binance.org:8545`),
      network_id: 97, //Goerli's id
      gas: 5000000, //gas limit
      confirmations: 1,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
     },
  },

  mocha: {
    timeout: 100000
  },

  compilers: {
    solc: {
      version: "0.8.13",      // Fetch exact version from solc-bin
    }
  },
  plugins: ['truffle-plugin-verify'],
};
