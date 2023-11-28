import { Auth } from "aws-amplify";

type SignUpParameters = {
  password: string;
  email: string;
};

async function handleSignUp({ password, email }: SignUpParameters) {
  try {
    const response = await Auth.signUp({
      username: email,
      password,
    });

    console.log(response);
  } catch (error) {
    console.log("error signing up:", error);
  }
}

export default handleSignUp;
