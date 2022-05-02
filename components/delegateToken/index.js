import React, { useEffect } from 'react';
import { useAddress, useToken } from '@thirdweb-dev/react';


function TokenBalance() {
  const token = useToken(process.env.NEXT_PUBLIC_TOKEN_ADDRESS)
  const address = useAddress();
//   const [myEarthToken, setMyEarthToken] = useState([]);
  useEffect(() => {
    if(token){
      token.delegateTo(address).then((delegate) => {
        // setMyEarthToken(balance.displayValue)
        console.log(address, delegate);
      }).catch(error => {
        console.log(error)
      })
    }
  }, [token, address]);

  return (
    <div>
      {/* <p>address: {address}</p> */}
      {/* <p>Your Earth balance: {myEarthToken}</p> */}
    </div>
  );
}
export default TokenBalance