import React from "react";
import s from "./Home.module.scss";
import CurrentDay from "./components/CurrentDay/CurrentDay";
import CurrentDayInfo from "./components/CurrentDayInfo/CurrentDayInfo";
import Days from "./components/Days/Days";

interface Props {}

const Home = (props: Props) => {
  return (
    <div className={s.home}>
      <div className={s.wrapper}>
        <CurrentDay />
        <CurrentDayInfo />
      </div>
      <Days />
    </div>
  );
};

export default Home;
