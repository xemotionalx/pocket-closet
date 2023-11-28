import { SafeAreaView, Text, TextInput, View } from "react-native";
import styles from "./auth.module.css";
import { Button, Form, Input } from "tamagui";
import { Controller, useForm } from "react-hook-form";
import { signUp } from "@aws-amplify/auth";
import { Link } from "expo-router";
import handleSignUp from "../../../api/signUp";

const isValidEmail = (email) =>
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );

type FormDataType = {
  email: string;
  password: string;
};

export const AuthPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: FormDataType) => {
    console.log(data);
    handleSignUp({ password: data.password, email: data.email });
  };

  const handleEmailValidation = (email) => {
    console.log("ValidateEmail was called with", email);

    const isValid = isValidEmail(email);

    const validityChanged =
      (errors.email && isValid) || (!errors.email && !isValid);
    if (validityChanged) {
      console.log("Fire tracker with", isValid ? "Valid" : "Invalid");
    }

    return isValid;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Controller
        name="email"
        control={control}
        rules={{ required: true, validate: handleEmailValidation }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            placeholder="email"
            width={200}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            borderStyle="solid"
            backgroundColor={errors.email ? "#f7b7da" : "white"}
            borderColor={errors.email ? "#eb3498" : "black"}
            focusStyle={{
              borderColor: errors.email ? "#eb3498" : "purple",
              backgroundColor: "white",
            }}
          />
        )}
      />
      <Text style={{ color: "#eb3498" }}>
        {errors.email && "email is required."}
      </Text>
      <Controller
        name="password"
        control={control}
        rules={{
          required: true,
          minLength: {
            value: 8,
            message: "password must have at least 8 characters",
          },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            placeholder="password"
            width={200}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            borderColor={errors.password ? "#eb3498" : "black"}
            backgroundColor={errors.password ? "#f7b7da" : "white"}
            focusStyle={{
              borderColor: errors.password ? "#eb3498" : "purple",
              backgroundColor: "white",
            }}
          />
        )}
      />
      <Text style={{ color: "#eb3498" }}>
        {errors.password && "password is required."}
      </Text>
      <Button
        width={200}
        onPress={handleSubmit(onSubmit)}
        borderColor={"$purple10"}
        backgroundColor={"$purple5"}
      >
        create account
      </Button>
      {/* <Link href="/closet">go to my closet</Link> */}
    </SafeAreaView>
  );
};
