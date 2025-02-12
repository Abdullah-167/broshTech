// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help

import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  // const [state, handleSubmit] = useForm("xdkadwyo");

  const [state, handleSubmit] = useForm("meoeznep");

  if (state.succeeded) {
    return <p>Thanks for reaching out!</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid-2">
        <div className="inputs">
          <label htmlFor="name">Full Name</label>
          <input id="name" type="name" name="name" required />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>
        <div className="inputs">
          <label htmlFor="email">Email Address</label>
          <input id="email" type="email" name="email" required />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
      </div>
      <div className="grid-2">
        <div className="inputs">
          <label htmlFor="subject">Subject</label>
          <input id="subject" type="subject" name="subject" required />
          <ValidationError
            prefix="Subject"
            field="subject"
            errors={state.errors}
          />
        </div>
        <div className="inputs">
          <label htmlFor="email">Expected Duration</label>
          <input id="date" type="date" name="date" required />
          <ValidationError prefix="Date" field="date" errors={state.errors} />
        </div>
      </div>

      <div className="inputs">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>

      <button
        className="button-primary"
        type="submit"
        disabled={state.submitting}
      >
        Submit
      </button>
    </form>
  );
}

export default ContactForm;
