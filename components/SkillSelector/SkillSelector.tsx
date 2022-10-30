import React from "react";
import { useDispatch } from "react-redux";
import Select, { StylesConfig } from "react-select";
import { OptionType } from "../../types/types.select";

import style from "./skillSelector.module.css";

const colourStyles: StylesConfig = {
  control: (styles) => ({
    ...styles,
    borderRadius: "0.125rem",
    backgroundColor: "#FEFEFE",
    border: "1px solid ",
    borderColor: "rgb(41, 39, 36)",
    "&:hover": {
      borderColor: "rgb(41, 39, 36)",
    },
    width: "45vw",
    boxShadow: "none",
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,

      backgroundColor: !isSelected ? "#FEFEFE" : "#502CE3",

      color: isSelected ? "#FEFEFE" : "#292724",
    };
  },

  menu: (styles) => ({ ...styles, marginTop: "2px" }),
  valueContainer: (styles) => ({ ...styles, padding: "2px 2px" }),
  dropdownIndicator: (styles) => ({ ...styles, color: "#502CE3" }),
  indicatorSeparator: (styles) => ({ ...styles, backgroundColor: "#292724" }),
};

interface SkillSelectorProps {
  options: OptionType[];
  selectedValue: OptionType;
  handleSelect: (option: any) => void;
}
const SkillSelector = ({
  options,
  selectedValue,
  handleSelect,
}: SkillSelectorProps) => {
  const dispatch = useDispatch();

  return (
    <Select
      inputId="selectSkills"
      options={options}
      value={selectedValue}
      defaultValue={options[0]}
      className={style.container}
      onChange={handleSelect}
      styles={colourStyles}
    />
  );
};

export default SkillSelector;
