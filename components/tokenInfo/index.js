import React, { useState, useEffect } from 'react';
import { useToken } from '@thirdweb-dev/react';

function TokenInfo() {
  const token = useToken("0x372750d4b65e47B6eD5b0367ba39931eb959c14e");
  const [tokenInfo, setTokenInfo] = useState([]);
    useEffect(() => {
    const getTokenInfo = async () => {
        try {
        const tokenInfo = await token.get();
        setTokenInfo(tokenInfo);
        } catch (error) {
        console.error("token info: ", error);
        }
    };
    getTokenInfo();
    }, [token]);

  return (
    <div>
        <p>Token Name : { tokenInfo.name }</p>
        <p>Token Symbol : { tokenInfo.symbol }</p>
    </div>
  );
}

export default TokenInfo