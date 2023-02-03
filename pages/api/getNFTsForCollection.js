import { Network, Alchemy, NftFilters } from "alchemy-sdk";

export default async function handler(req, res) {
  const { address, pageKey, chain } = JSON.parse(req.body);
  if (req.method !== "POST") {
    res.status(405).send({ message: "Only POST requests allowed" });
    return;
  }

  const settings = {
    apiKey: process.env.ALCHEMY_API_KEY,
    network: Network[chain],
  };
    console.log(settings)
  const alchemy = new Alchemy(settings);

  try {
    const NFTs = await alchemy.nft.getNftsForContract(address, {
      excludeFilters: [NftFilters.SPAM],
      pageKey: pageKey ? pageKey : null,
    });
    console.log(NFTs.pageKey);
    const formattedNFTs = NFTs.nfts.map((NFT) => {
      const { contract, title, tokenType, tokenId, description } = NFT;

      return {
        contract: contract.address,
        symbol: contract.symbol,
        media: contract.openSea?.imageUrl,
        tokenType,
        tokenId,
        title,
        description,
      };
    });
    const filteredNFTs = formattedNFTs.filter(
      (nft) => nft.title.length && nft.description.length && nft.media
    );

      res.status(200).json({
          nfts: filteredNFTs,
          pageKey: NFTs.pageKey
      });
    // the rest of your code
  } catch (e) {
    console.warn(e);
    res.status(500).send({
      message: "something went wrong, check the log in your terminal",
    });
  }
}
