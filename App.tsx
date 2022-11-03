import { useEffect, useState } from 'react';
import { SafeAreaView, Text } from 'react-native';

import { BarCodeScanner, PermissionStatus } from 'expo-barcode-scanner';

import { header } from './src/styles/styles'
import { IScanned } from './src/interfaces/interfaces';
import Layout from './src/layout/layout';
import Error from './src/components/Error';

export default function App() {
  const [hasPermision, setHasPermision] = useState(false)
  const [scanned, setScaned] = useState(false)
  const [text, setText] = useState('Not yet scanned')

  const isCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync()
        setHasPermision(status == PermissionStatus.GRANTED)
    })()
  }

  const handleCheckScanned = ({ type, data }: IScanned) => {
    setScaned(true)
    setText(data)
    console.log('Type: ' + type + '\n' + 'Data:' + data)
  }

  useEffect(() => {
    isCameraPermission()
  }, [])

  if(hasPermision === false) {
    return (
      <Error
        buttonTitle='Allow Camera'
        onPress={isCameraPermission}
        message='Por favor, ative a permissão de uso de câmera em seu dispositivo.'
      />
    ) 
  }

  return (
    <Layout>
      <SafeAreaView style={header.container} >
        <Text style={header.title} >
          CODE MASTER
        </Text>
      </SafeAreaView>
    </Layout>
  );
}
