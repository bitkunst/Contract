# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
# deploy
npx hardhat run scripts/deploy.ts
# test
npx hardhat test test/Lock.ts
```

<br>
<br>

# Hardhat

```sh
$ npm init -y
$ npm i -D hardhat@2.12.6
$ npx hardhat
```

## Upgradable

```sh
$ npm i -D @openzeppelin/hardhat-upgrades
$ npm i -D @nomiclabs/hardhat-ethers ethers
```

```ts
// hardhat.config.ts
import '@openzeppelin/hardhat-upgrades';
```

<br>
<br>

## Deploy

```sh
$ npx hardhat run scripts/deploy_myToken.ts --network baobab
```
