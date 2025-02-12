import { Card } from "@/components/common/Card";
import { Title, TitleSm } from "@/components/common/Title";
import Image from "next/image";
import React from "react";
import styles from "./team.module.css";
import { CiLinkedin } from "react-icons/ci";
import Link from "next/link";

const Team = () => {
  return (
    <>
      <section className="agency bg-top">
        <div className="container">
          <div className="heading-title">
            <TitleSm title="MEET OUR TEAM" /> <br />
            <br />
            <Title
              title="A team of smart & passionate creatives"
              className="title-bg"
            />
          </div>

          <section className={`${styles.team_section}`}>
            <div className={`${styles.team_container}`}>
              {teamdata.map((member) => (
                <div key={member.id} className={`${styles.card}`}>
                  <div className={`${styles.card__inner}`}>
                    {/* Front Side */}
                    <div
                      className={`${styles.card__side} ${styles.card__side_front}`}
                    >
                      <Image
                        src={member.cover}
                        alt={member.title}
                        width={300}
                        height={400}
                        className={`${styles.card__image}`}
                      />
                      <h3 className={`${styles.card__title}`}>
                        {member.title}
                      </h3>
                      <p className={`${styles.card__details}`}>{member.post}</p>
                    </div>

                    {/* Back Side */}
                    <div
                      className={`${styles.card__side}  ${styles.card__side_back}`}
                    >
                      <Image
                        src={member.logo}
                        alt={member.title}
                        width={100}
                        height={100}
                      />
                      <h4 className={`${styles.card__heading}`}>
                        <span className="">{member.title}</span>
                      </h4>
                      <p className={`${styles.card__details}`}>{member.post}</p>
                      <div>
                        <Link href={member.linkProfile}>
                          <p style={{ marginTop: "10px" }}>{member.linkedin}</p>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Team;

const teamdata = [
  {
    title: "Bilal Humayun",
    cover: "/images/CEO.jpg",
    logo: "/images/white.png",
    post: "FOUNDER, CEO",
    linkedin: <CiLinkedin size={30} />,
    linkProfile: "https://www.linkedin.com/in/bilal-humayun-b36b6a171/",
  },
  {
    title: "Abdullah Iqbal",
    cover: "/images/coo.jpg",
    logo: "/images/white.png",
    post: "COO",
    linkedin: <CiLinkedin size={30} />,
    linkProfile: "https://www.linkedin.com/in/muhammad-abdullah-513029196/",
  },
  {
    title: "Muhammad Zeeshan",
    cover: "/images/Zeeshan.jpg",
    logo: "/images/white.png",
    post: "Creative Director",
    linkedin: <CiLinkedin size={30} />,
    linkProfile: "https://www.linkedin.com/in/zeeshang8721/",
  },
  {
    title: "Muhammad Abdullah",
    post: "Web Developer",
    linkedin: <CiLinkedin size={30} />,
    linkProfile: "",
    cover: "/images/abdullah.jpg",
    logo: "/images/white.png",
  },
];
