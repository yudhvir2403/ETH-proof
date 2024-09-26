### README.md

```markdown
# MyToken

## Project Description

MyToken is a simple Ethereum-based token contract written in Solidity. This project demonstrates the basic functionalities of a token including minting, burning, and managing balances. The contract includes public variables to store token details and a mapping to track the balances of different addresses.

## Features

- **Token Details**: Public variables to store the token's name, abbreviation, and total supply.
- **Balances Mapping**: A mapping to store the balance of each address.
- **Mint Function**: A function to mint new tokens and assign them to a specified address.
- **Burn Function**: A function to burn tokens from a specified address, with checks to ensure sufficient balance.

## Code Overview

### Solidity

```solidity
// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

/*
       REQUIREMENTS
    1. Your contract will have public variables that store the details about your coin (Token Name, Token Abbrv., Total Supply)
    2. Your contract will have a mapping of addresses to balances (address => uint)
    3. You will have a mint function that takes two parameters: an address and a value. 
       The function then increases the total supply by that number and increases the balance 
       of the “sender” address by that amount
    4. Your contract will have a burn function, which works the opposite of the mint function, as it will destroy tokens. 
       It will take an address and value just like the mint functions. It will then deduct the value from the total supply 
       and from the balance of the “sender”.
    5. Lastly, your burn function should have conditionals to make sure the balance of "sender" is greater than or equal 
       to the amount that is supposed to be burned.
*/

contract MyToken {

    // public variables here
    string public tokenName = "Ether";
    string public tokenAbbrv = "ETH";
    uint public totalSupply = 0;

    // mapping variable here
    mapping (address => uint ) public balances;

    // mint function
    function mint(address _address, uint _value) public {
        totalSupply += _value;
        balances[_address] += _value;
    }

    // burn function
    function burn(address _address, uint _value) public {
        if (balances[_address] >= _value) {
            totalSupply -= _value;
            balances[_address] -= _value;
        }
    }
}
```

## Usage

To use this project, follow these steps:

1. **Clone the repository**:
    ```sh
    git clone hhttps://github.com/yudhvir2403/ETH-proof/javascript.sol
    ```

2. **Navigate to the project directory**:
    ```sh
    cd javascript.sol
    ```

3. **Deploy the contract**:
    Use a Solidity-compatible environment (such as Remix IDE) to deploy the `MyToken` contract.

4. **Interact with the contract**:

    - **Mint Tokens**:
      Call the `mint` function with the address and value to mint new tokens.
      ```solidity
      mint(0xYourAddress, 1000);
      ```

    - **Burn Tokens**:
      Call the `burn` function with the address and value to burn tokens, ensuring the address has sufficient balance.
      ```solidity
      burn(0xYourAddress, 500);
      ```

5. **Check Balances**:
    Use the `balances` mapping to check the balance of a specific address.
    ```solidity
    balances(0xYourAddress); // Returns the balance of the address
    ```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Contact

If you have any questions or suggestions, feel free to open an issue or contact me at rajput850singh@gmail.com

---

Happy coding! 🚀
