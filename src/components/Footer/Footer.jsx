import React from "react";
import { Instagram, WhatsApp, Facebook, Telegram } from "@material-ui/icons";

import "./Footer.scss";

function Footer() {
  return (
    <footer className="Footer">
      <nav className="Footer__nav">
        <ul>
          <li>لباس مردانه</li>
          <li>لباس زنانه</li>
          <li>لباس بچگانه</li>
          <li>لباس ورزشی</li>
          <li>لباس مجلسی</li>
        </ul>
        <ul>
          <li>تلفن همراه</li>
          <li>لپتاپ</li>
          <li>هدفون</li>
          <li>پرینتر</li>
          <li>مانیتور</li>
        </ul>
        <ul>
          <li>کتاب</li>
          <li>ساعت مچی</li>
          <li>لوازم آرایش</li>
          <li>ظروف</li>
          <li>میز و صندلی</li>
        </ul>
      </nav>
      <div className="Footer__social">
        <Instagram />
        <WhatsApp />
        <Facebook />
        <Telegram />
      </div>
      <hr />
      <div className="Footer__cright">
        <span>&copy; کپی رایت ۱۳۹۹، پناهی آذر</span>
      </div>
    </footer>
  );
}

export default Footer;
