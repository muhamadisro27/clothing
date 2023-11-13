import { useState } from "react";

import { SignUpContainer } from "./sign-up-form.style.jsx";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import { useDispatch, useSelector } from "react-redux";
import { signUpStart } from "../../store/user/user.action.js";
import { selectIsError } from "../../store/user/user.selector.js";

const SignUpForm = () => {
  const fields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [formFields, setFormFields] = useState(fields);
  const dispatch = useDispatch();

  const { displayName, email, password, confirmPassword } = formFields;

  function handleChange(event) {
    const { name, value } = event.target;

    setFormFields({
      ...formFields,
      [name]: value,
    });
  }

  const error = useSelector(selectIsError);

  const resetFormFields = () => setFormFields(fields);

  async function submitData(event) {
    event.preventDefault();

    if (confirmPassword !== password) {
      alert("Password do not match !");
      return;
    }

    try {
      dispatch(signUpStart(email, password, displayName));

      if(!error) {
        resetFormFields();
      }
    } catch (error) {
      // console.log(error, 'error');
      if (error.code === "auth/email-already-in-use") {
        alert("Email already in use !");
        return;
      } else {
        console.log("user creation encountered an error", error);
      }
    }
  }

  return (
    <SignUpContainer>
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
          buttonType={BUTTON_TYPE_CLASSES.base}
          attributes={{
            type: "submit",
          }}
        >
          Sign Up
        </Button>
      </form>
    </SignUpContainer>
  );
};

export default SignUpForm;
