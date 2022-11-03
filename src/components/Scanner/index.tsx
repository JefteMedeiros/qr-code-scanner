import { Text, View } from "react-native"

import { BarCodeScanner } from "expo-barcode-scanner"

import { IScanner } from "../../interfaces"

import { scanner } from "../../styles/styles"
import Button from "../Button"

export default function Scanner({ scanned, handleCheckScanned, data, onPressFunc }: IScanner) {
  return (
    <View style={scanner.container} >
      <Text style={scanner.title} >
        Aponte a camera para o código de barras ou código QR.
      </Text>
      <View style={scanner.scannerBox} >
        <BarCodeScanner
          style={{width: 400, height: 400}}
          onBarCodeScanned={scanned ? undefined : handleCheckScanned}
        />
      </View>
      <Text>
        {data}
      </Text>
      {scanned && <Button onPressFunc={onPressFunc} buttonText='Escanear Novamente' />}
    </View>
  )
}