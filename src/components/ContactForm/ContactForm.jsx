import { Formik, Form, Field } from "formik";
import React from "react";
import { nanoid } from "nanoid";

const ContactForm = ({ addNewContact }) => {
  const initialValues = {
    name: "",
    tel: "",
    id: "",
  };
  const handleSubmit = (data) => {
    console.log(data);
    addNewContact(data, (data.id = nanoid()));
  };
  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <label>
            <span>Name</span>
            <Field name="name" />
          </label>
          <label>
            <span>Number</span>
            <Field name="tel" />
          </label>
          <button type="submit">Add Contact</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
