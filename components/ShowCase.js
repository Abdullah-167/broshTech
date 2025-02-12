import React from "react";
import { Title } from "./common/Title";
import { Card } from "./common/Card";
import Link from "next/link";
import { HiOutlineArrowRight } from "react-icons/hi";

const ShowCase = () => {
  return (
    <>
      <section className="showcase">
        <div className="container">
          <div className="heading-title">
            <Title title="Selected cases" />
          </div>
          <div className="hero-content grid-3 py">
            {showcase.map((item) => (
              <div className="card">
                <div className="card-img">
                  <img src={item.cover} alt={item.title} />
                </div>
                <div className="card-details">
                  <h1 className="">{item.title}</h1>
                  <p className=" ">{item.post}</p>
                  <span>{item.catgeory}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="card links">
            VIEW ALL CASES <HiOutlineArrowRight className="link-icon" />
          </div>
        </div>
      </section>
    </>
  );
};

export default ShowCase;

const showcase = [
  {
    id: 1,
    title: "Neon Lights",
    cover: "../images/s1.jpg",
    catgeory: "DIGITAL MARKETING",
  },
  {
    id: 2,
    title: "Futuristic Furniture",
    catgeory: "WEBSITES",
    cover: "../images/s2.jpg",
  },
  {
    id: 3,
    title: "Smart Living",
    cover: "../images/s3.jpg",
    catgeory: "WEBSITES",
  },
  {
    id: 4,
    title: "Light Painting",
    cover: "../images/s4.jpg",
    catgeory: "BRANDING	",
  },
  {
    id: 5,
    title: "Ideabox",
    cover: "../images/s5.jpg",
    catgeory: "BRANDING	",
  },
  {
    id: 5,
    title: "VR Experience",
    cover: "../images/s6.jpg",
    catgeory: "WEBSITES	",
  },
];
