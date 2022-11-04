import { ReactNode } from "react"

export interface IScanned {
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
  icon?: ReactNode
}

export interface IScanner {
  scanned: boolean
  data: string
  handleCheckScanned: ({data}: IScanned) => void
  scanAgain: () => void
}