import React from "react";
import GlobalSvgSelector from "../../assets/images/icons/global/GlobalSvgSelector";
import Select from "react-select";

import s from "./Header.module.scss";

export interface HeaderProps {}

const Header = (props: HeaderProps) => {
  const options = [
    { value: "city-1", label: "Львів" },
    { value: "city-2", label: "Київ" },
    { value: "city-3", label: "Варшава" },
  ];

  const colorStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: "rgba(71, 147, 255, 0.2)",
      width: "194px",
      height: "37px",
      border: "none",
      borderRadius: "10px",
      zIndex: 100,
    }),
  };

  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s.logo}>
          <GlobalSvgSelector id="header-logo" />
        </div>
        <div className={s.title}>React Weather</div>
      </div>
      <div className={s.wrapper}>
        <div className={s.change__theme}>
          <GlobalSvgSelector id="change-theme" />
        </div>
        <Select
          defaultValue={options[0]}
          styles={colorStyles}
          options={options}
        />
      </div>
    </header>
  );
};

export default Header;
