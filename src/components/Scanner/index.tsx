import { Text, View } from "react-native"

import { BarCodeScanner } from "expo-barcode-scanner"

import { IScanner } from "../../interfaces"

import { scanner } from "../../styles/styles"
import Button from "../Button"

export default function Scanner({
    scanned,
    handleCheckScanned,
    data, 
    scanAgain 
  }: IScanner) {
  
    return (
    <View style={scanner.container} >
      <Text style={scanner.text} >
        Aponte a camera para o código de barras ou código QR.
      </Text>
      <View style={scanner.scannerBox} >
        <BarCodeScanner
          style={{width: 400, height: 400}}
          onBarCodeScanned={scanned ? undefined : handleCheckScanned}
        />
      </View>
      <Text selectable={true} style={scanner.text} >
        {data}
      </Text>
      {scanned && <Button btnMarginTop={0} onPressFunc={scanAgain} buttonText='Escanear Novamente' />}
    </View>
  )
}