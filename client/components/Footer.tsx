import React from "react"

// Image
import Image from "next/image"

// React Icons
import { FiArrowUpRight, FiGithub } from "react-icons/fi"
import { AiOutlineDown } from "react-icons/ai"
import { HiOutlineDotsVertical } from "react-icons/hi"

import githubIcon from "../public/icons8-github.svg"
import twitterIcon from "../public/icons8-twitter.svg"
import telegramIcon from "../public/icons8-telegram-app.svg"
import youtubeIcon from "../public/icons8-youtube.svg"

const style = {
  wrapper: `px-4 w-screen flex flex-col justify-between items-center`,
}

const Footer = () => {
  return (
    <div className={style.wrapper}>
      <a
        href="_#"
        className="bg-blue-500 ml-1 text-black px-4 py-1 cursor-pointer rounded-md mb-4 flex items-center justify-center"
      >
        <Image width={25} height={25} src={twitterIcon} />{" "}
        <span className="ml-2">Join telegram group</span>
      </a>
      <div className="flex justify-center items-center w-full mb-4">
        <a
          href="_#"
          className="bg-blue-400 w-8 ml-1 h-8 cursor-pointer rounded-full flex items-center justify-center"
        >
          <Image width={25} height={25} src={twitterIcon} />
        </a>
        <a
          href="_#"
          className="bg-blue-700 w-8 ml-1 h-8 cursor-pointer rounded-full flex items-center justify-center"
        >
          <Image width={25} height={25} src={telegramIcon} />
        </a>
        <a
          href="_#"
          className="bg-white w-8 ml-1 h-8 cursor-pointer rounded-full flex items-center justify-center"
        >
          <Image width={25} height={25} src={youtubeIcon} />
        </a>
        <a
          href="_#"
          className="bg-white w-8 ml-1 h-8 cursor-pointer rounded-full flex items-center justify-center"
        >
          <Image width={25} height={25} src={githubIcon} />
        </a>
      </div>
    </div>
  )
}

export default Footer
