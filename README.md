# Project Title: MyToken

A simple Solidity smart contract for minting and burning tokens. This contract demonstrates basic token management using public variables, mappings, and functions.

## Description

This project is a basic token contract written in Solidity. It provides a way to manage a token with the ability to mint (create) and burn (destroy) tokens. The contract maintains the balances of different addresses and ensures that tokens can only be burned if the user has a sufficient balance.

## Getting Started

### Installing

- Download or clone this repository to your local machine.
  ```bash
  git clone https://github.com/your-username/MyToken.git
  ```
- Open the `MyToken.sol` file in [Remix IDE](https://remix.ethereum.org/) or any Solidity-compatible environment.

### Modifications

No modifications are needed for the contract to work. You can adjust the token name, abbreviation, and total supply directly in the contract if desired.

### Executing Program

To deploy and use the contract, follow these steps:

1. **Deploy the Contract**  
   - Open the contract in Remix or your chosen IDE.
   - Compile the contract using Solidity 0.8.18.
   - Deploy the contract on a local blockchain (like Ganache) or an Ethereum testnet.

2. **Minting Tokens**
   - After deploying, use the `mint` function to create new tokens.
   - Example:
     ```solidity
     mint(0xYourAddress, 100);
     ```
   - This command mints 100 tokens and assigns them to `0xYourAddress`.

3. **Burning Tokens**
   - To burn tokens, use the `burn` function.
   - Example:
     ```solidity
     burn(0xYourAddress, 50);
     ```
   - This command burns 50 tokens from `0xYourAddress`, reducing the total supply.

4. **Checking Balances**
   - Check an address’s token balance using the `balances` mapping.
   - Example:
     ```solidity
     balances(0xYourAddress);
     ```
   - This returns the token balance of `0xYourAddress`.

### Help

- **Minting fails**: Ensure that the contract is properly deployed before calling the `mint` function.
- **Burning fails**: Verify that the address attempting to burn tokens has enough tokens in its balance before calling the `burn` function.
- **Compiler Errors**: Make sure you are using Solidity version 0.8.18 or higher.

If you need further assistance, consult the Remix IDE's console logs for error messages and debugging hints.

## Authors

- Yudhvir2403
- GitHub: [@yudhvir2403](https://github.com/yudhvir2403)

## License

This project is licensed under the Yudhvir License - see the LICENSE file for details
