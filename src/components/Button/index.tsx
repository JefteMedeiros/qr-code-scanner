import { Text, TouchableOpacity } from "react-native";
import { IButton } from "../../interfaces";
import { button } from "../../styles/styles";

export default function Button({onPressFunc, buttonText}: IButton){
  return (
    <TouchableOpacity activeOpacity={0.8} style={button.container} onPress={() => onPressFunc} >
      <Text style={button.text} >
        {buttonText}
      </Text>
    </TouchableOpacity>
  )
}