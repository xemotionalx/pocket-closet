import { SafeAreaView } from "react-native";
import styles from "./auth.module.css";
import { Link } from "expo-router";

export const AuthPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Link href="/auth/sign-in">i want to sign in</Link>
      <Link href="/auth/sign-up">i want to sign up</Link>
    </SafeAreaView>
  );
};
