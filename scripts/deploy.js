


const {ethers} = require("hardhat");

async function main(){
    // 1. tell the script we want to dedploy the ibNFT.sol
   const contract = await ethers.getContractFactory("ibNFT");

     // Deploy it
    const deployedContract = await contract.deploy();
    
    await deployedContract.deployed();

    // Print the address of the deployed contract
    console.log("NFT Contract deployed to:", deployedContract.address);
    }

main()
.then(()=> process.exit(0))
.catch((error)=>{
    console.error(error);
    process.exit(1);
})