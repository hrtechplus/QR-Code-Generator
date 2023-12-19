import React from "react";
import "./SocialMedia.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Instagram } from "./img/Instagram";
import { Github } from "./img/Github";
import { FaceBook } from "./img/FaceBook";

export default function SocialMedia() {
  return (
    <div className="main">
      <div className="up">
        <button className="card1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 256 256"
            width="30px"
            height="30px"
            fillRule="nonzero"
            className="instagram"
          >
            <Instagram />
          </svg>
        </button>
        <button className="card2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            width="30px"
            height="30px"
            className="twitter"
          >
            {/* Your SVG path here */}
          </svg>
        </button>
      </div>
      <div className="down">
        <button className="card3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 30"
            width="30px"
            height="30px"
            fillRule="nonzero"
            className="github"
          >
            <Github />
          </svg>
        </button>
        <button className="card4">
          <svg
            height="30px"
            width="30px"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
            className="discord"
          >
            <FaceBook />
          </svg>
        </button>
      </div>
    </div>
  );
}
