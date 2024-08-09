require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-verify");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.5.16",
  settings: {
    evmVersion: 'istanbul',
    optimizer: {
      enabled: true,
      runs: 1_000_000,
    },
  },
  networks: {
    hardhat: {
      allowUnlimitedContractSize: false,
    },
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/ssx9MyUJ6pow311FQlrwjYWGmn7o_Zuj`,
      accounts: ["227e38b12814302308de3d564c27589b934c893f412405364e4bd6fa152d4415"]
    },
    iretestnet: {
      url: 'https://qa-http-nodes.5ire.network',
      accounts: ["0x418776e270e22baa51cc1ac0919333ce84ab17e7135303b6aa988e934abac940"]
    },
    bitlayertestnet: {
      url: 'https://testnet-rpc.bitlayer.org',
      accounts: ["ddf0d87c8364f888ce8cea57995781797bbd954441deae412ae7922ad0813a9f"]
    },
    fiveire: {
      url: 'https://rpc.5ire.network',
      accounts: ["0x418776e270e22baa51cc1ac0919333ce84ab17e7135303b6aa988e934abac940"]
    },
    bitlayer: {
      url: 'https://rpc.bitlayer.org',
      accounts: ["3d602a6f3c5ff36c22c5515b31a420a0e1ae75cd33e29b6ff0da895a3e77fcfb"]
    }
  },
  etherscan: {
    apiKey: {
      // An API key needs to be written as the hardhat-verify plugin will require it, and the verification will fail if it is not provided.
      // The current bitlayer browser has not yet enabled API key verification, so you can write any random string for now.
      bitlayertestnet: "1234",
      bitlayer: "1234",
      fiveire: "1111"
    },
    customChains: [
      {
        network: "bitlayertestnet",
        chainId: 200810,
        urls: {
          apiURL: "https://api-testnet.btrscan.com/scan/api",
          browserURL: "https://testnet.btrscan.com/"
        }
      },
      {
        network: "bitlayer",
        chainId: 200901,
        urls: {
          apiURL: "https://api.btrscan.com/scan/api",
          browserURL: "https://www.btrscan.com/"
        }
      },
      {
        network: "iretestnet",
        chainId: 997,
        urls: {
          apiURL: "https://api.evm.scan.qa.5ire.network",
          browserURL: "https://scan.qa.5ire.network"
        }
      },
      {
        network: "fiveire",
        chainId: 995,
        urls: {
          apiURL: "https://api.evm.scan.5ire.network",
          browserURL: "https://5irescan.io"
        }
      }
    ]
  }
};
