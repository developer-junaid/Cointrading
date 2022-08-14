import type { NextPage } from "next";

// Components
import Header from "../components/Header";
import Main from "../components/Main";

const style = {
  wrapper: `h-screen max-h-screen bg-fixed bg-cover bg-no-repeat bg-center bg-[url("https://makecoin.live/pic/ctd/bg-prime.jpg")] min-h-screen w-screen text-white select-none flex flex-col justify-between`,
};

const Home: NextPage = () => {
  return (
    <div className={style.wrapper}>
      <Header />
      <Main />
      <h2>Footer</h2>
    </div>
  );
};

export default Home;
