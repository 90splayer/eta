

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    georli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/AXuDDzzVEQIYZ3ka-RMmNLtseWoH3VAS',
      accounts: [ 'edbcf8f2aa09a0d3676219e621db045bd0aa850c1ecc785110644c0f44e0243d' ]
    }
  }
}