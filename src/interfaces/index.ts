export interface IScanned {
  type: string
  data: string
}

export interface IError {
  message: string
  onPressFunc?: ()=> void
}

export interface IButton {
  onPressFunc?: () => void
  buttonText: string
  btnMarginTop?: number
}

export interface IScanner {
  scanned: boolean
  data: string
  handleCheckScanned: ({type, data}: IScanned) => void
  scanAgain: () => void
}