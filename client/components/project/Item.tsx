import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { ItemProps } from "../../types";

const Item = ({ item, scale }: ItemProps) => {
  const [afterRotation, setAfterRotation] = useState({ width: 0, height: 0 });
  const dispatch = useDispatch();
  const scaleRatio = (scale.Y > scale.X) ? scale.X : scale.Y;
  const height = item.height * scaleRatio;
  const width = item.width * scaleRatio;

  const triggerError = () => {
    dispatch({ type: "CLEAR_PROJECT" });
    dispatch({
      type: "ERROR",
      data: "Invalid project data",
    });
  };

  useEffect(() => {
    if (typeof item.rotation !== "number" || item.width < 0 || item.height < 0) {
      triggerError();
    }
  }, []);

  useEffect(() => {
    const t = (item.rotation * Math.PI) / 180;
    const newWidth =
      Math.abs(Math.sin(t) * height) + Math.abs(Math.cos(t) * width);
    const newHeight =
      Math.abs(Math.sin(t) * width) + Math.abs(Math.cos(t) * height);
    setAfterRotation({
      width: newWidth,
      height: newHeight,
    });
  }, [scale]);

  return (
    <>
      <div
        style={{
          position: "absolute",
          height: height,
          width: width,
          background:
            item.color.length !== 4 && item.color.length !== 7
              ? "#14a7eb"
              : item.color,
          left: item.x * scale.X - width / 2,
          top: item.y * scale.Y - height / 2,
          transform: `rotate(${item.rotation}deg)`,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="circle"></div>
      </div>
      <div
        className="border"
        style={{
          position: "absolute",
          width: afterRotation.width,
          height: afterRotation.height,
          top: item.y * scale.Y - afterRotation.height / 2,
          left: item.x * scale.X - afterRotation.width / 2,
        }}
      ></div>
      <p
        style={{
          position: "absolute",
          top: item.y * scale.Y - 16,
          left: item.x * scale.X + 5,
          fontSize: "0.9rem",
        }}
      >
        {item.rotation}&deg;
      </p>
    </>
  );
};

export default Item;
