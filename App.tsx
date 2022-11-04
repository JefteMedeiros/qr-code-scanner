import { useEffect, useState } from 'react';

import { BarCodeScanner, PermissionStatus } from 'expo-barcode-scanner';

import { IScanned } from './src/interfaces';

import Layout from './src/layout/layout';
import Error from './src/components/Error';
import Scanner from './src/components/Scanner';

export default function App() {
  const [hasPermision, setHasPermision] = useState(false)
  const [scanned, setScanned] = useState(false)
  const [text, setText] = useState('Ainda não escaneado')

  const handleSetScanned = () => {
    setScanned(false)
    setText('Ainda não escaneado')
  }

  const isCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync()
        setHasPermision(status == PermissionStatus.GRANTED)
    })()
  }

  const handleCheckScanned = ({ type, data }: IScanned) => {
    setScanned(true)
    setText(data)
    console.log('Type: ' + type + '\n' + 'Data:' + data)
  }

  useEffect(() => {
    isCameraPermission()
  }, [])

  if(hasPermision === false) {
    return (
      <Layout>
        <Error
          onPressFunc={isCameraPermission}
          message='Por favor, ative a permissão de uso de câmera em seu dispositivo.'
        />
      </Layout>
    ) 
  }

  return (
    <Layout>
      <Scanner
        scanAgain={handleSetScanned}
        data={text}
        scanned={scanned}
        handleCheckScanned={handleCheckScanned}
      />
    </Layout>
  );
}
