import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { ButtonContainer, SignInContainer } from "./sign-in-form.style.jsx";
import { useDispatch } from "react-redux";
import {
  emailSignInStart,
  googleSignInStart,
} from "../../store/user/user.action";

const SignInForm = () => {
  const fields = {
    email: "",
    password: "",
  };

  const dispatch = useDispatch();

  const [formFields, setFormFields] = useState(fields);

  const { email, password } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => setFormFields(fields);

  const logGoogleUser = async () => {
    dispatch(googleSignInStart());
  };

  const submitData = async (event) => {
    event.preventDefault();

    try {
      dispatch(emailSignInStart(email, password));
      resetFormFields();
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
    <SignInContainer>
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
        <ButtonContainer>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.base}
            attributes={{
              type: "submit",
            }}
          >
            Sign In
          </Button>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.google}
            attributes={{ type: "button", onClick: logGoogleUser }}
          >
            Sign in with google
          </Button>
        </ButtonContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
