import React from "react";
import s from "./Footer.module.scss";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <div className={s.footer}>
      <div>Items left</div>
      <div>Filters</div>
      <div>Clear</div>
    </div>
  );
};

export default Footer;
