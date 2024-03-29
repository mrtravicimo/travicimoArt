import React, { useContext } from "react";
import { CursorContext } from "../context/CursorContext";
import {
  ImFacebook,
  ImYoutube,
  ImLinkedin,
  ImInstagram,
} from "react-icons/im";

const Socials = () => {
  const { mouseEnterHandler,mouseLeaveHandler } = useContext(CursorContext);
  return (
    <div
    onMouseEnter={mouseEnterHandler}
    onMouseLeave={mouseLeaveHandler}
     className="hidden xl:flex ml-24">
      <ul className="flex gap-x-4">
        <li>
          <a href="https://www.facebook.com/travis.racine.1/" target="Travis">
            <ImFacebook />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/channel/UCZXMQ7iOLn0dqSZkPX1CfIQ" target="Travis">
            <ImYoutube />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/travis-racine-44bb9726a/" target="Travis">
            <ImLinkedin />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/travicimo/" target="Travis">
            <ImInstagram />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
