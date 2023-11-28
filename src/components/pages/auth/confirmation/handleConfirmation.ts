import { Auth } from "aws-amplify";
import { router } from "expo-router";

export type ConfirmParameters = {
  code: string;
  email: string;
};

async function handleConfirm({ code, email }: ConfirmParameters) {
  try {
    const response = await Auth.confirmSignUp(email, code);
    router.replace({ pathname: "/auth/confirm", params: { email } });

    console.log(response);

    router.replace("/closet");
  } catch (error) {
    console.log("error signing up:", error);
  }
}

export default handleConfirm;
