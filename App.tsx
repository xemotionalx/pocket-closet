import { AuthScreen } from "./src/screens/AuthScreen/auth.screen";
import * as SplashScreen from "expo-splash-screen";
import { TamaguiProvider } from "tamagui";
import config from "./tamagui.config";
import "@tamagui/core/reset.css";
import { useEffect } from "react";
import { useCustomFonts } from "./src/hooks/useCustomFonts";

SplashScreen.preventAutoHideAsync();

export default function App() {
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
      <AuthScreen />
    </TamaguiProvider>
  );
}