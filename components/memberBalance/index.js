import React, { useState, useEffect } from 'react';
import { useAddress, useEditionDrop } from '@thirdweb-dev/react';


function MemberBalance() {
  const editionDrop = useEditionDrop("0xd6be70A3CA3d3fAaB7978FCe946C4af210dA17a8");
//   const token = useToken("0x372750d4b65e47B6eD5b0367ba39931eb959c14e");
//   const address = useAddress();
//   const [myEarthToken, setMyEarthToken] = useState([]);
  const [memberAddresses, setMemberAddresses] = useState([]);

  useEffect(() => {
    const getAllAddresses = async () => {
      try {
        const memberAddresses = await editionDrop.history.getAllClaimerAddresses(0);
        setMemberAddresses(memberAddresses);
        console.log("🚀 Members addresses", memberAddresses);
      } catch (error) {
        console.error("failed to get member list", error);
      }

    };
    getAllAddresses();
  }, [editionDrop]);

  return (
    <div>
        {memberAddresses}
      {/* <p>address: {address}</p> */}
      {/* <p>member list: {myEarthToken}</p> */}
    </div>
  );
}

export default MemberBalance