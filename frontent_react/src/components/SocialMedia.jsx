import React from "react";
import { BsTwitter, BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <a
      href="https://github.com/deepakp2411"
      target="_blank"
      rel="noreferrer"
    >
      <div>
        <BsGithub />
      </div>
    </a>
    <a
      href="https://www.linkedin.com/in/deepak-patel-a4a55b237/"
      target="_blank"
      rel="noreferrer"
    >
      <div>
        <BsLinkedin />
      </div>
    </a>
    <a href="@deepak_patel24" target="_blank" rel="noreferrer">
      <div>
        <BsTwitter />
      </div>
    </a>
    <div>
      <FaFacebookF />
    </div>
    <div>
      <BsInstagram />
    </div>
  </div>
);

export default SocialMedia;
