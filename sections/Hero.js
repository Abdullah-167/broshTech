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
import Timer from "./Timer";

const Hero = () => {
  const sectionRef = useRef(null);
  const [startCounting, setStartCounting] = useState(false);

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


  return (
    <>
      <section id="home" className={styles.hero}>
        {/* Background Video (Placed at the Top Level) */}
        {/* <video autoPlay loop muted className={styles.bgVideo}>
          <source src="/videos/bgvideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}

        <Timer />
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
