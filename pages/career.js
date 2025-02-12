import { Contact } from "@/sections";
import CareerContact from "@/sections/CareerContact";
import ContactForm from "@/sections/ContactForm";
import Head from "next/head";
import React from "react";

const career = () => {
  return (
    <>
      <Head>
        <title>Contact - BrosTech</title>
      </Head>
      <h1
        style={{
          textAlign: "center",
          padding: "30px 0px 10px 0px",
        }}
      >
        Join Our Team!
      </h1>
      <p
        style={{
          textAlign: "center",
          padding: "0px 0px 0px 0px",
        }}
      >
        Send Us Your Resume Now
      </p>
      <CareerContact />
    </>
  );
};

export default career;
