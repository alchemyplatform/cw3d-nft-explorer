import styles from "../styles/NftMinter.module.css";
import { getNetwork, switchNetwork } from "@wagmi/core";
import { Contract } from "alchemy-sdk";
import { useState } from "react";
import { useAccount, useSigner } from "wagmi";

export default function NFTMintingPage({
  pContractAddress,
  pTokenUri,
  pAbi,
  imgSrc,
}) {
  const { address } = useAccount();
  const { data: signer } = useSigner();
  const [txHash, setTxHash] = useState();
  const [isMinting, setIsMinting] = useState(false);

  const { isDisconnected } = useAccount();

  const mintNFT = async () => {
    const { chain } = getNetwork();
    if (chain.id != 10) {
      try {
        await switchNetwork({
          chainId: 10,
        });
      } catch (e) {
        return;
      }
    }
    const nftContract = new Contract(pContractAddress, pAbi, signer);
    try {
      const mintTx = await nftContract.safeMint(pTokenUri, address);

      setTxHash(mintTx?.hash);
      setIsMinting(true);
      await mintTx.wait();
      setIsMinting(false);
      setTxHash(null);
    } catch (e) {
      console.log(e);
      setIsMinting(false);
    }
  };

  return (
    <div className={styles.page_container}>
      <h1 className={styles.page_header}>Mint a CW3D NFT!</h1>

      <div className={styles.nft_image_container}>
        <img className={styles.nft_image} src={imgSrc} />
      </div>
      <div>
        <h1 className={styles.nft_title}>Mint a CW3D NFT!</h1>
        <p>
          Mint your L2 NFTEarth Supporter NFT!
        </p>
      </div>
      {isDisconnected ? (
        <p>Connect Wallet</p>
      ) : (
        <button
          className={`${styles.button} ${isMinting && `${styles.isMinting}`}`}
          disabled={isMinting}
          onClick={async () => await mintNFT()}
        >
          {isMinting ? "Minting" : "Mint NFT"}
        </button>
      )}

      {txHash && (
        <div className={styles.transaction_box}>
          <p>See transaction on </p>
          <a
            className={styles.tx_hash}
            href={`https://optimistic.etherscan.io/tx/${txHash}`}
          >
            Optistic Etherscan
          </a>
        </div>
      )}
    </div>
  );
}