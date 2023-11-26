import { SafeAreaView, Text, TextInput, View } from "react-native";
import styles from "./auth.module.css";
import { Button, Input } from "tamagui";

export const AuthScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Input placeholder="email" width={200} />
      <Input placeholder="password" width={200} />
      <Button width={200}>log in</Button>
      <Button width={200}>create account</Button>
    </SafeAreaView>
  );
};
