import React from "react";
import "../../styles/footer.css";
import { IframeHTMLAttributes } from "react";

const Footer = () => {
  return (
    <footer className="footerEnd">
      <p
        style={{
          fontFamily: "Jost , sans-serif",
          fontWeight: 700,
        }}>
        © 2022 Online Shop, Inc. All Rights Reserved
      </p>
      {/* <p style={{ fontFamily: "monospace", fontWeight: 700 }}>Bishkek</p> */}
      <button
        style={{
          fontFamily: "monospace",
          fontWeight: 700,
          textDecoration: "none",
          color: "white",
          backgroundColor: "transparent",
          border: 0,
          fontFamily: "Jost , sans-serif",
          fontWeight: 700,
        }}
        onClick={() =>
          window.open(
            "https://www.google.com/maps/place/%D0%91%D0%B8%D1%88%D0%BA%D0%B5%D0%BA/@42.8768751,74.5918609,12z/data=!3m1!4b1!4m5!3m4!1s0x389eb7dc91b3c881:0x492ebaf57cdee27d!8m2!3d42.8746212!4d74.5697617"
          )
        }>
        Bishkek
      </button>
      <a
        style={{
          fontFamily: "monospace",
          fontWeight: 700,
          textDecoration: "none",
          color: "white",
        }}></a>
      <p
        style={{
          fontFamily: "Jost , sans-serif",
          fontWeight: 700,
          color: "white",
        }}>
        Developed by:Aidin,Adilet
      </p>
    </footer>
  );
};

export default Footer;
