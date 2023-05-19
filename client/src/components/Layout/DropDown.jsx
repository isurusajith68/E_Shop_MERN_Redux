import React from "react";
import { useNavigation } from "react-router-dom";

const DropDown = ({ categriesData, setDropDown }) => {
  const navigation = useNavigation();
  const submitHandler = (e) => {
    navigation(`/products?category=${i.title}`);
    setDropDown(false);
    window.Location.reload();
  };
  return <div>DropDown</div>;
};

export default DropDown;
