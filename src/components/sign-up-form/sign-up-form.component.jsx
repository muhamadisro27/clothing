import { useState } from "react";

import "./sign-up-form.style.scss";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocFromAuth,
} from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";

const SignUp = () => {
  const fields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [formFields, setFormFields] = useState(fields);

  const { displayName, email, password, confirmPassword } = formFields;

  function handleChange(event) {
    const { name, value } = event.target;

    setFormFields({
      ...formFields,
      [name]: value,
    });
  }

  const resetFormFIelds = () => setFormFields(fields);

  async function submitData(event) {
    event.preventDefault();

    if (confirmPassword !== password) {
      alert("Password do not match !");
      return;
    }

    try {
      const response = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      if (response) {
        response.user.displayName = displayName;
        await createUserDocFromAuth(response.user);

        resetFormFIelds();
      }

      return;
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Email already in use !");
        return;
      } else {
        console.log("user creation encountered an error", error);
      }
    }
  }

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={(e) => submitData(e)}>
        <FormInput
          label="Display Name"
          inputOptions={{
            type: "text",
            name: "displayName",
            onChange: handleChange,
            value: displayName,
            required: true,
          }}
        />
        <FormInput
          label="Email"
          inputOptions={{
            type: "email",
            name: "email",
            onChange: handleChange,
            value: email,
            required: true,
          }}
        />
        <FormInput
          label="Password"
          inputOptions={{
            type: "password",
            name: "password",
            onChange: handleChange,
            value: password,
            required: true,
          }}
        />
        <FormInput
          label="Confirm Password"
          inputOptions={{
            type: "password",
            name: "confirmPassword",
            onChange: handleChange,
            value: confirmPassword,
            required: true,
          }}
        />
        <Button
          attributes={{
            type: "submit",
          }}
        >
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SignUp;
