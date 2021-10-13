import React from "react";
import GlobalSvgSelector from "../../assets/images/icons/global/GlobalSvgSelector";
import Select from "react-select";
import { useTheme } from "../../hooks/useTheme";
import { Theme } from "../../context/ThemeContext";

import s from "./Header.module.scss";

export interface HeaderProps {}

const Header = (props: HeaderProps) => {
  const theme = useTheme();

  const options = [
    { value: "city-1", label: "Львів" },
    { value: "city-2", label: "Київ" },
    { value: "city-3", label: "Варшава" },
  ];
  const colourStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor:
        theme.theme === Theme.DARK ? "#4F4F4F" : "rgba(71, 147, 255, 0.2)",
      width: "194px",
      height: "37px",
      border: "none",
      borderRadius: "10px",
      zIndex: 100,
    }),
    singleValue: (styles: any) => ({
      ...styles,
      color: theme.theme === Theme.DARK ? "#fff" : "#000",
    }),
  };

  function changeTheme() {
    theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  }

  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s.logo}>
          <GlobalSvgSelector id="header-logo" />
        </div>
        <div className={s.title}>React weather</div>
      </div>
      <div className={s.wrapper}>
        <div className={s.change__theme} onClick={changeTheme}>
          <GlobalSvgSelector id="change-theme" />
        </div>
        <Select
          defaultValue={options[0]}
          styles={colourStyles}
          options={options}
        />
      </div>
    </header>
  );
};

export default Header;
