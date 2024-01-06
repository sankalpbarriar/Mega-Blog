//Creating a production grade Button component
import React from "react";

function Button({
  children,
  type = "button",
  bgColor = "bg-blue-600",
  textColor = "text-white",
  className = '',
  ...props //additional properties if given
}) {
  return (
    <button
      className={`px-4 py-2 rounded-lg  ${bgColor} ${textColor} ${className} `}
      {...props}  //aur bhi propertu ke liye props ko spread kar diye
    >
      {children}
    </button>
  );
}

export default Button;
