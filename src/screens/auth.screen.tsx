import { SafeAreaView, Text, TextInput, View } from "react-native";
import styles from "./screen.module.css";
import { Input } from "tamagui";

export const AuthScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Input placeholder="email" />
      <Input placeholder="password" />
    </SafeAreaView>
  );
};
