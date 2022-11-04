import { Text, TouchableOpacity, View } from "react-native";
import { IButton } from "../../interfaces";
import { button } from "../../styles/styles";

export default function Button({
    onPressFunc, 
    buttonText, 
    btnMarginTop, 
    icon
  } : IButton) {
    
  return (
    <TouchableOpacity activeOpacity={0.8} style={[button.container, {marginTop: btnMarginTop}]} onPress={onPressFunc} >
      {icon && 
        <View style={{marginRight: 10}}>{icon}</View>
      }
      <Text style={button.text} >
        {buttonText}
      </Text>
    </TouchableOpacity>
  )
}