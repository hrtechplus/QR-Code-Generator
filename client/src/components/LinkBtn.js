import React from "react";
import "./LinkBtn.css";
export default function LinkBtn() {
  return (
    <div class="toggle" onclick="toggleButton()">
      <input type="checkbox" />
      <div class="button"></div>
      <div class="label">T</div>
    </div>
  );
}
