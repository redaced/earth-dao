import React, { useState, useEffect } from 'react';
import { useAddress, useToken, useEditionDrop } from '@thirdweb-dev/react';


function TokenBalance() {
  const token = useToken("0x372750d4b65e47B6eD5b0367ba39931eb959c14e")
  const editionDrop = useEditionDrop("0xd6be70A3CA3d3fAaB7978FCe946C4af210dA17a8")
  const address = useAddress();
  const [isClaiming, setIsClaiming] = useState(false);
  const [hasClaimedNFT, setHasClaimedNFT] = useState(false);
  useEffect(() => {
    if(editionDrop && token){
        editionDrop.getAll().then((ntfs) => {
            console.log(ntfs)
        }).catch((err) => {
            console.log(err)
        });
        // console.log(nfts);
    //   token.balanceOf(address).then((balance) => {
    //     setMyEarthToken(balance.displayValue)
    //     console.log(address, balance);
    //   }).catch(error => {
    //     console.log(error)
    //   })
    }
  }, [token, address, editionDrop]);

  useEffect(() => {
    // If they don't have an connected wallet, exit!
    if (!address) {
      return;
    }

    const checkBalance = async () => {
      try {
        const balance = await editionDrop.balanceOf(address, 0);
        if (balance.gt(0)) {
          setHasClaimedNFT(true);
          console.log("🌟 this user has a membership NFT!");
        } else {
          setHasClaimedNFT(false);
          console.log("😭 this user doesn't have a membership NFT.");
        }
      } catch (error) {
        setHasClaimedNFT(false);
        console.error("Failed to get balance", error);
      }
    };
    checkBalance();
  }, [address, editionDrop]);

  const mintNft = async () => {
    try {
      setIsClaiming(true);
      await editionDrop.claim("0", 1);
      console.log(`🌊 Successfully Minted! Check it out on OpenSea: https://testnets.opensea.io/assets/${editionDrop.getAddress()}/0`);
      setHasClaimedNFT(true);
    } catch (error) {
      setHasClaimedNFT(false);
      console.error("Failed to mint NFT", error);
    } finally {
      setIsClaiming(false);
    }
  };

  // Render mint nft screen.
  return (
    <div className="mint-nft">
      <h1>Mint your free 🍪DAO Membership NFT</h1>
      <button
        disabled={isClaiming}
        onClick={mintNft}
      >
        {isClaiming ? "Minting..." : "Mint your nft (FREE)"}
      </button>
    </div>
  );
}

export default TokenBalance