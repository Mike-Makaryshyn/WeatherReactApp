import React from "react";
import CurrentDayItem from "./CurrentDayItem";

import s from "./CurrentDayInfo.module.scss";
import cloud from "../../../../assets/images/cloud.png";

interface Props {}
export interface Item {
  icon_id: string;
  name: string;
  value: string;
}

const CurrentDayInfo = (props: Props) => {
  const items = [
    {
      icon_id: "temp",
      name: "Температура",
      value: "20° - ощущается как 17°",
    },
    {
      icon_id: "pressure",
      name: "Давление",
      value: "765 мм ртутного столба - нормальное",
    },
    {
      icon_id: "precipitation",
      name: "Осадки",
      value: "Без осадков",
    },
    {
      icon_id: "wind",
      name: "Ветер",
      value: "3 м/с юго-запад - легкий ветер",
    },
  ];

  return (
    <div className={s.current__day_info}>
      <div className={s.current__day_info_items}>
        {items.map((item: Item) => (
          <CurrentDayItem key={item.icon_id} item={item} />
        ))}
      </div>
      <img className={s.cloud__img} src={cloud} alt="cloud" />
    </div>
  );
};

export default CurrentDayInfo;
