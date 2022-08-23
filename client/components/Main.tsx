import React, { useContext, useState } from "react"

// Next
import Image from "next/image"
import { useRouter } from "next/router"

// Context
import { TransactionContext } from "../context/TransactionContext"

// Icons
import { RiArrowDownFill } from "react-icons/ri"

import tetherLogo from "../public/tether-usdt-logo.svg"
import ctdLogo from "../public/logo.png"

const style = {
  wrapper: `w-screen flex flex-col items-center justify-center mt-8`,
  content: `bg-white w-[35rem] rounded-3xl px-4 py-2`,
  formHeader: `px-2 py-4 flex items-center justify-between text-black font-medium text-xl`,
  transferPropContainer: `bg-[#ececec] my-3 rounded-2xl p-6 text-3xl  border-none hover:border-[#41444F]  flex justify-between`,
  transferPropInput: `bg-transparent placeholder:text-[#B2B9D2] outline-none mb-6 w-full text-2xl`,
  currencySelector: `flex w-1/4 justify-end`,
  currencySelectorContent: `w-full max-w-[120px] h-min flex justify-center items-center text-black bg-[#E0D9EB]  rounded-2xl text-xl font-medium p-2 mt-[-0.2rem]`,
  currencySelectorIcon: `flex items-center`,
  currencySelectorTicker: `ml-1 text-base`,
  currencySelectorArrow: `text-lg`,
  confirmButton: `bg-[#2172E5] my-2 rounded-2xl py-2 px-8 text-lg font-medium flex items-center justify-center cursor-pointer border border-[#2172E5] hover:border-[#234169]`,
}

const Main = () => {
  const {
    connectWallet,
    currentAccount,
    disconnect,
    usdtBalance,
    ctdBalance,
    buyTokens,
  } = useContext(TransactionContext)
  const [amountUsdt, setAmountUsdt] = useState(1)

  console.log("BALANCE USDT: ", usdtBalance)
  console.log("BALANCE CTD: ", ctdBalance)

  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <div className={style.formHeader}>
          <div>Trade CTD token instant</div>
        </div>

        <div className="border border-gray-200 mb-4"></div>

        <div className="bg-[#ececec] my-3 px-6 py-3 rounded-2xl">
          <div className="text-black flex justify-between font-semibold">
            <label htmlFor="from">From</label>
            <label htmlFor="amount">Balance: {usdtBalance}</label>
          </div>

          <div className="rounded-2xl text-3xl mt-4 flex justify-between">
            <input
              type="number"
              className="bg-transparent text-black placeholder:text-gray-400 outline-none mb-2 border-b-2 border-b-gray-300 w-4/3 text-lg"
              placeholder="0.00"
              pattern="^[0-9]*[.,]?[0-9]*$"
              onChange={(e) => setAmountUsdt(parseFloat(e.target.value))}
              value={amountUsdt}
              min={1}
            />

            <div className={style.currencySelector}>
              <div className={style.currencySelectorContent}>
                <div className={style.currencySelectorIcon}>
                  <Image
                    src={tetherLogo}
                    alt="tether usdt logo"
                    height={25}
                    width={25}
                  />
                </div>
                <div className={style.currencySelectorTicker}>USDT</div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-black flex justify-center items-center">
          <RiArrowDownFill width={40} height={40} />
        </div>

        <div className="bg-[#ececec] my-3 px-6 py-3 rounded-2xl">
          <div className="text-black flex justify-between font-semibold">
            <label htmlFor="from">To</label>
            <label htmlFor="amount">Balance: {ctdBalance}</label>
          </div>

          <div className="rounded-2xl text-3xl mt-4 flex justify-between">
            <input
              type="number"
              className="bg-transparent text-black placeholder:text-gray-400 outline-none mb-2 border-b-2 border-b-gray-300 w-4/3 text-lg"
              placeholder="0.00"
              pattern="^[0-9]*[.,]?[0-9]*$"
              value={(amountUsdt * 5) / 4}
              readOnly
            />

            <div className={style.currencySelector}>
              <div className={style.currencySelectorContent}>
                <div className={style.currencySelectorIcon}>
                  <Image
                    src={ctdLogo}
                    alt="tether usdt logo"
                    height={25}
                    width={25}
                  />
                </div>
                <div className={style.currencySelectorTicker}>CTD</div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className={style.transferPropContainer}>
          <input
            type="text"
            className={style.transferPropInput}
            placeholder="0x..."
            onChange={(e) => handleChange(e, "addressTo")}
          />
          <div className={style.currencySelector}></div>
        </div> */}
        {currentAccount ? (
          <div
            className={style.confirmButton}
            onClick={() => buyTokens(amountUsdt)}
          >
            Pay
          </div>
        ) : (
          <div className={style.confirmButton} onClick={() => connectWallet()}>
            Unlock Wallet
          </div>
        )}
      </div>
      <iframe
        width="400"
        height="200"
        src="https://www.youtube.com/embed/xlHldvMNK8Q"
        title="YouTube video player"
        className="my-4"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>{" "}
    </div>
  )
}

export default Main
