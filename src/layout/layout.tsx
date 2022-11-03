import { ReactNode } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { header, layout } from "../styles/styles";

export default function Layout({ children }: { children:ReactNode }) {
  return (
    <View style={layout.container} >
      <SafeAreaView style={header.container} >
        <Text style={header.title} >
          CODE MASTER
        </Text>
      </SafeAreaView>
      <View style={layout.content} >
        {children}
      </View>
    </View>
  )
}