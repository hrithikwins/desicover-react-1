import React from "react";
import "./cutom-button.css";

const CustomButton = ({ children, ...otherProps }) => {
  return (
    <div>
      <button
        className="btn btn-primary text-nowrap custom-button"
        {...otherProps}
      >
        {children}
      </button>
    </div>
  );
};

export default CustomButton;
