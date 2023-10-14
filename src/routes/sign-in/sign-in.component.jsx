import {
  // auth,
  signInWithGooglePopup,
  createUserDocFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    try {
      const { user } = await signInWithGooglePopup();
      await createUserDocFromAuth(user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Sign in</h1>
      <button onClick={logGoogleUser}>Sign in with google</button>
    </div>
  );
};

export default SignIn;
