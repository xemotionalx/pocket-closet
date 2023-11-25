import { AuthScreen } from "./src/screens/AuthScreen/auth.screen";
import "@tamagui/core/reset.css";

import { TamaguiProvider } from "tamagui";

import config from "./tamagui.config";

export default function App() {
  return (
    <TamaguiProvider config={config}>
      <AuthScreen />
    </TamaguiProvider>
  );
}
