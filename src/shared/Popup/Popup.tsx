import React from "react";
import Select from "react-select";
import GlobalSvgSelector from "../../assets/images/icons/global/GlobalSvgSelector";
import { Item } from "../../pages/Home/components/CurrentDayInfo/CurrentDayInfo";
import CurrentDayItem from "../../pages/Home/components/CurrentDayInfo/CurrentDayItem";
import s from "./Popup.module.scss";

interface Props {}

const Popup = (props: Props) => {
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
    <>
      <div className={s.blur}></div>
      <div className={s.popup}>
        <div className={s.day}>
          <div className={s.day__temp}>20°</div>
          <div className={s.day__name}>Среда</div>
          <div className={s.img}>
            <GlobalSvgSelector id="sun" />
          </div>
          <div className={s.day__time}>
            Время: <span>21:54</span>
          </div>
          <div className={s.day__city}>
            Время: <span>Львів</span>
          </div>
        </div>
        <div className={s.current__day_info_items}>
          {items.map((item: Item) => (
            <CurrentDayItem key={item.icon_id} item={item} />
          ))}
        </div>
        <div className={s.close}>
          <GlobalSvgSelector id="close" />
        </div>
      </div>
    </>
  );
};

export default Popup;
