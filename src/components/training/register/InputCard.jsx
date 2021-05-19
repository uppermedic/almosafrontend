import React from "react";

const InputCard = ({ item }) => {
  return (
    <div className="input-card">
      {item.required ? (
        <label htmlFor={item.name}>
          {item.label}
          <sup style={{ color: "red" }}>&nbsp;*</sup>
        </label>
      ) : (
        <label htmlFor={item.name}>{item.label}</label>
      )}
      <input
        type={item.type}
        name={item.name}
        id={item.name}
        required={item.required}
        maxLength={item.type === "tel" && "16"}
        minLength={item.type === "tel" && "10"}
        pattern={item.type === "tel" && "^([0]{1})([0-9]{10,16})$"}
        title={
          item.type === "tel" &&
          "Mobile Number Must Start With 0, more than 10 Numbers, maximum 15 Numbers"
        }
      />
    </div>
  );
};

export default InputCard;
