import { Text, View } from "react-native";

import { IError } from "../../interfaces";

import { error } from "../../styles/styles";

import Button from "../Button";

export default function Error({ message, onPressFunc } : IError) {
  return (
    <View style={error.container}>
      <Text style={error.message} >
        {message}
      </Text>
      <Button buttonText='Permitir acesso' onPressFunc={onPressFunc} />
    </View>
  )
}