import Banner from "@/components/Banner";
import Expertise from "@/components/Expertise";
import ShowCase from "@/components/ShowCase";
import Testimonial from "@/components/Testimonial";
import { AiOutlineCalendar } from "react-icons/ai";
import { TfiRulerPencil } from "react-icons/tfi";
import { VscFileSubmodule } from "react-icons/vsc";
import { BiUser } from "react-icons/bi";
import { Title, TitleLogo, TitleSm } from "@/components/common/Title";
import { BlogCard, Brand } from "@/components/router";
import React from "react";
import styles from "./hero.module.css";
import Agency from "./Agency";
import Team from "./Team";
import Services from "./Services";
import Contact from "./Contact";
import CountUp from "react-countup";
import { useState, useEffect, useRef } from "react";

const Hero = () => {
  const sectionRef = useRef(null);
  const [startCounting, setStartCounting] = useState(false);
  const [time, setTime] = useState(new Date());
  const [mounted, setMounted] = useState(false);

  const formatTime = (date) => {
    let hours = date.getHours() % 12 || 12; // Convert 24-hour to 12-hour format
    let minutes = date.getMinutes().toString().padStart(2, "0");
    let seconds = date.getSeconds().toString().padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setStartCounting(true);
        }
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <section id="home" className={styles.hero}>
        {/* Background Video (Placed at the Top Level) */}
        {/* <video autoPlay loop muted className={styles.bgVideo}>
          <source src="/videos/bgvideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
        <div className="container">
          <div className="clock-container">
            {mounted && <div className="clock">{formatTime(time)}</div>}
            <style jsx>{`
              @font-face {
                font-family: digital;
                src: url("/fonts/digital.ttf") format("truetype");
              }
              .clock-container {
                display: flex;
                justify-content: center;
                align-items: center;
              }
              .clock {
                font-size: 4rem;
                font-weight: bold;
                color: #00ffcc;
                font-family: digital;
                text-shadow: 2px 2px 10px rgba(0, 255, 204, 0.8);
              }
            `}</style>
          </div>
          <div className={"text-center"}>
            <style jsx>{`
              .hero-heading {
                font-size: 40px;
                max-width: 700px;
                text-align: center;
              }
            `}</style>
            <h1 className="hero-heading">
              Every minutes a person think's to create a brand
            </h1>
          </div>
        </div>
      </section>
      <section className="hero-sec">
        <div className="container">
          <div className="heading-title">
            <Title title="The last digital agency you'll ever need" />
            <p>
              We’re not just another agency—we’re your long-term digital
              partner. From web development to brand marketing, we provide
              cutting-edge solutions that scale with your business. Let’s build
              something extraordinary together!
            </p>
          </div>
          <div className="hero-content grid-4">
            <div className="box">
              <span className="green">
                {" "}
                <AiOutlineCalendar size={25} />
              </span>{" "}
              <br />
              <br />
              <h3>
                <CountUp
                  start={0}
                  end={5}
                  duration={5}
                  suffix="+"
                  startOnMount={false}
                  redraw={true}
                  useEasing={true}
                  start={startCounting ? 0 : null}
                />
                years of market experience
              </h3>
            </div>
            <div className="box">
              <span className="green">
                {" "}
                <TfiRulerPencil size={25} />
              </span>{" "}
              <br />
              <br />
              <h3>Unique technologies & modern approach </h3>
            </div>
            <div className="box">
              <span className="green">
                {" "}
                <VscFileSubmodule size={25} />
              </span>{" "}
              <br />
              <br />
              <h3>
                <CountUp
                  start={0}
                  end={100}
                  duration={5}
                  suffix="+"
                  startOnMount={false}
                  redraw={true}
                  useEasing={true}
                  start={startCounting ? 0 : null}
                />
                Scuccessful cases in portfolio
              </h3>
            </div>
            <div className="box">
              <span className="green">
                {" "}
                <BiUser size={25} />
              </span>{" "}
              <br />
              <br />
              <h3>Customer satisfaction is our top priority</h3>
            </div>
          </div>
        </div>
      </section>
      {/* <section id="expertise">
        <Expertise />
      </section> */}
      {/* <section id="brand">
        <Brand />
      </section> */}
      <section id="agency">
        <Agency />
      </section>
      <section id="team">
        <Team />
      </section>
      <section id="services">
        <Services />
      </section>
      {/* <section id="showcase">
        <ShowCase />
      </section> */}
      <section id="contact">
        <Contact />
      </section>
    </>
  );
};

export default Hero;
