import React from "react";

export default function QRImg({ img }) {
  return (
    <div className=" container-sm ">
      <img src={img} alt="QR"></img>
    </div>
  );
}
