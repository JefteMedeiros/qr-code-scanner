import { Button, Text, View } from "react-native";
import Layout from "../../layout/layout";
import { error } from "../../styles/styles";

interface IError {
  message: string
  buttonTitle: string,
  onPress: () => void,
}

export default function Error({ message, onPress, buttonTitle } : IError) {
  return (
    <Layout>
      <View style={error.container}>
        <Text style={error.message} >
          {message}
        </Text>
        <Button title={buttonTitle} onPress={() => onPress()} />
      </View>
    </Layout>
  )
}