import React from "react";
import GlobalSvgSelector from "../../../../assets/images/icons/global/GlobalSvgSelector";

import s from "./CurrentDay.module.scss";

interface Props {}

const CurrentDay = (props: Props) => {
  return (
    <div className={s.current__day}>
      <div className={s.top__block}>
        <div className={s.top__wrapper}>
          <div className={s.current__temp}>20&#176;</div>
          <div className={s.current__day_name}>Сегодня</div>
        </div>
        <GlobalSvgSelector id="sun" />
      </div>
      <div className={s.bottom__block}>
        <div className={s.current__time}>
          Время: <span>21:54</span>
        </div>
        <div className={s.current__city}>Львів</div>
      </div>
    </div>
  );
};

export default CurrentDay;
