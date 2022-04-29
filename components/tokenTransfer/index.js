import React, { useState, useEffect } from 'react';
import { useAddress, useToken, useEditionDrop } from '@thirdweb-dev/react';


function TokenBalance() {
  const token = useToken("0x372750d4b65e47B6eD5b0367ba39931eb959c14e")
  const address = useAddress();
  const [value, setValue] = useState('');

  const transferToken = async () => {
    console.log('asd')
    try {
      if(token){
        token.transfer(address,value).then((data) => {
          console.log(data)
        }).catch((err) => {
          console.log(err)
        });
      }
    } catch (error) {
      console.error("Failed to mint NFT", error);
    }
  };

  return (
    <div className="mint-nft">
      <input type="number" placeholder="heregte token-ii hemzee" onChange={e => { setValue(e.currentTarget.value); }}></input>
      <button onClick={transferToken}>huselt ilgeeh</button>
    </div>
  );
}

export default TokenBalance