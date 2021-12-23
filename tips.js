`

TESTING STEPS
1. Make sure in hardhat .config.js file you have the following:
        require("./tasks/deploy_name_of_your_task.js");
1. Open terminal and navigate to the stacked toads directory    
        npx hardhat compile

2. Open another terminal and navigate to the stacked toads directory 
        FORK_MODE=true npx hardhat node 
        
//mint before successful deployment
3. In original terminal in the stacked toads directory, run the following command to test/mint the contract:
        yarn run hardhat deploy-name-of-contract --network localhost

//You'll know it's working if you see the following in //data/deployments.json:
        "NameOfContract": "0xf2A60c06479779823734F8877D160836a23C9525"
4. After successful deployment:
        Comment the following line in deploy_name_of_your_task.js file:
        //const instance = await factory.deploy(NAME, SYMBOL, BASE_URI);

        Uncomment the following line in deploy_name_of_your_task.js file:
        const instance = await ethers.getContractAt('NameOfContract',deployments.NameOfContract);

5. kill all terminal windows and repeat steps 1-4 with the instance redefined 






















yarn run hardhat deploy-fud-farm-genesis --network localhost
npx hardhat compile
npx hardhat test
npx hardhat deploy-default-20 --network rinkeby
npx hardhat hardhat mint-default-20 --network rinkeby
npx hardhat deploy-draca --network rinkeby

//mint before deploy draca
yarn run hardhat deploy-default-20 --network localhost
yarn run hardhat mint-default-20 --network localhost
yarn run hardhat deploy-draca --network localhost

yarn run hardhat deploy-fud-farm-genesis --network localhost

Don’t keep deploying it after you deploy it once u should comment out the deploy part and instead do 
const instance = await ethers.getContractAt(“Draca”,deployments.Draca)
If u keep redeploying it restarts the state of LOTTO_START


Error HH700: Artifact for contract "DefaultErc20" not found : 
yarn run hardhat compile 

Deployed contract DefaultErc20 to: 0x81a52516768C42C1555ed8B5F4BC457F03AEB4e6

stackAddress.transfer(msg.sender, tokenSupply);
//withdrawToken function change call transferFrom to transfer transfer(msg.sender as a receipent, tokenSupply as amount)
`      //  require(!LOTTO_LIVE, "startLotto !LOTTO_LIVE");







