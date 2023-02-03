import { useState } from "react";
import styles from "../styles/NftGallery.module.css";
import { useAccount } from "wagmi";

export default function NFTGallery({}) {
  const [nfts, setNfts] = useState();
  const [walletOrCollectionAddress, setWalletOrCollectionAddress] = useState();
  const [isSearchWalletNfts, setIsSearchWalletNfts] = useState(true);
  const [pageKey, setPageKey] = useState(false);

  const [isLoading, setIsloading] = useState(false);
  const { address, isConnected } = useAccount();
  const [chain, setChain] = useState("eth-mainnet");
  const fetchNFTs = async (customSearch, pagekey) => {
    setIsloading(true);
    const api =
      !customSearch || isSearchWalletNfts
        ? "/api/getNftsForOwner"
        : "/api/getNFTsForCollection";
    const res = await fetch(api, {
      method: "POST",
      body: JSON.stringify({
        address: customSearch ? walletOrCollectionAddress : address,
        pageKey: pagekey ? pagekey : null,
        chain: chain,
      }),
    }).then((res) => res.json());
    setNfts(res.nfts);
    if (res.pageKey) {
      setPageKey(res.pageKey);
    } else {
        setPageKey()
    }
    setIsloading(false);
  };

  return (
    <div className={styles.nft_gallery}>
      <div className={styles.inputs_container}>
        <div className={styles.input_button_container}>
          <input
            value={walletOrCollectionAddress}
            onChange={(e) => {
              setWalletOrCollectionAddress(e.target.value);
            }}
            placeholder="Insert NFTs contract or wallet address"
          ></input>
          <select
            onChange={(e) => {
              setChain(e.target.value);
            }}
          >
            <option selected={true} value={"ETH_MAINNET"}>
              Mainnet
            </option>
            <option value={"MATIC_MAINNET"}>Polygon</option>
            <option value={"ETH_GOERLI"}>Goerli</option>
            <option value={"MATIC_MUMBAI"}>Mumbai</option>
          </select>
        </div>
        <div className={styles.radios_container}>
          <label>
            <input
              checked={isSearchWalletNfts}
              onChange={(e) => {
                setIsSearchWalletNfts(e.target.checked);
              }}
              type={"radio"}
            ></input>
            Search by wallet
          </label>
          <label>
            <input
              type={"radio"}
              checked={!isSearchWalletNfts}
              onChange={(e) => {
                setIsSearchWalletNfts(!e.target.checked);
              }}
            ></input>
            Search by collection
          </label>
        </div>
        <div className={styles.buttons_container}>
          <button
            className={styles.button}
            onClick={() => {
              if (walletOrCollectionAddress) fetchNFTs(true);
            }}
          >
            Search
          </button>
          <button
            className={styles.button}
            onClick={() => {
              if (isConnected) {
                fetchNFTs(false);
              } else {
                alert("Connect your wallet first");
              }
            }}
          >
            Show my NFTs
          </button>
        </div>
      </div>

      <div className={styles.nfts_display}>
        {nfts?.length ? (
          nfts.map((nft) => {
            return <NFTCard key={nft.tokenId} nft={nft} />;
          })
        ) : isLoading ? (
          <p>Loading...</p>
        ) : (
          <p>No NFTs found</p>
        )}
      </div>
      {pageKey && (
        <button
          className={styles.button}
          onClick={() => {
            fetchNFTs(true, pageKey);
          }}
        >
          next
        </button>
      )}
    </div>
  );
}
function NFTCard({ nft }) {
  return (
    <div className={styles.card_container}>
      <div className={styles.image_container}>
        <img src={nft.media}></img>
      </div>
      <div className={styles.info_box}>
        <div className={styles.title_id_container}>
          <h3>{nft.title.split("#")[0]}</h3>
          <p>
            #{nft.tokenId.slice(0, 4)}
            {nft.tokenId.length > 4 && "..."}
          </p>
        </div>
        <div className={styles.address_container}>
          <a
            target={"_blank"}
            href={`https://etherscan.io/address/${nft.contract}`}
          >
            {nft.contract.slice(0, 4)}...{nft.contract.slice(38)}
          </a>
        </div>
        <div className={styles.description_container}>
          <p>{nft.description.slice(0, 75)}</p>
        </div>
      </div>
    </div>
  );
}
