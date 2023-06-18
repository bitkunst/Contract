import { ethers } from 'hardhat';

const toEther = (amount: any, unit = 'ether') => ethers.utils.parseUnits(amount.toString(), unit);

async function main() {
    const [owner] = await ethers.getSigners();
    console.log(`Owner : `, owner.address);

    const tokenAddress = '0x01989dd66064eF3cfA9F7415010D10a12285fd09';
    const token = await ethers.getContractAt('MyToken', tokenAddress);

    console.log(`totalSupply : `, await token.totalSupply());
    await token.burn(owner.address, toEther(30)); // 소각
    console.log(`totalSupply : `, await token.totalSupply());
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
