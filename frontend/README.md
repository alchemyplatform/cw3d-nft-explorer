# NFT Explorer CW3D Template

This NFT Explorer dapp is set up to be created using the create-web3-dapp npx package.
![image](https://user-images.githubusercontent.com/72762629/235919616-ba92fb9e-c171-4d7f-a928-862c80009075.png)

## Resources
Please refer to CW3D's documentation and the following useful links for an in depth explanation of how to work with projects bootstrapped with CW3D:

-   [Docs](https://docs.alchemy.com/docs/create-web3-dapp) - Everything you need to know when using CW3D
-   [GitHub](https://github.com/alchemyplatform/create-web3-dapp) - look at the extensive code example or start contributing
-   [Website](https://createweb3dapp.alchemy.com) - Learn more about CW3D and add components to your project
-   [Templates](https://createweb3dapp.alchemy.com/#templates) - Check out the pre-built project templates
-   [Components Library](https://createweb3dapp.alchemy.com/#components) - Add features directly to your project through components
-   [Examples](https://github.com/alchemyplatform/create-web3-dapp-examples) - See the components implemented in a real world dapp
-   [Community](https://t.me/createweb3dapp) - Meet other builders, get support, and give feedback!

## Overview

This project contains a fully fledged Next.js based NFT Explorer capable of fetching nfts by:
- Collections
- External and connected wallet

Across all EVM compatible chains.

Created using [Create Web3 Dapp](https://github.com/alchemyplatform/create-web3-dapp). It is , providing you with a seamless way to get your dApp up and running in no time.

This boilerplate is built using [CW3D (Create Web3 Dapp)](https://github.com/alchemyplatform/create-web3-dapp), a powerful tool developed by [Alchemy](https://www.alchemy.com/) that allows developers to rapidly create and deploy dApps.

## What's Included?

This boilerplate has everything you need to start building a dapp:

- Next.js
- Wagmi Hooks
- Ethers.js
- Rainbowkit
- Alchemy SDK

## Supported Chains

The project supports all the major EVM chains:

 - Ethereum
 - Polygon
 - Arbitrum
 - Optimism


## Getting Started

### Prerequisites

To get started with this boilerplate, you'll need to have the following software installed on your local machine:

- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)

### Installation

1. Run create web3 dapp in your terminal and select the NFT Explorer template:
  ```
    npx create-web3-dapp@latest 
  ```

  
2. Navigate to the project directory:
   ```
   cd my-create-web3-dapp
   ```

  
Navigate to the[docs](https://docs.alchemy.com/docs/create-web3-dapp) to learn more about using cw3d to spin up your web3 applications


### Running the Project

1. Inside the project folder, start the local development server:
   ```
   yarn run dev
   ```
2. Open your browser and navigate to [`http://localhost:3000/`](http://localhost:3000/) to view the dApp in action.


## Project Structure

The boilerplate consists of two main directories:

- `backend`: Contains the Hardhat configuration and Solidity smart contracts.
- `frontend`: Contains the Next.js frontend application and related components.

```
📦root
 ┣ 📂components
 ┃ ┣ 📂navigation
 ┃ ┃ ┗ 📜navbar.jsx
 ┃ ┗ 📜nftGallery.jsx
 ┣ 📂layout
 ┃ ┗ 📜mainLayout.jsx
 ┣ 📂pages
 ┃ ┣ 📂api
 ┃ ┃ ┣ 📜getNftsForCollection.js
 ┃ ┃ ┗ 📜getNftsForOwner.js
 ┃ ┣ 📜_app.js
 ┃ ┗ 📜index.jsx
 ┣ 📂public
 ┃ ┗ 📜alchemy_logo.svg
 ┣ 📂styles
 ┃ ┣ 📜Home.module.css
 ┃ ┣ 📜Navbar.module.css
 ┃ ┣ 📜NftGallery.module.css
 ┃ ┗ 📜globals.css
 ┣ 📜.env.local
 ┣ 📜.gitignore
 ┣ 📜README.md
 ┣ 📜package-lock.json
 ┗ 📜package.json
```

Start editing the `pages/index.jsx` file in the `frontend` directory to customize the project according to your own needs!
