import React, { useState, useRef } from "react";
import "./apply.css";
import { Form, FormGroup, Button } from "reactstrap";

const Apply = ({ info }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [education, setEducation] = useState("");
  const [cv, setCV] = useState(null);

  const cvInputRef = useRef(null); // Referensi ke elemen input CV

  const handleChange = (e) => {
    if (e.target.id === "fullName") {
      setFullName(e.target.value);
    } else if (e.target.id === "email") {
      setEmail(e.target.value);
    } else if (e.target.id === "phone") {
      setPhone(e.target.value);
    } else if (e.target.id === "education") {
      setEducation(e.target.value);
    } else if (e.target.id === "cv") {
      setCV(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("fullName", fullName);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("education", education);

    if (cv) {
      formData.append("cv", cv);
    }

    try {
      const response = await fetch("http://localhost:4000/api/v1/apply", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.message);
        setFullName("");
        setEmail("");
        setPhone("");
        setEducation("");
        setCV(null);
        e.target.reset(); // Reset the form fields
        cvInputRef.current.value = null; // Clear the cv input field using the ref
      } else {
        console.error("Failed to submit application");
      }
    } catch (error) {
      console.error("An error occurred while submitting the application", error);
    }
  };

  return (
    <div className="apply__form">
      <h3>Submit Application</h3>
      <Form className="apply__info-form">
        <FormGroup>
          <input type="text" placeholder="Full Name" id="fullName" required onChange={handleChange} value={fullName} />
        </FormGroup>
        <FormGroup>
          <input type="email" placeholder="Email" id="email" required onChange={handleChange} value={email} />
        </FormGroup>
        <FormGroup>
          <input type="number" placeholder="Phone" id="phone" required onChange={handleChange} value={phone} />
        </FormGroup>
        <FormGroup>
          <label htmlFor="education">Recent Education:</label>
          <select id="education" value={education} onChange={handleChange}>
            <option value="" disabled hidden>
              Select Education
            </option>
            <option value="SMA/SMK">SMA/SMK</option>
            <option value="D3">D3</option>
            <option value="D4/S1">D4/S1</option>
            <option value="S2">S2</option>
          </select>
        </FormGroup>

        <FormGroup>
          <label htmlFor="cv">Attach CV:</label>
          <input type="file" id="cv" onChange={handleChange} ref={cvInputRef} />
        </FormGroup>

        <Button type="submit" onClick={handleSubmit}>
          Apply
        </Button>
      </Form>
    </div>
  );
};

export default Apply;
