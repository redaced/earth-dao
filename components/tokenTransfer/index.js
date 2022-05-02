import React, { useState } from 'react';
import { useAddress, useToken, useVote, useMetamask } from '@thirdweb-dev/react';
import { ethers } from 'ethers';

function TokenTransfer() {
  const connectWithMetamask = useMetamask();
  const token = useToken(process.env.NEXT_PUBLIC_TOKEN_ADDRESS)
  const vote = useVote(process.env.NEXT_PUBLIC_VOTE_ADDRESS)
  const address = useAddress()
  const [value, setValue] = useState('')
  const amount = value;
  const description = address+" хаягнаас EARTHDAO-д "+ amount +" токен эзэмшин нэгдэх хүсэлт илгээсэн байна.";
  
  const transferToken = async () => {
    const executions = [
      {
        toAddress: address.toString(),
        gasLimit: 1000000,
        nativeTokenValue: 0,
        transactionData: token.encoder.encode(
          "transfer",[
            vote.getAddress(),
            ethers.utils.parseUnits(amount.toString(), 18),
          ]
        )
      }
    ]
    if(token){
      token.delegateTo(address).then(data => {
        vote.propose(description, executions).then(dataVote => {
          console.log('done')
        })
      })
      // const await1 = await Promise.all([
      //   fetch(token.delegateTo(address)), 
      //   fetch(vote.propose(description, executions))
      // ])
      // const [response] = await Promise.all([
      //   await1
      // ])
      // console.log(response)
    }
  }

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

export default TokenTransfer