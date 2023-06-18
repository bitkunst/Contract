import { time, loadFixture } from '@nomicfoundation/hardhat-network-helpers';
import { expect } from 'chai';
import { ethers } from 'hardhat';

const toEther = (amount: any, unit = 'ether') => ethers.utils.parseUnits(amount.toString(), unit);
const fromEther = (amount: any, unit = 'ether') => ethers.utils.formatUnits(amount.toString(), unit);

describe('Test MyToken', () => {
    async function initTest() {
        const [owner, user] = await ethers.getSigners();

        const tokenFactory = await ethers.getContractFactory('MyToken');
        const myToken = await tokenFactory.deploy();

        return { myToken, owner, user };
    }

    describe('Deployment', async () => {
        it('Check token metadata', async () => {
            const { myToken, owner } = await loadFixture(initTest);

            expect(await myToken.minter()).to.equal(owner.address);
            expect(await myToken.name()).to.equal('BK Token');
            expect(await myToken.symbol()).to.equal('BKT');
        });
    });

    describe('Mint', async () => {
        it('Only Minter can mint', async () => {
            const { myToken, owner, user } = await loadFixture(initTest);

            await expect(myToken.connect(user).mint(user.address, toEther(1))).to.be.reverted;
        });

        it('Mint exact amount', async () => {
            const { myToken, owner, user } = await loadFixture(initTest);

            const mintAmount = toEther(100);
            const beforeUserAmount = await myToken.balanceOf(user.address);
            console.log('before mint');
            console.log('owner balance : ', await myToken.balanceOf(owner.address));
            console.log('user balance : ', beforeUserAmount);

            await myToken.connect(owner).mint(user.address, mintAmount);
            const afterUserAmount = await myToken.balanceOf(user.address);
            console.log('after mint');
            console.log('owner balance : ', await myToken.balanceOf(owner.address));
            console.log('user balance : ', afterUserAmount);

            expect(afterUserAmount.sub(beforeUserAmount)).to.equal(mintAmount);
        });
    });
});
