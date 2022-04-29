import React, { useState, useEffect } from 'react';
import { useVote } from '@thirdweb-dev/react';
import Link from 'next/link'
import Image from 'next/image'

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
                <Link href={'/detail/' + datafetch.proposalId}>
                  <a className="forum-title text-primary fw-bold">Хөрөнгө оруулалтын санал</a>
                </Link>
                <p className="text-muted small mb-0 mt-1">{datafetch.proposer} хаягнаас EARTHDAO-д {datafetch.description.split('transfer ')[1].split(' tokens')[0]} токен эзэмшин нэгдэх хүсэлт илгээсэн байна.</p>
              </div>
            </div>
          </td>
          <th className="p-3">
            <div className="align-items-center">
              <Image src={'https://robohash.org/' + index} height="60" width="60" />
              <Link href={'https://mumbai.polygonscan.com/address/' + datafetch.proposer} passHref>
                <a target="_blank" rel="noreferrer">
                  <p className="mb-0 d-inline fw-normal h6">{datafetch.proposer.substring(0, 6)}...{datafetch.proposer.substring(datafetch.proposer.length - 5, datafetch.proposer.length)} </p>

                </a>
              </Link>
            </div>
          </th>
          <td className="text-center small p-3">{datafetch.description.split('transfer ')[1].split(' tokens')[0]}</td>
          <td className="text-center small p-3 text-end">0</td>
        </tr>
      )}
    </>
  );
}

export default GetVotes