import { StatusBar } from "expo-status-bar";
import { ReactNode } from "react";
import { View } from "react-native";
import { layout } from "../styles/styles";

export default function Layout({ children }: { children:ReactNode }) {
  return (
    <View style={layout.container} >
      {children}
      <StatusBar />
    </View>
  )
}