import { signUp } from "@aws-amplify/auth";

type SignUpParameters = {
  password: string;
  email: string;
};

async function handleSignUp({ password, email }: SignUpParameters) {
  try {
    const { isSignUpComplete, userId, nextStep } = await signUp({
      username: email,
      password,
      options: {
        userAttributes: {
          email,
        },
        // optional
        autoSignIn: true, // or SignInOptions e.g { authFlowType: "USER_SRP_AUTH" }
      },
    });

    console.log(userId);
  } catch (error) {
    console.log("error signing up:", error);
  }
}

export default handleSignUp;
