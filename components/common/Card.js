import Link from "next/link";
import { TitleSm } from "./Title";
import { HiOutlineArrowRight } from "react-icons/hi";

export const Card = ({ data, caption, show, path }) => {
  return (
    <>
      <div className="">
        <div className="services_container">
          <img className="services_img" src={data.cover} alt={data.title} />
          <div className="services_overlay">
            <h3>{data.title}</h3>
            <ul>
              {data.desc.map((text, i) => (
                <li key={i}>{text.text}</li>
              ))}
            </ul>
          </div>
        </div>
        <h3
          style={{
            padding: "10px 10px 10px 10px",
          }}
        >
          {data.title}
        </h3>
      </div>
    </>
  );
};
