import { SetToastMessage } from '@pages/_app'
import { createContext, useContext } from 'react'

export const ToastMessageContext = createContext<SetToastMessage>(() => 1)

export const useToastMessage = () => useContext(ToastMessageContext)
