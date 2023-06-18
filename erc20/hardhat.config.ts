import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';
import '@openzeppelin/hardhat-upgrades';

const config: HardhatUserConfig = {
    // 한가지 이상의 컴파일러 버전 사용가능
    solidity: {
        compilers: [
            {
                version: '0.8.17',
            },
            {
                version: '0.6.6',
            },
        ],
    },
    networks: {
        hardhat: {
            forking: {
                url: 'https://ethereum.publicnode.com',
            },
            accounts: {
                mnemonic: 'test test test test test test test test test test test mock',
                accountsBalance: '10000000000000000000000', // 10,000 ETH
            },
            blockGasLimit: 30000000,
        },
        // ethereum: {
        //     url: 'https://ethereum-mainnet-rpc.allthatnode.com',
        //     accounts: ['privateKey1', 'privateKey2'],
        // },
        baobab: {
            url: require('./secret.json').baobab_url,
            chainId: 1001,
            accounts: require('./secret.json').privateKey,
            gas: 20000000,
            gasPrice: 250000000000,
        },
        cypress: {
            url: require('./secret.json').cypress_url,
            chainId: 8217,
            accounts: require('./secret.json').privateKey,
            gas: 20000000,
            gasPrice: 250000000000,
        },
    },
};

export default config;
