import { useFonts } from "expo-font";

export const useCustomFonts = () => {
  return useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });
};
