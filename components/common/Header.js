import Link from "next/link";
import { useState, useEffect } from "react";
import { RiMenu4Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { useRouter } from "next/router";
import Image from "next/image";
import LogoImage from "../../public/images/LogoCrop.png";
import styles from "./Header.module.css";

const Header = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  const [activeLink, setActiveLink] = useState("#home");

  useEffect(() => {
    setActiveLink(router.asPath);
  }, [router.asPath]);

  const handleClick = (index, section) => {
    setActiveIndex(index);
    setActiveLink(section);
    setIsOpen(false); // Close menu on mobile when clicked
  };

  return (
    <nav className={styles.navbar}>
      {/* Logo */}
      <div className={styles.logo}>
        <Link href="/">
          <Image src={LogoImage} alt="Logo" width={200} height={200} />
        </Link>
      </div>

      {/* Desktop Menu - No Animations Here */}
      <div className={styles.menu}>
        {links.map((item, index) => (
          <Link key={index} href={item.link}>
            <label
              className={`${styles.label} ${activeIndex === index ? styles.active : ""}`}
              onClick={() => handleClick(index, item.link)}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              {item.text}
            </label>
          </Link>
        ))}
        <div className={styles.bar}></div>
        <div
          className={styles.slidebar}
          style={{
            transform: `translateX(${translationPercentages[hoverIndex !== null ? hoverIndex : activeIndex]}%)`,
          }}
        ></div>
      </div>

      {/* Hamburger Menu */}
      <div className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <AiOutlineClose size={30} /> : <RiMenu4Line size={30} />}
      </div>

      {/* Mobile Menu */}
      <div
        className={`${styles.mobileMenu} ${isOpen ? styles.show : styles.hide}`}
      >
        {links.map((item, index) => (
          <Link key={index} href={item.link}>
            <div
              className={styles.mobileLabel}
              onClick={() => handleClick(index, item.link)}
            >
              {item.text}
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Header;

const links = [
  { link: "/#home", text: "Home" },
  { link: "/#agency", text: "Agency" },
  { link: "/#team", text: "Team" },
  { link: "/#services", text: "Services" },
  { link: "/career", text: "Join Our Team" },
  { link: "/#contact", text: "Contact" },
];

const translationPercentages = [18, 161, 306, 455, 660, 866]; 
