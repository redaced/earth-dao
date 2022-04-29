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
    <>
      {votes.map((datafetch, index) =>
        <tr key={index}> 
          <td className="p-3">
            <div className="d-flex">
              <i className="uil uil-comment text-muted h5"></i>
              <div className="flex-1 content ms-3">
                <a href="forums-topic.html" className="forum-title text-primary fw-bold">Хөрөнгө оруулалтын санал</a>
                <p className="text-muted small mb-0 mt-1">{datafetch.description}</p>
              </div>
            </div>
          </td>
          <th className="p-3">
            <div className="align-items-center">
              <img src="assets/images/new/bayar.png" className="avatar avatar-ex-small rounded-circle" height="32" alt="" />
              <p className="mb-0 d-inline fw-normal h6">Bayar</p>
            </div>
          </th>
          <td className="text-center small p-3">3</td>
          <td className="text-center small p-3 text-end">5</td>
        </tr>
      )}
    </>
  );
}

export default GetVotes