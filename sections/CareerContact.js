import React, { useState } from "react";
import styles from "./careercontact.module.css";

function CareerContact() {
  const [fileError, setFileError] = useState("");
  const [fileSelected, setFileSelected] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (!file) {
      setFileError("Please upload a PDF file.");
      setFileSelected(false);
      return;
    }

    if (file.type !== "application/pdf") {
      setFileError("Only PDF files are allowed!");
      setFileSelected(false);
      event.target.value = ""; // Reset file input
      return;
    }

    setFileError(""); // Clear error if valid
    setFileSelected(true);
  };

  const handleSubmit = (event) => {
    if (!fileSelected) {
      event.preventDefault();
      setFileError("Please upload a PDF file before submitting.");
    }
  };

  return (
    <section className={styles.new}>
      <form
        action="https://getform.io/f/bxowjzda"
        method="POST"
        encType="multipart/form-data"
        className={styles.form}
        onSubmit={handleSubmit} // Attach validation to the form submit
      >
        <div className={styles.grid2}>
          <div className={styles.inputs}>
            <label htmlFor="name" className={styles.label}>
              Full Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              required
              className={styles.input}
            />
          </div>
          <div className={styles.inputs}>
            <label htmlFor="email" className={styles.label}>
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              className={styles.input}
            />
          </div>
        </div>

        <div className={styles.inputs}>
          <label htmlFor="jobTitle" className={styles.label}>
            Job Title
          </label>
          <input
            id="jobTitle"
            type="text"
            name="jobTitle"
            required
            className={styles.input}
          />
        </div>

        <div className={styles.inputs}>
          <label htmlFor="message" className={styles.label}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            className={styles.textarea}
          />
        </div>

        <div className={styles.inputs}>
          <label className={styles.label}>Gender</label>
          <div className={styles.radioGroup}>
            <label>
              <input type="radio" name="gender" value="male" defaultChecked />{" "}
              Male
            </label>
            <label>
              <input type="radio" name="gender" value="female" /> Female
            </label>
            <label>
              <input type="radio" name="gender" value="other" /> Other
            </label>
          </div>
        </div>

        <div className={styles.inputs}>
          <label className={styles.label}>Work Experience</label>
          <select name="work-experience" className={styles.select}>
            <option value="one-year">0-1 years</option>
            <option value="one-two-years">1-2 years</option>
            <option value="one-three-years">1-3 years</option>
            <option value="one-four-years">1-4 years</option>
            <option value="five-plus-years">5+ years</option>
          </select>
        </div>

        <div className={styles.inputs}>
          <label className={styles.label}>Upload Resume (PDF Only)</label>
          <input
            type="file"
            name="file"
            accept="application/pdf"
            onChange={handleFileChange}
          />
          {fileError && (
            <p
              className={styles.error}
              style={{ color: "red", fontSize: "14px" }}
            >
              {fileError}
            </p>
          )}
        </div>

        <button
          type="submit"
          className={styles.button}
          disabled={!fileSelected}
        >
          Send
        </button>
      </form>
    </section>
  );
}

export default CareerContact;
