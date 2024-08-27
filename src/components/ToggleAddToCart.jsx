import React from "react";
import CartIcon from "../icons/CartIcon";

export default function ToggleAddToCart({
  isToggled,
  handleToggleAddToCart,
  item,
}) {
  return (
    <div className="cursor-pointer" onClick={() => handleToggleAddToCart(item)}>
      <CartIcon fill={isToggled ? "black" : "transparent"} />
    </div>
  );
}
