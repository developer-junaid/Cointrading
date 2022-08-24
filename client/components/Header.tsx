import React, { useState, useEffect, useContext } from "react";

// Next
import Image from "next/image";

// Icons
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import { AiOutlineDown } from "react-icons/ai";
import { HiOutlineDotsVertical } from "react-icons/hi";
import ethLogo from "../public/eth.png";
import uniswapLogo from "../public/uniswap.png";
import brandLogo from "../public/logo.png";

// Context
import { TransactionContext } from "../context/TransactionContext";

const style = {
  wrapper: `px-4 w-screen flex justify-between items-center bg-black`,
  headerLogo: `flex w-1/4 items-center justify-start`,
  nav: `flex-1 flex justify-center items-center`,
  navItemsContainer: `flex bg-[#191B1F] rounded-3xl`,
  navItem: `px-4 bg-[#008ed8] py-2 m-1 flex items-center text-lg font-semibold text-[0.9rem] cursor-pointer rounded-3xl`,
  activeNavItem: `bg-[#008ed8]`,
  buttonsContainer: `flex w-1/4 justify-end items-center`,
  button: `flex items-center bg-transparent rounded-2xl mx-2 text-[0.9rem] font-semibold cursor-pointer`,
  buttonPadding: `px-3 py-2`,
  buttonTextContainer: `h-8 flex items-center`,
  buttonIconContainer: `flex items-center justify-center h-8 w-8`,
  buttonAccent: `border border-white h-full rounded-xl flex items-center justify-center text-white`,
};

const Header = () => {
  const { connectWallet, currentAccount, disconnect } =
    useContext(TransactionContext);

  // console.log(currentAccount, connectWallet);

  return (
    <div className={style.wrapper}>
      <div className={style.headerLogo}>
        <Image src={brandLogo} alt="uniswap" height={25} width={25} />
        <span className="ml-1 text-xl">
          COIN
          <span className="text-yellow-400">TRADING</span>
        </span>
      </div>

      {/* Buttons */}
      <div className={style.buttonsContainer}>
        {currentAccount ? (
          <>
            <div className={`${style.button} ${style.buttonPadding}`}>
              <div
                className={`border border-gray-500 h-full -mr-6 rounded-xl flex items-center justify-center text-gray-500 ${style.buttonPadding}`}
              >
                0x888..5cd
              </div>
            </div>
            <div
              className={`${style.button} ${style.buttonPadding}`}
              onClick={() => disconnect()}
            >
              <div className={`${style.buttonAccent} ${style.buttonPadding}`}>
                Disconnect
              </div>
            </div>
          </>
        ) : (
          <div
            onClick={() => connectWallet()}
            className={`${style.button} ${style.buttonPadding}`}
          >
            <div className={`${style.buttonAccent} ${style.buttonPadding}`}>
              Connect Wallet
            </div>
          </div>
        )}
      </div>

      {/* Nav Items */}
      {/* <div className={style.nav}>
        <div className={style.navItemsContainer}>
          <div
            onClick={() => setSelectedNav("swap")}
            className={`${style.navItem} ${
              selectedNav === "swap" && style.activeNavItem
            }`}
          >
            <FiGithub />
          </div>

          <div
            onClick={() => setSelectedNav("pool")}
            className={`${style.navItem} ${
              selectedNav === "pool" && style.activeNavItem
            }`}
          >
            Pool
          </div>

          <div
            onClick={() => setSelectedNav("vote")}
            className={`${style.navItem} ${
              selectedNav === "vote" && style.activeNavItem
            }`}
          >
            Vote
          </div>

          <a
            href="https://info.uniswap.org/#/"
            target="_blank"
            rel="noreferrer"
          >
            <div className={style.navItem}>
              Charts <FiArrowUpRight />
            </div>
          </a>
        </div>
      </div> */}
    </div>
  );
};

export default Header;
