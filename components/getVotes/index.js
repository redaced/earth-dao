import React, { useState, useEffect } from 'react';
import { useVote } from '@thirdweb-dev/react';

function GetVotes() {
  const vote = useVote("0x2205B2275b7A81BD65f9d776c735520DdaC8d14c")
  const [votes, setVotes] = useState([]);
  useEffect(() => {
    const getVotes = async () => {
        try {
            const votes = await vote.getAll();
            console.log(votes)
            setVotes(votes);
        } catch (error) {
            console.error("votes: ", error);
        }
    };
    getVotes();
  }, [vote]);

  return (
    <div>
        <p>Token Name : {}</p>
    </div>
  );
}

export default GetVotes