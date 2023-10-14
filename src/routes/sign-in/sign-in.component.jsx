// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";
import {
  // auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  // useEffect(() => {
  //   const fetchRedirect = async () => {
  //     try {
  //       const response = await getRedirectResult(auth);

  //       if (response) {
  //         await createUserDocFromAuth(response.user);
  //       }

  //       return;
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   };

  //   fetchRedirect();
  // }, []);

  const logGoogleUser = async () => {
    try {
      const { user } = await signInWithGooglePopup();
      await createUserDocFromAuth(user);
    } catch (error) {
      console.log(error);
    }
  };
  const logGoogleUserRedirect = async () => {
    try {
      const { user } = await signInWithGoogleRedirect();
      // await createUserDocFromAuth(user);
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Sign in</h1>
      <button onClick={logGoogleUser}>Sign in with google</button>
      <button onClick={logGoogleUserRedirect}>
        Sign in with google redirect
      </button>
    </div>
  );
};

export default SignIn;
