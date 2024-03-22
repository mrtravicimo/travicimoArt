import React from "react";
import {
  ImFacebook,
  ImTwitter,
  ImYoutube,
  ImLinkedin,
  ImInstagram,
} from "react-icons/im";

const Socials = () => {
  return (
    <div className="hidden xl:flex ml-24">
      <ul className="flex gap-x-4">
        <li>
          <a href="https://www.facebook.com" target="_blank">
            <ImFacebook />
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com" target="_blank">
            <ImTwitter />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com" target="_blank">
            <ImYoutube />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com" target="_blank">
            <ImLinkedin />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com" target="_blank">
            <ImInstagram />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
