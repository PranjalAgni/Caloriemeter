import { useColorScheme } from "react-native";

export const textColor = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return isDarkMode ? "#fff" : "#000";
}

export const backgroundColor = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return !isDarkMode ? "#fff" : "#000";
}