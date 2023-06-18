import { ethers } from 'hardhat';

async function main() {
    const [owner] = await ethers.getSigners();
    console.log(`Owner : `, owner.address);

    const tokenFactory = await ethers.getContractFactory('MyToken');
    const token = await tokenFactory.deploy();

    await token.deployed();
    console.log(`The token ${await token.name()} (${await token.symbol()}) is deployed`);
    console.log(`Token Address is ${token.address}`);
    console.log(`Token Minter : ${await token.minter()}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
