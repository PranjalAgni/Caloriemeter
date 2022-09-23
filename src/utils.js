import { useColorScheme } from "react-native";

export const textColor = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return "#000";
  return isDarkMode ? "#fff" : "#000";
}

export const backgroundColor = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return "#eee";
  return !isDarkMode ? "#fff" : "#000";
}