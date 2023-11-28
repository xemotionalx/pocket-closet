import { Auth } from "aws-amplify";
import { router } from "expo-router";

export type SignInParameters = {
  password: string;
  email: string;
};

export async function handleSignIn({ password, email }: SignInParameters) {
  try {
    await Auth.signIn({
      username: email,
      password,
    });

    router.replace("/closet");
  } catch (error) {
    console.log("error signing in:", error);
  }
}
