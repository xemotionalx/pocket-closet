import { Auth } from "aws-amplify";
import { router } from "expo-router";

export type SignUpParameters = {
  password: string;
  email: string;
};

async function handleSignUp({ password, email }: SignUpParameters) {
  try {
    const response = await Auth.signUp({
      username: email,
      password,
      attributes: {
        email,
      },
      autoSignIn: {
        enabled: true,
      },
    });

    router.replace({ pathname: "/auth/confirm", params: { email } });

    console.log(response);
  } catch (error) {
    console.log("error signing up:", error);
  }
}

export default handleSignUp;
