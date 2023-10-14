import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import "./sign-in-form.style.scss";
import {
  createUserDocFromAuth,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

const SignInForm = () => {
  const fields = {
    email: "",
    password: "",
  };

  const [formFields, setFormFields] = useState(fields);

  const { email, password } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => setFormFields(fields);

  const logGoogleUser = async () => {
    try {
      const { user } = await signInWithGooglePopup();
      await createUserDocFromAuth(user);

      resetFormFields();
    } catch (error) {
      console.log(error);
    }
  };

  const submitData = async (event) => {
    event.preventDefault();

    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );

      console.log(response);
      // resetFormFields();
    } catch (error) {
      if (error.code === "auth/invalid-login-credentials") {
        alert("User don't match in our records !");
        return;
      } else {
        console.log("error login has occurred !", error);
      }
    }
  };

  return (
    <div className="sign-in-container">
      <h2>I Already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={(e) => submitData(e)}>
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
        <div className="buttons-container">
          <Button
            attributes={{
              type: "submit",
            }}
          >
            Sign In
          </Button>
          <Button
            buttonType="google"
            attributes={{ type: "button", onClick: logGoogleUser }}
          >
            Sign in with google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
