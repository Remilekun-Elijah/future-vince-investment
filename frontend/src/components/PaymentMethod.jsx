import React from 'react'

const PaymentMethod = () => {
  return (
    <div className="mb-5 pay-bg">
      <div className="my-5">
        <h1 className="my-4 display-4">Payment We <span className="title-spn">Accept</span></h1>
        <p className="mb-4">We accept all major cryptocurrencies and fiat payment methods to make your <br></br> investment process easier with our platform.</p>
        <div className="payment-method  row d-flex justify-content-center ">
          <div className="payment-method-img col-2  m-3 bg-dark">
            <img src="./images/bitcoinlogo.jpg" alt="bitcoin" />
          </div>
          <div className="payment-method-img col-2 m-3 bg-dark">
            <img src="./images/Ethereumlogo.jpg" alt="ethereum" />
          </div>
          <div className="payment-method-img col-2 m-3 bg-dark">
            <img src="./images/binancelogo.jpg" alt="litecoin" />
          </div>
          <div className="payment-method-img col-2 m-3 bg-dark">
            <img src="./images/blockchainlogo.jpg" alt="ripple" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentMethod