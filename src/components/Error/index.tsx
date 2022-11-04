import { Text, View } from "react-native";

import AntDesign from '@expo/vector-icons/AntDesign'

import { IError } from "../../interfaces";

import { error } from "../../styles/styles";

import Button from "../Button";

export default function Error({ message, onPressFunc } : IError) {
  return (
    <View style={error.container}>
      <Text style={error.message} >
        {message}
      </Text>
      <Button 
          icon={
            <AntDesign 
              name='loading1' 
              size={12} 
              color='white'
            />
          } 
          btnMarginTop={25} 
          buttonText='Permitir acesso' 
          onPressFunc={onPressFunc} 
        />
    </View>
  )
}