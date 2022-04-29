import React, { useState } from 'react';
import { useAddress, useToken, useVote } from '@thirdweb-dev/react';
import { ethers } from 'ethers';

function TokenBalance() {
  const token = useToken("0x372750d4b65e47B6eD5b0367ba39931eb959c14e")
  const vote = useVote("0x2205B2275b7A81BD65f9d776c735520DdaC8d14c")
  const address = useAddress();
  const [value, setValue] = useState('');

  const transferToken = async () => {
      // Create proposal to transfer ourselves 6,900 tokens for being awesome.
      const amount = value;
      const description = "Should the DAO transfer " + amount + " tokens from the treasury to " + address + " for being awesome?";
      const executions = [
        {
          // Again, we're sending ourselves 0 ETH. Just sending our own token.
          nativeTokenValue: 0,
          transactionData: token.encoder.encode(
            // We're doing a transfer from the treasury to our wallet.
            "transfer",
            [
              address,
              ethers.utils.parseUnits(amount.toString(), 18),
            ]
          ),
          toAddress: token.getAddress(),
        },
      ];
      await vote.propose(description, executions);
  };

  return (
    <div className="mint-nft">
      <input type="number" placeholder="heregte token-ii hemzee" onChange={e => { setValue(e.currentTarget.value); }}></input>
      <button onClick={transferToken}>huselt ilgeeh</button>
    </div>
  );
}

export default TokenBalance