import Link from "next/link";
import { TitleLogo } from "./Title";
import { BsFacebook } from "react-icons/bs";
import {
  AiFillBehanceCircle,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import styles from "./Header.module.css";
import LogoImage from "../../public/images/LogoCrop.png";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="grid-4">
            <div className="logo">
              <Link href={"#home"} onClick={() => setActiveLink("#home")}>
                <Image
                  className={styles.mainLogo}
                  src={LogoImage}
                  alt="Logo"
                  width={200}
                  height={200}
                  style={{
                    objectFit: "contain",
                    maxHeight: "80px",
                  }}
                />
              </Link>{" "}
              <br />
              <span>
                Questions? Reach us <br /> Saturday – Thursday from 1 am to 9 pm
              </span>
              <br />
              <br />
              <h3>+923364987786</h3>
              <br />
              <button className="button-primary">Request for quote</button>
            </div>
            <ul>
              <h3>COMPANY</h3>
              <li>
                <Link href="#agency">About agency</Link>
              </li>
              <li>
                <Link href="#team">Our team</Link>
              </li>
              <li>
                <Link href="#contact">Contact</Link>
              </li>
            </ul>
            <ul>
              <h3>SERVICES</h3>
              <li>
                <Link href="#services">Web Design & Development</Link>
              </li>
              <li>
                <Link href="#services">Branding & Creative Services</Link>
              </li>
              <li>
                <Link href="#services">Digital Marketing</Link>
              </li>
              <li>
                <Link href="#services">E-Commerce</Link>
              </li>
            </ul>
            <ul>
              <h3>CONNECT</h3>
              <div className="connect">
                <li>
                  <Link href="https://www.facebook.com/profile.php?id=61569795868977">
                    <BsFacebook size={25} />
                  </Link>
                </li>
                <li>
                  <Link href="https://www.instagram.com/broshtech?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                    <AiFillInstagram size={25} />
                  </Link>
                </li>
                <li>
                  <Link href="https://www.linkedin.com/company/broshtech/">
                    <AiFillLinkedin size={25} />
                  </Link>
                </li>
              </div>
            </ul>
          </div>
          <div className="legal connect py">
            <div className="text">
              <span>© 2025 THE Broshtech. ALL RIGHTS RESERVED.</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
