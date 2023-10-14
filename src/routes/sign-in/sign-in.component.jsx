import {
  // auth,
  signInWithGooglePopup,
  createUserDocFromAuth,
} from "../../utils/firebase/firebase.utils";

import SignUp from "../../components/sign-up-form/sign-up-form.component";
import Button from "../../components/button/button.component";

const SignIn = () => {
  const logGoogleUser = async () => {
    try {
      const { user } = await signInWithGooglePopup();
      await createUserDocFromAuth(user);
    } catch (error) {
      console.log(error);
    }
  };

  const buttonAttributes = { type: "button", onClick: logGoogleUser };

  return (
    <div
      style={{ display: "flex", flexDirection: "row", justifyContent : "space-evenly" , alignItems: "center" }}
    >
      <div>
        <h1>Sign in</h1>
        <Button buttonType="google" attributes={buttonAttributes}>
          Sign in with google
        </Button>
      </div>
      <div>
        <SignUp />
      </div>
    </div>
  );
};

export default SignIn;
