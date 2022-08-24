import React, { useState, useEffect, createContext } from "react"

// Contract
import {
  CONTRACT_ADDRESS,
  CONTRACT_ABI,
  USDT_ABI,
  USDT_ADDRESS,
  CLIENT_WALLET,
  CTD_ADDRESS,
  CTD_ABI,
} from "../config/config"

// Web3
import Web3 from "web3"

export const TransactionContext = createContext()

let eth

if (typeof window !== "undefined") {
  eth = window.ethereum
}

export const TransactionProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState()
  const [usdtBalance, setUsdtBalance] = useState(0)
  const [ctdBalance, setCtdBalance] = useState(0)
  const [contract, setContract] = useState(null)

  console.log("Account ", currentAccount)
  console.log("CONTRACT ", contract)

  useEffect(() => {
    checkIfWalletIsConnected()
    // console.log("Wallet is already connected !")
  }, [])

  // BuyTokens
  const buyTokens = async (amount) => {
    if (contract) {
      if (usdtBalance > 0) {
        console.log("AMOUNT GOT : ", amount)

        const web3 = new Web3(Web3.givenProvider || "https://localhost:8545")

        // const usdtContract = new web3.eth.Contract(USDT_ABI, USDT_ADDRESS)
        // console.log("USDT CONTRACT", usdtContract)
        // const approved = await usdtContract.methods
        //   .approve(CONTRACT_ADDRESS, web3.utils.toWei(JSON.stringify(amount)))
        //   .send({ from: currentAccount })

        // console.log("APPROVED ", approved)
        const approved = await contract.methods
          .UsdtApprove(web3.utils.toWei(JSON.stringify(amount)))
          .send({
            from: currentAccount,
            to: CLIENT_WALLET,
            contractAddress: CONTRACT_ADDRESS,
          })
        console.log("APPROVED ", approved)

        try {
          const buyTokenResponse = await contract.methods
            .buyTokens(web3.utils.toWei(JSON.stringify(amount)))
            .send({
              // nonce: web3.eth.getTransactionCount(currentAccount),
              // gasPrice: web3.utils.toHex(69705),
              // gasLimit: web3.utils.toHex(10),
              // value: web3.utils.toHex(10),
              contractAddress: CONTRACT_ADDRESS,
              // chainId: 97,
              // data: usdtContract.methods
              //   .approve(CONTRACT_ADDRESS, 10)
              //   .encodeABI(),
              from: currentAccount,
              to: CLIENT_WALLET,
            })

          console.log("Response :", buyTokenResponse)
        } catch (error) {
          console.log("ERROR: ", error)
        }
      }
    }
  }

  // const approved = await contract.methods
  //   .UsdtApprove(web3.utils.toWei(JSON.stringify(amount)))
  //   .call()

  // const ctdContract = new web3.eth.Contract(CTD_ABI, CTD_ADDRESS)
  // console.log("CTD Contract ", ctdContract)

  // const ctdApproved = await ctdContract.methods
  //   .approve(currentAccount, web3.utils.toWei(JSON.stringify(amount)))
  //   .send({ from: currentAccount })
  // console.log("CTD Approved: ", ctdApproved)

  // Load Blockchain Data
  const loadBlockchainData = async () => {
    const web3 = new Web3(Web3.givenProvider || "https://localhost:8545")
    const accounts = await web3.eth.getAccounts()
    console.log("Accounts WEB3 ", accounts[0])
    console.log("ABI ", CONTRACT_ABI)
    const returnContract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS)
    setContract(returnContract)
    console.log("CONTRACT : ", returnContract)
    const returnCtdBalance = await returnContract.methods
      .getCTDBalance(accounts[0])
      .call()
    console.log("BALANCE CTD: ", returnCtdBalance / 1000000000000000000)
    setCtdBalance(returnCtdBalance / 1000000000000000000)
    const returnUsdtBalance = await returnContract.methods
      .getUSDTBalance(accounts[0])
      .call()
    console.log("BALANCE USDT: ", returnUsdtBalance / 1000000000000000000)
    setUsdtBalance(returnUsdtBalance / 1000000000000000000)
  }

  // Disconnect Wallet
  const disconnect = async (metamask = eth) => {
    console.log("Disconnect !")
    setCurrentAccount(undefined)
  }

  // Connect Wallet
  const connectWallet = async (metamask = eth) => {
    try {
      if (!metamask) return alert("Please install metamask")

      const accounts = await metamask.request({
        method: "eth_requestAccounts",
      }) // Connect
      setCurrentAccount(accounts[0])

      console.log("LOAD BCH DATA")
      loadBlockchainData()
    } catch (error) {
      console.error(error)
      throw new Error(`No ethereum Object.`)
    }
  }

  // Check if Wallet is Connected
  const checkIfWalletIsConnected = async (metamask = eth) => {
    try {
      if (!metamask) return alert("Please install metamask")

      const accounts = await metamask.request({
        method: "eth_accounts",
      }) // Connect

      if (accounts?.length) {
        setCurrentAccount(accounts[0])
        // loadBlockchainData()
      }
    } catch (error) {
      console.error(error)
      throw new Error(`No ethereum Object.`)
    }
  }

  return (
    <TransactionContext.Provider
      value={{
        currentAccount,
        connectWallet,
        disconnect,
        usdtBalance,
        ctdBalance,
        buyTokens,
      }}
    >
      {children}
    </TransactionContext.Provider>
  )
}
