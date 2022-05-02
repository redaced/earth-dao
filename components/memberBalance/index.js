import React, { useState, useEffect } from 'react';
import { useToken } from '@thirdweb-dev/react';
import Image from 'next/image'
import Link from 'next/link'
function MemberBalance() {
  const token = useToken(process.env.NEXT_PUBLIC_TOKEN_ADDRESS);
  const [memberTokenAmounts, setMemberTokenAmounts] = useState([]);

  useEffect(() => {
    const getAllBalances = async () => {
      try {
        const amounts = await token.history.getAllHolderBalances();
        setMemberTokenAmounts(amounts);
      } catch (error) {
        console.error("failed to get member balances", error);
      }
    };
    getAllBalances();
  }, [token]);

  let sum = 0;

  memberTokenAmounts.forEach(value => {
    sum += parseInt(value.balance.displayValue) / 1000;
  });
  return (
    <div>
      <div className="container mt-100 mt-60">
        <div className="row" id="counter">
          <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
            <div className="card features feature-primary explore-feature border-0 shadow rounded text-center">
              <div className="card-body">
                <div className="icons rounded-circle shadow-lg h4 d-inline-block">
                  <i className="uil uil-bag text-primary"></i>
                </div>
                <div className="content mt-3">
                  <h4 className="mb-0"><span className="counter-value" data-target="858">30</span>M +</h4>
                  <h6 className="mb-0 text-muted">Хамтралын шилэн данс</h6>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
            <div className="card features feature-primary explore-feature border-0 shadow rounded text-center">
              <div className="card-body">
                <div className="icons rounded-circle shadow-lg h4 d-inline-block">
                  <i className="uil uil-user text-primary"></i>
                </div>
                <div className="content mt-3">
                  <h4 className="mb-0"><span className="counter-value" data-target="445">{memberTokenAmounts.length}</span></h4>
                  <h6 className="mb-0 text-muted">Эзэмшигчийн тоо</h6>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
            <div className="card features feature-primary explore-feature border-0 shadow rounded text-center">
              <div className="card-body">
                <div className="icons rounded-circle shadow-lg h4 d-inline-block">
                  <i className="uil uil-bitcoin-circle text-primary"></i>
                </div>
                <div className="content mt-3">
                  <h4 className="mb-0"><span className="counter-value" data-target="1154">{sum}</span>K</h4>
                  <h6 className="mb-0 text-muted">Токен</h6>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
            <div className="card features feature-primary explore-feature border-0 shadow rounded text-center">
              <div className="card-body">
                <div className="icons rounded-circle shadow-lg h4 d-inline-block">
                  <i className="uil uil-users-alt text-primary"></i>
                </div>
                <div className="content mt-3">
                  <h4 className="mb-0"><span className="counter-value" data-target="111">30</span> +</h4>
                  <h6 className="mb-0 text-muted">Идэвхтэй төсөл</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="section-title text-center mb-4 pb-2">
                <h4 className="title mb-4">Earth токен эзэмшигчид</h4>
                <p className="text-muted para-desc mx-auto mb-0">Газар хөдлөлтийн токен эзэмшигчид</p>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-12 mt-4 pt-2">
              <div className="table-responsive shadow rounded-md">
                <table className="table mb-0 table-center">
                  <thead>
                    <tr>
                      <th scope="col" className="fw-normal border-bottom text-muted py-4 px-3" style={{ width: '10%' }}>Эзэмшигчид</th>
                      <th scope="col" className="fw-normal border-bottom text-muted py-4 px-3" style={{ width: '10%' }}></th>
                      <th scope="col" className="fw-normal border-bottom text-muted py-4 px-3" style={{ width: '50%' }}>Эзэмшлийн хувь(%)</th>
                      <th scope="col" className="fw-normal border-bottom text-muted py-4 px-3" style={{ width: '30%' }}>Эзэмшилийн хэмжээ</th>

                    </tr>
                  </thead>

                  <tbody>
                    {memberTokenAmounts.map((datafetch, index) =>
                      <tr key={index}>
                        <th className="p-3">
                          <div className="align-items-center">
                            <Image src={'https://stamp.fyi/avatar/' + datafetch.holder} height="60" width="60" />

                          </div>
                        </th>
                        <td className="content mt-4">
                          <Link href={'https://mumbai.polygonscan.com/address/' + datafetch.holder} passHref>
                            <a target="_blank" rel="noreferrer">
                              <p className="mb-0 d-inline fw-normal h6">{datafetch.holder.substring(0, 6)}...{datafetch.holder.substring(datafetch.holder.length - 5, datafetch.holder.length)} </p>

                            </a>
                          </Link>
                        </td>
                        <td className="text-success p-3"><div className="progress-box">
                          <div className="progress">
                            <div className="progress-bar position-relative bg-primary" style={{ width: ((parseInt(datafetch.balance.displayValue) / 1000) / sum * 100) + '%' }}>
                              <div className="progress-value d-block text-muted h6">{(parseInt(datafetch.balance.displayValue) / 1000) / sum * 100}%</div>
                            </div>
                          </div>
                        </div></td>
                        <td className="content mt-4">
                          <h6 className="mt-0"><span className="text-primary">{datafetch.balance.displayValue}</span> токен</h6></td>

                      </tr>)}
                  </tbody>
                </table>
              </div>

              <div className="mt-4 pt-2 text-center">
                <a className="text-primary h6">Бусад эзэмшигчдийг харах <i className="uil uil-angle-right-b align-middle"></i></a>
              </div >
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MemberBalance