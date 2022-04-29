import { useAddress, useDisconnect, useMetamask, useVote, useToken, VoteType } from '@thirdweb-dev/react';
import { useEffect, useState } from 'react';
var converter = require('hex2dec');

const Home = () => {
  const vote = useVote("0x2205B2275b7A81BD65f9d776c735520DdaC8d14c")
  const token = useToken("0x372750d4b65e47B6eD5b0367ba39931eb959c14e")
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  const disconnectWallet = useDisconnect();
  // const [proposals, setProposals] = useState([]);
  const [myEarthToken, setMyEarthToken] = useState([]);

  
  // useEffect(() => {
  //   const getAllProposals = async () => {
  //     try {
  //       const proposals = await vote.getAll()
  //       var dec = converter.hexToDec(proposals[0].endBlock._hex);
  //       var miliseconds = parseInt('16511' + dec);
  //       const end_date = new Date(miliseconds);
  //       dec = converter.hexToDec(proposals[0].startBlock._hex);
  //       miliseconds = parseInt('16511' + dec);
  //       const start_date = new Date(miliseconds);
  //       console.log(start_date, end_date);
  //       // setProposals(proposals);
  //     } catch (error) {
  //       console.log("failed to get proposals", error);
  //     }
  //   };
  //   getAllProposals();
  // }, [vote]);

  // useEffect(() => {
  //   const submitVote = async () => {
  //     try {
  //       const proposalId = "0x6683eadba60e167278cc4601051f6641716a641d8090cd797a2a154eaa56046b";
  //       const voteType = 1;
  //       const reason = "I like this proposal!";

  //       let proposal = await vote.vote(proposalId, voteType, reason);
  //       if (proposal.state === 4) {
  //         return vote.execute(proposalId);
  //       }
  //       // const canExecute = await vote.canExecute(proposalId);
  //       // await vote.hasVoted(proposalId, address);
  //     } catch (error) {
  //       console.log("failed to get proposals", error);
  //     }
  //   };
  //   submitVote();
  // }, [vote]);
  
  useEffect(() => {
    if(token){
      token.balanceOf(address).then((balance) => {
        setMyEarthToken(balance.displayValue)
        console.log(address, balance);
      }).catch(error => {
        console.log(error)
      })
    }
  }, [token, address]);

  // useEffect(() => {
  //   if(token){


  //     // Address of the wallet sending the tokens
  //     const fromAddress = "0x2fF2ca7E37c2Ac3dD5FeA79214ab971A0b0aEb24";

  //     // Address of the wallet you want to send the tokens to
  //     const toAddress = "0x20242ed732b9A4c718B62F69Ceb47D24482EAAa1";

  //     // The number of tokens to give as allowance
  //     const amount = 100

  //     token.setAllowance(fromAddress, amount).then((data) => {
  //       token.transferFrom(fromAddress, toAddress, amount).then((data) => {
  //         console.log(data)
  //       }).catch((error) => {
  //         console.log(error)
  //       })
  //     }).catch((error) => {
  //       console.log(error)
  //     })

  //     // Note that the connected wallet must have approval to transfer the tokens of the fromAddress
      
  //   }
  // })

  return (
    <div>
      
      {address ? (
        <>
          <button onClick={disconnectWallet}>Disconnect Wallet</button>
          <p>Your address: {address}</p>
          <p>Your Earth balance: {myEarthToken}</p>
          <label>
            Need Token:
            <input type="number" name="name" />
            <button>Send Request</button>
          </label>
        </>
      ) : (
        <button onClick={connectWithMetamask}>Connect with Metamask</button>
      )}

    </div>
  );
}
export default Home