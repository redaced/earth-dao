import React, { useState } from 'react';
import { useAddress, useToken, useVote, useMetamask } from '@thirdweb-dev/react';
import { ethers } from 'ethers';

function TokenBalance() {
  const connectWithMetamask = useMetamask();
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
    <>
      {address ? (
        <form className="login-form p-4">
          <div className="row">
            <div className="col-lg-12">
              <div className="mb-3">
                <label className="form-label">Токен хэмжээ <span className="text-danger">*</span></label>
                <div className="form-icon position-relative">
                  <i data-feather="dollar-sign" className="fea icon-sm icons"></i>
                  <input type="number" className="form-control ps-5" placeholder="Хэмжээ" name="amount" onChange={e => { setValue(e.currentTarget.value); }} />
                </div>
              </div>
            </div>
            <div className="col-lg-12 mb-0">
              <div className="d-grid">
                <button className="btn btn-primary" type='button' onClick={transferToken}>Хүсэлт илгээх</button>
              </div>
            </div>

          </div>
        </form>
      ) : (
        <div className="text-center mb-10">
          <div className="mt-4">
            <h4>Уучлаарай.</h4>
            <p className="text-muted">Та нэвтэрч байж хүслэт илгээнэ үү.</p>
            <div className="mt-4">
              <a className="btn btn-primary" onClick={connectWithMetamask}>Нэвтрэх</a>
            </div>
          </div>
          <br/>
        </div>
        
      )}
    </>
  );
}

export default TokenBalance