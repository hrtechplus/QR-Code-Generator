import React from "react";
import "./SocialMedia.css";
import { Center } from "@chakra-ui/react";

export default function SocialMedia() {
  return (
    <ul className="wrapper">
      <li className="icon facebook">
        <span className="tooltip">Facebook</span>
        <a
          href="https://www.facebook.com/hasinduonline"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>
            <i className="fab fa-facebook-f"></i>
          </span>
        </a>
      </li>
      <li className="icon twitter">
        <span className="tooltip">Twitter</span>
        <a
          href="https://twitter.com/hrtechplus"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>
            <i className="fab fa-twitter"></i>
          </span>
        </a>
      </li>
      <li className="icon instagram">
        <span className="tooltip">Instagram</span>
        <a
          href="https://www.instagram.com/hasinduonline/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>
            <i className="fab fa-instagram"></i>
          </span>
        </a>
      </li>
      <li className="icon github">
        <span className="tooltip">Github</span>
        <a
          href="https://github.com/hrtechplus"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>
            <i className="fab fa-github"></i>
          </span>
        </a>
      </li>
    </ul>
  );
}
