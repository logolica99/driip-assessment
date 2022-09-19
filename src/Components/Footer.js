import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { blue } from "@mui/material/colors";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import driip_logo from "../images/driip_logo.svg";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={driip_logo} alt="" />
      </div>
      <h2>
        Contact<span>.</span>
      </h2>
      <p>For all business and collaboration opportunities</p>
      <div className="footer-icons">
        <a href="">
          
        <FacebookIcon sx={{ color: blue[500] }} />
        </a>
        <a href="">
          
        <InstagramIcon sx={{ color: blue[500] }} />
        </a>
        <a href="">
          
        <TwitterIcon sx={{ color: blue[500] }} />
        </a>
        <a href="">
          
        <LinkedInIcon sx={{ color: blue[500] }} />
        </a>
      </div>
      <p className="footer-credit">© 2022 Driip. All rights reserved</p>
    </div>
  );
}
