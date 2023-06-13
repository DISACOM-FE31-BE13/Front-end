import React, { useState } from "react";
import axios from "axios";
import "./apply.css";
import { Form, FormGroup, Button } from "reactstrap";

const Join = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleChange = (e) => {
    if (e.target.id === "fullName") {
      setFullName(e.target.value);
    } else if (e.target.id === "email") {
      setEmail(e.target.value);
    } else if (e.target.id === "phone") {
      setPhone(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/api/v1/join", {
        fullName,
        email,
        phone,
      });
      console.log(response.data);
      // Reset form fields if needed
      setFullName("");
      setEmail("");
      setPhone("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="apply__form">
      <h3>Submit Application</h3>
      <Form className="apply__info-form" onSubmit={handleSubmit}>
        <FormGroup>
          <input type="text" placeholder="Full Name" id="fullName" required onChange={handleChange} value={fullName} />
        </FormGroup>
        <FormGroup>
          <input type="email" placeholder="Email" id="email" required onChange={handleChange} value={email} />
        </FormGroup>
        <FormGroup>
          <input type="number" placeholder="Phone" id="phone" required onChange={handleChange} value={phone} />
        </FormGroup>

        <Button type="submit">Join</Button>
      </Form>
    </div>
  );
};

export default Join;
