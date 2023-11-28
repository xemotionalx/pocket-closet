import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { TamaguiProvider } from "tamagui";
import config from "../tamagui.config";
import "@tamagui/core/reset.css";
import { useEffect } from "react";
import { useCustomFonts } from "../src/hooks/useCustomFonts";
import { LogBox } from "react-native";
import { Amplify } from "aws-amplify";
import awsExports from "../src/aws-exports";

Amplify.configure(awsExports);

SplashScreen.preventAutoHideAsync();

// hide error for known issue with expo fonts from tamagui
LogBox.ignoreLogs(['fontFamily "Inter" is not a system font']);

export default function Layout() {
  const [customFontsLoaded] = useCustomFonts();

  useEffect(() => {
    const onLoad = async () => {
      if (customFontsLoaded) {
        await new Promise((resolve) => setTimeout(resolve, 2500));
        await SplashScreen.hideAsync();
      }
    };
    onLoad();
  }, [customFontsLoaded]);

  if (!customFontsLoaded) {
    return null;
  }

  return (
    <TamaguiProvider config={config}>
      <Stack />
    </TamaguiProvider>
  );
}
