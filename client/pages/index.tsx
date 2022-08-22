import type { NextPage } from "next";

// Components
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

const style = {
  wrapper: `min-h-screen bg-fixed bg-cover bg-no-repeat bg-center bg-[url("https://makecoin.live/pic/ctd/bg-prime.jpg")] min-h-screen w-screen max-w-screen text-white select-none flex flex-col justify-between`,
};

const Home: NextPage = () => {
  return (
    <div className={style.wrapper}>
      <Header />
      <Main />
      <Footer/>
    </div>
    );
};

export default Home;
