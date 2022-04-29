import React, { useState, useEffect } from 'react';
import { useAddress, useEditionDrop, useToken } from '@thirdweb-dev/react';


function MemberBalance() {
//   const editionDrop = useEditionDrop("0xd6be70A3CA3d3fAaB7978FCe946C4af210dA17a8");
  const token = useToken("0x372750d4b65e47B6eD5b0367ba39931eb959c14e");
//   const address = useAddress();
//   const [memberAddresses, setMemberAddresses] = useState([]);
  const [memberTokenAmounts, setMemberTokenAmounts] = useState([]);

//   useEffect(() => {
//     const getAllAddresses = async () => {
//       try {
//         const memberAddresses = await editionDrop.history.getAllClaimerAddresses(0);
//         setMemberAddresses(memberAddresses);
//         console.log("🚀 Members addresses", memberAddresses);
//       } catch (error) {
//         console.error("failed to get member list", error);
//       }

//     };
//     getAllAddresses();
//   }, [editionDrop]);

    // This useEffect grabs the # of token each member holds.
    useEffect(() => {
    const getAllBalances = async () => {
        try {
        const amounts = await token.history.getAllHolderBalances();
        setMemberTokenAmounts(amounts);
        console.log("👜 Amounts", amounts);
        } catch (error) {
        console.error("failed to get member balances", error);
        }
    };
    getAllBalances();
    }, [token]);

  return (
    <div>
      {memberTokenAmounts.map((datafetch, index) => (
          <div key={index}>
            <p>{datafetch.holder} ----- {datafetch.balance.displayValue}</p>
          </div>
          ))}
    </div>
  );
}

export default MemberBalance