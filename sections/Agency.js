import { useState, useEffect, useRef } from "react";
import Banner from "@/components/Banner";
import { Title, TitleSm } from "@/components/common/Title";
import CountUp from "react-countup";

const Agency = () => {
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
      <section ref={sectionRef} className="agency bg-top">
        <div className="container">
          <div className="heading-title">
            <TitleSm title="ABOUT AGENCY" />
            <br />
            <br />
            <Title
              title="The last digital agency you will ever need!"
              className="title-bg"
            />
          </div>
          <div className="content flex1">
            <div className="left w-60 py">
              <TitleSm title="Turning your business ideas into smart digital products." />
              <p className="desc-p">
                We help transform your innovative ideas into powerful,
                user-friendly digital solutions.
              </p>
              <div className="grid-2">
                <div className="box">
                  <h1 className="indigo">
                    <CountUp start={0} end={5} duration={5} suffix="+" startOnMount={false} redraw={true} useEasing={true} start={startCounting ? 0 : null} />
                  </h1>
                  <h3>Years of experience</h3>
                </div>
                <div className="box">
                  <h1 className="indigo">
                    <CountUp start={0} end={100} duration={5} suffix="+" startOnMount={false} redraw={true} useEasing={true} start={startCounting ? 0 : null} />
                  </h1>
                  <h3>Successful cases</h3>
                </div>
                <div className="box">
                  <h1 className="indigo">
                    <CountUp start={0} end={12} duration={5} suffix="+" startOnMount={false} redraw={true} useEasing={true} start={startCounting ? 0 : null} />
                  </h1>
                  <h3>Industry awards</h3>
                </div>
              </div>
            </div>
            <div className="right w-40 ml">
              <img
                src="/images/s1.jpg"
                alt="Img"
                className="round"
                width="100%"
                height="100%"
              />
            </div>
          </div>
        </div>
      </section>

      <Banner />
    </>
  );
};

export default Agency;
