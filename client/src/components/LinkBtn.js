import React from "react";
import "./LinkBtn.css";
import { InstrucIcon } from "./img/InstrucIcon";

export default function LinkBtn({ img }) {
  return (
    <div className="toggle" onClick={() => toggleButton()}>
      <input type="checkbox" />
      <div className="button"></div>
      <div className="label">
        <svg
          height="30px"
          width="30px"
          viewBox="0 0 48 48"
          xmlns="http://www.w3.org/2000/svg"
          className="discord"
        >
          {img}
        </svg>
      </div>
    </div>
  );
}
