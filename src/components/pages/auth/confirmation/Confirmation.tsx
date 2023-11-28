import { SafeAreaView, Text } from "react-native";
import { Button, Input } from "tamagui";
import { Controller, useForm } from "react-hook-form";
import { useLocalSearchParams } from "expo-router";

import handleConfirm from "./handleConfirmation";

import styles from "./confirmation.module.css";

type FormDataType = {
  code: string;
};

export const Confirmation = () => {
  const params = useLocalSearchParams();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      code: "",
    },
  });

  const onSubmit = (data: FormDataType) => {
    if (typeof params.email === "string")
      handleConfirm({ email: params.email, code: data.code });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Controller
        name="code"
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            placeholder="password"
            width={200}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            borderColor={errors.code ? "#eb3498" : "black"}
            backgroundColor={errors.code ? "#f7b7da" : "white"}
            focusStyle={{
              borderColor: errors.code ? "#eb3498" : "purple",
              backgroundColor: "white",
            }}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
          />
        )}
      />
      <Text style={{ color: "#eb3498" }}>
        {errors.code && "code is required."}
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
