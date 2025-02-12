import { Title, TitleSm } from "@/components/common/Title";
import React from "react";
import {
  AiFillBehanceCircle,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { BsFacebook } from "react-icons/bs";
import { FiHeadphones, FiHelpCircle } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { useForm, ValidationError } from "@formspree/react";
import ContactForm from "./ContactForm";
import Link from "next/link";


const Contact = () => {
  return (
    <>
      <section className="contact bg-top">
        <div className="container">
          <div className="heading-title">
            <TitleSm title="CONTACT" /> <br />
            <br />
            <Title title="Let's start right now!" className="title-bg" />
          </div>
          <div className="content py flex1">
            <div className="left w-30">
              <div className="contact-deatils">
                <div className="box">
                  <FiHeadphones size={30} className="icons" />
                  <h3>+923364987786</h3>
                  <span>Call us: Saturday - Thursday 1pm - 9pm</span>
                </div>
                <div className="box">
                  <IoLocationOutline size={30} className="icons" />
                  <h3>Sargodha Road Faisalabad</h3>
                  <span>M57 Pearl City </span>
                </div>
                <div className="box">
                  <FiHelpCircle size={30} className="icons" />
                  <h3>info@broshtech.com</h3>
                  <span>Drop us a line anytime!</span>
                </div>
                <div className="box">
                  <BiUserCircle size={30} className="icons" />
                  <h3>info@broshtech.com</h3>
                  <span>Career at Seven Creative</span>
                </div>
              </div>
              <ul>
                <Link href="https://www.facebook.com/profile.php?id=61569795868977">
                  <li className="icon">
                    <BsFacebook size={25} />
                  </li>
                </Link>
                <Link href="https://www.instagram.com/broshtech?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                  <li className="icon">
                    <AiFillInstagram size={25} />
                  </li>
                </Link>
                <Link href="https://www.linkedin.com/company/broshtech/">
                  <li className="icon">
                    <AiFillLinkedin size={25} />
                  </li>
                </Link>
              </ul>
            </div>
            <div className="right w-70">
              <TitleSm title="Make an online enquiry" />
              <p className="desc-p">
                Got questions? Ideas? Fill out the form below to get our
                proposal.{" "}
              </p>

              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
