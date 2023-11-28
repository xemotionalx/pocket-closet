import { SafeAreaView, Text } from "react-native";
import { Button, Input } from "tamagui";
import { Controller, useForm } from "react-hook-form";

import handleSignUp, { SignUpParameters } from "./handleSignUp";

import styles from "./sign-up.module.css";
import { isValidEmail } from "@utils/isValidEmail";

export const SignUp = () => {
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

  const onSubmit = (data: SignUpParameters) => {
    console.log(data);
    handleSignUp({ password: data.password, email: data.email });
  };

  const handleEmailValidation = (email: string) => {
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
      <Text style={styles.title}>Sign Up</Text>
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
            keyboardType="email-address"
            focusStyle={{
              borderColor: errors.email ? "#eb3498" : "purple",
              backgroundColor: "white",
            }}
            textContentType="emailAddress"
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
            secureTextEntry={true}
            textContentType="password"
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
    </SafeAreaView>
  );
};
